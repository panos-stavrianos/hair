"use strict";!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){var e,i,o,n,r;i=(e=t).deg2rad,o=e.isNumber,n=e.pick,r=e.relativeLength,e.CenteredSeriesMixin={getCenter:function(){var t,e,i,o=this.options,a=this.chart,l=2*(o.slicedOffset||0),s=a.plotWidth-2*l,d=a.plotHeight-2*l,h=o.center,p=[n(h[0],"50%"),n(h[1],"50%"),o.size||"100%",o.innerSize||0],c=Math.min(s,d);for(e=0;e<4;++e)i=p[e],t=e<2||2===e&&/%$/.test(i),p[e]=r(i,[s,d,c,p[2]][e])+(t?l:0);return p[3]>p[2]&&(p[3]=p[2]),p},getStartAndEndRadians:function(t,e){var n=o(t)?t:0,r=o(e)&&e>n&&e-n<360?e:n+360,a=-90;return{start:i*(n+a),end:i*(r+a)}}};var a,l=(a=function(t){return"function"==typeof t},function(t){var e=this,i=e.graphic,o=t.animate,n=t.attr,r=t.onComplete,l=t.css,s=t.group,d=t.renderer,h=t.shapeArgs,p=t.shapeType;e.shouldDraw()?(i||(e.graphic=i=d[p](h).add(s)),i.css(l).attr(n).animate(o,undefined,r)):i&&i.animate(o,undefined,function(){e.graphic=i=i.destroy(),a(r)&&r()}),i&&i.addClass(e.getClassName(),!0)}),s=function(t){var e=t.each,i=t.extend,o=function(t){return"boolean"==typeof t},n=function(t){return"function"==typeof t},r=t.pick;return{getColor:function(e,i){function n(e){var i=l&&l.colorVariation;return i&&"brightness"===i.key?t.color(e).brighten(i.to*(c/y)).get():e}var a,l,s,d,h,p,c=i.index,u=i.levelMap,v=i.parentColor,g=i.parentColorIndex,f=i.series,x=i.colors,y=i.siblings,b=f.points;return e&&(a=b[e.i],l=u[e.levelDynamic]||{},a&&(o(l.colorByPoint)?l.colorByPoint:!!f.options.colorByPoint)&&(d=a.index%(x?x.length:f.chart.options.chart.colorCount),s=x&&x[d]),h=r(a&&a.options.color,l&&l.color,s,v&&n(v),f.color),p=r(a&&a.options.colorIndex,l&&l.colorIndex,d,g,i.colorIndex)),{color:h,colorIndex:p}},setTreeValues:function a(t,l){var s,d=l.before,h=l.idRoot,p=l.mapIdToNode[h],c=!o(l.levelIsConstant)||l.levelIsConstant,u=l.points[t.i],v=u&&u.options||{},g=0,f=[];return i(t,{levelDynamic:t.level-(c?0:p.level),name:r(u&&u.name,""),visible:h===t.id||!!o(l.visible)&&l.visible}),n(d)&&(t=d(t,l)),e(t.children,function(e,o){var n=i({},l);i(n,{index:o,siblings:t.children.length,visible:t.visible}),e=a(e,n),f.push(e),e.visible&&(g+=e.val)}),t.visible=g>0||t.visible,s=r(v.value,g),i(t,{children:f,childrenTotal:g,isLeaf:t.visible&&!g,val:s}),t}}}(t);!function(t,e){var i=t.seriesType,o=t.seriesTypes,n=t.map,r=t.merge,a=t.extend,l=t.noop,s=t.each,d=e.getColor,h=t.grep,p=function(t){return"boolean"==typeof t},c=t.isNumber,u=t.isString,v=t.pick,g=t.Series,f=t.stableSort,x=t.Color,y=function(e,i,o){o=o||this,t.objectEach(e,function(t,n){i.call(o,t,n,e)})},b=t.reduce,m=function(t,e,i){var o;i=i||this,!1!==(o=e.call(i,t))&&m(o,e,i)};i("treemap","scatter",{showInLegend:!1,marker:!1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,opacity:.15,states:{hover:{borderColor:"#999999",brightness:o.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],axisTypes:o.heatmap?["xAxis","yAxis","colorAxis"]:["xAxis","yAxis"],directTouch:!0,optionalAxis:"colorAxis",getSymbol:l,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",translateColors:o.heatmap&&o.heatmap.prototype.translateColors,colorAttribs:o.heatmap&&o.heatmap.prototype.colorAttribs,trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(e,i){var o=b(e||[],function(t,e,i){var o=v(e.parent,"");return t[o]===undefined&&(t[o]=[]),t[o].push(i),t},{});return y(o,function(e,o,n){""!==o&&-1===t.inArray(o,i)&&(s(e,function(t){n[""].push(t)}),delete n[o])}),o},getTree:function(){var t=this,e=n(this.data,function(t){return t.id}),i=t.getListOfParents(this.data,e);return t.nodeMap=[],t.buildNode("",-1,0,i,null)},init:function(e,i){var o=this;g.prototype.init.call(o,e,i),o.options.allowDrillToNode&&t.addEvent(o,"click",o.onClickDrillToNode)},buildNode:function(t,e,i,o,n){var r,a,l=this,d=[],h=l.points[e],p=0;return s(o[t]||[],function(e){a=l.buildNode(l.points[e].id,e,i+1,o,t),p=Math.max(a.height+1,p),d.push(a)}),r={id:t,i:e,children:d,height:p,level:i,parent:n,visible:!1},l.nodeMap[r.id]=r,h&&(h.node=r),r},setTreeValues:function(t){var e,i=this,o=i.options,n=i.rootNode,r=i.nodeMap[n],l=!p(o.levelIsConstant)||o.levelIsConstant,d=0,h=[],c=i.points[t.i];return s(t.children,function(t){t=i.setTreeValues(t),h.push(t),t.ignore||(d+=t.val)}),f(h,function(t,e){return t.sortIndex-e.sortIndex}),e=v(c&&c.options.value,d),c&&(c.value=e),a(t,{children:h,childrenTotal:d,ignore:!(v(c&&c.visible,!0)&&e>0),isLeaf:t.visible&&!d,levelDynamic:t.level-(l?0:r.level),name:v(c&&c.name,""),sortIndex:v(c&&c.sortIndex,-e),val:e}),t},calculateChildrenAreas:function(t,e){var i,o=this,n=o.options,a=this.levelMap[t.levelDynamic+1],l=v(o[a&&a.layoutAlgorithm]&&a.layoutAlgorithm,n.layoutAlgorithm),d=n.alternateStartingDirection,p=[];i=h(t.children,function(t){return!t.ignore}),a&&a.layoutStartingDirection&&(e.direction="vertical"===a.layoutStartingDirection?0:1),p=o[l](e,i),s(i,function(t,i){var n=p[i];t.values=r(n,{val:t.childrenTotal,direction:d?1-e.direction:e.direction}),t.pointValues=r(n,{x:n.x/o.axisRatio,width:n.width/o.axisRatio}),t.children.length&&o.calculateChildrenAreas(t,t.values)})},setPointValues:function(){var t=this,e=t.xAxis,i=t.yAxis;s(t.points,function(o){var n,r,a,l,s=o.node,d=s.pointValues,h=0;h=(t.pointAttribs(o)["stroke-width"]||0)%2/2,d&&s.visible?(n=Math.round(e.translate(d.x,0,0,0,1))-h,r=Math.round(e.translate(d.x+d.width,0,0,0,1))-h,a=Math.round(i.translate(d.y,0,0,0,1))-h,l=Math.round(i.translate(d.y+d.height,0,0,0,1))-h,o.shapeType="rect",o.shapeArgs={x:Math.min(n,r),y:Math.min(a,l),width:Math.abs(r-n),height:Math.abs(l-a)},o.plotX=o.shapeArgs.x+o.shapeArgs.width/2,o.plotY=o.shapeArgs.y+o.shapeArgs.height/2):(delete o.plotX,delete o.plotY)})},setColorRecursive:function(t,e,i,o,n){var r,a,l=this,h=l&&l.chart,p=h&&h.options&&h.options.colors;t&&(r=d(t,{colors:p,index:o,levelMap:l.levelMap,parentColor:e,parentColorIndex:i,series:l,siblings:n}),(a=l.points[t.i])&&(a.color=r.color,a.colorIndex=r.colorIndex),s(t.children||[],function(e,i){l.setColorRecursive(e,r.color,r.colorIndex,i,t.children.length)}))},algorithmGroup:function(t,e,i,o){this.height=t,this.width=e,this.plot=o,this.direction=i,this.startDirection=i,this.total=0,this.nW=0,this.lW=0,this.nH=0,this.lH=0,this.elArr=[],this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(t,e){return Math.max(t/e,e/t)}},this.addElement=function(t){this.lP.total=this.elArr[this.elArr.length-1],this.total=this.total+t,0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH)),this.elArr.push(t)},this.reset=function(){this.nW=0,this.lW=0,this.elArr=[],this.total=0}},algorithmCalcPoints:function(t,e,i,o){var n,r,a,l,d,h=i.lW,p=i.lH,c=i.plot,u=0,v=i.elArr.length-1;e?(h=i.nW,p=i.nH):d=i.elArr[i.elArr.length-1],s(i.elArr,function(t){(e||u<v)&&(0===i.direction?(n=c.x,r=c.y,l=t/(a=h)):(n=c.x,r=c.y,a=t/(l=p)),o.push({x:n,y:r,width:a,height:l}),0===i.direction?c.y=c.y+l:c.x=c.x+a),u+=1}),i.reset(),0===i.direction?i.width=i.width-h:i.height=i.height-p,c.y=c.parent.y+(c.parent.height-i.height),c.x=c.parent.x+(c.parent.width-i.width),t&&(i.direction=1-i.direction),e||i.addElement(d)},algorithmLowAspectRatio:function(t,e,i){var o,n=[],r=this,a={x:e.x,y:e.y,parent:e},l=e.direction,d=0,h=i.length-1,p=new this.algorithmGroup(e.height,e.width,l,a);return s(i,function(i){o=e.width*e.height*(i.val/e.val),p.addElement(o),p.lP.nR>p.lP.lR&&r.algorithmCalcPoints(t,!1,p,n,a),d===h&&r.algorithmCalcPoints(t,!0,p,n,a),d+=1}),n},algorithmFill:function(t,e,i){var o,n,r,a,l,d=[],h=e.direction,p=e.x,c=e.y,u=e.width,v=e.height;return s(i,function(i){o=e.width*e.height*(i.val/e.val),n=p,r=c,0===h?(u-=a=o/(l=v),p+=a):(v-=l=o/(a=u),c+=l),d.push({x:n,y:r,width:a,height:l}),t&&(h=1-h)}),d},strip:function(t,e){return this.algorithmLowAspectRatio(!1,t,e)},squarified:function(t,e){return this.algorithmLowAspectRatio(!0,t,e)},sliceAndDice:function(t,e){return this.algorithmFill(!0,t,e)},stripes:function(t,e){return this.algorithmFill(!1,t,e)},translate:function(){var t,e,i,o,n,a=this,l=a.rootNode=v(a.rootNode,a.options.rootId,"");g.prototype.translate.call(a),a.levelMap=b(a.options.levels||[],function(t,e){return t[e.level]=e,t},{}),o=a.tree=a.getTree(),t=a.nodeMap[l],""===l||t&&t.children.length||(a.drillToNode("",!1),l=a.rootNode,t=a.nodeMap[l]),m(a.nodeMap[a.rootNode],function(t){var e=!1,i=t.parent;return t.visible=!0,(i||""===i)&&(e=a.nodeMap[i]),e}),m(a.nodeMap[a.rootNode].children,function(t){var e=!1;return s(t,function(t){t.visible=!0,t.children.length&&(e=(e||[]).concat(t.children))}),e}),a.setTreeValues(o),a.axisRatio=a.xAxis.len/a.yAxis.len,a.nodeMap[""].pointValues=e={x:0,y:0,width:100,height:100},a.nodeMap[""].values=i=r(e,{width:e.width*a.axisRatio,direction:"vertical"===a.options.layoutStartingDirection?0:1,val:o.val}),a.calculateChildrenAreas(o,i),a.colorAxis?a.translateColors():a.options.colorByPoint||a.setColorRecursive(a.tree),a.options.allowDrillToNode&&(n=t.pointValues,a.xAxis.setExtremes(n.x,n.x+n.width,!1),a.yAxis.setExtremes(n.y,n.y+n.height,!1),a.xAxis.setScale(),a.yAxis.setScale()),a.setPointValues()},drawDataLabels:function(){var t,e,i=this,o=h(i.points,function(t){return t.node.visible});s(o,function(o){e=i.levelMap[o.node.levelDynamic],t={style:{}},o.node.isLeaf||(t.enabled=!1),e&&e.dataLabels&&(t=r(t,e.dataLabels),i._hasPointLabels=!0),o.shapeArgs&&(t.style.width=o.shapeArgs.width,o.dataLabel&&o.dataLabel.css({width:o.shapeArgs.width+"px"})),o.dlOptions=r(t,o.options.dataLabels)}),g.prototype.drawDataLabels.call(this)},alignDataLabel:function(t){o.column.prototype.alignDataLabel.apply(this,arguments),t.dataLabel&&t.dataLabel.attr({zIndex:(t.node.zIndex||0)+1})},pointAttribs:function(t,e){var i,o,n=t&&this.levelMap[t.node.levelDynamic]||{},r=this.options,a=e&&r.states[e]||{},l=t&&t.getClassName()||"";return i={stroke:t&&t.borderColor||n.borderColor||a.borderColor||r.borderColor,"stroke-width":v(t&&t.borderWidth,n.borderWidth,a.borderWidth,r.borderWidth),dashstyle:t&&t.borderDashStyle||n.borderDashStyle||a.borderDashStyle||r.borderDashStyle,fill:t&&t.color||this.color},-1!==l.indexOf("highcharts-above-level")?(i.fill="none",i["stroke-width"]=0):-1!==l.indexOf("highcharts-internal-node-interactive")?(o=v(a.opacity,r.opacity),i.fill=x(i.fill).setOpacity(o).get(),i.cursor="pointer"):-1!==l.indexOf("highcharts-internal-node")?i.fill="none":e&&(i.fill=x(i.fill).brighten(a.brightness).get()),i},drawPoints:function(){var t=this,e=h(t.points,function(t){return t.node.visible});s(e,function(e){var i="level-group-"+e.node.levelDynamic;t[i]||(t[i]=t.chart.renderer.g(i).attr({zIndex:1e3-e.node.levelDynamic}).add(t.group)),e.group=t[i]}),o.column.prototype.drawPoints.call(this),t.options.allowDrillToNode&&s(e,function(e){e.graphic&&(e.drillId=t.options.interactByLeaf?t.drillToByLeaf(e):t.drillToByGroup(e))})},onClickDrillToNode:function(t){var e=this,i=t.point,o=i&&i.drillId;u(o)&&(i.setState(""),e.drillToNode(o))},drillToByGroup:function(t){var e=this,i=!1;return t.node.level-e.nodeMap[e.rootNode].level!=1||t.node.isLeaf||(i=t.id),i},drillToByLeaf:function(t){var e,i=this,o=!1;if(t.node.parent!==i.rootNode&&t.node.isLeaf)for(e=t.node;!o;)(e=i.nodeMap[e.parent]).parent===i.rootNode&&(o=e.id);return o},drillUp:function(){var t=this,e=t.nodeMap[t.rootNode];e&&u(e.parent)&&t.drillToNode(e.parent)},drillToNode:function(t,e){var i=this,o=i.nodeMap[t];i.idPreviousRoot=i.rootNode,i.rootNode=t,""===t?i.drillUpButton=i.drillUpButton.destroy():i.showDrillUpButton(o&&o.name||t),this.isDirty=!0,v(e,!0)&&this.chart.redraw()},showDrillUpButton:function(t){var e,i,o=this,n=t||"< Back",r=o.options.drillUpButton;r.text&&(n=r.text),this.drillUpButton?this.drillUpButton.attr({text:n}).align():(i=(e=r.theme)&&e.states,this.drillUpButton=this.chart.renderer.button(n,null,null,function(){o.drillUp()},e,i&&i.hover,i&&i.select).attr({align:r.position.align,zIndex:7}).add().align(r.position,!1,r.relativeTo||"plotBox"))},buildKDTree:l,drawLegendSymbol:t.LegendSymbolMixin.drawRectangle,getExtremes:function(){g.prototype.getExtremes.call(this,this.colorValueData),this.valueMin=this.dataMin,this.valueMax=this.dataMax,g.prototype.getExtremes.call(this)},getExtremesFromAll:!0,bindAxes:function(){var e={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};g.prototype.bindAxes.call(this),t.extend(this.yAxis.options,e),t.extend(this.xAxis.options,e)},utils:{recursive:m,reduce:b}},{getClassName:function(){var e=t.Point.prototype.getClassName.call(this),i=this.series,o=i.options;return this.node.level<=i.nodeMap[i.rootNode].level?e+=" highcharts-above-level":this.node.isLeaf||v(o.interactByLeaf,!o.allowDrillToNode)?this.node.isLeaf||(e+=" highcharts-internal-node"):e+=" highcharts-internal-node-interactive",e},isValid:function(){return this.id||c(this.value)},setState:function(e){t.Point.prototype.setState.call(this,e),this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})},setVisible:o.pie.prototype.pointClass.prototype.setVisible})}(t,s),function(t,e,i){var o=t.CenteredSeriesMixin,n=t.Series,r=t.each,a=t.extend,l=o.getCenter,s=i.getColor,d=o.getStartAndEndRadians,h=t.grep,p=function(t){return"boolean"==typeof t},c=t.isNumber,u=t.isObject,v=t.isString,g=t.merge,f=t.noop,x=t.pick,y=180/Math.PI,b=t.seriesType,m=t.seriesTypes,A=i.setTreeValues,M=t.reduce,P=function(t,e){var i=t.start,o=t.end-i,n=t.val,r=t.x,a=t.y,l=t.r,s=l+t.radius;return M(e||[],function(e,d){var h=1/n*d.val*o,p={x:r,y:a,innerR:l,r:s,radius:t.radius,start:i,end:i+h};return e.push(p),i=p.end,e},[])},R=function(t,e,i,o){return{x:t+Math.cos(i)*o,y:e+Math.sin(i)*o}},w=function(t){var e,i=u(t.shapeArgs)?t.shapeArgs:{},o=u(t.optionsSeries)?t.optionsSeries.dataLabels:{},n=u(t.optionsPoint)?t.optionsPoint.dataLabels:{},r=u(t.level)?t.level.dataLabels:{},a=g({rotationMode:"perpendicular",style:{width:i.radius}},o,r,n);return c(a.rotation)||(e=(i.end-(i.end-i.start)/2)*y%180,"parallel"===a.rotationMode&&(e-=90),e>90&&(e-=180),a.rotation=e),0===a.rotation&&(a.rotation=.001),a},C=function(t,e){var i=e.center,o=e.point,n=e.radians,r=e.innerR,a=e.idRoot,l=e.idPreviousRoot,s=e.shapeExisting,d=e.shapeRoot,h=e.shapePreviousRoot,p=e.visible,c={},u={end:t.end,start:t.start,innerR:t.innerR,r:t.r,x:i.x,y:i.y};return p?!o.graphic&&h&&((c=a===o.id?{start:n.start,end:n.end}:h.end<=t.start?{start:n.end,end:n.end}:{start:n.start,end:n.start}).innerR=c.r=r):o.graphic&&(l===o.id?u={innerR:r,r:r}:d&&(u=d.end<=s.start?{innerR:r,r:r,start:n.end,end:n.end}:{innerR:r,r:r,start:n.start,end:n.start})),{from:c,to:u}},L=function(t,e,i){var o;return t.node.isLeaf||(o=e===t.id?i[e].parent:t.id),o},I=function(t,e){var i=e.mapIdToNode[t.parent],o=e.series,n=o.chart,r=o.points[t.i],a=s(t,{colors:n&&n.options&&n.options.colors,colorIndex:o.colorIndex,colorByPoint:o.colorByPoint,index:e.index,levelMap:e.levelMap,parentColor:i&&i.color,parentColorIndex:i&&i.colorIndex,series:e.series,siblings:e.siblings});return t.color=a.color,t.colorIndex=a.colorIndex,r&&(r.color=t.color,r.colorIndex=t.colorIndex),t};b("sunburst","treemap",{center:["50%","50%"],dataLabels:{defer:!0,style:{textOverflow:"ellipsis"},rotationMode:"perpendicular"},rootId:undefined,levelIsConstant:!0},{drawDataLabels:f,drawPoints:function(){var t,e=this,i=e.levelMap,o=e.shapeRoot,l=e.group,s=e.hasRendered,d=e.rootNode,h=e.idPreviousRoot,c=e.nodeMap,u=c[h],v=u&&u.shapeArgs,g=e.points,f=e.startAndEndRadians,x=e.chart,y=x&&x.options&&x.options.chart||{},b=!p(y.animation)||y.animation,m=e.center,A={x:m[0],y:m[1]},M=m[3]/2,P=e.chart.renderer,R=!1,I=!1,T=!!(b&&s&&d!==h&&e.dataLabelsGroup);T&&(e.dataLabelsGroup.attr({opacity:0}),t=function(){var t=e;R=!0,t.dataLabelsGroup&&t.dataLabelsGroup.animate({opacity:1,visibility:"visible"})}),r(g,function(n){var r,p,u=n.node,g=i[u.levelDynamic],x=n.shapeExisting||{},y=u.shapeArgs||{},m=!(!u.visible||!u.shapeArgs);r=s&&b?C(y,{center:A,point:n,radians:f,innerR:M,idRoot:d,idPreviousRoot:h,shapeExisting:x,shapeRoot:o,shapePreviousRoot:v,visible:m}):{to:y,from:{}},a(n,{shapeExisting:y,tooltipPos:[y.plotX,y.plotY],drillId:L(n,d,c),name:""+(n.name||n.id||n.index),plotX:y.plotX,plotY:y.plotY,value:u.val,isNull:!m}),n.dlOptions=w({level:g,optionsPoint:n.options,optionsSeries:e.options,shapeArgs:y}),!I&&m&&(I=!0,p=t),n.draw({animate:r.to,attr:a(r.from,e.pointAttribs&&e.pointAttribs(n,n.selected&&"select")),onComplete:p,group:l,renderer:P,shapeType:"arc",shapeArgs:y})}),T&&I?(e.hasRendered=!1,e.options.dataLabels.defer=!0,n.prototype.drawDataLabels.call(e),e.hasRendered=!0,R&&t()):n.prototype.drawDataLabels.call(e)},pointAttribs:m.column.prototype.pointAttribs,setShapeArgs:function(t,e){var i=[],o=h(t.children,function(t){return t.visible});i=P(e,o),r(o,function(t,e){var o=i[e],n=o.start+(o.end-o.start)/2,r=o.innerR+(o.r-o.innerR)/2,a=0===o.innerR&&o.end-o.start>6.28?{x:o.x,y:o.y}:R(o.x,o.y,n,r),l=t.val?t.childrenTotal>t.val?t.childrenTotal:t.val:t.childrenTotal,s=(o.end-o.start)/(2*Math.PI),d=2*Math.PI*o.innerR;this.points[t.i]&&(this.points[t.i].innerArcLength=s*d),t.shapeArgs=g(o,{plotX:a.x,plotY:a.y}),t.values=g(o,{val:l}),t.children.length&&this.setShapeArgs(t,t.values)},this)},translate:function(){var t,e,i,o,r,a=this,s=a.options,h=a.center=l.call(a),p=a.startAndEndRadians=d(s.startAngle,s.endAngle),c=h[3]/2,u=h[2]/2,g=a.rootNode=x(a.rootNode,s.rootId,""),f=a.nodeMap,y=f&&f[g];a.shapeRoot=y&&y.shapeArgs,n.prototype.translate.call(a),a.levelMap=M(a.options.levels||[],function(t,e){return t[e.level]=e,t},{}),o=a.tree=a.getTree(),y=(f=a.nodeMap)[g],e=f[t=v(y.parent)?y.parent:""],A(o,{before:I,idRoot:g,levelIsConstant:s.levelIsConstant,levelMap:a.levelMap,mapIdToNode:f,points:a.points,series:a}),i=(u-c)/(g===t?y.height:y.height+1),r=f[""].shapeArgs={end:p.end,r:c,radius:i,start:p.start,val:e.val,x:h[0],y:h[1]},this.setShapeArgs(e,r)},animate:function(t){var e,i=this.chart,o=[i.plotWidth/2,i.plotHeight/2],n=i.plotLeft,r=i.plotTop,a=this.group;t?(e={translateX:o[0]+n,translateY:o[1]+r,scaleX:.001,scaleY:.001,rotation:10,opacity:.01},a.attr(e)):(e={translateX:n,translateY:r,scaleX:1,scaleY:1,rotation:0,opacity:1},a.animate(e,this.options.animation),this.animate=null)}},{draw:e,shouldDraw:function(){return!this.isNull}})}(t,l,s)});