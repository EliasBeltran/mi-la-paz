# Inventario de acciones navegables

Fecha: **2026-07-15**. Se inventariaron **97 acciones principales** en `documentation/navigation/actions.ts`. La tabla siguiente agrupa el mapa de botones por pantalla; la vista `/equipo/mapa-sistema`, pestaña **Flujo de navegación**, permite filtrar el inventario canónico.

| Origen | Botón, tarjeta o acción | Destino o cambio | Condición | Estado |
|---|---|---|---|---|
| Bienvenida | Comenzar | `/onboarding` | — | Funciona |
| Bienvenida | Explorar como visitante | `/inicio` | — | Parcial: no marca sesión visitante |
| Onboarding | Siguiente | Siguiente diapositiva | Quedan pasos | Funciona |
| Onboarding | Iniciar / Omitir | `/login` | — | Funciona |
| Login | Recibir código | `/verify` | CI y celular válidos | Funciona |
| Login | Explorar como visitante | `/inicio` | — | Parcial: no marca sesión visitante |
| Login | Necesito ayuda | `/ayuda` | — | Funciona |
| Verificación | Verificar y continuar | `/inicio` | Código `123456` | Parcial: no marca autenticación |
| Verificación | Reenviar en 00:24 | Sin destino | — | **Desconectado** |
| Cabecera | Avatar | `/perfil` | — | Funciona |
| Cabecera | Demo | `/demo` | — | Funciona |
| Cabecera | Campana | `/notificaciones` | — | Funciona |
| Shell | SOS | `/ayuda` | — | Funciona |
| Menú inferior | Inicio, Servicios, Mapa, Avisos, Perfil | Ruta correspondiente | — | Funciona |
| Inicio | Salud, Transporte, Reportar, Mascotas, Canchas, Alertas | Módulo correspondiente | — | Funciona |
| Inicio | Buscador | `/servicios` | Recibe foco | Funciona |
| Inicio | Próxima cita | `/salud/citas/demo` | — | Funciona |
| Inicio | Alerta activa | `/alertas` | `alert.active` | Funciona |
| Inicio | Actividad reciente | Reporte, mascota o cancha | — | Funciona |
| Servicios | Buscar | Filtra tarjetas | Texto local | Funciona |
| Servicios | Abrir módulo | Ruta del módulo | Resultado visible | Funciona |
| Ayuda | Orientación ciudadana | Mensaje inline | — | Simulada |
| Ayuda | Buscar servicio / reportar | `/servicios` o `/reportes/nuevo` | — | Funciona |
| Salud | Solicitar cita | `/salud/reservar` | — | Funciona |
| Salud | Comprobante, fila, cuidador, historial | Ruta correspondiente | — | Funciona |
| Reserva cita | Continuar | Siguiente selección | Opción seleccionada | Funciona |
| Reserva cita | Confirmar cita | `/salud/citas/demo` | Cinco selecciones | Funciona |
| Comprobante | Confirmar asistencia | Estado Confirmada | — | Funciona |
| Comprobante | Reprogramar | `/salud/reservar` | — | Parcial: formulario nuevo |
| Comprobante | Cancelar | Estado Cancelada | — | Funciona |
| Fila | Avisar que llegué | Paciente presente | No marcado antes | Funciona |
| Cuidador | Guardar autorización | Perfil / estado local | Algún permiso | Funciona |
| Historial | Compartir acceso | `/salud/historial/compartir` | — | Funciona |
| Compartir historial | Generar QR | Token activo | Código y categorías | Simulada |
| Compartir historial | Revocar | Token Revocado | Token generado | Funciona |
| Transporte | Calcular ruta | `/transporte/multimodal` | Origen y destino | Funciona |
| Ruta | Simular bloqueo | Ruta alternativa | — | Funciona |
| Ruta | Iniciar / guardar | Estado local y perfil | — | Funciona |
| Reportes | Nuevo / abrir caso | Formulario o detalle | — | Funciona |
| Nuevo reporte | Apoyar duplicado | Detalle existente | Sumidero + Miraflores | Funciona |
| Nuevo reporte | Enviar | Confirmación y detalle | Datos y foto completos | Funciona |
| Detalle reporte | Chat | Mensaje compartido | Texto no vacío | Funciona |
| Detalle reporte | Calificar / reabrir | Rating o Reabierto | Resuelto | Funciona |
| Mascotas | Registrar / ver alerta | Formulario o alerta | — | Funciona |
| Registro mascota | Guardar | Mascotas | Nombre y zona | Funciona |
| Alerta mascota | Enviar avistamiento | Posible avistamiento | Descripción válida | Funciona |
| Alerta mascota | Marcar reunida | Cerrada | No cerrada | Funciona |
| Canchas | Filtrar | Filtro local | — | Parcial: una cancha |
| Canchas | Reservar | `/canchas/reservar` | — | Funciona |
| Reserva cancha | Confirmar | Reserva y aviso | Reglamento y sin reserva activa | Funciona |
| Canchas | Cancelar / reportar daños | Estado Cancelada o `/reportes/nuevo` | Según estado | Funciona |
| Mapa | Seleccionar capa | Cambia punto | — | Funciona |
| Mapa | Ver detalle | Ruta según capa | — | Funciona |
| Notificaciones | Abrir | Destino almacenado | — | Funciona |
| Notificaciones | Marcar todas | `read=true` | — | Funciona |
| Perfil | Abrir entidades | Cuidador, mascotas, cancha o ruta | — | Funciona |
| Perfil | Cerrar sesión | `/` | — | Funciona |
| Demo | Seleccionar rol | Panel inicial del rol | — | Funciona |
| Demo | Restablecer | Semilla inicial | — | Funciona |
| Demo | Documentación / wireflow | Ruta interna | — | Funciona |
| Admin reportes | Gestionar | Detalle del caso | Rol permitido | Funciona |
| Detalle admin | Chat / evidencia | Estado compartido | — | Funciona |
| Detalle admin | Guardar | Caso y aviso ciudadano | Reglas por estado | Funciona |
| Admin salud | Confirmar, llegada, siguiente, consultorio, completar | Cita y fila compartidas | Rol permitido | Funciona |
| Médico | Registrar atención | Token usado e historial | Token válido y observación | Simulada |
| Admin mascotas | Aprobar, corregir, rechazar, cerrar | Estado y aviso | Rol permitido | Funciona |
| Admin canchas | Confirmar reserva | Ciudadano notificado | Existe reserva | Funciona |
| Admin alertas | Publicar | Alerta y aviso | Título válido | Parcial: nivel y zona no persisten |
| Admin alertas | Finalizar | Alerta inactiva | Activa | Funciona |
| Panel lateral | Módulos visibles | Ruta permitida | Rol activo | Funciona |
| Panel lateral | Documentación / wireflow | Ruta interna | — | Funciona |
| Documentación | Pestañas y subtabs | Cambia diagrama | — | Funciona |
| Mermaid | Copiar / ampliar | Portapapeles o modal | — | Funciona |
| Wireflow | Filtros | Reduce tarjetas | Rol y módulo | Funciona |
| Wireflow | Abrir pantalla | Ruta real | — | Funciona |

## Acciones que cambian estado sin navegar

Estas acciones son funcionales aunque permanezcan en la pantalla: filtros, chats, evidencia, marcar llegada, confirmar/cancelar citas, bloqueo de ruta, guardar favorito, avistamiento, cierre de mascota, cambios administrativos, lectura de avisos, modo accesible y reinicio de demo.
