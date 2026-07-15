# Mapa visual del sistema

La documentación visual interna de Mi La Paz está disponible en `/equipo/mapa-sistema`, con un wireflow complementario en `/equipo/flujo-navegacion`. Resume arquitectura, rutas, navegación real, actores, storyboard y estados mediante seis pestañas Mermaid.

## Diagramas

1. Ecosistema y capacidades compartidas.
2. Mapa del sitio ciudadano y administrativo.
3. Flujo de navegación derivado del código, con filtros, inventario y 14 diagramas detallados.
4. Flujos por actores: reportes, mascotas, citas, historial y transporte.
5. Storyboard de la demostración de hackatón.
6. Estados y reglas de las entidades principales.

Los archivos fuente viven en `documentation/diagrams/` y `documentation/navigation/`. Al cambiar rutas o botones, actualice primero `screens.ts` y `actions.ts`; luego ajuste el flujo del módulo correspondiente y `systemDocumentationVersion`. Azul profundo identifica el núcleo; celeste los módulos ciudadanos; verde la operación. Las leyendas textuales evitan depender únicamente del color.

La relación detallada con requerimientos se mantiene en `docs/requirements-traceability.md`.

## Acceso

Sin configuración, ambas rutas están abiertas para facilitar demostraciones. Si `TEAM_DOCS_ACCESS_CODE` existe en Vercel, el servidor exige la clave y entrega una cookie HTTP-only firmada para `/equipo`. Que las rutas no aparezcan en navegación pública no constituye seguridad real.

> Documentación interna del prototipo. Todos los datos, entidades y recorridos son simulados.
