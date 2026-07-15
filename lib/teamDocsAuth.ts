import{createHmac,timingSafeEqual}from'node:crypto';
export const TEAM_DOCS_COOKIE='mi-la-paz-team-docs';
export function docsCookieValue(code:string){return createHmac('sha256',code).update('mi-la-paz-system-documentation-v2').digest('hex')}
export function validDocsCookie(cookie:string|undefined,code:string){if(!cookie)return false;const expected=docsCookieValue(code);const a=Buffer.from(cookie);const b=Buffer.from(expected);return a.length===b.length&&timingSafeEqual(a,b)}
