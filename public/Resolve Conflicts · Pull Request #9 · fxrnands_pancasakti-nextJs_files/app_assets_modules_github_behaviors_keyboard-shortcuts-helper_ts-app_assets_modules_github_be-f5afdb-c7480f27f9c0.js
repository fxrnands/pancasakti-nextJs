"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-f5afdb"],{94313:(e,t,n)=>{n.d(t,{Ty:()=>s,YE:()=>o,Zf:()=>l});var r=n(11793);let s=()=>{let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},o=e=>/Enter|Arrow|Escape|Meta|Control|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),l=e=>{let t=(0,r.EL)(e);return!!s()||o(t)}},48804:(e,t,n)=>{n.d(t,{L$:()=>u,SE:()=>j,nj:()=>d});var r,s=n(56959),o=n(59753),l=n(40987),i=n(36071),a=n(65935),c=n(58700);function u(e){if(e.querySelector(".js-task-list-field")){let t=e.querySelectorAll("task-lists");for(let e of t)if(e instanceof l.Z){e.disabled=!1;let t=e.querySelectorAll("button");for(let e of t)e.disabled=!1}}}function d(e){for(let t of e.querySelectorAll("task-lists"))if(t instanceof l.Z){t.disabled=!0;let e=t.querySelectorAll("button");for(let t of e)t.disabled=!0}}function m(e,t,n){let r=e.querySelector(".js-comment-update");d(e),C(e);let s=r.elements.namedItem("task_list_track");s instanceof Element&&s.remove();let o=r.elements.namedItem("task_list_operation");o instanceof Element&&o.remove();let l=document.createElement("input");l.setAttribute("type","hidden"),l.setAttribute("name","task_list_track"),l.setAttribute("value",t),r.appendChild(l);let i=document.createElement("input");if(i.setAttribute("type","hidden"),i.setAttribute("name","task_list_operation"),i.setAttribute("value",JSON.stringify(n)),r.appendChild(i),!r.elements.namedItem("task_list_key")){let e=r.querySelector(".js-task-list-field"),t=e.getAttribute("name"),n=t.split("[")[0],s=document.createElement("input");s.setAttribute("type","hidden"),s.setAttribute("name","task_list_key"),s.setAttribute("value",n),r.appendChild(s)}e.classList.remove("is-comment-stale"),(0,c.Bt)(r)}(0,i.N7)(".js-task-list-container .js-task-list-field",function(e){let t=e.closest(".js-task-list-container");u(t),C(t)}),(0,i.N7)(".js-convert-tasklist-to-block-enabled .contains-task-list",function(e){let t=R(e);if(!t)return;let n=Array.from(t.children).some(e=>e.classList.contains("task-list-item-convert-container"));if(n)return;let r=e.ownerDocument.querySelector(".js-convert-to-block-template"),s=r?.content.cloneNode(!0);s&&t.appendChild(s)}),(0,o.on)("task-lists-move","task-lists",function(e){let{src:t,dst:n}=e.detail,r=e.currentTarget.closest(".js-task-list-container");m(r,"reordered",{operation:"move",src:t,dst:n})}),(0,o.on)("task-lists-check","task-lists",function(e){let{position:t,checked:n}=e.detail,r=e.currentTarget.closest(".js-task-list-container");m(r,`checked:${n?1:0}`,{operation:"check",position:t,checked:n})}),(0,o.on)("click",".js-convert-to-block-button",function(e){let t=R(e.target);if(!t)return;let n=t.closest("task-lists");if(!n)throw Error("parent not found");let r=j(t),s=e.currentTarget.closest(".js-task-list-container");m(s,"converted",{operation:"convert_to_block",position:r})}),(0,a.AC)(".js-task-list-container .js-comment-update",async function(e,t){let n;let r=e.closest(".js-task-list-container"),s=e.elements.namedItem("task_list_track");s instanceof Element&&s.remove();let o=e.elements.namedItem("task_list_operation");o instanceof Element&&o.remove();try{n=await t.json()}catch(t){let e;try{e=JSON.parse(t.response.text)}catch(e){}if(e&&e.stale){let e=r.querySelector(".js-task-list-field");e.classList.add("session-resumable-canceled"),e.classList.remove("js-session-resumable")}else 422===t.response.status||window.location.reload()}n&&(o&&n.json.source&&(r.querySelector(".js-task-list-field").value=n.json.source),u(r),requestAnimationFrame(()=>C(r)))});let f=!1,p=!1,h=null;function b(e){let t="insertLineBreak"===e.inputType;f=!!t}function y(e){if(!f){let t="insertLineBreak"===e.inputType;if(!t)return}let t=e.target;w(t),f=!1}function w(e){let t=A(e.value,[e.selectionStart,e.selectionEnd]);void 0!==t&&g(e,t)}function g(e,t){if(null===h||!0===h){e.contentEditable="true";try{let n;f=!1,t.commandId===r.insertText?(n=t.autocompletePrefix,null!==t.writeSelection[0]&&null!==t.writeSelection[1]&&(e.selectionStart=t.writeSelection[0],e.selectionEnd=t.writeSelection[1])):e.selectionStart=t.selection[0],h=document.execCommand(t.commandId,!1,n)}catch(e){h=!1}e.contentEditable="false"}if(!h){try{document.execCommand("ms-beginUndoUnit")}catch(e){}e.value=t.text;try{document.execCommand("ms-endUndoUnit")}catch(e){}e.dispatchEvent(new CustomEvent("input",{bubbles:!0,cancelable:!0}))}null!=t.selection[0]&&null!=t.selection[1]&&(e.selectionStart=t.selection[0],e.selectionEnd=t.selection[1])}function k(e){if(!p&&"Enter"===e.key&&e.shiftKey&&!e.metaKey){let t=e.target,n=T(t.value,[t.selectionStart,t.selectionEnd]);void 0!==n&&(g(t,n),e.preventDefault(),(0,o.f)(t,"change"))}}function E(){p=!0}function S(){p=!1}function v(e){if(p)return;if("Escape"===e.key){$(e);return}if("Tab"!==e.key)return;let t=e.target,n=_(t.value,[t.selectionStart,t.selectionEnd],e.shiftKey);void 0!==n&&(e.preventDefault(),g(t,n))}(0,i.N7)(".js-task-list-field",{subscribe:e=>(0,s.qC)((0,s.RB)(e,"keydown",v),(0,s.RB)(e,"keydown",k),(0,s.RB)(e,"beforeinput",b),(0,s.RB)(e,"input",y),(0,s.RB)(e,"compositionstart",E),(0,s.RB)(e,"compositionend",S))}),function(e){e.insertText="insertText",e.delete="delete"}(r||(r={}));let x=/^(\s*)?/;function T(e,t){let n=t[0];if(!n||!e)return;let s=e.substring(0,n).split("\n"),o=s[s.length-1],l=o?.match(x);if(!l)return;let i=l[1]||"",a=`
${i}`;return{text:e.substring(0,n)+a+e.substring(n),autocompletePrefix:a,selection:[n+a.length,n+a.length],commandId:r.insertText,writeSelection:[null,null]}}let L=/^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;function q(e,t){let n=e.split("\n");return(n=n.map(e=>{if(e.replace(/^\s+/,"").startsWith(`${t}.`)){let n=e.replace(`${t}`,`${t+1}`);return t+=1,n}return e})).join("\n")}function A(e,t){let n=t[0];if(!n||!e)return;let s=e.substring(0,n).split("\n"),o=s[s.length-2],l=o?.match(L);if(!l)return;let i=l[0],a=l[1],c=l[2],u=parseInt(l[3],10),d=Boolean(l[4]),m=!isNaN(u),f=m?`${u+1}.`:c,p=`${f} ${d?"[ ] ":""}`,h=e.indexOf("\n",n);h<0&&(h=e.length);let b=e.substring(n,h);b.startsWith(p)&&(p="");let y=o.replace(i,"").trim().length>0||b.trim().length>0;if(y){let t=`${a}${p}`,s=e.substring(n),o=t.length,l=[null,null],i=e.substring(0,n)+t+s;return m&&!e.substring(n).match(/^\s*$/g)&&(t+=s=q(e.substring(n),u+1),l=[n,n+t.length],i=e.substring(0,n)+t),{text:i,autocompletePrefix:t,selection:[n+o,n+o],commandId:r.insertText,writeSelection:l}}{let t=n-`
${i}`.length;return{autocompletePrefix:"",text:e.substring(0,t)+e.substring(n),selection:[t,t],commandId:r.delete,writeSelection:[null,null]}}}function _(e,t,n){let s=t[0]||0,o=t[1]||s;if(null===t[0]||s===o)return;let l=e.substring(0,s).lastIndexOf("\n")+1,i=e.indexOf("\n",o-1),a=i>0?i:e.length-1,c=e.substring(l,a).split("\n"),u=!1,d=0,m=0,f=[];for(let e of c){let t=e.match(/^\s*/);if(t){let r=t[0],s=e.substring(r.length);if(n){let e=r.length;r=r.slice(0,-2),d=u?d:r.length-e,u=!0,m+=r.length-e}else r+="  ",d=2,m+=2;f.push(r+s)}}let p=f.join("\n"),h=e.substring(0,l)+p+e.substring(a),b=[Math.max(l,s+d),o+m];return{text:h,selection:b,autocompletePrefix:p,commandId:r.insertText,writeSelection:[l,a]}}function j(e){let t=e.closest("task-lists");if(!t)throw Error("parent not found");let n=Array.from(t.querySelectorAll("ol, ul")).filter(e=>!e.closest("tracking-block"));return n.indexOf(e)}function $(e){let t=e.target;"backward"===t.selectionDirection?t.selectionEnd=t.selectionStart:t.selectionStart=t.selectionEnd}function C(e){if(0===document.querySelectorAll("tracked-issues-progress").length)return;let t=e.closest(".js-timeline-item");if(t)return;let n=e.querySelectorAll(".js-comment-body [type=checkbox]"),r=n.length,s=Array.from(n).filter(e=>e.checked).length,o=document.querySelectorAll("tracked-issues-progress[data-type=checklist]");for(let e of o)e.setAttribute("data-completed",String(s)),e.setAttribute("data-total",String(r))}function R(e){let t=e.closest(".contains-task-list"),n=t;for(;(n=n.parentElement.closest(".contains-task-list"))!==t&&null!==n;)t=n;return t}},19146:(e,t,n)=>{n.d(t,{W:()=>s});var r=n(59753);async function s(e){let t=document.querySelector("#site-details-dialog"),n=t.content.cloneNode(!0),s=n.querySelector("details"),o=s.querySelector("details-dialog"),l=s.querySelector(".js-details-dialog-spinner");e.detailsClass&&s.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&o.classList.add(...e.dialogClass.split(" ")),e.label?o.setAttribute("aria-label",e.label):e.labelledBy&&o.setAttribute("aria-labelledby",e.labelledBy),document.body.append(n);try{let t=await e.content;l.remove(),o.prepend(t)}catch(n){l.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),o.prepend(t)}return s.addEventListener("toggle",()=>{s.hasAttribute("open")||((0,r.f)(o,"dialog:remove"),s.remove())}),o}},34892:(e,t,n)=>{n.d(t,{DF:()=>d,Fr:()=>m,a_:()=>u});var r=n(67525);function s(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let o=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function l(e,t,n=!1){let r=t.headers.get("content-type")||"";if(!n&&!r.startsWith("text/html"))throw new o(`expected response with text/html, but was ${r}`,t);if(n&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new o(`expected response with text/html or application/json, but was ${r}`,t);let s=t.headers.get("x-html-safe");if(s){if(!e.includes(s))throw new o("response X-HTML-Safe nonce did not match",t)}else throw new o("missing X-HTML-Safe nonce",t)}var i=n(22490),a=n(7180);let c=i.Z.createPolicy("server-x-safe-html",{createHTML:(e,t)=>a.O.apply({policy:()=>(l(s(document),t),e),fallback:e})});async function u(e,t,n){let s=new Request(t,n);s.headers.append("X-Requested-With","XMLHttpRequest");let o=await self.fetch(s);if(o.status<200||o.status>=300)throw Error(`HTTP ${o.status}${o.statusText||""}`);let l=c.createHTML(await o.text(),o);return(0,r.r)(e,l)}function d(e,t,n=1e3,r=[200]){return async function n(s){let o=new Request(e,t);o.headers.append("X-Requested-With","XMLHttpRequest");let l=await self.fetch(o);if(202===l.status)return await new Promise(e=>setTimeout(e,s)),n(1.5*s);if(r.includes(l.status))return l;if(l.status<200||l.status>=300)throw Error(`HTTP ${l.status}${l.statusText||""}`);throw Error(`Unexpected ${l.status} response status from poll endpoint`)}(n)}async function m(e,t,n){let{wait:r=500,acceptedStatusCodes:s=[200],max:o=3,attempt:l=0}=n||{},i=async()=>new Promise((n,i)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(r);if(s.includes(i.status)||l+1===o)return n(i);n("retry")}catch(e){i(e)}},r*l)}),a=await i();return"retry"!==a?a:m(e,t,{wait:r,acceptedStatusCodes:s,max:o,attempt:l+1})}},254:(e,t,n)=>{n.d(t,{ZG:()=>i,q6:()=>c,w4:()=>a});var r=n(8439);let s=!1,o=new r.Z;function l(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of o.matches(t))e.data.call(null,t)}function i(e,t){s||(s=!0,document.addEventListener("focus",l,!0)),o.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function a(e,t,n){function r(t){let s=t.currentTarget;s&&(s.removeEventListener(e,n),s.removeEventListener("blur",r))}i(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",r)})}function c(e,t){function n(e){let{currentTarget:r}=e;r&&(r.removeEventListener("input",t),r.removeEventListener("blur",n))}i(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},40458:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(19146),s=n(34892);function o(e){return new Promise(t=>{e.addEventListener("dialog:remove",t,{once:!0})})}function l(e){let t=document.querySelector(".sso-modal");t&&(t.classList.remove("success","error"),e?t.classList.add("success"):t.classList.add("error"))}function i(e){let t=document.querySelector("meta[name=sso-expires-around]");t&&t.setAttribute("content",e)}async function a(){let e=document.querySelector("link[rel=sso-modal]"),t=await (0,r.W)({content:(0,s.a_)(document,e.href),dialogClass:"sso-modal"}),n=null,a=window.external;if(a.ssoComplete=function(e){e.error?l(n=!1):(l(n=!0),i(e.expiresAround),window.focus()),a.ssoComplete=null},await o(t),!n)throw Error("sso prompt canceled")}function c(e){if(!(e instanceof HTMLMetaElement))return!0;let t=parseInt(e.content),n=new Date().getTime()/1e3;return n>t}async function u(){let e=document.querySelector("link[rel=sso-session]"),t=document.querySelector("meta[name=sso-expires-around]");if(!(e instanceof HTMLLinkElement)||!c(t))return!0;let n=e.href,r=await fetch(n,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}}),s=await r.json();return s}(0,n(36071).N7)(".js-sso-modal-complete",function(e){if(window.opener&&window.opener.external.ssoComplete){let t=e.getAttribute("data-error"),n=e.getAttribute("data-expires-around");window.opener.external.ssoComplete({error:t,expiresAround:n}),window.close()}else{let t=e.getAttribute("data-fallback-url");t&&(window.location.href=t)}});let d=null;function m(){d=null}async function f(){let e=await u();e||(d||(d=a().then(m).catch(m)),await d)}},89359:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function s(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function o(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function l(){return`${window.location.protocol}//${window.location.host}${s()+o()}`}n.d(t,{S:()=>l})},24601:(e,t,n)=>{n.d(t,{aJ:()=>S,cI:()=>g,eK:()=>h});var r=n(82918),s=n(83314),o=n(28382),l=n(89359),i=n(68202),a=n(53729),c=n(86283);let u=!1,d=0,m=Date.now(),f=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function p(e){return!!("AbortError"===e.name||"TypeError"===e.name&&f.has(e.message)||e.name.startsWith("ApiError")&&f.has(e.message))}function h(e,t={}){p(e)||b(w(y(e),t))}async function b(e){if(!x())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(E(e.error.stacktrace)){u=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function y(e){return{type:e.name,value:e.message,stacktrace:g(e)}}function w(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,l.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:S()||void 0,bundler:a.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function g(e){return(0,o.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let k=/(chrome|moz|safari)-extension:\/\//;function E(e){return e.some(e=>k.test(e.filename)||k.test(e.function))}function S(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let v=!1;function x(){return!v&&!u&&d<10&&(0,s.Gb)()}if(c.iG?.addEventListener("pageshow",()=>v=!1),c.iG?.addEventListener("pagehide",()=>v=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{h(e.data.error)})}},56959:(e,t,n)=>{n.d(t,{RB:()=>r,qC:()=>s,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function r(e,t,n,r={capture:!1}){return e.addEventListener(t,n,r),new Subscription(()=>{e.removeEventListener(t,n,r)})}function s(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}},7180:(e,t,n)=>{n.d(t,{O:()=>i,d:()=>TrustedTypesPolicyError});var r=n(46426),s=n(71643),o=n(24601);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function l({policy:e,fallback:t,fallbackOnError:n=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return t;return e()}catch(e){if(e instanceof TrustedTypesPolicyError||((0,o.eK)(e),(0,s.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR"}),!n))throw e}return t}let i={apply:l}}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-f5afdb-36c04fabcbac.js.map