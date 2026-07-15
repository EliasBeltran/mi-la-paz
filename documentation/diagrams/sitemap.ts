import type{SystemDiagram}from'./types';
export const sitemapDiagram:SystemDiagram={id:'sitemap',title:'Mapa del sitio',description:'Pantallas principales separadas entre experiencia ciudadana y vistas de encargados.',actors:['Ciudadano','Operadores por rol'],requirements:['Navegación móvil','Panel administrativo','Documentación interna'],routes:['/','/inicio','/admin','/equipo/mapa-sistema'],status:'Implementado',updatedAt:'2026-07-15',legend:['Rama superior: aplicación ciudadana','Rama inferior: panel de encargados'],code:`flowchart LR
  ROOT[Mi La Paz]
  subgraph C[Aplicación ciudadana]
    ACC[Acceso] --> INI[Inicio]
    INI --> SER[Servicios]
    SER --> SAL[Salud]
    SER --> TRA[Transporte]
    SER --> REP[Reportes]
    SER --> ALE[Alertas]
    SER --> MAS[Mascotas]
    SER --> CAN[Canchas]
    INI --> MAP[Mapa]
    INI --> NOT[Notificaciones]
    INI --> PER[Perfil]
  end
  subgraph A[Panel de encargados]
    RES[Resumen] --> AR[Reportes urbanos]
    RES --> AS[Salud]
    RES --> AM[Mascotas]
    RES --> AT[Transporte]
    RES --> AC[Canchas]
    RES --> AA[Alertas]
    RES --> US[Usuarios]
    RES --> AU[Auditoría]
    RES --> DOC[Documentación]
  end
  ROOT --> ACC
  ROOT --> RES`};
