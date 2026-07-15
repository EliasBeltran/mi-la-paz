import type{NavigationFlowSection}from'./types';
export const petsNavigationFlows:NavigationFlowSection[]=[
{id:'pets-navigation',title:'Mascotas',description:'Registro, moderación, publicación, avistamientos y cierre existentes.',module:'Mascotas',roles:['Ciudadano','Visitante','Moderador de mascotas'],code:`flowchart TD
 M[Mascotas] -->|Registrar| R[Registro /mascotas/nueva]
 R -->|Guarda nombre y zona| P[Pendiente de revisión]
 P -->|Moderador aprueba| PU[Publicada]
 P -->|Solicita corrección| C[Requiere corrección]
 P -->|Rechaza| RE[Rechazada]
 M -->|Ver alerta| A[Alerta de Kira]
 PU --> A
 A -->|Visitante envía descripción| AV[Posible avistamiento]
 AV -->|Notifica| N[Propietario]
 A -->|Marca reunida| CE[Cerrada]
 MOD[Admin mascotas] -->|Cerrar alerta| CE
 C -.->|No existe editor específico de corrección| X[Parcial]
 classDef partial fill:#fff1c2,stroke:#8a6500
 class X partial`},
{id:'pet-sequence',title:'Secuencia: mascota extraviada',description:'Roles conectados por el estado y las notificaciones locales.',module:'Mascotas',roles:['Ciudadano','Visitante','Moderador de mascotas'],code:`sequenceDiagram
 actor P as Propietario
 actor M as Moderador
 actor O as Ciudadano observador
 participant S as Estado compartido
 participant N as Notificaciones
 P->>S: Registra a Kira
 S->>M: Muestra alerta pendiente
 M->>S: Aprueba publicación
 S-->>P: Notifica aprobación
 O->>S: Envía avistamiento
 S->>N: Crea aviso urgente
 N-->>P: Abre alerta de Kira
 P->>S: Marca reunida y cierra`}
];
