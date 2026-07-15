export const categories = [
  ['Salud','HeartPulse'],['Movilidad','Bus'],['Seguridad y emergencias','ShieldAlert'],['Servicios urbanos','Building2'],
  ['Trámites','FileText'],['Medio ambiente','Leaf'],['Cultura y deporte','Palette'],['Mascotas','PawPrint']
] as const;
export const services = [
  {title:'Reservar una cita médica',cat:'Salud',desc:'Agenda atención en centros de salud cercanos.',keys:'ficha médica doctor hospital salud'},
  {title:'Cómo llegar al hospital',cat:'Movilidad',desc:'Compara rutas accesibles y tiempos estimados.',keys:'llegar hospital bus transporte ruta'},
  {title:'Reportar un problema urbano',cat:'Servicios urbanos',desc:'Informa sobre baches, basura, luminarias y más.',keys:'bache basura sumidero problema reporte'},
  {title:'Reservar espacios deportivos',cat:'Cultura y deporte',desc:'Consulta canchas y espacios disponibles.',keys:'reservar cancha deporte'},
  {title:'Pago de impuestos',cat:'Trámites',desc:'Información y requisitos para tus obligaciones.',keys:'pago impuesto trámite'}
];
export const initialNotifications = [
  {id:1,type:'Salud',title:'Tu cita médica es mañana a las 09:30',time:'Hace 10 min',urgent:false,read:false},
  {id:2,type:'Reportes',title:'Tu reporte LPZ-2026-00482 fue asignado',time:'Hace 1 h',urgent:false,read:false},
  {id:3,type:'Alertas',title:'Alerta preventiva de lluvia en Miraflores',time:'Hace 2 h',urgent:true,read:false},
  {id:4,type:'Transporte',title:'La ruta hacia el hospital presenta un desvío',time:'Ayer',urgent:false,read:true}
];
export const reportRows = [
 {code:'LPZ-2026-00482',category:'Sumidero obstruido',zone:'Miraflores',date:'15 Jul, 10:42',priority:'Alta',status:'En atención',unit:'Mantenimiento vial'},
 {code:'LPZ-2026-00476',category:'Bache',zone:'San Pedro',date:'15 Jul, 09:18',priority:'Media',status:'Asignado',unit:'Infraestructura'},
 {code:'LPZ-2026-00470',category:'Luminaria dañada',zone:'Cotahuma',date:'14 Jul, 18:30',priority:'Baja',status:'Recibido',unit:'Alumbrado'}
];
