# Inventario actual de pantallas de Mi La Paz

Fecha del análisis: **2026-07-15**. Fuente de verdad: `app/`, `components/`, `services/demoStore.ts` y `documentation/navigation/`. La aplicación ciudadana y administrativa utiliza `app/[[...slug]]/page.tsx`; por eso las rutas de la tabla son estados de navegación reconocidos por `MiLaPazApp`, no carpetas independientes de App Router.

Se detectaron **41 pantallas o variantes de ruta visuales**. Las operaciones son locales y simuladas salvo la navegación y persistencia del prototipo.

| Pantalla | Ruta real | Rol | Módulo | Componente / layout | Acceso y regreso | Estado |
|---|---|---|---|---|---|---|
| Bienvenida | `/` | Público | Acceso | `Welcome` / sin shell | URL; comienza onboarding | Implementada |
| Onboarding | `/onboarding` | Público | Acceso | `Onboarding` / sin shell | Bienvenida; finaliza en login | Implementada |
| Inicio de sesión | `/login` | Público | Acceso | `Login` / sin shell | Onboarding; vuelve a `/` | Simulada |
| Verificación | `/verify` | Público | Acceso | `Verify` / sin shell | Login; vuelve a login | Parcial |
| Selector de demo | `/demo` | Demostración | Acceso | `DemoSelector` / sin shell | Cabecera o panel; elige rol | Implementada |
| Inicio ciudadano | `/inicio` | Ciudadano, visitante | Inicio | `UnifiedHome` / `Shell` | Login, visitante o menú inferior | Implementada |
| Servicios | `/servicios` | Ciudadano, visitante | Servicios | `ServicesHub` / `Shell` | Inicio o menú inferior | Implementada |
| Ayuda | `/ayuda` | Público, ciudadano, visitante | Ayuda | `HelpCenter` / `Shell` | Login o SOS; vuelve a inicio | Simulada |
| Mapa ciudadano | `/mapa` | Ciudadano, visitante | Mapa | `MapScreen` / `Shell` | Menú inferior | Simulada |
| Notificaciones | `/notificaciones` | Ciudadano | Notificaciones | `UnifiedNotifications` / `Shell` | Campana, menú o aviso | Implementada |
| Perfil | `/perfil` | Ciudadano | Perfil | `UnifiedProfile` / `Shell` | Avatar o menú; permite cerrar sesión | Implementada |
| Salud | `/salud` | Ciudadano, visitante | Salud | `HealthHome` / `Shell` | Inicio o servicios | Implementada |
| Solicitar cita | `/salud/reservar` | Ciudadano | Salud | `AppointmentBooking` / `Shell` | Salud o reprogramar; vuelve a salud | Implementada |
| Comprobante | `/salud/citas/demo` | Ciudadano | Salud | `AppointmentReceipt` / `Shell` | Reserva, inicio o aviso | Implementada |
| Fila virtual | `/salud/fila` | Ciudadano | Salud | `Queue` / `Shell` | Salud; vuelve a salud | Implementada |
| Familiar autorizado | `/salud/familiar` | Ciudadano | Salud | `Caregiver` / `Shell` | Salud o perfil | Implementada |
| Historial clínico | `/salud/historial` | Ciudadano | Salud | `Clinical` / `Shell` | Salud o aviso | Simulada |
| Compartir historial | `/salud/historial/compartir` | Ciudadano | Salud | `Clinical` / `Shell` | Historial; vuelve al historial | Simulada |
| Buscador de rutas | `/transporte` | Ciudadano, visitante | Transporte | `TransportSearch` / `Shell` | Inicio, servicios o mapa | Implementada |
| Ruta multimodal | `/transporte/multimodal` | Ciudadano, visitante | Transporte | `Multimodal` / `Shell` | Formulario; vuelve a transporte | Simulada |
| Alias de ruta | `/transporte/ruta` | Ciudadano, visitante | Transporte | `Multimodal` / `Shell` | Mapa heredado; vuelve a transporte | Parcial |
| Mis reportes | `/reportes` | Ciudadano | Reportes | `ReportList` / `Shell` | Inicio o servicios | Implementada |
| Nuevo reporte | `/reportes/nuevo` | Ciudadano | Reportes | `NewReport` / `Shell` | Inicio, lista, ayuda o canchas | Implementada |
| Detalle de reporte | `/reportes/[code]` | Ciudadano | Reportes | `ReportDetail` / `Shell` | Lista, inicio o aviso | Implementada |
| Mascotas | `/mascotas` | Ciudadano | Mascotas | `Pets` / `Shell` | Inicio o servicios | Implementada |
| Registrar mascota | `/mascotas/nueva` | Ciudadano | Mascotas | `PetRegistration` / `Shell` | Lista; vuelve a mascotas | Implementada |
| Alerta de Kira | `/mascotas/alertas/kira` | Ciudadano, visitante | Mascotas | `PetAlert` / `Shell` | Mascotas o aviso | Implementada |
| Canchas | `/canchas` | Ciudadano, visitante | Canchas | `CourtList` / `Shell` | Inicio o servicios | Parcial |
| Reservar cancha | `/canchas/reservar` | Ciudadano | Canchas | `CourtBooking` / `Shell` | Lista; vuelve a canchas | Simulada |
| Alertas ciudadanas | `/alertas` | Ciudadano, visitante | Alertas | `CitizenAlerts` / `Shell` | Inicio, servicios o aviso | Parcial |
| Panel principal | `/admin` | Administrador | Administración | `Dashboard` / `AdminShell` | Selector de demo | Simulada |
| Admin reportes | `/admin/reportes` | Encargado municipal, admin | Reportes | `AdminReportsFlow` / `AdminShell` | Selector o menú | Implementada |
| Gestionar reporte | `/admin/reportes/[code]` | Encargado municipal, admin | Reportes | `AdminReportDetail` / `AdminShell` | Tabla o mapa | Implementada |
| Mapa operativo | `/admin/mapa` | Encargado municipal, admin | Mapa | `MapVisual` / `AdminShell` | Menú lateral | Simulada |
| Agenda de salud | `/admin/salud` | Encargado salud, admin | Salud | `HealthDesk` / `AdminShell` | Selector o menú | Implementada |
| Acceso clínico | `/admin/salud/acceso-clinico` | Médico, admin | Salud | `MedicalAccess` / `AdminShell` | Selector médico | Simulada |
| Moderación mascotas | `/admin/mascotas` | Moderador, admin | Mascotas | `PetModeration` / `AdminShell` | Selector o menú | Implementada |
| Gestión deportiva | `/admin/canchas` | Encargado deportivo, admin | Canchas | `SportsDesk` / `AdminShell` | Selector o menú | Implementada |
| Gestión de alertas | `/admin/alertas` | Admin | Alertas | `AlertsDesk` / `AdminShell` | Menú lateral | Parcial |
| Mapa del sistema | `/equipo/mapa-sistema` | Documentación interna | Documentación | `SystemDocumentation` | Demo, panel, wireflow o URL | Implementada |
| Wireflow | `/equipo/flujo-navegacion` | Documentación interna | Documentación | `NavigationWireflow` | Demo, panel, mapa o URL | Implementada |

## Observaciones estructurales

- `/reportes/[code]` y `/admin/reportes/[code]` aceptan en la práctica el código guardado en el estado demo.
- Cualquier segmento dentro de `/salud/citas/` abre el mismo comprobante.
- `/transporte/ruta` es un alias heredado de `/transporte/multimodal`.
- Las rutas de documentación no están en el menú ciudadano y usan `robots: noindex, nofollow`.
- Una URL desconocida capturada por `[[...slug]]` termina actualmente en el perfil heredado; está registrado como hallazgo medio en la auditoría.
