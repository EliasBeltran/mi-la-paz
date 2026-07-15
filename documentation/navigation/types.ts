export type NavigationStatus='implemented'|'partial'|'simulated'|'disconnected';
export type ActionStatus='working'|'partial'|'broken';
export type ActionType='button'|'link'|'card'|'tab'|'notification'|'automatic'|'form'|'state';

export interface NavigationAction{
 id:string;
 origin:string;
 label:string;
 type:ActionType;
 destination?:string;
 stateChange?:string;
 roles:string[];
 condition?:string;
 status:ActionStatus;
 issue?:string;
 evidence:string;
}

export interface NavigationScreen{
 id:string;
 name:string;
 route:string;
 roles:string[];
 module:string;
 component:string;
 layout:string;
 access:string;
 back:string;
 condition?:string;
 status:NavigationStatus;
 notes:string;
 entryPoints:NavigationAction[];
 exitActions:NavigationAction[];
}

export type NavigationScreenDefinition=Omit<NavigationScreen,'entryPoints'|'exitActions'>;

export interface NavigationFlowSection{
 id:string;
 title:string;
 description:string;
 module:string;
 roles:string[];
 code:string;
}
