(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{193:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return u}));var t=n(2),a=n(9),o=(n(0),n(203)),i={id:"filter-schema",title:"Filter Schema Transform",sidebar_label:"Filter Schema"},s={id:"transforms/filter-schema",title:"Filter Schema Transform",description:"The filterSchema transform allows you to filter fields in specific types.",source:"@site/docs/transforms/filter-schema.md",permalink:"/docs/transforms/filter-schema",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/filter-schema.md",sidebar_label:"Filter Schema",sidebar:"sidebar",previous:{title:"Apollo Federation Transform",permalink:"/docs/transforms/federation"},next:{title:"CLI",permalink:"/docs/api/cli"}},c=[{value:"How to use?",id:"how-to-use",children:[]}],l={rightToc:c};function u(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"filterSchema")," transform allows you to filter fields in specific types."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-filter-schema\n")),Object(o.b)("h2",{id:"how-to-use"},"How to use?"),Object(o.b)("p",null,"Add the following configuration to your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - filterSchema:\n    - Query.!admins # <-- This will remove field `admins` from `Query` type\n    - Mutation.!{addUser, removeUser} # <-- This will remove fields `addUser` and `removeUser` from `Mutation` type\n    - User.{id,username,name,age} # <-- This will remove fields except `id`, `username`, `name` and `age`\n")),Object(o.b)("p",null,"Let's assume you have the following schema,"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n    me: User\n    users: [User]\n    user(id: ID): User\n    admins: [User]\n}\n\ntype Mutation {\n    updateMyProfile(name: String, age: Int): User\n    addUser(username: String, name: String, age: Int): User\n    removeUser(id: ID): ID\n}\n\ntype User {\n    id: ID\n    username: String\n    password: String\n    name: String\n    age: Int\n    ipAddress: String\n}\n")),Object(o.b)("p",null,"It would become the following schema;"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n    me: User\n    users: [User]\n    user(id: ID): User\n}\n\ntype Mutation {\n    updateMyProfile(name: String, age: Int): User\n}\n\ntype User {\n    id: ID\n    username: String\n    name: String\n    age: Int\n}\n")))}u.isMDXComponent=!0},203:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return d}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s({},r,{},e)),n},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=t,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?a.a.createElement(d,s({ref:r},l,{components:n})):a.a.createElement(d,s({ref:r},l))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);