"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9605],{8275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(5893),r=t(1151);const s={sidebar_position:4},l="Streaming",a={id:"streaming",title:"Streaming",description:"Generators",source:"@site/docs/streaming.md",sourceDirName:".",slug:"/streaming",permalink:"/docs/streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/streaming.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Request validation",permalink:"/docs/validation"},next:{title:"Worker Service",permalink:"/docs/worker"}},i={},c=[{value:"Generators",id:"generators",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Overriding the default stream fetcher",id:"overriding-the-default-stream-fetcher",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"streaming",children:"Streaming"}),"\n",(0,o.jsx)(n.h2,{id:"generators",children:"Generators"}),"\n",(0,o.jsxs)(n.p,{children:["Response streaming in Vovk.ts is implemented using generators and async generators. At the example above ",(0,o.jsx)(n.code,{children:"HelloService"})," implements ",(0,o.jsx)(n.code,{children:"*streamTokens"})," generator and yields an improvised token every 300 ms to simulate AI-like response."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloService.ts\nexport type Token = { message: string };\n\nexport default class HelloService {\n  static async *streamTokens() {\n    const tokens: Token[] = [{ message: 'Hello,' }, { message: ' World' }, { message: '!' }];\n\n    for (const token of body) {\n        await new Promise((resolve) => setTimeout(resolve, 300));\n        yield token;\n    }\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"HelloController"})," controller delegates to the ",(0,o.jsx)(n.code,{children:"streamTokens"})," return with ",(0,o.jsx)(n.code,{children:"yield*"})," syntax."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloController.ts\nimport { type VovkRequest } from 'vovk';\nimport HelloService from './HelloService';\n\nexport default class HelloController {\n  static controllerName = 'StreamingController';\n\n  private static helloService = HelloService;\n\n  @post.auto()\n  static async *streamTokens(req: VovkRequest<{ hello: string }>) {\n    const body = await req.json(); // handle body if needed\n    yield* this.helloService.streamTokens(response);\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The client-side ",(0,o.jsx)(n.code,{children:"logTokens"})," makes an API call to ",(0,o.jsx)(n.code,{children:"controller.streamTokens"})," with ",(0,o.jsx)(n.code,{children:"isStream: true"})," and iterates over stream messages using ",(0,o.jsx)(n.code,{children:"for await"})," loop."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\nimport { clientizeController } from 'vovk/client';\nimport type HelloController from './HelloController';\nimport type { Token } from './HelloService';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\nconst controller = clientizeController<typeof HelloController>(metadata.HelloController);\n\nexport function logTokens() {\n    const resp = await controller.streamTokens({\n        body: { hello: 'world' },\n        isStream: true, // !\n    });\n\n    for await (const token of resp) {\n        console.log(token satisfies Token);\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,o.jsxs)(n.p,{children:["Streaming response can be safely interrupted by using ",(0,o.jsx)(n.code,{children:"throw"})," keyword. The thrown object is going to be casted to the client-side as-is and re-thrown there."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloService.ts\n// ...\n\nexport default class HelloService {\n  static async *streamTokens() {\n    // ...\n    yield token;\n    // ...\n    throw { hello: 'World' };\n    // ...\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can wrap ",(0,o.jsx)(n.code,{children:"for await"})," loop by try..catch to catch the error thrown. At this example ",(0,o.jsx)(n.code,{children:"{ hello: 'World' }"})," object is going to be thrown."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\n// ...\n\nexport async function logTokens() {\n    const resp = await controller.streamTokens({\n        isStream: true,\n    });\n\n    try {\n        for await (const token of resp) {\n            console.log(token);\n        }\n    } catch(e) {\n        console.error(e); // { hello: 'world' }\n    }\n}\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here is another example of ",(0,o.jsx)(n.code,{children:"HelloService"})," that uses ",(0,o.jsx)(n.code,{children:"OpenAI"})," library."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloService.ts\nimport OpenAI from 'openai';\n// ...\nconst openai = new OpenAI();\n\nexport default class HelloService {\n  static async *streamTokens() {\n    const stream = await openai.chat.completions.create({\n        model: 'gpt-4',\n        messages: [{ role: 'user', content: 'Say this is a test' }],\n        stream: true,\n    });\n\n    try {\n        for await (const part of stream) {\n            yield part.choices[0]?.delta?.content || '';\n        }\n    } catch (e) {\n        throw { openAiError: String(e) };\n    }\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"overriding-the-default-stream-fetcher",children:"Overriding the default stream fetcher"}),"\n",(0,o.jsxs)(n.p,{children:["You can override front-end function that is used internally when ",(0,o.jsx)(n.code,{children:"isStream: true"})," is provided. To do that pass ",(0,o.jsx)(n.code,{children:"streamFetcher"})," option to ",(0,o.jsx)(n.code,{children:"clientizeController"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { myCustomStreamFetcher } from '../lib/client';\n// ...\n\nconst controller = clientizeController<HelloControllerType>(metadata.HelloController, {\n    streamFetcher: myCustomStreamFetcher,\n});\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"defaultStreamFetcher"})," that is used internally and it's is too complex to explain it at this documentation. Please check project source code if you need to re-define ",(0,o.jsx)(n.code,{children:"streamFetcher"})," option with the custom one."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var o=t(7294);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);