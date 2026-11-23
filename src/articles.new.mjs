// Artículos nuevos (ES + EN). Información general y orientativa.
export const NEW = {
es: [
{
  slug: 'calendario-fiscal-irs', catKey: 'Impuestos', cat: 'Impuestos', ts: '2026-11-20', date: 'Noviembre 2026', time: '5 min',
  title: 'Calendario fiscal: las fechas del IRS que no puede olvidar',
  excerpt: 'Declaración personal, impuestos estimados, formularios W-2 y 1099, extensiones y empresas: las fechas clave del año para evitar multas y recargos.',
  img: 'img/804606-600x500.webp',
  takeaways: ['La fecha límite habitual para declarar como persona es el 15 de abril.', 'Una extensión le da más tiempo para presentar, pero no para pagar.', 'Si trabaja por cuenta propia, probablemente deba pagar impuestos estimados cada trimestre.', 'Si una fecha cae en fin de semana o feriado, se pasa al siguiente día hábil.'],
  content: [
    { type:'p', text:'Perder una fecha ante el IRS casi siempre sale caro: multas por presentar tarde, multas por pagar tarde e intereses. La buena noticia es que las fechas principales son pocas y se repiten cada año. Esta guía las resume para el año fiscal que termina el 31 de diciembre, que es el caso de la mayoría de las personas y pequeños negocios.' },
    { type:'h3', text:'Enero: formularios de ingresos' },
    { type:'ul', items:['15 de enero (aprox.): vence el cuarto pago de impuestos estimados del año anterior, para quienes los pagan.','31 de enero: los empleadores deben entregar el Formulario W-2 a sus empleados, y los negocios el 1099-NEC a los contratistas a quienes pagaron.'] },
    { type:'h3', text:'Marzo: sociedades y empresas con elección S-Corp' },
    { type:'p', text:'El 15 de marzo vencen, en general, las declaraciones de las sociedades (partnerships, Formulario 1065) y de las corporaciones S (Formulario 1120-S). Esto incluye a las LLC con más de un dueño que tributan como sociedad, y a las LLC que eligieron ser tratadas como S-Corp.' },
    { type:'h3', text:'Abril: la fecha más importante' },
    { type:'ul', items:['15 de abril: vence la declaración personal (Formulario 1040), incluida la de dueños de LLC de un solo miembro y trabajadores independientes. También vencen las corporaciones C y el primer pago de impuestos estimados del año.'] },
    { type:'h3', text:'Junio, septiembre y octubre' },
    { type:'ul', items:['15 de junio: segundo pago de impuestos estimados.','15 de septiembre: tercer pago de impuestos estimados.','15 de octubre: fecha límite si pidió una extensión para presentar su declaración personal.'] },
    { type:'h3', text:'La extensión: más tiempo para presentar, no para pagar' },
    { type:'p', text:'Con el Formulario 4868 puede obtener una extensión automática para presentar su declaración personal. Pero el pago del impuesto que deba sigue venciendo en la fecha original. Si no paga a tiempo, se generan intereses y recargos aunque tenga la extensión. Por eso conviene estimar su deuda antes de abril.' },
    { type:'h3', text:'Y su estado también cuenta' },
    { type:'p', text:'Además del IRS, la mayoría de los estados tienen su propia declaración, con fechas que normalmente coinciden con las federales pero que pueden variar. Si tiene un negocio, también existen informes anuales y cuotas estatales de la empresa.' },
    { type:'note', text:'Las fechas pueden cambiar por feriados, desastres naturales u otras disposiciones del IRS. Confirme siempre la fecha vigente para su caso.' }
  ]
},
{
  slug: 'impuestos-trabajador-independiente', catKey: 'Impuestos', cat: 'Impuestos', ts: '2026-11-18', date: 'Noviembre 2026', time: '6 min',
  title: 'Trabajador independiente en EE. UU.: cómo declarar sus impuestos',
  excerpt: 'Si cobra por su cuenta (contratista, delivery, limpieza, construcción, belleza), así funcionan el Schedule C, el impuesto de autoempleo y los pagos trimestrales.',
  img: 'img/262619-600x500.webp',
  takeaways: ['Usted debe declarar todos sus ingresos, aunque nadie le haya enviado un formulario 1099.', 'Además del impuesto sobre la renta, paga impuesto de autoempleo (15.3% sobre su ganancia neta).', 'Sus gastos del negocio reducen la ganancia sobre la que paga impuestos.', 'Si espera deber $1,000 o más, normalmente debe pagar impuestos estimados cada trimestre.'],
  content: [
    { type:'p', text:'Ser independiente significa que nadie le retiene impuestos del pago. Ese trabajo le toca a usted: calcular su ganancia, declararla y, en la mayoría de los casos, pagar durante el año. Hacerlo bien le ahorra sorpresas en abril.' },
    { type:'h3', text:'¿Quién es trabajador independiente?' },
    { type:'p', text:'Cualquier persona que ofrece servicios o vende por su cuenta: contratistas, conductores, personal de limpieza, barberos y estilistas, vendedores, freelancers y dueños de un negocio sin empleados. También lo es el dueño de una LLC de un solo miembro, porque por defecto el IRS la trata como parte de su declaración personal.' },
    { type:'h3', text:'Los tres elementos de su declaración' },
    { type:'ul', items:['Formulario 1040: su declaración personal.','Schedule C: donde reporta los ingresos y gastos de su negocio. La diferencia es su ganancia neta.','Schedule SE: donde calcula el impuesto de autoempleo.'] },
    { type:'h3', text:'El impuesto de autoempleo' },
    { type:'p', text:'Los empleados pagan Seguro Social y Medicare a medias con su empleador. Como independiente usted paga ambas partes, que suman 15.3% de su ganancia neta (12.4% de Seguro Social, hasta un límite anual, y 2.9% de Medicare). Esto se suma al impuesto sobre la renta. Puede deducir la mitad del impuesto de autoempleo al calcular su ingreso gravable.' },
    { type:'h3', text:'Pagos de impuestos estimados' },
    { type:'p', text:'Como nadie le retiene, el IRS espera que pague a lo largo del año con el Formulario 1040-ES, normalmente en abril, junio, septiembre y enero. En general aplica si espera deber $1,000 o más al presentar su declaración. No pagar, o pagar de menos, puede generar multas aunque pague el saldo en abril.' },
    { type:'h3', text:'Lo que debe hacer durante el año' },
    { type:'ul', items:['Guarde un porcentaje de cada cobro para impuestos, en una cuenta aparte.','Lleve un registro de ingresos y gastos desde el primer día.','Separe su cuenta bancaria personal de la del negocio.','Guarde recibos y facturas, incluidos los de gastos pequeños.'] },
    { type:'h3', text:'¿Y si no recibí un 1099?' },
    { type:'p', text:'La obligación de declarar no depende de que le llegue un formulario. Todos los ingresos del negocio deben reportarse, sean en efectivo, por transferencia o por aplicaciones de pago.' },
    { type:'note', text:'Esta guía es general. Su situación puede cambiar según su estado, su estatus y sus ingresos. Una revisión personalizada evita errores costosos.' }
  ]
},
{
  slug: 'gastos-deducibles-pequeno-negocio', catKey: 'Impuestos', cat: 'Impuestos', ts: '2026-11-16', date: 'Noviembre 2026', time: '5 min',
  title: 'Gastos deducibles de su negocio: qué sí y qué no',
  excerpt: 'Cada gasto bien clasificado reduce lo que paga en impuestos. Le explicamos las categorías más comunes, los límites y cómo respaldarlos.',
  img: 'img/742502-800x800.webp',
  takeaways: ['Un gasto deducible debe ser ordinario y necesario para su negocio.', 'Los gastos personales no se deducen, aunque se paguen con la tarjeta del negocio.', 'Sin comprobantes, una deducción puede perderse en una revisión.', 'Clasificar bien los gastos durante el año ahorra tiempo y dinero en la declaración.'],
  content: [
    { type:'p', text:'Pagar impuestos sobre su ganancia, y no sobre todo lo que cobra, es una de las ventajas de tener un negocio. Pero solo funciona si sus gastos están bien registrados y son realmente del negocio.' },
    { type:'h3', text:'La regla básica' },
    { type:'p', text:'Para el IRS, un gasto es deducible cuando es ordinario (común en su tipo de negocio) y necesario (útil y apropiado para operarlo). No tiene que ser indispensable, pero sí tener una relación clara con su actividad.' },
    { type:'h3', text:'Categorías frecuentes' },
    { type:'ul', items:['Publicidad y marketing: anuncios, tarjetas, sitio web, redes sociales.','Materiales y suministros del negocio.','Software y suscripciones que usa para trabajar.','Servicios profesionales: contador, abogado, diseño.','Seguros del negocio y licencias o permisos.','Comisiones y cargos bancarios o de procesadores de pago.','Pago a contratistas y a empleados.','Vehículo: millas recorridas por trabajo (con un registro) o gastos reales, según el caso.','Oficina en casa: solo si usa una parte de la vivienda de manera regular y exclusiva para el negocio.','Teléfono e internet, en la proporción que se use para el negocio.','Equipo y herramientas, que pueden deducirse de una vez o a lo largo de varios años.'] },
    { type:'h3', text:'Lo que suele causar problemas' },
    { type:'ul', items:['Mezclar gastos personales y del negocio en la misma cuenta.','Comidas: en general solo una parte es deducible, y debe tener un propósito de negocio.','Deducir gastos sin recibo ni registro de para qué fueron.','Deducir el 100% de algo que se usa solo en parte para el negocio.'] },
    { type:'h3', text:'Cómo respaldar sus gastos' },
    { type:'p', text:'Guarde el recibo o factura, anote la fecha, el monto y el propósito. El IRS recomienda conservar los registros por lo menos tres años desde que presentó la declaración, y más tiempo en algunos casos. Fotografiar los recibos con el teléfono es suficiente si quedan legibles y organizados.' },
    { type:'h3', text:'Por qué importa la clasificación' },
    { type:'p', text:'Un gasto en la categoría equivocada puede perder la deducción o llamar la atención del IRS. Por eso en ISM organizamos cada gasto según las categorías del Schedule C, el formulario donde se reportan.' },
    { type:'note', text:'Las reglas de deducción tienen límites y excepciones que dependen de cada caso. Consulte antes de tomar una deducción importante.' }
  ]
},
{
  slug: 'carta-del-irs-que-hacer', catKey: 'Cumplimiento', cat: 'Cumplimiento', ts: '2026-11-12', date: 'Noviembre 2026', time: '5 min',
  title: 'Recibí una carta del IRS: qué hacer paso a paso',
  excerpt: 'No todas las cartas son una mala noticia. Cómo leerla, cuánto tiempo tiene para responder y cómo distinguirla de un fraude.',
  img: 'img/359142-700x700.webp',
  takeaways: ['No la ignore: casi todas las cartas tienen una fecha límite para responder.', 'El IRS inicia el contacto por correo postal, no por mensaje de texto, redes sociales ni correo electrónico.', 'Busque el número del aviso (CP o LT) en la esquina superior derecha.', 'Guarde copia de todo lo que envíe y envíelo de forma que pueda comprobar la entrega.'],
  content: [
    { type:'p', text:'Recibir un sobre del IRS asusta, pero muchas cartas son avisos rutinarios: un cambio en su declaración, una solicitud de información, un saldo pendiente o una confirmación. Lo importante es leerla con calma y actuar a tiempo.' },
    { type:'h3', text:'Paso 1: no la ignore ni se asuste' },
    { type:'p', text:'Ignorar una carta es lo que convierte un problema pequeño en uno grande: los intereses y los recargos siguen corriendo, y se pueden perder derechos de apelación.' },
    { type:'h3', text:'Paso 2: identifique qué es' },
    { type:'ul', items:['Número del aviso: aparece arriba a la derecha como CP o LT seguido de números.','Año fiscal y formulario al que se refiere.','Qué le piden: pagar, enviar documentos, corregir algo o solo informarle.','Fecha límite para responder: normalmente está destacada en la carta.'] },
    { type:'h3', text:'Paso 3: verifique que sea real' },
    { type:'p', text:'El IRS inicia el contacto por correo postal. No le pedirá datos personales ni pagos por mensaje de texto, redes sociales o correo electrónico, y no exige pagar con tarjetas de regalo ni criptomonedas. Si dudas, no llame al número de un mensaje sospechoso: busque el aviso en irs.gov o llame al número oficial de la carta.' },
    { type:'h3', text:'Paso 4: revise si el IRS tiene razón' },
    { type:'p', text:'Compare lo que dice la carta con su declaración, sus formularios W-2 o 1099 y sus registros. Los errores pueden ser del IRS, de un empleador que reportó mal o de su propia declaración.' },
    { type:'h3', text:'Paso 5: responda a tiempo y por escrito' },
    { type:'ul', items:['Si está de acuerdo, siga las instrucciones de la carta para pagar o corregir.','Si no está de acuerdo, explique por qué y adjunte copias de sus documentos.','Si debe dinero y no puede pagar todo, existen opciones como planes de pago.','Guarde una copia de todo y use un método de envío con comprobante.'] },
    { type:'h3', text:'Cuándo pedir ayuda' },
    { type:'p', text:'Conviene que un profesional la revise si la carta menciona una auditoría, un saldo grande, un embargo o una declaración que usted no presentó. Con un poder autorizado, un representante puede comunicarse con el IRS en su nombre.' },
    { type:'note', text:'Esta guía es informativa. Si recibió una carta y no sabe qué hacer, escríbanos y la revisamos con usted.' }
  ]
},
{
  slug: 'llc-impuestos-s-corp', catKey: 'Empresas y LLC', cat: 'Empresas y LLC', ts: '2026-11-10', date: 'Noviembre 2026', time: '6 min',
  title: 'LLC y impuestos: ¿cuándo conviene elegir S-Corp?',
  excerpt: 'Formar una LLC no significa pagar menos impuestos por sí solo. Cómo tributa por defecto y cuándo vale la pena considerar la elección de S-Corp.',
  img: 'img/742049-400x400.webp',
  takeaways: ['Por defecto, una LLC de un solo dueño tributa en el Schedule C y una con varios dueños como sociedad.', 'La elección de S-Corp puede reducir el impuesto de autoempleo, pero añade nómina y trámites.', 'Un dueño que trabaja en su S-Corp debe pagarse un salario razonable.', 'No hay un monto mágico de ganancia: depende de cada negocio.'],
  content: [
    { type:'p', text:'La LLC protege su patrimonio personal frente a deudas del negocio, pero el IRS no tiene una categoría especial de impuestos para ella. Cómo tributa depende de cuántos dueños tiene y de lo que usted elija.' },
    { type:'h3', text:'Cómo tributa una LLC por defecto' },
    { type:'ul', items:['LLC de un solo dueño: se trata como parte de su declaración personal (Schedule C). Las ganancias pagan impuesto sobre la renta y de autoempleo.','LLC con dos o más dueños: se trata como una sociedad (partnership). Presenta el Formulario 1065 y cada dueño recibe un Schedule K-1.'] },
    { type:'h3', text:'¿Qué es la elección de S-Corp?' },
    { type:'p', text:'Es una forma de tributar a la que una LLC puede optar presentando el Formulario 2553. No es un tipo de empresa distinto, sino una decisión fiscal. Con ella, el dueño que trabaja en el negocio recibe un salario con retenciones, y el resto de las ganancias se reparte como distribuciones, que no pagan impuesto de autoempleo.' },
    { type:'h3', text:'Ventajas posibles' },
    { type:'ul', items:['Puede reducir el impuesto de autoempleo sobre la parte de ganancia que no es salario.'] },
    { type:'h3', text:'Lo que cambia o cuesta' },
    { type:'ul', items:['Debe pagarse un salario razonable, con nómina, retenciones y formularios trimestrales y anuales.','Presenta una declaración de negocio adicional (Formulario 1120-S) cada año.','Hay más contabilidad y más costos de preparación.','Algunos estados cobran impuestos o cuotas adicionales a las S-Corp.'] },
    { type:'h3', text:'¿Cuándo puede convenir?' },
    { type:'p', text:'Normalmente cuando el negocio genera ganancias consistentes y suficientes para que el ahorro supere los costos y el trabajo extra. No existe un monto único que funcione para todos: depende de su ganancia, su estado y cuánto salario sería razonable.' },
    { type:'h3', text:'Antes de decidir' },
    { type:'ul', items:['Calcule su ganancia neta de los últimos meses.','Compare el impuesto con y sin la elección.','Pregunte por los costos de nómina y los impuestos de su estado.','Tenga en cuenta que existen plazos para presentar la elección.'] },
    { type:'note', text:'Esta es una guía general. La decisión correcta se toma con los números de su negocio. Pídanos una revisión.' }
  ]
},
{
  slug: 'como-elegir-preparador-de-impuestos', catKey: 'Impuestos', cat: 'Impuestos', ts: '2026-11-05', date: 'Noviembre 2026', time: '4 min',
  title: 'Cómo elegir un preparador de impuestos y evitar fraudes',
  excerpt: 'Las señales de un profesional de confianza, las preguntas que debe hacer y las prácticas que debe evitar a toda costa.',
  img: 'img/136064-900x500.webp',
  takeaways: ['Un preparador pagado debe tener un PTIN y firmar su declaración.', 'Desconfíe de quien cobra un porcentaje del reembolso o promete un reembolso mayor.', 'Nunca firme una declaración en blanco ni incompleta.', 'Revise la declaración antes de firmarla y pida una copia.'],
  content: [
    { type:'p', text:'Elegir a quién le confía sus impuestos y sus datos personales es una decisión importante. Los preparadores honestos son la mayoría, pero hay prácticas que debe conocer para protegerse.' },
    { type:'h3', text:'Señales de un buen preparador' },
    { type:'ul', items:['Tiene un número PTIN y lo escribe en su declaración, como exige el IRS.','Firma la declaración que prepara.','Le pide documentos y hace preguntas antes de calcular nada.','Le explica en términos que usted entienda lo que hay en su declaración.','Le da una copia y está disponible si el IRS le escribe después.','Cobra una tarifa clara, antes de empezar.'] },
    { type:'h3', text:'Señales de alerta' },
    { type:'ul', items:['Cobra un porcentaje de su reembolso.','Promete un reembolso grande o garantizado antes de revisar sus documentos.','Le pide firmar una declaración en blanco o sin revisar.','No firma la declaración ni da su PTIN.','Deposita su reembolso en una cuenta que no es suya.','Le aconseja incluir ingresos, gastos o dependientes que no son reales.'] },
    { type:'h3', text:'Preguntas útiles antes de contratar' },
    { type:'ul', items:['¿Qué credenciales tiene (CPA, EA, abogado, u otra)?','¿Cuánto cobra y qué incluye?','¿Me ayuda si el IRS me escribe o me audita?','¿Cómo recibirán y protegerán mis documentos y mis datos?','¿Cuánto tarda y cómo me comunico con usted?'] },
    { type:'h3', text:'Una nota para asuntos migratorios' },
    { type:'p', text:'En EE. UU., un “notario público” no es un abogado. Para trámites de inmigración, consulte siempre a un abogado o a un representante acreditado. En ISM nos enfocamos en impuestos, contabilidad, ITIN y empresas.' },
    { type:'h3', text:'Recuerde que la responsabilidad es suya' },
    { type:'p', text:'Aunque otra persona prepare su declaración, usted es responsable de lo que dice. Por eso conviene entender lo que firma y conservar su copia.' },
    { type:'note', text:'Esta guía es informativa y no sustituye la asesoría de un profesional.' }
  ]
}
],
en: [
{
  slug: 'irs-tax-calendar', catKey: 'Taxes', cat: 'Taxes', ts: '2026-11-20', date: 'November 2026', time: '5 min',
  title: 'Tax calendar: the IRS dates you cannot afford to miss',
  excerpt: 'Personal returns, estimated taxes, W-2 and 1099 forms, extensions and businesses: the key dates of the year to avoid penalties and interest.',
  img: 'img/804606-600x500.webp',
  takeaways: ['The usual deadline to file as an individual is April 15.', 'An extension gives you more time to file, not more time to pay.', 'If you work for yourself, you probably need to pay estimated taxes each quarter.', 'If a date falls on a weekend or holiday, it moves to the next business day.'],
  content: [
    { type:'p', text:'Missing an IRS deadline almost always costs money: penalties for filing late, penalties for paying late, and interest. The good news is that the main dates are few and repeat every year. This guide summarizes them for a tax year ending December 31, which is the case for most people and small businesses.' },
    { type:'h3', text:'January: income forms' },
    { type:'ul', items:['About January 15: the fourth estimated tax payment of the prior year is due, for those who pay them.','January 31: employers must give Form W-2 to employees, and businesses must give Form 1099-NEC to the contractors they paid.'] },
    { type:'h3', text:'March: partnerships and S-Corp elections' },
    { type:'p', text:'March 15 is generally the deadline for partnership returns (Form 1065) and S corporation returns (Form 1120-S). This includes LLCs with more than one owner that are taxed as partnerships, and LLCs that elected to be taxed as an S-Corp.' },
    { type:'h3', text:'April: the most important date' },
    { type:'ul', items:['April 15: individual returns (Form 1040) are due, including single-member LLC owners and self-employed workers. C corporations and the first estimated tax payment of the year are also due.'] },
    { type:'h3', text:'June, September and October' },
    { type:'ul', items:['June 15: second estimated tax payment.','September 15: third estimated tax payment.','October 15: deadline if you requested an extension to file your individual return.'] },
    { type:'h3', text:'The extension: more time to file, not to pay' },
    { type:'p', text:'With Form 4868 you can get an automatic extension to file your individual return. But payment of any tax you owe is still due on the original date. If you do not pay on time, interest and penalties apply even with an extension. That is why you should estimate what you owe before April.' },
    { type:'h3', text:'Your state counts too' },
    { type:'p', text:'Besides the IRS, most states have their own return, with dates that normally match the federal ones but can vary. If you own a business, there may also be annual reports and state fees.' },
    { type:'note', text:'Dates can change because of holidays, natural disasters or other IRS rules. Always confirm the current date for your case.' }
  ]
},
{
  slug: 'self-employed-taxes', catKey: 'Taxes', cat: 'Taxes', ts: '2026-11-18', date: 'November 2026', time: '6 min',
  title: 'Self-employed in the U.S.: how to file your taxes',
  excerpt: 'If you get paid on your own (contractor, delivery, cleaning, construction, beauty), here is how Schedule C, self-employment tax and quarterly payments work.',
  img: 'img/262619-600x500.webp',
  takeaways: ['You must report all your income, even if nobody sent you a 1099 form.', 'Besides income tax, you pay self-employment tax (15.3% on your net profit).', 'Your business expenses reduce the profit you are taxed on.', 'If you expect to owe $1,000 or more, you normally need to pay estimated taxes each quarter.'],
  content: [
    { type:'p', text:'Being self-employed means nobody withholds taxes from your pay. That job falls to you: calculating your profit, reporting it and, in most cases, paying during the year. Doing it right saves you surprises in April.' },
    { type:'h3', text:'Who is self-employed?' },
    { type:'p', text:'Anyone who offers services or sells on their own: contractors, drivers, cleaners, barbers and stylists, sellers, freelancers and owners of a business without employees. A single-member LLC owner is too, because by default the IRS treats the LLC as part of your personal return.' },
    { type:'h3', text:'The three parts of your return' },
    { type:'ul', items:['Form 1040: your personal return.','Schedule C: where you report your business income and expenses. The difference is your net profit.','Schedule SE: where you calculate self-employment tax.'] },
    { type:'h3', text:'Self-employment tax' },
    { type:'p', text:'Employees split Social Security and Medicare taxes with their employer. As a self-employed person you pay both halves, which add up to 15.3% of your net profit (12.4% Social Security, up to an annual limit, and 2.9% Medicare). This is on top of income tax. You can deduct half of the self-employment tax when calculating your taxable income.' },
    { type:'h3', text:'Estimated tax payments' },
    { type:'p', text:'Since nobody withholds for you, the IRS expects you to pay throughout the year with Form 1040-ES, normally in April, June, September and January. In general it applies if you expect to owe $1,000 or more when you file. Not paying, or paying too little, can cause penalties even if you pay the balance in April.' },
    { type:'h3', text:'What to do during the year' },
    { type:'ul', items:['Set aside a percentage of every payment for taxes, in a separate account.','Keep a record of income and expenses from day one.','Separate your personal bank account from your business account.','Keep receipts and invoices, including small expenses.'] },
    { type:'h3', text:'What if I did not receive a 1099?' },
    { type:'p', text:'Your duty to report does not depend on receiving a form. All business income must be reported, whether in cash, by transfer or through payment apps.' },
    { type:'note', text:'This guide is general. Your situation may change depending on your state, your status and your income. A personalized review prevents costly mistakes.' }
  ]
},
{
  slug: 'deductible-business-expenses', catKey: 'Taxes', cat: 'Taxes', ts: '2026-11-16', date: 'November 2026', time: '5 min',
  title: 'Deductible business expenses: what counts and what does not',
  excerpt: 'Every well-classified expense lowers what you pay in taxes. We explain the most common categories, the limits and how to back them up.',
  img: 'img/742502-800x800.webp',
  takeaways: ['A deductible expense must be ordinary and necessary for your business.', 'Personal expenses are not deductible, even if paid with the business card.', 'Without receipts, a deduction can be lost in a review.', 'Classifying expenses well during the year saves time and money at filing.'],
  content: [
    { type:'p', text:'Paying tax on your profit, not on everything you collect, is one of the advantages of owning a business. But it only works if your expenses are well recorded and truly belong to the business.' },
    { type:'h3', text:'The basic rule' },
    { type:'p', text:'For the IRS, an expense is deductible when it is ordinary (common in your type of business) and necessary (helpful and appropriate to run it). It does not have to be indispensable, but it must have a clear connection to your activity.' },
    { type:'h3', text:'Common categories' },
    { type:'ul', items:['Advertising and marketing: ads, cards, website, social media.','Business materials and supplies.','Software and subscriptions you use to work.','Professional services: accountant, attorney, design.','Business insurance and licenses or permits.','Bank and payment processor fees.','Payments to contractors and employees.','Vehicle: miles driven for work (with a log) or actual expenses, depending on the case.','Home office: only if you use part of your home regularly and exclusively for the business.','Phone and internet, in the proportion used for the business.','Equipment and tools, which may be deducted at once or over several years.'] },
    { type:'h3', text:'What usually causes problems' },
    { type:'ul', items:['Mixing personal and business expenses in the same account.','Meals: in general only part is deductible, and it must have a business purpose.','Deducting expenses without a receipt or a record of what they were for.','Deducting 100% of something used only partly for the business.'] },
    { type:'h3', text:'How to back up your expenses' },
    { type:'p', text:'Keep the receipt or invoice and note the date, amount and purpose. The IRS recommends keeping records for at least three years from when you filed, and longer in some cases. Taking photos of receipts with your phone is enough if they are legible and organized.' },
    { type:'h3', text:'Why classification matters' },
    { type:'p', text:'An expense in the wrong category can lose its deduction or draw the IRS’s attention. That is why at ISM we organize every expense using the Schedule C categories, the form where they are reported.' },
    { type:'note', text:'Deduction rules have limits and exceptions that depend on each case. Ask before taking a significant deduction.' }
  ]
},
{
  slug: 'irs-letter-what-to-do', catKey: 'Compliance', cat: 'Compliance', ts: '2026-11-12', date: 'November 2026', time: '5 min',
  title: 'I got a letter from the IRS: what to do step by step',
  excerpt: 'Not every letter is bad news. How to read it, how long you have to respond and how to tell it apart from a scam.',
  img: 'img/359142-700x700.webp',
  takeaways: ['Do not ignore it: almost every letter has a deadline to respond.', 'The IRS starts contact by mail, not by text message, social media or email.', 'Look for the notice number (CP or LT) in the upper right corner.', 'Keep a copy of everything you send and use a method that proves delivery.'],
  content: [
    { type:'p', text:'Getting an IRS envelope is scary, but many letters are routine notices: a change to your return, a request for information, a balance due or a confirmation. What matters is reading it calmly and acting on time.' },
    { type:'h3', text:'Step 1: do not ignore it or panic' },
    { type:'p', text:'Ignoring a letter is what turns a small problem into a big one: interest and penalties keep running, and appeal rights can be lost.' },
    { type:'h3', text:'Step 2: identify what it is' },
    { type:'ul', items:['Notice number: shown at the top right as CP or LT followed by numbers.','The tax year and form it refers to.','What they ask: pay, send documents, correct something or just inform you.','Response deadline: usually highlighted in the letter.'] },
    { type:'h3', text:'Step 3: check that it is real' },
    { type:'p', text:'The IRS starts contact by mail. It will not ask for personal information or payment by text message, social media or email, and it does not require payment with gift cards or cryptocurrency. If in doubt, do not call the number in a suspicious message: look up the notice on irs.gov or call the official number on the letter.' },
    { type:'h3', text:'Step 4: check whether the IRS is right' },
    { type:'p', text:'Compare what the letter says with your return, your W-2 or 1099 forms and your records. Errors can come from the IRS, from an employer that reported wrong, or from your own return.' },
    { type:'h3', text:'Step 5: respond on time and in writing' },
    { type:'ul', items:['If you agree, follow the letter’s instructions to pay or correct.','If you disagree, explain why and attach copies of your documents.','If you owe money and cannot pay it all, options such as payment plans exist.','Keep a copy of everything and use a delivery method with proof.'] },
    { type:'h3', text:'When to ask for help' },
    { type:'p', text:'Have a professional review it if the letter mentions an audit, a large balance, a levy, or a return you did not file. With a signed authorization, a representative can contact the IRS on your behalf.' },
    { type:'note', text:'This guide is informational. If you received a letter and do not know what to do, write to us and we will review it with you.' }
  ]
},
{
  slug: 'llc-taxes-s-corp', catKey: 'Business & LLC', cat: 'Business & LLC', ts: '2026-11-10', date: 'November 2026', time: '6 min',
  title: 'LLC and taxes: when does an S-Corp election make sense?',
  excerpt: 'Forming an LLC does not by itself mean paying less tax. How it is taxed by default and when it is worth considering the S-Corp election.',
  img: 'img/742049-400x400.webp',
  takeaways: ['By default, a single-owner LLC is taxed on Schedule C and a multi-owner LLC as a partnership.', 'The S-Corp election can reduce self-employment tax, but adds payroll and paperwork.', 'An owner who works in their S-Corp must pay themselves a reasonable salary.', 'There is no magic profit amount: it depends on each business.'],
  content: [
    { type:'p', text:'An LLC protects your personal assets from business debts, but the IRS has no special tax category for it. How it is taxed depends on how many owners it has and on what you choose.' },
    { type:'h3', text:'How an LLC is taxed by default' },
    { type:'ul', items:['Single-owner LLC: treated as part of your personal return (Schedule C). Profits pay income tax and self-employment tax.','LLC with two or more owners: treated as a partnership. It files Form 1065 and each owner receives a Schedule K-1.'] },
    { type:'h3', text:'What is the S-Corp election?' },
    { type:'p', text:'It is a way of being taxed that an LLC can choose by filing Form 2553. It is not a different type of company, but a tax decision. With it, the owner who works in the business receives a salary with withholdings, and the rest of the profits are paid out as distributions, which do not pay self-employment tax.' },
    { type:'h3', text:'Possible advantages' },
    { type:'ul', items:['It can reduce self-employment tax on the portion of profit that is not salary.'] },
    { type:'h3', text:'What changes or costs more' },
    { type:'ul', items:['You must pay yourself a reasonable salary, with payroll, withholdings and quarterly and annual forms.','An additional business return (Form 1120-S) is filed every year.','There is more bookkeeping and higher preparation costs.','Some states charge additional taxes or fees to S-Corps.'] },
    { type:'h3', text:'When can it make sense?' },
    { type:'p', text:'Normally when the business generates steady profits large enough for the savings to outweigh the costs and extra work. There is no single amount that works for everyone: it depends on your profit, your state and what salary would be reasonable.' },
    { type:'h3', text:'Before deciding' },
    { type:'ul', items:['Calculate your net profit for recent months.','Compare the tax with and without the election.','Ask about payroll costs and your state’s taxes.','Keep in mind there are deadlines to file the election.'] },
    { type:'note', text:'This is a general guide. The right decision is made with your business’s numbers. Ask us for a review.' }
  ]
},
{
  slug: 'choose-a-tax-preparer', catKey: 'Taxes', cat: 'Taxes', ts: '2026-11-05', date: 'November 2026', time: '4 min',
  title: 'How to choose a tax preparer and avoid scams',
  excerpt: 'The signs of a trustworthy professional, the questions to ask and the practices to avoid at all costs.',
  img: 'img/136064-900x500.webp',
  takeaways: ['A paid preparer must have a PTIN and sign your return.', 'Be wary of anyone who charges a percentage of your refund or promises a bigger refund.', 'Never sign a blank or incomplete return.', 'Review the return before signing it and ask for a copy.'],
  content: [
    { type:'p', text:'Choosing who you trust with your taxes and personal data is an important decision. Honest preparers are the majority, but there are practices you should know about to protect yourself.' },
    { type:'h3', text:'Signs of a good preparer' },
    { type:'ul', items:['Has a PTIN and writes it on your return, as the IRS requires.','Signs the return they prepare.','Asks for documents and asks questions before calculating anything.','Explains what is in your return in terms you understand.','Gives you a copy and is available if the IRS writes to you later.','Charges a clear fee, before starting.'] },
    { type:'h3', text:'Red flags' },
    { type:'ul', items:['Charges a percentage of your refund.','Promises a large or guaranteed refund before reviewing your documents.','Asks you to sign a blank or unreviewed return.','Does not sign the return or give their PTIN.','Deposits your refund into an account that is not yours.','Advises you to include income, expenses or dependents that are not real.'] },
    { type:'h3', text:'Useful questions before hiring' },
    { type:'ul', items:['What credentials do you have (CPA, EA, attorney, or other)?','How much do you charge and what is included?','Will you help me if the IRS writes to me or audits me?','How will you receive and protect my documents and data?','How long does it take and how do I reach you?'] },
    { type:'h3', text:'A note on immigration matters' },
    { type:'p', text:'In the U.S., a “notario público” is not an attorney. For immigration matters, always consult an attorney or an accredited representative. At ISM we focus on taxes, accounting, ITIN and businesses.' },
    { type:'h3', text:'Remember the responsibility is yours' },
    { type:'p', text:'Even if someone else prepares your return, you are responsible for what it says. That is why you should understand what you sign and keep your copy.' },
    { type:'note', text:'This guide is informational and does not replace professional advice.' }
  ]
}
]
};
