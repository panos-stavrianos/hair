"use strict";!function(e){"object"==typeof module&&module.exports?module.exports=e:e(Highcharts)}(function(e){!function(e){var t=e.seriesType,n=e.seriesTypes,a=e.noop,i=e.pick,o=e.each;t("funnel","pie",{animation:!1,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1},states:{select:{color:"#cccccc",borderColor:"#000000",shadow:!1}}},{animate:a,translate:function(){var e,t,n,i,s,l,c,r,p,h,d,u=function(e,t){return/%$/.test(e)?t*parseInt(e,10)/100:parseInt(e,10)},f=0,b=this,g=b.chart,L=b.options,m=L.reversed,y=L.ignoreHiddenPoint,D=g.plotWidth,v=g.plotHeight,k=0,H=L.center,W=u(H[0],D),w=u(H[1],v),x=u(L.width,D),Y=u(L.height,v),X=u(L.neckWidth,D),A=u(L.neckHeight,v),P=w-Y/2+Y-A,T=b.data,I="left"===L.dataLabels.position?1:0;b.getWidthAt=t=function(e){return e>P||Y===A?X:X+(x-X)*(1-(e-(w-Y/2))/(Y-A))},b.getX=function(e,n,a){return W+(n?-1:1)*(t(m?2*w-e:e)/2+a.labelDistance)},b.center=[W,w,Y],b.centerX=W,o(T,function(e){y&&!1===e.visible||(f+=e.y)}),o(T,function(o){d=null,i=f?o.y/f:0,p=(l=w-Y/2+k*Y)+i*Y,e=t(l),c=(s=W-e/2)+e,e=t(p),h=(r=W-e/2)+e,l>P?(s=r=W-X/2,c=h=W+X/2):p>P&&(d=p,e=t(P),h=(r=W-e/2)+e,p=P),m&&(l=2*w-l,p=2*w-p,d=d?2*w-d:null),n=["M",s,l,"L",c,l,h,p],d&&n.push(h,d,r,d),n.push(r,p,"Z"),o.shapeType="path",o.shapeArgs={d:n},o.percentage=100*i,o.plotX=W,o.plotY=(l+(d||p))/2,o.tooltipPos=[W,o.plotY],o.slice=a,o.half=I,y&&!1===o.visible||(k+=i)})},sortByAngle:function(e){e.sort(function(e,t){return e.plotY-t.plotY})},drawDataLabels:function(){var e,t,a,o,s,l=this,c=l.data,r=l.options.dataLabels.distance,p=c.length;for(l.center[2]-=2*r;p--;)t=(e=(a=c[p]).half)?1:-1,s=a.plotY,a.labelDistance=i(a.options.dataLabels&&a.options.dataLabels.distance,r),l.maxLabelDistance=Math.max(a.labelDistance,l.maxLabelDistance||0),o=l.getX(s,e,a),a.labelPos=[0,s,o+(a.labelDistance-5)*t,s,o+a.labelDistance*t,s,e?"right":"left",0];n.pie.prototype.drawDataLabels.call(this)}}),t("pyramid","funnel",{neckWidth:"0%",neckHeight:"0%",reversed:!0})}(e)});