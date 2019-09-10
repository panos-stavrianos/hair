"use strict";!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){var e,i,n,o,r,a,l,s,h,c,d,u,p,f,g,m,x,y,b,w,v,M,A,C,S=(e=function(t){return"function"==typeof t},function(t){var i=this,n=i.graphic,o=t.animate,r=t.attr,a=t.onComplete,l=t.css,s=t.group,h=t.renderer,c=t.shapeArgs,d=t.shapeType;i.shouldDraw()?(n||(i.graphic=n=h[d](c).add(s)),n.css(l).attr(r).animate(o,undefined,a)):n&&n.animate(o,undefined,function(){i.graphic=n=n.destroy(),e(a)&&a()}),n&&n.addClass(i.getClassName(),!0)});n=S,o=(i=t).each,r=i.extend,a=i.isArray,l=i.isNumber,s=i.isObject,h=i.Series,c=function(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)},d=function(t,e){var n,o=!1,r=t.rect;return t.lastCollidedWith&&(n=t.lastCollidedWith.rect,(o=c(r,n))||delete t.lastCollidedWith),o||(o=!!i.find(e,function(e){var i;return n=e.rect,(i=c(r,n))&&(t.lastCollidedWith=e),i})),o},u=function(t,e){var i=e.field,n=!1,o=i.width*i.width+i.height*i.height,r=.2*t;return t<=1e4&&(n={x:r*Math.cos(r),y:r*Math.sin(r)},Math.min(Math.abs(n.x),Math.abs(n.y))<o||(n=!1)),n},p=function(t){var e=Math.ceil((Math.sqrt(t)-1)/2),i=2*e+1,n=Math.pow(i,2),o=function(t){return"boolean"==typeof t},r=!1;return i-=1,t<=1e4&&(o(r)&&t>=n-i&&(r={x:e-(n-t),y:-e}),n-=i,o(r)&&t>=n-i&&(r={x:-e,y:n-t-e}),n-=i,o(r)&&(r=t>=n-i?{x:n-t-e,y:e}:{x:e,y:e-(n-t-i)}),r.x*=5,r.y*=5),r},f=function(t,e){var i=p(t,e),n=e.field;return i&&(i.x*=n.ratio),i},g=function(t){return Math.round(t*(Math.random()+.5)/2)},m=function(t,e,i){var n=2*Math.max(Math.abs(i.top),Math.abs(i.bottom)),o=1/(2*Math.max(Math.abs(i.left),Math.abs(i.right)))*t,r=1/n*e;return Math.min(o,r)},x=function(t,e){var i=t/e;return{width:256*i,height:256,ratio:i}},y=function(t,e,i){var n=(i-e)/(t-1);return e+Math.floor(Math.random()*t)*n},b=function(t,e){var i=t.getBBox(),n={left:-e.width/2,right:e.width/2,top:-e.height/2,bottom:e.height/2};return!(n.left<i.x&&n.right>i.x+i.width&&n.top<i.y&&n.bottom>i.y+i.height)},w=function(t,e){for(var i=e.placed,n=e.element,o=e.field,a=e.clientRect,l=e.spiral,h=1,c={x:0,y:0},u=t.rect=r({},a);(d(t,i)||b(n,o))&&!1!==c;)c=l(h,{field:o}),s(c)&&(u.left=a.left+c.x,u.right=u.left+u.width,u.top=a.top+c.y,u.bottom=u.top+u.height),h++;return c},v=function(t,e){return(!l(t.left)||t.left>e.left)&&(t.left=e.left),(!l(t.right)||t.right<e.right)&&(t.right=e.right),(!l(t.top)||t.top>e.top)&&(t.top=e.top),(!l(t.bottom)||t.bottom<e.bottom)&&(t.bottom=e.bottom),t},M={animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"Impact, sans-serif"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.weight}</b><br/>'}},A={animate:h.prototype.animate,bindAxes:function(){var t={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};h.prototype.bindAxes.call(this),r(this.yAxis.options,t),r(this.xAxis.options,t)},deriveFontSize:function(t){var e=25;return Math.floor(e*t)},drawPoints:function(){var t,e=this,i=e.hasRendered,n=e.xAxis,a=e.yAxis,l=e.chart,h=e.group,c=e.options,d=c.animation,u=l.renderer,p=u.text().add(h),f=[],g=e.placementStrategy[c.placementStrategy],y=e.spirals[c.spiral],b=c.rotation,M=e.points.map(function(t){return t.weight}),A=Math.max.apply(null,M),C=x(n.len,a.len),S=e.points.sort(function(t,e){return e.weight-t.weight});o(S,function(t){var n,o,a,l=1/A*t.weight,m=r({fontSize:e.deriveFontSize(l)+"px",fill:t.color},c.style),x=g(t,{data:S,field:C,placed:f,rotation:b}),M={align:"center",x:x.x,y:x.y,text:t.name,rotation:x.rotation};p.css(m).attr(M),t.clientRect=a=r({},p.element.getBoundingClientRect()),o=w(t,{clientRect:a,element:p,field:C,placed:f,spiral:y}),s(o)?(M.x+=o.x,M.y+=o.y,r(x,{left:M.x-a.width/2,right:M.x+a.width/2,top:M.y-a.height/2,bottom:M.y+a.height/2}),C=v(C,x),f.push(t),t.isNull=!1):t.isNull=!0,d&&(n={x:M.x,y:M.y},i?(delete M.x,delete M.y):(M.x=0,M.y=0)),t.draw({animate:n,attr:M,css:m,group:h,renderer:u,shapeArgs:undefined,shapeType:"text"})}),p=p.destroy(),t=m(n.len,a.len,C),e.group.attr({scaleX:t,scaleY:t})},hasData:function(){var t=this;return s(t)&&!0===t.visible&&a(t.points)&&t.points.length>0},placementStrategy:{random:function(t,e){var i=e.field,n=e.rotation;return{x:g(i.width)-i.width/2,y:g(i.height)-i.height/2,rotation:y(n.orientations,n.from,n.to)}},center:function(t,e){var i=e.rotation;return{x:0,y:0,rotation:y(i.orientations,i.from,i.to)}}},pointArrayMap:["weight"],spirals:{archimedean:u,rectangular:f,square:p},getPlotBox:function(){var t=this,e=t.chart,i=e.inverted,n=t[i?"yAxis":"xAxis"],o=t[i?"xAxis":"yAxis"],r=n?n.len:e.plotWidth,a=o?o.len:e.plotHeight;return{translateX:(n?n.left:e.plotLeft)+r/2,translateY:(o?o.top:e.plotTop)+a/2,scaleX:1,scaleY:1}}},C={draw:n,shouldDraw:function(){return!this.isNull}},i.seriesType("wordcloud","column",M,A,C)});