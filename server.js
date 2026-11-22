// Servidor estático sin dependencias: compresión gzip/brotli + caché.
const http = require('http'), fs = require('fs'), path = require('path'), zlib = require('zlib');
const ROOT = __dirname, PORT = process.env.PORT || 3000;
const TYPES = { '.html':'text/html; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.webp':'image/webp', '.jpeg':'image/jpeg', '.jpg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml',
  '.xml':'application/xml', '.txt':'text/plain; charset=utf-8', '.ico':'image/x-icon' };
const PUBLIC = new Set(['index.html','app.js','logo.jpeg','robots.txt','sitemap.xml']);
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
      cc: ext === '.html' ? 'no-cache' : (rel.startsWith('img/') || ext === '.jpeg') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600' };
  } catch (e) {}
  cache.set(rel, entry);
  return entry;
}

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html';
  if (!(PUBLIC.has(rel) || /^img\/[\w.-]+\.webp$/.test(rel))) rel = 'index.html';
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
