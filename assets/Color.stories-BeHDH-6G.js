import{T as i}from"./storybook-BB8Yx3dK.js";import{y as e,g as G}from"./preact.module-BuNwemxg.js";import{c as W}from"./color.regular-CiybqeIv.js";import"./hooks.module-D1qoUy1Y.js";function _(){window.customElements.get("o-color-provider")||(window.ColorProvider=d,window.customElements.define("o-color-provider",d))}class d extends HTMLElement{connectedCallback(){}}_();const x=[W],K={title:"UI Kit/Color",decorators:[t=>e(G,null,x.map(s=>e("style",{key:s,dangerouslySetInnerHTML:{__html:s}})),e(t,null))]},H=["color-scale-black","color-scale-white","color-scale-gray-0","color-scale-gray-1","color-scale-gray-2","color-scale-gray-3","color-scale-gray-4","color-scale-gray-5","color-scale-gray-6","color-scale-gray-7","color-scale-gray-8","color-scale-gray-9","color-scale-orange-0","color-scale-orange-1","color-scale-red-0"];function u(){return e(i,null,e(a,null),e(n,null),e(c,null),e(r,null),e(o,null))}function r(){return e(l,{name:"black"})}function o(){return e(l,{name:"white"})}function a(){return e(l,{name:"gray"})}function n(){return e(l,{name:"orange"})}function c(){return e(l,{name:"red"})}function l({name:t}){const s=H.filter(m=>m.includes(t));return e(i.Color,null,s.map(m=>e(i.Scale,{key:m,scale:m})))}var p,g,y;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`function Theme(): JSX.Element {
  return <StorybookTheme>
      <Gray />
      <Orange />
      <Red />
      <Black />
      <White />
    </StorybookTheme>;
}`,...(y=(g=u.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,S,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`function Black(): JSX.Element {
  return <Color name="black" />;
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,C,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`function White(): JSX.Element {
  return <Color name="white" />;
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var w,T,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`function Gray(): JSX.Element {
  return <Color name="gray" />;
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var J,X,O;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`function Orange(): JSX.Element {
  return <Color name="orange" />;
}`,...(O=(X=n.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};var R,v,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`function Red(): JSX.Element {
  return <Color name="red" />;
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const U=["Theme","Black","White","Gray","Orange","Red"];export{r as Black,a as Gray,n as Orange,c as Red,u as Theme,o as White,U as __namedExportsOrder,K as default};
