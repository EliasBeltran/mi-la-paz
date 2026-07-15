import type{ImplementationStatus as Status}from'@/documentation/diagrams';
export function ImplementationStatus({status}:{status:Status}){return <span className={`implementation ${status.toLowerCase()}`}>{status}</span>}
