"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[722],{5571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(5893),r=t(1151);const o={sidebar_position:1},a="Controller Class",i={id:"controller",title:"Controller Class",description:"Controller definition",source:"@site/docs/controller.md",sourceDirName:".",slug:"/controller",permalink:"/docs/controller",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/controller.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"Worker Service Class",permalink:"/docs/worker"}},l={},c=[{value:"Controller definition",id:"controller-definition",level:2},{value:"Client library",id:"client-library",level:2},{value:"Return type",id:"return-type",level:2},{value:"Custom object",id:"custom-object",level:3},{value:"Response object",id:"response-object",level:3},{value:"Async iterable",id:"async-iterable",level:3},{value:"Auto-generated endpoints",id:"auto-generated-endpoints",level:2},{value:"Response headers",id:"response-headers",level:2},{value:"Errors: <code>HttpException</code> class and <code>HttpStatus</code> enum",id:"errors-httpexception-class-and-httpstatus-enum",level:2},{value:"Service Class",id:"service-class",level:2},{value:"Streaming",id:"streaming",level:2},{value:"Async iterators",id:"async-iterators",level:3},{value:"StreamResponse",id:"streamresponse",level:3},{value:"Handling Stream Responses on the Client",id:"handling-stream-responses-on-the-client",level:3},{value:"Validation with vovk-zod",id:"validation-with-vovk-zod",level:2},{value:"Type extraction",id:"type-extraction",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"controller-class",children:"Controller Class"}),"\n",(0,s.jsx)(n.h2,{id:"controller-definition",children:"Controller definition"}),"\n",(0,s.jsxs)(n.p,{children:["Controller is a static class that handles incoming HTTP requests. The methods of this class that are decorated with HTTP decorator accept 2 arguments: ",(0,s.jsx)(n.code,{children:"NextRequest"})," that is not modified in any way by Vovk.ts itself and parameters that are defined by the decorator path."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { NextRequest } from 'next';\nimport { prefix, put } from 'vovk';\n\n@prefix('users')\nexport default class UserController {\n    // Example request: PUT /api/users/69?role=moderator\n    @put(':id') \n    static async updateUser(req: NextRequest, { id }: { id: string }) {\n        const data = await req.json(); // any\n        const userRole = req.nextUrl.searchParams.get('role'); // string | null\n        // ...\n        return updatedUser;\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["At the example aboce ",(0,s.jsx)(n.code,{children:"data"})," is casted as ",(0,s.jsx)(n.code,{children:"any"})," and ",(0,s.jsx)(n.code,{children:"userRole"})," is casted as ",(0,s.jsx)(n.code,{children:"string | null"}),". To fix the body and query types Vovk.ts provides a new type ",(0,s.jsx)(n.code,{children:"VovkRequest<BODY?, QUERY?>"})," that is extended from ",(0,s.jsx)(n.code,{children:"NextRequest"})," where the first generic argument represents the type of value returned from ",(0,s.jsx)(n.code,{children:"req.json"})," but also allows to define values returned from ",(0,s.jsx)(n.code,{children:"req.nextUrl.searchParams.get"}),". ",(0,s.jsx)(n.code,{children:"VovkRequest"})," also plays a crucial role in type inference when ",(0,s.jsx)(n.strong,{children:"vovk-client"})," is used."]}),"\n",(0,s.jsxs)(n.p,{children:["As its mentioned before, ",(0,s.jsx)(n.code,{children:"req"})," object is an original ",(0,s.jsx)(n.code,{children:"NextRequest"})," object that provided by Next.js as is without changing it, but other libraries (like ",(0,s.jsx)(n.a,{href:"https://github.com/finom/vovk-zod",children:"vovk-zod"}),") as well as your custom code can modify this object when needed (for example to add ",(0,s.jsx)(n.code,{children:"currentUser"})," property defined by your ",(0,s.jsx)(n.a,{href:"./decorators",children:"auth guard decorator"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["To add the required body and query types just replace ",(0,s.jsx)(n.code,{children:"NextRequest"})," by ",(0,s.jsx)(n.code,{children:"VovkRequest"}),". Let's modify the abstract example above."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserController.ts\nimport { prefix, put, type VovkRequest } from 'vovk';\nimport type { User } from '../../types';\n\n@prefix('users')\nexport default class UserController {\n    // Example request: PUT /api/users/69?role=moderator\n    @put(':id') \n    static async updateUser(\n        req: VovkRequest<Partial<User>, 'user' | 'moderator' | 'admin'>, \n        { id }: { id: string }\n    ) {\n        const data = await req.json(); // Partial<User>\n        const userRole = req.nextUrl.searchParams.get('role'); // 'user' | 'moderator' | 'admin'\n        // ...\n        return updatedUser;\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see we've changed nothing more than the type of ",(0,s.jsx)(n.code,{children:"req"})," but now ",(0,s.jsx)(n.code,{children:"data"})," receives type of ",(0,s.jsx)(n.code,{children:"Partial<User>"})," and ",(0,s.jsx)(n.code,{children:"userRole"})," is casted as ",(0,s.jsx)(n.code,{children:"'user' | 'moderator' | 'admin'"})," and does not extend ",(0,s.jsx)(n.code,{children:"null"})," anymore."]}),"\n",(0,s.jsx)(n.h2,{id:"client-library",children:"Client library"}),"\n",(0,s.jsxs)(n.p,{children:["Once controller is defined it needs to be initialized at the wildcard route by adding it to the ",(0,s.jsx)(n.code,{children:"controllers"})," object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/app/api/[[...vovk]]/route.ts\nimport { initVovk } from 'vovk';\nimport UserController from '../../../modules/user/UserController';\n\nconst controllers = { UserController };\nconst workers = {}; // See Worker documentation\n\nexport type Controllers = typeof controllers;\nexport type Workers = typeof workers;\n\nexport const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"initVovk"})," performs required actions to generate client-side library and no additional action from your side is required (but you probably would need to restart TS Server to update types if you use VSCode when a new controller is added)."]}),"\n",(0,s.jsxs)(n.p,{children:["The client library implements the same methods (in our case ",(0,s.jsx)(n.code,{children:"updateUser"}),") but changes the method interface so you can pass required input data as options (",(0,s.jsx)(n.code,{children:"body"}),", ",(0,s.jsx)(n.code,{children:"query"})," and ",(0,s.jsx)(n.code,{children:"params"}),"). ",(0,s.jsx)(n.strong,{children:"vovk-client"})," can be used in client components, server components, application state and even be distributed as a standalone package. For an illustration ",(0,s.jsx)(n.a,{href:"https://github.com/finom/vovk-examples",children:"vovk-examples"})," is published as a ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/vovk-examples",children:"standalone NPM package"})," to be used on ",(0,s.jsx)(n.a,{href:"https://vovk.dev",children:"vovk.dev"})," that, by itself, is a static website powered by gh-pages."]}),"\n",(0,s.jsxs)(n.p,{children:["Everything exported from ",(0,s.jsx)(n.strong,{children:"vovk-client"})," is plain old JavaScript with typings that calls the regular ",(0,s.jsx)(n.code,{children:"fetch"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { UserController } from 'vovk-client';\n\n// ...\n\nconst updatedUser = await UserController.updateUser({\n    body: { firstName, lastName },\n    query: { role: 'admin' },\n    params: { id: '69' },\n});\n\n// same as\nfetch('/api/users/69?role=admin', {\n    method: 'PUT',\n    body: JSON.stringify({ firstName, lastName }),\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It's worthy to mention that client library ",(0,s.jsx)(n.a,{href:"./customization",children:"can be customised"})," in order to follow custom logic required by the application."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:" await UserController.updateUser({\n    // ...\n    successMessage: 'Successfully created the user',\n    someOtherCustomFlag: true,\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(n.h3,{id:"custom-object",children:"Custom object"}),"\n",(0,s.jsx)(n.p,{children:"The decorated static methods of controllers can return several kinds of objects. The most common is a custom object. Let's say your controller method returns Prisma ORM invocation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nstatic async updateUser(/* ... */) {\n    // ...\n    const updatedUser = await prisma.user.update({\n        where: { id },\n        data,\n    });\n\n    return updatedUser;\n}\n// ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["At this case the returned value of client method ",(0,s.jsx)(n.code,{children:"UserController.updateUser"})," is going to be recognised as ",(0,s.jsx)(n.code,{children:"User"})," generated at ",(0,s.jsx)(n.strong,{children:"@prisma/client"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"response-object",children:"Response object"}),"\n",(0,s.jsxs)(n.p,{children:["HTTP handlers can also return regular ",(0,s.jsx)(n.code,{children:"Response"})," object, for example ",(0,s.jsx)(n.code,{children:"NextResponse"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nstatic async updateUser(/* ... */) {\n    // ...\n    return NextResponse.json(updatedUser, { status: 200 });\n}\n// ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["At this case client library wouldn't be able to properly recognise type of returned value but you can override the type manually by using generic argument that overrides the return type without need to convert it to ",(0,s.jsx)(n.code,{children:"unknown"})," first."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { UserController } from 'vovk-client';\nimport { User } from '../../types';\n\n// ...\n\nconst updatedUser = await UserController.updateUser<User>(/* ... */);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"async-iterable",children:"Async iterable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nstatic async *updateUser(/* ... */) {\n    // ...\n    yield* iterable;\n}\n// ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"If iterable is returned, the client library is going to cast the method as async generator to implement response streaming. It's explained in more details below."}),"\n",(0,s.jsx)(n.h2,{id:"auto-generated-endpoints",children:"Auto-generated endpoints"}),"\n",(0,s.jsxs)(n.p,{children:["All HTTP decorators provide ",(0,s.jsx)(n.code,{children:".auto"})," method that generates endpoint name automatically from the method name."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserController.ts\nimport { prefix, put } from 'vovk';\n\n@prefix('users')\nexport default class UserController {\n    // Example request: PUT /api/users/do-something\n    @put.auto() \n    static async doSomething(/* ... */) {\n        // ...\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"response-headers",children:"Response headers"}),"\n",(0,s.jsx)(n.p,{children:"All HTTP decorators support custom response headers provided as the second argument."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nexport default class UserController {\n    @put('do-something', { headers: { 'x-hello': 'world' } }) \n    static async doSomething(/* ... */) { /* ... */ }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To enable CORS instead of manually setting up headers you can use ",(0,s.jsx)(n.code,{children:"cors: true"})," option."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nexport default class UserController {\n    @put('do-something', { cors: true }) \n    static async doSomething(/* ... */) { /* ... */ }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For auto-generated endpoints ",(0,s.jsx)(n.code,{children:"cors"})," and ",(0,s.jsx)(n.code,{children:"headers"})," are defined as the only argument."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// ...\nexport default class UserController {\n    @put.auto({ cors: true, headers: { 'x-hello': 'world' } }) \n    static async doSomething(/* ... */) { /* ... */ }\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"errors-httpexception-class-and-httpstatus-enum",children:["Errors: ",(0,s.jsx)(n.code,{children:"HttpException"})," class and ",(0,s.jsx)(n.code,{children:"HttpStatus"})," enum"]}),"\n",(0,s.jsxs)(n.p,{children:["You can gracefully throw HTTP exceptions similarly to NestJS. ",(0,s.jsx)(n.code,{children:"HttpException"})," class accepts 2 arguments. The first one is an HTTP code that can be retrieved from ",(0,s.jsx)(n.code,{children:"HttpStatus"}),", the other one is an error text."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { HttpException, HttpStatus } from 'vovk';\n\n// ...\nstatic async updateUser(/* ... */) {\n    // ...\n    throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong');\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The errors are re-thrown at the client library with the same interface."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { UserController } from 'vovk-client';\nimport { HttpException } from 'vovk';\n\n// ...\ntry {\n    const updatedUser = await UserController.updateUser(/* ... */);\n} catch(e) {\n    console.log(e instanceof HttpException); // true\n    const err = e as HttpException;\n    console.log(err.message, err.statusCode);\n}\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Regular errors such as ",(0,s.jsx)(n.code,{children:"Error"})," are equivalent to ",(0,s.jsx)(n.code,{children:"HttpException"})," with code ",(0,s.jsx)(n.code,{children:"500"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { HttpException, HttpStatus } from 'vovk';\n\n// ...\nstatic async updateUser(/* ... */) {\n    // ...\n    throw new Error('Something went wrong'); // 500\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also throw custom objects that are going to be re-thrown on the client-side as is."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"throw { hello: 'World' };\n"})}),"\n",(0,s.jsx)(n.h2,{id:"service-class",children:"Service Class"}),"\n",(0,s.jsxs)(n.p,{children:["In order to make the code cleaner it's recommended to move most of the logic to Back-end Services. ",(0,s.jsx)(n.a,{href:"./project-structure",children:"Back-End Service"})," is a static class that serves as a library that performs database and third-party API calls outside of Controller Classes."]}),"\n",(0,s.jsx)(n.p,{children:"Let's say you have the following Controller Class:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserController.ts\nimport { prefix, put, type VovkRequest } from 'vovk';\nimport type { User } from '../../types';\n\n@prefix('users')\nexport default class UserController {\n    @put(':id') \n    static async updateUser(req: VovkRequest<Partial<User>>, { id }: { id: string }) {\n        const data = await req.json();\n\n        const updatedUser = await prisma.user.update({\n            where: { id },\n            data,\n        });\n\n        return updatedUser;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Currently it looks fine since it doesn't contain a lot of logic. But as your app is getting more complex you're going to get more handlers with more code. At this case it's recommended to move part of the logic to Back-End Service Class making controllers to be responsible for input extraction, validation and authorisation, but not for DB or API calls."}),"\n",(0,s.jsxs)(n.p,{children:["Let's refactor the code above by introducing ",(0,s.jsx)(n.code,{children:"UserService"}),". For this example it's going to be small but I hope that illustrates the idea clearly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserService.ts\n\n// ... import types and libraries ...\n\nexport default class UserService {\n    static updateUser(id: string, data: Partial<User>) {\n        return prisma.user.update({\n            where: { id },\n            data,\n        });\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, ",(0,s.jsx)(n.code,{children:"UserService"})," does not use decorators and used as a library to perform side-effects."]}),"\n",(0,s.jsxs)(n.p,{children:["The newly created service is injected into the controller with ",(0,s.jsx)(n.code,{children:"private static"})," prefix. You can use ",(0,s.jsx)(n.code,{children:"UserService"})," class directly to call its methods but this way of dependency injection is more descriptive."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserController.ts\nimport { prefix, put, type VovkRequest } from 'vovk';\nimport UserService from './UserService'\n\n@prefix('users')\nexport default class UserController {\n    private static userService = UserService;\n\n    @put(':id') \n    static async updateUser(req: VovkRequest<Partial<User>>, { id }: { id: string }) {\n        const data = await req.json();\n        return this.userService.updateUser(id, data);\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Back-End Service Classes can inject other Back-End Services (as well as so-called Isomorphic Service Classes explained in ",(0,s.jsx)(n.a,{href:"./project-structure",children:"separate article of this documentation"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserService.ts\nimport PostService from '../post/PostService';\nimport CommentService from '../comment/CommentService';\n// ... other imports ...\n\nexport default class UserService {\n    private static postService = PostService;\n\n    private static commentService = CommentService;\n\n    static async updateUser(id: string, data: Partial<User>) {\n        const latestPost = this.postService.findLatestUserPost(id);\n        const latestPostComments = this.commentService.findPostComments(latestPost.id);\n        // ...\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In case if two services are dependent on each other, in order to avoid errors, you can apply a workaround that involves accessor definition. For example if ",(0,s.jsx)(n.code,{children:"UserService"})," is using ",(0,s.jsx)(n.code,{children:"PostService"})," and vice versa, the code of the services might look like that:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserService.ts\nimport PostService from '../post/PostService';\n// ... other imports ...\n\nexport default class UserService {\n    private static get postService() {\n        return PostService;\n    };\n\n    static async updateUser(id: string, data: Partial<User>) {\n        const latestPost = this.postService.findLatestUserPost(id);\n        // ...\n    }\n\n    static async doSomething() {\n        // ...\n    }\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/post/PostService.ts\nimport UserService from '../user/UserService';\n// ... other imports ...\n\nexport default class PostService {\n    private static get userService() {\n        return UserService;\n    };\n\n    static async doSometingWithUser(id: string, data: Partial<User>) {\n        await this.userService.doSomething();\n        // ...\n    }\n\n    static async findLatestUserPost(id: string) {\n        // ...\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"streaming",children:"Streaming"}),"\n",(0,s.jsx)(n.p,{children:"Vovk.ts provides two ways to implement response streaming requred for applications that utilise the AI completions."}),"\n",(0,s.jsx)(n.h3,{id:"async-iterators",children:"Async iterators"}),"\n",(0,s.jsxs)(n.p,{children:["Controller methods can implement generators that use ",(0,s.jsx)(n.code,{children:"*"})," syntax and utilise ",(0,s.jsx)(n.code,{children:"yield"})," keyword instead of regular ",(0,s.jsx)(n.code,{children:"return"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/stream/StreamController.ts\nimport { get, prefix } from 'vovk';\n\ntype Token = { message: string };\n\n@prefix('stream')\nexport default class StreamController {\n  @get('tokens')\n  static async *streamTokens() {\n    const tokens: Token[] = [\n      { message: 'Hello,' },\n      { message: ' World' },\n      { message: '!' },\n    ];\n\n    for (const token of tokens) {\n      await new Promise((resolve) => setTimeout(resolve, 300));\n      yield token;\n    }\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In order to refactor this code and utilise Back-end Service you can move the streaming logic to ",(0,s.jsx)(n.code,{children:"StreamService"})," static class."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/stream/StreamService.ts\ntype Token = { message: string };\n\nexport default class StreamService {\n  static async *streamTokens() {\n    const tokens: Token[] = [\n      { message: 'Hello,' },\n      { message: ' World' },\n      { message: '!' },\n    ];\n\n    for (const token of tokens) {\n      await new Promise((resolve) => setTimeout(resolve, 300));\n      yield token;\n    }\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["At the controller use ",(0,s.jsx)(n.code,{children:"yield*"})," syntax to delegate iterable returned from ",(0,s.jsx)(n.code,{children:"StreamService.streamTokens"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { get, prefix } from 'vovk';\nimport StreamService from './StreamService';\n\n@prefix('stream')\nexport default class StreamController {\n  private static streamService = StreamService;\n\n  @get('tokens')\n  static async *streamTokens() {\n    yield* this.streamService.streamTokens();\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"streamresponse",children:"StreamResponse"}),"\n",(0,s.jsxs)(n.p,{children:["In some cases it's too hard to use generators to implement response streaming. Vovk.ts introduces ",(0,s.jsx)(n.code,{children:"StreamResponse"})," class inherited from ",(0,s.jsx)(n.code,{children:"Response"})," class that uses ",(0,s.jsx)(n.code,{children:"TransformStream#readable"})," as body and adds required HTTP headers. It's a lower-level API that is used behind the scenes to implement generator logic explained above. ",(0,s.jsx)(n.code,{children:"StreamResponse"})," is useful when your service method is implemented a regular function that accepts ",(0,s.jsx)(n.code,{children:"StreamResponse"})," instance as a pointer to send messages manually."]}),"\n",(0,s.jsx)(n.p,{children:"There is what the streaming service might look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/stream/StreamService.ts\nimport type { StreamResponse } from 'vovk';\n\nexport type Token = { message: string };\n\nexport default class StreamService {\n  static async streamTokens(resp: StreamResponse<Token>) {\n    const tokens: Token[] = [\n      { message: 'Hello,' },\n      { message: ' World' },\n      { message: '!' },\n    ];\n\n    for (const token of tokens) {\n      await new Promise((resolve) => setTimeout(resolve, 300));\n      resp.send(token);\n    }\n\n    resp.close();\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see tokens are sent using ",(0,s.jsx)(n.code,{children:"StreamResponse#send"})," method and, when the stream is completed, it needs to be closed with ",(0,s.jsx)(n.code,{children:"StreamResponse#close"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The Controller Class returns an instance of ",(0,s.jsx)(n.code,{children:"StreamResponse"})," and the streaming is performed a floating Promise above the ",(0,s.jsx)(n.code,{children:"return"})," statement."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { prefix, get, StreamResponse, type VovkRequest } from 'vovk';\nimport StreamService, { type Token } from './StreamService';\n\n@prefix('stream')\nexport default class StreamController {\n  private static streamService = StreamService;\n\n  @get('tokens')\n  static async streamTokens() {\n    const resp = new StreamResponse<Token>();\n\n    void this.streamService.streamTokens(resp);\n\n    return resp;\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"StreamResponse"})," class also provides ",(0,s.jsx)(n.code,{children:"throw"})," methods that safely closes the stream and makes the client to re-throw the received error."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await resp.close();\n\nawait resp.throw(new Error('Stream error'));\n"})}),"\n",(0,s.jsx)(n.h3,{id:"handling-stream-responses-on-the-client",children:"Handling Stream Responses on the Client"}),"\n",(0,s.jsx)(n.p,{children:"Both ways of response streaming generate client method that returns a disposable async generator."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { StreamController } from 'vovk-client';\n\n{\n    using stream = await StreamController.streamTokens();\n\n    for await (const token of stream) {\n        console.log(token);\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"using"})," keyword (that you can freely replace by ",(0,s.jsx)(n.code,{children:"let"})," or ",(0,s.jsx)(n.code,{children:"const"}),") indicates that when code block is reached the end (in case of early ",(0,s.jsx)(n.code,{children:"break"})," or if the code block encountered an error) the stream is going to be closed by invoking ",(0,s.jsx)(n.code,{children:"stream.close()"})," method automatically. ",(0,s.jsx)(n.code,{children:"stream.close()"})," can also be called explicitly if needed."]}),"\n",(0,s.jsxs)(n.p,{children:["To make sure that the stream is closed before moving to the next code block you can use ",(0,s.jsx)(n.code,{children:"await using"})," syntax that disposes the stream asynchronous way."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { StreamController } from 'vovk-client';\n\n{\n    await using stream = await StreamController.streamTokens();\n    // ...\n}\n// on this line stream is already closed\n"})}),"\n",(0,s.jsx)(n.h2,{id:"validation-with-vovk-zod",children:"Validation with vovk-zod"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/finom/vovk-zod",children:"vovk-zod"})," is a library that implements ",(0,s.jsx)(n.a,{href:"https://zod.dev/",children:"Zod"})," validation. It performs validation on the Controller with ",(0,s.jsx)(n.code,{children:"ZodModel.parse"}),", ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/zod-to-json-schema",children:"converts the Zod object to a JSON Schema"})," that's stored at the metadata file, and runs validation with ",(0,s.jsx)(n.a,{href:"https://ajv.js.org/",children:"Ajv"})," on client before the request is made."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/modules/user/UserController.ts\nimport vovkZod from 'vovk-zod';\nimport { z } from 'zod';\nimport { UpdateUserModel, UpdateUserQueryModel } from '../../zod';\n// ... other imports ...\n\nexport default class UserController {\n    @put(':id')\n    @vovkZod(UpdateUserModel, UpdateUserQueryModel)\n    static updateUser(\n        req: VovkRequest<z.infer<typeof UpdateUserModel>, z.infer<typeof UpdateUserQueryModel>>\n    ) {\n        // ...\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To disable client-side validation you can pass ",(0,s.jsx)(n.code,{children:"disableClientValidation: true"})," to the client method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { UserController } from 'vovk-client';\n\n// ...\nUserController.updateUser({\n    // ...\n    disableClientValidation: true,\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disableClientValidation"})," is mostly useful for debugging purposes to make sure that the server validation is properly functioning. In order to disable client validation completely (for example to hide validation logic from client-side so it doesn't appear in ",(0,s.jsx)(n.strong,{children:".vovk.json"}),") you can set ",(0,s.jsx)(n.code,{children:"exposeValidation: false"})," at ",(0,s.jsx)(n.code,{children:"initVovk"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// /src/app/api/[[...vovk]]/route.ts\n// ...\n\nexport const { GET, POST, PUT, DELETE } = initVovk({ \n    controllers, \n    workers,\n    exposeValidation: false,\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"type-extraction",children:"Type extraction"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"vovk"})," module provides a collection of useful types that described in more details at ",(0,s.jsx)(n.a,{href:"./api",children:"API documentation"}),". It's worthy to mention the most often used types here:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { UserController, StreamController } from 'vovk-client';\n\n// infer body\ntype Body = VovkClientBody<typeof UserController.updateUser>;\n// infer query\ntype Query = VovkClientQuery<typeof UserController.updateUser>;\n// infer params\ntype Params = VovkClientParams<typeof UserController.updateUser>;\n// infer return type\ntype Return = VovkClientReturnType<typeof UserController.updateUser>;\n// infer yield type from stream methods\ntype Yield = VovkClientYield<typeof StreamController.streamTokens>;\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to create a custom function that makes requests to the server, you can borrow types from the client to build the arguments."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { UserController } from 'vovk-client';\n\nexport function updateUser(\n    id: VovkClientQuery<typeof UserController.updateUser>['id'],\n    body: VovkClientBody<typeof UserController.updateUser>,\n) {\n    return UserController.updateUser({\n        body,\n        query: { id },\n    });\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(7294);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);