'use client';
import { useCallback, useEffect, useState } from 'react';

export type Role='ciudadano'|'reportes'|'salud'|'medico'|'mascotas'|'deportes'|'admin';
export type Message={id:string;author:'Elena'|'Operador';text:string;time:string};
export type DemoState={
 role:Role; report:{status:string;priority:string;unit:string;district:string;messages:Message[];evidence:string[]};
 pet:{status:string;sightings:number;lastSighting:string}; appointment:{status:string;room:string;ahead:number;wait:number};
 clinical:{tokenStatus:string;token:string;categories:string[];visits:string[];audit:string[]};
 route:{incident:boolean;started:boolean}; court:{status:string;reservation:string}; points:number;
};
export const seed:DemoState={role:'ciudadano',report:{status:'Recibido',priority:'Media',unit:'Sin asignar',district:'Centro',messages:[{id:'m1',author:'Operador',text:'Recibimos tu reporte. Estamos validando la ubicación.',time:'10:48'}],evidence:[]},pet:{status:'Pendiente de revisión',sightings:0,lastSighting:''},appointment:{status:'Solicitada',room:'Consultorio 04',ahead:4,wait:25},clinical:{tokenStatus:'Sin generar',token:'',categories:[],visits:['12 Jun · Control de presión arterial (ficticio)','03 Mar · Consulta de medicina general (ficticia)'],audit:[]},route:{incident:false,started:false},court:{status:'Disponible',reservation:'Sin reserva'},points:120};
const KEY='mlp-demo-v2';
export function useDemoStore(){const [state,setState]=useState<DemoState>(seed);
 useEffect(()=>{try{const raw=localStorage.getItem(KEY);if(raw)setState(JSON.parse(raw))}catch{};const bc=new BroadcastChannel('mi-la-paz-demo');bc.onmessage=e=>setState(e.data);const storage=(e:StorageEvent)=>{if(e.key===KEY&&e.newValue)setState(JSON.parse(e.newValue))};addEventListener('storage',storage);return()=>{bc.close();removeEventListener('storage',storage)}},[]);
 const update=useCallback((fn:(s:DemoState)=>DemoState)=>setState(old=>{const next=fn(old);localStorage.setItem(KEY,JSON.stringify(next));const bc=new BroadcastChannel('mi-la-paz-demo');bc.postMessage(next);bc.close();return next}),[]);
 const reset=useCallback(()=>{localStorage.setItem(KEY,JSON.stringify(seed));setState(seed);const bc=new BroadcastChannel('mi-la-paz-demo');bc.postMessage(seed);bc.close()},[]);
 return{state,update,reset};}
