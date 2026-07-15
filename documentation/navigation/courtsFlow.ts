import type{NavigationFlowSection}from'./types';
export const courtsNavigationFlows:NavigationFlowSection[]=[
{id:'courts-navigation',title:'Canchas y reservas',description:'Lista actual de una cancha, reserva, cancelación y confirmación administrativa.',module:'Canchas',roles:['Ciudadano','Encargado deportivo'],code:`flowchart TD
 C[Canchas /canchas] -->|Selecciona filtro| F[Filtro local]
 F -->|Una cancha disponible| D[Detalle en tarjeta]
 D -->|Ver disponibilidad y reservar| R[Reserva /canchas/reservar]
 R -->|Selecciona fecha y horario| H[Horario]
 H -->|Acepta reglamento| A{¿Tiene reserva activa?}
 A -->|Sí| E[Mensaje: cancela primero]
 A -->|No| CF[Reserva Confirmada]
 CF -->|Cancelar reserva| CA[Cancelada]
 D -->|Reportar daños| RP[Nuevo reporte urbano]
 AD[Admin canchas] -->|Confirma reserva| CF
 AD -->|Cambia estado de cancha| S[Disponible / mantenimiento / cerrada]
 F -.->|Solo existe una cancha| P[Filtro parcial]
 classDef partial fill:#fff1c2,stroke:#8a6500
 class P partial`},
{id:'court-sequence',title:'Secuencia: reserva de cancha',description:'Persistencia local y confirmación por el encargado deportivo.',module:'Canchas',roles:['Ciudadano','Encargado deportivo'],code:`sequenceDiagram
 actor C as Ciudadano
 participant S as Estado compartido
 actor E as Encargado deportivo
 C->>S: Selecciona fecha, horario y participantes
 S->>S: Verifica que no exista reserva activa
 S-->>C: Confirma código CAN-2026-0720
 S->>E: Muestra reserva en panel
 E->>S: Confirma reserva
 S-->>C: Genera notificación
 C->>S: Cancela desde lista si corresponde`}
];
