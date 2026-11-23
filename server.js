// Servidor estático sin dependencias: compresión gzip/brotli + caché.
const http = require('http'), fs = require('fs'), path = require('path'), zlib = require('zlib');
const ROOT = __dirname, PORT = process.env.PORT || 3000;
const TYPES = { '.html':'text/html; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.webp':'image/webp', '.jpeg':'image/jpeg', '.jpg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml',
  '.xml':'application/xml', '.txt':'text/plain; charset=utf-8', '.ico':'image/x-icon' };
const PUBLIC = new Set(['index.html','app.js','logo.jpeg','og-image.jpg','privacidad.html','robots.txt','sitemap.xml']);
const cache = new Map();

function load(rel) {
  if (cache.has(rel)) return cache.get(rel);
  const file = path.join(ROOT, rel);
  let entry = null;
  try {
    const buf = fs.readFileSync(file), ext = path.extname(rel);
    const compressible = /html|javascript|css|xml|text|svg/.test(TYPES[ext] || '');
    entry = { buf, type: TYPES[ext] || 'application/octet-stream',
      br: compressible ? zlib.brotliCompressSync(buf) : null, gz: compressible ? zlib.gzipSync(buf, {level:9}) : null,
      etag: '"' + require('crypto').createHash('md5').update(buf).digest('hex') + '"',
      cc: ext === '.html' ? 'no-cache' : (rel.startsWith('img/') || ext === '.jpeg' || ext === '.jpg') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600' };
  } catch (e) {}
  cache.set(rel, entry);
  return entry;
}


// ── Formulario de contacto → correo (Resend). Variables: RESEND_API_KEY, CONTACT_TO, CONTACT_FROM
const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c])).slice(0, 2000);
const hits = new Map();
function contact(req, res) {
  const send = (code, obj) => { res.writeHead(code, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(obj)); };
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  const now = Date.now(), recent = (hits.get(ip) || []).filter(t => now - t < 600000);
  if (recent.length >= 5) return send(429, { ok: false });
  hits.set(ip, [...recent, now]);
  let raw = '';
  req.on('data', c => { raw += c; if (raw.length > 20000) req.destroy(); });
  req.on('end', async () => {
    let d; try { d = JSON.parse(raw); } catch (e) { return send(400, { ok: false }); }
    if (d.website) return send(200, { ok: true });                       // honeypot anti-spam
    if (!d.email || !/^\S+@\S+\.\S+$/.test(d.email)) return send(400, { ok: false });
    if (!process.env.RESEND_API_KEY) return send(503, { ok: false, reason: 'not-configured' });
    const rows = [['Nombre', d.nombre], ['Correo', d.email], ['Teléfono', d.telefono], ['Servicio', d.servicio], ['Mensaje', d.mensaje]]
      .map(([k, v]) => `<p><b>${k}:</b> ${esc(v) || '-'}</p>`).join('');
    try {
      const r = await fetch('https://api.resend.com/emails', { method: 'POST',
        headers: { Authorization: 'Bearer ' + process.env.RESEND_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: process.env.CONTACT_FROM || 'ISM Web <onboarding@resend.dev>', to: [process.env.CONTACT_TO || 'Info@ismconsultores.com'],
          reply_to: d.email, subject: 'Nueva solicitud — ismconsultores.com', html: rows }) });
      return send(r.ok ? 200 : 502, { ok: r.ok });
    } catch (e) { return send(502, { ok: false }); }
  });
}
http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/contact') return contact(req, res);
  let rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html';
  const clean = rel.replace(/\/$/, '');
  if (/^blog(\/en)?$/.test(clean)) rel = clean + '/index.html';                 // /blog/ y /blog/en/
  else if (/^blog\/(en\/)?[\w-]+$/.test(clean)) rel = clean + '.html';          // /blog/slug
  else if (rel === 'blog/blog.css') { /* estilos del blog */ }
  else if (!(PUBLIC.has(rel) || /^img\/[\w.-]+\.webp$/.test(rel))) rel = 'index.html';
  const f = load(rel);
  if (!f) { res.writeHead(404); return res.end('Not found'); }
  const h = { 'Content-Type': f.type, 'Cache-Control': f.cc, ETag: f.etag, Vary: 'Accept-Encoding', 'X-Content-Type-Options': 'nosniff' };
  if (req.headers['if-none-match'] === f.etag) { res.writeHead(304, h); return res.end(); }
  const ae = req.headers['accept-encoding'] || '';
  let body = f.buf;
  if (f.br && /\bbr\b/.test(ae)) { h['Content-Encoding'] = 'br'; body = f.br; }
  else if (f.gz && /\bgzip\b/.test(ae)) { h['Content-Encoding'] = 'gzip'; body = f.gz; }
  h['Content-Length'] = body.length;
  res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : body);
}).listen(PORT, () => console.log('ISM web en puerto ' + PORT));
