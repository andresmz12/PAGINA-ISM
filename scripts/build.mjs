// Reconstruye el sitio: app.js, index.html (pre-renderizado), blog/*.html y sitemap.xml
// Uso: npm install && npm run build:site
import { build } from 'esbuild';
import { createRequire } from 'module';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { ARTICLES, CATEGORIES } from '../src/articles.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://ismconsultores.com';
const WA = 'https://wa.me/13124989026';
const p = (...a) => path.join(ROOT, ...a);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const slugify = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// 1) Resumen ligero de artículos para la página principal
const meta = {};
for (const l of ['es', 'en']) meta[l] = ARTICLES[l].map(({ slug, cat, title, excerpt, date, time, img }) => ({ slug, cat, title, excerpt, date, time, img }));
fs.writeFileSync(p('src/blogmeta.json'), JSON.stringify(meta));

// 2) Bundle del navegador
await build({ entryPoints: [p('src/app.jsx')], bundle: true, minify: true, jsx: 'transform', outfile: p('app.js'),
  define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'warning' });

// 3) Pre-render (SSR)
const tmp = path.join(os.tmpdir(), 'ism-ssr-' + Date.now() + '.cjs');
await build({ entryPoints: [p('src/ssr.jsx')], bundle: true, platform: 'node', format: 'cjs', jsx: 'transform', outfile: tmp,
  define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'warning', nodePaths: [p('node_modules')] });
globalThis.window = globalThis; globalThis.localStorage = { getItem: () => null, setItem() {} }; globalThis.location = { search: '' };
const { html: ssr } = createRequire(import.meta.url)(tmp);
fs.unlinkSync(tmp);
fs.writeFileSync(p('index.html'), fs.readFileSync(p('src/template.html'), 'utf8').replace('<!--ROOT-->', () => ssr));

// 4) Páginas del blog
const UI = {
  es: { home: 'Inicio', services: 'Servicios', blog: 'Blog', contact: 'Contacto', cta: 'Consulta gratuita', all: 'Todos los artículos',
    h1: 'Guías de impuestos, ITIN y negocios', sub: 'Información clara, en español, para declarar mejor, cumplir con el IRS y hacer crecer su negocio en EE. UU.',
    filter: 'Filtrar por tema', min: 'de lectura', read: 'Leer artículo', byline: 'Equipo ISM Consulting', takeaways: 'Puntos clave', toc: 'En este artículo',
    share: 'Compartir', copy: 'Copiar enlace', copied: '¡Copiado!', related: 'Siga leyendo', ctaT: '¿Necesita ayuda con este tema?', ctaP: 'Escríbanos por WhatsApp. La primera consulta es gratuita y sin compromiso.',
    ctaB: 'Hablar con un asesor', side: 'Hable con un asesor', sideP: 'Consulta gratuita, en español.', disc: 'La información de este sitio es orientativa y no constituye asesoría legal.',
    privacy: 'Política de privacidad', rights: 'Todos los derechos reservados.', updated: 'Actualizado', desc: 'Guías en español sobre impuestos, ITIN, LLC y cumplimiento con el IRS para la comunidad hispana en EE. UU.' },
  en: { home: 'Home', services: 'Services', blog: 'Blog', contact: 'Contact', cta: 'Free consultation', all: 'All articles',
    h1: 'Guides on taxes, ITIN and business', sub: 'Clear information to file better, stay compliant with the IRS and grow your business in the U.S.',
    filter: 'Filter by topic', min: 'read', read: 'Read article', byline: 'ISM Consulting Team', takeaways: 'Key takeaways', toc: 'In this article',
    share: 'Share', copy: 'Copy link', copied: 'Copied!', related: 'Keep reading', ctaT: 'Need help with this topic?', ctaP: 'Message us on WhatsApp. The first consultation is free and with no commitment.',
    ctaB: 'Talk to an advisor', side: 'Talk to an advisor', sideP: 'Free consultation, in Spanish.', disc: 'The information on this site is for guidance only and is not legal advice.',
    privacy: 'Privacy policy', rights: 'All rights reserved.', updated: 'Updated', desc: 'Guides on taxes, ITIN, LLCs and IRS compliance for the Hispanic community in the U.S.' }
};
const base = l => (l === 'es' ? '/blog/' : '/blog/en/');
const WA_ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.34-1.66a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.8 11.8 0 0 0-3.48-8.4"/></svg>';

