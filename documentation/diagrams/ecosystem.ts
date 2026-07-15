import type{SystemDiagram}from'./types';
export const ecosystemDiagram:SystemDiagram={id:'ecosystem',title:'Ecosistema Mi La Paz',description:'Módulos ciudadanos y capacidades compartidas alrededor de una capa unificada.',actors:['Ciudadanía','Encargados municipales','Profesionales de salud','Moderadores'],requirements:['Acceso unificado','Datos compartidos','Roles y auditoría'],routes:['/inicio','/servicios','/admin'],status:'Implementado',updatedAt:'2026-07-15',legend:['Azul: núcleo y capacidades compartidas','Celeste: módulos ciudadanos','Verde: operación y control'],code:`flowchart TB
  CORE((Mi La Paz))
  subgraph MOD[Servicios ciudadanos]
    SAL[Salud] --- TRA[Transporte]
    REP[Reportes urbanos] --- ALE[Alertas]
    MAS[Mascotas] --- CAN[Canchas y deporte]
    SER[Servicios y trámites]
  end
  subgraph SH[Capacidades compartidas]
    LOGIN[Inicio de sesión único] --- PERF[Perfil ciudadano]
    LOC[Ubicación y mapa] --- NOT[Notificaciones]
    ACC[Accesibilidad] --- DAT[Datos compartidos]
  end
  subgraph OPS[Operación]
    ADM[Panel administrativo] --- ROL[Sistema de roles]
    AUD[Auditoría]
  end
  CORE --> MOD
  CORE --> SH
  CORE --> OPS
  DAT --> ADM
  ROL --> AUD
  classDef core fill:#001e40,color:#fff,stroke:#2dbcfe,stroke-width:3px
  classDef module fill:#d5e3ff,color:#001e40,stroke:#00658d
  classDef ops fill:#d9f4dd,color:#002507,stroke:#28a745
  class CORE core
  class SAL,TRA,REP,ALE,MAS,CAN,SER module
  class ADM,ROL,AUD ops`};
