# Matriz de trazabilidad de navegación

| Módulo | Caso de uso | Origen | Acción | Destino / resultado | Rol | Estado | Evidencia en código |
|---|---|---|---|---|---|---|---|
| Acceso | Completar onboarding | `/` | Comenzar y finalizar pasos | `/login` | Público | Implementado | `MiLaPazApp.tsx` |
| Acceso | Iniciar sesión demo | `/login` | Datos válidos + código 123456 | `/inicio` | Ciudadano | Simulado | `Login`, `Verify` |
| Acceso | Entrar como visitante | `/` o `/login` | Explorar | `/inicio` | Visitante | Parcial | `Welcome`, `Login` |
| Inicio | Descubrir servicios | `/inicio` | Enfocar buscador | `/servicios` | Ciudadano | Implementado | `UnifiedHome` |
| Salud | Solicitar cita | `/salud` | Solicitar y completar wizard | `/salud/citas/demo` | Ciudadano | Implementado | `AppointmentBooking` |
| Salud | Confirmar llegada | `/salud/fila` | Avisar que llegué | Paciente presente | Ciudadano | Implementado | `Queue` |
| Salud | Gestionar fila | `/admin/salud` | Llamar siguiente | Menor espera + aviso | Encargado salud | Implementado | `HealthDesk` |
| Salud | Autorizar cuidador | `/salud/familiar` | Guardar permisos | Resumen en perfil | Ciudadano | Implementado | `Caregiver` |
| Clínico | Compartir historial | `/salud/historial` | Código y categorías | QR temporal | Ciudadano | Simulado | `Clinical` |
| Clínico | Registrar atención | `/admin/salud/acceso-clinico` | Observación con token válido | Token usado + auditoría | Médico | Simulado | `MedicalAccess` |
| Transporte | Calcular ruta | `/transporte` | Origen, destino, preferencia | `/transporte/multimodal` | Ciudadano | Implementado | `TransportSearch` |
| Transporte | Recalcular por bloqueo | Ruta multimodal | Simular bloqueo | Alternativa | Ciudadano | Simulado | `Multimodal`, `transportNetwork.ts` |
| Transporte | Guardar favorito | Ruta multimodal | Guardar ruta | Resumen en perfil | Ciudadano | Implementado | `Multimodal`, `UnifiedProfile` |
| Reportes | Crear reporte | `/reportes/nuevo` | Enviar formulario | Código y detalle | Ciudadano | Implementado | `NewReport` |
| Reportes | Evitar duplicado | Nuevo reporte | Apoyar coincidencia | Detalle existente | Ciudadano | Simulado | `NewReport` |
| Reportes | Conversar | Detalle ciudadano/admin | Enviar mensaje | Chat compartido | Ciudadano, encargado | Implementado | `Chat`, `OperatorChat` |
| Reportes | Resolver caso | Detalle admin | Evidencia + Resuelto | Aviso y calificación | Encargado | Implementado | `AdminReportDetail` |
| Reportes | Reabrir | Detalle ciudadano | Problema continúa | Reabierto | Ciudadano | Implementado | `ReportDetail` |
| Mascotas | Registrar | `/mascotas/nueva` | Guardar | Pendiente de revisión | Ciudadano | Implementado | `PetRegistration` |
| Mascotas | Moderar | `/admin/mascotas` | Aprobar/corregir/rechazar | Estado + aviso | Moderador | Implementado | `PetModeration` |
| Mascotas | Avisar avistamiento | Alerta Kira | Enviar descripción | Aviso urgente | Observador | Implementado | `PetAlert` |
| Mascotas | Cerrar alerta | Alerta Kira | Marcar reunida | Cerrada | Ciudadano | Implementado | `PetAlert` |
| Canchas | Reservar | `/canchas/reservar` | Confirmar | Reserva + código | Ciudadano | Simulado | `CourtBooking` |
| Canchas | Confirmar | `/admin/canchas` | Confirmar reserva | Aviso ciudadano | Encargado deportivo | Implementado | `SportsDesk` |
| Canchas | Reportar daños | `/canchas` | Reportar | `/reportes/nuevo` | Ciudadano | Implementado | `CourtList` |
| Alertas | Publicar | `/admin/alertas` | Publicar | Inicio, alertas y avisos | Admin | Parcial | `AlertsDesk` |
| Alertas | Finalizar | `/admin/alertas` | Finalizar | Sin alerta activa | Admin | Implementado | `AlertsDesk`, `CitizenAlerts` |
| Notificaciones | Abrir aviso | `/notificaciones` | Pulsar tarjeta | Ruta almacenada | Ciudadano | Implementado | `UnifiedNotifications` |
| Roles | Cambiar perspectiva | `/demo` | Seleccionar rol | Panel permitido | Demo | Implementado | `DemoSelector`, `AdminRoleGuard` |
| Documentación | Consultar mapa | Demo o panel | Documentación | `/equipo/mapa-sistema` | Equipo | Implementado | `DiagramTabs` |
| Documentación | Consultar wireflow | Mapa, demo o panel | Wireflow | `/equipo/flujo-navegacion` | Equipo | Implementado | `NavigationWireflow` |

Requerimientos relacionados: flujo ciudadano–encargado, agenda de citas, historial clínico temporal, ruta multimodal, mascotas, canchas, alertas compartidas, roles y documentación interna.
