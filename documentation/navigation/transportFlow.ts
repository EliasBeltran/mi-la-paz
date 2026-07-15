import type{NavigationFlowSection}from'./types';
export const transportNavigationFlows:NavigationFlowSection[]=[
{id:'transport-navigation',title:'Transporte multimodal',description:'Búsqueda, tramos, incidencia alternativa y favorito realmente disponibles.',module:'Transporte',roles:['Ciudadano','Visitante'],code:`flowchart TD
 T[Transporte /transporte] -->|Escribe origen| O[Origen]
 O -->|Escribe destino| D[Destino]
 D -->|Selecciona preferencia| P[Preferencia]
 P -->|Calcular ruta| M[Multimodal /transporte/multimodal]
 M -->|Muestra tramo 1| W[Caminata]
 M -->|Muestra tramo 2| B[Pumakatari]
 M -->|Muestra tramo 3| C[Teleférico]
 M -->|Simular bloqueo| I{¿Incidente activo?}
 I -->|Sí| A[Ruta alternativa recalculada]
 I -->|No| N[Ruta normal]
 M -->|Iniciar recorrido| R[Recorrido en curso]
 M -->|Guardar ruta| F[Visible en Perfil]
 MAP[Mapa ciudadano] -->|Capa sin ruta específica| AL[Alias /transporte/ruta]
 AL -->|Renderiza la misma vista| M`}
];
