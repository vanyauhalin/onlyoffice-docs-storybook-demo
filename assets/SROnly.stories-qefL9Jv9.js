import{y as e,g as l}from"./preact.module-BuNwemxg.js";import{s as i}from"./sr-only-ikhIWLgZ.js";import{S as d}from"./sr-only.server-BIwnTwOI.js";const p=[i],c={title:"UI Kit/SROnly",decorators:[a=>e(l,null,p.map(s=>e("style",{key:s,dangerouslySetInnerHTML:{__html:s}})),e(a,null))]};function r(){return e("div",null,e("p",null,"The paragraph below should be hidden from sight, but still read by screen readers."),e(d,null,e("p",null,"This is a paragraph of text that should be hidden from sight, but still read by screen readers.")))}var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`function Composition(): JSX.Element {
  return <div>
      <p>The paragraph below should be hidden from sight, but still read by screen readers.</p>
      <SROnly>
        <p>
          This is a paragraph of text that should be hidden from sight, but still read by screen readers.
        </p>
      </SROnly>
    </div>;
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const y=["Composition"];export{r as Composition,y as __namedExportsOrder,c as default};
