'use strict';

var n,l$1,u$1,t$1,o$2,r$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v$1=Array.isArray;function h$1(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,t,o,null)}function d$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function g$2(n,l){if(null==l)return n.__?g$2(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?g$2(n):null}function m$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m$1(n)}}function w$2(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!x.__r++||o$2!==l$1.debounceRendering)&&((o$2=l$1.debounceRendering)||r$1)(x);}function x(){var n,l,u,i,o,r,e,c;for(t$1.sort(f$1);n=t$1.shift();)n.__d&&(l=t$1.length,i=void 0,o=void 0,e=(r=(u=n).__v).__e,(c=u.__P)&&(i=[],(o=h$1({},r)).__v=r.__v+1,L$1(c,r,o,u.__n,void 0!==c.ownerSVGElement,null!=r.__h?[e]:null,i,null==e?g$2(r):e,r.__h),M(i,r),r.__e!=e&&m$1(r)),t$1.length>l&&t$1.sort(f$1));x.__r=0;}function P(n,l,u,i,t,o,r,f,e,a){var h,p,y,_,b,m,w,x=i&&i.__k||s$1,P=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _||"function"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?d$1(null,_,null,null,_):v$1(_)?d$1(k$1,{children:_},null,null,null):_.__b>0?d$1(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(y=x[h])||y&&_.key==y.key&&_.type===y.type)x[h]=void 0;else for(p=0;p<P;p++){if((y=x[p])&&_.key==y.key&&_.type===y.type){x[p]=void 0;break}y=null;}L$1(n,_,y=y||c$1,t,o,r,f,e,a),b=_.__e,(p=_.ref)&&y.ref!=p&&(w||(w=[]),y.ref&&w.push(y.ref,null,_),w.push(p,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===y.__k?_.__d=e=C$1(_,e,n):e=$$1(n,_,y,x,b,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=g$2(y));}for(u.__e=m,h=P;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=A(i).nextSibling),q$1(x[h],x[h]));if(w)for(h=0;h<w.length;h++)O(w[h],w[++h],w[++h]);}function C$1(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?C$1(i,l,u):$$1(u,i,i,t,i.__e,l));return l}function S(n,l){return l=l||[],null==n||"boolean"==typeof n||(v$1(n)?n.some(function(n){S(n,l);}):l.push(n)),l}function $$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=A(u)))return i;return null}function H$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||T$2(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T$2(n,o,l[o],u[o],i);}function I$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T$2(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?z$1:j$1,o):n.removeEventListener(l,o?z$1:j$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$1(n){return this.l[n.type+!1](l$1.event?l$1.event(n):n)}function z$1(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L$1(n,u,i,t,o,r,f,e,c){var s,a,p,y,d,_,g,m,w,x,C,S,$,A,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof I){if(m=u.props,w=(s=I.contextType)&&t[s.__c],x=s?w?w.props.value:s.__:t,i.__c?g=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(m,x):(u.__c=a=new b$1(m,x),a.constructor=I,a.render=B$2),w&&w.sub(a),a.props=m,a.state||(a.state={}),a.context=x,a.__n=t,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h$1({},a.__s)),h$1(a.__s,I.getDerivedStateFromProps(m,a.__s))),y=a.props,d=a.state,a.__v=u,p)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else {if(null==I.getDerivedStateFromProps&&m!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(m,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(m,a.__s,x)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=m,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(m,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,d,_);});}if(a.context=x,a.props=m,a.__P=n,S=l$1.__r,$=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[];}else do{a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),a.state=a.__s;}while(a.__d&&++$<25);a.state=a.__s,null!=a.getChildContext&&(t=h$1(h$1({},t),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(y,d)),P(n,v$1(H=null!=s&&s.type===k$1&&null==s.key?s.props.children:s)?H:[H],u,i,t,o,r,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),g&&(a.__E=a.__=null),a.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function M(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function N(l,u,i,t,o,r,f,e){var s,a,h,y=i.props,d=u.props,_=u.type,k=0;if("svg"===_&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!_&&(_?s.localName===_:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===_)return document.createTextNode(d);l=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,e=!1;}if(null===_)y===d||e&&l.data===d||(l.data=d);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||c$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!e){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""));}if(H$1(l,d,y,o,e),h)u.__k=[];else if(P(l,v$1(k=u.props.children)?k:[k],u,i,t,o&&"foreignObject"!==_,r,f,r?r[0]:i.__k&&g$2(i,0),e),null!=r)for(k=r.length;k--;)null!=r[k]&&p(r[k]);e||("value"in d&&void 0!==(k=d.value)&&(k!==l.value||"progress"===_&&!k||"option"===_&&k!==y.value)&&T$2(l,"value",k,y.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==l.checked&&T$2(l,"checked",k,y.checked,!1));}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function q$1(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&q$1(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0;}function B$2(n,l,u){return this.constructor(n,u)}function D$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L$1(i,u=(!o&&t||i).__k=y(k$1,null,[u]),r||c$1,c$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),M(f,u);}n=s$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h$1({},this.state),"function"==typeof n&&(n=n(h$1({},u),this.props)),n&&h$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$2(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$2(this));},b$1.prototype.render=k$1,t$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0;

