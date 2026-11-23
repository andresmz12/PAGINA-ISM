import React from 'react';import ReactDOM from 'react-dom/client';

import BLOG from './blogmeta.json';
const { useState, useEffect } = React;

// ─── FORMULARIO ───
// Reemplace [TU_FORM_ID] con el ID de su formulario de Formspree (https://formspree.io).
// En el panel de Formspree configure el email de recepción: info@ismconsultores.com
// Alternativa: EmailJS (https://www.emailjs.com/).
const FORM_ENDPOINT = "https://formspree.io/f/[TU_FORM_ID]";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#000205",
  "lang": "es"
}/*EDITMODE-END*/;

// ─── Content ────────────────────────────────────────────────────
const C = {
  es: {
    nav: { servicios:'Servicios', nosotros:'Nosotros', plataformas:'Plataformas', apps:'Apps', recursos:'Recursos', contacto:'Contacto', cta:'Consulta gratuita' },
    hero: {
      eyebrow:'Consultoría contable · Chicago, IL',
      title1:'Contabilidad, impuestos',
      title2:'y LLC en español,',
      title3:'sin salir',
      title4:'de casa.',
      sub:'Atendemos a empresarios y familias hispanohablantes en todo EE. UU.: contabilidad, preparación de impuestos y formación de LLC, 100% en línea.',
      cta1:'Consulta gratuita', cta2:'Conocer servicios',
      s1l:'Firma con sede en Chicago', s2l:'Clientes en 15 estados', s3l:'Trámites 100% en línea',
      card:'Respuesta garantizada', cardSub:'en menos de 24 horas',
      badge:'', badgeSub:'Atención en español e inglés', notice:'Fecha límite habitual para declarar impuestos: 15 de abril de {y}'
    },
    trust: ['Taxes · IRS', 'Contabilidad', 'Formación LLC', 'Número ITIN', 'Apps a la medida'],
    services: {
      eyebrow:'Servicios',
      title:'Todo lo que su empresa necesita.',
      sub:'Soluciones contables para la comunidad hispanohablante en Estados Unidos.',
      more:'Ver servicio',
      links:{0:'/servicios/preparacion-de-impuestos',1:'/servicios/contabilidad',3:'/servicios/formacion-de-llc'},
      ctaCell:'¿No encuentra lo que necesita? Cuéntenos su caso y le decimos si podemos ayudarle.',
      ctaCellLink:'Escribir por WhatsApp',
      items:[
        { n:'01', icon:'📄', name:'Preparación de Impuestos', desc:'Presentamos su declaración de impuestos ante el IRS de forma correcta y a tiempo. Nos aseguramos de que todo esté en orden para que evite problemas con el fisco.', badge:null },
        { n:'02', icon:'📊', name:'Contabilidad Integral', desc:'Llevamos su contabilidad completa: mensual, trimestral o anual. Registro detallado de ingresos y egresos con estados financieros claros para que siempre sepa cómo va su negocio.', badge:null },
        { n:'03', icon:'🗂️', name:'Clasificación de Gastos', desc:'Organizamos y categorizamos cada gasto de su empresa. Una contabilidad bien clasificada facilita la declaración de impuestos y le da visibilidad real sobre sus finanzas.', badge:null },
        { n:'04', icon:'🏢', name:'Formación de LLC', desc:'Le orientamos en el proceso de formación de LLC según las necesidades de su negocio. Le explicamos sus opciones para que tome la mejor decisión para su empresa.', badge:null },
        { n:'05', icon:'🪪', name:'Número ITIN', desc:'Tramitamos su ITIN ante el IRS, incluyendo renovaciones y casos con rechazos previos. Sin ITIN no puede declarar impuestos — lo gestionamos sin complicaciones.', badge:null },
        { n:'06', icon:'📱', name:'Apps a la Medida', desc:'Creamos aplicaciones hechas a la necesidad de su negocio, para todo tipo de negocio. Ventas, inventario, citas o reportes — su operación en una sola herramienta.', badge:null },
      ]
    },
    imgStrip: ['Asesoría Contable', 'Negocios', 'Cumplimiento'],
    nosotros: {
      eyebrow:'Quiénes Somos',
      title:'La firma que entiende su mundo.',
      p1:'ISM Consulting Services nació para cerrar una brecha real: el acceso limitado que tiene la comunidad hispanohablante a servicios contables de calidad en Estados Unidos.',
      p2:'Somos el puente entre usted y el sistema financiero americano — con conocimiento de primer nivel y el trato cercano de quien entiende su cultura y su realidad.',
      pillars:[
        { icon:'🤝', title:'Trato personalizado', desc:'Cada cliente recibe atención directa. Usted no es un número.' },
        { icon:'🌐', title:'100% en línea', desc:'Trabajamos con clientes en más de 15 estados, sin que tenga que moverse.' },
        { icon:'🔐', title:'Confidencialidad total', desc:'Su información financiera es tratada con el más alto nivel de privacidad.' },
      ],
      s1v:'', s1l:'Desde Chicago para todo EE. UU.', s2v:'', s2l:'',
      cta:'Hablar con un asesor'
    },
    report: {
      eyebrow:'Reports System',
      title:'Control total para su tienda multiservicio.',
      p1:'Sistema diseñado para negocios de envíos de dinero y cambio de cheques. Registra cada operación del día: envíos, cheques, recargas y otros servicios de su negocio.',
      p2:'Cierre el día con un reporte claro y completo — sin hojas de cálculo, sin cuadernos, sin errores.',
      features:['Registro de envíos internacionales y recargas','Control de cheques cobrados por fecha y monto','Reportes diarios, semanales y mensuales automáticos','Acceso desde cualquier dispositivo con internet','Historial completo con trazabilidad de cada operación'],
      rows:[['Envíos del día','$1,240.00'],['Recargas móviles','$380.50'],['Cheques cobrados','$2,100.00'],['Total operativo','$3,720.50']],
      cta:'Solicitar demo gratuita'
    },
    plataformas: {
      eyebrow:'Nuestras Plataformas',
      title:'Software propio para su operación.',
      sub:'Dos plataformas desarrolladas por ISM y en uso hoy por negocios en Estados Unidos.',
      items:[
        {
          tag:'Tiendas multiservicio', name:'Reports System', url:'reportssystem.com',
          sub:'Su tienda cierra el día en minutos, no en horas.',
          desc:'Envíos, cheques, depósitos, cancelaciones y arqueo de caja en una sola plataforma. El Over/Short se calcula solo, la evidencia queda adjunta y cada movimiento tiene auditoría.',
          features:['Envíos, cheques, depósitos y arqueo de caja','Over/Short calculado automáticamente en cada cierre','Cancelaciones con evidencia fotográfica obligatoria','Centro de comisiones por servicio y período','Alertas de vencimiento de licencias y permisos','Multi-tienda, roles y auditoría con usuario, fecha e IP'],
          price:'Desde <strong>$50/mes por tienda</strong> · 100% web, sin instalar',
          cta:'Entrar al sitio', href:'https://www.reportssystem.com'
        },
        {
          tag:'Todo tipo de negocio', name:'My Profit & Loss', url:'myprofitandloss.com',
          sub:'Su contabilidad, sin contabilidad.',
          desc:'Importe el estado de cuenta de su banco, deje que la IA clasifique cada transacción según el IRS Schedule C, y entregue a su contador un P&L limpio.',
          features:['Importación de CSV y Excel de cualquier banco','Clasificación automática por categoría IRS Schedule C','Escaneo de recibos y conexión bancaria vía Plaid','P&L en PDF o Excel con totales deducibles','Ingresos, gastos y ganancia neta al día','Varios negocios en una sola cuenta'],
          price:'Desde <strong>$20/mes</strong> · Sin permanencia',
          cta:'Entrar al sitio', href:'https://www.myprofitandloss.com'
        },
      ]
    },
    apps: {
      eyebrow:'Apps a la Medida',
      title:'Creamos apps a la necesidad de su negocio.',
      p1:'Cada negocio funciona distinto, y un programa genérico casi nunca se ajusta. Desarrollamos aplicaciones hechas a la medida de su operación — para todo tipo de negocio, grande o pequeño.',
      p2:'Nos sentamos con usted, entendemos cómo trabaja y construimos la herramienta que le hace falta. En español, paso a paso, con acompañamiento después de la entrega.',
      features:[
        'Control de ventas, caja y cierre diario',
        'Inventario, productos y proveedores',
        'Citas, clientes y seguimiento de servicios',
        'Reportes automáticos diarios, semanales y mensuales',
        'Acceso desde celular, tableta o computadora',
        'Soporte y ajustes conforme crece su negocio',
      ],
      typesLabel:'Para todo tipo de negocio',
      types:[
        { icon:'🍽️', name:'Restaurantes' },
        { icon:'✂️', name:'Barberías y salones' },
        { icon:'🏪', name:'Tiendas y minimarkets' },
        { icon:'💱', name:'Envíos y cambio de cheques' },
        { icon:'🔧', name:'Talleres y servicios' },
        { icon:'🚛', name:'Transporte y logística' },
        { icon:'🏗️', name:'Construcción y contratistas' },
        { icon:'🧹', name:'Limpieza y mantenimiento' },
        { icon:'💆', name:'Salud y bienestar' },
      ],
      note:'¿Su negocio no aparece en la lista? Igual podemos construirlo. Cuéntenos qué necesita.',
      cta:'Solicitar mi app'
    },
    testimonios: {
      eyebrow:'Testimonios',
      title:'Lo que dicen nuestros clientes.',
      items:[
        { q:'Llevaba 3 años sin presentar impuestos por miedo. Con ISM me puse al corriente en 2 meses y por fin tengo tranquilidad.', name:'Jorge Méndez', loc:'Chicago, IL', title:'Dueño de restaurante' },
        { q:'Presenté mi ITIN desde cero. Me ayudaron a entender qué documentos necesitaba. Fue transparente y sin sorpresas de costos.', name:'Ana Ruiz', loc:'Miami, FL', title:'Trabajadora independiente' },
        { q:'Necesitaba hacer mi LLC y entender FinCEN. Fueron directos, sin jerga legal. Me explicaron todo en español claro.', name:'David García', loc:'Nueva York, NY', title:'Pequeño negocio (5 empleados)' },
      ]
    },
    comoFunciona: {
      eyebrow:'Cómo Funciona',
      title:'Su tranquilidad, en 4 pasos.',
      sub:'Un proceso claro, en español, sin papeleo confuso.',
      steps:[
        { n:'01', icon:'💬', title:'Contáctenos', desc:'Escríbanos por WhatsApp o complete el formulario. Cuéntenos su situación, sin compromiso.' },
        { n:'02', icon:'📋', title:'Evaluación gratuita', desc:'Revisamos su caso y le explicamos sus opciones con claridad, en español y sin tecnicismos.' },
        { n:'03', icon:'⚙️', title:'Manos a la obra', desc:'Preparamos y gestionamos todo su trámite ante el IRS o el estado correspondiente.' },
        { n:'04', icon:'✅', title:'Listo y en orden', desc:'Recibe su trámite completo y el respaldo continuo de nuestro equipo cuando lo necesite.' },
      ]
    },
    faq: {
      eyebrow:'Preguntas Frecuentes',
      title:'Resolvemos sus dudas.',
      items:[
        { q:'¿Necesito estar en Chicago para trabajar con ustedes?', a:'No. Atendemos 100% en línea a clientes en más de 15 estados. Todo el proceso se hace por WhatsApp, correo y videollamada, desde donde usted esté.' },
        { q:'¿Puedo declarar impuestos si no tengo número de seguro social?', a:'Sí. Tramitamos su ITIN ante el IRS para que pueda cumplir con sus obligaciones fiscales aunque no califique para un SSN.' },
        { q:'¿Cuánto cuesta la primera consulta?', a:'La primera consulta es totalmente gratuita y sin compromiso. Evaluamos su caso y le explicamos sus opciones antes de que decida.' },
        { q:'Llevo años sin declarar impuestos, ¿pueden ayudarme?', a:'Sí. Le ayudamos a ponerse al corriente con el IRS de forma ordenada, buscando siempre evitar o reducir sanciones.' },
        { q:'¿Qué documentos necesito para declarar mis impuestos?', a:'Normalmente: una identificación (pasaporte o licencia), su SSN o ITIN y los de su cónyuge e hijos si aplica, sus formularios de ingresos (W-2, 1099 u otros), la declaración del año anterior si la tiene y los datos de su cuenta bancaria para el reembolso. Si tiene un negocio, también el detalle de ingresos y gastos. Si le falta algo, le indicamos qué hacer.' },
        { q:'¿En cuánto tiempo forman una LLC?', a:'Generalmente entre 3 y 7 días hábiles, dependiendo del estado donde se registre su empresa.' },
      ]
    },
    ctaMid: {
      title:'¿Listo para poner su negocio en orden?',
      sub:'Agende su consulta gratuita hoy. Un asesor le responde en menos de 24 horas, sin ningún costo ni compromiso.',
      cta1:'Consulta gratuita', cta2:'Llamar ahora'
    },
    recursos: {
      eyebrow:'Centro de Recursos',
      title:'Información que genera valor.',
      items:[
        { cat:'Guía IRS', title:'ITIN: quién lo necesita y cómo obtenerlo', desc:'Todo sobre el número de identificación del IRS: requisitos, documentos y tiempos de tramitación actualizados para este año.', img:(window.__resources && window.__resources.res1) || 'img/499163-700x400.webp' },
        { cat:'Guía Empresarial', title:'LLC en EE. UU.: la estructura ideal para su negocio', desc:'Ventajas, estados recomendados y todo lo que necesita saber antes de registrar su empresa en Estados Unidos.', img:(window.__resources && window.__resources.res2) || 'img/211169-700x400.webp' },
        { cat:'Cumplimiento', title:'FinCEN BOI: ya no es obligatorio para empresas de EE. UU.', desc:'Desde 2025 FinCEN eliminó el reporte de beneficiarios reales para empresas y personas de EE. UU. Conozca qué cambió y qué sigue vigente.', img:(window.__resources && window.__resources.res3) || 'img/545856-700x400.webp' },
      ]
    },
    contacto: {
      eyebrow:'Contacto',
      title:'Cuéntenos su situación.',
      sub:'Escríbanos por WhatsApp o complete el formulario. Un asesor le responderá en menos de 24 horas, sin ningún costo.',
      items:[
        { icon:'📞', label:'Teléfono / WhatsApp', value:'+1 (312) 498-9026' },
        { icon:'✉️', label:'Correo electrónico', value:'Info@ismconsultores.com' },
        { icon:'🌐', label:'Sitio web', value:'ismconsultores.com' },
      ],
      form:{ name:'Nombre completo', email:'Correo electrónico', phone:'Teléfono / WhatsApp', service:'Servicio de interés', services:['Preparación de Taxes','Formación de LLC','Contabilidad Integral','Clasificación de Gastos','Número ITIN','Reports System','Consulta general'], message:'Describa brevemente su situación', send:'Enviar solicitud', sending:'Enviando…', ok:'Solicitud recibida. Le contactaremos en menos de 24 horas.', err:'No se pudo enviar. Escríbanos por WhatsApp.' }
    },
    footer: {
      desc:'Consultoría contable para la comunidad hispanohablante en EE. UU. 100% en línea · Atención en español.',
      nav:'Navegación', serv:'Servicios', docs:'Idiomas',
      navLinks:['Inicio','Servicios','Nosotros','Plataformas','Apps','Contacto'],
      navAnchors:['#hero','#servicios','#nosotros','#plataformas','#apps','#contacto'],
      servLinks:['Preparación de Taxes','Formación de LLC','Contabilidad','Número ITIN','Reports System'],
      servHrefs:['/servicios/preparacion-de-impuestos','/servicios/formacion-de-llc','/servicios/contabilidad','#servicios','#plataformas'],
      docLinks:[
        { l:'Atención en español' },
        { l:'Atención en inglés' }
      ],
      copy:'© 2026 ISM Consulting Services. Todos los derechos reservados.', legal:'La información de este sitio es orientativa y no constituye asesoría legal.', privacy:'Política de privacidad'
    }
  },
  en: {
    nav: { servicios:'Services', nosotros:'About', plataformas:'Platforms', apps:'Apps', recursos:'Resources', contacto:'Contact', cta:'Free consultation' },
    hero: {
      eyebrow:'Accounting consulting · Chicago, IL',
      title1:'Accounting, taxes',
      title2:'and LLC in Spanish,',
      title3:'without leaving',
      title4:'home.',
      sub:'We serve Hispanic entrepreneurs and families across the U.S.: accounting, tax preparation and LLC formation, 100% online.',
      cta1:'Free consultation', cta2:'View services',
      s1l:'Chicago-based firm', s2l:'Clients in 15 states', s3l:'Filings 100% online',
      card:'Guaranteed response', cardSub:'within 24 hours',
      badge:'', badgeSub:'Service in Spanish', notice:'Usual tax filing deadline: April 15, {y}'
    },
    trust: ['Taxes · IRS', 'Accounting', 'LLC Formation', 'ITIN Number', 'Custom Apps'],
    services: {
      eyebrow:'Services',
      title:'Everything your business needs.',
      sub:'Accounting solutions for the Hispanic community in the United States.',
      more:'View service',
      links:{0:'/services/tax-preparation',1:'/services/accounting',3:'/services/llc-formation'},
      ctaCell:'Do not see what you need? Tell us your case and we will let you know if we can help.',
      ctaCellLink:'Message us on WhatsApp',
      items:[
        { n:'01', icon:'📄', name:'Tax Preparation', desc:'We file your tax return with the IRS correctly and on time. We make sure everything is in order so you stay compliant and avoid issues with the IRS.', badge:null },
        { n:'02', icon:'📊', name:'Full-Service Accounting', desc:'We manage your complete accounting: monthly, quarterly, or annual. Detailed income and expense recording with clear financial statements so you always know how your business is doing.', badge:null },
        { n:'03', icon:'🗂️', name:'Expense Classification', desc:'We organize and categorize every business expense. Well-classified accounting simplifies tax filing and gives you real visibility into your business finances.', badge:null },
        { n:'04', icon:'🏢', name:'LLC Formation', desc:'We guide you through the LLC formation process based on your business needs. We explain your options clearly so you can make the best decision for your company.', badge:null },
        { n:'05', icon:'🪪', name:'ITIN Number', desc:'We process your ITIN with the IRS, including renewals and previously rejected applications. Without an ITIN you cannot file taxes — we handle it without complications.', badge:null },
        { n:'06', icon:'📱', name:'Custom Apps', desc:'We build applications made for your business needs, for every type of business. Sales, inventory, appointments, or reporting — your operation in a single tool.', badge:null },
      ]
    },
    imgStrip: ['Accounting Advisory', 'Business', 'Compliance'],
    nosotros: {
      eyebrow:'Who We Are',
      title:'The firm that understands your world.',
      p1:'ISM Consulting Services was founded to close a real gap: the limited access the Hispanic community has to quality accounting services in the United States.',
      p2:'We are the bridge between you and the American financial system — with top-level expertise and the personal touch of someone who understands your culture and reality.',
      pillars:[
        { icon:'🤝', title:'Personalized service', desc:'Every client receives direct attention. You are not just a number.' },
        { icon:'🌐', title:'100% online', desc:'We work with clients in over 15 states without you ever having to travel.' },
        { icon:'🔐', title:'Full confidentiality', desc:'Your financial information is handled with the highest level of privacy.' },
      ],
      s1v:'', s1l:'From Chicago to all of the U.S.', s2v:'', s2l:'',
      cta:'Speak with an advisor'
    },
    report: {
      eyebrow:'Reports System',
      title:'Total control for your multi-service store.',
      p1:'System built for money transfer and check cashing businesses. Tracks every daily operation: wire transfers, check cashing, top-ups, and any other service your business offers.',
      p2:'Close your day with one clear, complete report — no spreadsheets, no notebooks, no errors.',
      features:['International remittance and top-up tracking','Check cashing control by date and amount','Automatic daily, weekly, and monthly reports','Access from any device with internet','Full transaction history with complete traceability'],
      rows:[['Daily transfers','$1,240.00'],['Mobile top-ups','$380.50'],['Check cashing','$2,100.00'],['Total operations','$3,720.50']],
      cta:'Request free demo'
    },
    plataformas: {
      eyebrow:'Our Platforms',
      title:'Our own software for your operation.',
      sub:'Two platforms developed by ISM and in use today by businesses across the United States.',
      items:[
        {
          tag:'Multi-service stores', name:'Reports System', url:'reportssystem.com',
          sub:'Your store closes the day in minutes, not hours.',
          desc:'Money transfers, checks, deposits, cancellations, and cash count in a single platform. Over/Short is calculated automatically, evidence stays attached, and every entry is audited.',
          features:['Money transfers, checks, deposits, and cash count','Over/Short calculated automatically at every close','Cancellations with mandatory photo evidence','Commission center by service and period','Alerts before licenses and permits expire','Multi-store, roles, and audit log with user, date, and IP'],
          price:'From <strong>$50/mo per store</strong> · 100% web, nothing to install',
          cta:'Visit the site', href:'https://www.reportssystem.com'
        },
        {
          tag:'Every type of business', name:'My Profit & Loss', url:'myprofitandloss.com',
          sub:'Your bookkeeping, without the bookkeeping.',
          desc:'Import your bank statement, let AI categorize every transaction under the IRS Schedule C, and hand your accountant a clean P&L.',
          features:['CSV and Excel import from any bank','Automatic categorization by IRS Schedule C line','Receipt scanning and bank connection via Plaid','P&L in PDF or Excel with deductible totals','Revenue, expenses, and net profit up to date','Multiple businesses in one account'],
          price:'From <strong>$20/mo</strong> · No commitment',
          cta:'Visit the site', href:'https://www.myprofitandloss.com'
        },
      ]
    },
    apps: {
      eyebrow:'Custom Apps',
      title:'We build apps for your business needs.',
      p1:'Every business runs differently, and off-the-shelf software rarely fits. We develop applications built around your operation — for every type of business, large or small.',
      p2:'We sit down with you, learn how you work, and build the tool you actually need. Step by step, with support after delivery.',
      features:[
        'Sales, cash register, and daily closing',
        'Inventory, products, and suppliers',
        'Appointments, clients, and service tracking',
        'Automatic daily, weekly, and monthly reports',
        'Access from phone, tablet, or computer',
        'Support and adjustments as your business grows',
      ],
      typesLabel:'For every type of business',
      types:[
        { icon:'🍽️', name:'Restaurants' },
        { icon:'✂️', name:'Barbershops & salons' },
        { icon:'🏪', name:'Stores & minimarkets' },
        { icon:'💱', name:'Money transfer & check cashing' },
        { icon:'🔧', name:'Repair shops & services' },
        { icon:'🚛', name:'Transport & logistics' },
        { icon:'🏗️', name:'Construction & contractors' },
        { icon:'🧹', name:'Cleaning & maintenance' },
        { icon:'💆', name:'Health & wellness' },
      ],
      note:'Your business not on the list? We can still build it. Tell us what you need.',
      cta:'Request my app'
    },
    testimonios: {
      eyebrow:'Testimonials',
      title:'What our clients say.',
      items:[
        { q:'I went 3 years without filing out of fear. With ISM I got caught up in 2 months and finally have peace of mind.', name:'Jorge Méndez', loc:'Chicago, IL', title:'Restaurant owner' },
        { q:'I filed my ITIN from scratch. They helped me understand which documents I needed. It was transparent with no cost surprises.', name:'Ana Ruiz', loc:'Miami, FL', title:'Independent worker' },
        { q:'I needed to form my LLC and understand FinCEN. They were direct, no legal jargon. They explained everything in plain Spanish.', name:'David García', loc:'New York, NY', title:'Small business (5 employees)' },
      ]
    },
    comoFunciona: {
      eyebrow:'How It Works',
      title:'Your peace of mind, in 4 steps.',
      sub:'A clear process, in plain language, with no confusing paperwork.',
      steps:[
        { n:'01', icon:'💬', title:'Contact us', desc:'Message us on WhatsApp or fill out the form. Tell us your situation, no commitment.' },
        { n:'02', icon:'📋', title:'Free evaluation', desc:'We review your case and explain your options clearly, in plain language without jargon.' },
        { n:'03', icon:'⚙️', title:'We get to work', desc:'We prepare and handle your entire filing with the IRS or the relevant state.' },
        { n:'04', icon:'✅', title:'Done and in order', desc:'You receive your completed filing and ongoing support from our team whenever you need it.' },
      ]
    },
    faq: {
      eyebrow:'Frequently Asked Questions',
      title:'We answer your questions.',
      items:[
        { q:'Do I need to be in Chicago to work with you?', a:'No. We serve clients 100% online in more than 15 states. The whole process is done by WhatsApp, email, and video call, from wherever you are.' },
        { q:'Can I file taxes without a Social Security Number?', a:'Yes. We process your ITIN with the IRS so you can meet your tax obligations even if you do not qualify for an SSN.' },
        { q:'How much does the first consultation cost?', a:'The first consultation is completely free and with no commitment. We evaluate your case and explain your options before you decide.' },
        { q:'I have not filed taxes in years — can you help me?', a:'Yes. We help you get current with the IRS in an orderly way, always aiming to avoid or reduce penalties.' },
        { q:'What documents do I need to file my taxes?', a:'Usually: a photo ID (passport or license), your SSN or ITIN and those of your spouse and children if applicable, your income forms (W-2, 1099 or others), last year\'s return if you have it, and your bank details for the refund. If you own a business, also your income and expense details. If something is missing, we tell you what to do.' },
        { q:'How long does it take to form an LLC?', a:'Usually between 3 and 7 business days, depending on the state where your company is registered.' },
      ]
    },
    ctaMid: {
      title:'Ready to put your business in order?',
      sub:'Schedule your free consultation today. An advisor responds within 24 hours, at no cost and no commitment.',
      cta1:'Free consultation', cta2:'Call now'
    },
    recursos: {
      eyebrow:'Resource Center',
      title:'Information that creates value.',
      items:[
        { cat:'IRS Guide', title:'ITIN: who needs it and how to get it', desc:'Everything about the IRS identification number: updated requirements, necessary documents, and processing times for this year.', img:'img/499163-700x400.webp' },
        { cat:'Business Guide', title:'LLC in the U.S.: the ideal structure for your business', desc:'Benefits, recommended states, and everything you need to know before registering your company in the United States.', img:'img/211169-700x400.webp' },
        { cat:'Compliance', title:'FinCEN BOI: no longer required for U.S. companies', desc:'Since 2025 FinCEN removed beneficial ownership reporting for U.S. companies and U.S. persons. Learn what changed and what still applies.', img:'img/545856-700x400.webp' },
      ]
    },
    contacto: {
      eyebrow:'Contact',
      title:'Tell us your situation.',
      sub:'Message us on WhatsApp or fill out the form. An advisor will respond within 24 hours at no cost.',
      items:[
        { icon:'📞', label:'Phone / WhatsApp', value:'+1 (312) 498-9026' },
        { icon:'✉️', label:'Email', value:'Info@ismconsultores.com' },
        { icon:'🌐', label:'Website', value:'ismconsultores.com' },
      ],
      form:{ name:'Full name', email:'Email address', phone:'Phone / WhatsApp', service:'Service of interest', services:['Tax Preparation','LLC Formation','Full-Service Accounting','Expense Classification','ITIN Number','Reports System','General inquiry'], message:'Briefly describe your situation', send:'Send request', sending:'Sending…', ok:'Request received. We will contact you within 24 hours.', err:'Could not send. Please message us on WhatsApp.' }
    },
    footer: {
      desc:'Accounting consulting for the Hispanic community in the U.S. 100% online · Service in Spanish.',
      nav:'Navigation', serv:'Services', docs:'Languages',
      navLinks:['Home','Services','About','Platforms','Apps','Contact'],
      navAnchors:['#hero','#servicios','#nosotros','#plataformas','#apps','#contacto'],
      servLinks:['Tax Preparation','LLC Formation','Accounting','ITIN Number','Reports System'],
      servHrefs:['/services/tax-preparation','/services/llc-formation','/services/accounting','#servicios','#plataformas'],
      docLinks:[
        { l:'Service in Spanish' },
        { l:'Service in English' }
      ],
      copy:'© 2026 ISM Consulting Services. All rights reserved.', legal:'The information on this site is for guidance only and is not legal advice.', privacy:'Privacy policy'
    }
  }
};

