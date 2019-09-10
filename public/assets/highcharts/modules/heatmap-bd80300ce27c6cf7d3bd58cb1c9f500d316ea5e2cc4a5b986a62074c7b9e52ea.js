"use strict";!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){var i,e,o,s,n,a,r,l,h,d,c,p,u,g;o=(i=t).Axis,s=i.Chart,n=i.color,a=i.each,r=i.extend,l=i.isNumber,h=i.Legend,d=i.LegendSymbolMixin,c=i.noop,p=i.merge,u=i.pick,g=i.wrap,i.ColorAxis||(e=i.ColorAxis=function(){this.init.apply(this,arguments)},r(e.prototype,o.prototype),r(e.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(o.prototype.keepProps),init:function(t,i){var e,s="vertical"!==t.options.legend.layout;this.coll="colorAxis",e=p(this.defaultColorAxisOptions,{side:s?2:1,reversed:!s},i,{opposite:!s,showEmpty:!1,title:null}),o.prototype.init.call(this,t,e),i.dataClasses&&this.initDataClasses(i),this.initStops(),this.horiz=s,this.zoomEnabled=!1,this.defaultLegendLength=200},initDataClasses:function(t){var i,e=this.chart,o=0,s=e.options.chart.colorCount,r=this.options,l=t.dataClasses.length;this.dataClasses=i=[],this.legendItems=[],a(t.dataClasses,function(t,a){var h;t=p(t),i.push(t),t.color||("category"===r.dataClassColor?(h=e.options.colors,s=h.length,t.color=h[o],t.colorIndex=o,++o===s&&(o=0)):t.color=n(r.minColor).tweenTo(n(r.maxColor),l<2?.5:a/(l-1)))})},setTickPositions:function(){if(!this.dataClasses)return o.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],a(this.stops,function(t){t.color=n(t[1])})},setOptions:function(t){o.prototype.setOptions.call(this,t),this.options.crosshair=this.options.marker},setAxisSize:function(){var t,i,e,o,s=this.legendSymbol,n=this.chart,a=n.options.legend||{};s?(this.left=t=s.attr("x"),this.top=i=s.attr("y"),this.width=e=s.attr("width"),this.height=o=s.attr("height"),this.right=n.chartWidth-t-e,this.bottom=n.chartHeight-i-o,this.len=this.horiz?e:o,this.pos=this.horiz?t:i):this.len=(this.horiz?a.symbolWidth:a.symbolHeight)||this.defaultLegendLength},normalizedValue:function(t){return this.isLog&&(t=this.val2lin(t)),1-(this.max-t)/(this.max-this.min||1)},toColor:function(t,i){var e,o,s,n,a,r,l=this.stops,h=this.dataClasses;if(h){for(r=h.length;r--;)if(o=(a=h[r]).from,s=a.to,(o===undefined||t>=o)&&(s===undefined||t<=s)){n=a.color,i&&(i.dataClass=r,i.colorIndex=a.colorIndex);break}}else{for(e=this.normalizedValue(t),r=l.length;r--&&!(e>l[r][0]););o=l[r]||l[r+1],e=1-((s=l[r+1]||o)[0]-e)/(s[0]-o[0]||1),n=o.color.tweenTo(s.color,e)}return n},getOffset:function(){var t=this.legendGroup,i=this.chart.axisOffset[this.side];t&&(this.axisParent=t,o.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=i)},setLegendColor:function(){var t,i=this.horiz,e=this.reversed,o=e?1:0,s=e?0:1;t=i?[o,0,s,0]:[0,s,0,o],this.legendColor={linearGradient:{x1:t[0],y1:t[1],x2:t[2],y2:t[3]},stops:this.stops}},drawLegendSymbol:function(t,i){var e=t.padding,o=t.options,s=this.horiz,n=u(o.symbolWidth,s?this.defaultLegendLength:12),a=u(o.symbolHeight,s?12:this.defaultLegendLength),r=u(o.labelPadding,s?16:30),l=u(o.itemDistance,10);this.setLegendColor(),i.legendSymbol=this.chart.renderer.rect(0,t.baseline-11,n,a).attr({zIndex:1}).add(i.legendGroup),this.legendItemWidth=n+e+(s?l:r),this.legendItemHeight=a+e+(s?r:0)},setState:c,visible:!0,setVisible:c,getSeriesExtremes:function(){var t=this.series,i=t.length;for(this.dataMin=Infinity,this.dataMax=-Infinity;i--;)t[i].valueMin!==undefined&&(this.dataMin=Math.min(this.dataMin,t[i].valueMin),this.dataMax=Math.max(this.dataMax,t[i].valueMax))},drawCrosshair:function(t,i){var e,s=i&&i.plotX,n=i&&i.plotY,a=this.pos,r=this.len;i&&((e=this.toPixels(i[i.series.colorKey]))<a?e=a-2:e>a+r&&(e=a+r+2),i.plotX=e,i.plotY=this.len-e,o.prototype.drawCrosshair.call(this,t,i),i.plotX=s,i.plotY=n,this.cross&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(t,i,e,s,n){return l(n)?this.horiz?["M",n-4,this.top-6,"L",n+4,this.top-6,n,this.top,"Z"]:["M",this.left,n,"L",this.left-6,n+6,this.left-6,n-6,"Z"]:o.prototype.getPlotLinePath.call(this,t,i,e,s)},update:function(t,i){var e=this.chart,s=e.legend;a(this.series,function(t){t.isDirtyData=!0}),t.dataClasses&&s.allItems&&(a(s.allItems,function(t){t.isDataClass&&t.legendGroup&&t.legendGroup.destroy()}),e.isDirtyLegend=!0),e.options[this.coll]=p(this.userOptions,t),o.prototype.update.call(this,t,i),this.legendItem&&(this.setLegendColor(),s.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this),o.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var t,e=this,o=this.chart,s=this.legendItems,n=o.options.legend,l=n.valueDecimals,h=n.valueSuffix||"";return s.length||a(this.dataClasses,function(n,p){var u=!0,g=n.from,f=n.to;t="",g===undefined?t="< ":f===undefined&&(t="> "),g!==undefined&&(t+=i.numberFormat(g,l)+h),g!==undefined&&f!==undefined&&(t+=" - "),f!==undefined&&(t+=i.numberFormat(f,l)+h),s.push(r({chart:o,name:t,options:{},drawLegendSymbol:d.drawRectangle,visible:!0,setState:c,isDataClass:!0,setVisible:function(){u=this.visible=!u,a(e.series,function(t){a(t.points,function(t){t.dataClass===p&&t.setVisible(u)})}),o.legend.colorizeItem(this,u)}},n))}),s},name:""}),a(["fill","stroke"],function(t){i.Fx.prototype[t+"Setter"]=function(){this.elem.attr(t,n(this.start).tweenTo(n(this.end),this.pos),null,!0)}}),g(s.prototype,"getAxes",function(t){var i=this.options.colorAxis;t.call(this),this.colorAxis=[],i&&new e(this,i)}),g(h.prototype,"getAllItems",function(t){var i=[],e=this.chart.colorAxis[0];return e&&e.options&&(e.options.showInLegend&&(e.options.dataClasses?i=i.concat(e.getDataClassLegendSymbols()):i.push(e)),a(e.series,function(t){t.options.showInLegend=!1})),i.concat(t.call(this))}),g(h.prototype,"colorizeItem",function(t,i,e){t.call(this,i,e),e&&i.legendColor&&i.legendSymbol.attr({fill:i.legendColor})}),g(h.prototype,"update",function(t){t.apply(this,[].slice.call(arguments,1)),this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},arguments[2])})),function(t){var i=t.defined,e=t.each,o=t.noop,s=t.seriesTypes;t.colorPointMixin={isValid:function(){return null!==this.value},setVisible:function(t){var i=this,o=t?"show":"hide";e(["graphic","dataLabel"],function(t){i[t]&&i[t][o]()})},setState:function(i){t.Point.prototype.setState.call(this,i),this.graphic&&this.graphic.attr({zIndex:"hover"===i?1:0})}},t.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:o,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:s.column.prototype.pointAttribs,translateColors:function(){var t=this,i=this.options.nullColor,o=this.colorAxis,s=this.colorKey;e(this.data,function(e){var n,a=e[s];(n=e.options.color||(e.isNull?i:o&&a!==undefined?o.toColor(a,e):e.color||t.color))&&(e.color=n)})},colorAttribs:function(t){var e={};return i(t.color)&&(e[this.colorProp||"fill"]=t.color),e}}}(t),function(t){var i=t.colorPointMixin,e=t.colorSeriesMixin,o=t.each,s=t.LegendSymbolMixin,n=t.merge,a=t.noop,r=t.pick,l=t.Series,h=t.seriesType,d=t.seriesTypes;h("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{normal:{animation:!0},hover:{halo:!1,brightness:.2}}},n(e,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var t;d.scatter.prototype.init.apply(this,arguments),(t=this.options).pointRange=r(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1},translate:function(){var t=this,i=t.options,e=t.xAxis,s=t.yAxis,n=i.pointPadding||0,a=function(t,i,e){return Math.min(Math.max(i,t),e)};t.generatePoints(),o(t.points,function(t){var o=(i.colsize||1)/2,l=(i.rowsize||1)/2,h=a(Math.round(e.len-e.translate(t.x-o,0,1,0,1)),-e.len,2*e.len),d=a(Math.round(e.len-e.translate(t.x+o,0,1,0,1)),-e.len,2*e.len),c=a(Math.round(s.translate(t.y-l,0,1,0,1)),-s.len,2*s.len),p=a(Math.round(s.translate(t.y+l,0,1,0,1)),-s.len,2*s.len),u=r(t.pointPadding,n);t.plotX=t.clientX=(h+d)/2,t.plotY=(c+p)/2,t.shapeType="rect",t.shapeArgs={x:Math.min(h,d)+u,y:Math.min(c,p)+u,width:Math.abs(d-h)-2*u,height:Math.abs(p-c)-2*u}}),t.translateColors()},drawPoints:function(){d.column.prototype.drawPoints.call(this),o(this.points,function(t){t.graphic.attr(this.colorAttribs(t))},this)},animate:a,getBox:a,drawLegendSymbol:s.drawRectangle,alignDataLabel:d.column.prototype.alignDataLabel,getExtremes:function(){l.prototype.getExtremes.call(this,this.valueData),this.valueMin=this.dataMin,this.valueMax=this.dataMax,l.prototype.getExtremes.call(this)}}),t.extend({haloPath:function(t){if(!t)return[];var i=this.shapeArgs;return["M",i.x-t,i.y-t,"L",i.x-t,i.y+i.height+t,i.x+i.width+t,i.y+i.height+t,i.x+i.width+t,i.y-t,"Z"]}},i))}(t)});