# Mi La Paz

Prototipo conceptual de alta fidelidad para hackatón que reúne servicios ciudadanos de La Paz en una experiencia única, accesible y navegable. **No es una aplicación oficial del Gobierno Autónomo Municipal de La Paz.** Todos los datos, personas, integraciones y operaciones son ficticios.

## Tecnología y ejecución

- Next.js 14, React 18, TypeScript estricto, CSS responsive y Lucide React.
- Estado simulado compartido mediante `localStorage`, sin API ni base de datos.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Para producción: `npm run typecheck` y `npm run build`.

## Datos de demostración

- Código de verificación: `123456`.
- Usuario: Elena Vargas, Miraflores, 69 años.
- Panel: `/admin`; credenciales conceptuales: `operador@milapaz.demo` / `Demo2026` (sin seguridad real).
- Reporte principal: `LPZ-2026-00482`.

## Funciones

Incluye acceso, onboarding, inicio, catálogo, salud (reserva, comprobante, cuidador y fila), transporte, reportes, alertas, mapa por capas, notificaciones, perfil, modo accesible persistente y panel administrativo. Los cambios administrativos del reporte se reflejan en la vista ciudadana y crean una notificación local.

## Estructura

- `app/`: App Router y sistema visual.
- `components/MiLaPazApp.tsx`: pantallas y flujos.
- `data/mock.ts`: datos simulados organizados.
- `stitch_mi_la_paz_ecosistema_digital/`: fuente visual de Google Stitch.

## Decisiones y limitaciones

Las cinco pantallas Stitch disponibles definieron paleta, escala, tarjetas y navegación. Se conservó Atkinson Hyperlegible según `civic_clarity/DESIGN.md`; las pantallas ausentes reutilizan el mismo lenguaje. Los mapas son visuales locales sin claves privadas. Acceso, QR, voz, cámara, calendario, ubicación, rutas y publicación multicanal son simulaciones. No se conectan sistemas reales. Próximos pasos: backend seguro, autenticación oficial, mapas accesibles, auditoría, pruebas automatizadas y validación con usuarios.

## Actualización de flujos y roles

El centro `/demo` permite cambiar entre ciudadano, reportes, salud, médico, mascotas, deportes y administración. Las cuentas son `elena@milapaz.demo`, `operador@milapaz.demo`, `salud@milapaz.demo`, `medico@milapaz.demo`, `mascotas@milapaz.demo`, `deportes@milapaz.demo` y `admin@milapaz.demo`; todas usan `Demo2026`.

El estado se persiste y sincroniza entre pestañas con `localStorage`, eventos de almacenamiento y `BroadcastChannel`. Desde `/demo` se puede restablecer la semilla. Se añadieron mascotas, ruta multimodal, acceso clínico temporal ficticio, agenda sanitaria, chat de reportes, canchas y un centro de ayuda en `/ayuda`. Las acciones ciudadanas generan notificaciones y los cambios de los encargados se reflejan en las mismas entidades compartidas. Consulte `docs/requirements-traceability.md` para el alcance exacto.

Calidad: `npm run lint`, `npm run typecheck`, `npm test` y `npm run build`. Vercel detecta Next.js automáticamente, usa `./` como raíz y no necesita variables de entorno.

**Seguridad:** no introducir datos personales o clínicos reales. Los QR, rutas, consultas, reservas y permisos son demostraciones sin validez institucional.

## Documentación visual interna

El mapa Mermaid del sistema está disponible en `/equipo/mapa-sistema` y el wireflow actual en `/equipo/flujo-navegacion`; ninguna ruta se indexa. La primera distingue arquitectura y sitemap, mientras que la pestaña **Flujo de navegación** documenta transiciones producidas por botones reales. Los flujos por actores describen intercambios de responsabilidad y el wireflow presenta cada pantalla como una tarjeta conectable y filtrable.

El último análisis de navegación se realizó el **2026-07-15** directamente sobre el código. Convenciones: **Implementado** funciona localmente, **Simulado** reproduce el recorrido sin integración real, **Parcial** tiene limitaciones visibles y **Desconectado** representa un control sin comportamiento. Para actualizarlo, modifique `documentation/navigation/` cuando cambien rutas o botones y luego regenere o ajuste los inventarios de `docs/navigation-*.md`.

Las rutas están abiertas por defecto; para proteger ambas configure opcionalmente en Vercel:

```env
TEAM_DOCS_ACCESS_CODE=una-clave-del-equipo
```

La clave se valida en servidor y nunca se incluye en el JavaScript del navegador. La documentación registra 41 pantallas, 97 acciones principales y las limitaciones actuales; no sustituye pruebas E2E ni garantiza que una operación simulada tenga respaldo institucional. Consulte `docs/system-map.md`, `docs/navigation-screen-inventory.md`, `docs/navigation-actions-inventory.md`, `docs/navigation-audit.md`, `docs/navigation-traceability.md` y `.env.example`.