var t,r,u,i,o$1=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o$1||u),o$1=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o$1=1,s(B$1,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function _$1(n){return o$1=5,F$1(function(){return {current:n}},[])}function F$1(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T$1(n,t){return o$1=8,F$1(function(){return n},t)}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w$1),i.__h=[],t=0)),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$1(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B$1(n,t){return "function"==typeof t?t(n):t}

function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w(n){this.props=n;}(w.prototype=new b$1).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var T=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var I=l$1.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null;}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function V(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n);},(D.prototype=new b$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},D.prototype.componentWillUnmount=function(){this.t=[];},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&y(k$1,null,n.fallback);return i&&(i.__h=null),[y(k$1,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(V.prototype=new b$1).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=S(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};b$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b$1.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var K=l$1.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}l$1.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=l$1.vnode;l$1.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=S(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=S(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=B,rn&&rn(n);};var un=l$1.__r;l$1.__r=function(n){un&&un(n),n.__c;};var on=l$1.diffed;l$1.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

var _=0;function o(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return l$1.vnode&&l$1.vnode(i),i}

// Pannellum testing, https://github.com/mpetroff/pannellum
window.libpannellum=function(J,g,n){function sa(N,ma){function ta(a,b){return 1==a.level&&1!=b.level?-1:1==b.level&&1!=a.level?1:b.timestamp-a.timestamp}function ua(a,b){return a.level!=b.level?a.level-b.level:a.diff-b.diff}function O(a,b,d,c,h,k,f){this.vertices=a;this.side=b;this.level=d;this.x=c;this.y=h;a="object"===typeof k?k.tileKey:k;a=a.replace("%s",b).replace("%l0",d-1).replace("%l",d).replace("%x",c).replace("%y",h);this.path="object"===typeof k?k[a]:a;this.parentPath=f;}function Ra(A,b,
d,L,h,k){var f;var t=d.vertices;f=Da(A,t.slice(0,3));var u=Da(A,t.slice(3,6)),g=Da(A,t.slice(6,9)),t=Da(A,t.slice(9,12)),e=f[0]+u[0]+g[0]+t[0];-4==e||4==e?f=!1:(e=f[1]+u[1]+g[1]+t[1],f=-4==e||4==e?!1:4!=f[2]+u[2]+g[2]+t[2]);if(f){for(var e=[],n=[],q=2,r=[],v=0,t=0;4>t;t++)f=Ta(b,d.vertices.slice(3*t,3*(t+1))),e.push(f[0]*f[3]),n.push(f[1]*f[3]),f=f[2]*f[3],q=Math.min(q,f),r.push(1>=Math.abs(e[t])&&1>=Math.abs(n[t])&&0<f),v+=r[t];g=m.cubeResolution*Math.pow(2,d.level-m.maxLevel);f=Math.ceil(g*m.invTileResolution)-
1;u=g%m.tileResolution*2;g=2*g%m.tileResolution;0===g&&(g=m.tileResolution);0===u&&(u=2*m.tileResolution);if(1<d.level&&0<q&&0<v){for(t=q=0;4>t;t++)if(v=(t+1)%4,r[t]||r[v]){var p=(e[v]-e[t])*a.drawingBufferWidth/2,v=(n[v]-n[t])*a.drawingBufferHeight/2;g<m.tileResolution&&(d.x==f?p*=m.tileResolution/g:d.y==f&&(v*=m.tileResolution/g));u<=m.tileResolution&&(d.x==f&&(p*=2),d.y==f&&(v*=2));q=Math.max(q,Math.sqrt(p*p+v*v));}if(q<=m.tileResolution/2)return}e=d.vertices;t=e[0]+e[3]+e[6]+e[9];n=e[1]+e[4]+e[7]+
e[10];r=e[2]+e[5]+e[8]+e[11];q=Math.sqrt(t*t+n*n+r*r);r=Math.asin(r/q);t=Math.atan2(n,t)-h;t+=t>Math.PI?-2*Math.PI:t<-Math.PI?2*Math.PI:0;t=Math.abs(t);d.diff=Math.acos(Math.sin(L)*Math.sin(r)+Math.cos(L)*Math.cos(r)*Math.cos(t));t=!1;for(n=0;n<c.nodeCache.length;n++)if(c.nodeCache[n].path==d.path){t=!0;c.nodeCache[n].timestamp=c.nodeCacheTimestamp++;c.nodeCache[n].diff=d.diff;c.currentNodes.push(c.nodeCache[n]);break}t||(d.timestamp=c.nodeCacheTimestamp++,c.currentNodes.push(d),c.nodeCache.push(d));
if(d.level<m.maxLevel){r=0.5;if(d.x==f||d.y==f)r=1-m.tileResolution/(m.tileResolution+g);var t=1-r,n=[],p=v=q=r,w=t,B=t,D=t;if(g<m.tileResolution)if(d.x==f&&d.y!=f){if(B=v=0.5,"d"==d.side||"u"==d.side)D=p=0.5;}else d.x!=f&&d.y==f&&(w=q=0.5,"l"==d.side||"r"==d.side)&&(D=p=0.5);u<=m.tileResolution&&(d.x==f&&(q=0,w=1,"l"==d.side||"r"==d.side)&&(p=0,D=1),d.y==f&&(v=0,B=1,"d"==d.side||"u"==d.side)&&(p=0,D=1));g=new Float32Array([e[0],e[1],e[2],e[0]*q+e[3]*w,e[1]*r+e[4]*t,e[2]*p+e[5]*D,e[0]*q+e[6]*w,e[1]*
v+e[7]*B,e[2]*p+e[8]*D,e[0]*r+e[9]*t,e[1]*v+e[10]*B,e[2]*p+e[11]*D]);g=new O(g,d.side,d.level+1,2*d.x,2*d.y,m.fullpath,d.path);n.push(g);d.x==f&&u<=m.tileResolution||(g=new Float32Array([e[0]*q+e[3]*w,e[1]*r+e[4]*t,e[2]*p+e[5]*D,e[3],e[4],e[5],e[3]*r+e[6]*t,e[4]*v+e[7]*B,e[5]*p+e[8]*D,e[0]*q+e[6]*w,e[1]*v+e[7]*B,e[2]*p+e[8]*D]),g=new O(g,d.side,d.level+1,2*d.x+1,2*d.y,m.fullpath,d.path),n.push(g));d.x==f&&u<=m.tileResolution||d.y==f&&u<=m.tileResolution||(g=new Float32Array([e[0]*q+e[6]*w,e[1]*v+
e[7]*B,e[2]*p+e[8]*D,e[3]*r+e[6]*t,e[4]*v+e[7]*B,e[5]*p+e[8]*D,e[6],e[7],e[8],e[9]*q+e[6]*w,e[10]*r+e[7]*t,e[11]*p+e[8]*D]),g=new O(g,d.side,d.level+1,2*d.x+1,2*d.y+1,m.fullpath,d.path),n.push(g));d.y==f&&u<=m.tileResolution||(g=new Float32Array([e[0]*r+e[9]*t,e[1]*v+e[10]*B,e[2]*p+e[11]*D,e[0]*q+e[6]*w,e[1]*v+e[7]*B,e[2]*p+e[8]*D,e[9]*q+e[6]*w,e[10]*r+e[7]*t,e[11]*p+e[8]*D,e[9],e[10],e[11]]),g=new O(g,d.side,d.level+1,2*d.x,2*d.y+1,m.fullpath,d.path),n.push(g));for(v=0;v<n.length;v++)Ra(A,b,n[v],
L,h);}}}function Va(){return new Float32Array([-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1])}function na(a,b,d){var c=Math.sin(b);b=Math.cos(b);if("x"==d)return new Float32Array([a[0],b*a[1]+c*a[2],b*a[2]-c*a[1],a[3],b*a[4]+c*a[5],b*a[5]-c*a[4],a[6],b*a[7]+c*a[8],b*a[8]-c*a[7]]);if("y"==d)return new Float32Array([b*a[0]-c*a[2],a[1],b*a[2]+c*a[0],b*a[3]-c*a[5],a[4],
b*a[5]+c*a[3],b*a[6]-c*a[8],a[7],b*a[8]+c*a[6]]);if("z"==d)return new Float32Array([b*a[0]+c*a[1],b*a[1]-c*a[0],a[2],b*a[3]+c*a[4],b*a[4]-c*a[3],a[5],b*a[6]+c*a[7],b*a[7]-c*a[6],a[8]])}function Ia(a){return new Float32Array([a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]])}function va(A,b,d,c){A=2*Math.atan(Math.tan(A/2)*a.drawingBufferHeight/a.drawingBufferWidth);A=1/Math.tan(A/2);return new Float32Array([A/b,0,0,0,0,A,0,0,0,0,(c+d)/(d-c),2*c*d/(d-c),0,0,-1,
0])}function Ja(A,b){a.bindTexture(a.TEXTURE_2D,b);a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,A);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.bindTexture(a.TEXTURE_2D,null);}function Wa(a){wa(a,a.path+(m.extension?"."+m.extension:""),function(b,d){a.texture=b;a.textureLoaded=d?2:1;},ia.crossOrigin);}
function Ka(a,b){return new Float32Array([a[0]*b[0],a[0]*b[1],a[0]*b[2],0,a[5]*b[4],a[5]*b[5],a[5]*b[6],0,a[10]*b[8],a[10]*b[9],a[10]*b[10],a[11],-b[8],-b[9],-b[10],0])}function Ta(a,b){return new Float32Array([a[0]*b[0]+a[1]*b[1]+a[2]*b[2],a[4]*b[0]+a[5]*b[1]+a[6]*b[2],a[11]+a[8]*b[0]+a[9]*b[1]+a[10]*b[2],1/(a[12]*b[0]+a[13]*b[1]+a[14]*b[2])])}function Da(a,b){var d=Ta(a,b),c=d[0]*d[3],h=d[1]*d[3],d=d[2]*d[3],k=[0,0,0];-1>c&&(k[0]=-1);1<c&&(k[0]=1);-1>h&&(k[1]=-1);1<h&&(k[1]=1);if(-1>d||1<d)k[2]=
1;return k}function La(){console.log("Reducing canvas size due to error 1286!");F.width=Math.round(F.width/2);F.height=Math.round(F.height/2);}function oa(a,b){return Math.pow((Math.abs(a)-b)/b,2)*(0<a-b?1:-1)}function xa(a,b){for(var d=Math.floor(a.length/b),c=[],h=0;h<d;h++){for(var k=0,f=0;f<b;f++)k=83*k+da.indexOf(a[h*b+f]);c.push(k);}return c}function Ea(a,b,d){var c=Math.floor(Math.sqrt(a.length))-1,h=Array(c+1),k=Array(c+1);k[0]=0;h[0]=1;k[1]=Math.sin(d);h[1]=Math.cos(d);for(var f=2;f<=c;f++)k[f]=
2*k[f-1]*h[1]-k[f-2],h[f]=2*h[f-1]*h[1]-h[f-2];for(var g=d=0,f=1;f<=c+1;f++)g+=f;for(;0<=c;c--){var m=Math.floor((c+1)*c/2);d+=0!=m?a[m]*b[m-1]:a[m];for(f=1;f<=c;f++)d+=(a[++m]*h[f]+a[m+g-c-1]*k[f])*b[m-1];}return Math.round(d)}function Xa(a){if(1>G.length)for(var b=ea.length/32,c=0;32>c;c++){G.push([]);for(var g=0;g<b;g++)G[c].push(oa(xa(ea[c*b+g],1),41)*sa);}xa(a[0],1);var g=255*(oa(xa(a[1],1),41)+1)/2,h=xa(a.slice(2),2);a=[];for(var b=[],k=[],c=0;c<h.length;c++){var f,m=h[c];f=g;var n=Math.floor(m/
19)%19,r=m%19,m=oa(Math.floor(m/361),9)*f,n=oa(n,9)*f;f*=oa(r,9);f=[m,n,f];a.push(f[0]);b.push(f[1]);k.push(f[2]);}h=0.03125*Math.PI;f=[];for(c=31;0<=c;c--)for(g=0;64>g;g++)f.push(Ea(a,G[c],(g+0.5)*h)),f.push(Ea(b,G[c],(g+0.5)*h)),f.push(Ea(k,G[c],(g+0.5)*h)),f.push(255);return new ImageData(new Uint8ClampedArray(f),64,32)}var F;N&&(F=g.createElement("canvas"),F.style.width=F.style.height="100%",N.appendChild(F));var c,a,P,E,r,X,Q,Y,U,Ma,ja,m,K,fa,Z,ka,pa,ia,$="fbudlr".split(""),Na="frblud".split("");
ma&&(a=ma);this.init=function(A,b,d,L,h,k,f){function t(b){if(ca){var a=b*b*4,c=new Uint8ClampedArray(a),d=f.backgroundColor?f.backgroundColor:[0,0,0];d[0]*=255;d[1]*=255;d[2]*=255;for(var e=0;e<a;e++)c[e++]=d[0],c[e++]=d[1],c[e++]=d[2];b=new ImageData(c,b,b);for(u=0;6>u;u++)0==m[u].width&&(m[u]=b);}}b===n&&(b="equirectangular");if("equirectangular"!=b&&"cubemap"!=b&&"multires"!=b)throw console.log("Error: invalid image type specified!"),{type:"config error"};K=b;m=A;ia=f||{};if(c){P&&(a.detachShader(c,
P),a.deleteShader(P));E&&(a.detachShader(c,E),a.deleteShader(E));a.bindBuffer(a.ARRAY_BUFFER,null);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);c.texture&&a.deleteTexture(c.texture);if(c.nodeCache)for(A=0;A<c.nodeCache.length;A++)a.deleteTexture(c.nodeCache[A].texture);if(c.textureLoads)for(M=[];0<c.textureLoads.length;)c.textureLoads.shift()(!1);a.deleteProgram(c);c=n;}r&&(X&&(a.detachShader(r,X),a.deleteShader(X)),Q&&(a.detachShader(r,Q),a.deleteShader(Q)),a.deleteProgram(r),r=n);ja=n;var u,ca=!1,e;
if("cubemap"==K)for(u=0;6>u;u++)0<m[u].width?(e===n&&(e=m[u].width),e!=m[u].width&&console.log("Cube faces have inconsistent widths: "+e+" vs. "+m[u].width)):ca=!0;"cubemap"==K&&0!==(e&e-1)&&(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)||navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/)||navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/)||navigator.userAgent.match(/Trident.*rv[ :]*11\./))||(a||(a=F.getContext("experimental-webgl",{alpha:!1,
depth:!1})),a&&1286==a.getError()&&La());if(!a&&("multires"==K&&m.hasOwnProperty("fallbackPath")||"cubemap"==K)&&("WebkitAppearance"in g.documentElement.style||navigator.userAgent.match(/Trident.*rv[ :]*11\./)||-1!==navigator.appVersion.indexOf("MSIE 10"))){U&&N.removeChild(U);U=g.createElement("div");U.className="pnlm-world";d=m.basePath?m.basePath+m.fallbackPath:m.fallbackPath;var J=0;L=function(){var b=g.createElement("canvas");b.className="pnlm-face pnlm-"+Na[this.side]+"face";U.appendChild(b);
var a=b.getContext("2d");b.style.width=this.width+4+"px";b.style.height=this.height+4+"px";b.width=this.width+4;b.height=this.height+4;a.drawImage(this,2,2);var c=a.getImageData(0,0,b.width,b.height),d=c.data,e,f;for(e=2;e<b.width-2;e++)for(f=0;4>f;f++)d[4*(e+b.width)+f]=d[4*(e+2*b.width)+f],d[4*(e+b.width*(b.height-2))+f]=d[4*(e+b.width*(b.height-3))+f];for(e=2;e<b.height-2;e++)for(f=0;4>f;f++)d[4*(e*b.width+1)+f]=d[4*(e*b.width+2)+f],d[4*((e+1)*b.width-2)+f]=d[4*((e+1)*b.width-3)+f];for(f=0;4>f;f++)d[4*
(b.width+1)+f]=d[4*(2*b.width+2)+f],d[4*(2*b.width-2)+f]=d[4*(3*b.width-3)+f],d[4*(b.width*(b.height-2)+1)+f]=d[4*(b.width*(b.height-3)+2)+f],d[4*(b.width*(b.height-1)-2)+f]=d[4*(b.width*(b.height-2)-3)+f];for(e=1;e<b.width-1;e++)for(f=0;4>f;f++)d[4*e+f]=d[4*(e+b.width)+f],d[4*(e+b.width*(b.height-1))+f]=d[4*(e+b.width*(b.height-2))+f];for(e=1;e<b.height-1;e++)for(f=0;4>f;f++)d[e*b.width*4+f]=d[4*(e*b.width+1)+f],d[4*((e+1)*b.width-1)+f]=d[4*((e+1)*b.width-2)+f];for(f=0;4>f;f++)d[f]=d[4*(b.width+
1)+f],d[4*(b.width-1)+f]=d[4*(2*b.width-2)+f],d[b.width*(b.height-1)*4+f]=d[4*(b.width*(b.height-2)+1)+f],d[4*(b.width*b.height-1)+f]=d[4*(b.width*(b.height-1)-2)+f];a.putImageData(c,0,0);q.call(this);};var q=function(){0<this.width?(Y===n&&(Y=this.width),Y!=this.width&&console.log("Fallback faces have inconsistent widths: "+Y+" vs. "+this.width)):ca=!0;J++;6==J&&(Y=this.width,N.appendChild(U),k());},ca=!1;for(u=0;6>u;u++)h=new Image,h.crossOrigin=ia.crossOrigin?ia.crossOrigin:"anonymous",h.side=u,
h.onload=L,h.onerror=q,h.src="multires"==K?d.replace("%s",Na[u])+(m.extension?"."+m.extension:""):m[u].src;t(Y);}else {if(!a)throw console.log("Error: no WebGL support detected!"),{type:"no webgl"};"cubemap"==K&&t(e);m.fullpath=m.basePath?m.basePath+m.path:m.path;m.invTileResolution=1/m.tileResolution;A=Va();Ma=[];for(u=0;6>u;u++)Ma[u]=A.slice(12*u,12*u+12),A=Va();A=0;if("equirectangular"==K){if(A=a.getParameter(a.MAX_TEXTURE_SIZE),Math.max(m.width/2,m.height)>A)throw console.log("Error: The image is too big; it's "+
m.width+"px wide, but this device's maximum supported size is "+2*A+"px."),{type:"webgl size error",width:m.width,maxWidth:2*A};}else if("cubemap"==K&&e>a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE))throw console.log("Error: The image is too big; it's "+e+"px wide, but this device's maximum supported size is "+A+"px."),{type:"webgl size error",width:e,maxWidth:A};f!==n&&(e=isNaN(f.horizonPitch)?0:Number(f.horizonPitch),b=isNaN(f.horizonRoll)?0:Number(f.horizonRoll),0!=e||0!=b)&&(ja=[e,b]);var C=a.TEXTURE_2D;
a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight);a.getShaderPrecisionFormat&&(e=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT))&&1>e.precision&&(ya=ya.replace("highp","mediump"));P=a.createShader(a.VERTEX_SHADER);e=p;"multires"==K&&(e=w);a.shaderSource(P,e);a.compileShader(P);E=a.createShader(a.FRAGMENT_SHADER);e=ga;"cubemap"==K?(C=a.TEXTURE_CUBE_MAP,e=za):"multires"==K&&(e=kb);a.shaderSource(E,e);a.compileShader(E);c=a.createProgram();a.attachShader(c,P);a.attachShader(c,E);
a.linkProgram(c);a.getShaderParameter(P,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(P));a.getShaderParameter(E,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(E));a.getProgramParameter(c,a.LINK_STATUS)||console.log(a.getProgramInfoLog(c));a.useProgram(c);c.drawInProgress=!1;if(null!==f.backgroundColor){var v=f.backgroundColor?f.backgroundColor:[0,0,0];a.clearColor(v[0],v[1],v[2],1);a.clear(a.COLOR_BUFFER_BIT);}c.texCoordLocation=a.getAttribLocation(c,"a_texCoord");a.enableVertexAttribArray(c.texCoordLocation);
if("multires"!=K)fa||(fa=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,fa),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),a.STATIC_DRAW),a.vertexAttribPointer(c.texCoordLocation,2,a.FLOAT,!1,0,0),c.aspectRatio=a.getUniformLocation(c,"u_aspectRatio"),a.uniform1f(c.aspectRatio,a.drawingBufferWidth/a.drawingBufferHeight),c.psi=a.getUniformLocation(c,"u_psi"),c.theta=a.getUniformLocation(c,"u_theta"),c.f=a.getUniformLocation(c,"u_f"),c.h=a.getUniformLocation(c,"u_h"),c.v=
a.getUniformLocation(c,"u_v"),c.vo=a.getUniformLocation(c,"u_vo"),c.rot=a.getUniformLocation(c,"u_rot"),a.uniform1f(c.h,d/(2*Math.PI)),a.uniform1f(c.v,L/Math.PI),a.uniform1f(c.vo,h/Math.PI*2),"equirectangular"==K&&(c.backgroundColor=a.getUniformLocation(c,"u_backgroundColor"),a.uniform4fv(c.backgroundColor,v.concat([1]))),c.texture=a.createTexture(),a.bindTexture(C,c.texture),"cubemap"==K?(a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[1]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,
0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[3]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[4]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[5]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[0]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[2])):m.width<=A?(a.uniform1i(a.getUniformLocation(c,"u_splitImage"),0),a.texImage2D(C,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m)):(a.uniform1i(a.getUniformLocation(c,
"u_splitImage"),1),L=g.createElement("canvas"),L.width=m.width/2,L.height=m.height,L=L.getContext("2d"),L.drawImage(m,0,0),h=L.getImageData(0,0,m.width/2,m.height),a.texImage2D(C,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,h),c.texture2=a.createTexture(),a.activeTexture(a.TEXTURE1),a.bindTexture(C,c.texture2),a.uniform1i(a.getUniformLocation(c,"u_image1"),1),L.drawImage(m,-m.width/2,0),h=L.getImageData(0,0,m.width/2,m.height),a.texImage2D(C,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,h),a.texParameteri(C,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),
a.texParameteri(C,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(C,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(C,a.TEXTURE_MAG_FILTER,a.LINEAR),a.activeTexture(a.TEXTURE0)),"cubemap"!=K&&m.width&&m.width<=A&&d==2*Math.PI&&0==(m.width&m.width-1)?a.texParameteri(C,a.TEXTURE_WRAP_S,a.REPEAT):a.texParameteri(C,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(C,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(C,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(C,a.TEXTURE_MAG_FILTER,a.LINEAR);else if(c.vertPosLocation=
a.getAttribLocation(c,"a_vertCoord"),a.enableVertexAttribArray(c.vertPosLocation),Z||(Z=a.createBuffer()),ka||(ka=a.createBuffer()),pa||(pa=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,ka),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,1]),a.STATIC_DRAW),a.vertexAttribPointer(c.texCoordLocation,2,a.FLOAT,!1,0,0),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,pa),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,Z),a.vertexAttribPointer(c.vertPosLocation,
3,a.FLOAT,!1,0,0),c.perspUniform=a.getUniformLocation(c,"u_perspMatrix"),c.cubeUniform=a.getUniformLocation(c,"u_cubeMatrix"),c.currentNodes=[],c.nodeCache=[],c.nodeCacheTimestamp=0,c.textureLoads=[],m.shtHash||m.equirectangularThumbnail){X=a.createShader(a.VERTEX_SHADER);a.shaderSource(X,p);a.compileShader(X);Q=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(Q,ga);a.compileShader(Q);r=a.createProgram();a.attachShader(r,X);a.attachShader(r,Q);a.linkProgram(r);a.getShaderParameter(X,a.COMPILE_STATUS)||
console.log(a.getShaderInfoLog(X));a.getShaderParameter(Q,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(Q));a.getProgramParameter(r,a.LINK_STATUS)||console.log(a.getProgramInfoLog(r));a.useProgram(r);r.texCoordLocation=a.getAttribLocation(r,"a_texCoord");a.enableVertexAttribArray(r.texCoordLocation);fa||(fa=a.createBuffer());a.bindBuffer(a.ARRAY_BUFFER,fa);a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),a.STATIC_DRAW);a.vertexAttribPointer(r.texCoordLocation,2,a.FLOAT,
!1,0,0);r.aspectRatio=a.getUniformLocation(r,"u_aspectRatio");a.uniform1f(r.aspectRatio,a.drawingBufferWidth/a.drawingBufferHeight);r.psi=a.getUniformLocation(r,"u_psi");r.theta=a.getUniformLocation(r,"u_theta");r.f=a.getUniformLocation(r,"u_f");r.h=a.getUniformLocation(r,"u_h");r.v=a.getUniformLocation(r,"u_v");r.vo=a.getUniformLocation(r,"u_vo");r.rot=a.getUniformLocation(r,"u_rot");a.uniform1f(r.h,1);r.texture=a.createTexture();a.bindTexture(C,r.texture);var G,O,B,D=function(){a.useProgram(r);
a.uniform1i(a.getUniformLocation(r,"u_splitImage"),0);a.texImage2D(C,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,G);a.texParameteri(C,a.TEXTURE_WRAP_S,a.REPEAT);a.texParameteri(C,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(C,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(C,a.TEXTURE_MAG_FILTER,a.LINEAR);a.uniform1f(r.v,O);a.uniform1f(r.vo,B);a.useProgram(c);};m.shtHash&&(G=Xa(m.shtHash),O=(2+1/31)/2,B=1-(2+1/31)/2,D());if(m.equirectangularThumbnail)if("string"===typeof m.equirectangularThumbnail)if("data:"==
m.equirectangularThumbnail.slice(0,5))G=new Image,G.onload=function(){O=1;B=0;D();},G.src=m.equirectangularThumbnail;else throw console.log("Error: thumbnail string is not a data URI!"),{type:"config error"};else G=m.equirectangularThumbnail,O=1,B=0,D();a.bindBuffer(a.ARRAY_BUFFER,Z);a.vertexAttribPointer(c.vertPosLocation,3,a.FLOAT,!1,0,0);a.useProgram(c);}d=a.getError();if(0!==d)throw console.log("Error: Something went wrong with WebGL!",d),{type:"webgl error"};k();}};this.destroy=function(){N!==n&&
(F!==n&&N.contains(F)&&N.removeChild(F),U!==n&&N.contains(U)&&N.removeChild(U));if(a){var c=a.getExtension("WEBGL_lose_context");c&&c.loseContext();}};this.resize=function(){var g=J.devicePixelRatio||1;F.width=F.clientWidth*g;F.height=F.clientHeight*g;a&&(1286==a.getError()&&La(),a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),"multires"!=K?a.uniform1f(c.aspectRatio,F.clientWidth/F.clientHeight):m.shtHash&&(a.useProgram(r),a.uniform1f(r.aspectRatio,F.clientWidth/F.clientHeight),a.useProgram(c)));};
F&&this.resize();this.setPose=function(a,b){a=isNaN(a)?0:Number(a);b=isNaN(b)?0:Number(b);ja=0==a&&0==b?n:[a,b];};this.render=function(g,b,d,p){var h,k,f=0;p===n&&(p={});p.roll&&(f=p.roll);if(p.dynamic)var t=p.dynamic;if(ja!==n){h=ja[0];k=ja[1];var u=g,w=b,e=Math.cos(k)*Math.sin(g)*Math.sin(h)+Math.cos(g)*(Math.cos(h)*Math.cos(b)+Math.sin(k)*Math.sin(h)*Math.sin(b)),E=-Math.sin(g)*Math.sin(k)+Math.cos(g)*Math.cos(k)*Math.sin(b);g=Math.cos(k)*Math.cos(h)*Math.sin(g)+Math.cos(g)*(-Math.cos(b)*Math.sin(h)+
Math.cos(h)*Math.sin(k)*Math.sin(b));g=Math.asin(Math.max(Math.min(g,1),-1));b=Math.atan2(E,e);h=[Math.cos(u)*(Math.sin(k)*Math.sin(h)*Math.cos(w)-Math.cos(h)*Math.sin(w)),Math.cos(u)*Math.cos(k)*Math.cos(w),Math.cos(u)*(Math.cos(h)*Math.sin(k)*Math.cos(w)+Math.sin(w)*Math.sin(h))];k=[-Math.cos(g)*Math.sin(b),Math.cos(g)*Math.cos(b)];k=Math.acos(Math.max(Math.min((h[0]*k[0]+h[1]*k[1])/(Math.sqrt(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*Math.sqrt(k[0]*k[0]+k[1]*k[1])),1),-1));0>h[2]&&(k=2*Math.PI-k);f+=k;}p.hook&&
p.hook({gl:a,program:c,previewProgram:r,imageType:K,texCoordBuffer:fa,cubeVertBuf:Z,cubeVertTexCoordBuf:ka,cubeVertIndBuf:pa});if(a||"multires"!=K&&"cubemap"!=K){if("multires"!=K)h=2*Math.atan(Math.tan(0.5*d)/(a.drawingBufferWidth/a.drawingBufferHeight)),h=1/Math.tan(0.5*h),a.uniform1f(c.psi,b),a.uniform1f(c.theta,g),a.uniform1f(c.rot,f),a.uniform1f(c.f,h),!0===t&&"equirectangular"==K&&(a.bindTexture(a.TEXTURE_2D,c.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m)),a.drawArrays(a.TRIANGLES,
0,6);else {if((k=t="undefined"!==typeof m.shtHash||"undefined"!==typeof m.equirectangularThumbnail)&&6<=c.currentNodes.length)for(k=!1,h=0;6>h;h++)if(!c.currentNodes[h].textureLoaded){k=!0;break}k&&(a.useProgram(r),a.bindBuffer(a.ARRAY_BUFFER,fa),a.vertexAttribPointer(r.texCoordLocation,2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,r.texture),h=2*Math.atan(Math.tan(0.5*d)/(a.drawingBufferWidth/a.drawingBufferHeight)),h=1/Math.tan(0.5*h),a.uniform1f(r.psi,b),a.uniform1f(r.theta,g),a.uniform1f(r.rot,
f),a.uniform1f(r.f,h),a.drawArrays(a.TRIANGLES,0,6),a.bindBuffer(a.ARRAY_BUFFER,Z),a.vertexAttribPointer(c.vertPosLocation,3,a.FLOAT,!1,0,0),a.useProgram(c));u=va(d,a.drawingBufferWidth/a.drawingBufferHeight,0.1,100);h=va(d,a.drawingBufferWidth/a.drawingBufferHeight,-100,100);k=new Float32Array([1,0,0,0,1,0,0,0,1]);k=na(k,-f,"z");k=na(k,-g,"x");k=na(k,b,"y");k=new Float32Array([k[0],k[1],k[2],0,k[3],k[4],k[5],0,k[6],k[7],k[8],0,0,0,0,1]);a.uniformMatrix4fv(c.perspUniform,!1,Ia(u));a.uniformMatrix4fv(c.cubeUniform,
!1,Ia(k));f=Ka(u,k);h=Ka(h,k);c.nodeCache.sort(ta);if(200<c.nodeCache.length&&c.nodeCache.length>c.currentNodes.length+50)for(k=c.nodeCache.splice(200,c.nodeCache.length-200),u=0;u<k.length;u++)a.deleteTexture(k[u].texture);c.currentNodes=[];for(k=0;6>k;k++)u=new O(Ma[k],$[k],1,0,0,m.fullpath,null),Ra(f,h,u,g,b);c.currentNodes.sort(ua);for(h=M.length-1;0<=h;h--)-1===c.currentNodes.indexOf(M[h].node)&&(M[h].node.textureLoad=!1,M.splice(h,1));if(0===M.length)for(h=0;h<c.currentNodes.length;h++)if(g=
c.currentNodes[h],!g.texture&&!g.textureLoad){g.textureLoad=!0;setTimeout(Fa,0,g);break}0<c.textureLoads.length&&c.textureLoads.shift()(!0);g=!t;if(!c.drawInProgress){c.drawInProgress=!0;g&&a.clear(a.COLOR_BUFFER_BIT);g={};for(b=0;b<c.currentNodes.length;b++)g[c.currentNodes[b].parentPath]===n&&(g[c.currentNodes[b].parentPath]=0),g[c.currentNodes[b].parentPath]+=!(1<c.currentNodes[b].textureLoaded);for(b=0;b<c.currentNodes.length;b++)1<c.currentNodes[b].textureLoaded&&4!=g[c.currentNodes[b].path]&&
(a.bufferData(a.ARRAY_BUFFER,c.currentNodes[b].vertices,a.STATIC_DRAW),a.bindTexture(a.TEXTURE_2D,c.currentNodes[b].texture),a.drawElements(a.TRIANGLES,6,a.UNSIGNED_SHORT,0));c.drawInProgress=!1;}}if(p.returnImage!==n)return J.createImageBitmap&&"ImageBitmap"==p.returnImage?createImageBitmap(F):0==p.returnImage.toString().indexOf("image/")?F.toDataURL(p.returnImage):F.toDataURL("image/png")}else for(k=Y/2,p={f:"translate3d(-"+(k+2)+"px, -"+(k+2)+"px, -"+k+"px)",b:"translate3d("+(k+2)+"px, -"+(k+2)+
"px, "+k+"px) rotateX(180deg) rotateZ(180deg)",u:"translate3d(-"+(k+2)+"px, -"+k+"px, "+(k+2)+"px) rotateX(270deg)",d:"translate3d(-"+(k+2)+"px, "+k+"px, -"+(k+2)+"px) rotateX(90deg)",l:"translate3d(-"+k+"px, -"+(k+2)+"px, "+(k+2)+"px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",r:"translate3d("+k+"px, -"+(k+2)+"px, -"+(k+2)+"px) rotateY(270deg)"},h=1/Math.tan(d/2),d=h*F.clientWidth/2+"px",g="perspective("+d+") translateZ("+d+") rotateX("+g+"rad) rotateY("+b+"rad) ",b=Object.keys(p),h=0;6>h;h++)if(d=
U.querySelector(".pnlm-"+b[h]+"face"))d.style.webkitTransform=g+p[b[h]],d.style.transform=g+p[b[h]];};this.isLoading=function(){if(a&&"multires"==K)for(var g=0;g<c.currentNodes.length;g++)if(!c.currentNodes[g].textureLoaded)return !0;return !1};this.isBaseLoaded=function(){if(6<=c.currentNodes.length){for(var a=0;6>a;a++)if(!c.currentNodes[a].textureLoaded)return !1;return !0}return !1};this.getCanvas=function(){return F};var M=[],wa=function(){function g(){var b=this;this.texture=this.callback=null;this.image=
new Image;this.image.crossOrigin=h?h:"anonymous";var a=function(){c.textureLoads.push(function(a){a&&(0<b.image.width&&0<b.image.height?(Ja(b.image,b.texture),b.callback(b.texture,!0)):b.callback(b.texture,!1));M.length?(a=M.shift(),b.loadTexture(a.src,a.texture,a.callback)):m[d++]=b;});};this.image.addEventListener("load",a);this.image.addEventListener("error",a);}function b(b,a,d,c){this.node=b;this.src=a;this.texture=d;this.callback=c;}var d=4,m={},h;g.prototype.loadTexture=function(b,a,d){this.texture=
a;this.callback=d;this.image.src=b;};for(var k=0;k<d;k++)m[k]=new g;return function(c,g,k,n){h=n;n=a.createTexture();d?m[--d].loadTexture(g,n,k):M.push(new b(c,g,n,k));return n}}(),Fa;if(J.Worker&&J.createImageBitmap){var Ga=new Blob(["("+function(){self.onmessage=function(a){var b=a.data[0];fetch(b,{mode:"cors",credentials:"use-credentials"==a.data[1]?"include":"same-origin"}).then(function(b){return b.blob()}).then(function(b){return createImageBitmap(b)}).then(function(a){postMessage([b,!0,a],[a]);}).catch(function(){postMessage([b,
!1]);});};}.toString()+")()"],{type:"application/javascript"}),qa=new Worker(URL.createObjectURL(Ga)),Aa={};qa.onmessage=function(g){var b=g.data[0],d=g.data[1],m=g.data[2];c.textureLoads.push(function(c){var g,f=!1;d&&c&&(g=a.createTexture(),Ja(m,g),f=!0);c=Aa[b];delete Aa[b];c!==n&&(c.texture=g,c.textureLoaded=f?2:1);});};Fa=function(a){var b=(new URL(a.path+(m.extension?"."+m.extension:""),J.location)).href;Aa[b]=a;qa.postMessage([b,ia.crossOrigin]);};}else Fa=Wa;var da="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~",
ea="Bf[ff4fff|ffff0fffffBo@Ri5xag{Jmdf2+WiefCs@Ll7+Vi]Btag6[NmdgCv=Ho9;Qk;7zWiF_GsahDy:ErE?Mn$5+SkS_AyWiD#-CuJ[Iqp6;Nnx?7*SlE$*BxR@FtPA?Jq+%7:NnF*zAzn?CwIG@Ft-Y9?IrG+vA%w:AzGR?Cx*IF@EuI,nA+$*9%Gu:A#xCR?ByJ-VB-*wA+J**9*ZBv:9%L.QD.*aB.O.v9-MF+$8,O:MG:*OD;a:UB:IO:n9:Q:KJ;#IG=u-KE=Hs:MC?T:IO=wEL?#%FJ@K**FI@Y;HV=pDU?*sCS@S.uCR[m;Hp=VDq?*SCs@s.QCt[r:Iw=OEz?#IF$@#*HF%@u:K$;KI+=uEK-=*sCM:?w:M+:HO.;aCU;:%OCn?:z.Q..Ha;.ODv?-yFG$@,$-V;-Hw=+JH*?*lBP:?%%,n=+J*?%GQ:=#NCt?;y++v=%O:=zGt?:xHI,@-u,*z=zX?:wI+@,tEY??%r-$*;xt@,tP=?$qG%[:xn.#-:u$[%qp];xnN?[*sl.y:-r-?yn$^+sks_=yoi:v=*o?;uk;[zoi,_+skh:s@zl[+pi];tkg][xmhg;o@ti^xkg{$mhf|+oigf;f[ff_fff|ffff~fffff",
sa=3.317,G=[];}var p="attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}",w="attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}",ya="precision highp float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nuniform bool u_splitImage;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);",
za=ya+"float cosphi = cos(phi);\ngl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));\n}",ga=ya+"lambda = mod(lambda + PI, PI * 2.0) - PI;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = u_backgroundColor;\nelse {\nif(u_splitImage) {\nif(coord.x < 0.0)\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / u_h, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\nelse\ngl_FragColor = texture2D(u_image1, vec2((coord.x + u_h) / u_h - 1.0, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n} else {\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}\n}\n}",
kb="varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}";return {renderer:function(g,n,p){return new sa(g,n)}}}(window,document);
window.pannellum=function(J,g,n){function sa(p,w){function ya(){var a=g.createElement("div");a.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e";if(1==a.getElementsByTagName("i").length)N();else {Ba=b.hfov;Oa=b.pitch;var l;if("cubemap"==b.type){B=[];for(a=0;6>a;a++)B.push(new Image),B[a].crossOrigin=b.crossOrigin;s.load.lbox.style.display="block";s.load.lbar.style.display="none";}else if("multires"==b.type)a=JSON.parse(JSON.stringify(b.multiRes)),b.basePath&&b.multiRes.basePath&&!/^(?:[a-z]+:)?\/\//i.test(b.multiRes.basePath)?
a.basePath=b.basePath+b.multiRes.basePath:b.multiRes.basePath?a.basePath=b.multiRes.basePath:b.basePath&&(a.basePath=b.basePath),B=a;else if(!0===b.dynamic)B=b.panorama;else {if(b.panorama===n){N(b.strings.noPanoramaError);return}B=new Image;}if("cubemap"==b.type)for(var z=6,c=function(){z--;0===z&&ga();},d=function(a){var I=g.createElement("a");I.href=a.target.src;I.textContent=I.href;N(b.strings.fileAccessError.replace("%s",I.outerHTML));},a=0;a<B.length;a++)l=b.cubeMap[a],"null"==l?(console.log("Will use background instead of missing cubemap face "+
a),c()):(b.basePath&&!za(l)&&(l=b.basePath+l),B[a].onload=c,B[a].onerror=d,B[a].src=ea(l));else if("multires"==b.type)ga();else if(l="",b.basePath&&(l=b.basePath),!0!==b.dynamic){if(b.panorama instanceof Image||b.panorama instanceof ImageData||J.ImageBitmap&&b.panorama instanceof ImageBitmap){B=b.panorama;ga();return}l=za(b.panorama)?b.panorama:l+b.panorama;B.onload=function(){J.URL.revokeObjectURL(this.src);ga();};ba=new XMLHttpRequest;ba.onloadend=function(){if(200!=ba.status){var a=g.createElement("a");
a.href=l;a.textContent=a.href;N(b.strings.fileAccessError.replace("%s",a.outerHTML));}else sa(this.response,l),s.load.msg.innerHTML="";};ba.onprogress=function(b){if(b.lengthComputable){s.load.lbarFill.style.width=b.loaded/b.total*100+"%";var a,I;1E6<b.total?(a="MB",I=(b.loaded/1E6).toFixed(2),b=(b.total/1E6).toFixed(2)):1E3<b.total?(a="kB",I=(b.loaded/1E3).toFixed(1),b=(b.total/1E3).toFixed(1)):(a="B",I=b.loaded,b=b.total);s.load.msg.innerHTML=I+" / "+b+" "+a;}else s.load.lbox.style.display="block",
s.load.lbar.style.display="none";};try{ba.open("GET",l,!0);}catch(e){N(b.strings.malformedURLError);}ba.responseType="blob";ba.setRequestHeader("Accept","image/*,*/*;q=0.9");ba.withCredentials="use-credentials"===b.crossOrigin;ba.send();}b.draggable&&H.classList.add("pnlm-grab");H.classList.remove("pnlm-grabbing");Ca=!0===b.dynamicUpdate;b.dynamic&&Ca&&(B=b.panorama,ga());}}function za(b){return /^(?:[a-z]+:)?\/\//i.test(b)||"/"==b[0]||"blob:"==b.slice(0,5)}function ga(){d||(d=new libpannellum.renderer(la));
ab||(ab=!0,W.addEventListener("mousedown",Ra,!1),g.addEventListener("mousemove",Ia,!1),g.addEventListener("mouseup",va,!1),b.mouseZoom&&(H.addEventListener("mousewheel",oa,!1),H.addEventListener("DOMMouseScroll",oa,!1)),b.doubleClickZoom&&W.addEventListener("dblclick",Va,!1),p.addEventListener("mozfullscreenchange",$,!1),p.addEventListener("webkitfullscreenchange",$,!1),p.addEventListener("msfullscreenchange",$,!1),p.addEventListener("fullscreenchange",$,!1),"function"===typeof ResizeObserver?(Za=
new ResizeObserver(P),Za.observe(p)):(J.addEventListener("resize",P,!1),J.addEventListener("orientationchange",P,!1)),b.disableKeyboardCtrl||(p.addEventListener("keydown",xa,!1),p.addEventListener("keyup",Xa,!1),p.addEventListener("blur",Ea,!1)),g.addEventListener("mouseleave",va,!1),""===g.documentElement.style.pointerAction&&""===g.documentElement.style.touchAction?(W.addEventListener("pointerdown",Ta,!1),W.addEventListener("pointermove",Da,!1),W.addEventListener("pointerup",La,!1),W.addEventListener("pointerleave",
La,!1)):(W.addEventListener("touchstart",Ja,!1),W.addEventListener("touchmove",Wa,!1),W.addEventListener("touchend",Ka,!1)),J.navigator.pointerEnabled&&(p.style.touchAction="none"));U();M(b.hfov);setTimeout(function(){},500);}function sa(a,l){var z=new FileReader;z.addEventListener("loadend",function(){var c=z.result;if(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)){var d=c.indexOf("\u00ff\u00c2");(0>d||65536<d)&&N(b.strings.iOS8WebGLError);}d=c.indexOf("<x:xmpmeta");if(-1<d&&
!0!==b.ignoreGPanoXMP){var e=c.substring(d,c.indexOf("</x:xmpmeta>")+12),f=function(b){var a;0<=e.indexOf(b+'="')?(a=e.substring(e.indexOf(b+'="')+b.length+2),a=a.substring(0,a.indexOf('"'))):0<=e.indexOf(b+">")&&(a=e.substring(e.indexOf(b+">")+b.length+1),a=a.substring(0,a.indexOf("<")));return a!==n?Number(a):null},c=f("GPano:FullPanoWidthPixels"),d=f("GPano:CroppedAreaImageWidthPixels"),h=f("GPano:FullPanoHeightPixels"),k=f("GPano:CroppedAreaImageHeightPixels"),m=f("GPano:CroppedAreaTopPixels"),
q=f("GPano:PoseHeadingDegrees"),p=f("GPano:PosePitchDegrees"),r=f("GPano:PoseRollDegrees"),s=f("GPano:InitialViewPitchDegrees"),t=f("GPano:InitialViewHeadingDegrees"),f=f("GPano:InitialHorizontalFOVDegrees");null!==c&&null!==d&&null!==h&&null!==k&&null!==m&&(0>S.indexOf("haov")&&(b.haov=d/c*360),0>S.indexOf("vaov")&&(b.vaov=k/h*180),0>S.indexOf("vOffset")&&(b.vOffset=-180*((m+k/2)/h-0.5)),null!==q&&0>S.indexOf("northOffset")&&(b.northOffset=q,!1!==b.compass&&(b.compass=!0)),null!==p&&null!==r&&(0>
S.indexOf("horizonPitch")&&(b.horizonPitch=p),0>S.indexOf("horizonRoll")&&(b.horizonRoll=r)),null!=s&&0>S.indexOf("pitch")&&(b.pitch=s),null!=t&&0>S.indexOf("yaw")&&(b.yaw=t),null!=f&&0>S.indexOf("hfov")&&(b.hfov=f));}B.src=J.URL.createObjectURL(a);B.onerror=function(){(function(){return J.fetch?J.fetch(g.location.href).then(function(b){return b.headers.get("Content-Security-Policy")}):null})().then(function(a){a&&a.split(";").find(function(b){if(b=b.match(/img-src(.*)/))return !b[1].includes("blob")})&&
(console.log("CSP blocks blobs; reverting to URL."),B.crossOrigin=b.crossOrigin,B.src=l);});};});z.readAsBinaryString!==n?z.readAsBinaryString(a):z.readAsText(a);}function N(a){a===n&&(a=b.strings.genericWebGLError);s.errorMsg.innerHTML="<p>"+a+"</p>";x.load.style.display="none";s.load.box.style.display="none";s.errorMsg.style.display="table";Ua=!0;v=n;la.style.display="none";G("error",a);}function ma(b){s.interactionMsg.style.opacity=1;s.interactionMsg.innerHTML="<p>"+b+"</p>";s.interactionMsg.style.display=
"table";G("messageshown");clearTimeout(s.interactionMsg.timeout);s.interactionMsg.removeEventListener("transitionend",ta);s.interactionMsg.timeout=setTimeout(function(){s.interactionMsg.style.opacity=0;s.interactionMsg.addEventListener("transitionend",ta);},2E3);}function ta(){s.interactionMsg.style.opacity=0;s.interactionMsg.style.display="none";G("messagecleared");}function ua(b){var a=O(b);ha.style.left=a.x+"px";ha.style.top=a.y+"px";clearTimeout(ua.t1);clearTimeout(ua.t2);ha.style.display="block";
ha.style.opacity=1;ua.t1=setTimeout(function(){ha.style.opacity=0;},2E3);ua.t2=setTimeout(function(){ha.style.display="none";},2500);b.preventDefault();}function O(b){var a=p.getBoundingClientRect(),z={};z.x=(b.clientX||b.pageX)-a.left;z.y=(b.clientY||b.pageY)-a.top;return z}function Ra(a){a.preventDefault();p.focus();if(v&&b.draggable&&!b.draggingHotSpot){var l=O(a);if(b.hotSpotDebug){var z=na(a);console.log("Pitch: "+z[0]+", Yaw: "+z[1]+", Center Pitch: "+b.pitch+", Center Yaw: "+b.yaw+", HFOV: "+
b.hfov);}wa();qa();b.roll=0;y.hfov=0;k=!0;f=Date.now();t=l.x;u=l.y;e=b.yaw;Sa=b.pitch;H.classList.add("pnlm-grabbing");H.classList.remove("pnlm-grab");G("mousedown",a);E();}}function Va(a){b.minHfov===b.hfov?A.setHfov(Ba,1E3):(a=na(a),A.lookAt(a[0],a[1],b.minHfov,1E3));}function na(a){var l=O(a);a=d.getCanvas();var z=a.clientWidth,c=a.clientHeight;a=l.x/z*2-1;var c=(1-l.y/c*2)*c/z,g=1/Math.tan(b.hfov*Math.PI/360),f=Math.sin(b.pitch*Math.PI/180),e=Math.cos(b.pitch*Math.PI/180),l=g*e-c*f,z=Math.sqrt(a*
a+l*l),c=180*Math.atan((c*e+g*f)/z)/Math.PI;a=180*Math.atan2(a/z,l/z)/Math.PI+b.yaw;-180>a&&(a+=360);180<a&&(a-=360);return [c,a]}function Ia(a){if(h)m(h,a);else if(k&&v){f=Date.now();var l=d.getCanvas(),z=l.clientWidth,l=l.clientHeight;a=O(a);var c=180*(Math.atan(t/z*2-1)-Math.atan(a.x/z*2-1))/Math.PI*b.hfov/90+e;y.yaw=(c-b.yaw)%360*0.2;b.yaw=c;z=360*Math.atan(Math.tan(b.hfov/360*Math.PI)*l/z)/Math.PI;z=180*(Math.atan(a.y/l*2-1)-Math.atan(u/l*2-1))/Math.PI*z/90+Sa;y.pitch=0.2*(z-b.pitch);b.pitch=
z;}}function va(b){h&&h.dragHandlerFunc&&h.dragHandlerFunc(b,h.dragHandlerArgs);h=null;k&&(k=!1,15<Date.now()-f&&(y.pitch=y.yaw=0),H.classList.add("pnlm-grab"),H.classList.remove("pnlm-grabbing"),f=Date.now(),G("mouseup",b));}function Ja(a){if(v&&b.draggable&&!h){wa();qa();b.roll=0;y.hfov=0;var l=O(a.targetTouches[0]);t=l.x;u=l.y;if(2==a.targetTouches.length){var z=O(a.targetTouches[1]);t+=0.5*(z.x-l.x);u+=0.5*(z.y-l.y);ca=Math.sqrt((l.x-z.x)*(l.x-z.x)+(l.y-z.y)*(l.y-z.y));}k=!0;f=Date.now();e=b.yaw;
Sa=b.pitch;G("touchstart",a);E();}}function Wa(a){if(b.draggable&&(b.dragConfirm||a.preventDefault(),v&&(f=Date.now()),k&&v)){var l=O(a.targetTouches[0]),z=l.x,c=l.y;if(2==a.targetTouches.length&&-1!=ca){var d=O(a.targetTouches[1]),z=z+0.5*(d.x-l.x),c=c+0.5*(d.y-l.y),l=Math.sqrt((l.x-d.x)*(l.x-d.x)+(l.y-d.y)*(l.y-d.y));M(b.hfov+0.1*(ca-l));ca=l;}l=b.hfov/360*b.touchPanSpeedCoeffFactor;C||"both"!=b.dragConfirm&&"yaw"!=b.dragConfirm||2==a.targetTouches.length?(z=(t-z)*l+e,y.yaw=(z-b.yaw)%360*0.2,b.yaw=
z):t!=z&&("yaw"==b.dragConfirm?ma(b.strings.twoTouchXActivate):ma(b.strings.twoTouchActivate));C||"both"!=b.dragConfirm&&"pitch"!=b.dragConfirm||2==a.targetTouches.length?(c=(c-u)*l+Sa,y.pitch=0.2*(c-b.pitch),b.pitch=c):u!=c&&("pitch"==b.dragConfirm?ma(b.strings.twoTouchYActivate):ma(b.strings.twoTouchActivate));"yaw"!=b.dragConfirm&&"pitch"!=b.dragConfirm&&"both"!=b.dragConfirm||2!=a.targetTouches.length||(ta(),a.preventDefault());}}function Ka(){h=null;k=!1;150<Date.now()-f&&(y.pitch=y.yaw=0);ca=
-1;f=Date.now();G("touchend",event);}function Ta(a){"touch"==a.pointerType&&v&&b.draggable&&(ra.push(a.pointerId),Ha.push({clientX:a.clientX,clientY:a.clientY}),a.targetTouches=Ha,Ja(a),a.preventDefault());}function Da(a){if("touch"==a.pointerType)if(h)m(h,a);else if(b.draggable)for(var l=0;l<ra.length;l++)if(a.pointerId==ra[l]){Ha[l].clientX=a.clientX;Ha[l].clientY=a.clientY;a.targetTouches=Ha;Wa(a);a.preventDefault();break}}function La(b){h&&h.dragHandlerFunc&&h.dragHandlerFunc(b,h.dragHandlerArgs);
h=null;if("touch"==b.pointerType){for(var a=!1,c=0;c<ra.length;c++)b.pointerId==ra[c]&&(ra[c]=n),ra[c]&&(a=!0);a||(ra=[],Ha=[],Ka());b.preventDefault();}}function oa(a){v&&("fullscreenonly"!=b.mouseZoom||C)&&(C||"ctrl"!=b.mouseZoom||a.ctrlKey?(ta(),a.preventDefault(),wa(),f=Date.now(),a.wheelDeltaY?(M(b.hfov-0.05*a.wheelDeltaY),y.hfov=0>a.wheelDelta?1:-1):a.wheelDelta?(M(b.hfov-0.05*a.wheelDelta),y.hfov=0>a.wheelDelta?1:-1):a.detail&&(M(b.hfov+1.5*a.detail),y.hfov=0<a.detail?1:-1),E()):(a=-1!=navigator.platform.indexOf("Mac")?
"control":"ctrl",ma(b.strings.ctrlZoomActivate.replace("%s",'<kbd class="pnlm-outline">'+a+"</kbd>"))));}function xa(a){wa();f=Date.now();qa();b.roll=0;var l=a.which||a.keycode;0>b.capturedKeyNumbers.indexOf(l)||!(C||16!=l&&17!=l||"ctrl"!=b.mouseZoom)||(a.preventDefault(),27==l?C&&ia():F(l,!0));}function Ea(){for(var b=0;10>b;b++)q[b]=!1;}function Xa(a){var l=a.which||a.keycode;0>b.capturedKeyNumbers.indexOf(l)||(a.preventDefault(),F(l,!1));}function F(b,a){var c=!1;switch(b){case 109:case 189:case 17:case 173:q[0]!=
a&&(c=!0);q[0]=a;break;case 107:case 187:case 16:case 61:q[1]!=a&&(c=!0);q[1]=a;break;case 38:q[2]!=a&&(c=!0);q[2]=a;break;case 87:q[6]!=a&&(c=!0);q[6]=a;break;case 40:q[3]!=a&&(c=!0);q[3]=a;break;case 83:q[7]!=a&&(c=!0);q[7]=a;break;case 37:q[4]!=a&&(c=!0);q[4]=a;break;case 65:q[8]!=a&&(c=!0);q[8]=a;break;case 39:q[5]!=a&&(c=!0);q[5]=a;break;case 68:q[9]!=a&&(c=!0),q[9]=a;}c&&a&&(D="undefined"!==typeof performance&&performance.now()?performance.now():Date.now(),E());}function c(){if(v){var I=!1,l=
b.pitch,c=b.yaw,d=b.hfov,g;g="undefined"!==typeof performance&&performance.now()?performance.now():Date.now();D===n&&(D=g);var e=(g-D)*b.hfov/1200,e=Math.min(e,10);q[0]&&!0===b.keyboardZoom&&(M(b.hfov+(0.8*y.hfov+0.4)*e),I=!0);q[1]&&!0===b.keyboardZoom&&(M(b.hfov+(0.8*y.hfov-0.2)*e),I=!0);if(q[2]||q[6])b.pitch+=(0.8*y.pitch+0.2)*e,I=!0;if(q[3]||q[7])b.pitch+=(0.8*y.pitch-0.2)*e,I=!0;if(q[4]||q[8])b.yaw+=(0.8*y.yaw-0.2)*e,I=!0;if(q[5]||q[9])b.yaw+=(0.8*y.yaw+0.2)*e,I=!0;I&&(f=Date.now());if(b.autoRotate){if(0.001<
g-D){var I=(g-D)/1E3,h=(y.yaw/I*e-0.2*b.autoRotate)*I,h=(0<-b.autoRotate?1:-1)*Math.min(Math.abs(b.autoRotate*I),Math.abs(h));b.yaw+=h;}b.autoRotateStopDelay&&(b.autoRotateStopDelay-=g-D,0>=b.autoRotateStopDelay&&(b.autoRotateStopDelay=!1,aa=b.autoRotate,b.autoRotate=0));}R.pitch&&(a("pitch"),l=b.pitch);R.yaw&&(a("yaw"),c=b.yaw);R.hfov&&(a("hfov"),d=b.hfov);0<e&&!b.autoRotate&&(I=1-b.friction,q[4]||q[5]||q[8]||q[9]||R.yaw||(b.yaw+=y.yaw*e*I),q[2]||q[3]||q[6]||q[7]||R.pitch||(b.pitch+=y.pitch*e*I),q[0]||
q[1]||R.hfov||(90<b.hfov&&(I*=1-(b.hfov-90)/90),M(b.hfov+y.hfov*e*I)));D=g;0<e&&(y.yaw=0.8*y.yaw+(b.yaw-c)/e*0.2,y.pitch=0.8*y.pitch+(b.pitch-l)/e*0.2,y.hfov=0.8*y.hfov+(b.hfov-d)/e*0.2,l=b.autoRotate?Math.abs(b.autoRotate):5,y.yaw=Math.min(l,Math.max(y.yaw,-l)),y.pitch=Math.min(l,Math.max(y.pitch,-l)),y.hfov=Math.min(l,Math.max(y.hfov,-l)));q[0]&&q[1]&&(y.hfov=0);(q[2]||q[6])&&(q[3]||q[7])&&(y.pitch=0);(q[4]||q[8])&&(q[5]||q[9])&&(y.yaw=0);}}function a(a){var l=R[a],c=Math.min(1,Math.max((Date.now()-
l.startTime)/1E3/(l.duration/1E3),0)),c=l.startPosition+b.animationTimingFunction(c)*(l.endPosition-l.startPosition);if(l.endPosition>l.startPosition&&c>=l.endPosition||l.endPosition<l.startPosition&&c<=l.endPosition||l.endPosition===l.startPosition)c=l.endPosition,y[a]=0,delete R[a];b[a]=c;}function P(){$("resize");}function E(){bb||(bb=!0,r());}function r(){if(!hb)if(X(),Ya&&clearTimeout(Ya),k||!0===V)requestAnimationFrame(r);else if(q[0]||q[1]||q[2]||q[3]||q[4]||q[5]||q[6]||q[7]||q[8]||q[9]||b.autoRotate||
R.pitch||R.yaw||R.hfov||0.01<Math.abs(y.yaw)||0.01<Math.abs(y.pitch)||0.01<Math.abs(y.hfov))c(),0<=b.autoRotateInactivityDelay&&aa&&Date.now()-f>b.autoRotateInactivityDelay&&!b.autoRotate&&(b.autoRotate=aa,A.lookAt(Oa,n,Ba,3E3)),requestAnimationFrame(r);else if(d&&(d.isLoading()||!0===b.dynamic&&Ca))requestAnimationFrame(r);else {A.getPitch&&A.getYaw&&A.getHfov&&G("animatefinished",{pitch:A.getPitch(),yaw:A.getYaw(),hfov:A.getHfov()});bb=!1;D=n;var a=b.autoRotateInactivityDelay-(Date.now()-f);0<a?
Ya=setTimeout(function(){b.autoRotate=aa;A.lookAt(Oa,n,Ba,3E3);E();},a):0<=b.autoRotateInactivityDelay&&aa&&(b.autoRotate=aa,A.lookAt(Oa,n,Ba,3E3),E());}}function X(){var a;if(v){var l=d.getCanvas();!1!==b.autoRotate&&(360<b.yaw?b.yaw-=360:-360>b.yaw&&(b.yaw+=360));a=b.yaw;var c=0;if(b.avoidShowingBackground){var e=b.hfov/2,g=180*Math.atan2(Math.tan(e/180*Math.PI),l.width/l.height)/Math.PI;b.vaov>b.haov?Math.min(Math.cos((b.pitch-e)/180*Math.PI),Math.cos((b.pitch+e)/180*Math.PI)):c=e*(1-Math.min(Math.cos((b.pitch-
g)/180*Math.PI),Math.cos((b.pitch+g)/180*Math.PI)));}var e=b.maxYaw-b.minYaw,g=-180,f=180;360>e&&(g=b.minYaw+b.hfov/2+c,f=b.maxYaw-b.hfov/2-c,e<b.hfov&&(g=f=(g+f)/2),b.yaw=Math.max(g,Math.min(f,b.yaw)));!1===b.autoRotate&&(360<b.yaw?b.yaw-=360:-360>b.yaw&&(b.yaw+=360));!1!==b.autoRotate&&a!=b.yaw&&D!==n&&(b.autoRotate*=-1);a=2*Math.atan(Math.tan(b.hfov/180*Math.PI*0.5)/(l.width/l.height))/Math.PI*180;l=b.minPitch+a/2;c=b.maxPitch-a/2;b.maxPitch-b.minPitch<a&&(l=c=(l+c)/2);isNaN(l)&&(l=-90);isNaN(c)&&
(c=90);b.pitch=Math.max(l,Math.min(c,b.pitch));d.render(b.pitch*Math.PI/180,b.yaw*Math.PI/180,b.hfov*Math.PI/180,{roll:b.roll*Math.PI/180,dynamic:Ca});$a&&($a=Ca=!1);b.hotSpots.forEach(Z);b.compass&&(Pa.style.transform="rotate("+(-b.yaw-b.northOffset)+"deg)",Pa.style.webkitTransform="rotate("+(-b.yaw-b.northOffset)+"deg)");}}function Q(a,b,c,d){this.w=a;this.x=b;this.y=c;this.z=d;}function Y(a){var l;l=a.alpha;var c=a.beta;a=a.gamma;c=[c?c*Math.PI/180/2:0,a?a*Math.PI/180/2:0,l?l*Math.PI/180/2:0];l=
[Math.cos(c[0]),Math.cos(c[1]),Math.cos(c[2])];c=[Math.sin(c[0]),Math.sin(c[1]),Math.sin(c[2])];l=new Q(l[0]*l[1]*l[2]-c[0]*c[1]*c[2],c[0]*l[1]*l[2]-l[0]*c[1]*c[2],l[0]*c[1]*l[2]+c[0]*l[1]*c[2],l[0]*l[1]*c[2]+c[0]*c[1]*l[2]);l=l.multiply(new Q(Math.sqrt(0.5),-Math.sqrt(0.5),0,0));c=J.orientation?-J.orientation*Math.PI/180/2:0;l=l.multiply(new Q(Math.cos(c),0,-Math.sin(c),0)).toEulerAngles();"number"==typeof V&&10>V?V+=1:10===V?(gb=l[2]/Math.PI*180+b.yaw,V=!0,requestAnimationFrame(r)):(b.pitch=l[0]/
Math.PI*180,b.roll=-l[1]/Math.PI*180,b.yaw=-l[2]/Math.PI*180+gb);}function U(){try{var a={};b.horizonPitch!==n&&(a.horizonPitch=b.horizonPitch*Math.PI/180);b.horizonRoll!==n&&(a.horizonRoll=b.horizonRoll*Math.PI/180);b.backgroundColor!==n&&(a.backgroundColor=b.backgroundColor);d.init(B,b.type,b.haov*Math.PI/180,b.vaov*Math.PI/180,b.vOffset*Math.PI/180,Ma,a);}catch(c){if(!0!==b.dynamic&&(B=n),"webgl error"==c.type||"no webgl"==c.type)N();else if("webgl size error"==c.type)N(b.strings.textureSizeError.replace("%s",
c.width).replace("%s",c.maxWidth));else throw N(b.strings.unknownError),c;}}function Ma(){if(b.sceneFadeDuration&&d.fadeImg!==n){d.fadeImg.style.opacity=0;var a=d.fadeImg;delete d.fadeImg;setTimeout(function(){la.removeChild(a);G("scenechangefadedone");},b.sceneFadeDuration);}Pa.style.display=b.compass?"inline":"none";K();s.load.box.style.display="none";L!==n&&(la.removeChild(L),L=n);v=!0;!0!==b.dynamic&&(B=n);E();G("load");}function ja(a){a.pitch=Number(a.pitch)||0;a.yaw=Number(a.yaw)||0;var c=g.createElement("div");
c.tabIndex=-1;c.className="pnlm-hotspot-base";c.className=a.cssClass?c.className+(" "+a.cssClass):c.className+(" pnlm-hotspot pnlm-sprite pnlm-"+da(a.type));var d=g.createElement("span");a.text&&(d.innerHTML=da(a.text));var e;if(a.video){e=g.createElement("video");var f=a.video;b.basePath&&!za(f)&&(f=b.basePath+f);e.src=ea(f);e.controls=!0;e.style.width=a.width+"px";H.appendChild(c);d.appendChild(e);}else if(a.image){f=a.image;b.basePath&&!za(f)&&(f=b.basePath+f);e=g.createElement("a");e.href=ea(a.URL?
a.URL:f,!0);b.targetBlank&&(e.target="_blank",e.rel="noopener");d.appendChild(e);var k=g.createElement("img");k.src=ea(f);k.style.width=a.width+"px";k.style.paddingTop="5px";H.appendChild(c);e.appendChild(k);d.style.maxWidth="initial";}else if(a.URL){e=g.createElement("a");e.href=ea(a.URL,!0);if(a.attributes)for(f in a.attributes)e.setAttribute(f,a.attributes[f]);else b.targetBlank&&(e.target="_blank",e.rel="noopener");H.appendChild(e);c.className+=" pnlm-pointer";d.className+=" pnlm-pointer";e.appendChild(c);}else a.sceneId&&
(c.onclick=c.ontouchend=function(){c.clicked||(c.clicked=!0,Ga(a.sceneId,a.targetPitch,a.targetYaw,a.targetHfov));return !1},c.className+=" pnlm-pointer",d.className+=" pnlm-pointer"),H.appendChild(c);if(a.createTooltipFunc)a.createTooltipFunc(c,a.createTooltipArgs);else if(a.text||a.video||a.image)c.classList.add("pnlm-tooltip"),c.appendChild(d),d.style.width=d.scrollWidth-20+"px",d.style.marginLeft=-(d.scrollWidth-c.offsetWidth)/2+"px",d.style.marginTop=-d.scrollHeight-12+"px";a.clickHandlerFunc&&
(c.addEventListener("click",function(b){a.clickHandlerFunc(b,a.clickHandlerArgs);},"false"),""===g.documentElement.style.pointerAction&&""===g.documentElement.style.touchAction?c.addEventListener("pointerup",function(b){a.clickHandlerFunc(b,a.clickHandlerArgs);},!1):c.addEventListener("touchend",function(b){a.clickHandlerFunc(b,a.clickHandlerArgs);},!1),c.className+=" pnlm-pointer",d.className+=" pnlm-pointer");a.draggable&&(c.addEventListener("mousedown",function(b){a.dragHandlerFunc&&a.dragHandlerFunc(b,
a.dragHandlerArgs);h=a;}),""===g.documentElement.style.pointerAction&&""===g.documentElement.style.touchAction&&c.addEventListener("pointerdown",function(b){a.dragHandlerFunc&&a.dragHandlerFunc(b,a.dragHandlerArgs);h=a;}),c.addEventListener("touchmove",function(b){m(a,b.targetTouches[0]);}),c.addEventListener("touchend",function(b){a.dragHandlerFunc&&a.dragHandlerFunc(b,a.dragHandlerArgs);h=null;}));a.div=c;}function m(a,b){var c=na(b);a.pitch=c[0];a.yaw=c[1];Z(a);}function K(){cb||(b.hotSpots?(b.hotSpots=
b.hotSpots.sort(function(a,b){return a.pitch<b.pitch}),b.hotSpots.forEach(ja)):b.hotSpots=[],cb=!0,b.hotSpots.forEach(Z));}function fa(){var a=b.hotSpots;cb=!1;delete b.hotSpots;if(a)for(var c=0;c<a.length;c++){var d=a[c].div;if(d){for(;d.parentNode&&d.parentNode!=H;)d=d.parentNode;H.removeChild(d);}delete a[c].div;}}function Z(a){var c=Math.sin(a.pitch*Math.PI/180),e=Math.cos(a.pitch*Math.PI/180),f=Math.sin(b.pitch*Math.PI/180),g=Math.cos(b.pitch*Math.PI/180),k=Math.cos((-a.yaw+b.yaw)*Math.PI/180),
h=c*f+e*k*g;if(90>=a.yaw&&-90<a.yaw&&0>=h||(90<a.yaw||-90>=a.yaw)&&0>=h)a.div.style.visibility="hidden";else {var m=Math.sin((-a.yaw+b.yaw)*Math.PI/180),n=Math.tan(b.hfov*Math.PI/360);a.div.style.visibility="visible";var q=d.getCanvas(),p=q.clientWidth,q=q.clientHeight,c=[-p/n*m*e/h/2,-p/n*(c*g-e*k*f)/h/2],e=Math.sin(b.roll*Math.PI/180),f=Math.cos(b.roll*Math.PI/180),c=[c[0]*f-c[1]*e,c[0]*e+c[1]*f];c[0]+=(p-a.div.offsetWidth)/2;c[1]+=(q-a.div.offsetHeight)/2;p="translate("+c[0]+"px, "+c[1]+"px) translateZ(9999px) rotate("+
b.roll+"deg)";a.scale&&(p="number"==typeof a.scale?p+(" scale("+a.scale+")"):p+(" scale("+Ba/b.hfov/h+")"));a.div.style.webkitTransform=p;a.div.style.MozTransform=p;a.div.style.transform=p;}}function ka(a){b={};var c,d,e="haov vaov vOffset northOffset horizonPitch horizonRoll".split(" ");S=[];for(c in db)db.hasOwnProperty(c)&&(b[c]=db[c]);for(c in w.default)if(w.default.hasOwnProperty(c))if("strings"==c)for(d in w.default.strings)w.default.strings.hasOwnProperty(d)&&(b.strings[d]=da(w.default.strings[d]));
else b[c]=w.default[c],0<=e.indexOf(c)&&S.push(c);if(null!==a&&""!==a&&w.scenes&&w.scenes[a]){var f=w.scenes[a];for(c in f)if(f.hasOwnProperty(c))if("strings"==c)for(d in f.strings)f.strings.hasOwnProperty(d)&&(b.strings[d]=da(f.strings[d]));else b[c]=f[c],0<=e.indexOf(c)&&S.push(c);b.scene=a;}for(c in w)if(w.hasOwnProperty(c))if("strings"==c)for(d in w.strings)w.strings.hasOwnProperty(d)&&(b.strings[d]=da(w.strings[d]));else b[c]=w[c],0<=e.indexOf(c)&&S.push(c);}function pa(a){if((a=a?a:!1)&&"preview"in
b){var c=b.preview;b.basePath&&!za(c)&&(c=b.basePath+c);L=g.createElement("div");L.className="pnlm-preview-img";L.style.backgroundImage="url('"+ea(c).replace(/"/g,"%22").replace(/'/g,"%27")+"')";la.appendChild(L);}var c=b.title,e=b.author;a&&("previewTitle"in b&&(b.title=b.previewTitle),"previewAuthor"in b&&(b.author=b.previewAuthor));b.hasOwnProperty("title")||(s.title.innerHTML="");b.hasOwnProperty("author")||(s.author.innerHTML="");b.hasOwnProperty("title")||b.hasOwnProperty("author")||(s.container.style.display=
"none");b.targetBlank&&(Qa.rel="noopener",Qa.target="_blank");x.load.innerHTML="<div><p>"+b.strings.loadButtonLabel+"</p></div>";s.load.boxp.innerHTML=b.strings.loadingLabel;for(var f in b)if(b.hasOwnProperty(f))switch(f){case "title":s.title.innerHTML=da(b[f]);s.container.style.display="inline";break;case "author":var h=da(b[f]);b.authorURL&&(h=g.createElement("a"),h.href=ea(b.authorURL,!0),b.targetBlank&&(h.target="_blank",h.rel="noopener"),h.innerHTML=da(b[f]),h=h.outerHTML);s.author.innerHTML=
b.strings.bylineLabel.replace("%s",h);s.container.style.display="inline";break;case "hfov":M(Number(b[f]));break;case "autoLoad":!0===b[f]&&d===n&&(s.load.box.style.display="inline",x.load.style.display="none",ya());break;case "showZoomCtrl":x.zoom.style.display=b[f]&&!1!=b.showControls?"block":"none";break;case "showFullscreenCtrl":x.fullscreen.style.display=b[f]&&!1!=b.showControls&&("fullscreen"in g||"mozFullScreen"in g||"webkitIsFullScreen"in g||"msFullscreenElement"in g)?"block":"none";break;
case "hotSpotDebug":eb.style.display=b[f]?"block":"none";break;case "showControls":b[f]||(x.orientation.style.display="none",x.zoom.style.display="none",x.fullscreen.style.display="none");break;case "orientationOnByDefault":b[f]&&Aa();}a&&(c?b.title=c:delete b.title,e?b.author=e:delete b.author);}function ia(){if(v&&!Ua)if(C)g.exitFullscreen?g.exitFullscreen():g.mozCancelFullScreen?g.mozCancelFullScreen():g.webkitCancelFullScreen?g.webkitCancelFullScreen():g.msExitFullscreen&&g.msExitFullscreen();else try{p.requestFullscreen?
p.requestFullscreen():p.mozRequestFullScreen?p.mozRequestFullScreen():p.msRequestFullscreen?p.msRequestFullscreen():p.webkitRequestFullScreen();}catch(a){}}function $(a){g.fullscreenElement||g.fullscreen||g.mozFullScreen||g.webkitIsFullScreen||g.msFullscreenElement?(x.fullscreen.classList.add("pnlm-fullscreen-toggle-button-active"),C=!0):(x.fullscreen.classList.remove("pnlm-fullscreen-toggle-button-active"),C=!1);"resize"!==a&&G("fullscreenchange",C);d.resize();M(b.hfov);E();}function Na(a){var c=b.minHfov;
"multires"==b.type&&d&&!b.multiResMinHfov&&(c=Math.min(c,d.getCanvas().width/(b.multiRes.cubeResolution/90*0.9)));if(c>b.maxHfov)return console.log("HFOV bounds do not make sense (minHfov > maxHfov)."),b.hfov;var e=b.hfov,e=a<c?c:a>b.maxHfov?b.maxHfov:a;b.avoidShowingBackground&&d&&!isNaN(b.maxPitch-b.minPitch)&&(a=d.getCanvas(),e=Math.min(e,360*Math.atan(Math.tan((b.maxPitch-b.minPitch)/360*Math.PI)/a.height*a.width)/Math.PI));return e}function M(a){b.hfov=Na(a);G("zoomchange",b.hfov);}function wa(){R=
{};aa=b.autoRotate?b.autoRotate:aa;b.autoRotate=!1;}function Fa(){Ua&&(s.load.box.style.display="none",s.errorMsg.style.display="none",Ua=!1,la.style.display="block",G("errorcleared"));v=!1;ta();x.load.style.display="none";s.load.box.style.display="inline";ya();}function Ga(a,c,e,f,h){v||(h=!0);v=!1;R={};var k,m,p;if(b.sceneFadeDuration&&!h&&(h=d.render(b.pitch*Math.PI/180,b.yaw*Math.PI/180,b.hfov*Math.PI/180,{returnImage:"ImageBitmap"}),h!==n)){k=h.then?g.createElement("canvas"):new Image;k.className=
"pnlm-fade-img";k.style.transition="opacity "+b.sceneFadeDuration/1E3+"s";k.style.width="100%";k.style.height="100%";h.then?h.then(function(b){k.width=b.width;k.height=b.height;k.getContext("2d").drawImage(b,0,0);Ga(a,c,e,f,!0);}):(k.onload=function(){Ga(a,c,e,f,!0);},k.src=h);la.appendChild(k);d.fadeImg=k;return}h="same"===c?b.pitch:c;m="same"===e?b.yaw:"sameAzimuth"===e?b.yaw+(b.northOffset||0)-(w.scenes[a].northOffset||0):e;p="same"===f?b.hfov:f;fa();ka(a);y.yaw=y.pitch=y.hfov=0;pa();h!==n&&(b.pitch=
h);m!==n&&(b.yaw=m);p!==n&&(b.hfov=p);G("scenechange",a);Fa();}function qa(){J.removeEventListener("deviceorientation",Y);x.orientation.classList.remove("pnlm-orientation-button-active");V=!1;}function Aa(){fb&&("undefined"!==typeof DeviceMotionEvent&&"function"===typeof DeviceMotionEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(function(a){"granted"==a&&(V=1,J.addEventListener("deviceorientation",Y),x.orientation.classList.add("pnlm-orientation-button-active"));}):(V=1,J.addEventListener("deviceorientation",
Y),x.orientation.classList.add("pnlm-orientation-button-active")));}function da(a){return w.escapeHTML?String(a).split(/&/g).join("&amp;").split('"').join("&quot;").split("'").join("&#39;").split("<").join("&lt;").split(">").join("&gt;").split("/").join("&#x2f;").split("\n").join("<br>"):String(a).split("\n").join("<br>")}function ea(a,b){try{var c=decodeURIComponent(jb(a)).replace(/[^\w:]/g,"").toLowerCase();}catch(d){return "about:blank"}return 0===c.indexOf("javascript:")||0===c.indexOf("vbscript:")?
(console.log("Script URL removed."),"about:blank"):b&&0===c.indexOf("data:")?(console.log("Data URI removed from link."),"about:blank"):a}function jb(a){return a.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,function(a,b){b=b.toLowerCase();return "colon"===b?":":"#"===b.charAt(0)?"x"===b.charAt(1)?String.fromCharCode(parseInt(b.substring(2),16)):String.fromCharCode(+b.substring(1)):""})}function G(a){if(a in T)for(var b=T[a].length;0<b;b--)T[a][T[a].length-b].apply(null,[].slice.call(arguments,
1));}var A=this,b,d,L,h,k=!1,f=Date.now(),t=0,u=0,ca=-1,e=0,Sa=0,q=Array(10),C=!1,v,Ua=!1,ab=!1,B,D,y={yaw:0,pitch:0,hfov:0},bb=!1,V=!1,gb=0,Ya,aa=0,Ba,Oa,R={},T={},S=[],Ca=!1,$a=!1,Za,cb=!1,ba,hb=!1,db={hfov:100,minHfov:50,multiResMinHfov:!1,maxHfov:120,pitch:0,minPitch:n,maxPitch:n,yaw:0,minYaw:-180,maxYaw:180,roll:0,haov:360,vaov:180,vOffset:0,autoRotate:!1,autoRotateInactivityDelay:-1,autoRotateStopDelay:n,type:"equirectangular",northOffset:0,showFullscreenCtrl:!0,dynamic:!1,dynamicUpdate:!1,doubleClickZoom:!0,
keyboardZoom:!0,mouseZoom:!0,showZoomCtrl:!0,autoLoad:!1,showControls:!0,orientationOnByDefault:!1,hotSpotDebug:!1,backgroundColor:[0,0,0],avoidShowingBackground:!1,animationTimingFunction:function(a){return 0.5>a?2*a*a:-1+(4-2*a)*a},draggable:!0,dragConfirm:!1,disableKeyboardCtrl:!1,crossOrigin:"anonymous",targetBlank:!1,touchPanSpeedCoeffFactor:1,capturedKeyNumbers:[16,17,27,37,38,39,40,61,65,68,83,87,107,109,173,187,189],friction:0.15,strings:{loadButtonLabel:"Click to<br>Load<br>Panorama",loadingLabel:"Loading...",
bylineLabel:"by %s",noPanoramaError:"No panorama image was specified.",fileAccessError:"The file %s could not be accessed.",malformedURLError:"There is something wrong with the panorama URL.",iOS8WebGLError:"Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",genericWebGLError:"Your browser does not have the necessary WebGL support to display this panorama.",textureSizeError:"This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
unknownError:"Unknown error. Check developer console.",twoTouchActivate:"Use two fingers together to pan the panorama.",twoTouchXActivate:"Use two fingers together to pan the panorama horizontally.",twoTouchYActivate:"Use two fingers together to pan the panorama vertically.",ctrlZoomActivate:"Use %s + scroll to zoom the panorama."}};p="string"===typeof p?g.getElementById(p):p;p.classList.add("pnlm-container");p.tabIndex=0;var H=g.createElement("div");H.className="pnlm-ui";p.appendChild(H);var la=
g.createElement("div");la.className="pnlm-render-container";p.appendChild(la);var W=g.createElement("div");W.className="pnlm-dragfix";H.appendChild(W);var ha=g.createElement("span");ha.className="pnlm-about-msg";var Qa=g.createElement("a");Qa.href="https://pannellum.org/";Qa.textContent="Pannellum";ha.appendChild(Qa);var ib=g.createElement("span");ib.textContent=" testing";ha.appendChild(ib);H.appendChild(ha);W.addEventListener("contextmenu",ua);var s={},eb=g.createElement("div");eb.className="pnlm-sprite pnlm-hot-spot-debug-indicator";
H.appendChild(eb);s.container=g.createElement("div");s.container.className="pnlm-panorama-info";s.title=g.createElement("div");s.title.className="pnlm-title-box";s.container.appendChild(s.title);s.author=g.createElement("div");s.author.className="pnlm-author-box";s.container.appendChild(s.author);H.appendChild(s.container);s.load={};s.load.box=g.createElement("div");s.load.box.className="pnlm-load-box";s.load.boxp=g.createElement("p");s.load.box.appendChild(s.load.boxp);s.load.lbox=g.createElement("div");
s.load.lbox.className="pnlm-lbox";s.load.lbox.innerHTML='<div class="pnlm-loading"></div>';s.load.box.appendChild(s.load.lbox);s.load.lbar=g.createElement("div");s.load.lbar.className="pnlm-lbar";s.load.lbarFill=g.createElement("div");s.load.lbarFill.className="pnlm-lbar-fill";s.load.lbar.appendChild(s.load.lbarFill);s.load.box.appendChild(s.load.lbar);s.load.msg=g.createElement("p");s.load.msg.className="pnlm-lmsg";s.load.box.appendChild(s.load.msg);H.appendChild(s.load.box);s.errorMsg=g.createElement("div");
s.errorMsg.className="pnlm-error-msg pnlm-info-box";H.appendChild(s.errorMsg);s.interactionMsg=g.createElement("div");s.interactionMsg.className="pnlm-interaction-msg pnlm-info-box";H.appendChild(s.interactionMsg);var x={};x.container=g.createElement("div");x.container.className="pnlm-controls-container";H.appendChild(x.container);x.load=g.createElement("button");x.load.className="pnlm-load-button";x.load.addEventListener("click",function(){pa();Fa();});H.appendChild(x.load);x.zoom=g.createElement("div");
x.zoom.className="pnlm-zoom-controls pnlm-controls";x.zoomIn=g.createElement("div");x.zoomIn.className="pnlm-zoom-in pnlm-sprite pnlm-control";x.zoomIn.addEventListener("click",function(){v&&(M(b.hfov-5),E());});x.zoom.appendChild(x.zoomIn);x.zoomOut=g.createElement("div");x.zoomOut.className="pnlm-zoom-out pnlm-sprite pnlm-control";x.zoomOut.addEventListener("click",function(){v&&(M(b.hfov+5),E());});x.zoom.appendChild(x.zoomOut);x.container.appendChild(x.zoom);x.fullscreen=g.createElement("div");
x.fullscreen.addEventListener("click",ia);x.fullscreen.className="pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control";(g.fullscreenEnabled||g.mozFullScreenEnabled||g.webkitFullscreenEnabled||g.msFullscreenEnabled)&&x.container.appendChild(x.fullscreen);x.orientation=g.createElement("div");x.orientation.addEventListener("click",function(a){V?qa():Aa();});x.orientation.addEventListener("mousedown",function(a){a.stopPropagation();});x.orientation.addEventListener("touchstart",
function(a){a.stopPropagation();});x.orientation.addEventListener("pointerdown",function(a){a.stopPropagation();});x.orientation.className="pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control";var fb=!1;J.DeviceOrientationEvent&&"https:"==location.protocol&&(0<=navigator.userAgent.toLowerCase().indexOf("mobi")||0<=navigator.userAgent.indexOf("Mac")&&navigator.maxTouchPoints&&0<navigator.maxTouchPoints)&&(x.container.appendChild(x.orientation),fb=!0);var Pa=
g.createElement("div");Pa.className="pnlm-compass pnlm-controls pnlm-control";H.appendChild(Pa);w.firstScene?ka(w.firstScene):w.default&&w.default.firstScene?ka(w.default.firstScene):ka(null);pa(!0);var ra=[],Ha=[];Q.prototype.multiply=function(a){return new Q(this.w*a.w-this.x*a.x-this.y*a.y-this.z*a.z,this.x*a.w+this.w*a.x+this.y*a.z-this.z*a.y,this.y*a.w+this.w*a.y+this.z*a.x-this.x*a.z,this.z*a.w+this.w*a.z+this.x*a.y-this.y*a.x)};Q.prototype.toEulerAngles=function(){var a=Math.atan2(2*(this.w*
this.x+this.y*this.z),1-2*(this.x*this.x+this.y*this.y)),b=Math.asin(2*(this.w*this.y-this.z*this.x)),c=Math.atan2(2*(this.w*this.z+this.x*this.y),1-2*(this.y*this.y+this.z*this.z));return [a,b,c]};this.isLoaded=function(){return Boolean(v)};this.getPitch=function(){return b.pitch};this.setPitch=function(a,c,d,e){f=Date.now();if(1E-6>=Math.abs(a-b.pitch))return "function"==typeof d&&d(e),this;(c=c==n?1E3:Number(c))?(R.pitch={startTime:Date.now(),startPosition:b.pitch,endPosition:a,duration:c},"function"==
typeof d&&setTimeout(function(){d(e);},c)):b.pitch=a;E();return this};this.getPitchBounds=function(){return [b.minPitch,b.maxPitch]};this.setPitchBounds=function(a){b.minPitch=Math.max(-90,Math.min(a[0],90));b.maxPitch=Math.max(-90,Math.min(a[1],90));return this};this.getYaw=function(){return (b.yaw+540)%360-180};this.setYaw=function(a,c,d,e){f=Date.now();if(1E-6>=Math.abs(a-b.yaw))return "function"==typeof d&&d(e),this;c=c==n?1E3:Number(c);a=(a+180)%360-180;c?(180<b.yaw-a?a+=360:180<a-b.yaw&&(a-=360),
R.yaw={startTime:Date.now(),startPosition:b.yaw,endPosition:a,duration:c},"function"==typeof d&&setTimeout(function(){d(e);},c)):b.yaw=a;E();return this};this.getYawBounds=function(){return [b.minYaw,b.maxYaw]};this.setYawBounds=function(a){b.minYaw=Math.max(-360,Math.min(a[0],360));b.maxYaw=Math.max(-360,Math.min(a[1],360));return this};this.getHfov=function(){return b.hfov};this.setHfov=function(a,c,d,e){f=Date.now();if(1E-6>=Math.abs(a-b.hfov))return "function"==typeof d&&d(e),this;(c=c==n?1E3:Number(c))?
(R.hfov={startTime:Date.now(),startPosition:b.hfov,endPosition:Na(a),duration:c},"function"==typeof d&&setTimeout(function(){d(e);},c)):M(a);E();return this};this.getHfovBounds=function(){return [b.minHfov,b.maxHfov]};this.setHfovBounds=function(a){b.minHfov=Math.max(0,a[0]);b.maxHfov=Math.max(0,a[1]);return this};this.lookAt=function(a,c,d,e,f,g){e=e==n?1E3:Number(e);a!==n&&1E-6<Math.abs(a-b.pitch)&&(this.setPitch(a,e,f,g),f=n);c!==n&&1E-6<Math.abs(c-b.yaw)&&(this.setYaw(c,e,f,g),f=n);d!==n&&1E-6<
Math.abs(d-b.hfov)&&(this.setHfov(d,e,f,g),f=n);"function"==typeof f&&f(g);return this};this.getNorthOffset=function(){return b.northOffset};this.setNorthOffset=function(a){b.northOffset=Math.min(360,Math.max(0,a));E();return this};this.getHorizonRoll=function(){return b.horizonRoll};this.setHorizonRoll=function(a){b.horizonRoll=Math.min(90,Math.max(-90,a));d.setPose(b.horizonPitch*Math.PI/180,b.horizonRoll*Math.PI/180);E();return this};this.getHorizonPitch=function(){return b.horizonPitch};this.setHorizonPitch=
function(a){b.horizonPitch=Math.min(90,Math.max(-90,a));d.setPose(b.horizonPitch*Math.PI/180,b.horizonRoll*Math.PI/180);E();return this};this.startAutoRotate=function(a,c,d,e){a=a||aa||1;c=c===n?Oa:c;d=d===n?Ba:d;b.autoRotate=a;e!==n&&(b.autoRotateInactivityDelay=e);A.lookAt(c,n,d,3E3);E();return this};this.stopAutoRotate=function(){aa=b.autoRotate?b.autoRotate:aa;b.autoRotate=!1;b.autoRotateInactivityDelay=-1;return this};this.stopMovement=function(){wa();y={yaw:0,pitch:0,hfov:0};};this.getRenderer=
function(){return d};this.setUpdate=function(a){if(Ca=!0===a)$a=!1,d===n?ga():E();return this};this.updateOnce=function(){Ca=$a=!0;d===n?ga():E();return this};this.mouseEventToCoords=function(a){return na(a)};this.loadScene=function(a,b,c,d){!1!==v&&Ga(a,b,c,d);return this};this.getScene=function(){return b.scene};this.addScene=function(a,b){w.scenes[a]=b;return this};this.removeScene=function(a){if(b.scene==a||!w.scenes.hasOwnProperty(a))return !1;delete w.scenes[a];return !0};this.toggleFullscreen=
function(){ia();return this};this.getConfig=function(){return b};this.getContainer=function(){return p};this.addHotSpot=function(a,c){if(c===n&&b.scene===n)b.hotSpots.push(a);else {var d=c!==n?c:b.scene;if(w.scenes.hasOwnProperty(d))w.scenes[d].hasOwnProperty("hotSpots")||(w.scenes[d].hotSpots=[],d==b.scene&&(b.hotSpots=w.scenes[d].hotSpots)),w.scenes[d].hotSpots.push(a);else throw "Invalid scene ID!";}if(c===n||b.scene==c)ja(a),v&&Z(a);return this};this.removeHotSpot=function(a,c){if(c===n||b.scene==
c){if(!b.hotSpots)return !1;for(var d=0;d<b.hotSpots.length;d++)if(b.hotSpots[d].hasOwnProperty("id")&&b.hotSpots[d].id==a){for(var e=b.hotSpots[d].div;e.parentNode!=H;)e=e.parentNode;H.removeChild(e);delete b.hotSpots[d].div;b.hotSpots.splice(d,1);return !0}}else if(w.scenes.hasOwnProperty(c)){if(!w.scenes[c].hasOwnProperty("hotSpots"))return !1;for(d=0;d<w.scenes[c].hotSpots.length;d++)if(w.scenes[c].hotSpots[d].hasOwnProperty("id")&&w.scenes[c].hotSpots[d].id==a)return w.scenes[c].hotSpots.splice(d,
1),!0}else return !1};this.resize=function(){d&&P();};this.isOrientationSupported=function(){return fb||!1};this.stopOrientation=function(){qa();};this.startOrientation=function(){Aa();};this.isOrientationActive=function(){return Boolean(V)};this.on=function(a,b){T[a]=T[a]||[];T[a].push(b);return this};this.off=function(a,b){if(!a)return T={},this;if(b){var c=T[a].indexOf(b);0<=c&&T[a].splice(c,1);0==T[a].length&&delete T[a];}else delete T[a];return this};this.destroy=function(){hb=!0;clearTimeout(Ya);
ba&&ba.abort();if(Array.isArray(B))for(var a=0;6>a;a++)B[a].src="";d&&d.destroy();ab&&(g.removeEventListener("mousemove",Ia,!1),g.removeEventListener("mouseup",va,!1),p.removeEventListener("mozfullscreenchange",$,!1),p.removeEventListener("webkitfullscreenchange",$,!1),p.removeEventListener("msfullscreenchange",$,!1),p.removeEventListener("fullscreenchange",$,!1),Za?Za.disconnect():(J.removeEventListener("resize",P,!1),J.removeEventListener("orientationchange",P,!1)),p.removeEventListener("keydown",
xa,!1),p.removeEventListener("keyup",Xa,!1),p.removeEventListener("blur",Ea,!1),g.removeEventListener("mouseleave",va,!1));p.innerHTML="";p.classList.remove("pnlm-container");};}return {viewer:function(g,n){return new sa(g,n)}}}(window,document);

