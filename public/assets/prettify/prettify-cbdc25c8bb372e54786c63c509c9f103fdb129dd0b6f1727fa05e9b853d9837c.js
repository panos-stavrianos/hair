// Copyright (C) 2006 Google Inc.
var prettyPrintOne,prettyPrint,IN_GLOBAL_SCOPE=!0;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function e(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=c[n])||("0"<=n&&n<="7"?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1))}function n(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function r(e){var r=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),s=[],a="^"===r[0],i=["["];a&&i.push("^");for(var l=a?1:0,o=r.length;l<o;++l){var u=r[l];if(/\\[bdsw]/i.test(u))i.push(u);else{var c,p=t(u);l+2<o&&"-"===r[l+1]?(c=t(r[l+2]),l+=2):c=p,s.push([p,c]),c<65||p>122||(c<65||p>90||s.push([32|Math.max(65,p),32|Math.min(c,90)]),c<97||p>122||s.push([-33&Math.max(97,p),-33&Math.min(c,122)]))}}s.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});var f=[],d=[];for(l=0;l<s.length;++l){(h=s[l])[0]<=d[1]+1?d[1]=Math.max(d[1],h[1]):f.push(d=h)}for(l=0;l<f.length;++l){var h=f[l];i.push(n(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&i.push("-"),i.push(n(h[1])))}return i.push("]"),i.join("")}function s(e){for(var t=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),s=t.length,l=[],o=0,u=0;o<s;++o){if("("===(p=t[o]))++u;else if("\\"===p.charAt(0)){(c=+p.substring(1))&&(c<=u?l[c]=-1:t[o]=n(c))}}for(o=1;o<l.length;++o)-1===l[o]&&(l[o]=++a);for(o=0,u=0;o<s;++o){if("("===(p=t[o]))l[++u]||(t[o]="(?:");else if("\\"===p.charAt(0)){var c;(c=+p.substring(1))&&c<=u&&(t[o]="\\"+l[c])}}for(o=0;o<s;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&i)for(o=0;o<s;++o){var p,f=(p=t[o]).charAt(0);p.length>=2&&"["===f?t[o]=r(p):"\\"!==f&&(t[o]=p.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(-33&t,32|t)+"]"}))}return t.join("")}for(var a=0,i=!1,l=!1,o=0,u=e.length;o<u;++o){if((f=e[o]).ignoreCase)l=!0;else if(/[a-z]/i.test(f.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){i=!0,l=!1;break}}var c={b:8,t:9,n:10,v:11,f:12,r:13},p=[];for(o=0,u=e.length;o<u;++o){var f;if((f=e[o]).global||f.multiline)throw new Error(""+f);p.push("(?:"+s(f)+")")}return new RegExp(p.join("|"),l?"gi":"g")}function t(e,t){function n(e){var o=e.nodeType;if(1==o){if(r.test(e.className))return;for(var u=e.firstChild;u;u=u.nextSibling)n(u);var c=e.nodeName.toLowerCase();"br"!==c&&"li"!==c||(s[l]="\n",i[l<<1]=a++,i[l++<<1|1]=e)}else if(3==o||4==o){var p=e.nodeValue;p.length&&(p=t?p.replace(/\r\n?/g,"\n"):p.replace(/[ \t\r\n]+/g," "),s[l]=p,i[l<<1]=a,a+=p.length,i[l++<<1|1]=e)}}var r=/(?:^|\s)nocode(?:\s|$)/,s=[],a=0,i=[],l=0;return n(e),{sourceCode:s.join("").replace(/\n$/,""),spans:i}}function n(e,t,n,r){if(t){var s={sourceCode:t,basePos:e};n(s),r.push.apply(r,s.decorations)}}function r(e){for(var t=undefined,n=e.firstChild;n;n=n.nextSibling){var r=n.nodeType;t=1===r?t?e:n:3===r&&U.test(n.nodeValue)?e:t}return t===e?undefined:t}function s(t,r){var s,a={};!function(){for(var n=t.concat(r),i=[],l={},o=0,u=n.length;o<u;++o){var c=n[o],p=c[3];if(p)for(var f=p.length;--f>=0;)a[p.charAt(f)]=c;var d=c[1],h=""+d;l.hasOwnProperty(h)||(i.push(d),l[h]=null)}i.push(/[\0-\uffff]/),s=e(i)}();var i=r.length,l=function(e){for(var t=e.sourceCode,o=e.basePos,c=[o,$],p=0,f=t.match(s)||[],d={},h=0,g=f.length;h<g;++h){var m,v=f[h],y=d[v],b=void 0;if("string"==typeof y)m=!1;else{var x=a[v.charAt(0)];if(x)b=v.match(x[1]),y=x[0];else{for(var w=0;w<i;++w)if(x=r[w],b=v.match(x[1])){y=x[0];break}b||(y=$)}!(m=y.length>=5&&"lang-"===y.substring(0,5))||b&&"string"==typeof b[1]||(m=!1,y=D),m||(d[v]=y)}var S=p;if(p+=v.length,m){var C=b[1],N=v.indexOf(C),_=N+C.length;b[2]&&(N=(_=v.length-b[2].length)-C.length);var P=y.substring(5);n(o+S,v.substring(0,N),l,c),n(o+S+N,C,u(P,C),c),n(o+S+_,v.substring(_),l,c)}else c.push(o+S,y)}e.decorations=c};return l}function a(e){var t=[],n=[];e.tripleQuotedStrings?t.push([E,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([E,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([E,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push([E,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(r>1?t.push([A,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([A,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push([E,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([A,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push([A,/^\/\/[^\r\n]*/,null]),n.push([A,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var a=e.regexLiterals;if(a){var i=a>1?"":"\n\r",l=i?".":"[\\S\\s]",o="/(?=[^/*"+i+"])(?:[^/\\x5B\\x5C"+i+"]|\\x5C"+l+"|\\x5B(?:[^\\x5C\\x5D"+i+"]|\\x5C"+l+")*(?:\\x5D|$))+/";n.push(["lang-regex",RegExp("^"+M+"("+o+")")])}var u=e.types;u&&n.push([k,u]);var c=(""+e.keywords).replace(/^ | $/g,"");c.length&&n.push([L,new RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([$,/^\s+/,null," \r\n\t\xa0"]);var p="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(p+="(?!s*/)"),n.push([R,/^@[a-z_$][a-z_$@0-9]*/i,null],[k,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[$,/^[a-z_$][a-z_$@0-9]*/i,null],[R,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[$,/^\\[\s\S]?/,null],[T,new RegExp(p),null]),s(t,n)}function i(e,t,n){function r(e){var t=e.nodeType;if(1!=t||a.test(e.className)){if((3==t||4==t)&&n){var o=e.nodeValue,u=o.match(i);if(u){var c=o.substring(0,u.index);e.nodeValue=c;var p=o.substring(u.index+u[0].length);if(p)e.parentNode.insertBefore(l.createTextNode(p),e.nextSibling);s(e),c||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)s(e),e.parentNode&&e.parentNode.removeChild(e);else for(var f=e.firstChild;f;f=f.nextSibling)r(f)}function s(e){function t(e,n){var r=n?e.cloneNode(!1):e,s=e.parentNode;if(s){var a=t(s,1),i=e.nextSibling;a.appendChild(r);for(var l=i;l;l=i)i=l.nextSibling,a.appendChild(l)}return r}for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var n,r=t(e.nextSibling,0);(n=r.parentNode)&&1===n.nodeType;)r=n;u.push(r)}for(var a=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,l=e.ownerDocument,o=l.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var u=[o],c=0;c<u.length;++c)r(u[c]);t===(0|t)&&u[0].setAttribute("value",t);var p=l.createElement("ol");p.className="linenums";for(var f=Math.max(0,t-1|0)||0,d=(c=0,u.length);c<d;++c)(o=u[c]).className="L"+(c+f)%10,o.firstChild||o.appendChild(l.createTextNode("\xa0")),p.appendChild(o);e.appendChild(p)}function l(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var n,r,s=/\n/g,a=e.sourceCode,i=a.length,l=0,o=e.spans,u=o.length,c=0,p=e.decorations,f=p.length,d=0;for(p[f]=i,r=n=0;r<f;)p[r]!==p[r+2]?(p[n++]=p[r++],p[n++]=p[r++]):r+=2;for(f=n,r=n=0;r<f;){for(var h=p[r],g=p[r+1],m=r+2;m+2<=f&&p[m+1]===g;)m+=2;p[n++]=h,p[n++]=g,r=m}f=p.length=n;var v,y=e.sourceNode;y&&(v=y.style.display,y.style.display="none");try{for(;c<u;){o[c];var b,x=o[c+2]||i,w=p[d+2]||i,S=(m=Math.min(x,w),o[c+1]);if(1!==S.nodeType&&(b=a.substring(l,m))){t&&(b=b.replace(s,"\r")),S.nodeValue=b;var C=S.ownerDocument,N=C.createElement("span");N.className=p[d+1];var _=S.parentNode;_.replaceChild(N,S),N.appendChild(S),l<x&&(o[c+1]=S=C.createTextNode(a.substring(m,x)),_.insertBefore(S,N.nextSibling))}(l=m)>=x&&(c+=2),l>=w&&(d+=2)}}finally{y&&(y.style.display=v)}}function o(e,t){for(var n=t.length;--n>=0;){var r=t[n];G.hasOwnProperty(r)?d.console&&console.warn("cannot override language handler %s",r):G[r]=e}}function u(e,t){return e&&G.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),G[e]}function c(e){var n=e.langExtension;try{var r=t(e.sourceNode,e.pre),s=r.sourceCode;e.sourceCode=s,e.spans=r.spans,e.basePos=0,u(n,s)(e),l(e)}catch(a){d.console&&console.log(a&&a.stack||a)}}function p(e,t,n){var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&i(r,n,!0),c({langExtension:t,numberLines:n,sourceNode:r,pre:1}),r.innerHTML}function f(e,t){function n(e){return a.getElementsByTagName(e)}function s(){for(var t=d.PR_SHOULD_USE_CONTINUATION?g.now()+250:Infinity;m<u.length&&g.now()<t;m++){for(var n=u[m],a=C,o=n;o=o.previousSibling;){var p=o.nodeType,f=(7===p||8===p)&&o.nodeValue;if(f?!/^\??prettify\b/.test(f):3!==p||/\S/.test(o.nodeValue))break;if(f){a={},f.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){a[t]=n});break}}var h=n.className;if((a!==C||y.test(h))&&!b.test(h)){for(var N=!1,_=n.parentNode;_;_=_.parentNode){var P=_.tagName;if(S.test(P)&&_.className&&y.test(_.className)){N=!0;break}}if(!N){n.className+=" prettyprinted";var E,L,A=a.lang;if(!A)!(A=h.match(v))&&(E=r(n))&&w.test(E.tagName)&&(A=E.className.match(v)),A&&(A=A[1]);if(x.test(n.tagName))L=1;else{var k=n.currentStyle,R=l.defaultView,T=k?k.whiteSpace:R&&R.getComputedStyle?R.getComputedStyle(n,null).getPropertyValue("white-space"):0;L=T&&"pre"===T.substring(0,3)}var $=a.linenums;($="true"===$||+$)||($=!!($=h.match(/\blinenums\b(?::(\d+))?/))&&(!$[1]||!$[1].length||+$[1])),$&&i(n,$,L),c({langExtension:A,sourceNode:n,numberLines:$,pre:L})}}}m<u.length?setTimeout(s,250):"function"==typeof e&&e()}for(var a=t||document.body,l=a.ownerDocument||document,o=[n("pre"),n("code"),n("xmp")],u=[],p=0;p<o.length;++p)for(var f=0,h=o[p].length;f<h;++f)u.push(o[p][f]);o=null;var g=Date;g.now||(g={now:function(){return+new Date}});var m=0,v=/\blang(?:uage)?-([\w.]+)(?!\S)/,y=/\bprettyprint\b/,b=/\bprettyprinted\b/,x=/pre|xmp/i,w=/^code$/i,S=/^(?:pre|code|xmp)$/i,C={};s()}var d=window,h=["break,continue,do,else,for,if,return,while"],g=[[h,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],m=[g,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],v=[g,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],y=[v,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],b="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",x=[g,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],w="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",S=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],C=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],N=[h,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],_=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],P=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,E="str",L="kwd",A="com",k="typ",R="lit",T="pun",$="pln",O="tag",I="dec",D="src",z="atn",j="atv",B="nocode",M="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",U=/\S/,V=a({keywords:[m,y,x,w,S,C,_],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),G={};o(V,["default-code"]),o(s([],[[$,/^[^<?]+/],[I,/^<!\w[^>]*(?:>|$)/],[A,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[T,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),o(s([[$,/^[\s]+/,null," \t\r\n"],[j,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[O,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[z,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[T,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),o(s([],[[j,/^[\s\S]+/]]),["uq.val"]),o(a({keywords:m,hashComments:!0,cStyleComments:!0,types:P}),["c","cc","cpp","cxx","cyc","m"]),o(a({keywords:"null,true,false"}),["json"]),o(a({keywords:y,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:P}),["cs"]),o(a({keywords:v,cStyleComments:!0}),["java"]),o(a({keywords:_,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),o(a({keywords:S,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),o(a({keywords:w,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),o(a({keywords:C,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),o(a({keywords:x,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),o(a({keywords:b,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),o(a({keywords:N,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),o(s([],[[E,/^[\s\S]+/]]),["regex"]);var F=d.PR={createSimpleLexer:s,registerLangHandler:o,sourceDecorator:a,PR_ATTRIB_NAME:z,PR_ATTRIB_VALUE:j,PR_COMMENT:A,PR_DECLARATION:I,PR_KEYWORD:L,PR_LITERAL:R,PR_NOCODE:B,PR_PLAIN:$,PR_PUNCTUATION:T,PR_SOURCE:D,PR_STRING:E,PR_TAG:O,PR_TYPE:k,prettyPrintOne:IN_GLOBAL_SCOPE?d.prettyPrintOne=p:prettyPrintOne=p,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?d.prettyPrint=f:prettyPrint=f};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return F})}();