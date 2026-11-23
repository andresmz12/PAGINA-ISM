// Páginas de servicio (ES + EN). Solo contenido basado en los textos del sitio; sin precios ni credenciales.
export const SERVICES = {
es: [
{
  slug: 'preparacion-de-impuestos', key: 'taxes', name: 'Preparación de impuestos', schema: 'Preparación de impuestos',
  title: 'Preparación de impuestos',
  desc: 'Preparamos y presentamos su declaración de impuestos ante el IRS. Atención en español desde Chicago, 100% en línea.',
  lead: 'Presentamos su declaración de impuestos ante el IRS de forma correcta y a tiempo, y nos aseguramos de que todo esté en orden para que evite problemas con el fisco.',
  includes: [
    ['Declaración personal', 'Con la información de sus ingresos, su familia y sus deducciones.'],
    ['Trabajadores independientes y negocios', 'Ingresos y gastos del negocio, impuesto de autoempleo y pagos estimados.'],
    ['Años sin declarar', 'Le ayudamos a ponerse al corriente con el IRS de forma ordenada, buscando evitar o reducir sanciones.'],
    ['Sin número de Seguro Social', 'Tramitamos su ITIN para que pueda cumplir con sus obligaciones fiscales.']
  ],
  needs: ['Identificación (pasaporte o licencia)', 'Su SSN o ITIN, y los de su cónyuge e hijos si aplica', 'Formularios de ingresos: W-2, 1099 u otros', 'La declaración del año anterior, si la tiene', 'Datos de su cuenta bancaria para el reembolso', 'Si tiene negocio: detalle de ingresos y gastos'],
  faq: [
    ['¿Puedo declarar impuestos si no tengo número de Seguro Social?', 'Sí. Tramitamos su ITIN ante el IRS para que pueda cumplir con sus obligaciones fiscales aunque no califique para un SSN.'],
    ['Llevo años sin declarar impuestos, ¿pueden ayudarme?', 'Sí. Le ayudamos a ponerse al corriente con el IRS de forma ordenada, buscando siempre evitar o reducir sanciones.'],
    ['¿Cuánto cuesta la primera consulta?', 'Es gratuita y sin compromiso. Evaluamos su caso y le explicamos sus opciones antes de que decida.']
  ]
},
{
  slug: 'formacion-de-llc', key: 'llc', name: 'Formación de LLC', schema: 'Formación de LLC',
  title: 'Formación de LLC',
  desc: 'Le orientamos en la formación de su LLC según las necesidades de su negocio. En español y 100% en línea.',
  lead: 'Le orientamos en el proceso de formación de LLC según las necesidades de su negocio y le explicamos sus opciones para que tome la mejor decisión para su empresa.',
  includes: [
    ['Elegir el estado', 'Qué estado conviene según dónde opera su negocio.'],
    ['Nombre y registro', 'El nombre de la empresa y los Articles of Organization ante el estado.'],
    ['Agente registrado', 'El Registered Agent que exige el estado.'],
    ['EIN', 'El número de identificación del empleador ante el IRS.']
  ],
  needs: ['Dos o tres opciones de nombre para la empresa', 'El estado donde operará el negocio', 'Nombre y dirección de los dueños', 'Descripción breve de la actividad', 'Datos de identificación del responsable (SSN o ITIN, según el caso)'],
  faq: [
    ['¿En cuánto tiempo forman una LLC?', 'Generalmente entre 3 y 7 días hábiles, dependiendo del estado donde se registre su empresa.']
  ]
},
{
  slug: 'contabilidad', key: 'accounting', name: 'Contabilidad integral', schema: 'Contabilidad para pequeños negocios',
  title: 'Contabilidad integral',
  desc: 'Llevamos la contabilidad de su negocio: registro de ingresos y egresos, clasificación de gastos y estados financieros. Mensual, trimestral o anual.',
  lead: 'Llevamos su contabilidad completa, mensual, trimestral o anual, con un registro detallado de ingresos y egresos y estados financieros claros para que siempre sepa cómo va su negocio.',
  includes: [
    ['Ingresos y egresos', 'Registro detallado, con la frecuencia que su negocio necesite.'],
    ['Clasificación de gastos', 'Cada gasto en su categoría: facilita su declaración de impuestos y le da visibilidad real sobre sus finanzas.'],
    ['Estados financieros', 'Para ver cómo va el negocio en cualquier momento.'],
    ['My Profit & Loss', 'Si prefiere llevarla usted: importa el estado de cuenta de su banco y clasifica las transacciones según el Schedule C del IRS.']
  ],
  needs: ['Estados de cuenta del banco y de las tarjetas del negocio', 'Facturas y recibos de gastos', 'Registro de ventas o ingresos', 'Declaraciones de años anteriores, si las tiene'],
  faq: []
}
],
en: [
{
  slug: 'tax-preparation', key: 'taxes', name: 'Tax preparation', schema: 'Tax preparation',
  title: 'Tax preparation',
  desc: 'We prepare and file your tax return with the IRS. Service in Spanish from Chicago, 100% online.',
  lead: 'We file your tax return with the IRS correctly and on time, and we make sure everything is in order so you avoid issues with the IRS.',
  includes: [
    ['Personal tax return', 'Using your income, your family and your deductions.'],
    ['Self-employed workers and businesses', 'Business income and expenses, self-employment tax and estimated payments.'],
    ['Years without filing', 'We help you get current with the IRS in an orderly way, aiming to avoid or reduce penalties.'],
    ['No Social Security number', 'We process your ITIN so you can meet your tax obligations.']
  ],
  needs: ['Photo ID (passport or license)', 'Your SSN or ITIN, and those of your spouse and children if applicable', 'Income forms: W-2, 1099 or others', 'Last year’s return, if you have it', 'Bank account details for your refund', 'If you own a business: income and expense details'],
  faq: [
    ['Can I file taxes without a Social Security number?', 'Yes. We process your ITIN with the IRS so you can meet your tax obligations even if you do not qualify for an SSN.'],
    ['I have not filed in years — can you help?', 'Yes. We help you get current with the IRS in an orderly way, always aiming to avoid or reduce penalties.'],
    ['How much does the first consultation cost?', 'It is free and with no commitment. We evaluate your case and explain your options before you decide.']
  ]
},
{
  slug: 'llc-formation', key: 'llc', name: 'LLC formation', schema: 'LLC formation',
  title: 'LLC formation',
  desc: 'We guide you through forming your LLC based on your business needs. In Spanish and 100% online.',
  lead: 'We guide you through the LLC formation process based on your business needs and explain your options so you can make the best decision for your company.',
  includes: [
    ['Choosing the state', 'Which state makes sense based on where your business operates.'],
    ['Name and filing', 'The company name and the Articles of Organization with the state.'],
    ['Registered agent', 'The Registered Agent required by the state.'],
    ['EIN', 'Your Employer Identification Number from the IRS.']
  ],
  needs: ['Two or three name options for the company', 'The state where the business will operate', 'Name and address of the owners', 'A short description of the business activity', 'Identification details of the responsible party (SSN or ITIN, as applicable)'],
  faq: [
    ['How long does it take to form an LLC?', 'Usually between 3 and 7 business days, depending on the state where your company is registered.']
  ]
},
{
  slug: 'accounting', key: 'accounting', name: 'Full-service accounting', schema: 'Small business accounting',
  title: 'Full-service accounting',
  desc: 'We keep your business books: income and expense records, expense classification and financial statements. Monthly, quarterly or annual.',
  lead: 'We manage your complete accounting, monthly, quarterly or annual, with detailed income and expense records and clear financial statements so you always know how your business is doing.',
  includes: [
    ['Income and expenses', 'Detailed records, at the frequency your business needs.'],
    ['Expense classification', 'Every expense in its category: it simplifies your tax filing and gives you real visibility into your finances.'],
    ['Financial statements', 'To see how the business is doing at any time.'],
    ['My Profit & Loss', 'If you prefer to do it yourself: it imports your bank statement and categorizes transactions under IRS Schedule C.']
  ],
  needs: ['Bank and business card statements', 'Invoices and expense receipts', 'Sales or income record', 'Prior-year returns, if you have them'],
  faq: []
}
]
};
