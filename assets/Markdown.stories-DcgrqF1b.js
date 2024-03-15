function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-Bbwc5aME.js","./index-C2cz0s_L.js","./index-DMcYmaLp.js","./jsxRuntime.module-DRFHsHo7.js","./_commonjsHelpers-Cpj98o6Y.js","./preact.module-BuNwemxg.js","./index-DzL_e8Nz.js","./index-Tk9PoOV4.js","./index-DzYjCZzd.js","./index-Che4G4h7.js","./index-D6FzIwF9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as b,y as l}from"./preact.module-BuNwemxg.js";import{_ as o}from"./iframe-CS6hyi70.js";import{t as x,u as s}from"./jsxRuntime.module-DRFHsHo7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=new Map;async function y(){if(i.has("processor"))return;const{fromMarkdown:t}=await o(()=>import("./index-Bbwc5aME.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),{gfmTableFromMarkdown:n}=await o(()=>import("./index-Tk9PoOV4.js"),__vite__mapDeps([7,3,4,5,8,6]),import.meta.url),{toHast:g}=await o(()=>import("./index-Che4G4h7.js"),__vite__mapDeps([9,2,3,4,5,8]),import.meta.url),{gfmTable:f}=await o(()=>import("./index-D6FzIwF9.js"),__vite__mapDeps([10,1,2]),import.meta.url),h=function(_){const k=t(_,{extensions:[f()],mdastExtensions:[n()]});return g(k)};i.set("processor",h)}function A(t){const n=i.get("processor");if(n===void 0)throw new Error("Processor is not ready");return n(t)}const E=`# Project Title

A brief description of what this project does and who it's for.

## Installation

\`\`\`sh
npm install my-project
cd my-project
\`\`\`

## Usage/Examples

\`\`\`jsx
import Component from "my-project"

function App() {
  return <Component />
}
\`\`\`

## API Reference

### Get all items

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| \`api_key\` | string | Required. Your API key |

## Contributing

Contributions are always welcome!

See \`CONTRIBUTING.md\` for ways to get started.
`,M=`<!--
In addition to the base Markdown syntax, we are also support for a part of the GitHub Markdown syntax.

Markdown Documentation: https://www.markdownguide.org/cheat-sheet
GitHub Markdown Documentation: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
-->

# A first-level heading

## A second-level heading

### A second-level heading

#### A second-level heading

##### A second-level heading

###### A second-level heading

**bold**

*italic*

> blockquote

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

\`code\`

---

[link](https://www.example.com)

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

\`\`\`json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
`;function T({children:t}){const n=A(t);return x(n,{Fragment:b,jsx:s,jsxs:s})}const w=Object.assign(T,{}),R={title:"Site/Markdown",loaders:[y]};function e(){return l(w,null,E)}function r(){return l(w,null,M)}var a,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`function Composition(): JSX.Element {
  return <Markdown>
      {composition}
    </Markdown>;
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`function Decomposition(): JSX.Element {
  return <Markdown>
      {decomposition}
    </Markdown>;
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const C=["Composition","Decomposition"];export{e as Composition,r as Decomposition,C as __namedExportsOrder,R as default};
