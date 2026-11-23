// Fuente única de los artículos del blog (la usan la página principal y las páginas estáticas /blog).
import { NEW } from './articles.new.mjs';

const OLD = {
  es: [
    {
      id: 1,
      cat: 'Guía IRS',
      title: 'ITIN: todo lo que necesita saber para obtener o renovar su número',
      excerpt: 'El ITIN es indispensable para declarar impuestos, abrir cuentas bancarias y construir su historial crediticio en EE. UU. Le explicamos el proceso completo.',
      date: 'Enero 2025', time: '5 min',
      img: 'img/499163-800x400.webp',
      content: [
        { type:'p', text:'El ITIN (Individual Taxpayer Identification Number) es un número de identificación fiscal emitido por el IRS para personas que no califican para un Número de Seguro Social (SSN). Si usted es inmigrante o trabajador extranjero en EE. UU., el ITIN es su puerta de entrada al sistema tributario americano.' },
        { type:'h3', text:'¿Quién necesita un ITIN?' },
        { type:'ul', items:['Personas que no tienen estatus migratorio para trabajar pero tienen obligación de declarar impuestos','Cónyuge o dependientes de ciudadanos americanos o residentes permanentes','Extranjeros con ingresos en EE. UU. sujetos a retención','Estudiantes, profesores o investigadores con visas F, J, M o Q'] },
        { type:'h3', text:'Documentos necesarios para aplicar' },
        { type:'p', text:'Para aplicar al ITIN necesita completar el Formulario W-7 del IRS junto con documentación que pruebe su identidad y estatus migratorio. Los documentos aceptados incluyen pasaporte vigente, visa de los EE. UU., acta de nacimiento con foto oficial, licencia de conducir extranjera, entre otros.' },
        { type:'h3', text:'Proceso de tramitación' },
        { type:'p', text:'El proceso puede demorar entre 7 y 11 semanas si aplica directamente al IRS por correo. Una solicitud completa y bien preparada, con todos los documentos correctos, reduce el riesgo de rechazos y demoras. En ISM Consulting le ayudamos a preparar su solicitud y a revisar que no falte nada antes de enviarla.' },
        { type:'h3', text:'¿Cuándo debo renovar mi ITIN?' },
        { type:'p', text:'Su ITIN expira si no lo ha usado en su declaración de impuestos por 3 años consecutivos. También expiran en bloque los ITINs con ciertos dígitos centrales. En ISM Consulting le avisamos con anticipación si su ITIN está próximo a expirar y gestionamos la renovación por usted.' },
      ]
    },
    {
      id: 2,
      cat: 'Guía Empresarial',
      title: 'Cómo formar una LLC siendo hispano en EE. UU.: guía completa',
      excerpt: 'Formar una LLC protege su patrimonio personal, le abre puertas a crédito empresarial y le da una estructura profesional. Le explicamos paso a paso.',
      date: 'Febrero 2025', time: '6 min',
      img: 'img/211169-800x400.webp',
      content: [
        { type:'p', text:'Una LLC (Limited Liability Company) es la estructura empresarial más popular en EE. UU. para pequeños y medianos negocios. Combina la protección legal de una corporación con la flexibilidad fiscal de un negocio unipersonal.' },
        { type:'h3', text:'¿Por qué formar una LLC?' },
        { type:'ul', items:['Separa sus bienes personales de los del negocio — si su empresa tiene deudas, su casa y cuentas personales están protegidas','Proyecta profesionalismo ante clientes, bancos y proveedores','Facilita la apertura de cuentas bancarias empresariales','Permite acceder a crédito comercial y contratos con empresas grandes','Simplifica la declaración de impuestos del negocio'] },
        { type:'h3', text:'¿En qué estado conviene formar la LLC?' },
        { type:'p', text:'Wyoming, Delaware y New Mexico son populares por sus ventajas en privacidad y costos bajos. Sin embargo, si su negocio opera principalmente en Illinois, Texas o Florida, generalmente conviene registrarla en el estado donde opera para evitar registros adicionales.' },
        { type:'h3', text:'Pasos para formar su LLC' },
        { type:'ul', items:['Elegir el nombre de la empresa (debe ser único en el estado)','Designar un Registered Agent (agente registrado)','Presentar los Articles of Organization ante el estado','Obtener su EIN (número de identificación patronal) ante el IRS','Abrir cuenta bancaria empresarial','Registrar la empresa en FinCEN si aplica (BOI Report)'] },
        { type:'p', text:'En ISM Consulting nos encargamos de todo el proceso. La formación de su LLC puede estar lista en 3 a 7 días hábiles dependiendo del estado.' },
      ]
    },
    {
      id: 3,
      cat: 'Actualización 2026',
      title: 'FinCEN BOI 2026: ya no es obligatorio para empresas de EE. UU.',
      excerpt: 'El 11 de agosto de 2026, FinCEN eliminó de forma permanente la obligación de reportar beneficiarios reales para empresas y personas de EE. UU. Solo ciertas empresas extranjeras deben seguir reportando.',
      date: 'Agosto 2026', time: '4 min',
      img: 'img/545856-800x400.webp',
      content: [
        { type:'p', text:'La Ley de Transparencia Corporativa (Corporate Transparency Act) entró en vigor el 1 de enero de 2024 y en un inicio exigía que la gran mayoría de empresas registradas en EE. UU. reportaran a sus beneficiarios reales ante FinCEN. Esa obligación cambió por completo en 2025 y 2026.' },
        { type:'h3', text:'¿Qué cambió?' },
        { type:'p', text:'El 21 de marzo de 2025, el Departamento del Tesoro y FinCEN eliminaron la obligación de reporte BOI para empresas y personas de EE. UU. mediante una regla provisional. El 11 de agosto de 2026, FinCEN hizo esa exención permanente mediante una regla final que entró en vigor el 14 de agosto de 2026.' },
        { type:'h3', text:'¿Quién ya NO debe reportar?' },
        { type:'ul', items:['LLC, corporaciones y demás entidades creadas en EE. UU.','Los beneficiarios reales de esas empresas, sean o no ciudadanos estadounidenses','Personas de EE. UU. que ya tenían un FinCEN ID — no necesitan actualizar ni corregir esa información'] },
        { type:'h3', text:'¿Quién SÍ debe seguir reportando?' },
        { type:'p', text:'Solo las empresas extranjeras registradas para operar en EE. UU. deben reportar BOI, y únicamente sobre sus beneficiarios que no sean personas de EE. UU. Si su empresa fue formada en EE. UU. (por ejemplo una LLC), esta obligación ya no le aplica.' },
        { type:'p', text:'Si ya presentó un reporte BOI antes de este cambio, no necesita hacer nada adicional. En ISM Consulting revisamos su situación específica y le confirmamos si algún trámite de FinCEN le aplica todavía.' },
      ]
    }
  ],
  en: [
    {
      id: 1,
      cat: 'IRS Guide',
      title: 'ITIN: everything you need to know to get or renew your number',
      excerpt: 'The ITIN is essential for filing taxes, opening bank accounts, and building your credit history in the U.S. We explain the complete process.',
      date: 'January 2025', time: '5 min',
      img: 'img/499163-800x400.webp',
      content: [
        { type:'p', text:'The ITIN (Individual Taxpayer Identification Number) is a tax ID issued by the IRS for people who do not qualify for a Social Security Number (SSN). If you are an immigrant or foreign worker in the U.S., the ITIN is your gateway to the American tax system.' },
        { type:'h3', text:'Who needs an ITIN?' },
        { type:'ul', items:['People without work authorization but with a tax filing obligation','Spouses or dependents of U.S. citizens or permanent residents','Foreign nationals with U.S.-sourced income subject to withholding','Students, teachers, or researchers on F, J, M, or Q visas'] },
        { type:'h3', text:'Required documents' },
        { type:'p', text:'To apply for an ITIN, you need to complete IRS Form W-7 along with documentation proving your identity and foreign status. Accepted documents include a valid passport, U.S. visa, birth certificate with official photo ID, foreign driver\'s license, among others.' },
        { type:'h3', text:'Application process' },
        { type:'p', text:'The process can take 7 to 11 weeks if you apply directly to the IRS by mail. A complete, well-prepared application with all the right documents reduces the risk of rejections and delays. At ISM Consulting we help you prepare your application and check that nothing is missing before it is sent.' },
      ]
    },
    {
      id: 2,
      cat: 'Business Guide',
      title: 'How to form an LLC as a Hispanic in the U.S.: complete guide',
      excerpt: 'Forming an LLC protects your personal assets, opens doors to business credit, and gives you a professional structure. We explain step by step.',
      date: 'February 2025', time: '6 min',
      img: 'img/211169-800x400.webp',
      content: [
        { type:'p', text:'An LLC (Limited Liability Company) is the most popular business structure in the U.S. for small and medium businesses. It combines the legal protection of a corporation with the tax flexibility of a sole proprietorship.' },
        { type:'h3', text:'Why form an LLC?' },
        { type:'ul', items:['Separates your personal assets from the business — if your company has debts, your home and personal accounts are protected','Projects professionalism to clients, banks, and suppliers','Facilitates opening business bank accounts','Allows access to commercial credit and contracts with large companies'] },
        { type:'p', text:'At ISM Consulting we handle the entire process. Your LLC formation can be ready in 3 to 7 business days depending on the state.' },
      ]
    },
    {
      id: 3,
      cat: '2026 Update',
      title: 'FinCEN BOI 2026: no longer required for U.S. companies',
      excerpt: 'On August 11, 2026, FinCEN permanently removed the beneficial ownership reporting requirement for U.S. companies and U.S. persons. Only certain foreign companies must still report.',
      date: 'August 2026', time: '4 min',
      img: 'img/545856-800x400.webp',
      content: [
        { type:'p', text:'The Corporate Transparency Act took effect on January 1, 2024 and initially required most companies registered in the U.S. to report information about their beneficial owners to FinCEN. That requirement changed completely in 2025 and 2026.' },
        { type:'h3', text:'What changed?' },
        { type:'p', text:'On March 21, 2025, the Treasury Department and FinCEN removed the BOI reporting requirement for U.S. companies and U.S. persons through an interim final rule. On August 11, 2026, FinCEN made that exemption permanent with a final rule that took effect on August 14, 2026.' },
        { type:'h3', text:'Who no longer needs to report?' },
        { type:'ul', items:['LLCs, corporations, and other entities created in the U.S.','Beneficial owners of those companies, regardless of citizenship','U.S. persons who already had a FinCEN ID — no update or correction needed'] },
        { type:'h3', text:'Who still must report?' },
        { type:'p', text:'Only foreign companies registered to do business in the U.S. must still report BOI, and only for beneficial owners who are not U.S. persons. If your company was formed in the U.S. (like an LLC), this requirement no longer applies to you.' },
        { type:'p', text:'If you already filed a BOI report before this change, you don\'t need to take any further action. At ISM Consulting we review your specific situation and confirm whether any FinCEN filing still applies to you.' },
      ]
    }
  ]
};
const META = {
  es: { 1: { slug:'itin-obtener-renovar', catKey:'ITIN', ts:'2025-01-15',
            takeaways:['El ITIN es un número de identificación fiscal del IRS para quienes no califican para un SSN.','Se solicita con el Formulario W-7 y documentos que prueben su identidad.','Vence si no se usa en una declaración por 3 años consecutivos.','Una solicitud completa y bien preparada reduce el riesgo de rechazos y demoras.'] },
        2: { slug:'formar-llc', catKey:'Empresas y LLC', ts:'2025-02-15',
            takeaways:['La LLC separa su patrimonio personal del del negocio.','El mejor estado depende de dónde opere su negocio.','Después de formarla necesita un EIN y una cuenta bancaria del negocio.','Es una estructura flexible para pequeños y medianos negocios.'] },
        3: { slug:'fincen-boi', catKey:'Cumplimiento', ts:'2026-08-11',
            takeaways:['Las empresas y personas de EE. UU. ya no están obligadas a reportar beneficiarios reales (BOI).','Solo ciertas empresas extranjeras registradas en EE. UU. deben seguir reportando.','Si ya presentó un reporte, no necesita hacer nada más.'] } },
  en: { 1: { slug:'itin-get-or-renew', catKey:'ITIN', ts:'2025-01-15',
            takeaways:['The ITIN is an IRS tax ID number for people who do not qualify for an SSN.','It is requested with Form W-7 and documents proving your identity.','It expires if not used on a return for 3 consecutive years.','A complete, well-prepared application reduces the risk of rejections and delays.'] },
        2: { slug:'form-an-llc', catKey:'Business & LLC', ts:'2025-02-15',
            takeaways:['An LLC separates your personal assets from the business’s.','The best state depends on where your business operates.','After forming it you need an EIN and a business bank account.','It is a flexible structure for small and medium businesses.'] },
        3: { slug:'fincen-boi', catKey:'Compliance', ts:'2026-08-11',
            takeaways:['U.S. companies and U.S. persons are no longer required to report beneficial ownership (BOI).','Only certain foreign companies registered in the U.S. must keep reporting.','If you already filed a report, you do not need to do anything else.'] } }
};

export const ARTICLES = { es: [], en: [] };
for (const lang of ['es', 'en']) {
  const oldList = OLD[lang].map(a => ({ ...a, ...META[lang][a.id], key: 'o' + a.id, cat: META[lang][a.id].catKey }));
  const newList = NEW[lang].map((a, i) => ({ ...a, key: 'n' + i }));
  ARTICLES[lang] = [...newList, ...oldList].sort((a, b) => b.ts.localeCompare(a.ts));
}
export const CATEGORIES = { es: ['Todos', 'Impuestos', 'ITIN', 'Empresas y LLC', 'Cumplimiento'], en: ['All', 'Taxes', 'ITIN', 'Business & LLC', 'Compliance'] };
