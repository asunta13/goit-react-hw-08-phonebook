"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{8829:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t,a=r(9434),i=r(5822),l=r(1413),o=r(6235),u=r(6126),s=r(168),d=r(6444).ZP.form(t||(t=(0,s.Z)(["\n  width: 400px;\n  padding: 20px;\n"]))),c=r(158),p={type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},f={type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"},h={email:"",password:""},m=r(184),b=function(){var e=(0,a.I0)(),n=(0,c.c)({initialState:h,onSubmit:function(n){e((0,i.x4)(n))}}),r=n.state,t=n.handleChange,s=n.handleSubmit,b=r.email,g=r.password;return(0,m.jsxs)(d,{onSubmit:s,children:[(0,m.jsx)(o.n,(0,l.Z)({value:b,handleChange:t},p)),(0,m.jsx)(o.n,(0,l.Z)({value:g,handleChange:t},f)),(0,m.jsx)(u.z,{children:"Login"})]})},g=function(){var e=(0,a.I0)();return(0,m.jsx)("div",{children:(0,m.jsx)(b,{onSubmit:function(n){e((0,i.x4)(n))}})})}},158:function(e,n,r){r.d(n,{c:function(){return o}});var t=r(4942),a=r(1413),i=r(9439),l=r(2791),o=function(e){var n=e.initialState,r=e.onSubmit,o=(0,l.useState)((0,a.Z)({},n)),u=(0,i.Z)(o,2),s=u[0],d=u[1],c=(0,l.useCallback)((function(e){var n=e.target,r=n.name,i=n.value;d((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},r,i))}))}),[d]);return{state:s,setState:d,handleChange:c,handleSubmit:function(e){e.preventDefault(),r((0,a.Z)({},s)),d((0,a.Z)({},n))}}}},6235:function(e,n,r){r.d(n,{n:function(){return h}});var t=r(1413);function a(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i,l,o=r(2791),u=r(168),s=r(6444),d=s.ZP.div(i||(i=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),c=s.ZP.input(l||(l=(0,u.Z)(["\n  padding: 10px;\n  border: 1px solid;\n  border-radius: 5px;\n"]))),p=r(184),f=["label","handleChange"],h=function(e){var n=e.label,r=e.handleChange,i=a(e,f),l=(0,o.useMemo)((function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var t=63&r[e];n+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return n}()}),[]);return(0,p.jsxs)(d,{children:[(0,p.jsx)("label",{htmlFor:l,children:n}),(0,p.jsx)(c,(0,t.Z)({id:l,onChange:r},i))]})}}}]);
//# sourceMappingURL=829.01ff8266.chunk.js.map