/*! For license information please see cdf1d8cb.9305fd33.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[621],{2525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,l){for(var o,i,p=r(e),s=1;s<arguments.length;s++){for(var m in o=Object(arguments[s]))n.call(o,m)&&(p[m]=o[m]);if(t){i=t(o);for(var d=0;d<i.length;d++)a.call(o,i[d])&&(p[i[d]]=o[i[d]])}}return p}},1535:(e,t,n)=>{"use strict";var a=n(2525),r="function"==typeof Symbol&&Symbol.for,l=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,p=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,m=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.forward_ref"):60112,k=r?Symbol.for("react.suspense"):60113,c=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function y(){}function S(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(N(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var A=S.prototype=new y;A.constructor=S,a(A,v.prototype),A.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var a,r={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!j.hasOwnProperty(a)&&(r[a]=t[a]);var p=arguments.length-2;if(1===p)r.children=n;else if(1<p){for(var s=Array(p),m=0;m<p;m++)s[m]=arguments[m+2];r.children=s}if(e&&e.defaultProps)for(a in p=e.defaultProps)void 0===r[a]&&(r[a]=p[a]);return{$$typeof:l,type:e,key:o,ref:i,props:r,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var I=/\/+/g,O=[];function P(e,t,n,a){if(O.length){var r=O.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function D(e,t,n,a){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var i=!1;if(null===e)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case o:i=!0}}if(i)return n(a,e,""===t?"."+q(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=t+q(r=e[p],p);i+=D(r,s,n,a)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=g&&e[g]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),p=0;!(r=e.next()).done;)i+=D(r=r.value,s=t+q(r,p++),n,a);else if("object"===r)throw n=""+e,Error(N(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function R(e,t,n){return null==e?0:D(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?G(e,a,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n)),a.push(e))}function G(e,t,n,a,r){var l="";null!=n&&(l=(""+n).replace(I,"$&/")+"/"),R(e,F,t=P(t,l,a,r)),z(t)}var $={current:null};function _(){var e=$.current;if(null===e)throw Error(N(321));return e}},7378:(e,t,n)=>{"use strict";n(1535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8217:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>p,toc:()=>s,default:()=>d});var a=n(2122),r=n(9756),l=(n(7378),n(3905)),o={id:"event-store-adapter",title:"Event Store Adapter"},i=void 0,p={unversionedId:"api/event-store-adapter",id:"api/event-store-adapter",isDocsHomePage:!1,title:"Event Store Adapter",description:"An event store adapter defines how the reSolve framework stores events in the underlying event store. An event store adapter object must expose the following functions:",source:"@site/../docs/api/event-store-adapter.md",sourceDirName:"api",slug:"/api/event-store-adapter",permalink:"/resolve/docs/api/event-store-adapter",version:"current",frontMatter:{id:"event-store-adapter",title:"Event Store Adapter"},sidebar:"docs",previous:{title:"Read Model Store",permalink:"/resolve/docs/api/read-model-store"},next:{title:"API Handler",permalink:"/resolve/docs/api/api-handler"}},s=[{value:"init",id:"init",children:[]},{value:"drop",id:"drop",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"saveEvent",id:"saveevent",children:[]},{value:"loadEvents",id:"loadevents",children:[]},{value:"getLatestEvent",id:"getlatestevent",children:[]},{value:"import",id:"import",children:[]},{value:"export",id:"export",children:[]},{value:"freeze",id:"freeze",children:[]},{value:"unfreeze",id:"unfreeze",children:[]},{value:"isFrozen",id:"isfrozen",children:[]},{value:"loadSnapshot",id:"loadsnapshot",children:[]},{value:"saveSnapshot",id:"savesnapshot",children:[]},{value:"dropSnapshot",id:"dropsnapshot",children:[]},{value:"getSecret",id:"getsecret",children:[]},{value:"setSecret",id:"setsecret",children:[]},{value:"deleteSecret",id:"deletesecret",children:[]},{value:"incrementalImport",id:"incrementalimport",children:[]},{value:"beginIncrementalImport",id:"beginincrementalimport",children:[]},{value:"pushIncrementalImport",id:"pushincrementalimport",children:[]},{value:"commitIncrementalImport",id:"commitincrementalimport",children:[]},{value:"rollbackIncrementalImport",id:"rollbackincrementalimport",children:[]}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An event store adapter defines how the reSolve framework stores events in the underlying event store. An event store adapter object must expose the following functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#init"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"Initializes a database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#drop"},"drop")),(0,l.kt)("td",{parentName:"tr",align:null},"Drops a database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dispose"},"dispose")),(0,l.kt)("td",{parentName:"tr",align:null},"Disconnects from a database and disposes unmanaged resources.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#saveevent"},"saveEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"Saves an event to the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#loadEvents"},"loadEvents")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets an array of events and the next cursor from the store based on the specified filter criteria.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getlatestevent"},"getLatestEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the latest saved event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#import"},"import")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a writable stream used to save events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#export"},"export")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a readable stream used to load events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#freeze"},"freeze")),(0,l.kt)("td",{parentName:"tr",align:null},"Freezes the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#unfreeze"},"unfreeze")),(0,l.kt)("td",{parentName:"tr",align:null},"Unfreezes the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#isfrozen"},"isFrozen")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a Boolean value that indicates whether the database is frozen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#loadsnapshot"},"loadSnapshot")),(0,l.kt)("td",{parentName:"tr",align:null},"Loads a snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#savesnapshot"},"saveSnapshot")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates or updates a snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dropsnapshot"},"dropSnapshot")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getsecret"},"getSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#setsecret"},"setSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates or updates a secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#deletesecret"},"deleteSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#incrementalimport"},"incrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Incrementally imports events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#beginincrementalimport"},"beginIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Starts to build a batch of events to import.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pushincrementalimport"},"pushIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Adds events to an incremental import batch.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#commitincrementalimport"},"commitIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Commits an incremental import batch to the event store.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#rollbackincrementalimport"},"rollbackIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Drops an incremental import batch.")))),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("p",null,"Initializes the database."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import createEventStoreAdapter from '@resolve-js/eventstore-xxx'\n\nconst eventStoreAdapter = createEventStoreAdapter(options)\n\nawait eventStoreAdapter.init()\n")),(0,l.kt)("h3",{id:"drop"},"drop"),(0,l.kt)("p",null,"Drops the database."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.drop()\n")),(0,l.kt)("h3",{id:"dispose"},"dispose"),(0,l.kt)("p",null,"Disconnects from the database and disposes unmanaged resources."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.dispose()\n")),(0,l.kt)("h3",{id:"saveevent"},"saveEvent"),(0,l.kt)("p",null,"Saves an event to the database."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"{ aggregateId: string, aggregateVersion: number, type: string, timestamp: number, payload: any }")))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.saveEvent({\n  aggregateId: 'user-id',\n  aggregateVersion: 1,\n  type: 'USER_CREATED',\n  timestamp: Date.now(),\n  payload: {\n    name: 'user-name',\n  },\n})\n")),(0,l.kt)("h3",{id:"loadevents"},"loadEvents"),(0,l.kt)("p",null,"Gets an array of events and the next cursor from the store based on the specified filter criteria."),(0,l.kt)("h5",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"{ cursor: string or null, limit: number, eventsSizeLimit: number, eventTypes: Array","<","string",">",", aggregateIds: Array","<","string",">"," } ",(0,l.kt)("br",null)," or ",(0,l.kt)("br",null)," { startTime?: number, endTime?: number, limit: number, eventsSizeLimit: number, eventTypes: Array","<","string",">",", aggregateIds: Array","<","string",">"," }")))),(0,l.kt)("h5",{id:"result"},"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Promise<{\n  events: Array<{\n    threadId: number,\n    threadCounter: number,\n    aggregateId: string,\n    aggregateVersion: number,\n    type: string,\n    timestamp: number,\n    payload: any\n  }>,\n  cursor: string\n}>\n")),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { events, cursor: nextCursor } = await eventStoreAdapter.loadEvents(\n  eventFilter\n)\n")),(0,l.kt)("h3",{id:"getlatestevent"},"getLatestEvent"),(0,l.kt)("p",null,"Gets the latest saved event."),(0,l.kt)("h3",{id:"import"},"import"),(0,l.kt)("p",null,"Gets a writable stream used to save events."),(0,l.kt)("h5",{id:"arguments-1"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-1"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WritableStream")),(0,l.kt)("h3",{id:"export"},"export"),(0,l.kt)("p",null,"Gets a readable stream used to load events."),(0,l.kt)("h5",{id:"arguments-2"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-2"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ReadableStream")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { pipeline as pipelineC } from 'stream'\nimport { promisify } from 'util'\n\nconst pipeline = promisify(pipelineC)\n\nawait pipeline(eventStoreAdapter1.import(), eventStoreAdapter2.export())\n")),(0,l.kt)("h3",{id:"freeze"},"freeze"),(0,l.kt)("p",null,"Freezes the database."),(0,l.kt)("h5",{id:"arguments-3"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-3"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.freeze()\n")),(0,l.kt)("h3",{id:"unfreeze"},"unfreeze"),(0,l.kt)("p",null,"Unfreezes the database."),(0,l.kt)("h5",{id:"arguments-4"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-4"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.unfreeze()\n")),(0,l.kt)("h3",{id:"isfrozen"},"isFrozen"),(0,l.kt)("p",null,"Gets a Boolean value that indicates whether the database is frozen."),(0,l.kt)("h5",{id:"arguments-5"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-5"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const frozen = await eventStoreAdapter.isFrozen()\n")),(0,l.kt)("h3",{id:"loadsnapshot"},"loadSnapshot"),(0,l.kt)("p",null,"Loads a snapshot."),(0,l.kt)("h5",{id:"arguments-6"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshotKey"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of snapshots.")))),(0,l.kt)("h5",{id:"result-6"},"Result"),(0,l.kt)("p",null,"content: ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<string | null>")),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const content = await eventStoreAdapter.loadSnapshot(snapshotKey)\nif (content == null) {\n  throw new Error('SnapshotNotFoundException')\n}\n")),(0,l.kt)("h3",{id:"savesnapshot"},"saveSnapshot"),(0,l.kt)("p",null,"Creates or updates a snapshot."),(0,l.kt)("h5",{id:"arguments-7"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshotKey"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of snapshots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"A snapshot in text format.")))),(0,l.kt)("h5",{id:"result-7"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.saveSnapshot(snapshotKey, content)\n")),(0,l.kt)("h3",{id:"dropsnapshot"},"dropSnapshot"),(0,l.kt)("p",null,"Deletes a snapshot."),(0,l.kt)("h5",{id:"arguments-8"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshotKey"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of snapshots")))),(0,l.kt)("h5",{id:"result-8"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-11"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.dropSnapshot(snapshotKey)\n")),(0,l.kt)("h3",{id:"getsecret"},"getSecret"),(0,l.kt)("p",null,"Gets a secret."),(0,l.kt)("h5",{id:"arguments-9"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of secrets")))),(0,l.kt)("h5",{id:"result-9"},"Result"),(0,l.kt)("p",null,"secret: ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<string | null>")),(0,l.kt)("h4",{id:"example-12"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const secret = await eventStoreAdapter.getSecret(selector)\nif (secret == null) {\n  throw new Error('SecretNotFoundException')\n}\n")),(0,l.kt)("h3",{id:"setsecret"},"setSecret"),(0,l.kt)("p",null,"Creates or updates a secret."),(0,l.kt)("h5",{id:"arguments-10"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of secrets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"A new encrypted secret value in the specified secret.")))),(0,l.kt)("h5",{id:"result-10"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-13"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.setSecret(selector, secret)\n")),(0,l.kt)("h3",{id:"deletesecret"},"deleteSecret"),(0,l.kt)("p",null,"Deletes a secret."),(0,l.kt)("h5",{id:"arguments-11"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of secrets.")))),(0,l.kt)("h5",{id:"result-11"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-14"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.deleteSecret(selector)\n")),(0,l.kt)("h3",{id:"incrementalimport"},"incrementalImport"),(0,l.kt)("p",null,"Incrementally imports events."),(0,l.kt)("h5",{id:"arguments-12"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("inlineCode",{parentName:"td"},"{ aggregateId: string, type: string, timestamp: number, payload: any }"),".")))),(0,l.kt)("h5",{id:"result-12"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-15"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.incrementalImport(events)\n")),(0,l.kt)("h3",{id:"beginincrementalimport"},"beginIncrementalImport"),(0,l.kt)("p",null,"Starts to build a batch of events to import."),(0,l.kt)("h5",{id:"arguments-13"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-13"},"Result"),(0,l.kt)("p",null,"importId: ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<string>")),(0,l.kt)("h3",{id:"pushincrementalimport"},"pushIncrementalImport"),(0,l.kt)("p",null,"Adds events to an incremental import batch."),(0,l.kt)("h5",{id:"arguments-14"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("inlineCode",{parentName:"td"},"{ aggregateId: string, type: string, timestamp: number, payload: any }"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"importId"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key of an import batch.")))),(0,l.kt)("h5",{id:"result-14"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h3",{id:"commitincrementalimport"},"commitIncrementalImport"),(0,l.kt)("p",null,"Commits an incremental import batch to the event store."),(0,l.kt)("h5",{id:"arguments-15"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"importId"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key of an import batch.")))),(0,l.kt)("h5",{id:"result-15"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h3",{id:"rollbackincrementalimport"},"rollbackIncrementalImport"),(0,l.kt)("p",null,"Drops an incremental import batch."),(0,l.kt)("h5",{id:"arguments-16"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-16"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")))}d.isMDXComponent=!0}}]);