/* Flot plugin for thresholding data.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin supports these options:

	series: {
		threshold: {
			below: number
			color: colorspec
		}
	}

It can also be applied to a single series, like this:

	$.plot( $("#placeholder"), [{
		data: [ ... ],
		threshold: { ... }
	}])

An array can be passed for multiple thresholding, like this:

	threshold: [{
		below: number1
		color: color1
	},{
		below: number2
		color: color2
	}]

These multiple threshold objects can be passed in any order since they are
sorted by the processing function.

The data points below "below" are drawn with the specified color. This makes
it easy to mark points below 0, e.g. for budget data.

Internally, the plugin works by splitting the data into two series, above and
below the threshold. The extra series below the threshold will have its label
cleared and the special "originSeries" attribute set to the original series.
You may need to check for this in hover events.

*/
!function(o){function s(s){function t(s,t,n,l,h){var r,e,i,p,u,a=n.pointsize,f=o.extend({},t);f.datapoints={points:[],pointsize:a,format:n.format},f.label=null,f.color=h,f.threshold=null,f.originSeries=t,f.data=[];var d,c=n.points,g=t.lines.show,v=[],b=[];for(r=0;r<c.length;r+=a){if(e=c[r],u=p,p=(i=c[r+1])<l?v:b,g&&u!=p&&null!=e&&r>0&&null!=c[r-a]){var w=e+(l-i)*(e-c[r-a])/(i-c[r-a+1]);for(u.push(w),u.push(l),d=2;d<a;++d)u.push(c[r+d]);for(p.push(null),p.push(null),d=2;d<a;++d)p.push(c[r+d]);for(p.push(w),p.push(l),d=2;d<a;++d)p.push(c[r+d])}for(p.push(e),p.push(i),d=2;d<a;++d)p.push(c[r+d])}if(n.points=b,f.datapoints.points=v,f.datapoints.points.length>0){var m=o.inArray(t,s.getData());s.getData().splice(m+1,0,f)}}function n(s,n,l){n.threshold&&(n.threshold instanceof Array?(n.threshold.sort(function(o,s){return o.below-s.below}),o(n.threshold).each(function(o,h){t(s,n,l,h.below,h.color)})):t(s,n,l,n.threshold.below,n.threshold.color))}s.hooks.processDatapoints.push(n)}var t={series:{threshold:null}};o.plot.plugins.push({init:s,options:t,name:"threshold",version:"1.2"})}(jQuery);