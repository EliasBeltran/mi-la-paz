import type{NavigationFlowSection}from'./types';
export const adminNavigationFlows:NavigationFlowSection[]=[
{id:'admin-roles',title:'Paneles y permisos por rol',description:'Destinos del selector de demo y guardas aplicadas en AdminRoleGuard.',module:'Administración',roles:['Todos los encargados'],code:`flowchart TD
 D[Selector demo] -->|Encargado reportes| R[/admin/reportes + mapa]
 D -->|Encargado salud| S[/admin/salud]
 D -->|Médico| M[/admin/salud/acceso-clinico]
 D -->|Moderador mascotas| P[/admin/mascotas]
 D -->|Encargado deportivo| C[/admin/canchas]
 D -->|Administrador| A[/admin y todos los módulos]
 R -->|Ruta no permitida| X[Vista no disponible]
 S -->|Ruta no permitida| X
 M -->|Ruta no permitida| X
 P -->|Ruta no permitida| X
 C -->|Ruta no permitida| X
 X -->|Cambiar rol| D
 R -->|Documentación| DOC[Mapa del sistema]
 S -->|Documentación| DOC
 M -->|Documentación| DOC
 P -->|Documentación| DOC
 C -->|Documentación| DOC
 A -->|Documentación| DOC`},
{id:'admin-report-role',title:'Encargado municipal',description:'Lista, detalle, chat, evidencia, estados y mapa operativo.',module:'Administración',roles:['Encargado municipal'],code:`flowchart TD
 D[Demo] -->|Selecciona reportes| L[Admin reportes]
 L -->|Gestionar| R[Detalle del caso]
 R -->|Enviar mensaje| C[Chat ciudadano]
 R -->|Evidencia de trabajo| E[Evidencia]
 R -->|Guardar Asignado| U{¿Unidad definida?}
 U -->|No| X[Error de validación]
 U -->|Sí| A[Ciudadano notificado]
 R -->|Guardar Resuelto| V{¿Hay evidencia?}
 V -->|No| X
 V -->|Sí| A
 L -->|Menú Mapa| M[Mapa operativo]
 M -->|Gestionar caso| R`},
{id:'admin-health-role',title:'Encargado de salud',description:'Agenda compartida con comprobante y fila virtual ciudadana.',module:'Administración',roles:['Encargado de salud'],code:`flowchart LR
 D[Demo] -->|Selecciona salud| A[Agenda]
 A -->|Confirmar cita| C[Confirmada]
 A -->|Marcar llegada| P[Paciente presente]
 A -->|Llamar siguiente| E[En espera y menor tiempo]
 A -->|Cambiar consultorio| R[Consultorio 08]
 A -->|Completar atención| F[Completada]
 C -->|Notifica| U[Ciudadano]
 P -->|Actualiza| Q[Fila virtual]
 E -->|Actualiza| Q
 R -->|Actualiza| U
 F -->|Actualiza| U`},
{id:'admin-medical-role',title:'Médico',description:'Acceso únicamente a categorías clínicas autorizadas mediante token.',module:'Administración',roles:['Médico'],code:`flowchart TD
 D[Demo] -->|Selecciona médico| M[Acceso clínico]
 M --> V{¿Token activo y vigente?}
 V -->|No| X[Sin acceso]
 V -->|Sí| C[Categorías autorizadas]
 C -->|Escribe observación| R[Registrar atención]
 R -->|Consume uso único| U[Token Utilizado]
 R -->|Actualiza| H[Historial y auditoría ciudadana]`},
{id:'admin-pet-role',title:'Moderador de mascotas',description:'Decisiones sobre la alerta compartida y notificación al propietario.',module:'Administración',roles:['Moderador de mascotas'],code:`flowchart LR
 D[Demo] -->|Selecciona mascotas| M[Moderación]
 M -->|Aprobar| P[Publicada]
 M -->|Solicitar corrección| C[Requiere corrección]
 M -->|Rechazar| R[Rechazada]
 M -->|Cerrar| F[Cerrada]
 P --> N[Notificación]
 C --> N
 R --> N
 F --> N`},
{id:'admin-sports-role',title:'Encargado deportivo',description:'Reserva compartida y estado operativo de la cancha.',module:'Administración',roles:['Encargado deportivo'],code:`flowchart LR
 D[Demo] -->|Selecciona deportes| C[Gestión deportiva]
 C -->|Existe reserva| R[Confirmar reserva]
 R -->|Notifica| U[Ciudadano]
 C -->|Cambia selector| E[Estado de cancha]
 E -->|Persiste| L[Lista ciudadana]`},
{id:'admin-general-role',title:'Administrador general',description:'Acceso al resumen y a todos los módulos del menú lateral.',module:'Administración',roles:['Administrador'],code:`flowchart TD
 D[Demo] -->|Selecciona administrador| P[Panel principal]
 P -->|Menú Reportes| R[Reportes]
 P -->|Menú Salud| S[Salud]
 P -->|Menú Mascotas| M[Mascotas]
 P -->|Menú Canchas| C[Canchas]
 P -->|Menú Mapa| MAP[Mapa]
 P -->|Menú Alertas| A[Alertas]
 P -->|Documentación| DOC[Mapa y flujo]
 P -.->|Métricas y gráficos| X[Datos mayormente estáticos]
 classDef simulated fill:#d5e3ff,stroke:#003366
 class X simulated`},
{id:'clinical-sequence',title:'Secuencia: historial clínico',description:'Paciente, token, médico y auditoría sobre el comportamiento actual.',module:'Administración',roles:['Ciudadano','Médico'],code:`sequenceDiagram
 actor P as Paciente
 participant S as Aplicación
 participant Q as QR temporal
 actor M as Médico
 participant A as Auditoría
 P->>S: Selecciona categorías y código 123456
 S->>Q: Crea token de 15 minutos / 1 uso
 M->>S: Abre vista con rol médico
 S->>Q: Valida estado, expiración y usos
 Q-->>M: Autoriza categorías seleccionadas
 M->>S: Registra observación ficticia
 S->>Q: Marca Utilizado
 S->>A: Registra categorías consultadas
 A-->>P: Aparece en historial`}
];
