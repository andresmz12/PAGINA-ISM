// Páginas de servicio (ES + EN). Se basan en los textos del sitio; no incluyen precios ni credenciales.
export const SERVICES = {
es: [
{
  slug: 'preparacion-de-impuestos', key: 'taxes', name: 'Preparación de impuestos', schema: 'Preparación de impuestos',
  title: 'Preparación de impuestos en español, 100% en línea',
  desc: 'Preparamos y presentamos su declaración de impuestos ante el IRS de forma correcta y a tiempo, con atención en español desde Chicago para clientes en todo EE. UU.',
  lead: 'Presentamos su declaración de impuestos ante el IRS de forma correcta y a tiempo. Nos aseguramos de que todo esté en orden para que evite problemas con el fisco, y le explicamos cada paso en español.',
  includes: [
    ['Declaración personal', 'Preparamos y presentamos su declaración ante el IRS con la información de sus ingresos, su familia y sus deducciones.'],
    ['Trabajadores independientes y negocios', 'Reportamos los ingresos y gastos de su negocio y le explicamos el impuesto de autoempleo y los pagos estimados.'],
    ['Años sin declarar', 'Si lleva años sin presentar su declaración, le ayudamos a ponerse al corriente con el IRS de forma ordenada, buscando evitar o reducir sanciones.'],
    ['ITIN si no tiene SSN', 'Si no califica para un número de Seguro Social, tramitamos su ITIN para que pueda cumplir con sus obligaciones fiscales.'],
    ['Explicación antes de presentar', 'Le explicamos qué dice su declaración, sin tecnicismos, antes de presentarla.']
  ],
  whoTitle: '¿Para quién es?',
  who: ['Personas y familias que quieren declarar bien y a tiempo.', 'Trabajadores independientes: contratistas, conductores, estilistas, limpieza, vendedores.', 'Dueños de pequeños negocios y de LLC de un solo miembro.', 'Quienes llevan tiempo sin declarar y quieren ponerse al día.'],
  needs: ['Identificación (pasaporte o licencia).', 'Su número de Seguro Social o ITIN, y los de su cónyuge e hijos si aplica.', 'Formularios de ingresos: W-2, 1099 u otros.', 'La declaración del año anterior, si la tiene.', 'Datos de su cuenta bancaria para el reembolso.', 'Si tiene negocio: el detalle de ingresos y gastos.'],
  faq: [
    ['¿Puedo declarar impuestos si no tengo número de Seguro Social?', 'Sí. Tramitamos su ITIN ante el IRS para que pueda cumplir con sus obligaciones fiscales aunque no califique para un SSN.'],
    ['¿Cuál es la fecha límite para declarar?', 'La fecha habitual es el 15 de abril. Una extensión da más tiempo para presentar, pero no para pagar. En nuestra guía del calendario fiscal explicamos todas las fechas.'],
    ['Llevo años sin declarar impuestos, ¿pueden ayudarme?', 'Sí. Le ayudamos a ponerse al corriente con el IRS de forma ordenada, buscando siempre evitar o reducir sanciones.'],
    ['¿Cuánto cuesta la primera consulta?', 'La primera consulta es totalmente gratuita y sin compromiso. Evaluamos su caso y le explicamos sus opciones antes de que decida.']
  ],
  related: ['n0', 'n1', 'n5']
},
{
  slug: 'formacion-de-llc', key: 'llc', name: 'Formación de LLC', schema: 'Formación de LLC',
  title: 'Formación de LLC en EE. UU., explicada paso a paso',
  desc: 'Le orientamos en la formación de su LLC según las necesidades de su negocio: estado, registro, EIN y siguientes pasos. En español y 100% en línea.',
  lead: 'Le orientamos en el proceso de formación de su LLC según las necesidades de su negocio. Le explicamos sus opciones, en español y sin jerga legal, para que tome la mejor decisión para su empresa.',
  includes: [
    ['Elegir el estado', 'Le explicamos qué estado conviene según dónde opera su negocio y qué costos y obligaciones implica cada uno.'],
    ['Nombre y registro', 'Le ayudamos con el nombre de la empresa y la presentación de los Articles of Organization ante el estado.'],
    ['Agente registrado', 'Le orientamos sobre el Registered Agent que exige el estado donde registre su empresa.'],
    ['EIN', 'Le ayudamos a obtener el número de identificación del empleador (EIN) ante el IRS.'],
    ['Los siguientes pasos', 'Cuenta bancaria del negocio, informes anuales y cómo tributa su LLC, para que empiece en orden.']
  ],
  whoTitle: '¿Para quién es?',
  who: ['Emprendedores que quieren separar su patrimonio personal del del negocio.', 'Trabajadores independientes que quieren formalizar su actividad.', 'Dueños de negocios que operan sin una estructura legal.', 'Clientes en cualquier estado: todo el proceso es en línea.'],
  needs: ['Dos o tres opciones de nombre para la empresa.', 'El estado donde operará el negocio.', 'Nombre y dirección de los dueños.', 'Una descripción breve de la actividad del negocio.', 'Datos de identificación del responsable (SSN o ITIN, según el caso) para el EIN.'],
  faq: [
    ['¿En cuánto tiempo forman una LLC?', 'Generalmente entre 3 y 7 días hábiles, dependiendo del estado donde se registre su empresa.'],
    ['¿La LLC me hace pagar menos impuestos?', 'Por sí sola, no. Cómo tributa depende de cuántos dueños tiene y de lo que usted elija. Lo explicamos en nuestra guía de LLC y S-Corp.'],
    ['¿Debo formar la LLC en el estado donde vivo?', 'Depende de dónde opera su negocio. Generalmente conviene el estado donde trabaja, pero analizamos su caso antes de decidir.'],
    ['¿Necesito ser ciudadano o residente para tener una LLC?', 'En general no se exige ciudadanía ni residencia para ser dueño de una LLC, pero cada caso depende de su situación. Para asuntos migratorios consulte siempre a un abogado.']
  ],
  related: ['n4', 'o2', 'n0']
},
{
  slug: 'contabilidad', key: 'accounting', name: 'Contabilidad integral', schema: 'Contabilidad para pequeños negocios',
  title: 'Contabilidad para su negocio, clara y al día',
  desc: 'Llevamos la contabilidad de su negocio: registro de ingresos y gastos, clasificación y estados financieros claros. Mensual, trimestral o anual, en español.',
  lead: 'Llevamos su contabilidad completa: mensual, trimestral o anual. Registro detallado de ingresos y egresos, con estados financieros claros para que siempre sepa cómo va su negocio.',
  includes: [
    ['Contabilidad mensual, trimestral o anual', 'Usted elige la frecuencia que mejor se ajusta a su negocio.'],
    ['Registro de ingresos y egresos', 'Un registro detallado para que siempre sepa cuánto gana y cuánto gasta su negocio.'],
    ['Clasificación de gastos', 'Organizamos y categorizamos cada gasto. Una contabilidad bien clasificada facilita su declaración de impuestos y le da visibilidad real sobre sus finanzas.'],
    ['Estados financieros claros', 'Reportes que se entienden, para decidir con información y no con suposiciones.'],
    ['Herramientas propias', 'Si prefiere llevarla usted, My Profit & Loss importa el estado de cuenta de su banco y clasifica las transacciones según el Schedule C del IRS.']
  ],
  whoTitle: '¿Para quién es?',
  who: ['Dueños de pequeños negocios que no tienen tiempo para llevar los libros.', 'Restaurantes, barberías, tiendas, talleres, transporte y construcción.', 'Trabajadores independientes que quieren llegar a abril con todo en orden.', 'Negocios que necesitan reportes claros para su banco o su contador.'],
  needs: ['Estados de cuenta del banco y de las tarjetas del negocio.', 'Facturas y recibos de gastos.', 'El registro de ventas o ingresos.', 'Las declaraciones de años anteriores, si las tiene.'],
  faq: [
    ['¿Cada cuánto llevan la contabilidad?', 'La llevamos mensual, trimestral o anual, según lo que necesite su negocio.'],
    ['¿Qué significa clasificar los gastos?', 'Es asignar cada gasto a su categoría correcta (publicidad, materiales, software, etc.). Así sus deducciones quedan bien respaldadas y su declaración es más sencilla.'],
    ['¿Puedo llevar la contabilidad yo mismo?', 'Sí. Con My Profit & Loss puede importar el estado de cuenta de su banco y obtener un reporte limpio para entregar a su contador. Si prefiere que lo hagamos nosotros, también podemos.'],
    ['¿Me sirve para mi declaración de impuestos?', 'Sí. Una contabilidad ordenada durante el año hace mucho más fácil, y más precisa, su declaración.']
  ],
  related: ['n2', 'n1', 'n0']
}
],
en: [
{
  slug: 'tax-preparation', key: 'taxes', name: 'Tax preparation', schema: 'Tax preparation',
  title: 'Tax preparation in Spanish, 100% online',
  desc: 'We prepare and file your tax return with the IRS correctly and on time, with service in Spanish from Chicago for clients across the U.S.',
  lead: 'We file your tax return with the IRS correctly and on time. We make sure everything is in order so you avoid issues with the IRS, and we explain every step in plain language.',
  includes: [
    ['Personal tax return', 'We prepare and file your return with the IRS using your income, your family and your deductions.'],
    ['Self-employed workers and businesses', 'We report your business income and expenses and explain self-employment tax and estimated payments.'],
    ['Years without filing', 'If you have gone years without filing, we help you get current with the IRS in an orderly way, aiming to avoid or reduce penalties.'],
    ['ITIN if you have no SSN', 'If you do not qualify for a Social Security number, we process your ITIN so you can meet your tax obligations.'],
    ['Explained before filing', 'We explain what your return says, without jargon, before filing it.']
  ],
  whoTitle: 'Who is it for?',
  who: ['Individuals and families who want to file correctly and on time.', 'Self-employed workers: contractors, drivers, stylists, cleaners, sellers.', 'Small business owners and single-member LLC owners.', 'Anyone who has gone a while without filing and wants to catch up.'],
  needs: ['Photo ID (passport or license).', 'Your Social Security number or ITIN, and those of your spouse and children if applicable.', 'Income forms: W-2, 1099 or others.', 'Last year’s return, if you have it.', 'Bank account details for your refund.', 'If you own a business: your income and expense details.'],
  faq: [
    ['Can I file taxes without a Social Security number?', 'Yes. We process your ITIN with the IRS so you can meet your tax obligations even if you do not qualify for an SSN.'],
    ['What is the filing deadline?', 'The usual date is April 15. An extension gives more time to file, but not to pay. Our tax calendar guide explains all the dates.'],
    ['I have not filed in years — can you help?', 'Yes. We help you get current with the IRS in an orderly way, always aiming to avoid or reduce penalties.'],
    ['How much does the first consultation cost?', 'The first consultation is completely free with no commitment. We evaluate your case and explain your options before you decide.']
  ],
  related: ['n0', 'n1', 'n5']
},
{
  slug: 'llc-formation', key: 'llc', name: 'LLC formation', schema: 'LLC formation',
  title: 'LLC formation in the U.S., explained step by step',
  desc: 'We guide you through forming your LLC based on your business needs: state, filing, EIN and next steps. In Spanish and 100% online.',
  lead: 'We guide you through forming your LLC based on your business needs. We explain your options in plain language, with no legal jargon, so you can make the best decision for your company.',
  includes: [
    ['Choosing the state', 'We explain which state makes sense based on where your business operates and what costs and obligations each one involves.'],
    ['Name and filing', 'We help with the company name and filing the Articles of Organization with the state.'],
    ['Registered agent', 'We guide you on the Registered Agent required by the state where you register.'],
    ['EIN', 'We help you get your Employer Identification Number (EIN) from the IRS.'],
    ['What comes next', 'A business bank account, annual reports and how your LLC is taxed, so you start in order.']
  ],
  whoTitle: 'Who is it for?',
  who: ['Entrepreneurs who want to separate personal assets from the business.', 'Self-employed workers who want to formalize their activity.', 'Business owners operating without a legal structure.', 'Clients in any state: the whole process is online.'],
  needs: ['Two or three name options for the company.', 'The state where the business will operate.', 'Name and address of the owners.', 'A short description of the business activity.', 'Identification details of the responsible party (SSN or ITIN, as applicable) for the EIN.'],
  faq: [
    ['How long does it take to form an LLC?', 'Usually between 3 and 7 business days, depending on the state where your company is registered.'],
    ['Does an LLC make me pay less tax?', 'By itself, no. How it is taxed depends on how many owners it has and on what you choose. We explain it in our LLC and S-Corp guide.'],
    ['Should I form the LLC in the state where I live?', 'It depends on where your business operates. It generally makes sense to use the state where you work, but we review your case before deciding.'],
    ['Do I need to be a citizen or resident to own an LLC?', 'In general, citizenship or residency is not required to own an LLC, but each case depends on your situation. For immigration matters, always consult an attorney.']
  ],
  related: ['n4', 'o2', 'n0']
},
{
  slug: 'accounting', key: 'accounting', name: 'Full-service accounting', schema: 'Small business accounting',
  title: 'Accounting for your business, clear and up to date',
  desc: 'We keep your business books: income and expense records, classification and clear financial statements. Monthly, quarterly or annual, in Spanish.',
  lead: 'We manage your complete accounting: monthly, quarterly or annual. Detailed income and expense records with clear financial statements so you always know how your business is doing.',
  includes: [
    ['Monthly, quarterly or annual accounting', 'You choose the frequency that best fits your business.'],
    ['Income and expense records', 'A detailed record so you always know how much your business earns and spends.'],
    ['Expense classification', 'We organize and categorize every expense. Well-classified accounting simplifies your tax filing and gives you real visibility into your finances.'],
    ['Clear financial statements', 'Reports you can understand, so you decide with information and not guesses.'],
    ['Our own tools', 'If you prefer to do it yourself, My Profit & Loss imports your bank statement and categorizes transactions under IRS Schedule C.']
  ],
  whoTitle: 'Who is it for?',
  who: ['Small business owners without time to keep the books.', 'Restaurants, barbershops, stores, repair shops, transport and construction.', 'Self-employed workers who want to reach April with everything in order.', 'Businesses that need clear reports for their bank or accountant.'],
  needs: ['Bank and business card statements.', 'Invoices and expense receipts.', 'Your sales or income record.', 'Prior-year returns, if you have them.'],
  faq: [
    ['How often do you do the bookkeeping?', 'Monthly, quarterly or annual, depending on what your business needs.'],
    ['What does classifying expenses mean?', 'It means assigning each expense to its correct category (advertising, supplies, software, etc.). That way your deductions are well supported and your return is simpler.'],
    ['Can I do the bookkeeping myself?', 'Yes. With My Profit & Loss you can import your bank statement and get a clean report to give your accountant. If you prefer us to do it, we can too.'],
    ['Does it help with my tax return?', 'Yes. Organized books during the year make your return much easier, and more accurate.']
  ],
  related: ['n2', 'n1', 'n0']
}
]
};
