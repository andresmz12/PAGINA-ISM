# ISM Consulting Services – sitio web

Mismo diseño que ismconsultores.com, optimizado y desplegado en Railway (`npm start` → `server.js`).

## Estructura
- `src/` código fuente: `app.jsx` (página principal), `template.html`, `articles.mjs` + `articles.new.mjs` (artículos del blog, ES/EN)
- `scripts/build.mjs` genera `app.js`, `index.html` (pre-renderizado), `blog/*.html` y `sitemap.xml`
- `src/services.mjs` páginas de servicio (LLC, Taxes, Contabilidad) → `/servicios/...` y `/services/...`
- `blog/` artículos y índice (`/blog/` en español, `/blog/en/` en inglés), generados
- `server.js` servidor sin dependencias: compresión, caché, `POST /api/contact`

## Cambiar o agregar artículos
1. Edite `src/articles.new.mjs` (copie un artículo existente: slug, título, resumen, puntos clave y contenido, en `es` y en `en`).
2. `npm install` (una vez) y `npm run build:site`.
3. Suba los cambios: Railway redespliega solo.

## Recibir las solicitudes por correo (Resend)
Variables en Railway: `RESEND_API_KEY`, y opcionalmente `CONTACT_TO` y `CONTACT_FROM`.
Sin `RESEND_API_KEY` el formulario abre WhatsApp con el mensaje listo.
