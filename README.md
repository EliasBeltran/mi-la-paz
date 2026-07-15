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
