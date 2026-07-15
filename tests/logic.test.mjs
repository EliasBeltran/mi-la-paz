import test from 'node:test';import assert from 'node:assert/strict';
test('resume ruta multimodal',()=>{const r=[{m:6,c:0,w:420},{m:18,c:2.5,w:0},{m:12,c:3,w:0}];assert.deepEqual(r.reduce((a,s)=>({m:a.m+s.m,c:a.c+s.c,w:a.w+s.w}),{m:0,c:0,w:0}),{m:36,c:5.5,w:420})});
test('token de un uso se invalida',()=>{const token={status:'Activo',uses:0,max:1};token.uses++;token.status=token.uses>=token.max?'Utilizado':'Activo';assert.equal(token.status,'Utilizado')});
test('evita doble reserva',()=>{const used=new Set(['20T16']);const reserve=(x)=>used.has(x)?false:(used.add(x),true);assert.equal(reserve('20T16'),false);assert.equal(reserve('20T17'),true)});
