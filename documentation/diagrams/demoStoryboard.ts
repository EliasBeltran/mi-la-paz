import type{SystemDiagram}from'./types';
export const demoStoryboardDiagram:SystemDiagram={id:'storyboard',title:'Demo de hackatón',description:'Orden recomendado para presentar el prototipo y observar cambios de datos entre roles.',actors:['Elena','Encargado de salud','Médico','Operador','Moderador','Ciudadano observador'],requirements:['Demostración integral de seis escenas'],routes:['/demo','/salud','/transporte/multimodal','/reportes','/mascotas','/canchas'],status:'Implementado',updatedAt:'2026-07-15',legend:['Cada subgrafo es una escena','Las flechas indican el orden de presentación'],code:`flowchart TB
 subgraph E1[Escena 1 · Salud]
  A1[Elena · /salud<br/>Solicita cita] --> A2[Encargado · /admin/salud<br/>Confirma cita]
 end
 subgraph E2[Escena 2 · Historial]
  B1[Elena · /salud/historial<br/>Genera QR] --> B2[Médico · acceso clínico<br/>Registra atención ficticia]
 end
 subgraph E3[Escena 3 · Transporte]
  C1[Elena · ruta multimodal<br/>Pumakatari + Teleférico] --> C2[Sistema · bloqueo<br/>Genera alternativa]
 end
 subgraph E4[Escena 4 · Reportes]
  D1[Elena · reporta sumidero] --> D2[Operador · responde y resuelve]
 end
 subgraph E5[Escena 5 · Mascotas]
  F1[Moderador · publica alerta Kira] --> F2[Observador · registra avistamiento] --> F3[Propietario · cierra caso]
 end
 subgraph E6[Escena 6 · Canchas]
  G1[Ciudadano · consulta y reserva] --> G2[Deportes · confirma reserva]
 end
 A2 --> B1
 B2 --> C1
 C2 --> D1
 D2 --> F1
 F3 --> G1`};
