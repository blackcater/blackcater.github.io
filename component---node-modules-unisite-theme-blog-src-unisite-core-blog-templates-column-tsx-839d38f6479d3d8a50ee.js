(self.webpackChunk=self.webpackChunk||[]).push([[372],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var a=r(7228);e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var a=r(9489),n=r(7067);function l(t,r,o){return n()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var n=[null];n.push.apply(n,t);var l=new(Function.bind.apply(e,n));return r&&a(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var a=r(3646),n=r(6860),l=r(379),o=r(8206);e.exports=function(e){return a(e)||n(e)||l(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var a=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6928:function(e,t,r){var a=r(380);e.exports={MDXRenderer:a}},380:function(e,t,r){var a=r(9100),n=r(319),l=r(9713),o=r(7316),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),m=r(4983).mdx,d=r(1303).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=o(e,c),s=d(t),p=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:m},s),t=Object.keys(e),l=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(l)))}),[r,t]);return i.createElement(p,u({},l))}},3302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(7294),n=r(1200),l=r(9782),o=r(1926),c=r(3825),s=r(9311),u=function(e){var t=e.defaultActiveKey,r=e.children,n=(0,a.useMemo)((function(){return(a.Children.map(r,(function(e){return a.isValidElement(e)?e:null}))||[]).filter((function(e){return!!e})).map((function(e){return{key:e.props.tabKey,children:e.props.children}}))}),[r]),l=(0,a.useMemo)((function(){return n.filter((function(e){return e.key===t}))[0]||n[0]}),[n,t]),o=(0,a.useState)(null==l?void 0:l.key),c=o[0],s=o[1],u=(0,a.useState)(null==l?void 0:l.children),i=u[0],m=u[1];return(0,a.useEffect)((function(){l&&(s(null==l?void 0:l.key),m(null==l?void 0:l.children))}),[l]),a.createElement(a.Fragment,null,a.createElement("div",{className:"inline-flex flex-row items-center p-1 space-x-4 bg-gray-200 rounded-full dark:bg-true-gray-900"},a.Children.map(r,(function(e){return a.isValidElement(e)?a.cloneElement(e,{key:e.props.tabKey,active:c===e.props.tabKey,onClick:function(){s(e.props.tabKey),m(e.props.children)}}):e}))),a.createElement("div",null,i))},i=r(5900),m=r.n(i),d=function(e){var t=e.tab,r=e.active,n=e.onClick;return a.createElement("div",{className:m()([r?"text-gray-900 font-semibold bg-white shadow dark:text-gray-100 dark:bg-true-gray-700":"text-gray-700 dark:text-gray-300","inline-flex flex-row items-center px-4 py-1 text-sm hover:text-gray-900 hover:font-semibold cursor-pointer rounded-full transition duration-300 ease-in-out"]),onClick:n},t)},p=r(2879),f=r(4492);function y(e){var t=e.cid,r=e.name,l=(0,f.useCategoryPath)(t);return a.createElement(n.rU,{className:"px-2 py-0.5 text-gray-700 text-sm bg-gray-100 hover:bg-gray-200 hover:shadow rounded dark:text-true-gray-300 dark:hover:text-true-gray-100 dark:bg-true-gray-800 dark:hover:bg-true-gray-700",to:l},r)}function x(e){var t=e.tid,r=e.name,l=(0,f.useTagPath)(t);return a.createElement(n.rU,{className:"px-2 py-0.5 text-gray-700 text-sm bg-gray-100 hover:bg-gray-200 hover:shadow rounded dark:text-true-gray-300 dark:hover:text-true-gray-100 dark:bg-true-gray-800 dark:hover:bg-true-gray-700",to:l},"#",r)}var g=function(e){var t,r=e.data,i=r.column,m=r.contents,f=(0,l.d)(i.cover),g=i.authors||[],v=i.categories||[],b=i.tags||[],E=null===(t=m.nodes.filter((function(e){return"intro"===e.type}))[0])||void 0===t?void 0:t.body,h=i.chapters;return a.createElement(o.Z,null,a.createElement("div",{className:"max-w-6xl mx-auto px-6 py-8 grid grid-cols-12"},a.createElement("div",{className:"col-start-1 col-span-8 space-y-8"},a.createElement(c.Z,null,a.createElement("div",{className:"flex flex-row items-center"},f?a.createElement("div",{className:"mr-8 w-32 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg"},a.createElement(s.Z,{ratio:300/424},a.createElement(l.G,{image:f,alt:i.title}))):null,a.createElement("div",{className:"flex flex-1 flex-col"},a.createElement("h1",{className:"text-4xl text-gray-900 font-semibold dark:text-gray-100"},i.title),i.subTitle?a.createElement("div",{className:"text-gray-700 mt-2 dark:text-gray-300"},i.subTitle):null,a.createElement("div",{className:"mt-4 flex flex-row items-center"},g.map((function(e){return a.createElement("div",{key:e.uid,className:"inline-flex flex-row items-center"},a.createElement(l.G,{className:"mr-2 rounded-full cursor-pointer",alt:e.name,image:(0,l.d)(e.avatar)}),a.createElement("span",{className:"text-lg text-gray-900 cursor-pointer hover:underline dark:text-gray-100"},e.name))})))))),a.createElement(u,null,a.createElement(d,{tab:"简介",tabKey:"intro"},a.createElement(p.I,null,E)),a.createElement(d,{tab:"目录",tabKey:"category"},a.createElement(c.Z,null,a.createElement("section",null,(h||[]).map((function(e,t){var r=e.title,l=e.link,o=e.sections;return l||!o?a.createElement("div",{key:t,className:"px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md dark:text-gray-100 dark:hover:bg-true-gray-800"},l?a.createElement(n.rU,{className:"block",to:l},r):a.createElement("div",null,r)):a.createElement("div",{key:t},a.createElement("div",{className:"mt-6 mb-3 text-2xl text-gray-900 font-semibold dark:text-gray-100"},r),a.createElement("ul",null,(o||[]).map((function(e,t){var r=e.title,l=e.link;return a.createElement("li",{key:t,className:"px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md dark:text-gray-100 dark:hover:bg-true-gray-800"},l?a.createElement(n.rU,{className:"block",to:l},r):a.createElement("div",{className:"flex flex-row justify-between items-center opacity-50"},a.createElement("span",null,r),a.createElement("span",{className:"text-xs"},"待更新")))}))))}))))),a.createElement(d,{tab:"留言",tabKey:"comment"},a.createElement("span",{className:"dark:text-gray-300"},"暂未开放")))),a.createElement("div",{className:"ml-8 col-start-9 col-span-4"},a.createElement("div",{className:"sticky top-20 space-y-8"},a.createElement(c.Z,null,a.createElement("div",{className:"space-y-2"},a.createElement("div",{className:"flex flex-row items-center"},a.createElement("span",{className:"dark:text-gray-300"},"发布时间："),a.createElement("div",{className:"dark:text-gray-100"},"2019-01-01")),a.createElement("div",{className:"flex flex-row items-center"},a.createElement("span",{className:"dark:text-gray-300"},"最近更新："),a.createElement("div",{className:"dark:text-gray-100"},"2019-01-01")),a.createElement("div",{className:"flex flex-row items-center"},a.createElement("span",{className:"dark:text-gray-300"},"分类："),a.createElement("div",{className:"space-x-2"},v.map((function(e){return a.createElement(y,Object.assign({key:e.cid},e))})))),a.createElement("div",{className:"flex flex-row items-center"},a.createElement("span",{className:"dark:text-gray-300"},"标签："),a.createElement("div",{className:"space-x-2"},b.map((function(e){return a.createElement(x,Object.assign({key:e.tid},e))}))))))))))}},3825:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7294),n=r(5900),l=r.n(n),o=function(e){var t=e.hoverable,r=void 0!==t&&t,n=e.className,o=e.children;return a.createElement("div",{className:l()(["w-full p-4 md:px-8 md:py-6 transform duration-300 ease-in-out bg-white rounded-2xl shadow-sm dark:bg-true-gray-900",r?"hover:shadow-md":"",n])},o)}},2879:function(e,t,r){"use strict";r.d(t,{I:function(){return m}});var a=r(7294),n=r(5900),l=r.n(n),o=r(6928),c=a.forwardRef((function(e,t){var r=e.className,n=e.children;return a.createElement("div",{ref:t,className:l()([r,"gatsby-typography","gatsby-typography--no-last-margin"])},a.createElement(o.MDXRenderer,null,n))})),s=r(9756),u=r(3825),i=["contentClassName","children"],m=function(e){var t=e.contentClassName,r=e.children,n=(0,s.Z)(e,i),l=(0,a.useRef)(null);return a.createElement(u.Z,n,a.createElement(c,{className:t,ref:l},r))}}}]);
//# sourceMappingURL=component---node-modules-unisite-theme-blog-src-unisite-core-blog-templates-column-tsx-839d38f6479d3d8a50ee.js.map