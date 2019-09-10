/*!
	Autosize 3.0.15
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);p=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),c="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(c)&&(c=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,p=t,f&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+c;0!==e.scrollHeight?(e.style.height=i+"px",h=e.clientWidth,document.documentElement.scrollTop=t,document.body.scrollTop=n):e.style.height=o}function i(){var t=e.style.height;if(o(),window.getComputedStyle(e,null).height!==e.style.height?"visible"!==p&&n("visible"):"hidden"!==p&&n("hidden"),t!==e.style.height){var i=s("autosize:resized");e.dispatchEvent(i)}}var r=arguments[1]===undefined?{}:arguments[1],l=r.setOverflowX,u=l===undefined||l,a=r.setOverflowY,f=a===undefined||a;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!d.has(e)){var c=null,p=null,h=e.clientWidth,v=function(){e.clientWidth!==h&&i()},y=function(t){window.removeEventListener("resize",v,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",y,!1),e.removeEventListener("autosize:update",i,!1),d["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",y,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",v,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),d.add(e),u&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=s("autosize:destroy");e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=s("autosize:update");e.dispatchEvent(t)}}var r,d="function"==typeof Set?new Set:(r=[],{has:function(e){return Boolean(r.indexOf(e)>-1)},add:function(e){r.push(e)},"delete":function(e){r.splice(r.indexOf(e),1)}}),s=function(e){return new Event(e)};try{new Event("test")}catch(u){s=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=l});