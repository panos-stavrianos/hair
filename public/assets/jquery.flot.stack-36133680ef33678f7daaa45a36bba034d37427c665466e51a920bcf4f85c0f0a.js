/* Flot plugin for stacking data sets rather than overlyaing them.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes the data is sorted on x (or y if stacking horizontally).
For line charts, it is assumed that if a line has an undefined gap (from a
null point), then the line above it should have the same gap - insert zeros
instead of "null" if you want another behaviour. This also holds for the start
and end of the chart. Note that stacking a mix of positive and negative values
in most instances doesn't make sense (so it looks weird).

Two or more series are stacked when their "stack" attribute is set to the same
key (which can be any number or string or just "true"). To specify the default
stack, you can set the stack option like this:

	series: {
		stack: null/false, true, or a key (number/string)
	}

You can also specify it for a single series, like this:

	$.plot( $("#placeholder"), [{
		data: [ ... ],
		stack: true
	}])

The stacking order is determined by the order of the data series in the array
(later series end up on top of the previous).

Internally, the plugin modifies the datapoints in each series, adding an
offset to the y value. For line series, extra data points are inserted through
interpolation. If there's a second y value, it's also adjusted (e.g for bar
charts or filled areas).

*/
!function(){function s(s){function n(s,n){for(var t=null,i=0;i<n.length&&s!=n[i];++i)n[i].stack==s.stack&&(t=n[i]);return t}function t(s,t,i){if(null!=t.stack&&!1!==t.stack){var l=n(t,s.getData());if(l){for(var o,e,u,f,a,p,r,h,c=i.pointsize,g=i.points,k=l.datapoints.pointsize,v=l.datapoints.points,m=[],z=t.lines.show,d=t.bars.horizontal,y=c>2&&(d?i.format[2].x:i.format[2].y),D=z&&t.lines.steps,b=!0,j=d?1:0,w=d?0:1,x=0,Q=0;!(x>=g.length);){if(r=m.length,null==g[x]){for(h=0;h<c;++h)m.push(g[x+h]);x+=c}else if(Q>=v.length){if(!z)for(h=0;h<c;++h)m.push(g[x+h]);x+=c}else if(null==v[Q]){for(h=0;h<c;++h)m.push(null);b=!0,Q+=k}else{if(o=g[x+j],e=g[x+w],f=v[Q+j],a=v[Q+w],p=0,o==f){for(h=0;h<c;++h)m.push(g[x+h]);m[r+w]+=a,p=a,x+=c,Q+=k}else if(o>f){if(z&&x>0&&null!=g[x-c]){for(u=e+(g[x-c+w]-e)*(f-o)/(g[x-c+j]-o),m.push(f),m.push(u+a),h=2;h<c;++h)m.push(g[x+h]);p=a}Q+=k}else{if(b&&z){x+=c;continue}for(h=0;h<c;++h)m.push(g[x+h]);z&&Q>0&&null!=v[Q-k]&&(p=a+(v[Q-k+w]-a)*(o-f)/(v[Q-k+j]-f)),m[r+w]+=p,x+=c}b=!1,r!=m.length&&y&&(m[r+2]+=p)}if(D&&r!=m.length&&r>0&&null!=m[r]&&m[r]!=m[r-c]&&m[r+1]!=m[r-c+1]){for(h=0;h<c;++h)m[r+c+h]=m[r+h];m[r+1]=m[r-c+1]}}i.points=m}}}s.hooks.processDatapoints.push(t)}var n={series:{stack:null}};jQuery.plot.plugins.push({init:s,options:n,name:"stack",version:"1.2"})}();