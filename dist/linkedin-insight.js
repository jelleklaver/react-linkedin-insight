!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LinkedInTag=t():e.LinkedInTag=t()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={579:(e,t,n)=>{n.r(t),n.d(t,{LinkedInTag:()=>s,default:()=>c});var i=n(818);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialized=!1,this.disabled=!i.jU,this.partnerId="",this.subDomain="dc"}var t,n;return t=e,(n=[{key:"warn",value:function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=console).info.apply(e,r(["[linkedin-insight-tag]"].concat(n)))}},{key:"verifyInit",value:function(){return this.initialized||this.warn("LinkedIn Insight Tag not initialized. Before using, call LinkedInTag.init with required params"),this.initialized}},{key:"init",value:function(e,t,n){if(this.partnerId=e,this.subDomain=t||this.subDomain,null!=n&&(this.disabled=n),!this.disabled){this.partnerId||this.warn("Partner id is required."),window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[],window._linkedin_data_partner_ids.push(e);var i=document.getElementsByTagName("script")[0],r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://snap.licdn.com/li.lms-analytics/insight.min.js",i.parentNode.insertBefore(r,i),this.initialized=!0}}},{key:"track",value:function(e,t,n){if(!this.disabled){if(!this.verifyInit())return this.warn("You must call `init` before calling `track`.");t=t||this.partnerId||window._linkedin_data_partner_ids[0],n=n||this.subDomain;var i="https://".concat(n,".ads.linkedin.com/collect/?pid=").concat(t,"&fmt=gif");e&&(i="".concat(i,"&conversionId=").concat(e));var r=document.createElement("img");return r.alt="",r.height=1,r.width=1,r.src=i,r}}}])&&a(t.prototype,n),e}();const c=new s},818:(e,t)=>{var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="undefined"!=typeof window&&void 0!==window.document;"object"===("undefined"==typeof self?"undefined":n(self))&&self.constructor&&self.constructor.name,"undefined"!=typeof process&&null!=process.versions&&process.versions.node;t.jU=i}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}return n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(579)})()}));