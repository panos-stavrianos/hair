!function(o,e){"function"==typeof define&&define.amd?define("pnotify.nonblock",["jquery","pnotify"],e):"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("./pnotify")):e(o.jQuery,o.PNotify)}(this,function(o,e){var n,t=/^on/,i=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,c=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,l=/^(scroll|resize|(un)?load|abort|error)$/,s=function(e,n){var s;e=e.toLowerCase(),document.createEvent&&this.dispatchEvent?((e=e.replace(t,"")).match(i)?(o(this).offset(),(s=document.createEvent("MouseEvents")).initMouseEvent(e,n.bubbles,n.cancelable,n.view,n.detail,n.screenX,n.screenY,n.clientX,n.clientY,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.button,n.relatedTarget)):e.match(c)?(s=document.createEvent("UIEvents")).initUIEvent(e,n.bubbles,n.cancelable,n.view,n.detail):e.match(l)&&(s=document.createEvent("HTMLEvents")).initEvent(e,n.bubbles,n.cancelable),s&&this.dispatchEvent(s)):(e.match(t)||(e="on"+e),s=document.createEventObject(n),this.fireEvent(e,s))},a=function(e,t,i){e.elem.addClass("ui-pnotify-nonblock-hide");var c=document.elementFromPoint(t.clientX,t.clientY);e.elem.removeClass("ui-pnotify-nonblock-hide");var l=o(c),a=l.css("cursor");"auto"===a&&"A"===c.tagName&&(a="pointer"),e.elem.css("cursor","auto"!==a?a:"default"),n&&n.get(0)==c||(n&&(s.call(n.get(0),"mouseleave",t.originalEvent),s.call(n.get(0),"mouseout",t.originalEvent)),s.call(c,"mouseenter",t.originalEvent),s.call(c,"mouseover",t.originalEvent)),s.call(c,i,t.originalEvent),n=l};e.prototype.options.nonblock={nonblock:!1},e.prototype.modules.nonblock={init:function(o){var e=this;o.elem.on({mouseenter:function(n){e.options.nonblock&&n.stopPropagation(),e.options.nonblock&&o.elem.addClass("ui-pnotify-nonblock-fade")},mouseleave:function(t){e.options.nonblock&&t.stopPropagation(),n=null,o.elem.css("cursor","auto"),e.options.nonblock&&"out"!==o.animating&&o.elem.removeClass("ui-pnotify-nonblock-fade")},mouseover:function(o){e.options.nonblock&&o.stopPropagation()},mouseout:function(o){e.options.nonblock&&o.stopPropagation()},mousemove:function(n){e.options.nonblock&&(n.stopPropagation(),a(o,n,"onmousemove"))},mousedown:function(n){e.options.nonblock&&(n.stopPropagation(),n.preventDefault(),a(o,n,"onmousedown"))},mouseup:function(n){e.options.nonblock&&(n.stopPropagation(),n.preventDefault(),a(o,n,"onmouseup"))},click:function(n){e.options.nonblock&&(n.stopPropagation(),a(o,n,"onclick"))},dblclick:function(n){e.options.nonblock&&(n.stopPropagation(),a(o,n,"ondblclick"))}})}}});