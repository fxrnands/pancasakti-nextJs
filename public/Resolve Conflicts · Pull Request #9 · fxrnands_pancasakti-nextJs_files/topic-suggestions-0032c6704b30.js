"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["topic-suggestions"],{34892:(e,t,n)=>{n.d(t,{DF:()=>d,Fr:()=>p,a_:()=>u});var r=n(67525);function o(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let a=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function s(e,t,n=!1){let r=t.headers.get("content-type")||"";if(!n&&!r.startsWith("text/html"))throw new a(`expected response with text/html, but was ${r}`,t);if(n&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new a(`expected response with text/html or application/json, but was ${r}`,t);let o=t.headers.get("x-html-safe");if(o){if(!e.includes(o))throw new a("response X-HTML-Safe nonce did not match",t)}else throw new a("missing X-HTML-Safe nonce",t)}var i=n(22490),c=n(7180);let l=i.Z.createPolicy("server-x-safe-html",{createHTML:(e,t)=>c.O.apply({policy:()=>(s(o(document),t),e),fallback:e})});async function u(e,t,n){let o=new Request(t,n);o.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(o);if(a.status<200||a.status>=300)throw Error(`HTTP ${a.status}${a.statusText||""}`);let s=l.createHTML(await a.text(),a);return(0,r.r)(e,s)}function d(e,t,n=1e3,r=[200]){return async function n(o){let a=new Request(e,t);a.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(a);if(202===s.status)return await new Promise(e=>setTimeout(e,o)),n(1.5*o);if(r.includes(s.status))return s;if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);throw Error(`Unexpected ${s.status} response status from poll endpoint`)}(n)}async function p(e,t,n){let{wait:r=500,acceptedStatusCodes:o=[200],max:a=3,attempt:s=0}=n||{},i=async()=>new Promise((n,i)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(r);if(o.includes(i.status)||s+1===a)return n(i);n("retry")}catch(e){i(e)}},r*s)}),c=await i();return"retry"!==c?c:p(e,t,{wait:r,acceptedStatusCodes:o,max:a,attempt:s+1})}},67525:(e,t,n)=>{n.d(t,{r:()=>a});var r=n(22490);let o=r.Z.createPolicy("parse-html-no-op",{createHTML:e=>e});function a(e,t){let n=e.createElement("template");return n.innerHTML=o.createHTML(t),e.importNode(n.content,!0)}},29352:(e,t,n)=>{var r=n(34892),o=n(59753),a=n(65935);function s(e){let t=e.querySelector(".js-topic-suggestions-box"),n=t.querySelector(".js-topic-suggestion");n||t.remove()}function i(e){let t=e.closest(".js-topic-save-notice-container"),n=t.querySelector(".js-repo-topics-save-notice");n.classList.remove("d-none"),n.classList.add("d-inline-block","anim-fade-in"),setTimeout(()=>{n.classList.remove("d-inline-block"),n.classList.add("d-none")},1900)}async function c(e){let t=e.querySelector(".js-topic-suggestions-container");if(!t)return;let n=t.getAttribute("data-url");if(!n)throw Error("could not get url");let o=await (0,r.a_)(document,n);t.textContent="",t.appendChild(o)}(0,o.on)("click",".js-accept-topic-button",function(e){let t=e.currentTarget,n=t.closest(".js-topic-form-area"),r=t.closest(".js-topic-suggestion"),o=n.querySelector(".js-template"),a=n.querySelector(".js-tag-input-selected-tags"),i=o.cloneNode(!0),c=t.getAttribute("data-topic-name")||"";i.querySelector("input").value=c,i.querySelector(".js-placeholder-tag-name").replaceWith(c),i.classList.remove("d-none","js-template"),a.appendChild(i),r.remove(),s(n)}),(0,a.AC)(".js-accept-topic-form",async function(e,t){await t.html();let n=e.closest(".js-topic-form-area"),r=e.closest(".js-topic-suggestion"),o=n.querySelector(".js-template"),a=n.querySelector(".js-tag-input-selected-tags"),l=o.cloneNode(!0),u=r.querySelector('input[name="input[name]"]').value;l.querySelector("input").value=u,l.querySelector(".js-placeholder-tag-name").replaceWith(u),l.classList.remove("d-none","js-template"),a.appendChild(l),r.remove(),c(n),s(n),i(e)}),(0,o.on)("click",".js-decline-topic-button",function(e){let t=e.currentTarget,n=t.closest(".js-topic-form-area"),r=t.closest(".js-topic-suggestion");setTimeout(()=>{r.remove(),s(n)},0)}),(0,a.AC)(".js-decline-topic-form",async function(e,t){await t.html(),i(e);let n=e.closest(".js-topic-form-area"),r=e.closest(".js-topic-suggestion");r.remove(),c(n),s(n)})},89359:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function a(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function s(){return`${window.location.protocol}//${window.location.host}${o()+a()}`}n.d(t,{S:()=>s})},24601:(e,t,n)=>{n.d(t,{aJ:()=>b,cI:()=>v,eK:()=>h});var r=n(82918),o=n(83314),a=n(28382),s=n(89359),i=n(68202),c=n(53729),l=n(86283);let u=!1,d=0,p=Date.now(),m=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function f(e){return!!("AbortError"===e.name||"TypeError"===e.name&&m.has(e.message)||e.name.startsWith("ApiError")&&m.has(e.message))}function h(e,t={}){f(e)||y(g(w(e),t))}async function y(e){if(!_())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(S(e.error.stacktrace)){u=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:v(e)}}function g(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,s.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-p),user:b()||void 0,bundler:c.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function v(e){return(0,a.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let T=/(chrome|moz|safari)-extension:\/\//;function S(e){return e.some(e=>T.test(e.filename)||T.test(e.function))}function b(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let j=!1;function _(){return!j&&!u&&d<10&&(0,o.Gb)()}if(l.iG?.addEventListener("pageshow",()=>j=!1),l.iG?.addEventListener("pagehide",()=>j=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{h(e.data.error)})}},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,jX:()=>o.jX,n4:()=>o.n4,zu:()=>o.zu});var r=n(35647),o=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>s,n4:()=>r,zu:()=>a});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,a="undefined"==typeof history?void 0:history,s="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>a,W6:()=>o,cF:()=>s});var r=n(73614);let o=void 0===r.n4,a=!o;function s(){return!!o||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},7180:(e,t,n)=>{n.d(t,{O:()=>i,d:()=>TrustedTypesPolicyError});var r=n(46426),o=n(71643),a=n(24601);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function s({policy:e,fallback:t,fallbackOnError:n=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return t;return e()}catch(e){if(e instanceof TrustedTypesPolicyError||((0,a.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR"}),!n))throw e}return t}let i={apply:s}},22490:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let a={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},s={createPolicy:(e,t)=>({name:e,...a,...t})},i=globalThis.trustedTypes??s,c=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||c||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),c=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_index_js","ui_packages_soft-nav_soft-nav_ts"],()=>t(29352));var n=e.O()}]);
//# sourceMappingURL=topic-suggestions-ef9321c62d1c.js.map