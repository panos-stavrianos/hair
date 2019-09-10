!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Chartkick=e()}(this,function(){"use strict";function t(t){return"[object Array]"===Object.prototype.toString.call(t)}function e(t){return t instanceof Function}function n(t){return!e(t)&&t instanceof Object}function r(e,o){var a;for(a in o)n(o[a])||t(o[a])?(n(o[a])&&!n(e[a])&&(e[a]={}),t(o[a])&&!t(e[a])&&(e[a]=[]),r(e[a],o[a])):o[a]!==undefined&&(e[a]=o[a])}function o(t,e){var n={};return r(n,t),r(n,e),n}function a(t){var e,n,r,o,a,i,s,l,c,p,u;return"[object Date]"===(p=Object.prototype.toString.call(t))?t:"[object String]"===p&&(r=t.match(Y))?(u=parseInt(r[1],10),i=parseInt(r[3],10)-1,e=parseInt(r[5],10),n=parseInt(r[7],10),a=r[9]?parseInt(r[9],10):0,c=r[11]?parseInt(r[11],10):0,o=r[12]?1e3*parseFloat(Z+r[12].slice(1)):0,l=Date.UTC(u,i,e,n,a,c,o),r[13]&&r[14]&&(s=60*r[15],r[17]&&(s+=parseInt(r[17],10)),l-=60*(s*="-"===r[14]?-1:1)*1e3),new Date(l)):void 0}function i(t){var e,n,r;for(e=0;e<t.length;e++)for(r=t[e].data,n=0;n<r.length;n++)if(r[n][1]<0)return!0;return!1}function s(t){return""+t}function l(t){return parseFloat(t)}function c(t){var e,n,r,o;if("object"!=typeof t)if("number"==typeof t)t=new Date(1e3*t);else{if(e=(t=s(t)).match(X))return n=parseInt(e[1],10),r=parseInt(e[3],10)-1,o=parseInt(e[5],10),new Date(n,r,o);t=a(t.replace(/ /,"T").replace(" ","").replace("UTC","Z"))||new Date(t)}return t}function p(e){if(!t(e)){var n,r=[];for(n in e)e.hasOwnProperty(n)&&r.push([n,e[n]]);e=r}return e}function u(t,e,n,r,a,s,l,c){return function(p,u,d){var h=p.data,f=o({},t);return f=o(f,d||{}),(p.hideLegend||"legend"in u)&&e(f,u.legend,p.hideLegend),u.title&&n(f,u.title),"min"in u?r(f,u.min):i(h)||r(f,0),u.max&&a(f,u.max),"stacked"in u&&s(f,u.stacked),u.colors&&(f.colors=u.colors),u.xtitle&&l(f,u.xtitle),u.ytitle&&c(f,u.ytitle),f=o(f,u.library||{})}}function d(t,e){return t[0].getTime()-e[0].getTime()}function h(t,e){return t[0]-e[0]}function f(t,e){return t-e}function y(t){return 0===t.getMilliseconds()&&0===t.getSeconds()}function m(t){return y(t)&&0===t.getMinutes()}function g(t){return m(t)&&0===t.getHours()}function z(t,e){return g(t)&&t.getDay()===e}function M(t){return g(t)&&1===t.getDate()}function b(t){return M(t)&&0===t.getMonth()}function v(t){return!isNaN(c(t))&&s(t).length>=6}function x(t){return"number"==typeof t}function w(t,e,n){if(t=t||"",n.prefix&&(e<0&&(e*=-1,t+="-"),t+=n.prefix),n.thousands||n.decimal){var r=(e=s(e)).split(".");e=r[0],n.thousands&&(e=e.replace(/\B(?=(\d{3})+(?!\d))/g,n.thousands)),r.length>1&&(e+=(n.decimal||".")+r[1])}return t+e+(n.suffix||"")}function C(t){var e,n,r;for(e=0;e<t.length;e++)for(r=t[e].data,n=0;n<r.length;n++)if(0!=r[n][1])return!1;return!0}function A(t,e,n){jt.push([t,e,n]),_()}function _(){if(Bt<Nt){var t=jt.shift();t&&(Bt++,k(t[0],t[1],t[2]),_())}}function S(){Bt--,_()}function k(t,e,n){T(t,e,function(t,e,r){var o="string"==typeof r?r:r.message;n(o)})}function T(t,e,n){var r=window.jQuery||window.Zepto||window.$;if(r)r.ajax({dataType:"json",url:t,success:e,error:n,complete:S});else{var o=new XMLHttpRequest;o.open("GET",t,!0),o.setRequestHeader("Content-Type","application/json"),o.onload=function(){S(),200===o.status?e(JSON.parse(o.responseText),o.statusText,o):n(o,"error",o.statusText)},o.send()}}function D(t,e){document.body.innerText?t.innerText=e:t.textContent=e}function L(t,e){D(t,"Error Loading Chart: "+e),t.style.color="#ff0000"}function O(t){try{t.__render()}catch(e){throw L(t.element,e.message),e}}function E(t,e){"string"==typeof e?A(e,function(e){t.rawData=e,O(t)},function(e){L(t.element,e)}):(t.rawData=e,O(t))}function I(t){var e=t.element,n=document.createElement("a");n.download=!0===t.options.download?"chart.png":t.options.download,n.style.position="absolute",n.style.top="20px",n.style.right="20px",n.style.zIndex=1e3,n.style.lineHeight="20px",n.target="_blank";var r=document.createElement("img");r.alt="Download",r.style.border="none",r.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABCFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMywEsqxAAAAV3RSTlMAAQIDBggJCgsMDQ4PERQaHB0eISIjJCouLzE0OTo/QUJHSUpLTU5PUllhYmltcHh5foWLjI+SlaCio6atr7S1t7m6vsHHyM7R2tze5Obo7fHz9ff5+/1hlxK2AAAA30lEQVQYGUXBhVYCQQBA0TdYWAt2d3d3YWAHyur7/z9xgD16Lw0DW+XKx+1GgX+FRzM3HWQWrHl5N/oapW5RPe0PkBu+UYeICvozTWZVK23Ao04B79oJrOsJDOoxkZoQPWgX29pHpCZEk7rEvQYiNSFq1UMqvlCjJkRBS1R8hb00Vb/TajtBL7nTHE1X1vyMQF732dQhyF2o6SAwrzP06iUQzvwsArlnzcOdrgBhJyHa1QOgO9U1GsKuvjUTjavliZYQ8nNPapG6sap/3nrIdJ6bOWzmX/fy0XVpfzZP3S8OJT3g9EEiJwAAAABJRU5ErkJggg==",n.appendChild(r),e.style.position="relative",t.__downloadAttached=!0,t.__enterEvent=j(e,"mouseover",function(r){var o=r.relatedTarget;o&&(o===this||N(this,o))||!t.options.download||(n.href=t.toImage(),e.appendChild(n))}),t.__leaveEvent=j(e,"mouseout",function(t){var e=t.relatedTarget;e&&(e===this||N(this,e))||n.parentNode&&n.parentNode.removeChild(n)})}function j(t,e,n){if(t.addEventListener)return t.addEventListener(e,n,!1),n;var r=function(){return n.call(t,window.event)};return t.attachEvent("on"+e,r),r}function B(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)}function N(t,e){if(t===e)return!1;for(;e&&e!==t;)e=e.parentNode;return e===t}function F(t){if(t){if("Highcharts"===t.product)return vt;if(t.charts)return It;if(e(t))return yt}throw new Error("Unknown adapter")}function H(t){var e=new(F(t))(t);-1===Ht.indexOf(e)&&Ht.push(e)}function R(){"Chart"in window&&H(window.Chart),"Highcharts"in window&&H(window.Highcharts),window.google&&window.google.charts&&H(window.google)}function P(t,e){if("PieChart"===e||"GeoChart"===e||"Timeline"===e)return 0===t.length;for(var n=0;n<t.length;n++)if(t[n].data.length>0)return!1;return!0}function W(t,e){e.options.messages&&e.options.messages.empty&&P(e.data,t)?D(e.element,e.options.messages.empty):(U(t,e),e.options.download&&!e.__downloadAttached&&"chartjs"===e.adapter&&I(e))}function U(t,n){var r,o,a,i;for(a="render"+t,i=n.options.adapter,R(),r=0;r<Ht.length;r++)if(o=Ht[r],(!i||i===o.name)&&e(o[a]))return n.adapter=o.name,n.__adapterObject=o,o[a](n);throw Ht.length>0?new Error("No charting library found for "+t):new Error("No charting libraries found - be sure to include one before your charts")}function Q(t,e){return V(t,x)?"number":!e&&V(t,v)?"datetime":"string"}function V(t,e){var n,r,o;for(n=0;n<t.length;n++)for(o=p(t[n].data),r=0;r<o.length;r++)if(!e(o[r][0]))return!1;return!0}function J(t){var e,n,r=[];for(e=0;e<t.length;e++){var o={};for(n in t[e])t[e].hasOwnProperty(n)&&(o[n]=t[e][n]);r.push(o)}return r}function G(e,n,r){var o,a=e.options,i=e.rawData;for(!t(i)||"object"!=typeof i[0]||t(i[0])?(i=[{name:a.label,data:i}],e.hideLegend=!0):e.hideLegend=!1,e.xtype=n||(a.discrete?"string":Q(i,r)),i=J(i),o=0;o<i.length;o++)i[o].data=Pt(p(i[o].data),e.xtype);return i}function K(t){var e,n=p(t.rawData);for(e=0;e<n.length;e++)n[e]=[s(n[e][0]),l(n[e][1])];return n}var X=/^(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)$/i,Y=/(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([.,]\d+)?($|Z|([+-])(\d\d)(:)?(\d\d)?)/i,Z=String(1.5).charAt(1),q={maintainAspectRatio:!1,animation:!1,tooltips:{displayColors:!1,callbacks:{}},legend:{},title:{fontSize:20,fontColor:"#333"}},$={scales:{yAxes:[{ticks:{maxTicksLimit:4},scaleLabel:{fontSize:16,fontColor:"#333"}}],xAxes:[{gridLines:{drawOnChartArea:!1},scaleLabel:{fontSize:16,fontColor:"#333"},time:{},ticks:{}}]}},tt=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#651067"],et=function(t,e,n){e!==undefined?(t.legend.display=!!e,e&&!0!==e&&(t.legend.position=e)):n&&(t.legend.display=!1)},nt=function(t,e){t.title.display=!0,t.title.text=e},rt=function(t,e){null!==e&&(t.scales.yAxes[0].ticks.min=l(e))},ot=function(t,e){t.scales.yAxes[0].ticks.max=l(e)},at=function(t,e){null!==e&&(t.scales.xAxes[0].ticks.min=l(e))},it=function(t,e){t.scales.xAxes[0].ticks.max=l(e)},st=function(t,e){t.scales.xAxes[0].stacked=!!e,t.scales.yAxes[0].stacked=!!e},lt=function(t,e){t.scales.xAxes[0].scaleLabel.display=!0,t.scales.xAxes[0].scaleLabel.labelString=e},ct=function(t,e){t.scales.yAxes[0].scaleLabel.display=!0,t.scales.yAxes[0].scaleLabel.labelString=e},pt=function(t,e){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?"rgba("+parseInt(n[1],16)+", "+parseInt(n[2],16)+", "+parseInt(n[3],16)+", "+e+")":t},ut=function(t,e,n){var r=Math.ceil(t.element.offsetWidth/4/e.labels.length);r>25?r=25:r<10&&(r=10),n.scales.xAxes[0].ticks.callback||(n.scales.xAxes[0].ticks.callback=function(t){return(t=s(t)).length>r?t.substring(0,r-2)+"...":t})},dt=function(e,n,r){var o={prefix:e.options.prefix,suffix:e.options.suffix,thousands:e.options.thousands,decimal:e.options.decimal};if("pie"!==r){var a=n.scales.yAxes;"bar"===r&&(a=n.scales.xAxes),a[0].ticks.callback||(a[0].ticks.callback=function(t){return w("",t,o)})}if(!n.tooltips.callbacks.label)if("scatter"===r)n.tooltips.callbacks.label=function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),n+"("+t.xLabel+", "+t.yLabel+")"};else if("bubble"===r)n.tooltips.callbacks.label=function(t,e){var n=e.datasets[t.datasetIndex].label||"";n&&(n+=": ");var r=e.datasets[t.datasetIndex].data[t.index];return n+"("+t.xLabel+", "+t.yLabel+", "+r.v+")"};else if("pie"===r)n.tooltips.callbacks.label=function(e,n){var r=n.labels[e.index],a=": ";return t(r)?(r=r.slice())[0]+=a:r+=a,w(r,n.datasets[e.datasetIndex].data[e.index],o)};else{var i="bar"===r?"xLabel":"yLabel";n.tooltips.callbacks.label=function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),w(n,t[i],o)}}},ht=u(o(q,$),et,nt,rt,ot,st,lt,ct),ft=function(t,e,n){var r,a=[],i=[],s=t.options.colors||tt,c=!0,p=!0,u=!0,d=!0,h=!0,v=!0,x=t.data,w=0;if("bubble"===n)for(var C=0;C<x.length;C++)for(var A=x[C],_=0;_<A.data.length;_++)A.data[_][2]>w&&(w=A.data[_][2]);var S,k,T,D,L,O=[],E=[];if("bar"===n||"column"===n||"number"!==t.xtype&&"bubble"!==t.xtype){var I,j,B=[];for(S=0;S<x.length;S++)for(T=x[S],k=0;k<T.data.length;k++)D=T.data[k],O[L="datetime"==t.xtype?D[0].getTime():D[0]]||(O[L]=new Array(x.length)),O[L][S]=l(D[1]),-1===B.indexOf(L)&&B.push(L);for("datetime"!==t.xtype&&"number"!==t.xtype||B.sort(f),k=0;k<x.length;k++)E.push([]);for(j=0;j<B.length;j++)for(S=B[j],"datetime"===t.xtype?(I=new Date(l(S)),c=c&&g(I),r||(r=I.getDay()),p=p&&z(I,r),u=u&&M(I),d=d&&b(I),h=h&&m(I),v=v&&y(I)):I=S,i.push(I),k=0;k<x.length;k++)E[k].push(O[S][k]===undefined?null:O[S][k])}else for(var N=0;N<x.length;N++){for(var F=x[N],H=[],R=0;R<F.data.length;R++){var P={x:l(F.data[R][0]),y:l(F.data[R][1])};"bubble"===n&&(P.r=20*l(F.data[R][2])/w,P.v=F.data[R][2]),H.push(P)}E.push(H)}for(S=0;S<x.length;S++){var W=(T=x[S]).color||s[S],U="line"!==n?pt(W,.5):W,Q={label:T.name||"",data:E[S],fill:"area"===n,borderColor:W,backgroundColor:U,pointBackgroundColor:W,borderWidth:2,pointHoverBackgroundColor:W};T.stack&&(Q.stack=T.stack),!1===t.options.curve&&(Q.lineTension=0),!1===t.options.points&&(Q.pointRadius=0,Q.pointHitRadius=5),Q=o(Q=o(Q=o(Q,t.options.dataset||{}),T.library||{}),T.dataset||{}),a.push(Q)}if("datetime"===t.xtype&&i.length>0){var V=i[0].getTime(),J=i[0].getTime();for(S=1;S<i.length;S++){var G=i[S].getTime();G<V&&(V=G),G>J&&(J=G)}var K,X=(J-V)/864e5;if(!e.scales.xAxes[0].time.unit)if(d||X>3650?(e.scales.xAxes[0].time.unit="year",K=365):u||X>300?(e.scales.xAxes[0].time.unit="month",K=30):c||X>10?(e.scales.xAxes[0].time.unit="day",K=1):h||X>.5?(e.scales.xAxes[0].time.displayFormats={hour:"MMM D, h a"},e.scales.xAxes[0].time.unit="hour",K=1/24):v&&(e.scales.xAxes[0].time.displayFormats={minute:"h:mm a"},e.scales.xAxes[0].time.unit="minute",K=1/24/60),K&&X>0){var Y=Math.ceil(X/K/(t.element.offsetWidth/100));p&&1===K&&(Y=7*Math.ceil(Y/7)),e.scales.xAxes[0].time.unitStepSize=Y}e.scales.xAxes[0].time.tooltipFormat||(c?e.scales.xAxes[0].time.tooltipFormat="ll":h?e.scales.xAxes[0].time.tooltipFormat="MMM D, h a":v&&(e.scales.xAxes[0].time.tooltipFormat="h:mm a"))}return{labels:i,datasets:a}},yt=function(t){this.name="chartjs",this.library=t};yt.prototype.renderLineChart=function(t,e){var n={};!t.options.max&&C(t.data)&&(n.max=1);var r=ht(t,o(n,t.options));dt(t,r,e);var a=ft(t,r,e||"line");"number"===t.xtype?(r.scales.xAxes[0].type="linear",r.scales.xAxes[0].position="bottom"):r.scales.xAxes[0].type="string"===t.xtype?"category":"time",this.drawChart(t,"line",a,r)},yt.prototype.renderPieChart=function(t){var e=o({},q);t.options.donut&&(e.cutoutPercentage=50),"legend"in t.options&&et(e,t.options.legend),t.options.title&&nt(e,t.options.title),e=o(e,t.options.library||{}),dt(t,e,"pie");for(var n=[],r=[],a=0;a<t.data.length;a++){var i=t.data[a];n.push(i[0]),r.push(i[1])}var s={data:r,backgroundColor:t.options.colors||tt},l={labels:n,datasets:[s=o(s,t.options.dataset||{})]};this.drawChart(t,"pie",l,e)},yt.prototype.renderColumnChart=function(t,e){var n;n="bar"===e?u(o(q,$),et,nt,at,it,st,lt,ct)(t,t.options):ht(t,t.options),dt(t,n,e);var r=ft(t,n,"column");"bar"!==e&&ut(t,r,n),this.drawChart(t,"bar"===e?"horizontalBar":"bar",r,n)},yt.prototype.renderAreaChart=function(t){this.renderLineChart(t,"area")},yt.prototype.renderBarChart=function(t){this.renderColumnChart(t,"bar")},yt.prototype.renderScatterChart=function(t,e){e=e||"scatter";var n=ht(t,t.options);dt(t,n,e),"showLines"in n||(n.showLines=!1);var r=ft(t,n,e);n.scales.xAxes[0].type="linear",n.scales.xAxes[0].position="bottom",this.drawChart(t,e,r,n)},yt.prototype.renderBubbleChart=function(t){this.renderScatterChart(t,"bubble")},yt.prototype.destroy=function(t){t.chart&&t.chart.destroy()},yt.prototype.drawChart=function(t,e,n,r){this.destroy(t);var o={type:e,data:n,options:r};t.options.code&&window.console.log("new Chart(ctx, "+JSON.stringify(o)+");"),t.element.innerHTML="<canvas></canvas>";var a=t.element.getElementsByTagName("CANVAS")[0];t.chart=new this.library(a,o)};var mt={chart:{},xAxis:{title:{text:null},labels:{style:{fontSize:"12px"}}},yAxis:{title:{text:null},labels:{style:{fontSize:"12px"}}},title:{text:null},credits:{enabled:!1},legend:{borderWidth:0},tooltip:{style:{fontSize:"12px"}},plotOptions:{areaspline:{},series:{marker:{}}}},gt=function(t,e,n){e!==undefined?(t.legend.enabled=!!e,e&&!0!==e&&("top"===e||"bottom"===e?t.legend.verticalAlign=e:(t.legend.layout="vertical",t.legend.verticalAlign="middle",t.legend.align=e))):n&&(t.legend.enabled=!1)},zt=function(t,e){t.title.text=e},Mt=u(mt,gt,zt,function(t,e){t.yAxis.min=e},function(t,e){t.yAxis.max=e},function(t,e){t.plotOptions.series.stacking=e?!0===e?"normal":e:null},function(t,e){t.xAxis.title.text=e},function(t,e){t.yAxis.title.text=e}),bt=function(t,e,n){var r={prefix:t.options.prefix,suffix:t.options.suffix,thousands:t.options.thousands,decimal:t.options.decimal};"pie"===n||e.yAxis.labels.formatter||(e.yAxis.labels.formatter=function(){return w("",this.value,r)}),e.tooltip.pointFormatter||(e.tooltip.pointFormatter=function(){return'<span style="color:'+this.color+">\u25cf</span> "+w(this.series.name+": <b>",this.y,r)+"</b><br/>"})},vt=function(t){this.name="highcharts",this.library=t};vt.prototype.renderLineChart=function(t,e){var n={};"areaspline"===(e=e||"spline")&&(n={plotOptions:{areaspline:{stacking:"normal"},area:{stacking:"normal"},series:{marker:{enabled:!1}}}}),!1===t.options.curve&&("areaspline"===e?e="area":"spline"===e&&(e="line"));var r,o,a,i=Mt(t,t.options,n);i.xAxis.type="string"===t.xtype?"category":"number"===t.xtype?"linear":"datetime",i.chart.type||(i.chart.type=e),bt(t,i,e);var s=t.data;for(o=0;o<s.length;o++){if(s[o].name=s[o].name||"Value",r=s[o].data,"datetime"===t.xtype)for(a=0;a<r.length;a++)r[a][0]=r[a][0].getTime();s[o].marker={symbol:"circle"},!1===t.options.points&&(s[o].marker.enabled=!1)}this.drawChart(t,s,i)},vt.prototype.renderScatterChart=function(t){var e=Mt(t,t.options,{});e.chart.type="scatter",this.drawChart(t,t.data,e)},vt.prototype.renderPieChart=function(t){var e=o(mt,{});t.options.colors&&(e.colors=t.options.colors),t.options.donut&&(e.plotOptions={pie:{innerSize:"50%"}}),"legend"in t.options&&gt(e,t.options.legend),t.options.title&&zt(e,t.options.title);var n=o(e,t.options.library||{});bt(t,n,"pie");var r=[{type:"pie",name:t.options.label||"Value",data:t.data}];this.drawChart(t,r,n)},vt.prototype.renderColumnChart=function(t,e){e=e||"column";var n,r,o,a,i=t.data,s=Mt(t,t.options),l=[],c=[];for(s.chart.type=e,bt(t,s,e),n=0;n<i.length;n++)for(o=i[n],r=0;r<o.data.length;r++)l[(a=o.data[r])[0]]||(l[a[0]]=new Array(i.length),c.push(a[0])),l[a[0]][n]=a[1];"number"===t.xtype&&c.sort(f),s.xAxis.categories=c;var p,u=[];for(n=0;n<i.length;n++){for(a=[],r=0;r<c.length;r++)a.push(l[c[r]][n]||0);p={name:i[n].name||"Value",data:a},i[n].stack&&(p.stack=i[n].stack),u.push(p)}this.drawChart(t,u,s)},vt.prototype.renderBarChart=function(t){this.renderColumnChart(t,"bar")},vt.prototype.renderAreaChart=function(t){this.renderLineChart(t,"areaspline")},vt.prototype.destroy=function(t){t.chart&&t.chart.destroy()},vt.prototype.drawChart=function(t,e,n){this.destroy(t),n.chart.renderTo=t.element.id,n.series=e,t.options.code&&window.console.log("new Highcharts.Chart("+JSON.stringify(n)+");"),t.chart=new this.library.Chart(n)};var xt={},wt=[],Ct={chartArea:{},fontName:"'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",pointSize:6,legend:{textStyle:{fontSize:12,color:"#444"},alignment:"center",position:"right"},curveType:"function",hAxis:{textStyle:{color:"#666",fontSize:12},titleTextStyle:{},gridlines:{color:"transparent"},baselineColor:"#ccc",viewWindow:{}},vAxis:{textStyle:{color:"#666",fontSize:12},titleTextStyle:{},baselineColor:"#ccc",viewWindow:{}},tooltip:{textStyle:{color:"#666",fontSize:12}}},At=function(t,e,n){var r;e!==undefined?(r=e?!0===e?"right":e:"none",t.legend.position=r):n&&(t.legend.position="none")},_t=function(t,e){t.title=e,t.titleTextStyle={color:"#333",fontSize:"20px"}},St=function(t,e){t.hAxis.viewWindow.min=e},kt=function(t,e){t.hAxis.viewWindow.max=e},Tt=function(t,e){t.isStacked=e||!1},Dt=function(t,e){t.hAxis.title=e,t.hAxis.titleTextStyle.italic=!1},Lt=function(t,e){t.vAxis.title=e,t.vAxis.titleTextStyle.italic=!1},Ot=u(Ct,At,_t,function(t,e){t.vAxis.viewWindow.min=e},function(t,e){t.vAxis.viewWindow.max=e},Tt,Dt,Lt),Et=function(t){window.attachEvent?window.attachEvent("onresize",t):window.addEventListener&&window.addEventListener("resize",t,!0),t()},It=function(t){this.name="google",this.library=t};It.prototype.renderLineChart=function(t){var e=this;this.waitForLoaded(t,function(){var n={};!1===t.options.curve&&(n.curveType="none"),!1===t.options.points&&(n.pointSize=0);var r=Ot(t,t.options,n),o=e.createDataTable(t.data,t.xtype);e.drawChart(t,"LineChart",o,r)})},It.prototype.renderPieChart=function(t){var e=this;this.waitForLoaded(t,function(){var n={chartArea:{top:"10%",height:"80%"},legend:{}};t.options.colors&&(n.colors=t.options.colors),t.options.donut&&(n.pieHole=.5),"legend"in t.options&&At(n,t.options.legend),t.options.title&&_t(n,t.options.title);var r=o(o(Ct,n),t.options.library||{}),a=new e.library.visualization.DataTable;a.addColumn("string",""),a.addColumn("number","Value"),a.addRows(t.data),e.drawChart(t,"PieChart",a,r)})},It.prototype.renderColumnChart=function(t){var e=this;this.waitForLoaded(t,function(){var n=Ot(t,t.options),r=e.createDataTable(t.data,t.xtype);e.drawChart(t,"ColumnChart",r,n)})},It.prototype.renderBarChart=function(t){var e=this;this.waitForLoaded(t,function(){var n={hAxis:{gridlines:{color:"#ccc"}}},r=u(Ct,At,_t,St,kt,Tt,Dt,Lt)(t,t.options,n),o=e.createDataTable(t.data,t.xtype);e.drawChart(t,"BarChart",o,r)})},It.prototype.renderAreaChart=function(t){var e=this;this.waitForLoaded(t,function(){var n={isStacked:!0,pointSize:0,areaOpacity:.5},r=Ot(t,t.options,n),o=e.createDataTable(t.data,t.xtype);e.drawChart(t,"AreaChart",o,r)})},It.prototype.renderGeoChart=function(t){var e=this;this.waitForLoaded(t,function(){var n={legend:"none",colorAxis:{colors:t.options.colors||["#f6c7b6","#ce502d"]}},r=o(o(Ct,n),t.options.library||{}),a=new e.library.visualization.DataTable;a.addColumn("string",""),a.addColumn("number",t.options.label||"Value"),a.addRows(t.data),e.drawChart(t,"GeoChart",a,r)})},It.prototype.renderScatterChart=function(t){var e=this;this.waitForLoaded(t,function(){var n,r,o,a,i={},s=Ot(t,t.options,i),l=t.data,c=[];for(n=0;n<l.length;n++)for(l[n].name=l[n].name||"Value",a=l[n].data,r=0;r<a.length;r++){var p=new Array(l.length+1);p[0]=a[r][0],p[n+1]=a[r][1],c.push(p)}for((o=new e.library.visualization.DataTable).addColumn("number",""),n=0;n<l.length;n++)o.addColumn("number",l[n].name);o.addRows(c),e.drawChart(t,"ScatterChart",o,s)})},It.prototype.renderTimeline=function(t){var e=this;this.waitForLoaded(t,"timeline",function(){var n={legend:"none"};t.options.colors&&(n.colors=t.options.colors);var r=o(o(Ct,n),t.options.library||{}),a=new e.library.visualization.DataTable;a.addColumn({type:"string",id:"Name"}),a.addColumn({type:"date",id:"Start"}),a.addColumn({type:"date",id:"End"}),a.addRows(t.data),t.element.style.lineHeight="normal",e.drawChart(t,"Timeline",a,r)})},It.prototype.destroy=function(t){t.chart&&t.chart.clearChart()},It.prototype.drawChart=function(t,e,n,r){this.destroy(t),t.options.code&&window.console.log("var data = new google.visualization.DataTable("+n.toJSON()+");\nvar chart = new google.visualization."+e+"(element);\nchart.draw(data, "+JSON.stringify(r)+");"),t.chart=new this.library.visualization[e](t.element),Et(function(){t.chart.draw(n,r)})},It.prototype.waitForLoaded=function(t,e,n){var r=this;if(n||(n=e,e="corechart"),wt.push({pack:e,callback:n}),xt[e])this.runCallbacks();else{xt[e]=!0;var o={packages:[e],callback:function(){r.runCallbacks()}},a=t.__config();a.language&&(o.language=a.language),"corechart"===e&&a.mapsApiKey&&(o.mapsApiKey=a.mapsApiKey),this.library.charts.load("current",o)}},It.prototype.runCallbacks=function(){for(var t,e=this,n=0;n<wt.length;n++)t=wt[n],e.library.visualization&&("corechart"===t.pack&&e.library.visualization.LineChart||"timeline"===t.pack&&e.library.visualization.Timeline)&&(t.callback(),wt.splice(n,1),n--)},It.prototype.createDataTable=function(t,e){var n,r,o,a,i,c=[],p=[];for(n=0;n<t.length;n++)for(o=t[n],t[n].name=t[n].name||"Value",r=0;r<o.data.length;r++)a=o.data[r],c[i="datetime"===e?a[0].getTime():a[0]]||(c[i]=new Array(t.length),p.push(i)),c[i][n]=l(a[1]);var u,f=[],y=!0;for(r=0;r<p.length;r++)n=p[r],"datetime"===e?(u=new Date(l(n)),y=y&&g(u)):u="number"===e?l(n):n,f.push([u].concat(c[n]));if("datetime"===e)f.sort(d);else if("number"===e){for(f.sort(h),n=0;n<f.length;n++)f[n][0]=s(f[n][0]);e="string"}var m=new this.library.visualization.DataTable;for(e="datetime"===e&&y?"date":e,m.addColumn(e,""),n=0;n<t.length;n++)m.addColumn("number",t[n].name);return m.addRows(f),m};var jt=[],Bt=0,Nt=4,Ft={},Ht=[],Rt=function(t,e){return t="number"===e?l(t):"datetime"===e?c(t):s(t)},Pt=function(t,e){var n,r,o=[];for(r=0;r<t.length;r++)"bubble"===e?o.push([l(t[r][0]),l(t[r][1]),l(t[r][2])]):(n=Rt(t[r][0],e),o.push([n,l(t[r][1])]));return"datetime"===e?o.sort(d):"number"===e&&o.sort(h),o},Wt=function(t,e,n){var r;if("string"==typeof t&&(r=t,!(t=document.getElementById(t))))throw new Error("No element with id "+r);this.element=t,this.options=o(Ut.options,n||{}),this.dataSource=e,Ut.charts[t.id]=this,E(this,e),this.options.refresh&&this.startRefresh()};Wt.prototype.getElement=function(){return this.element},Wt.prototype.getDataSource=function(){return this.dataSource},Wt.prototype.getData=function(){return this.data},Wt.prototype.getOptions=function(){return this.options},Wt.prototype.getChartObject=function(){return this.chart},Wt.prototype.getAdapter=function(){return this.adapter},Wt.prototype.updateData=function(t,e){this.dataSource=t,e&&this.__updateOptions(e),E(this,t)},Wt.prototype.setOptions=function(t){this.__updateOptions(t),this.redraw()},Wt.prototype.redraw=function(){E(this,this.rawData)},Wt.prototype.refreshData=function(){if("string"==typeof this.dataSource){var t=-1===this.dataSource.indexOf("?")?"?":"&";E(this,this.dataSource+t+"_="+(new Date).getTime())}},Wt.prototype.startRefresh=function(){var t=this,e=this.options.refresh;if(!this.intervalId){if(!e)throw new Error("No refresh interval");this.intervalId=setInterval(function(){t.refreshData()},1e3*e)}},Wt.prototype.stopRefresh=function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},Wt.prototype.toImage=function(){return"chartjs"===this.adapter?this.chart.toBase64Image():null},Wt.prototype.destroy=function(){this.__adapterObject&&this.__adapterObject.destroy(this),this.__enterEvent&&B(this.element,"mouseover",this.__enterEvent),this.__leaveEvent&&B(this.element,"mouseout",this.__leaveEvent)},Wt.prototype.__updateOptions=function(t){var e=t.refresh&&t.refresh!==this.options.refresh;this.options=o(Ut.options,t),e&&(this.stopRefresh(),this.startRefresh())},Wt.prototype.__render=function(){this.data=this.__processData(),W(this.__chartName(),this)},Wt.prototype.__config=function(){return Ft};var Ut={LineChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return G(this)},e.prototype.__chartName=function(){return"LineChart"},e}(Wt),PieChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return K(this)},e.prototype.__chartName=function(){return"PieChart"},e}(Wt),ColumnChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return G(this,null,!0)},e.prototype.__chartName=function(){return"ColumnChart"},e}(Wt),BarChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return G(this,null,!0)},e.prototype.__chartName=function(){return"BarChart"},e}(Wt),AreaChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return G(this)},e.prototype.__chartName=function(){return"AreaChart"},e}(Wt),GeoChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return K(this)},e.prototype.__chartName=function(){return"GeoChart"},e}(Wt),ScatterChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return G(this,"number")},e.prototype.__chartName=function(){return"ScatterChart"},e}(Wt),BubbleChart:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){return G(this,"bubble")},e.prototype.__chartName=function(){return"BubbleChart"},e}(Wt),Timeline:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.__processData=function(){var t,e=this.rawData;for(t=0;t<e.length;t++)e[t][1]=c(e[t][1]),e[t][2]=c(e[t][2]);return e},e.prototype.__chartName=function(){return"Timeline"},e}(Wt),charts:{},configure:function(t){for(var e in t)t.hasOwnProperty(e)&&(Ft[e]=t[e])},eachChart:function(t){for(var e in Ut.charts)Ut.charts.hasOwnProperty(e)&&t(Ut.charts[e])},config:Ft,options:{},adapters:Ht,addAdapter:H};return Ut});