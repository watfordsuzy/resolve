/*! For license information please see aeca4166.736c2572.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4570],{2525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var l,i,p=a(e),c=1;c<arguments.length;c++){for(var u in l=Object(arguments[c]))n.call(l,u)&&(p[u]=l[u]);if(t){i=t(l);for(var s=0;s<i.length;s++)r.call(l,i[s])&&(p[i[s]]=l[i[s]])}}return p}},1535:(e,t,n)=>{"use strict";var r=n(2525),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||k}function N(){}function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||k}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=v.prototype;var j=w.prototype=new N;j.constructor=w,r(j,v.prototype),j.isPureReactComponent=!0;var O={current:null},P=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,a={},l=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)P.call(t,r)&&!T.hasOwnProperty(r)&&(a[r]=t[r]);var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){for(var c=Array(p),u=0;u<p;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===a[r]&&(a[r]=p[r]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:O.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var I=/\/+/g,M=[];function E(e,t,n,r){if(M.length){var a=M.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function R(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case l:i=!0}}if(i)return n(r,e,""===t?"."+C(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=t+C(a=e[p],p);i+=R(a,c,n,r)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=h&&e[h]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),p=0;!(a=e.next()).done;)i+=R(a=a.value,c=t+C(a,p++),n,r);else if("object"===a)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function q(e,t,n){return null==e?0:R(e,"",t,n)}function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n)),r.push(e))}function $(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(I,"$&/")+"/"),q(e,U,t=E(t,o,r,a)),A(t)}var _={current:null};function L(){var e=_.current;if(null===e)throw Error(y(321));return e}},7378:(e,t,n)=>{"use strict";n(1535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2631:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>c,default:()=>s});var r=n(2122),a=n(9756),o=(n(7378),n(3905)),l={id:"http-api",title:"HTTP API"},i=void 0,p={unversionedId:"api/client/http-api",id:"api/client/http-api",isDocsHomePage:!1,title:"HTTP API",description:"ReSolve provides a standard HTTP API that allows you to send aggregate commands, and query Read and View Models.",source:"@site/../docs/api/client/http-api.md",sourceDirName:"api/client",slug:"/api/client/http-api",permalink:"/resolve/docs/api/client/http-api",version:"current",frontMatter:{id:"http-api",title:"HTTP API"},sidebar:"docs",previous:{title:"reSolve Scripts",permalink:"/resolve/docs/api/resolve-scripts"},next:{title:"Client Entry Point",permalink:"/resolve/docs/api/client/entry-point"}},c=[{value:"Read Model API",id:"read-model-api",children:[]},{value:"View Model API",id:"view-model-api",children:[]},{value:"Command API",id:"command-api",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ReSolve provides a standard HTTP API that allows you to send aggregate commands, and query Read and View Models."),(0,o.kt)("h2",{id:"read-model-api"},"Read Model API"),(0,o.kt)("p",null,"To query a Read Model from the client side, send a POST request to the following URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/query/{readModel}/{resolver}\n")),(0,o.kt)("h5",{id:"url-parameters"},"URL Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"readModel")),(0,o.kt)("td",{parentName:"tr",align:null},"The Read Model name as defined in the application's configuration file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"resolver")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of a ",(0,o.kt)("a",{parentName:"td",href:"#resolvers"},"resolver defined in the Read Model"))))),(0,o.kt)("p",null,"The request body should have the ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json")," content type and the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  param1: value1,\n  param2: value2,\n  // ...\n  paramN: valueN\n}\n")),(0,o.kt)("p",null,"The object contains parameters that the resolver accepts."),(0,o.kt)("h2",{id:"view-model-api"},"View Model API"),(0,o.kt)("p",null,"To query a View Model from the client side, send a GET request to the following URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/query/{viewModel}/{aggregateIds}\n")),(0,o.kt)("h5",{id:"url-parameters-1"},"URL Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"viewModel"),(0,o.kt)("td",{parentName:"tr",align:null},"The View Model name as defined in the application's configuration file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateIds"),(0,o.kt)("td",{parentName:"tr",align:null},"The comma-separated list of Aggregate IDs to include in the View Model. Use ",(0,o.kt)("inlineCode",{parentName:"td"},"*")," to include all Aggregates")))),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)("p",null,"Use the following command to get the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reimagined/resolve/tree/master/examples/js/shopping-list"},"shopping-list")," example application's state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -g -X GET "http://localhost:3000/api/query/Default/shoppingLists"\n')),(0,o.kt)("h2",{id:"command-api"},"Command API"),(0,o.kt)("p",null,"You can send a command from the client side as a POST request to the following URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/commands\n")),(0,o.kt)("p",null,"The request body should have the ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json")," content type and contain the command's JSON representation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "aggregateName": aggregateName,\n  "type": commandType,\n  "aggregateId": aggregateID,\n  "payload": {\n    "param1": value1,\n    "param2": value2,\n    ...\n    "paramN": valueN\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"aggregateId")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of an aggregate that should handle the command")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"aggregateName")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The aggregate's name as defined in ",(0,o.kt)("strong",{parentName:"td"},"config.app.js"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"commandType")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The command type that the aggregate can handle")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"payload")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"Parameters the command accepts")))),(0,o.kt)("h5",{id:"example-1"},"Example"),(0,o.kt)("p",null,"Use the following command to add an item to the ",(0,o.kt)("strong",{parentName:"p"},"shopping-list")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -X POST "http://localhost:3000/api/commands"\n--header "Content-Type: application/json" \\\n--data \'\n{\n  "aggregateName":"Todo",\n  "type":"createItem",\n  "aggregateId":"root-id",\n  "payload": {\n    "id":`date +%s`,\n    "text":"Learn reSolve API"\n  }\n}\n\'\n')))}s.isMDXComponent=!0}}]);