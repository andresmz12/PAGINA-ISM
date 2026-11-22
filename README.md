# ISM Consulting Services – sitio web

Mismo diseño que ismconsultores.com, optimizado para velocidad:
- HTML pre-renderizado (se ve sin esperar al JavaScript) + `app.js` precompilado
- Fotos locales en WebP (`img/`), con carga diferida; foto principal con prioridad
- Fuentes sin bloquear el render, `.htaccess` con compresión, caché y HTTPS
- Formulario que abre WhatsApp con el mensaje listo

Subir a Hostinger (public_html): `index.html`, `app.js`, `logo.jpeg`, `img/`, `.htaccess`, `robots.txt`, `sitemap.xml`.
