import type{NavigationFlowSection}from'./types';
export const reportsNavigationFlows:NavigationFlowSection[]=[
{id:'reports-navigation',title:'Reportes urbanos',description:'Creación, duplicado, seguimiento y cierre sobre una sola entidad compartida.',module:'Reportes',roles:['Ciudadano','Encargado municipal'],code:`flowchart TD
 L[Mis reportes] -->|Nuevo| N[Nuevo reporte]
 N -->|Selecciona categoría y zona| D{¿Sumidero en Miraflores?}
 D -->|Sí| S[Reporte similar]
 S -->|Apoyar y agregar evidencia| R[Detalle existente]
 D -->|No| F[Foto + descripción + riesgo]
 F -->|Enviar reporte| C[Confirmación y código]
 C -->|Ver seguimiento| R
 R -->|Enviar mensaje| CH[Chat compartido]
 R -->|Estado Resuelto| E[Evidencia antes/después]
 E -->|Calificar| Q[Rating 1–5]
 E -->|Problema continúa| RE[Estado Reabierto]
 AR[Admin reportes] -->|Gestionar| AD[Detalle administrativo]
 AD -->|Asigna unidad y estado| R
 AD -->|Adjunta evidencia de resolución| EV[Evidencia compartida]
 EV -->|Marca Resuelto| E`},
{id:'report-sequence',title:'Secuencia: reporte urbano',description:'Interacción real entre ciudadano, almacenamiento local, encargado y notificaciones.',module:'Reportes',roles:['Ciudadano','Encargado municipal'],code:`sequenceDiagram
 actor C as Ciudadano
 participant A as Aplicación
 actor E as Encargado
 participant U as Unidad responsable simulada
 participant N as Notificaciones
 C->>A: Envía categoría, zona, foto y descripción
 A-->>C: Muestra código LPZ-2026-00482
 A->>E: Caso visible en panel
 E->>A: Define prioridad, unidad y estado
 A->>N: Genera aviso ciudadano
 E->>C: Envía mensaje por chat compartido
 E->>U: Asigna unidad en el estado del caso
 U-->>E: Evidencia de trabajo simulada
 E->>A: Marca Resuelto
 A->>N: Notifica resolución
 C->>A: Califica o solicita reapertura`}
];
