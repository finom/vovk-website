"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4131],{9408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(5893),r=n(1151);const i={sidebar_position:3},a="Custom Decorators",s={id:"decorators",title:"Custom Decorators",description:"Overview",source:"@site/docs/decorators.md",sourceDirName:".",slug:"/decorators",permalink:"/docs/decorators",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/decorators.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Worker Service",permalink:"/docs/worker"},next:{title:"Project Structure",permalink:"/docs/project-structure"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Authorisation decorator example",id:"authorisation-decorator-example",level:2},{value:"Request Input Validation",id:"request-input-validation",level:2},{value:"vovk-zod",id:"vovk-zod",level:3},{value:"Creating a custom validation library",id:"creating-a-custom-validation-library",level:3},{value:"Disable client validation",id:"disable-client-validation",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"custom-decorators",children:"Custom Decorators"}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"createDecorator"})," is a higher-order function that produces a decorator factory (a function that returns a decorator). It accepts a middleware function with the following parameters:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"request"}),", which extends ",(0,o.jsx)(t.code,{children:"NextRequest"})," as well as ",(0,o.jsx)(t.code,{children:"VovkRequest"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"next"}),", a function that should be invoked and its result returned to call subsequent decorators or the route handler."]}),"\n",(0,o.jsx)(t.li,{children:"Additional arguments are passed through to the decorator factory."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Second argument is an optional init handler. It's called every time when decorator is initialised and it's used to populate ",(0,o.jsx)(t.strong,{children:".vovk.json"})," with information on client-side validation explained below."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createDecorator, get, HttpException, HttpStatus } from 'vovk';\n\nconst myDecorator = createDecorator((req, next, a: string, b: number) => {\n  console.log(a, b); // Outputs: \"foo\", 1\n\n  if(isSomething) { \n    // override route method behavior and return { hello: 'world' } from the endpoint\n    return { hello: 'world' };\n  }\n\n  if(isSomethingElse) {\n    // throw HTTP error if needed\n    throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong');\n  }\n\n  return next();\n}, (a: string, b: number) => {\n    console.info('Decorator is initialised with', a, b);\n});\n\nclass MyController {\n  static controllerName = 'MyController';\n  @get.auto()\n  @myDecorator('foo', 1) // Passes 'foo' as 'a', and 1 as 'b'\n  static doSomething() {\n    // ...\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"authorisation-decorator-example",children:"Authorisation decorator example"}),"\n",(0,o.jsxs)(t.p,{children:["There is an example code that defines ",(0,o.jsx)(t.code,{children:"authGuard"})," decorator that does two things:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Checks if a user is authorised and returns an Unauthorised status if not."}),"\n",(0,o.jsxs)(t.li,{children:["Adds ",(0,o.jsx)(t.code,{children:"currentUser"})," to the request object."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To extend ",(0,o.jsx)(t.code,{children:"req"})," object you can define your custom interface that extends ",(0,o.jsx)(t.code,{children:"VovkRequest"}),". Let's imagine that Prisma ORM is used at the project."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/types.ts\nimport type { VovkRequest } from 'vovk'\nimport type { User } from '@prisma/client';\n\nexport interface GuardedRequest<BODY = undefined, QUERY extends Record<string, string> | undefined = undefined>\n  extends VovkRequest<BODY, QUERY> {\n  currentUser: User;\n}\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then define the ",(0,o.jsx)(t.code,{children:"authGuard"})," decorator itself."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/decorators/authGuard.ts\nimport { HttpException, HttpStatus, createDecorator } from 'vovk';\nimport type { GuardedRequest } from '../types';\n\nconst authGuard = createDecorator(async (req: GuardedRequest, next) => {\n  // ... define userId and isAuthorised\n  // parse access token for example\n\n  if (!isAuthorised) {\n    throw new HttpException(HttpStatus.UNAUTHORIZED, 'Unauthorized');\n  }\n\n  const currentUser = await prisma.user.findUnique({ where: { id: userId } });\n\n  req.currentUser = currentUser;\n\n  return next();\n});\n\nexport default authGuard;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And finally use the decorator and define request object with your newly created ",(0,o.jsx)(t.code,{children:"GuardedRequest"})," type."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// ...\nexport default class UserController {\n  // ...\n  @get('current-user')\n  @authGuard()\n  static async getCurrentUser(req: GuardedRequest</* ... */>) {\n    return req.currentUser;\n  }\n\n  // ...\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"request-input-validation",children:"Request Input Validation"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Vovk.ts"})," offers API that allows to validate request body and query string on back-end and, thanks to the metadata mechanism, performs zero-cost validation on client-side before request to the server is even made."]}),"\n",(0,o.jsx)(t.h3,{id:"vovk-zod",children:"vovk-zod"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"vovk-zod"})," is the library that implements ",(0,o.jsx)(t.a,{href:"https://zod.dev/",children:"Zod"})," validation. It performs validation on the Controller side with ",(0,o.jsx)(t.code,{children:"ZodModel.parse"}),", ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/zod-to-json-schema",children:"converts the Zod object to a JSON Schema"})," that's stored at ",(0,o.jsx)(t.strong,{children:".vovk.json"})," file, and runs validation on client before the HTTP request is made with ",(0,o.jsx)(t.a,{href:"https://ajv.js.org/",children:"Ajv"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/user/UserController.ts\nimport { z } from 'zod';\n// ... other imports ...\n\nconst UpdateUserModel = z.object({ name: z.string(), email: z.email() }).strict();\nconst UpdateUserQueryModel = z.object({ id: z.uuid() }).strict();\n\nexport default class UserController {\n    private static userService = UserService;\n\n    @put.auto()\n    @vovkZod(UpdateUserModel, UpdateUserQueryModel)\n    static updateUser(\n        req: VovkRequest<z.infer<typeof UpdateUserModel>, z.infer<typeof UpdateUserQueryModel>>\n    ) {\n        const { name, email } = await req.json();\n        const id = req.nextUrl.searchParams.get('id');\n\n        return this.userService.updateUser(id, { name, email });\n    }\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"creating-a-custom-validation-library",children:"Creating a custom validation library"}),"\n",(0,o.jsx)(t.p,{children:"You can create a decorator that, first of all, validates request on the server-side and optionally populates controller metadata with validation information that is going to be used by the client."}),"\n",(0,o.jsx)(t.p,{children:"The simplest example of the validation would be equality validation. It does nothing than checking if received query and body are equal to some definite object but has no practical use outside of this documentation."}),"\n",(0,o.jsxs)(t.p,{children:["At the example below ",(0,o.jsx)(t.code,{children:"validateEquality"})," decorator is created with ",(0,o.jsx)(t.code,{children:"createDecorator"})," that accepts 2 arguments: server validation function and init function that uses ",(0,o.jsx)(t.code,{children:"clientValidators"})," object to indicate that validation information should be stored at ",(0,o.jsx)(t.strong,{children:".vovk.json"})," file."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/decorators/validateEquality.ts\nimport { isEqual } from 'lodash';\nimport { \n  HttpException, HttpStatus, createDecorator, type VovkRequest, type VovkClientOptions \n} from 'vovk';\n\ntype BodyValidate = Record<string, unknown> | null;\ntype QueryValidate = Record<string, string> | null;\n\nconst validateEquality = createDecorator(\n  async (req: VovkRequest<unknown>, next, bodyValidate?: BodyValidate, queryValidate?: QueryValidate) => {\n    if (bodyValidate) {\n      const body = await req.json();\n\n      // override req.json to make it to be called again by controller code\n      req.json = () => Promise.resolve(body);\n\n      if (!isEqual(body, bodyValidate)) {\n        throw new HttpException(HttpStatus.BAD_REQUEST, 'Server exception. Invalid body');\n      }\n    }\n\n    if (queryValidate) {\n      const query = Object.fromEntries(req.nextUrl.searchParams.entries());\n\n      if (!isEqual(query, queryValidate)) {\n        throw new HttpException(HttpStatus.BAD_REQUEST, 'Server exception. Invalid query');\n      }\n    }\n\n    return next();\n  },\n  (bodyValidate?: BodyValidate, queryValidate?: QueryValidate) => ({\n    clientValidators: {\n      body: bodyValidate,\n      query: queryValidate,\n    },\n  })\n);\n\nexport default validateEquality;\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then create a file that defines client-side validation function as default export."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/decorators/validateEqualityOnClient.ts\nimport { type VovkClientOptions, HttpException, HttpStatus } from 'vovk';\nimport { isEqual } from 'lodash';\n\n// /src/decorators/validateEqualityOnClient.ts\nconst validateEqualityOnClient: VovkClientOptions['validateOnClient'] = (input, validators) => {\n  if (validators.body) {\n    if (!isEqual(input.body, validators.body)) {\n      throw new HttpException(HttpStatus.NULL, `Client exception. Invalid body`);\n    }\n  }\n\n  if (validators.query) {\n    if (!isEqual(input.query, validators.query)) {\n      throw new HttpException(HttpStatus.NULL, `Client exception. Invalid query`);\n    }\n  }\n};\n\nexport default validateEqualityOnClient;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["At this example ",(0,o.jsx)(t.code,{children:"validateEquality"})," is used as a controller decorator and ",(0,o.jsx)(t.code,{children:"validateEqualityOnClient"})," is used by the client. Also notice that ",(0,o.jsx)(t.code,{children:"validateEqualityOnClient"})," throws ",(0,o.jsx)(t.code,{children:"HttpException"})," with status ",(0,o.jsx)(t.code,{children:"0"})," to simulate regular HTTP exceptions that can be caught by the client-side code."]}),"\n",(0,o.jsx)(t.p,{children:"Here is how the newly created decorator is used at controller."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/hello/HelloController.ts\nimport type { VovkRequest } from 'vovk';\nimport validateEquality from '../decorators/validateEquality';\n\nexport default class HelloController {\n    @post.auto()\n    @validateEquality({ foo: 42 }, { bar: 'hello' })\n    static validatedRequest(req: VovkRequest<{ foo: 42 }, { bar: 'hello' }>) {\n        // ...\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In order to enable client-side validation you need to define ",(0,o.jsx)(t.code,{children:"validateOnClient"})," option in ",(0,o.jsx)(t.strong,{children:"vovk.config.js"})," file."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"/** @type {import('vovk').VovkConfig} */\nconst vovkConfig = {\n    validateOnClient: `./src/decorators/validateEqualityOnClient`,\n}\n\nmodule.exports = vovkConfig;\n"})}),"\n",(0,o.jsx)(t.p,{children:"If your validation library is published on NPM it needs to follow the same approach but use module name instead of local path to the file."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"/** @type {import('vovk').VovkConfig} */\nconst vovkConfig = {\n    validateOnClient: `my-validation-library/validateEqualityOnClient`,\n}\n\nmodule.exports = vovkConfig;\n"})}),"\n",(0,o.jsx)(t.p,{children:"For more info about Vovk.ts configuration check !!!!!! configuration page."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { HelloController } from 'vovk-client';\n\nconst result = await HelloController.validatedRequest({\n    body: { foo: 42 },\n    query: { bar: 'hello' },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"validateEqualityOnClient"})," is going to be invoked on every request before data is sent to the server."]}),"\n",(0,o.jsx)(t.h3,{id:"disable-client-validation",children:"Disable client validation"}),"\n",(0,o.jsxs)(t.p,{children:["You can set ",(0,o.jsx)(t.code,{children:"disableClientValidation"})," option mentioned above to ",(0,o.jsx)(t.code,{children:"true"})," to disable client validation for debugging purposes."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const result = await HelloController.validatedRequest({\n    body: { foo: 42 },\n    query: { bar: 'hello' },\n    disableClientValidation: true,\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you want to disable it completely and remove it from ",(0,o.jsx)(t.strong,{children:".vovk.json"})," file (in case if you want to hide server-side validation implementation) you can use ",(0,o.jsx)(t.code,{children:"exposeValidation"})," option set to ",(0,o.jsx)(t.code,{children:"false"})," at the Next.js wildcard router level."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/api/[[...vovk]]/route.ts\n// ...\nexport const { GET, POST, PATCH, PUT } = initVovk({\n    controllers,\n    workers,\n    exposeValidation: false // don't populate metadata file with validation information\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var o=n(7294);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);