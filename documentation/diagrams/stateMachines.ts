import type{SystemDiagram}from'./types';
export const stateMachinesDiagram:SystemDiagram={id:'states',title:'Estados y reglas',description:'Ciclos de vida principales y transiciones admitidas por el prototipo.',actors:['Ciudadano','Sistema','Operadores'],requirements:['Integridad de estados','Trazabilidad','Reglas de transición'],routes:['/reportes','/salud','/mascotas','/canchas'],status:'Parcial',updatedAt:'2026-07-15',legend:['Estado inicial: círculo sólido','Estado final: círculo concéntrico','Las notas describen reglas de negocio'],sections:[
 {id:'report-state',title:'Reporte urbano',description:'Asignado requiere unidad; rechazado requiere motivo; resuelto puede reabrirse.',code:`stateDiagram-v2
 [*] --> Recibido
 Recibido --> EnRevision
 EnRevision --> Asignado: unidad requerida
 EnRevision --> Rechazado: motivo requerido
 Asignado --> EnAtencion
 EnAtencion --> Resuelto
 Resuelto --> Reabierto: problema continúa
 Reabierto --> EnRevision
 Rechazado --> [*]
 Resuelto --> [*]`},
 {id:'appointment-state',title:'Cita médica',description:'La llegada alimenta la fila virtual y culmina en atención o inasistencia.',code:`stateDiagram-v2
 [*] --> Solicitada
 Solicitada --> Reservada
 Reservada --> Confirmada
 Confirmada --> PacientePresente
 PacientePresente --> EnEspera
 EnEspera --> EnAtencion
 EnAtencion --> Completada
 Reservada --> Reprogramada
 Confirmada --> Cancelada
 Confirmada --> NoAsistio
 Completada --> [*]`},
 {id:'pet-state',title:'Alerta de mascota',description:'La publicación requiere moderación y conserva historial al cerrar.',code:`stateDiagram-v2
 [*] --> PendienteRevision
 PendienteRevision --> Publicada
 PendienteRevision --> RequiereCorreccion
 PendienteRevision --> Rechazada
 RequiereCorreccion --> PendienteRevision
 Publicada --> PosibleAvistamiento
 PosibleAvistamiento --> Publicada
 PosibleAvistamiento --> MascotaLocalizada
 MascotaLocalizada --> Cerrada
 Cerrada --> [*]`},
 {id:'clinical-state',title:'Acceso clínico temporal',description:'Un token puede utilizarse una sola vez, vencer o ser revocado.',code:`stateDiagram-v2
 [*] --> Activo
 Activo --> Utilizado: primer uso
 Activo --> Expirado: termina vigencia
 Activo --> Revocado: paciente cancela
 Utilizado --> [*]
 Expirado --> [*]
 Revocado --> [*]`},
 {id:'court-state',title:'Reserva de cancha',description:'La lista de espera puede ocupar un horario liberado.',code:`stateDiagram-v2
 [*] --> Solicitada
 Solicitada --> Confirmada
 Solicitada --> EnListaEspera
 EnListaEspera --> Confirmada: horario liberado
 Confirmada --> Completada
 Confirmada --> Cancelada
 Confirmada --> NoUtilizada
 Completada --> [*]`}
]};
