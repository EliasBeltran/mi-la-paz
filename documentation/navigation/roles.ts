export const navigationRoles=['Público','Visitante','Ciudadano','Encargado municipal','Encargado de salud','Médico','Moderador de mascotas','Encargado deportivo','Administrador','Demostración','Documentación interna']as const;
export const roleDescriptions:Record<(typeof navigationRoles)[number],string>={
 'Público':'No requiere seleccionar un rol.',
 'Visitante':'Acceso directo a la interfaz ciudadana; la marca de sesión visitante es parcial.',
 'Ciudadano':'Elena Vargas y sus recorridos simulados.',
 'Encargado municipal':'Gestiona reportes y mapa operativo.',
 'Encargado de salud':'Administra agenda, llegada y fila virtual.',
 'Médico':'Consume un acceso clínico temporal autorizado.',
 'Moderador de mascotas':'Aprueba, corrige, rechaza o cierra alertas.',
 'Encargado deportivo':'Gestiona reservas y estado de canchas.',
 'Administrador':'Acceso a todos los módulos administrativos.',
 'Demostración':'Selector interno de perspectivas y reinicio de estado.',
 'Documentación interna':'Rutas no listadas, opcionalmente protegidas por clave.'
};
