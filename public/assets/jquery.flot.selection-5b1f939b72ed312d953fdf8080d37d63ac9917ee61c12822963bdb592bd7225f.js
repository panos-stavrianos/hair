/* Flot plugin for selecting regions of a plot.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin supports these options:

selection: {
	mode: null or "x" or "y" or "xy",
	color: color,
	shape: "round" or "miter" or "bevel",
	minSize: number of pixels
}

Selection support is enabled by setting the mode to one of "x", "y" or "xy".
In "x" mode, the user will only be able to specify the x range, similarly for
"y" mode. For "xy", the selection becomes a rectangle where both ranges can be
specified. "color" is color of the selection (if you need to change the color
later on, you can get to it with plot.getOptions().selection.color). "shape"
is the shape of the corners of the selection.

"minSize" is the minimum size a selection can be in pixels. This value can
be customized to determine the smallest size a selection can be and still
have the selection rectangle be displayed. When customizing this value, the
fact that it refers to pixels, not axis units must be taken into account.
Thus, for example, if there is a bar graph in time mode with BarWidth set to 1
minute, setting "minSize" to 1 will not make the minimum selection size 1
minute, but rather 1 pixel. Note also that setting "minSize" to 0 will prevent
"plotunselected" events from being fired when the user clicks the mouse without
dragging.

When selection support is enabled, a "plotselected" event will be emitted on
the DOM element you passed into the plot function. The event handler gets a
parameter with the ranges selected on the axes, like this:

	placeholder.bind( "plotselected", function( event, ranges ) {
		alert("You selected " + ranges.xaxis.from + " to " + ranges.xaxis.to)
		// similar for yaxis - with multiple axes, the extra ones are in
		// x2axis, x3axis, ...
	});

The "plotselected" event is only fired when the user has finished making the
selection. A "plotselecting" event is fired during the process with the same
parameters as the "plotselected" event, in case you want to know what's
happening while it's happening,

A "plotunselected" event with no arguments is emitted when the user clicks the
mouse to remove the selection. As stated above, setting "minSize" to 0 will
destroy this behavior.

The plugin allso adds the following methods to the plot object:

- setSelection( ranges, preventEvent )

  Set the selection rectangle. The passed in ranges is on the same form as
  returned in the "plotselected" event. If the selection mode is "x", you
  should put in either an xaxis range, if the mode is "y" you need to put in
  an yaxis range and both xaxis and yaxis if the selection mode is "xy", like
  this:

	setSelection({ xaxis: { from: 0, to: 10 }, yaxis: { from: 40, to: 60 } });

  setSelection will trigger the "plotselected" event when called. If you don't
  want that to happen, e.g. if you're inside a "plotselected" handler, pass
  true as the second parameter. If you are using multiple axes, you can
  specify the ranges on any of those, e.g. as x2axis/x3axis/... instead of
  xaxis, the plugin picks the first one it sees.

- clearSelection( preventEvent )

  Clear the selection rectangle. Pass in true to avoid getting a
  "plotunselected" event.

- getSelection()

  Returns the current selection in the same format as the "plotselected"
  event. If there's currently no selection, the function returns null.

*/
!function(e){function t(t){function n(e){h.active&&(a(e),t.getPlaceholder().trigger("plotselecting",[s()]))}function o(t){1==t.which&&(document.body.focus(),document.onselectstart!==undefined&&null==m.onselectstart&&(m.onselectstart=document.onselectstart,document.onselectstart=function(){return!1}),document.ondrag!==undefined&&null==m.ondrag&&(m.ondrag=document.ondrag,document.ondrag=function(){return!1}),l(h.first,t),h.active=!0,x=function(e){i(e)},e(document).one("mouseup",x))}function i(e){return x=null,document.onselectstart!==undefined&&(document.onselectstart=m.onselectstart),document.ondrag!==undefined&&(document.ondrag=m.ondrag),h.active=!1,a(e),g()?r():(t.getPlaceholder().trigger("plotunselected",[]),t.getPlaceholder().trigger("plotselecting",[null])),!1}function s(){if(!g())return null;if(!h.show)return null;var n={},o=h.first,i=h.second;return e.each(t.getAxes(),function(e,t){if(t.used){var s=t.c2p(o[t.direction]),r=t.c2p(i[t.direction]);n[e]={from:Math.min(s,r),to:Math.max(s,r)}}}),n}function r(){var e=s();t.getPlaceholder().trigger("plotselected",[e]),e.xaxis&&e.yaxis&&t.getPlaceholder().trigger("selected",[{x1:e.xaxis.from,y1:e.yaxis.from,x2:e.xaxis.to,y2:e.yaxis.to}])}function c(e,t,n){return t<e?e:t>n?n:t}function l(e,n){var o=t.getOptions(),i=t.getPlaceholder().offset(),s=t.getPlotOffset();e.x=c(0,n.pageX-i.left-s.left,t.width()),e.y=c(0,n.pageY-i.top-s.top,t.height()),"y"==o.selection.mode&&(e.x=e==h.first?0:t.width()),"x"==o.selection.mode&&(e.y=e==h.first?0:t.height())}function a(e){null!=e.pageX&&(l(h.second,e),g()?(h.show=!0,t.triggerRedrawOverlay()):u(!0))}function u(e){h.show&&(h.show=!1,t.triggerRedrawOverlay(),e||t.getPlaceholder().trigger("plotunselected",[]))}function d(e,n){var o,i,s,r,c=t.getAxes();for(var l in c)if((o=c[l]).direction==n&&(e[r=n+o.n+"axis"]||1!=o.n||(r=n+"axis"),e[r])){i=e[r].from,s=e[r].to;break}if(e[r]||(o="x"==n?t.getXAxes()[0]:t.getYAxes()[0],i=e[n+"1"],s=e[n+"2"]),null!=i&&null!=s&&i>s){var a=i;i=s,s=a}return{from:i,to:s,axis:o}}function f(e,n){var o,i=t.getOptions();"y"==i.selection.mode?(h.first.x=0,h.second.x=t.width()):(o=d(e,"x"),h.first.x=o.axis.p2c(o.from),h.second.x=o.axis.p2c(o.to)),"x"==i.selection.mode?(h.first.y=0,h.second.y=t.height()):(o=d(e,"y"),h.first.y=o.axis.p2c(o.from),h.second.y=o.axis.p2c(o.to)),h.show=!0,t.triggerRedrawOverlay(),!n&&g()&&r()}function g(){var e=t.getOptions().selection.minSize;return Math.abs(h.second.x-h.first.x)>=e&&Math.abs(h.second.y-h.first.y)>=e}var h={first:{x:-1,y:-1},second:{x:-1,y:-1},show:!1,active:!1},m={},x=null;t.clearSelection=u,t.setSelection=f,t.getSelection=s,t.hooks.bindEvents.push(function(e,t){null!=e.getOptions().selection.mode&&(t.mousemove(n),t.mousedown(o))}),t.hooks.drawOverlay.push(function(t,n){if(h.show&&g()){var o=t.getPlotOffset(),i=t.getOptions();n.save(),n.translate(o.left,o.top);var s=e.color.parse(i.selection.color);n.strokeStyle=s.scale("a",.8).toString(),n.lineWidth=1,n.lineJoin=i.selection.shape,n.fillStyle=s.scale("a",.4).toString();var r=Math.min(h.first.x,h.second.x)+.5,c=Math.min(h.first.y,h.second.y)+.5,l=Math.abs(h.second.x-h.first.x)-1,a=Math.abs(h.second.y-h.first.y)-1;n.fillRect(r,c,l,a),n.strokeRect(r,c,l,a),n.restore()}}),t.hooks.shutdown.push(function(t,i){i.unbind("mousemove",n),i.unbind("mousedown",o),x&&e(document).unbind("mouseup",x)})}e.plot.plugins.push({init:t,options:{selection:{mode:null,color:"#e8cfac",shape:"round",minSize:5}},name:"selection",version:"1.1"})}(jQuery);