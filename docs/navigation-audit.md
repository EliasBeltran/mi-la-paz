# Auditoría de navegación

Análisis basado en el código vigente al **2026-07-15**. No se consideró implementada ninguna pantalla mencionada únicamente en requisitos históricos.

## Resumen

| Severidad | Hallazgos abiertos |
|---|---:|
| Crítico | 0 |
| Alto | 0 |
| Medio | 4 |
| Bajo | 4 |
| Mejora | 5 |

## Hallazgos

| Severidad | Hallazgo | Evidencia | Impacto / recomendación |
|---|---|---|---|
| Medio | Las URL ciudadanas desconocidas muestran el perfil heredado en lugar de un 404. | `MiLaPazApp.tsx`, fallback de `Citizen` | Puede ocultar enlaces mal escritos. Crear una pantalla “Ruta no encontrada” antes de producción. |
| Medio | Login y verificación navegan correctamente, pero no actualizan `session.authenticated`. | `Login`, `Verify`, `demoStore.ts` | La sesión es solo visual; un backend deberá definir autenticación real. |
| Medio | “Explorar como visitante” no actualiza `session.visitor`. | `Welcome`, `Login` | Perfil y acciones se ven como si fueran del ciudadano demo. Definir permisos de visitante. |
| Medio | Gestión de alertas solo persiste el título. Los selectores de nivel y zona son visuales. | `AlertsDesk` | La alerta ciudadana no refleja esos cambios. Convertirlos en campos controlados. |
| Bajo | “Reenviar en 00:24” no tiene evento. | `Verify` | Único botón importante sin comportamiento detectado. Añadir temporizador/reenvío simulado. |
| Bajo | `/transporte/ruta` y `/transporte/multimodal` muestran la misma pantalla. | `TransportFlow` | Alias innecesario pero compatible. Unificar cuando no haya enlaces heredados. |
| Bajo | Los filtros de canchas cambian estado, pero solo hay una cancha. | `CourtList` | La interacción no produce diferencia visible en la mayoría de filtros. |
| Bajo | La alerta ciudadana no ofrece guardar, compartir ni preferencias. | `CitizenAlerts` | Son funciones ausentes, no botones rotos. Mantener fuera del MVP o implementarlas luego. |
| Mejora | Varias pantallas heredadas permanecen sin uso en `MiLaPazApp.tsx`. | Funciones `Home`, `Health`, `Reports`, etc. | Extraer o eliminar tras confirmar que no existen consumidores. |
| Mejora | El panel principal usa métricas y gráficos estáticos. | `Dashboard` | Conectarlos a la semilla si la demo necesita consistencia total. |
| Mejora | La corrección solicitada por moderación de mascota no tiene editor específico. | `PetModeration`, `PetRegistration` | Reutilizar el registro como edición en una iteración posterior. |
| Mejora | No existen lista de espera ni escuelas deportivas navegables. | Módulo Canchas | Están fuera del código actual; no aparecen en los diagramas como pantallas. |
| Mejora | No hay herramienta E2E instalada. | `package.json` | Añadir Playwright solo cuando el proyecto adopte pruebas de navegador. |

## Rutas sin acceso ciudadano visible

- `/equipo/mapa-sistema`: acceso interno desde demo y panel; deliberadamente ausente del menú ciudadano.
- `/equipo/flujo-navegacion`: acceso interno desde demo, panel y mapa del sistema.
- `/transporte/ruta`: alias alcanzable desde el mapa heredado, no desde el formulario principal.
- Las rutas administrativas se alcanzan desde `/demo`; su menú se filtra por rol.

No se detectaron enlaces importantes hacia rutas completamente inexistentes. El catch-all evita un 404 técnico, pero su fallback incorrecto se registra como hallazgo medio.

## Correcciones menores realizadas durante esta documentación

1. Se añadió acceso al wireflow desde selector de demo, panel y mapa del sistema.
2. La cookie opcional de documentación cambió su ámbito de `/equipo/mapa-sistema` a `/equipo`.
3. El formulario de clave conserva de forma segura el destino entre las dos rutas permitidas.
4. Se mantuvieron `noindex` y `nofollow` en ambas páginas.
5. Se añadieron filtros táctiles, tablas desplazables y tarjetas responsive.

No se modificaron flujos de negocio ni se corrigieron automáticamente los hallazgos medios porque requieren decisiones sobre autenticación, visitantes y alcance del MVP.
