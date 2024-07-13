"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[504],{4046:function(t,e,n){n.d(e,{Am:function(){return j},FA:function(){return N},Fy:function(){return b},I9:function(){return F},Im:function(){return D},Ku:function(){return W},T9:function(){return v},Tj:function(){return g},Uj:function(){return c},XA:function(){return y},ZQ:function(){return w},bD:function(){return M},cY:function(){return _},eX:function(){return O},g:function(){return P},hp:function(){return $},jZ:function(){return E},lT:function(){return A},lV:function(){return S},nr:function(){return C},sr:function(){return T},tD:function(){return V},u:function(){return u},yU:function(){return m},zW:function(){return k}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new s;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function I(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const t=w();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){return!I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"===typeof indexedDB}catch(t){return!1}}function O(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class P extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=R,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?x(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new P(r,s,n);return a}}function x(t,e){return t.replace(L,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(U(n)&&U(o)){if(!M(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function F(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function $(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){const n=new B(t,e);return n.subscribe.bind(n)}class B{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=H(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t){return t&&t._delegate?t._delegate:t}},144:function(t,e,n){n.d(e,{C4:function(){return _},EW:function(){return Rt},Gc:function(){return yt},IG:function(){return At},IJ:function(){return Dt},KR:function(){return Lt},Kh:function(){return vt},Pr:function(){return $t},QW:function(){return Vt},R1:function(){return jt},X2:function(){return h},bl:function(){return b},fE:function(){return It},g8:function(){return wt},hZ:function(){return P},i9:function(){return xt},jr:function(){return l},ju:function(){return Tt},o5:function(){return u},u4:function(){return R},uY:function(){return a},ux:function(){return St},yC:function(){return s}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let i,o;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t){return new s(t)}function c(t,e=i){e&&e.active&&e.effects.push(t)}function u(){return i}function l(t){i&&i.cleanups.push(t)}class h{constructor(t,e,n,r){this.fn=t,this.trigger=e,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,_();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(f(e.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),b()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=m,e=o;try{return m=!0,o=this,this._runnings++,d(this),this.fn()}finally{p(this),this._runnings--,o=e,m=t}}stop(){this.active&&(d(this),p(this),this.onStop&&this.onStop(),this.active=!1)}}function f(t){return t.value}function d(t){t._trackId++,t._depsLength=0}function p(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)g(t.deps[e],t);t.deps.length=t._depsLength}}function g(t,e){const n=t.get(e);void 0!==n&&e._trackId!==n&&(t.delete(e),0===t.size&&t.cleanup())}let m=!0,v=0;const y=[];function _(){y.push(m),m=!1}function b(){const t=y.pop();m=void 0===t||t}function w(){v++}function E(){v--;while(!v&&T.length)T.shift()()}function I(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&g(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const T=[];function S(t,e,n){w();for(const r of t.keys()){let n;r._dirtyLevel<e&&(null!=n?n:n=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=e),r._shouldSchedule&&(null!=n?n:n=t.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&T.push(r.scheduler)))}E()}const A=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},C=new WeakMap,k=Symbol(""),O=Symbol("");function R(t,e,n){if(m&&o){let e=C.get(t);e||C.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=A((()=>e.delete(n)))),I(o,r,void 0)}}function P(t,e,n,i,o,s){const a=C.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.cy)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.cy)(t)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(k)),(0,r.CE)(t)&&c.push(a.get(O)));break;case"delete":(0,r.cy)(t)||(c.push(a.get(k)),(0,r.CE)(t)&&c.push(a.get(O)));break;case"set":(0,r.CE)(t)&&c.push(a.get(k));break}w();for(const r of c)r&&S(r,4,void 0);E()}function N(t,e){const n=C.get(t);return n&&n.get(e)}const x=(0,r.pD)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm)),D=M();function M(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=St(this);for(let e=0,i=this.length;e<i;e++)R(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(St)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){_(),w();const n=St(this)[e].apply(this,t);return E(),b(),n}})),t}function U(t){(0,r.Bm)(t)||(t=String(t));const e=St(this);return R(e,"has",t),e.hasOwnProperty(t)}class j{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return o;if("__v_raw"===e)return n===(i?o?pt:dt:o?ft:ht).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const s=(0,r.cy)(t);if(!i){if(s&&(0,r.$3)(D,e))return Reflect.get(D,e,n);if("hasOwnProperty"===e)return U}const a=Reflect.get(t,e,n);return((0,r.Bm)(e)?L.has(e):x(e))?a:(i||R(t,"get",e),o?a:xt(a)?s&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?_t(a):vt(a):a)}}class F extends j{constructor(t=!1){super(!1,t)}set(t,e,n,i){let o=t[e];if(!this._isShallow){const e=Et(o);if(It(n)||Et(n)||(o=St(o),n=St(n)),!(0,r.cy)(t)&&xt(o)&&!xt(n))return!e&&(o.value=n,!0)}const s=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,i);return t===St(i)&&(s?(0,r.$H)(n,o)&&P(t,"set",e,n,o):P(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&P(t,"delete",e,void 0,i),o}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&L.has(e)||R(t,"has",e),n}ownKeys(t){return R(t,"iterate",(0,r.cy)(t)?"length":k),Reflect.ownKeys(t)}}class $ extends j{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const V=new F,B=new $,H=new F(!0),z=t=>t,W=t=>Reflect.getPrototypeOf(t);function K(t,e,n=!1,i=!1){t=t["__v_raw"];const o=St(t),s=St(e);n||((0,r.$H)(e,s)&&R(o,"get",e),R(o,"get",s));const{has:a}=W(o),c=i?z:n?kt:Ct;return a.call(o,e)?c(t.get(e)):a.call(o,s)?c(t.get(s)):void(t!==o&&t.get(e))}function G(t,e=!1){const n=this["__v_raw"],i=St(n),o=St(t);return e||((0,r.$H)(t,o)&&R(i,"has",t),R(i,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)}function q(t,e=!1){return t=t["__v_raw"],!e&&R(St(t),"iterate",k),Reflect.get(t,"size",t)}function X(t){t=St(t);const e=St(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),P(e,"add",t,t)),this}function Y(t,e){e=St(e);const n=St(this),{has:i,get:o}=W(n);let s=i.call(n,t);s||(t=St(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?(0,r.$H)(e,a)&&P(n,"set",t,e,a):P(n,"add",t,e),this}function J(t){const e=St(this),{has:n,get:r}=W(e);let i=n.call(e,t);i||(t=St(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&P(e,"delete",t,void 0,o),s}function Q(){const t=St(this),e=0!==t.size,n=void 0,r=t.clear();return e&&P(t,"clear",void 0,void 0,n),r}function Z(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=St(o),a=e?z:t?kt:Ct;return!t&&R(s,"iterate",k),o.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function tt(t,e,n){return function(...i){const o=this["__v_raw"],s=St(o),a=(0,r.CE)(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?z:e?kt:Ct;return!e&&R(s,"iterate",u?O:k),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function nt(){const t={get(t){return K(this,t)},get size(){return q(this)},has:G,add:X,set:Y,delete:J,clear:Q,forEach:Z(!1,!1)},e={get(t){return K(this,t,!1,!0)},get size(){return q(this)},has:G,add:X,set:Y,delete:J,clear:Q,forEach:Z(!1,!0)},n={get(t){return K(this,t,!0)},get size(){return q(this,!0)},has(t){return G.call(this,t,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Z(!0,!1)},r={get(t){return K(this,t,!0,!0)},get size(){return q(this,!0)},has(t){return G.call(this,t,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Z(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=tt(i,!1,!1),n[i]=tt(i,!0,!1),e[i]=tt(i,!1,!0),r[i]=tt(i,!0,!0)})),[t,n,e,r]}const[rt,it,ot,st]=nt();function at(t,e){const n=e?t?st:ot:t?it:rt;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,o)}const ct={get:at(!1,!1)},ut={get:at(!1,!0)},lt={get:at(!0,!1)};const ht=new WeakMap,ft=new WeakMap,dt=new WeakMap,pt=new WeakMap;function gt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:gt((0,r.Zf)(t))}function vt(t){return Et(t)?t:bt(t,!1,V,ct,ht)}function yt(t){return bt(t,!1,H,ut,ft)}function _t(t){return bt(t,!0,B,lt,dt)}function bt(t,e,n,i,o){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=mt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function wt(t){return Et(t)?wt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function It(t){return!(!t||!t["__v_isShallow"])}function Tt(t){return!!t&&!!t["__v_raw"]}function St(t){const e=t&&t["__v_raw"];return e?St(e):t}function At(t){return Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const Ct=t=>(0,r.Gv)(t)?vt(t):t,kt=t=>(0,r.Gv)(t)?_t(t):t;class Ot{constructor(t,e,n,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new h((()=>t(this._value)),(()=>Nt(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=St(this);return t._cacheable&&!t.effect.dirty||!(0,r.$H)(t._value,t._value=t.effect.run())||Nt(t,4),Pt(t),t.effect._dirtyLevel>=2&&Nt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Rt(t,e,n=!1){let i,o;const s=(0,r.Tn)(t);s?(i=t,o=r.tE):(i=t.get,o=t.set);const a=new Ot(i,o,s||!o,n);return a}function Pt(t){var e;m&&o&&(t=St(t),I(o,null!=(e=t.dep)?e:t.dep=A((()=>t.dep=void 0),t instanceof Ot?t:void 0),void 0))}function Nt(t,e=4,n,r){t=St(t);const i=t.dep;i&&S(i,e,void 0)}function xt(t){return!(!t||!0!==t.__v_isRef)}function Lt(t){return Mt(t,!1)}function Dt(t){return Mt(t,!0)}function Mt(t,e){return xt(t)?t:new Ut(t,e)}class Ut{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:St(t),this._value=e?t:Ct(t)}get value(){return Pt(this),this._value}set value(t){const e=this.__v_isShallow||It(t)||Et(t);if(t=e?t:St(t),(0,r.$H)(t,this._rawValue)){const n=this._rawValue;this._rawValue=t,this._value=e?t:Ct(t),Nt(this,4,t,n)}}}function jt(t){return xt(t)?t.value:t}const Ft={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return xt(i)&&!xt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function $t(t){return wt(t)?t:new Proxy(t,Ft)}function Vt(t){const e=(0,r.cy)(t)?new Array(t.length):{};for(const n in t)e[n]=Ht(t,n);return e}class Bt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return N(St(this._object),this._key)}}function Ht(t,e,n){const r=t[e];return xt(r)?r:new Bt(t,e,n)}},6768:function(t,e,n){n.d(e,{$u:function(){return nt},CE:function(){return an},Df:function(){return Ge},EW:function(){return Gn},FK:function(){return Xe},Gt:function(){return jt},Gy:function(){return Me},K9:function(){return ue},Lk:function(){return dn},MZ:function(){return Ke},OW:function(){return He},PS:function(){return $t},Q3:function(){return _n},QP:function(){return je},Qi:function(){return D},WQ:function(){return Ft},bF:function(){return pn},bo:function(){return ut},dY:function(){return y},eW:function(){return yn},g2:function(){return W},h:function(){return qn},jt:function(){return M},k6:function(){return U},nI:function(){return On},pI:function(){return ht},pM:function(){return ft},pR:function(){return Ve},qL:function(){return s},sV:function(){return tt},uX:function(){return en},wB:function(){return we}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),i=n(4232);function o(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function s(t,e,n,r){if((0,i.Tn)(t)){const s=o(t,e,n,r);return s&&(0,i.yL)(s)&&s.catch((t=>{a(t,e,n)})),s}if((0,i.cy)(t)){const i=[];for(let o=0;o<t.length;o++)i.push(s(t[o],e,n,r));return i}}function a(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,a))return;i=i.parent}const c=e.appContext.config.errorHandler;if(c)return(0,r.C4)(),o(c,null,10,[t,s,a]),void(0,r.bl)()}c(t,n,s,i)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(t){const e=v||m;return t?e.then(this?t.bind(this):t):e}function _(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=h[r],o=A(i);o<t||o===t&&i.pre?e=r+1:n=r}return e}function b(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(_(t.id),0,t),w())}function w(){u||l||(l=!0,v=m.then(k))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function I(t){(0,i.cy)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),w()}function T(t,e,n=(u?f+1:0)){for(0;n<h.length;n++){const e=h[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,h.splice(n,1),n--,e()}}}function S(t){if(d.length){const t=[...new Set(d)].sort(((t,e)=>A(t)-A(e)));if(d.length=0,p)return void p.push(...t);for(p=t,g=0;g<p.length;g++){const t=p[g];0,!1!==t.active&&t()}p=null,g=0}}const A=t=>null==t.id?1/0:t.id,C=(t,e)=>{const n=A(t)-A(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k(t){l=!1,u=!0,h.sort(C);i.tE;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&o(t,null,14)}}finally{f=0,h.length=0,S(t),u=!1,v=null,(h.length||d.length)&&k(t)}}function O(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let o=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:s}=r[t]||i.MZ;s&&(o=n.map((t=>(0,i.Kg)(t)?t.trim():t))),e&&(o=n.map(i.bB))}let u;let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&s(l,t,6,o);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,s(h,t,6,o)}}function R(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=R(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((t=>a[t]=null)):(0,i.X$)(a,s),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function P(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}let N=null,x=null;function L(t){const e=N;return N=t,x=t&&t.type.__scopeId||null,e}function D(t){x=t}function M(){x=null}function U(t,e=N,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&on(-1);const i=L(e);let o;try{o=t(...n)}finally{L(i),r._d&&on(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function j(t){const{type:e,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:v}=t,y=L(t);let _,b;try{if(4&n.shapeFlag){const t=o||r,e=t;_=bn(h.call(e,t,f,d,g,p,m)),b=u}else{const t=e;0,_=bn(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),b=e.props?u:F(u)}}catch(E){Ze.length=0,a(E,t,1),_=pn(Je)}let w=_;if(b&&!1!==v){const t=Object.keys(b),{shapeFlag:e}=w;t.length&&7&e&&(s&&t.some(i.CP)&&(b=$(b,s)),w=vn(w,b,!1,!0))}return n.dirs&&(w=vn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),_=w,L(y),_}const F=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},$=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function V(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||B(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?B(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!P(u,n))return!0}}return!1}function B(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!P(n,o))return!0}return!1}function H({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const z="components";function W(t,e){return G(z,t,!0,e)||t}const K=Symbol.for("v-ndc");function G(t,e,n=!0,r=!1){const o=N||kn;if(o){const n=o.type;if(t===z){const t=Wn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const s=q(o[t]||n[t],e)||q(o.appContext[t],e);return!s&&r?n:s}}function q(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}const X=t=>t.__isSuspense;function Y(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):I(t)}function J(t,e,n=kn,i=!1){if(n){const o=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const o=Nn(n),a=s(e,n,t,i);return o(),(0,r.bl)(),a});return i?o.unshift(a):o.push(a),a}}const Q=t=>(e,n=kn)=>{Un&&"sp"!==t||J(t,((...t)=>e(...t)),n)},Z=Q("bm"),tt=Q("m"),et=Q("bu"),nt=Q("u"),rt=Q("bum"),it=Q("um"),ot=Q("sp"),st=Q("rtg"),at=Q("rtc");function ct(t,e=kn){J("ec",t,e)}function ut(t,e){if(null===N)return t;const n=zn(N),r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,s,a,c=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&Se(s),r.push({dir:t,instance:n,value:s,oldValue:void 0,arg:a,modifiers:c}))}return t}function lt(t,e,n,i){const o=t.dirs,a=e&&e.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),s(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}function ht(t,e,n,r){let o;const s=n&&n[r];if((0,i.cy)(t)||(0,i.Kg)(t)){o=new Array(t.length);for(let n=0,r=t.length;n<r;n++)o[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,s&&s[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,s&&s[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}
/*! #__NO_SIDE_EFFECTS__ */
function ft(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}const dt=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const pt=t=>t?Ln(t)?zn(t):pt(t.parent):null,gt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pt(t.parent),$root:t=>pt(t.root),$emit:t=>t.emit,$options:t=>Tt(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,b(t.update)}),$nextTick:t=>t.n||(t.n=y.bind(t.proxy)),$watch:t=>Ie.bind(t)}),mt=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),vt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return o[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(mt(o,e))return c[e]=1,o[e];if(s!==i.MZ&&(0,i.$3)(s,e))return c[e]=2,s[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];_t&&(c[e]=0)}}const f=gt[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;return mt(o,e)?(o[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||mt(e,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(gt,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yt(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let _t=!0;function bt(t){const e=Tt(t),n=t.proxy,o=t.ctx;_t=!1,e.beforeCreate&&Et(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:I,renderTracked:T,renderTriggered:S,errorCaptured:A,serverPrefetch:C,expose:k,inheritAttrs:O,components:R,directives:P,filters:N}=e,x=null;if(h&&wt(h,o,x),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(o[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(_t=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Gn({get:e,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)It(u[r],o,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{jt(e,t[e])}))}function L(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Et(f,t,"c"),L(Z,d),L(tt,p),L(et,g),L(nt,m),L(ke,v),L(Oe,y),L(ct,A),L(at,T),L(st,S),L(rt,b),L(it,E),L(ot,C),(0,i.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});I&&t.render===i.tE&&(t.render=I),null!=O&&(t.inheritAttrs=O),R&&(t.components=R),P&&(t.directives=P)}function wt(t,e,n=i.tE){(0,i.cy)(t)&&(t=Ot(t));for(const o in t){const n=t[o];let s;s=(0,i.Gv)(n)?"default"in n?Ft(n.from||o,n.default,!0):Ft(n.from||o):Ft(n),(0,r.i9)(s)?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function Et(t,e,n){s((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function It(t,e,n,r){const o=r.includes(".")?Te(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&we(o,n)}else if((0,i.Tn)(t))we(o,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>It(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&we(o,r,t)}else 0}function Tt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,c=s.get(e);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((t=>St(u,t,a,!0))),St(u,e,a)):u=e,(0,i.Gv)(e)&&s.set(e,u),u}function St(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&St(t,o,n,!0),i&&i.forEach((e=>St(t,e,n,!0)));for(const s in e)if(r&&"expose"===s);else{const r=At[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const At={data:Ct,props:Nt,emits:Nt,methods:Pt,computed:Pt,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Pt,directives:Pt,watch:xt,provide:Ct,inject:kt};function Ct(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function kt(t,e){return Pt(Ot(t),Ot(e))}function Ot(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Pt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Nt(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),yt(t),yt(null!=e?e:{})):e}function xt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Lt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dt=0;function Mt(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=Lt(),s=new WeakSet;let a=!1;const c=o.app={_uid:Dt++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Xn,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&(0,i.Tn)(t.install)?(s.add(t),t.install(c,...e)):(0,i.Tn)(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(i,s,u){if(!a){0;const l=pn(n,r);return l.appContext=o,!0===u?u="svg":!1===u&&(u=void 0),s&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,zn(l.component)}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c},runWithContext(t){const e=Ut;Ut=c;try{return t()}finally{Ut=e}}};return c}}let Ut=null;function jt(t,e){if(kn){let n=kn.provides;const r=kn.parent&&kn.parent.provides;r===n&&(n=kn.provides=Object.create(r)),n[t]=e}else 0}function Ft(t,e,n=!1){const r=kn||N;if(r||Ut){const o=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ut._context.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}function $t(){return!!(kn||N||Ut)}const Vt={},Bt=()=>Object.create(Vt),Ht=t=>Object.getPrototypeOf(t)===Vt;function zt(t,e,n,i=!1){const o={},s=Bt();t.propsDefaults=Object.create(null),Kt(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Gc)(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function Wt(t,e,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(s),[l]=t.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;Kt(t,e,s,a)&&(h=!0);for(const o in u)e&&((0,i.$3)(e,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(e,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Gt(l,u,o,void 0,t,!0)):delete s[o]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(P(t.emitsOptions,o))continue;const c=e[o];if(l)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const e=(0,i.PT)(o);s[e]=Gt(l,u,e,c,t,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Kt(t,e,n,o){const[s,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;s&&(0,i.$3)(s,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:P(t.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Gt(s,e,c,o[c],t,!(0,i.$3)(o,c))}}return u}function Gt(t,e,n,r,o,s){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=Nn(o);r=i[n]=t.call(null,e),s()}}else r=t}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function qt(t,e,n=!1){const r=e.propsCache,o=r.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=qt(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(s))for(let h=0;h<s.length;h++){0;const t=(0,i.PT)(s[h]);Xt(t)&&(a[t]=i.MZ)}else if(s){0;for(const t in s){const e=(0,i.PT)(t);if(Xt(e)){const n=s[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const t=Qt(Boolean,r.type),n=Qt(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.$3)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function Xt(t){return"$"!==t[0]&&!(0,i.SU)(t)}function Yt(t){if(null===t)return"null";if("function"===typeof t)return t.name||"";if("object"===typeof t){const e=t.constructor&&t.constructor.name;return e||""}return""}function Jt(t,e){return Yt(t)===Yt(e)}function Qt(t,e){return(0,i.cy)(e)?e.findIndex((e=>Jt(e,t))):(0,i.Tn)(e)&&Jt(e,t)?0:-1}const Zt=t=>"_"===t[0]||"$stable"===t,te=t=>(0,i.cy)(t)?t.map(bn):[bn(t)],ee=(t,e,n)=>{if(e._n)return e;const r=U(((...t)=>te(e(...t))),n);return r._c=!1,r},ne=(t,e,n)=>{const r=t._ctx;for(const o in t){if(Zt(o))continue;const n=t[o];if((0,i.Tn)(n))e[o]=ee(o,n,r);else if(null!=n){0;const t=te(n);e[o]=()=>t}}},re=(t,e)=>{const n=te(e);t.slots.default=()=>n},ie=(t,e)=>{const n=t.slots=Bt();if(32&t.vnode.shapeFlag){const t=e._;t?((0,i.X$)(n,e),(0,i.yQ)(n,"_",t,!0)):ne(e,n)}else e&&re(t,e)},oe=(t,e,n)=>{const{vnode:r,slots:o}=t;let s=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:((0,i.X$)(o,e),n||1!==t||delete o._):(s=!e.$stable,ne(e,o)),a=e}else e&&(re(t,e),a={default:1});if(s)for(const i in o)Zt(i)||null!=a[i]||delete o[i]};function se(t,e,n,s,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>se(t,e&&((0,i.cy)(e)?e[r]:e),n,s,a)));if(dt(s)&&!a)return;const c=4&s.shapeFlag?zn(s.component):s.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,(0,i.$3)(p,f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))o(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),o=(0,r.i9)(h);if(e||o){const r=()=>{if(t.f){const n=e?(0,i.$3)(p,h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.$3)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):o&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,ce(r,n)):r()}else 0}}function ae(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ce=Y;function ue(t){return le(t)}function le(t,e){ae();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,o=null,s=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!ln(t,e)&&(r=Q(t),G(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ye:y(t,e,n,r);break;case Je:_(t,e,n,r);break;case Qe:null==t&&w(e,n,r,s);break;case Xe:L(t,e,n,r,i,o,s,a,c);break;default:1&h?C(t,e,n,r,i,o,s,a,c):6&h?D(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,et)}null!=l&&i&&se(l,t&&t.ref,o,e||t,!e)},y=(t,e,n,r)=>{if(null==t)o(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},_=(t,e,n,r)=>{null==t?o(e.el=l(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),o(t,n,r),t=i;o(e,n,r)},A=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},C=(t,e,n,r,i,o,s,a,c)=>{"svg"===e.type?s="svg":"math"===e.type&&(s="mathml"),null==t?k(e,n,r,i,o,s,a,c):P(t,e,i,o,s,a,c)},k=(t,e,n,r,s,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&R(t.children,d,null,r,s,he(t,u),l,h),y&&lt(t,null,r,"created"),O(d,t,t.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(d,e,null,g[e],u,t.children,r,s,J);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&Tn(p,r,t)}y&&lt(t,null,r,"beforeMount");const _=de(s,v);_&&v.beforeEnter(d),o(d,e,n),((p=g&&g.onVnodeMounted)||_||y)&&ce((()=>{p&&Tn(p,r,t),_&&v.enter(d),y&&lt(t,null,r,"mounted")}),s)},O=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let o=0;o<r.length;o++)g(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;O(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?wn(t[u]):bn(t[u]);v(null,c,e,n,r,i,o,s,a)}},P=(t,e,n,r,o,s,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&fe(n,!1),(m=g.onVnodeBeforeUpdate)&&Tn(m,n,e,t),d&&lt(e,t,n,"beforeUpdate"),n&&fe(n,!0),h?N(t.dynamicChildren,h,u,n,r,he(e,o),s):c||B(t,e,u,null,n,r,he(e,o),s,!1),l>0){if(16&l)x(u,e,p,g,n,r,o);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,o),4&l&&a(u,"style",p.style,g.style,o),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const s=i[e],c=p[s],l=g[s];l===c&&"value"!==s||a(u,s,c,l,o,t.children,n,r,J)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||x(u,e,p,g,n,r,o);((m=g.onVnodeUpdated)||d)&&ce((()=>{m&&Tn(m,n,e,t),d&&lt(e,t,n,"updated")}),r)},N=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Xe||!ln(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},x=(t,e,n,r,o,s,c)=>{if(n!==r){if(n!==i.MZ)for(const u in n)(0,i.SU)(u)||u in r||a(t,u,n[u],null,c,e.children,o,s,J);for(const u in r){if((0,i.SU)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,o,s,J)}"value"in r&&a(t,"value",n.value,r.value,c)}},L=(t,e,n,r,i,s,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(o(h,n,r),o(f,n,r),R(e.children||[],n,f,i,s,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,i,s,a,c),(null!=e.key||i&&e===i.subTree)&&pe(t,e,!0)):B(t,e,n,f,i,s,a,c,l)},D=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):M(e,n,r,i,o,s,c):U(t,e,c)},M=(t,e,n,r,i,o,s)=>{const a=t.component=Cn(t,r,i);if(Ae(t)&&(a.ctx.renderer=et),jn(a),a.asyncDep){if(i&&i.registerDep(a,F,s),!t.el){const t=a.subTree=pn(Je);_(null,t,e,n)}}else F(a,t,e,n,i,o,s)},U=(t,e,n)=>{const r=e.component=t.component;if(V(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,e,n);r.next=e,E(r.update),r.effect.dirty=!0,r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,o,s,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:o,vnode:l}=t;{const n=me(t);if(n)return e&&(e.el=l.el,$(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||u()}))}let h,f=e;0,fe(t,!1),e?(e.el=l.el,$(t,e,c)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&Tn(h,o,e,l),fe(t,!0);const p=j(t);0;const g=t.subTree;t.subTree=p,v(g,p,d(g.el),Q(g),t,s,a),e.el=p.el,null===f&&H(t,p.el),r&&ce(r,s),(h=e.props&&e.props.onVnodeUpdated)&&ce((()=>Tn(h,o,e,l)),s)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=dt(e);if(fe(t,!1),l&&(0,i.DY)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&Tn(r,f,e),fe(t,!0),c&&rt){const n=()=>{t.subTree=j(t),rt(c,t.subTree,t,s,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=j(t);0,v(null,r,n,o,t,s,a),e.el=r.el}if(h&&ce(h,s),!d&&(r=u&&u.onVnodeMounted)){const t=e;ce((()=>Tn(r,f,t)),s)}(256&e.shapeFlag||f&&dt(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&ce(t.a,s),t.isMounted=!0,e=n=o=null}},l=t.effect=new r.X2(u,i.tE,(()=>b(h)),t.scope),h=t.update=()=>{l.dirty&&l.run()};h.id=t.uid,fe(t,!0),h()},$=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Wt(t,e.props,i,n),oe(t,e.children,n),(0,r.C4)(),T(t),(0,r.bl)()},B=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void W(u,h,n,r,i,o,s,a,c);if(256&d)return void z(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&J(u,i,o),h!==u&&f(n,h)):16&l?16&p?W(u,h,n,r,i,o,s,a,c):J(u,i,o,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,o,s,a,c))},z=(t,e,n,r,o,s,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?wn(e[d]):bn(e[d]);v(t[d],r,n,null,o,s,a,c,u)}l>h?J(t,o,s,!0,!1,f):R(e,n,r,o,s,a,c,u,f)},W=(t,e,n,r,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?wn(e[l]):bn(e[l]);if(!ln(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?wn(e[d]):bn(e[d]);if(!ln(r,i))break;v(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=u?wn(e[l]):bn(e[l]),n,i,o,s,a,c,u),l++}}else if(l>d)while(l<=f)G(t[l],o,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?wn(e[l]):bn(e[l]);null!=t.key&&m.set(t.key,l)}let y,_=0;const b=d-g+1;let w=!1,E=0;const I=new Array(b);for(l=0;l<b;l++)I[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=b){G(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===I[y-g]&&ln(r,e[y])){i=y;break}void 0===i?G(r,o,s,!0):(I[i-g]=l+1,i>=E?E=i:w=!0,v(r,e[i],n,null,o,s,a,c,u),_++)}const T=w?ge(I):i.Oj;for(y=T.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===I[l]?v(null,i,n,f,o,s,a,c,u):w&&(y<0||l!==T[y]?K(i,n,f,2):y--)}}},K=(t,e,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Xe){o(s,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void o(t.anchor,e,n)}if(a===Qe)return void I(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),o(s,e,n),ce((()=>c.enter(s)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>o(s,e,n),u=()=>{t(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f,memoIndex:d}=t;if(-2===h&&(i=!1),null!=a&&se(a,null,n,t,!0),null!=d&&(e.renderCache[d]=void 0),256&l)return void e.ctx.deactivate(t);const p=1&l&&f,g=!dt(t);let m;if(g&&(m=s&&s.onVnodeBeforeUnmount)&&Tn(m,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);p&&lt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,et,r):u&&(o!==Xe||h>0&&64&h)?J(u,e,n,!1,!0):(o===Xe&&384&h||!i&&16&l)&&J(c,e,n),r&&q(t)}(g&&(m=s&&s.onVnodeUnmounted)||p)&&ce((()=>{m&&Tn(m,e,t),p&&lt(t,null,e,"unmounted")}),n)},q=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Xe)return void X(n,r);if(e===Qe)return void A(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},X=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},Y=(t,e,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c,m:u,a:l}=t;ve(u),ve(l),r&&(0,i.DY)(r),o.stop(),s&&(s.active=!1,G(a,t,e,n)),c&&ce(c,e),ce((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)G(t[s],e,n,r,i)},Q=t=>6&t.shapeFlag?Q(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el);let Z=!1;const tt=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),Z||(Z=!0,T(),S(),Z=!1),e._vnode=t},et={p:v,um:G,m:K,r:q,mt:M,mc:R,pc:B,pbc:N,n:Q,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Mt(tt,nt)}}function he({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function de(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pe(t,e,n=!1){const r=t.children,o=e.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const t=r[i];let e=o[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[i]=wn(o[i]),e.el=t.el),n||-2===e.patchFlag||pe(t,e)),e.type===Ye&&(e.el=t.el)}}function ge(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}function me(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:me(e)}function ve(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const ye=Symbol.for("v-scx"),_e=()=>{{const t=Ft(ye);return t}};const be={};function we(t,e,n){return Ee(t,e,n)}function Ee(t,e,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.MZ){if(e&&u){const t=e;e=(...e)=>{t(...e),A()}}const f=kn,d=t=>!0===a?t:Se(t,!1===a?1:void 0);let p,g,m=!1,v=!1;if((0,r.i9)(t)?(p=()=>t.value,m=(0,r.fE)(t)):(0,r.g8)(t)?(p=()=>d(t),m=!0):(0,i.cy)(t)?(v=!0,m=t.some((t=>(0,r.g8)(t)||(0,r.fE)(t))),p=()=>t.map((t=>(0,r.i9)(t)?t.value:(0,r.g8)(t)?d(t):(0,i.Tn)(t)?o(t,f,2):void 0))):p=(0,i.Tn)(t)?e?()=>o(t,f,2):()=>(g&&g(),s(t,f,3,[_])):i.tE,e&&a){const t=p;p=()=>Se(t())}let y,_=t=>{g=T.onStop=()=>{o(t,f,4),g=T.onStop=void 0}};if(Un){if(_=i.tE,e?n&&s(e,f,3,[p(),v?[]:void 0,_]):p(),"sync"!==c)return i.tE;{const t=_e();y=t.__watcherHandles||(t.__watcherHandles=[])}}let w=v?new Array(t.length).fill(be):be;const E=()=>{if(T.active&&T.dirty)if(e){const t=T.run();(a||m||(v?t.some(((t,e)=>(0,i.$H)(t,w[e]))):(0,i.$H)(t,w)))&&(g&&g(),s(e,f,3,[t,w===be?void 0:v&&w[0]===be?[]:w,_]),w=t)}else T.run()};let I;E.allowRecurse=!!e,"sync"===c?I=E:"post"===c?I=()=>ce(E,f&&f.suspense):(E.pre=!0,f&&(E.id=f.uid),I=()=>b(E));const T=new r.X2(p,i.tE,I),S=(0,r.o5)(),A=()=>{T.stop(),S&&(0,i.TF)(S.effects,T)};return e?n?E():w=T.run():"post"===c?ce(T.run.bind(T),f&&f.suspense):T.run(),y&&y.push(A),A}function Ie(t,e,n){const r=this.proxy,o=(0,i.Kg)(t)?t.includes(".")?Te(r,t):()=>r[t]:t.bind(r,r);let s;(0,i.Tn)(e)?s=e:(s=e.handler,n=e);const a=Nn(this),c=Ee(o,s.bind(r),n);return a(),c}function Te(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Se(t,e=1/0,n){if(e<=0||!(0,i.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,(0,r.i9)(t))Se(t.value,e,n);else if((0,i.cy)(t))for(let r=0;r<t.length;r++)Se(t[r],e,n);else if((0,i.vM)(t)||(0,i.CE)(t))t.forEach((t=>{Se(t,e,n)}));else if((0,i.Qd)(t)){for(const r in t)Se(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Se(t[r],e,n)}return t}const Ae=t=>t.type.__isKeepAlive;RegExp,RegExp;function Ce(t,e){return(0,i.cy)(t)?t.some((t=>Ce(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&t.test(e)}function ke(t,e){Re(t,"a",e)}function Oe(t,e){Re(t,"da",e)}function Re(t,e,n=kn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(J(e,r,n),n){let t=n.parent;while(t&&t.parent)Ae(t.parent.vnode)&&Pe(r,e,n,t),t=t.parent}}function Pe(t,e,n,r){const o=J(e,t,r,!0);it((()=>{(0,i.TF)(r[e],o)}),n)}function Ne(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function xe(t){return 128&t.shapeFlag?t.ssContent:t}const Le=Symbol("_leaveCb"),De=Symbol("_enterCb");function Me(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tt((()=>{t.isMounted=!0})),rt((()=>{t.isUnmounting=!0})),t}const Ue=[Function,Array],je={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},Fe=t=>{const e=t.subTree;return e.component?Fe(e.component):e},$e={name:"BaseTransition",props:je,setup(t,{slots:e}){const n=On(),i=Me();return()=>{const o=e.default&&Ge(e.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Je){0,s=e,t=!0;break}}const a=(0,r.ux)(t),{mode:c}=a;if(i.isLeaving)return ze(s);const u=We(s);if(!u)return ze(s);let l=He(u,a,i,n,(t=>l=t));Ke(u,l);const h=n.subTree,f=h&&We(h);if(f&&f.type!==Je&&!ln(u,f)&&Fe(n).type!==Je){const t=He(f,a,i,n);if(Ke(f,t),"out-in"===c&&u.type!==Je)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},ze(s);"in-out"===c&&u.type!==Je&&(t.delayLeave=(t,e,n)=>{const r=Be(i,f);r[String(f.key)]=f,t[Le]=()=>{e(),t[Le]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return s}}},Ve=$e;function Be(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function He(t,e,n,r,o){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:_,onAfterAppear:b,onAppearCancelled:w}=e,E=String(t.key),I=Be(n,t),T=(t,e)=>{t&&s(t,r,9,e)},S=(t,e)=>{const n=e[1];T(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},A={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=y||l}e[Le]&&e[Le](!0);const i=I[E];i&&ln(t,i)&&i.el[Le]&&i.el[Le](),T(r,[e])},enter(t){let e=h,r=f,i=d;if(!n.isMounted){if(!a)return;e=_||h,r=b||f,i=w||d}let o=!1;const s=t[De]=e=>{o||(o=!0,T(e?i:r,[t]),A.delayedLeave&&A.delayedLeave(),t[De]=void 0)};e?S(e,[t,s]):s()},leave(e,r){const i=String(t.key);if(e[De]&&e[De](!0),n.isUnmounting)return r();T(p,[e]);let o=!1;const s=e[Le]=n=>{o||(o=!0,r(),T(n?v:m,[e]),e[Le]=void 0,I[i]===t&&delete I[i])};I[i]=t,g?S(g,[e,s]):s()},clone(t){const i=He(t,e,n,r,o);return o&&o(i),i}};return A}function ze(t){if(Ae(t))return t=vn(t),t.children=null,t}function We(t){if(!Ae(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(16&e)return n[0];if(32&e&&(0,i.Tn)(n.default))return n.default()}}function Ke(t,e){6&t.shapeFlag&&t.component?Ke(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ge(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Xe?(128&s.patchFlag&&i++,r=r.concat(Ge(s.children,e,a))):(e||s.type!==Je)&&r.push(null!=a?vn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const qe=t=>t.__isTeleport;const Xe=Symbol.for("v-fgt"),Ye=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Qe=Symbol.for("v-stc"),Ze=[];let tn=null;function en(t=!1){Ze.push(tn=t?null:[])}function nn(){Ze.pop(),tn=Ze[Ze.length-1]||null}let rn=1;function on(t){rn+=t}function sn(t){return t.dynamicChildren=rn>0?tn||i.Oj:null,nn(),rn>0&&tn&&tn.push(t),t}function an(t,e,n,r,i,o){return sn(dn(t,e,n,r,i,o,!0))}function cn(t,e,n,r,i){return sn(pn(t,e,n,r,i,!0))}function un(t){return!!t&&!0===t.__v_isVNode}function ln(t,e){return t.type===e.type&&t.key===e.key}const hn=({key:t})=>null!=t?t:null,fn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:N,r:t,k:e,f:!!n}:t:null);function dn(t,e=null,n=null,r=0,o=null,s=(t===Xe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hn(e),ref:e&&fn(e),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:N};return c?(En(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),rn>0&&!a&&tn&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&tn.push(u),u}const pn=gn;function gn(t,e=null,n=null,o=0,s=null,a=!1){if(t&&t!==K||(t=Je),un(t)){const r=vn(t,e,!0);return n&&En(r,n),rn>0&&!a&&tn&&(6&r.shapeFlag?tn[tn.indexOf(t)]=r:tn.push(r)),r.patchFlag=-2,r}if(Kn(t)&&(t=t.__vccOpts),e){e=mn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:X(t)?128:qe(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return dn(t,e,n,o,s,c,a,!0)}function mn(t){return t?(0,r.ju)(t)||Ht(t)?(0,i.X$)({},t):t:null}function vn(t,e,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:u}=t,l=e?In(o||{},e):o,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&hn(l),ref:e&&e.ref?n&&s?(0,i.cy)(s)?s.concat(fn(e)):[s,fn(e)]:fn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Ke(h,u.clone(h)),h}function yn(t=" ",e=0){return pn(Ye,null,t,e)}function _n(t="",e=!1){return e?(en(),cn(Je,null,t)):pn(Je,null,t)}function bn(t){return null==t||"boolean"===typeof t?pn(Je):(0,i.cy)(t)?pn(Xe,null,t.slice()):"object"===typeof t?wn(t):pn(Ye,null,String(t))}function wn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:vn(t)}function En(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),En(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ht(e)?3===r&&N&&(1===N.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=N}}else(0,i.Tn)(e)?(e={default:e,_ctx:N},n=32):(e=String(e),64&r?(n=16,e=[yn(e)]):n=8);t.children=e,t.shapeFlag|=n}function In(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],o=r[t];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(e[t]=n?[].concat(n,o):o)}else""!==t&&(e[t]=r[t])}return e}function Tn(t,e,n,r=null){s(t,e,7,[n,r])}const Sn=Lt();let An=0;function Cn(t,e,n){const o=t.type,s=(e?e.appContext:t.appContext)||Sn,a={uid:An++,vnode:t,type:o,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qt(o,s),emitsOptions:R(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=O.bind(null,a),t.ce&&t.ce(a),a}let kn=null;const On=()=>kn||N;let Rn,Pn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};Rn=e("__VUE_INSTANCE_SETTERS__",(t=>kn=t)),Pn=e("__VUE_SSR_SETTERS__",(t=>Un=t))}const Nn=t=>{const e=kn;return Rn(t),t.scope.on(),()=>{t.scope.off(),Rn(e)}},xn=()=>{kn&&kn.scope.off(),Rn(null)};function Ln(t){return 4&t.vnode.shapeFlag}let Dn,Mn,Un=!1;function jn(t,e=!1){e&&Pn(e);const{props:n,children:r}=t.vnode,i=Ln(t);zt(t,n,i,e),ie(t,r);const o=i?Fn(t,e):void 0;return e&&Pn(!1),o}function Fn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vt);const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?Hn(t):null,c=Nn(t);(0,r.C4)();const u=o(s,t,0,[t.props,n]);if((0,r.bl)(),c(),(0,i.yL)(u)){if(u.then(xn,xn),e)return u.then((n=>{$n(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=u}else $n(t,u,e)}else Vn(t,e)}function $n(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Vn(t,n)}function Vn(t,e,n){const o=t.type;if(!t.render){if(!e&&Dn&&!o.render){const e=o.template||Tt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=Dn(e,c)}}t.render=o.render||i.tE,Mn&&Mn(t)}{const e=Nn(t);(0,r.C4)();try{bt(t)}finally{(0,r.bl)(),e()}}}const Bn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function Hn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Bn),slots:t.slots,emit:t.emit,expose:e}}function zn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in gt?gt[n](t):void 0},has(t,e){return e in t||e in gt}})):t.proxy}function Wn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Kn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Gn=(t,e)=>{const n=(0,r.EW)(t,e,Un);return n};function qn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?un(e)?pn(t,null,[e]):pn(t,e):pn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&un(n)&&(n=[n]),pn(t,e,n))}const Xn="3.4.31"},5130:function(t,e,n){n.d(e,{D$:function(){return Ct},Ef:function(){return Pt},Jo:function(){return bt},aG:function(){return L},lH:function(){return wt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(4232),o=n(144);
/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?c.createElementNS(s,t):"mathml"===e?c.createElementNS(a,t):n?c.createElement(t,{is:n}):c.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>c.createTextNode(t),createComment:t=>c.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>c.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t;const i=u.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h="transition",f="animation",d=Symbol("_vtc"),p=(t,{slots:e})=>(0,r.h)(r.pR,_(t),e);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),v=(t,e=[])=>{(0,i.cy)(t)?t.forEach((t=>t(...e))):t&&t(...e)},y=t=>!!t&&((0,i.cy)(t)?t.some((t=>t.length>1)):t.length>1);function _(t){const e={};for(const i in t)i in g||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=b(o),_=m&&m[0],w=m&&m[1],{onBeforeEnter:S,onEnter:C,onEnterCancelled:k,onLeave:O,onLeaveCancelled:P,onBeforeAppear:N=S,onAppear:x=C,onAppearCancelled:L=k}=e,D=(t,e,n)=>{I(t,e?h:c),I(t,e?l:a),n&&n()},M=(t,e)=>{t._isLeaving=!1,I(t,f),I(t,p),I(t,d),e&&e()},U=t=>(e,n)=>{const i=t?x:C,o=()=>D(e,t,n);v(i,[e,o]),T((()=>{I(e,t?u:s),E(e,t?h:c),y(i)||A(e,r,_,o)}))};return(0,i.X$)(e,{onBeforeEnter(t){v(S,[t]),E(t,s),E(t,a)},onBeforeAppear(t){v(N,[t]),E(t,u),E(t,l)},onEnter:U(!1),onAppear:U(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>M(t,e);E(t,f),E(t,d),R(),T((()=>{t._isLeaving&&(I(t,f),E(t,p),y(O)||A(t,r,w,n))})),v(O,[t,n])},onEnterCancelled(t){D(t,!1),v(k,[t])},onAppearCancelled(t){D(t,!0),v(L,[t])},onLeaveCancelled(t){M(t),v(P,[t])}})}function b(t){if(null==t)return null;if((0,i.Gv)(t))return[w(t.enter),w(t.leave)];{const e=w(t);return[e,e]}}function w(t){const e=(0,i.Ro)(t);return e}function E(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[d]||(t[d]=new Set)).add(e)}function I(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[d];n&&(n.delete(e),n.size||(t[d]=void 0))}function T(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let S=0;function A(t,e,n,r){const i=t._endId=++S,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=C(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function C(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${h}Delay`),o=r(`${h}Duration`),s=k(i,o),a=r(`${f}Delay`),c=r(`${f}Duration`),u=k(a,c);let l=null,d=0,p=0;e===h?s>0&&(l=h,d=s,p=o.length):e===f?u>0&&(l=f,d=u,p=c.length):(d=Math.max(s,u),l=d>0?s>u?h:f:null,p=l?l===h?o.length:c.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:d,propCount:p,hasTransform:g}}function k(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>O(e)+O(t[n]))))}function O(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function R(){return document.body.offsetHeight}function P(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const N=Symbol("_vod"),x=Symbol("_vsh"),L={beforeMount(t,{value:e},{transition:n}){t[N]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):D(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),D(t,!0),r.enter(t)):r.leave(t,(()=>{D(t,!1)})):D(t,e))},beforeUnmount(t,{value:e}){D(t,e)}};function D(t,e){t.style.display=e?t[N]:"none",t[x]=!e}const M=Symbol("");const U=/(^|;)\s*display\s*:/;function j(t,e,n){const r=t.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&$(r,e,"")}else for(const t in e)null==n[t]&&$(r,t,"");for(const t in n)"display"===t&&(s=!0),$(r,t,n[t])}else if(o){if(e!==n){const t=r[M];t&&(n+=";"+t),r.cssText=n,s=U.test(n)}}else e&&t.removeAttribute("style");N in t&&(t[N]=s?r.display:"",t[x]&&(r.display="none"))}const F=/\s*!important$/;function $(t,e,n){if((0,i.cy)(n))n.forEach((n=>$(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=H(t,e);F.test(n)?t.setProperty((0,i.Tg)(r),n.replace(F,""),"important"):t[r]=n}}const V=["Webkit","Moz","ms"],B={};function H(t,e){const n=B[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return B[e]=r;r=(0,i.ZH)(r);for(let i=0;i<V.length;i++){const n=V[i]+r;if(n in t)return B[e]=n}return e}const z="http://www.w3.org/1999/xlink";function W(t,e,n,r,o,s=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(z,e.slice(6,e.length)):t.setAttributeNS(z,e,n):null==n||s&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":(0,i.Bm)(n)?String(n):n)}function K(t,e,n,r,o,s,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,o,s),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?t.getAttribute("value")||"":t.value,i=null==n?"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let u=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function G(t,e,n,r){t.addEventListener(e,n,r)}function q(t,e,n,r){t.removeEventListener(e,n,r)}const X=Symbol("_vei");function Y(t,e,n,r,i=null){const o=t[X]||(t[X]={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=Q(e);if(r){const s=o[e]=nt(r,i);G(t,n,s,a)}else s&&(q(t,n,s,a),o[e]=void 0)}}const J=/(?:Once|Passive|Capture)$/;function Q(t){let e;if(J.test(t)){let n;e={};while(n=t.match(J))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let Z=0;const tt=Promise.resolve(),et=()=>Z||(tt.then((()=>Z=0)),Z=Date.now());function nt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(rt(t,n.value),e,5,[t])};return n.value=t,n.attached=et(),n}function rt(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const it=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ot=(t,e,n,r,o,s,a,c,u)=>{const l="svg"===o;"class"===e?P(t,r,l):"style"===e?j(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||Y(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):st(t,e,r,l))?(K(t,e,r,s,a,c,u),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||W(t,e,r,l,a,"value"!==e)):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),W(t,e,r,l))};function st(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&it(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!it(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const at=new WeakMap,ct=new WeakMap,ut=Symbol("_moveCb"),lt=Symbol("_enterCb"),ht={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.nI)(),i=(0,r.Gy)();let s,a;return(0,r.$u)((()=>{if(!s.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!gt(s[0].el,n.vnode.el,e))return;s.forEach(ft),s.forEach(dt);const r=s.filter(pt);R(),r.forEach((t=>{const n=t.el,r=n.style;E(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ut]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n[ut]=null,I(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.ux)(t),u=_(c);let l=c.tag||r.FK;if(s=[],a)for(let t=0;t<a.length;t++){const e=a[t];e.el&&e.el instanceof Element&&(s.push(e),(0,r.MZ)(e,(0,r.OW)(e,u,i,n)),at.set(e,e.el.getBoundingClientRect()))}a=e.default?(0,r.Df)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.MZ)(e,(0,r.OW)(e,u,i,n))}return(0,r.bF)(l,null,a)}}};ht.props;function ft(t){const e=t.el;e[ut]&&e[ut](),e[lt]&&e[lt]()}function dt(t){ct.set(t,t.el.getBoundingClientRect())}function pt(t){const e=at.get(t),n=ct.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function gt(t,e,n){const r=t.cloneNode(),i=t[d];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const o=1===e.nodeType?e:e.parentNode;o.appendChild(r);const{hasTransform:s}=C(r);return o.removeChild(r),s}const mt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function vt(t){t.target.composing=!0}function yt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _t=Symbol("_assign"),bt={created(t,{modifiers:{lazy:e,trim:n,number:r}},o){t[_t]=mt(o);const s=r||o.props&&"number"===o.props.type;G(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),s&&(r=(0,i.bB)(r)),t[_t](r)})),n&&G(t,"change",(()=>{t.value=t.value.trim()})),e||(G(t,"compositionstart",vt),G(t,"compositionend",yt),G(t,"change",yt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},a){if(t[_t]=mt(a),t.composing)return;const c=!s&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),u=null==e?"":e;if(c!==u){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(o&&t.value.trim()===u)return}t.value=u}}},wt={deep:!0,created(t,e,n){t[_t]=mt(n),G(t,"change",(()=>{const e=t._modelValue,n=It(t),r=t.checked,o=t[_t];if((0,i.cy)(e)){const t=(0,i.u3)(e,n),s=-1!==t;if(r&&!s)o(e.concat(n));else if(!r&&s){const n=[...e];n.splice(t,1),o(n)}}else if((0,i.vM)(e)){const t=new Set(e);r?t.add(n):t.delete(n),o(t)}else o(Tt(t,r))}))},mounted:Et,beforeUpdate(t,e,n){t[_t]=mt(n),Et(t,e,n)}};function Et(t,{value:e,oldValue:n},r){t._modelValue=e,(0,i.cy)(e)?t.checked=(0,i.u3)(e,r.props.value)>-1:(0,i.vM)(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=(0,i.BX)(e,Tt(t,!0)))}function It(t){return"_value"in t?t._value:t.value}function Tt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const St=["ctrl","shift","alt","meta"],At={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>St.some((n=>t[`${n}Key`]&&!e.includes(n)))},Ct=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=At[e[t]];if(r&&r(n,e))return}return t(n,...r)})},kt=(0,i.X$)({patchProp:ot},l);let Ot;function Rt(){return Ot||(Ot=(0,r.K9)(kt))}const Pt=(...t)=>{const e=Rt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=xt(t);if(!r)return;const o=e._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,Nt(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function Nt(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function xt(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){n.d(e,{$3:function(){return d},$H:function(){return U},BH:function(){return W},BX:function(){return nt},Bm:function(){return w},C4:function(){return J},CE:function(){return g},CP:function(){return u},DY:function(){return j},Gv:function(){return E},J$:function(){return Z},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return o},PT:function(){return N},Qd:function(){return C},Ro:function(){return V},SU:function(){return O},TF:function(){return h},Tg:function(){return L},Tn:function(){return _},Tr:function(){return K},We:function(){return H},X$:function(){return l},Y2:function(){return tt},ZH:function(){return D},Zf:function(){return A},bB:function(){return $},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return s},u3:function(){return rt},vM:function(){return m},v_:function(){return ot},yI:function(){return k},yL:function(){return I},yQ:function(){return F}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t,e){const n=new Set(t.split(","));return e?t=>n.has(t.toLowerCase()):t=>n.has(t)}const i={},o=[],s=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),v=t=>"[object Date]"===S(t),y=t=>"[object RegExp]"===S(t),_=t=>"function"===typeof t,b=t=>"string"===typeof t,w=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,I=t=>(E(t)||_(t))&&_(t.then)&&_(t.catch),T=Object.prototype.toString,S=t=>T.call(t),A=t=>S(t).slice(8,-1),C=t=>"[object Object]"===S(t),k=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},P=/-(\w)/g,N=R((t=>t.replace(P,((t,e)=>e?e.toUpperCase():"")))),x=/\B([A-Z])/g,L=R((t=>t.replace(x,"-$1").toLowerCase())),D=R((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=R((t=>{const e=t?`on${D(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),j=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},F=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$=t=>{const e=parseFloat(t);return isNaN(e)?t:e},V=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const H=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",W=r(z);function K(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=b(r)?Y(r):K(r);if(i)for(const t in i)e[t]=i[t]}return e}if(b(t)||E(t))return t}const G=/;(?![^(]*\))/g,q=/:([^]+)/,X=/\/\*[^]*?\*\//g;function Y(t){const e={};return t.replace(X,"").split(G).forEach((t=>{if(t){const n=t.split(q);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function J(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=J(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Q);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=w(t),r=w(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>!(!t||!0!==t.__v_isRef),ot=t=>b(t)?t:null==t?"":p(t)||E(t)&&(t.toString===T||!_(t.toString))?it(t)?ot(t.value):JSON.stringify(t,st,2):String(t),st=(t,e)=>it(e)?st(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:w(e)?at(e):!E(e)||p(e)||C(e)?e:String(e),at=(t,e="")=>{var n;return w(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},9306:function(t,e,n){var r=n(4901),i=n(6823),o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not a function")}},3506:function(t,e,n){var r=n(3925),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o("Can't set "+i(t)+" as a prototype")}},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},8551:function(t,e,n){var r=n(34),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not an object")}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){var r=n(6706),i=n(4576),o=TypeError;t.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==i(t))throw new o("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){var r=n(9504),i=n(7394),o=r(ArrayBuffer.prototype.slice);t.exports=function(t){if(0!==i(t))return!1;try{return o(t,0,0),!1}catch(e){return!0}}},5636:function(t,e,n){var r=n(4475),i=n(9504),o=n(6706),s=n(7696),a=n(3238),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=r.TypeError,g=Math.min,m=f.prototype,v=d.prototype,y=i(m.slice),_=o(m,"resizable","get"),b=o(m,"maxByteLength","get"),w=i(v.getInt8),E=i(v.setInt8);t.exports=(l||u)&&function(t,e,n){var r,i=c(t),o=void 0===e?i:s(e),m=!_||!_(t);if(a(t))throw new p("ArrayBuffer is detached");if(l&&(t=h(t,{transfer:[t]}),i===o&&(n||m)))return t;if(i>=o&&(!n||m))r=y(t,0,o);else{var v=n&&!m&&b?{maxByteLength:b(t)}:void 0;r=new f(o,v);for(var I=new d(t),T=new d(r),S=g(o,i),A=0;A<S;A++)E(T,A,w(I,A))}return l||u(t),r}},4644:function(t,e,n){var r,i,o,s=n(7811),a=n(3724),c=n(4475),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),_=n(2967),b=n(8227),w=n(3392),E=n(1181),I=E.enforce,T=E.get,S=c.Int8Array,A=S&&S.prototype,C=c.Uint8ClampedArray,k=C&&C.prototype,O=S&&y(S),R=A&&y(A),P=Object.prototype,N=c.TypeError,x=b("toStringTag"),L=w("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",M=s&&!!_&&"Opera"!==f(c.opera),U=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},$=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(j,e)||h(F,e)},V=function(t){var e=y(t);if(l(e)){var n=T(e);return n&&h(n,D)?n[D]:V(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(j,e)||h(F,e)},H=function(t){if(B(t))return t;throw new N("Target is not a typed array")},z=function(t){if(u(t)&&(!_||v(O,t)))return t;throw new N(d(t)+" is not a typed array constructor")},W=function(t,e,n,r){if(a){if(n)for(var i in j){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}R[t]&&!n||g(R,t,n?e:M&&A[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in j)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(O[t]&&!n)return;try{return g(O,t,n?e:M&&O[t]||e)}catch(o){}}for(r in j)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in j)i=c[r],o=i&&i.prototype,o?I(o)[D]=i:M=!1;for(r in F)i=c[r],o=i&&i.prototype,o&&(I(o)[D]=i);if((!M||!u(O)||O===Function.prototype)&&(O=function(){throw new N("Incorrect invocation")},M))for(r in j)c[r]&&_(c[r],O);if((!M||!R||R===P)&&(R=O.prototype,M))for(r in j)c[r]&&_(c[r].prototype,R);if(M&&y(k)!==R&&_(k,R),a&&!h(R,x))for(r in U=!0,m(R,x,{configurable:!0,get:function(){return l(this)?this[L]:void 0}}),j)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&L,aTypedArray:H,aTypedArrayConstructor:z,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:V,isView:$,isTypedArray:B,TypedArray:O,TypedArrayPrototype:R}},5370:function(t,e,n){var r=n(6198);t.exports=function(t,e,n){var i=0,o=arguments.length>2?n:r(e),s=new t(o);while(o>i)s[i]=e[i++];return s}},9617:function(t,e,n){var r=n(5397),i=n(5610),o=n(6198),s=function(t){return function(e,n,s){var a=r(e),c=o(a);if(0===c)return!t&&-1;var u,l=i(s,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4527:function(t,e,n){var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7628:function(t,e,n){var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),o=0;o<n;o++)i[o]=t[n-o-1];return i}},9928:function(t,e,n){var r=n(6198),i=n(1291),o=RangeError;t.exports=function(t,e,n,s){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new o("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?s:t[h];return l}},4576:function(t,e,n){var r=n(9504),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},6955:function(t,e,n){var r=n(2140),i=n(4901),o=n(4576),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"===(r=o(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),i=n(5031),o=n(7347),s=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6699:function(t,e,n){var r=n(3724),i=n(4913),o=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),i=n(4913),o=n(283),s=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9433:function(t,e,n){var r=n(4475),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(t,e,n){var r,i,o,s,a=n(4475),c=n(9714),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(u)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,o=new h(2),s=function(t){i.port1.postMessage(null,[t])},2===o.byteLength&&(s(o),0===o.byteLength&&(d=s)))}catch(p){}t.exports=d},4055:function(t,e,n){var r=n(4475),i=n(34),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(t,e,n){var r=n(516),i=n(9088);t.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(t){t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(t,e,n){var r=n(4475),i=n(4576);t.exports="process"===i(r.process)},9392:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(t,e,n){var r,i,o=n(4475),s=n(9392),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(t,e,n){var r=n(9504),i=Error,o=r("".replace),s=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},6518:function(t,e,n){var r=n(4475),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},616:function(t,e,n){var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(o){}}},9504:function(t,e,n){var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},7751:function(t,e,n){var r=n(4475),i=n(4901),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},3789:function(t,e,n){var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(t){return o(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=s(e);if(n<0)throw new u(c);return new f(t,n)}},4475:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},421:function(t){t.exports={}},5917:function(t,e,n){var r=n(3724),i=n(9039),o=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var r=n(9504),i=n(9039),o=n(4576),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?a(t,""):s(t)}:s},3167:function(t,e,n){var r=n(4901),i=n(34),o=n(2967);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},3706:function(t,e,n){var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},1181:function(t,e,n){var r,i,o,s=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw new g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},o=function(t){return _.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},o=function(t){return l(t,b)}}t.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},4376:function(t,e,n){var r=n(4576);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var i,o,s=n?t:t.iterator,a=t.next;while(!(i=r(a,s)).done)if(o=e(i.value),void 0!==o)return o}},9539:function(t,e,n){var r=n(9565),i=n(8551),o=n(5966);t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return s(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return o(this)&&f(this).source||u(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},4913:function(t,e,n){var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),i=n(8727),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){var r=n(6706),i=n(34),o=n(7750),s=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(t,e,n){var r=n(9565),i=n(4901),o=n(34),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw new s("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},9286:function(t,e,n){var r=n(4402),i=n(8469),o=r.Set,s=r.add;t.exports=function(t){var e=new o;return i(t,(function(t){s(e,t)})),e}},3440:function(t,e,n){var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=o(e);return s(e)<=n.size?c(e,(function(t){n.includes(t)&&h(i,t)})):u(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},4402:function(t,e,n){var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(t,e,n){var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=s(t),i=new u;return o(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},4449:function(t,e,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(o(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(t){if(i(e,t))return u(l,"normal",!1)}))}},3838:function(t,e,n){var r=n(7080),i=n(5170),o=n(8469),s=n(3789);t.exports=function(t){var e=r(this),n=s(t);return!(i(e)>n.size)&&!1!==o(e,(function(t){if(!n.includes(t))return!1}),!0)}},8527:function(t,e,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(o(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!i(e,t))return c(u,"normal",!1)}))}},8469:function(t,e,n){var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),u=r(a.keys),l=u(new s).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},4916:function(t,e,n){var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=r("Set");try{(new e)[t](i(0));try{return(new e)[t](i(-1)),!1}catch(n){return!0}}catch(o){return!1}}},5170:function(t,e,n){var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=s(t).getIterator(),i=o(e);return a(n,(function(t){u(e,t)?l(i,t):c(i,t)})),i}},4204:function(t,e,n){var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=s(t).getIterator(),c=o(e);return a(n,(function(t){i(c,t)})),c}},6119:function(t,e,n){var r=n(5745),i=n(3392),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},7629:function(t,e,n){var r=n(6395),i=n(4475),o=n(9433),s="__core-js_shared__",a=t.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.37.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},1548:function(t,e,n){var r=n(4475),i=n(9039),o=n(7388),s=n(7290),a=n(516),c=n(9088),u=r.structuredClone;t.exports=!!u&&!i((function(){if(a&&o>92||c&&o>94||s&&o>97)return!1;var t=new ArrayBuffer(8),e=u(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},4495:function(t,e,n){var r=n(7388),i=n(9039),o=n(4475),s=o.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(t,e,n){var r=n(1291),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},7696:function(t,e,n){var r=n(1291),i=n(8014),o=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new o("Wrong length or index");return n}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},2777:function(t,e,n){var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},9714:function(t,e,n){var r=n(9088);t.exports=function(t){try{if(r)return Function('return require("'+t+'")')()}catch(e){}}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){var r=n(4475),i=n(4901),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},8227:function(t,e,n){var r=n(4475),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(l[t]=a&&o(u,t)?u[t]:h("Symbol."+t)),l[t]}},6573:function(t,e,n){var r=n(3724),i=n(2106),o=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&i(s,"detached",{configurable:!0,get:function(){return o(this)}})},7936:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(t,e,n){var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},7642:function(t,e,n){var r=n(6518),i=n(3440),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:i})},8004:function(t,e,n){var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},3853:function(t,e,n){var r=n(6518),i=n(4449),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:i})},5876:function(t,e,n){var r=n(6518),i=n(3838),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:i})},2475:function(t,e,n){var r=n(6518),i=n(8527),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:i})},5024:function(t,e,n){var r=n(6518),i=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:i})},1698:function(t,e,n){var r=n(6518),i=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:i})},7467:function(t,e,n){var r=n(7628),i=n(4644),o=i.aTypedArray,s=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;s("toReversed",(function(){return r(o(this),a(this))}))},4732:function(t,e,n){var r=n(4644),i=n(9504),o=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&o(t);var e=a(this),n=s(c(e),e);return l(n,t)}))},9577:function(t,e,n){var r=n(9928),i=n(4644),o=n(1108),s=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=s(t),l=o(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},3375:function(t,e,n){n(7642)},9225:function(t,e,n){n(8004)},3972:function(t,e,n){n(3853)},9209:function(t,e,n){n(5876)},5714:function(t,e,n){n(2475)},7561:function(t,e,n){n(5024)},6197:function(t,e,n){n(1698)},4979:function(t,e,n){var r=n(6518),i=n(4475),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",v=o("Error"),y=o(m),_=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=new v(e);return i.name=m,a(r,"stack",s(1,d(i.stack,1))),l(r,this,_),r},b=_.prototype=y.prototype,w="stack"in new v(m),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!I&&!(I.writable&&I.configurable),S=w&&!T&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var A=o(m),C=A.prototype;if(C.constructor!==A)for(var k in g||a(C,"constructor",s(1,A)),f)if(c(f,k)){var O=f[k],R=O.s;c(A,R)||a(A,R,s(6,O.c))}},4603:function(t,e,n){var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),s(e,1);var i,a=o(t),c=o(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(t,e,n){var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=u(this,t);s(e,1);var i=o(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(t,e,n){var r=n(3724),i=n(9504),o=n(2106),s=URLSearchParams.prototype,a=i(s.forEach);r&&!("size"in s)&&o(s,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},3405:function(t,e,n){n.d(e,{MF:function(){return yt},j6:function(){return dt},xZ:function(){return pt},om:function(){return ft},Sx:function(){return bt},Wp:function(){return _t},KO:function(){return wt}});n(4114);var r=n(852),i=n(1363),o=n(4046);n(4979);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(I(this),e),E(h.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),s(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const I=t=>g.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],C=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return C.set(e,o),o}_((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const P="@firebase/app",N="0.10.6",x=new i.Vy("@firebase/app"),L="@firebase/app-compat",D="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",$="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",q="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/vertexai-preview",rt="@firebase/firestore-compat",it="firebase",ot="10.12.3",st="[DEFAULT]",at={[P]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[D]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[$]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[q]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[rt]:"fire-fst-compat",[nt]:"fire-vertex","fire-js":"fire-js",[it]:"fire-js-all"},ct=new Map,ut=new Map,lt=new Map;function ht(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(lt.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of ct.values())ht(n,t);for(const n of ut.values())ht(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},mt=new o.FA("app","Firebase",gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt=ot;function _t(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw mt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw mt.create("no-options");const a=ct.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw mt.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of lt.values())c.addComponent(r);const u=new vt(n,i,c);return ct.set(s,u),u}function bt(t=st){const e=ct.get(t);if(!e&&t===st&&(0,o.T9)())return _t();if(!e)throw mt.create("no-app",{appName:t});return e}function wt(t,e,n){var i;let o=null!==(i=at[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}ft(new r.uA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et="firebase-heartbeat-database",It=1,Tt="firebase-heartbeat-store";let St=null;function At(){return St||(St=T(Et,It,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tt)}catch(n){console.warn(n)}}}}).catch((t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})}))),St}async function Ct(t){try{const e=await At(),n=e.transaction(Tt),r=await n.objectStore(Tt).get(Ot(t));return await n.done,r}catch(e){if(e instanceof o.g)x.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});x.warn(t.message)}}}async function kt(t,e){try{const n=await At(),r=n.transaction(Tt,"readwrite"),i=r.objectStore(Tt);await i.put(e,Ot(t)),await r.done}catch(n){if(n instanceof o.g)x.warn(n.message);else{const t=mt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1024,Pt=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=xt();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Pt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=xt(),{heartbeatsToSend:n,unsentEntries:r}=Lt(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=Rt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Mt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Mt(t){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){ft(new r.uA("platform-logger",(t=>new O(t)),"PRIVATE")),ft(new r.uA("heartbeat",(t=>new Nt(t)),"PRIVATE")),wt(P,N,t),wt(P,N,"esm2017"),wt("fire-js","")}Ut("")},852:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6400:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",o="10.12.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,o,"app")},5860:function(t,e,n){n.d(e,{HF:function(){return Ie},xI:function(){return Hr},df:function(){return xn}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),o=n(1363);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function f(t,...e){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${t}`,...e)}function d(t,...e){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw _(t,...e)}function g(t,...e){return _(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},u()),{[e]:n}),o=new i.FA("auth","Firebase",r);return o.create(e,{appName:t.name})}function v(t){return m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function b(t,e,...n){if(!t)throw _(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function E(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,r,o={}){return D(t,o,(async()=>{let o={},s={};r&&("GET"===e?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),R.fetch()(U(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))}))}async function D(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),e);try{const e=new F(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const e=i.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw $(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw $(t,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(t,a,s);p(t,a)}}catch(o){if(o instanceof i.g)throw o;p(t,"network-request-failed",{message:String(o)})}}async function M(t,e,n,r,i={}){const o=await L(t,e,n,r,i);return"mfaPendingCredential"in o&&p(t,"multi-factor-auth-required",{_serverResponse:o}),o}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}function j(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return void 0!==t&&void 0!==t.enterprise}class B{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return j(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e){return L(t,"GET","/v2/recaptchaConfig",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e=!1){const n=(0,i.Ku)(t),r=await n.getIdToken(e),o=X(r);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:K(q(o.auth_time)),issuedAtTime:K(q(o.iat)),expirationTime:K(q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function X(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.u)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function Y(t){const e=X(t);return b(e,"internal-error"),b("undefined"!==typeof e.exp,"internal-error"),b("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.g&&Q(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t){var e;const n=t.auth,r=await t.getIdToken(),i=await J(t,W(n,{idToken:r}));b(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?it(o.providerUserInfo):[],a=rt(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new tt(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function nt(t){const e=(0,i.Ku)(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e){const n=await D(t,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,s=U(t,r,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function st(t,e){return L(t,"POST","/v2/accounts:revokeToken",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b("undefined"!==typeof t.idToken,"internal-error"),b("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Y(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){b(0!==t.length,"internal-error");const e=Y(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(b(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await ot(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new at;return n&&(b("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(b("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){b("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ut{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await J(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return G(this,t)}reload(){return nt(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const t=await this.getIdToken();return await J(this,z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:I}=e;b(y&&I,t,"internal-error");const T=at.fromJSON(this.name,I);b("string"===typeof y,t,"internal-error"),ct(l,t.name),ct(h,t.name),b("boolean"===typeof _,t,"internal-error"),b("boolean"===typeof w,t,"internal-error"),ct(f,t.name),ct(d,t.name),ct(p,t.name),ct(g,t.name),ct(m,t.name),ct(v,t.name);const S=new ut({uid:y,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new at;r.updateFromServerResponse(e);const i=new ut({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await et(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];b(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?it(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new at;s.updateFromIdToken(n);const a=new ut({uid:r.localId,auth:t,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new tt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map;function ht(t){E(t instanceof Function,"Expected a class definition");let e=lt.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ft.type="NONE";const dt=ft;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class gt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pt(this.userKey,r.apiKey,i),this.fullPersistenceKey=pt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new gt(ht(dt),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ht(dt);const o=pt(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=ut._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(c){}}))),new gt(i,t,n)):new gt(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Et(e))return"Blackberry";if(It(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||_t(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function vt(t=(0,i.ZQ)()){return/firefox\//i.test(t)}function yt(t=(0,i.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _t(t=(0,i.ZQ)()){return/crios\//i.test(t)}function bt(t=(0,i.ZQ)()){return/iemobile/i.test(t)}function wt(t=(0,i.ZQ)()){return/android/i.test(t)}function Et(t=(0,i.ZQ)()){return/blackberry/i.test(t)}function It(t=(0,i.ZQ)()){return/webos/i.test(t)}function Tt(t=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function St(t=(0,i.ZQ)()){var e;return Tt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function At(){return(0,i.lT)()&&10===document.documentMode}function Ct(t=(0,i.ZQ)()){return Tt(t)||wt(t)||It(t)||Et(t)||/windows phone/i.test(t)||bt(t)}function kt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e=[]){let n;switch(t){case"Browser":n=mt((0,i.ZQ)());break;case"Worker":n=`${mt((0,i.ZQ)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e={}){return L(t,"GET","/v2/passwordPolicy",x(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=6;class xt{constructor(t){var e,n,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=o.minPasswordLength)&&void 0!==e?e:Nt,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mt(this),this.idTokenSubscription=new Mt(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ht(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await gt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await W(this,{idToken:t}),n=await ut._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,r.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await et(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,r.xZ)(this.app))return Promise.reject(v(this));const e=t?(0,i.Ku)(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ht(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Pt(this),e=new xt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await st(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ht(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[ht(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{o=!0,i()}}{const n=t.addObserver(e);return()=>{o=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ot(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Dt(t){return(0,i.Ku)(t)}class Mt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.tD)((t=>this.observer=t))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jt(t){Ut=t}function Ft(t){return Ut.loadJS(t)}function $t(){return Ut.recaptchaEnterpriseScript}function Vt(){return Ut.gapiScript}function Bt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Ht="recaptcha-enterprise",zt="NO_RECAPTCHA";class Wt{constructor(t){this.type=Ht,this.auth=Dt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{H(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;V(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(zt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&V(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=$t();0!==e.length&&(e+=n),Ft(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Kt(t,e,n,r=!1){const i=new Wt(t);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Gt(t,e,n,r){var i;if(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kt(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Kt(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(t,e){const n=(0,r.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const o=n.initialize({options:e});return o}function Xt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Yt(t,e,n){const r=Dt(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Jt(e),{host:s,port:a}=Qt(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||te()}function Jt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qt(t){const e=Jt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Zt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Zt(e)}}}function Zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function te(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e){return L(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function oe(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends ee{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new se(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new se(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(t,e,"signInWithPassword",re);case"emailLink":return ie(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(t,n,"signUpPassword",ne);case"emailLink":return oe(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="http://localhost";class ue extends ee{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ue(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ue(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return ae(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ae(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ae(t,e)}buildRequest(){const t={requestUri:ce,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function he(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function fe(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(n.temporaryProof)throw $(t,"account-exists-with-different-credential",n);return n}const de={["USER_NOT_FOUND"]:"user-not-found"};async function pe(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,n),de)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends ee{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ge({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ge({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return he(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return fe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return pe(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ge({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ve(t){const e=(0,i.I9)((0,i.hp)(t))["link"],n=e?(0,i.I9)((0,i.hp)(e))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(t))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||e||t}class ye{constructor(t){var e,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=me(null!==(r=c["mode"])&&void 0!==r?r:null);b(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ve(t);try{return new ye(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(t,e){return se._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ye.parseLink(e);return b(n,"argument-error"),se._fromEmailAndCode(t,n.code,n.tenantId)}}_e.PROVIDER_ID="password",_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends be{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends we{constructor(){super("facebook.com")}static credential(t){return ue._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ee.credentialFromTaggedObject(t)}static credentialFromError(t){return Ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ee.credential(t.oauthAccessToken)}catch(e){return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ee.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends we{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ue._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ie.credential(e,n)}catch(r){return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com",Ie.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends we{constructor(){super("github.com")}static credential(t){return ue._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Te.credential(t.oauthAccessToken)}catch(e){return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com",Te.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends we{constructor(){super("twitter.com")}static credential(t,e){return ue._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Se.credential(e,n)}catch(r){return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com",Se.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ut._fromIdTokenResponse(t,n,r),o=Ce(n),s=new Ae({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Ce(n);return new Ae({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Ce(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke extends i.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ke.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ke(t,e,n,r)}}function Oe(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ke._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(t,e,n=!1){const r=await J(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ae._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(t,e,n=!1){const{auth:i}=t;if((0,r.xZ)(i.app))return Promise.reject(v(i));const o="reauthenticate";try{const r=await J(t,Oe(i,o,e,t),n);b(r.idToken,i,"internal-error");const s=X(r.idToken);b(s,i,"internal-error");const{sub:a}=s;return b(t.uid===a,i,"user-mismatch"),Ae._forOperation(t,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i="signIn",o=await Oe(t,i,e),s=await Ae._fromIdTokenResponse(t,i,o);return n||await t._updateCurrentUser(s.user),s}function xe(t,e,n,r){return(0,i.Ku)(t).onIdTokenChanged(e,n,r)}function Le(t,e,n){return(0,i.Ku)(t).beforeAuthStateChanged(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Me(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}function Ue(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function je(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}new WeakMap;const Fe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Fe,"1"),this.storage.removeItem(Fe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){const t=(0,i.ZQ)();return yt(t)||Tt(t)}const Be=1e3,He=10;class ze extends $e{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ve()&&kt(),this.fallbackToPolling=Ct(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);At()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,He):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Be)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ze.type="LOCAL";const We=ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends $e{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ke.type="SESSION";const Ge=Ke;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Xe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async t=>t(e.origin,i))),a=await qe(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.receivers=[];class Je{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Ye("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function Ze(t){Qe().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return"undefined"!==typeof Qe()["WorkerGlobalScope"]&&"function"===typeof Qe()["importScripts"]}async function en(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function nn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function rn(){return tn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="firebaseLocalStorageDb",sn=1,an="firebaseLocalStorage",cn="fbase_key";class un{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ln(t,e){return t.transaction([an],e?"readwrite":"readonly").objectStore(an)}function hn(){const t=indexedDB.deleteDatabase(on);return new un(t).toPromise()}function fn(){const t=indexedDB.open(on,sn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(an,{keyPath:cn})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(an)?e(n):(n.close(),await hn(),e(await fn()))}))}))}async function dn(t,e,n){const r=ln(t,!0).put({[cn]:e,value:n});return new un(r).toPromise()}async function pn(t,e){const n=ln(t,!1).get(e),r=await new un(n).toPromise();return void 0===r?null:r.value}function gn(t,e){const n=ln(t,!0).delete(e);return new un(n).toPromise()}const mn=800,vn=3;class yn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await fn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>vn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xe._getInstance(rn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await en(),!this.activeServiceWorker)return;this.sender=new Je(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&nn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fn();return await dn(t,Fe,"1"),await gn(t,Fe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>dn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>pn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>gn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ln(t,!1).getAll();return new un(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),mn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}yn.type="LOCAL";const _n=yn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",x(t,e))}function wn(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}function En(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Bt("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In="recaptcha";async function Tn(t,e,n){var r;const i=await n.verify();try{let o;if(b("string"===typeof i,t,"argument-error"),b(n.type===In,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){b("enroll"===e.type,t,"internal-error");const n=await De(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{b("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;b(n,t,"missing-multi-factor-info");const s=await bn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await le(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{constructor(t){this.providerId=Sn.PROVIDER_ID,this.auth=Dt(t)}verifyPhoneNumber(t,e){return Tn(this.auth,t,(0,i.Ku)(e))}static credential(t,e){return ge._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Sn.credentialFromTaggedObject(e)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ge._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function An(t,e){return e?ht(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.PROVIDER_ID="phone",Sn.PHONE_SIGN_IN_METHOD="phone";class Cn extends ee{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ae(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ae(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ae(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function kn(t){return Ne(t.auth,new Cn(t),t.bypassAuthState)}function On(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Pe(n,new Cn(t),t.bypassAuthState)}async function Rn(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Re(n,new Cn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kn;case"linkViaPopup":case"linkViaRedirect":return Rn;case"reauthViaPopup":case"reauthViaRedirect":return On;default:p(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new k(2e3,1e4);async function xn(t,e,n){if((0,r.xZ)(t.app))return Promise.reject(g(t,"operation-not-supported-in-this-environment"));const i=Dt(t);y(t,e,be);const o=An(i,n),s=new Ln(i,"signInViaPopup",e,o);return s.executeNotNull()}class Ln extends Pn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=Ye();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Nn.get())};t()}}Ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dn="pendingRedirect",Mn=new Map;class Un extends Pn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Mn.get(this.auth._key());if(!t){try{const e=await jn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Mn.set(this.auth._key(),t)}return this.bypassAuthState||Mn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function jn(t,e){const n=Vn(e),r=$n(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Fn(t,e){Mn.set(t._key(),e)}function $n(t){return ht(t._redirectPersistence)}function Vn(t){return pt(Dn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i=Dt(t),o=An(i,e),s=new Un(i,o,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=6e5;class zn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Gn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Kn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Hn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wn(t))}saveEventToCache(t){this.cachedEventUids.add(Wn(t)),this.lastProcessedEventTime=Date.now()}}function Wn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Kn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Gn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t,e={}){return L(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yn=/^https?/;async function Jn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qn(t);for(const r of e)try{if(Qn(r))return}catch(n){}p(t,"unauthorized-domain")}function Qn(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Yn.test(n))return!1;if(Xn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new k(3e4,6e4);function tr(){const t=Qe().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function er(t){return new Promise(((e,n)=>{var r,i,o;function s(){tr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tr(),n(g(t,"network-request-failed"))},timeout:Zn.get()})}if(null===(i=null===(r=Qe().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Qe().gapi)||void 0===o?void 0:o.load)){const e=Bt("iframefcb");return Qe()[e]=()=>{gapi.load?s():n(g(t,"network-request-failed"))},Ft(`${Vt()}?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw nr=null,t}))}let nr=null;function rr(t){return nr=nr||er(t),nr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new k(5e3,15e3),or="__/auth/iframe",sr="emulator/auth/iframe",ar={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ur(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,sr):`https://${t.config.authDomain}/${or}`,o={apiKey:e.apiKey,appName:t.name,v:r.MF},s=cr.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function lr(t){const e=await rr(t),n=Qe().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:ur(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ar,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),o=Qe().setTimeout((()=>{r(i)}),ir.get());function s(){Qe().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fr=500,dr=600,pr="_blank",gr="http://localhost";class mr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function vr(t,e,n,r=fr,o=dr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},hr),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=_t(l)?pr:n),vt(l)&&(e=e||gr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(l)&&"_self"!==c)return yr(e||"",c),new mr(null);const f=window.open(e||"",c,h);b(f,t,"popup-blocked");try{f.focus()}catch(d){}return new mr(f)}function yr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="__/auth/handler",br="emulator/auth/handler",wr=encodeURIComponent("fac");async function Er(t,e,n,o,s,a){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:r.MF,eventId:s};if(e instanceof be){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof we){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${wr}=${encodeURIComponent(l)}`:"";return`${Ir(t)}?${(0,i.Am)(u).slice(1)}${h}`}function Ir({config:t}){return t.emulator?O(t,br):`https://${t.authDomain}/${_r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="webStorageSupport";class Sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ge,this._completeRedirectFn=Bn,this._overrideRedirectResult=Fn}async _openPopup(t,e,n,r){var i;E(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Er(t,e,n,I(),r);return vr(t,o,Ye())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Er(t,e,n,I(),r);return Ze(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await lr(t),n=new zn(t);return e.register("authEvent",(e=>{b(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Tr,{type:Tr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Tr];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Jn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ct()||yt()||Tt()}}const Ar=Sr;class Cr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class kr extends Cr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new kr(t)}_finalizeEnroll(t,e,n){return Me(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return wn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Or{constructor(){}static assertion(t){return kr._fromCredential(t)}}Or.FACTOR_ID="phone";class Rr{static assertionForEnrollment(t,e){return Pr._fromSecret(t,e)}static assertionForSignIn(t,e){return Pr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;b("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await Ue(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Nr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Rr.FACTOR_ID="totp";class Pr extends Cr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Pr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Pr(e,t)}async _finalizeEnroll(t,e,n){return b("undefined"!==typeof this.secret,t,"argument-error"),je(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){b(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return En(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Nr{constructor(t,e,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Nr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(xr(t)||xr(e))&&(r=!0),r&&(xr(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),xr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function xr(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Lr="@firebase/auth",Dr="1.7.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jr(t){(0,r.om)(new a.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ot(t)},u=new Lt(r,i,o,c);return Xt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(t=>{const e=Dt(t.getProvider("auth").getImmediate());return(t=>new Mr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Lr,Dr,Ur(t)),(0,r.KO)(Lr,Dr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=300,$r=(0,i.XA)("authIdTokenMaxAge")||Fr;let Vr=null;const Br=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$r)return;const i=null===n||void 0===n?void 0:n.token;Vr!==i&&(Vr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hr(t=(0,r.Sx)()){const e=(0,r.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qt(t,{popupRedirectResolver:Ar,persistence:[_n,We,Ge]}),o=(0,i.XA)("authTokenSyncURL");if(o&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(o,location.origin);if(location.origin===t.origin){const e=Br(t.toString());Le(n,e,(()=>e(n.currentUser))),xe(n,(t=>e(t)))}}const s=(0,i.Tj)("auth");return s&&Yt(n,`http://${s}`),n}function zr(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}jt({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",zr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),jr("Browser")},7617:function(t,e,n){n.d(e,{aU:function(){return Ct}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var r,i=n(3405),o=n(852),s=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function s(t,e){var n=c;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function a(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},i.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var c={};function l(t){return-128<=t&&128>t?s(t,(function(t){return new a([0|t],0>t?-1:0)})):new a([0|t],0>t?-1:0)}function h(t){if(isNaN(t)||!isFinite(t))return d;if(0>t)return y(h(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new a(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return y(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(e,8)),r=d,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=h(Math.pow(e,o)),r=r.j(o).add(h(s))):(r=r.j(n),r=r.add(h(s)))}return r}var d=l(0),p=l(1),g=l(16777216);function m(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function y(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new a(n,~t.h).add(p)}function _(t,e){return t.add(y(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function w(t,e){this.g=t,this.h=e}function E(t,e){if(m(e))throw Error("division by zero");if(m(t))return new w(d,d);if(v(t))return e=E(y(t),e),new w(y(e.g),y(e.h));if(v(e))return e=E(t,y(e)),new w(y(e.g),e.h);if(30<t.g.length){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=p,r=e;0>=r.l(t);)n=I(n),r=I(r);var i=T(n,1),o=T(r,1);for(r=T(r,2),n=T(n,2);!m(r);){var s=o.add(r);0>=s.l(t)&&(i=i.add(n),o=s),r=T(r,1),n=T(n,1)}return e=_(t,i.j(e)),new w(i,e)}for(i=d;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=h(n),s=o.j(e);v(s)||0<s.l(t);)n-=r,o=h(n),s=o.j(e);m(o)&&(o=p),i=i.add(o),t=_(t,s)}return new w(i,t)}function I(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new a(n,t.h)}function T(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new a(i,t.h)}t=a.prototype,t.m=function(){if(v(this))return-y(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(m(this))return"0";if(v(this))return"-"+y(this).toString(t);for(var e=h(Math.pow(t,6)),n=this,r="";;){var i=E(n,e).g;n=_(n,i.j(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,m(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=_(this,t),v(t)?-1:m(t)?0:1},t.abs=function(){return v(this)?y(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.i(i))+(65535&t.i(i)),s=(o>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new a(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(m(this)||m(t))return d;if(v(this))return v(t)?y(this).j(y(t)):y(y(this).j(t));if(v(t))return y(this.j(y(t)));if(0>this.l(g)&&0>t.l(g))return h(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.i(r)>>>16,s=65535&this.i(r),c=t.i(i)>>>16,u=65535&t.i(i);n[2*r+2*i]+=s*u,b(n,2*r+2*i),n[2*r+2*i+1]+=o*u,b(n,2*r+2*i+1),n[2*r+2*i+1]+=s*c,b(n,2*r+2*i+1),n[2*r+2*i+2]+=o*c,b(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new a(n,0)},t.A=function(t){return E(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new a(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new a(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new a(n,this.h^t.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.Md5=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,r=u.Integer=a}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},h={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof l&&l];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var o=0;o<t.length-1;o++){var s=t[o];if(!(s in i))break t;i=i[s]}t=t[t.length-1],o=i[t],n=n(o),n!=o&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function o(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return o(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function f(t,e,n){return t.call.apply(t.bind,arguments)}function d(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:d,g.apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function y(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class b{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function w(t){return/^[\s\xa0]*$/.test(t)}function E(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function I(t){return I[" "](t),t}I[" "]=function(){};var T=-1!=E().indexOf("Gecko")&&!(-1!=E().toLowerCase().indexOf("webkit")&&-1==E().indexOf("Edge"))&&!(-1!=E().indexOf("Trident")||-1!=E().indexOf("MSIE"))&&-1==E().indexOf("Edge");function S(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function A(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function C(t){const e={};for(const n in t)e[n]=t[n];return e}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<k.length;e++)n=k[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function R(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function P(t){a.setTimeout((()=>{throw t}),0)}function N(){var t=j;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class x{constructor(){this.h=this.g=null}add(t,e){const n=L.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var L=new b((()=>new D),(t=>t.reset()));class D{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,j=new x,F=()=>{const t=a.Promise.resolve(void 0);M=()=>{t.then($)}};var $=()=>{for(var t;t=N();){try{t.h.call(t.g)}catch(n){P(n)}var e=L;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}U=!1};function V(){this.s=this.s,this.C=this.C}function B(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}V.prototype.s=!1,V.prototype.ma=function(){this.s||(this.s=!0,this.N())},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},B.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function z(t,e){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(T){t:{try{I(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:W[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&z.aa.h.call(this)}}v(z,B);var W={2:"touch",3:"pen",4:"mouse"};z.prototype.h=function(){z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),G=0;function q(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++G,this.da=this.fa=!1}function X(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Y(t){this.src=t,this.g={},this.h=0}function J(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=Array.prototype.indexOf.call(i,e,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(X(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Q(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.da&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}Y.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Q(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new q(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var Z="closure_lm_"+(1e6*Math.random()|0),tt={};function et(t,e,n,r,i){if(r&&r.once)return it(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)et(t,e[o],n,r,i);return null}return n=ht(n),t&&t[K]?t.K(e,n,u(r)?!!r.capture:!!r,i):nt(t,e,n,!1,r,i)}function nt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=u(i)?!!i.capture:!!i,a=ut(t);if(a||(t[Z]=a=new Y(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=rt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)H||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(at(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function rt(){function t(n){return e.call(t.src,t.listener,n)}const e=ct;return t}function it(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)it(t,e[o],n,r,i);return null}return n=ht(n),t&&t[K]?t.L(e,n,u(r)?!!r.capture:!!r,i):nt(t,e,n,!0,r,i)}function ot(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)ot(t,e[o],n,r,i);else r=u(r)?!!r.capture:!!r,n=ht(n),t&&t[K]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Q(o,n,r,i),-1<n&&(X(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=ut(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Q(e,n,r,i)),(n=-1<t?e[t]:null)&&st(n))}function st(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[K])J(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(at(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ut(e))?(J(n,t),0==n.h&&(n.src=null,e[Z]=null)):X(t)}}}function at(t){return t in tt?tt[t]:tt[t]="on"+t}function ct(t,e){if(t.da)t=!0;else{e=new z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&st(t),t=n.call(r,e)}return t}function ut(t){return t=t[Z],t instanceof Y?t:null}var lt="__closure_events_fn_"+(1e9*Math.random()>>>0);function ht(t){return"function"===typeof t?t:(t[lt]||(t[lt]=function(e){return t.handleEvent(e)}),t[lt])}function ft(){V.call(this),this.i=new Y(this),this.M=this,this.F=null}function dt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new B(e,t);else if(e instanceof B)e.target=e.target||t;else{var i=e;e=new B(r,t),O(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=pt(s,r,!0,e)&&i}if(s=e.g=t,i=pt(s,r,!0,e)&&i,i=pt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=pt(s,r,!1,e)&&i}function pt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.da&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.fa&&J(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function gt(t,e,n){if("function"===typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function mt(t){t.g=gt((()=>{t.g=null,t.i&&(t.i=!1,mt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}v(ft,V),ft.prototype[K]=!0,ft.prototype.removeEventListener=function(t,e,n,r){ot(this,t,e,n,r)},ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)X(n[r]);delete e.g[t],e.h--}}this.F=null},ft.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ft.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class vt extends V{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(t){V.call(this),this.h=t,this.g={}}v(yt,V);var _t=[];function bt(t){S(t.g,(function(t,e){this.g.hasOwnProperty(e)&&st(t)}),t),t.g={}}yt.prototype.N=function(){yt.aa.N.call(this),bt(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wt=a.JSON.stringify,Et=a.JSON.parse,It=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Tt(){}function St(t){return t.h||(t.h=t.i())}function At(){}Tt.prototype.h=null;var Ct={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kt(){B.call(this,"d")}function Ot(){B.call(this,"c")}v(kt,B),v(Ot,B);var Rt={},Pt=null;function Nt(){return Pt=Pt||new ft}function xt(t){B.call(this,Rt.La,t)}function Lt(t){const e=Nt();dt(e,new xt(e))}function Dt(t,e){B.call(this,Rt.STAT_EVENT,t),this.stat=e}function Mt(t){const e=Nt();dt(e,new Dt(e,t))}function Ut(t,e){B.call(this,Rt.Ma,t),this.size=e}function jt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Ft(){this.g=!0}function $t(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Vt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Bt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+zt(t,n)+(r?" "+r:"")}))}function Ht(t,e){t.info((function(){return"TIMEOUT: "+e}))}function zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return wt(n)}catch(a){return e}}Rt.La="serverreachability",v(xt,B),Rt.STAT_EVENT="statevent",v(Dt,B),Rt.Ma="timingevent",v(Ut,B),Ft.prototype.xa=function(){this.g=!1},Ft.prototype.info=function(){};var Wt,Kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function qt(){}function Xt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yt}function Yt(){this.i=null,this.g="",this.h=!1}v(qt,Tt),qt.prototype.g=function(){return new XMLHttpRequest},qt.prototype.i=function(){return{}},Wt=new qt;var Jt={},Qt={};function Zt(t,e,n){t.L=1,t.v=ke(Ie(e)),t.m=n,t.P=!0,te(t,null)}function te(t,e){t.F=Date.now(),re(t),t.A=Ie(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Ve(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Yt,t.g=Ln(t.j,n?e:null,!t.m),0<t.O&&(t.M=new vt(g(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(_t[0]=i.toString()),i=_t);for(var o=0;o<i.length;o++){var s=et(n,i[o],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}e=t.H?C(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Lt(),$t(t.i,t.u,t.A,t.l,t.R,t.m)}function ee(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function ne(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Qt:(n=Number(e.substring(n,r)),isNaN(n)?Jt:(r+=1,r+n>e.length?Qt:(e=e.slice(r,r+n),t.C=r+n,e)))}function re(t){t.S=Date.now()+t.I,ie(t,t.I)}function ie(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=jt(g(t.ba,t),e)}function oe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function se(t){0==t.j.G||t.J||On(t.j,t)}function ae(t){oe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,bt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ce(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||de(n.h,t)))if(!t.K&&de(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;kn(n),vn(n)}Sn(n),Mt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=jt(g(n.Za,n),6e3));if(1>=fe(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Pn(n,11)}else if((t.K||n.g==t)&&kn(n),!w(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(pe(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Ce(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var s=t;if(r.qa=xn(r,r.J?r.ia:null,r.W),s.K){ge(r.h,s);var a=s,c=r.L;c&&(a.I=c),a.B&&(oe(a),re(a)),r.g=s}else Tn(r);0<n.i.length&&_n(n)}else"stop"!=u[0]&&"close"!=u[0]||Pn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Pn(n,7):mn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Lt(4)}catch(u){}}Xt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==hn(t)?e.j():this.Y(t)},Xt.prototype.Y=function(t){try{if(t==this.g)t:{const f=hn(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||fn(this.g)))){this.J||4!=f||7==e||Lt(8==e||0>=d?3:2),oe(this);var n=this.g.Z();this.X=n;e:if(ee(this)){var r=fn(this.g);t="";var i=r.length,o=4==hn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ae(this),se(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,Vt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,Mt(12),ae(this),se(this);break t}Bt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ce(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<s.length;){if(t=ne(this,s),t==Qt){4==f&&(this.s=4,Mt(14),n=!1),Bt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Jt){this.s=4,Mt(15),Bt(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}Bt(this.i,this.l,t,null),ce(this,t)}if(ee(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=s.length||this.h.h||(this.s=1,Mt(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),An(h),h.M=!0,Mt(11))}}else Bt(this.i,this.l,s,"[Invalid Chunked Response]"),ae(this),se(this)}else Bt(this.i,this.l,s,null),ce(this,s);4==f&&ae(this),this.o&&!this.J&&(4==f?On(this.j,this):(this.o=!1,re(this)))}else dn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),ae(this),se(this)}}}catch(f){}},Xt.prototype.cancel=function(){this.J=!0,ae(this)},Xt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Ht(this.i,this.A),2!=this.L&&(Lt(),Mt(17)),ae(this),this.s=2,se(this)):ie(this,this.S-t)};var ue=class{constructor(t,e){this.g=t,this.map=e}};function le(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function he(t){return!!t.h||!!t.g&&t.g.size>=t.j}function fe(t){return t.h?1:t.g?t.g.size:0}function de(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function pe(t,e){t.g?t.g.add(e):t.h=e}function ge(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function me(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return y(t.i)}function ve(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function ye(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function _e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=ye(t),r=ve(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}le.prototype.cancel=function(){if(this.i=me(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function we(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ee(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Ee){this.h=t.h,Te(this,t.j),this.o=t.o,this.g=t.g,Se(this,t.s),this.l=t.l;var e=t.i,n=new Ue;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ae(this,n),this.m=t.m}else t&&(e=String(t).match(be))?(this.h=!1,Te(this,e[1]||"",!0),this.o=Oe(e[2]||""),this.g=Oe(e[3]||"",!0),Se(this,e[4]),this.l=Oe(e[5]||"",!0),Ae(this,e[6]||"",!0),this.m=Oe(e[7]||"")):(this.h=!1,this.i=new Ue(null,this.h))}function Ie(t){return new Ee(t)}function Te(t,e,n){t.j=n?Oe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Se(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Ae(t,e,n){e instanceof Ue?(t.i=e,He(t.i,t.h)):(n||(e=Re(e,De)),t.i=new Ue(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function ke(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Re(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Pe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ee.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Re(e,Ne,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Re(e,Ne,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Re(n,"/"==n.charAt(0)?Le:xe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Re(n,Me)),t.join("")};var Ne=/[#\/\?@]/g,xe=/[#\?:]/g,Le=/[#\?]/g,De=/[#\?@]/g,Me=/#/g;function Ue(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function je(t){t.g||(t.g=new Map,t.h=0,t.i&&we(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Fe(t,e){je(t),e=Be(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $e(t,e){return je(t),e=Be(t,e),t.g.has(e)}function Ve(t,e,n){Fe(t,e),0<n.length&&(t.i=null,t.g.set(Be(t,e),y(n)),t.h+=n.length)}function Be(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function He(t,e){e&&!t.j&&(je(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Fe(this,e),Ve(this,n,t))}),t)),t.j=e}function ze(t,e){const n=new Ft;if(a.Image){const r=new Image;r.onload=m(Ke,n,"TestLoadImage: loaded",!0,e,r),r.onerror=m(Ke,n,"TestLoadImage: error",!1,e,r),r.onabort=m(Ke,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=m(Ke,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function We(t,e){const n=new Ft,r=new AbortController,i=setTimeout((()=>{r.abort(),Ke(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?Ke(n,"TestPingServer: ok",!0,e):Ke(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),Ke(n,"TestPingServer: error",!1,e)}))}function Ke(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(o){}}function Ge(){this.g=new It}function qe(t,e,n){const r=n||"";try{_e(t,(function(t,n){let i=t;u(t)&&(i=wt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Xe(t){this.l=t.Ub||null,this.j=t.eb||!1}function Ye(t,e){ft.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Je(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Qe(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Ze(t)}function Ze(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function tn(t){let e="";return S(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function en(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ce(t,e,n))}function nn(t){ft.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Ue.prototype,t.add=function(t,e){je(this),this.i=null,t=Be(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){je(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){je(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){je(this);let e=[];if("string"===typeof t)$e(this,t)&&(e=e.concat(this.g.get(Be(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return je(this),this.i=null,t=Be(this,t),$e(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")},v(Xe,Tt),Xe.prototype.g=function(){return new Ye(this.l,this.j)},Xe.prototype.i=function(t){return function(){return t}}({}),v(Ye,ft),t=Ye.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Ze(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qe(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ze(this)),this.g&&(this.readyState=3,Ze(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Je(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qe(this):Ze(this),3==this.readyState&&Je(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Qe(this))},t.Qa=function(t){this.g&&(this.response=t,Qe(this))},t.ga=function(){this.g&&Qe(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ye.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),v(nn,ft);var rn=/^https?$/i,on=["POST","PUT"];function sn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,an(t),un(t)}function an(t){t.A||(t.A=!0,dt(t,"complete"),dt(t,"error"))}function cn(t){if(t.h&&"undefined"!=typeof s&&(!t.v[1]||4!=hn(t)||2!=t.Z()))if(t.u&&4==hn(t))gt(t.Ea,0,t);else if(dt(t,"readystatechange"),4==hn(t)){t.h=!1;try{const s=t.Z();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.D).match(be)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!rn.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var o=2<hn(t)?t.g.statusText:""}catch(c){o=""}t.l=o+" ["+t.Z()+"]",an(t)}}finally{un(t)}}}function un(t,e){if(t.g){ln(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||dt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function ln(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function hn(t){return t.g?t.g.readyState:0}function fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(p){return null}}function dn(t){const e={};t=(t.g&&2<=hn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(w(t[r]))continue;var n=R(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}A(e,(function(t){return t.join(", ")}))}function pn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gn(t){this.Aa=0,this.i=[],this.j=new Ft,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pn("baseRetryDelayMs",5e3,t),this.cb=pn("retryDelaySeedMs",1e4,t),this.Wa=pn("forwardChannelMaxRetries",2,t),this.wa=pn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new le(t&&t.concurrentRequestLimit),this.Da=new Ge,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function mn(t){if(yn(t),3==t.G){var e=t.U++,n=Ie(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),En(t,n),e=new Xt(t,t.j,e),e.L=2,e.v=ke(Ie(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ln(e.j,null),e.g.ea(e.v)),e.F=Date.now(),re(e)}Nn(t)}function vn(t){t.g&&(An(t),t.g.cancel(),t.g=null)}function yn(t){vn(t),t.u&&(a.clearTimeout(t.u),t.u=null),kn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function _n(t){if(!he(t.h)&&!t.s){t.s=!0;var e=t.Ga;M||F(),U||(M(),U=!0),j.add(e,t),t.B=0}}function bn(t,e){return!(fe(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=jt(g(t.Ga,t,e),Rn(t,t.B)),t.B++,!0))}function wn(t,e){var n;n=e?e.l:t.U++;const r=Ie(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.T),En(t,r),t.m&&t.o&&en(r,t.m,t.o),n=new Xt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=In(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),pe(t.h,n),Zt(n,r,e)}function En(t,e){t.H&&S(t.H,(function(t,n){Ce(e,n,t)})),t.l&&_e({},(function(t,n){Ce(e,n,t)}))}function In(t,e,n){n=Math.min(t.i.length,n);var r=t.l?g(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),s=!1;else try{qe(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Tn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;M||F(),U||(M(),U=!0),j.add(e,t),t.v=0}}function Sn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=jt(g(t.Fa,t),Rn(t,t.v)),t.v++,!0)}function An(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Cn(t){t.g=new Xt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Ie(t.qa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.T),Ce(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Ce(e,"TO",t.ja),Ce(e,"TYPE","xmlhttp"),En(t,e),t.m&&t.o&&en(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=ke(Ie(e)),n.m=null,n.P=!0,te(n,t)}function kn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function On(t,e){var n=null;if(t.g==e){kn(t),An(t),t.g=null;var r=2}else{if(!de(t.h,e))return;n=e.D,ge(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=Nt(),dt(r,new Ut(r,n)),_n(t)}else Tn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&bn(t,e)||2==r&&Sn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}function Rn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Pn(t,e){if(t.j.info("Error code "+e),2==e){var n=g(t.fb,t),r=t.Xa;const e=!r;r=new Ee(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Te(r,"https"),ke(r),e?ze(r.toString(),n):We(r.toString(),n)}else Mt(2);t.G=0,t.l&&t.l.sa(e),Nn(t),yn(t)}function Nn(t){if(t.G=0,t.ka=[],t.l){const e=me(t.h);0==e.length&&0==t.i.length||(_(t.ka,e),_(t.ka,t.i),t.h.i.length=0,y(t.i),t.i.length=0),t.l.ra()}}function xn(t,e,n){var r=n instanceof Ee?Ie(n):new Ee(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Se(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Ee(null);r&&Te(o,r),e&&(o.g=e),i&&Se(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&Ce(r,n,e),Ce(r,"VER",t.la),En(t,r),r}function Ln(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new nn(new Xe({eb:n})):new nn(t.pa),e.Ha(t.J),e}function Dn(){}function Mn(){}function Un(t,e){ft.call(this),this.g=new gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!w(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!w(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $n(this)}function jn(t){kt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Fn(){Ot.call(this),this.status=1}function $n(t){this.g=t}t=nn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wt.g(),this.v=this.o?St(this.o):St(Wt),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void sn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(on,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ln(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){sn(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),un(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),nn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cn(this):this.bb())},t.bb=function(){cn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Et(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=gn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){Mt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=xn(this,null,this.W),_n(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Xt(this,this.j,t);let o=this.o;if(this.S&&(o?(o=C(o),O(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=In(this,i,e),n=Ie(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),En(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(tn(o)))+"&"+e:this.m&&en(n,this.m,o)),pe(this.h,i),this.Ua&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.T=!0,Zt(i,n,null)):Zt(i,n,e),this.G=2}}else 3==this.G&&(t?wn(this,t):0==this.i.length||he(this.h)||wn(this))},t.Fa=function(){if(this.u=null,Cn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=jt(g(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),vn(this),Cn(this))},t.Za=function(){null!=this.C&&(this.C=null,vn(this),Sn(this),Mt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Dn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Mn.prototype.g=function(t,e){return new Un(t,e)},v(Un,ft),Un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Un.prototype.close=function(){mn(this.g)},Un.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=wt(t),t=n);e.i.push(new ue(e.Ya++,t)),3==e.G&&_n(e)},Un.prototype.N=function(){this.g.l=null,delete this.j,mn(this.g),delete this.g,Un.aa.N.call(this)},v(jn,kt),v(Fn,Ot),v($n,Dn),$n.prototype.ua=function(){dt(this.g,"a")},$n.prototype.ta=function(t){dt(this.g,new jn(t))},$n.prototype.sa=function(t){dt(this.g,new Fn)},$n.prototype.ra=function(){dt(this.g,"b")},Mn.prototype.createWebChannel=Mn.prototype.g,Un.prototype.send=Un.prototype.o,Un.prototype.open=Un.prototype.m,Un.prototype.close=Un.prototype.close,h.createWebChannelTransport=function(){return new Mn},h.getStatEventTarget=function(){return Nt()},h.Event=Rt,h.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,h.ErrorCode=Kt,Gt.COMPLETE="complete",h.EventType=Gt,At.EventType=Ct,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",ft.prototype.listen=ft.prototype.K,h.WebChannel=At,h.FetchXmlHttpFactory=Xe,nn.prototype.listenOnce=nn.prototype.L,nn.prototype.getLastError=nn.prototype.Ka,nn.prototype.getLastErrorCode=nn.prototype.Ba,nn.prototype.getStatus=nn.prototype.Z,nn.prototype.getResponseJson=nn.prototype.Oa,nn.prototype.getResponseText=nn.prototype.oa,nn.prototype.send=nn.prototype.ea,nn.prototype.setWithCredentials=nn.prototype.Ha,h.XhrIo=nn}).apply("undefined"!==typeof l?l:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const f="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let p="10.12.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=new s.Vy("@firebase/firestore");function m(t,...e){if(g.logLevel<=s.$b.DEBUG){const n=e.map(_);g.debug(`Firestore (${p}): ${t}`,...n)}}function v(t,...e){if(g.logLevel<=s.$b.ERROR){const n=e.map(_);g.error(`Firestore (${p}): ${t}`,...n)}}function y(t,...e){if(g.logLevel<=s.$b.WARN){const n=e.map(_);g.warn(`Firestore (${p}): ${t}`,...n)}}function _(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+t;throw v(e),new Error(e)}function w(t,e){t||b()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(d.UNAUTHENTICATED)))}shutdown(){}}class C{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class k{constructor(t){this.t=t,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new d(t)}}class O{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class R{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new O(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(d.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class P{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,m("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.R=t.token,new P(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=x(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&b(),void 0===n?n=t.length-e:n>t.length-e&&b(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends M{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new I(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new U(e)}static emptyPath(){return new U([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(t){this.path=t}static fromPath(t){return new j(U.fromString(t))}static fromName(t){return new j(U.fromString(t).popFirst(5))}static empty(){return new j(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new U(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}F.UNKNOWN_ID=-1;function $(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function B(t){return 0===t&&1/t==-1/0}V.oe=-1;const H=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],z=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],W=z;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t,e){this.comparator=t,this.root=e||q.EMPTY}insert(t,e){return new K(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new K(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new G(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new G(this.root,t,this.comparator,!1)}getReverseIterator(){return new G(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new G(this.root,t,this.comparator,!0)}}class G{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:q.RED,this.left=null!=r?r:q.EMPTY,this.right=null!=i?i:q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new q(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return q.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b();if(this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1,q.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new q(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t){this.comparator=t,this.data=new K(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Y(this.data.getIterator())}getIteratorFrom(t){return new Y(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof X))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new X(this.comparator);return e.data=t,e}}class Y{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new J("Invalid base64 string: "+t):t}}(t);return new Q(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Q(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const Z=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tt(t){if(w(!!t),"string"==typeof t){let e=0;const n=Z.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function nt(t){return"string"==typeof t?Q.fromBase64String(t):Q.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(t,e,n,r,i,o,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class it{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new it("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof it&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new K(j.comparator);new K(j.comparator);new K(j.comparator),new X(j.comparator);new X(D);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var st,at;(at=st||(st={}))[at.OK=0]="OK",at[at.CANCELLED=1]="CANCELLED",at[at.UNKNOWN=2]="UNKNOWN",at[at.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",at[at.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",at[at.NOT_FOUND=5]="NOT_FOUND",at[at.ALREADY_EXISTS=6]="ALREADY_EXISTS",at[at.PERMISSION_DENIED=7]="PERMISSION_DENIED",at[at.UNAUTHENTICATED=16]="UNAUTHENTICATED",at[at.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",at[at.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",at[at.ABORTED=10]="ABORTED",at[at.OUT_OF_RANGE=11]="OUT_OF_RANGE",at[at.UNIMPLEMENTED=12]="UNIMPLEMENTED",at[at.INTERNAL=13]="INTERNAL",at[at.UNAVAILABLE=14]="UNAVAILABLE",at[at.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new r([4294967295,4294967295],0);Error;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(et(t.integerValue));else if("doubleValue"in t){const n=et(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),B(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Et(e,20),"string"==typeof n&&(n=tt(n)),e.At(`${n.seconds||""}`),e.dt(n.nanos||0)}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(nt(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?ot(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):b()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const r of Object.keys(n))this.Rt(r,e),this.It(n[r],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const r of n)this.It(r,e)}gt(t,e){this.Et(e,37),j.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}ct.bt=new ct;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class ut{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ut(t,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(41943040,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);function lt(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(t,e,n=1e3,r=1.5,i=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=r,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),r=Math.max(0,e-n);r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Qo=Date.now(),t()))),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null)}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new ft(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dt(t,e){if(v("AsyncQueue",`${e}: ${t}`),$(t))return new I(E.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,gt;(gt=pt||(pt={})).J_="default",gt.Cache="cache";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=L.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{m("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(m("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=dt(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const yt=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e,n,r){if(!0===e&&!0===r)throw new I(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":b()}function wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bt(t);throw new I(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new I(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new I(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_t("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vt(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new I(E.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new I(E.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new I(E.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class It{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Et({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new I(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Et(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"firstParty":return new R(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new I(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=yt.get(t);e&&(m("ComponentProvider","Removing Datastore"),yt.delete(t),e.terminate())}(this),Promise.resolve()}}function Tt(t,e,n,r={}){var i;const o=(t=wt(t,It))._getSettings(),s=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&y("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=d.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new I(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(o)}t._authCredentials=new C(new S(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ht(this,"async_queue_retry"),this.hu=()=>{const t=lt();t&&m("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const t=lt();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=lt();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise((()=>{}));const e=new T;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.su.push(t),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!$(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o((()=>this.Tu()))}}Iu(t){const e=this.iu.then((()=>(this.uu=!0,t().catch((t=>{this.au=t,this.uu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw v("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.uu=!1,t))))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const r=ft.createAndSchedule(this,t,e,n,(t=>this.Eu(t)));return this._u.push(r),r}Pu(){this.au&&b()}verifyOperationInProgress(){}async du(){let t;do{t=this.iu,await t}while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then((()=>{this._u.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._u)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.du()}))}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class At extends It{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new St}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kt(this),this._firestoreClient.terminate()}}function Ct(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||"(default)",o=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.yU)("firestore");t&&Tt(o,...t)}return o}function kt(t){var e,n,r;const i=t._freezeSettings(),o=function(t,e,n,r){return new rt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,vt(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new mt(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){p=t}(i.MF),(0,i.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new At(new k(t.getProvider("auth-internal")),new N(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new I(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new it(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(f,"4.6.4",t),(0,i.KO)(f,"4.6.4","esm2017")}()},9218:function(t,e,n){n.d(e,{Uz:function(){return v}});n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),o=n(852);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="functions";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i.g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||e.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||n.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null===t||void 0===t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(t){if(this.appCheck){const e=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(t){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken(t);return{authToken:e,messagingToken:n,appCheckToken:r}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c="us-central1";class u{constructor(t,e,n,r,i=c,o){this.app=t,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new a(e,n,r),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(i);this.customDomain=t.origin,this.region=c}catch(s){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){const n=this.emulatorOrigin;return`${n}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function l(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const h="@firebase/functions",f="0.11.6",d="auth-internal",p="app-check-internal",g="messaging-internal";function m(t,e){const n=(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider(d),o=e.getProvider(g),s=e.getProvider(p);return new u(r,i,o,s,n,t)};(0,r.om)(new o.uA(s,n,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(h,f,e),(0,r.KO)(h,f,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t=(0,r.Sx)(),e=c){const n=(0,r.j6)((0,i.Ku)(t),s),o=n.getImmediate({identifier:e}),a=(0,i.yU)("functions");return a&&y(o,...a),o}function y(t,e,n){l((0,i.Ku)(t),e,n)}m(fetch.bind(self))},9005:function(t,e,n){n.d(e,{Ey:function(){return ft},nY:function(){return St}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var r=n(144),i=n(6768),o=!1;function s(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:{}}const u="function"===typeof Proxy,l="devtools-plugin:setup",h="plugin:settings:set";let f,d,p;function g(){var t;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,d=window.performance):"undefined"!==typeof globalThis&&(null===(t=globalThis.perf_hooks)||void 0===t?void 0:t.performance)?(f=!0,d=globalThis.perf_hooks.performance):f=!1),f}function m(){return g()?d.now():Date.now()}class v{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const s in t.settings){const e=t.settings[s];n[s]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(o){}i=t},now(){return m()}},e&&e.on(h,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function y(t,e){const n=t,r=c(),i=a(),o=u&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&o){const t=o?new v(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(l,t,e)}const _=t=>p=t,b=Symbol();function w(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var E;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(E||(E={}));const I="undefined"!==typeof window,T=!1,S=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function A(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function C(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){N(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function k(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function O(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const R="object"===typeof navigator?navigator:{userAgent:""},P=(()=>/Macintosh/.test(R.userAgent)&&/AppleWebKit/.test(R.userAgent)&&!/Safari/.test(R.userAgent))(),N=I?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!P?x:"msSaveOrOpenBlob"in R?L:D:()=>{};function x(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?k(r.href)?C(t,e,n):(r.target="_blank",O(r)):O(r)):(r.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){O(r)}),0))}function L(t,e="download",n){if("string"===typeof t)if(k(t))C(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){O(e)}))}else navigator.msSaveOrOpenBlob(A(t,n),e)}function D(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return C(t,e,n);const i="application/octet-stream"===t.type,o=/constructor/i.test(String(S.HTMLElement))||"safari"in S,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&o||P)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}function M(t,e){const n="🍍 "+t;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,e):"error"===e?console.error(n):"warn"===e?console.warn(n):console.log(n)}function U(t){return"_a"in t&&"install"in t}function j(){if(!("clipboard"in navigator))return M("Your browser doesn't support the Clipboard API","error"),!0}function F(t){return!!(t instanceof Error&&t.message.toLowerCase().includes("document is not focused"))&&(M('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function $(t){if(!j())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),M("Global state copied to clipboard.")}catch(e){if(F(e))return;M("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function V(t){if(!j())try{K(t,JSON.parse(await navigator.clipboard.readText())),M("Global state pasted from clipboard.")}catch(e){if(F(e))return;M("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function B(t){try{N(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){M("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let H;function z(){function t(){return new Promise(((t,e)=>{H.onchange=async()=>{const e=H.files;if(!e)return t(null);const n=e.item(0);return t(n?{text:await n.text(),file:n}:null)},H.oncancel=()=>t(null),H.onerror=e,H.click()}))}return H||(H=document.createElement("input"),H.type="file",H.accept=".json"),t}async function W(t){try{const e=z(),n=await e();if(!n)return;const{text:r,file:i}=n;K(t,JSON.parse(r)),M(`Global state imported from "${i.name}".`)}catch(e){M("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function K(t,e){for(const n in e){const r=t.state.value[n];r?Object.assign(r,e[n]):t.state.value[n]=e[n]}}function G(t){return{_custom:{display:t}}}const q="🍍 Pinia (root)",X="_root";function Y(t){return U(t)?{id:X,label:q}:{id:t.$id,label:t.$id}}function J(t){if(U(t)){const e=Array.from(t._s.keys()),n=t._s,r={state:e.map((e=>({editable:!0,key:e,value:t.state.value[e]}))),getters:e.filter((t=>n.get(t)._getters)).map((t=>{const e=n.get(t);return{editable:!1,key:t,value:e._getters.reduce(((t,n)=>(t[n]=e[n],t)),{})}}))};return r}const e={state:Object.keys(t.$state).map((e=>({editable:!0,key:e,value:t.$state[e]})))};return t._getters&&t._getters.length&&(e.getters=t._getters.map((e=>({editable:!1,key:e,value:t[e]})))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map((e=>({editable:!0,key:e,value:t[e]})))),e}function Q(t){return t?Array.isArray(t)?t.reduce(((t,e)=>(t.keys.push(e.key),t.operations.push(e.type),t.oldValue[e.key]=e.oldValue,t.newValue[e.key]=e.newValue,t)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:G(t.type),key:G(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function Z(t){switch(t){case E.direct:return"mutation";case E.patchFunction:return"$patch";case E.patchObject:return"$patch";default:return"unknown"}}let tt=!0;const et=[],nt="pinia:mutations",rt="pinia",{assign:it}=Object,ot=t=>"🍍 "+t;function st(t,e){y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:et,app:t},(n=>{"function"!==typeof n.now&&M("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:nt,label:"Pinia 🍍",color:15064968}),n.addInspector({id:rt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{$(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await V(e),n.sendInspectorTree(rt),n.sendInspectorState(rt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{B(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await W(e),n.sendInspectorTree(rt),n.sendInspectorState(rt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:t=>{const n=e._s.get(t);n?"function"!==typeof n.$reset?M(`Cannot reset "${t}" store because it doesn't have a "$reset" method implemented.`,"warn"):(n.$reset(),M(`Store "${t}" reset.`)):M(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((t,e)=>{const n=t.componentInstance&&t.componentInstance.proxy;if(n&&n._pStores){const e=t.componentInstance.proxy._pStores;Object.values(e).forEach((e=>{t.instanceData.state.push({type:ot(e.$id),key:"state",editable:!0,value:e._isOptionsAPI?{_custom:{value:(0,r.ux)(e.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>e.$reset()}]}}:Object.keys(e.$state).reduce(((t,n)=>(t[n]=e.$state[n],t)),{})}),e._getters&&e._getters.length&&t.instanceData.state.push({type:ot(e.$id),key:"getters",editable:!1,value:e._getters.reduce(((t,n)=>{try{t[n]=e[n]}catch(r){t[n]=r}return t}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===t&&n.inspectorId===rt){let t=[e];t=t.concat(Array.from(e._s.values())),n.rootNodes=(n.filter?t.filter((t=>"$id"in t?t.$id.toLowerCase().includes(n.filter.toLowerCase()):q.toLowerCase().includes(n.filter.toLowerCase()))):t).map(Y)}})),n.on.getInspectorState((n=>{if(n.app===t&&n.inspectorId===rt){const t=n.nodeId===X?e:e._s.get(n.nodeId);if(!t)return;t&&(n.state=J(t))}})),n.on.editInspectorState(((n,r)=>{if(n.app===t&&n.inspectorId===rt){const t=n.nodeId===X?e:e._s.get(n.nodeId);if(!t)return M(`store "${n.nodeId}" not found`,"error");const{path:r}=n;U(t)?r.unshift("state"):1===r.length&&t._customProperties.has(r[0])&&!(r[0]in t.$state)||r.unshift("$state"),tt=!1,n.set(t,r,n.state.value),tt=!0}})),n.on.editComponentState((t=>{if(t.type.startsWith("🍍")){const n=t.type.replace(/^🍍\s*/,""),r=e._s.get(n);if(!r)return M(`store "${n}" not found`,"error");const{path:i}=t;if("state"!==i[0])return M(`Invalid path for store "${n}":\n${i}\nOnly state can be modified.`);i[0]="$state",tt=!1,t.set(r,i,t.state.value),tt=!0}}))}))}function at(t,e){et.includes(ot(e.$id))||et.push(ot(e.$id)),y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:et,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(t=>{const n="function"===typeof t.now?t.now.bind(t):Date.now;e.$onAction((({after:r,onError:i,name:o,args:s})=>{const a=ut++;t.addTimelineEvent({layerId:nt,event:{time:n(),title:"🛫 "+o,subtitle:"start",data:{store:G(e.$id),action:G(o),args:s},groupId:a}}),r((r=>{ct=void 0,t.addTimelineEvent({layerId:nt,event:{time:n(),title:"🛬 "+o,subtitle:"end",data:{store:G(e.$id),action:G(o),args:s,result:r},groupId:a}})})),i((r=>{ct=void 0,t.addTimelineEvent({layerId:nt,event:{time:n(),logType:"error",title:"💥 "+o,subtitle:"end",data:{store:G(e.$id),action:G(o),args:s,error:r},groupId:a}})}))}),!0),e._customProperties.forEach((o=>{(0,i.wB)((()=>(0,r.R1)(e[o])),((e,r)=>{t.notifyComponentUpdate(),t.sendInspectorState(rt),tt&&t.addTimelineEvent({layerId:nt,event:{time:n(),title:"Change",subtitle:o,data:{newValue:e,oldValue:r},groupId:ct}})}),{deep:!0})})),e.$subscribe((({events:r,type:i},o)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(rt),!tt)return;const s={time:n(),title:Z(i),data:it({store:G(e.$id)},Q(r)),groupId:ct};i===E.patchFunction?s.subtitle="⤵️":i===E.patchObject?s.subtitle="🧩":r&&!Array.isArray(r)&&(s.subtitle=r.type),r&&(s.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),t.addTimelineEvent({layerId:nt,event:s})}),{detached:!0,flush:"sync"});const o=e._hotUpdate;e._hotUpdate=(0,r.IG)((r=>{o(r),t.addTimelineEvent({layerId:nt,event:{time:n(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:G(e.$id),info:G("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(rt),t.sendInspectorState(rt)}));const{$dispose:s}=e;e.$dispose=()=>{s(),t.notifyComponentUpdate(),t.sendInspectorTree(rt),t.sendInspectorState(rt),t.getSettings().logStoreChanges&&M(`Disposed "${e.$id}" store 🗑`)},t.notifyComponentUpdate(),t.sendInspectorTree(rt),t.sendInspectorState(rt),t.getSettings().logStoreChanges&&M(`"${e.$id}" store installed 🆕`)}))}let ct,ut=0;function lt(t,e,n){const i=e.reduce(((e,n)=>(e[n]=(0,r.ux)(t)[n],e)),{});for(const r in i)t[r]=function(){const e=ut,o=n?new Proxy(t,{get(...t){return ct=e,Reflect.get(...t)},set(...t){return ct=e,Reflect.set(...t)}}):t;ct=e;const s=i[r].apply(o,arguments);return ct=void 0,s}}function ht({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,lt(e,Object.keys(n.actions),e._isOptionsAPI);const i=e._hotUpdate;(0,r.ux)(e)._hotUpdate=function(t){i.apply(this,arguments),lt(e,Object.keys(t._hmrPayload.actions),!!e._isOptionsAPI)},at(t,e)}function ft(){const t=(0,r.uY)(!0),e=t.run((()=>(0,r.KR)({})));let n=[],i=[];const s=(0,r.IG)({install(t){_(s),o||(s._a=t,t.provide(b,s),t.config.globalProperties.$pinia=s,T&&st(t,s),i.forEach((t=>n.push(t))),i=[])},use(t){return this._a||o?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return T&&"undefined"!==typeof Proxy&&s.use(ht),s}const dt=()=>{};function pt(t,e,n,i=dt){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),i())};return!n&&(0,r.o5)()&&(0,r.jr)(o),o}function gt(t,...e){t.slice().forEach((t=>{t(...e)}))}const mt=t=>t();function vt(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],o=t[n];w(o)&&w(i)&&t.hasOwnProperty(n)&&!(0,r.i9)(i)&&!(0,r.g8)(i)?t[n]=vt(o,i):t[n]=i}return t}const yt=Symbol(),_t=new WeakMap;function bt(t){return o?!_t.has(t):!w(t)||!t.hasOwnProperty(yt)}const{assign:wt}=Object;function Et(t){return!(!(0,r.i9)(t)||!t.effect)}function It(t,e,n,a){const{state:c,actions:u,getters:l}=e,h=n.state.value[t];let f;function d(){h||(o?s(n.state.value,t,c?c():{}):n.state.value[t]=c?c():{});const e=(0,r.QW)(n.state.value[t]);return wt(e,u,Object.keys(l||{}).reduce(((e,s)=>(e[s]=(0,r.IG)((0,i.EW)((()=>{_(n);const e=n._s.get(t);if(!o||e._r)return l[s].call(e,e)}))),e)),{}))}return f=Tt(t,d,e,n,a,!0),f}function Tt(t,e,n={},a,c,u){let l;const h=wt({actions:{}},n);const f={deep:!0};let d,p;let g,m=[],v=[];const y=a.state.value[t];u||y||(o?s(a.state.value,t,{}):a.state.value[t]={});const b=(0,r.KR)({});let w;function I(e){let n;d=p=!1,"function"===typeof e?(e(a.state.value[t]),n={type:E.patchFunction,storeId:t,events:g}):(vt(a.state.value[t],e),n={type:E.patchObject,payload:e,storeId:t,events:g});const r=w=Symbol();(0,i.dY)().then((()=>{w===r&&(d=!0)})),p=!0,gt(m,n,a.state.value[t])}const S=u?function(){const{state:t}=n,e=t?t():{};this.$patch((t=>{wt(t,e)}))}:dt;function A(){l.stop(),m=[],v=[],a._s.delete(t)}function C(e,n){return function(){_(a);const r=Array.from(arguments),i=[],o=[];function s(t){i.push(t)}function c(t){o.push(t)}let u;gt(v,{args:r,name:e,store:R,after:s,onError:c});try{u=n.apply(this&&this.$id===t?this:R,r)}catch(l){throw gt(o,l),l}return u instanceof Promise?u.then((t=>(gt(i,t),t))).catch((t=>(gt(o,t),Promise.reject(t)))):(gt(i,u),u)}}const k=(0,r.IG)({actions:{},getters:{},state:[],hotState:b}),O={_p:a,$id:t,$onAction:pt.bind(null,v),$patch:I,$reset:S,$subscribe(e,n={}){const r=pt(m,e,n.detached,(()=>o())),o=l.run((()=>(0,i.wB)((()=>a.state.value[t]),(r=>{("sync"===n.flush?p:d)&&e({storeId:t,type:E.direct,events:g},r)}),wt({},f,n))));return r},$dispose:A};o&&(O._r=!1);const R=(0,r.Kh)(T?wt({_hmrPayload:k,_customProperties:(0,r.IG)(new Set)},O):O);a._s.set(t,R);const P=a._a&&a._a.runWithContext||mt,N=P((()=>a._e.run((()=>(l=(0,r.uY)()).run(e)))));for(const i in N){const e=N[i];if((0,r.i9)(e)&&!Et(e)||(0,r.g8)(e))u||(y&&bt(e)&&((0,r.i9)(e)?e.value=y[i]:vt(e,y[i])),o?s(a.state.value[t],i,e):a.state.value[t][i]=e);else if("function"===typeof e){const t=C(i,e);o?s(N,i,t):N[i]=t,h.actions[i]=e}else 0}if(o?Object.keys(N).forEach((t=>{s(R,t,N[t])})):(wt(R,N),wt((0,r.ux)(R),N)),Object.defineProperty(R,"$state",{get:()=>a.state.value[t],set:t=>{I((e=>{wt(e,t)}))}}),T){const t={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((e=>{Object.defineProperty(R,e,wt({value:R[e]},t))}))}return o&&(R._r=!0),a._p.forEach((t=>{if(T){const e=l.run((()=>t({store:R,app:a._a,pinia:a,options:h})));Object.keys(e||{}).forEach((t=>R._customProperties.add(t))),wt(R,e)}else wt(R,l.run((()=>t({store:R,app:a._a,pinia:a,options:h}))))})),y&&u&&n.hydrate&&n.hydrate(R.$state,y),d=!0,p=!0,R}function St(t,e,n){let r,o;const s="function"===typeof e;function a(t,n){const a=(0,i.PS)();t=t||(a?(0,i.WQ)(b,null):null),t&&_(t),t=p,t._s.has(r)||(s?Tt(r,e,o,t):It(r,o,t));const c=t._s.get(r);return c}return"string"===typeof t?(r=t,o=s?n:e):(o=t,r=t.id),a.$id=r,a}},1387:function(t,e,n){n.d(e,{LA:function(){return at},aE:function(){return re},rd:function(){return oe}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(144);
/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof document;function s(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/#/g,f=/&/g,d=/\//g,p=/=/g,g=/\?/g,m=/\+/g,v=/%5B/g,y=/%5D/g,_=/%5E/g,b=/%60/g,w=/%7B/g,E=/%7C/g,I=/%7D/g,T=/%20/g;function S(t){return encodeURI(""+t).replace(E,"|").replace(v,"[").replace(y,"]")}function A(t){return S(t).replace(w,"{").replace(I,"}").replace(_,"^")}function C(t){return S(t).replace(m,"%2B").replace(T,"+").replace(h,"%23").replace(f,"%26").replace(b,"`").replace(w,"{").replace(I,"}").replace(_,"^")}function k(t){return C(t).replace(p,"%3D")}function O(t){return S(t).replace(h,"%23").replace(g,"%3F")}function R(t){return null==t?"":O(t).replace(d,"%2F")}function P(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const N=/\/$/,x=t=>t.replace(N,"");function L(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),o=e.slice(c+1,a>-1?a:e.length),i=t(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=B(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:P(s)}}function D(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function M(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function U(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&j(e.matched[r],n.matched[i])&&F(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function j(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function F(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$(t[n],e[n]))return!1;return!0}function $(t,e){return l(t)?V(t,e):l(e)?V(e,t):t===e}function V(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function B(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var z,W;(function(t){t["pop"]="pop",t["push"]="push"})(z||(z={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(W||(W={}));function K(t){if(!t)if(o){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),x(t)}const G=/^[^#]+#/;function q(t,e){return t.replace(G,"#")+e}function X(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function J(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=X(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function Q(t,e){const n=history.state?history.state.position-e:-1;return n+t}const Z=new Map;function tt(t,e){Z.set(t,e)}function et(t){const e=Z.get(t);return Z.delete(t),e}let nt=()=>location.protocol+"//"+location.host;function rt(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),M(n,"")}const s=M(n,t);return s+r+i}function it(t,e,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=rt(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:z.pop,direction:l?l>0?W.forward:W.back:W.unknown})}))};function u(){s=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:Y()}),"")}function f(){for(const t of o)t();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function ot(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function st(t){const{history:e,location:n}=window,r={value:rt(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:nt()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=a({},e.state,ot(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function c(t,n){const s=a({},i.value,e.state,{forward:t,scroll:Y()});o(s.current,s,!0);const c=a({},ot(r.value,t,null),{position:s.position+1},n);o(t,c,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function at(t){t=K(t);const e=st(t),n=it(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:q.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ct(t){return"string"===typeof t||t&&"object"===typeof t}function ut(t){return"string"===typeof t||"symbol"===typeof t}const lt=Symbol("");var ht;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(ht||(ht={}));function ft(t,e){return a(new Error,{type:t,[lt]:!0},e)}function dt(t,e){return t instanceof Error&&lt in t&&(null==e||!!(t.type&e))}const pt="[^/]+?",gt={sensitive:!1,strict:!1,start:!0,end:!0},mt=/[.+*?^${}()[\]/\\]/g;function vt(t,e){const n=a({},gt,e),r=[];let i=n.start?"^":"";const o=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(mt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;o.push({name:t,repeatable:n,optional:c});const l=u||pt;if(l!==pt){s+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:o,repeatable:s,optional:a}=t,c=o in e?e[o]:"";if(l(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:u}}function yt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function _t(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=yt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(bt(r))return 1;if(bt(i))return-1}return i.length-r.length}function bt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wt={type:0,value:""},Et=/[a-zA-Z0-9_]/;function It(t){if(!t)return[[]];if("/"===t)return[[wt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:Et.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function Tt(t,e,n){const r=vt(It(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function St(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,c=Ct(t);c.aliasOf=r&&r.record;const h=Pt(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=Tt(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!Ot(d)&&s(t.name)),Lt(d)&&l(d),c.children){const t=c.children;for(let e=0;e<t.length;e++)o(t[e],d,r&&r.children[e])}r=r||d}return p?()=>{s(p)}:u}function s(t){if(ut(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function c(){return n}function l(t){const e=Nt(t,n);n.splice(e,0,t),t.record.name&&!Ot(t)&&r.set(t.record.name,t)}function h(t,e){let i,o,s,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw ft(1,{location:t});0,s=i.record.name,c=a(At(e.params,i.keys.filter((t=>!t.optional)).concat(i.parent?i.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&At(t.params,i.keys.map((t=>t.name)))),o=i.stringify(c)}else if(null!=t.path)o=t.path,i=n.find((t=>t.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw ft(1,{location:t,currentLocation:e});s=i.record.name,c=a({},e.params,t.params),o=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:o,params:c,matched:u,meta:Rt(u)}}function f(){n.length=0,r.clear()}return e=Pt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>o(t))),{addRoute:o,resolve:h,removeRoute:s,clearRoutes:f,getRoutes:c,getRecordMatcher:i}}function At(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ct(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Ot(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function Pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Nt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1,o=_t(t,e[i]);o<0?r=i:n=i+1}const i=xt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function xt(t){let e=t;while(e=e.parent)if(Lt(e)&&0===_t(t,e))return e}function Lt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Dt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(m," "),n=t.indexOf("="),o=P(n<0?t:t.slice(0,n)),s=n<0?null:P(t.slice(n+1));if(o in e){let t=e[o];l(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=k(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&C(t))):[r&&C(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Ut(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const jt=Symbol(""),Ft=Symbol(""),$t=Symbol(""),Vt=Symbol(""),Bt=Symbol("");function Ht(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,r,i,o=(t=>t())){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=t=>{!1===t?c(ft(4,{from:n,to:e})):t instanceof Error?c(t):ct(t)?c(ft(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),a())},l=o((()=>t.call(r&&r.instances[i],e,n,u)));let h=Promise.resolve(l);t.length<3&&(h=h.then(u)),h.catch((t=>c(t)))}))}function Wt(t,e,n,r,i=(t=>t())){const o=[];for(const a of t){0;for(const t in a.components){let c=a.components[t];if("beforeRouteEnter"===e||a.instances[t])if(Kt(c)){const s=c.__vccOpts||c,u=s[e];u&&o.push(zt(u,n,r,a,t,i))}else{let u=c();0,o.push((()=>u.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${a.path}"`));const c=s(o)?o.default:o;a.components[t]=c;const u=c.__vccOpts||c,l=u[e];return l&&zt(l,n,r,a,t,i)()}))))}}}return o}function Kt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Gt(t){const e=(0,r.WQ)($t),n=(0,r.WQ)(Vt);const o=(0,r.EW)((()=>{const n=(0,i.R1)(t.to);return e.resolve(n)})),s=(0,r.EW)((()=>{const{matched:t}=o.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(j.bind(null,r));if(s>-1)return s;const a=Qt(t[e-2]);return e>1&&Qt(r)===a&&i[i.length-1].path!==a?i.findIndex(j.bind(null,t[e-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Jt(n.params,o.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&F(n.params,o.value.params)));function l(n={}){return Yt(n)?e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.EW)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}const qt=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=(0,i.Kh)(Gt(t)),{options:o}=(0,r.WQ)($t),s=(0,r.EW)((()=>({[Zt(t.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Zt(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xt=qt;function Yt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Qt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zt=(t,e,n)=>null!=t?t:null!=e?e:n,te=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const o=(0,r.WQ)(Bt),s=(0,r.EW)((()=>t.route||o.value)),c=(0,r.WQ)(Ft,0),u=(0,r.EW)((()=>{let t=(0,i.R1)(c);const{matched:e}=s.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.EW)((()=>s.value.matched[u.value]));(0,r.Gt)(Ft,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(jt,l),(0,r.Gt)(Bt,s);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&j(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=s.value,o=t.name,c=l.value,u=c&&c.components[o];if(!u)return ee(n.default,{Component:u,route:i});const f=c.props[o],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(c.instances[o]=null)},g=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:h}));return ee(n.default,{Component:g,route:i})||g}}});function ee(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ne=te;function re(t){const e=St(t.routes,t),n=t.parseQuery||Dt,s=t.stringifyQuery||Mt,h=t.history;const f=Ht(),d=Ht(),p=Ht(),g=(0,i.IJ)(H);let m=H;o&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(t=>""+t)),y=c.bind(null,R),_=c.bind(null,P);function b(t,n){let r,i;return ut(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function w(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function E(){return e.getRoutes().map((t=>t.record))}function I(t){return!!e.getRecordMatcher(t)}function T(t,r){if(r=a({},r||g.value),"string"===typeof t){const i=L(n,t,r.path),o=e.resolve({path:i.path},r),s=h.createHref(i.fullPath);return a(i,o,{params:_(o.params),hash:P(i.hash),redirectedFrom:void 0,href:s})}let i;if(null!=t.path)i=a({},t,{path:L(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:y(e)}),r.params=y(r.params)}const o=e.resolve(i,r),c=t.hash||"";o.params=v(_(o.params));const u=D(s,a({},t,{hash:A(c),path:o.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:s===Mt?Ut(t.query):t.query||{}},o,{redirectedFrom:void 0,href:l})}function S(t){return"string"===typeof t?L(n,t,g.value.path):a({},t)}function C(t,e){if(m!==t)return ft(8,{from:e,to:t})}function k(t){return x(t)}function O(t){return k(a(S(t),{replace:!0}))}function N(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:null!=r.path?{}:t.params},r)}}function x(t,e){const n=m=T(t),r=g.value,i=t.state,o=t.force,c=!0===t.replace,u=N(n);if(u)return x(a(S(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!o&&U(s,r,n)&&(h=ft(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):F(l,r)).catch((t=>dt(t)?dt(t,2)?t:nt(t):X(t,l,r))).then((t=>{if(t){if(dt(t,2))return x(a({replace:c},S(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:o}),e||l)}else t=V(l,r,!0,c,i);return $(l,r,t),t}))}function M(t,e){const n=C(t,e);return n?Promise.reject(n):Promise.resolve()}function j(t){const e=st.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function F(t,e){let n;const[r,i,o]=ie(t,e);n=Wt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(zt(r,t,e))}));const s=M.bind(null,t,e);return n.push(s),ct(n).then((()=>{n=[];for(const r of f.list())n.push(zt(r,t,e));return n.push(s),ct(n)})).then((()=>{n=Wt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(zt(r,t,e))}));return n.push(s),ct(n)})).then((()=>{n=[];for(const r of o)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(zt(i,t,e));else n.push(zt(r.beforeEnter,t,e));return n.push(s),ct(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Wt(o,"beforeRouteEnter",t,e,j),n.push(s),ct(n)))).then((()=>{n=[];for(const r of d.list())n.push(zt(r,t,e));return n.push(s),ct(n)})).catch((t=>dt(t,8)?t:Promise.reject(t)))}function $(t,e,n){p.list().forEach((r=>j((()=>r(t,e,n)))))}function V(t,e,n,r,i){const s=C(t,e);if(s)return s;const c=e===H,u=o?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),g.value=t,rt(t,e,n,c),nt()}let B;function W(){B||(B=h.listen(((t,e,n)=>{if(!at.listening)return;const r=T(t),i=N(r);if(i)return void x(a(i,{replace:!0}),r).catch(u);m=r;const s=g.value;o&&tt(Q(s.fullPath,n.delta),Y()),F(r,s).catch((t=>dt(t,12)?t:dt(t,2)?(x(t.to,r).then((t=>{dt(t,20)&&!n.delta&&n.type===z.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),X(t,r,s)))).then((t=>{t=t||V(r,s,!1),t&&(n.delta&&!dt(t,8)?h.go(-n.delta,!1):n.type===z.pop&&dt(t,20)&&h.go(-1,!1)),$(r,s,t)})).catch(u)})))}let K,G=Ht(),q=Ht();function X(t,e,n){nt(t);const r=q.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function Z(){return K&&g.value!==H?Promise.resolve():new Promise(((t,e)=>{G.add([t,e])}))}function nt(t){return K||(K=!t,W(),G.list().forEach((([e,n])=>t?n(t):e())),G.reset()),t}function rt(e,n,i,s){const{scrollBehavior:a}=t;if(!o||!a)return Promise.resolve();const c=!i&&et(Q(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(e,n,c))).then((t=>t&&J(t))).catch((t=>X(t,e,n)))}const it=t=>h.go(t);let ot;const st=new Set,at={currentRoute:g,listening:!0,addRoute:b,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:E,resolve:T,options:t,push:k,replace:O,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:d.add,afterEach:p.add,onError:q.add,isReady:Z,install(t){const e=this;t.component("RouterLink",Xt),t.component("RouterView",ne),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),o&&!ot&&g.value===H&&(ot=!0,k(h.location).catch((t=>{0})));const n={};for(const i in H)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});t.provide($t,e),t.provide(Vt,(0,i.Gc)(n)),t.provide(Bt,g);const r=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(m=H,B&&B(),B=null,g.value=H,ot=!1,K=!1),r()}}};function ct(t){return t.reduce(((t,e)=>t.then((()=>j(e)))),Promise.resolve())}return at}function ie(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find((t=>j(t,o)))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find((t=>j(t,a)))||i.push(a))}return[n,r,i]}function oe(){return(0,r.WQ)($t)}}}]);
//# sourceMappingURL=chunk-vendors.37148964.js.map