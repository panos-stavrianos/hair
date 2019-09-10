/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
!function(){function o(o,n){var t={square:function(o,n,t,i){var a=i*Math.sqrt(Math.PI)/2;o.rect(n-a,t-a,a+a,a+a)},diamond:function(o,n,t,i){var a=i*Math.sqrt(Math.PI/2);o.moveTo(n-a,t),o.lineTo(n,t-a),o.lineTo(n+a,t),o.lineTo(n,t+a),o.lineTo(n-a,t)},triangle:function(o,n,t,i,a){var s=i*Math.sqrt(2*Math.PI/Math.sin(Math.PI/3)),e=s*Math.sin(Math.PI/3);o.moveTo(n-s/2,t+e/2),o.lineTo(n+s/2,t+e/2),a||(o.lineTo(n,t-e/2),o.lineTo(n-s/2,t+e/2))},cross:function(o,n,t,i){var a=i*Math.sqrt(Math.PI)/2;o.moveTo(n-a,t-a),o.lineTo(n+a,t+a),o.moveTo(n-a,t+a),o.lineTo(n+a,t-a)}},i=n.points.symbol;t[i]&&(n.points.symbol=t[i])}function n(n){n.hooks.processDatapoints.push(o)}jQuery.plot.plugins.push({init:n,name:"symbols",version:"1.0"})}();