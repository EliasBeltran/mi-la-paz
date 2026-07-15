'use client';
import {useCallback,useEffect,useState} from'react';

export type Role='ciudadano'|'reportes'|'salud'|'medico'|'mascotas'|'deportes'|'admin';
export type Message={id:string;author:'Elena'|'Operador';text:string;time:string};
export type DemoNotification={id:number;type:string;title:string;time:string;urgent:boolean;read:boolean;route:string;origin:string};
export type Sighting={id:string;description:string;zone:string;time:string};
export type DemoState={
 role:Role;session:{authenticated:boolean;visitor:boolean};
 report:{code:string;category:string;zone:string;description:string;immediateRisk:boolean;status:string;priority:string;unit:string;district:string;messages:Message[];evidence:string[];history:string[];rejectionReason:string;rating:number};
 pet:{registered:boolean;name:string;species:string;color:string;zone:string;feature:string;status:string;sightings:Sighting[]};
 appointment:{code:string;facility:string;specialty:string;professional:string;date:string;time:string;status:string;room:string;ahead:number;wait:number;requirements:string[]};
 clinical:{tokenStatus:string;token:string;createdAt:string;expiresAt:string;maxUses:number;uses:number;categories:string[];visits:string[];audit:string[]};
 route:{origin:string;destination:string;preference:string;incident:boolean;started:boolean;saved:boolean};
 court:{status:string;reservation:{status:string;date:string;time:string;participants:number;code:string}};
 alert:{active:boolean;title:string;level:string;zone:string;publishedAt:string};
 caregiver:{saved:boolean;name:string;permissions:string[]};notifications:DemoNotification[];favorites:string[];points:number;
};
const now='Ahora';
export const seed:DemoState={
 role:'ciudadano',session:{authenticated:true,visitor:false},
 report:{code:'LPZ-2026-00482',category:'Sumidero obstruido',zone:'Miraflores',description:'El sumidero está tapado y el agua se acumula.',immediateRisk:true,status:'Recibido',priority:'Media',unit:'Sin asignar',district:'Centro',messages:[{id:'m1',author:'Operador',text:'Recibimos tu reporte. Estamos validando la ubicación.',time:'10:48'}],evidence:[],history:['10:42 · Reporte recibido'],rejectionReason:'',rating:0},
 pet:{registered:true,name:'Kira',species:'Perro',color:'Café claro y blanco',zone:'Miraflores',feature:'Collar azul',status:'Pendiente de revisión',sightings:[]},
 appointment:{code:'CITA-260721-0930',facility:'Hospital La Merced',specialty:'Medicina general',professional:'Dra. Lucía Mamani',date:'21 de julio',time:'09:30',status:'Solicitada',room:'Consultorio 04',ahead:4,wait:25,requirements:['Carnet de identidad','Comprobante de cita']},
 clinical:{tokenStatus:'Sin generar',token:'',createdAt:'',expiresAt:'',maxUses:1,uses:0,categories:[],visits:['12 Jun · Control de presión arterial (ficticio)','03 Mar · Consulta de medicina general (ficticia)'],audit:[]},
 route:{origin:'Miraflores',destination:'Hospital La Merced',preference:'Más accesible',incident:false,started:false,saved:false},
 court:{status:'Disponible',reservation:{status:'Sin reserva',date:'',time:'',participants:0,code:''}},alert:{active:true,title:'Lluvia intensa en Miraflores',level:'Preventivo',zone:'Miraflores',publishedAt:'Hoy · 14:00'},caregiver:{saved:false,name:'Patricia Vargas',permissions:[]},
 notifications:[{id:1,type:'Salud',title:'Tu cita médica es mañana a las 09:30',time:'Hace 10 min',urgent:false,read:false,route:'/salud/citas/demo',origin:'Agenda de salud'},{id:2,type:'Alertas',title:'Alerta preventiva de lluvia en Miraflores',time:'Hace 2 h',urgent:true,read:false,route:'/alertas',origin:'Centro de monitoreo'}],favorites:[],points:120
};
const KEY='mlp-demo-v3';const CHANNEL='mi-la-paz-demo-v3';
function migrate(raw:string|null):DemoState{if(!raw)return seed;try{const saved=JSON.parse(raw)as Partial<DemoState>;return{...seed,...saved,session:{...seed.session,...saved.session},report:{...seed.report,...saved.report},pet:{...seed.pet,...saved.pet},appointment:{...seed.appointment,...saved.appointment},clinical:{...seed.clinical,...saved.clinical},route:{...seed.route,...saved.route},court:{...seed.court,...saved.court,reservation:{...seed.court.reservation,...saved.court?.reservation}},alert:{...seed.alert,...saved.alert},caregiver:{...seed.caregiver,...saved.caregiver}}}catch{return seed}}
export function notification(type:string,title:string,route:string,urgent=false):DemoNotification{return{id:Date.now(),type,title,time:now,urgent,read:false,route,origin:'Mi La Paz'}}
export function useDemoStore(){const[state,setState]=useState<DemoState>(seed);
 useEffect(()=>{const loaded=migrate(localStorage.getItem(KEY));setState(loaded);const bc='BroadcastChannel'in window?new BroadcastChannel(CHANNEL):null;if(bc)bc.onmessage=e=>setState(e.data);const storage=(e:StorageEvent)=>{if(e.key===KEY)setState(migrate(e.newValue))};addEventListener('storage',storage);return()=>{bc?.close();removeEventListener('storage',storage)}},[]);
 const update=useCallback((fn:(s:DemoState)=>DemoState)=>setState(old=>{const next=fn(old);localStorage.setItem(KEY,JSON.stringify(next));if('BroadcastChannel'in window){const bc=new BroadcastChannel(CHANNEL);bc.postMessage(next);bc.close()}return next}),[]);
 const reset=useCallback(()=>{['mlp-demo-v2','mlp-report','mlp-notices',KEY].forEach(k=>localStorage.removeItem(k));localStorage.setItem(KEY,JSON.stringify(seed));setState(seed);if('BroadcastChannel'in window){const bc=new BroadcastChannel(CHANNEL);bc.postMessage(seed);bc.close()}},[]);
 return{state,update,reset};}