const generateId = () => {
  return new Date().valueOf().toString();
};

class Defer {
  constructor() {
    const promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    this.promise = promise;
  }
}

const useToggle = (initVal) => {
  const [val, setVal] = h(initVal);
  const toggleFn = T$1((force) => {
    if (typeof force === "boolean") {
      setVal(force);
    } else {
      setVal(!val);
    }
  }, []);
  return [val, toggleFn];
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const styles = {
  container: {
    borderRadius: "5%",
    backgroundColor: "rgba(0,0,0,.7)",
    color: "white",
    padding: "5px 10px",
    margin: 0,
    maxWidth: 400
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    margin: 0,
    overflow: "hidden"
  },
  description: {
    margin: 0,
    marginTop: 10
  },
  button: {
    backgroundColor: "transparent",
    color: "white",
    borderRadius: "15%",
    borderStyle: "outset",
    padding: "2px 5px"
  },
  editContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center"
  }
};
const InfoElement = ({ title, description, isEdit, sanitized, id }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const elementRef = _$1(null);
  const onClickContainer = T$1(() => {
    if (isOpen === false) {
      toggleIsOpen(true);
      dispatchEvent("TOGGLE_INFO_ELEMENT");
    }
  }, []);
  const contentProps = F$1(() => {
    let props;
    if (sanitized) {
      props = {
        dangerouslySetInnerHTML: { __html: description }
      };
    } else {
      props = { children: description };
    }
    return props;
  }, [sanitized, description]);
  const dispatchEvent = T$1((eventName, data) => {
    const event = new CustomEvent(eventName, { bubbles: true, detail: __spreadValues({ id }, data) });
    elementRef.current.dispatchEvent(event);
  }, [elementRef.current, id]);
  const onClickClose = T$1((e) => {
    e.stopPropagation();
    toggleIsOpen(false);
    dispatchEvent("TOGGLE_INFO_ELEMENT");
  }, []);
  const saveElement = T$1((e) => {
    e.stopPropagation();
    const container = elementRef.current;
    const title2 = container.querySelector("h4").textContent;
    const description2 = container.querySelector("p").textContent;
    toggleIsOpen(false);
    dispatchEvent("UPDATE_INFO_ELEMENT", { title: title2, description: description2 });
  }, []);
  return /* @__PURE__ */ o("div", { ref: elementRef, style: styles.container, onClick: onClickContainer, children: [
    /* @__PURE__ */ o("div", { style: styles.titleContainer, children: [
      /* @__PURE__ */ o("h4", { contentEditable: isOpen && isEdit, style: styles.title, children: title }),
      isOpen && /* @__PURE__ */ o("button", { style: styles.button, onClick: onClickClose, children: "X" })
    ] }),
    /* @__PURE__ */ o("p", __spreadValues({ contentEditable: isEdit, style: __spreadProps(__spreadValues({}, styles.description), { display: isOpen ? "block" : "none" }) }, contentProps)),
    isEdit && isOpen && /* @__PURE__ */ o("div", { style: styles.editContainer, children: [
      /* @__PURE__ */ o("button", { onClick: saveElement, style: styles.button, children: "Guardar" }),
      "\xA0",
      /* @__PURE__ */ o("button", { onClick: () => dispatchEvent("DELETE_INFO_ELEMENT"), style: styles.button, children: "Borrar" })
    ] })
  ] });
};

