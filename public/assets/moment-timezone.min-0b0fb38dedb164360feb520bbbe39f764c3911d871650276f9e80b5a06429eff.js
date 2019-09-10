//! moment-timezone.js
//! version : 0.5.0
//! author : Tim Wood
//! license : MIT
//! github.com/moment/moment-timezone
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["moment"],e):"object"==typeof module&&module.exports?module.exports=e(require("moment")):e(t.moment)}(this,function(t){"use strict";function e(t){return t>96?t-87:t>64?t-29:t-48}function n(t){var n=0,o=t.split("."),r=o[0],s=o[1]||"",i=1,a=0,f=1;for(45===t.charCodeAt(0)&&(n=1,f=-1);n<r.length;n++)a=60*a+e(r.charCodeAt(n));for(n=0;n<s.length;n++)i/=60,a+=e(s.charCodeAt(n))*i;return a*f}function o(t){for(var e=0;e<t.length;e++)t[e]=n(t[e])}function r(t,e){for(var n=0;e>n;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}function s(t,e){var n,o=[];for(n=0;n<e.length;n++)o[n]=t[e[n]];return o}function i(t){var e=t.split("|"),n=e[2].split(" "),i=e[3].split(""),a=e[4].split(" ");return o(n),o(i),o(a),r(a,i.length),{name:e[0],abbrs:s(e[1].split(" "),i),offsets:s(n,i),untils:a,population:0|e[5]}}function a(t){t&&this._set(i(t))}function f(t){var e=t.toTimeString(),n=e.match(/\(.+\)/);"GMT"===(n=n&&n[0]?n[0].match(/[A-Z]/g).join(""):e.match(/[A-Z]{3,5}/g)[0])&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function u(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function c(t,e){for(var n,o;o=6e4*((e.at-t.at)/12e4|0);)(n=new f(new Date(t.at+o))).offset===t.offset?t=n:e=n;return t}function h(){var t,e,n,o=(new Date).getFullYear()-2,r=new f(new Date(o,0,1)),s=[r];for(n=1;48>n;n++)(e=new f(new Date(o,n,1))).offset!==r.offset&&(t=c(r,e),s.push(t),s.push(new f(new Date(t.at+6e4)))),r=e;for(n=0;4>n;n++)s.push(new f(new Date(o+n,0,1))),s.push(new f(new Date(o+n,6,1)));return s}function l(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:e.zone.population-t.zone.population}function p(t,e){var n,r;for(o(e),n=0;n<e.length;n++)r=e[n],F[r]=F[r]||{},F[r][t]=!0}function d(t){var e,n,o,r=t.length,s={},i=[];for(e=0;r>e;e++)for(n in o=F[t[e].offset]||{})o.hasOwnProperty(n)&&(s[n]=!0);for(e in s)s.hasOwnProperty(e)&&i.push(C[e]);return i}function m(){var t,e,n,o=h(),r=o.length,s=d(o),i=[];for(e=0;e<s.length;e++){for(t=new u(g(s[e]),r),n=0;r>n;n++)t.scoreOffsetAt(o[n]);i.push(t)}return i.sort(l),i.length>0?i[0].zone.name:void 0}function z(t){return(!T||t)&&(T=m()),T}function b(t){return(t||"").toLowerCase().replace(/\//g,"_")}function v(t){var e,n,o,r;for("string"==typeof t&&(t=[t]),e=0;e<t.length;e++)r=b(n=(o=t[e].split("|"))[0]),Z[r]=t[e],C[r]=n,o[5]&&p(r,o[2].split(" "))}function g(t,e){t=b(t);var n,o=Z[t];return o instanceof a?o:"string"==typeof o?(o=new a(o),Z[t]=o,o):k[t]&&e!==g&&(n=g(k[t],g))?((o=Z[t]=new a)._set(n),o.name=C[t],o):null}function _(){var t,e=[];for(t in C)C.hasOwnProperty(t)&&(Z[t]||Z[k[t]])&&C[t]&&e.push(C[t]);return e.sort()}function w(t){var e,n,o,r;for("string"==typeof t&&(t=[t]),e=0;e<t.length;e++)o=b((n=t[e].split("|"))[0]),r=b(n[1]),k[o]=r,C[o]=n[0],k[r]=o,C[r]=n[1]}function y(t){v(t.zones),w(t.links),O.dataVersion=t.version}function S(t){return S.didShowError||(S.didShowError=!0,M("moment.tz.zoneExists('"+t+"') has been deprecated in favor of !moment.tz.zone('"+t+"')")),!!g(t)}function A(t){return!(!t._a||void 0!==t._tzm)}function M(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t)}function O(e){var n=Array.prototype.slice.call(arguments,0,-1),o=arguments[arguments.length-1],r=g(o),s=t.utc.apply(null,n);return r&&!t.isMoment(e)&&A(s)&&s.add(r.parse(s),"minutes"),s.tz(o),s}function j(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}function D(t){return function(){return this._z=null,t.apply(this,arguments)}}if(void 0!==t.tz)return M("Moment Timezone "+t.tz.version+" was already loaded "+(t.tz.dataVersion?"with data from ":"without any data")+t.tz.dataVersion),t;var T,x="0.5.0",Z={},k={},C={},F={},E=t.version.split("."),P=+E[0],V=+E[1];(2>P||2===P&&6>V)&&M("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+t.version+". See momentjs.com"),a.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e,n=+t,o=this.untils;for(e=0;e<o.length;e++)if(n<o[e])return e},parse:function(t){var e,n,o,r,s=+t,i=this.offsets,a=this.untils,f=a.length-1;for(r=0;f>r;r++)if(e=i[r],n=i[r+1],o=i[r?r-1:r],n>e&&O.moveAmbiguousForward?e=n:e>o&&O.moveInvalidForward&&(e=o),s<a[r]-6e4*e)return i[r];return i[f]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return this.offsets[this._index(t)]}},u.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.offset(t.at)-t.offset),this.zone.abbr(t.at).match(/[A-Z]/g).join("")!==t.abbr&&this.abbrScore++},O.version=x,O.dataVersion="",O._zones=Z,O._links=k,O._names=C,O.add=v,O.link=w,O.load=y,O.zone=g,O.zoneExists=S,O.guess=z,O.names=_,O.Zone=a,O.unpack=i,O.unpackBase60=n,O.needsOffset=A,O.moveInvalidForward=!0,O.moveAmbiguousForward=!1;var q=t.fn;t.tz=O,t.defaultZone=null,t.updateOffset=function(e,n){var o,r=t.defaultZone;void 0===e._z&&(r&&A(e)&&!e._isUTC&&(e._d=t.utc(e._a)._d,e.utc().add(r.parse(e),"minutes")),e._z=r),e._z&&(o=e._z.offset(e),Math.abs(o)<16&&(o/=60),void 0!==e.utcOffset?e.utcOffset(-o,n):e.zone(o,n))},q.tz=function(e){return e?(this._z=g(e),this._z?t.updateOffset(this):M("Moment Timezone has no data for "+e+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0},q.zoneName=j(q.zoneName),q.zoneAbbr=j(q.zoneAbbr),q.utc=D(q.utc),t.tz.setDefault=function(e){return(2>P||2===P&&9>V)&&M("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+t.version+"."),t.defaultZone=e?g(e):null,t};var Y=t.momentProperties;return"[object Array]"===Object.prototype.toString.call(Y)?(Y.push("_z"),Y.push("_a")):Y&&(Y._z=null),t});