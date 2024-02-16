"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6535],{4982:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(5893),r=o(1151);const i={sidebar_position:-1},a="About",s={id:"about",title:"About",description:"Next.js de facto became a standard framework for front-end React applications that includes SSR, HMR, ready-to-go router, bunch of loaders and many more other features out of the box. Unfortunately to implement back-end capabilities a developer needs to use insufficient built-in API router that requires to create a lot of folders with route.ts file or use workarounds such as tRPC that implement a custom protocol instead of using well-known REST API. Vovk.ts attempts to fix this problem by implementing a wrapper over Next.js Optional Catch-all Segment and automatically compiles a client-side TypeScript library that can be imported from vovk-client. As a reference it uses auto-generated metadata file .vovk.json file from the root of the project that needs to be committed to re-generate the client library later with npx vovk generate.",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/about.md",tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/intro"}},l={},c=[{value:"Features",id:"features",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"about",children:"About"}),"\n",(0,n.jsxs)(t.p,{children:["Next.js de facto became a standard framework for front-end React applications that includes SSR, HMR, ready-to-go router, bunch of loaders and many more other features out of the box. Unfortunately to implement back-end capabilities a developer needs to use insufficient built-in API router that requires to create a lot of folders with route.ts file or use workarounds such as tRPC that implement a custom protocol instead of using well-known REST API. Vovk.ts attempts to fix this problem by implementing a wrapper over Next.js ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments",children:"Optional Catch-all Segment"})," and automatically compiles a client-side TypeScript library that can be imported from ",(0,n.jsx)(t.strong,{children:"vovk-client"}),". As a reference it uses auto-generated metadata file ",(0,n.jsx)(t.strong,{children:".vovk.json"})," file from the root of the project that needs to be committed to re-generate the client library later with ",(0,n.jsx)(t.code,{children:"npx vovk generate"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Vovk.ts uses standard APIs such as Fetch API and ",(0,n.jsx)(t.code,{children:"Response"})," object to implement its features. It provides an easy to use library utilising built-in browser and Next.js API that you would use anyway with Next.js route.ts (including ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/redirecting",children:"redirect"}),", ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/api-reference/functions/headers#headers",children:"headers"}),", ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body-formdata",children:"req.formData"})," etc). If you're new to Next.js I recommend to check ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/routing",children:"Next.js App Router documentation"})," first."]}),"\n",(0,n.jsx)(t.p,{children:"The project originally inspired by NestJS that is probably the best back-end framework on the market. The first step in Vovk.ts development (that wasn't even considered to be an open-sourced project back then) was an attempt to merge Next.js and NestJS thru Next.js middleware. This attempt wasn't successful and I made a decision to build similar project from scratch using the Optional Catch-all Segment utilising the most important features of NestJS in my opinion: classes, decorators and service-controller pattern. At the same time I find Angular-like features such as dependency injection and the way to define modules to be redundant since I didn't find them useful working tightly witn NestJS for multiple years."}),"\n",(0,n.jsxs)(t.p,{children:["The library also provides ",(0,n.jsx)(t.a,{href:"./worker",children:"seamless Web Worker interface"})," utilising the same approach with the metadata file to generate main-thread library for heavy in-browser calculations to avoid glitches in the UI when it's applicable. Web Worker is a fantastic technology but it's not used widely because it requires a lot of effort to organise event listeners and ",(0,n.jsx)(t.code,{children:"postMessage"})," calls. Vovk.ts attemtps to popularise this technology to make front-end applications perform faster by moving part of the application logic to another thread."]}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Good old REST API with no new protocols."}),"\n",(0,n.jsx)(t.li,{children:"Run full-stack Next.js application on one port avoiding monorepo hell."}),"\n",(0,n.jsx)(t.li,{children:"Service-Controller-Repository pattern for the highest code quality."}),"\n",(0,n.jsx)(t.li,{children:"Edge runtime is available out of the box."}),"\n",(0,n.jsx)(t.li,{children:"Zero dependencies and light weight."}),"\n",(0,n.jsxs)(t.li,{children:["Generated client code is compact, it's just a wrapper over ",(0,n.jsx)(t.code,{children:"fetch"})," function."]}),"\n",(0,n.jsx)(t.li,{children:"Bundle and distribute production-ready client API with Webpack, Rollup or another bundler."}),"\n",(0,n.jsx)(t.li,{children:"Use standard Next.js API such as Response, headers or redirect, nothing is changed."}),"\n",(0,n.jsx)(t.li,{children:"Easy to learn, only a few pages of documentation."}),"\n",(0,n.jsx)(t.li,{children:"Easily integrated with React Native."}),"\n",(0,n.jsx)(t.li,{children:"Streaming for LLM apps with disposable async generators."}),"\n",(0,n.jsxs)(t.li,{children:["Static API generation with ",(0,n.jsx)(t.a,{href:"api#generateStaticAPI",children:"generateStaticAPI"})]}),"\n",(0,n.jsx)(t.li,{children:"Web Worker interface for multi-threading in browser."}),"\n",(0,n.jsx)(t.li,{children:"Customizable."}),"\n",(0,n.jsx)(t.li,{children:"Well-tested."}),"\n",(0,n.jsx)(t.li,{children:"TypeScript, TypeScript, TypeScript!"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var n=o(7294);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);