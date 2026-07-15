# Trazabilidad de requisitos

| Requerimiento | Estado | Ruta/componente | Tipo | Observación |
|---|---|---|---|---|
| Roles y reinicio | Implementado | `/demo` | Funcional | Siete roles y semilla local |
| Sincronización | Implementado | `services/demoStore.ts` | Funcional | localStorage + BroadcastChannel |
| Reporte y chat | Implementado | Rutas ciudadana/admin del reporte | Funcional | Mensajes y evidencia compartidos |
| Detección de duplicados | Implementado | `/reportes/nuevo` | Simulado | Sugiere apoyar el reporte existente por categoría y zona |
| Puntos ciudadanos | Parcial | Estado demo | Simulado | Saldo persistente; reglas de acumulación pendientes |
| Mascotas | Implementado | `/mascotas`, `/admin/mascotas` | Funcional | Moderación, avistamiento y cierre |
| Ruta multimodal | Implementado | `/transporte/multimodal` | Funcional | Tramos e incidencia alternativa |
| Historial clínico | Implementado | `/salud/historial` | Simulado | QR, revocación, atención y auditoría |
| Agenda y fila | Implementado | `/salud/fila`, `/admin/salud` | Funcional | Estado y espera compartidos |
| Canchas | Implementado | `/canchas`, `/admin/canchas` | Simulado | Reserva y mantenimiento |
| Alertas | Implementado | `/alertas`, `/admin/alertas` | Funcional | Publicación, cierre y notificación compartidos |
| Centro de ayuda | Implementado | `/ayuda` | Simulado | Sustituye diálogos bloqueantes y orienta a acciones reales del prototipo |
| Accesibilidad | Conservado | Global | Funcional | Persistencia y foco |
| Supabase | Pendiente | Repositorio sustituible | Pendiente | Fallback local sin secretos |
