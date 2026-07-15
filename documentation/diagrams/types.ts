export type ImplementationStatus='Implementado'|'Parcial'|'Pendiente'|'Simulado';
export type DiagramSection={id:string;title:string;description:string;code:string};
export type SystemDiagram={id:string;title:string;description:string;code?:string;sections?:DiagramSection[];actors:string[];requirements:string[];routes:string[];status:ImplementationStatus;updatedAt:string;legend:string[]};
export const systemDocumentationVersion={version:'2.0',updatedAt:'2026-07-15'};
// Cuando cambien los requerimientos, actualice la versión anterior y los archivos de este directorio.
