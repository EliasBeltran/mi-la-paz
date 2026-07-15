import type{SystemDiagram}from'./types';
export const actorFlowsDiagram:SystemDiagram={id:'actors',title:'Flujos por actores',description:'Interacciones principales entre personas, sistema y áreas responsables.',actors:['Ciudadano','Sistema','Encargados','Profesionales'],requirements:['Reporte compartido','Mascotas','Citas','Acceso clínico','Ruta multimodal'],routes:['/reportes','/mascotas','/salud','/transporte/multimodal'],status:'Implementado',updatedAt:'2026-07-15',legend:['Las flechas muestran mensajes o cambios de responsabilidad','Cada proceso se visualiza por separado'],sections:[
 {id:'report',title:'Reporte urbano',description:'Del envío ciudadano a la resolución y calificación.',code:`sequenceDiagram
 actor C as Ciudadano
 participant S as Sistema
 actor E as Encargado municipal
 participant U as Unidad responsable
 C->>S: Crea reporte con ubicación y evidencia
 S-->>C: Valida y genera LPZ-2026-00482
 S->>E: Envía caso para revisión
 E->>E: Define prioridad alta
 E->>U: Asigna unidad responsable
 E<<->>C: Conversación del reporte
 U->>E: Atiende y entrega evidencia
 E->>S: Marca caso resuelto
 S-->>C: Notifica resolución
 C->>S: Califica atención`},
 {id:'pet',title:'Mascota extraviada',description:'Moderación, avistamiento y reunión familiar.',code:`sequenceDiagram
 actor P as Propietario
 participant S as Sistema
 actor M as Moderador
 actor O as Ciudadano observador
 P->>S: Registra a Kira y reporta extravío
 S->>M: Solicita moderación
 M->>S: Aprueba publicación
 S-->>O: Muestra alerta protegida
 O->>S: Registra avistamiento
 S-->>P: Notifica posible coincidencia
 P->>S: Verifica y marca reunida
 S->>M: Cierra alerta y conserva historial`},
 {id:'appointment',title:'Solicitud de cita',description:'Reserva, llegada, fila y atención.',code:`sequenceDiagram
 actor P as Paciente
 participant S as Sistema
 actor R as Encargado de salud
 actor M as Profesional médico
 P->>S: Solicita cita
 S->>S: Valida disponibilidad
 S-->>P: Reserva horario
 R->>S: Confirma cita
 S-->>P: Envía notificación
 P->>R: Avisa llegada
 R->>S: Actualiza fila virtual
 S->>M: Llama paciente
 M->>S: Completa atención y cita`},
 {id:'clinical',title:'Historial clínico',description:'Autorización temporal y auditoría ficticias.',code:`sequenceDiagram
 actor P as Paciente
 participant S as Sistema
 actor M as Médico
 P->>S: Consulta historial y se autentica
 P->>S: Selecciona datos y genera QR
 M->>S: Presenta token temporal
 S->>S: Valida vigencia y permisos
 S-->>M: Muestra solo datos autorizados
 M->>S: Registra atención ficticia
 S->>S: Invalida token
 P->>S: Consulta registro de acceso`},
 {id:'route',title:'Ruta multimodal',description:'Cálculo y alternativa ante una incidencia.',code:`sequenceDiagram
 actor C as Ciudadano
 participant M as Motor de rutas
 participant A as Servicio de alertas
 C->>M: Origen, destino y preferencia
 M->>M: Calcula costo ponderado
 M-->>C: Caminata + Pumakatari + Teleférico
 M-->>C: Muestra transbordos
 A->>M: Informa bloqueo
 M->>M: Recalcula alternativa
 M-->>C: Entrega nueva ruta`}
]};
