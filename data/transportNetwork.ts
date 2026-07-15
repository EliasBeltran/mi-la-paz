export type Segment={mode:'Caminata'|'Pumakatari'|'Teleférico'|'Minibús';from:string;to:string;minutes:number;cost:number;walk:number;accessible:boolean;instruction:string};
export const normalRoute:Segment[]=[
 {mode:'Caminata',from:'Miraflores',to:'Parada Busch',minutes:6,cost:0,walk:420,accessible:true,instruction:'Camina por la acera accesible hasta la parada.'},
 {mode:'Pumakatari',from:'Parada Busch',to:'Estación del Libertador',minutes:18,cost:2.5,walk:0,accessible:true,instruction:'Aborda la ruta municipal de demostración.'},
 {mode:'Caminata',from:'Parada Libertador',to:'Estación Línea Amarilla',minutes:4,cost:0,walk:210,accessible:true,instruction:'Sigue la señal de conexión.'},
 {mode:'Teleférico',from:'Línea Amarilla',to:'Estación Sopocachi',minutes:12,cost:3,walk:0,accessible:true,instruction:'Viaja dos estaciones.'},
 {mode:'Caminata',from:'Estación Sopocachi',to:'Destino',minutes:7,cost:0,walk:480,accessible:true,instruction:'Camina hasta el destino.'}
];
export const alternateRoute:Segment[]=[normalRoute[0],{mode:'Minibús',from:'Parada Busch',to:'Plaza España',minutes:28,cost:3.5,walk:0,accessible:false,instruction:'Alternativa simulada por bloqueo.'},normalRoute[4]];
export function summarizeRoute(route:Segment[]){return{minutes:route.reduce((n,s)=>n+s.minutes,0),cost:route.reduce((n,s)=>n+s.cost,0),walk:route.reduce((n,s)=>n+s.walk,0),transfers:Math.max(0,route.filter(s=>s.mode!=='Caminata').length-1),accessible:route.every(s=>s.accessible)}}
