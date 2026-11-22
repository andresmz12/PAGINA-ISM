# ISM Consulting Services – sitio web

Mismo diseño que ismconsultores.com, optimizado y desplegado en Railway.
- HTML pre-renderizado + `app.js` precompilado, fotos WebP locales (`img/`), carga diferida
- `server.js`: servidor sin dependencias con compresión brotli/gzip, caché y `POST /api/contact`
- Accesibilidad (etiquetas, `<main>`, contraste, nombres de enlaces), `?lang=en` abre el sitio en inglés
- `og-image.jpg` para compartir en WhatsApp/Facebook

## Recibir las solicitudes por correo (Resend)
En Railway → Variables del servicio:
- `RESEND_API_KEY` (cuenta gratis en resend.com)
- `CONTACT_TO` (opcional, por defecto Info@ismconsultores.com)
- `CONTACT_FROM` (opcional; con dominio verificado, ej. `ISM Web <web@ismconsultores.com>`)

Sin `RESEND_API_KEY` el formulario abre WhatsApp con el mensaje listo.
