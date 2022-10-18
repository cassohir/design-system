var w=Object.defineProperty;var f=(e,t)=>w(e,"name",{value:t,configurable:!0});import{a as g,_ as k,$ as T}from"./index.module.30ffc007.js";import{r as o}from"./index.d90d5cbd.js";import{r as I}from"./index.578d2dbc.js";function U(e,t=[]){let n=[];function r(s,d){const i=o.exports.createContext(d),u=n.length;n=[...n,d];function a(l){const{scope:p,children:x,...b}=l,C=(p==null?void 0:p[e][u])||i,m=o.exports.useMemo(()=>b,Object.values(b));return o.exports.createElement(C.Provider,{value:m},x)}f(a,"Provider");function $(l,p){const x=(p==null?void 0:p[e][u])||i,b=o.exports.useContext(x);if(b)return b;if(d!==void 0)return d;throw new Error(`\`${l}\` must be used within \`${s}\``)}return f($,"useContext"),a.displayName=s+"Provider",[a,$]}f(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=f(()=>{const s=n.map(d=>o.exports.createContext(d));return f(function(i){const u=(i==null?void 0:i[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])},"useScope")},"createScope");return c.scopeName=e,[r,z(c,...t)]}f(U,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function z(...e){const t=e[0];if(e.length===1)return t;const n=f(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return f(function(s){const d=r.reduce((i,{useScope:u,scopeName:a})=>{const l=u(s)[`__scope${a}`];return{...i,...l}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}f(z,"$c512c27ab02ef895$var$composeContextScopes");function P(e,t,{checkForDefaultPrevented:n=!0}={}){return f(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}f(P,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function y(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}f(y,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function D({prop:e,defaultProp:t,onChange:n=f(()=>{},"onChange")}){const[r,c]=B({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:r,i=y(n),u=o.exports.useCallback(a=>{if(s){const l=typeof a=="function"?a(e):a;l!==e&&i(l)}else c(a)},[s,e,c,i]);return[d,u]}f(D,"$71cd76cc60e0454e$export$6f32135080cb4c3");function B({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=y(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}f(B,"$71cd76cc60e0454e$var$useUncontrolledState");function L(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}f(L,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const S=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function q(e){const[t,n]=o.exports.useState(void 0);return S(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let d,i;if("borderBoxSize"in s){const u=s.borderBoxSize,a=Array.isArray(u)?u[0]:u;d=a.inlineSize,i=a.blockSize}else d=e.offsetWidth,i=e.offsetHeight;n({width:d,height:i})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}f(q,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function K(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}f(K,"$fe963b355347cc68$export$3e6543de14f8614f");const A=f(e=>{const{present:t,children:n}=e,r=j(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=g(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");A.displayName="Presence";function j(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),d=e?"mounted":"unmounted",[i,u]=K(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const a=N(r.current);s.current=i==="mounted"?a:"none"},[i]),S(()=>{const a=r.current,$=c.current;if($!==e){const p=s.current,x=N(a);e?u("MOUNT"):x==="none"||(a==null?void 0:a.display)==="none"?u("UNMOUNT"):u($&&p!==x?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,u]),S(()=>{if(t){const a=f(l=>{const x=N(r.current).includes(l.animationName);l.target===t&&x&&I.exports.flushSync(()=>u("ANIMATION_END"))},"handleAnimationEnd"),$=f(l=>{l.target===t&&(s.current=N(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",$),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",$),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:o.exports.useCallback(a=>{a&&(r.current=getComputedStyle(a)),n(a)},[])}}f(j,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}f(N,"$921a889cee6df7e8$var$getAnimationName");const F=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],_=F.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...d}=r,i=s?T:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(i,k({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),M="Checkbox",[W,ne]=U(M),[X,H]=W(M),G=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:c,defaultChecked:s,required:d,disabled:i,value:u="on",onCheckedChange:a,...$}=e,[l,p]=o.exports.useState(null),x=g(t,h=>p(h)),b=o.exports.useRef(!1),C=l?Boolean(l.closest("form")):!0,[m=!1,O]=D({prop:c,defaultProp:s,onChange:a});return o.exports.createElement(X,{scope:n,state:m,disabled:i},o.exports.createElement(_.button,k({type:"button",role:"checkbox","aria-checked":v(m)?"mixed":m,"aria-required":d,"data-state":R(m),"data-disabled":i?"":void 0,disabled:i,value:u},$,{ref:x,onKeyDown:P(e.onKeyDown,h=>{h.key==="Enter"&&h.preventDefault()}),onClick:P(e.onClick,h=>{O(E=>v(E)?!0:!E),C&&(b.current=h.isPropagationStopped(),b.current||h.stopPropagation())})})),C&&o.exports.createElement(Y,{control:l,bubbles:!b.current,name:r,value:u,checked:m,required:d,disabled:i,style:{transform:"translateX(-100%)"}}))}),J="CheckboxIndicator",Q=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=H(J,n);return o.exports.createElement(A,{present:r||v(s.state)||s.state===!0},o.exports.createElement(_.span,k({"data-state":R(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Y=f(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),d=L(n),i=q(t);return o.exports.useEffect(()=>{const u=s.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(d!==n&&l){const p=new Event("click",{bubbles:r});u.indeterminate=v(n),l.call(u,v(n)?!1:n),u.dispatchEvent(p)}},[d,n,r]),o.exports.createElement("input",k({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}f(v,"$e698a72e93240346$var$isIndeterminate");function R(e){return v(e)?"indeterminate":e?"checked":"unchecked"}f(R,"$e698a72e93240346$var$getState");const oe=G,re=Q;export{oe as $,re as a,G as b};
//# sourceMappingURL=index.module.ff16b877.js.map
