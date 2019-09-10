"use strict";!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){var s,i,r,a,o;i=(s=t).seriesType,r=s.seriesTypes,a=s.each,o=s.pick,i("variwide","column",{pointPadding:0,groupPadding:0},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],processData:function(){var t=this;this.totalZ=0,this.relZ=[],r.column.prototype.processData.call(this),a(this.zData,function(s,i){t.relZ[i]=t.totalZ,t.totalZ+=s}),this.xAxis.categories&&(this.xAxis.variwide=!0)},postTranslate:function(t,s){var i=this.xAxis,r=this.relZ,a=t,e=i.len,p=this.totalZ,n=a/r.length*e,h=(a+1)/r.length*e,l=o(r[a],p)/p*e;return l+(s-n)*(o(r[a+1],p)/p*e-l)/(h-n)},translate:function(){var t=this.options.crisp;this.options.crisp=!1,r.column.prototype.translate.call(this),this.options.crisp=t;var s=this.chart.inverted,i=this.borderWidth%2/2;a(this.points,function(t,r){var a=this.postTranslate(r,t.shapeArgs.x),o=this.postTranslate(r,t.shapeArgs.x+t.shapeArgs.width);this.options.crisp&&(a=Math.round(a)-i,o=Math.round(o)-i),t.shapeArgs.x=a,t.shapeArgs.width=o-a,t.tooltipPos[s?1:0]=this.postTranslate(r,t.tooltipPos[s?1:0])},this)}},{isValid:function(){return s.isNumber(this.y,!0)&&s.isNumber(this.z,!0)}}),s.Tick.prototype.postTranslate=function(t,s,i){t[s]=this.axis.pos+this.axis.series[0].postTranslate(i,t[s]-this.axis.pos)},s.wrap(s.Tick.prototype,"getPosition",function(t,s,i){var r=this.axis,a=t.apply(this,Array.prototype.slice.call(arguments,1)),o=s?"x":"y";return r.categories&&r.variwide&&(this[o+"Orig"]=a[o],this.postTranslate(a,o,i)),a}),s.wrap(s.Tick.prototype,"getLabelPosition",function(t,s,i,r,a,o,e,p){var n,h=Array.prototype.slice.call(arguments,1),l=a?"x":"y";return this.axis.variwide&&"number"==typeof this[l+"Orig"]&&(h[a?0:1]=this[l+"Orig"]),n=t.apply(this,h),this.axis.variwide&&this.axis.categories&&this.postTranslate(n,l,p),n})});