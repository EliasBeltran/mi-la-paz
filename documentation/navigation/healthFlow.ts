import type{NavigationFlowSection}from'./types';
export const healthNavigationFlows:NavigationFlowSection[]=[
{id:'health-navigation',title:'Salud: cita, fila y cuidador',description:'Wizard real de reserva y sincronización con recepción.',module:'Salud',roles:['Ciudadano','Encargado de salud'],code:`flowchart TD
 H[Salud /salud] -->|Solicitar cita| B[Reserva /salud/reservar]
 B -->|Selecciona establecimiento| E[Especialidad]
 E -->|Selecciona especialidad| P[Profesional]
 P -->|Selecciona profesional| F[Fecha]
 F -->|Selecciona fecha| T[Horario]
 T -->|Continúa| RV[Revisión]
 RV -->|Confirma cita| C[Comprobante /salud/citas/demo]
 C -->|Confirmar asistencia| CF[Estado Confirmada]
 C -->|Reprogramar| B
 C -->|Cancelar| CC[Estado Cancelada]
 H -->|Abre fila| Q[Fila virtual]
 Q -->|Avisa llegada| PP[Paciente presente]
 H -->|Familiar autorizado| FA[Permisos]
 FA -->|Guarda| PR[Resumen en perfil]
 AH[Admin salud] -->|Confirma, marca llegada o llama siguiente| S[(Cita compartida)]
 S -->|Actualiza| C
 S -->|Actualiza espera| Q`},
{id:'clinical-navigation',title:'Salud: historial y acceso temporal',description:'Recorrido ficticio con vigencia, categorías, consumo y auditoría.',module:'Salud',roles:['Ciudadano','Médico'],code:`flowchart TD
 H[Historial clínico] -->|Compartir acceso| S[Seleccionar categorías]
 S -->|Código incorrecto| E[Mostrar error]
 E -->|Corrige a 123456| S
 S -->|Generar QR| Q[Token activo 15 min / 1 uso]
 Q -->|Revocar| R[Revocado]
 Q -->|Selecciona rol Médico| M[Acceso clínico admin]
 M --> D{¿Activo, vigente y sin uso?}
 D -->|No| X[Acceso denegado]
 D -->|Sí| O[Datos autorizados]
 O -->|Registra observación| U[Utilizado]
 U -->|Añade atención y auditoría| H`},
{id:'appointment-sequence',title:'Secuencia: solicitud de cita',description:'Interacción entre paciente, estado compartido, recepción, fila y médico.',module:'Salud',roles:['Ciudadano','Encargado de salud','Médico'],code:`sequenceDiagram
 actor P as Paciente
 participant S as Estado local
 actor R as Encargado salud
 participant F as Fila virtual
 actor M as Médico
 P->>S: Confirma cinco selecciones
 S-->>P: Guarda cita Reservada y comprobante
 R->>S: Confirma cita
 S-->>P: Crea notificación
 P->>S: Avisa llegada
 S->>F: Estado Paciente presente
 R->>F: Llama siguiente
 F-->>P: Reduce espera y notifica
 M->>S: Registra atención con token temporal
 S-->>P: Añade visita ficticia`}
];