// ─── Hooks ──────────────────────────────────────────────────────
function useReveal(lang) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal,.reveal-l,.reveal-r');
    const obs = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('visible'); obs.unobserve(x.target); } }), { threshold: 0.1 });
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
      else obs.observe(el);
    });
    return () => obs.disconnect();
  }, [lang]);
}
function useNavScroll() {
  const [s, set] = useState(false);
  useEffect(() => { const h = () => set(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h); }, []);
  return s;
}

// ─── Navbar ─────────────────────────────────────────────────────
function Navbar({ lang, setLang, c }) {
  const scrolled = useNavScroll();
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" aria-label="ISM Consulting Services">
        <img width="44" height="44" decoding="async" src={window.__resources && window.__resources.logo || "logo.jpeg"} alt="ISM Consulting Services" />
      </a>
      <div className="nav-links">
        {[['#servicios',c.servicios],['#nosotros',c.nosotros],['#plataformas',c.plataformas],['#apps',c.apps],[lang==='es'?'/blog/':'/blog/en/','Blog'],['#contacto',c.contacto]].map(([h,l]) => (
          <a key={h} href={h}>{l}</a>
        ))}
      </div>
      <div className="nav-right">
        <div className="lang-toggle">
          <button aria-label="ES - Español" aria-pressed={lang==='es'} className={lang==='es'?'active':''} onClick={()=>setLang('es')}>ES</button>
          <button aria-label="EN - English" aria-pressed={lang==='en'} className={lang==='en'?'active':''} onClick={()=>setLang('en')}>EN</button>
        </div>
        <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-primary" style={{padding:'9px 20px',fontSize:'13px'}}>{c.cta}</a>
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────
function Hero({ c }) {
  const [y, setY] = useState(2027);
  useEffect(() => { const n = new Date(); let a = n.getFullYear(); if (n > new Date(a, 3, 16)) a++; setY(a); }, []);
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="eyebrow">{c.eyebrow}</div>
        <h1 className="hero-title">
          {c.title1}<br /><em>{c.title2}</em><br />{c.title3} <em>{c.title4}</em>
        </h1>
        <p className="hero-sub">{c.sub}</p>
        <div className="hero-ctas">
          <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-primary">{c.cta1}</a>
          <a href="#servicios" className="btn-outline">{c.cta2}</a>
        </div>
        <div className="hero-notice">{c.notice.replace('{y}', y)}</div>
        <div className="hero-proof">
          {[c.s1l,c.s2l,c.s3l].map(l=><span key={l}>{l}</span>)}
        </div>
      </div>
      <div className="hero-right">
        <img fetchpriority="high" decoding="async" width="900" height="1100" src="img/292203-900x1100.webp" alt="Oficina profesional" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        <div className="hero-right-overlay" />
        <div className="hero-card">
          <div className="hero-card-icon">24h</div>
          <div><strong>{c.card}</strong><span>{c.cardSub}</span></div>
        </div>
        <div className="hero-badge">
          <span>{c.badgeSub}</span>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ──────────────────────────────────────────────────
function TrustBar({ c }) {
  return (
    <div className="trust-bar">
      {c.map((item, i) => (
        <React.Fragment key={item}>
          <div className="trust-item"><div className="trust-item-dot" />{item}</div>
          {i < c.length - 1 && <div className="trust-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Services ───────────────────────────────────────────────────
function Services({ c }) {
  return (
    <section id="servicios">
      <div className="section-header reveal">
        <div className="section-header-inner">
          <div>
            <div className="eyebrow">{c.eyebrow}</div>
            <h2>{c.title}</h2>
          </div>
          <p>{c.sub}</p>
        </div>
      </div>
      <div className="services-grid">
        {c.items.map((s,i)=>(
          <a key={s.name} href={c.links[i] || undefined} className="service-card reveal" style={{transitionDelay:`${i*0.06}s`, textDecoration:'none', color:'inherit', cursor: c.links[i] ? 'pointer' : 'default'}}>
            <div className="service-icon-wrap"><span className="service-icon">{s.n}</span></div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            {c.links[i] && <span style={{display:'block',marginTop:'14px',fontSize:'13px',fontWeight:600,color:'var(--navy)'}}>{c.more} →</span>}
            {s.badge && <span className="service-badge-pill">{s.badge}</span>}
            <span className="service-arrow">↗</span>
          </a>
        ))}
        <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="service-card service-card-cta reveal">
          <span>{c.ctaCell}</span>
          <strong>{c.ctaCellLink} →</strong>
        </a>
      </div>
    </section>
  );
}

// ─── Image Strip ────────────────────────────────────────────────
function ImgStrip({ c }) {
  const imgs = [
    (window.__resources && window.__resources.strip1) || 'img/136064-900x500.webp',
    (window.__resources && window.__resources.strip2) || 'img/262619-600x500.webp',
    (window.__resources && window.__resources.strip3) || 'img/804606-600x500.webp',
  ];
  return (
    <div className="img-strip">
      {imgs.map((src,i)=>(
        <div key={i} className="img-strip-item">
          <img loading="lazy" decoding="async" src={src} alt={c[i]} />
          <div className="img-strip-overlay" />
          <span className="img-strip-label">{c[i]}</span>
        </div>
      ))}
    </div>
  );
}

// ─── About ──────────────────────────────────────────────────────
function About({ c }) {
  return (
    <section id="nosotros">
      <div className="about-layout">
        <div className="about-imgs reveal-l">
          <img loading="lazy" decoding="async" className="about-img-main" src={(window.__resources && window.__resources.aboutMain) || "img/359142-700x700.webp"} alt="Professional advisor" />
          <img loading="lazy" decoding="async" className="about-img-sm" src={(window.__resources && window.__resources.aboutSm) || "img/742049-400x400.webp"} alt="Team meeting" />
          <div className="about-accent">
            <span>{c.s1l}</span>
          </div>
        </div>
        <div className="about-text reveal-r">
          <div className="eyebrow">{c.eyebrow}</div>
          <h2 style={{marginBottom:'22px'}}>{c.title}</h2>
          <p>{c.p1}</p>
          <p>{c.p2}</p>
          <div className="about-pillars">
            {c.pillars.map(p=>(
              <div key={p.title} className="about-pillar">
                <div><strong>{p.title}</strong><span>{p.desc}</span></div>
              </div>
            ))}
          </div>
          <div style={{marginTop:'8px'}}>
            <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-primary">{c.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Report ─────────────────────────────────────────────────────
function Report({ c }) {
  const bars = [30,55,40,72,58,88,48,65,80,52];
  return (
    <section id="report">
      <div className="report-layout">
        <div className="report-img">
          <img loading="lazy" decoding="async" src={(window.__resources && window.__resources.reportImg) || "img/742502-800x800.webp"} alt="Reports System dashboard" />
          <div className="report-img-overlay" />
          <div className="report-img-content">
            <div className="report-screen">
              <div className="report-topbar">
                <div className="dot dot-r"/><div className="dot dot-y"/><div className="dot dot-g"/>
                <span className="report-topbar-label">Reports System — ISM Consulting</span>
              </div>
              <div className="report-rows">
                {c.rows.map(([l,v])=>(
                  <div key={l} className="report-row">
                    <span className="report-row-label">{l}</span>
                    <span className="report-row-value">{v}</span>
                  </div>
                ))}
              </div>
              <div className="report-chart">{bars.map((h,i)=><div key={i} className="bar" style={{height:`${h}%`}}/>)}</div>
            </div>
          </div>
        </div>
        <div className="report-content">
          <div className="eyebrow" style={{color:'#7aadff'}}>{c.eyebrow}</div>
          <h2 style={{color:'#fff',marginBottom:'24px'}}>{c.title}</h2>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'15px',lineHeight:'1.85',marginBottom:'14px'}}>{c.p1}</p>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:'15px',lineHeight:'1.85',marginBottom:'28px'}}>{c.p2}</p>
          <ul className="report-features">{c.features.map(f=><li key={f}>{f}</li>)}</ul>
          <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-white">{c.cta}</a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────
function Testimonials({ c }) {
  return (
    <section id="testimonios">
      <div className="section-title-center reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>{c.eyebrow}</div>
        <h2>{c.title}</h2>
      </div>
      <div className="testimonials-grid">
        {c.items.map((t,i)=>(
          <div key={i} className="testimonial-card reveal" style={{transitionDelay:`${i*0.1}s`}}>
            <div className="stars">★★★★★</div>
            <blockquote>"{t.q}"</blockquote>
            <div className="t-author">
              <div className="t-avatar">{t.name[0]}</div>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-title">{t.title}</div>
                <div className="t-loc">{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Plataformas ───
function Plataformas({ c }) {
  return (
    <section id="plataformas">
      <div className="section-title-center reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>{c.eyebrow}</div>
        <h2>{c.title}</h2>
        <p>{c.sub}</p>
      </div>
      <div className="plat-grid">
        {c.items.map((p,i)=>(
          <div key={p.name} className="plat-card reveal" style={{transitionDelay:`${i*0.1}s`}}>
            <div className="plat-head">
              <span className="plat-tag">{p.tag}</span>
              <span className="plat-url">{p.url}</span>
            </div>
            <h3>{p.name}</h3>
            <div className="plat-sub">{p.sub}</div>
            <p>{p.desc}</p>
            <ul className="plat-list">{p.features.map(f=><li key={f}>{f}</li>)}</ul>
            <div className="plat-foot">
              <a href={p.href} target="_blank" rel="noopener" className="plat-link">{p.cta} →</a>
              <span className="plat-price" dangerouslySetInnerHTML={{__html:p.price}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Apps a la Medida ───
function Apps({ c }) {
  return (
    <section id="apps">
      <div className="apps-layout">
        <div className="apps-copy reveal">
          <div className="eyebrow">{c.eyebrow}</div>
          <h2>{c.title}</h2>
          <p>{c.p1}</p>
          <p>{c.p2}</p>
          <ul className="apps-features">{c.features.map(f=><li key={f}>{f}</li>)}</ul>
          <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-primary">{c.cta}</a>
        </div>
        <div className="reveal-r">
          <div className="eyebrow" style={{marginBottom:'20px'}}>{c.typesLabel}</div>
          <div className="apps-types">
            {c.types.map(t=>(
              <div key={t.name} className="app-type">
                <span className="app-type-name">{t.name}</span>
              </div>
            ))}
          </div>
          <p className="apps-note">{c.note}</p>
        </div>
      </div>
    </section>
  );
}

// ─── Cómo Funciona ──────────────────────────────────────────────
function ComoFunciona({ c }) {
  return (
    <section id="como-funciona">
      <div className="section-title-center reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>{c.eyebrow}</div>
        <h2>{c.title}</h2>
        <p>{c.sub}</p>
      </div>
      <div className="steps-grid">
        {c.steps.map((s,i)=>(
          <div key={s.n} className="step-card reveal" style={{transitionDelay:`${i*0.08}s`}}>
            <span className="step-num">{s.n}</span>
            <div className="step-icon">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────
function FAQ({ c }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="section-title-center reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>{c.eyebrow}</div>
        <h2>{c.title}</h2>
      </div>
      <div className="faq-wrap">
        {c.items.map((f,i)=>(
          <div key={i} className={`faq-item${open===i?' open':''}`}>
            <div className="faq-q" onClick={()=>setOpen(open===i?-1:i)}>
              <span>{f.q}</span><span className="faq-icon">+</span>
            </div>
            <div className="faq-a" style={{maxHeight: open===i ? '500px' : '0'}}>
              <div className="faq-a-inner">{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA Intermedia ─────────────────────────────────────────────
function CtaMid({ c }) {
  return (
    <section id="cta-mid">
      <div className="cta-mid-inner reveal">
        <h2>{c.title}</h2>
        <p>{c.sub}</p>
        <div className="cta-mid-btns">
          <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-white">{c.cta1}</a><a href="tel:+13124989026" className="btn-outline" style={{borderColor:'rgba(255,255,255,0.45)',color:'#fff'}}>{c.cta2}</a>
        </div>
      </div>
    </section>
  );
}

// ─── Resources ──────────────────────────────────────────────────
function Resources({ c }) {
  const more = c.eyebrow === 'Centro de Recursos' ? 'Leer más →' : 'Read more →';
  return (
    <section id="recursos">
      <div className="section-title-center reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>{c.eyebrow}</div>
        <h2>{c.title}</h2>
      </div>
      <div className="resources-grid">
        {c.items.map((r,i)=>(
          <div key={r.title} className="resource-card reveal" style={{transitionDelay:`${i*0.1}s`}}>
            <div className="resource-img"><img loading="lazy" decoding="async" src={r.img} alt={r.title} /></div>
            <div className="resource-body">
              <div className="resource-cat">{r.cat}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="resource-link">{more}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ────────────────────────────────────────────────────
function Contact({ c }) {
  const [form, setForm] = useState({name:'',email:'',phone:'',service:'',message:''});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const set = k => e => setForm(f=>({...f,[k]:e.target.value}));
  const submit = async e => {
    e.preventDefault();
    setError(false);
    const formEl = e.currentTarget;
    const d = Object.fromEntries(new FormData(formEl));
    const done = () => { setSent(true); setTimeout(()=>setSent(false),5000); setForm({name:'',email:'',phone:'',service:'',message:''}); };
    setSending(true);
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(d) });
      if (res.ok) { done(); setSending(false); return; }
    } catch (err) {}
    // Respaldo: si el correo no está configurado, abrir WhatsApp con el mensaje listo
    const msg = `Hola, soy ${d.nombre||''}. Me interesa: ${d.servicio||'consulta general'}. Correo: ${d.email||''}. Tel: ${d.telefono||'-'}. ${d.mensaje||''}`;
    window.open('https://wa.me/13124989026?text='+encodeURIComponent(msg),'_blank','noopener');
    done(); setSending(false);
  };

  return (
    <section id="contacto">
      <div className="contact-layout">
        <div className="reveal-l">
          <div className="eyebrow">{c.eyebrow}</div>
          <h2 style={{marginBottom:'20px'}}>{c.title}</h2>
          <p className="contact-info-sub">{c.sub}</p>
          {c.items.map(item=>(
            <div key={item.label} className="contact-item">
              <div><div className="contact-item-label">{item.label}</div><div className="contact-item-value">{item.value}</div></div>
            </div>
          ))}
          <div style={{marginTop:'36px'}}>
            <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-primary">WhatsApp</a>
          </div>
        </div>
        <div className="contact-form-box reveal-r">
          <form onSubmit={submit} action={FORM_ENDPOINT} method="POST">
            <input type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{position:"absolute",left:"-9999px",height:0,width:0,opacity:0}} />
            <input type="hidden" name="_subject" value="Nueva solicitud — ismconsultores.com" />
            <div className="form-row">
              <div className="form-group"><label htmlFor="f-name">{c.form.name}</label><input id="f-name" autoComplete="name" type="text" name="nombre" value={form.name} onChange={set('name')} required /></div>
              <div className="form-group"><label htmlFor="f-email">{c.form.email}</label><input id="f-email" autoComplete="email" type="email" name="email" value={form.email} onChange={set('email')} required /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label htmlFor="f-phone">{c.form.phone}</label><input id="f-phone" autoComplete="tel" type="tel" name="telefono" value={form.phone} onChange={set('phone')} /></div>
              <div className="form-group">
                <label htmlFor="f-service">{c.form.service}</label>
                <select id="f-service" name="servicio" value={form.service} onChange={set('service')}>
                  <option value="">—</option>
                  {c.form.services.map(s=><option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group"><label htmlFor="f-message">{c.form.message}</label><textarea id="f-message" name="mensaje" value={form.message} onChange={set('message')} /></div>
            <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center',fontSize:'15px',opacity:sending?0.7:1}} disabled={sending}>{sending ? c.form.sending : c.form.send}</button>
          </form>
        </div>
      </div>
      {sent && <div className="toast">{c.form.ok}</div>}
      {error && <div className="toast" style={{background:'#b91c1c'}}>{c.form.err}</div>}
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────
function Footer({ c }) {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img loading="lazy" decoding="async" src={window.__resources && window.__resources.logo || "logo.jpeg"} alt="ISM Consulting Services" className="footer-logo-img" width="52" height="52" />
          <p>{c.desc}</p>
          <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="btn-primary" style={{fontSize:'13px',padding:'10px 20px',background:'var(--blue-mid)'}}>WhatsApp</a>
        </div>
        <div className="footer-col">
          <h3>{c.nav}</h3>
          {c.navLinks.map((l,i)=><a key={l} href={c.navAnchors[i]}>{l}</a>)}
        </div>
        <div className="footer-col">
          <h3>{c.serv}</h3>
          {c.servLinks.map((l,i)=><a key={l} href={c.servHrefs[i]}>{l}</a>)}
        </div>
        <div className="footer-col">
          <h3>{c.docs}</h3>
          {c.docLinks.map(d=>d.u?<a key={d.l} href={d.u} target="_blank" rel="noopener">{d.l}</a>:<span key={d.l} style={{display:'block',marginBottom:'10px',fontSize:'14px',color:'rgba(255,255,255,0.55)'}}>{d.l}</span>)}
        </div>
      </div>
      <div className="footer-bottom">
        <p>{c.copy} <a href="/privacidad.html" style={{color:'inherit',textDecoration:'underline'}}>{c.privacy}</a></p>
        <p>{c.legal}</p>
        <p>Info@ismconsultores.com</p>
      </div>
    </footer>
  );
}

// ─── Counter ────────────────────────────────────────────────────
function useCounter(target, duration = 2000, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function CounterSection({ lang }) {
  const [started, setStarted] = useState(false);
  const ref = React.useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const c1 = useCounter(150, 2000, started);
  const c2 = useCounter(10, 1500, started);
  const c3 = useCounter(15, 1800, started);
  const c4 = useCounter(98, 2000, started);
  const items = lang === 'es'
    ? [[c1+'+','Clientes atendidos'],[c2+'+','Años de experiencia'],[c3+'+','Estados cubiertos'],[c4+'%','Tasa de satisfacción']]
    : [[c1+'+','Clients served'],[c2+'+','Years of experience'],[c3+'+','States covered'],[c4+'%','Satisfaction rate']];
  return (
    <section id="contador" ref={ref}>
      <div className="counter-grid">
        {items.map(([num,label],i) => (
          <React.Fragment key={label}>
            <div className="counter-item">
              <div className="counter-num">{num}</div>
              <div className="counter-label">{label}</div>
            </div>
            {i < items.length - 1 && <div className="counter-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// ─── Blog (resumen; los artículos viven en /blog) ──────────────────
function Blog({ lang }) {
  const articles = BLOG[lang].slice(0, 3);
  const base = lang === 'es' ? '/blog/' : '/blog/en/';
  const readMore = lang === 'es' ? 'Leer artículo →' : 'Read article →';
  const all = lang === 'es' ? 'Ver todos los artículos' : 'View all articles';
  const title = lang === 'es' ? 'Guías y recursos para su negocio.' : 'Guides and resources for your business.';
  const mins = lang === 'es' ? 'de lectura' : 'read';
  const [feat, ...rest] = articles;
  return (
    <section id="blog">
      <div className="section-title-center reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>Blog</div>
        <h2>{title}</h2>
      </div>
      <div className="blog-grid">
        <a className="blog-featured reveal-l" href={base + feat.slug} style={{textDecoration:'none',color:'inherit',display:'block'}}>
          <div className="blog-featured-img"><img loading="lazy" decoding="async" width="800" height="400" src={feat.img} alt="" /></div>
          <div className="blog-featured-body">
            <div className="blog-cat">{feat.cat}</div>
            <h3>{feat.title}</h3>
            <p className="blog-excerpt">{feat.excerpt}</p>
            <div className="blog-meta"><span>{feat.date}</span><div className="blog-meta-dot"/><span>{feat.time} {mins}</span></div>
            <span className="blog-read-more">{readMore}</span>
          </div>
        </a>
        <div className="blog-sidebar">
          {rest.map(a => (
            <a key={a.slug} className="blog-card reveal-r" href={base + a.slug} style={{textDecoration:'none',color:'inherit'}}>
              <div className="blog-card-img"><img loading="lazy" decoding="async" width="400" height="160" src={a.img} alt="" /></div>
              <div className="blog-card-body">
                <div className="blog-cat">{a.cat}</div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="blog-read-more">{readMore}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div style={{textAlign:'center',marginTop:'36px'}}><a href={base} className="btn-outline">{all} →</a></div>
    </section>
  );
}

// ─── Popup ───────────────────────────────────────────────────────
function Popup({ lang }) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const seen = localStorage.getItem('ism_popup_seen');
    if (!seen) { const t = setTimeout(() => setVisible(true), 5000); return () => clearTimeout(t); }
  }, []);
  const close = () => { setVisible(false); localStorage.setItem('ism_popup_seen', '1'); };
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(close, 2500);
    fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ nombre:'(popup)', email, mensaje:'Solicitud de consulta gratuita desde el popup' }) }).catch(()=>{}); };
  if (!visible) return null;
  const t = lang === 'es' ? {
    title:'¡Consulta gratuita!', sub:'Hable con un asesor hoy mismo', body:'Deje su correo y le contactamos en menos de 24 horas para resolver sus dudas sin costo.',
    ph:'Su correo electrónico', btn:'Quiero mi consulta gratuita', skip:'No, gracias', ok:'¡Listo! Le contactaremos pronto.'
  } : {
    title:'Free consultation!', sub:'Speak with an advisor today', body:'Leave your email and we\'ll contact you within 24 hours to answer your questions at no cost.',
    ph:'Your email address', btn:'I want my free consultation', skip:'No thanks', ok:'Done! We\'ll contact you soon.'
  };
  return (
    <div className="popup-backdrop" onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <div className="popup-box">
        <button className="popup-close" aria-label="Cerrar" onClick={close}>✕</button>
        <div className="popup-header">
          <div style={{fontSize:'2.5rem',marginBottom:'12px'}}>🎁</div>
          <h2>{t.title}</h2>
          <p>{t.sub}</p>
        </div>
        <div className="popup-body">
          {sent ? (
            <div style={{textAlign:'center',padding:'20px 0'}}>
              <div style={{fontSize:'3rem',marginBottom:'16px'}}>✅</div>
              <p style={{color:'var(--navy)',fontWeight:'600',fontSize:'16px'}}>{t.ok}</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <p>{t.body}</p>
              <input className="popup-input" aria-label="Email" type="email" placeholder={t.ph} value={email} onChange={e=>setEmail(e.target.value)} required />
              <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center',fontSize:'15px'}}>{t.btn}</button>
              <button type="button" className="popup-skip" onClick={close}>{t.skip}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Cookies ─────────────────────────────────────────────────────
function CookiesBanner({ lang }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const accepted = localStorage.getItem('ism_cookies');
    if (!accepted) setVisible(true);
  }, []);
  const accept = () => { localStorage.setItem('ism_cookies', '1'); setVisible(false); };
  const decline = () => { localStorage.setItem('ism_cookies', '0'); setVisible(false); };
  if (!visible) return null;
  const t = lang === 'es' ? {
    text:'Usamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra ',
    link:'política de privacidad', accept:'Aceptar todo', decline:'Rechazar'
  } : {
    text:'We use cookies to improve your experience on our website. By continuing to browse, you accept our ',
    link:'privacy policy', accept:'Accept all', decline:'Decline'
  };
  return (
    <div className="cookies-banner">
      <p className="cookies-text">{t.text}<a href="/privacidad.html">{t.link}</a>.</p>
      <div className="cookies-btns">
        <button className="cookies-decline" onClick={decline}>{t.decline}</button>
        <button className="cookies-accept" onClick={accept}>{t.accept}</button>
      </div>
    </div>
  );
}

// ─── App ────────────────────────────────────────────────────────
function App() {
  const [lang, setLang] = useState('es');
  useEffect(() => { try { const q = new URLSearchParams(location.search).get('lang'); if (q === 'en') setLang('en'); } catch (e) {} }, []);
  useEffect(() => { document.documentElement.lang = lang === 'en' ? 'en' : 'es'; }, [lang]);
  const c = C[lang];
  useReveal(lang);
  useEffect(() => {
    const accentColor = TWEAK_DEFAULTS.accentColor;
    document.documentElement.style.setProperty('--blue', accentColor);
    const dark = accentColor.replace('#','');
    const r = parseInt(dark.substring(0,2),16);
    const g = parseInt(dark.substring(2,4),16);
    const b = parseInt(dark.substring(4,6),16);
    document.documentElement.style.setProperty('--blue-mid', `rgba(${Math.min(r+30,255)},${Math.min(g+20,255)},${Math.min(b+20,255)},1)`);
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} c={c.nav} />
      <main>
      <Hero c={c.hero} />
      <TrustBar c={c.trust} />
      <CounterSection lang={lang} />
      <Services c={c.services} />
      <ImgStrip c={c.imgStrip} />
      <ComoFunciona c={c.comoFunciona} />
      <About c={c.nosotros} />
      <Plataformas c={c.plataformas} />
      <Apps c={c.apps} />
      <Blog lang={lang} />
      <Testimonials c={c.testimonios} />
      <FAQ c={c.faq} />
      <CtaMid c={c.ctaMid} />
      <Contact c={c.contacto} />
      </main>
      <Footer c={c.footer} />
      <Popup lang={lang} />
      <CookiesBanner lang={lang} />
      <a href="https://wa.me/13124989026" target="_blank" rel="noopener" className="wa-fab" aria-label="WhatsApp">
        <div className="wa-pulse"/>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

export { App };
if (typeof document !== 'undefined') { const r = document.getElementById('root'); if (r.hasChildNodes()) { const go = () => ReactDOM.hydrateRoot(r, <App/>); ('requestIdleCallback' in window) ? requestIdleCallback(go, { timeout: 1200 }) : setTimeout(go, 200); } else ReactDOM.createRoot(r).render(<App/>); }
