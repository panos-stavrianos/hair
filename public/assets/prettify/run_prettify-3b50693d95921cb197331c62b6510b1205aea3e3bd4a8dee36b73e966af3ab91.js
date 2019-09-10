// Copyright (C) 2013 Google Inc.
var IN_GLOBAL_SCOPE=!1;!function(){"use strict";function e(e){var t=o.addEventListener,n=!1,r=!0,l=t?"addEventListener":"attachEvent",u=t?"removeEventListener":"detachEvent",c=t?"":"on",d=function(t){"readystatechange"==t.type&&"complete"!=o.readyState||(("load"==t.type?a:o)[u](c+t.type,d,!1),!n&&(n=!0)&&e.call(a,t.type||t))},f=function(){try{i.doScroll("left")}catch(e){return void s(f,50)}d("poll")};if("complete"==o.readyState)e.call(a,"lazy");else{if(o.createEventObject&&i.doScroll){try{r=!a.frameElement}catch(p){}r&&f()}o[l](c+"DOMContentLoaded",d,!1),o[l](c+"readystatechange",d,!1),a[l](c+"load",d,!1)}}function t(e){function t(r){if(r!==n){var a=o.createElement("link");a.rel="stylesheet",a.type="text/css",r+1<n&&(a.error=a.onerror=function(){t(r+1)}),a.href=e[r],l.appendChild(a)}}var n=e.length;t(0)}function n(){x||s(r,0)}function r(){h&&e(function(){var e=v.length;S(e?function(){for(var t=0;t<e;++t)!function(e){s(function(){a.exports[v[e]].apply(a,arguments)},0)}(t)}:void 0)})}for(var a=window,s=a.setTimeout,o=document,i=o.documentElement,l=o.head||o.getElementsByTagName("head")[0]||i,u="",c=o.scripts,d=c.length;--d>=0;){var f=c[d],p=f.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(p){u=p[1]||"",f.parentNode.removeChild(f);break}}var h=!0,g=[],m=[],v=[];u.replace(/[?&]([^&=]+)=([^&]+)/g,function(e,t,n){n=decodeURIComponent(n),"autorun"==(t=decodeURIComponent(t))?h=!/^[0fn]/i.test(n):"lang"==t?g.push(n):"skin"==t?m.push(n):"callback"==t&&v.push(n)});for(var y="https://google-code-prettify.googlecode.com/svn/loader",b=(d=0,g.length);d<b;++d)!function(){var e=o.createElement("script");e.onload=e.onerror=e.onreadystatechange=function(){!e||e.readyState&&!/loaded|complete/.test(e.readyState)||(e.onerror=e.onload=e.onreadystatechange=null,--x,n(),e.parentNode&&e.parentNode.removeChild(e),e=null)},e.type="text/javascript",e.src=y+"/lang-"+encodeURIComponent(g[d])+".js",l.insertBefore(e,l.firstChild)}(g[d]);var x=g.length,w=[];for(d=0,b=m.length;d<b;++d)w.push(y+"/skins/"+encodeURIComponent(m[d])+".css");w.push(y+"/prettify.css"),t(w);var S=function(){var e;
// Copyright (C) 2006 Google Inc.
return window.PR_SHOULD_USE_CONTINUATION=!0,function(){function t(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=c[n])||("0"<=n&&n<="7"?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1))}function n(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function r(e){var r=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),a=[],s="^"===r[0],o=["["];s&&o.push("^");for(var i=s?1:0,l=r.length;i<l;++i){var u=r[i];if(/\\[bdsw]/i.test(u))o.push(u);else{var c,d=t(u);i+2<l&&"-"===r[i+1]?(c=t(r[i+2]),i+=2):c=d,a.push([d,c]),c<65||d>122||(c<65||d>90||a.push([32|Math.max(65,d),32|Math.min(c,90)]),c<97||d>122||a.push([-33&Math.max(97,d),-33&Math.min(c,122)]))}}a.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});var f=[],p=[];for(i=0;i<a.length;++i){(h=a[i])[0]<=p[1]+1?p[1]=Math.max(p[1],h[1]):f.push(p=h)}for(i=0;i<f.length;++i){var h=f[i];o.push(n(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&o.push("-"),o.push(n(h[1])))}return o.push("]"),o.join("")}function a(e){for(var t=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=t.length,i=[],l=0,u=0;l<a;++l){if("("===(d=t[l]))++u;else if("\\"===d.charAt(0)){(c=+d.substring(1))&&(c<=u?i[c]=-1:t[l]=n(c))}}for(l=1;l<i.length;++l)-1===i[l]&&(i[l]=++s);for(l=0,u=0;l<a;++l){if("("===(d=t[l]))i[++u]||(t[l]="(?:");else if("\\"===d.charAt(0)){var c;(c=+d.substring(1))&&c<=u&&(t[l]="\\"+i[c])}}for(l=0;l<a;++l)"^"===t[l]&&"^"!==t[l+1]&&(t[l]="");if(e.ignoreCase&&o)for(l=0;l<a;++l){var d,f=(d=t[l]).charAt(0);d.length>=2&&"["===f?t[l]=r(d):"\\"!==f&&(t[l]=d.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(-33&t,32|t)+"]"}))}return t.join("")}for(var s=0,o=!1,i=!1,l=0,u=e.length;l<u;++l){if((f=e[l]).ignoreCase)i=!0;else if(/[a-z]/i.test(f.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){o=!0,i=!1;break}}var c={b:8,t:9,n:10,v:11,f:12,r:13},d=[];for(l=0,u=e.length;l<u;++l){var f;if((f=e[l]).global||f.multiline)throw new Error(""+f);d.push("(?:"+a(f)+")")}return new RegExp(d.join("|"),i?"gi":"g")}function n(e,t){function n(e){var l=e.nodeType;if(1==l){if(r.test(e.className))return;for(var u=e.firstChild;u;u=u.nextSibling)n(u);var c=e.nodeName.toLowerCase();"br"!==c&&"li"!==c||(a[i]="\n",o[i<<1]=s++,o[i++<<1|1]=e)}else if(3==l||4==l){var d=e.nodeValue;d.length&&(d=t?d.replace(/\r\n?/g,"\n"):d.replace(/[ \t\r\n]+/g," "),a[i]=d,o[i<<1]=s,s+=d.length,o[i++<<1|1]=e)}}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],s=0,o=[],i=0;return n(e),{sourceCode:a.join("").replace(/\n$/,""),spans:o}}function r(e,t,n,r){if(t){var a={sourceCode:t,basePos:e};n(a),r.push.apply(r,a.decorations)}}function a(e){for(var t=undefined,n=e.firstChild;n;n=n.nextSibling){var r=n.nodeType;t=1===r?t?e:n:3===r&&G.test(n.nodeValue)?e:t}return t===e?undefined:t}function o(e,n){var a,s={};!function(){for(var r=e.concat(n),o=[],i={},l=0,u=r.length;l<u;++l){var c=r[l],d=c[3];if(d)for(var f=d.length;--f>=0;)s[d.charAt(f)]=c;var p=c[1],h=""+p;i.hasOwnProperty(h)||(o.push(p),i[h]=null)}o.push(/[\0-\uffff]/),a=t(o)}();var o=n.length,i=function(e){for(var t=e.sourceCode,l=e.basePos,u=[l,O],c=0,f=t.match(a)||[],p={},h=0,g=f.length;h<g;++h){var m,v=f[h],y=p[v],b=void 0;if("string"==typeof y)m=!1;else{var x=s[v.charAt(0)];if(x)b=v.match(x[1]),y=x[0];else{for(var w=0;w<o;++w)if(x=n[w],b=v.match(x[1])){y=x[0];break}b||(y=O)}!(m=y.length>=5&&"lang-"===y.substring(0,5))||b&&"string"==typeof b[1]||(m=!1,y=z),m||(p[v]=y)}var S=c;if(c+=v.length,m){var C=b[1],N=v.indexOf(C),E=N+C.length;b[2]&&(N=(E=v.length-b[2].length)-C.length);var _=y.substring(5);r(l+S,v.substring(0,N),i,u),r(l+S+N,C,d(_,C),u),r(l+S+E,v.substring(E),i,u)}else u.push(l+S,y)}e.decorations=u};return i}function i(e){var t=[],n=[];e.tripleQuotedStrings?t.push([R,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([R,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([R,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push([R,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(r>1?t.push([P,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([P,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push([R,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([P,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push([P,/^\/\/[^\r\n]*/,null]),n.push([P,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var a=e.regexLiterals;if(a){var s=a>1?"":"\n\r",i=s?".":"[\\S\\s]",l="/(?=[^/*"+s+"])(?:[^/\\x5B\\x5C"+s+"]|\\x5C"+i+"|\\x5B(?:[^\\x5C\\x5D"+s+"]|\\x5C"+i+")*(?:\\x5D|$))+/";n.push(["lang-regex",RegExp("^"+V+"("+l+")")])}var u=e.types;u&&n.push([T,u]);var c=(""+e.keywords).replace(/^ | $/g,"");c.length&&n.push([A,new RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([O,/^\s+/,null," \r\n\t\xa0"]);var d="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(d+="(?!s*/)"),n.push([$,/^@[a-z_$][a-z_$@0-9]*/i,null],[T,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[O,/^[a-z_$][a-z_$@0-9]*/i,null],[$,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[O,/^\\[\s\S]?/,null],[I,new RegExp(d),null]),o(t,n)}function l(e,t,n){function r(e){var t=e.nodeType;if(1!=t||s.test(e.className)){if((3==t||4==t)&&n){var l=e.nodeValue,u=l.match(o);if(u){var c=l.substring(0,u.index);e.nodeValue=c;var d=l.substring(u.index+u[0].length);if(d)e.parentNode.insertBefore(i.createTextNode(d),e.nextSibling);a(e),c||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(var f=e.firstChild;f;f=f.nextSibling)r(f)}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var s=t(a,1),o=e.nextSibling;s.appendChild(r);for(var i=o;i;i=o)o=i.nextSibling,s.appendChild(i)}return r}for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var n,r=t(e.nextSibling,0);(n=r.parentNode)&&1===n.nodeType;)r=n;u.push(r)}for(var s=/(?:^|\s)nocode(?:\s|$)/,o=/\r\n?|\n/,i=e.ownerDocument,l=i.createElement("li");e.firstChild;)l.appendChild(e.firstChild);for(var u=[l],c=0;c<u.length;++c)r(u[c]);t===(0|t)&&u[0].setAttribute("value",t);var d=i.createElement("ol");d.className="linenums";for(var f=Math.max(0,t-1|0)||0,p=(c=0,u.length);c<p;++c)(l=u[c]).className="L"+(c+f)%10,l.firstChild||l.appendChild(i.createTextNode("\xa0")),d.appendChild(l);e.appendChild(d)}function u(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var n,r,a=/\n/g,s=e.sourceCode,o=s.length,i=0,l=e.spans,u=l.length,c=0,d=e.decorations,f=d.length,p=0;for(d[f]=o,r=n=0;r<f;)d[r]!==d[r+2]?(d[n++]=d[r++],d[n++]=d[r++]):r+=2;for(f=n,r=n=0;r<f;){for(var h=d[r],g=d[r+1],m=r+2;m+2<=f&&d[m+1]===g;)m+=2;d[n++]=h,d[n++]=g,r=m}f=d.length=n;var v,y=e.sourceNode;y&&(v=y.style.display,y.style.display="none");try{for(;c<u;){l[c];var b,x=l[c+2]||o,w=d[p+2]||o,S=(m=Math.min(x,w),l[c+1]);if(1!==S.nodeType&&(b=s.substring(i,m))){t&&(b=b.replace(a,"\r")),S.nodeValue=b;var C=S.ownerDocument,N=C.createElement("span");N.className=d[p+1];var E=S.parentNode;E.replaceChild(N,S),N.appendChild(S),i<x&&(l[c+1]=S=C.createTextNode(s.substring(m,x)),E.insertBefore(S,N.nextSibling))}(i=m)>=x&&(c+=2),i>=w&&(p+=2)}}finally{y&&(y.style.display=v)}}function c(e,t){for(var n=t.length;--n>=0;){var r=t[n];H.hasOwnProperty(r)?g.console&&console.warn("cannot override language handler %s",r):H[r]=e}}function d(e,t){return e&&H.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),H[e]}function f(e){var t=e.langExtension;try{var r=n(e.sourceNode,e.pre),a=r.sourceCode;e.sourceCode=a,e.spans=r.spans,e.basePos=0,d(t,a)(e),u(e)}catch(s){g.console&&console.log(s&&s.stack||s)}}function p(e,t,n){var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&l(r,n,!0),f({langExtension:t,numberLines:n,sourceNode:r,pre:1}),r.innerHTML}function h(e,t){function n(e){return o.getElementsByTagName(e)}function r(){for(var t=g.PR_SHOULD_USE_CONTINUATION?m.now()+250:Infinity;v<c.length&&m.now()<t;v++){for(var n=c[v],o=N,u=n;u=u.previousSibling;){var d=u.nodeType,p=(7===d||8===d)&&u.nodeValue;if(p?!/^\??prettify\b/.test(p):3!==d||/\S/.test(u.nodeValue))break;if(p){o={},p.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){o[t]=n});break}}var h=n.className;if((o!==N||b.test(h))&&!x.test(h)){for(var E=!1,_=n.parentNode;_;_=_.parentNode){var L=_.tagName;if(C.test(L)&&_.className&&b.test(_.className)){E=!0;break}}if(!E){n.className+=" prettyprinted";var k,R,A=o.lang;if(!A)!(A=h.match(y))&&(k=a(n))&&S.test(k.tagName)&&(A=k.className.match(y)),A&&(A=A[1]);if(w.test(n.tagName))R=1;else{var P=n.currentStyle,T=i.defaultView,$=P?P.whiteSpace:T&&T.getComputedStyle?T.getComputedStyle(n,null).getPropertyValue("white-space"):0;R=$&&"pre"===$.substring(0,3)}var I=o.linenums;(I="true"===I||+I)||(I=!!(I=h.match(/\blinenums\b(?::(\d+))?/))&&(!I[1]||!I[1].length||+I[1])),I&&l(n,I,R),f({langExtension:A,sourceNode:n,numberLines:I,pre:R})}}}v<c.length?s(r,250):"function"==typeof e&&e()}for(var o=t||document.body,i=o.ownerDocument||document,u=[n("pre"),n("code"),n("xmp")],c=[],d=0;d<u.length;++d)for(var p=0,h=u[d].length;p<h;++p)c.push(u[d][p]);u=null;var m=Date;m.now||(m={now:function(){return+new Date}});var v=0,y=/\blang(?:uage)?-([\w.]+)(?!\S)/,b=/\bprettyprint\b/,x=/\bprettyprinted\b/,w=/pre|xmp/i,S=/^code$/i,C=/^(?:pre|code|xmp)$/i,N={};r()}var g=window,m=["break,continue,do,else,for,if,return,while"],v=[[m,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],y=[v,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],b=[v,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],x=[b,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],w="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",S=[v,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],C="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",N=[m,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],E=[m,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],_=[m,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],L=[m,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],k=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,R="str",A="kwd",P="com",T="typ",$="lit",I="pun",O="pln",D="tag",j="dec",z="src",B="atn",M="atv",U="nocode",V="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",G=/\S/,F=i({keywords:[y,x,S,C,N,E,L],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),H={};c(F,["default-code"]),c(o([],[[O,/^[^<?]+/],[j,/^<!\w[^>]*(?:>|$)/],[P,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[I,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),c(o([[O,/^[\s]+/,null," \t\r\n"],[M,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[D,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[B,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[I,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),c(o([],[[M,/^[\s\S]+/]]),["uq.val"]),c(i({keywords:y,hashComments:!0,cStyleComments:!0,types:k}),["c","cc","cpp","cxx","cyc","m"]),c(i({keywords:"null,true,false"}),["json"]),c(i({keywords:x,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:k}),["cs"]),c(i({keywords:b,cStyleComments:!0}),["java"]),c(i({keywords:L,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),c(i({keywords:N,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),c(i({keywords:C,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),c(i({keywords:E,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),c(i({keywords:S,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),c(i({keywords:w,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),c(i({keywords:_,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),c(o([],[[R,/^[\s\S]+/]]),["regex"]);var q=g.PR={createSimpleLexer:o,registerLangHandler:c,sourceDecorator:i,PR_ATTRIB_NAME:B,PR_ATTRIB_VALUE:M,PR_COMMENT:P,PR_DECLARATION:j,PR_KEYWORD:A,PR_LITERAL:$,PR_NOCODE:U,PR_PLAIN:O,PR_PUNCTUATION:I,PR_SOURCE:z,PR_STRING:R,PR_TAG:D,PR_TYPE:T,prettyPrintOne:IN_GLOBAL_SCOPE?g.prettyPrintOne=p:p,prettyPrint:e=IN_GLOBAL_SCOPE?g.prettyPrint=h:e=h};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return q})}(),e}();n()}();