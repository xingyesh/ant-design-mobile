webpackJsonp([74],{3:function(n,t,e){"use strict";e(7),e(6)},6:function(n,t){},7:function(n,t){},14:function(n,t){"use strict";function e(n,t){var e={},a={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?e[s]=n[s]:a[s]=n[s]}),[e,a]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=e,n.exports=t["default"]},24:function(n,t,e){"use strict";function a(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function s(n){var t=c.createClass({displayName:"TouchableFeedbackComponent",getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},render:function(){return c.createElement(n,o({},this.props,{touchFeedback:this.state.touchFeedback,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}))}});return t}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n};t["default"]=s;var r=e(1),c=a(r);n.exports=t["default"]},25:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function l(n){return"string"==typeof n}function i(n){return l(n.type)&&C(n.props.children)?b.cloneElement(n,{},n.props.children.split("").join(" ")):l(n)?(C(n)&&(n=n.split("").join(" ")),b.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},d=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var r,c=n[Symbol.iterator]();!(a=(r=c.next()).done)&&(e.push(r.value),!t||e.length!==t);a=!0);}catch(p){s=!0,o=p}finally{try{!a&&c["return"]&&c["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=e(1),b=s(h),k=e(2),y=a(k),m=e(27),g=a(m),v=e(14),O=a(v),T=e(24),j=a(T),w=/^[\u4e00-\u9fa5]{2}$/,C=w.test.bind(w),E=function(n){function t(){c(this,t);for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var o=p(this,n.call.apply(n,[this].concat(a)));return o.onClick=function(){o.props.onClick(o)},o}return u(t,n),t.prototype.render=function(){var n,t=(0,O["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),e=d(t,2),a=e[0],s=a.children,o=a.className,c=a.prefixCls,p=a.type,u=a.size,l=a.inline,h=a.disabled,k=a.htmlType,m=a.icon,v=a.loading,T=a.touchFeedback,j=e[1],w=(0,y["default"])((n={},r(n,o,o),r(n,c,!0),r(n,c+"-primary","primary"===p),r(n,c+"-ghost","ghost"===p),r(n,c+"-warning","warning"===p),r(n,c+"-small","small"===u&&l),r(n,c+"-loading",v),r(n,c+"-inline",l),r(n,c+"-disabled",h),r(n,c+"-touchFeedback",T),n)),C=v?"loading":m,E=b.Children.map(s,i);return b.createElement("button",f({},j,{type:k||"button",className:w,disabled:h,onClick:this.onClick}),C?b.createElement(g["default"],{type:C}):null,E)},t}(b.Component);E.propTypes={prefixCls:h.PropTypes.string,size:h.PropTypes.oneOf(["large","small"]),htmlType:h.PropTypes.oneOf(["submit","button","reset"]),icon:h.PropTypes.bool},E.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},t["default"]=(0,j["default"])(E),n.exports=t["default"]},28:function(n,t,e){"use strict";e(3),e(35),e(29)},29:function(n,t){},130:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function l(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),f=s(i),d=e(25),h=a(d),b=e(2),k=a(b),y=function(n){function t(){return c(this,t),p(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.imgUrl,s=t.title,o=t.message,c=t.buttonText,p=t.buttonClick,u=t.buttonType,l=t.className,i=(0,k["default"])((n={},r(n,""+e,!0),r(n,l,l),n));return f.createElement("div",{className:i},f.createElement("div",{className:e+"-pic",style:{backgroundImage:"url("+a+")"}}),""!==s?f.createElement("div",{className:e+"-title"},s):null,""!==o?f.createElement("div",{className:e+"-message"},o):null,""!==c?f.createElement("div",{className:e+"-button"},f.createElement(h["default"],{type:u,onClick:p},c)):null)},t}(f.Component);t["default"]=y,y.defaultProps={prefixCls:"am-result",imgUrl:"",title:"",message:"",buttonText:"",buttonType:"",buttonClick:l},n.exports=t["default"]},131:function(n,t,e){"use strict";e(3),e(28),e(146)},146:function(n,t){},808:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(131),e(130)),o=a(s),r=e(1),c=a(r),p=e(4);a(p);n.exports={content:[],meta:{order:2,title:"\u652f\u4ed8\u5931\u8d25",filename:"components/result/demo/fail.md",id:"components-result-demo-fail"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u652f\u4ed8\u5931\u8d25<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u70b9\u51fb\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(o["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png",title:"\u652f\u4ed8\u5931\u8d25",message:"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3",buttonText:"\u70b9\u51fb\u91cd\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}})};return c["default"].createElement(n,null)}}}});