function layout({ lang, title, desc, canonical, alt, body, ld = [], image = SITE + '/og-image.jpg', type = 'website', current }) {
  const u = UI[lang];
  const altLang = lang === 'es' ? 'en' : 'es';
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
${alt ? `<link rel="alternate" hreflang="${lang}" href="${canonical}">\n<link rel="alternate" hreflang="${altLang}" href="${alt}">\n<link rel="alternate" hreflang="x-default" href="${lang === 'es' ? canonical : alt}">` : ''}
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="ISM Consulting Services">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${image}">
<meta property="og:locale" content="${lang === 'es' ? 'es_US' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#000205">
<link rel="icon" href="/logo.jpeg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'">
<link rel="stylesheet" href="/blog/blog.css">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head>
<body>
<a class="skip" href="#main">${lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}</a>
<header class="top"><div class="top-in">
  <a class="logo" href="/" aria-label="ISM Consulting Services"><img src="/logo.jpeg" width="40" height="40" alt="ISM Consulting Services"></a>
  <nav class="links" aria-label="${lang === 'es' ? 'Principal' : 'Main'}">
    <a class="hide-m" href="/">${u.home}</a><a class="hide-m" href="/#servicios">${u.services}</a>
    <a class="keep" href="${base(lang)}"${current === 'blog' ? ' aria-current="page"' : ''}>${u.blog}</a><a class="hide-m" href="/#contacto">${u.contact}</a>
    ${alt ? `<span class="lang" role="group" aria-label="Language"><span class="on">${lang.toUpperCase()}</span><a href="${alt.replace(SITE, '')}" hreflang="${altLang}" lang="${altLang}">${altLang.toUpperCase()}</a></span>` : ''}
    <a class="btn keep" href="${WA}" target="_blank" rel="noopener">${u.cta}</a>
  </nav>
</div></header>
${body}
<footer><div class="in">
  <div><strong style="color:#fff">ISM Consulting Services</strong><br>Chicago, IL · <a href="mailto:Info@ismconsultores.com">Info@ismconsultores.com</a> · <a href="tel:+13124989026">+1 (312) 498-9026</a></div>
  <div><a href="/">${u.home}</a> · <a href="${base(lang)}">${u.blog}</a> · <a href="/privacidad.html">${u.privacy}</a></div>
</div><p class="fine">© 2026 ISM Consulting Services. ${u.rights} ${u.disc}</p></footer>
<a class="wa" href="${WA}" target="_blank" rel="noopener" aria-label="WhatsApp">${WA_ICON}</a>
</body></html>`;
}

const org = { '@type': 'Organization', name: 'ISM Consulting Services', url: SITE, logo: { '@type': 'ImageObject', url: SITE + '/logo.jpeg' } };
const imgAbs = i => SITE + '/' + i;
const cardHtml = (a, lang, feat = false) => `<a class="card${feat ? ' feat' : ''}" href="${base(lang)}${a.slug}" data-cat="${esc(a.catKey)}">
  <div class="im"><img src="/${a.img}" alt="" width="800" height="450" loading="${feat ? 'eager' : 'lazy'}" decoding="async"></div>
  <div class="bd"><span class="cat">${esc(a.cat)}</span><h3>${esc(a.title)}</h3><p>${esc(a.excerpt)}</p>
  <div class="meta"><span>${esc(a.date)}</span><span class="dot"></span><span>${a.time} ${UI[lang].min}</span></div></div></a>`;

function writeFile(rel, content) { fs.mkdirSync(path.dirname(p(rel)), { recursive: true }); fs.writeFileSync(p(rel), content); }
const urls = [];

for (const lang of ['es', 'en']) {
  const u = UI[lang], list = ARTICLES[lang], other = ARTICLES[lang === 'es' ? 'en' : 'es'];
  const idxPath = base(lang), idxUrl = SITE + idxPath, altIdx = SITE + base(lang === 'es' ? 'en' : 'es');

  // Índice
  const cats = CATEGORIES[lang];
  const body = `<main id="main"><div class="wrap">
  <div class="crumbs"><a href="/">${u.home}</a><span>/</span>${u.blog}</div>
  <div class="hero-b"><span class="cat">Blog</span><h1>${u.h1}</h1><p>${u.sub}</p></div>
  <div class="chips" role="group" aria-label="${u.filter}">${cats.map((c, i) => `<button class="chip" type="button" data-f="${i === 0 ? '' : esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join('')}</div>
  <div class="grid" id="grid">${list.map((a, i) => cardHtml(a, lang, i === 0)).join('')}</div>
</div></main>
<script>(function(){var b=document.querySelectorAll('.chip'),c=document.querySelectorAll('#grid .card');b.forEach(function(x){x.addEventListener('click',function(){var f=x.getAttribute('data-f');b.forEach(function(y){y.setAttribute('aria-pressed',y===x)});var first=true;c.forEach(function(k){var show=!f||k.getAttribute('data-cat')===f;k.hidden=!show;k.classList.toggle('feat',show&&first&&!f);if(show)first=false})})})})();</script>`;
  writeFile(idxPath.slice(1) + 'index.html', layout({ lang, title: `${u.h1} | ISM Consulting Services`, desc: u.desc, canonical: idxUrl, alt: altIdx, current: 'blog', body,
    ld: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'ISM Consulting Services — Blog', url: idxUrl, inLanguage: lang, publisher: org,
      blogPost: list.map(a => ({ '@type': 'BlogPosting', headline: a.title, url: SITE + base(lang) + a.slug, datePublished: a.ts })) }] }));
  urls.push({ loc: idxUrl, alt: altIdx, lang, pri: '0.8', ts: list[0].ts });

  // Artículos
  for (const a of list) {
    const partner = other.find(o => o.key === a.key);
    const url = SITE + base(lang) + a.slug, altUrl = partner ? SITE + base(lang === 'es' ? 'en' : 'es') + partner.slug : null;
    let ids = [], html = '';
    for (const b of a.content) {
      if (b.type === 'p') html += `<p>${esc(b.text)}</p>`;
      else if (b.type === 'h3') { const id = slugify(b.text) || 'sec' + ids.length; ids.push([id, b.text]); html += `<h2 id="${id}">${esc(b.text)}</h2>`; }
      else if (b.type === 'ul') html += `<ul>${b.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
      else if (b.type === 'ol') html += `<ol>${b.items.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
      else if (b.type === 'note') html += `<div class="note">${esc(b.text)}</div>`;
    }
    const related = [...list.filter(x => x !== a && x.catKey === a.catKey), ...list.filter(x => x !== a && x.catKey !== a.catKey)].slice(0, 3);
    const shareTxt = encodeURIComponent(a.title + ' ' + url);
    const body = `<main id="main"><div class="progress" id="pg"></div><div class="wrap">
  <div class="crumbs"><a href="/">${u.home}</a><span>/</span><a href="${base(lang)}">${u.blog}</a><span>/</span>${esc(a.cat)}</div>
  <header class="art-head"><span class="cat">${esc(a.cat)}</span><h1>${esc(a.title)}</h1><p class="lead">${esc(a.excerpt)}</p>
    <div class="by"><img src="/logo.jpeg" alt="" width="40" height="40"><div><b>${u.byline}</b>${esc(a.date)} · ${a.time} ${u.min}</div></div></header>
  <div class="cover"><img src="/${a.img}" alt="" width="1200" height="420" fetchpriority="high"></div>
  <div class="layout"><article class="body" id="art">
    <div class="key"><h2>${u.takeaways}</h2><ul>${a.takeaways.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
    ${html}
    <div class="cta"><h2>${u.ctaT}</h2><p>${u.ctaP}</p><a class="btn" href="${WA}" target="_blank" rel="noopener">${u.ctaB}</a></div>
  </article>
  <aside>
    ${ids.length ? `<div class="box toc-box"><h2>${u.toc}</h2><ul class="toc">${ids.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('')}</ul></div>` : ''}
    <div class="box"><h2>${u.share}</h2><div class="share"><a href="https://wa.me/?text=${shareTxt}" target="_blank" rel="noopener">WhatsApp</a><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" rel="noopener">Facebook</a><button type="button" id="cp" data-ok="${u.copied}">${u.copy}</button></div></div>
    <div class="box side-cta"><h2>${u.side}</h2><p>${u.sideP}</p><a class="btn" href="${WA}" target="_blank" rel="noopener">${u.cta}</a></div>
  </aside></div>
  <section class="related" aria-labelledby="rel"><h2 id="rel">${u.related}</h2><div class="grid">${related.map(r => cardHtml(r, lang)).join('')}</div></section>
</div></main>
<script>(function(){var pg=document.getElementById('pg'),art=document.getElementById('art');function s(){var r=art.getBoundingClientRect(),t=r.height-innerHeight*.5;pg.style.width=Math.max(0,Math.min(100,(-r.top+innerHeight*.3)/t*100))+'%'}addEventListener('scroll',s,{passive:true});s();var cp=document.getElementById('cp');cp.addEventListener('click',function(){var o=cp.textContent;(navigator.clipboard?navigator.clipboard.writeText(location.href):Promise.reject()).then(function(){cp.textContent=cp.dataset.ok;setTimeout(function(){cp.textContent=o},1800)}).catch(function(){})});var l=document.querySelectorAll('.toc a');if('IntersectionObserver' in window&&l.length){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){l.forEach(function(x){x.classList.toggle('on',x.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-20% 0px -70% 0px'});document.querySelectorAll('.body h2[id]').forEach(function(h){io.observe(h)})}})();</script>`;
    writeFile(base(lang).slice(1) + a.slug + '.html', layout({ lang, title: `${a.title} | ISM Consulting Services`, desc: a.excerpt, canonical: url, alt: altUrl, current: 'blog', body, type: 'article', image: SITE + '/og-image.jpg',
      ld: [{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.title, description: a.excerpt, image: [imgAbs(a.img)], datePublished: a.ts, dateModified: a.ts, inLanguage: lang,
        mainEntityOfPage: url, author: { '@type': 'Organization', name: 'ISM Consulting Services', url: SITE }, publisher: org },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: u.home, item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: u.blog, item: idxUrl }, { '@type': 'ListItem', position: 3, name: a.title, item: url }] }] }));
    urls.push({ loc: url, alt: altUrl, lang, pri: '0.7', ts: a.ts });
  }
}

// 5) sitemap
const sm = fs.readFileSync(p('sitemap.xml'), 'utf8').replace(/\s*<!-- blog:start -->[\s\S]*<!-- blog:end -->/, '');
const blogXml = `\n  <!-- blog:start -->${urls.map(x => `
  <url>
    <loc>${x.loc}</loc>
    <lastmod>${x.ts}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${x.pri}</priority>${x.alt ? `
    <xhtml:link rel="alternate" hreflang="${x.lang}" href="${x.loc}"/>
    <xhtml:link rel="alternate" hreflang="${x.lang === 'es' ? 'en' : 'es'}" href="${x.alt}"/>` : ''}
  </url>`).join('')}\n  <!-- blog:end -->`;
fs.writeFileSync(p('sitemap.xml'), sm.replace('</urlset>', blogXml + '\n</urlset>'));
console.log('OK:', urls.length, 'páginas de blog');
