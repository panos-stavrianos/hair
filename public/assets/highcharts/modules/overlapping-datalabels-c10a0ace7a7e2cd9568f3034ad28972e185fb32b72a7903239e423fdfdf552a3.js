"use strict";!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){var a,e,n,i,l;e=(a=t).Chart,n=a.each,i=a.objectEach,l=a.pick,(0,a.addEvent)(e.prototype,"render",function(){var t=[];n(this.labelCollectors||[],function(a){t=t.concat(a())}),n(this.yAxis||[],function(a){a.options.stackLabels&&!a.options.stackLabels.allowOverlap&&i(a.stacks,function(a){i(a,function(a){t.push(a.label)})})}),n(this.series||[],function(a){var e=a.options.dataLabels,i=a.dataLabelCollections||["dataLabel"];(e.enabled||a._hasPointLabels)&&!e.allowOverlap&&a.visible&&n(i,function(e){n(a.points,function(a){a[e]&&(a[e].labelrank=l(a.labelrank,a.shapeArgs&&a.shapeArgs.height),t.push(a[e]))})})}),this.hideOverlappingLabels(t)}),e.prototype.hideOverlappingLabels=function(t){var a,e,i,l,o,r,s,c,p,h,d,u=t.length,b=function(t,a,e,n,i,l,o,r){return!(i>t+e||i+o<t||l>a+n||l+r<a)};for(e=0;e<u;e++)(a=t[e])&&(a.oldOpacity=a.opacity,a.newOpacity=1,a.width||(d=a.getBBox(),a.width=d.width,a.height=d.height));for(t.sort(function(t,a){return(a.labelrank||0)-(t.labelrank||0)}),e=0;e<u;e++)for(l=t[e],i=e+1;i<u;++i)o=t[i],l&&o&&l!==o&&l.placed&&o.placed&&0!==l.newOpacity&&0!==o.newOpacity&&(r=l.alignAttr,s=o.alignAttr,c=l.parentGroup,p=o.parentGroup,h=2*(l.box?0:l.padding||0),b(r.x+c.translateX,r.y+c.translateY,l.width-h,l.height-h,s.x+p.translateX,s.y+p.translateY,o.width-h,o.height-h)&&((l.labelrank<o.labelrank?l:o).newOpacity=0));n(t,function(t){var a,e;t&&(e=t.newOpacity,t.oldOpacity!==e&&t.placed&&(e?t.show(!0):a=function(){t.hide()},t.alignAttr.opacity=e,t[t.isOld?"animate":"attr"](t.alignAttr,null,a)),t.isOld=!0)})}});