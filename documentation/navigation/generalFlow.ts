import type{NavigationFlowSection}from'./types';
export const generalNavigationFlows:NavigationFlowSection[]=[
{id:'navigation-general',title:'Flujo general actual',description:'Rutas reales enlazadas desde el acceso público, la aplicación ciudadana, los paneles y la documentación.',module:'Acceso',roles:['Todos'],code:`flowchart TD
 subgraph ACC[Acceso público]
  W[Bienvenida /] -->|Pulsa Comenzar| O[Onboarding /onboarding]
  O -->|Finaliza u omite| L[Login /login]
  L -->|Envía datos válidos| V[Verificación /verify]
  V -->|Ingresa 123456| I[Inicio /inicio]
  W -->|Explora como visitante| I
  L -->|Necesita ayuda| H[Ayuda /ayuda]
  D[Selector demo /demo]
 end
 subgraph CIU[Aplicación ciudadana]
  I -->|Pulsa Servicios| S[Servicios /servicios]
  I -->|Pulsa Salud| SA[Salud /salud]
  I -->|Pulsa Transporte| T[Transporte /transporte]
  I -->|Pulsa Reportar| R[Reportes /reportes]
  I -->|Pulsa Mascotas| P[Mascotas /mascotas]
  I -->|Pulsa Canchas| C[Canchas /canchas]
  I -->|Abre alerta| A[Alertas /alertas]
  I -->|Campana| N[Notificaciones /notificaciones]
  I -->|Avatar| PR[Perfil /perfil]
  I -->|Navegación inferior| M[Mapa /mapa]
 end
 subgraph ADM[Paneles por rol]
  D -->|Selecciona reportes| AR[Admin reportes]
  D -->|Selecciona salud| AS[Admin salud]
  D -->|Selecciona médico| AM[Acceso clínico]
  D -->|Selecciona mascotas| AP[Admin mascotas]
  D -->|Selecciona deportes| AC[Admin canchas]
  D -->|Selecciona admin| AD[Panel general]
 end
 subgraph DOC[Documentación interna]
  D -->|Abre documentación| MS[Mapa del sistema]
  MS -->|Abre wireflow| WF[Flujo de navegación]
 end
 classDef public fill:#eaf7ff,stroke:#00658d
 classDef citizen fill:#d9f4dd,stroke:#187a33
 classDef admin fill:#fff1c2,stroke:#8a6500
 classDef internal fill:#eee6ff,stroke:#6941a5
 class W,O,L,V,D public
 class I,S,SA,T,R,P,C,A,N,PR,M,H citizen
 class AR,AS,AM,AP,AC,AD admin
 class MS,WF internal`},
{id:'access-flow',title:'Acceso y autenticación',description:'Acceso local simulado, visitante, roles y cierre de sesión; muestra los puntos parciales reales.',module:'Acceso',roles:['Público','Visitante','Ciudadano','Demostración'],code:`flowchart TD
 W[Bienvenida] -->|Comenzar| O[Onboarding]
 O -->|Siguiente x3| O
 O -->|Finaliza u omite| L[Login]
 L -->|CI o celular inválido| E[Mensaje de validación]
 E -->|Corrige datos| L
 L -->|Recibir código| V[Verificación]
 V -->|Código distinto de 123456| VE[Error comprensible]
 VE -->|Corrige código| V
 V -->|Código 123456| I[Inicio ciudadano]
 V -.->|Reenviar: sin acción| X[Botón desconectado]
 W -->|Explorar como visitante| I
 L -->|Explorar como visitante| I
 I -->|Pulsa Demo| D[Selector de rol]
 D -->|Ciudadano| I
 D -->|Rol encargado| A[Panel permitido]
 I -->|Perfil y Cerrar sesión| W
 classDef partial fill:#fff1c2,stroke:#8a6500
 classDef broken fill:#ffdad6,stroke:#93000a
 class X broken
 class I,V partial`},
{id:'home-flow',title:'Inicio ciudadano y navegación global',description:'Accesos de inicio, shell móvil y destinos de tarjetas compartidas.',module:'Inicio',roles:['Ciudadano','Visitante'],code:`flowchart LR
 I[Inicio] -->|Enfoca buscador| S[Servicios]
 I -->|Ver cita| C[Comprobante]
 I -->|Alerta activa| A[Alertas]
 I -->|Último reporte| R[Detalle reporte]
 I -->|Mascota reciente| P[Mascotas]
 I -->|Reserva reciente| CA[Canchas]
 I -->|Acceso rápido| SA[Salud]
 I -->|Acceso rápido| T[Transporte]
 NAV[Navegación inferior] -->|Inicio| I
 NAV -->|Servicios| S
 NAV -->|Mapa| M[Mapa]
 NAV -->|Avisos| N[Notificaciones]
 NAV -->|Perfil| PR[Perfil]
 TOP[Cabecera] -->|Campana| N
 TOP -->|Avatar| PR
 TOP -->|Demo| D[Selector de roles]
 SOS[Botón SOS] -->|Abre orientación simulada| H[Ayuda]`},
{id:'alerts-flow',title:'Alertas',description:'Publicación administrativa y consumo ciudadano realmente implementados.',module:'Alertas',roles:['Ciudadano','Visitante','Administrador'],code:`flowchart TD
 AA[Admin alertas] -->|Edita título y publica| S[(Estado compartido)]
 S -->|Muestra si active=true| I[Inicio]
 S -->|Muestra detalle y mapa| A[Alertas ciudadanas]
 S -->|Crea aviso| N[Notificaciones]
 N -->|Pulsa notificación| A
 AA -->|Finalizar alerta| F[Estado active=false]
 F -->|Actualiza vista| E[Sin alertas activas]
 AA -.->|Nivel y zona editables no persisten| P[Parcial]
 classDef partial fill:#fff1c2,stroke:#8a6500
 class P partial`}
];