class HashTable {
  constructor(array = [], prop = "id") {
    this._prop = prop;
    this._array = array;
    this.table = this._arrayToDict(this._array);
  }
  add(item) {
    this._array.push(item);
    this.table[item[this._prop]] = item;
    return this;
  }
  delete(item) {
    if (typeof item === "string" || typeof item === "number") {
      item = this.get(item);
    }
    if (item) {
      this._array.forEach((arrayItem, i) => {
        if (arrayItem[this._prop] === item[this._prop]) {
          this._array.splice(i, 1);
        }
      });
      return delete this.table[item[this._prop]];
    }
    return false;
  }
  get(index = 0) {
    return index ? this.table[index] : this._array[index];
  }
  get length() {
    return this._array.length;
  }
  get array() {
    return this._array;
  }
  _arrayToDict(array) {
    return array.reduce((obj, item) => {
      obj[item[this._prop]] = item;
      return obj;
    }, {});
  }
}

const _TourRenderer = class {
  constructor(tour, dom, options = {}) {
    this._classPrefix = "tr";
    this._onUpdateInfoListeners = [];
    this._onDeleteInfoListeners = [];
    this._tour = tour;
    this._options = Object.assign({}, _TourRenderer.DEFAULTS, options);
    if (typeof dom === "string") {
      dom = document.querySelector(dom);
    }
    this._validateTour();
    this._dom = dom;
    this._onLoad = options.onLoad;
    this._init();
  }
  get panos() {
    return this._panos;
  }
  destroy() {
    this._viewer.destroy();
  }
  addInfoUpdateListener(fn) {
    this._onUpdateInfoListeners.push(fn);
  }
  addInfoDeleteListener(fn) {
    this._onDeleteInfoListeners.push(fn);
  }
  selectPOVInViewer() {
    if (!this._isLoaded) {
      return Promise.reject(new Error("viewer not loaded"));
    }
    this._isSelectingPOV = true;
    this._selectPOVDeferred = new Defer();
    this.toggleControls(false);
    this._dom.classList.add(this._createClass("selecting-pov"));
    this._selectPOVDeferred.promise.then(() => {
      this.toggleControls(true);
      this._dom.classList.remove(this._createClass("selecting-pov"));
    });
    return this._selectPOVDeferred.promise;
  }
  toggleControls(show) {
    this._dom.querySelector(".pnlm-controls-container").classList.toggle(this._createClass("hide"), !show);
    this._dom.querySelector(".pnlm-panorama-info").classList.toggle(this._createClass("hide"), !show);
  }
  addDOM(elm) {
    elm.classList.add(_TourRenderer.CLASSES.DOM_ELEMENT);
    this._dom.appendChild(elm);
  }
  deleteDOM(elm) {
    this._dom.removeChild(elm);
  }
  addOverlay(elm, pov) {
    const params = {
      id: generateId(),
      pitch: pov.pitch,
      yaw: pov.yaw,
      type: "info",
      createTooltipFunc: (divParent) => {
        divParent.appendChild(elm);
      }
    };
    this._viewer.addHotSpot(params);
    return params;
  }
  deleteOverlay(item) {
    let index;
    if (typeof item === "object") {
      index = item.id;
    } else {
      index = item;
    }
    this._viewer.removeHotSpot(index);
  }
  forceToRender() {
    this._viewer.setPitch(this._viewer.getPitch() + 0.1);
  }
  addInfoElement(obj) {
    let { id, title, description, POV: POV2 } = obj;
    id = id || generateId();
    const pano = this.getPano();
    const info = {
      id,
      POV: POV2,
      title,
      description,
      infoElement: /* @__PURE__ */ o(InfoElement, { isEdit: this._options.editMode, title, description, id })
    };
    pano.infoElements.add(info);
    this._addInfoToViewer(info);
  }
  deleteInfoElement(elem) {
    const pano = this.getPano();
    if (typeof elem === "string") {
      elem = pano.infoElements.get(elem);
    }
    pano.infoElements.delete(elem);
    this.deleteOverlay(elem);
  }
  getPano(id = this._viewer.getScene()) {
    return this._panos.get(id);
  }
  setPano(pano) {
    let id = typeof pano === "object" ? pano.id : pano;
    return this._viewer.loadScene(id);
  }
  /**
   * @deprecated Use get pano
   */
  getCurrentPano() {
    return this.getPano();
  }
  getPOV() {
    const pov = {
      pitch: 0,
      yaw: 0
    };
    if (this._viewer) {
      pov.yaw = this._viewer.getYaw();
      pov.pitch = this._viewer.getPitch();
    }
    return pov;
  }
  deleteLink(link) {
    const pano = this.getPano();
    if (typeof link === "string") {
      link = pano.links.get(link);
    }
    pano.links.delete(link.id);
    this._viewer.removeHotSpot(link.id);
    this.forceToRender();
  }
  getLink(id) {
    return this.getPano().links.get(id);
  }
  createLinkTo(pano, pov = this.getPOV(), targetPOV = { pitch: 0, yaw: 0 }, id) {
    if (!this._isLoaded)
      return console.info("Viewer not loaded");
    if (typeof pano !== "object") {
      pano = this.getPano(pano);
    }
    if (!pano)
      throw new Error("parameter missing: pano");
    const link = {
      POV: pov,
      id: id || generateId(),
      targetPOV,
      to: pano
    };
    const currentPano = this.getCurrentPano();
    currentPano.links.add(link);
    this._addLink(link);
    const event = new CustomEvent("newLink", { detail: link });
    this._dom.dispatchEvent(event);
    return link;
  }
  isFirstPano() {
    return this.getCurrentPano() === this._first;
  }
  setFirstPano(pano) {
    this._first = pano;
  }
  // ----------------------------------- PRIVATE ----------------------------------------------------------------
  _init() {
    this._processTour();
    this._initViewer();
    this._setListeners();
  }
  _initViewer() {
    var _a, _b;
    const params = {
      autoLoad: this._options.autoLoad,
      autoRotate: this._options.autoRotate,
      showControls: this._options.showControls,
      keyboardZoom: this._options.keyboardZoom,
      mouseZoom: this._options.mouseZoom,
      disableKeyboardCtrl: true,
      // zoom level 120, 100 default, 50 most
      default: {
        firstScene: this._first.id,
        pitch: (_a = this._first.POV) == null ? void 0 : _a.pitch,
        sceneFadeDuration: 1e3,
        yaw: (_b = this._first.POV) == null ? void 0 : _b.yaw
      },
      hfov: 120,
      scenes: this._pannellumPanos.table
    };
    if (this._preview) {
      params.preview = this._preview.url;
    }
    this._viewer = pannellum.viewer(this._dom, params);
  }
  _createClass(className) {
    return `${this._classPrefix}-${className}`;
  }
  _processPanos() {
    const panos = this._tour.panos || this._tour.photoSpheres;
    this._panos = new HashTable(
      panos.map((photoSphere) => {
        return {
          id: photoSphere.id,
          infoElements: new HashTable(photoSphere.infoElements),
          name: photoSphere.name,
          POV: photoSphere.POV,
          url: photoSphere.link
        };
      })
    );
    panos.forEach((photoSphere) => {
      const pano = this._panos.get(photoSphere.id);
      photoSphere.links = photoSphere.links || [];
      photoSphere.infoElements = photoSphere.infoElements || [];
      pano.links = new HashTable(photoSphere.links.map(this._transformToLink.bind(this)));
      pano.infoElements = new HashTable(photoSphere.infoElements.map(this._transformToInfo.bind(this)));
    });
    this._pannellumPanos = new HashTable(this._panos.array.map(this._transformToPannellumPano.bind(this)));
  }
  _validateTour() {
    const panos = this._tour && (this._tour.panos || this._tour.photoSpheres);
    if (!panos || !panos.length) {
      throw new Error(_TourRenderer.ERRORS.INVALID_TOUR);
    }
    const image = this._tour.images && this._tour.images[0];
    if (image) {
      this._preview = { url: image.link, name: image.name, id: image.id };
    }
    if (!this._tour.POV) {
      this._tour.POV = {
        yaw: 0,
        pitch: 0
      };
    }
  }
  _processTour() {
    this._name = this._tour.name;
    this._description = this._tour.description;
    this._processPanos();
    if (this._tour.firstPhotoSphereId) {
      this._first = this._panos.get(this._tour.firstPhotoSphereId) || this._panos.get();
    } else {
      this._first = this._panos.get();
    }
  }
  _setListeners() {
    this._viewer.on("load", this._onLoadPano.bind(this));
    this._viewer.on("mousedown", this._onClick.bind(this));
    this._viewer.on("touchstart", this._onClick.bind(this));
    this._dom.addEventListener("TOGGLE_INFO_ELEMENT", this.forceToRender.bind(this));
    this._dom.addEventListener("UPDATE_INFO_ELEMENT", this._updateInfoListener.bind(this));
    this._dom.addEventListener("DELETE_INFO_ELEMENT", this._deleteInfoListener.bind(this));
  }
  _deleteInfoListener(ev) {
    const data = ev.detail;
    this.deleteInfoElement(data.id);
    this._onDeleteInfoListeners.forEach((fn) => {
      fn(data);
    });
  }
  _updateInfoListener(ev) {
    const data = ev.detail;
    const info = this.getPano().infoElements.get(data.id);
    info.title = data.title;
    info.description = data.description;
    this._onUpdateInfoListeners.forEach((fn) => {
      fn(info);
    });
  }
  _onClick(mouseEvent) {
    if (!this._isSelectingPOV) {
      return;
    }
    const event = mouseEvent.targetTouches && mouseEvent.targetTouches[0] || mouseEvent;
    const coords = this._viewer.mouseEventToCoords(event);
    const pov = {
      pitch: coords[0],
      yaw: coords[1]
    };
    this._isSelectingPOV = false;
    this._selectPOVDeferred.resolve(pov);
    this._selectPOVDeferred = null;
  }
  _onLoadPano(id) {
    this._isLoaded = true;
    if (!this._options.noLinks) {
      this._setLinks();
    }
    this._setInfos();
    const event = new Event("load");
    this._dom.dispatchEvent(event);
    if (typeof this._onLoad === "function")
      this._onLoad();
  }
  _setLinks() {
    const links = this.getCurrentPano().links;
    links.array.forEach((link) => {
      this._addLink(link);
    });
  }
  _setInfos() {
    const infos = this.getPano().infoElements;
    infos.array.forEach((info) => {
      this._addInfoToViewer(info);
    });
  }
  _addInfoToViewer(info) {
    this._viewer.addHotSpot(this._transformToPannellumOverlay(info));
  }
  _addLink(link) {
    this._viewer.removeHotSpot(link.id);
    this._viewer.addHotSpot(this._transformToPannellumLink(link));
  }
  _transformToLink(link) {
    const pano = this._panos.get(link.toPhotoSphereId || link.toId);
    return {
      POV: link.POV,
      id: link.id,
      targetPOV: link.targetPOV,
      to: pano
    };
  }
  _transformToInfo(infoElement) {
    const { POV: POV2, id, name, description } = infoElement;
    return {
      title: name,
      description,
      POV: POV2,
      id,
      infoElement: /* @__PURE__ */ o(InfoElement, { isEdit: this._options.editMode, id, title: name, description })
    };
  }
  _transformToPannellumOverlay(info) {
    return {
      id: info.id,
      pitch: info.POV.pitch,
      yaw: info.POV.yaw,
      type: "info",
      cssClass: "n",
      createTooltipFunc: (divParent) => D$1(info.infoElement, divParent)
    };
  }
  _transformToPannellumLink(link) {
    return {
      id: link.id,
      pitch: link.POV.pitch,
      sceneId: link.to && link.to.id,
      targetPitch: link.targetPOV.pitch,
      targetYaw: link.targetPOV.yaw,
      text: link.to && link.to.name,
      type: "scene",
      yaw: link.POV.yaw
    };
  }
  _transformToPannellumPano(pano) {
    const params = {
      id: pano.id,
      panorama: pano.url,
      type: "equirectangular"
    };
    if (!this._options.noTitle) {
      params.title = pano.name;
    }
    if (pano.POV) {
      params.pitch = pano.POV.pitch;
      params.yaw = pano.POV.yaw;
    }
    if (pano.links && pano.links.length) ;
    return params;
  }
};
let TourRenderer = _TourRenderer;
TourRenderer.EVENTS = Object.assign(
  {
    UPDATE_INFO_ELEMENT: "UPDATE_INFO_ELEMENT",
    TOGGLE_INFO_ELEMENT: "TOGGLE_INFO_ELEMENT",
    DELETE_INFO_ELEMENT: "DELETE_INFO_ELEMENT"
  },
  {
    CREATE_INFO_ELEMENT: "CREATE_INFO_ELEMENT",
    CREATE_LINK: "CREATE_LINK",
    DELETE_LINK: "DELETE_LINK"
  }
);
TourRenderer.CLASSES = {
  DOM_ELEMENT: "dom-element"
};
TourRenderer.ERRORS = {
  INVALID_TOUR: "The properties of the tour are not valid"
};
TourRenderer.DEFAULTS = {
  autoLoad: false,
  autoRotate: void 0,
  showControls: true
};
window.TourRenderer = TourRenderer;

module.exports = TourRenderer;
//# sourceMappingURL=TourRenderer.js.map
