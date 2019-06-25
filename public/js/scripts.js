/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

$(document).ready(function(){
    // Предотвращение отправки формы через php при нажатии на кнопку
    $('form').submit(function (e) {
        e.stopPropagation();
        e.preventDefault();
    });

    // Проверка почты на соответствие маске *@*.*
    function isEmail( mail ){
        var regex = /\S+@\S+/igm;
        return regex.test(mail);
    }


    // Очистка формы
    function clearFields( selector ){
        $(selector).each(function(){
            if( $(this).attr('name') != 'form'){
                $(this).val('');
                $(this).parent().removeClass('valid');
            }
        });
    }


    // Проверка отдельного поля на валидность
    function fieldValid( input ) {

        if( input.val() != '' ){

            if ( input.attr('type') == 'email' ){
                return isEmail( input.val() );
            } else {
                return true;
            }

        } else {
            return false;
        }

    }


    // Добавление классов полю по результатам валидации
    function fieldCheck( input ) {

        var parent = input.parent();

        if( fieldValid( input ) ){
            if( parent.hasClass('error') ){
                parent.removeClass('error')
            }
            parent.addClass('valid');

            return true;
        } else {
            if( parent.hasClass('valid') ){
                parent.removeClass('valid')
            }
            parent.addClass('error');

            return false;
        }
    }

    $('.form-input').on('change', function () {
        return fieldCheck( $(this) );
    });
    $('.form-input').on('focusout', function () {
        $(this).parent().removeClass('filling');
    });
    $('.form-input').on('input', function () {
        $(this).parent().addClass('filling');
    });


    // Проверка полей формы на отсутствие пустых полей и валидность
    function fieldsCheck( selector ){
        var checked = true;
        var focus = true;
        $(selector).each( function () {
            checked = fieldCheck( $(this) ) && checked;
            if ( focus && !checked ){
                $(this).focus();
                focus = false;
            }
        });
        return checked;
    }


    // Сбор данных с формы и формирование объекта
    function addFields( selector, object ){

        $(selector).each(function () {
            var $this = $(this);

            object[$this.attr('name')] = $this.val();
        });
    }

    function ajaxDataSend(type, url, data) {
        return $.ajax(
            {
                type: type,
                url: url,
                dataType: 'json',
                data: data,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }
        );
    }

    /*window.onSubmitReCaptcha = function (token) {
        active = false;
        sendButton.addClass('load');

        console.log('Captcha test start');
        var cResponse = {'g-recaptcha-response': grecaptcha.getResponse()};

        var capchaTest = ajaxDataSend('POST', '/captcha', cResponse);

        capchaTest.success(function(data){
            if( data.error ){
                alert('Проверка не пройдена!');
                sendButton.removeClass('load');
                active = true;
            }else{
                console.log('CaptchaTest success');
                sendForm();
            }
        });
        capchaTest.error(function(data){
            alert('При отправке сообщения произошла ошибка');
            console.log('CaptchaTest error');
            sendButton.removeClass('load');
            active = true;
        });
    };*/


    var unical, sendButton, selector;
    var active = true;
    // var thanks_show = false;

    function finalValidation() {
        if( active ){
            sendButton = $(this);
            unical = sendButton.closest('.form-id').attr('id');
            selector = '#'+unical+' .form-input';

            var validForm  = fieldsCheck( selector );

            if ( validForm ){
                /*grecaptcha.reset();
                grecaptcha.execute();*/
                active = false;
                /*if (unical == 'feedback_call' || unical == 'flats_call'){
                    thanks_show = true;
                }*/
                sendButton.addClass('load');
                sendForm();
            }
        }
    }

    $('.send-form').on('click', finalValidation);


    function sendForm() {

        var dataobj = {};

        addFields( selector, dataobj );

        var response = ajaxDataSend('POST', '/feedback/mail', dataobj);
        response.success(function(data){
            if(!data.error){
                /*if (thanks_show){
                    $('.thank').click();
                } else {
                    $('.white-popup__thanks-message').fadeIn();
                    setTimeout(function () {
                        $('.white-popup__thanks-message').fadeOut(1000);
                    }, 5000);
                }*/
                document.location.href="/thanks";
                clearFields( selector );
            }
            // thanks_show = false;
            sendButton.removeClass('load');
            active = true;
        });
        response.error(function(data){
            console.log(data);
            sendButton.removeClass('load');
            active = true;
            // thanks_show = false;
        });
    }
});
/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion = '4.6.4';
(function (window, document, location, $, undefined) {
  "use strict";
var _fotoramaClass = 'fotorama',
    _fullscreenClass = 'fullscreen',

    wrapClass = _fotoramaClass + '__wrap',
    wrapCss2Class = wrapClass + '--css2',
    wrapCss3Class = wrapClass + '--css3',
    wrapVideoClass = wrapClass + '--video',
    wrapFadeClass = wrapClass + '--fade',
    wrapSlideClass = wrapClass + '--slide',
    wrapNoControlsClass = wrapClass + '--no-controls',
    wrapNoShadowsClass = wrapClass + '--no-shadows',
    wrapPanYClass = wrapClass + '--pan-y',
    wrapRtlClass = wrapClass + '--rtl',
    wrapOnlyActiveClass = wrapClass + '--only-active',
    wrapNoCaptionsClass = wrapClass + '--no-captions',
    wrapToggleArrowsClass = wrapClass + '--toggle-arrows',

    stageClass = _fotoramaClass + '__stage',
    stageFrameClass = stageClass + '__frame',
    stageFrameVideoClass = stageFrameClass + '--video',
    stageShaftClass = stageClass + '__shaft',

    grabClass = _fotoramaClass + '__grab',
    pointerClass = _fotoramaClass + '__pointer',

    arrClass = _fotoramaClass + '__arr',
    arrDisabledClass = arrClass + '--disabled',
    arrPrevClass = arrClass + '--prev',
    arrNextClass = arrClass + '--next',
    arrArrClass = arrClass + '__arr',

    navClass = _fotoramaClass + '__nav',
    navWrapClass = navClass + '-wrap',
    navShaftClass = navClass + '__shaft',
    navDotsClass = navClass + '--dots',
    navThumbsClass = navClass + '--thumbs',
    navFrameClass = navClass + '__frame',
    navFrameDotClass = navFrameClass + '--dot',
    navFrameThumbClass = navFrameClass + '--thumb',

    fadeClass = _fotoramaClass + '__fade',
    fadeFrontClass = fadeClass + '-front',
    fadeRearClass = fadeClass + '-rear',

    shadowClass = _fotoramaClass + '__shadow',
    shadowsClass = shadowClass + 's',
    shadowsLeftClass = shadowsClass + '--left',
    shadowsRightClass = shadowsClass + '--right',

    activeClass = _fotoramaClass + '__active',
    selectClass = _fotoramaClass + '__select',

    hiddenClass = _fotoramaClass + '--hidden',

    fullscreenClass = _fotoramaClass + '--fullscreen',
    fullscreenIconClass = _fotoramaClass + '__fullscreen-icon',

    errorClass = _fotoramaClass + '__error',
    loadingClass = _fotoramaClass + '__loading',
    loadedClass = _fotoramaClass + '__loaded',
    loadedFullClass = loadedClass + '--full',
    loadedImgClass = loadedClass + '--img',

    grabbingClass = _fotoramaClass + '__grabbing',

    imgClass = _fotoramaClass + '__img',
    imgFullClass = imgClass + '--full',

    dotClass = _fotoramaClass + '__dot',
    thumbClass = _fotoramaClass + '__thumb',
    thumbBorderClass = thumbClass + '-border',

    htmlClass = _fotoramaClass + '__html',

    videoClass = _fotoramaClass + '__video',
    videoPlayClass = videoClass + '-play',
    videoCloseClass = videoClass + '-close',

    captionClass = _fotoramaClass + '__caption',
    captionWrapClass = _fotoramaClass + '__caption__wrap',

    spinnerClass = _fotoramaClass + '__spinner',

    buttonAttributes = '" tabindex="0" role="button';
var JQUERY_VERSION = $ && $.fn.jquery.split('.');

if (!JQUERY_VERSION
    || JQUERY_VERSION[0] < 1
    || (JQUERY_VERSION[0] == 1 && JQUERY_VERSION[1] < 8)) {
  throw 'Fotorama requires jQuery 1.8 or later and will not run without it.';
}
// My Underscore :-)
var _ = {};
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */

var Modernizr = (function (window, document, undefined) {

  var version = '2.6.2',

      Modernizr = {},

      docElement = document.documentElement,

      mod = 'modernizr',
      modElem = document.createElement(mod),
      mStyle = modElem.style,

      inputElem,

      toString = {}.toString,

      prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),

      omPrefixes = 'Webkit Moz O ms',

      cssomPrefixes = omPrefixes.split(' '),

      domPrefixes = omPrefixes.toLowerCase().split(' '),

      tests = {},
      inputs = {},
      attrs = {},

      classes = [],

      slice = classes.slice,

      featureName,

      injectElementWithStyles = function (rule, callback, nodes, testnames) {

        var style, ret, node, docOverflow,
            div = document.createElement('div'),
            body = document.body,
            fakeBody = body || document.createElement('body');

        if (parseInt(nodes, 10)) {
          while (nodes--) {
            node = document.createElement('div');
            node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
            div.appendChild(node);
          }
        }

        style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
        div.id = mod;
        (body ? div : fakeBody).innerHTML += style;
        fakeBody.appendChild(div);
        if (!body) {
          fakeBody.style.background = '';
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
        }

        ret = callback(div, rule);
        if (!body) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
        } else {
          div.parentNode.removeChild(div);
        }

        return !!ret;

      },
      _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = function (object, property) {
      return _hasOwnProperty.call(object, property);
    };
  }
  else {
    hasOwnProp = function (object, property) {
      return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
    };
  }


  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind (that) {

      var target = this;

      if (typeof target != "function") {
        throw new TypeError();
      }

      var args = slice.call(arguments, 1),
          bound = function () {

            if (this instanceof bound) {

              var F = function () {
              };
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

          };

      return bound;
    };
  }

  function setCss (str) {
    mStyle.cssText = str;
  }

  function setCssAll (str1, str2) {
    return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
  }

  function is (obj, type) {
    return typeof obj === type;
  }

  function contains (str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  function testProps (props, prefixed) {
    for (var i in props) {
      var prop = props[i];
      if (!contains(prop, "-") && mStyle[prop] !== undefined) {
        return prefixed == 'pfx' ? prop : true;
      }
    }
    return false;
  }

  function testDOMProps (props, obj, elem) {
    for (var i in props) {
      var item = obj[props[i]];
      if (item !== undefined) {

        if (elem === false) return props[i];

        if (is(item, 'function')) {
          return item.bind(elem || obj);
        }

        return item;
      }
    }
    return false;
  }

  function testPropsAll (prop, prefixed, elem) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
        props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    if (is(prefixed, "string") || is(prefixed, "undefined")) {
      return testProps(props, prefixed);

    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  tests['csstransforms3d'] = function () {

    var ret = !!testPropsAll('perspective');

// Chrome fails that test, ignore
//		if (ret && 'webkitPerspective' in docElement.style) {
//
//			injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
//				ret = node.offsetLeft === 9 && node.offsetHeight === 3;
//			});
//		}
    return ret;
  };

  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();

      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }

  Modernizr.addTest = function (feature, test) {
    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          Modernizr.addTest(key, feature[ key ]);
        }
      }
    } else {

      feature = feature.toLowerCase();

      if (Modernizr[feature] !== undefined) {
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      if (typeof enableClasses !== "undefined" && enableClasses) {
        docElement.className += ' ' + (test ? '' : 'no-') + feature;
      }
      Modernizr[feature] = test;

    }

    return Modernizr;
  };


  setCss('');
  modElem = inputElem = null;


  Modernizr._version = version;

  Modernizr._prefixes = prefixes;
  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;

  Modernizr.testProp = function (prop) {
    return testProps([prop]);
  };

  Modernizr.testAllProps = testPropsAll;

  Modernizr.testStyles = injectElementWithStyles;
  Modernizr.prefixed = function (prop, obj, elem) {
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      return testPropsAll(prop, obj, elem);
    }
  };

  return Modernizr;
})(window, document);
var fullScreenApi = {
      ok: false,
      is: function () {
        return false;
      },
      request: function () {
      },
      cancel: function () {
      },
      event: '',
      prefix: ''
    },
    browserPrefixes = 'webkit moz o ms khtml'.split(' ');

// check for native support
if (typeof document.cancelFullScreen != 'undefined') {
  fullScreenApi.ok = true;
} else {
  // check for fullscreen support by vendor prefix
  for (var i = 0, il = browserPrefixes.length; i < il; i++) {
    fullScreenApi.prefix = browserPrefixes[i];
    if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined') {
      fullScreenApi.ok = true;
      break;
    }
  }
}

// update methods to do something useful
if (fullScreenApi.ok) {
  fullScreenApi.event = fullScreenApi.prefix + 'fullscreenchange';
  fullScreenApi.is = function () {
    switch (this.prefix) {
      case '':
        return document.fullScreen;
      case 'webkit':
        return document.webkitIsFullScreen;
      default:
        return document[this.prefix + 'FullScreen'];
    }
  };
  fullScreenApi.request = function (el) {
    return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
  };
  fullScreenApi.cancel = function (el) {
    return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
  };
}
//fgnass.github.com/spin.js#v1.3.2

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

var Spinner,
    spinnerDefaults = {
      lines: 12, // The number of lines to draw
      length: 5, // The length of each line
      width: 2, // The line thickness
      radius: 7, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 15, // The rotation offset
      color: 'rgba(128, 128, 128, .75)',
      hwaccel: true
    },
    spinnerOverride = {
      top: 'auto',
      left: 'auto',
      className: ''
    };

(function(root, factory) {

  /* CommonJS */
  //if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  //else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  //else root.Spinner = factory()

  Spinner = factory();
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (typeof this == 'undefined') return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

/* Bez v1.0.10-g5ae0136
 * http://github.com/rdallasgray/bez
 *
 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
 *
 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
 *
 * Copyright 2011 Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
 */
function bez (coOrdArray) {
  var encodedFuncName = "bez_" + $.makeArray(arguments).join("_").replace(".", "p");
  if (typeof $['easing'][encodedFuncName] !== "function") {
    var polyBez = function (p1, p2) {
      var A = [null, null],
          B = [null, null],
          C = [null, null],
          bezCoOrd = function (t, ax) {
            C[ax] = 3 * p1[ax];
            B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax];
            A[ax] = 1 - C[ax] - B[ax];
            return t * (C[ax] + t * (B[ax] + t * A[ax]));
          },
          xDeriv = function (t) {
            return C[0] + t * (2 * B[0] + 3 * A[0] * t);
          },
          xForT = function (t) {
            var x = t, i = 0, z;
            while (++i < 14) {
              z = bezCoOrd(x, 0) - t;
              if (Math.abs(z) < 1e-3) break;
              x -= z / xDeriv(x);
            }
            return x;
          };
      return function (t) {
        return bezCoOrd(xForT(t), 1);
      }
    };
    $['easing'][encodedFuncName] = function (x, t, b, c, d) {
      return c * polyBez([coOrdArray[0], coOrdArray[1]], [coOrdArray[2], coOrdArray[3]])(t / d) + b;
    }
  }
  return encodedFuncName;
}
var $WINDOW = $(window),
    $DOCUMENT = $(document),
    $HTML,
    $BODY,

    QUIRKS_FORCE = location.hash.replace('#', '') === 'quirks',
    TRANSFORMS3D = Modernizr.csstransforms3d,
    CSS3 = TRANSFORMS3D && !QUIRKS_FORCE,
    COMPAT = TRANSFORMS3D || document.compatMode === 'CSS1Compat',
    FULLSCREEN = fullScreenApi.ok,

    MOBILE = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
    SLOW = !CSS3 || MOBILE,

    MS_POINTER = navigator.msPointerEnabled,

    WHEEL = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll",

    TOUCH_TIMEOUT = 250,
    TRANSITION_DURATION = 300,

    SCROLL_LOCK_TIMEOUT = 1400,

    AUTOPLAY_INTERVAL = 5000,
    MARGIN = 2,
    THUMB_SIZE = 64,

    WIDTH = 500,
    HEIGHT = 333,

    STAGE_FRAME_KEY = '$stageFrame',
    NAV_DOT_FRAME_KEY = '$navDotFrame',
    NAV_THUMB_FRAME_KEY = '$navThumbFrame',

    AUTO = 'auto',

    BEZIER = bez([.1, 0, .25, 1]),

    MAX_WIDTH = 99999,

    FIFTYFIFTY = '50%',

    OPTIONS = {
      // dimensions
      width: null, // 500 || '100%'
      minwidth: null,
      maxwidth: '100%', // '100%'
      height: null,
      minheight: null,
      maxheight: null,

      ratio: null, // '16/9' || 500/333 || 1.5

      margin: MARGIN,
      glimpse: 0,

      fit: 'contain', // 'cover' || 'scaledown' || 'none'

      position: FIFTYFIFTY,
      thumbposition: FIFTYFIFTY,

      // navigation, thumbs
      nav: 'dots', // 'thumbs' || false
      navposition: 'bottom', // 'top'
      navwidth: null,
      thumbwidth: THUMB_SIZE,
      thumbheight: THUMB_SIZE,
      thumbmargin: MARGIN,
      thumbborderwidth: MARGIN,
      thumbfit: 'cover', // 'contain' || 'scaledown' || 'none'

      allowfullscreen: false, // true || 'native'

      transition: 'slide', // 'crossfade' || 'dissolve'
      clicktransition: null,
      transitionduration: TRANSITION_DURATION,

      captions: true,

      hash: false,
      startindex: 0,

      loop: false,

      autoplay: false,
      stopautoplayontouch: true,

      keyboard: false,

      arrows: true,
      click: true,
      swipe: true,
      trackpad: false,

      enableifsingleframe: false,

      controlsonstart: true,

      shuffle: false,

      direction: 'ltr', // 'rtl'

      shadows: true,
      spinner: null
    },

    KEYBOARD_OPTIONS = {
      left: true,
      right: true,
      down: false,
      up: false,
      space: false,
      home: false,
      end: false
    };
function noop () {}

function minMaxLimit (value, min, max) {
  return Math.max(isNaN(min) ? -Infinity : min, Math.min(isNaN(max) ? Infinity : max, value));
}

function readTransform (css) {
  return css.match(/ma/) && css.match(/-?\d+(?!d)/g)[css.match(/3d/) ? 12 : 4];
}

function readPosition ($el) {
  if (CSS3) {
    return +readTransform($el.css('transform'));
  } else {
    return +$el.css('left').replace('px', '');
  }
}

function getTranslate (pos/*, _001*/) {
  var obj = {};
  if (CSS3) {
    obj.transform = 'translate3d(' + (pos/* + (_001 ? 0.001 : 0)*/) + 'px,0,0)'; // 0.001 to remove Retina artifacts
  } else {
    obj.left = pos;
  }
  return obj;
}

function getDuration (time) {
  return {'transition-duration': time + 'ms'};
}

function unlessNaN (value, alternative) {
  return isNaN(value) ? alternative : value;
}

function numberFromMeasure (value, measure) {
  return unlessNaN(+String(value).replace(measure || 'px', ''));
}

function numberFromPercent (value) {
  return /%$/.test(value) ? numberFromMeasure(value, '%') : undefined;
}

function numberFromWhatever (value, whole) {
  return unlessNaN(numberFromPercent(value) / 100 * whole, numberFromMeasure(value));
}

function measureIsValid (value) {
  return (!isNaN(numberFromMeasure(value)) || !isNaN(numberFromMeasure(value, '%'))) && value;
}

function getPosByIndex (index, side, margin, baseIndex) {
  ////console.log('getPosByIndex', index, side, margin, baseIndex);
  ////console.log((index - (baseIndex || 0)) * (side + (margin || 0)));

  return (index - (baseIndex || 0)) * (side + (margin || 0));
}

function getIndexByPos (pos, side, margin, baseIndex) {
  return -Math.round(pos / (side + (margin || 0)) - (baseIndex || 0));
}

function bindTransitionEnd ($el) {
  var elData = $el.data();

  if (elData.tEnd) return;

  var el = $el[0],
      transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        msTransition: 'MSTransitionEnd',
        transition: 'transitionend'
      };
  addEvent(el, transitionEndEvent[Modernizr.prefixed('transition')], function (e) {
    elData.tProp && e.propertyName.match(elData.tProp) && elData.onEndFn();
  });
  elData.tEnd = true;
}

function afterTransition ($el, property, fn, time) {
  var ok,
      elData = $el.data();

  if (elData) {
    elData.onEndFn = function () {
      if (ok) return;
      ok = true;
      clearTimeout(elData.tT);
      fn();
    };
    elData.tProp = property;

    // Passive call, just in case of fail of native transition-end event
    clearTimeout(elData.tT);
    elData.tT = setTimeout(function () {
      elData.onEndFn();
    }, time * 1.5);

    bindTransitionEnd($el);
  }
}


function stop ($el, left/*, _001*/) {
  if ($el.length) {
    var elData = $el.data();
    if (CSS3) {
      $el.css(getDuration(0));
      elData.onEndFn = noop;
      clearTimeout(elData.tT);
    } else {
      $el.stop();
    }
    var lockedLeft = getNumber(left, function () {
      return readPosition($el);
    });

    $el.css(getTranslate(lockedLeft/*, _001*/));//.width(); // `.width()` for reflow
    return lockedLeft;
  }
}

function getNumber () {
  var number;
  for (var _i = 0, _l = arguments.length; _i < _l; _i++) {
    number = _i ? arguments[_i]() : arguments[_i];
    if (typeof number === 'number') {
      break;
    }
  }

  return number;
}

function edgeResistance (pos, edge) {
  return Math.round(pos + ((edge - pos) / 1.5));
}

function getProtocol () {
  getProtocol.p = getProtocol.p || (location.protocol === 'https:' ? 'https://' : 'http://');
  return getProtocol.p;
}

function parseHref (href) {
  var a = document.createElement('a');
  a.href = href;
  return a;
}

function findVideoId (href, forceVideo) {
  if (typeof href !== 'string') return href;
  href = parseHref(href);

  var id,
      type;

  if (href.host.match(/youtube\.com/) && href.search) {
    //.log();
    id = href.search.split('v=')[1];
    if (id) {
      var ampersandPosition = id.indexOf('&');
      if (ampersandPosition !== -1) {
        id = id.substring(0, ampersandPosition);
      }
      type = 'youtube';
    }
  } else if (href.host.match(/youtube\.com|youtu\.be/)) {
    id = href.pathname.replace(/^\/(embed\/|v\/)?/, '').replace(/\/.*/, '');
    type = 'youtube';
  } else if (href.host.match(/vimeo\.com/)) {
    type = 'vimeo';
    id = href.pathname.replace(/^\/(video\/)?/, '').replace(/\/.*/, '');
  }

  if ((!id || !type) && forceVideo) {
    id = href.href;
    type = 'custom';
  }

  return id ? {id: id, type: type, s: href.search.replace(/^\?/, ''), p: getProtocol()} : false;
}

function getVideoThumbs (dataFrame, data, fotorama) {
  var img, thumb, video = dataFrame.video;
  if (video.type === 'youtube') {
    thumb = getProtocol() + 'img.youtube.com/vi/' + video.id + '/default.jpg';
    img = thumb.replace(/\/default.jpg$/, '/hqdefault.jpg');
    dataFrame.thumbsReady = true;
  } else if (video.type === 'vimeo') {
    $.ajax({
      url: getProtocol() + 'vimeo.com/api/v2/video/' + video.id + '.json',
      dataType: 'jsonp',
      success: function (json) {
        dataFrame.thumbsReady = true;
        updateData(data, {img: json[0].thumbnail_large, thumb: json[0].thumbnail_small}, dataFrame.i, fotorama);
      }
    });
  } else {
    dataFrame.thumbsReady = true;
  }

  return {
    img: img,
    thumb: thumb
  }
}

function updateData (data, _dataFrame, i, fotorama) {
  for (var _i = 0, _l = data.length; _i < _l; _i++) {
    var dataFrame = data[_i];

    if (dataFrame.i === i && dataFrame.thumbsReady) {
      var clear = {videoReady: true};
      clear[STAGE_FRAME_KEY] = clear[NAV_THUMB_FRAME_KEY] = clear[NAV_DOT_FRAME_KEY] = false;

      fotorama.splice(_i, 1, $.extend(
          {},
          dataFrame,
          clear,
          _dataFrame
      ));

      break;
    }
  }
}

function getDataFromHtml ($el) {
  var data = [];

  function getDataFromImg ($img, imgData, checkVideo) {
    var $child = $img.children('img').eq(0),
        _imgHref = $img.attr('href'),
        _imgSrc = $img.attr('src'),
        _thumbSrc = $child.attr('src'),
        _video = imgData.video,
        video = checkVideo ? findVideoId(_imgHref, _video === true) : false;

    if (video) {
      _imgHref = false;
    } else {
      video = _video;
    }

    getDimensions($img, $child, $.extend(imgData, {
      video: video,
      img: imgData.img || _imgHref || _imgSrc || _thumbSrc,
      thumb: imgData.thumb || _thumbSrc || _imgSrc || _imgHref
    }));
  }

  function getDimensions ($img, $child, imgData) {
    var separateThumbFLAG = imgData.thumb && imgData.img !== imgData.thumb,
        width = numberFromMeasure(imgData.width || $img.attr('width')),
        height = numberFromMeasure(imgData.height || $img.attr('height'));

    $.extend(imgData, {
      width: width,
      height: height,
      thumbratio: getRatio(imgData.thumbratio || (numberFromMeasure(imgData.thumbwidth || ($child && $child.attr('width')) || separateThumbFLAG || width) / numberFromMeasure(imgData.thumbheight || ($child && $child.attr('height')) || separateThumbFLAG || height)))
    });
  }

  $el.children().each(function () {
    var $this = $(this),
        dataFrame = optionsToLowerCase($.extend($this.data(), {id: $this.attr('id')}));
    if ($this.is('a, img')) {
      getDataFromImg($this, dataFrame, true);
    } else if (!$this.is(':empty')) {
      getDimensions($this, null, $.extend(dataFrame, {
        html: this,
        _html: $this.html() // Because of IE
      }));
    } else return;

    data.push(dataFrame);
  });

  return data;
}

function isHidden (el) {
  return el.offsetWidth === 0 && el.offsetHeight === 0;
}

function isDetached (el) {
  return !$.contains(document.documentElement, el);
}

function waitFor (test, fn, timeout, i) {
  if (!waitFor.i) {
    waitFor.i = 1;
    waitFor.ii = [true];
  }

  i = i || waitFor.i;

  if (typeof waitFor.ii[i] === 'undefined') {
    waitFor.ii[i] = true;
  }

  if (test()) {
    fn();
  } else {
    waitFor.ii[i] && setTimeout(function () {
      waitFor.ii[i] && waitFor(test, fn, timeout, i);
    }, timeout || 100);
  }

  return waitFor.i++;
}

waitFor.stop = function (i) {
  waitFor.ii[i] = false;
};

function setHash (hash) {
  //////console.time('setHash ' + hash);
  location.replace(location.protocol
      + '//'
      + location.host
      + location.pathname.replace(/^\/?/, '/')
      + location.search
      + '#' + hash);
  //////console.timeEnd('setHash ' + hash);
}

function fit ($el, measuresToFit, method, position) {
  var elData = $el.data(),
      measures = elData.measures;

  if (measures && (!elData.l ||
      elData.l.W !== measures.width ||
      elData.l.H !== measures.height ||
      elData.l.r !== measures.ratio ||
      elData.l.w !== measuresToFit.w ||
      elData.l.h !== measuresToFit.h ||
      elData.l.m !== method ||
      elData.l.p !== position)) {

    //console.log('fit');

    var width = measures.width,
        height = measures.height,
        ratio = measuresToFit.w / measuresToFit.h,
        biggerRatioFLAG = measures.ratio >= ratio,
        fitFLAG = method === 'scaledown',
        containFLAG = method === 'contain',
        coverFLAG = method === 'cover',
        pos = parsePosition(position);

    if (biggerRatioFLAG && (fitFLAG || containFLAG) || !biggerRatioFLAG && coverFLAG) {
      width = minMaxLimit(measuresToFit.w, 0, fitFLAG ? width : Infinity);
      height = width / measures.ratio;
    } else if (biggerRatioFLAG && coverFLAG || !biggerRatioFLAG && (fitFLAG || containFLAG)) {
      height = minMaxLimit(measuresToFit.h, 0, fitFLAG ? height : Infinity);
      width = height * measures.ratio;
    }

    $el.css({
      width: width,
      height: height,
      left: numberFromWhatever(pos.x, measuresToFit.w - width),
      top: numberFromWhatever(pos.y, measuresToFit.h- height)
    });

    elData.l = {
      W: measures.width,
      H: measures.height,
      r: measures.ratio,
      w: measuresToFit.w,
      h: measuresToFit.h,
      m: method,
      p: position
    };
  }

  return true;
}

function setStyle ($el, style) {
  var el = $el[0];
  if (el.styleSheet) {
    el.styleSheet.cssText = style;
  } else {
    $el.html(style);
  }
}

function findShadowEdge (pos, min, max) {
  return min === max ? false : pos <= min ? 'left' : pos >= max ? 'right' : 'left right';
}

function getIndexFromHash (hash, data, ok, startindex) {
  if (!ok) return false;
  if (!isNaN(hash)) return hash - (startindex ? 0 : 1);

  var index;

  for (var _i = 0, _l = data.length; _i < _l; _i++) {
    var dataFrame = data[_i];

    if (dataFrame.id === hash) {
      index = _i;
      break;
    }
  }

  return index;
}

function smartClick ($el, fn, _options) {
  _options = _options || {};

  $el.each(function () {
    var $this = $(this),
        thisData = $this.data(),
        startEvent;

    if (thisData.clickOn) return;

    thisData.clickOn = true;

    $.extend(touch($this, {
      onStart: function (e) {
        startEvent = e;
        (_options.onStart || noop).call(this, e);
      },
      onMove: _options.onMove || noop,
      onTouchEnd: _options.onTouchEnd || noop,
      onEnd: function (result) {
        ////console.log('smartClick → result.moved', result.moved);
        if (result.moved) return;
        fn.call(this, startEvent);
      }
    }), {noMove: true});
  });
}

function div (classes, child) {
  return '<div class="' + classes + '">' + (child || '') + '</div>';
}

// Fisher–Yates Shuffle
// http://bost.ocks.org/mike/shuffle/
function shuffle (array) {
  // While there remain elements to shuffle
  var l = array.length;
  while (l) {
    // Pick a remaining element
    var i = Math.floor(Math.random() * l--);

    // And swap it with the current element
    var t = array[l];
    array[l] = array[i];
    array[i] = t;
  }

  return array;
}

function clone (array) {
  return Object.prototype.toString.call(array) == '[object Array]'
      && $.map(array, function (frame) {
       return $.extend({}, frame);
      });
}

function lockScroll ($el, left, top) {
  $el
    .scrollLeft(left || 0)
    .scrollTop(top || 0);
}

function optionsToLowerCase (options) {
  if (options) {
    var opts = {};
    $.each(options, function (key, value) {
      opts[key.toLowerCase()] = value;
    });

    return opts;
  }
}

function getRatio (_ratio) {
  if (!_ratio) return;
  var ratio = +_ratio;
  if (!isNaN(ratio)) {
    return ratio;
  } else {
    ratio = _ratio.split('/');
    return +ratio[0] / +ratio[1] || undefined;
  }
}

function addEvent (el, e, fn, bool) {
  if (!e) return;
  el.addEventListener ? el.addEventListener(e, fn, !!bool) : el.attachEvent('on'+e, fn);
}

function elIsDisabled (el) {
  return !!el.getAttribute('disabled');
}

function disableAttr (FLAG) {
  return {tabindex: FLAG * -1 + '', disabled: FLAG};
}

function addEnterUp (el, fn) {
  addEvent(el, 'keyup', function (e) {
    elIsDisabled(el) || e.keyCode == 13 && fn.call(el, e);
  });
}

function addFocus (el, fn) {
  addEvent(el, 'focus', el.onfocusin = function (e) {
    fn.call(el, e);
  }, true);
}

function stopEvent (e, stopPropagation) {
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  stopPropagation && e.stopPropagation && e.stopPropagation();
}

function getDirectionSign (forward) {
  return forward ? '>' : '<';
}

function parsePosition (rule) {
  rule = (rule + '').split(/\s+/);
  return {
    x: measureIsValid(rule[0]) || FIFTYFIFTY,
    y: measureIsValid(rule[1]) || FIFTYFIFTY
  }
}
function slide ($el, options) {
  var elData = $el.data(),
      elPos = Math.round(options.pos),
      onEndFn = function () {
        elData.sliding = false;
        (options.onEnd || noop)();
      };

  if (typeof options.overPos !== 'undefined' && options.overPos !== options.pos) {
    elPos = options.overPos;
    onEndFn = function () {
      slide($el, $.extend({}, options, {overPos: options.pos, time: Math.max(TRANSITION_DURATION, options.time / 2)}))
    };
  }

  ////////console.time('var translate = $.extend');
  var translate = $.extend(getTranslate(elPos/*, options._001*/), options.width && {width: options.width});
  ////////console.timeEnd('var translate = $.extend');

  elData.sliding = true;

  if (CSS3) {
    $el.css($.extend(getDuration(options.time), translate));
    if (options.time > 10) {
      ////////console.time('afterTransition');
      afterTransition($el, 'transform', onEndFn, options.time);
      ////////console.timeEnd('afterTransition');
    } else {
      onEndFn();
    }
  } else {
    $el.stop().animate(translate, options.time, BEZIER, onEndFn);
  }
}

function fade ($el1, $el2, $frames, options, fadeStack, chain) {
  var chainedFLAG = typeof chain !== 'undefined';
  if (!chainedFLAG) {
    fadeStack.push(arguments);
    Array.prototype.push.call(arguments, fadeStack.length);
    if (fadeStack.length > 1) return;
  }

  $el1 = $el1 || $($el1);
  $el2 = $el2 || $($el2);

  var _$el1 = $el1[0],
      _$el2 = $el2[0],
      crossfadeFLAG = options.method === 'crossfade',
      onEndFn = function () {
        if (!onEndFn.done) {
          onEndFn.done = true;
          var args = (chainedFLAG || fadeStack.shift()) && fadeStack.shift();
          args && fade.apply(this, args);
          (options.onEnd || noop)(!!args);
        }
      },
      time = options.time / (chain || 1);

  $frames.removeClass(fadeRearClass + ' ' + fadeFrontClass);

  $el1
      .stop()
      .addClass(fadeRearClass);
  $el2
      .stop()
      .addClass(fadeFrontClass);

  crossfadeFLAG && _$el2 && $el1.fadeTo(0, 0);

  $el1.fadeTo(crossfadeFLAG ? time : 0, 1, crossfadeFLAG && onEndFn);
  $el2.fadeTo(time, 0, onEndFn);

  (_$el1 && crossfadeFLAG) || _$el2 || onEndFn();
}
var lastEvent,
    moveEventType,
    preventEvent,
    preventEventTimeout;

function extendEvent (e) {
  var touch = (e.touches || [])[0] || e;
  e._x = touch.pageX;
  e._y = touch.clientY;
  e._now = $.now();
}

function touch ($el, options) {
  var el = $el[0],
      tail = {},
      touchEnabledFLAG,
      startEvent,
      $target,
      controlTouch,
      touchFLAG,
      targetIsSelectFLAG,
      targetIsLinkFlag,
      tolerance,
      moved;

  function onStart (e) {
    $target = $(e.target);
    tail.checked = targetIsSelectFLAG = targetIsLinkFlag = moved = false;

    if (touchEnabledFLAG
        || tail.flow
        || (e.touches && e.touches.length > 1)
        || e.which > 1
        || (lastEvent && lastEvent.type !== e.type && preventEvent)
        || (targetIsSelectFLAG = options.select && $target.is(options.select, el))) return targetIsSelectFLAG;

    touchFLAG = e.type === 'touchstart';
    targetIsLinkFlag = $target.is('a, a *', el);
    controlTouch = tail.control;

    tolerance = (tail.noMove || tail.noSwipe || controlTouch) ? 16 : !tail.snap ? 4 : 0;

    extendEvent(e);

    startEvent = lastEvent = e;
    moveEventType = e.type.replace(/down|start/, 'move').replace(/Down/, 'Move');

    (options.onStart || noop).call(el, e, {control: controlTouch, $target: $target});

    touchEnabledFLAG = tail.flow = true;

    if (!touchFLAG || tail.go) stopEvent(e);
  }

  function onMove (e) {
    if ((e.touches && e.touches.length > 1)
        || (MS_POINTER && !e.isPrimary)
        || moveEventType !== e.type
        || !touchEnabledFLAG) {
      touchEnabledFLAG && onEnd();
      (options.onTouchEnd || noop)();
      return;
    }

    extendEvent(e);

    var xDiff = Math.abs(e._x - startEvent._x), // opt _x → _pageX
        yDiff = Math.abs(e._y - startEvent._y),
        xyDiff = xDiff - yDiff,
        xWin = (tail.go || tail.x || xyDiff >= 0) && !tail.noSwipe,
        yWin = xyDiff < 0;

    if (touchFLAG && !tail.checked) {
      if (touchEnabledFLAG = xWin) {
        stopEvent(e);
      }
    } else {
      ////console.log('onMove e.preventDefault');
      stopEvent(e);
      (options.onMove || noop).call(el, e, {touch: touchFLAG});
    }

    if (!moved && Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)) > tolerance) {
      moved = true;
    }

    tail.checked = tail.checked || xWin || yWin;
  }

  function onEnd (e) {
    //////console.time('touch.js onEnd');

    (options.onTouchEnd || noop)();

    var _touchEnabledFLAG = touchEnabledFLAG;
    tail.control = touchEnabledFLAG = false;

    if (_touchEnabledFLAG) {
      tail.flow = false;
    }

    if (!_touchEnabledFLAG || (targetIsLinkFlag && !tail.checked)) return;

    e && stopEvent(e);

    preventEvent = true;
    clearTimeout(preventEventTimeout);
    preventEventTimeout = setTimeout(function () {
      preventEvent = false;
    }, 1000);

    (options.onEnd || noop).call(el, {moved: moved, $target: $target, control: controlTouch, touch: touchFLAG, startEvent: startEvent, aborted: !e || e.type === 'MSPointerCancel'});
    //////console.timeEnd('touch.js onEnd');
  }

  function onOtherStart () {
    if (tail.flow) return;
    setTimeout(function () {
      tail.flow = true;
    }, 10);
  }

  function onOtherEnd () {
    if (!tail.flow) return;
    setTimeout(function () {
      tail.flow = false;
    }, TOUCH_TIMEOUT);
  }

  if (MS_POINTER) {
    addEvent(el, 'MSPointerDown', onStart);
    addEvent(document, 'MSPointerMove', onMove);
    addEvent(document,'MSPointerCancel', onEnd);
    addEvent(document, 'MSPointerUp', onEnd);
  } else {
    addEvent(el, 'touchstart', onStart);
    addEvent(el, 'touchmove', onMove);
    addEvent(el, 'touchend', onEnd);

    addEvent(document, 'touchstart', onOtherStart);
    addEvent(document, 'touchend', onOtherEnd);
    addEvent(document, 'touchcancel', onOtherEnd);

    $WINDOW.on('scroll', onOtherEnd);

    $el.on('mousedown', onStart);
    $DOCUMENT
        .on('mousemove', onMove)
        .on('mouseup', onEnd);
  }

  $el.on('click', 'a', function (e) {
    tail.checked && stopEvent(e);
  });

  return tail;
}

function moveOnTouch ($el, options) {
  var el = $el[0],
      elData = $el.data(),
      tail = {},
      startCoo,
      coo,
      startElPos,
      moveElPos,
      edge,
      moveTrack,
      startTime,
      endTime,
      min,
      max,
      snap,
      slowFLAG,
      controlFLAG,
      moved,
      tracked;

  function startTracking (e, noStop) {
    tracked = true;
    startCoo = coo = e._x;
    startTime = e._now;

    moveTrack = [
      [startTime, startCoo]
    ];

    startElPos = moveElPos = tail.noMove || noStop ? 0 : stop($el, (options.getPos || noop)()/*, options._001*/);

    (options.onStart || noop).call(el, e);
  }

  function onStart (e, result) {
    min = tail.min;
    max = tail.max;
    snap = tail.snap;

    slowFLAG = e.altKey;
    tracked = moved = false;

    controlFLAG = result.control;

    if (!controlFLAG && !elData.sliding) {
      startTracking(e);
    }
  }

  function onMove (e, result) {
    if (!tail.noSwipe) {
      if (!tracked) {
        startTracking(e);
      }

      coo = e._x;

      moveTrack.push([e._now, coo]);

      moveElPos = startElPos - (startCoo - coo);

      edge = findShadowEdge(moveElPos, min, max);

      if (moveElPos <= min) {
        moveElPos = edgeResistance(moveElPos, min);
      } else if (moveElPos >= max) {
        moveElPos = edgeResistance(moveElPos, max);
      }

      if (!tail.noMove) {
        $el.css(getTranslate(moveElPos/*, options._001*/));
        if (!moved) {
          moved = true;
          // only for mouse
          result.touch || MS_POINTER || $el.addClass(grabbingClass);
        }

        (options.onMove || noop).call(el, e, {pos: moveElPos, edge: edge});
      }
    }
  }

  function onEnd (result) {
    //////console.time('moveontouch.js onEnd');
    if (tail.noSwipe && result.moved) return;

    if (!tracked) {
      startTracking(result.startEvent, true);
    }

    ////console.log('onEnd');

    result.touch || MS_POINTER || $el.removeClass(grabbingClass);

    endTime = $.now();

    var _backTimeIdeal = endTime - TOUCH_TIMEOUT,
        _backTime,
        _timeDiff,
        _timeDiffLast,
        backTime = null,
        backCoo,
        virtualPos,
        limitPos,
        newPos,
        overPos,
        time = TRANSITION_DURATION,
        speed,
        friction = options.friction;

    for (var _i = moveTrack.length - 1; _i >= 0; _i--) {
      _backTime = moveTrack[_i][0];
      _timeDiff = Math.abs(_backTime - _backTimeIdeal);
      if (backTime === null || _timeDiff < _timeDiffLast) {
        backTime = _backTime;
        backCoo = moveTrack[_i][1];
      } else if (backTime === _backTimeIdeal || _timeDiff > _timeDiffLast) {
        break;
      }
      _timeDiffLast = _timeDiff;
    }

    newPos = minMaxLimit(moveElPos, min, max);

    var cooDiff = backCoo - coo,
        forwardFLAG = cooDiff >= 0,
        timeDiff = endTime - backTime,
        longTouchFLAG = timeDiff > TOUCH_TIMEOUT,
        swipeFLAG = !longTouchFLAG && moveElPos !== startElPos && newPos === moveElPos;

    if (snap) {
      newPos = minMaxLimit(Math[swipeFLAG ? (forwardFLAG ? 'floor' : 'ceil') : 'round'](moveElPos / snap) * snap, min, max);
      min = max = newPos;
    }

    if (swipeFLAG && (snap || newPos === moveElPos)) {
      speed = -(cooDiff / timeDiff);
      time *= minMaxLimit(Math.abs(speed), options.timeLow, options.timeHigh);
      virtualPos = Math.round(moveElPos + speed * time / friction);

      if (!snap) {
        newPos = virtualPos;
      }

      if (!forwardFLAG && virtualPos > max || forwardFLAG && virtualPos < min) {
        limitPos = forwardFLAG ? min : max;
        overPos = virtualPos - limitPos;
        if (!snap) {
          newPos = limitPos;
        }
        overPos = minMaxLimit(newPos + overPos * .03, limitPos - 50, limitPos + 50);
        time = Math.abs((moveElPos - overPos) / (speed / friction));
      }
    }

    time *= slowFLAG ? 10 : 1;

    (options.onEnd || noop).call(el, $.extend(result, {moved: result.moved || longTouchFLAG && snap, pos: moveElPos, newPos: newPos, overPos: overPos, time: time}));
  }

  tail = $.extend(touch(options.$wrap, $.extend({}, options, {
    onStart: onStart,
    onMove: onMove,
    onEnd: onEnd
  })), tail);

  return tail;
}
function wheel ($el, options) {
  var el = $el[0],
      lockFLAG,
      lastDirection,
      lastNow,
      tail = {
        prevent: {}
      };

  addEvent(el, WHEEL, function (e) {
    var yDelta = e.wheelDeltaY || -1 * e.deltaY || 0,
        xDelta = e.wheelDeltaX || -1 * e.deltaX || 0,
        xWin = Math.abs(xDelta) && !Math.abs(yDelta),
        direction = getDirectionSign(xDelta < 0),
        sameDirection = lastDirection === direction,
        now = $.now(),
        tooFast = now - lastNow < TOUCH_TIMEOUT;

    lastDirection = direction;
    lastNow = now;

    if (!xWin || !tail.ok || tail.prevent[direction] && !lockFLAG) {
      return;
    } else {
      stopEvent(e, true);
      if (lockFLAG && sameDirection && tooFast) {
        return;
      }
    }

    if (options.shift) {
      lockFLAG = true;
      clearTimeout(tail.t);
      tail.t = setTimeout(function () {
        lockFLAG = false;
      }, SCROLL_LOCK_TIMEOUT);
    }

    (options.onEnd || noop)(e, options.shift ? direction : xDelta);

  });

  return tail;
}
jQuery.Fotorama = function ($fotorama, opts) {
  $HTML = $('html');
  $BODY = $('body');

  var that = this,
      stamp = $.now(),
      stampClass = _fotoramaClass + stamp,
      fotorama = $fotorama[0],
      data,
      dataFrameCount = 1,
      fotoramaData = $fotorama.data(),
      size,

      $style = $('<style></style>'),

      $anchor = $(div(hiddenClass)),
      $wrap = $(div(wrapClass)),
      $stage = $(div(stageClass)).appendTo($wrap),
      stage = $stage[0],

      $stageShaft = $(div(stageShaftClass)).appendTo($stage),
      $stageFrame = $(),
      $arrPrev = $(div(arrClass + ' ' + arrPrevClass + buttonAttributes)),
      $arrNext = $(div(arrClass + ' ' + arrNextClass + buttonAttributes)),
      $arrs = $arrPrev.add($arrNext).appendTo($stage),
      $navWrap = $(div(navWrapClass)),
      $nav = $(div(navClass)).appendTo($navWrap),
      $navShaft = $(div(navShaftClass)).appendTo($nav),
      $navFrame,
      $navDotFrame = $(),
      $navThumbFrame = $(),

      stageShaftData = $stageShaft.data(),
      navShaftData = $navShaft.data(),

      $thumbBorder = $(div(thumbBorderClass)).appendTo($navShaft),

      $fullscreenIcon = $(div(fullscreenIconClass + buttonAttributes)),
      fullscreenIcon = $fullscreenIcon[0],
      $videoPlay = $(div(videoPlayClass)),
      $videoClose = $(div(videoCloseClass)).appendTo($stage),
      videoClose = $videoClose[0],

      spinner,
      $spinner = $(div(spinnerClass)),

      $videoPlaying,

      activeIndex = false,
      activeFrame,
      activeIndexes,
      repositionIndex,
      dirtyIndex,
      lastActiveIndex,
      prevIndex,
      nextIndex,
      nextAutoplayIndex,
      startIndex,

      o_loop,
      o_nav,
      o_navThumbs,
      o_navTop,
      o_allowFullScreen,
      o_nativeFullScreen,
      o_fade,
      o_thumbSide,
      o_thumbSide2,
      o_transitionDuration,
      o_transition,
      o_shadows,
      o_rtl,
      o_keyboard,
      lastOptions = {},

      measures = {},
      measuresSetFLAG,

      stageShaftTouchTail = {},
      stageWheelTail = {},
      navShaftTouchTail = {},
      navWheelTail = {},

      scrollTop,
      scrollLeft,

      showedFLAG,
      pausedAutoplayFLAG,
      stoppedAutoplayFLAG,

      toDeactivate = {},
      toDetach = {},

      measuresStash,

      touchedFLAG,

      hoverFLAG,

      navFrameKey,
      stageLeft = 0,

      fadeStack = [];

  $wrap[STAGE_FRAME_KEY] = $(div(stageFrameClass));
  $wrap[NAV_THUMB_FRAME_KEY] = $(div(navFrameClass + ' ' + navFrameThumbClass + buttonAttributes, div(thumbClass)));
  $wrap[NAV_DOT_FRAME_KEY] = $(div(navFrameClass + ' ' + navFrameDotClass + buttonAttributes, div(dotClass)));

  toDeactivate[STAGE_FRAME_KEY] = [];
  toDeactivate[NAV_THUMB_FRAME_KEY] = [];
  toDeactivate[NAV_DOT_FRAME_KEY] = [];
  toDetach[STAGE_FRAME_KEY] = {};

  $wrap
      .addClass(CSS3 ? wrapCss3Class : wrapCss2Class)
      .toggleClass(wrapNoControlsClass, !opts.controlsonstart);

  fotoramaData.fotorama = this;

  function checkForVideo () {
    $.each(data, function (i, dataFrame) {
      if (!dataFrame.i) {
        dataFrame.i = dataFrameCount++;
        var video = findVideoId(dataFrame.video, true);
        if (video) {
          var thumbs = {};
          dataFrame.video = video;
          if (!dataFrame.img && !dataFrame.thumb) {
            thumbs = getVideoThumbs(dataFrame, data, that);
          } else {
            dataFrame.thumbsReady = true;
          }
          updateData(data, {img: thumbs.img, thumb: thumbs.thumb}, dataFrame.i, that);
        }
      }
    });
  }

  function allowKey (key) {
    return o_keyboard[key] || that.fullScreen;
  }

  function bindGlobalEvents (FLAG) {
    var keydownCommon = 'keydown.' + _fotoramaClass,
        localStamp = _fotoramaClass + stamp,
        keydownLocal = 'keydown.' + localStamp,
        resizeLocal = 'resize.' + localStamp + ' ' + 'orientationchange.' + localStamp;

    if (FLAG) {
      $DOCUMENT
          .on(keydownLocal, function (e) {
            var catched,
                index;

            if ($videoPlaying && e.keyCode === 27) {
              catched = true;
              unloadVideo($videoPlaying, true, true);
            } else if (that.fullScreen || (opts.keyboard && !that.index)) {
              if (e.keyCode === 27) {
                catched = true;
                that.cancelFullScreen();
              } else if ((e.shiftKey && e.keyCode === 32 && allowKey('space')) || (e.keyCode === 37 && allowKey('left')) || (e.keyCode === 38 && allowKey('up'))) {
                index = '<';
              } else if ((e.keyCode === 32 && allowKey('space')) || (e.keyCode === 39 && allowKey('right')) || (e.keyCode === 40 && allowKey('down'))) {
                index = '>';
              } else if (e.keyCode === 36 && allowKey('home')) {
                index = '<<';
              } else if (e.keyCode === 35 && allowKey('end')) {
                index = '>>';
              }
            }

            (catched || index) && stopEvent(e);
            index && that.show({index: index, slow: e.altKey, user: true});
          });

      if (!that.index) {
        $DOCUMENT
            .off(keydownCommon)
            .on(keydownCommon, 'textarea, input, select', function (e) {
              !$BODY.hasClass(_fullscreenClass) && e.stopPropagation();
            });
      }

      $WINDOW.on(resizeLocal, that.resize);
    } else {
      $DOCUMENT.off(keydownLocal);
      $WINDOW.off(resizeLocal);
    }
  }

  function appendElements (FLAG) {
    if (FLAG === appendElements.f) return;

    if (FLAG) {
      $fotorama
          .html('')
          .addClass(_fotoramaClass + ' ' + stampClass)
          .append($wrap)
          .before($style)
          .before($anchor);

      addInstance(that);
    } else {
      $wrap.detach();
      $style.detach();
      $anchor.detach();
      $fotorama
          .html(fotoramaData.urtext)
          .removeClass(stampClass);

      hideInstance(that);
    }

    bindGlobalEvents(FLAG);
    appendElements.f = FLAG;
  }

  function setData () {
    data = that.data = data || clone(opts.data) || getDataFromHtml($fotorama);
    size = that.size = data.length;

    !ready.ok && opts.shuffle && shuffle(data);

    checkForVideo();

    activeIndex = limitIndex(activeIndex);

    size && appendElements(true);
  }

  function stageNoMove () {
    var _noMove = (size < 2 && !opts.enableifsingleframe) || $videoPlaying;
    stageShaftTouchTail.noMove = _noMove || o_fade;
    stageShaftTouchTail.noSwipe = _noMove || !opts.swipe;

    !o_transition && $stageShaft.toggleClass(grabClass, !opts.click && !stageShaftTouchTail.noMove && !stageShaftTouchTail.noSwipe);
    MS_POINTER && $wrap.toggleClass(wrapPanYClass, !stageShaftTouchTail.noSwipe);
  }

  function setAutoplayInterval (interval) {
    if (interval === true) interval = '';
    opts.autoplay = Math.max(+interval || AUTOPLAY_INTERVAL, o_transitionDuration * 1.5);
  }

  /**
   * Options on the fly
   * */
  function setOptions () {
    that.options = opts = optionsToLowerCase(opts);

    o_fade = (opts.transition === 'crossfade' || opts.transition === 'dissolve');

    o_loop = opts.loop && (size > 2 || (o_fade && (!o_transition || o_transition !== 'slide')));

    o_transitionDuration = +opts.transitionduration || TRANSITION_DURATION;

    o_rtl = opts.direction === 'rtl';

    o_keyboard = $.extend({}, opts.keyboard && KEYBOARD_OPTIONS, opts.keyboard);

    var classes = {add: [], remove: []};

    function addOrRemoveClass (FLAG, value) {
      classes[FLAG ? 'add' : 'remove'].push(value);
    }

    if (size > 1 || opts.enableifsingleframe) {
      o_nav = opts.nav;
      o_navTop = opts.navposition === 'top';
      classes.remove.push(selectClass);

      $arrs.toggle(!!opts.arrows);
    } else {
      o_nav = false;
      $arrs.hide();
    }

    spinnerStop();
    spinner = new Spinner($.extend(spinnerDefaults, opts.spinner, spinnerOverride, {direction: o_rtl ? -1 : 1}));

    arrsUpdate();
    stageWheelUpdate();

    if (opts.autoplay) setAutoplayInterval(opts.autoplay);

    o_thumbSide = numberFromMeasure(opts.thumbwidth) || THUMB_SIZE;
    o_thumbSide2 = numberFromMeasure(opts.thumbheight) || THUMB_SIZE;

    stageWheelTail.ok = navWheelTail.ok = opts.trackpad && !SLOW;

    stageNoMove();

    extendMeasures(opts, [measures]);

    o_navThumbs = o_nav === 'thumbs';

    if (o_navThumbs) {
      frameDraw(size, 'navThumb');

      $navFrame = $navThumbFrame;
      navFrameKey = NAV_THUMB_FRAME_KEY;

      setStyle($style, $.Fotorama.jst.style({w: o_thumbSide, h: o_thumbSide2, b: opts.thumbborderwidth, m: opts.thumbmargin, s: stamp, q: !COMPAT}));

      $nav
          .addClass(navThumbsClass)
          .removeClass(navDotsClass);
    } else if (o_nav === 'dots') {
      frameDraw(size, 'navDot');

      $navFrame = $navDotFrame;
      navFrameKey = NAV_DOT_FRAME_KEY;

      $nav
          .addClass(navDotsClass)
          .removeClass(navThumbsClass);
    } else {
      o_nav = false;
      $nav.removeClass(navThumbsClass + ' ' + navDotsClass);
    }

    if (o_nav) {
      if (o_navTop) {
        $navWrap.insertBefore($stage);
      } else {
        $navWrap.insertAfter($stage);
      }
      frameAppend.nav = false;
      frameAppend($navFrame, $navShaft, 'nav');
    }

    o_allowFullScreen = opts.allowfullscreen;

    if (o_allowFullScreen) {
      $fullscreenIcon.prependTo($stage);
      o_nativeFullScreen = FULLSCREEN && o_allowFullScreen === 'native';
    } else {
      $fullscreenIcon.detach();
      o_nativeFullScreen = false;
    }

    addOrRemoveClass(o_fade, wrapFadeClass);
    addOrRemoveClass(!o_fade, wrapSlideClass);
    addOrRemoveClass(!opts.captions, wrapNoCaptionsClass);
    addOrRemoveClass(o_rtl, wrapRtlClass);
    addOrRemoveClass(opts.arrows !== 'always', wrapToggleArrowsClass);

    o_shadows = opts.shadows && !SLOW;
    addOrRemoveClass(!o_shadows, wrapNoShadowsClass);

    $wrap
        .addClass(classes.add.join(' '))
        .removeClass(classes.remove.join(' '));

    lastOptions = $.extend({}, opts);
  }

  function normalizeIndex (index) {
    return index < 0 ? (size + (index % size)) % size : index >= size ? index % size : index;
  }

  function limitIndex (index) {
    return minMaxLimit(index, 0, size - 1);
  }

  function edgeIndex (index) {
    return o_loop ? normalizeIndex(index) : limitIndex(index);
  }

  function getPrevIndex (index) {
    return index > 0 || o_loop ? index - 1 : false;
  }

  function getNextIndex (index) {
    return index < size - 1 || o_loop ? index + 1 : false;
  }

  function setStageShaftMinmaxAndSnap () {
    stageShaftTouchTail.min = o_loop ? -Infinity : -getPosByIndex(size - 1, measures.w, opts.margin, repositionIndex);
    stageShaftTouchTail.max = o_loop ? Infinity : -getPosByIndex(0, measures.w, opts.margin, repositionIndex);
    stageShaftTouchTail.snap = measures.w + opts.margin;
  }

  function setNavShaftMinMax () {
    ////////console.log('setNavShaftMinMax', measures.nw);
    navShaftTouchTail.min = Math.min(0, measures.nw - $navShaft.width());
    navShaftTouchTail.max = 0;
    $navShaft.toggleClass(grabClass, !(navShaftTouchTail.noMove = navShaftTouchTail.min === navShaftTouchTail.max));
  }

  function eachIndex (indexes, type, fn) {
    if (typeof indexes === 'number') {
      indexes = new Array(indexes);
      var rangeFLAG = true;
    }
    return $.each(indexes, function (i, index) {
      if (rangeFLAG) index = i;
      if (typeof index === 'number') {
        var dataFrame = data[normalizeIndex(index)];

        if (dataFrame) {
          var key = '$' + type + 'Frame',
              $frame = dataFrame[key];

          fn.call(this, i, index, dataFrame, $frame, key, $frame && $frame.data());
        }
      }
    });
  }

  function setMeasures (width, height, ratio, index) {
    if (!measuresSetFLAG || (measuresSetFLAG === '*' && index === startIndex)) {

      //////console.log('setMeasures', index, opts.width, opts.height);

      width = measureIsValid(opts.width) || measureIsValid(width) || WIDTH;
      height = measureIsValid(opts.height) || measureIsValid(height) || HEIGHT;
      that.resize({
        width: width,
        ratio: opts.ratio || ratio || width / height
      }, 0, index !== startIndex && '*');
    }
  }

  function loadImg (indexes, type, specialMeasures, method, position, again) {
    eachIndex(indexes, type, function (i, index, dataFrame, $frame, key, frameData) {

      if (!$frame) return;

      var fullFLAG = that.fullScreen && dataFrame.full && dataFrame.full !== dataFrame.img && !frameData.$full && type === 'stage';

      if (frameData.$img && !again && !fullFLAG) return;

      var img = new Image(),
          $img = $(img),
          imgData = $img.data();

      frameData[fullFLAG ? '$full' : '$img'] = $img;

      var srcKey = type === 'stage' ? (fullFLAG ? 'full' : 'img') : 'thumb',
          src = dataFrame[srcKey],
          dummy = fullFLAG ? null : dataFrame[type === 'stage' ? 'thumb' : 'img'];

      if (type === 'navThumb') $frame = frameData.$wrap;

      function triggerTriggerEvent (event) {
        var _index = normalizeIndex(index);
        triggerEvent(event, {
          index: _index,
          src: src,
          frame: data[_index]
        });
      }

      function error () {
        $img.remove();

        $.Fotorama.cache[src] = 'error';

        if ((!dataFrame.html || type !== 'stage') && dummy && dummy !== src) {
          dataFrame[srcKey] = src = dummy;
          loadImg([index], type, specialMeasures, method, position, true);
        } else {
          if (src && !dataFrame.html && !fullFLAG) {
            $frame
                .trigger('f:error')
                .removeClass(loadingClass)
                .addClass(errorClass);

            triggerTriggerEvent('error');
          } else if (type === 'stage') {
            $frame
                .trigger('f:load')
                .removeClass(loadingClass + ' ' + errorClass)
                .addClass(loadedClass);

            triggerTriggerEvent('load');
            setMeasures();
          }

          frameData.state = 'error';

          if (size > 1 && data[index] === dataFrame && !dataFrame.html && !dataFrame.deleted && !dataFrame.video && !fullFLAG) {
            dataFrame.deleted = true;
            that.splice(index, 1);
          }
        }
      }

      function loaded () {
        //////console.log('loaded: ' + src);

        ////console.log('$.Fotorama.measures[src]', $.Fotorama.measures[src]);

        $.Fotorama.measures[src] = imgData.measures = $.Fotorama.measures[src] || {
          width: img.width,
          height: img.height,
          ratio: img.width / img.height
        };

        setMeasures(imgData.measures.width, imgData.measures.height, imgData.measures.ratio, index);

        $img
            .off('load error')
            .addClass(imgClass + (fullFLAG ? ' ' + imgFullClass : ''))
            .prependTo($frame);

        fit($img, ($.isFunction(specialMeasures) ? specialMeasures() : specialMeasures) || measures, method || dataFrame.fit || opts.fit, position || dataFrame.position || opts.position);

        $.Fotorama.cache[src] = frameData.state = 'loaded';

        setTimeout(function () {
          $frame
              .trigger('f:load')
              .removeClass(loadingClass + ' ' + errorClass)
              .addClass(loadedClass + ' ' + (fullFLAG ? loadedFullClass : loadedImgClass));

          if (type === 'stage') {
            triggerTriggerEvent('load');
          } else if (dataFrame.thumbratio === AUTO || !dataFrame.thumbratio && opts.thumbratio === AUTO) {
            // danger! reflow for all thumbnails
            dataFrame.thumbratio = imgData.measures.ratio;
            reset();
          }
        }, 0);
      }

      if (!src) {
        error();
        return;
      }

      function waitAndLoad () {
        var _i = 10;
        waitFor(function () {
          return !touchedFLAG || !_i-- && !SLOW;
        }, function () {
          loaded();
        });
      }

      if (!$.Fotorama.cache[src]) {
        $.Fotorama.cache[src] = '*';

        $img
            .on('load', waitAndLoad)
            .on('error', error);
      } else {
        (function justWait () {
          if ($.Fotorama.cache[src] === 'error') {
            error();
          } else if ($.Fotorama.cache[src] === 'loaded') {
            ////console.log('take from cache: ' + src);
            setTimeout(waitAndLoad, 0);
          } else {
            setTimeout(justWait, 100);
          }
        })();
      }

      frameData.state = '';
      img.src = src;
    });
  }

  function spinnerSpin ($el) {
    $spinner.append(spinner.spin().el).appendTo($el);
  }

  function spinnerStop () {
    $spinner.detach();
    spinner && spinner.stop();
  }

  function updateFotoramaState () {
    var $frame = activeFrame[STAGE_FRAME_KEY];

    if ($frame && !$frame.data().state) {
      spinnerSpin($frame);
      $frame.on('f:load f:error', function () {
        $frame.off('f:load f:error');
        spinnerStop();
      });
    }
  }

  function addNavFrameEvents (frame) {
    addEnterUp(frame, onNavFrameClick);
    addFocus(frame, function () {

      setTimeout(function () {
        lockScroll($nav);
      }, 0);
      slideNavShaft({time: o_transitionDuration, guessIndex: $(this).data().eq, minMax: navShaftTouchTail});
    });
  }

  function frameDraw (indexes, type) {
    eachIndex(indexes, type, function (i, index, dataFrame, $frame, key, frameData) {
      if ($frame) return;

      $frame = dataFrame[key] = $wrap[key].clone();
      frameData = $frame.data();
      frameData.data = dataFrame;
      var frame = $frame[0];

      if (type === 'stage') {

        if (dataFrame.html) {
          $('<div class="' + htmlClass + '"></div>')
              .append(
                  dataFrame._html ? $(dataFrame.html)
                      .removeAttr('id')
                      .html(dataFrame._html) // Because of IE
                  : dataFrame.html
              )
              .appendTo($frame);
        }

        dataFrame.caption && $(div(captionClass, div(captionWrapClass, dataFrame.caption))).appendTo($frame);

        dataFrame.video && $frame
          .addClass(stageFrameVideoClass)
          .append($videoPlay.clone());

        // This solves tabbing problems
        addFocus(frame, function () {
          setTimeout(function () {
            lockScroll($stage);
          }, 0);
          clickToShow({index: frameData.eq, user: true});
        });

        $stageFrame = $stageFrame.add($frame);
      } else if (type === 'navDot') {
        addNavFrameEvents(frame);
        $navDotFrame = $navDotFrame.add($frame);
      } else if (type === 'navThumb') {
        addNavFrameEvents(frame);
        frameData.$wrap = $frame.children(':first');
        $navThumbFrame = $navThumbFrame.add($frame);
        if (dataFrame.video) {
          frameData.$wrap.append($videoPlay.clone());
        }
      }
    });
  }

  function callFit ($img, measuresToFit, method, position) {
    return $img && $img.length && fit($img, measuresToFit, method, position);
  }

  function stageFramePosition (indexes) {
    eachIndex(indexes, 'stage', function (i, index, dataFrame, $frame, key, frameData) {
      if (!$frame) return;

      var normalizedIndex = normalizeIndex(index),
          method = dataFrame.fit || opts.fit,
          position = dataFrame.position || opts.position;
      frameData.eq = normalizedIndex;

      toDetach[STAGE_FRAME_KEY][normalizedIndex] = $frame.css($.extend({left: o_fade ? 0 : getPosByIndex(index, measures.w, opts.margin, repositionIndex)}, o_fade && getDuration(0)));

      if (isDetached($frame[0])) {
        $frame.appendTo($stageShaft);
        unloadVideo(dataFrame.$video);
      }

      callFit(frameData.$img, measures, method, position);
      callFit(frameData.$full, measures, method, position);
    });
  }

  function thumbsDraw (pos, loadFLAG) {
    if (o_nav !== 'thumbs' || isNaN(pos)) return;

    var leftLimit = -pos,
        rightLimit = -pos + measures.nw;

    $navThumbFrame.each(function () {
      var $this = $(this),
          thisData = $this.data(),
          eq = thisData.eq,
          getSpecialMeasures = function () {
            return {
              h: o_thumbSide2,
              w: thisData.w
            }
          },
          specialMeasures = getSpecialMeasures(),
          dataFrame = data[eq] || {},
          method = dataFrame.thumbfit || opts.thumbfit,
          position = dataFrame.thumbposition || opts.thumbposition;

      specialMeasures.w = thisData.w;

      if (thisData.l + thisData.w < leftLimit
          || thisData.l > rightLimit
          || callFit(thisData.$img, specialMeasures, method, position)) return;

      loadFLAG && loadImg([eq], 'navThumb', getSpecialMeasures, method, position);
    });
  }

  function frameAppend ($frames, $shaft, type) {
    if (!frameAppend[type]) {

      var thumbsFLAG = type === 'nav' && o_navThumbs,
          left = 0;

      $shaft.append(
        $frames
            .filter(function () {
              var actual,
                  $this = $(this),
                  frameData = $this.data();
              for (var _i = 0, _l = data.length; _i < _l; _i++) {
                if (frameData.data === data[_i]) {
                  actual = true;
                  frameData.eq = _i;
                  break;
                }
              }
              return actual || $this.remove() && false;
            })
            .sort(function (a, b) {
              return $(a).data().eq - $(b).data().eq;
            })
            .each(function () {

              if (!thumbsFLAG) return;

              var $this = $(this),
                  frameData = $this.data(),
                  thumbwidth = Math.round(o_thumbSide2 * frameData.data.thumbratio) || o_thumbSide;

              frameData.l = left;
              frameData.w = thumbwidth;

              $this.css({width: thumbwidth});

              left += thumbwidth + opts.thumbmargin;
            })
      );

      frameAppend[type] = true;
    }
  }

  function getDirection (x) {
    return x - stageLeft > measures.w / 3;
  }

  function disableDirrection (i) {
    return !o_loop && (!(activeIndex + i) || !(activeIndex - size + i)) && !$videoPlaying;
  }

  function arrsUpdate () {
    var disablePrev = disableDirrection(0),
        disableNext = disableDirrection(1);
    $arrPrev
        .toggleClass(arrDisabledClass, disablePrev)
        .attr(disableAttr(disablePrev));
    $arrNext
        .toggleClass(arrDisabledClass, disableNext)
        .attr(disableAttr(disableNext));
  }

  function stageWheelUpdate () {
    if (stageWheelTail.ok) {
      stageWheelTail.prevent = {'<': disableDirrection(0), '>': disableDirrection(1)};
    }
  }

  function getNavFrameBounds ($navFrame) {
    var navFrameData = $navFrame.data(),
        left,
        width;

    if (o_navThumbs) {
      left = navFrameData.l;
      width = navFrameData.w;
    } else {
      left = $navFrame.position().left;
      width = $navFrame.width();
    }

    return {
      c: left + width / 2,
      min: -left + opts.thumbmargin * 10,
      max: -left + measures.w - width - opts.thumbmargin * 10
    };
  }

  function slideThumbBorder (time) {
    var navFrameData = activeFrame[navFrameKey].data();
    slide($thumbBorder, {
      time: time * 1.2,
      pos: navFrameData.l,
      width: navFrameData.w - opts.thumbborderwidth * 2
    });
  }

  function slideNavShaft (options) {
    ////console.log('slideNavShaft', options.guessIndex, options.keep, slideNavShaft.l);
    var $guessNavFrame = data[options.guessIndex][navFrameKey];
    if ($guessNavFrame) {
      var overflowFLAG = navShaftTouchTail.min !== navShaftTouchTail.max,
          minMax = options.minMax || overflowFLAG && getNavFrameBounds(activeFrame[navFrameKey]),
          l = overflowFLAG && (options.keep && slideNavShaft.l ? slideNavShaft.l : minMaxLimit((options.coo || measures.nw / 2) - getNavFrameBounds($guessNavFrame).c, minMax.min, minMax.max)),
          pos = overflowFLAG && minMaxLimit(l, navShaftTouchTail.min, navShaftTouchTail.max),
          time = options.time * 1.1;

      slide($navShaft, {
        time: time,
        pos: pos || 0,
        onEnd: function () {
          thumbsDraw(pos, true);
        }
      });

      //if (time) thumbsDraw(pos);

      setShadow($nav, findShadowEdge(pos, navShaftTouchTail.min, navShaftTouchTail.max));
      slideNavShaft.l = l;
    }
  }

  function navUpdate () {
    deactivateFrames(navFrameKey);
    toDeactivate[navFrameKey].push(activeFrame[navFrameKey].addClass(activeClass));
  }

  function deactivateFrames (key) {
    var _toDeactivate = toDeactivate[key];

    while (_toDeactivate.length) {
      _toDeactivate.shift().removeClass(activeClass);
    }
  }

  function detachFrames (key) {
    var _toDetach = toDetach[key];

    //////console.log('_toDetach', _toDetach);
    //////console.log('activeIndexes', activeIndexes);

    $.each(activeIndexes, function (i, index) {
      delete _toDetach[normalizeIndex(index)];
    });

    $.each(_toDetach, function (index, $frame) {
      delete _toDetach[index];
      //////console.log('Detach', index);
      $frame.detach();
    });
  }

  function stageShaftReposition (skipOnEnd) {

    repositionIndex = dirtyIndex = activeIndex;

    var $frame = activeFrame[STAGE_FRAME_KEY];

    if ($frame) {
      deactivateFrames(STAGE_FRAME_KEY);
      toDeactivate[STAGE_FRAME_KEY].push($frame.addClass(activeClass));

      skipOnEnd || that.show.onEnd(true);
      stop($stageShaft, 0, true);

      detachFrames(STAGE_FRAME_KEY);
      stageFramePosition(activeIndexes);
      setStageShaftMinmaxAndSnap();
      setNavShaftMinMax();
    }
  }

  function extendMeasures (options, measuresArray) {
    if (!options) return;

    $.each(measuresArray, function (i, measures) {
      if (!measures) return;

      $.extend(measures, {
        width: options.width || measures.width,
        height: options.height,
        minwidth: options.minwidth,
        maxwidth: options.maxwidth,
        minheight: options.minheight,
        maxheight: options.maxheight,
        ratio: getRatio(options.ratio)
      })
    });
  }

  function triggerEvent (event, extra) {
    $fotorama.trigger(_fotoramaClass + ':' + event, [that, extra]);
  }

  function onTouchStart () {
    clearTimeout(onTouchEnd.t);
    touchedFLAG = 1;

    if (opts.stopautoplayontouch) {
      that.stopAutoplay();
    } else {
      pausedAutoplayFLAG = true;
    }
  }

  function onTouchEnd () {
    if (!touchedFLAG) return;
    if (!opts.stopautoplayontouch) {
      releaseAutoplay();
      changeAutoplay();
    }

    onTouchEnd.t = setTimeout(function () {
      touchedFLAG = 0;
    }, TRANSITION_DURATION + TOUCH_TIMEOUT);
    //////console.timeEnd('onTouchEnd');
  }

  function releaseAutoplay () {
    ////console.log('releaseAutoplay');
    pausedAutoplayFLAG = !!($videoPlaying || stoppedAutoplayFLAG);
  }

  function changeAutoplay () {
    ////console.log('changeAutoplay');

    clearTimeout(changeAutoplay.t);
    waitFor.stop(changeAutoplay.w);

    if (!opts.autoplay || pausedAutoplayFLAG) {
      if (that.autoplay) {
        that.autoplay = false;
        triggerEvent('stopautoplay');
      }

      return;
    }

    ////console.log('changeAutoplay continue');

    if (!that.autoplay) {
      that.autoplay = true;
      triggerEvent('startautoplay');
    }

    var _activeIndex = activeIndex;


    var frameData = activeFrame[STAGE_FRAME_KEY].data();
    changeAutoplay.w = waitFor(function () {
      ////console.log('wait for the state of the current frame');
      return frameData.state || _activeIndex !== activeIndex;
    }, function () {
      ////console.log('the current frame is ready');
      changeAutoplay.t = setTimeout(function () {
        ////console.log('changeAutoplay.t setTimeout', pausedAutoplayFLAG, _activeIndex !== activeIndex);
        if (pausedAutoplayFLAG || _activeIndex !== activeIndex) return;

        var _nextAutoplayIndex = nextAutoplayIndex,
            nextFrameData = data[_nextAutoplayIndex][STAGE_FRAME_KEY].data();

        changeAutoplay.w = waitFor(function () {
          ////console.log('wait for the state of the next frame');
          return nextFrameData.state || _nextAutoplayIndex !== nextAutoplayIndex;
        }, function () {
          if (pausedAutoplayFLAG || _nextAutoplayIndex !== nextAutoplayIndex) return;
          that.show(o_loop ? getDirectionSign(!o_rtl) : nextAutoplayIndex);
        });
      }, opts.autoplay);
    });

  }

  that.startAutoplay = function (interval) {
    if (that.autoplay) return this;
    pausedAutoplayFLAG = stoppedAutoplayFLAG = false;
    setAutoplayInterval(interval || opts.autoplay);
    changeAutoplay();

    return this;
  };

  that.stopAutoplay = function () {
    if (that.autoplay) {
      pausedAutoplayFLAG = stoppedAutoplayFLAG = true;
      changeAutoplay();
    }
    return this;
  };

  that.show = function (options) {
    ////console.log('that.show');
    //////console.time('that.show prepare');
    var index;

    if (typeof options !== 'object') {
      index = options;
      options = {};
    } else {
      index = options.index;
    }

    index = index === '>' ? dirtyIndex + 1 : index === '<' ? dirtyIndex - 1 : index === '<<' ? 0 : index === '>>' ? size - 1 : index;
    index = isNaN(index) ? getIndexFromHash(index, data, true) : index;
    index = typeof index === 'undefined' ? activeIndex || 0 : index;

    that.activeIndex = activeIndex = edgeIndex(index);
    prevIndex = getPrevIndex(activeIndex);
    nextIndex = getNextIndex(activeIndex);
    nextAutoplayIndex = normalizeIndex(activeIndex + (o_rtl ? -1 : 1));
    activeIndexes = [activeIndex, prevIndex, nextIndex];

    dirtyIndex = o_loop ? index : activeIndex;

    var diffIndex = Math.abs(lastActiveIndex - dirtyIndex),
        time = getNumber(options.time, function () {
          return Math.min(o_transitionDuration * (1 + (diffIndex - 1) / 12), o_transitionDuration * 2);
        }),
        overPos = options.overPos;

    if (options.slow) time *= 10;

    var _activeFrame = activeFrame;
    that.activeFrame = activeFrame = data[activeIndex];
    //////console.timeEnd('that.show prepare');

    var silent = _activeFrame === activeFrame && !options.user;

    //setTimeout(function () {
    //////console.time('unloadVideo');
    unloadVideo($videoPlaying, activeFrame.i !== data[normalizeIndex(repositionIndex)].i);
    //////console.timeEnd('unloadVideo');
    //////console.time('frameDraw');
    frameDraw(activeIndexes, 'stage');
    //////console.timeEnd('frameDraw');
    //////console.time('stageFramePosition');
    stageFramePosition(SLOW ? [dirtyIndex] : [dirtyIndex, getPrevIndex(dirtyIndex), getNextIndex(dirtyIndex)]);
    //////console.timeEnd('stageFramePosition');
    //////console.time('updateTouchTails');
    updateTouchTails('go', true);
    //////console.timeEnd('updateTouchTails');
    //////console.time('triggerEvent');

    silent || triggerEvent('show', {
      user: options.user,
      time: time
    });
    //////console.timeEnd('triggerEvent');
    //}, 0);

    //////console.time('bind onEnd');

    pausedAutoplayFLAG = true;

    var onEnd = that.show.onEnd = function (skipReposition) {
      if (onEnd.ok) return;
      onEnd.ok = true;

      skipReposition || stageShaftReposition(true);

      if (!silent) {
        triggerEvent('showend', {
          user: options.user
        });
      }

      ////console.log('o_transition', o_transition);

      if (!skipReposition && o_transition && o_transition !== opts.transition) {
        ////console.log('set transition back to: ' + o_transition);
        that.setOptions({transition: o_transition});
        o_transition = false;
        return;
      }

      updateFotoramaState();
      loadImg(activeIndexes, 'stage');

      updateTouchTails('go', false);
      stageWheelUpdate();

      stageCursor();
      releaseAutoplay();
      changeAutoplay();
    };
    //////console.timeEnd('bind onEnd');

    if (!o_fade) {
      //////console.time('slide');
      slide($stageShaft, {
        pos: -getPosByIndex(dirtyIndex, measures.w, opts.margin, repositionIndex),
        overPos: overPos,
        time: time,
        onEnd: onEnd/*,
        _001: true*/
      });
      //////console.timeEnd('slide');
    } else {
      var $activeFrame = activeFrame[STAGE_FRAME_KEY],
          $prevActiveFrame = activeIndex !== lastActiveIndex ? data[lastActiveIndex][STAGE_FRAME_KEY] : null;

      fade($activeFrame, $prevActiveFrame, $stageFrame, {
        time: time,
        method: opts.transition,
        onEnd: onEnd
      }, fadeStack);
    }

    //////console.time('arrsUpdate');
    arrsUpdate();
    //////console.timeEnd('arrsUpdate');

    if (o_nav) {
      //////console.time('navUpdate');
      navUpdate();
      //////console.timeEnd('navUpdate');

      //////console.time('slideNavShaft');
      var guessIndex = limitIndex(activeIndex + minMaxLimit(dirtyIndex - lastActiveIndex, -1, 1));
      slideNavShaft({time: time, coo: guessIndex !== activeIndex && options.coo, guessIndex: typeof options.coo !== 'undefined' ? guessIndex : activeIndex, keep: silent});
      //////console.timeEnd('slideNavShaft');

      //////console.time('slideThumbBorder');
      if (o_navThumbs) slideThumbBorder(time);
      //////console.timeEnd('slideThumbBorder');
    }

    //////console.time('that.show end');
    showedFLAG = typeof lastActiveIndex !== 'undefined' && lastActiveIndex !== activeIndex;
    lastActiveIndex = activeIndex;
    opts.hash && showedFLAG && !that.eq && setHash(activeFrame.id || activeIndex + 1);
    //////console.timeEnd('that.show end');

    //////console.timeEnd('that.show');

    return this;
  };

  that.requestFullScreen = function () {
    if (o_allowFullScreen && !that.fullScreen) {
      scrollTop = $WINDOW.scrollTop();
      scrollLeft = $WINDOW.scrollLeft();

      lockScroll($WINDOW);

      updateTouchTails('x', true);

      measuresStash = $.extend({}, measures);

      $fotorama
          .addClass(fullscreenClass)
          .appendTo($BODY.addClass(_fullscreenClass));

      $HTML.addClass(_fullscreenClass);

      unloadVideo($videoPlaying, true, true);

      that.fullScreen = true;

      if (o_nativeFullScreen) {
        fullScreenApi.request(fotorama);
      }

      that.resize();
      loadImg(activeIndexes, 'stage');
      updateFotoramaState();

      triggerEvent('fullscreenenter');
    }

    return this;
  };

  function cancelFullScreen () {
    if (that.fullScreen) {
      that.fullScreen = false;

      if (FULLSCREEN) {
        fullScreenApi.cancel(fotorama);
      }

      $BODY.removeClass(_fullscreenClass);
      $HTML.removeClass(_fullscreenClass);

      $fotorama
          .removeClass(fullscreenClass)
          .insertAfter($anchor);

      measures = $.extend({}, measuresStash);

      unloadVideo($videoPlaying, true, true);

      updateTouchTails('x', false);

      that.resize();
      loadImg(activeIndexes, 'stage');

      lockScroll($WINDOW, scrollLeft, scrollTop);

      triggerEvent('fullscreenexit');
    }
  }

  that.cancelFullScreen = function () {
    if (o_nativeFullScreen && fullScreenApi.is()) {
      fullScreenApi.cancel(document);
    } else {
      cancelFullScreen();
    }

    return this;
  };

  that.toggleFullScreen = function () {
    return that[(that.fullScreen ? 'cancel' : 'request') + 'FullScreen']();
  };

  addEvent(document, fullScreenApi.event, function () {
    if (data && !fullScreenApi.is() && !$videoPlaying) {
      cancelFullScreen();
    }
  });

  that.resize = function (options) {
    if (!data) return this;

    var time = arguments[1] || 0,
        setFLAG = arguments[2];

    extendMeasures(!that.fullScreen ? optionsToLowerCase(options) : {width: '100%', maxwidth: null, minwidth: null, height: '100%', maxheight: null, minheight: null}, [measures, setFLAG || that.fullScreen || opts]);

    var width = measures.width,
        height = measures.height,
        ratio = measures.ratio,
        windowHeight = $WINDOW.height() - (o_nav ? $nav.height() : 0);

    if (measureIsValid(width)) {
      $wrap
          .addClass(wrapOnlyActiveClass)
          .css({width: width, minWidth: measures.minwidth || 0, maxWidth: measures.maxwidth || MAX_WIDTH});

      width = measures.W = measures.w = $wrap.width();
      measures.nw = o_nav && numberFromWhatever(opts.navwidth, width) || width;

      if (opts.glimpse) {
        // Glimpse
        measures.w -= Math.round((numberFromWhatever(opts.glimpse, width) || 0) * 2);
      }

      $stageShaft.css({width: measures.w, marginLeft: (measures.W - measures.w) / 2});

      //////console.log('measures.W', measures.W);
      //////console.log('measures.w', measures.w);

      height = numberFromWhatever(height, windowHeight);

      height = height || (ratio && width / ratio);

      if (height) {
        width = Math.round(width);
        height = measures.h = Math.round(minMaxLimit(height, numberFromWhatever(measures.minheight, windowHeight), numberFromWhatever(measures.maxheight, windowHeight)));

        $stage
            .stop()
            .animate({width: width, height: height}, time, function () {
              $wrap.removeClass(wrapOnlyActiveClass);
            });

        stageShaftReposition();

        if (o_nav) {
          $nav
              .stop()
              .animate({width: measures.nw}, time);

          slideNavShaft({guessIndex: activeIndex, time: time, keep: true});
          if (o_navThumbs && frameAppend.nav) slideThumbBorder(time);
        }

        measuresSetFLAG = setFLAG || true;

        ready();
      }
    }

    stageLeft = $stage.offset().left;

    return this;
  };

  that.setOptions = function (options) {
    $.extend(opts, options);
    reset();
    return this;
  };

  that.shuffle = function () {
    data && shuffle(data) && reset();
    return this;
  };

  function setShadow ($el, edge) {
    //////console.time('setShadow');
    if (o_shadows) {
      $el.removeClass(shadowsLeftClass + ' ' + shadowsRightClass);
      edge && !$videoPlaying && $el.addClass(edge.replace(/^|\s/g, ' ' + shadowsClass + '--'));
    }
    //////console.timeEnd('setShadow');
  }

  that.destroy = function () {
    that.cancelFullScreen();
    that.stopAutoplay();

    data = that.data = null;

    appendElements();

    activeIndexes = [];
    detachFrames(STAGE_FRAME_KEY);

    reset.ok = false;

    return this;
  };

  that.playVideo = function () {
    var dataFrame = activeFrame,
        video = dataFrame.video,
        _activeIndex = activeIndex;

    if (typeof video === 'object' && dataFrame.videoReady) {
      o_nativeFullScreen && that.fullScreen && that.cancelFullScreen();

      waitFor(function () {
        return !fullScreenApi.is() || _activeIndex !== activeIndex;
      }, function () {
        if (_activeIndex === activeIndex) {
          dataFrame.$video = dataFrame.$video || $($.Fotorama.jst.video(video));
          dataFrame.$video.appendTo(dataFrame[STAGE_FRAME_KEY]);

          $wrap.addClass(wrapVideoClass);
          $videoPlaying = dataFrame.$video;

          stageNoMove();

          $arrs.blur();
          $fullscreenIcon.blur();

          triggerEvent('loadvideo');
        }
      });
    }

    return this;
  };

  that.stopVideo = function () {
    unloadVideo($videoPlaying, true, true);
    return this;
  };

  function unloadVideo ($video, unloadActiveFLAG, releaseAutoplayFLAG) {
    if (unloadActiveFLAG) {
      $wrap.removeClass(wrapVideoClass);
      $videoPlaying = false;

      stageNoMove();
    }

    if ($video && $video !== $videoPlaying) {
      $video.remove();
      triggerEvent('unloadvideo');
    }

    if (releaseAutoplayFLAG) {
      releaseAutoplay();
      changeAutoplay();
    }
  }

  function toggleControlsClass (FLAG) {
    $wrap.toggleClass(wrapNoControlsClass, FLAG);
  }

  function stageCursor (e) {
    if (stageShaftTouchTail.flow) return;

    var x = e ? e.pageX : stageCursor.x,
        pointerFLAG = x && !disableDirrection(getDirection(x)) && opts.click;

    if (stageCursor.p !== pointerFLAG
        && $stage.toggleClass(pointerClass, pointerFLAG)) {
      stageCursor.p = pointerFLAG;
      stageCursor.x = x;
    }
  }

  $stage.on('mousemove', stageCursor);

  function clickToShow (showOptions) {
    clearTimeout(clickToShow.t);

    if (opts.clicktransition && opts.clicktransition !== opts.transition) {
      ////console.log('change transition to: ' + opts.clicktransition);

      // this timeout is for yield events flow
      setTimeout(function () {
        // save original transition for later
        var _o_transition = opts.transition;

        that.setOptions({transition: opts.clicktransition});

        // now safe to pass base transition to o_transition, so that.show will restor it
        o_transition = _o_transition;
        // this timeout is here to prevent jerking in some browsers
        clickToShow.t = setTimeout(function () {
          that.show(showOptions);
        }, 10);
      }, 0);
    } else {
      that.show(showOptions);
    }
  }

  function onStageTap (e, toggleControlsFLAG) {
    //////console.time('onStageTap');
    var target = e.target,
        $target = $(target);

    if ($target.hasClass(videoPlayClass)) {
      that.playVideo();
    } else if (target === fullscreenIcon) {
      that.toggleFullScreen();
    } else if ($videoPlaying) {
      target === videoClose && unloadVideo($videoPlaying, true, true);
    } else {
      if (toggleControlsFLAG) {
        toggleControlsClass();
      } else if (opts.click) {

        clickToShow({index: e.shiftKey || getDirectionSign(getDirection(e._x)), slow: e.altKey, user: true});
      }
    }
    //////console.timeEnd('onStageTap');
  }

  function updateTouchTails (key, value) {
    stageShaftTouchTail[key] = navShaftTouchTail[key] = value;
  }

  stageShaftTouchTail = moveOnTouch($stageShaft, {
    onStart: onTouchStart,
    onMove: function (e, result) {
      setShadow($stage, result.edge);
    },
    onTouchEnd: onTouchEnd,
    onEnd: function (result) {
      //////console.time('stageShaftTouchTail.onEnd');
      setShadow($stage);

      //////console.log('result', result);

      var toggleControlsFLAG = (MS_POINTER && !hoverFLAG || result.touch) && opts.arrows && opts.arrows !== 'always';

      if (result.moved || (toggleControlsFLAG && result.pos !== result.newPos && !result.control)) {
        var index = getIndexByPos(result.newPos, measures.w, opts.margin, repositionIndex);
        that.show({
          index: index,
          time: o_fade ? o_transitionDuration : result.time,
          overPos: result.overPos,
          user: true
        });
      } else if (!result.aborted && !result.control) {
        onStageTap(result.startEvent, toggleControlsFLAG);
      }
      //////console.timeEnd('stageShaftTouchTail.onEnd');
    },
//    getPos: function () {
//      return -getPosByIndex(dirtyIndex, measures.w, opts.margin, repositionIndex);
//    },
    //_001: true,
    timeLow: 1,
    timeHigh: 1,
    friction: 2,
    select: '.' + selectClass + ', .' + selectClass + ' *',
    $wrap: $stage
  });

  navShaftTouchTail = moveOnTouch($navShaft, {
    onStart: onTouchStart,
    onMove: function (e, result) {
      setShadow($nav, result.edge);
    },
    onTouchEnd: onTouchEnd,
    onEnd: function (result) {

      function onEnd () {
        slideNavShaft.l = result.newPos;
        releaseAutoplay();
        changeAutoplay();
        thumbsDraw(result.newPos, true);
      }

      if (!result.moved) {
        var target = result.$target.closest('.' + navFrameClass, $navShaft)[0];
        target && onNavFrameClick.call(target, result.startEvent);
      } else if (result.pos !== result.newPos) {
        pausedAutoplayFLAG = true;
        slide($navShaft, {
          time: result.time,
          pos: result.newPos,
          overPos: result.overPos,
          onEnd: onEnd
        });
        thumbsDraw(result.newPos);
        o_shadows && setShadow($nav, findShadowEdge(result.newPos, navShaftTouchTail.min, navShaftTouchTail.max));
      } else {
        onEnd();
      }
    },
    timeLow: .5,
    timeHigh: 2,
    friction: 5,
    $wrap: $nav
  });

  stageWheelTail = wheel($stage, {
    shift: true,
    onEnd: function (e, direction) {
      //////console.log('wheel $stage onEnd', direction);
      onTouchStart();
      onTouchEnd();
      that.show({index: direction, slow: e.altKey})
    }
  });

  navWheelTail = wheel($nav, {
    onEnd: function (e, direction) {
      //////console.log('wheel $nav onEnd', direction);
      onTouchStart();
      onTouchEnd();
      var newPos = stop($navShaft) + direction * .25;
      $navShaft.css(getTranslate(minMaxLimit(newPos, navShaftTouchTail.min, navShaftTouchTail.max)));
      o_shadows && setShadow($nav, findShadowEdge(newPos, navShaftTouchTail.min, navShaftTouchTail.max));
      navWheelTail.prevent = {'<': newPos >= navShaftTouchTail.max, '>': newPos <= navShaftTouchTail.min};
      clearTimeout(navWheelTail.t);
      navWheelTail.t = setTimeout(function () {
        slideNavShaft.l = newPos;
        thumbsDraw(newPos, true)
      }, TOUCH_TIMEOUT);
      thumbsDraw(newPos);
    }
  });

  $wrap.hover(
      function () {
        setTimeout(function () {
          if (touchedFLAG) return;
          toggleControlsClass(!(hoverFLAG = true));
        }, 0);
      }, function () {
        if (!hoverFLAG) return;
        toggleControlsClass(!(hoverFLAG = false));
      }
  );

  function onNavFrameClick (e) {
    var index = $(this).data().eq;
    clickToShow({index: index, slow: e.altKey, user: true, coo: e._x - $nav.offset().left});
  }

  function onArrClick (e) {
    clickToShow({index: $arrs.index(this) ? '>' : '<', slow: e.altKey, user: true});
  }

  smartClick($arrs, function (e) {
    stopEvent(e);
    onArrClick.call(this, e);
  }, {
    onStart: function () {
      onTouchStart();
      stageShaftTouchTail.control = true;
    },
    onTouchEnd: onTouchEnd
  });

  function addFocusOnControls (el) {
    addFocus(el, function () {
      setTimeout(function () {
        lockScroll($stage);
      }, 0);
      toggleControlsClass(false);
    });
  }

  $arrs.each(function () {
    addEnterUp(this, function (e) {
      onArrClick.call(this, e);
    });
    addFocusOnControls(this);
  });

  addEnterUp(fullscreenIcon, that.toggleFullScreen);
  addFocusOnControls(fullscreenIcon);

  function reset () {
    setData();
    setOptions();

    if (!reset.i) {
      reset.i = true;
      // Only once
      var _startindex = opts.startindex;
      if (_startindex || opts.hash && location.hash) {
        startIndex = getIndexFromHash(_startindex || location.hash.replace(/^#/, ''), data, that.index === 0 || _startindex, _startindex);
      }
      activeIndex = repositionIndex = dirtyIndex = lastActiveIndex = startIndex = edgeIndex(startIndex) || 0;/*(o_rtl ? size - 1 : 0)*///;
    }

    if (size) {
      if (changeToRtl()) return;

      if ($videoPlaying) {
        unloadVideo($videoPlaying, true);
      }

      activeIndexes = [];
      detachFrames(STAGE_FRAME_KEY);

      reset.ok = true;

      that.show({index: activeIndex, time: 0});
      that.resize();
    } else {
      that.destroy();
    }
  }

  function changeToRtl () {
    //////console.log('changeToRtl');
    if (!changeToRtl.f === o_rtl) {
      changeToRtl.f = o_rtl;
      activeIndex = size - 1 - activeIndex;
      //////console.log('changeToRtl execute, activeIndex is', activeIndex);
      that.reverse();

      return true;
    }
  }

  $.each('load push pop shift unshift reverse sort splice'.split(' '), function (i, method) {
    that[method] = function () {
      data = data || [];
      if (method !== 'load') {
        Array.prototype[method].apply(data, arguments);
      } else if (arguments[0] && typeof arguments[0] === 'object' && arguments[0].length) {
        data = clone(arguments[0]);
      }
      reset();
      return that;
    }
  });

  function ready () {
    if (!ready.ok) {
      ready.ok = true;
      triggerEvent('ready');
    }
  }

  reset();
};


$.fn.fotorama = function (opts) {
  return this.each(function () {
    var that = this,
        $fotorama = $(this),
        fotoramaData = $fotorama.data(),
        fotorama = fotoramaData.fotorama;

    if (!fotorama) {
      waitFor(function () {
        return !isHidden(that);
      }, function () {
        fotoramaData.urtext = $fotorama.html();
        new $.Fotorama($fotorama,
            /* Priority for options:
             * 1. <div data-loop="true"></div>
             * 2. $('div').fotorama({loop: false})
             * 3. Defaults */
            $.extend(
                {},
                OPTIONS,
                window.fotoramaDefaults,
                opts,
                fotoramaData
            )
        );
      });
    } else {
      fotorama.setOptions(opts, true);
    }
  });
};
$.Fotorama.instances = [];

function calculateIndexes () {
  $.each($.Fotorama.instances, function (index, instance) {
    instance.index = index;
  });
}

function addInstance (instance) {
  $.Fotorama.instances.push(instance);
  calculateIndexes();
}

function hideInstance (instance) {
  $.Fotorama.instances.splice(instance.index, 1);
  calculateIndexes();
}
$.Fotorama.cache = {};
$.Fotorama.measures = {};
$ = $ || {};
$.Fotorama = $.Fotorama || {};
$.Fotorama.jst = $.Fotorama.jst || {};

$.Fotorama.jst.style = function(v) {
var __t, __p = '', __e = _.escape;
__p += '.fotorama' +
((__t = ( v.s )) == null ? '' : __t) +
' .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:' +
((__t = ( v.m )) == null ? '' : __t) +
'px;\nheight:' +
((__t = ( v.h )) == null ? '' : __t) +
'px}\n.fotorama' +
((__t = ( v.s )) == null ? '' : __t) +
' .fotorama__thumb-border{\nheight:' +
((__t = ( v.h - v.b * (v.q ? 0 : 2) )) == null ? '' : __t) +
'px;\nborder-width:' +
((__t = ( v.b )) == null ? '' : __t) +
'px;\nmargin-top:' +
((__t = ( v.m )) == null ? '' : __t) +
'px}';
return __p
};

$.Fotorama.jst.video = function(v) {
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="fotorama__video"><iframe src="';
 print((v.type == 'youtube' ? v.p + 'youtube.com/embed/' + v.id +'?autoplay=1' : v.type == 'vimeo' ? v.p + 'player.vimeo.com/video/' + v.id + '?autoplay=1&badge=0' : v.id)  + (v.s && v.type != 'custom' ? '&' + v.s : '')) ;
__p += '" frameborder="0" allowfullscreen></iframe></div>\n';
return __p
};
$(function () {
  $('.' + _fotoramaClass + ':not([data-auto="false"])').fotorama();
});
})(window, document, location, typeof jQuery !== 'undefined' && jQuery);

/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.12
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s._carve().init();
                s._configure()
                 ._draw();
            };

            if (this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend({
                    // Config
                    min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                    max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                    stopper: true,
                    readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),

                    // UI
                    cursor: this.$.data('cursor') === true && 30
                            || this.$.data('cursor') || 0,
                    thickness: this.$.data('thickness')
                               && Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
                               || 0.35,
                    lineCap: this.$.data('linecap') || 'butt',
                    width: this.$.data('width') || 200,
                    height: this.$.data('height') || 200,
                    displayInput: this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious: this.$.data('displayprevious'),
                    fgColor: this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline: false,
                    step: this.$.data('step') || 1,
                    rotation: this.$.data('rotation'),

                    // Hooks
                    draw: null, // function () {}
                    change: null, // function (value) {}
                    cancel: null, // function () {}
                    release: null, // function (value) {}

                    // Output formatting, allows to add unit: %, ms ...
                    format: function(v) {
                        return v;
                    },
                    parse: function (v) {
                        return parseFloat(v);
                    }
                }, this.o
            );

            // finalize options
            this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if (this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input');
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = s.o.parse($this.val());

                    $this.bind(
                        'change blur',
                        function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(s._validate(val));
                        }
                    );
                });
                this.$.find('legend').remove();
            } else {

                // input = integer
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === '' && (this.v = this.o.min);
                this.$.bind(
                    'change blur',
                    function () {
                        s.val(s._validate(s.o.parse(s.$.val())));
                    }
                );

            }

            !this.o.displayInput && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });

            // wraps all elements in a div
            // add to DOM before Canvas init is triggered
            this.$div = $('<div style="'
                + (this.o.inline ? 'display:inline;' : '')
                + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;'
                + '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }

            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;

            if (!this.c) {
                throw {
                    name:        "CanvasNotSupportedException",
                    message:     "Canvas not supported. Please use excanvas on IE8.0.",
                    toString:    function(){return this.name + ": " + this.message}
                }
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) / (
                            this.c.webkitBackingStorePixelRatio ||
                            this.c.mozBackingStorePixelRatio ||
                            this.c.msBackingStorePixelRatio ||
                            this.c.oBackingStorePixelRatio ||
                            this.c.backingStorePixelRatio || 1
                         );

            // detects relative width / height
            this.relativeWidth =  this.o.width % 1 !== 0
                                  && this.o.width.indexOf('%');
            this.relativeHeight = this.o.height % 1 !== 0
                                  && this.o.height.indexOf('%');
            this.relative = this.relativeWidth || this.relativeHeight;

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this.$.val(this.o.format(this.v));
            this._draw();

            return this;
        };

        this._carve = function() {
            if (this.relative) {
                var w = this.relativeWidth ?
                        this.$div.parent().width() *
                        parseInt(this.o.width) / 100
                        : this.$div.parent().width(),
                    h = this.relativeHeight ?
                        this.$div.parent().height() *
                        parseInt(this.o.height) / 100
                        : this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        };

        this._draw = function () {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH && (d = s.dH());

            d !== false && s.draw();
        };

        this._touch = function (e) {
            var touchMove = function (e) {
                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                        );

                if (v == s.cv) return;

                if (s.cH && s.cH(v) === false) return;

                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k",
                    function () {
                        k.c.d.unbind('touchmove.k touchend.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {
            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);

                if (v == s.cv) return;

                if (s.cH && (s.cH(v) === false)) return;

                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k",
                    function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (s.eH && s.eH() === false)
                                return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k",
                    function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;

            return this;
        };

        this._listen = function () {
            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown",
                        function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                        }
                    )
                    .bind(
                        "touchstart",
                        function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                        }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if (this.relative) {
                $(window).resize(function() {
                    s._carve().init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function (v) {
            var val = (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
            return Math.round(val * 100) / 100;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7);
            rgb = [
                parseInt(h.substring(0,2), 16),
                parseInt(h.substring(2,4), 16),
                parseInt(h.substring(4,6), 16)
            ];

            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) {
                t[i] = f[i];
            }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend({
                bgColor: this.$.data('bgcolor') || '#EEEEEE',
                angleOffset: this.$.data('angleoffset') || 0,
                angleArc: this.$.data('anglearc') || 360,
                inline: true
            }, this.o);
        };

        this.val = function (v, triggerRelease) {
            if (null != v) {

                // reverse format
                v = this.o.parse(v);

                if (triggerRelease !== false
                    && v != this.v
                    && this.rH
                    && this.rH(v) === false) { return; }

                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2),
                        - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if (this.o.flip) {
                a = this.angleArc - a - this.PI2;
            }

            if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {

                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = (a * (this.o.max - this.o.min) / this.angleArc) + this.o.min;

            this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {

            // bind MouseWheel
            var s = this, mwTimerStop,
                mwTimerRelease,
                mw = function (e) {
                    e.preventDefault();

                    var ori = e.originalEvent,
                        deltaX = ori.detail || ori.wheelDeltaX,
                        deltaY = ori.detail || ori.wheelDeltaY,
                        v = s._validate(s.o.parse(s.$.val()))
                            + (
                                deltaX > 0 || deltaY > 0
                                ? s.o.step
                                : deltaX < 0 || deltaY < 0 ? -s.o.step : 0
                              );

                    v = max(min(v, s.o.max), s.o.min);

                    s.val(v, false);

                    if (s.rH) {
                        // Handle mousewheel stop
                        clearTimeout(mwTimerStop);
                        mwTimerStop = setTimeout(function () {
                            s.rH(v);
                            mwTimerStop = null;
                        }, 100);

                        // Handle mousewheel releases
                        if (!mwTimerRelease) {
                            mwTimerRelease = setTimeout(function () {
                                if (mwTimerStop)
                                    s.rH(v);
                                mwTimerRelease = null;
                            }, 200);
                        }
                    }
                },
                kval,
                to,
                m = 1,
                kv = {
                    37: -s.o.step,
                    38: s.o.step,
                    39: s.o.step,
                    40: -s.o.step
                };

            this.$
                .bind(
                    "keydown",
                    function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if (kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {
                            (kc !== 13)                     // enter
                            && kc !== 8                     // bs
                            && kc !== 9                     // tab
                            && kc !== 189                   // -
                            && (kc !== 190
                                || s.$.val().match(/\./))   // . allowed once
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = s.o.parse(s.$.val()) + kv[kc] * m;
                                s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

                                s.change(s._validate(v));
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(function () {
                                    m *= 2;
                                }, 30);
                            }
                        }
                    }
                )
                .bind(
                    "keyup",
                    function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }
                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw);
        };

        this.init = function () {
            if (this.v < this.o.min
                || this.v > this.o.max) { this.v = this.o.min; }

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                String(Math.abs(this.o.max)).length,
                String(Math.abs(this.o.min)).length,
                2
            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.w / 2 + 4) >> 0) + 'px',
                        'height' : ((this.w / 3) >> 0) + 'px',
                        'position' : 'absolute',
                        'vertical-align' : 'middle',
                        'margin-top' : ((this.w / 3) >> 0) + 'px',
                        'margin-left' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                        'border' : 0,
                        'background' : 'none',
                        'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font,
                        'text-align' : 'center',
                        'color' : this.o.inputColor || this.o.fgColor,
                        'padding' : '0px',
                        '-webkit-appearance': 'none'
                        }) || this.i.css({
                            'width': '0px',
                            'visibility': 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(this.o.format(v));
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.arc = function (v) {
          var sa, ea;
          v = this.angle(v);
          if (this.o.flip) {
              sa = this.endAngle + 0.00001;
              ea = sa - v - 0.00001;
          } else {
              sa = this.startAngle - 0.00001;
              ea = sa + v + 0.00001;
          }
          this.o.cursor
              && (sa = ea - this.cursorExt)
              && (ea = ea + this.cursorExt);

          return {
              s: sa,
              e: ea,
              d: this.o.flip && !this.o.cursor
          };
        };

        this.draw = function () {
            var c = this.g,                 // context
                a = this.arc(this.cv),      // Arc
                pa,                         // Previous arc
                r = 1;

            c.lineWidth = this.lineWidth;
            c.lineCap = this.lineCap;

            if (this.o.bgColor !== "none") {
                c.beginPath();
                    c.strokeStyle = this.o.bgColor;
                    c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                c.stroke();
            }

            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                c.beginPath();
                c.strokeStyle = this.pColor;
                c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
                c.stroke();
                r = this.cv == this.v;
            }

            c.beginPath();
            c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
            c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

}));

'use strict';(function(factory,jQuery,Zepto){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'));}else{factory(jQuery||Zepto);}}(function($){var Mask=function(el,mask,options){var p={invalid:[],getCaret:function(){try{var sel,pos=0,ctrl=el.get(0),dSel=document.selection,cSelStart=ctrl.selectionStart;if(dSel&&navigator.appVersion.indexOf('MSIE 10')===-1){sel=dSel.createRange();sel.moveStart('character',-p.val().length);pos=sel.text.length;}else if(cSelStart||cSelStart==='0'){pos=cSelStart;}return pos;}catch(e){}},setCaret:function(pos){try{if(el.is(':focus')){var range,ctrl=el.get(0);if(ctrl.setSelectionRange){ctrl.focus();ctrl.setSelectionRange(pos,pos);}else{range=ctrl.createTextRange();range.collapse(true);range.moveEnd('character',pos);range.moveStart('character',pos);range.select();}}}catch(e){}},events:function(){el.on('keydown.mask',function(e){el.data('mask-keycode',e.keyCode||e.which);}).on($.jMaskGlobals.useInput?'input.mask':'keyup.mask',p.behaviour).on('paste.mask drop.mask',function(){setTimeout(function(){el.keydown().keyup();},100);}).on('change.mask',function(){el.data('changed',true);}).on('blur.mask',function(){if(oldValue!==p.val()&&!el.data('changed')){el.trigger('change');}el.data('changed',false);}).on('blur.mask',function(){oldValue=p.val();}).on('focus.mask',function(e){if(options.selectOnFocus===true){$(e.target).select();}}).on('focusout.mask',function(){if(options.clearIfNotMatch&&!regexMask.test(p.val())){p.val('');}});},getRegexMask:function(){var maskChunks=[],translation,pattern,optional,recursive,oRecursive,r;for(var i=0;i<mask.length;i++){translation=jMask.translation[mask.charAt(i)];if(translation){pattern=translation.pattern.toString().replace(/.{1}$|^.{1}/g,'');optional=translation.optional;recursive=translation.recursive;if(recursive){maskChunks.push(mask.charAt(i));oRecursive={digit:mask.charAt(i),pattern:pattern};}else{maskChunks.push(!optional&&!recursive?pattern:(pattern+'?'));}}else{maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&'));}}r=maskChunks.join('');if(oRecursive){r=r.replace(new RegExp('('+oRecursive.digit+'(.*'+oRecursive.digit+')?)'),'($1)?').replace(new RegExp(oRecursive.digit,'g'),oRecursive.pattern);}return new RegExp(r);},destroyEvents:function(){el.off(['input','keydown','keyup','paste','drop','blur','focusout',''].join('.mask '));},val:function(v){var isInput=el.is('input'),method=isInput?'val':'text',r;if(arguments.length>0){if(el[method]()!==v){el[method](v);}r=el;}else{r=el[method]();}return r;},getMCharsBeforeCount:function(index,onCleanVal){for(var count=0,i=0,maskL=mask.length;i<maskL&&i<index;i++){if(!jMask.translation[mask.charAt(i)]){index=onCleanVal?index+1:index;count++;}}return count;},caretPos:function(originalCaretPos,oldLength,newLength,maskDif){var translation=jMask.translation[mask.charAt(Math.min(originalCaretPos-1,mask.length-1))];return!translation?p.caretPos(originalCaretPos+1,oldLength,newLength,maskDif):Math.min(originalCaretPos+newLength-oldLength-maskDif,newLength);},behaviour:function(e){e=e||window.event;p.invalid=[];var keyCode=el.data('mask-keycode');if($.inArray(keyCode,jMask.byPassKeys)===-1){var caretPos=p.getCaret(),currVal=p.val(),currValL=currVal.length,newVal=p.getMasked(),newValL=newVal.length,maskDif=p.getMCharsBeforeCount(newValL-1)-p.getMCharsBeforeCount(currValL-1),changeCaret=caretPos<currValL;p.val(newVal);if(changeCaret){if(!(keyCode===8||keyCode===46)){caretPos=p.caretPos(caretPos,currValL,newValL,maskDif);}p.setCaret(caretPos);}return p.callbacks(e);}},getMasked:function(skipMaskChars,val){var buf=[],value=val===undefined?p.val():val+'',m=0,maskLen=mask.length,v=0,valLen=value.length,offset=1,addMethod='push',resetPos=-1,lastMaskChar,check;if(options.reverse){addMethod='unshift';offset=-1;lastMaskChar=0;m=maskLen-1;v=valLen-1;check=function(){return m>-1&&v>-1;};}else{lastMaskChar=maskLen-1;check=function(){return m<maskLen&&v<valLen;};}while(check()){var maskDigit=mask.charAt(m),valDigit=value.charAt(v),translation=jMask.translation[maskDigit];if(translation){if(valDigit.match(translation.pattern)){buf[addMethod](valDigit);if(translation.recursive){if(resetPos===-1){resetPos=m;}else if(m===lastMaskChar){m=resetPos-offset;}if(lastMaskChar===resetPos){m-=offset;}}m+=offset;}else if(translation.optional){m+=offset;v-=offset;}else if(translation.fallback){buf[addMethod](translation.fallback);m+=offset;v-=offset;}else{p.invalid.push({p:v,v:valDigit,e:translation.pattern});}v+=offset;}else{if(!skipMaskChars){buf[addMethod](maskDigit);}if(valDigit===maskDigit){v+=offset;}m+=offset;}}var lastMaskCharDigit=mask.charAt(lastMaskChar);if(maskLen===valLen+1&&!jMask.translation[lastMaskCharDigit]){buf.push(lastMaskCharDigit);}return buf.join('');},callbacks:function(e){var val=p.val(),changed=val!==oldValue,defaultArgs=[val,e,el,options],callback=function(name,criteria,args){if(typeof options[name]==='function'&&criteria){options[name].apply(this,args);}};callback('onChange',changed===true,defaultArgs);callback('onKeyPress',changed===true,defaultArgs);callback('onComplete',val.length===mask.length,defaultArgs);callback('onInvalid',p.invalid.length>0,[val,e,el,p.invalid,options]);}};el=$(el);var jMask=this,oldValue=p.val(),regexMask;mask=typeof mask==='function'?mask(p.val(),undefined,el,options):mask;jMask.mask=mask;jMask.options=options;jMask.remove=function(){var caret=p.getCaret();p.destroyEvents();p.val(jMask.getCleanVal());p.setCaret(caret-p.getMCharsBeforeCount(caret));return el;};jMask.getCleanVal=function(){return p.getMasked(true);};jMask.getMaskedVal=function(val){return p.getMasked(false,val);};jMask.init=function(onlyMask){onlyMask=onlyMask||false;options=options||{};jMask.clearIfNotMatch=$.jMaskGlobals.clearIfNotMatch;jMask.byPassKeys=$.jMaskGlobals.byPassKeys;jMask.translation=$.extend({},$.jMaskGlobals.translation,options.translation);jMask=$.extend(true,{},jMask,options);regexMask=p.getRegexMask();if(onlyMask===false){if(options.placeholder){el.attr('placeholder',options.placeholder);}if(el.data('mask')){el.attr('autocomplete','off');}p.destroyEvents();p.events();var caret=p.getCaret();p.val(p.getMasked());p.setCaret(caret+p.getMCharsBeforeCount(caret,true));}else{p.events();p.val(p.getMasked());}};jMask.init(!el.is('input'));};$.maskWatchers={};var HTMLAttributes=function(){var input=$(this),options={},prefix='data-mask-',mask=input.attr('data-mask');if(input.attr(prefix+'reverse')){options.reverse=true;}if(input.attr('data-require')){options.clearIfNotMatch=true;}if(input.attr(prefix+'selectonfocus')==='true'){options.selectOnFocus=true;}if(notSameMaskObject(input,mask,options)){return input.data('mask',new Mask(this,mask,options));}},notSameMaskObject=function(field,mask,options){options=options||{};var maskObject=$(field).data('mask'),stringify=JSON.stringify,value=$(field).val()||$(field).text();try{if(typeof mask==='function'){mask=mask(value);}return typeof maskObject!=='object'||stringify(maskObject.options)!==stringify(options)||maskObject.mask!==mask;}catch(e){}},eventSupported=function(eventName){var el=document.createElement('div'),isSupported;eventName='on'+eventName;isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,'return;');isSupported=typeof el[eventName]==='function';}el=null;return isSupported;};$.fn.mask=function(mask,options){options=options||{};var selector=this.selector,globals=$.jMaskGlobals,interval=globals.watchInterval,watchInputs=options.watchInputs||globals.watchInputs,maskFunction=function(){if(notSameMaskObject(this,mask,options)){return $(this).data('mask',new Mask(this,mask,options));}};$(this).each(maskFunction);if(selector&&selector!==''&&watchInputs){clearInterval($.maskWatchers[selector]);$.maskWatchers[selector]=setInterval(function(){$(document).find(selector).each(maskFunction);},interval);}return this;};$.fn.masked=function(val){return this.data('mask').getMaskedVal(val);};$.fn.unmask=function(){clearInterval($.maskWatchers[this.selector]);delete $.maskWatchers[this.selector];return this.each(function(){var dataMask=$(this).data('mask');if(dataMask){dataMask.remove().removeData('mask');}});};$.fn.cleanVal=function(){return this.data('mask').getCleanVal();};$.applyDataMask=function(selector){selector=selector||$.jMaskGlobals.maskElements;var $selector=(selector instanceof $)?selector:$(selector);$selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);};var globals={maskElements:'input,td,span,div',dataMaskAttr:'*[data-mask]',dataMask:true,watchInterval:300,watchInputs:true,useInput:eventSupported('input'),watchDataMask:false,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{'0':{pattern:/\d/},'9':{pattern:/\d/,optional:true},'#':{pattern:/\d/,recursive:true},'A':{pattern:/[a-zA-Z0-9]/},'S':{pattern:/[a-zA-Z]/}}};$.jMaskGlobals=$.jMaskGlobals||{};globals=$.jMaskGlobals=$.extend(true,{},globals,$.jMaskGlobals);if(globals.dataMask){$.applyDataMask();}setInterval(function(){if($.jMaskGlobals.watchDataMask){$.applyDataMask();}},globals.watchInterval);},window.jQuery,window.Zepto));
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});
$(function () {
    /***
     number - исходное число
     decimals - количество знаков после разделителя
     dec_point - символ разделителя
     thousands_sep - разделитель тысячных
     fractional_not_view - не отображать знаки после разделителя у целых чисел
     ***/
    function number_format(number, decimals, dec_point, thousands_sep, fractional_not_view) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            fr_not_view = (typeof fractional_not_view === 'undefined') ? false : fractional_not_view,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k)
                    .toFixed(prec);
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        // Чтобы не отображать знаки после запятой у целых чисел
        if (fr_not_view && (n - Math.round(n) == 0)) {
            return n;
        }
        //////
        if ((s[1] || '')
            .length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1)
                .join('0');
        }
        return s.join(dec);
    }

    $(".js_radial").knob();

    var sections = $('.header__nav-item--fixed .header__nav-link'),
        $window = $(window),
        offset = $window.height() / 2.5;

    $window.on('scroll', function () {
        var cursor = $window.scrollTop(),
            cur_sec = '',
            hash;

        sections.each(function(){
            var sec_name = $(this).attr('href');
            if( $(sec_name).offset().top - offset < cursor){
                $('.header__nav-item--fixed').removeClass('is-active');
                $(this).closest('.header__nav-item--fixed').addClass('is-active');
                cur_sec = sec_name;
            }
        });
        hash = cur_sec.slice(1);
        window.location.hash = '/'+hash;

        if($window.scrollTop() >= $('#title').outerHeight()){
            $('.fixed-header').fadeIn(500);
            if ($window.width() <= 1024 && hash != 'flats'){
                $('.js-top-btn').fadeIn();
            } else if (hash == 'flats'){
                $('.js-top-btn').fadeOut();
            }
        }else{
            $('.fixed-header').fadeOut();
            $('.js-top-btn').fadeOut();
            if ($window.width() <= 940){
                $('.js_fixed_menu').removeClass('is-open');
                $('.js_fixed_nav_wrap').removeClass('is-open').hide();
            }
        }
    });

    $window.on('load resize', function () {
        if ($window.width() > 940) {
            $('.js_nav_wrap').attr('style', '');
            $('.js_fixed_nav_wrap').attr('style', '');
        } else {
            $('.js_nav_wrap').removeClass('show-imp');
        }
    });

    $('.js_menu').on('click', function () {
        $(this).toggleClass('is-open');
        $('.js_nav_wrap').toggleClass('is-open').slideToggle();
    });
    $('.js_fixed_menu').on('click', function () {
        $(this).toggleClass('is-open');
        $('.js_fixed_nav_wrap').toggleClass('is-open').slideToggle();
    });

    $('.js_popup_close').on('click', function () {
        $('.title-popup').fadeOut();
    });


    $('.js_prices_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000
    });

    if (window.location.href.indexOf("/#/") >= 0) {
        var path = window.location.href;
        var anchor = path.split('/')[4];
        setTimeout(function () {
            $('html, body').stop().animate({
                scrollTop: $('#'+anchor).offset().top-120
            }, 1000);
        }, 500);
    }

    $('.js_goto_anchor').bind("click", function(e){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-120
        }, 1000);
        e.preventDefault();
        if ($window.width() <= 940){
            $('.js_fixed_menu').removeClass('is-open');
            $('.js_menu').removeClass('is-open');
            $('.js_nav_wrap').removeClass('is-open').slideUp();
            $('.js_fixed_nav_wrap').removeClass('is-open').slideUp();
        }
    });


    var flat_category_id;
    $('.js_rooms_btn').on('click', function () {
        flat_category_id = $(this).data('id');
        $('.js_area_btn').closest('.layout-choice__btns-item').hide().removeClass('visible');
        $('.js_area_btn' + '.' + 'flat' + flat_category_id).closest('.layout-choice__btns-item').show().addClass('visible');
        $('.layout__flat-name').text(flatsObj[flat_category_id]['singularly']);
        $('.layout-choice__btns-item.visible:first .js_area_btn').click();
        $('.js_rooms_btn').removeClass('is-active').closest('.layout-choice__btns-item').removeClass('is-active');
        $(this).addClass('is-active').closest('.layout-choice__btns-item').addClass('is-active');
    });

    var state = false;
    $('.js_area_btn').on('click', function () {
        var thisLayout = flatsObj[flat_category_id]['layouts'][$(this).data('id')];

        if ($window.width() <= 820 && state){
            setTimeout(function () {
                $('body,html').animate({
                    scrollTop: $('.layout__img-wrapper').offset().top - 70
                }, 500);
            }, 200);
        }

        $('.js_give_src').animate({opacity: "toggle"}, 200);
        setTimeout(function () {
            $('.js_give_src').attr('src', thisLayout.src);
        }, 200);
        $('.js_give_src').animate({opacity: "toggle"}, 200);
        $('.js_give_area').text(thisLayout.area.replace('.', ','));
        $('.js_give_block').text(thisLayout.block);
        $('.js_give_floor').text(thisLayout.floor);

        var basic_price = Math.round(thisLayout.meter_cost * thisLayout.area * EXCHANGE_COST);

        if(+thisLayout.stock_price > 0){
            $('.js_at_once_price').text(number_format(Math.round(thisLayout.stock_price * thisLayout.area), 0, ',', ' '));
        } else {
            $('.js_at_once_price').text(number_format(Math.round(basic_price - basic_price / 100 * thisLayout.discount), 0, ',', ' '));
        }

        $('.js_give_price').text(number_format(thisLayout.stock_price, 0, ',', ' '));
        $('.js_area_btn').removeClass('is-active').closest('.layout-choice__btns-item').removeClass('is-active');
        $(this).addClass('is-active').closest('.layout-choice__btns-item').addClass('is-active');

        state = true;
    });

    $('.layout-choice__btns-item:first-child .js_rooms_btn').click();

    var $fotorama = $('.js_gallery__fotorama').fotorama({
        navwidth: '90%'
    });
    // 2. Get the API object.
    var fotorama = $fotorama.data('fotorama');

    $fotorama.on('fotorama:show', function () {
        var activeIndex = fotorama.activeIndex;
        if(activeIndex == 0){
            $('.js_img_prev').fadeOut(0).attr('src', fotorama.data[fotorama.size-1]['img']).fadeIn(300);
            $('.js_img_next').fadeOut(0).attr('src', fotorama.data[activeIndex+1]['img']).fadeIn(300);
        }else if(activeIndex == fotorama.size-1){
            $('.js_img_prev').fadeOut(0).attr('src', fotorama.data[activeIndex-1]['img']).fadeIn(300);
            $('.js_img_next').fadeOut(0).attr('src', fotorama.data[0]['img']).fadeIn(200);
        }else{
            $('.js_img_prev').fadeOut(0).attr('src', fotorama.data[activeIndex-1]['img']).fadeIn(300);
            $('.js_img_next').fadeOut(0).attr('src', fotorama.data[activeIndex+1]['img']).fadeIn(300);
        }
    });
    $fotorama.on('fotorama:load', function () {
        var activeIndex = fotorama.activeIndex;
        if(activeIndex == 0){
            $('.js_img_prev').attr('src', fotorama.data[fotorama.size-1]['img']);
            $('.js_img_next').attr('src', fotorama.data[activeIndex+1]['img']);
        }else if(activeIndex == fotorama.size-1){
            $('.js_img_prev').attr('src', fotorama.data[activeIndex-1]['img']);
            $('.js_img_next').attr('src', fotorama.data[0]['img']);
        }else{
            $('.js_img_prev').attr('src', fotorama.data[activeIndex-1]['img']);
            $('.js_img_next').attr('src', fotorama.data[activeIndex+1]['img']);
        }
    });
    $("<div class='nav-scroll-btn nav-scroll-btn--prev'></div>").insertBefore(".gallery__fotorama .fotorama__nav.fotorama__nav--thumbs");
    $("<div class='nav-scroll-btn nav-scroll-btn--next'></div>").insertAfter(".gallery__fotorama .fotorama__nav.fotorama__nav--thumbs");

    $("<div class='gallery__bg-image-block gallery__bg-image-block--prev'><div class='gallery__bg-image-wrap'><img class='gallery__bg-image js_img_prev'></div></div>").insertAfter(".gallery__fotorama .fotorama__arr.fotorama__arr--next");
    $("<div class='gallery__bg-image-block gallery__bg-image-block--next'><div class='gallery__bg-image-wrap'><img class='gallery__bg-image js_img_next'></div></div>").insertAfter(".gallery__fotorama .fotorama__arr.fotorama__arr--next");
    // make the buttons functionality

    $('.nav-scroll-btn--prev').click(function () {
        fotorama.show('<');
    });
    $('.nav-scroll-btn--next').click(function () {
        fotorama.show('>');
    });

    $('.js_open_fotorama').on('click', function () {
        fotorama.show($(this).data('img'));
        fotorama.requestFullScreen();
    });


    var $stagesFotorama = $('.js_stages__fotorama').fotorama({
        navwidth: '90%'
    });
    // 2. Get the API object.
    var stagesFotorama = $stagesFotorama.data('fotorama');

    $('.js_stage_btn').on('click', function () {
        if (!$(this).hasClass('is-active')) {

            var thisId = $(this).data('id');

            $('.js_stages__fotorama, .js_give_stage_text').animate({opacity: "toggle"}, 300);
            var imageArray = [];
            for (var stageImg in stageObj[thisId]['images']){
                var imageSrc = stageObj[thisId]['images'][stageImg].src;
                imageArray.push({img: imageSrc});
            }
            setTimeout(function () {
                $('.js_give_stage_text').html(stageObj[thisId]['text']);
                stagesFotorama.load(imageArray);
            }, 300);

            $('.js_stages__fotorama, .js_give_stage_text').animate({opacity: "toggle"}, 300);
            var left = $(this).width() / 2;
            for(var i = 0; i < $(this).index(); i++){
                left += $('.js_stage_btn').eq(i).width() + 10;
            }
            $('.stages__list').css('left', $window.width() / 2 - left);
            $('.js_stage_btn.is-active').removeClass('is-active');

            $(this).addClass('is-active');
        }
    });

    $('.js_stage_btn:first-child').click();

    $window.on('resize', function () {
        var activeBtn = $('.js_stage_btn.is-active');
        var left = activeBtn.width() / 2;
        for(var i = 0; i < activeBtn.index(); i++){
            left += $('.js_stage_btn').eq(i).width() + 10;
        }
        $('.stages__list').css('left', $window.width() / 2 - left);

        if ($window.width() > 1024){
            $('.js-top-btn').css('display', 'none');
        }
    });


    /*(function(){
        var $titlePopup = $('.js_title_popup'),
            timer = 0,
            secondsForSwitch = 9,
            hoverOnPopup = false,
            focusInPopup = false;

        $('.js_slider_btn').on('click', function () {
            var slideNum = $(this).data('slide');

            if (!$titlePopup.hasClass('show-slide-' + slideNum)){
                $titlePopup.toggleClass('show-slide-1 show-slide-2');
            }

            timer = 0;
        });

        $titlePopup
            .on('mouseenter', function () {
                hoverOnPopup = true;
            })
            .on('mouseleave', function () {
                hoverOnPopup = false;
            })
            .on('focusin', function () {
                focusInPopup = true;
            })
            .on('focusout', function () {
                focusInPopup = false;
            });

        setInterval(function () {
            if ($window.width() <= 1010) {
                return;
            }

            if (!(hoverOnPopup || focusInPopup)) {
                timer++;
            }
            if (timer === secondsForSwitch) {
                $titlePopup.toggleClass('show-slide-1 show-slide-2');
                timer = 0;
            }
        }, 1000);

        $window.on('resize', function () {
            if ($window.width() <= 1010) {
                $titlePopup.addClass('show-slide-1').removeClass('show-slide-2');
            }
        });
    }());*/


    /* Yandex map */

    var init = function () {
        myMap = new ymaps.Map("map",
            {center: [43.233779, 76.921195], zoom: 16, controls: ['zoomControl']});
        myMap.behaviors.disable("scrollZoom");
        myMap.behaviors.disable("dblClickZoom");
        if ($window.width() < 1000) {
            var myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                iconLayout: "default#image",
                iconImageHref: "/img/map_icon.png",
                iconImageSize: [100, 90],
                iconImageOffset: [-100, -45]
            });
        } else {
            var myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                iconLayout: "default#image",
                iconImageHref: "/img/map_icon.png",
                iconImageSize: [135, 121],
                iconImageOffset: [-135, -60]
            });
        }
        myMap.geoObjects.add(myPlacemark);

        $window.on('resize', function (){
            if ($window.width() < 1000) {
                myMap.geoObjects.removeAll();
                myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                    iconLayout: "default#image",
                    iconImageHref: "/img/map_icon.png",
                    iconImageSize: [100, 90],
                    iconImageOffset: [-100, -45]
                });
                myMap.geoObjects.add(myPlacemark);
            } else {
                myMap.geoObjects.removeAll();
                myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                    iconLayout: "default#image",
                    iconImageHref: "/img/map_icon.png",
                    iconImageSize: [135, 121],
                    iconImageOffset: [-135, -60]
                });
                myMap.geoObjects.add(myPlacemark);
            }
        });
    };

    ymaps.ready(init);
    var myMap;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9qcXVlcnkubWluLmpzIiwiZm9ybS5qcyIsImZvdG9yYW1hLmpzIiwianF1ZXJ5Lmtub2IuanMiLCJqcXVlcnkubWFzay5qcyIsInNsaWNrLm1pbi5qcyIsInpfbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3puSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3J5QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYyLjIuNCB8IChjKSBqUXVlcnkgRm91bmRhdGlvbiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9Yy5zbGljZSxmPWMuY29uY2F0LGc9Yy5wdXNoLGg9Yy5pbmRleE9mLGk9e30saj1pLnRvU3RyaW5nLGs9aS5oYXNPd25Qcm9wZXJ0eSxsPXt9LG09XCIyLjIuNFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZS5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmcsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50b1N0cmluZygpO3JldHVybiFuLmlzQXJyYXkoYSkmJmItcGFyc2VGbG9hdChiKSsxPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2lmKFwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSkpcmV0dXJuITE7aWYoYS5jb25zdHJ1Y3RvciYmIWsuY2FsbChhLFwiY29uc3RydWN0b3JcIikmJiFrLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGV8fHt9LFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMTtmb3IoYiBpbiBhKTtyZXR1cm4gdm9pZCAwPT09Ynx8ay5jYWxsKGEsYil9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aVtqLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGM9ZXZhbDthPW4udHJpbShhKSxhJiYoMT09PWEuaW5kZXhPZihcInVzZSBzdHJpY3RcIik/KGI9ZC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIudGV4dD1hLGQuaGVhZC5hcHBlbmRDaGlsZChiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpKTpjKGEpKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZihzKGEpKXtmb3IoYz1hLmxlbmd0aDtjPmQ7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmcuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTpoLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxnPTAsaD1bXTtpZihzKGEpKWZvcihkPWEubGVuZ3RoO2Q+ZztnKyspZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZyBpbiBhKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBmLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksbi5pc0Z1bmN0aW9uKGEpPyhkPWUuY2FsbChhcmd1bWVudHMsMiksZj1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZS5jYWxsKGFyZ3VtZW50cykpKX0sZi5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGYpOnZvaWQgMH0sbm93OkRhdGUubm93LHN1cHBvcnQ6bH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKG4uZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aVtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWdhKCksej1nYSgpLEE9Z2EoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTStcIikpfClcIitMK1wiKlxcXFxdXCIsTz1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTitcIikqKXwuKilcXFxcKXwpXCIsUD1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxVPW5ldyBSZWdFeHAoTyksVj1uZXcgUmVnRXhwKFwiXlwiK00rXCIkXCIpLFc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK04pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK08pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFo9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LywkPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLF89L1srfl0vLGFhPS8nfFxcXFwvZyxiYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxjYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxkYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZWEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGZhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdz1iJiZiLm93bmVyRG9jdW1lbnQseD1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXgmJjkhPT14JiYxMSE9PXgpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT14JiYobz0kLmV4ZWMoYSkpKWlmKGY9b1sxXSl7aWYoOT09PXgpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZih3JiYoaj13LmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihvWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1vWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09eCl3PWIscz1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYWEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSkscj1nKGEpLGg9ci5sZW5ndGgsbD1WLnRlc3Qoayk/XCIjXCIrazpcIltpZD0nXCIraytcIiddXCI7d2hpbGUoaC0tKXJbaF09bCtcIiBcIitxYShyW2hdKTtzPXIuam9pbihcIixcIiksdz1fLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGJ9aWYocyl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwocykpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUSxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBnYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGhhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gaWEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIGxhKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gaGEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaGEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1mYS5zdXBwb3J0PXt9LGY9ZmEuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1mYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSwoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Wi50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9Wi50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoaWEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxpYShmdW5jdGlvbihhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVoudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmaWEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE8pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9Wi50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8Wi50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBrYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/a2EoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGZhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZmEoYSxudWxsLG51bGwsYil9LGZhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShULFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZmEoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZmEuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxmYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZmEuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGZhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1mYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWZhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmhhLG1hdGNoOlcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoYmEsY2EpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoYmEsY2EpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGZhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmZhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBXLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVS50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWZhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUCxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2hhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmhhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShRLFwiJDFcIikpO3JldHVybiBkW3VdP2hhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBmYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShiYSxjYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIFYudGVzdChhfHxcIlwiKXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6bmEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om5hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpuYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bGEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bWEoYik7ZnVuY3Rpb24gcGEoKXt9cGEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBwYSxnPWZhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVIuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVMuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUSxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9V1tnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2ZhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcWEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHJhKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaixrPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaj1iW3VdfHwoYlt1XT17fSksaT1qW2IudW5pcXVlSURdfHwoaltiLnVuaXF1ZUlEXT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4ga1syXT1oWzJdO2lmKGlbZF09ayxrWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdGEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylmYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB2YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD12YShkKSksZSYmIWVbdV0mJihlPXZhKGUsZikpLGhhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHRhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dWEocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXVhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9KKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj11YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SC5hcHBseShnLHIpfSl9ZnVuY3Rpb24gd2EoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1yYShmdW5jdGlvbihhKXtyZXR1cm4gSihiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtyYShzYShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gdmEoaT4xJiZzYShtKSxpPjEmJnFhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUSxcIiQxXCIpLGMsZT5pJiZ3YShhLnNsaWNlKGksZSkpLGY+ZSYmd2EoYT1hLnNsaWNlKGUpKSxmPmUmJnFhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHNhKG0pfWZ1bmN0aW9uIHhhKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1GLmNhbGwoaSkpO3U9dWEodSl9SC5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmZhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9oYShmKTpmfXJldHVybiBoPWZhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXdhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx4YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9ZmEuc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1XLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksXy50ZXN0KGpbMF0udHlwZSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZxYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSwhYnx8Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGphKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8amEoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGphKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGZhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZVNvcnQ9bi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHY9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LHc9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx4PS9ePChbXFx3LV0rKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx5PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB6KGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoeS50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaC5jYWxsKGIsYSk+LTEhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEheih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ3LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBBLEI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQz1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxBLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkIuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSkseC50ZXN0KGVbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJmYucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1mKSx0aGlzLmNvbnRleHQ9ZCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT92b2lkIDAhPT1jLnJlYWR5P2MucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07Qy5wcm90b3R5cGU9bi5mbixBPW4oZCk7dmFyIEQ9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sRT17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW4oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYobi5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXcudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aC5jYWxsKG4oYSksdGhpc1swXSk6aC5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZVNvcnQobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRihhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gdigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRVthXXx8bi51bmlxdWVTb3J0KGUpLEQudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBHPS9cXFMrL2c7ZnVuY3Rpb24gSChhKXt2YXIgYj17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goRyl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9IKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1hLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7bi5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09bi50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIG4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGg+PWMmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhjLm5vdGlmeSkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1lLmNhbGwoYXJndW1lbnRzKSxkPWMubGVuZ3RoLGY9MSE9PWR8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2Q6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZS5jYWxsKGFyZ3VtZW50cyk6ZCxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGQ+MSlmb3IoaT1uZXcgQXJyYXkoZCksaj1uZXcgQXJyYXkoZCksaz1uZXcgQXJyYXkoZCk7ZD5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5wcm9ncmVzcyhoKGIsaixpKSkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEk7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEkucmVzb2x2ZVdpdGgoZCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGQpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihkKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBKKCl7ZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEopLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixKKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBJfHwoST1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWQucmVhZHlTdGF0ZSYmIWQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Euc2V0VGltZW91dChuLnJlYWR5KTooZC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEopLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixKKSkpLEkucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIEs9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpSyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxMPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gTSgpe3RoaXMuZXhwYW5kbz1uLmV4cGFuZG8rTS51aWQrK31NLnVpZD0xLE0ucHJvdG90eXBlPXtyZWdpc3RlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fHt9O3JldHVybiBhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1jOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yyx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxhW3RoaXMuZXhwYW5kb119LGNhY2hlOmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXJldHVybnt9O3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sTChhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtiXT1jO2Vsc2UgZm9yKGQgaW4gYillW2RdPWJbZF07cmV0dXJuIGV9LGdldDpmdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3RoaXMuY2FjaGUoYSk6YVt0aGlzLmV4cGFuZG9dJiZhW3RoaXMuZXhwYW5kb11bYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWYpe2lmKHZvaWQgMD09PWIpdGhpcy5yZWdpc3RlcihhKTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBmP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZj9bZF06ZC5tYXRjaChHKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZltkW2NdXX0odm9pZCAwPT09Ynx8bi5pc0VtcHR5T2JqZWN0KGYpKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgYVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT1iJiYhbi5pc0VtcHR5T2JqZWN0KGIpfX07dmFyIE49bmV3IE0sTz1uZXcgTSxQPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxRPS9bQS1aXS9nO2Z1bmN0aW9uIFIoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6UC50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmM7XG59Y2F0Y2goZSl7fU8uc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBPLmhhc0RhdGEoYSl8fE4uaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE8uYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe08ucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTi5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe04ucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1PLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIU4uZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxSKGYsZCxlW2RdKSkpO04uc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Ty5zZXQodGhpcyxhKX0pOksodGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9Ty5nZXQoZixhKXx8Ty5nZXQoZixhLnJlcGxhY2UoUSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGQ9bi5jYW1lbENhc2UoYSksYz1PLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1SKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSBkPW4uY2FtZWxDYXNlKGEpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPU8uZ2V0KHRoaXMsZCk7Ty5zZXQodGhpcyxkLGIpLGEuaW5kZXhPZihcIi1cIik+LTEmJnZvaWQgMCE9PWMmJk8uc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtPLnJlbW92ZSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1OLmdldChhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9Ti5hY2Nlc3MoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTi5nZXQoYSxjKXx8Ti5hY2Nlc3MoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe04ucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPU4uZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFM9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFQ9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrUytcIikoW2EteiVdKikkXCIsXCJpXCIpLFU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bi5jc3MoYSxcImRpc3BsYXlcIil8fCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX07ZnVuY3Rpb24gVyhhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gbi5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChuLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0obi5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmVC5leGVjKG4uY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsbi5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgWD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxZPS88KFtcXHc6LV0rKS8sWj0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLCQ9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTskLm9wdGdyb3VwPSQub3B0aW9uLCQudGJvZHk9JC50Zm9vdD0kLmNvbGdyb3VwPSQuY2FwdGlvbj0kLnRoZWFkLCQudGg9JC50ZDtmdW5jdGlvbiBfKGEsYil7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZuLm5vZGVOYW1lKGEsYik/bi5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBhYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylOLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxOLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIGJhPS88fCYjP1xcdys7LztmdW5jdGlvbiBjYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbD1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPVtdLG89MCxwPWEubGVuZ3RoO3A+bztvKyspaWYoZj1hW29dLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZikpbi5tZXJnZShtLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYoYmEudGVzdChmKSl7Zz1nfHxsLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaD0oWS5leGVjKGYpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxpPSRbaF18fCQuX2RlZmF1bHQsZy5pbm5lckhUTUw9aVsxXStuLmh0bWxQcmVmaWx0ZXIoZikraVsyXSxrPWlbMF07d2hpbGUoay0tKWc9Zy5sYXN0Q2hpbGQ7bi5tZXJnZShtLGcuY2hpbGROb2RlcyksZz1sLmZpcnN0Q2hpbGQsZy50ZXh0Q29udGVudD1cIlwifWVsc2UgbS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2wudGV4dENvbnRlbnQ9XCJcIixvPTA7d2hpbGUoZj1tW28rK10paWYoZCYmbi5pbkFycmF5KGYsZCk+LTEpZSYmZS5wdXNoKGYpO2Vsc2UgaWYoaj1uLmNvbnRhaW5zKGYub3duZXJEb2N1bWVudCxmKSxnPV8obC5hcHBlbmRDaGlsZChmKSxcInNjcmlwdFwiKSxqJiZhYShnKSxjKXtrPTA7d2hpbGUoZj1nW2srK10pWi50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGwuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixsLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIGRhPS9ea2V5LyxlYT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sZmE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBnYSgpe3JldHVybiEwfWZ1bmN0aW9uIGhhKCl7cmV0dXJuITF9ZnVuY3Rpb24gaWEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIGphKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYilqYShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPWhhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9bi5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1OLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG4mJm4uZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP24uZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uaGFzRGF0YShhKSYmTi5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9ZmEuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWlbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUgaVtvXSl9ZWxzZSBmb3IobyBpbiBpKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGkpJiZOLnJlbW92ZShhLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxkLGYsZyxoPVtdLGk9ZS5jYWxsKGFyZ3VtZW50cyksaj0oTi5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSlhLnJuYW1lc3BhY2UmJiFhLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSl8fChhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZD0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZCYmKGEucmVzdWx0PWQpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8aXNOYU4oYS5idXR0b24pfHxhLmJ1dHRvbjwxKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1pLm5vZGVUeXBlJiYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT4tMTpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBkZXRhaWwgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZz1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxkLGU9Yy5kb2N1bWVudEVsZW1lbnQsZj1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGUmJmUuc2Nyb2xsTGVmdHx8ZiYmZi5zY3JvbGxMZWZ0fHwwKS0oZSYmZS5jbGllbnRMZWZ0fHxmJiZmLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhlJiZlLnNjcm9sbFRvcHx8ZiYmZi5zY3JvbGxUb3B8fDApLShlJiZlLmNsaWVudFRvcHx8ZiYmZi5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1nfHwoYS53aGljaD0xJmc/MToyJmc/Mzo0Jmc/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGUsZj1hLnR5cGUsZz1hLGg9dGhpcy5maXhIb29rc1tmXTtofHwodGhpcy5maXhIb29rc1tmXT1oPWVhLnRlc3QoZik/dGhpcy5tb3VzZUhvb2tzOmRhLnRlc3QoZik/dGhpcy5rZXlIb29rczp7fSksZT1oLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGgucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChnKSxiPWUubGVuZ3RoO3doaWxlKGItLSljPWVbYl0sYVtjXT1nW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWQpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGguZmlsdGVyP2guZmlsdGVyKGEsZyk6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1pYSgpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1pYSgpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9nYTpoYSk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpuLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpoYSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpoYSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpoYSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1nYSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9Z2EsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuIGUmJihlPT09ZHx8bi5jb250YWlucyhkLGUpKXx8KGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBqYSh0aGlzLGEsYixjLGQpfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGIhPT0hMSYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX19KTt2YXIga2E9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzotXSspW14+XSopXFwvPi9naSxsYT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxtYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLG5hPS9edHJ1ZVxcLyguKikvLG9hPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBwYShhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiByYShhKXt2YXIgYj1uYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gc2EoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihOLmhhc0RhdGEoYSkmJihmPU4uYWNjZXNzKGEpLGc9Ti5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspbi5ldmVudC5hZGQoYixlLGpbZV1bY10pfU8uaGFzRGF0YShhKSYmKGg9Ty5hY2Nlc3MoYSksaT1uLmV4dGVuZCh7fSxoKSxPLnNldChiLGkpKX19ZnVuY3Rpb24gdGEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmWC50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIHVhKGEsYixjLGQpe2I9Zi5hcHBseShbXSxiKTt2YXIgZSxnLGgsaSxqLGssbT0wLG89YS5sZW5ndGgscD1vLTEscT1iWzBdLHI9bi5pc0Z1bmN0aW9uKHEpO2lmKHJ8fG8+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFsLmNoZWNrQ2xvbmUmJm1hLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3ImJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSx1YShmLGIsYyxkKX0pO2lmKG8mJihlPWNhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZz1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWcpLGd8fGQpKXtmb3IoaD1uLm1hcChfKGUsXCJzY3JpcHRcIikscWEpLGk9aC5sZW5ndGg7bz5tO20rKylqPWUsbSE9PXAmJihqPW4uY2xvbmUoaiwhMCwhMCksaSYmbi5tZXJnZShoLF8oaixcInNjcmlwdFwiKSkpLGMuY2FsbChhW21dLGosbSk7aWYoaSlmb3Ioaz1oW2gubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoaCxyYSksbT0wO2k+bTttKyspaj1oW21dLFoudGVzdChqLnR5cGV8fFwiXCIpJiYhTi5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoayxqKSYmKGouc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoai5zcmMpOm4uZ2xvYmFsRXZhbChqLnRleHRDb250ZW50LnJlcGxhY2Uob2EsXCJcIikpKX1yZXR1cm4gYX1mdW5jdGlvbiB2YShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9uLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8bi5jbGVhbkRhdGEoXyhkKSksZC5wYXJlbnROb2RlJiYoYyYmbi5jb250YWlucyhkLm93bmVyRG9jdW1lbnQsZCkmJmFhKF8oZCxcInNjcmlwdFwiKSksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpKTtyZXR1cm4gYX1uLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKGthLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGwubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPV8oaCksZj1fKGEpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspdGEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8XyhhKSxnPWd8fF8oaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylzYShmW2RdLGdbZF0pO2Vsc2Ugc2EoYSxoKTtyZXR1cm4gZz1fKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmYWEoZywhaSYmXyhhLFwic2NyaXB0XCIpKSxofSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlPW4uZXZlbnQuc3BlY2lhbCxmPTA7dm9pZCAwIT09KGM9YVtmXSk7ZisrKWlmKEwoYykpe2lmKGI9Y1tOLmV4cGFuZG9dKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cyllW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO2NbTi5leHBhbmRvXT12b2lkIDB9Y1tPLmV4cGFuZG9dJiYoY1tPLmV4cGFuZG9dPXZvaWQgMCl9fX0pLG4uZm4uZXh0ZW5kKHtkb21NYW5pcDp1YSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHZhKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9cGEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShfKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFsYS50ZXN0KGEpJiYhJFsoWS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9bi5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO24uaW5BcnJheSh0aGlzLGEpPDAmJihuLmNsZWFuRGF0YShfKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZj1lLmxlbmd0aC0xLGg9MDtmPj1oO2grKyljPWg9PT1mP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxnLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciB3YSx4YT17SFRNTDpcImJsb2NrXCIsQk9EWTpcImJsb2NrXCJ9O2Z1bmN0aW9uIHlhKGEsYil7dmFyIGM9bihiLmNyZWF0ZUVsZW1lbnQoYSkpLmFwcGVuZFRvKGIuYm9keSksZD1uLmNzcyhjWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gYy5kZXRhY2goKSxkfWZ1bmN0aW9uIHphKGEpe3ZhciBiPWQsYz14YVthXTtyZXR1cm4gY3x8KGM9eWEoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fCh3YT0od2F8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj13YVswXS5jb250ZW50RG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPXlhKGEsYiksd2EuZGV0YWNoKCkpLHhhW2FdPWMpLGN9dmFyIEFhPS9ebWFyZ2luLyxCYT1uZXcgUmVnRXhwKFwiXihcIitTK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLENhPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX0sRGE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9LEVhPWQuZG9jdW1lbnRFbGVtZW50OyFmdW5jdGlvbigpe3ZhciBiLGMsZSxmLGc9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGg9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGguc3R5bGUpe2guc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGguY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGwuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWguc3R5bGUuYmFja2dyb3VuZENsaXAsZy5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixnLmFwcGVuZENoaWxkKGgpO2Z1bmN0aW9uIGkoKXtoLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixoLmlubmVySFRNTD1cIlwiLEVhLmFwcGVuZENoaWxkKGcpO3ZhciBkPWEuZ2V0Q29tcHV0ZWRTdHlsZShoKTtiPVwiMSVcIiE9PWQudG9wLGY9XCIycHhcIj09PWQubWFyZ2luTGVmdCxjPVwiNHB4XCI9PT1kLndpZHRoLGguc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixlPVwiNHB4XCI9PT1kLm1hcmdpblJpZ2h0LEVhLnJlbW92ZUNoaWxkKGcpfW4uZXh0ZW5kKGwse3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gaSgpLGJ9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxjfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxlfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGZ9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXt2YXIgYixjPWguYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyZXR1cm4gYy5zdHlsZS5jc3NUZXh0PWguc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGguc3R5bGUud2lkdGg9XCIxcHhcIixFYS5hcHBlbmRDaGlsZChnKSxiPSFwYXJzZUZsb2F0KGEuZ2V0Q29tcHV0ZWRTdHlsZShjKS5tYXJnaW5SaWdodCksRWEucmVtb3ZlQ2hpbGQoZyksaC5yZW1vdmVDaGlsZChjKSxifX0pfX0oKTtmdW5jdGlvbiBGYShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fENhKGEpLGc9Yz9jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl06dm9pZCAwLFwiXCIhPT1nJiZ2b2lkIDAhPT1nfHxuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9bi5zdHlsZShhLGIpKSxjJiYhbC5waXhlbE1hcmdpblJpZ2h0KCkmJkJhLnRlc3QoZykmJkFhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9Ziksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBHYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgSGE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLElhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxKYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEthPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXSxMYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gTWEoYSl7aWYoYSBpbiBMYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPUthLmxlbmd0aDt3aGlsZShjLS0paWYoYT1LYVtjXStiLGEgaW4gTGEpcmV0dXJuIGF9ZnVuY3Rpb24gTmEoYSxiLGMpe3ZhciBkPVQuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIE9hKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytVW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1VbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1VbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBQYShhLGIsYyl7dmFyIGQ9ITAsZT1cIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQsZj1DYShhKSxnPVwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpO2lmKDA+PWV8fG51bGw9PWUpe2lmKGU9RmEoYSxiLGYpLCgwPmV8fG51bGw9PWUpJiYoZT1hLnN0eWxlW2JdKSxCYS50ZXN0KGUpKXJldHVybiBlO2Q9ZyYmKGwuYm94U2l6aW5nUmVsaWFibGUoKXx8ZT09PWEuc3R5bGVbYl0pLGU9cGFyc2VGbG9hdChlKXx8MH1yZXR1cm4gZStPYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxmKStcInB4XCJ9ZnVuY3Rpb24gUWEoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109Ti5nZXQoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlYoZCkmJihmW2ddPU4uYWNjZXNzKGQsXCJvbGRkaXNwbGF5XCIsemEoZC5ub2RlTmFtZSkpKSk6KGU9VihkKSxcIm5vbmVcIj09PWMmJmV8fE4uc2V0KGQsXCJvbGRkaXNwbGF5XCIsZT9jOm4uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfW4uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9RmEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09TWEoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPVQuZXhlYyhjKSkmJmVbMV0mJihjPVcoYSxiLGUpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiPT09ZiYmKGMrPWUmJmVbM118fChuLmNzc051bWJlcltoXT9cIlwiOlwicHhcIikpLGwuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGlbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYik7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09TWEoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9RmEoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBKYSYmKGU9SmFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxpc0Zpbml0ZShmKT9mfHwwOmUpOmV9fSksbi5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBjP0hhLnRlc3Qobi5jc3MoYSxcImRpc3BsYXlcIikpJiYwPT09YS5vZmZzZXRXaWR0aD9EYShhLElhLGZ1bmN0aW9uKCl7cmV0dXJuIFBhKGEsYixkKX0pOlBhKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZDYShhKSxnPWQmJk9hKGEsYixkLFwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1ULmV4ZWMoYykpJiZcInB4XCIhPT0oZVszXXx8XCJweFwiKSYmKGEuc3R5bGVbYl09YyxjPW4uY3NzKGEsYikpLE5hKGEsYyxnKX19fSksbi5jc3NIb29rcy5tYXJnaW5MZWZ0PUdhKGwucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/KHBhcnNlRmxvYXQoRmEoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtRGEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwiOnZvaWQgMH0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9R2EobC5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/RGEoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSxGYSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxuLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ND5kO2QrKyllW2ErVVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxBYS50ZXN0KGEpfHwobi5jc3NIb29rc1thK2JdLnNldD1OYSl9KSxuLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihuLmlzQXJyYXkoYikpe2ZvcihkPUNhKGEpLGU9Yi5sZW5ndGg7ZT5nO2crKylmW2JbZ11dPW4uY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9uLnN0eWxlKGEsYixjKTpuLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBRYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBRYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe1YodGhpcyk/bih0aGlzKS5zaG93KCk6bih0aGlzKS5oaWRlKCl9KX19KTtmdW5jdGlvbiBSYShhLGIsYyxkLGUpe3JldHVybiBuZXcgUmEucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1uLlR3ZWVuPVJhLFJhLnByb3RvdHlwZT17Y29uc3RydWN0b3I6UmEsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8bi5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChuLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPVJhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpSYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1SYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9bi5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOlJhLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LFJhLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1SYS5wcm90b3R5cGUsUmEucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9bi5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe24uZnguc3RlcFthLnByb3BdP24uZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtuLmNzc1Byb3BzW2EucHJvcF1dJiYhbi5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93Om4uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LFJhLnByb3BIb29rcy5zY3JvbGxUb3A9UmEucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LG4uZng9UmEucHJvdG90eXBlLmluaXQsbi5meC5zdGVwPXt9O3ZhciBTYSxUYSxVYT0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sVmE9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBXYSgpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtTYT12b2lkIDB9KSxTYT1uLm5vdygpfWZ1bmN0aW9uIFhhKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDs0PmQ7ZCs9Mi1iKWM9VVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBZYShhLGIsYyl7Zm9yKHZhciBkLGU9KF9hLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KF9hLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7Zz5mO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gWmEoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD10aGlzLG09e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmVihhKSxxPU4uZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bi5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbC5hbHdheXMoZnVuY3Rpb24oKXtsLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxuLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPW4uY3NzKGEsXCJkaXNwbGF5XCIpLGs9XCJub25lXCI9PT1qP04uZ2V0KGEsXCJvbGRkaXNwbGF5XCIpfHx6YShhLm5vZGVOYW1lKTpqLFwiaW5saW5lXCI9PT1rJiZcIm5vbmVcIj09PW4uY3NzKGEsXCJmbG9hdFwiKSYmKG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixsLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sVWEuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bVtkXT1xJiZxW2RdfHxuLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihuLmlzRW1wdHlPYmplY3QobSkpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/emEoYS5ub2RlTmFtZSk6aikmJihvLmRpc3BsYXk9aik7ZWxzZXtxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1OLmFjY2VzcyhhLFwiZnhzaG93XCIse30pLGYmJihxLmhpZGRlbj0hcCkscD9uKGEpLnNob3coKTpsLmRvbmUoZnVuY3Rpb24oKXtuKGEpLmhpZGUoKX0pLGwuZG9uZShmdW5jdGlvbigpe3ZhciBiO04ucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGIgaW4gbSluLnN0eWxlKGEsYixtW2JdKX0pO2ZvcihkIGluIG0pZz1ZYShwP3FbZF06MCxkLGwpLGQgaW4gcXx8KHFbZF09Zy5zdGFydCxwJiYoZy5lbmQ9Zy5zdGFydCxnLnN0YXJ0PVwid2lkdGhcIj09PWR8fFwiaGVpZ2h0XCI9PT1kPzE6MCkpfX1mdW5jdGlvbiAkYShhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPW4uY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sbi5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1uLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gX2EoYSxiLGMpe3ZhciBkLGUsZj0wLGc9X2EucHJlZmlsdGVycy5sZW5ndGgsaD1uLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1TYXx8V2EoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bi5leHRlbmQoe30sYiksb3B0czpuLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6bi5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpTYXx8V2EoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPW4uVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7ZD5jO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoJGEoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPV9hLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBuLmlzRnVuY3Rpb24oZC5zdG9wKSYmKG4uX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1uLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gbi5tYXAoayxZYSxqKSxuLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxuLmZ4LnRpbWVyKG4uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW4uQW5pbWF0aW9uPW4uZXh0ZW5kKF9hLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBXKGMuZWxlbSxhLFQuZXhlYyhiKSxjKSxjfV19LHR3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtuLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5tYXRjaChHKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyljPWFbZF0sX2EudHdlZW5lcnNbY109X2EudHdlZW5lcnNbY118fFtdLF9hLnR3ZWVuZXJzW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcnM6W1phXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP19hLnByZWZpbHRlcnMudW5zaGlmdChhKTpfYS5wcmVmaWx0ZXJzLnB1c2goYSl9fSksbi5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bi5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxuLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW4uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbi5meC5zcGVlZHM/bi5meC5zcGVlZHNbZC5kdXJhdGlvbl06bi5meC5zcGVlZHMuX2RlZmF1bHQsbnVsbCE9ZC5xdWV1ZSYmZC5xdWV1ZSE9PSEwfHwoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe24uaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmbi5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LG4uZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKFYpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5pc0VtcHR5T2JqZWN0KGEpLGY9bi5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPV9hKHRoaXMsbi5leHRlbmQoe30sYSksZik7KGV8fE4uZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPU4uZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJlZhLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fG4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Ti5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShYYShiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246WGEoXCJzaG93XCIpLHNsaWRlVXA6WGEoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlhhKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW4udGltZXJzO2ZvcihTYT1uLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG4uZnguc3RvcCgpLFNhPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe1RhfHwoVGE9YS5zZXRJbnRlcnZhbChuLmZ4LnRpY2ssbi5meC5pbnRlcnZhbCkpfSxuLmZ4LnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFySW50ZXJ2YWwoVGEpLFRhPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1uLmZ4P24uZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixsLmNoZWNrT249XCJcIiE9PWEudmFsdWUsbC5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsbC5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixsLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBhYixiYj1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGU9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP2FiOnZvaWQgMCkpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCBuLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFsLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEcpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYykmJihhW2RdPSExKSxhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxhYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1iYltiXXx8bi5maW5kLmF0dHI7YmJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPWJiW2JdLGJiW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCxiYltiXT1mKSxlfX0pO3ZhciBjYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGRiPS9eKD86YXxhcmVhKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksXG52b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOmNiLnRlc3QoYS5ub2RlTmFtZSl8fGRiLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksbC5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7YiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBlYj0vW1xcdFxcclxcblxcZl0vZztmdW5jdGlvbiBmYihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsZmIodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9ZmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixmYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1mYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShlYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxmYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChHKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPWZiKHRoaXMpLGImJk4uc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpOLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2ZiKGMpK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBnYj0vXFxyL2csaGI9L1tcXHgyMFxcdFxcclxcblxcZl0rL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoZ2IsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm4udHJpbShuLnRleHQoYSkpLnJlcGxhY2UoaGIsXCIgXCIpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwoYy5zZWxlY3RlZHx8aT09PWUpJiYobC5vcHREaXNhYmxlZD8hYy5kaXNhYmxlZDpudWxsPT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhbi5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bihjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW4ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1uLmluQXJyYXkobi52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPi0xOnZvaWQgMH19LGwuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIGliPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztuLmV4dGVuZChuLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGwsbSxvLHA9W2V8fGRdLHE9ay5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ay5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhaWIudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+LTEmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxsPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxvPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZnx8IW8udHJpZ2dlcnx8by50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhby5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZSkpe2ZvcihqPW8uZGVsZWdhdGVUeXBlfHxxLGliLnRlc3QoaitxKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKXAucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZwLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1wW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpvLmJpbmRUeXBlfHxxLG09KE4uZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZOLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWwmJmhbbF0sbSYmbS5hcHBseSYmTChoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxvLl9kZWZhdWx0JiZvLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IUwoZSl8fGwmJm4uaXNGdW5jdGlvbihlW3FdKSYmIW4uaXNXaW5kb3coZSkmJihpPWVbbF0saSYmKGVbbF09bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cSxlW3FdKCksbi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2xdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtuLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpfX0pLG4uZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksbC5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLGwuZm9jdXNpbnx8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSkpfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU4uYWNjZXNzKGQsYiktMTtlP04uYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTi5yZW1vdmUoZCxiKSl9fX0pO3ZhciBqYj1hLmxvY2F0aW9uLGtiPW4ubm93KCksbGI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fG4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIG1iPS8jLiokLyxuYj0vKFs/Jl0pXz1bXiZdKi8sb2I9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxwYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxxYj0vXig/OkdFVHxIRUFEKSQvLHJiPS9eXFwvXFwvLyxzYj17fSx0Yj17fSx1Yj1cIiovXCIuY29uY2F0KFwiKlwiKSx2Yj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZiLmhyZWY9amIuaHJlZjtmdW5jdGlvbiB3YihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiB4YihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT10YjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIHliKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiB6YihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpqYi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOnBiLnRlc3QoamIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOnViLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/eWIoeWIoYSxuLmFqYXhTZXR0aW5ncyksYik6eWIobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6d2Ioc2IpLGFqYXhUcmFuc3BvcnQ6d2IodGIpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZSxmLGcsaCxpLGosayxsLG09bi5hamF4U2V0dXAoe30sYyksbz1tLmNvbnRleHR8fG0scD1tLmNvbnRleHQmJihvLm5vZGVUeXBlfHxvLmpxdWVyeSk/bihvKTpuLmV2ZW50LHE9bi5EZWZlcnJlZCgpLHI9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxzPW0uc3RhdHVzQ29kZXx8e30sdD17fSx1PXt9LHY9MCx3PVwiY2FuY2VsZWRcIix4PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXYpe2lmKCFoKXtoPXt9O3doaWxlKGI9b2IuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dj9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHZ8fChhPXVbY109dVtjXXx8YSx0W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHZ8fChtLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnYpZm9yKGIgaW4gYSlzW2JdPVtzW2JdLGFbYl1dO2Vsc2UgeC5hbHdheXMoYVt4LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx3O3JldHVybiBlJiZlLmFib3J0KGIpLHooMCxiKSx0aGlzfX07aWYocS5wcm9taXNlKHgpLmNvbXBsZXRlPXIuYWRkLHguc3VjY2Vzcz14LmRvbmUseC5lcnJvcj14LmZhaWwsbS51cmw9KChifHxtLnVybHx8amIuaHJlZikrXCJcIikucmVwbGFjZShtYixcIlwiKS5yZXBsYWNlKHJiLGpiLnByb3RvY29sK1wiLy9cIiksbS50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG0ubWV0aG9kfHxtLnR5cGUsbS5kYXRhVHlwZXM9bi50cmltKG0uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXCJcIl0sbnVsbD09bS5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9bS51cmwsai5ocmVmPWouaHJlZixtLmNyb3NzRG9tYWluPXZiLnByb3RvY29sK1wiLy9cIit2Yi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeSl7bS5jcm9zc0RvbWFpbj0hMH19aWYobS5kYXRhJiZtLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgbS5kYXRhJiYobS5kYXRhPW4ucGFyYW0obS5kYXRhLG0udHJhZGl0aW9uYWwpKSx4YihzYixtLGMseCksMj09PXYpcmV0dXJuIHg7az1uLmV2ZW50JiZtLmdsb2JhbCxrJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLG0udHlwZT1tLnR5cGUudG9VcHBlckNhc2UoKSxtLmhhc0NvbnRlbnQ9IXFiLnRlc3QobS50eXBlKSxmPW0udXJsLG0uaGFzQ29udGVudHx8KG0uZGF0YSYmKGY9bS51cmwrPShsYi50ZXN0KGYpP1wiJlwiOlwiP1wiKSttLmRhdGEsZGVsZXRlIG0uZGF0YSksbS5jYWNoZT09PSExJiYobS51cmw9bmIudGVzdChmKT9mLnJlcGxhY2UobmIsXCIkMV89XCIra2IrKyk6ZisobGIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK2tiKyspKSxtLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtmXSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtmXSksbi5ldGFnW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2ZdKSksKG0uZGF0YSYmbS5oYXNDb250ZW50JiZtLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixtLmNvbnRlbnRUeXBlKSx4LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixtLmRhdGFUeXBlc1swXSYmbS5hY2NlcHRzW20uZGF0YVR5cGVzWzBdXT9tLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PW0uZGF0YVR5cGVzWzBdP1wiLCBcIit1YitcIjsgcT0wLjAxXCI6XCJcIik6bS5hY2NlcHRzW1wiKlwiXSk7Zm9yKGwgaW4gbS5oZWFkZXJzKXguc2V0UmVxdWVzdEhlYWRlcihsLG0uaGVhZGVyc1tsXSk7aWYobS5iZWZvcmVTZW5kJiYobS5iZWZvcmVTZW5kLmNhbGwobyx4LG0pPT09ITF8fDI9PT12KSlyZXR1cm4geC5hYm9ydCgpO3c9XCJhYm9ydFwiO2ZvcihsIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXhbbF0obVtsXSk7aWYoZT14Yih0YixtLGMseCkpe2lmKHgucmVhZHlTdGF0ZT0xLGsmJnAudHJpZ2dlcihcImFqYXhTZW5kXCIsW3gsbV0pLDI9PT12KXJldHVybiB4O20uYXN5bmMmJm0udGltZW91dD4wJiYoaT1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt4LmFib3J0KFwidGltZW91dFwiKX0sbS50aW1lb3V0KSk7dHJ5e3Y9MSxlLnNlbmQodCx6KX1jYXRjaCh5KXtpZighKDI+dikpdGhyb3cgeTt6KC0xLHkpfX1lbHNlIHooLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geihiLGMsZCxoKXt2YXIgaixsLHQsdSx3LHk9YzsyIT09diYmKHY9MixpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseC5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJjMwMD5ifHwzMDQ9PT1iLGQmJih1PXpiKG0seCxkKSksdT1BYihtLHUseCxqKSxqPyhtLmlmTW9kaWZpZWQmJih3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtmXT13KSx3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09bS50eXBlP3k9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3k9XCJub3Rtb2RpZmllZFwiOih5PXUuc3RhdGUsbD11LmRhdGEsdD11LmVycm9yLGo9IXQpKToodD15LCFiJiZ5fHwoeT1cImVycm9yXCIsMD5iJiYoYj0wKSkpLHguc3RhdHVzPWIseC5zdGF0dXNUZXh0PShjfHx5KStcIlwiLGo/cS5yZXNvbHZlV2l0aChvLFtsLHkseF0pOnEucmVqZWN0V2l0aChvLFt4LHksdF0pLHguc3RhdHVzQ29kZShzKSxzPXZvaWQgMCxrJiZwLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeCxtLGo/bDp0XSksci5maXJlV2l0aChvLFt4LHldKSxrJiYocC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3gsbV0pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHh9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgobi5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LG4uaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pOih0aGlzWzBdJiYoYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXMpfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9bih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1uLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8bih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9fSksbi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy52aXNpYmxlKGEpfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiBhLm9mZnNldFdpZHRoPjB8fGEub2Zmc2V0SGVpZ2h0PjB8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg+MH07dmFyIEJiPS8lMjAvZyxDYj0vXFxbXFxdJC8sRGI9L1xccj9cXG4vZyxFYj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksRmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEdiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fENiLnRlc3QoYSk/ZChhLGUpOkdiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpR2IoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUdiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoQmIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJkZiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFFYi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhWC50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKERiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoRGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgSGI9ezA6MjAwLDEyMjM6MjA0fSxJYj1uLmFqYXhTZXR0aW5ncy54aHIoKTtsLmNvcnM9ISFJYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIEliLGwuYWpheD1JYj0hIUliLG4uYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO3JldHVybiBsLmNvcnN8fEliJiYhYi5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihlLGYpe3ZhciBnLGg9Yi54aHIoKTtpZihoLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZyBpbiBiLnhockZpZWxkcyloW2ddPWIueGhyRmllbGRzW2ddO2IubWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZyBpbiBlKWguc2V0UmVxdWVzdEhlYWRlcihnLGVbZ10pO2M9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YyYmKGM9ZD1oLm9ubG9hZD1oLm9uZXJyb3I9aC5vbmFib3J0PWgub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09YT9oLmFib3J0KCk6XCJlcnJvclwiPT09YT9cIm51bWJlclwiIT10eXBlb2YgaC5zdGF0dXM/ZigwLFwiZXJyb3JcIik6ZihoLnN0YXR1cyxoLnN0YXR1c1RleHQpOmYoSGJbaC5zdGF0dXNdfHxoLnN0YXR1cyxoLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oaC5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGgucmVzcG9uc2VUZXh0P3tiaW5hcnk6aC5yZXNwb25zZX06e3RleHQ6aC5yZXNwb25zZVRleHR9LGguZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGgub25sb2FkPWMoKSxkPWgub25lcnJvcj1jKFwiZXJyb3JcIiksdm9pZCAwIT09aC5vbmFib3J0P2gub25hYm9ydD1kOmgub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWgucmVhZHlTdGF0ZSYmYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyYmZCgpfSl9LGM9YyhcImFib3J0XCIpO3RyeXtoLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpfWNhdGNoKGkpe2lmKGMpdGhyb3cgaX19LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgSmI9W10sS2I9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1KYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2tiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEtiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZLYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEtiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGxiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/bihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxKYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8ZDt2YXIgZT14LmV4ZWMoYSksZj0hYyYmW107cmV0dXJuIGU/W2IuY3JlYXRlRWxlbWVudChlWzFdKV06KGU9Y2EoW2FdLGIsZiksZiYmZi5sZW5ndGgmJm4oZikucmVtb3ZlKCksbi5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX07dmFyIExiPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZMYilyZXR1cm4gTGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O2Z1bmN0aW9uIE1iKGEpe3JldHVybiBuLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9bi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1uLmNzcyhhLFwicG9zaXRpb25cIiksbD1uKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9bi5jc3MoYSxcInRvcFwiKSxpPW4uY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbi5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLG4uZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9dGhpc1swXSxlPXt0b3A6MCxsZWZ0OjB9LGY9ZCYmZC5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGQpPyhlPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz1NYihmKSx7dG9wOmUudG9wK2MucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDplLmxlZnQrYy5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9KTplfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09bi5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxuLm5vZGVOYW1lKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkLnRvcCs9bi5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGQubGVmdCs9bi5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDpiLnRvcC1kLnRvcC1uLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1uLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fEVhfSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7bi5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1NYihhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPUdhKGwucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPUZhKGEsYiksQmEudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9fSksbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgTmI9YS5qUXVlcnksT2I9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9T2IpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PU5iKSxufSxifHwoYS5qUXVlcnk9YS4kPW4pLG59KTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgLy8g0J/RgNC10LTQvtGC0LLRgNCw0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80Ysg0YfQtdGA0LXQtyBwaHAg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDXG4gICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyDQn9GA0L7QstC10YDQutCwINC/0L7Rh9GC0Ysg0L3QsCDRgdC+0L7RgtCy0LXRgtGB0YLQstC40LUg0LzQsNGB0LrQtSAqQCouKlxuICAgIGZ1bmN0aW9uIGlzRW1haWwoIG1haWwgKXtcbiAgICAgICAgdmFyIHJlZ2V4ID0gL1xcUytAXFxTKy9pZ207XG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KG1haWwpO1xuICAgIH1cblxuXG4gICAgLy8g0J7Rh9C40YHRgtC60LAg0YTQvtGA0LzRi1xuICAgIGZ1bmN0aW9uIGNsZWFyRmllbGRzKCBzZWxlY3RvciApe1xuICAgICAgICAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiggJCh0aGlzKS5hdHRyKCduYW1lJykgIT0gJ2Zvcm0nKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyDQn9GA0L7QstC10YDQutCwINC+0YLQtNC10LvRjNC90L7Qs9C+INC/0L7Qu9GPINC90LAg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgICBmdW5jdGlvbiBmaWVsZFZhbGlkKCBpbnB1dCApIHtcblxuICAgICAgICBpZiggaW5wdXQudmFsKCkgIT0gJycgKXtcblxuICAgICAgICAgICAgaWYgKCBpbnB1dC5hdHRyKCd0eXBlJykgPT0gJ2VtYWlsJyApe1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0VtYWlsKCBpbnB1dC52YWwoKSApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQvtCyINC/0L7Qu9GOINC/0L4g0YDQtdC30YPQu9GM0YLQsNGC0LDQvCDQstCw0LvQuNC00LDRhtC40LhcbiAgICBmdW5jdGlvbiBmaWVsZENoZWNrKCBpbnB1dCApIHtcblxuICAgICAgICB2YXIgcGFyZW50ID0gaW5wdXQucGFyZW50KCk7XG5cbiAgICAgICAgaWYoIGZpZWxkVmFsaWQoIGlucHV0ICkgKXtcbiAgICAgICAgICAgIGlmKCBwYXJlbnQuaGFzQ2xhc3MoJ2Vycm9yJykgKXtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ2Vycm9yJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudC5hZGRDbGFzcygndmFsaWQnKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiggcGFyZW50Lmhhc0NsYXNzKCd2YWxpZCcpICl7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd2YWxpZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoJy5mb3JtLWlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkQ2hlY2soICQodGhpcykgKTtcbiAgICB9KTtcbiAgICAkKCcuZm9ybS1pbnB1dCcpLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZmlsbGluZycpO1xuICAgIH0pO1xuICAgICQoJy5mb3JtLWlucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdmaWxsaW5nJyk7XG4gICAgfSk7XG5cblxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC90LAg0L7RgtGB0YPRgtGB0YLQstC40LUg0L/Rg9GB0YLRi9GFINC/0L7Qu9C10Lkg0Lgg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgICBmdW5jdGlvbiBmaWVsZHNDaGVjayggc2VsZWN0b3IgKXtcbiAgICAgICAgdmFyIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB2YXIgZm9jdXMgPSB0cnVlO1xuICAgICAgICAkKHNlbGVjdG9yKS5lYWNoKCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja2VkID0gZmllbGRDaGVjayggJCh0aGlzKSApICYmIGNoZWNrZWQ7XG4gICAgICAgICAgICBpZiAoIGZvY3VzICYmICFjaGVja2VkICl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICB9XG5cblxuICAgIC8vINCh0LHQvtGAINC00LDQvdC90YvRhSDRgSDRhNC+0YDQvNGLINC4INGE0L7RgNC80LjRgNC+0LLQsNC90LjQtSDQvtCx0YrQtdC60YLQsFxuICAgIGZ1bmN0aW9uIGFkZEZpZWxkcyggc2VsZWN0b3IsIG9iamVjdCApe1xuXG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgb2JqZWN0WyR0aGlzLmF0dHIoJ25hbWUnKV0gPSAkdGhpcy52YWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWpheERhdGFTZW5kKHR5cGUsIHVybCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gJC5hamF4KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyp3aW5kb3cub25TdWJtaXRSZUNhcHRjaGEgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHNlbmRCdXR0b24uYWRkQ2xhc3MoJ2xvYWQnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnQ2FwdGNoYSB0ZXN0IHN0YXJ0Jyk7XG4gICAgICAgIHZhciBjUmVzcG9uc2UgPSB7J2ctcmVjYXB0Y2hhLXJlc3BvbnNlJzogZ3JlY2FwdGNoYS5nZXRSZXNwb25zZSgpfTtcblxuICAgICAgICB2YXIgY2FwY2hhVGVzdCA9IGFqYXhEYXRhU2VuZCgnUE9TVCcsICcvY2FwdGNoYScsIGNSZXNwb25zZSk7XG5cbiAgICAgICAgY2FwY2hhVGVzdC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgaWYoIGRhdGEuZXJyb3IgKXtcbiAgICAgICAgICAgICAgICBhbGVydCgn0J/RgNC+0LLQtdGA0LrQsCDQvdC1INC/0YDQvtC50LTQtdC90LAhJyk7XG4gICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZCcpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FwdGNoYVRlc3Qgc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIHNlbmRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYXBjaGFUZXN0LmVycm9yKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgYWxlcnQoJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INGB0L7QvtCx0YnQtdC90LjRjyDQv9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FwdGNoYVRlc3QgZXJyb3InKTtcbiAgICAgICAgICAgIHNlbmRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWQnKTtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07Ki9cblxuXG4gICAgdmFyIHVuaWNhbCwgc2VuZEJ1dHRvbiwgc2VsZWN0b3I7XG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG4gICAgLy8gdmFyIHRoYW5rc19zaG93ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBmaW5hbFZhbGlkYXRpb24oKSB7XG4gICAgICAgIGlmKCBhY3RpdmUgKXtcbiAgICAgICAgICAgIHNlbmRCdXR0b24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgdW5pY2FsID0gc2VuZEJ1dHRvbi5jbG9zZXN0KCcuZm9ybS1pZCcpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBzZWxlY3RvciA9ICcjJyt1bmljYWwrJyAuZm9ybS1pbnB1dCc7XG5cbiAgICAgICAgICAgIHZhciB2YWxpZEZvcm0gID0gZmllbGRzQ2hlY2soIHNlbGVjdG9yICk7XG5cbiAgICAgICAgICAgIGlmICggdmFsaWRGb3JtICl7XG4gICAgICAgICAgICAgICAgLypncmVjYXB0Y2hhLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgZ3JlY2FwdGNoYS5leGVjdXRlKCk7Ki9cbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvKmlmICh1bmljYWwgPT0gJ2ZlZWRiYWNrX2NhbGwnIHx8IHVuaWNhbCA9PSAnZmxhdHNfY2FsbCcpe1xuICAgICAgICAgICAgICAgICAgICB0aGFua3Nfc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5hZGRDbGFzcygnbG9hZCcpO1xuICAgICAgICAgICAgICAgIHNlbmRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkKCcuc2VuZC1mb3JtJykub24oJ2NsaWNrJywgZmluYWxWYWxpZGF0aW9uKTtcblxuXG4gICAgZnVuY3Rpb24gc2VuZEZvcm0oKSB7XG5cbiAgICAgICAgdmFyIGRhdGFvYmogPSB7fTtcblxuICAgICAgICBhZGRGaWVsZHMoIHNlbGVjdG9yLCBkYXRhb2JqICk7XG5cbiAgICAgICAgdmFyIHJlc3BvbnNlID0gYWpheERhdGFTZW5kKCdQT1NUJywgJy9mZWVkYmFjay9tYWlsJywgZGF0YW9iaik7XG4gICAgICAgIHJlc3BvbnNlLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBpZighZGF0YS5lcnJvcil7XG4gICAgICAgICAgICAgICAgLyppZiAodGhhbmtzX3Nob3cpe1xuICAgICAgICAgICAgICAgICAgICAkKCcudGhhbmsnKS5jbGljaygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy53aGl0ZS1wb3B1cF9fdGhhbmtzLW1lc3NhZ2UnKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcud2hpdGUtcG9wdXBfX3RoYW5rcy1tZXNzYWdlJykuZmFkZU91dCgxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi90aGFua3NcIjtcbiAgICAgICAgICAgICAgICBjbGVhckZpZWxkcyggc2VsZWN0b3IgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoYW5rc19zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICBzZW5kQnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkJyk7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzcG9uc2UuZXJyb3IoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNlbmRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWQnKTtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGFua3Nfc2hvdyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiLCIvKiFcbiAqIEZvdG9yYW1hIDQuNi40IHwgaHR0cDovL2ZvdG9yYW1hLmlvL2xpY2Vuc2UvXG4gKi9cbmZvdG9yYW1hVmVyc2lvbiA9ICc0LjYuNCc7XG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIGxvY2F0aW9uLCAkLCB1bmRlZmluZWQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2ZvdG9yYW1hQ2xhc3MgPSAnZm90b3JhbWEnLFxuICAgIF9mdWxsc2NyZWVuQ2xhc3MgPSAnZnVsbHNjcmVlbicsXG5cbiAgICB3cmFwQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX3dyYXAnLFxuICAgIHdyYXBDc3MyQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS1jc3MyJyxcbiAgICB3cmFwQ3NzM0NsYXNzID0gd3JhcENsYXNzICsgJy0tY3NzMycsXG4gICAgd3JhcFZpZGVvQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS12aWRlbycsXG4gICAgd3JhcEZhZGVDbGFzcyA9IHdyYXBDbGFzcyArICctLWZhZGUnLFxuICAgIHdyYXBTbGlkZUNsYXNzID0gd3JhcENsYXNzICsgJy0tc2xpZGUnLFxuICAgIHdyYXBOb0NvbnRyb2xzQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS1uby1jb250cm9scycsXG4gICAgd3JhcE5vU2hhZG93c0NsYXNzID0gd3JhcENsYXNzICsgJy0tbm8tc2hhZG93cycsXG4gICAgd3JhcFBhbllDbGFzcyA9IHdyYXBDbGFzcyArICctLXBhbi15JyxcbiAgICB3cmFwUnRsQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS1ydGwnLFxuICAgIHdyYXBPbmx5QWN0aXZlQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS1vbmx5LWFjdGl2ZScsXG4gICAgd3JhcE5vQ2FwdGlvbnNDbGFzcyA9IHdyYXBDbGFzcyArICctLW5vLWNhcHRpb25zJyxcbiAgICB3cmFwVG9nZ2xlQXJyb3dzQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS10b2dnbGUtYXJyb3dzJyxcblxuICAgIHN0YWdlQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX3N0YWdlJyxcbiAgICBzdGFnZUZyYW1lQ2xhc3MgPSBzdGFnZUNsYXNzICsgJ19fZnJhbWUnLFxuICAgIHN0YWdlRnJhbWVWaWRlb0NsYXNzID0gc3RhZ2VGcmFtZUNsYXNzICsgJy0tdmlkZW8nLFxuICAgIHN0YWdlU2hhZnRDbGFzcyA9IHN0YWdlQ2xhc3MgKyAnX19zaGFmdCcsXG5cbiAgICBncmFiQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2dyYWInLFxuICAgIHBvaW50ZXJDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fcG9pbnRlcicsXG5cbiAgICBhcnJDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fYXJyJyxcbiAgICBhcnJEaXNhYmxlZENsYXNzID0gYXJyQ2xhc3MgKyAnLS1kaXNhYmxlZCcsXG4gICAgYXJyUHJldkNsYXNzID0gYXJyQ2xhc3MgKyAnLS1wcmV2JyxcbiAgICBhcnJOZXh0Q2xhc3MgPSBhcnJDbGFzcyArICctLW5leHQnLFxuICAgIGFyckFyckNsYXNzID0gYXJyQ2xhc3MgKyAnX19hcnInLFxuXG4gICAgbmF2Q2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX25hdicsXG4gICAgbmF2V3JhcENsYXNzID0gbmF2Q2xhc3MgKyAnLXdyYXAnLFxuICAgIG5hdlNoYWZ0Q2xhc3MgPSBuYXZDbGFzcyArICdfX3NoYWZ0JyxcbiAgICBuYXZEb3RzQ2xhc3MgPSBuYXZDbGFzcyArICctLWRvdHMnLFxuICAgIG5hdlRodW1ic0NsYXNzID0gbmF2Q2xhc3MgKyAnLS10aHVtYnMnLFxuICAgIG5hdkZyYW1lQ2xhc3MgPSBuYXZDbGFzcyArICdfX2ZyYW1lJyxcbiAgICBuYXZGcmFtZURvdENsYXNzID0gbmF2RnJhbWVDbGFzcyArICctLWRvdCcsXG4gICAgbmF2RnJhbWVUaHVtYkNsYXNzID0gbmF2RnJhbWVDbGFzcyArICctLXRodW1iJyxcblxuICAgIGZhZGVDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fZmFkZScsXG4gICAgZmFkZUZyb250Q2xhc3MgPSBmYWRlQ2xhc3MgKyAnLWZyb250JyxcbiAgICBmYWRlUmVhckNsYXNzID0gZmFkZUNsYXNzICsgJy1yZWFyJyxcblxuICAgIHNoYWRvd0NsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19zaGFkb3cnLFxuICAgIHNoYWRvd3NDbGFzcyA9IHNoYWRvd0NsYXNzICsgJ3MnLFxuICAgIHNoYWRvd3NMZWZ0Q2xhc3MgPSBzaGFkb3dzQ2xhc3MgKyAnLS1sZWZ0JyxcbiAgICBzaGFkb3dzUmlnaHRDbGFzcyA9IHNoYWRvd3NDbGFzcyArICctLXJpZ2h0JyxcblxuICAgIGFjdGl2ZUNsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19hY3RpdmUnLFxuICAgIHNlbGVjdENsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19zZWxlY3QnLFxuXG4gICAgaGlkZGVuQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICctLWhpZGRlbicsXG5cbiAgICBmdWxsc2NyZWVuQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICctLWZ1bGxzY3JlZW4nLFxuICAgIGZ1bGxzY3JlZW5JY29uQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2Z1bGxzY3JlZW4taWNvbicsXG5cbiAgICBlcnJvckNsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19lcnJvcicsXG4gICAgbG9hZGluZ0NsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19sb2FkaW5nJyxcbiAgICBsb2FkZWRDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fbG9hZGVkJyxcbiAgICBsb2FkZWRGdWxsQ2xhc3MgPSBsb2FkZWRDbGFzcyArICctLWZ1bGwnLFxuICAgIGxvYWRlZEltZ0NsYXNzID0gbG9hZGVkQ2xhc3MgKyAnLS1pbWcnLFxuXG4gICAgZ3JhYmJpbmdDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fZ3JhYmJpbmcnLFxuXG4gICAgaW1nQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2ltZycsXG4gICAgaW1nRnVsbENsYXNzID0gaW1nQ2xhc3MgKyAnLS1mdWxsJyxcblxuICAgIGRvdENsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19kb3QnLFxuICAgIHRodW1iQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX3RodW1iJyxcbiAgICB0aHVtYkJvcmRlckNsYXNzID0gdGh1bWJDbGFzcyArICctYm9yZGVyJyxcblxuICAgIGh0bWxDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19faHRtbCcsXG5cbiAgICB2aWRlb0NsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX192aWRlbycsXG4gICAgdmlkZW9QbGF5Q2xhc3MgPSB2aWRlb0NsYXNzICsgJy1wbGF5JyxcbiAgICB2aWRlb0Nsb3NlQ2xhc3MgPSB2aWRlb0NsYXNzICsgJy1jbG9zZScsXG5cbiAgICBjYXB0aW9uQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2NhcHRpb24nLFxuICAgIGNhcHRpb25XcmFwQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2NhcHRpb25fX3dyYXAnLFxuXG4gICAgc3Bpbm5lckNsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19zcGlubmVyJyxcblxuICAgIGJ1dHRvbkF0dHJpYnV0ZXMgPSAnXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvbic7XG52YXIgSlFVRVJZX1ZFUlNJT04gPSAkICYmICQuZm4uanF1ZXJ5LnNwbGl0KCcuJyk7XG5cbmlmICghSlFVRVJZX1ZFUlNJT05cbiAgICB8fCBKUVVFUllfVkVSU0lPTlswXSA8IDFcbiAgICB8fCAoSlFVRVJZX1ZFUlNJT05bMF0gPT0gMSAmJiBKUVVFUllfVkVSU0lPTlsxXSA8IDgpKSB7XG4gIHRocm93ICdGb3RvcmFtYSByZXF1aXJlcyBqUXVlcnkgMS44IG9yIGxhdGVyIGFuZCB3aWxsIG5vdCBydW4gd2l0aG91dCBpdC4nO1xufVxuLy8gTXkgVW5kZXJzY29yZSA6LSlcbnZhciBfID0ge307XG4vKiBNb2Rlcm5penIgMi42LjIgKEN1c3RvbSBCdWlsZCkgfCBNSVQgJiBCU0RcbiAqIEJ1aWxkOiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8jLWNzc3RyYW5zZm9ybXMzZC1wcmVmaXhlZC10ZXN0c3R5bGVzLXRlc3Rwcm9wLXRlc3RhbGxwcm9wcy1wcmVmaXhlcy1kb21wcmVmaXhlc1xuICovXG5cbnZhciBNb2Rlcm5penIgPSAoZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG4gIHZhciB2ZXJzaW9uID0gJzIuNi4yJyxcblxuICAgICAgTW9kZXJuaXpyID0ge30sXG5cbiAgICAgIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cbiAgICAgIG1vZCA9ICdtb2Rlcm5penInLFxuICAgICAgbW9kRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobW9kKSxcbiAgICAgIG1TdHlsZSA9IG1vZEVsZW0uc3R5bGUsXG5cbiAgICAgIGlucHV0RWxlbSxcblxuICAgICAgdG9TdHJpbmcgPSB7fS50b1N0cmluZyxcblxuICAgICAgcHJlZml4ZXMgPSAnIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtICcuc3BsaXQoJyAnKSxcblxuICAgICAgb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLFxuXG4gICAgICBjc3NvbVByZWZpeGVzID0gb21QcmVmaXhlcy5zcGxpdCgnICcpLFxuXG4gICAgICBkb21QcmVmaXhlcyA9IG9tUHJlZml4ZXMudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLFxuXG4gICAgICB0ZXN0cyA9IHt9LFxuICAgICAgaW5wdXRzID0ge30sXG4gICAgICBhdHRycyA9IHt9LFxuXG4gICAgICBjbGFzc2VzID0gW10sXG5cbiAgICAgIHNsaWNlID0gY2xhc3Nlcy5zbGljZSxcblxuICAgICAgZmVhdHVyZU5hbWUsXG5cbiAgICAgIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzID0gZnVuY3Rpb24gKHJ1bGUsIGNhbGxiYWNrLCBub2RlcywgdGVzdG5hbWVzKSB7XG5cbiAgICAgICAgdmFyIHN0eWxlLCByZXQsIG5vZGUsIGRvY092ZXJmbG93LFxuICAgICAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICAgIGZha2VCb2R5ID0gYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KG5vZGVzLCAxMCkpIHtcbiAgICAgICAgICB3aGlsZSAobm9kZXMtLSkge1xuICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm9kZS5pZCA9IHRlc3RuYW1lcyA/IHRlc3RuYW1lc1tub2Rlc10gOiBtb2QgKyAobm9kZXMgKyAxKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZSA9IFsnJiMxNzM7JywgJzxzdHlsZSBpZD1cInMnLCBtb2QsICdcIj4nLCBydWxlLCAnPC9zdHlsZT4nXS5qb2luKCcnKTtcbiAgICAgICAgZGl2LmlkID0gbW9kO1xuICAgICAgICAoYm9keSA/IGRpdiA6IGZha2VCb2R5KS5pbm5lckhUTUwgKz0gc3R5bGU7XG4gICAgICAgIGZha2VCb2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgIGZha2VCb2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgICBmYWtlQm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAgICAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChmYWtlQm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSBjYWxsYmFjayhkaXYsIHJ1bGUpO1xuICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICBmYWtlQm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZha2VCb2R5KTtcbiAgICAgICAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhIXJldDtcblxuICAgICAgfSxcbiAgICAgIF9oYXNPd25Qcm9wZXJ0eSA9ICh7fSkuaGFzT3duUHJvcGVydHksIGhhc093blByb3A7XG5cbiAgaWYgKCFpcyhfaGFzT3duUHJvcGVydHksICd1bmRlZmluZWQnKSAmJiAhaXMoX2hhc093blByb3BlcnR5LmNhbGwsICd1bmRlZmluZWQnKSkge1xuICAgIGhhc093blByb3AgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuICAgIH07XG4gIH1cbiAgZWxzZSB7XG4gICAgaGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gKChwcm9wZXJ0eSBpbiBvYmplY3QpICYmIGlzKG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbcHJvcGVydHldLCAndW5kZWZpbmVkJykpO1xuICAgIH07XG4gIH1cblxuXG4gIGlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKHRoYXQpIHtcblxuICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgIGJvdW5kID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG5cbiAgICAgICAgICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIEYucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSBuZXcgRigpO1xuXG4gICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICBzZWxmLFxuICAgICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGY7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBib3VuZDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3NzIChzdHIpIHtcbiAgICBtU3R5bGUuY3NzVGV4dCA9IHN0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENzc0FsbCAoc3RyMSwgc3RyMikge1xuICAgIHJldHVybiBzZXRDc3MocHJlZml4ZXMuam9pbihzdHIxICsgJzsnKSArICggc3RyMiB8fCAnJyApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzIChvYmosIHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gdHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zIChzdHIsIHN1YnN0cikge1xuICAgIHJldHVybiAhIX4oJycgKyBzdHIpLmluZGV4T2Yoc3Vic3RyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRlc3RQcm9wcyAocHJvcHMsIHByZWZpeGVkKSB7XG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICghY29udGFpbnMocHJvcCwgXCItXCIpICYmIG1TdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXhlZCA9PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0ZXN0RE9NUHJvcHMgKHByb3BzLCBvYmosIGVsZW0pIHtcbiAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgICB2YXIgaXRlbSA9IG9ialtwcm9wc1tpXV07XG4gICAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgaWYgKGVsZW0gPT09IGZhbHNlKSByZXR1cm4gcHJvcHNbaV07XG5cbiAgICAgICAgaWYgKGlzKGl0ZW0sICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uYmluZChlbGVtIHx8IG9iaik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdGVzdFByb3BzQWxsIChwcm9wLCBwcmVmaXhlZCwgZWxlbSkge1xuXG4gICAgdmFyIHVjUHJvcCA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpLFxuICAgICAgICBwcm9wcyA9IChwcm9wICsgJyAnICsgY3Nzb21QcmVmaXhlcy5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG5cbiAgICBpZiAoaXMocHJlZml4ZWQsIFwic3RyaW5nXCIpIHx8IGlzKHByZWZpeGVkLCBcInVuZGVmaW5lZFwiKSkge1xuICAgICAgcmV0dXJuIHRlc3RQcm9wcyhwcm9wcywgcHJlZml4ZWQpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gKHByb3AgKyAnICcgKyAoZG9tUHJlZml4ZXMpLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcbiAgICAgIHJldHVybiB0ZXN0RE9NUHJvcHMocHJvcHMsIHByZWZpeGVkLCBlbGVtKTtcbiAgICB9XG4gIH1cblxuICB0ZXN0c1snY3NzdHJhbnNmb3JtczNkJ10gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgcmV0ID0gISF0ZXN0UHJvcHNBbGwoJ3BlcnNwZWN0aXZlJyk7XG5cbi8vIENocm9tZSBmYWlscyB0aGF0IHRlc3QsIGlnbm9yZVxuLy9cdFx0aWYgKHJldCAmJiAnd2Via2l0UGVyc3BlY3RpdmUnIGluIGRvY0VsZW1lbnQuc3R5bGUpIHtcbi8vXG4vL1x0XHRcdGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCdAbWVkaWEgKHRyYW5zZm9ybS0zZCksKC13ZWJraXQtdHJhbnNmb3JtLTNkKXsjbW9kZXJuaXpye2xlZnQ6OXB4O3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDozcHg7fX0nLCBmdW5jdGlvbiAobm9kZSwgcnVsZSkge1xuLy9cdFx0XHRcdHJldCA9IG5vZGUub2Zmc2V0TGVmdCA9PT0gOSAmJiBub2RlLm9mZnNldEhlaWdodCA9PT0gMztcbi8vXHRcdFx0fSk7XG4vL1x0XHR9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICBmb3IgKHZhciBmZWF0dXJlIGluIHRlc3RzKSB7XG4gICAgaWYgKGhhc093blByb3AodGVzdHMsIGZlYXR1cmUpKSB7XG4gICAgICBmZWF0dXJlTmFtZSA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcbiAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZV0gPSB0ZXN0c1tmZWF0dXJlXSgpO1xuXG4gICAgICBjbGFzc2VzLnB1c2goKE1vZGVybml6cltmZWF0dXJlTmFtZV0gPyAnJyA6ICduby0nKSArIGZlYXR1cmVOYW1lKTtcbiAgICB9XG4gIH1cblxuICBNb2Rlcm5penIuYWRkVGVzdCA9IGZ1bmN0aW9uIChmZWF0dXJlLCB0ZXN0KSB7XG4gICAgaWYgKHR5cGVvZiBmZWF0dXJlID09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZmVhdHVyZSkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChmZWF0dXJlLCBrZXkpKSB7XG4gICAgICAgICAgTW9kZXJuaXpyLmFkZFRlc3Qoa2V5LCBmZWF0dXJlWyBrZXkgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBmZWF0dXJlID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoTW9kZXJuaXpyW2ZlYXR1cmVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIE1vZGVybml6cjtcbiAgICAgIH1cblxuICAgICAgdGVzdCA9IHR5cGVvZiB0ZXN0ID09ICdmdW5jdGlvbicgPyB0ZXN0KCkgOiB0ZXN0O1xuXG4gICAgICBpZiAodHlwZW9mIGVuYWJsZUNsYXNzZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgZW5hYmxlQ2xhc3Nlcykge1xuICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyAodGVzdCA/ICcnIDogJ25vLScpICsgZmVhdHVyZTtcbiAgICAgIH1cbiAgICAgIE1vZGVybml6cltmZWF0dXJlXSA9IHRlc3Q7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gTW9kZXJuaXpyO1xuICB9O1xuXG5cbiAgc2V0Q3NzKCcnKTtcbiAgbW9kRWxlbSA9IGlucHV0RWxlbSA9IG51bGw7XG5cblxuICBNb2Rlcm5penIuX3ZlcnNpb24gPSB2ZXJzaW9uO1xuXG4gIE1vZGVybml6ci5fcHJlZml4ZXMgPSBwcmVmaXhlcztcbiAgTW9kZXJuaXpyLl9kb21QcmVmaXhlcyA9IGRvbVByZWZpeGVzO1xuICBNb2Rlcm5penIuX2Nzc29tUHJlZml4ZXMgPSBjc3NvbVByZWZpeGVzO1xuXG4gIE1vZGVybml6ci50ZXN0UHJvcCA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIHRlc3RQcm9wcyhbcHJvcF0pO1xuICB9O1xuXG4gIE1vZGVybml6ci50ZXN0QWxsUHJvcHMgPSB0ZXN0UHJvcHNBbGw7XG5cbiAgTW9kZXJuaXpyLnRlc3RTdHlsZXMgPSBpbmplY3RFbGVtZW50V2l0aFN0eWxlcztcbiAgTW9kZXJuaXpyLnByZWZpeGVkID0gZnVuY3Rpb24gKHByb3AsIG9iaiwgZWxlbSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsICdwZngnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCBvYmosIGVsZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTW9kZXJuaXpyO1xufSkod2luZG93LCBkb2N1bWVudCk7XG52YXIgZnVsbFNjcmVlbkFwaSA9IHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB9LFxuICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICB9LFxuICAgICAgZXZlbnQ6ICcnLFxuICAgICAgcHJlZml4OiAnJ1xuICAgIH0sXG4gICAgYnJvd3NlclByZWZpeGVzID0gJ3dlYmtpdCBtb3ogbyBtcyBraHRtbCcuc3BsaXQoJyAnKTtcblxuLy8gY2hlY2sgZm9yIG5hdGl2ZSBzdXBwb3J0XG5pZiAodHlwZW9mIGRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgZnVsbFNjcmVlbkFwaS5vayA9IHRydWU7XG59IGVsc2Uge1xuICAvLyBjaGVjayBmb3IgZnVsbHNjcmVlbiBzdXBwb3J0IGJ5IHZlbmRvciBwcmVmaXhcbiAgZm9yICh2YXIgaSA9IDAsIGlsID0gYnJvd3NlclByZWZpeGVzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICBmdWxsU2NyZWVuQXBpLnByZWZpeCA9IGJyb3dzZXJQcmVmaXhlc1tpXTtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50W2Z1bGxTY3JlZW5BcGkucHJlZml4ICsgJ0NhbmNlbEZ1bGxTY3JlZW4nIF0gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZ1bGxTY3JlZW5BcGkub2sgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbi8vIHVwZGF0ZSBtZXRob2RzIHRvIGRvIHNvbWV0aGluZyB1c2VmdWxcbmlmIChmdWxsU2NyZWVuQXBpLm9rKSB7XG4gIGZ1bGxTY3JlZW5BcGkuZXZlbnQgPSBmdWxsU2NyZWVuQXBpLnByZWZpeCArICdmdWxsc2NyZWVuY2hhbmdlJztcbiAgZnVsbFNjcmVlbkFwaS5pcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJlZml4KSB7XG4gICAgICBjYXNlICcnOlxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZnVsbFNjcmVlbjtcbiAgICAgIGNhc2UgJ3dlYmtpdCc6XG4gICAgICAgIHJldHVybiBkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZG9jdW1lbnRbdGhpcy5wcmVmaXggKyAnRnVsbFNjcmVlbiddO1xuICAgIH1cbiAgfTtcbiAgZnVsbFNjcmVlbkFwaS5yZXF1ZXN0ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuICh0aGlzLnByZWZpeCA9PT0gJycpID8gZWwucmVxdWVzdEZ1bGxTY3JlZW4oKSA6IGVsW3RoaXMucHJlZml4ICsgJ1JlcXVlc3RGdWxsU2NyZWVuJ10oKTtcbiAgfTtcbiAgZnVsbFNjcmVlbkFwaS5jYW5jZWwgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gKHRoaXMucHJlZml4ID09PSAnJykgPyBkb2N1bWVudC5jYW5jZWxGdWxsU2NyZWVuKCkgOiBkb2N1bWVudFt0aGlzLnByZWZpeCArICdDYW5jZWxGdWxsU2NyZWVuJ10oKTtcbiAgfTtcbn1cbi8vZmduYXNzLmdpdGh1Yi5jb20vc3Bpbi5qcyN2MS4zLjJcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxMyBGZWxpeCBHbmFzc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cblxudmFyIFNwaW5uZXIsXG4gICAgc3Bpbm5lckRlZmF1bHRzID0ge1xuICAgICAgbGluZXM6IDEyLCAvLyBUaGUgbnVtYmVyIG9mIGxpbmVzIHRvIGRyYXdcbiAgICAgIGxlbmd0aDogNSwgLy8gVGhlIGxlbmd0aCBvZiBlYWNoIGxpbmVcbiAgICAgIHdpZHRoOiAyLCAvLyBUaGUgbGluZSB0aGlja25lc3NcbiAgICAgIHJhZGl1czogNywgLy8gVGhlIHJhZGl1cyBvZiB0aGUgaW5uZXIgY2lyY2xlXG4gICAgICBjb3JuZXJzOiAxLCAvLyBDb3JuZXIgcm91bmRuZXNzICgwLi4xKVxuICAgICAgcm90YXRlOiAxNSwgLy8gVGhlIHJvdGF0aW9uIG9mZnNldFxuICAgICAgY29sb3I6ICdyZ2JhKDEyOCwgMTI4LCAxMjgsIC43NSknLFxuICAgICAgaHdhY2NlbDogdHJ1ZVxuICAgIH0sXG4gICAgc3Bpbm5lck92ZXJyaWRlID0ge1xuICAgICAgdG9wOiAnYXV0bycsXG4gICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICBjbGFzc05hbWU6ICcnXG4gICAgfTtcblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICAvKiBDb21tb25KUyAqL1xuICAvL2lmICh0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JykgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG5cbiAgLyogQU1EIG1vZHVsZSAqL1xuICAvL2Vsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZmFjdG9yeSlcblxuICAvKiBCcm93c2VyIGdsb2JhbCAqL1xuICAvL2Vsc2Ugcm9vdC5TcGlubmVyID0gZmFjdG9yeSgpXG5cbiAgU3Bpbm5lciA9IGZhY3RvcnkoKTtcbn1cbih0aGlzLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHByZWZpeGVzID0gWyd3ZWJraXQnLCAnTW96JywgJ21zJywgJ08nXSAvKiBWZW5kb3IgcHJlZml4ZXMgKi9cbiAgICAsIGFuaW1hdGlvbnMgPSB7fSAvKiBBbmltYXRpb24gcnVsZXMga2V5ZWQgYnkgdGhlaXIgbmFtZSAqL1xuICAgICwgdXNlQ3NzQW5pbWF0aW9ucyAvKiBXaGV0aGVyIHRvIHVzZSBDU1MgYW5pbWF0aW9ucyBvciBzZXRUaW1lb3V0ICovXG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gY3JlYXRlIGVsZW1lbnRzLiBJZiBubyB0YWcgbmFtZSBpcyBnaXZlbixcbiAgICogYSBESVYgaXMgY3JlYXRlZC4gT3B0aW9uYWxseSBwcm9wZXJ0aWVzIGNhbiBiZSBwYXNzZWQuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVFbCh0YWcsIHByb3ApIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyB8fCAnZGl2JylcbiAgICAgICwgblxuXG4gICAgZm9yKG4gaW4gcHJvcCkgZWxbbl0gPSBwcm9wW25dXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBjaGlsZHJlbiBhbmQgcmV0dXJucyB0aGUgcGFyZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gaW5zKHBhcmVudCAvKiBjaGlsZDEsIGNoaWxkMiwgLi4uKi8pIHtcbiAgICBmb3IgKHZhciBpPTEsIG49YXJndW1lbnRzLmxlbmd0aDsgaTxuOyBpKyspXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJndW1lbnRzW2ldKVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBhIG5ldyBzdHlsZXNoZWV0IHRvIGhvbGQgdGhlIEBrZXlmcmFtZSBvciBWTUwgcnVsZXMuXG4gICAqL1xuICB2YXIgc2hlZXQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gY3JlYXRlRWwoJ3N0eWxlJywge3R5cGUgOiAndGV4dC9jc3MnfSlcbiAgICBpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSwgZWwpXG4gICAgcmV0dXJuIGVsLnNoZWV0IHx8IGVsLnN0eWxlU2hlZXRcbiAgfSgpKVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9wYWNpdHkga2V5ZnJhbWUgYW5pbWF0aW9uIHJ1bGUgYW5kIHJldHVybnMgaXRzIG5hbWUuXG4gICAqIFNpbmNlIG1vc3QgbW9iaWxlIFdlYmtpdHMgaGF2ZSB0aW1pbmcgaXNzdWVzIHdpdGggYW5pbWF0aW9uLWRlbGF5LFxuICAgKiB3ZSBjcmVhdGUgc2VwYXJhdGUgcnVsZXMgZm9yIGVhY2ggbGluZS9zZWdtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkQW5pbWF0aW9uKGFscGhhLCB0cmFpbCwgaSwgbGluZXMpIHtcbiAgICB2YXIgbmFtZSA9IFsnb3BhY2l0eScsIHRyYWlsLCB+fihhbHBoYSoxMDApLCBpLCBsaW5lc10uam9pbignLScpXG4gICAgICAsIHN0YXJ0ID0gMC4wMSArIGkvbGluZXMgKiAxMDBcbiAgICAgICwgeiA9IE1hdGgubWF4KDEgLSAoMS1hbHBoYSkgLyB0cmFpbCAqICgxMDAtc3RhcnQpLCBhbHBoYSlcbiAgICAgICwgcHJlZml4ID0gdXNlQ3NzQW5pbWF0aW9ucy5zdWJzdHJpbmcoMCwgdXNlQ3NzQW5pbWF0aW9ucy5pbmRleE9mKCdBbmltYXRpb24nKSkudG9Mb3dlckNhc2UoKVxuICAgICAgLCBwcmUgPSBwcmVmaXggJiYgJy0nICsgcHJlZml4ICsgJy0nIHx8ICcnXG5cbiAgICBpZiAoIWFuaW1hdGlvbnNbbmFtZV0pIHtcbiAgICAgIHNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICdAJyArIHByZSArICdrZXlmcmFtZXMgJyArIG5hbWUgKyAneycgK1xuICAgICAgICAnMCV7b3BhY2l0eTonICsgeiArICd9JyArXG4gICAgICAgIHN0YXJ0ICsgJyV7b3BhY2l0eTonICsgYWxwaGEgKyAnfScgK1xuICAgICAgICAoc3RhcnQrMC4wMSkgKyAnJXtvcGFjaXR5OjF9JyArXG4gICAgICAgIChzdGFydCt0cmFpbCkgJSAxMDAgKyAnJXtvcGFjaXR5OicgKyBhbHBoYSArICd9JyArXG4gICAgICAgICcxMDAle29wYWNpdHk6JyArIHogKyAnfScgK1xuICAgICAgICAnfScsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aClcblxuICAgICAgYW5pbWF0aW9uc1tuYW1lXSA9IDFcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHZhcmlvdXMgdmVuZG9yIHByZWZpeGVzIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBzdXBwb3J0ZWQgcHJvcGVydHkuXG4gICAqL1xuICBmdW5jdGlvbiB2ZW5kb3IoZWwsIHByb3ApIHtcbiAgICB2YXIgcyA9IGVsLnN0eWxlXG4gICAgICAsIHBwXG4gICAgICAsIGlcblxuICAgIHByb3AgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKVxuICAgIGZvcihpPTA7IGk8cHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBwID0gcHJlZml4ZXNbaV0rcHJvcFxuICAgICAgaWYoc1twcF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIHBwXG4gICAgfVxuICAgIGlmKHNbcHJvcF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIHByb3BcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIG11bHRpcGxlIHN0eWxlIHByb3BlcnRpZXMgYXQgb25jZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNzcyhlbCwgcHJvcCkge1xuICAgIGZvciAodmFyIG4gaW4gcHJvcClcbiAgICAgIGVsLnN0eWxlW3ZlbmRvcihlbCwgbil8fG5dID0gcHJvcFtuXVxuXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICAvKipcbiAgICogRmlsbHMgaW4gZGVmYXVsdCB2YWx1ZXMuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZShvYmopIHtcbiAgICBmb3IgKHZhciBpPTE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZWYgPSBhcmd1bWVudHNbaV1cbiAgICAgIGZvciAodmFyIG4gaW4gZGVmKVxuICAgICAgICBpZiAob2JqW25dID09PSB1bmRlZmluZWQpIG9ialtuXSA9IGRlZltuXVxuICAgIH1cbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWJzb2x1dGUgcGFnZS1vZmZzZXQgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBwb3MoZWwpIHtcbiAgICB2YXIgbyA9IHsgeDplbC5vZmZzZXRMZWZ0LCB5OmVsLm9mZnNldFRvcCB9XG4gICAgd2hpbGUoKGVsID0gZWwub2Zmc2V0UGFyZW50KSlcbiAgICAgIG8ueCs9ZWwub2Zmc2V0TGVmdCwgby55Kz1lbC5vZmZzZXRUb3BcblxuICAgIHJldHVybiBvXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGluZSBjb2xvciBmcm9tIHRoZSBnaXZlbiBzdHJpbmcgb3IgYXJyYXkuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRDb2xvcihjb2xvciwgaWR4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2xvciA9PSAnc3RyaW5nJyA/IGNvbG9yIDogY29sb3JbaWR4ICUgY29sb3IubGVuZ3RoXVxuICB9XG5cbiAgLy8gQnVpbHQtaW4gZGVmYXVsdHNcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgbGluZXM6IDEyLCAgICAgICAgICAgIC8vIFRoZSBudW1iZXIgb2YgbGluZXMgdG8gZHJhd1xuICAgIGxlbmd0aDogNywgICAgICAgICAgICAvLyBUaGUgbGVuZ3RoIG9mIGVhY2ggbGluZVxuICAgIHdpZHRoOiA1LCAgICAgICAgICAgICAvLyBUaGUgbGluZSB0aGlja25lc3NcbiAgICByYWRpdXM6IDEwLCAgICAgICAgICAgLy8gVGhlIHJhZGl1cyBvZiB0aGUgaW5uZXIgY2lyY2xlXG4gICAgcm90YXRlOiAwLCAgICAgICAgICAgIC8vIFJvdGF0aW9uIG9mZnNldFxuICAgIGNvcm5lcnM6IDEsICAgICAgICAgICAvLyBSb3VuZG5lc3MgKDAuLjEpXG4gICAgY29sb3I6ICcjMDAwJywgICAgICAgIC8vICNyZ2Igb3IgI3JyZ2diYlxuICAgIGRpcmVjdGlvbjogMSwgICAgICAgICAvLyAxOiBjbG9ja3dpc2UsIC0xOiBjb3VudGVyY2xvY2t3aXNlXG4gICAgc3BlZWQ6IDEsICAgICAgICAgICAgIC8vIFJvdW5kcyBwZXIgc2Vjb25kXG4gICAgdHJhaWw6IDEwMCwgICAgICAgICAgIC8vIEFmdGVyZ2xvdyBwZXJjZW50YWdlXG4gICAgb3BhY2l0eTogMS80LCAgICAgICAgIC8vIE9wYWNpdHkgb2YgdGhlIGxpbmVzXG4gICAgZnBzOiAyMCwgICAgICAgICAgICAgIC8vIEZyYW1lcyBwZXIgc2Vjb25kIHdoZW4gdXNpbmcgc2V0VGltZW91dCgpXG4gICAgekluZGV4OiAyZTksICAgICAgICAgIC8vIFVzZSBhIGhpZ2ggei1pbmRleCBieSBkZWZhdWx0XG4gICAgY2xhc3NOYW1lOiAnc3Bpbm5lcicsIC8vIENTUyBjbGFzcyB0byBhc3NpZ24gdG8gdGhlIGVsZW1lbnRcbiAgICB0b3A6ICdhdXRvJywgICAgICAgICAgLy8gY2VudGVyIHZlcnRpY2FsbHlcbiAgICBsZWZ0OiAnYXV0bycsICAgICAgICAgLy8gY2VudGVyIGhvcml6b250YWxseVxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnICAvLyBlbGVtZW50IHBvc2l0aW9uXG4gIH1cblxuICAvKiogVGhlIGNvbnN0cnVjdG9yICovXG4gIGZ1bmN0aW9uIFNwaW5uZXIobykge1xuICAgIGlmICh0eXBlb2YgdGhpcyA9PSAndW5kZWZpbmVkJykgcmV0dXJuIG5ldyBTcGlubmVyKG8pXG4gICAgdGhpcy5vcHRzID0gbWVyZ2UobyB8fCB7fSwgU3Bpbm5lci5kZWZhdWx0cywgZGVmYXVsdHMpXG4gIH1cblxuICAvLyBHbG9iYWwgZGVmYXVsdHMgdGhhdCBvdmVycmlkZSB0aGUgYnVpbHQtaW5zOlxuICBTcGlubmVyLmRlZmF1bHRzID0ge31cblxuICBtZXJnZShTcGlubmVyLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgc3Bpbm5lciB0byB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQuIElmIHRoaXMgaW5zdGFuY2UgaXMgYWxyZWFkeVxuICAgICAqIHNwaW5uaW5nLCBpdCBpcyBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSBpdHMgcHJldmlvdXMgdGFyZ2V0IGIgY2FsbGluZ1xuICAgICAqIHN0b3AoKSBpbnRlcm5hbGx5LlxuICAgICAqL1xuICAgIHNwaW46IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgdGhpcy5zdG9wKClcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgICwgbyA9IHNlbGYub3B0c1xuICAgICAgICAsIGVsID0gc2VsZi5lbCA9IGNzcyhjcmVhdGVFbCgwLCB7Y2xhc3NOYW1lOiBvLmNsYXNzTmFtZX0pLCB7cG9zaXRpb246IG8ucG9zaXRpb24sIHdpZHRoOiAwLCB6SW5kZXg6IG8uekluZGV4fSlcbiAgICAgICAgLCBtaWQgPSBvLnJhZGl1cytvLmxlbmd0aCtvLndpZHRoXG4gICAgICAgICwgZXAgLy8gZWxlbWVudCBwb3NpdGlvblxuICAgICAgICAsIHRwIC8vIHRhcmdldCBwb3NpdGlvblxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUoZWwsIHRhcmdldC5maXJzdENoaWxkfHxudWxsKVxuICAgICAgICB0cCA9IHBvcyh0YXJnZXQpXG4gICAgICAgIGVwID0gcG9zKGVsKVxuICAgICAgICBjc3MoZWwsIHtcbiAgICAgICAgICBsZWZ0OiAoby5sZWZ0ID09ICdhdXRvJyA/IHRwLngtZXAueCArICh0YXJnZXQub2Zmc2V0V2lkdGggPj4gMSkgOiBwYXJzZUludChvLmxlZnQsIDEwKSArIG1pZCkgKyAncHgnLFxuICAgICAgICAgIHRvcDogKG8udG9wID09ICdhdXRvJyA/IHRwLnktZXAueSArICh0YXJnZXQub2Zmc2V0SGVpZ2h0ID4+IDEpIDogcGFyc2VJbnQoby50b3AsIDEwKSArIG1pZCkgICsgJ3B4J1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJvZ3Jlc3NiYXInKVxuICAgICAgc2VsZi5saW5lcyhlbCwgc2VsZi5vcHRzKVxuXG4gICAgICBpZiAoIXVzZUNzc0FuaW1hdGlvbnMpIHtcbiAgICAgICAgLy8gTm8gQ1NTIGFuaW1hdGlvbiBzdXBwb3J0LCB1c2Ugc2V0VGltZW91dCgpIGluc3RlYWRcbiAgICAgICAgdmFyIGkgPSAwXG4gICAgICAgICAgLCBzdGFydCA9IChvLmxpbmVzIC0gMSkgKiAoMSAtIG8uZGlyZWN0aW9uKSAvIDJcbiAgICAgICAgICAsIGFscGhhXG4gICAgICAgICAgLCBmcHMgPSBvLmZwc1xuICAgICAgICAgICwgZiA9IGZwcy9vLnNwZWVkXG4gICAgICAgICAgLCBvc3RlcCA9ICgxLW8ub3BhY2l0eSkgLyAoZipvLnRyYWlsIC8gMTAwKVxuICAgICAgICAgICwgYXN0ZXAgPSBmL28ubGluZXNcblxuICAgICAgICA7KGZ1bmN0aW9uIGFuaW0oKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgby5saW5lczsgaisrKSB7XG4gICAgICAgICAgICBhbHBoYSA9IE1hdGgubWF4KDEgLSAoaSArIChvLmxpbmVzIC0gaikgKiBhc3RlcCkgJSBmICogb3N0ZXAsIG8ub3BhY2l0eSlcblxuICAgICAgICAgICAgc2VsZi5vcGFjaXR5KGVsLCBqICogby5kaXJlY3Rpb24gKyBzdGFydCwgYWxwaGEsIG8pXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYudGltZW91dCA9IHNlbGYuZWwgJiYgc2V0VGltZW91dChhbmltLCB+figxMDAwL2ZwcykpXG4gICAgICAgIH0pKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWxmXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3BzIGFuZCByZW1vdmVzIHRoZSBTcGlubmVyLlxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsID0gdGhpcy5lbFxuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICAgIGlmIChlbC5wYXJlbnROb2RlKSBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuICAgICAgICB0aGlzLmVsID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdGhhdCBkcmF3cyB0aGUgaW5kaXZpZHVhbCBsaW5lcy4gV2lsbCBiZSBvdmVyd3JpdHRlblxuICAgICAqIGluIFZNTCBmYWxsYmFjayBtb2RlIGJlbG93LlxuICAgICAqL1xuICAgIGxpbmVzOiBmdW5jdGlvbihlbCwgbykge1xuICAgICAgdmFyIGkgPSAwXG4gICAgICAgICwgc3RhcnQgPSAoby5saW5lcyAtIDEpICogKDEgLSBvLmRpcmVjdGlvbikgLyAyXG4gICAgICAgICwgc2VnXG5cbiAgICAgIGZ1bmN0aW9uIGZpbGwoY29sb3IsIHNoYWRvdykge1xuICAgICAgICByZXR1cm4gY3NzKGNyZWF0ZUVsKCksIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB3aWR0aDogKG8ubGVuZ3RoK28ud2lkdGgpICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IG8ud2lkdGggKyAncHgnLFxuICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLFxuICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93LFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgfn4oMzYwL28ubGluZXMqaStvLnJvdGF0ZSkgKyAnZGVnKSB0cmFuc2xhdGUoJyArIG8ucmFkaXVzKydweCcgKycsMCknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogKG8uY29ybmVycyAqIG8ud2lkdGg+PjEpICsgJ3B4J1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaSA8IG8ubGluZXM7IGkrKykge1xuICAgICAgICBzZWcgPSBjc3MoY3JlYXRlRWwoKSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMSt+KG8ud2lkdGgvMikgKyAncHgnLFxuICAgICAgICAgIHRyYW5zZm9ybTogby5od2FjY2VsID8gJ3RyYW5zbGF0ZTNkKDAsMCwwKScgOiAnJyxcbiAgICAgICAgICBvcGFjaXR5OiBvLm9wYWNpdHksXG4gICAgICAgICAgYW5pbWF0aW9uOiB1c2VDc3NBbmltYXRpb25zICYmIGFkZEFuaW1hdGlvbihvLm9wYWNpdHksIG8udHJhaWwsIHN0YXJ0ICsgaSAqIG8uZGlyZWN0aW9uLCBvLmxpbmVzKSArICcgJyArIDEvby5zcGVlZCArICdzIGxpbmVhciBpbmZpbml0ZSdcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoby5zaGFkb3cpIGlucyhzZWcsIGNzcyhmaWxsKCcjMDAwJywgJzAgMCA0cHggJyArICcjMDAwJyksIHt0b3A6IDIrJ3B4J30pKVxuICAgICAgICBpbnMoZWwsIGlucyhzZWcsIGZpbGwoZ2V0Q29sb3Ioby5jb2xvciwgaSksICcwIDAgMXB4IHJnYmEoMCwwLDAsLjEpJykpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB0aGF0IGFkanVzdHMgdGhlIG9wYWNpdHkgb2YgYSBzaW5nbGUgbGluZS5cbiAgICAgKiBXaWxsIGJlIG92ZXJ3cml0dGVuIGluIFZNTCBmYWxsYmFjayBtb2RlIGJlbG93LlxuICAgICAqL1xuICAgIG9wYWNpdHk6IGZ1bmN0aW9uKGVsLCBpLCB2YWwpIHtcbiAgICAgIGlmIChpIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGgpIGVsLmNoaWxkTm9kZXNbaV0uc3R5bGUub3BhY2l0eSA9IHZhbFxuICAgIH1cblxuICB9KVxuXG5cbiAgZnVuY3Rpb24gaW5pdFZNTCgpIHtcblxuICAgIC8qIFV0aWxpdHkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgVk1MIHRhZyAqL1xuICAgIGZ1bmN0aW9uIHZtbCh0YWcsIGF0dHIpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbCgnPCcgKyB0YWcgKyAnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInNwaW4tdm1sXCI+JywgYXR0cilcbiAgICB9XG5cbiAgICAvLyBObyBDU1MgdHJhbnNmb3JtcyBidXQgVk1MIHN1cHBvcnQsIGFkZCBhIENTUyBydWxlIGZvciBWTUwgZWxlbWVudHM6XG4gICAgc2hlZXQuYWRkUnVsZSgnLnNwaW4tdm1sJywgJ2JlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpJylcblxuICAgIFNwaW5uZXIucHJvdG90eXBlLmxpbmVzID0gZnVuY3Rpb24oZWwsIG8pIHtcbiAgICAgIHZhciByID0gby5sZW5ndGgrby53aWR0aFxuICAgICAgICAsIHMgPSAyKnJcblxuICAgICAgZnVuY3Rpb24gZ3JwKCkge1xuICAgICAgICByZXR1cm4gY3NzKFxuICAgICAgICAgIHZtbCgnZ3JvdXAnLCB7XG4gICAgICAgICAgICBjb29yZHNpemU6IHMgKyAnICcgKyBzLFxuICAgICAgICAgICAgY29vcmRvcmlnaW46IC1yICsgJyAnICsgLXJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7IHdpZHRoOiBzLCBoZWlnaHQ6IHMgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHZhciBtYXJnaW4gPSAtKG8ud2lkdGgrby5sZW5ndGgpKjIgKyAncHgnXG4gICAgICAgICwgZyA9IGNzcyhncnAoKSwge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IG1hcmdpbiwgbGVmdDogbWFyZ2lufSlcbiAgICAgICAgLCBpXG5cbiAgICAgIGZ1bmN0aW9uIHNlZyhpLCBkeCwgZmlsdGVyKSB7XG4gICAgICAgIGlucyhnLFxuICAgICAgICAgIGlucyhjc3MoZ3JwKCksIHtyb3RhdGlvbjogMzYwIC8gby5saW5lcyAqIGkgKyAnZGVnJywgbGVmdDogfn5keH0pLFxuICAgICAgICAgICAgaW5zKGNzcyh2bWwoJ3JvdW5kcmVjdCcsIHthcmNzaXplOiBvLmNvcm5lcnN9KSwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiByLFxuICAgICAgICAgICAgICAgIGhlaWdodDogby53aWR0aCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBvLnJhZGl1cyxcbiAgICAgICAgICAgICAgICB0b3A6IC1vLndpZHRoPj4xLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB2bWwoJ2ZpbGwnLCB7Y29sb3I6IGdldENvbG9yKG8uY29sb3IsIGkpLCBvcGFjaXR5OiBvLm9wYWNpdHl9KSxcbiAgICAgICAgICAgICAgdm1sKCdzdHJva2UnLCB7b3BhY2l0eTogMH0pIC8vIHRyYW5zcGFyZW50IHN0cm9rZSB0byBmaXggY29sb3IgYmxlZWRpbmcgdXBvbiBvcGFjaXR5IGNoYW5nZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoby5zaGFkb3cpXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gby5saW5lczsgaSsrKVxuICAgICAgICAgIHNlZyhpLCAtMiwgJ3Byb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CbHVyKHBpeGVscmFkaXVzPTIsbWFrZXNoYWRvdz0xLHNoYWRvd29wYWNpdHk9LjMpJylcblxuICAgICAgZm9yIChpID0gMTsgaSA8PSBvLmxpbmVzOyBpKyspIHNlZyhpKVxuICAgICAgcmV0dXJuIGlucyhlbCwgZylcbiAgICB9XG5cbiAgICBTcGlubmVyLnByb3RvdHlwZS5vcGFjaXR5ID0gZnVuY3Rpb24oZWwsIGksIHZhbCwgbykge1xuICAgICAgdmFyIGMgPSBlbC5maXJzdENoaWxkXG4gICAgICBvID0gby5zaGFkb3cgJiYgby5saW5lcyB8fCAwXG4gICAgICBpZiAoYyAmJiBpK28gPCBjLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGMgPSBjLmNoaWxkTm9kZXNbaStvXTsgYyA9IGMgJiYgYy5maXJzdENoaWxkOyBjID0gYyAmJiBjLmZpcnN0Q2hpbGRcbiAgICAgICAgaWYgKGMpIGMub3BhY2l0eSA9IHZhbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9iZSA9IGNzcyhjcmVhdGVFbCgnZ3JvdXAnKSwge2JlaGF2aW9yOiAndXJsKCNkZWZhdWx0I1ZNTCknfSlcblxuICBpZiAoIXZlbmRvcihwcm9iZSwgJ3RyYW5zZm9ybScpICYmIHByb2JlLmFkaikgaW5pdFZNTCgpXG4gIGVsc2UgdXNlQ3NzQW5pbWF0aW9ucyA9IHZlbmRvcihwcm9iZSwgJ2FuaW1hdGlvbicpXG5cbiAgcmV0dXJuIFNwaW5uZXJcblxufSkpO1xuXG4vKiBCZXogdjEuMC4xMC1nNWFlMDEzNlxuICogaHR0cDovL2dpdGh1Yi5jb20vcmRhbGxhc2dyYXkvYmV6XG4gKlxuICogQSBwbHVnaW4gdG8gY29udmVydCBDU1MzIGN1YmljLWJlemllciBjby1vcmRpbmF0ZXMgdG8galF1ZXJ5LWNvbXBhdGlibGUgZWFzaW5nIGZ1bmN0aW9uc1xuICpcbiAqIFdpdGggdGhhbmtzIHRvIE5pa29sYXkgTmVtc2hpbG92IGZvciBjbGFyaWZpY2F0aW9uIG9uIHRoZSBjdWJpYy1iZXppZXIgbWF0aHNcbiAqIFNlZSBodHRwOi8vc3Qtb24taXQuYmxvZ3Nwb3QuY29tLzIwMTEvMDUvY2FsY3VsYXRpbmctY3ViaWMtYmV6aWVyLWZ1bmN0aW9uLmh0bWxcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSBSb2JlcnQgRGFsbGFzIEdyYXkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBQcm92aWRlZCB1bmRlciB0aGUgRnJlZUJTRCBsaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vcmRhbGxhc2dyYXkvYmV6L2Jsb2IvbWFzdGVyL0xJQ0VOU0UudHh0XG4gKi9cbmZ1bmN0aW9uIGJleiAoY29PcmRBcnJheSkge1xuICB2YXIgZW5jb2RlZEZ1bmNOYW1lID0gXCJiZXpfXCIgKyAkLm1ha2VBcnJheShhcmd1bWVudHMpLmpvaW4oXCJfXCIpLnJlcGxhY2UoXCIuXCIsIFwicFwiKTtcbiAgaWYgKHR5cGVvZiAkWydlYXNpbmcnXVtlbmNvZGVkRnVuY05hbWVdICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgcG9seUJleiA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcbiAgICAgIHZhciBBID0gW251bGwsIG51bGxdLFxuICAgICAgICAgIEIgPSBbbnVsbCwgbnVsbF0sXG4gICAgICAgICAgQyA9IFtudWxsLCBudWxsXSxcbiAgICAgICAgICBiZXpDb09yZCA9IGZ1bmN0aW9uICh0LCBheCkge1xuICAgICAgICAgICAgQ1theF0gPSAzICogcDFbYXhdO1xuICAgICAgICAgICAgQltheF0gPSAzICogKHAyW2F4XSAtIHAxW2F4XSkgLSBDW2F4XTtcbiAgICAgICAgICAgIEFbYXhdID0gMSAtIENbYXhdIC0gQltheF07XG4gICAgICAgICAgICByZXR1cm4gdCAqIChDW2F4XSArIHQgKiAoQltheF0gKyB0ICogQVtheF0pKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhEZXJpdiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ1swXSArIHQgKiAoMiAqIEJbMF0gKyAzICogQVswXSAqIHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeEZvclQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIHggPSB0LCBpID0gMCwgejtcbiAgICAgICAgICAgIHdoaWxlICgrK2kgPCAxNCkge1xuICAgICAgICAgICAgICB6ID0gYmV6Q29PcmQoeCwgMCkgLSB0O1xuICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoeikgPCAxZS0zKSBicmVhaztcbiAgICAgICAgICAgICAgeCAtPSB6IC8geERlcml2KHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgfTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gYmV6Q29PcmQoeEZvclQodCksIDEpO1xuICAgICAgfVxuICAgIH07XG4gICAgJFsnZWFzaW5nJ11bZW5jb2RlZEZ1bmNOYW1lXSA9IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICByZXR1cm4gYyAqIHBvbHlCZXooW2NvT3JkQXJyYXlbMF0sIGNvT3JkQXJyYXlbMV1dLCBbY29PcmRBcnJheVsyXSwgY29PcmRBcnJheVszXV0pKHQgLyBkKSArIGI7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbmNvZGVkRnVuY05hbWU7XG59XG52YXIgJFdJTkRPVyA9ICQod2luZG93KSxcbiAgICAkRE9DVU1FTlQgPSAkKGRvY3VtZW50KSxcbiAgICAkSFRNTCxcbiAgICAkQk9EWSxcblxuICAgIFFVSVJLU19GT1JDRSA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKSA9PT0gJ3F1aXJrcycsXG4gICAgVFJBTlNGT1JNUzNEID0gTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMzZCxcbiAgICBDU1MzID0gVFJBTlNGT1JNUzNEICYmICFRVUlSS1NfRk9SQ0UsXG4gICAgQ09NUEFUID0gVFJBTlNGT1JNUzNEIHx8IGRvY3VtZW50LmNvbXBhdE1vZGUgPT09ICdDU1MxQ29tcGF0JyxcbiAgICBGVUxMU0NSRUVOID0gZnVsbFNjcmVlbkFwaS5vayxcblxuICAgIE1PQklMRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fFdpbmRvd3MgUGhvbmUvaSksXG4gICAgU0xPVyA9ICFDU1MzIHx8IE1PQklMRSxcblxuICAgIE1TX1BPSU5URVIgPSBuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcblxuICAgIFdIRUVMID0gXCJvbndoZWVsXCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSA/IFwid2hlZWxcIiA6IGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gXCJtb3VzZXdoZWVsXCIgOiBcIkRPTU1vdXNlU2Nyb2xsXCIsXG5cbiAgICBUT1VDSF9USU1FT1VUID0gMjUwLFxuICAgIFRSQU5TSVRJT05fRFVSQVRJT04gPSAzMDAsXG5cbiAgICBTQ1JPTExfTE9DS19USU1FT1VUID0gMTQwMCxcblxuICAgIEFVVE9QTEFZX0lOVEVSVkFMID0gNTAwMCxcbiAgICBNQVJHSU4gPSAyLFxuICAgIFRIVU1CX1NJWkUgPSA2NCxcblxuICAgIFdJRFRIID0gNTAwLFxuICAgIEhFSUdIVCA9IDMzMyxcblxuICAgIFNUQUdFX0ZSQU1FX0tFWSA9ICckc3RhZ2VGcmFtZScsXG4gICAgTkFWX0RPVF9GUkFNRV9LRVkgPSAnJG5hdkRvdEZyYW1lJyxcbiAgICBOQVZfVEhVTUJfRlJBTUVfS0VZID0gJyRuYXZUaHVtYkZyYW1lJyxcblxuICAgIEFVVE8gPSAnYXV0bycsXG5cbiAgICBCRVpJRVIgPSBiZXooWy4xLCAwLCAuMjUsIDFdKSxcblxuICAgIE1BWF9XSURUSCA9IDk5OTk5LFxuXG4gICAgRklGVFlGSUZUWSA9ICc1MCUnLFxuXG4gICAgT1BUSU9OUyA9IHtcbiAgICAgIC8vIGRpbWVuc2lvbnNcbiAgICAgIHdpZHRoOiBudWxsLCAvLyA1MDAgfHwgJzEwMCUnXG4gICAgICBtaW53aWR0aDogbnVsbCxcbiAgICAgIG1heHdpZHRoOiAnMTAwJScsIC8vICcxMDAlJ1xuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgbWluaGVpZ2h0OiBudWxsLFxuICAgICAgbWF4aGVpZ2h0OiBudWxsLFxuXG4gICAgICByYXRpbzogbnVsbCwgLy8gJzE2LzknIHx8IDUwMC8zMzMgfHwgMS41XG5cbiAgICAgIG1hcmdpbjogTUFSR0lOLFxuICAgICAgZ2xpbXBzZTogMCxcblxuICAgICAgZml0OiAnY29udGFpbicsIC8vICdjb3ZlcicgfHwgJ3NjYWxlZG93bicgfHwgJ25vbmUnXG5cbiAgICAgIHBvc2l0aW9uOiBGSUZUWUZJRlRZLFxuICAgICAgdGh1bWJwb3NpdGlvbjogRklGVFlGSUZUWSxcblxuICAgICAgLy8gbmF2aWdhdGlvbiwgdGh1bWJzXG4gICAgICBuYXY6ICdkb3RzJywgLy8gJ3RodW1icycgfHwgZmFsc2VcbiAgICAgIG5hdnBvc2l0aW9uOiAnYm90dG9tJywgLy8gJ3RvcCdcbiAgICAgIG5hdndpZHRoOiBudWxsLFxuICAgICAgdGh1bWJ3aWR0aDogVEhVTUJfU0laRSxcbiAgICAgIHRodW1iaGVpZ2h0OiBUSFVNQl9TSVpFLFxuICAgICAgdGh1bWJtYXJnaW46IE1BUkdJTixcbiAgICAgIHRodW1iYm9yZGVyd2lkdGg6IE1BUkdJTixcbiAgICAgIHRodW1iZml0OiAnY292ZXInLCAvLyAnY29udGFpbicgfHwgJ3NjYWxlZG93bicgfHwgJ25vbmUnXG5cbiAgICAgIGFsbG93ZnVsbHNjcmVlbjogZmFsc2UsIC8vIHRydWUgfHwgJ25hdGl2ZSdcblxuICAgICAgdHJhbnNpdGlvbjogJ3NsaWRlJywgLy8gJ2Nyb3NzZmFkZScgfHwgJ2Rpc3NvbHZlJ1xuICAgICAgY2xpY2t0cmFuc2l0aW9uOiBudWxsLFxuICAgICAgdHJhbnNpdGlvbmR1cmF0aW9uOiBUUkFOU0lUSU9OX0RVUkFUSU9OLFxuXG4gICAgICBjYXB0aW9uczogdHJ1ZSxcblxuICAgICAgaGFzaDogZmFsc2UsXG4gICAgICBzdGFydGluZGV4OiAwLFxuXG4gICAgICBsb29wOiBmYWxzZSxcblxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgc3RvcGF1dG9wbGF5b250b3VjaDogdHJ1ZSxcblxuICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuXG4gICAgICBhcnJvd3M6IHRydWUsXG4gICAgICBjbGljazogdHJ1ZSxcbiAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgdHJhY2twYWQ6IGZhbHNlLFxuXG4gICAgICBlbmFibGVpZnNpbmdsZWZyYW1lOiBmYWxzZSxcblxuICAgICAgY29udHJvbHNvbnN0YXJ0OiB0cnVlLFxuXG4gICAgICBzaHVmZmxlOiBmYWxzZSxcblxuICAgICAgZGlyZWN0aW9uOiAnbHRyJywgLy8gJ3J0bCdcblxuICAgICAgc2hhZG93czogdHJ1ZSxcbiAgICAgIHNwaW5uZXI6IG51bGxcbiAgICB9LFxuXG4gICAgS0VZQk9BUkRfT1BUSU9OUyA9IHtcbiAgICAgIGxlZnQ6IHRydWUsXG4gICAgICByaWdodDogdHJ1ZSxcbiAgICAgIGRvd246IGZhbHNlLFxuICAgICAgdXA6IGZhbHNlLFxuICAgICAgc3BhY2U6IGZhbHNlLFxuICAgICAgaG9tZTogZmFsc2UsXG4gICAgICBlbmQ6IGZhbHNlXG4gICAgfTtcbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gbWluTWF4TGltaXQgKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoaXNOYU4obWluKSA/IC1JbmZpbml0eSA6IG1pbiwgTWF0aC5taW4oaXNOYU4obWF4KSA/IEluZmluaXR5IDogbWF4LCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiByZWFkVHJhbnNmb3JtIChjc3MpIHtcbiAgcmV0dXJuIGNzcy5tYXRjaCgvbWEvKSAmJiBjc3MubWF0Y2goLy0/XFxkKyg/IWQpL2cpW2Nzcy5tYXRjaCgvM2QvKSA/IDEyIDogNF07XG59XG5cbmZ1bmN0aW9uIHJlYWRQb3NpdGlvbiAoJGVsKSB7XG4gIGlmIChDU1MzKSB7XG4gICAgcmV0dXJuICtyZWFkVHJhbnNmb3JtKCRlbC5jc3MoJ3RyYW5zZm9ybScpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKyRlbC5jc3MoJ2xlZnQnKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUgKHBvcy8qLCBfMDAxKi8pIHtcbiAgdmFyIG9iaiA9IHt9O1xuICBpZiAoQ1NTMykge1xuICAgIG9iai50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIChwb3MvKiArIChfMDAxID8gMC4wMDEgOiAwKSovKSArICdweCwwLDApJzsgLy8gMC4wMDEgdG8gcmVtb3ZlIFJldGluYSBhcnRpZmFjdHNcbiAgfSBlbHNlIHtcbiAgICBvYmoubGVmdCA9IHBvcztcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBnZXREdXJhdGlvbiAodGltZSkge1xuICByZXR1cm4geyd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGltZSArICdtcyd9O1xufVxuXG5mdW5jdGlvbiB1bmxlc3NOYU4gKHZhbHVlLCBhbHRlcm5hdGl2ZSkge1xuICByZXR1cm4gaXNOYU4odmFsdWUpID8gYWx0ZXJuYXRpdmUgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyRnJvbU1lYXN1cmUgKHZhbHVlLCBtZWFzdXJlKSB7XG4gIHJldHVybiB1bmxlc3NOYU4oK1N0cmluZyh2YWx1ZSkucmVwbGFjZShtZWFzdXJlIHx8ICdweCcsICcnKSk7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21QZXJjZW50ICh2YWx1ZSkge1xuICByZXR1cm4gLyUkLy50ZXN0KHZhbHVlKSA/IG51bWJlckZyb21NZWFzdXJlKHZhbHVlLCAnJScpIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tV2hhdGV2ZXIgKHZhbHVlLCB3aG9sZSkge1xuICByZXR1cm4gdW5sZXNzTmFOKG51bWJlckZyb21QZXJjZW50KHZhbHVlKSAvIDEwMCAqIHdob2xlLCBudW1iZXJGcm9tTWVhc3VyZSh2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBtZWFzdXJlSXNWYWxpZCAodmFsdWUpIHtcbiAgcmV0dXJuICghaXNOYU4obnVtYmVyRnJvbU1lYXN1cmUodmFsdWUpKSB8fCAhaXNOYU4obnVtYmVyRnJvbU1lYXN1cmUodmFsdWUsICclJykpKSAmJiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9zQnlJbmRleCAoaW5kZXgsIHNpZGUsIG1hcmdpbiwgYmFzZUluZGV4KSB7XG4gIC8vLy9jb25zb2xlLmxvZygnZ2V0UG9zQnlJbmRleCcsIGluZGV4LCBzaWRlLCBtYXJnaW4sIGJhc2VJbmRleCk7XG4gIC8vLy9jb25zb2xlLmxvZygoaW5kZXggLSAoYmFzZUluZGV4IHx8IDApKSAqIChzaWRlICsgKG1hcmdpbiB8fCAwKSkpO1xuXG4gIHJldHVybiAoaW5kZXggLSAoYmFzZUluZGV4IHx8IDApKSAqIChzaWRlICsgKG1hcmdpbiB8fCAwKSk7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlQb3MgKHBvcywgc2lkZSwgbWFyZ2luLCBiYXNlSW5kZXgpIHtcbiAgcmV0dXJuIC1NYXRoLnJvdW5kKHBvcyAvIChzaWRlICsgKG1hcmdpbiB8fCAwKSkgLSAoYmFzZUluZGV4IHx8IDApKTtcbn1cblxuZnVuY3Rpb24gYmluZFRyYW5zaXRpb25FbmQgKCRlbCkge1xuICB2YXIgZWxEYXRhID0gJGVsLmRhdGEoKTtcblxuICBpZiAoZWxEYXRhLnRFbmQpIHJldHVybjtcblxuICB2YXIgZWwgPSAkZWxbMF0sXG4gICAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSB7XG4gICAgICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgTW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnXG4gICAgICB9O1xuICBhZGRFdmVudChlbCwgdHJhbnNpdGlvbkVuZEV2ZW50W01vZGVybml6ci5wcmVmaXhlZCgndHJhbnNpdGlvbicpXSwgZnVuY3Rpb24gKGUpIHtcbiAgICBlbERhdGEudFByb3AgJiYgZS5wcm9wZXJ0eU5hbWUubWF0Y2goZWxEYXRhLnRQcm9wKSAmJiBlbERhdGEub25FbmRGbigpO1xuICB9KTtcbiAgZWxEYXRhLnRFbmQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBhZnRlclRyYW5zaXRpb24gKCRlbCwgcHJvcGVydHksIGZuLCB0aW1lKSB7XG4gIHZhciBvayxcbiAgICAgIGVsRGF0YSA9ICRlbC5kYXRhKCk7XG5cbiAgaWYgKGVsRGF0YSkge1xuICAgIGVsRGF0YS5vbkVuZEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9rKSByZXR1cm47XG4gICAgICBvayA9IHRydWU7XG4gICAgICBjbGVhclRpbWVvdXQoZWxEYXRhLnRUKTtcbiAgICAgIGZuKCk7XG4gICAgfTtcbiAgICBlbERhdGEudFByb3AgPSBwcm9wZXJ0eTtcblxuICAgIC8vIFBhc3NpdmUgY2FsbCwganVzdCBpbiBjYXNlIG9mIGZhaWwgb2YgbmF0aXZlIHRyYW5zaXRpb24tZW5kIGV2ZW50XG4gICAgY2xlYXJUaW1lb3V0KGVsRGF0YS50VCk7XG4gICAgZWxEYXRhLnRUID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBlbERhdGEub25FbmRGbigpO1xuICAgIH0sIHRpbWUgKiAxLjUpO1xuXG4gICAgYmluZFRyYW5zaXRpb25FbmQoJGVsKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0b3AgKCRlbCwgbGVmdC8qLCBfMDAxKi8pIHtcbiAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICB2YXIgZWxEYXRhID0gJGVsLmRhdGEoKTtcbiAgICBpZiAoQ1NTMykge1xuICAgICAgJGVsLmNzcyhnZXREdXJhdGlvbigwKSk7XG4gICAgICBlbERhdGEub25FbmRGbiA9IG5vb3A7XG4gICAgICBjbGVhclRpbWVvdXQoZWxEYXRhLnRUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsLnN0b3AoKTtcbiAgICB9XG4gICAgdmFyIGxvY2tlZExlZnQgPSBnZXROdW1iZXIobGVmdCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlYWRQb3NpdGlvbigkZWwpO1xuICAgIH0pO1xuXG4gICAgJGVsLmNzcyhnZXRUcmFuc2xhdGUobG9ja2VkTGVmdC8qLCBfMDAxKi8pKTsvLy53aWR0aCgpOyAvLyBgLndpZHRoKClgIGZvciByZWZsb3dcbiAgICByZXR1cm4gbG9ja2VkTGVmdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXROdW1iZXIgKCkge1xuICB2YXIgbnVtYmVyO1xuICBmb3IgKHZhciBfaSA9IDAsIF9sID0gYXJndW1lbnRzLmxlbmd0aDsgX2kgPCBfbDsgX2krKykge1xuICAgIG51bWJlciA9IF9pID8gYXJndW1lbnRzW19pXSgpIDogYXJndW1lbnRzW19pXTtcbiAgICBpZiAodHlwZW9mIG51bWJlciA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVkZ2VSZXNpc3RhbmNlIChwb3MsIGVkZ2UpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQocG9zICsgKChlZGdlIC0gcG9zKSAvIDEuNSkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm90b2NvbCAoKSB7XG4gIGdldFByb3RvY29sLnAgPSBnZXRQcm90b2NvbC5wIHx8IChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnaHR0cHM6Ly8nIDogJ2h0dHA6Ly8nKTtcbiAgcmV0dXJuIGdldFByb3RvY29sLnA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHJlZiAoaHJlZikge1xuICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5ocmVmID0gaHJlZjtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIGZpbmRWaWRlb0lkIChocmVmLCBmb3JjZVZpZGVvKSB7XG4gIGlmICh0eXBlb2YgaHJlZiAhPT0gJ3N0cmluZycpIHJldHVybiBocmVmO1xuICBocmVmID0gcGFyc2VIcmVmKGhyZWYpO1xuXG4gIHZhciBpZCxcbiAgICAgIHR5cGU7XG5cbiAgaWYgKGhyZWYuaG9zdC5tYXRjaCgveW91dHViZVxcLmNvbS8pICYmIGhyZWYuc2VhcmNoKSB7XG4gICAgLy8ubG9nKCk7XG4gICAgaWQgPSBocmVmLnNlYXJjaC5zcGxpdCgndj0nKVsxXTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZhciBhbXBlcnNhbmRQb3NpdGlvbiA9IGlkLmluZGV4T2YoJyYnKTtcbiAgICAgIGlmIChhbXBlcnNhbmRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgaWQgPSBpZC5zdWJzdHJpbmcoMCwgYW1wZXJzYW5kUG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgdHlwZSA9ICd5b3V0dWJlJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoaHJlZi5ob3N0Lm1hdGNoKC95b3V0dWJlXFwuY29tfHlvdXR1XFwuYmUvKSkge1xuICAgIGlkID0gaHJlZi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvKGVtYmVkXFwvfHZcXC8pPy8sICcnKS5yZXBsYWNlKC9cXC8uKi8sICcnKTtcbiAgICB0eXBlID0gJ3lvdXR1YmUnO1xuICB9IGVsc2UgaWYgKGhyZWYuaG9zdC5tYXRjaCgvdmltZW9cXC5jb20vKSkge1xuICAgIHR5cGUgPSAndmltZW8nO1xuICAgIGlkID0gaHJlZi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvKHZpZGVvXFwvKT8vLCAnJykucmVwbGFjZSgvXFwvLiovLCAnJyk7XG4gIH1cblxuICBpZiAoKCFpZCB8fCAhdHlwZSkgJiYgZm9yY2VWaWRlbykge1xuICAgIGlkID0gaHJlZi5ocmVmO1xuICAgIHR5cGUgPSAnY3VzdG9tJztcbiAgfVxuXG4gIHJldHVybiBpZCA/IHtpZDogaWQsIHR5cGU6IHR5cGUsIHM6IGhyZWYuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJyksIHA6IGdldFByb3RvY29sKCl9IDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFZpZGVvVGh1bWJzIChkYXRhRnJhbWUsIGRhdGEsIGZvdG9yYW1hKSB7XG4gIHZhciBpbWcsIHRodW1iLCB2aWRlbyA9IGRhdGFGcmFtZS52aWRlbztcbiAgaWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgIHRodW1iID0gZ2V0UHJvdG9jb2woKSArICdpbWcueW91dHViZS5jb20vdmkvJyArIHZpZGVvLmlkICsgJy9kZWZhdWx0LmpwZyc7XG4gICAgaW1nID0gdGh1bWIucmVwbGFjZSgvXFwvZGVmYXVsdC5qcGckLywgJy9ocWRlZmF1bHQuanBnJyk7XG4gICAgZGF0YUZyYW1lLnRodW1ic1JlYWR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogZ2V0UHJvdG9jb2woKSArICd2aW1lby5jb20vYXBpL3YyL3ZpZGVvLycgKyB2aWRlby5pZCArICcuanNvbicsXG4gICAgICBkYXRhVHlwZTogJ2pzb25wJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIGRhdGFGcmFtZS50aHVtYnNSZWFkeSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZURhdGEoZGF0YSwge2ltZzoganNvblswXS50aHVtYm5haWxfbGFyZ2UsIHRodW1iOiBqc29uWzBdLnRodW1ibmFpbF9zbWFsbH0sIGRhdGFGcmFtZS5pLCBmb3RvcmFtYSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YUZyYW1lLnRodW1ic1JlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW1nOiBpbWcsXG4gICAgdGh1bWI6IHRodW1iXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoZGF0YSwgX2RhdGFGcmFtZSwgaSwgZm90b3JhbWEpIHtcbiAgZm9yICh2YXIgX2kgPSAwLCBfbCA9IGRhdGEubGVuZ3RoOyBfaSA8IF9sOyBfaSsrKSB7XG4gICAgdmFyIGRhdGFGcmFtZSA9IGRhdGFbX2ldO1xuXG4gICAgaWYgKGRhdGFGcmFtZS5pID09PSBpICYmIGRhdGFGcmFtZS50aHVtYnNSZWFkeSkge1xuICAgICAgdmFyIGNsZWFyID0ge3ZpZGVvUmVhZHk6IHRydWV9O1xuICAgICAgY2xlYXJbU1RBR0VfRlJBTUVfS0VZXSA9IGNsZWFyW05BVl9USFVNQl9GUkFNRV9LRVldID0gY2xlYXJbTkFWX0RPVF9GUkFNRV9LRVldID0gZmFsc2U7XG5cbiAgICAgIGZvdG9yYW1hLnNwbGljZShfaSwgMSwgJC5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgZGF0YUZyYW1lLFxuICAgICAgICAgIGNsZWFyLFxuICAgICAgICAgIF9kYXRhRnJhbWVcbiAgICAgICkpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21IdG1sICgkZWwpIHtcbiAgdmFyIGRhdGEgPSBbXTtcblxuICBmdW5jdGlvbiBnZXREYXRhRnJvbUltZyAoJGltZywgaW1nRGF0YSwgY2hlY2tWaWRlbykge1xuICAgIHZhciAkY2hpbGQgPSAkaW1nLmNoaWxkcmVuKCdpbWcnKS5lcSgwKSxcbiAgICAgICAgX2ltZ0hyZWYgPSAkaW1nLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgX2ltZ1NyYyA9ICRpbWcuYXR0cignc3JjJyksXG4gICAgICAgIF90aHVtYlNyYyA9ICRjaGlsZC5hdHRyKCdzcmMnKSxcbiAgICAgICAgX3ZpZGVvID0gaW1nRGF0YS52aWRlbyxcbiAgICAgICAgdmlkZW8gPSBjaGVja1ZpZGVvID8gZmluZFZpZGVvSWQoX2ltZ0hyZWYsIF92aWRlbyA9PT0gdHJ1ZSkgOiBmYWxzZTtcblxuICAgIGlmICh2aWRlbykge1xuICAgICAgX2ltZ0hyZWYgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW8gPSBfdmlkZW87XG4gICAgfVxuXG4gICAgZ2V0RGltZW5zaW9ucygkaW1nLCAkY2hpbGQsICQuZXh0ZW5kKGltZ0RhdGEsIHtcbiAgICAgIHZpZGVvOiB2aWRlbyxcbiAgICAgIGltZzogaW1nRGF0YS5pbWcgfHwgX2ltZ0hyZWYgfHwgX2ltZ1NyYyB8fCBfdGh1bWJTcmMsXG4gICAgICB0aHVtYjogaW1nRGF0YS50aHVtYiB8fCBfdGh1bWJTcmMgfHwgX2ltZ1NyYyB8fCBfaW1nSHJlZlxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpbWVuc2lvbnMgKCRpbWcsICRjaGlsZCwgaW1nRGF0YSkge1xuICAgIHZhciBzZXBhcmF0ZVRodW1iRkxBRyA9IGltZ0RhdGEudGh1bWIgJiYgaW1nRGF0YS5pbWcgIT09IGltZ0RhdGEudGh1bWIsXG4gICAgICAgIHdpZHRoID0gbnVtYmVyRnJvbU1lYXN1cmUoaW1nRGF0YS53aWR0aCB8fCAkaW1nLmF0dHIoJ3dpZHRoJykpLFxuICAgICAgICBoZWlnaHQgPSBudW1iZXJGcm9tTWVhc3VyZShpbWdEYXRhLmhlaWdodCB8fCAkaW1nLmF0dHIoJ2hlaWdodCcpKTtcblxuICAgICQuZXh0ZW5kKGltZ0RhdGEsIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgdGh1bWJyYXRpbzogZ2V0UmF0aW8oaW1nRGF0YS50aHVtYnJhdGlvIHx8IChudW1iZXJGcm9tTWVhc3VyZShpbWdEYXRhLnRodW1id2lkdGggfHwgKCRjaGlsZCAmJiAkY2hpbGQuYXR0cignd2lkdGgnKSkgfHwgc2VwYXJhdGVUaHVtYkZMQUcgfHwgd2lkdGgpIC8gbnVtYmVyRnJvbU1lYXN1cmUoaW1nRGF0YS50aHVtYmhlaWdodCB8fCAoJGNoaWxkICYmICRjaGlsZC5hdHRyKCdoZWlnaHQnKSkgfHwgc2VwYXJhdGVUaHVtYkZMQUcgfHwgaGVpZ2h0KSkpXG4gICAgfSk7XG4gIH1cblxuICAkZWwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICBkYXRhRnJhbWUgPSBvcHRpb25zVG9Mb3dlckNhc2UoJC5leHRlbmQoJHRoaXMuZGF0YSgpLCB7aWQ6ICR0aGlzLmF0dHIoJ2lkJyl9KSk7XG4gICAgaWYgKCR0aGlzLmlzKCdhLCBpbWcnKSkge1xuICAgICAgZ2V0RGF0YUZyb21JbWcoJHRoaXMsIGRhdGFGcmFtZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICghJHRoaXMuaXMoJzplbXB0eScpKSB7XG4gICAgICBnZXREaW1lbnNpb25zKCR0aGlzLCBudWxsLCAkLmV4dGVuZChkYXRhRnJhbWUsIHtcbiAgICAgICAgaHRtbDogdGhpcyxcbiAgICAgICAgX2h0bWw6ICR0aGlzLmh0bWwoKSAvLyBCZWNhdXNlIG9mIElFXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHJldHVybjtcblxuICAgIGRhdGEucHVzaChkYXRhRnJhbWUpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gaXNIaWRkZW4gKGVsKSB7XG4gIHJldHVybiBlbC5vZmZzZXRXaWR0aCA9PT0gMCAmJiBlbC5vZmZzZXRIZWlnaHQgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzRGV0YWNoZWQgKGVsKSB7XG4gIHJldHVybiAhJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGVsKTtcbn1cblxuZnVuY3Rpb24gd2FpdEZvciAodGVzdCwgZm4sIHRpbWVvdXQsIGkpIHtcbiAgaWYgKCF3YWl0Rm9yLmkpIHtcbiAgICB3YWl0Rm9yLmkgPSAxO1xuICAgIHdhaXRGb3IuaWkgPSBbdHJ1ZV07XG4gIH1cblxuICBpID0gaSB8fCB3YWl0Rm9yLmk7XG5cbiAgaWYgKHR5cGVvZiB3YWl0Rm9yLmlpW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhaXRGb3IuaWlbaV0gPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRlc3QoKSkge1xuICAgIGZuKCk7XG4gIH0gZWxzZSB7XG4gICAgd2FpdEZvci5paVtpXSAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhaXRGb3IuaWlbaV0gJiYgd2FpdEZvcih0ZXN0LCBmbiwgdGltZW91dCwgaSk7XG4gICAgfSwgdGltZW91dCB8fCAxMDApO1xuICB9XG5cbiAgcmV0dXJuIHdhaXRGb3IuaSsrO1xufVxuXG53YWl0Rm9yLnN0b3AgPSBmdW5jdGlvbiAoaSkge1xuICB3YWl0Rm9yLmlpW2ldID0gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBzZXRIYXNoIChoYXNoKSB7XG4gIC8vLy8vL2NvbnNvbGUudGltZSgnc2V0SGFzaCAnICsgaGFzaCk7XG4gIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICsgJy8vJ1xuICAgICAgKyBsb2NhdGlvbi5ob3N0XG4gICAgICArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8/LywgJy8nKVxuICAgICAgKyBsb2NhdGlvbi5zZWFyY2hcbiAgICAgICsgJyMnICsgaGFzaCk7XG4gIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnc2V0SGFzaCAnICsgaGFzaCk7XG59XG5cbmZ1bmN0aW9uIGZpdCAoJGVsLCBtZWFzdXJlc1RvRml0LCBtZXRob2QsIHBvc2l0aW9uKSB7XG4gIHZhciBlbERhdGEgPSAkZWwuZGF0YSgpLFxuICAgICAgbWVhc3VyZXMgPSBlbERhdGEubWVhc3VyZXM7XG5cbiAgaWYgKG1lYXN1cmVzICYmICghZWxEYXRhLmwgfHxcbiAgICAgIGVsRGF0YS5sLlcgIT09IG1lYXN1cmVzLndpZHRoIHx8XG4gICAgICBlbERhdGEubC5IICE9PSBtZWFzdXJlcy5oZWlnaHQgfHxcbiAgICAgIGVsRGF0YS5sLnIgIT09IG1lYXN1cmVzLnJhdGlvIHx8XG4gICAgICBlbERhdGEubC53ICE9PSBtZWFzdXJlc1RvRml0LncgfHxcbiAgICAgIGVsRGF0YS5sLmggIT09IG1lYXN1cmVzVG9GaXQuaCB8fFxuICAgICAgZWxEYXRhLmwubSAhPT0gbWV0aG9kIHx8XG4gICAgICBlbERhdGEubC5wICE9PSBwb3NpdGlvbikpIHtcblxuICAgIC8vY29uc29sZS5sb2coJ2ZpdCcpO1xuXG4gICAgdmFyIHdpZHRoID0gbWVhc3VyZXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG1lYXN1cmVzLmhlaWdodCxcbiAgICAgICAgcmF0aW8gPSBtZWFzdXJlc1RvRml0LncgLyBtZWFzdXJlc1RvRml0LmgsXG4gICAgICAgIGJpZ2dlclJhdGlvRkxBRyA9IG1lYXN1cmVzLnJhdGlvID49IHJhdGlvLFxuICAgICAgICBmaXRGTEFHID0gbWV0aG9kID09PSAnc2NhbGVkb3duJyxcbiAgICAgICAgY29udGFpbkZMQUcgPSBtZXRob2QgPT09ICdjb250YWluJyxcbiAgICAgICAgY292ZXJGTEFHID0gbWV0aG9kID09PSAnY292ZXInLFxuICAgICAgICBwb3MgPSBwYXJzZVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIGlmIChiaWdnZXJSYXRpb0ZMQUcgJiYgKGZpdEZMQUcgfHwgY29udGFpbkZMQUcpIHx8ICFiaWdnZXJSYXRpb0ZMQUcgJiYgY292ZXJGTEFHKSB7XG4gICAgICB3aWR0aCA9IG1pbk1heExpbWl0KG1lYXN1cmVzVG9GaXQudywgMCwgZml0RkxBRyA/IHdpZHRoIDogSW5maW5pdHkpO1xuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBtZWFzdXJlcy5yYXRpbztcbiAgICB9IGVsc2UgaWYgKGJpZ2dlclJhdGlvRkxBRyAmJiBjb3ZlckZMQUcgfHwgIWJpZ2dlclJhdGlvRkxBRyAmJiAoZml0RkxBRyB8fCBjb250YWluRkxBRykpIHtcbiAgICAgIGhlaWdodCA9IG1pbk1heExpbWl0KG1lYXN1cmVzVG9GaXQuaCwgMCwgZml0RkxBRyA/IGhlaWdodCA6IEluZmluaXR5KTtcbiAgICAgIHdpZHRoID0gaGVpZ2h0ICogbWVhc3VyZXMucmF0aW87XG4gICAgfVxuXG4gICAgJGVsLmNzcyh7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGxlZnQ6IG51bWJlckZyb21XaGF0ZXZlcihwb3MueCwgbWVhc3VyZXNUb0ZpdC53IC0gd2lkdGgpLFxuICAgICAgdG9wOiBudW1iZXJGcm9tV2hhdGV2ZXIocG9zLnksIG1lYXN1cmVzVG9GaXQuaC0gaGVpZ2h0KVxuICAgIH0pO1xuXG4gICAgZWxEYXRhLmwgPSB7XG4gICAgICBXOiBtZWFzdXJlcy53aWR0aCxcbiAgICAgIEg6IG1lYXN1cmVzLmhlaWdodCxcbiAgICAgIHI6IG1lYXN1cmVzLnJhdGlvLFxuICAgICAgdzogbWVhc3VyZXNUb0ZpdC53LFxuICAgICAgaDogbWVhc3VyZXNUb0ZpdC5oLFxuICAgICAgbTogbWV0aG9kLFxuICAgICAgcDogcG9zaXRpb25cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlICgkZWwsIHN0eWxlKSB7XG4gIHZhciBlbCA9ICRlbFswXTtcbiAgaWYgKGVsLnN0eWxlU2hlZXQpIHtcbiAgICBlbC5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZTtcbiAgfSBlbHNlIHtcbiAgICAkZWwuaHRtbChzdHlsZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFNoYWRvd0VkZ2UgKHBvcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA9PT0gbWF4ID8gZmFsc2UgOiBwb3MgPD0gbWluID8gJ2xlZnQnIDogcG9zID49IG1heCA/ICdyaWdodCcgOiAnbGVmdCByaWdodCc7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4RnJvbUhhc2ggKGhhc2gsIGRhdGEsIG9rLCBzdGFydGluZGV4KSB7XG4gIGlmICghb2spIHJldHVybiBmYWxzZTtcbiAgaWYgKCFpc05hTihoYXNoKSkgcmV0dXJuIGhhc2ggLSAoc3RhcnRpbmRleCA/IDAgOiAxKTtcblxuICB2YXIgaW5kZXg7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfbCA9IGRhdGEubGVuZ3RoOyBfaSA8IF9sOyBfaSsrKSB7XG4gICAgdmFyIGRhdGFGcmFtZSA9IGRhdGFbX2ldO1xuXG4gICAgaWYgKGRhdGFGcmFtZS5pZCA9PT0gaGFzaCkge1xuICAgICAgaW5kZXggPSBfaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gc21hcnRDbGljayAoJGVsLCBmbiwgX29wdGlvbnMpIHtcbiAgX29wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcblxuICAkZWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgdGhpc0RhdGEgPSAkdGhpcy5kYXRhKCksXG4gICAgICAgIHN0YXJ0RXZlbnQ7XG5cbiAgICBpZiAodGhpc0RhdGEuY2xpY2tPbikgcmV0dXJuO1xuXG4gICAgdGhpc0RhdGEuY2xpY2tPbiA9IHRydWU7XG5cbiAgICAkLmV4dGVuZCh0b3VjaCgkdGhpcywge1xuICAgICAgb25TdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc3RhcnRFdmVudCA9IGU7XG4gICAgICAgIChfb3B0aW9ucy5vblN0YXJ0IHx8IG5vb3ApLmNhbGwodGhpcywgZSk7XG4gICAgICB9LFxuICAgICAgb25Nb3ZlOiBfb3B0aW9ucy5vbk1vdmUgfHwgbm9vcCxcbiAgICAgIG9uVG91Y2hFbmQ6IF9vcHRpb25zLm9uVG91Y2hFbmQgfHwgbm9vcCxcbiAgICAgIG9uRW5kOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIC8vLy9jb25zb2xlLmxvZygnc21hcnRDbGljayDihpIgcmVzdWx0Lm1vdmVkJywgcmVzdWx0Lm1vdmVkKTtcbiAgICAgICAgaWYgKHJlc3VsdC5tb3ZlZCkgcmV0dXJuO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIHN0YXJ0RXZlbnQpO1xuICAgICAgfVxuICAgIH0pLCB7bm9Nb3ZlOiB0cnVlfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXYgKGNsYXNzZXMsIGNoaWxkKSB7XG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyBjbGFzc2VzICsgJ1wiPicgKyAoY2hpbGQgfHwgJycpICsgJzwvZGl2Pic7XG59XG5cbi8vIEZpc2hlcuKAk1lhdGVzIFNodWZmbGVcbi8vIGh0dHA6Ly9ib3N0Lm9ja3Mub3JnL21pa2Uvc2h1ZmZsZS9cbmZ1bmN0aW9uIHNodWZmbGUgKGFycmF5KSB7XG4gIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlXG4gIHZhciBsID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobCkge1xuICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudFxuICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbC0tKTtcblxuICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgIHZhciB0ID0gYXJyYXlbbF07XG4gICAgYXJyYXlbbF0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHQ7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNsb25lIChhcnJheSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycmF5KSA9PSAnW29iamVjdCBBcnJheV0nXG4gICAgICAmJiAkLm1hcChhcnJheSwgZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBmcmFtZSk7XG4gICAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9ja1Njcm9sbCAoJGVsLCBsZWZ0LCB0b3ApIHtcbiAgJGVsXG4gICAgLnNjcm9sbExlZnQobGVmdCB8fCAwKVxuICAgIC5zY3JvbGxUb3AodG9wIHx8IDApO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zVG9Mb3dlckNhc2UgKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgICQuZWFjaChvcHRpb25zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgb3B0c1trZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJhdGlvIChfcmF0aW8pIHtcbiAgaWYgKCFfcmF0aW8pIHJldHVybjtcbiAgdmFyIHJhdGlvID0gK19yYXRpbztcbiAgaWYgKCFpc05hTihyYXRpbykpIHtcbiAgICByZXR1cm4gcmF0aW87XG4gIH0gZWxzZSB7XG4gICAgcmF0aW8gPSBfcmF0aW8uc3BsaXQoJy8nKTtcbiAgICByZXR1cm4gK3JhdGlvWzBdIC8gK3JhdGlvWzFdIHx8IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudCAoZWwsIGUsIGZuLCBib29sKSB7XG4gIGlmICghZSkgcmV0dXJuO1xuICBlbC5hZGRFdmVudExpc3RlbmVyID8gZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCBmbiwgISFib29sKSA6IGVsLmF0dGFjaEV2ZW50KCdvbicrZSwgZm4pO1xufVxuXG5mdW5jdGlvbiBlbElzRGlzYWJsZWQgKGVsKSB7XG4gIHJldHVybiAhIWVsLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUF0dHIgKEZMQUcpIHtcbiAgcmV0dXJuIHt0YWJpbmRleDogRkxBRyAqIC0xICsgJycsIGRpc2FibGVkOiBGTEFHfTtcbn1cblxuZnVuY3Rpb24gYWRkRW50ZXJVcCAoZWwsIGZuKSB7XG4gIGFkZEV2ZW50KGVsLCAna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgIGVsSXNEaXNhYmxlZChlbCkgfHwgZS5rZXlDb2RlID09IDEzICYmIGZuLmNhbGwoZWwsIGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRm9jdXMgKGVsLCBmbikge1xuICBhZGRFdmVudChlbCwgJ2ZvY3VzJywgZWwub25mb2N1c2luID0gZnVuY3Rpb24gKGUpIHtcbiAgICBmbi5jYWxsKGVsLCBlKTtcbiAgfSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BFdmVudCAoZSwgc3RvcFByb3BhZ2F0aW9uKSB7XG4gIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiAoZS5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcbiAgc3RvcFByb3BhZ2F0aW9uICYmIGUuc3RvcFByb3BhZ2F0aW9uICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGdldERpcmVjdGlvblNpZ24gKGZvcndhcmQpIHtcbiAgcmV0dXJuIGZvcndhcmQgPyAnPicgOiAnPCc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUG9zaXRpb24gKHJ1bGUpIHtcbiAgcnVsZSA9IChydWxlICsgJycpLnNwbGl0KC9cXHMrLyk7XG4gIHJldHVybiB7XG4gICAgeDogbWVhc3VyZUlzVmFsaWQocnVsZVswXSkgfHwgRklGVFlGSUZUWSxcbiAgICB5OiBtZWFzdXJlSXNWYWxpZChydWxlWzFdKSB8fCBGSUZUWUZJRlRZXG4gIH1cbn1cbmZ1bmN0aW9uIHNsaWRlICgkZWwsIG9wdGlvbnMpIHtcbiAgdmFyIGVsRGF0YSA9ICRlbC5kYXRhKCksXG4gICAgICBlbFBvcyA9IE1hdGgucm91bmQob3B0aW9ucy5wb3MpLFxuICAgICAgb25FbmRGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxEYXRhLnNsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgKG9wdGlvbnMub25FbmQgfHwgbm9vcCkoKTtcbiAgICAgIH07XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLm92ZXJQb3MgIT09ICd1bmRlZmluZWQnICYmIG9wdGlvbnMub3ZlclBvcyAhPT0gb3B0aW9ucy5wb3MpIHtcbiAgICBlbFBvcyA9IG9wdGlvbnMub3ZlclBvcztcbiAgICBvbkVuZEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2xpZGUoJGVsLCAkLmV4dGVuZCh7fSwgb3B0aW9ucywge292ZXJQb3M6IG9wdGlvbnMucG9zLCB0aW1lOiBNYXRoLm1heChUUkFOU0lUSU9OX0RVUkFUSU9OLCBvcHRpb25zLnRpbWUgLyAyKX0pKVxuICAgIH07XG4gIH1cblxuICAvLy8vLy8vL2NvbnNvbGUudGltZSgndmFyIHRyYW5zbGF0ZSA9ICQuZXh0ZW5kJyk7XG4gIHZhciB0cmFuc2xhdGUgPSAkLmV4dGVuZChnZXRUcmFuc2xhdGUoZWxQb3MvKiwgb3B0aW9ucy5fMDAxKi8pLCBvcHRpb25zLndpZHRoICYmIHt3aWR0aDogb3B0aW9ucy53aWR0aH0pO1xuICAvLy8vLy8vL2NvbnNvbGUudGltZUVuZCgndmFyIHRyYW5zbGF0ZSA9ICQuZXh0ZW5kJyk7XG5cbiAgZWxEYXRhLnNsaWRpbmcgPSB0cnVlO1xuXG4gIGlmIChDU1MzKSB7XG4gICAgJGVsLmNzcygkLmV4dGVuZChnZXREdXJhdGlvbihvcHRpb25zLnRpbWUpLCB0cmFuc2xhdGUpKTtcbiAgICBpZiAob3B0aW9ucy50aW1lID4gMTApIHtcbiAgICAgIC8vLy8vLy8vY29uc29sZS50aW1lKCdhZnRlclRyYW5zaXRpb24nKTtcbiAgICAgIGFmdGVyVHJhbnNpdGlvbigkZWwsICd0cmFuc2Zvcm0nLCBvbkVuZEZuLCBvcHRpb25zLnRpbWUpO1xuICAgICAgLy8vLy8vLy9jb25zb2xlLnRpbWVFbmQoJ2FmdGVyVHJhbnNpdGlvbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbkVuZEZuKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRlbC5zdG9wKCkuYW5pbWF0ZSh0cmFuc2xhdGUsIG9wdGlvbnMudGltZSwgQkVaSUVSLCBvbkVuZEZuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmYWRlICgkZWwxLCAkZWwyLCAkZnJhbWVzLCBvcHRpb25zLCBmYWRlU3RhY2ssIGNoYWluKSB7XG4gIHZhciBjaGFpbmVkRkxBRyA9IHR5cGVvZiBjaGFpbiAhPT0gJ3VuZGVmaW5lZCc7XG4gIGlmICghY2hhaW5lZEZMQUcpIHtcbiAgICBmYWRlU3RhY2sucHVzaChhcmd1bWVudHMpO1xuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJndW1lbnRzLCBmYWRlU3RhY2subGVuZ3RoKTtcbiAgICBpZiAoZmFkZVN0YWNrLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgfVxuXG4gICRlbDEgPSAkZWwxIHx8ICQoJGVsMSk7XG4gICRlbDIgPSAkZWwyIHx8ICQoJGVsMik7XG5cbiAgdmFyIF8kZWwxID0gJGVsMVswXSxcbiAgICAgIF8kZWwyID0gJGVsMlswXSxcbiAgICAgIGNyb3NzZmFkZUZMQUcgPSBvcHRpb25zLm1ldGhvZCA9PT0gJ2Nyb3NzZmFkZScsXG4gICAgICBvbkVuZEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIW9uRW5kRm4uZG9uZSkge1xuICAgICAgICAgIG9uRW5kRm4uZG9uZSA9IHRydWU7XG4gICAgICAgICAgdmFyIGFyZ3MgPSAoY2hhaW5lZEZMQUcgfHwgZmFkZVN0YWNrLnNoaWZ0KCkpICYmIGZhZGVTdGFjay5zaGlmdCgpO1xuICAgICAgICAgIGFyZ3MgJiYgZmFkZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAob3B0aW9ucy5vbkVuZCB8fCBub29wKSghIWFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGltZSA9IG9wdGlvbnMudGltZSAvIChjaGFpbiB8fCAxKTtcblxuICAkZnJhbWVzLnJlbW92ZUNsYXNzKGZhZGVSZWFyQ2xhc3MgKyAnICcgKyBmYWRlRnJvbnRDbGFzcyk7XG5cbiAgJGVsMVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFkZENsYXNzKGZhZGVSZWFyQ2xhc3MpO1xuICAkZWwyXG4gICAgICAuc3RvcCgpXG4gICAgICAuYWRkQ2xhc3MoZmFkZUZyb250Q2xhc3MpO1xuXG4gIGNyb3NzZmFkZUZMQUcgJiYgXyRlbDIgJiYgJGVsMS5mYWRlVG8oMCwgMCk7XG5cbiAgJGVsMS5mYWRlVG8oY3Jvc3NmYWRlRkxBRyA/IHRpbWUgOiAwLCAxLCBjcm9zc2ZhZGVGTEFHICYmIG9uRW5kRm4pO1xuICAkZWwyLmZhZGVUbyh0aW1lLCAwLCBvbkVuZEZuKTtcblxuICAoXyRlbDEgJiYgY3Jvc3NmYWRlRkxBRykgfHwgXyRlbDIgfHwgb25FbmRGbigpO1xufVxudmFyIGxhc3RFdmVudCxcbiAgICBtb3ZlRXZlbnRUeXBlLFxuICAgIHByZXZlbnRFdmVudCxcbiAgICBwcmV2ZW50RXZlbnRUaW1lb3V0O1xuXG5mdW5jdGlvbiBleHRlbmRFdmVudCAoZSkge1xuICB2YXIgdG91Y2ggPSAoZS50b3VjaGVzIHx8IFtdKVswXSB8fCBlO1xuICBlLl94ID0gdG91Y2gucGFnZVg7XG4gIGUuX3kgPSB0b3VjaC5jbGllbnRZO1xuICBlLl9ub3cgPSAkLm5vdygpO1xufVxuXG5mdW5jdGlvbiB0b3VjaCAoJGVsLCBvcHRpb25zKSB7XG4gIHZhciBlbCA9ICRlbFswXSxcbiAgICAgIHRhaWwgPSB7fSxcbiAgICAgIHRvdWNoRW5hYmxlZEZMQUcsXG4gICAgICBzdGFydEV2ZW50LFxuICAgICAgJHRhcmdldCxcbiAgICAgIGNvbnRyb2xUb3VjaCxcbiAgICAgIHRvdWNoRkxBRyxcbiAgICAgIHRhcmdldElzU2VsZWN0RkxBRyxcbiAgICAgIHRhcmdldElzTGlua0ZsYWcsXG4gICAgICB0b2xlcmFuY2UsXG4gICAgICBtb3ZlZDtcblxuICBmdW5jdGlvbiBvblN0YXJ0IChlKSB7XG4gICAgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuICAgIHRhaWwuY2hlY2tlZCA9IHRhcmdldElzU2VsZWN0RkxBRyA9IHRhcmdldElzTGlua0ZsYWcgPSBtb3ZlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRvdWNoRW5hYmxlZEZMQUdcbiAgICAgICAgfHwgdGFpbC5mbG93XG4gICAgICAgIHx8IChlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpXG4gICAgICAgIHx8IGUud2hpY2ggPiAxXG4gICAgICAgIHx8IChsYXN0RXZlbnQgJiYgbGFzdEV2ZW50LnR5cGUgIT09IGUudHlwZSAmJiBwcmV2ZW50RXZlbnQpXG4gICAgICAgIHx8ICh0YXJnZXRJc1NlbGVjdEZMQUcgPSBvcHRpb25zLnNlbGVjdCAmJiAkdGFyZ2V0LmlzKG9wdGlvbnMuc2VsZWN0LCBlbCkpKSByZXR1cm4gdGFyZ2V0SXNTZWxlY3RGTEFHO1xuXG4gICAgdG91Y2hGTEFHID0gZS50eXBlID09PSAndG91Y2hzdGFydCc7XG4gICAgdGFyZ2V0SXNMaW5rRmxhZyA9ICR0YXJnZXQuaXMoJ2EsIGEgKicsIGVsKTtcbiAgICBjb250cm9sVG91Y2ggPSB0YWlsLmNvbnRyb2w7XG5cbiAgICB0b2xlcmFuY2UgPSAodGFpbC5ub01vdmUgfHwgdGFpbC5ub1N3aXBlIHx8IGNvbnRyb2xUb3VjaCkgPyAxNiA6ICF0YWlsLnNuYXAgPyA0IDogMDtcblxuICAgIGV4dGVuZEV2ZW50KGUpO1xuXG4gICAgc3RhcnRFdmVudCA9IGxhc3RFdmVudCA9IGU7XG4gICAgbW92ZUV2ZW50VHlwZSA9IGUudHlwZS5yZXBsYWNlKC9kb3dufHN0YXJ0LywgJ21vdmUnKS5yZXBsYWNlKC9Eb3duLywgJ01vdmUnKTtcblxuICAgIChvcHRpb25zLm9uU3RhcnQgfHwgbm9vcCkuY2FsbChlbCwgZSwge2NvbnRyb2w6IGNvbnRyb2xUb3VjaCwgJHRhcmdldDogJHRhcmdldH0pO1xuXG4gICAgdG91Y2hFbmFibGVkRkxBRyA9IHRhaWwuZmxvdyA9IHRydWU7XG5cbiAgICBpZiAoIXRvdWNoRkxBRyB8fCB0YWlsLmdvKSBzdG9wRXZlbnQoZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUgKGUpIHtcbiAgICBpZiAoKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMSlcbiAgICAgICAgfHwgKE1TX1BPSU5URVIgJiYgIWUuaXNQcmltYXJ5KVxuICAgICAgICB8fCBtb3ZlRXZlbnRUeXBlICE9PSBlLnR5cGVcbiAgICAgICAgfHwgIXRvdWNoRW5hYmxlZEZMQUcpIHtcbiAgICAgIHRvdWNoRW5hYmxlZEZMQUcgJiYgb25FbmQoKTtcbiAgICAgIChvcHRpb25zLm9uVG91Y2hFbmQgfHwgbm9vcCkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHRlbmRFdmVudChlKTtcblxuICAgIHZhciB4RGlmZiA9IE1hdGguYWJzKGUuX3ggLSBzdGFydEV2ZW50Ll94KSwgLy8gb3B0IF94IOKGkiBfcGFnZVhcbiAgICAgICAgeURpZmYgPSBNYXRoLmFicyhlLl95IC0gc3RhcnRFdmVudC5feSksXG4gICAgICAgIHh5RGlmZiA9IHhEaWZmIC0geURpZmYsXG4gICAgICAgIHhXaW4gPSAodGFpbC5nbyB8fCB0YWlsLnggfHwgeHlEaWZmID49IDApICYmICF0YWlsLm5vU3dpcGUsXG4gICAgICAgIHlXaW4gPSB4eURpZmYgPCAwO1xuXG4gICAgaWYgKHRvdWNoRkxBRyAmJiAhdGFpbC5jaGVja2VkKSB7XG4gICAgICBpZiAodG91Y2hFbmFibGVkRkxBRyA9IHhXaW4pIHtcbiAgICAgICAgc3RvcEV2ZW50KGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLy8vY29uc29sZS5sb2coJ29uTW92ZSBlLnByZXZlbnREZWZhdWx0Jyk7XG4gICAgICBzdG9wRXZlbnQoZSk7XG4gICAgICAob3B0aW9ucy5vbk1vdmUgfHwgbm9vcCkuY2FsbChlbCwgZSwge3RvdWNoOiB0b3VjaEZMQUd9KTtcbiAgICB9XG5cbiAgICBpZiAoIW1vdmVkICYmIE1hdGguc3FydChNYXRoLnBvdyh4RGlmZiwgMikgKyBNYXRoLnBvdyh5RGlmZiwgMikpID4gdG9sZXJhbmNlKSB7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGFpbC5jaGVja2VkID0gdGFpbC5jaGVja2VkIHx8IHhXaW4gfHwgeVdpbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRW5kIChlKSB7XG4gICAgLy8vLy8vY29uc29sZS50aW1lKCd0b3VjaC5qcyBvbkVuZCcpO1xuXG4gICAgKG9wdGlvbnMub25Ub3VjaEVuZCB8fCBub29wKSgpO1xuXG4gICAgdmFyIF90b3VjaEVuYWJsZWRGTEFHID0gdG91Y2hFbmFibGVkRkxBRztcbiAgICB0YWlsLmNvbnRyb2wgPSB0b3VjaEVuYWJsZWRGTEFHID0gZmFsc2U7XG5cbiAgICBpZiAoX3RvdWNoRW5hYmxlZEZMQUcpIHtcbiAgICAgIHRhaWwuZmxvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghX3RvdWNoRW5hYmxlZEZMQUcgfHwgKHRhcmdldElzTGlua0ZsYWcgJiYgIXRhaWwuY2hlY2tlZCkpIHJldHVybjtcblxuICAgIGUgJiYgc3RvcEV2ZW50KGUpO1xuXG4gICAgcHJldmVudEV2ZW50ID0gdHJ1ZTtcbiAgICBjbGVhclRpbWVvdXQocHJldmVudEV2ZW50VGltZW91dCk7XG4gICAgcHJldmVudEV2ZW50VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcHJldmVudEV2ZW50ID0gZmFsc2U7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAob3B0aW9ucy5vbkVuZCB8fCBub29wKS5jYWxsKGVsLCB7bW92ZWQ6IG1vdmVkLCAkdGFyZ2V0OiAkdGFyZ2V0LCBjb250cm9sOiBjb250cm9sVG91Y2gsIHRvdWNoOiB0b3VjaEZMQUcsIHN0YXJ0RXZlbnQ6IHN0YXJ0RXZlbnQsIGFib3J0ZWQ6ICFlIHx8IGUudHlwZSA9PT0gJ01TUG9pbnRlckNhbmNlbCd9KTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3RvdWNoLmpzIG9uRW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk90aGVyU3RhcnQgKCkge1xuICAgIGlmICh0YWlsLmZsb3cpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhaWwuZmxvdyA9IHRydWU7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25PdGhlckVuZCAoKSB7XG4gICAgaWYgKCF0YWlsLmZsb3cpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhaWwuZmxvdyA9IGZhbHNlO1xuICAgIH0sIFRPVUNIX1RJTUVPVVQpO1xuICB9XG5cbiAgaWYgKE1TX1BPSU5URVIpIHtcbiAgICBhZGRFdmVudChlbCwgJ01TUG9pbnRlckRvd24nLCBvblN0YXJ0KTtcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ01TUG9pbnRlck1vdmUnLCBvbk1vdmUpO1xuICAgIGFkZEV2ZW50KGRvY3VtZW50LCdNU1BvaW50ZXJDYW5jZWwnLCBvbkVuZCk7XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdNU1BvaW50ZXJVcCcsIG9uRW5kKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRFdmVudChlbCwgJ3RvdWNoc3RhcnQnLCBvblN0YXJ0KTtcbiAgICBhZGRFdmVudChlbCwgJ3RvdWNobW92ZScsIG9uTW92ZSk7XG4gICAgYWRkRXZlbnQoZWwsICd0b3VjaGVuZCcsIG9uRW5kKTtcblxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAndG91Y2hzdGFydCcsIG9uT3RoZXJTdGFydCk7XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICd0b3VjaGVuZCcsIG9uT3RoZXJFbmQpO1xuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBvbk90aGVyRW5kKTtcblxuICAgICRXSU5ET1cub24oJ3Njcm9sbCcsIG9uT3RoZXJFbmQpO1xuXG4gICAgJGVsLm9uKCdtb3VzZWRvd24nLCBvblN0YXJ0KTtcbiAgICAkRE9DVU1FTlRcbiAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBvbk1vdmUpXG4gICAgICAgIC5vbignbW91c2V1cCcsIG9uRW5kKTtcbiAgfVxuXG4gICRlbC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGFpbC5jaGVja2VkICYmIHN0b3BFdmVudChlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhaWw7XG59XG5cbmZ1bmN0aW9uIG1vdmVPblRvdWNoICgkZWwsIG9wdGlvbnMpIHtcbiAgdmFyIGVsID0gJGVsWzBdLFxuICAgICAgZWxEYXRhID0gJGVsLmRhdGEoKSxcbiAgICAgIHRhaWwgPSB7fSxcbiAgICAgIHN0YXJ0Q29vLFxuICAgICAgY29vLFxuICAgICAgc3RhcnRFbFBvcyxcbiAgICAgIG1vdmVFbFBvcyxcbiAgICAgIGVkZ2UsXG4gICAgICBtb3ZlVHJhY2ssXG4gICAgICBzdGFydFRpbWUsXG4gICAgICBlbmRUaW1lLFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgc25hcCxcbiAgICAgIHNsb3dGTEFHLFxuICAgICAgY29udHJvbEZMQUcsXG4gICAgICBtb3ZlZCxcbiAgICAgIHRyYWNrZWQ7XG5cbiAgZnVuY3Rpb24gc3RhcnRUcmFja2luZyAoZSwgbm9TdG9wKSB7XG4gICAgdHJhY2tlZCA9IHRydWU7XG4gICAgc3RhcnRDb28gPSBjb28gPSBlLl94O1xuICAgIHN0YXJ0VGltZSA9IGUuX25vdztcblxuICAgIG1vdmVUcmFjayA9IFtcbiAgICAgIFtzdGFydFRpbWUsIHN0YXJ0Q29vXVxuICAgIF07XG5cbiAgICBzdGFydEVsUG9zID0gbW92ZUVsUG9zID0gdGFpbC5ub01vdmUgfHwgbm9TdG9wID8gMCA6IHN0b3AoJGVsLCAob3B0aW9ucy5nZXRQb3MgfHwgbm9vcCkoKS8qLCBvcHRpb25zLl8wMDEqLyk7XG5cbiAgICAob3B0aW9ucy5vblN0YXJ0IHx8IG5vb3ApLmNhbGwoZWwsIGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdGFydCAoZSwgcmVzdWx0KSB7XG4gICAgbWluID0gdGFpbC5taW47XG4gICAgbWF4ID0gdGFpbC5tYXg7XG4gICAgc25hcCA9IHRhaWwuc25hcDtcblxuICAgIHNsb3dGTEFHID0gZS5hbHRLZXk7XG4gICAgdHJhY2tlZCA9IG1vdmVkID0gZmFsc2U7XG5cbiAgICBjb250cm9sRkxBRyA9IHJlc3VsdC5jb250cm9sO1xuXG4gICAgaWYgKCFjb250cm9sRkxBRyAmJiAhZWxEYXRhLnNsaWRpbmcpIHtcbiAgICAgIHN0YXJ0VHJhY2tpbmcoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlIChlLCByZXN1bHQpIHtcbiAgICBpZiAoIXRhaWwubm9Td2lwZSkge1xuICAgICAgaWYgKCF0cmFja2VkKSB7XG4gICAgICAgIHN0YXJ0VHJhY2tpbmcoZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbyA9IGUuX3g7XG5cbiAgICAgIG1vdmVUcmFjay5wdXNoKFtlLl9ub3csIGNvb10pO1xuXG4gICAgICBtb3ZlRWxQb3MgPSBzdGFydEVsUG9zIC0gKHN0YXJ0Q29vIC0gY29vKTtcblxuICAgICAgZWRnZSA9IGZpbmRTaGFkb3dFZGdlKG1vdmVFbFBvcywgbWluLCBtYXgpO1xuXG4gICAgICBpZiAobW92ZUVsUG9zIDw9IG1pbikge1xuICAgICAgICBtb3ZlRWxQb3MgPSBlZGdlUmVzaXN0YW5jZShtb3ZlRWxQb3MsIG1pbik7XG4gICAgICB9IGVsc2UgaWYgKG1vdmVFbFBvcyA+PSBtYXgpIHtcbiAgICAgICAgbW92ZUVsUG9zID0gZWRnZVJlc2lzdGFuY2UobW92ZUVsUG9zLCBtYXgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRhaWwubm9Nb3ZlKSB7XG4gICAgICAgICRlbC5jc3MoZ2V0VHJhbnNsYXRlKG1vdmVFbFBvcy8qLCBvcHRpb25zLl8wMDEqLykpO1xuICAgICAgICBpZiAoIW1vdmVkKSB7XG4gICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIC8vIG9ubHkgZm9yIG1vdXNlXG4gICAgICAgICAgcmVzdWx0LnRvdWNoIHx8IE1TX1BPSU5URVIgfHwgJGVsLmFkZENsYXNzKGdyYWJiaW5nQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgKG9wdGlvbnMub25Nb3ZlIHx8IG5vb3ApLmNhbGwoZWwsIGUsIHtwb3M6IG1vdmVFbFBvcywgZWRnZTogZWRnZX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRW5kIChyZXN1bHQpIHtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ21vdmVvbnRvdWNoLmpzIG9uRW5kJyk7XG4gICAgaWYgKHRhaWwubm9Td2lwZSAmJiByZXN1bHQubW92ZWQpIHJldHVybjtcblxuICAgIGlmICghdHJhY2tlZCkge1xuICAgICAgc3RhcnRUcmFja2luZyhyZXN1bHQuc3RhcnRFdmVudCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8vL2NvbnNvbGUubG9nKCdvbkVuZCcpO1xuXG4gICAgcmVzdWx0LnRvdWNoIHx8IE1TX1BPSU5URVIgfHwgJGVsLnJlbW92ZUNsYXNzKGdyYWJiaW5nQ2xhc3MpO1xuXG4gICAgZW5kVGltZSA9ICQubm93KCk7XG5cbiAgICB2YXIgX2JhY2tUaW1lSWRlYWwgPSBlbmRUaW1lIC0gVE9VQ0hfVElNRU9VVCxcbiAgICAgICAgX2JhY2tUaW1lLFxuICAgICAgICBfdGltZURpZmYsXG4gICAgICAgIF90aW1lRGlmZkxhc3QsXG4gICAgICAgIGJhY2tUaW1lID0gbnVsbCxcbiAgICAgICAgYmFja0NvbyxcbiAgICAgICAgdmlydHVhbFBvcyxcbiAgICAgICAgbGltaXRQb3MsXG4gICAgICAgIG5ld1BvcyxcbiAgICAgICAgb3ZlclBvcyxcbiAgICAgICAgdGltZSA9IFRSQU5TSVRJT05fRFVSQVRJT04sXG4gICAgICAgIHNwZWVkLFxuICAgICAgICBmcmljdGlvbiA9IG9wdGlvbnMuZnJpY3Rpb247XG5cbiAgICBmb3IgKHZhciBfaSA9IG1vdmVUcmFjay5sZW5ndGggLSAxOyBfaSA+PSAwOyBfaS0tKSB7XG4gICAgICBfYmFja1RpbWUgPSBtb3ZlVHJhY2tbX2ldWzBdO1xuICAgICAgX3RpbWVEaWZmID0gTWF0aC5hYnMoX2JhY2tUaW1lIC0gX2JhY2tUaW1lSWRlYWwpO1xuICAgICAgaWYgKGJhY2tUaW1lID09PSBudWxsIHx8IF90aW1lRGlmZiA8IF90aW1lRGlmZkxhc3QpIHtcbiAgICAgICAgYmFja1RpbWUgPSBfYmFja1RpbWU7XG4gICAgICAgIGJhY2tDb28gPSBtb3ZlVHJhY2tbX2ldWzFdO1xuICAgICAgfSBlbHNlIGlmIChiYWNrVGltZSA9PT0gX2JhY2tUaW1lSWRlYWwgfHwgX3RpbWVEaWZmID4gX3RpbWVEaWZmTGFzdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIF90aW1lRGlmZkxhc3QgPSBfdGltZURpZmY7XG4gICAgfVxuXG4gICAgbmV3UG9zID0gbWluTWF4TGltaXQobW92ZUVsUG9zLCBtaW4sIG1heCk7XG5cbiAgICB2YXIgY29vRGlmZiA9IGJhY2tDb28gLSBjb28sXG4gICAgICAgIGZvcndhcmRGTEFHID0gY29vRGlmZiA+PSAwLFxuICAgICAgICB0aW1lRGlmZiA9IGVuZFRpbWUgLSBiYWNrVGltZSxcbiAgICAgICAgbG9uZ1RvdWNoRkxBRyA9IHRpbWVEaWZmID4gVE9VQ0hfVElNRU9VVCxcbiAgICAgICAgc3dpcGVGTEFHID0gIWxvbmdUb3VjaEZMQUcgJiYgbW92ZUVsUG9zICE9PSBzdGFydEVsUG9zICYmIG5ld1BvcyA9PT0gbW92ZUVsUG9zO1xuXG4gICAgaWYgKHNuYXApIHtcbiAgICAgIG5ld1BvcyA9IG1pbk1heExpbWl0KE1hdGhbc3dpcGVGTEFHID8gKGZvcndhcmRGTEFHID8gJ2Zsb29yJyA6ICdjZWlsJykgOiAncm91bmQnXShtb3ZlRWxQb3MgLyBzbmFwKSAqIHNuYXAsIG1pbiwgbWF4KTtcbiAgICAgIG1pbiA9IG1heCA9IG5ld1BvcztcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVGTEFHICYmIChzbmFwIHx8IG5ld1BvcyA9PT0gbW92ZUVsUG9zKSkge1xuICAgICAgc3BlZWQgPSAtKGNvb0RpZmYgLyB0aW1lRGlmZik7XG4gICAgICB0aW1lICo9IG1pbk1heExpbWl0KE1hdGguYWJzKHNwZWVkKSwgb3B0aW9ucy50aW1lTG93LCBvcHRpb25zLnRpbWVIaWdoKTtcbiAgICAgIHZpcnR1YWxQb3MgPSBNYXRoLnJvdW5kKG1vdmVFbFBvcyArIHNwZWVkICogdGltZSAvIGZyaWN0aW9uKTtcblxuICAgICAgaWYgKCFzbmFwKSB7XG4gICAgICAgIG5ld1BvcyA9IHZpcnR1YWxQb3M7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9yd2FyZEZMQUcgJiYgdmlydHVhbFBvcyA+IG1heCB8fCBmb3J3YXJkRkxBRyAmJiB2aXJ0dWFsUG9zIDwgbWluKSB7XG4gICAgICAgIGxpbWl0UG9zID0gZm9yd2FyZEZMQUcgPyBtaW4gOiBtYXg7XG4gICAgICAgIG92ZXJQb3MgPSB2aXJ0dWFsUG9zIC0gbGltaXRQb3M7XG4gICAgICAgIGlmICghc25hcCkge1xuICAgICAgICAgIG5ld1BvcyA9IGxpbWl0UG9zO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJQb3MgPSBtaW5NYXhMaW1pdChuZXdQb3MgKyBvdmVyUG9zICogLjAzLCBsaW1pdFBvcyAtIDUwLCBsaW1pdFBvcyArIDUwKTtcbiAgICAgICAgdGltZSA9IE1hdGguYWJzKChtb3ZlRWxQb3MgLSBvdmVyUG9zKSAvIChzcGVlZCAvIGZyaWN0aW9uKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZSAqPSBzbG93RkxBRyA/IDEwIDogMTtcblxuICAgIChvcHRpb25zLm9uRW5kIHx8IG5vb3ApLmNhbGwoZWwsICQuZXh0ZW5kKHJlc3VsdCwge21vdmVkOiByZXN1bHQubW92ZWQgfHwgbG9uZ1RvdWNoRkxBRyAmJiBzbmFwLCBwb3M6IG1vdmVFbFBvcywgbmV3UG9zOiBuZXdQb3MsIG92ZXJQb3M6IG92ZXJQb3MsIHRpbWU6IHRpbWV9KSk7XG4gIH1cblxuICB0YWlsID0gJC5leHRlbmQodG91Y2gob3B0aW9ucy4kd3JhcCwgJC5leHRlbmQoe30sIG9wdGlvbnMsIHtcbiAgICBvblN0YXJ0OiBvblN0YXJ0LFxuICAgIG9uTW92ZTogb25Nb3ZlLFxuICAgIG9uRW5kOiBvbkVuZFxuICB9KSksIHRhaWwpO1xuXG4gIHJldHVybiB0YWlsO1xufVxuZnVuY3Rpb24gd2hlZWwgKCRlbCwgb3B0aW9ucykge1xuICB2YXIgZWwgPSAkZWxbMF0sXG4gICAgICBsb2NrRkxBRyxcbiAgICAgIGxhc3REaXJlY3Rpb24sXG4gICAgICBsYXN0Tm93LFxuICAgICAgdGFpbCA9IHtcbiAgICAgICAgcHJldmVudDoge31cbiAgICAgIH07XG5cbiAgYWRkRXZlbnQoZWwsIFdIRUVMLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB5RGVsdGEgPSBlLndoZWVsRGVsdGFZIHx8IC0xICogZS5kZWx0YVkgfHwgMCxcbiAgICAgICAgeERlbHRhID0gZS53aGVlbERlbHRhWCB8fCAtMSAqIGUuZGVsdGFYIHx8IDAsXG4gICAgICAgIHhXaW4gPSBNYXRoLmFicyh4RGVsdGEpICYmICFNYXRoLmFicyh5RGVsdGEpLFxuICAgICAgICBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb25TaWduKHhEZWx0YSA8IDApLFxuICAgICAgICBzYW1lRGlyZWN0aW9uID0gbGFzdERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uLFxuICAgICAgICBub3cgPSAkLm5vdygpLFxuICAgICAgICB0b29GYXN0ID0gbm93IC0gbGFzdE5vdyA8IFRPVUNIX1RJTUVPVVQ7XG5cbiAgICBsYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIGxhc3ROb3cgPSBub3c7XG5cbiAgICBpZiAoIXhXaW4gfHwgIXRhaWwub2sgfHwgdGFpbC5wcmV2ZW50W2RpcmVjdGlvbl0gJiYgIWxvY2tGTEFHKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3BFdmVudChlLCB0cnVlKTtcbiAgICAgIGlmIChsb2NrRkxBRyAmJiBzYW1lRGlyZWN0aW9uICYmIHRvb0Zhc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNoaWZ0KSB7XG4gICAgICBsb2NrRkxBRyA9IHRydWU7XG4gICAgICBjbGVhclRpbWVvdXQodGFpbC50KTtcbiAgICAgIHRhaWwudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NrRkxBRyA9IGZhbHNlO1xuICAgICAgfSwgU0NST0xMX0xPQ0tfVElNRU9VVCk7XG4gICAgfVxuXG4gICAgKG9wdGlvbnMub25FbmQgfHwgbm9vcCkoZSwgb3B0aW9ucy5zaGlmdCA/IGRpcmVjdGlvbiA6IHhEZWx0YSk7XG5cbiAgfSk7XG5cbiAgcmV0dXJuIHRhaWw7XG59XG5qUXVlcnkuRm90b3JhbWEgPSBmdW5jdGlvbiAoJGZvdG9yYW1hLCBvcHRzKSB7XG4gICRIVE1MID0gJCgnaHRtbCcpO1xuICAkQk9EWSA9ICQoJ2JvZHknKTtcblxuICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICBzdGFtcCA9ICQubm93KCksXG4gICAgICBzdGFtcENsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyBzdGFtcCxcbiAgICAgIGZvdG9yYW1hID0gJGZvdG9yYW1hWzBdLFxuICAgICAgZGF0YSxcbiAgICAgIGRhdGFGcmFtZUNvdW50ID0gMSxcbiAgICAgIGZvdG9yYW1hRGF0YSA9ICRmb3RvcmFtYS5kYXRhKCksXG4gICAgICBzaXplLFxuXG4gICAgICAkc3R5bGUgPSAkKCc8c3R5bGU+PC9zdHlsZT4nKSxcblxuICAgICAgJGFuY2hvciA9ICQoZGl2KGhpZGRlbkNsYXNzKSksXG4gICAgICAkd3JhcCA9ICQoZGl2KHdyYXBDbGFzcykpLFxuICAgICAgJHN0YWdlID0gJChkaXYoc3RhZ2VDbGFzcykpLmFwcGVuZFRvKCR3cmFwKSxcbiAgICAgIHN0YWdlID0gJHN0YWdlWzBdLFxuXG4gICAgICAkc3RhZ2VTaGFmdCA9ICQoZGl2KHN0YWdlU2hhZnRDbGFzcykpLmFwcGVuZFRvKCRzdGFnZSksXG4gICAgICAkc3RhZ2VGcmFtZSA9ICQoKSxcbiAgICAgICRhcnJQcmV2ID0gJChkaXYoYXJyQ2xhc3MgKyAnICcgKyBhcnJQcmV2Q2xhc3MgKyBidXR0b25BdHRyaWJ1dGVzKSksXG4gICAgICAkYXJyTmV4dCA9ICQoZGl2KGFyckNsYXNzICsgJyAnICsgYXJyTmV4dENsYXNzICsgYnV0dG9uQXR0cmlidXRlcykpLFxuICAgICAgJGFycnMgPSAkYXJyUHJldi5hZGQoJGFyck5leHQpLmFwcGVuZFRvKCRzdGFnZSksXG4gICAgICAkbmF2V3JhcCA9ICQoZGl2KG5hdldyYXBDbGFzcykpLFxuICAgICAgJG5hdiA9ICQoZGl2KG5hdkNsYXNzKSkuYXBwZW5kVG8oJG5hdldyYXApLFxuICAgICAgJG5hdlNoYWZ0ID0gJChkaXYobmF2U2hhZnRDbGFzcykpLmFwcGVuZFRvKCRuYXYpLFxuICAgICAgJG5hdkZyYW1lLFxuICAgICAgJG5hdkRvdEZyYW1lID0gJCgpLFxuICAgICAgJG5hdlRodW1iRnJhbWUgPSAkKCksXG5cbiAgICAgIHN0YWdlU2hhZnREYXRhID0gJHN0YWdlU2hhZnQuZGF0YSgpLFxuICAgICAgbmF2U2hhZnREYXRhID0gJG5hdlNoYWZ0LmRhdGEoKSxcblxuICAgICAgJHRodW1iQm9yZGVyID0gJChkaXYodGh1bWJCb3JkZXJDbGFzcykpLmFwcGVuZFRvKCRuYXZTaGFmdCksXG5cbiAgICAgICRmdWxsc2NyZWVuSWNvbiA9ICQoZGl2KGZ1bGxzY3JlZW5JY29uQ2xhc3MgKyBidXR0b25BdHRyaWJ1dGVzKSksXG4gICAgICBmdWxsc2NyZWVuSWNvbiA9ICRmdWxsc2NyZWVuSWNvblswXSxcbiAgICAgICR2aWRlb1BsYXkgPSAkKGRpdih2aWRlb1BsYXlDbGFzcykpLFxuICAgICAgJHZpZGVvQ2xvc2UgPSAkKGRpdih2aWRlb0Nsb3NlQ2xhc3MpKS5hcHBlbmRUbygkc3RhZ2UpLFxuICAgICAgdmlkZW9DbG9zZSA9ICR2aWRlb0Nsb3NlWzBdLFxuXG4gICAgICBzcGlubmVyLFxuICAgICAgJHNwaW5uZXIgPSAkKGRpdihzcGlubmVyQ2xhc3MpKSxcblxuICAgICAgJHZpZGVvUGxheWluZyxcblxuICAgICAgYWN0aXZlSW5kZXggPSBmYWxzZSxcbiAgICAgIGFjdGl2ZUZyYW1lLFxuICAgICAgYWN0aXZlSW5kZXhlcyxcbiAgICAgIHJlcG9zaXRpb25JbmRleCxcbiAgICAgIGRpcnR5SW5kZXgsXG4gICAgICBsYXN0QWN0aXZlSW5kZXgsXG4gICAgICBwcmV2SW5kZXgsXG4gICAgICBuZXh0SW5kZXgsXG4gICAgICBuZXh0QXV0b3BsYXlJbmRleCxcbiAgICAgIHN0YXJ0SW5kZXgsXG5cbiAgICAgIG9fbG9vcCxcbiAgICAgIG9fbmF2LFxuICAgICAgb19uYXZUaHVtYnMsXG4gICAgICBvX25hdlRvcCxcbiAgICAgIG9fYWxsb3dGdWxsU2NyZWVuLFxuICAgICAgb19uYXRpdmVGdWxsU2NyZWVuLFxuICAgICAgb19mYWRlLFxuICAgICAgb190aHVtYlNpZGUsXG4gICAgICBvX3RodW1iU2lkZTIsXG4gICAgICBvX3RyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIG9fdHJhbnNpdGlvbixcbiAgICAgIG9fc2hhZG93cyxcbiAgICAgIG9fcnRsLFxuICAgICAgb19rZXlib2FyZCxcbiAgICAgIGxhc3RPcHRpb25zID0ge30sXG5cbiAgICAgIG1lYXN1cmVzID0ge30sXG4gICAgICBtZWFzdXJlc1NldEZMQUcsXG5cbiAgICAgIHN0YWdlU2hhZnRUb3VjaFRhaWwgPSB7fSxcbiAgICAgIHN0YWdlV2hlZWxUYWlsID0ge30sXG4gICAgICBuYXZTaGFmdFRvdWNoVGFpbCA9IHt9LFxuICAgICAgbmF2V2hlZWxUYWlsID0ge30sXG5cbiAgICAgIHNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbExlZnQsXG5cbiAgICAgIHNob3dlZEZMQUcsXG4gICAgICBwYXVzZWRBdXRvcGxheUZMQUcsXG4gICAgICBzdG9wcGVkQXV0b3BsYXlGTEFHLFxuXG4gICAgICB0b0RlYWN0aXZhdGUgPSB7fSxcbiAgICAgIHRvRGV0YWNoID0ge30sXG5cbiAgICAgIG1lYXN1cmVzU3Rhc2gsXG5cbiAgICAgIHRvdWNoZWRGTEFHLFxuXG4gICAgICBob3ZlckZMQUcsXG5cbiAgICAgIG5hdkZyYW1lS2V5LFxuICAgICAgc3RhZ2VMZWZ0ID0gMCxcblxuICAgICAgZmFkZVN0YWNrID0gW107XG5cbiAgJHdyYXBbU1RBR0VfRlJBTUVfS0VZXSA9ICQoZGl2KHN0YWdlRnJhbWVDbGFzcykpO1xuICAkd3JhcFtOQVZfVEhVTUJfRlJBTUVfS0VZXSA9ICQoZGl2KG5hdkZyYW1lQ2xhc3MgKyAnICcgKyBuYXZGcmFtZVRodW1iQ2xhc3MgKyBidXR0b25BdHRyaWJ1dGVzLCBkaXYodGh1bWJDbGFzcykpKTtcbiAgJHdyYXBbTkFWX0RPVF9GUkFNRV9LRVldID0gJChkaXYobmF2RnJhbWVDbGFzcyArICcgJyArIG5hdkZyYW1lRG90Q2xhc3MgKyBidXR0b25BdHRyaWJ1dGVzLCBkaXYoZG90Q2xhc3MpKSk7XG5cbiAgdG9EZWFjdGl2YXRlW1NUQUdFX0ZSQU1FX0tFWV0gPSBbXTtcbiAgdG9EZWFjdGl2YXRlW05BVl9USFVNQl9GUkFNRV9LRVldID0gW107XG4gIHRvRGVhY3RpdmF0ZVtOQVZfRE9UX0ZSQU1FX0tFWV0gPSBbXTtcbiAgdG9EZXRhY2hbU1RBR0VfRlJBTUVfS0VZXSA9IHt9O1xuXG4gICR3cmFwXG4gICAgICAuYWRkQ2xhc3MoQ1NTMyA/IHdyYXBDc3MzQ2xhc3MgOiB3cmFwQ3NzMkNsYXNzKVxuICAgICAgLnRvZ2dsZUNsYXNzKHdyYXBOb0NvbnRyb2xzQ2xhc3MsICFvcHRzLmNvbnRyb2xzb25zdGFydCk7XG5cbiAgZm90b3JhbWFEYXRhLmZvdG9yYW1hID0gdGhpcztcblxuICBmdW5jdGlvbiBjaGVja0ZvclZpZGVvICgpIHtcbiAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24gKGksIGRhdGFGcmFtZSkge1xuICAgICAgaWYgKCFkYXRhRnJhbWUuaSkge1xuICAgICAgICBkYXRhRnJhbWUuaSA9IGRhdGFGcmFtZUNvdW50Kys7XG4gICAgICAgIHZhciB2aWRlbyA9IGZpbmRWaWRlb0lkKGRhdGFGcmFtZS52aWRlbywgdHJ1ZSk7XG4gICAgICAgIGlmICh2aWRlbykge1xuICAgICAgICAgIHZhciB0aHVtYnMgPSB7fTtcbiAgICAgICAgICBkYXRhRnJhbWUudmlkZW8gPSB2aWRlbztcbiAgICAgICAgICBpZiAoIWRhdGFGcmFtZS5pbWcgJiYgIWRhdGFGcmFtZS50aHVtYikge1xuICAgICAgICAgICAgdGh1bWJzID0gZ2V0VmlkZW9UaHVtYnMoZGF0YUZyYW1lLCBkYXRhLCB0aGF0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YUZyYW1lLnRodW1ic1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlRGF0YShkYXRhLCB7aW1nOiB0aHVtYnMuaW1nLCB0aHVtYjogdGh1bWJzLnRodW1ifSwgZGF0YUZyYW1lLmksIHRoYXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxvd0tleSAoa2V5KSB7XG4gICAgcmV0dXJuIG9fa2V5Ym9hcmRba2V5XSB8fCB0aGF0LmZ1bGxTY3JlZW47XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kR2xvYmFsRXZlbnRzIChGTEFHKSB7XG4gICAgdmFyIGtleWRvd25Db21tb24gPSAna2V5ZG93bi4nICsgX2ZvdG9yYW1hQ2xhc3MsXG4gICAgICAgIGxvY2FsU3RhbXAgPSBfZm90b3JhbWFDbGFzcyArIHN0YW1wLFxuICAgICAgICBrZXlkb3duTG9jYWwgPSAna2V5ZG93bi4nICsgbG9jYWxTdGFtcCxcbiAgICAgICAgcmVzaXplTG9jYWwgPSAncmVzaXplLicgKyBsb2NhbFN0YW1wICsgJyAnICsgJ29yaWVudGF0aW9uY2hhbmdlLicgKyBsb2NhbFN0YW1wO1xuXG4gICAgaWYgKEZMQUcpIHtcbiAgICAgICRET0NVTUVOVFxuICAgICAgICAgIC5vbihrZXlkb3duTG9jYWwsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgY2F0Y2hlZCxcbiAgICAgICAgICAgICAgICBpbmRleDtcblxuICAgICAgICAgICAgaWYgKCR2aWRlb1BsYXlpbmcgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICBjYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdW5sb2FkVmlkZW8oJHZpZGVvUGxheWluZywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoYXQuZnVsbFNjcmVlbiB8fCAob3B0cy5rZXlib2FyZCAmJiAhdGhhdC5pbmRleCkpIHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICBjYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGF0LmNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT09IDMyICYmIGFsbG93S2V5KCdzcGFjZScpKSB8fCAoZS5rZXlDb2RlID09PSAzNyAmJiBhbGxvd0tleSgnbGVmdCcpKSB8fCAoZS5rZXlDb2RlID09PSAzOCAmJiBhbGxvd0tleSgndXAnKSkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICc8JztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZS5rZXlDb2RlID09PSAzMiAmJiBhbGxvd0tleSgnc3BhY2UnKSkgfHwgKGUua2V5Q29kZSA9PT0gMzkgJiYgYWxsb3dLZXkoJ3JpZ2h0JykpIHx8IChlLmtleUNvZGUgPT09IDQwICYmIGFsbG93S2V5KCdkb3duJykpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAnPic7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNiAmJiBhbGxvd0tleSgnaG9tZScpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAnPDwnO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzUgJiYgYWxsb3dLZXkoJ2VuZCcpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAnPj4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIChjYXRjaGVkIHx8IGluZGV4KSAmJiBzdG9wRXZlbnQoZSk7XG4gICAgICAgICAgICBpbmRleCAmJiB0aGF0LnNob3coe2luZGV4OiBpbmRleCwgc2xvdzogZS5hbHRLZXksIHVzZXI6IHRydWV9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgaWYgKCF0aGF0LmluZGV4KSB7XG4gICAgICAgICRET0NVTUVOVFxuICAgICAgICAgICAgLm9mZihrZXlkb3duQ29tbW9uKVxuICAgICAgICAgICAgLm9uKGtleWRvd25Db21tb24sICd0ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICEkQk9EWS5oYXNDbGFzcyhfZnVsbHNjcmVlbkNsYXNzKSAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgICRXSU5ET1cub24ocmVzaXplTG9jYWwsIHRoYXQucmVzaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJERPQ1VNRU5ULm9mZihrZXlkb3duTG9jYWwpO1xuICAgICAgJFdJTkRPVy5vZmYocmVzaXplTG9jYWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZEVsZW1lbnRzIChGTEFHKSB7XG4gICAgaWYgKEZMQUcgPT09IGFwcGVuZEVsZW1lbnRzLmYpIHJldHVybjtcblxuICAgIGlmIChGTEFHKSB7XG4gICAgICAkZm90b3JhbWFcbiAgICAgICAgICAuaHRtbCgnJylcbiAgICAgICAgICAuYWRkQ2xhc3MoX2ZvdG9yYW1hQ2xhc3MgKyAnICcgKyBzdGFtcENsYXNzKVxuICAgICAgICAgIC5hcHBlbmQoJHdyYXApXG4gICAgICAgICAgLmJlZm9yZSgkc3R5bGUpXG4gICAgICAgICAgLmJlZm9yZSgkYW5jaG9yKTtcblxuICAgICAgYWRkSW5zdGFuY2UodGhhdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwLmRldGFjaCgpO1xuICAgICAgJHN0eWxlLmRldGFjaCgpO1xuICAgICAgJGFuY2hvci5kZXRhY2goKTtcbiAgICAgICRmb3RvcmFtYVxuICAgICAgICAgIC5odG1sKGZvdG9yYW1hRGF0YS51cnRleHQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKHN0YW1wQ2xhc3MpO1xuXG4gICAgICBoaWRlSW5zdGFuY2UodGhhdCk7XG4gICAgfVxuXG4gICAgYmluZEdsb2JhbEV2ZW50cyhGTEFHKTtcbiAgICBhcHBlbmRFbGVtZW50cy5mID0gRkxBRztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERhdGEgKCkge1xuICAgIGRhdGEgPSB0aGF0LmRhdGEgPSBkYXRhIHx8IGNsb25lKG9wdHMuZGF0YSkgfHwgZ2V0RGF0YUZyb21IdG1sKCRmb3RvcmFtYSk7XG4gICAgc2l6ZSA9IHRoYXQuc2l6ZSA9IGRhdGEubGVuZ3RoO1xuXG4gICAgIXJlYWR5Lm9rICYmIG9wdHMuc2h1ZmZsZSAmJiBzaHVmZmxlKGRhdGEpO1xuXG4gICAgY2hlY2tGb3JWaWRlbygpO1xuXG4gICAgYWN0aXZlSW5kZXggPSBsaW1pdEluZGV4KGFjdGl2ZUluZGV4KTtcblxuICAgIHNpemUgJiYgYXBwZW5kRWxlbWVudHModHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFnZU5vTW92ZSAoKSB7XG4gICAgdmFyIF9ub01vdmUgPSAoc2l6ZSA8IDIgJiYgIW9wdHMuZW5hYmxlaWZzaW5nbGVmcmFtZSkgfHwgJHZpZGVvUGxheWluZztcbiAgICBzdGFnZVNoYWZ0VG91Y2hUYWlsLm5vTW92ZSA9IF9ub01vdmUgfHwgb19mYWRlO1xuICAgIHN0YWdlU2hhZnRUb3VjaFRhaWwubm9Td2lwZSA9IF9ub01vdmUgfHwgIW9wdHMuc3dpcGU7XG5cbiAgICAhb190cmFuc2l0aW9uICYmICRzdGFnZVNoYWZ0LnRvZ2dsZUNsYXNzKGdyYWJDbGFzcywgIW9wdHMuY2xpY2sgJiYgIXN0YWdlU2hhZnRUb3VjaFRhaWwubm9Nb3ZlICYmICFzdGFnZVNoYWZ0VG91Y2hUYWlsLm5vU3dpcGUpO1xuICAgIE1TX1BPSU5URVIgJiYgJHdyYXAudG9nZ2xlQ2xhc3Mod3JhcFBhbllDbGFzcywgIXN0YWdlU2hhZnRUb3VjaFRhaWwubm9Td2lwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBdXRvcGxheUludGVydmFsIChpbnRlcnZhbCkge1xuICAgIGlmIChpbnRlcnZhbCA9PT0gdHJ1ZSkgaW50ZXJ2YWwgPSAnJztcbiAgICBvcHRzLmF1dG9wbGF5ID0gTWF0aC5tYXgoK2ludGVydmFsIHx8IEFVVE9QTEFZX0lOVEVSVkFMLCBvX3RyYW5zaXRpb25EdXJhdGlvbiAqIDEuNSk7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9ucyBvbiB0aGUgZmx5XG4gICAqICovXG4gIGZ1bmN0aW9uIHNldE9wdGlvbnMgKCkge1xuICAgIHRoYXQub3B0aW9ucyA9IG9wdHMgPSBvcHRpb25zVG9Mb3dlckNhc2Uob3B0cyk7XG5cbiAgICBvX2ZhZGUgPSAob3B0cy50cmFuc2l0aW9uID09PSAnY3Jvc3NmYWRlJyB8fCBvcHRzLnRyYW5zaXRpb24gPT09ICdkaXNzb2x2ZScpO1xuXG4gICAgb19sb29wID0gb3B0cy5sb29wICYmIChzaXplID4gMiB8fCAob19mYWRlICYmICghb190cmFuc2l0aW9uIHx8IG9fdHJhbnNpdGlvbiAhPT0gJ3NsaWRlJykpKTtcblxuICAgIG9fdHJhbnNpdGlvbkR1cmF0aW9uID0gK29wdHMudHJhbnNpdGlvbmR1cmF0aW9uIHx8IFRSQU5TSVRJT05fRFVSQVRJT047XG5cbiAgICBvX3J0bCA9IG9wdHMuZGlyZWN0aW9uID09PSAncnRsJztcblxuICAgIG9fa2V5Ym9hcmQgPSAkLmV4dGVuZCh7fSwgb3B0cy5rZXlib2FyZCAmJiBLRVlCT0FSRF9PUFRJT05TLCBvcHRzLmtleWJvYXJkKTtcblxuICAgIHZhciBjbGFzc2VzID0ge2FkZDogW10sIHJlbW92ZTogW119O1xuXG4gICAgZnVuY3Rpb24gYWRkT3JSZW1vdmVDbGFzcyAoRkxBRywgdmFsdWUpIHtcbiAgICAgIGNsYXNzZXNbRkxBRyA/ICdhZGQnIDogJ3JlbW92ZSddLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChzaXplID4gMSB8fCBvcHRzLmVuYWJsZWlmc2luZ2xlZnJhbWUpIHtcbiAgICAgIG9fbmF2ID0gb3B0cy5uYXY7XG4gICAgICBvX25hdlRvcCA9IG9wdHMubmF2cG9zaXRpb24gPT09ICd0b3AnO1xuICAgICAgY2xhc3Nlcy5yZW1vdmUucHVzaChzZWxlY3RDbGFzcyk7XG5cbiAgICAgICRhcnJzLnRvZ2dsZSghIW9wdHMuYXJyb3dzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb19uYXYgPSBmYWxzZTtcbiAgICAgICRhcnJzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzcGlubmVyU3RvcCgpO1xuICAgIHNwaW5uZXIgPSBuZXcgU3Bpbm5lcigkLmV4dGVuZChzcGlubmVyRGVmYXVsdHMsIG9wdHMuc3Bpbm5lciwgc3Bpbm5lck92ZXJyaWRlLCB7ZGlyZWN0aW9uOiBvX3J0bCA/IC0xIDogMX0pKTtcblxuICAgIGFycnNVcGRhdGUoKTtcbiAgICBzdGFnZVdoZWVsVXBkYXRlKCk7XG5cbiAgICBpZiAob3B0cy5hdXRvcGxheSkgc2V0QXV0b3BsYXlJbnRlcnZhbChvcHRzLmF1dG9wbGF5KTtcblxuICAgIG9fdGh1bWJTaWRlID0gbnVtYmVyRnJvbU1lYXN1cmUob3B0cy50aHVtYndpZHRoKSB8fCBUSFVNQl9TSVpFO1xuICAgIG9fdGh1bWJTaWRlMiA9IG51bWJlckZyb21NZWFzdXJlKG9wdHMudGh1bWJoZWlnaHQpIHx8IFRIVU1CX1NJWkU7XG5cbiAgICBzdGFnZVdoZWVsVGFpbC5vayA9IG5hdldoZWVsVGFpbC5vayA9IG9wdHMudHJhY2twYWQgJiYgIVNMT1c7XG5cbiAgICBzdGFnZU5vTW92ZSgpO1xuXG4gICAgZXh0ZW5kTWVhc3VyZXMob3B0cywgW21lYXN1cmVzXSk7XG5cbiAgICBvX25hdlRodW1icyA9IG9fbmF2ID09PSAndGh1bWJzJztcblxuICAgIGlmIChvX25hdlRodW1icykge1xuICAgICAgZnJhbWVEcmF3KHNpemUsICduYXZUaHVtYicpO1xuXG4gICAgICAkbmF2RnJhbWUgPSAkbmF2VGh1bWJGcmFtZTtcbiAgICAgIG5hdkZyYW1lS2V5ID0gTkFWX1RIVU1CX0ZSQU1FX0tFWTtcblxuICAgICAgc2V0U3R5bGUoJHN0eWxlLCAkLkZvdG9yYW1hLmpzdC5zdHlsZSh7dzogb190aHVtYlNpZGUsIGg6IG9fdGh1bWJTaWRlMiwgYjogb3B0cy50aHVtYmJvcmRlcndpZHRoLCBtOiBvcHRzLnRodW1ibWFyZ2luLCBzOiBzdGFtcCwgcTogIUNPTVBBVH0pKTtcblxuICAgICAgJG5hdlxuICAgICAgICAgIC5hZGRDbGFzcyhuYXZUaHVtYnNDbGFzcylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MobmF2RG90c0NsYXNzKTtcbiAgICB9IGVsc2UgaWYgKG9fbmF2ID09PSAnZG90cycpIHtcbiAgICAgIGZyYW1lRHJhdyhzaXplLCAnbmF2RG90Jyk7XG5cbiAgICAgICRuYXZGcmFtZSA9ICRuYXZEb3RGcmFtZTtcbiAgICAgIG5hdkZyYW1lS2V5ID0gTkFWX0RPVF9GUkFNRV9LRVk7XG5cbiAgICAgICRuYXZcbiAgICAgICAgICAuYWRkQ2xhc3MobmF2RG90c0NsYXNzKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhuYXZUaHVtYnNDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9fbmF2ID0gZmFsc2U7XG4gICAgICAkbmF2LnJlbW92ZUNsYXNzKG5hdlRodW1ic0NsYXNzICsgJyAnICsgbmF2RG90c0NsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAob19uYXYpIHtcbiAgICAgIGlmIChvX25hdlRvcCkge1xuICAgICAgICAkbmF2V3JhcC5pbnNlcnRCZWZvcmUoJHN0YWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRuYXZXcmFwLmluc2VydEFmdGVyKCRzdGFnZSk7XG4gICAgICB9XG4gICAgICBmcmFtZUFwcGVuZC5uYXYgPSBmYWxzZTtcbiAgICAgIGZyYW1lQXBwZW5kKCRuYXZGcmFtZSwgJG5hdlNoYWZ0LCAnbmF2Jyk7XG4gICAgfVxuXG4gICAgb19hbGxvd0Z1bGxTY3JlZW4gPSBvcHRzLmFsbG93ZnVsbHNjcmVlbjtcblxuICAgIGlmIChvX2FsbG93RnVsbFNjcmVlbikge1xuICAgICAgJGZ1bGxzY3JlZW5JY29uLnByZXBlbmRUbygkc3RhZ2UpO1xuICAgICAgb19uYXRpdmVGdWxsU2NyZWVuID0gRlVMTFNDUkVFTiAmJiBvX2FsbG93RnVsbFNjcmVlbiA9PT0gJ25hdGl2ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICRmdWxsc2NyZWVuSWNvbi5kZXRhY2goKTtcbiAgICAgIG9fbmF0aXZlRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZE9yUmVtb3ZlQ2xhc3Mob19mYWRlLCB3cmFwRmFkZUNsYXNzKTtcbiAgICBhZGRPclJlbW92ZUNsYXNzKCFvX2ZhZGUsIHdyYXBTbGlkZUNsYXNzKTtcbiAgICBhZGRPclJlbW92ZUNsYXNzKCFvcHRzLmNhcHRpb25zLCB3cmFwTm9DYXB0aW9uc0NsYXNzKTtcbiAgICBhZGRPclJlbW92ZUNsYXNzKG9fcnRsLCB3cmFwUnRsQ2xhc3MpO1xuICAgIGFkZE9yUmVtb3ZlQ2xhc3Mob3B0cy5hcnJvd3MgIT09ICdhbHdheXMnLCB3cmFwVG9nZ2xlQXJyb3dzQ2xhc3MpO1xuXG4gICAgb19zaGFkb3dzID0gb3B0cy5zaGFkb3dzICYmICFTTE9XO1xuICAgIGFkZE9yUmVtb3ZlQ2xhc3MoIW9fc2hhZG93cywgd3JhcE5vU2hhZG93c0NsYXNzKTtcblxuICAgICR3cmFwXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc2VzLmFkZC5qb2luKCcgJykpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc2VzLnJlbW92ZS5qb2luKCcgJykpO1xuXG4gICAgbGFzdE9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgb3B0cyk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVJbmRleCAoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gKHNpemUgKyAoaW5kZXggJSBzaXplKSkgJSBzaXplIDogaW5kZXggPj0gc2l6ZSA/IGluZGV4ICUgc2l6ZSA6IGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gbGltaXRJbmRleCAoaW5kZXgpIHtcbiAgICByZXR1cm4gbWluTWF4TGltaXQoaW5kZXgsIDAsIHNpemUgLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkZ2VJbmRleCAoaW5kZXgpIHtcbiAgICByZXR1cm4gb19sb29wID8gbm9ybWFsaXplSW5kZXgoaW5kZXgpIDogbGltaXRJbmRleChpbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcmV2SW5kZXggKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID4gMCB8fCBvX2xvb3AgPyBpbmRleCAtIDEgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5leHRJbmRleCAoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPCBzaXplIC0gMSB8fCBvX2xvb3AgPyBpbmRleCArIDEgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0YWdlU2hhZnRNaW5tYXhBbmRTbmFwICgpIHtcbiAgICBzdGFnZVNoYWZ0VG91Y2hUYWlsLm1pbiA9IG9fbG9vcCA/IC1JbmZpbml0eSA6IC1nZXRQb3NCeUluZGV4KHNpemUgLSAxLCBtZWFzdXJlcy53LCBvcHRzLm1hcmdpbiwgcmVwb3NpdGlvbkluZGV4KTtcbiAgICBzdGFnZVNoYWZ0VG91Y2hUYWlsLm1heCA9IG9fbG9vcCA/IEluZmluaXR5IDogLWdldFBvc0J5SW5kZXgoMCwgbWVhc3VyZXMudywgb3B0cy5tYXJnaW4sIHJlcG9zaXRpb25JbmRleCk7XG4gICAgc3RhZ2VTaGFmdFRvdWNoVGFpbC5zbmFwID0gbWVhc3VyZXMudyArIG9wdHMubWFyZ2luO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TmF2U2hhZnRNaW5NYXggKCkge1xuICAgIC8vLy8vLy8vY29uc29sZS5sb2coJ3NldE5hdlNoYWZ0TWluTWF4JywgbWVhc3VyZXMubncpO1xuICAgIG5hdlNoYWZ0VG91Y2hUYWlsLm1pbiA9IE1hdGgubWluKDAsIG1lYXN1cmVzLm53IC0gJG5hdlNoYWZ0LndpZHRoKCkpO1xuICAgIG5hdlNoYWZ0VG91Y2hUYWlsLm1heCA9IDA7XG4gICAgJG5hdlNoYWZ0LnRvZ2dsZUNsYXNzKGdyYWJDbGFzcywgIShuYXZTaGFmdFRvdWNoVGFpbC5ub01vdmUgPSBuYXZTaGFmdFRvdWNoVGFpbC5taW4gPT09IG5hdlNoYWZ0VG91Y2hUYWlsLm1heCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWFjaEluZGV4IChpbmRleGVzLCB0eXBlLCBmbikge1xuICAgIGlmICh0eXBlb2YgaW5kZXhlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ZXMgPSBuZXcgQXJyYXkoaW5kZXhlcyk7XG4gICAgICB2YXIgcmFuZ2VGTEFHID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICQuZWFjaChpbmRleGVzLCBmdW5jdGlvbiAoaSwgaW5kZXgpIHtcbiAgICAgIGlmIChyYW5nZUZMQUcpIGluZGV4ID0gaTtcbiAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBkYXRhRnJhbWUgPSBkYXRhW25vcm1hbGl6ZUluZGV4KGluZGV4KV07XG5cbiAgICAgICAgaWYgKGRhdGFGcmFtZSkge1xuICAgICAgICAgIHZhciBrZXkgPSAnJCcgKyB0eXBlICsgJ0ZyYW1lJyxcbiAgICAgICAgICAgICAgJGZyYW1lID0gZGF0YUZyYW1lW2tleV07XG5cbiAgICAgICAgICBmbi5jYWxsKHRoaXMsIGksIGluZGV4LCBkYXRhRnJhbWUsICRmcmFtZSwga2V5LCAkZnJhbWUgJiYgJGZyYW1lLmRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE1lYXN1cmVzICh3aWR0aCwgaGVpZ2h0LCByYXRpbywgaW5kZXgpIHtcbiAgICBpZiAoIW1lYXN1cmVzU2V0RkxBRyB8fCAobWVhc3VyZXNTZXRGTEFHID09PSAnKicgJiYgaW5kZXggPT09IHN0YXJ0SW5kZXgpKSB7XG5cbiAgICAgIC8vLy8vL2NvbnNvbGUubG9nKCdzZXRNZWFzdXJlcycsIGluZGV4LCBvcHRzLndpZHRoLCBvcHRzLmhlaWdodCk7XG5cbiAgICAgIHdpZHRoID0gbWVhc3VyZUlzVmFsaWQob3B0cy53aWR0aCkgfHwgbWVhc3VyZUlzVmFsaWQod2lkdGgpIHx8IFdJRFRIO1xuICAgICAgaGVpZ2h0ID0gbWVhc3VyZUlzVmFsaWQob3B0cy5oZWlnaHQpIHx8IG1lYXN1cmVJc1ZhbGlkKGhlaWdodCkgfHwgSEVJR0hUO1xuICAgICAgdGhhdC5yZXNpemUoe1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIHJhdGlvOiBvcHRzLnJhdGlvIHx8IHJhdGlvIHx8IHdpZHRoIC8gaGVpZ2h0XG4gICAgICB9LCAwLCBpbmRleCAhPT0gc3RhcnRJbmRleCAmJiAnKicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWcgKGluZGV4ZXMsIHR5cGUsIHNwZWNpYWxNZWFzdXJlcywgbWV0aG9kLCBwb3NpdGlvbiwgYWdhaW4pIHtcbiAgICBlYWNoSW5kZXgoaW5kZXhlcywgdHlwZSwgZnVuY3Rpb24gKGksIGluZGV4LCBkYXRhRnJhbWUsICRmcmFtZSwga2V5LCBmcmFtZURhdGEpIHtcblxuICAgICAgaWYgKCEkZnJhbWUpIHJldHVybjtcblxuICAgICAgdmFyIGZ1bGxGTEFHID0gdGhhdC5mdWxsU2NyZWVuICYmIGRhdGFGcmFtZS5mdWxsICYmIGRhdGFGcmFtZS5mdWxsICE9PSBkYXRhRnJhbWUuaW1nICYmICFmcmFtZURhdGEuJGZ1bGwgJiYgdHlwZSA9PT0gJ3N0YWdlJztcblxuICAgICAgaWYgKGZyYW1lRGF0YS4kaW1nICYmICFhZ2FpbiAmJiAhZnVsbEZMQUcpIHJldHVybjtcblxuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICRpbWcgPSAkKGltZyksXG4gICAgICAgICAgaW1nRGF0YSA9ICRpbWcuZGF0YSgpO1xuXG4gICAgICBmcmFtZURhdGFbZnVsbEZMQUcgPyAnJGZ1bGwnIDogJyRpbWcnXSA9ICRpbWc7XG5cbiAgICAgIHZhciBzcmNLZXkgPSB0eXBlID09PSAnc3RhZ2UnID8gKGZ1bGxGTEFHID8gJ2Z1bGwnIDogJ2ltZycpIDogJ3RodW1iJyxcbiAgICAgICAgICBzcmMgPSBkYXRhRnJhbWVbc3JjS2V5XSxcbiAgICAgICAgICBkdW1teSA9IGZ1bGxGTEFHID8gbnVsbCA6IGRhdGFGcmFtZVt0eXBlID09PSAnc3RhZ2UnID8gJ3RodW1iJyA6ICdpbWcnXTtcblxuICAgICAgaWYgKHR5cGUgPT09ICduYXZUaHVtYicpICRmcmFtZSA9IGZyYW1lRGF0YS4kd3JhcDtcblxuICAgICAgZnVuY3Rpb24gdHJpZ2dlclRyaWdnZXJFdmVudCAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9pbmRleCA9IG5vcm1hbGl6ZUluZGV4KGluZGV4KTtcbiAgICAgICAgdHJpZ2dlckV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgaW5kZXg6IF9pbmRleCxcbiAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICBmcmFtZTogZGF0YVtfaW5kZXhdXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBlcnJvciAoKSB7XG4gICAgICAgICRpbWcucmVtb3ZlKCk7XG5cbiAgICAgICAgJC5Gb3RvcmFtYS5jYWNoZVtzcmNdID0gJ2Vycm9yJztcblxuICAgICAgICBpZiAoKCFkYXRhRnJhbWUuaHRtbCB8fCB0eXBlICE9PSAnc3RhZ2UnKSAmJiBkdW1teSAmJiBkdW1teSAhPT0gc3JjKSB7XG4gICAgICAgICAgZGF0YUZyYW1lW3NyY0tleV0gPSBzcmMgPSBkdW1teTtcbiAgICAgICAgICBsb2FkSW1nKFtpbmRleF0sIHR5cGUsIHNwZWNpYWxNZWFzdXJlcywgbWV0aG9kLCBwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNyYyAmJiAhZGF0YUZyYW1lLmh0bWwgJiYgIWZ1bGxGTEFHKSB7XG4gICAgICAgICAgICAkZnJhbWVcbiAgICAgICAgICAgICAgICAudHJpZ2dlcignZjplcnJvcicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG5cbiAgICAgICAgICAgIHRyaWdnZXJUcmlnZ2VyRXZlbnQoJ2Vycm9yJyk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RhZ2UnKSB7XG4gICAgICAgICAgICAkZnJhbWVcbiAgICAgICAgICAgICAgICAudHJpZ2dlcignZjpsb2FkJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MobG9hZGluZ0NsYXNzICsgJyAnICsgZXJyb3JDbGFzcylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MobG9hZGVkQ2xhc3MpO1xuXG4gICAgICAgICAgICB0cmlnZ2VyVHJpZ2dlckV2ZW50KCdsb2FkJyk7XG4gICAgICAgICAgICBzZXRNZWFzdXJlcygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZyYW1lRGF0YS5zdGF0ZSA9ICdlcnJvcic7XG5cbiAgICAgICAgICBpZiAoc2l6ZSA+IDEgJiYgZGF0YVtpbmRleF0gPT09IGRhdGFGcmFtZSAmJiAhZGF0YUZyYW1lLmh0bWwgJiYgIWRhdGFGcmFtZS5kZWxldGVkICYmICFkYXRhRnJhbWUudmlkZW8gJiYgIWZ1bGxGTEFHKSB7XG4gICAgICAgICAgICBkYXRhRnJhbWUuZGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGF0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGxvYWRlZCAoKSB7XG4gICAgICAgIC8vLy8vL2NvbnNvbGUubG9nKCdsb2FkZWQ6ICcgKyBzcmMpO1xuXG4gICAgICAgIC8vLy9jb25zb2xlLmxvZygnJC5Gb3RvcmFtYS5tZWFzdXJlc1tzcmNdJywgJC5Gb3RvcmFtYS5tZWFzdXJlc1tzcmNdKTtcblxuICAgICAgICAkLkZvdG9yYW1hLm1lYXN1cmVzW3NyY10gPSBpbWdEYXRhLm1lYXN1cmVzID0gJC5Gb3RvcmFtYS5tZWFzdXJlc1tzcmNdIHx8IHtcbiAgICAgICAgICB3aWR0aDogaW1nLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodCxcbiAgICAgICAgICByYXRpbzogaW1nLndpZHRoIC8gaW1nLmhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIHNldE1lYXN1cmVzKGltZ0RhdGEubWVhc3VyZXMud2lkdGgsIGltZ0RhdGEubWVhc3VyZXMuaGVpZ2h0LCBpbWdEYXRhLm1lYXN1cmVzLnJhdGlvLCBpbmRleCk7XG5cbiAgICAgICAgJGltZ1xuICAgICAgICAgICAgLm9mZignbG9hZCBlcnJvcicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoaW1nQ2xhc3MgKyAoZnVsbEZMQUcgPyAnICcgKyBpbWdGdWxsQ2xhc3MgOiAnJykpXG4gICAgICAgICAgICAucHJlcGVuZFRvKCRmcmFtZSk7XG5cbiAgICAgICAgZml0KCRpbWcsICgkLmlzRnVuY3Rpb24oc3BlY2lhbE1lYXN1cmVzKSA/IHNwZWNpYWxNZWFzdXJlcygpIDogc3BlY2lhbE1lYXN1cmVzKSB8fCBtZWFzdXJlcywgbWV0aG9kIHx8IGRhdGFGcmFtZS5maXQgfHwgb3B0cy5maXQsIHBvc2l0aW9uIHx8IGRhdGFGcmFtZS5wb3NpdGlvbiB8fCBvcHRzLnBvc2l0aW9uKTtcblxuICAgICAgICAkLkZvdG9yYW1hLmNhY2hlW3NyY10gPSBmcmFtZURhdGEuc3RhdGUgPSAnbG9hZGVkJztcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkZnJhbWVcbiAgICAgICAgICAgICAgLnRyaWdnZXIoJ2Y6bG9hZCcpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhsb2FkaW5nQ2xhc3MgKyAnICcgKyBlcnJvckNsYXNzKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MobG9hZGVkQ2xhc3MgKyAnICcgKyAoZnVsbEZMQUcgPyBsb2FkZWRGdWxsQ2xhc3MgOiBsb2FkZWRJbWdDbGFzcykpO1xuXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdzdGFnZScpIHtcbiAgICAgICAgICAgIHRyaWdnZXJUcmlnZ2VyRXZlbnQoJ2xvYWQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFGcmFtZS50aHVtYnJhdGlvID09PSBBVVRPIHx8ICFkYXRhRnJhbWUudGh1bWJyYXRpbyAmJiBvcHRzLnRodW1icmF0aW8gPT09IEFVVE8pIHtcbiAgICAgICAgICAgIC8vIGRhbmdlciEgcmVmbG93IGZvciBhbGwgdGh1bWJuYWlsc1xuICAgICAgICAgICAgZGF0YUZyYW1lLnRodW1icmF0aW8gPSBpbWdEYXRhLm1lYXN1cmVzLnJhdGlvO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNyYykge1xuICAgICAgICBlcnJvcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHdhaXRBbmRMb2FkICgpIHtcbiAgICAgICAgdmFyIF9pID0gMTA7XG4gICAgICAgIHdhaXRGb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAhdG91Y2hlZEZMQUcgfHwgIV9pLS0gJiYgIVNMT1c7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghJC5Gb3RvcmFtYS5jYWNoZVtzcmNdKSB7XG4gICAgICAgICQuRm90b3JhbWEuY2FjaGVbc3JjXSA9ICcqJztcblxuICAgICAgICAkaW1nXG4gICAgICAgICAgICAub24oJ2xvYWQnLCB3YWl0QW5kTG9hZClcbiAgICAgICAgICAgIC5vbignZXJyb3InLCBlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoZnVuY3Rpb24ganVzdFdhaXQgKCkge1xuICAgICAgICAgIGlmICgkLkZvdG9yYW1hLmNhY2hlW3NyY10gPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIGVycm9yKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICgkLkZvdG9yYW1hLmNhY2hlW3NyY10gPT09ICdsb2FkZWQnKSB7XG4gICAgICAgICAgICAvLy8vY29uc29sZS5sb2coJ3Rha2UgZnJvbSBjYWNoZTogJyArIHNyYyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRBbmRMb2FkLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChqdXN0V2FpdCwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIGZyYW1lRGF0YS5zdGF0ZSA9ICcnO1xuICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaW5uZXJTcGluICgkZWwpIHtcbiAgICAkc3Bpbm5lci5hcHBlbmQoc3Bpbm5lci5zcGluKCkuZWwpLmFwcGVuZFRvKCRlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBzcGlubmVyU3RvcCAoKSB7XG4gICAgJHNwaW5uZXIuZGV0YWNoKCk7XG4gICAgc3Bpbm5lciAmJiBzcGlubmVyLnN0b3AoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZvdG9yYW1hU3RhdGUgKCkge1xuICAgIHZhciAkZnJhbWUgPSBhY3RpdmVGcmFtZVtTVEFHRV9GUkFNRV9LRVldO1xuXG4gICAgaWYgKCRmcmFtZSAmJiAhJGZyYW1lLmRhdGEoKS5zdGF0ZSkge1xuICAgICAgc3Bpbm5lclNwaW4oJGZyYW1lKTtcbiAgICAgICRmcmFtZS5vbignZjpsb2FkIGY6ZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmcmFtZS5vZmYoJ2Y6bG9hZCBmOmVycm9yJyk7XG4gICAgICAgIHNwaW5uZXJTdG9wKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGROYXZGcmFtZUV2ZW50cyAoZnJhbWUpIHtcbiAgICBhZGRFbnRlclVwKGZyYW1lLCBvbk5hdkZyYW1lQ2xpY2spO1xuICAgIGFkZEZvY3VzKGZyYW1lLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NrU2Nyb2xsKCRuYXYpO1xuICAgICAgfSwgMCk7XG4gICAgICBzbGlkZU5hdlNoYWZ0KHt0aW1lOiBvX3RyYW5zaXRpb25EdXJhdGlvbiwgZ3Vlc3NJbmRleDogJCh0aGlzKS5kYXRhKCkuZXEsIG1pbk1heDogbmF2U2hhZnRUb3VjaFRhaWx9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyYW1lRHJhdyAoaW5kZXhlcywgdHlwZSkge1xuICAgIGVhY2hJbmRleChpbmRleGVzLCB0eXBlLCBmdW5jdGlvbiAoaSwgaW5kZXgsIGRhdGFGcmFtZSwgJGZyYW1lLCBrZXksIGZyYW1lRGF0YSkge1xuICAgICAgaWYgKCRmcmFtZSkgcmV0dXJuO1xuXG4gICAgICAkZnJhbWUgPSBkYXRhRnJhbWVba2V5XSA9ICR3cmFwW2tleV0uY2xvbmUoKTtcbiAgICAgIGZyYW1lRGF0YSA9ICRmcmFtZS5kYXRhKCk7XG4gICAgICBmcmFtZURhdGEuZGF0YSA9IGRhdGFGcmFtZTtcbiAgICAgIHZhciBmcmFtZSA9ICRmcmFtZVswXTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdzdGFnZScpIHtcblxuICAgICAgICBpZiAoZGF0YUZyYW1lLmh0bWwpIHtcbiAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwiJyArIGh0bWxDbGFzcyArICdcIj48L2Rpdj4nKVxuICAgICAgICAgICAgICAuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgZGF0YUZyYW1lLl9odG1sID8gJChkYXRhRnJhbWUuaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignaWQnKVxuICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGRhdGFGcmFtZS5faHRtbCkgLy8gQmVjYXVzZSBvZiBJRVxuICAgICAgICAgICAgICAgICAgOiBkYXRhRnJhbWUuaHRtbFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hcHBlbmRUbygkZnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YUZyYW1lLmNhcHRpb24gJiYgJChkaXYoY2FwdGlvbkNsYXNzLCBkaXYoY2FwdGlvbldyYXBDbGFzcywgZGF0YUZyYW1lLmNhcHRpb24pKSkuYXBwZW5kVG8oJGZyYW1lKTtcblxuICAgICAgICBkYXRhRnJhbWUudmlkZW8gJiYgJGZyYW1lXG4gICAgICAgICAgLmFkZENsYXNzKHN0YWdlRnJhbWVWaWRlb0NsYXNzKVxuICAgICAgICAgIC5hcHBlbmQoJHZpZGVvUGxheS5jbG9uZSgpKTtcblxuICAgICAgICAvLyBUaGlzIHNvbHZlcyB0YWJiaW5nIHByb2JsZW1zXG4gICAgICAgIGFkZEZvY3VzKGZyYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NrU2Nyb2xsKCRzdGFnZSk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgY2xpY2tUb1Nob3coe2luZGV4OiBmcmFtZURhdGEuZXEsIHVzZXI6IHRydWV9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHN0YWdlRnJhbWUgPSAkc3RhZ2VGcmFtZS5hZGQoJGZyYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hdkRvdCcpIHtcbiAgICAgICAgYWRkTmF2RnJhbWVFdmVudHMoZnJhbWUpO1xuICAgICAgICAkbmF2RG90RnJhbWUgPSAkbmF2RG90RnJhbWUuYWRkKCRmcmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduYXZUaHVtYicpIHtcbiAgICAgICAgYWRkTmF2RnJhbWVFdmVudHMoZnJhbWUpO1xuICAgICAgICBmcmFtZURhdGEuJHdyYXAgPSAkZnJhbWUuY2hpbGRyZW4oJzpmaXJzdCcpO1xuICAgICAgICAkbmF2VGh1bWJGcmFtZSA9ICRuYXZUaHVtYkZyYW1lLmFkZCgkZnJhbWUpO1xuICAgICAgICBpZiAoZGF0YUZyYW1lLnZpZGVvKSB7XG4gICAgICAgICAgZnJhbWVEYXRhLiR3cmFwLmFwcGVuZCgkdmlkZW9QbGF5LmNsb25lKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxsRml0ICgkaW1nLCBtZWFzdXJlc1RvRml0LCBtZXRob2QsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuICRpbWcgJiYgJGltZy5sZW5ndGggJiYgZml0KCRpbWcsIG1lYXN1cmVzVG9GaXQsIG1ldGhvZCwgcG9zaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhZ2VGcmFtZVBvc2l0aW9uIChpbmRleGVzKSB7XG4gICAgZWFjaEluZGV4KGluZGV4ZXMsICdzdGFnZScsIGZ1bmN0aW9uIChpLCBpbmRleCwgZGF0YUZyYW1lLCAkZnJhbWUsIGtleSwgZnJhbWVEYXRhKSB7XG4gICAgICBpZiAoISRmcmFtZSkgcmV0dXJuO1xuXG4gICAgICB2YXIgbm9ybWFsaXplZEluZGV4ID0gbm9ybWFsaXplSW5kZXgoaW5kZXgpLFxuICAgICAgICAgIG1ldGhvZCA9IGRhdGFGcmFtZS5maXQgfHwgb3B0cy5maXQsXG4gICAgICAgICAgcG9zaXRpb24gPSBkYXRhRnJhbWUucG9zaXRpb24gfHwgb3B0cy5wb3NpdGlvbjtcbiAgICAgIGZyYW1lRGF0YS5lcSA9IG5vcm1hbGl6ZWRJbmRleDtcblxuICAgICAgdG9EZXRhY2hbU1RBR0VfRlJBTUVfS0VZXVtub3JtYWxpemVkSW5kZXhdID0gJGZyYW1lLmNzcygkLmV4dGVuZCh7bGVmdDogb19mYWRlID8gMCA6IGdldFBvc0J5SW5kZXgoaW5kZXgsIG1lYXN1cmVzLncsIG9wdHMubWFyZ2luLCByZXBvc2l0aW9uSW5kZXgpfSwgb19mYWRlICYmIGdldER1cmF0aW9uKDApKSk7XG5cbiAgICAgIGlmIChpc0RldGFjaGVkKCRmcmFtZVswXSkpIHtcbiAgICAgICAgJGZyYW1lLmFwcGVuZFRvKCRzdGFnZVNoYWZ0KTtcbiAgICAgICAgdW5sb2FkVmlkZW8oZGF0YUZyYW1lLiR2aWRlbyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxGaXQoZnJhbWVEYXRhLiRpbWcsIG1lYXN1cmVzLCBtZXRob2QsIHBvc2l0aW9uKTtcbiAgICAgIGNhbGxGaXQoZnJhbWVEYXRhLiRmdWxsLCBtZWFzdXJlcywgbWV0aG9kLCBwb3NpdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aHVtYnNEcmF3IChwb3MsIGxvYWRGTEFHKSB7XG4gICAgaWYgKG9fbmF2ICE9PSAndGh1bWJzJyB8fCBpc05hTihwb3MpKSByZXR1cm47XG5cbiAgICB2YXIgbGVmdExpbWl0ID0gLXBvcyxcbiAgICAgICAgcmlnaHRMaW1pdCA9IC1wb3MgKyBtZWFzdXJlcy5udztcblxuICAgICRuYXZUaHVtYkZyYW1lLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICB0aGlzRGF0YSA9ICR0aGlzLmRhdGEoKSxcbiAgICAgICAgICBlcSA9IHRoaXNEYXRhLmVxLFxuICAgICAgICAgIGdldFNwZWNpYWxNZWFzdXJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGg6IG9fdGh1bWJTaWRlMixcbiAgICAgICAgICAgICAgdzogdGhpc0RhdGEud1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BlY2lhbE1lYXN1cmVzID0gZ2V0U3BlY2lhbE1lYXN1cmVzKCksXG4gICAgICAgICAgZGF0YUZyYW1lID0gZGF0YVtlcV0gfHwge30sXG4gICAgICAgICAgbWV0aG9kID0gZGF0YUZyYW1lLnRodW1iZml0IHx8IG9wdHMudGh1bWJmaXQsXG4gICAgICAgICAgcG9zaXRpb24gPSBkYXRhRnJhbWUudGh1bWJwb3NpdGlvbiB8fCBvcHRzLnRodW1icG9zaXRpb247XG5cbiAgICAgIHNwZWNpYWxNZWFzdXJlcy53ID0gdGhpc0RhdGEudztcblxuICAgICAgaWYgKHRoaXNEYXRhLmwgKyB0aGlzRGF0YS53IDwgbGVmdExpbWl0XG4gICAgICAgICAgfHwgdGhpc0RhdGEubCA+IHJpZ2h0TGltaXRcbiAgICAgICAgICB8fCBjYWxsRml0KHRoaXNEYXRhLiRpbWcsIHNwZWNpYWxNZWFzdXJlcywgbWV0aG9kLCBwb3NpdGlvbikpIHJldHVybjtcblxuICAgICAgbG9hZEZMQUcgJiYgbG9hZEltZyhbZXFdLCAnbmF2VGh1bWInLCBnZXRTcGVjaWFsTWVhc3VyZXMsIG1ldGhvZCwgcG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJhbWVBcHBlbmQgKCRmcmFtZXMsICRzaGFmdCwgdHlwZSkge1xuICAgIGlmICghZnJhbWVBcHBlbmRbdHlwZV0pIHtcblxuICAgICAgdmFyIHRodW1ic0ZMQUcgPSB0eXBlID09PSAnbmF2JyAmJiBvX25hdlRodW1icyxcbiAgICAgICAgICBsZWZ0ID0gMDtcblxuICAgICAgJHNoYWZ0LmFwcGVuZChcbiAgICAgICAgJGZyYW1lc1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBhY3R1YWwsXG4gICAgICAgICAgICAgICAgICAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICBmcmFtZURhdGEgPSAkdGhpcy5kYXRhKCk7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2wgPSBkYXRhLmxlbmd0aDsgX2kgPCBfbDsgX2krKykge1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZURhdGEuZGF0YSA9PT0gZGF0YVtfaV0pIHtcbiAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBmcmFtZURhdGEuZXEgPSBfaTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYWN0dWFsIHx8ICR0aGlzLnJlbW92ZSgpICYmIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkKGEpLmRhdGEoKS5lcSAtICQoYikuZGF0YSgpLmVxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICBpZiAoIXRodW1ic0ZMQUcpIHJldHVybjtcblxuICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgZnJhbWVEYXRhID0gJHRoaXMuZGF0YSgpLFxuICAgICAgICAgICAgICAgICAgdGh1bWJ3aWR0aCA9IE1hdGgucm91bmQob190aHVtYlNpZGUyICogZnJhbWVEYXRhLmRhdGEudGh1bWJyYXRpbykgfHwgb190aHVtYlNpZGU7XG5cbiAgICAgICAgICAgICAgZnJhbWVEYXRhLmwgPSBsZWZ0O1xuICAgICAgICAgICAgICBmcmFtZURhdGEudyA9IHRodW1id2lkdGg7XG5cbiAgICAgICAgICAgICAgJHRoaXMuY3NzKHt3aWR0aDogdGh1bWJ3aWR0aH0pO1xuXG4gICAgICAgICAgICAgIGxlZnQgKz0gdGh1bWJ3aWR0aCArIG9wdHMudGh1bWJtYXJnaW47XG4gICAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgZnJhbWVBcHBlbmRbdHlwZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpcmVjdGlvbiAoeCkge1xuICAgIHJldHVybiB4IC0gc3RhZ2VMZWZ0ID4gbWVhc3VyZXMudyAvIDM7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlRGlycmVjdGlvbiAoaSkge1xuICAgIHJldHVybiAhb19sb29wICYmICghKGFjdGl2ZUluZGV4ICsgaSkgfHwgIShhY3RpdmVJbmRleCAtIHNpemUgKyBpKSkgJiYgISR2aWRlb1BsYXlpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBhcnJzVXBkYXRlICgpIHtcbiAgICB2YXIgZGlzYWJsZVByZXYgPSBkaXNhYmxlRGlycmVjdGlvbigwKSxcbiAgICAgICAgZGlzYWJsZU5leHQgPSBkaXNhYmxlRGlycmVjdGlvbigxKTtcbiAgICAkYXJyUHJldlxuICAgICAgICAudG9nZ2xlQ2xhc3MoYXJyRGlzYWJsZWRDbGFzcywgZGlzYWJsZVByZXYpXG4gICAgICAgIC5hdHRyKGRpc2FibGVBdHRyKGRpc2FibGVQcmV2KSk7XG4gICAgJGFyck5leHRcbiAgICAgICAgLnRvZ2dsZUNsYXNzKGFyckRpc2FibGVkQ2xhc3MsIGRpc2FibGVOZXh0KVxuICAgICAgICAuYXR0cihkaXNhYmxlQXR0cihkaXNhYmxlTmV4dCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhZ2VXaGVlbFVwZGF0ZSAoKSB7XG4gICAgaWYgKHN0YWdlV2hlZWxUYWlsLm9rKSB7XG4gICAgICBzdGFnZVdoZWVsVGFpbC5wcmV2ZW50ID0geyc8JzogZGlzYWJsZURpcnJlY3Rpb24oMCksICc+JzogZGlzYWJsZURpcnJlY3Rpb24oMSl9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5hdkZyYW1lQm91bmRzICgkbmF2RnJhbWUpIHtcbiAgICB2YXIgbmF2RnJhbWVEYXRhID0gJG5hdkZyYW1lLmRhdGEoKSxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgd2lkdGg7XG5cbiAgICBpZiAob19uYXZUaHVtYnMpIHtcbiAgICAgIGxlZnQgPSBuYXZGcmFtZURhdGEubDtcbiAgICAgIHdpZHRoID0gbmF2RnJhbWVEYXRhLnc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSAkbmF2RnJhbWUucG9zaXRpb24oKS5sZWZ0O1xuICAgICAgd2lkdGggPSAkbmF2RnJhbWUud2lkdGgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYzogbGVmdCArIHdpZHRoIC8gMixcbiAgICAgIG1pbjogLWxlZnQgKyBvcHRzLnRodW1ibWFyZ2luICogMTAsXG4gICAgICBtYXg6IC1sZWZ0ICsgbWVhc3VyZXMudyAtIHdpZHRoIC0gb3B0cy50aHVtYm1hcmdpbiAqIDEwXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlVGh1bWJCb3JkZXIgKHRpbWUpIHtcbiAgICB2YXIgbmF2RnJhbWVEYXRhID0gYWN0aXZlRnJhbWVbbmF2RnJhbWVLZXldLmRhdGEoKTtcbiAgICBzbGlkZSgkdGh1bWJCb3JkZXIsIHtcbiAgICAgIHRpbWU6IHRpbWUgKiAxLjIsXG4gICAgICBwb3M6IG5hdkZyYW1lRGF0YS5sLFxuICAgICAgd2lkdGg6IG5hdkZyYW1lRGF0YS53IC0gb3B0cy50aHVtYmJvcmRlcndpZHRoICogMlxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVOYXZTaGFmdCAob3B0aW9ucykge1xuICAgIC8vLy9jb25zb2xlLmxvZygnc2xpZGVOYXZTaGFmdCcsIG9wdGlvbnMuZ3Vlc3NJbmRleCwgb3B0aW9ucy5rZWVwLCBzbGlkZU5hdlNoYWZ0LmwpO1xuICAgIHZhciAkZ3Vlc3NOYXZGcmFtZSA9IGRhdGFbb3B0aW9ucy5ndWVzc0luZGV4XVtuYXZGcmFtZUtleV07XG4gICAgaWYgKCRndWVzc05hdkZyYW1lKSB7XG4gICAgICB2YXIgb3ZlcmZsb3dGTEFHID0gbmF2U2hhZnRUb3VjaFRhaWwubWluICE9PSBuYXZTaGFmdFRvdWNoVGFpbC5tYXgsXG4gICAgICAgICAgbWluTWF4ID0gb3B0aW9ucy5taW5NYXggfHwgb3ZlcmZsb3dGTEFHICYmIGdldE5hdkZyYW1lQm91bmRzKGFjdGl2ZUZyYW1lW25hdkZyYW1lS2V5XSksXG4gICAgICAgICAgbCA9IG92ZXJmbG93RkxBRyAmJiAob3B0aW9ucy5rZWVwICYmIHNsaWRlTmF2U2hhZnQubCA/IHNsaWRlTmF2U2hhZnQubCA6IG1pbk1heExpbWl0KChvcHRpb25zLmNvbyB8fCBtZWFzdXJlcy5udyAvIDIpIC0gZ2V0TmF2RnJhbWVCb3VuZHMoJGd1ZXNzTmF2RnJhbWUpLmMsIG1pbk1heC5taW4sIG1pbk1heC5tYXgpKSxcbiAgICAgICAgICBwb3MgPSBvdmVyZmxvd0ZMQUcgJiYgbWluTWF4TGltaXQobCwgbmF2U2hhZnRUb3VjaFRhaWwubWluLCBuYXZTaGFmdFRvdWNoVGFpbC5tYXgpLFxuICAgICAgICAgIHRpbWUgPSBvcHRpb25zLnRpbWUgKiAxLjE7XG5cbiAgICAgIHNsaWRlKCRuYXZTaGFmdCwge1xuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBwb3M6IHBvcyB8fCAwLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRodW1ic0RyYXcocG9zLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vaWYgKHRpbWUpIHRodW1ic0RyYXcocG9zKTtcblxuICAgICAgc2V0U2hhZG93KCRuYXYsIGZpbmRTaGFkb3dFZGdlKHBvcywgbmF2U2hhZnRUb3VjaFRhaWwubWluLCBuYXZTaGFmdFRvdWNoVGFpbC5tYXgpKTtcbiAgICAgIHNsaWRlTmF2U2hhZnQubCA9IGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmF2VXBkYXRlICgpIHtcbiAgICBkZWFjdGl2YXRlRnJhbWVzKG5hdkZyYW1lS2V5KTtcbiAgICB0b0RlYWN0aXZhdGVbbmF2RnJhbWVLZXldLnB1c2goYWN0aXZlRnJhbWVbbmF2RnJhbWVLZXldLmFkZENsYXNzKGFjdGl2ZUNsYXNzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlRnJhbWVzIChrZXkpIHtcbiAgICB2YXIgX3RvRGVhY3RpdmF0ZSA9IHRvRGVhY3RpdmF0ZVtrZXldO1xuXG4gICAgd2hpbGUgKF90b0RlYWN0aXZhdGUubGVuZ3RoKSB7XG4gICAgICBfdG9EZWFjdGl2YXRlLnNoaWZ0KCkucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGFjaEZyYW1lcyAoa2V5KSB7XG4gICAgdmFyIF90b0RldGFjaCA9IHRvRGV0YWNoW2tleV07XG5cbiAgICAvLy8vLy9jb25zb2xlLmxvZygnX3RvRGV0YWNoJywgX3RvRGV0YWNoKTtcbiAgICAvLy8vLy9jb25zb2xlLmxvZygnYWN0aXZlSW5kZXhlcycsIGFjdGl2ZUluZGV4ZXMpO1xuXG4gICAgJC5lYWNoKGFjdGl2ZUluZGV4ZXMsIGZ1bmN0aW9uIChpLCBpbmRleCkge1xuICAgICAgZGVsZXRlIF90b0RldGFjaFtub3JtYWxpemVJbmRleChpbmRleCldO1xuICAgIH0pO1xuXG4gICAgJC5lYWNoKF90b0RldGFjaCwgZnVuY3Rpb24gKGluZGV4LCAkZnJhbWUpIHtcbiAgICAgIGRlbGV0ZSBfdG9EZXRhY2hbaW5kZXhdO1xuICAgICAgLy8vLy8vY29uc29sZS5sb2coJ0RldGFjaCcsIGluZGV4KTtcbiAgICAgICRmcmFtZS5kZXRhY2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YWdlU2hhZnRSZXBvc2l0aW9uIChza2lwT25FbmQpIHtcblxuICAgIHJlcG9zaXRpb25JbmRleCA9IGRpcnR5SW5kZXggPSBhY3RpdmVJbmRleDtcblxuICAgIHZhciAkZnJhbWUgPSBhY3RpdmVGcmFtZVtTVEFHRV9GUkFNRV9LRVldO1xuXG4gICAgaWYgKCRmcmFtZSkge1xuICAgICAgZGVhY3RpdmF0ZUZyYW1lcyhTVEFHRV9GUkFNRV9LRVkpO1xuICAgICAgdG9EZWFjdGl2YXRlW1NUQUdFX0ZSQU1FX0tFWV0ucHVzaCgkZnJhbWUuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpKTtcblxuICAgICAgc2tpcE9uRW5kIHx8IHRoYXQuc2hvdy5vbkVuZCh0cnVlKTtcbiAgICAgIHN0b3AoJHN0YWdlU2hhZnQsIDAsIHRydWUpO1xuXG4gICAgICBkZXRhY2hGcmFtZXMoU1RBR0VfRlJBTUVfS0VZKTtcbiAgICAgIHN0YWdlRnJhbWVQb3NpdGlvbihhY3RpdmVJbmRleGVzKTtcbiAgICAgIHNldFN0YWdlU2hhZnRNaW5tYXhBbmRTbmFwKCk7XG4gICAgICBzZXROYXZTaGFmdE1pbk1heCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZE1lYXN1cmVzIChvcHRpb25zLCBtZWFzdXJlc0FycmF5KSB7XG4gICAgaWYgKCFvcHRpb25zKSByZXR1cm47XG5cbiAgICAkLmVhY2gobWVhc3VyZXNBcnJheSwgZnVuY3Rpb24gKGksIG1lYXN1cmVzKSB7XG4gICAgICBpZiAoIW1lYXN1cmVzKSByZXR1cm47XG5cbiAgICAgICQuZXh0ZW5kKG1lYXN1cmVzLCB7XG4gICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoIHx8IG1lYXN1cmVzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxuICAgICAgICBtaW53aWR0aDogb3B0aW9ucy5taW53aWR0aCxcbiAgICAgICAgbWF4d2lkdGg6IG9wdGlvbnMubWF4d2lkdGgsXG4gICAgICAgIG1pbmhlaWdodDogb3B0aW9ucy5taW5oZWlnaHQsXG4gICAgICAgIG1heGhlaWdodDogb3B0aW9ucy5tYXhoZWlnaHQsXG4gICAgICAgIHJhdGlvOiBnZXRSYXRpbyhvcHRpb25zLnJhdGlvKVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJFdmVudCAoZXZlbnQsIGV4dHJhKSB7XG4gICAgJGZvdG9yYW1hLnRyaWdnZXIoX2ZvdG9yYW1hQ2xhc3MgKyAnOicgKyBldmVudCwgW3RoYXQsIGV4dHJhXSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQgKCkge1xuICAgIGNsZWFyVGltZW91dChvblRvdWNoRW5kLnQpO1xuICAgIHRvdWNoZWRGTEFHID0gMTtcblxuICAgIGlmIChvcHRzLnN0b3BhdXRvcGxheW9udG91Y2gpIHtcbiAgICAgIHRoYXQuc3RvcEF1dG9wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdXNlZEF1dG9wbGF5RkxBRyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaEVuZCAoKSB7XG4gICAgaWYgKCF0b3VjaGVkRkxBRykgcmV0dXJuO1xuICAgIGlmICghb3B0cy5zdG9wYXV0b3BsYXlvbnRvdWNoKSB7XG4gICAgICByZWxlYXNlQXV0b3BsYXkoKTtcbiAgICAgIGNoYW5nZUF1dG9wbGF5KCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZC50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0b3VjaGVkRkxBRyA9IDA7XG4gICAgfSwgVFJBTlNJVElPTl9EVVJBVElPTiArIFRPVUNIX1RJTUVPVVQpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnb25Ub3VjaEVuZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVsZWFzZUF1dG9wbGF5ICgpIHtcbiAgICAvLy8vY29uc29sZS5sb2coJ3JlbGVhc2VBdXRvcGxheScpO1xuICAgIHBhdXNlZEF1dG9wbGF5RkxBRyA9ICEhKCR2aWRlb1BsYXlpbmcgfHwgc3RvcHBlZEF1dG9wbGF5RkxBRyk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VBdXRvcGxheSAoKSB7XG4gICAgLy8vL2NvbnNvbGUubG9nKCdjaGFuZ2VBdXRvcGxheScpO1xuXG4gICAgY2xlYXJUaW1lb3V0KGNoYW5nZUF1dG9wbGF5LnQpO1xuICAgIHdhaXRGb3Iuc3RvcChjaGFuZ2VBdXRvcGxheS53KTtcblxuICAgIGlmICghb3B0cy5hdXRvcGxheSB8fCBwYXVzZWRBdXRvcGxheUZMQUcpIHtcbiAgICAgIGlmICh0aGF0LmF1dG9wbGF5KSB7XG4gICAgICAgIHRoYXQuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICAgICAgdHJpZ2dlckV2ZW50KCdzdG9wYXV0b3BsYXknKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vLy9jb25zb2xlLmxvZygnY2hhbmdlQXV0b3BsYXkgY29udGludWUnKTtcblxuICAgIGlmICghdGhhdC5hdXRvcGxheSkge1xuICAgICAgdGhhdC5hdXRvcGxheSA9IHRydWU7XG4gICAgICB0cmlnZ2VyRXZlbnQoJ3N0YXJ0YXV0b3BsYXknKTtcbiAgICB9XG5cbiAgICB2YXIgX2FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG5cblxuICAgIHZhciBmcmFtZURhdGEgPSBhY3RpdmVGcmFtZVtTVEFHRV9GUkFNRV9LRVldLmRhdGEoKTtcbiAgICBjaGFuZ2VBdXRvcGxheS53ID0gd2FpdEZvcihmdW5jdGlvbiAoKSB7XG4gICAgICAvLy8vY29uc29sZS5sb2coJ3dhaXQgZm9yIHRoZSBzdGF0ZSBvZiB0aGUgY3VycmVudCBmcmFtZScpO1xuICAgICAgcmV0dXJuIGZyYW1lRGF0YS5zdGF0ZSB8fCBfYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4O1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vLy9jb25zb2xlLmxvZygndGhlIGN1cnJlbnQgZnJhbWUgaXMgcmVhZHknKTtcbiAgICAgIGNoYW5nZUF1dG9wbGF5LnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8vL2NvbnNvbGUubG9nKCdjaGFuZ2VBdXRvcGxheS50IHNldFRpbWVvdXQnLCBwYXVzZWRBdXRvcGxheUZMQUcsIF9hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpO1xuICAgICAgICBpZiAocGF1c2VkQXV0b3BsYXlGTEFHIHx8IF9hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHJldHVybjtcblxuICAgICAgICB2YXIgX25leHRBdXRvcGxheUluZGV4ID0gbmV4dEF1dG9wbGF5SW5kZXgsXG4gICAgICAgICAgICBuZXh0RnJhbWVEYXRhID0gZGF0YVtfbmV4dEF1dG9wbGF5SW5kZXhdW1NUQUdFX0ZSQU1FX0tFWV0uZGF0YSgpO1xuXG4gICAgICAgIGNoYW5nZUF1dG9wbGF5LncgPSB3YWl0Rm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLy8vY29uc29sZS5sb2coJ3dhaXQgZm9yIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBmcmFtZScpO1xuICAgICAgICAgIHJldHVybiBuZXh0RnJhbWVEYXRhLnN0YXRlIHx8IF9uZXh0QXV0b3BsYXlJbmRleCAhPT0gbmV4dEF1dG9wbGF5SW5kZXg7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocGF1c2VkQXV0b3BsYXlGTEFHIHx8IF9uZXh0QXV0b3BsYXlJbmRleCAhPT0gbmV4dEF1dG9wbGF5SW5kZXgpIHJldHVybjtcbiAgICAgICAgICB0aGF0LnNob3cob19sb29wID8gZ2V0RGlyZWN0aW9uU2lnbighb19ydGwpIDogbmV4dEF1dG9wbGF5SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIG9wdHMuYXV0b3BsYXkpO1xuICAgIH0pO1xuXG4gIH1cblxuICB0aGF0LnN0YXJ0QXV0b3BsYXkgPSBmdW5jdGlvbiAoaW50ZXJ2YWwpIHtcbiAgICBpZiAodGhhdC5hdXRvcGxheSkgcmV0dXJuIHRoaXM7XG4gICAgcGF1c2VkQXV0b3BsYXlGTEFHID0gc3RvcHBlZEF1dG9wbGF5RkxBRyA9IGZhbHNlO1xuICAgIHNldEF1dG9wbGF5SW50ZXJ2YWwoaW50ZXJ2YWwgfHwgb3B0cy5hdXRvcGxheSk7XG4gICAgY2hhbmdlQXV0b3BsYXkoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHRoYXQuc3RvcEF1dG9wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGF0LmF1dG9wbGF5KSB7XG4gICAgICBwYXVzZWRBdXRvcGxheUZMQUcgPSBzdG9wcGVkQXV0b3BsYXlGTEFHID0gdHJ1ZTtcbiAgICAgIGNoYW5nZUF1dG9wbGF5KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHRoYXQuc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgLy8vL2NvbnNvbGUubG9nKCd0aGF0LnNob3cnKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3RoYXQuc2hvdyBwcmVwYXJlJyk7XG4gICAgdmFyIGluZGV4O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgaW5kZXggPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IG9wdGlvbnMuaW5kZXg7XG4gICAgfVxuXG4gICAgaW5kZXggPSBpbmRleCA9PT0gJz4nID8gZGlydHlJbmRleCArIDEgOiBpbmRleCA9PT0gJzwnID8gZGlydHlJbmRleCAtIDEgOiBpbmRleCA9PT0gJzw8JyA/IDAgOiBpbmRleCA9PT0gJz4+JyA/IHNpemUgLSAxIDogaW5kZXg7XG4gICAgaW5kZXggPSBpc05hTihpbmRleCkgPyBnZXRJbmRleEZyb21IYXNoKGluZGV4LCBkYXRhLCB0cnVlKSA6IGluZGV4O1xuICAgIGluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJyA/IGFjdGl2ZUluZGV4IHx8IDAgOiBpbmRleDtcblxuICAgIHRoYXQuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCA9IGVkZ2VJbmRleChpbmRleCk7XG4gICAgcHJldkluZGV4ID0gZ2V0UHJldkluZGV4KGFjdGl2ZUluZGV4KTtcbiAgICBuZXh0SW5kZXggPSBnZXROZXh0SW5kZXgoYWN0aXZlSW5kZXgpO1xuICAgIG5leHRBdXRvcGxheUluZGV4ID0gbm9ybWFsaXplSW5kZXgoYWN0aXZlSW5kZXggKyAob19ydGwgPyAtMSA6IDEpKTtcbiAgICBhY3RpdmVJbmRleGVzID0gW2FjdGl2ZUluZGV4LCBwcmV2SW5kZXgsIG5leHRJbmRleF07XG5cbiAgICBkaXJ0eUluZGV4ID0gb19sb29wID8gaW5kZXggOiBhY3RpdmVJbmRleDtcblxuICAgIHZhciBkaWZmSW5kZXggPSBNYXRoLmFicyhsYXN0QWN0aXZlSW5kZXggLSBkaXJ0eUluZGV4KSxcbiAgICAgICAgdGltZSA9IGdldE51bWJlcihvcHRpb25zLnRpbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5taW4ob190cmFuc2l0aW9uRHVyYXRpb24gKiAoMSArIChkaWZmSW5kZXggLSAxKSAvIDEyKSwgb190cmFuc2l0aW9uRHVyYXRpb24gKiAyKTtcbiAgICAgICAgfSksXG4gICAgICAgIG92ZXJQb3MgPSBvcHRpb25zLm92ZXJQb3M7XG5cbiAgICBpZiAob3B0aW9ucy5zbG93KSB0aW1lICo9IDEwO1xuXG4gICAgdmFyIF9hY3RpdmVGcmFtZSA9IGFjdGl2ZUZyYW1lO1xuICAgIHRoYXQuYWN0aXZlRnJhbWUgPSBhY3RpdmVGcmFtZSA9IGRhdGFbYWN0aXZlSW5kZXhdO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgndGhhdC5zaG93IHByZXBhcmUnKTtcblxuICAgIHZhciBzaWxlbnQgPSBfYWN0aXZlRnJhbWUgPT09IGFjdGl2ZUZyYW1lICYmICFvcHRpb25zLnVzZXI7XG5cbiAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgndW5sb2FkVmlkZW8nKTtcbiAgICB1bmxvYWRWaWRlbygkdmlkZW9QbGF5aW5nLCBhY3RpdmVGcmFtZS5pICE9PSBkYXRhW25vcm1hbGl6ZUluZGV4KHJlcG9zaXRpb25JbmRleCldLmkpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgndW5sb2FkVmlkZW8nKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ2ZyYW1lRHJhdycpO1xuICAgIGZyYW1lRHJhdyhhY3RpdmVJbmRleGVzLCAnc3RhZ2UnKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ2ZyYW1lRHJhdycpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgnc3RhZ2VGcmFtZVBvc2l0aW9uJyk7XG4gICAgc3RhZ2VGcmFtZVBvc2l0aW9uKFNMT1cgPyBbZGlydHlJbmRleF0gOiBbZGlydHlJbmRleCwgZ2V0UHJldkluZGV4KGRpcnR5SW5kZXgpLCBnZXROZXh0SW5kZXgoZGlydHlJbmRleCldKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3N0YWdlRnJhbWVQb3NpdGlvbicpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgndXBkYXRlVG91Y2hUYWlscycpO1xuICAgIHVwZGF0ZVRvdWNoVGFpbHMoJ2dvJywgdHJ1ZSk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCd1cGRhdGVUb3VjaFRhaWxzJyk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lKCd0cmlnZ2VyRXZlbnQnKTtcblxuICAgIHNpbGVudCB8fCB0cmlnZ2VyRXZlbnQoJ3Nob3cnLCB7XG4gICAgICB1c2VyOiBvcHRpb25zLnVzZXIsXG4gICAgICB0aW1lOiB0aW1lXG4gICAgfSk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCd0cmlnZ2VyRXZlbnQnKTtcbiAgICAvL30sIDApO1xuXG4gICAgLy8vLy8vY29uc29sZS50aW1lKCdiaW5kIG9uRW5kJyk7XG5cbiAgICBwYXVzZWRBdXRvcGxheUZMQUcgPSB0cnVlO1xuXG4gICAgdmFyIG9uRW5kID0gdGhhdC5zaG93Lm9uRW5kID0gZnVuY3Rpb24gKHNraXBSZXBvc2l0aW9uKSB7XG4gICAgICBpZiAob25FbmQub2spIHJldHVybjtcbiAgICAgIG9uRW5kLm9rID0gdHJ1ZTtcblxuICAgICAgc2tpcFJlcG9zaXRpb24gfHwgc3RhZ2VTaGFmdFJlcG9zaXRpb24odHJ1ZSk7XG5cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRyaWdnZXJFdmVudCgnc2hvd2VuZCcsIHtcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vLy9jb25zb2xlLmxvZygnb190cmFuc2l0aW9uJywgb190cmFuc2l0aW9uKTtcblxuICAgICAgaWYgKCFza2lwUmVwb3NpdGlvbiAmJiBvX3RyYW5zaXRpb24gJiYgb190cmFuc2l0aW9uICE9PSBvcHRzLnRyYW5zaXRpb24pIHtcbiAgICAgICAgLy8vL2NvbnNvbGUubG9nKCdzZXQgdHJhbnNpdGlvbiBiYWNrIHRvOiAnICsgb190cmFuc2l0aW9uKTtcbiAgICAgICAgdGhhdC5zZXRPcHRpb25zKHt0cmFuc2l0aW9uOiBvX3RyYW5zaXRpb259KTtcbiAgICAgICAgb190cmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlRm90b3JhbWFTdGF0ZSgpO1xuICAgICAgbG9hZEltZyhhY3RpdmVJbmRleGVzLCAnc3RhZ2UnKTtcblxuICAgICAgdXBkYXRlVG91Y2hUYWlscygnZ28nLCBmYWxzZSk7XG4gICAgICBzdGFnZVdoZWVsVXBkYXRlKCk7XG5cbiAgICAgIHN0YWdlQ3Vyc29yKCk7XG4gICAgICByZWxlYXNlQXV0b3BsYXkoKTtcbiAgICAgIGNoYW5nZUF1dG9wbGF5KCk7XG4gICAgfTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ2JpbmQgb25FbmQnKTtcblxuICAgIGlmICghb19mYWRlKSB7XG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3NsaWRlJyk7XG4gICAgICBzbGlkZSgkc3RhZ2VTaGFmdCwge1xuICAgICAgICBwb3M6IC1nZXRQb3NCeUluZGV4KGRpcnR5SW5kZXgsIG1lYXN1cmVzLncsIG9wdHMubWFyZ2luLCByZXBvc2l0aW9uSW5kZXgpLFxuICAgICAgICBvdmVyUG9zOiBvdmVyUG9zLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBvbkVuZDogb25FbmQvKixcbiAgICAgICAgXzAwMTogdHJ1ZSovXG4gICAgICB9KTtcbiAgICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnc2xpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyICRhY3RpdmVGcmFtZSA9IGFjdGl2ZUZyYW1lW1NUQUdFX0ZSQU1FX0tFWV0sXG4gICAgICAgICAgJHByZXZBY3RpdmVGcmFtZSA9IGFjdGl2ZUluZGV4ICE9PSBsYXN0QWN0aXZlSW5kZXggPyBkYXRhW2xhc3RBY3RpdmVJbmRleF1bU1RBR0VfRlJBTUVfS0VZXSA6IG51bGw7XG5cbiAgICAgIGZhZGUoJGFjdGl2ZUZyYW1lLCAkcHJldkFjdGl2ZUZyYW1lLCAkc3RhZ2VGcmFtZSwge1xuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBtZXRob2Q6IG9wdHMudHJhbnNpdGlvbixcbiAgICAgICAgb25FbmQ6IG9uRW5kXG4gICAgICB9LCBmYWRlU3RhY2spO1xuICAgIH1cblxuICAgIC8vLy8vL2NvbnNvbGUudGltZSgnYXJyc1VwZGF0ZScpO1xuICAgIGFycnNVcGRhdGUoKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ2FycnNVcGRhdGUnKTtcblxuICAgIGlmIChvX25hdikge1xuICAgICAgLy8vLy8vY29uc29sZS50aW1lKCduYXZVcGRhdGUnKTtcbiAgICAgIG5hdlVwZGF0ZSgpO1xuICAgICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCduYXZVcGRhdGUnKTtcblxuICAgICAgLy8vLy8vY29uc29sZS50aW1lKCdzbGlkZU5hdlNoYWZ0Jyk7XG4gICAgICB2YXIgZ3Vlc3NJbmRleCA9IGxpbWl0SW5kZXgoYWN0aXZlSW5kZXggKyBtaW5NYXhMaW1pdChkaXJ0eUluZGV4IC0gbGFzdEFjdGl2ZUluZGV4LCAtMSwgMSkpO1xuICAgICAgc2xpZGVOYXZTaGFmdCh7dGltZTogdGltZSwgY29vOiBndWVzc0luZGV4ICE9PSBhY3RpdmVJbmRleCAmJiBvcHRpb25zLmNvbywgZ3Vlc3NJbmRleDogdHlwZW9mIG9wdGlvbnMuY29vICE9PSAndW5kZWZpbmVkJyA/IGd1ZXNzSW5kZXggOiBhY3RpdmVJbmRleCwga2VlcDogc2lsZW50fSk7XG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3NsaWRlTmF2U2hhZnQnKTtcblxuICAgICAgLy8vLy8vY29uc29sZS50aW1lKCdzbGlkZVRodW1iQm9yZGVyJyk7XG4gICAgICBpZiAob19uYXZUaHVtYnMpIHNsaWRlVGh1bWJCb3JkZXIodGltZSk7XG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3NsaWRlVGh1bWJCb3JkZXInKTtcbiAgICB9XG5cbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3RoYXQuc2hvdyBlbmQnKTtcbiAgICBzaG93ZWRGTEFHID0gdHlwZW9mIGxhc3RBY3RpdmVJbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgbGFzdEFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleDtcbiAgICBsYXN0QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICBvcHRzLmhhc2ggJiYgc2hvd2VkRkxBRyAmJiAhdGhhdC5lcSAmJiBzZXRIYXNoKGFjdGl2ZUZyYW1lLmlkIHx8IGFjdGl2ZUluZGV4ICsgMSk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCd0aGF0LnNob3cgZW5kJyk7XG5cbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3RoYXQuc2hvdycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhhdC5yZXF1ZXN0RnVsbFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob19hbGxvd0Z1bGxTY3JlZW4gJiYgIXRoYXQuZnVsbFNjcmVlbikge1xuICAgICAgc2Nyb2xsVG9wID0gJFdJTkRPVy5zY3JvbGxUb3AoKTtcbiAgICAgIHNjcm9sbExlZnQgPSAkV0lORE9XLnNjcm9sbExlZnQoKTtcblxuICAgICAgbG9ja1Njcm9sbCgkV0lORE9XKTtcblxuICAgICAgdXBkYXRlVG91Y2hUYWlscygneCcsIHRydWUpO1xuXG4gICAgICBtZWFzdXJlc1N0YXNoID0gJC5leHRlbmQoe30sIG1lYXN1cmVzKTtcblxuICAgICAgJGZvdG9yYW1hXG4gICAgICAgICAgLmFkZENsYXNzKGZ1bGxzY3JlZW5DbGFzcylcbiAgICAgICAgICAuYXBwZW5kVG8oJEJPRFkuYWRkQ2xhc3MoX2Z1bGxzY3JlZW5DbGFzcykpO1xuXG4gICAgICAkSFRNTC5hZGRDbGFzcyhfZnVsbHNjcmVlbkNsYXNzKTtcblxuICAgICAgdW5sb2FkVmlkZW8oJHZpZGVvUGxheWluZywgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgIHRoYXQuZnVsbFNjcmVlbiA9IHRydWU7XG5cbiAgICAgIGlmIChvX25hdGl2ZUZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZnVsbFNjcmVlbkFwaS5yZXF1ZXN0KGZvdG9yYW1hKTtcbiAgICAgIH1cblxuICAgICAgdGhhdC5yZXNpemUoKTtcbiAgICAgIGxvYWRJbWcoYWN0aXZlSW5kZXhlcywgJ3N0YWdlJyk7XG4gICAgICB1cGRhdGVGb3RvcmFtYVN0YXRlKCk7XG5cbiAgICAgIHRyaWdnZXJFdmVudCgnZnVsbHNjcmVlbmVudGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FuY2VsRnVsbFNjcmVlbiAoKSB7XG4gICAgaWYgKHRoYXQuZnVsbFNjcmVlbikge1xuICAgICAgdGhhdC5mdWxsU2NyZWVuID0gZmFsc2U7XG5cbiAgICAgIGlmIChGVUxMU0NSRUVOKSB7XG4gICAgICAgIGZ1bGxTY3JlZW5BcGkuY2FuY2VsKGZvdG9yYW1hKTtcbiAgICAgIH1cblxuICAgICAgJEJPRFkucmVtb3ZlQ2xhc3MoX2Z1bGxzY3JlZW5DbGFzcyk7XG4gICAgICAkSFRNTC5yZW1vdmVDbGFzcyhfZnVsbHNjcmVlbkNsYXNzKTtcblxuICAgICAgJGZvdG9yYW1hXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKGZ1bGxzY3JlZW5DbGFzcylcbiAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoJGFuY2hvcik7XG5cbiAgICAgIG1lYXN1cmVzID0gJC5leHRlbmQoe30sIG1lYXN1cmVzU3Rhc2gpO1xuXG4gICAgICB1bmxvYWRWaWRlbygkdmlkZW9QbGF5aW5nLCB0cnVlLCB0cnVlKTtcblxuICAgICAgdXBkYXRlVG91Y2hUYWlscygneCcsIGZhbHNlKTtcblxuICAgICAgdGhhdC5yZXNpemUoKTtcbiAgICAgIGxvYWRJbWcoYWN0aXZlSW5kZXhlcywgJ3N0YWdlJyk7XG5cbiAgICAgIGxvY2tTY3JvbGwoJFdJTkRPVywgc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTtcblxuICAgICAgdHJpZ2dlckV2ZW50KCdmdWxsc2NyZWVuZXhpdCcpO1xuICAgIH1cbiAgfVxuXG4gIHRoYXQuY2FuY2VsRnVsbFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob19uYXRpdmVGdWxsU2NyZWVuICYmIGZ1bGxTY3JlZW5BcGkuaXMoKSkge1xuICAgICAgZnVsbFNjcmVlbkFwaS5jYW5jZWwoZG9jdW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhhdC50b2dnbGVGdWxsU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGF0Wyh0aGF0LmZ1bGxTY3JlZW4gPyAnY2FuY2VsJyA6ICdyZXF1ZXN0JykgKyAnRnVsbFNjcmVlbiddKCk7XG4gIH07XG5cbiAgYWRkRXZlbnQoZG9jdW1lbnQsIGZ1bGxTY3JlZW5BcGkuZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGF0YSAmJiAhZnVsbFNjcmVlbkFwaS5pcygpICYmICEkdmlkZW9QbGF5aW5nKSB7XG4gICAgICBjYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgfVxuICB9KTtcblxuICB0aGF0LnJlc2l6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gdGhpcztcblxuICAgIHZhciB0aW1lID0gYXJndW1lbnRzWzFdIHx8IDAsXG4gICAgICAgIHNldEZMQUcgPSBhcmd1bWVudHNbMl07XG5cbiAgICBleHRlbmRNZWFzdXJlcyghdGhhdC5mdWxsU2NyZWVuID8gb3B0aW9uc1RvTG93ZXJDYXNlKG9wdGlvbnMpIDoge3dpZHRoOiAnMTAwJScsIG1heHdpZHRoOiBudWxsLCBtaW53aWR0aDogbnVsbCwgaGVpZ2h0OiAnMTAwJScsIG1heGhlaWdodDogbnVsbCwgbWluaGVpZ2h0OiBudWxsfSwgW21lYXN1cmVzLCBzZXRGTEFHIHx8IHRoYXQuZnVsbFNjcmVlbiB8fCBvcHRzXSk7XG5cbiAgICB2YXIgd2lkdGggPSBtZWFzdXJlcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gbWVhc3VyZXMuaGVpZ2h0LFxuICAgICAgICByYXRpbyA9IG1lYXN1cmVzLnJhdGlvLFxuICAgICAgICB3aW5kb3dIZWlnaHQgPSAkV0lORE9XLmhlaWdodCgpIC0gKG9fbmF2ID8gJG5hdi5oZWlnaHQoKSA6IDApO1xuXG4gICAgaWYgKG1lYXN1cmVJc1ZhbGlkKHdpZHRoKSkge1xuICAgICAgJHdyYXBcbiAgICAgICAgICAuYWRkQ2xhc3Mod3JhcE9ubHlBY3RpdmVDbGFzcylcbiAgICAgICAgICAuY3NzKHt3aWR0aDogd2lkdGgsIG1pbldpZHRoOiBtZWFzdXJlcy5taW53aWR0aCB8fCAwLCBtYXhXaWR0aDogbWVhc3VyZXMubWF4d2lkdGggfHwgTUFYX1dJRFRIfSk7XG5cbiAgICAgIHdpZHRoID0gbWVhc3VyZXMuVyA9IG1lYXN1cmVzLncgPSAkd3JhcC53aWR0aCgpO1xuICAgICAgbWVhc3VyZXMubncgPSBvX25hdiAmJiBudW1iZXJGcm9tV2hhdGV2ZXIob3B0cy5uYXZ3aWR0aCwgd2lkdGgpIHx8IHdpZHRoO1xuXG4gICAgICBpZiAob3B0cy5nbGltcHNlKSB7XG4gICAgICAgIC8vIEdsaW1wc2VcbiAgICAgICAgbWVhc3VyZXMudyAtPSBNYXRoLnJvdW5kKChudW1iZXJGcm9tV2hhdGV2ZXIob3B0cy5nbGltcHNlLCB3aWR0aCkgfHwgMCkgKiAyKTtcbiAgICAgIH1cblxuICAgICAgJHN0YWdlU2hhZnQuY3NzKHt3aWR0aDogbWVhc3VyZXMudywgbWFyZ2luTGVmdDogKG1lYXN1cmVzLlcgLSBtZWFzdXJlcy53KSAvIDJ9KTtcblxuICAgICAgLy8vLy8vY29uc29sZS5sb2coJ21lYXN1cmVzLlcnLCBtZWFzdXJlcy5XKTtcbiAgICAgIC8vLy8vL2NvbnNvbGUubG9nKCdtZWFzdXJlcy53JywgbWVhc3VyZXMudyk7XG5cbiAgICAgIGhlaWdodCA9IG51bWJlckZyb21XaGF0ZXZlcihoZWlnaHQsIHdpbmRvd0hlaWdodCk7XG5cbiAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAocmF0aW8gJiYgd2lkdGggLyByYXRpbyk7XG5cbiAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgaGVpZ2h0ID0gbWVhc3VyZXMuaCA9IE1hdGgucm91bmQobWluTWF4TGltaXQoaGVpZ2h0LCBudW1iZXJGcm9tV2hhdGV2ZXIobWVhc3VyZXMubWluaGVpZ2h0LCB3aW5kb3dIZWlnaHQpLCBudW1iZXJGcm9tV2hhdGV2ZXIobWVhc3VyZXMubWF4aGVpZ2h0LCB3aW5kb3dIZWlnaHQpKSk7XG5cbiAgICAgICAgJHN0YWdlXG4gICAgICAgICAgICAuc3RvcCgpXG4gICAgICAgICAgICAuYW5pbWF0ZSh7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH0sIHRpbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJHdyYXAucmVtb3ZlQ2xhc3Mod3JhcE9ubHlBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBzdGFnZVNoYWZ0UmVwb3NpdGlvbigpO1xuXG4gICAgICAgIGlmIChvX25hdikge1xuICAgICAgICAgICRuYXZcbiAgICAgICAgICAgICAgLnN0b3AoKVxuICAgICAgICAgICAgICAuYW5pbWF0ZSh7d2lkdGg6IG1lYXN1cmVzLm53fSwgdGltZSk7XG5cbiAgICAgICAgICBzbGlkZU5hdlNoYWZ0KHtndWVzc0luZGV4OiBhY3RpdmVJbmRleCwgdGltZTogdGltZSwga2VlcDogdHJ1ZX0pO1xuICAgICAgICAgIGlmIChvX25hdlRodW1icyAmJiBmcmFtZUFwcGVuZC5uYXYpIHNsaWRlVGh1bWJCb3JkZXIodGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZWFzdXJlc1NldEZMQUcgPSBzZXRGTEFHIHx8IHRydWU7XG5cbiAgICAgICAgcmVhZHkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFnZUxlZnQgPSAkc3RhZ2Uub2Zmc2V0KCkubGVmdDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHRoYXQuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgJC5leHRlbmQob3B0cywgb3B0aW9ucyk7XG4gICAgcmVzZXQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGF0LnNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGF0YSAmJiBzaHVmZmxlKGRhdGEpICYmIHJlc2V0KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0U2hhZG93ICgkZWwsIGVkZ2UpIHtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3NldFNoYWRvdycpO1xuICAgIGlmIChvX3NoYWRvd3MpIHtcbiAgICAgICRlbC5yZW1vdmVDbGFzcyhzaGFkb3dzTGVmdENsYXNzICsgJyAnICsgc2hhZG93c1JpZ2h0Q2xhc3MpO1xuICAgICAgZWRnZSAmJiAhJHZpZGVvUGxheWluZyAmJiAkZWwuYWRkQ2xhc3MoZWRnZS5yZXBsYWNlKC9efFxccy9nLCAnICcgKyBzaGFkb3dzQ2xhc3MgKyAnLS0nKSk7XG4gICAgfVxuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnc2V0U2hhZG93Jyk7XG4gIH1cblxuICB0aGF0LmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhhdC5jYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgdGhhdC5zdG9wQXV0b3BsYXkoKTtcblxuICAgIGRhdGEgPSB0aGF0LmRhdGEgPSBudWxsO1xuXG4gICAgYXBwZW5kRWxlbWVudHMoKTtcblxuICAgIGFjdGl2ZUluZGV4ZXMgPSBbXTtcbiAgICBkZXRhY2hGcmFtZXMoU1RBR0VfRlJBTUVfS0VZKTtcblxuICAgIHJlc2V0Lm9rID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGF0LnBsYXlWaWRlbyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGF0YUZyYW1lID0gYWN0aXZlRnJhbWUsXG4gICAgICAgIHZpZGVvID0gZGF0YUZyYW1lLnZpZGVvLFxuICAgICAgICBfYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcblxuICAgIGlmICh0eXBlb2YgdmlkZW8gPT09ICdvYmplY3QnICYmIGRhdGFGcmFtZS52aWRlb1JlYWR5KSB7XG4gICAgICBvX25hdGl2ZUZ1bGxTY3JlZW4gJiYgdGhhdC5mdWxsU2NyZWVuICYmIHRoYXQuY2FuY2VsRnVsbFNjcmVlbigpO1xuXG4gICAgICB3YWl0Rm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICFmdWxsU2NyZWVuQXBpLmlzKCkgfHwgX2FjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleDtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9hY3RpdmVJbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICBkYXRhRnJhbWUuJHZpZGVvID0gZGF0YUZyYW1lLiR2aWRlbyB8fCAkKCQuRm90b3JhbWEuanN0LnZpZGVvKHZpZGVvKSk7XG4gICAgICAgICAgZGF0YUZyYW1lLiR2aWRlby5hcHBlbmRUbyhkYXRhRnJhbWVbU1RBR0VfRlJBTUVfS0VZXSk7XG5cbiAgICAgICAgICAkd3JhcC5hZGRDbGFzcyh3cmFwVmlkZW9DbGFzcyk7XG4gICAgICAgICAgJHZpZGVvUGxheWluZyA9IGRhdGFGcmFtZS4kdmlkZW87XG5cbiAgICAgICAgICBzdGFnZU5vTW92ZSgpO1xuXG4gICAgICAgICAgJGFycnMuYmx1cigpO1xuICAgICAgICAgICRmdWxsc2NyZWVuSWNvbi5ibHVyKCk7XG5cbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoJ2xvYWR2aWRlbycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGF0LnN0b3BWaWRlbyA9IGZ1bmN0aW9uICgpIHtcbiAgICB1bmxvYWRWaWRlbygkdmlkZW9QbGF5aW5nLCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBmdW5jdGlvbiB1bmxvYWRWaWRlbyAoJHZpZGVvLCB1bmxvYWRBY3RpdmVGTEFHLCByZWxlYXNlQXV0b3BsYXlGTEFHKSB7XG4gICAgaWYgKHVubG9hZEFjdGl2ZUZMQUcpIHtcbiAgICAgICR3cmFwLnJlbW92ZUNsYXNzKHdyYXBWaWRlb0NsYXNzKTtcbiAgICAgICR2aWRlb1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgc3RhZ2VOb01vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoJHZpZGVvICYmICR2aWRlbyAhPT0gJHZpZGVvUGxheWluZykge1xuICAgICAgJHZpZGVvLnJlbW92ZSgpO1xuICAgICAgdHJpZ2dlckV2ZW50KCd1bmxvYWR2aWRlbycpO1xuICAgIH1cblxuICAgIGlmIChyZWxlYXNlQXV0b3BsYXlGTEFHKSB7XG4gICAgICByZWxlYXNlQXV0b3BsYXkoKTtcbiAgICAgIGNoYW5nZUF1dG9wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ29udHJvbHNDbGFzcyAoRkxBRykge1xuICAgICR3cmFwLnRvZ2dsZUNsYXNzKHdyYXBOb0NvbnRyb2xzQ2xhc3MsIEZMQUcpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhZ2VDdXJzb3IgKGUpIHtcbiAgICBpZiAoc3RhZ2VTaGFmdFRvdWNoVGFpbC5mbG93KSByZXR1cm47XG5cbiAgICB2YXIgeCA9IGUgPyBlLnBhZ2VYIDogc3RhZ2VDdXJzb3IueCxcbiAgICAgICAgcG9pbnRlckZMQUcgPSB4ICYmICFkaXNhYmxlRGlycmVjdGlvbihnZXREaXJlY3Rpb24oeCkpICYmIG9wdHMuY2xpY2s7XG5cbiAgICBpZiAoc3RhZ2VDdXJzb3IucCAhPT0gcG9pbnRlckZMQUdcbiAgICAgICAgJiYgJHN0YWdlLnRvZ2dsZUNsYXNzKHBvaW50ZXJDbGFzcywgcG9pbnRlckZMQUcpKSB7XG4gICAgICBzdGFnZUN1cnNvci5wID0gcG9pbnRlckZMQUc7XG4gICAgICBzdGFnZUN1cnNvci54ID0geDtcbiAgICB9XG4gIH1cblxuICAkc3RhZ2Uub24oJ21vdXNlbW92ZScsIHN0YWdlQ3Vyc29yKTtcblxuICBmdW5jdGlvbiBjbGlja1RvU2hvdyAoc2hvd09wdGlvbnMpIHtcbiAgICBjbGVhclRpbWVvdXQoY2xpY2tUb1Nob3cudCk7XG5cbiAgICBpZiAob3B0cy5jbGlja3RyYW5zaXRpb24gJiYgb3B0cy5jbGlja3RyYW5zaXRpb24gIT09IG9wdHMudHJhbnNpdGlvbikge1xuICAgICAgLy8vL2NvbnNvbGUubG9nKCdjaGFuZ2UgdHJhbnNpdGlvbiB0bzogJyArIG9wdHMuY2xpY2t0cmFuc2l0aW9uKTtcblxuICAgICAgLy8gdGhpcyB0aW1lb3V0IGlzIGZvciB5aWVsZCBldmVudHMgZmxvd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHNhdmUgb3JpZ2luYWwgdHJhbnNpdGlvbiBmb3IgbGF0ZXJcbiAgICAgICAgdmFyIF9vX3RyYW5zaXRpb24gPSBvcHRzLnRyYW5zaXRpb247XG5cbiAgICAgICAgdGhhdC5zZXRPcHRpb25zKHt0cmFuc2l0aW9uOiBvcHRzLmNsaWNrdHJhbnNpdGlvbn0pO1xuXG4gICAgICAgIC8vIG5vdyBzYWZlIHRvIHBhc3MgYmFzZSB0cmFuc2l0aW9uIHRvIG9fdHJhbnNpdGlvbiwgc28gdGhhdC5zaG93IHdpbGwgcmVzdG9yIGl0XG4gICAgICAgIG9fdHJhbnNpdGlvbiA9IF9vX3RyYW5zaXRpb247XG4gICAgICAgIC8vIHRoaXMgdGltZW91dCBpcyBoZXJlIHRvIHByZXZlbnQgamVya2luZyBpbiBzb21lIGJyb3dzZXJzXG4gICAgICAgIGNsaWNrVG9TaG93LnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGF0LnNob3coc2hvd09wdGlvbnMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93KHNob3dPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblN0YWdlVGFwIChlLCB0b2dnbGVDb250cm9sc0ZMQUcpIHtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ29uU3RhZ2VUYXAnKTtcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICR0YXJnZXQgPSAkKHRhcmdldCk7XG5cbiAgICBpZiAoJHRhcmdldC5oYXNDbGFzcyh2aWRlb1BsYXlDbGFzcykpIHtcbiAgICAgIHRoYXQucGxheVZpZGVvKCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IGZ1bGxzY3JlZW5JY29uKSB7XG4gICAgICB0aGF0LnRvZ2dsZUZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKCR2aWRlb1BsYXlpbmcpIHtcbiAgICAgIHRhcmdldCA9PT0gdmlkZW9DbG9zZSAmJiB1bmxvYWRWaWRlbygkdmlkZW9QbGF5aW5nLCB0cnVlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRvZ2dsZUNvbnRyb2xzRkxBRykge1xuICAgICAgICB0b2dnbGVDb250cm9sc0NsYXNzKCk7XG4gICAgICB9IGVsc2UgaWYgKG9wdHMuY2xpY2spIHtcblxuICAgICAgICBjbGlja1RvU2hvdyh7aW5kZXg6IGUuc2hpZnRLZXkgfHwgZ2V0RGlyZWN0aW9uU2lnbihnZXREaXJlY3Rpb24oZS5feCkpLCBzbG93OiBlLmFsdEtleSwgdXNlcjogdHJ1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ29uU3RhZ2VUYXAnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvdWNoVGFpbHMgKGtleSwgdmFsdWUpIHtcbiAgICBzdGFnZVNoYWZ0VG91Y2hUYWlsW2tleV0gPSBuYXZTaGFmdFRvdWNoVGFpbFtrZXldID0gdmFsdWU7XG4gIH1cblxuICBzdGFnZVNoYWZ0VG91Y2hUYWlsID0gbW92ZU9uVG91Y2goJHN0YWdlU2hhZnQsIHtcbiAgICBvblN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgb25Nb3ZlOiBmdW5jdGlvbiAoZSwgcmVzdWx0KSB7XG4gICAgICBzZXRTaGFkb3coJHN0YWdlLCByZXN1bHQuZWRnZSk7XG4gICAgfSxcbiAgICBvblRvdWNoRW5kOiBvblRvdWNoRW5kLFxuICAgIG9uRW5kOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3N0YWdlU2hhZnRUb3VjaFRhaWwub25FbmQnKTtcbiAgICAgIHNldFNoYWRvdygkc3RhZ2UpO1xuXG4gICAgICAvLy8vLy9jb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcblxuICAgICAgdmFyIHRvZ2dsZUNvbnRyb2xzRkxBRyA9IChNU19QT0lOVEVSICYmICFob3ZlckZMQUcgfHwgcmVzdWx0LnRvdWNoKSAmJiBvcHRzLmFycm93cyAmJiBvcHRzLmFycm93cyAhPT0gJ2Fsd2F5cyc7XG5cbiAgICAgIGlmIChyZXN1bHQubW92ZWQgfHwgKHRvZ2dsZUNvbnRyb2xzRkxBRyAmJiByZXN1bHQucG9zICE9PSByZXN1bHQubmV3UG9zICYmICFyZXN1bHQuY29udHJvbCkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeVBvcyhyZXN1bHQubmV3UG9zLCBtZWFzdXJlcy53LCBvcHRzLm1hcmdpbiwgcmVwb3NpdGlvbkluZGV4KTtcbiAgICAgICAgdGhhdC5zaG93KHtcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgdGltZTogb19mYWRlID8gb190cmFuc2l0aW9uRHVyYXRpb24gOiByZXN1bHQudGltZSxcbiAgICAgICAgICBvdmVyUG9zOiByZXN1bHQub3ZlclBvcyxcbiAgICAgICAgICB1c2VyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghcmVzdWx0LmFib3J0ZWQgJiYgIXJlc3VsdC5jb250cm9sKSB7XG4gICAgICAgIG9uU3RhZ2VUYXAocmVzdWx0LnN0YXJ0RXZlbnQsIHRvZ2dsZUNvbnRyb2xzRkxBRyk7XG4gICAgICB9XG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3N0YWdlU2hhZnRUb3VjaFRhaWwub25FbmQnKTtcbiAgICB9LFxuLy8gICAgZ2V0UG9zOiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgIHJldHVybiAtZ2V0UG9zQnlJbmRleChkaXJ0eUluZGV4LCBtZWFzdXJlcy53LCBvcHRzLm1hcmdpbiwgcmVwb3NpdGlvbkluZGV4KTtcbi8vICAgIH0sXG4gICAgLy9fMDAxOiB0cnVlLFxuICAgIHRpbWVMb3c6IDEsXG4gICAgdGltZUhpZ2g6IDEsXG4gICAgZnJpY3Rpb246IDIsXG4gICAgc2VsZWN0OiAnLicgKyBzZWxlY3RDbGFzcyArICcsIC4nICsgc2VsZWN0Q2xhc3MgKyAnIConLFxuICAgICR3cmFwOiAkc3RhZ2VcbiAgfSk7XG5cbiAgbmF2U2hhZnRUb3VjaFRhaWwgPSBtb3ZlT25Ub3VjaCgkbmF2U2hhZnQsIHtcbiAgICBvblN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgb25Nb3ZlOiBmdW5jdGlvbiAoZSwgcmVzdWx0KSB7XG4gICAgICBzZXRTaGFkb3coJG5hdiwgcmVzdWx0LmVkZ2UpO1xuICAgIH0sXG4gICAgb25Ub3VjaEVuZDogb25Ub3VjaEVuZCxcbiAgICBvbkVuZDogZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICBmdW5jdGlvbiBvbkVuZCAoKSB7XG4gICAgICAgIHNsaWRlTmF2U2hhZnQubCA9IHJlc3VsdC5uZXdQb3M7XG4gICAgICAgIHJlbGVhc2VBdXRvcGxheSgpO1xuICAgICAgICBjaGFuZ2VBdXRvcGxheSgpO1xuICAgICAgICB0aHVtYnNEcmF3KHJlc3VsdC5uZXdQb3MsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdC5tb3ZlZCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gcmVzdWx0LiR0YXJnZXQuY2xvc2VzdCgnLicgKyBuYXZGcmFtZUNsYXNzLCAkbmF2U2hhZnQpWzBdO1xuICAgICAgICB0YXJnZXQgJiYgb25OYXZGcmFtZUNsaWNrLmNhbGwodGFyZ2V0LCByZXN1bHQuc3RhcnRFdmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5wb3MgIT09IHJlc3VsdC5uZXdQb3MpIHtcbiAgICAgICAgcGF1c2VkQXV0b3BsYXlGTEFHID0gdHJ1ZTtcbiAgICAgICAgc2xpZGUoJG5hdlNoYWZ0LCB7XG4gICAgICAgICAgdGltZTogcmVzdWx0LnRpbWUsXG4gICAgICAgICAgcG9zOiByZXN1bHQubmV3UG9zLFxuICAgICAgICAgIG92ZXJQb3M6IHJlc3VsdC5vdmVyUG9zLFxuICAgICAgICAgIG9uRW5kOiBvbkVuZFxuICAgICAgICB9KTtcbiAgICAgICAgdGh1bWJzRHJhdyhyZXN1bHQubmV3UG9zKTtcbiAgICAgICAgb19zaGFkb3dzICYmIHNldFNoYWRvdygkbmF2LCBmaW5kU2hhZG93RWRnZShyZXN1bHQubmV3UG9zLCBuYXZTaGFmdFRvdWNoVGFpbC5taW4sIG5hdlNoYWZ0VG91Y2hUYWlsLm1heCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25FbmQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRpbWVMb3c6IC41LFxuICAgIHRpbWVIaWdoOiAyLFxuICAgIGZyaWN0aW9uOiA1LFxuICAgICR3cmFwOiAkbmF2XG4gIH0pO1xuXG4gIHN0YWdlV2hlZWxUYWlsID0gd2hlZWwoJHN0YWdlLCB7XG4gICAgc2hpZnQ6IHRydWUsXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChlLCBkaXJlY3Rpb24pIHtcbiAgICAgIC8vLy8vL2NvbnNvbGUubG9nKCd3aGVlbCAkc3RhZ2Ugb25FbmQnLCBkaXJlY3Rpb24pO1xuICAgICAgb25Ub3VjaFN0YXJ0KCk7XG4gICAgICBvblRvdWNoRW5kKCk7XG4gICAgICB0aGF0LnNob3coe2luZGV4OiBkaXJlY3Rpb24sIHNsb3c6IGUuYWx0S2V5fSlcbiAgICB9XG4gIH0pO1xuXG4gIG5hdldoZWVsVGFpbCA9IHdoZWVsKCRuYXYsIHtcbiAgICBvbkVuZDogZnVuY3Rpb24gKGUsIGRpcmVjdGlvbikge1xuICAgICAgLy8vLy8vY29uc29sZS5sb2coJ3doZWVsICRuYXYgb25FbmQnLCBkaXJlY3Rpb24pO1xuICAgICAgb25Ub3VjaFN0YXJ0KCk7XG4gICAgICBvblRvdWNoRW5kKCk7XG4gICAgICB2YXIgbmV3UG9zID0gc3RvcCgkbmF2U2hhZnQpICsgZGlyZWN0aW9uICogLjI1O1xuICAgICAgJG5hdlNoYWZ0LmNzcyhnZXRUcmFuc2xhdGUobWluTWF4TGltaXQobmV3UG9zLCBuYXZTaGFmdFRvdWNoVGFpbC5taW4sIG5hdlNoYWZ0VG91Y2hUYWlsLm1heCkpKTtcbiAgICAgIG9fc2hhZG93cyAmJiBzZXRTaGFkb3coJG5hdiwgZmluZFNoYWRvd0VkZ2UobmV3UG9zLCBuYXZTaGFmdFRvdWNoVGFpbC5taW4sIG5hdlNoYWZ0VG91Y2hUYWlsLm1heCkpO1xuICAgICAgbmF2V2hlZWxUYWlsLnByZXZlbnQgPSB7JzwnOiBuZXdQb3MgPj0gbmF2U2hhZnRUb3VjaFRhaWwubWF4LCAnPic6IG5ld1BvcyA8PSBuYXZTaGFmdFRvdWNoVGFpbC5taW59O1xuICAgICAgY2xlYXJUaW1lb3V0KG5hdldoZWVsVGFpbC50KTtcbiAgICAgIG5hdldoZWVsVGFpbC50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlTmF2U2hhZnQubCA9IG5ld1BvcztcbiAgICAgICAgdGh1bWJzRHJhdyhuZXdQb3MsIHRydWUpXG4gICAgICB9LCBUT1VDSF9USU1FT1VUKTtcbiAgICAgIHRodW1ic0RyYXcobmV3UG9zKTtcbiAgICB9XG4gIH0pO1xuXG4gICR3cmFwLmhvdmVyKFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodG91Y2hlZEZMQUcpIHJldHVybjtcbiAgICAgICAgICB0b2dnbGVDb250cm9sc0NsYXNzKCEoaG92ZXJGTEFHID0gdHJ1ZSkpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFob3ZlckZMQUcpIHJldHVybjtcbiAgICAgICAgdG9nZ2xlQ29udHJvbHNDbGFzcyghKGhvdmVyRkxBRyA9IGZhbHNlKSk7XG4gICAgICB9XG4gICk7XG5cbiAgZnVuY3Rpb24gb25OYXZGcmFtZUNsaWNrIChlKSB7XG4gICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKCkuZXE7XG4gICAgY2xpY2tUb1Nob3coe2luZGV4OiBpbmRleCwgc2xvdzogZS5hbHRLZXksIHVzZXI6IHRydWUsIGNvbzogZS5feCAtICRuYXYub2Zmc2V0KCkubGVmdH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25BcnJDbGljayAoZSkge1xuICAgIGNsaWNrVG9TaG93KHtpbmRleDogJGFycnMuaW5kZXgodGhpcykgPyAnPicgOiAnPCcsIHNsb3c6IGUuYWx0S2V5LCB1c2VyOiB0cnVlfSk7XG4gIH1cblxuICBzbWFydENsaWNrKCRhcnJzLCBmdW5jdGlvbiAoZSkge1xuICAgIHN0b3BFdmVudChlKTtcbiAgICBvbkFyckNsaWNrLmNhbGwodGhpcywgZSk7XG4gIH0sIHtcbiAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBvblRvdWNoU3RhcnQoKTtcbiAgICAgIHN0YWdlU2hhZnRUb3VjaFRhaWwuY29udHJvbCA9IHRydWU7XG4gICAgfSxcbiAgICBvblRvdWNoRW5kOiBvblRvdWNoRW5kXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZEZvY3VzT25Db250cm9scyAoZWwpIHtcbiAgICBhZGRGb2N1cyhlbCwgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2tTY3JvbGwoJHN0YWdlKTtcbiAgICAgIH0sIDApO1xuICAgICAgdG9nZ2xlQ29udHJvbHNDbGFzcyhmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICAkYXJycy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRFbnRlclVwKHRoaXMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBvbkFyckNsaWNrLmNhbGwodGhpcywgZSk7XG4gICAgfSk7XG4gICAgYWRkRm9jdXNPbkNvbnRyb2xzKHRoaXMpO1xuICB9KTtcblxuICBhZGRFbnRlclVwKGZ1bGxzY3JlZW5JY29uLCB0aGF0LnRvZ2dsZUZ1bGxTY3JlZW4pO1xuICBhZGRGb2N1c09uQ29udHJvbHMoZnVsbHNjcmVlbkljb24pO1xuXG4gIGZ1bmN0aW9uIHJlc2V0ICgpIHtcbiAgICBzZXREYXRhKCk7XG4gICAgc2V0T3B0aW9ucygpO1xuXG4gICAgaWYgKCFyZXNldC5pKSB7XG4gICAgICByZXNldC5pID0gdHJ1ZTtcbiAgICAgIC8vIE9ubHkgb25jZVxuICAgICAgdmFyIF9zdGFydGluZGV4ID0gb3B0cy5zdGFydGluZGV4O1xuICAgICAgaWYgKF9zdGFydGluZGV4IHx8IG9wdHMuaGFzaCAmJiBsb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBnZXRJbmRleEZyb21IYXNoKF9zdGFydGluZGV4IHx8IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyksIGRhdGEsIHRoYXQuaW5kZXggPT09IDAgfHwgX3N0YXJ0aW5kZXgsIF9zdGFydGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGFjdGl2ZUluZGV4ID0gcmVwb3NpdGlvbkluZGV4ID0gZGlydHlJbmRleCA9IGxhc3RBY3RpdmVJbmRleCA9IHN0YXJ0SW5kZXggPSBlZGdlSW5kZXgoc3RhcnRJbmRleCkgfHwgMDsvKihvX3J0bCA/IHNpemUgLSAxIDogMCkqLy8vO1xuICAgIH1cblxuICAgIGlmIChzaXplKSB7XG4gICAgICBpZiAoY2hhbmdlVG9SdGwoKSkgcmV0dXJuO1xuXG4gICAgICBpZiAoJHZpZGVvUGxheWluZykge1xuICAgICAgICB1bmxvYWRWaWRlbygkdmlkZW9QbGF5aW5nLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgYWN0aXZlSW5kZXhlcyA9IFtdO1xuICAgICAgZGV0YWNoRnJhbWVzKFNUQUdFX0ZSQU1FX0tFWSk7XG5cbiAgICAgIHJlc2V0Lm9rID0gdHJ1ZTtcblxuICAgICAgdGhhdC5zaG93KHtpbmRleDogYWN0aXZlSW5kZXgsIHRpbWU6IDB9KTtcbiAgICAgIHRoYXQucmVzaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVRvUnRsICgpIHtcbiAgICAvLy8vLy9jb25zb2xlLmxvZygnY2hhbmdlVG9SdGwnKTtcbiAgICBpZiAoIWNoYW5nZVRvUnRsLmYgPT09IG9fcnRsKSB7XG4gICAgICBjaGFuZ2VUb1J0bC5mID0gb19ydGw7XG4gICAgICBhY3RpdmVJbmRleCA9IHNpemUgLSAxIC0gYWN0aXZlSW5kZXg7XG4gICAgICAvLy8vLy9jb25zb2xlLmxvZygnY2hhbmdlVG9SdGwgZXhlY3V0ZSwgYWN0aXZlSW5kZXggaXMnLCBhY3RpdmVJbmRleCk7XG4gICAgICB0aGF0LnJldmVyc2UoKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgJC5lYWNoKCdsb2FkIHB1c2ggcG9wIHNoaWZ0IHVuc2hpZnQgcmV2ZXJzZSBzb3J0IHNwbGljZScuc3BsaXQoJyAnKSwgZnVuY3Rpb24gKGksIG1ldGhvZCkge1xuICAgIHRoYXRbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRhdGEgPSBkYXRhIHx8IFtdO1xuICAgICAgaWYgKG1ldGhvZCAhPT0gJ2xvYWQnKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZVttZXRob2RdLmFwcGx5KGRhdGEsIGFyZ3VtZW50cyk7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50c1swXSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JyAmJiBhcmd1bWVudHNbMF0ubGVuZ3RoKSB7XG4gICAgICAgIGRhdGEgPSBjbG9uZShhcmd1bWVudHNbMF0pO1xuICAgICAgfVxuICAgICAgcmVzZXQoKTtcbiAgICAgIHJldHVybiB0aGF0O1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVhZHkgKCkge1xuICAgIGlmICghcmVhZHkub2spIHtcbiAgICAgIHJlYWR5Lm9rID0gdHJ1ZTtcbiAgICAgIHRyaWdnZXJFdmVudCgncmVhZHknKTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpO1xufTtcblxuXG4kLmZuLmZvdG9yYW1hID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAkZm90b3JhbWEgPSAkKHRoaXMpLFxuICAgICAgICBmb3RvcmFtYURhdGEgPSAkZm90b3JhbWEuZGF0YSgpLFxuICAgICAgICBmb3RvcmFtYSA9IGZvdG9yYW1hRGF0YS5mb3RvcmFtYTtcblxuICAgIGlmICghZm90b3JhbWEpIHtcbiAgICAgIHdhaXRGb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIWlzSGlkZGVuKHRoYXQpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3RvcmFtYURhdGEudXJ0ZXh0ID0gJGZvdG9yYW1hLmh0bWwoKTtcbiAgICAgICAgbmV3ICQuRm90b3JhbWEoJGZvdG9yYW1hLFxuICAgICAgICAgICAgLyogUHJpb3JpdHkgZm9yIG9wdGlvbnM6XG4gICAgICAgICAgICAgKiAxLiA8ZGl2IGRhdGEtbG9vcD1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAqIDIuICQoJ2RpdicpLmZvdG9yYW1hKHtsb29wOiBmYWxzZX0pXG4gICAgICAgICAgICAgKiAzLiBEZWZhdWx0cyAqL1xuICAgICAgICAgICAgJC5leHRlbmQoXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgT1BUSU9OUyxcbiAgICAgICAgICAgICAgICB3aW5kb3cuZm90b3JhbWFEZWZhdWx0cyxcbiAgICAgICAgICAgICAgICBvcHRzLFxuICAgICAgICAgICAgICAgIGZvdG9yYW1hRGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvdG9yYW1hLnNldE9wdGlvbnMob3B0cywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn07XG4kLkZvdG9yYW1hLmluc3RhbmNlcyA9IFtdO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbmRleGVzICgpIHtcbiAgJC5lYWNoKCQuRm90b3JhbWEuaW5zdGFuY2VzLCBmdW5jdGlvbiAoaW5kZXgsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuaW5kZXggPSBpbmRleDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAkLkZvdG9yYW1hLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgY2FsY3VsYXRlSW5kZXhlcygpO1xufVxuXG5mdW5jdGlvbiBoaWRlSW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICQuRm90b3JhbWEuaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZS5pbmRleCwgMSk7XG4gIGNhbGN1bGF0ZUluZGV4ZXMoKTtcbn1cbiQuRm90b3JhbWEuY2FjaGUgPSB7fTtcbiQuRm90b3JhbWEubWVhc3VyZXMgPSB7fTtcbiQgPSAkIHx8IHt9O1xuJC5Gb3RvcmFtYSA9ICQuRm90b3JhbWEgfHwge307XG4kLkZvdG9yYW1hLmpzdCA9ICQuRm90b3JhbWEuanN0IHx8IHt9O1xuXG4kLkZvdG9yYW1hLmpzdC5zdHlsZSA9IGZ1bmN0aW9uKHYpIHtcbnZhciBfX3QsIF9fcCA9ICcnLCBfX2UgPSBfLmVzY2FwZTtcbl9fcCArPSAnLmZvdG9yYW1hJyArXG4oKF9fdCA9ICggdi5zICkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJyAuZm90b3JhbWFfX25hdi0tdGh1bWJzIC5mb3RvcmFtYV9fbmF2X19mcmFtZXtcXG5wYWRkaW5nOicgK1xuKChfX3QgPSAoIHYubSApKSA9PSBudWxsID8gJycgOiBfX3QpICtcbidweDtcXG5oZWlnaHQ6JyArXG4oKF9fdCA9ICggdi5oICkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJ3B4fVxcbi5mb3RvcmFtYScgK1xuKChfX3QgPSAoIHYucyApKSA9PSBudWxsID8gJycgOiBfX3QpICtcbicgLmZvdG9yYW1hX190aHVtYi1ib3JkZXJ7XFxuaGVpZ2h0OicgK1xuKChfX3QgPSAoIHYuaCAtIHYuYiAqICh2LnEgPyAwIDogMikgKSkgPT0gbnVsbCA/ICcnIDogX190KSArXG4ncHg7XFxuYm9yZGVyLXdpZHRoOicgK1xuKChfX3QgPSAoIHYuYiApKSA9PSBudWxsID8gJycgOiBfX3QpICtcbidweDtcXG5tYXJnaW4tdG9wOicgK1xuKChfX3QgPSAoIHYubSApKSA9PSBudWxsID8gJycgOiBfX3QpICtcbidweH0nO1xucmV0dXJuIF9fcFxufTtcblxuJC5Gb3RvcmFtYS5qc3QudmlkZW8gPSBmdW5jdGlvbih2KSB7XG52YXIgX190LCBfX3AgPSAnJywgX19lID0gXy5lc2NhcGUsIF9faiA9IEFycmF5LnByb3RvdHlwZS5qb2luO1xuZnVuY3Rpb24gcHJpbnQoKSB7IF9fcCArPSBfX2ouY2FsbChhcmd1bWVudHMsICcnKSB9XG5fX3AgKz0gJzxkaXYgY2xhc3M9XCJmb3RvcmFtYV9fdmlkZW9cIj48aWZyYW1lIHNyYz1cIic7XG4gcHJpbnQoKHYudHlwZSA9PSAneW91dHViZScgPyB2LnAgKyAneW91dHViZS5jb20vZW1iZWQvJyArIHYuaWQgKyc/YXV0b3BsYXk9MScgOiB2LnR5cGUgPT0gJ3ZpbWVvJyA/IHYucCArICdwbGF5ZXIudmltZW8uY29tL3ZpZGVvLycgKyB2LmlkICsgJz9hdXRvcGxheT0xJmJhZGdlPTAnIDogdi5pZCkgICsgKHYucyAmJiB2LnR5cGUgIT0gJ2N1c3RvbScgPyAnJicgKyB2LnMgOiAnJykpIDtcbl9fcCArPSAnXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjwvZGl2Plxcbic7XG5yZXR1cm4gX19wXG59O1xuJChmdW5jdGlvbiAoKSB7XG4gICQoJy4nICsgX2ZvdG9yYW1hQ2xhc3MgKyAnOm5vdChbZGF0YS1hdXRvPVwiZmFsc2VcIl0pJykuZm90b3JhbWEoKTtcbn0pO1xufSkod2luZG93LCBkb2N1bWVudCwgbG9jYXRpb24sIHR5cGVvZiBqUXVlcnkgIT09ICd1bmRlZmluZWQnICYmIGpRdWVyeSk7XG4iLCIvKiFqUXVlcnkgS25vYiovXG4vKipcbiAqIERvd253YXJkIGNvbXBhdGlibGUsIHRvdWNoYWJsZSBkaWFsXG4gKlxuICogVmVyc2lvbjogMS4yLjEyXG4gKiBSZXF1aXJlczogalF1ZXJ5IHYxLjcrXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIEFudGhvbnkgVGVycmllblxuICogVW5kZXIgTUlUIExpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICpcbiAqIFRoYW5rcyB0byB2b3IsIGVza2ltb2Jsb29kLCBzcGlmZmlzdGFuLCBGYWJyaXppb0NcbiAqL1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBDb21tb25KU1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbiAoJCkge1xuXG4gICAgLyoqXG4gICAgICogS29udHJvbCBsaWJyYXJ5XG4gICAgICovXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbml0aW9uIG9mIGdsb2JhbHMgYW5kIGNvcmVcbiAgICAgKi9cbiAgICB2YXIgayA9IHt9LCAvLyBrb250cm9sXG4gICAgICAgIG1heCA9IE1hdGgubWF4LFxuICAgICAgICBtaW4gPSBNYXRoLm1pbjtcblxuICAgIGsuYyA9IHt9O1xuICAgIGsuYy5kID0gJChkb2N1bWVudCk7XG4gICAgay5jLnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIC0gMTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogS29udHJvbCBPYmplY3RcbiAgICAgKlxuICAgICAqIERlZmluaXRpb24gb2YgYW4gYWJzdHJhY3QgVUkgY29udHJvbFxuICAgICAqXG4gICAgICogRWFjaCBjb25jcmV0ZSBjb21wb25lbnQgbXVzdCBjYWxsIHRoaXMgb25lLlxuICAgICAqIDxjb2RlPlxuICAgICAqIGsuby5jYWxsKHRoaXMpO1xuICAgICAqIDwvY29kZT5cbiAgICAgKi9cbiAgICBrLm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzID0gdGhpcztcblxuICAgICAgICB0aGlzLm8gPSBudWxsOyAvLyBhcnJheSBvZiBvcHRpb25zXG4gICAgICAgIHRoaXMuJCA9IG51bGw7IC8vIGpRdWVyeSB3cmFwcGVkIGVsZW1lbnRcbiAgICAgICAgdGhpcy5pID0gbnVsbDsgLy8gbWl4ZWQgSFRNTElucHV0RWxlbWVudCBvciBhcnJheSBvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgIHRoaXMuZyA9IG51bGw7IC8vIGRlcHJlY2F0ZWQgMkQgZ3JhcGhpY3MgY29udGV4dCBmb3IgJ3ByZS1yZW5kZXJpbmcnXG4gICAgICAgIHRoaXMudiA9IG51bGw7IC8vIHZhbHVlIDsgbWl4ZWQgYXJyYXkgb3IgaW50ZWdlclxuICAgICAgICB0aGlzLmN2ID0gbnVsbDsgLy8gY2hhbmdlIHZhbHVlIDsgbm90IGNvbW1pdGVkIHZhbHVlXG4gICAgICAgIHRoaXMueCA9IDA7IC8vIGNhbnZhcyB4IHBvc2l0aW9uXG4gICAgICAgIHRoaXMueSA9IDA7IC8vIGNhbnZhcyB5IHBvc2l0aW9uXG4gICAgICAgIHRoaXMudyA9IDA7IC8vIGNhbnZhcyB3aWR0aFxuICAgICAgICB0aGlzLmggPSAwOyAvLyBjYW52YXMgaGVpZ2h0XG4gICAgICAgIHRoaXMuJGMgPSBudWxsOyAvLyBqUXVlcnkgY2FudmFzIGVsZW1lbnRcbiAgICAgICAgdGhpcy5jID0gbnVsbDsgLy8gcmVuZGVyZWQgY2FudmFzIGNvbnRleHRcbiAgICAgICAgdGhpcy50ID0gMDsgLy8gdG91Y2hlcyBpbmRleFxuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZnQ29sb3IgPSBudWxsOyAvLyBtYWluIGNvbG9yXG4gICAgICAgIHRoaXMucENvbG9yID0gbnVsbDsgLy8gcHJldmlvdXMgY29sb3JcbiAgICAgICAgdGhpcy5kSCA9IG51bGw7IC8vIGRyYXcgaG9va1xuICAgICAgICB0aGlzLmNIID0gbnVsbDsgLy8gY2hhbmdlIGhvb2tcbiAgICAgICAgdGhpcy5lSCA9IG51bGw7IC8vIGNhbmNlbCBob29rXG4gICAgICAgIHRoaXMuckggPSBudWxsOyAvLyByZWxlYXNlIGhvb2tcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7IC8vIHNjYWxlIGZhY3RvclxuICAgICAgICB0aGlzLnJlbGF0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVsYXRpdmVXaWR0aCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbGF0aXZlSGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGRpdiA9IG51bGw7IC8vIGNvbXBvbmVudCBkaXZcblxuICAgICAgICB0aGlzLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjZiA9IGZ1bmN0aW9uIChlLCBjb25mKSB7XG4gICAgICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICAgICAgZm9yIChrIGluIGNvbmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5vW2tdID0gY29uZltrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5fY2FydmUoKS5pbml0KCk7XG4gICAgICAgICAgICAgICAgcy5fY29uZmlndXJlKClcbiAgICAgICAgICAgICAgICAgLl9kcmF3KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kLmRhdGEoJ2tvbnRyb2xlZCcpKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiQuZGF0YSgna29udHJvbGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXh0ZW5kKCk7XG4gICAgICAgICAgICB0aGlzLm8gPSAkLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICBtaW46IHRoaXMuJC5kYXRhKCdtaW4nKSAhPT0gdW5kZWZpbmVkID8gdGhpcy4kLmRhdGEoJ21pbicpIDogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzLiQuZGF0YSgnbWF4JykgIT09IHVuZGVmaW5lZCA/IHRoaXMuJC5kYXRhKCdtYXgnKSA6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcHBlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRoaXMuJC5kYXRhKCdyZWFkb25seScpIHx8ICh0aGlzLiQuYXR0cigncmVhZG9ubHknKSA9PT0gJ3JlYWRvbmx5JyksXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVUlcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiB0aGlzLiQuZGF0YSgnY3Vyc29yJykgPT09IHRydWUgJiYgMzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLiQuZGF0YSgnY3Vyc29yJykgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzOiB0aGlzLiQuZGF0YSgndGhpY2tuZXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBNYXRoLm1heChNYXRoLm1pbih0aGlzLiQuZGF0YSgndGhpY2tuZXNzJyksIDEpLCAwLjAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDAuMzUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDYXA6IHRoaXMuJC5kYXRhKCdsaW5lY2FwJykgfHwgJ2J1dHQnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy4kLmRhdGEoJ3dpZHRoJykgfHwgMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuJC5kYXRhKCdoZWlnaHQnKSB8fCAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogdGhpcy4kLmRhdGEoJ2Rpc3BsYXlpbnB1dCcpID09IG51bGwgfHwgdGhpcy4kLmRhdGEoJ2Rpc3BsYXlpbnB1dCcpLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UHJldmlvdXM6IHRoaXMuJC5kYXRhKCdkaXNwbGF5cHJldmlvdXMnKSxcbiAgICAgICAgICAgICAgICAgICAgZmdDb2xvcjogdGhpcy4kLmRhdGEoJ2ZnY29sb3InKSB8fCAnIzg3Q0VFQicsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29sb3I6IHRoaXMuJC5kYXRhKCdpbnB1dGNvbG9yJyksXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuJC5kYXRhKCdmb250JykgfHwgJ0FyaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy4kLmRhdGEoJ2ZvbnQtd2VpZ2h0JykgfHwgJ2JvbGQnLFxuICAgICAgICAgICAgICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLiQuZGF0YSgnc3RlcCcpIHx8IDEsXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiB0aGlzLiQuZGF0YSgncm90YXRpb24nKSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBIb29rc1xuICAgICAgICAgICAgICAgICAgICBkcmF3OiBudWxsLCAvLyBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IG51bGwsIC8vIGZ1bmN0aW9uICh2YWx1ZSkge31cbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBudWxsLCAvLyBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgICAgICAgICAgICByZWxlYXNlOiBudWxsLCAvLyBmdW5jdGlvbiAodmFsdWUpIHt9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3V0cHV0IGZvcm1hdHRpbmcsIGFsbG93cyB0byBhZGQgdW5pdDogJSwgbXMgLi4uXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIGZpbmFsaXplIG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuby5mbGlwID0gdGhpcy5vLnJvdGF0aW9uID09PSAnYW50aWNsb2Nrd2lzZScgfHwgdGhpcy5vLnJvdGF0aW9uID09PSAnYWN3JztcbiAgICAgICAgICAgIGlmICghdGhpcy5vLmlucHV0Q29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm8uaW5wdXRDb2xvciA9IHRoaXMuby5mZ0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByb3V0aW5nIHZhbHVlXG4gICAgICAgICAgICBpZiAodGhpcy4kLmlzKCdmaWVsZHNldCcpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaWVsZHNldCA9IGFycmF5IG9mIGludGVnZXJcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSB0aGlzLiQuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmkuZWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHMuaVtrXSA9ICR0aGlzO1xuICAgICAgICAgICAgICAgICAgICBzLnZba10gPSBzLm8ucGFyc2UoJHRoaXMudmFsKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlIGJsdXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxba10gPSAkdGhpcy52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLl92YWxpZGF0ZSh2YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiQuZmluZCgnbGVnZW5kJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gaW5wdXQgPSBpbnRlZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gdGhpcy4kO1xuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMuby5wYXJzZSh0aGlzLiQudmFsKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudiA9PT0gJycgJiYgKHRoaXMudiA9IHRoaXMuby5taW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuJC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAnY2hhbmdlIGJsdXInLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLl92YWxpZGF0ZShzLm8ucGFyc2Uocy4kLnZhbCgpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAhdGhpcy5vLmRpc3BsYXlJbnB1dCAmJiB0aGlzLiQuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBhZGRzIG5lZWRlZCBET00gZWxlbWVudHMgKGNhbnZhcywgZGl2KVxuICAgICAgICAgICAgdGhpcy4kYyA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykpLmF0dHIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLm8ud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLm8uaGVpZ2h0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gd3JhcHMgYWxsIGVsZW1lbnRzIGluIGEgZGl2XG4gICAgICAgICAgICAvLyBhZGQgdG8gRE9NIGJlZm9yZSBDYW52YXMgaW5pdCBpcyB0cmlnZ2VyZWRcbiAgICAgICAgICAgIHRoaXMuJGRpdiA9ICQoJzxkaXYgc3R5bGU9XCInXG4gICAgICAgICAgICAgICAgKyAodGhpcy5vLmlubGluZSA/ICdkaXNwbGF5OmlubGluZTsnIDogJycpXG4gICAgICAgICAgICAgICAgKyAnd2lkdGg6JyArIHRoaXMuby53aWR0aCArICdweDtoZWlnaHQ6JyArIHRoaXMuby5oZWlnaHQgKyAncHg7J1xuICAgICAgICAgICAgICAgICsgJ1wiPjwvZGl2PicpO1xuXG4gICAgICAgICAgICB0aGlzLiQud3JhcCh0aGlzLiRkaXYpLmJlZm9yZSh0aGlzLiRjKTtcbiAgICAgICAgICAgIHRoaXMuJGRpdiA9IHRoaXMuJC5wYXJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBHX3ZtbENhbnZhc01hbmFnZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KHRoaXMuJGNbMF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmMgPSB0aGlzLiRjWzBdLmdldENvbnRleHQgPyB0aGlzLiRjWzBdLmdldENvbnRleHQoJzJkJykgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYykge1xuICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogICAgICAgIFwiQ2FudmFzTm90U3VwcG9ydGVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICAgICBcIkNhbnZhcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGV4Y2FudmFzIG9uIElFOC4wLlwiLFxuICAgICAgICAgICAgICAgICAgICB0b1N0cmluZzogICAgZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5uYW1lICsgXCI6IFwiICsgdGhpcy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaGRwaSBzdXBwb3J0XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIC8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIGRldGVjdHMgcmVsYXRpdmUgd2lkdGggLyBoZWlnaHRcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVXaWR0aCA9ICB0aGlzLm8ud2lkdGggJSAxICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5vLndpZHRoLmluZGV4T2YoJyUnKTtcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVIZWlnaHQgPSB0aGlzLm8uaGVpZ2h0ICUgMSAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuby5oZWlnaHQuaW5kZXhPZignJScpO1xuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZSA9IHRoaXMucmVsYXRpdmVXaWR0aCB8fCB0aGlzLnJlbGF0aXZlSGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBjb21wdXRlcyBzaXplIGFuZCBjYXJ2ZXMgdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgdGhpcy5fY2FydmUoKTtcblxuICAgICAgICAgICAgLy8gcHJlcGFyZXMgcHJvcHMgZm9yIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy52IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY29weSh0aGlzLnYsIHRoaXMuY3YpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0gdGhpcy52O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBiaW5kcyBjb25maWd1cmUgZXZlbnRcbiAgICAgICAgICAgIHRoaXMuJFxuICAgICAgICAgICAgICAgIC5iaW5kKFwiY29uZmlndXJlXCIsIGNmKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5iaW5kKFwiY29uZmlndXJlXCIsIGNmKTtcblxuICAgICAgICAgICAgLy8gZmluYWxpemUgaW5pdFxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuKClcbiAgICAgICAgICAgICAgICAuX2NvbmZpZ3VyZSgpXG4gICAgICAgICAgICAgICAgLl94eSgpXG4gICAgICAgICAgICAgICAgLmluaXQoKTtcblxuICAgICAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLiQudmFsKHRoaXMuby5mb3JtYXQodGhpcy52KSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3KCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2NhcnZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5yZWxhdGl2ZVdpZHRoID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGRpdi5wYXJlbnQoKS53aWR0aCgpICpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuby53aWR0aCkgLyAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy4kZGl2LnBhcmVudCgpLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIGggPSB0aGlzLnJlbGF0aXZlSGVpZ2h0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGRpdi5wYXJlbnQoKS5oZWlnaHQoKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh0aGlzLm8uaGVpZ2h0KSAvIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiRkaXYucGFyZW50KCkuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhcHBseSByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIHRoaXMudyA9IHRoaXMuaCA9IE1hdGgubWluKHcsIGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLncgPSB0aGlzLm8ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oID0gdGhpcy5vLmhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmluYWxpemUgZGl2XG4gICAgICAgICAgICB0aGlzLiRkaXYuY3NzKHtcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiB0aGlzLncgKyAncHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiB0aGlzLmggKyAncHgnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gZmluYWxpemUgY2FudmFzIHdpdGggY29tcHV0ZWQgd2lkdGhcbiAgICAgICAgICAgIHRoaXMuJGMuYXR0cih7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNjYWxpbmdcbiAgICAgICAgICAgIGlmICh0aGlzLnNjYWxlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY1swXS53aWR0aCA9IHRoaXMuJGNbMF0ud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGNbMF0uaGVpZ2h0ID0gdGhpcy4kY1swXS5oZWlnaHQgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGMud2lkdGgodGhpcy53KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRjLmhlaWdodCh0aGlzLmgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBjYW52YXMgcHJlLXJlbmRlcmluZ1xuICAgICAgICAgICAgdmFyIGQgPSB0cnVlO1xuXG4gICAgICAgICAgICBzLmcgPSBzLmM7XG5cbiAgICAgICAgICAgIHMuY2xlYXIoKTtcblxuICAgICAgICAgICAgcy5kSCAmJiAoZCA9IHMuZEgoKSk7XG5cbiAgICAgICAgICAgIGQgIT09IGZhbHNlICYmIHMuZHJhdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3RvdWNoID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gcy54eTJ2YWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbcy50XS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1tzLnRdLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gcy5jdikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKHMuY0ggJiYgcy5jSCh2KSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHMuY2hhbmdlKHMuX3ZhbGlkYXRlKHYpKTtcbiAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBnZXQgdG91Y2hlcyBpbmRleFxuICAgICAgICAgICAgdGhpcy50ID0gay5jLnQoZSk7XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IHRvdWNoXG4gICAgICAgICAgICB0b3VjaE1vdmUoZSk7XG5cbiAgICAgICAgICAgIC8vIFRvdWNoIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGsuYy5kXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJ0b3VjaG1vdmUua1wiLCB0b3VjaE1vdmUpXG4gICAgICAgICAgICAgICAgLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIFwidG91Y2hlbmQua1wiLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrLmMuZC51bmJpbmQoJ3RvdWNobW92ZS5rIHRvdWNoZW5kLmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHMuY3YpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbW91c2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBzLnh5MnZhbChlLnBhZ2VYLCBlLnBhZ2VZKTtcblxuICAgICAgICAgICAgICAgIGlmICh2ID09IHMuY3YpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmIChzLmNIICYmIChzLmNIKHYpID09PSBmYWxzZSkpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHMuY2hhbmdlKHMuX3ZhbGlkYXRlKHYpKTtcbiAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBGaXJzdCBjbGlja1xuICAgICAgICAgICAgbW91c2VNb3ZlKGUpO1xuXG4gICAgICAgICAgICAvLyBNb3VzZSBldmVudHMgbGlzdGVuZXJzXG4gICAgICAgICAgICBrLmMuZFxuICAgICAgICAgICAgICAgIC5iaW5kKFwibW91c2Vtb3ZlLmtcIiwgbW91c2VNb3ZlKVxuICAgICAgICAgICAgICAgIC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAvLyBFc2NhcGUga2V5IGNhbmNlbCBjdXJyZW50IGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBcImtleXVwLmtcIixcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgay5jLmQudW5iaW5kKFwibW91c2V1cC5rIG1vdXNlbW92ZS5rIGtleXVwLmtcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5lSCAmJiBzLmVIKCkgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICBcIm1vdXNldXAua1wiLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgay5jLmQudW5iaW5kKCdtb3VzZW1vdmUuayBtb3VzZXVwLmsga2V5dXAuaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy5jdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl94eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy4kYy5vZmZzZXQoKTtcbiAgICAgICAgICAgIHRoaXMueCA9IG8ubGVmdDtcbiAgICAgICAgICAgIHRoaXMueSA9IG8udG9wO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9saXN0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuby5yZWFkT25seSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNcbiAgICAgICAgICAgICAgICAgICAgLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5feHkoKS5fbW91c2UoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX3h5KCkuX3RvdWNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kLmF0dHIoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbGF0aXZlKSB7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5fY2FydmUoKS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fY29uZmlndXJlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBIb29rc1xuICAgICAgICAgICAgaWYgKHRoaXMuby5kcmF3KSB0aGlzLmRIID0gdGhpcy5vLmRyYXc7XG4gICAgICAgICAgICBpZiAodGhpcy5vLmNoYW5nZSkgdGhpcy5jSCA9IHRoaXMuby5jaGFuZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5vLmNhbmNlbCkgdGhpcy5lSCA9IHRoaXMuby5jYW5jZWw7XG4gICAgICAgICAgICBpZiAodGhpcy5vLnJlbGVhc2UpIHRoaXMuckggPSB0aGlzLm8ucmVsZWFzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuby5kaXNwbGF5UHJldmlvdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBDb2xvciA9IHRoaXMuaDJyZ2JhKHRoaXMuby5mZ0NvbG9yLCBcIjAuNFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnQ29sb3IgPSB0aGlzLmgycmdiYSh0aGlzLm8uZmdDb2xvciwgXCIwLjZcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmdDb2xvciA9IHRoaXMuby5mZ0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGNbMF0ud2lkdGggPSB0aGlzLiRjWzBdLndpZHRoO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSAofn4gKCgodiA8IDApID8gLTAuNSA6IDAuNSkgKyAodi90aGlzLm8uc3RlcCkpKSAqIHRoaXMuby5zdGVwO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogMTAwKSAvIDEwMDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBYnN0cmFjdCBtZXRob2RzXG4gICAgICAgIHRoaXMubGlzdGVuID0gZnVuY3Rpb24gKCkge307IC8vIG9uIHN0YXJ0LCBvbmUgdGltZVxuICAgICAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHt9OyAvLyBlYWNoIHRpbWUgY29uZmlndXJlIHRyaWdnZXJlZFxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7fTsgLy8gZWFjaCB0aW1lIGNvbmZpZ3VyZSB0cmlnZ2VyZWRcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBmdW5jdGlvbiAodikge307IC8vIG9uIGNoYW5nZVxuICAgICAgICB0aGlzLnZhbCA9IGZ1bmN0aW9uICh2KSB7fTsgLy8gb24gcmVsZWFzZVxuICAgICAgICB0aGlzLnh5MnZhbCA9IGZ1bmN0aW9uICh4LCB5KSB7fTsgLy9cbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24gKCkge307IC8vIG9uIGNoYW5nZSAvIG9uIHJlbGVhc2VcbiAgICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fY2xlYXIoKTsgfTtcblxuICAgICAgICAvLyBVdGlsc1xuICAgICAgICB0aGlzLmgycmdiYSA9IGZ1bmN0aW9uIChoLCBhKSB7XG4gICAgICAgICAgICB2YXIgcmdiO1xuICAgICAgICAgICAgaCA9IGguc3Vic3RyaW5nKDEsNyk7XG4gICAgICAgICAgICByZ2IgPSBbXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoaC5zdWJzdHJpbmcoMCwyKSwgMTYpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGguc3Vic3RyaW5nKDIsNCksIDE2KSxcbiAgICAgICAgICAgICAgICBwYXJzZUludChoLnN1YnN0cmluZyg0LDYpLCAxNilcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JbMF0gKyBcIixcIiArIHJnYlsxXSArIFwiLFwiICsgcmdiWzJdICsgXCIsXCIgKyBhICsgXCIpXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb3B5ID0gZnVuY3Rpb24gKGYsIHQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZikge1xuICAgICAgICAgICAgICAgIHRbaV0gPSBmW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIGsuRGlhbFxuICAgICAqL1xuICAgIGsuRGlhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgay5vLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGFydEFuZ2xlID0gbnVsbDtcbiAgICAgICAgdGhpcy54eSA9IG51bGw7XG4gICAgICAgIHRoaXMucmFkaXVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnNvckV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMudzIgPSBudWxsO1xuICAgICAgICB0aGlzLlBJMiA9IDIqTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiB0aGlzLiQuZGF0YSgnYmdjb2xvcicpIHx8ICcjRUVFRUVFJyxcbiAgICAgICAgICAgICAgICBhbmdsZU9mZnNldDogdGhpcy4kLmRhdGEoJ2FuZ2xlb2Zmc2V0JykgfHwgMCxcbiAgICAgICAgICAgICAgICBhbmdsZUFyYzogdGhpcy4kLmRhdGEoJ2FuZ2xlYXJjJykgfHwgMzYwLFxuICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZVxuICAgICAgICAgICAgfSwgdGhpcy5vKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZhbCA9IGZ1bmN0aW9uICh2LCB0cmlnZ2VyUmVsZWFzZSkge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdikge1xuXG4gICAgICAgICAgICAgICAgLy8gcmV2ZXJzZSBmb3JtYXRcbiAgICAgICAgICAgICAgICB2ID0gdGhpcy5vLnBhcnNlKHYpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJSZWxlYXNlICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAmJiB2ICE9IHRoaXMudlxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnJIXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuckgodikgPT09IGZhbHNlKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IHRoaXMuby5zdG9wcGVyID8gbWF4KG1pbih2LCB0aGlzLm8ubWF4KSwgdGhpcy5vLm1pbikgOiB2O1xuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMuY3Y7XG4gICAgICAgICAgICAgICAgdGhpcy4kLnZhbCh0aGlzLm8uZm9ybWF0KHRoaXMudikpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnh5MnZhbCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICB2YXIgYSwgcmV0O1xuXG4gICAgICAgICAgICBhID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgICAgICAgICAgICAgIHggLSAodGhpcy54ICsgdGhpcy53MiksXG4gICAgICAgICAgICAgICAgICAgICAgICAtICh5IC0gdGhpcy55IC0gdGhpcy53MilcbiAgICAgICAgICAgICAgICAgICAgKSAtIHRoaXMuYW5nbGVPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm8uZmxpcCkge1xuICAgICAgICAgICAgICAgIGEgPSB0aGlzLmFuZ2xlQXJjIC0gYSAtIHRoaXMuUEkyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hbmdsZUFyYyAhPSB0aGlzLlBJMiAmJiAoYSA8IDApICYmIChhID4gLTAuNSkpIHtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGlzc2V0IGFuZ2xlQXJjIG9wdGlvbiwgc2V0IHRvIG1pbiBpZiAuNSB1bmRlciBtaW5cbiAgICAgICAgICAgICAgICBhID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IDApIHtcbiAgICAgICAgICAgICAgICBhICs9IHRoaXMuUEkyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXQgPSAoYSAqICh0aGlzLm8ubWF4IC0gdGhpcy5vLm1pbikgLyB0aGlzLmFuZ2xlQXJjKSArIHRoaXMuby5taW47XG5cbiAgICAgICAgICAgIHRoaXMuby5zdG9wcGVyICYmIChyZXQgPSBtYXgobWluKHJldCwgdGhpcy5vLm1heCksIHRoaXMuby5taW4pKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gYmluZCBNb3VzZVdoZWVsXG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMsIG13VGltZXJTdG9wLFxuICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlLFxuICAgICAgICAgICAgICAgIG13ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmkgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVggPSBvcmkuZGV0YWlsIHx8IG9yaS53aGVlbERlbHRhWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhWSA9IG9yaS5kZXRhaWwgfHwgb3JpLndoZWVsRGVsdGFZLFxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHMuX3ZhbGlkYXRlKHMuby5wYXJzZShzLiQudmFsKCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVggPiAwIHx8IGRlbHRhWSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzLm8uc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRlbHRhWCA8IDAgfHwgZGVsdGFZIDwgMCA/IC1zLm8uc3RlcCA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgdiA9IG1heChtaW4odiwgcy5vLm1heCksIHMuby5taW4pO1xuXG4gICAgICAgICAgICAgICAgICAgIHMudmFsKHYsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocy5ySCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG1vdXNld2hlZWwgc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG13VGltZXJTdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJTdG9wID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5ySCh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd1RpbWVyU3RvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbW91c2V3aGVlbCByZWxlYXNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtd1RpbWVyUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtd1RpbWVyU3RvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuckgodik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBrdmFsLFxuICAgICAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgICAgIG0gPSAxLFxuICAgICAgICAgICAgICAgIGt2ID0ge1xuICAgICAgICAgICAgICAgICAgICAzNzogLXMuby5zdGVwLFxuICAgICAgICAgICAgICAgICAgICAzODogcy5vLnN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIDM5OiBzLm8uc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgNDA6IC1zLm8uc3RlcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJFxuICAgICAgICAgICAgICAgIC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrYyA9IGUua2V5Q29kZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbnVtcGFkIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrYyA+PSA5NiAmJiBrYyA8PSAxMDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYyA9IGUua2V5Q29kZSA9IGtjIC0gNDg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGt2YWwgPSBwYXJzZUludChTdHJpbmcuZnJvbUNoYXJDb2RlKGtjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihrdmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrYyAhPT0gMTMpICAgICAgICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBrYyAhPT0gOCAgICAgICAgICAgICAgICAgICAgIC8vIGJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYga2MgIT09IDkgICAgICAgICAgICAgICAgICAgICAvLyB0YWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBrYyAhPT0gMTg5ICAgICAgICAgICAgICAgICAgIC8vIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoa2MgIT09IDE5MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzLiQudmFsKCkubWF0Y2goL1xcLi8pKSAgIC8vIC4gYWxsb3dlZCBvbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQuaW5BcnJheShrYyxbMzcsMzgsMzksNDBdKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHMuby5wYXJzZShzLiQudmFsKCkpICsga3Zba2NdICogbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5vLnN0b3BwZXIgJiYgKHYgPSBtYXgobWluKHYsIHMuby5tYXgpLCBzLm8ubWluKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jaGFuZ2Uocy5fdmFsaWRhdGUodikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9uZyB0aW1lIGtleWRvd24gc3BlZWQtdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICo9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIFwia2V5dXBcIixcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihrdmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy4kLnZhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGt2YWwgcG9zdGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocy4kLnZhbCgpID4gcy5vLm1heCAmJiBzLiQudmFsKHMuby5tYXgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzLiQudmFsKCkgPCBzLm8ubWluICYmIHMuJC52YWwocy5vLm1pbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy4kYy5iaW5kKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBtdyk7XG4gICAgICAgICAgICB0aGlzLiQuYmluZChcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgbXcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnYgPCB0aGlzLm8ubWluXG4gICAgICAgICAgICAgICAgfHwgdGhpcy52ID4gdGhpcy5vLm1heCkgeyB0aGlzLnYgPSB0aGlzLm8ubWluOyB9XG5cbiAgICAgICAgICAgIHRoaXMuJC52YWwodGhpcy52KTtcbiAgICAgICAgICAgIHRoaXMudzIgPSB0aGlzLncgLyAyO1xuICAgICAgICAgICAgdGhpcy5jdXJzb3JFeHQgPSB0aGlzLm8uY3Vyc29yIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy54eSA9IHRoaXMudzIgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5saW5lV2lkdGggPSB0aGlzLnh5ICogdGhpcy5vLnRoaWNrbmVzcztcbiAgICAgICAgICAgIHRoaXMubGluZUNhcCA9IHRoaXMuby5saW5lQ2FwO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLnh5IC0gdGhpcy5saW5lV2lkdGggLyAyO1xuXG4gICAgICAgICAgICB0aGlzLm8uYW5nbGVPZmZzZXRcbiAgICAgICAgICAgICYmICh0aGlzLm8uYW5nbGVPZmZzZXQgPSBpc05hTih0aGlzLm8uYW5nbGVPZmZzZXQpID8gMCA6IHRoaXMuby5hbmdsZU9mZnNldCk7XG5cbiAgICAgICAgICAgIHRoaXMuby5hbmdsZUFyY1xuICAgICAgICAgICAgJiYgKHRoaXMuby5hbmdsZUFyYyA9IGlzTmFOKHRoaXMuby5hbmdsZUFyYykgPyB0aGlzLlBJMiA6IHRoaXMuby5hbmdsZUFyYyk7XG5cbiAgICAgICAgICAgIC8vIGRlZyB0byByYWRcbiAgICAgICAgICAgIHRoaXMuYW5nbGVPZmZzZXQgPSB0aGlzLm8uYW5nbGVPZmZzZXQgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICAgICAgdGhpcy5hbmdsZUFyYyA9IHRoaXMuby5hbmdsZUFyYyAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgc3RhcnQgYW5kIGVuZCBhbmdsZXNcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IDEuNSAqIE1hdGguUEkgKyB0aGlzLmFuZ2xlT2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDEuNSAqIE1hdGguUEkgKyB0aGlzLmFuZ2xlT2Zmc2V0ICsgdGhpcy5hbmdsZUFyYztcblxuICAgICAgICAgICAgdmFyIHMgPSBtYXgoXG4gICAgICAgICAgICAgICAgU3RyaW5nKE1hdGguYWJzKHRoaXMuby5tYXgpKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgU3RyaW5nKE1hdGguYWJzKHRoaXMuby5taW4pKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKSArIDI7XG5cbiAgICAgICAgICAgIHRoaXMuby5kaXNwbGF5SW5wdXRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCcgOiAoKHRoaXMudyAvIDIgKyA0KSA+PiAwKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6ICgodGhpcy53IC8gMykgPj4gMCkgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJyA6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmVydGljYWwtYWxpZ24nIDogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLXRvcCcgOiAoKHRoaXMudyAvIDMpID4+IDApICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tbGVmdCcgOiAnLScgKyAoKHRoaXMudyAqIDMgLyA0ICsgMikgPj4gMCkgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcicgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQnIDogdGhpcy5vLmZvbnRXZWlnaHQgKyAnICcgKyAoKHRoaXMudyAvIHMpID4+IDApICsgJ3B4ICcgKyB0aGlzLm8uZm9udCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWFsaWduJyA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJyA6IHRoaXMuby5pbnB1dENvbG9yIHx8IHRoaXMuby5mZ0NvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSB8fCB0aGlzLmkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNoYW5nZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmN2ID0gdjtcbiAgICAgICAgICAgIHRoaXMuJC52YWwodGhpcy5vLmZvcm1hdCh2KSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hbmdsZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gKHYgLSB0aGlzLm8ubWluKSAqIHRoaXMuYW5nbGVBcmMgLyAodGhpcy5vLm1heCAtIHRoaXMuby5taW4pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXJjID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICB2YXIgc2EsIGVhO1xuICAgICAgICAgIHYgPSB0aGlzLmFuZ2xlKHYpO1xuICAgICAgICAgIGlmICh0aGlzLm8uZmxpcCkge1xuICAgICAgICAgICAgICBzYSA9IHRoaXMuZW5kQW5nbGUgKyAwLjAwMDAxO1xuICAgICAgICAgICAgICBlYSA9IHNhIC0gdiAtIDAuMDAwMDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2EgPSB0aGlzLnN0YXJ0QW5nbGUgLSAwLjAwMDAxO1xuICAgICAgICAgICAgICBlYSA9IHNhICsgdiArIDAuMDAwMDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuby5jdXJzb3JcbiAgICAgICAgICAgICAgJiYgKHNhID0gZWEgLSB0aGlzLmN1cnNvckV4dClcbiAgICAgICAgICAgICAgJiYgKGVhID0gZWEgKyB0aGlzLmN1cnNvckV4dCk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzOiBzYSxcbiAgICAgICAgICAgICAgZTogZWEsXG4gICAgICAgICAgICAgIGQ6IHRoaXMuby5mbGlwICYmICF0aGlzLm8uY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuZywgICAgICAgICAgICAgICAgIC8vIGNvbnRleHRcbiAgICAgICAgICAgICAgICBhID0gdGhpcy5hcmModGhpcy5jdiksICAgICAgLy8gQXJjXG4gICAgICAgICAgICAgICAgcGEsICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZXZpb3VzIGFyY1xuICAgICAgICAgICAgICAgIHIgPSAxO1xuXG4gICAgICAgICAgICBjLmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICAgICAgYy5saW5lQ2FwID0gdGhpcy5saW5lQ2FwO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vLmJnQ29sb3IgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMuby5iZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLnh5LCB0aGlzLnh5LCB0aGlzLnJhZGl1cywgdGhpcy5lbmRBbmdsZSAtIDAuMDAwMDEsIHRoaXMuc3RhcnRBbmdsZSArIDAuMDAwMDEsIHRydWUpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm8uZGlzcGxheVByZXZpb3VzKSB7XG4gICAgICAgICAgICAgICAgcGEgPSB0aGlzLmFyYyh0aGlzLnYpO1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMucENvbG9yO1xuICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueHksIHRoaXMueHksIHRoaXMucmFkaXVzLCBwYS5zLCBwYS5lLCBwYS5kKTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHIgPSB0aGlzLmN2ID09IHRoaXMudjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSByID8gdGhpcy5vLmZnQ29sb3IgOiB0aGlzLmZnQ29sb3IgO1xuICAgICAgICAgICAgYy5hcmModGhpcy54eSwgdGhpcy54eSwgdGhpcy5yYWRpdXMsIGEucywgYS5lLCBhLmQpO1xuICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsKHRoaXMudik7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgICQuZm4uZGlhbCA9ICQuZm4ua25vYiA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgay5EaWFsKCk7XG4gICAgICAgICAgICAgICAgZC5vID0gbztcbiAgICAgICAgICAgICAgICBkLiQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGQucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICkucGFyZW50KCk7XG4gICAgfTtcblxufSkpO1xuIiwiJ3VzZSBzdHJpY3QnOyhmdW5jdGlvbihmYWN0b3J5LGpRdWVyeSxaZXB0byl7aWYodHlwZW9mIGRlZmluZT09PSdmdW5jdGlvbicmJmRlZmluZS5hbWQpe2RlZmluZShbJ2pxdWVyeSddLGZhY3RvcnkpO31lbHNlIGlmKHR5cGVvZiBleHBvcnRzPT09J29iamVjdCcpe21vZHVsZS5leHBvcnRzPWZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO31lbHNle2ZhY3RvcnkoalF1ZXJ5fHxaZXB0byk7fX0oZnVuY3Rpb24oJCl7dmFyIE1hc2s9ZnVuY3Rpb24oZWwsbWFzayxvcHRpb25zKXt2YXIgcD17aW52YWxpZDpbXSxnZXRDYXJldDpmdW5jdGlvbigpe3RyeXt2YXIgc2VsLHBvcz0wLGN0cmw9ZWwuZ2V0KDApLGRTZWw9ZG9jdW1lbnQuc2VsZWN0aW9uLGNTZWxTdGFydD1jdHJsLnNlbGVjdGlvblN0YXJ0O2lmKGRTZWwmJm5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoJ01TSUUgMTAnKT09PS0xKXtzZWw9ZFNlbC5jcmVhdGVSYW5nZSgpO3NlbC5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsLXAudmFsKCkubGVuZ3RoKTtwb3M9c2VsLnRleHQubGVuZ3RoO31lbHNlIGlmKGNTZWxTdGFydHx8Y1NlbFN0YXJ0PT09JzAnKXtwb3M9Y1NlbFN0YXJ0O31yZXR1cm4gcG9zO31jYXRjaChlKXt9fSxzZXRDYXJldDpmdW5jdGlvbihwb3Mpe3RyeXtpZihlbC5pcygnOmZvY3VzJykpe3ZhciByYW5nZSxjdHJsPWVsLmdldCgwKTtpZihjdHJsLnNldFNlbGVjdGlvblJhbmdlKXtjdHJsLmZvY3VzKCk7Y3RybC5zZXRTZWxlY3Rpb25SYW5nZShwb3MscG9zKTt9ZWxzZXtyYW5nZT1jdHJsLmNyZWF0ZVRleHRSYW5nZSgpO3JhbmdlLmNvbGxhcHNlKHRydWUpO3JhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicscG9zKTtyYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicscG9zKTtyYW5nZS5zZWxlY3QoKTt9fX1jYXRjaChlKXt9fSxldmVudHM6ZnVuY3Rpb24oKXtlbC5vbigna2V5ZG93bi5tYXNrJyxmdW5jdGlvbihlKXtlbC5kYXRhKCdtYXNrLWtleWNvZGUnLGUua2V5Q29kZXx8ZS53aGljaCk7fSkub24oJC5qTWFza0dsb2JhbHMudXNlSW5wdXQ/J2lucHV0Lm1hc2snOidrZXl1cC5tYXNrJyxwLmJlaGF2aW91cikub24oJ3Bhc3RlLm1hc2sgZHJvcC5tYXNrJyxmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlbC5rZXlkb3duKCkua2V5dXAoKTt9LDEwMCk7fSkub24oJ2NoYW5nZS5tYXNrJyxmdW5jdGlvbigpe2VsLmRhdGEoJ2NoYW5nZWQnLHRydWUpO30pLm9uKCdibHVyLm1hc2snLGZ1bmN0aW9uKCl7aWYob2xkVmFsdWUhPT1wLnZhbCgpJiYhZWwuZGF0YSgnY2hhbmdlZCcpKXtlbC50cmlnZ2VyKCdjaGFuZ2UnKTt9ZWwuZGF0YSgnY2hhbmdlZCcsZmFsc2UpO30pLm9uKCdibHVyLm1hc2snLGZ1bmN0aW9uKCl7b2xkVmFsdWU9cC52YWwoKTt9KS5vbignZm9jdXMubWFzaycsZnVuY3Rpb24oZSl7aWYob3B0aW9ucy5zZWxlY3RPbkZvY3VzPT09dHJ1ZSl7JChlLnRhcmdldCkuc2VsZWN0KCk7fX0pLm9uKCdmb2N1c291dC5tYXNrJyxmdW5jdGlvbigpe2lmKG9wdGlvbnMuY2xlYXJJZk5vdE1hdGNoJiYhcmVnZXhNYXNrLnRlc3QocC52YWwoKSkpe3AudmFsKCcnKTt9fSk7fSxnZXRSZWdleE1hc2s6ZnVuY3Rpb24oKXt2YXIgbWFza0NodW5rcz1bXSx0cmFuc2xhdGlvbixwYXR0ZXJuLG9wdGlvbmFsLHJlY3Vyc2l2ZSxvUmVjdXJzaXZlLHI7Zm9yKHZhciBpPTA7aTxtYXNrLmxlbmd0aDtpKyspe3RyYW5zbGF0aW9uPWpNYXNrLnRyYW5zbGF0aW9uW21hc2suY2hhckF0KGkpXTtpZih0cmFuc2xhdGlvbil7cGF0dGVybj10cmFuc2xhdGlvbi5wYXR0ZXJuLnRvU3RyaW5nKCkucmVwbGFjZSgvLnsxfSR8Xi57MX0vZywnJyk7b3B0aW9uYWw9dHJhbnNsYXRpb24ub3B0aW9uYWw7cmVjdXJzaXZlPXRyYW5zbGF0aW9uLnJlY3Vyc2l2ZTtpZihyZWN1cnNpdmUpe21hc2tDaHVua3MucHVzaChtYXNrLmNoYXJBdChpKSk7b1JlY3Vyc2l2ZT17ZGlnaXQ6bWFzay5jaGFyQXQoaSkscGF0dGVybjpwYXR0ZXJufTt9ZWxzZXttYXNrQ2h1bmtzLnB1c2goIW9wdGlvbmFsJiYhcmVjdXJzaXZlP3BhdHRlcm46KHBhdHRlcm4rJz8nKSk7fX1lbHNle21hc2tDaHVua3MucHVzaChtYXNrLmNoYXJBdChpKS5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csJ1xcXFwkJicpKTt9fXI9bWFza0NodW5rcy5qb2luKCcnKTtpZihvUmVjdXJzaXZlKXtyPXIucmVwbGFjZShuZXcgUmVnRXhwKCcoJytvUmVjdXJzaXZlLmRpZ2l0KycoLionK29SZWN1cnNpdmUuZGlnaXQrJyk/KScpLCcoJDEpPycpLnJlcGxhY2UobmV3IFJlZ0V4cChvUmVjdXJzaXZlLmRpZ2l0LCdnJyksb1JlY3Vyc2l2ZS5wYXR0ZXJuKTt9cmV0dXJuIG5ldyBSZWdFeHAocik7fSxkZXN0cm95RXZlbnRzOmZ1bmN0aW9uKCl7ZWwub2ZmKFsnaW5wdXQnLCdrZXlkb3duJywna2V5dXAnLCdwYXN0ZScsJ2Ryb3AnLCdibHVyJywnZm9jdXNvdXQnLCcnXS5qb2luKCcubWFzayAnKSk7fSx2YWw6ZnVuY3Rpb24odil7dmFyIGlzSW5wdXQ9ZWwuaXMoJ2lucHV0JyksbWV0aG9kPWlzSW5wdXQ/J3ZhbCc6J3RleHQnLHI7aWYoYXJndW1lbnRzLmxlbmd0aD4wKXtpZihlbFttZXRob2RdKCkhPT12KXtlbFttZXRob2RdKHYpO31yPWVsO31lbHNle3I9ZWxbbWV0aG9kXSgpO31yZXR1cm4gcjt9LGdldE1DaGFyc0JlZm9yZUNvdW50OmZ1bmN0aW9uKGluZGV4LG9uQ2xlYW5WYWwpe2Zvcih2YXIgY291bnQ9MCxpPTAsbWFza0w9bWFzay5sZW5ndGg7aTxtYXNrTCYmaTxpbmRleDtpKyspe2lmKCFqTWFzay50cmFuc2xhdGlvblttYXNrLmNoYXJBdChpKV0pe2luZGV4PW9uQ2xlYW5WYWw/aW5kZXgrMTppbmRleDtjb3VudCsrO319cmV0dXJuIGNvdW50O30sY2FyZXRQb3M6ZnVuY3Rpb24ob3JpZ2luYWxDYXJldFBvcyxvbGRMZW5ndGgsbmV3TGVuZ3RoLG1hc2tEaWYpe3ZhciB0cmFuc2xhdGlvbj1qTWFzay50cmFuc2xhdGlvblttYXNrLmNoYXJBdChNYXRoLm1pbihvcmlnaW5hbENhcmV0UG9zLTEsbWFzay5sZW5ndGgtMSkpXTtyZXR1cm4hdHJhbnNsYXRpb24/cC5jYXJldFBvcyhvcmlnaW5hbENhcmV0UG9zKzEsb2xkTGVuZ3RoLG5ld0xlbmd0aCxtYXNrRGlmKTpNYXRoLm1pbihvcmlnaW5hbENhcmV0UG9zK25ld0xlbmd0aC1vbGRMZW5ndGgtbWFza0RpZixuZXdMZW5ndGgpO30sYmVoYXZpb3VyOmZ1bmN0aW9uKGUpe2U9ZXx8d2luZG93LmV2ZW50O3AuaW52YWxpZD1bXTt2YXIga2V5Q29kZT1lbC5kYXRhKCdtYXNrLWtleWNvZGUnKTtpZigkLmluQXJyYXkoa2V5Q29kZSxqTWFzay5ieVBhc3NLZXlzKT09PS0xKXt2YXIgY2FyZXRQb3M9cC5nZXRDYXJldCgpLGN1cnJWYWw9cC52YWwoKSxjdXJyVmFsTD1jdXJyVmFsLmxlbmd0aCxuZXdWYWw9cC5nZXRNYXNrZWQoKSxuZXdWYWxMPW5ld1ZhbC5sZW5ndGgsbWFza0RpZj1wLmdldE1DaGFyc0JlZm9yZUNvdW50KG5ld1ZhbEwtMSktcC5nZXRNQ2hhcnNCZWZvcmVDb3VudChjdXJyVmFsTC0xKSxjaGFuZ2VDYXJldD1jYXJldFBvczxjdXJyVmFsTDtwLnZhbChuZXdWYWwpO2lmKGNoYW5nZUNhcmV0KXtpZighKGtleUNvZGU9PT04fHxrZXlDb2RlPT09NDYpKXtjYXJldFBvcz1wLmNhcmV0UG9zKGNhcmV0UG9zLGN1cnJWYWxMLG5ld1ZhbEwsbWFza0RpZik7fXAuc2V0Q2FyZXQoY2FyZXRQb3MpO31yZXR1cm4gcC5jYWxsYmFja3MoZSk7fX0sZ2V0TWFza2VkOmZ1bmN0aW9uKHNraXBNYXNrQ2hhcnMsdmFsKXt2YXIgYnVmPVtdLHZhbHVlPXZhbD09PXVuZGVmaW5lZD9wLnZhbCgpOnZhbCsnJyxtPTAsbWFza0xlbj1tYXNrLmxlbmd0aCx2PTAsdmFsTGVuPXZhbHVlLmxlbmd0aCxvZmZzZXQ9MSxhZGRNZXRob2Q9J3B1c2gnLHJlc2V0UG9zPS0xLGxhc3RNYXNrQ2hhcixjaGVjaztpZihvcHRpb25zLnJldmVyc2Upe2FkZE1ldGhvZD0ndW5zaGlmdCc7b2Zmc2V0PS0xO2xhc3RNYXNrQ2hhcj0wO209bWFza0xlbi0xO3Y9dmFsTGVuLTE7Y2hlY2s9ZnVuY3Rpb24oKXtyZXR1cm4gbT4tMSYmdj4tMTt9O31lbHNle2xhc3RNYXNrQ2hhcj1tYXNrTGVuLTE7Y2hlY2s9ZnVuY3Rpb24oKXtyZXR1cm4gbTxtYXNrTGVuJiZ2PHZhbExlbjt9O313aGlsZShjaGVjaygpKXt2YXIgbWFza0RpZ2l0PW1hc2suY2hhckF0KG0pLHZhbERpZ2l0PXZhbHVlLmNoYXJBdCh2KSx0cmFuc2xhdGlvbj1qTWFzay50cmFuc2xhdGlvblttYXNrRGlnaXRdO2lmKHRyYW5zbGF0aW9uKXtpZih2YWxEaWdpdC5tYXRjaCh0cmFuc2xhdGlvbi5wYXR0ZXJuKSl7YnVmW2FkZE1ldGhvZF0odmFsRGlnaXQpO2lmKHRyYW5zbGF0aW9uLnJlY3Vyc2l2ZSl7aWYocmVzZXRQb3M9PT0tMSl7cmVzZXRQb3M9bTt9ZWxzZSBpZihtPT09bGFzdE1hc2tDaGFyKXttPXJlc2V0UG9zLW9mZnNldDt9aWYobGFzdE1hc2tDaGFyPT09cmVzZXRQb3Mpe20tPW9mZnNldDt9fW0rPW9mZnNldDt9ZWxzZSBpZih0cmFuc2xhdGlvbi5vcHRpb25hbCl7bSs9b2Zmc2V0O3YtPW9mZnNldDt9ZWxzZSBpZih0cmFuc2xhdGlvbi5mYWxsYmFjayl7YnVmW2FkZE1ldGhvZF0odHJhbnNsYXRpb24uZmFsbGJhY2spO20rPW9mZnNldDt2LT1vZmZzZXQ7fWVsc2V7cC5pbnZhbGlkLnB1c2goe3A6dix2OnZhbERpZ2l0LGU6dHJhbnNsYXRpb24ucGF0dGVybn0pO312Kz1vZmZzZXQ7fWVsc2V7aWYoIXNraXBNYXNrQ2hhcnMpe2J1ZlthZGRNZXRob2RdKG1hc2tEaWdpdCk7fWlmKHZhbERpZ2l0PT09bWFza0RpZ2l0KXt2Kz1vZmZzZXQ7fW0rPW9mZnNldDt9fXZhciBsYXN0TWFza0NoYXJEaWdpdD1tYXNrLmNoYXJBdChsYXN0TWFza0NoYXIpO2lmKG1hc2tMZW49PT12YWxMZW4rMSYmIWpNYXNrLnRyYW5zbGF0aW9uW2xhc3RNYXNrQ2hhckRpZ2l0XSl7YnVmLnB1c2gobGFzdE1hc2tDaGFyRGlnaXQpO31yZXR1cm4gYnVmLmpvaW4oJycpO30sY2FsbGJhY2tzOmZ1bmN0aW9uKGUpe3ZhciB2YWw9cC52YWwoKSxjaGFuZ2VkPXZhbCE9PW9sZFZhbHVlLGRlZmF1bHRBcmdzPVt2YWwsZSxlbCxvcHRpb25zXSxjYWxsYmFjaz1mdW5jdGlvbihuYW1lLGNyaXRlcmlhLGFyZ3Mpe2lmKHR5cGVvZiBvcHRpb25zW25hbWVdPT09J2Z1bmN0aW9uJyYmY3JpdGVyaWEpe29wdGlvbnNbbmFtZV0uYXBwbHkodGhpcyxhcmdzKTt9fTtjYWxsYmFjaygnb25DaGFuZ2UnLGNoYW5nZWQ9PT10cnVlLGRlZmF1bHRBcmdzKTtjYWxsYmFjaygnb25LZXlQcmVzcycsY2hhbmdlZD09PXRydWUsZGVmYXVsdEFyZ3MpO2NhbGxiYWNrKCdvbkNvbXBsZXRlJyx2YWwubGVuZ3RoPT09bWFzay5sZW5ndGgsZGVmYXVsdEFyZ3MpO2NhbGxiYWNrKCdvbkludmFsaWQnLHAuaW52YWxpZC5sZW5ndGg+MCxbdmFsLGUsZWwscC5pbnZhbGlkLG9wdGlvbnNdKTt9fTtlbD0kKGVsKTt2YXIgak1hc2s9dGhpcyxvbGRWYWx1ZT1wLnZhbCgpLHJlZ2V4TWFzazttYXNrPXR5cGVvZiBtYXNrPT09J2Z1bmN0aW9uJz9tYXNrKHAudmFsKCksdW5kZWZpbmVkLGVsLG9wdGlvbnMpOm1hc2s7ak1hc2subWFzaz1tYXNrO2pNYXNrLm9wdGlvbnM9b3B0aW9ucztqTWFzay5yZW1vdmU9ZnVuY3Rpb24oKXt2YXIgY2FyZXQ9cC5nZXRDYXJldCgpO3AuZGVzdHJveUV2ZW50cygpO3AudmFsKGpNYXNrLmdldENsZWFuVmFsKCkpO3Auc2V0Q2FyZXQoY2FyZXQtcC5nZXRNQ2hhcnNCZWZvcmVDb3VudChjYXJldCkpO3JldHVybiBlbDt9O2pNYXNrLmdldENsZWFuVmFsPWZ1bmN0aW9uKCl7cmV0dXJuIHAuZ2V0TWFza2VkKHRydWUpO307ak1hc2suZ2V0TWFza2VkVmFsPWZ1bmN0aW9uKHZhbCl7cmV0dXJuIHAuZ2V0TWFza2VkKGZhbHNlLHZhbCk7fTtqTWFzay5pbml0PWZ1bmN0aW9uKG9ubHlNYXNrKXtvbmx5TWFzaz1vbmx5TWFza3x8ZmFsc2U7b3B0aW9ucz1vcHRpb25zfHx7fTtqTWFzay5jbGVhcklmTm90TWF0Y2g9JC5qTWFza0dsb2JhbHMuY2xlYXJJZk5vdE1hdGNoO2pNYXNrLmJ5UGFzc0tleXM9JC5qTWFza0dsb2JhbHMuYnlQYXNzS2V5cztqTWFzay50cmFuc2xhdGlvbj0kLmV4dGVuZCh7fSwkLmpNYXNrR2xvYmFscy50cmFuc2xhdGlvbixvcHRpb25zLnRyYW5zbGF0aW9uKTtqTWFzaz0kLmV4dGVuZCh0cnVlLHt9LGpNYXNrLG9wdGlvbnMpO3JlZ2V4TWFzaz1wLmdldFJlZ2V4TWFzaygpO2lmKG9ubHlNYXNrPT09ZmFsc2Upe2lmKG9wdGlvbnMucGxhY2Vob2xkZXIpe2VsLmF0dHIoJ3BsYWNlaG9sZGVyJyxvcHRpb25zLnBsYWNlaG9sZGVyKTt9aWYoZWwuZGF0YSgnbWFzaycpKXtlbC5hdHRyKCdhdXRvY29tcGxldGUnLCdvZmYnKTt9cC5kZXN0cm95RXZlbnRzKCk7cC5ldmVudHMoKTt2YXIgY2FyZXQ9cC5nZXRDYXJldCgpO3AudmFsKHAuZ2V0TWFza2VkKCkpO3Auc2V0Q2FyZXQoY2FyZXQrcC5nZXRNQ2hhcnNCZWZvcmVDb3VudChjYXJldCx0cnVlKSk7fWVsc2V7cC5ldmVudHMoKTtwLnZhbChwLmdldE1hc2tlZCgpKTt9fTtqTWFzay5pbml0KCFlbC5pcygnaW5wdXQnKSk7fTskLm1hc2tXYXRjaGVycz17fTt2YXIgSFRNTEF0dHJpYnV0ZXM9ZnVuY3Rpb24oKXt2YXIgaW5wdXQ9JCh0aGlzKSxvcHRpb25zPXt9LHByZWZpeD0nZGF0YS1tYXNrLScsbWFzaz1pbnB1dC5hdHRyKCdkYXRhLW1hc2snKTtpZihpbnB1dC5hdHRyKHByZWZpeCsncmV2ZXJzZScpKXtvcHRpb25zLnJldmVyc2U9dHJ1ZTt9aWYoaW5wdXQuYXR0cignZGF0YS1yZXF1aXJlJykpe29wdGlvbnMuY2xlYXJJZk5vdE1hdGNoPXRydWU7fWlmKGlucHV0LmF0dHIocHJlZml4KydzZWxlY3RvbmZvY3VzJyk9PT0ndHJ1ZScpe29wdGlvbnMuc2VsZWN0T25Gb2N1cz10cnVlO31pZihub3RTYW1lTWFza09iamVjdChpbnB1dCxtYXNrLG9wdGlvbnMpKXtyZXR1cm4gaW5wdXQuZGF0YSgnbWFzaycsbmV3IE1hc2sodGhpcyxtYXNrLG9wdGlvbnMpKTt9fSxub3RTYW1lTWFza09iamVjdD1mdW5jdGlvbihmaWVsZCxtYXNrLG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307dmFyIG1hc2tPYmplY3Q9JChmaWVsZCkuZGF0YSgnbWFzaycpLHN0cmluZ2lmeT1KU09OLnN0cmluZ2lmeSx2YWx1ZT0kKGZpZWxkKS52YWwoKXx8JChmaWVsZCkudGV4dCgpO3RyeXtpZih0eXBlb2YgbWFzaz09PSdmdW5jdGlvbicpe21hc2s9bWFzayh2YWx1ZSk7fXJldHVybiB0eXBlb2YgbWFza09iamVjdCE9PSdvYmplY3QnfHxzdHJpbmdpZnkobWFza09iamVjdC5vcHRpb25zKSE9PXN0cmluZ2lmeShvcHRpb25zKXx8bWFza09iamVjdC5tYXNrIT09bWFzazt9Y2F0Y2goZSl7fX0sZXZlbnRTdXBwb3J0ZWQ9ZnVuY3Rpb24oZXZlbnROYW1lKXt2YXIgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksaXNTdXBwb3J0ZWQ7ZXZlbnROYW1lPSdvbicrZXZlbnROYW1lO2lzU3VwcG9ydGVkPShldmVudE5hbWUgaW4gZWwpO2lmKCFpc1N1cHBvcnRlZCl7ZWwuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwncmV0dXJuOycpO2lzU3VwcG9ydGVkPXR5cGVvZiBlbFtldmVudE5hbWVdPT09J2Z1bmN0aW9uJzt9ZWw9bnVsbDtyZXR1cm4gaXNTdXBwb3J0ZWQ7fTskLmZuLm1hc2s9ZnVuY3Rpb24obWFzayxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9O3ZhciBzZWxlY3Rvcj10aGlzLnNlbGVjdG9yLGdsb2JhbHM9JC5qTWFza0dsb2JhbHMsaW50ZXJ2YWw9Z2xvYmFscy53YXRjaEludGVydmFsLHdhdGNoSW5wdXRzPW9wdGlvbnMud2F0Y2hJbnB1dHN8fGdsb2JhbHMud2F0Y2hJbnB1dHMsbWFza0Z1bmN0aW9uPWZ1bmN0aW9uKCl7aWYobm90U2FtZU1hc2tPYmplY3QodGhpcyxtYXNrLG9wdGlvbnMpKXtyZXR1cm4gJCh0aGlzKS5kYXRhKCdtYXNrJyxuZXcgTWFzayh0aGlzLG1hc2ssb3B0aW9ucykpO319OyQodGhpcykuZWFjaChtYXNrRnVuY3Rpb24pO2lmKHNlbGVjdG9yJiZzZWxlY3RvciE9PScnJiZ3YXRjaElucHV0cyl7Y2xlYXJJbnRlcnZhbCgkLm1hc2tXYXRjaGVyc1tzZWxlY3Rvcl0pOyQubWFza1dhdGNoZXJzW3NlbGVjdG9yXT1zZXRJbnRlcnZhbChmdW5jdGlvbigpeyQoZG9jdW1lbnQpLmZpbmQoc2VsZWN0b3IpLmVhY2gobWFza0Z1bmN0aW9uKTt9LGludGVydmFsKTt9cmV0dXJuIHRoaXM7fTskLmZuLm1hc2tlZD1mdW5jdGlvbih2YWwpe3JldHVybiB0aGlzLmRhdGEoJ21hc2snKS5nZXRNYXNrZWRWYWwodmFsKTt9OyQuZm4udW5tYXNrPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbCgkLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXSk7ZGVsZXRlICQubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZGF0YU1hc2s9JCh0aGlzKS5kYXRhKCdtYXNrJyk7aWYoZGF0YU1hc2spe2RhdGFNYXNrLnJlbW92ZSgpLnJlbW92ZURhdGEoJ21hc2snKTt9fSk7fTskLmZuLmNsZWFuVmFsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YSgnbWFzaycpLmdldENsZWFuVmFsKCk7fTskLmFwcGx5RGF0YU1hc2s9ZnVuY3Rpb24oc2VsZWN0b3Ipe3NlbGVjdG9yPXNlbGVjdG9yfHwkLmpNYXNrR2xvYmFscy5tYXNrRWxlbWVudHM7dmFyICRzZWxlY3Rvcj0oc2VsZWN0b3IgaW5zdGFuY2VvZiAkKT9zZWxlY3RvcjokKHNlbGVjdG9yKTskc2VsZWN0b3IuZmlsdGVyKCQuak1hc2tHbG9iYWxzLmRhdGFNYXNrQXR0cikuZWFjaChIVE1MQXR0cmlidXRlcyk7fTt2YXIgZ2xvYmFscz17bWFza0VsZW1lbnRzOidpbnB1dCx0ZCxzcGFuLGRpdicsZGF0YU1hc2tBdHRyOicqW2RhdGEtbWFza10nLGRhdGFNYXNrOnRydWUsd2F0Y2hJbnRlcnZhbDozMDAsd2F0Y2hJbnB1dHM6dHJ1ZSx1c2VJbnB1dDpldmVudFN1cHBvcnRlZCgnaW5wdXQnKSx3YXRjaERhdGFNYXNrOmZhbHNlLGJ5UGFzc0tleXM6WzksMTYsMTcsMTgsMzYsMzcsMzgsMzksNDAsOTFdLHRyYW5zbGF0aW9uOnsnMCc6e3BhdHRlcm46L1xcZC99LCc5Jzp7cGF0dGVybjovXFxkLyxvcHRpb25hbDp0cnVlfSwnIyc6e3BhdHRlcm46L1xcZC8scmVjdXJzaXZlOnRydWV9LCdBJzp7cGF0dGVybjovW2EtekEtWjAtOV0vfSwnUyc6e3BhdHRlcm46L1thLXpBLVpdL319fTskLmpNYXNrR2xvYmFscz0kLmpNYXNrR2xvYmFsc3x8e307Z2xvYmFscz0kLmpNYXNrR2xvYmFscz0kLmV4dGVuZCh0cnVlLHt9LGdsb2JhbHMsJC5qTWFza0dsb2JhbHMpO2lmKGdsb2JhbHMuZGF0YU1hc2speyQuYXBwbHlEYXRhTWFzaygpO31zZXRJbnRlcnZhbChmdW5jdGlvbigpe2lmKCQuak1hc2tHbG9iYWxzLndhdGNoRGF0YU1hc2speyQuYXBwbHlEYXRhTWFzaygpO319LGdsb2JhbHMud2F0Y2hJbnRlcnZhbCk7fSx3aW5kb3cualF1ZXJ5LHdpbmRvdy5aZXB0bykpOyIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS45LjBcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbihmdW5jdGlvbihpKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1pKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkoalF1ZXJ5KX0pKGZ1bmN0aW9uKGkpe1widXNlIHN0cmljdFwiO3ZhciBlPXdpbmRvdy5TbGlja3x8e307ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSxvKXt2YXIgcyxuPXRoaXM7bi5kZWZhdWx0cz17YWNjZXNzaWJpbGl0eTohMCxhZGFwdGl2ZUhlaWdodDohMSxhcHBlbmRBcnJvd3M6aShlKSxhcHBlbmREb3RzOmkoZSksYXJyb3dzOiEwLGFzTmF2Rm9yOm51bGwscHJldkFycm93Oic8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsbmV4dEFycm93Oic8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLGF1dG9wbGF5OiExLGF1dG9wbGF5U3BlZWQ6M2UzLGNlbnRlck1vZGU6ITEsY2VudGVyUGFkZGluZzpcIjUwcHhcIixjc3NFYXNlOlwiZWFzZVwiLGN1c3RvbVBhZ2luZzpmdW5jdGlvbihlLHQpe3JldHVybiBpKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQodCsxKX0sZG90czohMSxkb3RzQ2xhc3M6XCJzbGljay1kb3RzXCIsZHJhZ2dhYmxlOiEwLGVhc2luZzpcImxpbmVhclwiLGVkZ2VGcmljdGlvbjouMzUsZmFkZTohMSxmb2N1c09uU2VsZWN0OiExLGZvY3VzT25DaGFuZ2U6ITEsaW5maW5pdGU6ITAsaW5pdGlhbFNsaWRlOjAsbGF6eUxvYWQ6XCJvbmRlbWFuZFwiLG1vYmlsZUZpcnN0OiExLHBhdXNlT25Ib3ZlcjohMCxwYXVzZU9uRm9jdXM6ITAscGF1c2VPbkRvdHNIb3ZlcjohMSxyZXNwb25kVG86XCJ3aW5kb3dcIixyZXNwb25zaXZlOm51bGwscm93czoxLHJ0bDohMSxzbGlkZTpcIlwiLHNsaWRlc1BlclJvdzoxLHNsaWRlc1RvU2hvdzoxLHNsaWRlc1RvU2Nyb2xsOjEsc3BlZWQ6NTAwLHN3aXBlOiEwLHN3aXBlVG9TbGlkZTohMSx0b3VjaE1vdmU6ITAsdG91Y2hUaHJlc2hvbGQ6NSx1c2VDU1M6ITAsdXNlVHJhbnNmb3JtOiEwLHZhcmlhYmxlV2lkdGg6ITEsdmVydGljYWw6ITEsdmVydGljYWxTd2lwaW5nOiExLHdhaXRGb3JBbmltYXRlOiEwLHpJbmRleDoxZTN9LG4uaW5pdGlhbHM9e2FuaW1hdGluZzohMSxkcmFnZ2luZzohMSxhdXRvUGxheVRpbWVyOm51bGwsY3VycmVudERpcmVjdGlvbjowLGN1cnJlbnRMZWZ0Om51bGwsY3VycmVudFNsaWRlOjAsZGlyZWN0aW9uOjEsJGRvdHM6bnVsbCxsaXN0V2lkdGg6bnVsbCxsaXN0SGVpZ2h0Om51bGwsbG9hZEluZGV4OjAsJG5leHRBcnJvdzpudWxsLCRwcmV2QXJyb3c6bnVsbCxzY3JvbGxpbmc6ITEsc2xpZGVDb3VudDpudWxsLHNsaWRlV2lkdGg6bnVsbCwkc2xpZGVUcmFjazpudWxsLCRzbGlkZXM6bnVsbCxzbGlkaW5nOiExLHNsaWRlT2Zmc2V0OjAsc3dpcGVMZWZ0Om51bGwsc3dpcGluZzohMSwkbGlzdDpudWxsLHRvdWNoT2JqZWN0Ont9LHRyYW5zZm9ybXNFbmFibGVkOiExLHVuc2xpY2tlZDohMX0saS5leHRlbmQobixuLmluaXRpYWxzKSxuLmFjdGl2ZUJyZWFrcG9pbnQ9bnVsbCxuLmFuaW1UeXBlPW51bGwsbi5hbmltUHJvcD1udWxsLG4uYnJlYWtwb2ludHM9W10sbi5icmVha3BvaW50U2V0dGluZ3M9W10sbi5jc3NUcmFuc2l0aW9ucz0hMSxuLmZvY3Vzc2VkPSExLG4uaW50ZXJydXB0ZWQ9ITEsbi5oaWRkZW49XCJoaWRkZW5cIixuLnBhdXNlZD0hMCxuLnBvc2l0aW9uUHJvcD1udWxsLG4ucmVzcG9uZFRvPW51bGwsbi5yb3dDb3VudD0xLG4uc2hvdWxkQ2xpY2s9ITAsbi4kc2xpZGVyPWkoZSksbi4kc2xpZGVzQ2FjaGU9bnVsbCxuLnRyYW5zZm9ybVR5cGU9bnVsbCxuLnRyYW5zaXRpb25UeXBlPW51bGwsbi52aXNpYmlsaXR5Q2hhbmdlPVwidmlzaWJpbGl0eWNoYW5nZVwiLG4ud2luZG93V2lkdGg9MCxuLndpbmRvd1RpbWVyPW51bGwscz1pKGUpLmRhdGEoXCJzbGlja1wiKXx8e30sbi5vcHRpb25zPWkuZXh0ZW5kKHt9LG4uZGVmYXVsdHMsbyxzKSxuLmN1cnJlbnRTbGlkZT1uLm9wdGlvbnMuaW5pdGlhbFNsaWRlLG4ub3JpZ2luYWxTZXR0aW5ncz1uLm9wdGlvbnMsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbj8obi5oaWRkZW49XCJtb3pIaWRkZW5cIixuLnZpc2liaWxpdHlDaGFuZ2U9XCJtb3p2aXNpYmlsaXR5Y2hhbmdlXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4mJihuLmhpZGRlbj1cIndlYmtpdEhpZGRlblwiLG4udmlzaWJpbGl0eUNoYW5nZT1cIndlYmtpdHZpc2liaWxpdHljaGFuZ2VcIiksbi5hdXRvUGxheT1pLnByb3h5KG4uYXV0b1BsYXksbiksbi5hdXRvUGxheUNsZWFyPWkucHJveHkobi5hdXRvUGxheUNsZWFyLG4pLG4uYXV0b1BsYXlJdGVyYXRvcj1pLnByb3h5KG4uYXV0b1BsYXlJdGVyYXRvcixuKSxuLmNoYW5nZVNsaWRlPWkucHJveHkobi5jaGFuZ2VTbGlkZSxuKSxuLmNsaWNrSGFuZGxlcj1pLnByb3h5KG4uY2xpY2tIYW5kbGVyLG4pLG4uc2VsZWN0SGFuZGxlcj1pLnByb3h5KG4uc2VsZWN0SGFuZGxlcixuKSxuLnNldFBvc2l0aW9uPWkucHJveHkobi5zZXRQb3NpdGlvbixuKSxuLnN3aXBlSGFuZGxlcj1pLnByb3h5KG4uc3dpcGVIYW5kbGVyLG4pLG4uZHJhZ0hhbmRsZXI9aS5wcm94eShuLmRyYWdIYW5kbGVyLG4pLG4ua2V5SGFuZGxlcj1pLnByb3h5KG4ua2V5SGFuZGxlcixuKSxuLmluc3RhbmNlVWlkPXQrKyxuLmh0bWxFeHByPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLyxuLnJlZ2lzdGVyQnJlYWtwb2ludHMoKSxuLmluaXQoITApfXZhciB0PTA7cmV0dXJuIGV9KCksZS5wcm90b3R5cGUuYWN0aXZhdGVBREE9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1hY3RpdmVcIikuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwiZmFsc2VcIn0pLmZpbmQoXCJhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3RcIikuYXR0cih7dGFiaW5kZXg6XCIwXCJ9KX0sZS5wcm90b3R5cGUuYWRkU2xpZGU9ZS5wcm90b3R5cGUuc2xpY2tBZGQ9ZnVuY3Rpb24oZSx0LG8pe3ZhciBzPXRoaXM7aWYoXCJib29sZWFuXCI9PXR5cGVvZiB0KW89dCx0PW51bGw7ZWxzZSBpZih0PDB8fHQ+PXMuc2xpZGVDb3VudClyZXR1cm4hMTtzLnVubG9hZCgpLFwibnVtYmVyXCI9PXR5cGVvZiB0PzA9PT10JiYwPT09cy4kc2xpZGVzLmxlbmd0aD9pKGUpLmFwcGVuZFRvKHMuJHNsaWRlVHJhY2spOm8/aShlKS5pbnNlcnRCZWZvcmUocy4kc2xpZGVzLmVxKHQpKTppKGUpLmluc2VydEFmdGVyKHMuJHNsaWRlcy5lcSh0KSk6bz09PSEwP2koZSkucHJlcGVuZFRvKHMuJHNsaWRlVHJhY2spOmkoZSkuYXBwZW5kVG8ocy4kc2xpZGVUcmFjaykscy4kc2xpZGVzPXMuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKSxzLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCkscy4kc2xpZGVUcmFjay5hcHBlbmQocy4kc2xpZGVzKSxzLiRzbGlkZXMuZWFjaChmdW5jdGlvbihlLHQpe2kodCkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIixlKX0pLHMuJHNsaWRlc0NhY2hlPXMuJHNsaWRlcyxzLnJlaW5pdCgpfSxlLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpZigxPT09aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmaS5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0PT09ITAmJmkub3B0aW9ucy52ZXJ0aWNhbD09PSExKXt2YXIgZT1pLiRzbGlkZXMuZXEoaS5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KCEwKTtpLiRsaXN0LmFuaW1hdGUoe2hlaWdodDplfSxpLm9wdGlvbnMuc3BlZWQpfX0sZS5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIG89e30scz10aGlzO3MuYW5pbWF0ZUhlaWdodCgpLHMub3B0aW9ucy5ydGw9PT0hMCYmcy5vcHRpb25zLnZlcnRpY2FsPT09ITEmJihlPS1lKSxzLnRyYW5zZm9ybXNFbmFibGVkPT09ITE/cy5vcHRpb25zLnZlcnRpY2FsPT09ITE/cy4kc2xpZGVUcmFjay5hbmltYXRlKHtsZWZ0OmV9LHMub3B0aW9ucy5zcGVlZCxzLm9wdGlvbnMuZWFzaW5nLHQpOnMuJHNsaWRlVHJhY2suYW5pbWF0ZSh7dG9wOmV9LHMub3B0aW9ucy5zcGVlZCxzLm9wdGlvbnMuZWFzaW5nLHQpOnMuY3NzVHJhbnNpdGlvbnM9PT0hMT8ocy5vcHRpb25zLnJ0bD09PSEwJiYocy5jdXJyZW50TGVmdD0tcy5jdXJyZW50TGVmdCksaSh7YW5pbVN0YXJ0OnMuY3VycmVudExlZnR9KS5hbmltYXRlKHthbmltU3RhcnQ6ZX0se2R1cmF0aW9uOnMub3B0aW9ucy5zcGVlZCxlYXNpbmc6cy5vcHRpb25zLmVhc2luZyxzdGVwOmZ1bmN0aW9uKGkpe2k9TWF0aC5jZWlsKGkpLHMub3B0aW9ucy52ZXJ0aWNhbD09PSExPyhvW3MuYW5pbVR5cGVdPVwidHJhbnNsYXRlKFwiK2krXCJweCwgMHB4KVwiLHMuJHNsaWRlVHJhY2suY3NzKG8pKToob1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZSgwcHgsXCIraStcInB4KVwiLHMuJHNsaWRlVHJhY2suY3NzKG8pKX0sY29tcGxldGU6ZnVuY3Rpb24oKXt0JiZ0LmNhbGwoKX19KSk6KHMuYXBwbHlUcmFuc2l0aW9uKCksZT1NYXRoLmNlaWwoZSkscy5vcHRpb25zLnZlcnRpY2FsPT09ITE/b1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZTNkKFwiK2UrXCJweCwgMHB4LCAwcHgpXCI6b1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZTNkKDBweCxcIitlK1wicHgsIDBweClcIixzLiRzbGlkZVRyYWNrLmNzcyhvKSx0JiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cy5kaXNhYmxlVHJhbnNpdGlvbigpLHQuY2FsbCgpfSxzLm9wdGlvbnMuc3BlZWQpKX0sZS5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUub3B0aW9ucy5hc05hdkZvcjtyZXR1cm4gdCYmbnVsbCE9PXQmJih0PWkodCkubm90KGUuJHNsaWRlcikpLHR9LGUucHJvdG90eXBlLmFzTmF2Rm9yPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbz10LmdldE5hdlRhcmdldCgpO251bGwhPT1vJiZcIm9iamVjdFwiPT10eXBlb2YgbyYmby5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9aSh0aGlzKS5zbGljayhcImdldFNsaWNrXCIpO3QudW5zbGlja2VkfHx0LnNsaWRlSGFuZGxlcihlLCEwKX0pfSxlLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb249ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcyx0PXt9O2Uub3B0aW9ucy5mYWRlPT09ITE/dFtlLnRyYW5zaXRpb25UeXBlXT1lLnRyYW5zZm9ybVR5cGUrXCIgXCIrZS5vcHRpb25zLnNwZWVkK1wibXMgXCIrZS5vcHRpb25zLmNzc0Vhc2U6dFtlLnRyYW5zaXRpb25UeXBlXT1cIm9wYWNpdHkgXCIrZS5vcHRpb25zLnNwZWVkK1wibXMgXCIrZS5vcHRpb25zLmNzc0Vhc2UsZS5vcHRpb25zLmZhZGU9PT0hMT9lLiRzbGlkZVRyYWNrLmNzcyh0KTplLiRzbGlkZXMuZXEoaSkuY3NzKHQpfSxlLnByb3RvdHlwZS5hdXRvUGxheT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheUNsZWFyKCksaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLmF1dG9QbGF5VGltZXI9c2V0SW50ZXJ2YWwoaS5hdXRvUGxheUl0ZXJhdG9yLGkub3B0aW9ucy5hdXRvcGxheVNwZWVkKSl9LGUucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXI9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuYXV0b1BsYXlUaW1lciYmY2xlYXJJbnRlcnZhbChpLmF1dG9QbGF5VGltZXIpfSxlLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxlPWkuY3VycmVudFNsaWRlK2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtpLnBhdXNlZHx8aS5pbnRlcnJ1cHRlZHx8aS5mb2N1c3NlZHx8KGkub3B0aW9ucy5pbmZpbml0ZT09PSExJiYoMT09PWkuZGlyZWN0aW9uJiZpLmN1cnJlbnRTbGlkZSsxPT09aS5zbGlkZUNvdW50LTE/aS5kaXJlY3Rpb249MDowPT09aS5kaXJlY3Rpb24mJihlPWkuY3VycmVudFNsaWRlLWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxpLmN1cnJlbnRTbGlkZS0xPT09MCYmKGkuZGlyZWN0aW9uPTEpKSksaS5zbGlkZUhhbmRsZXIoZSkpfSxlLnByb3RvdHlwZS5idWlsZEFycm93cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5vcHRpb25zLmFycm93cz09PSEwJiYoZS4kcHJldkFycm93PWkoZS5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1hcnJvd1wiKSxlLiRuZXh0QXJyb3c9aShlLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcyhcInNsaWNrLWFycm93XCIpLGUuc2xpZGVDb3VudD5lLm9wdGlvbnMuc2xpZGVzVG9TaG93PyhlLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIHRhYmluZGV4XCIpLGUuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gdGFiaW5kZXhcIiksZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5wcmV2QXJyb3cpJiZlLiRwcmV2QXJyb3cucHJlcGVuZFRvKGUub3B0aW9ucy5hcHBlbmRBcnJvd3MpLGUuaHRtbEV4cHIudGVzdChlLm9wdGlvbnMubmV4dEFycm93KSYmZS4kbmV4dEFycm93LmFwcGVuZFRvKGUub3B0aW9ucy5hcHBlbmRBcnJvd3MpLGUub3B0aW9ucy5pbmZpbml0ZSE9PSEwJiZlLiRwcmV2QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSk6ZS4kcHJldkFycm93LmFkZChlLiRuZXh0QXJyb3cpLmFkZENsYXNzKFwic2xpY2staGlkZGVuXCIpLmF0dHIoe1wiYXJpYS1kaXNhYmxlZFwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiLTFcIn0pKX0sZS5wcm90b3R5cGUuYnVpbGREb3RzPWZ1bmN0aW9uKCl7dmFyIGUsdCxvPXRoaXM7aWYoby5vcHRpb25zLmRvdHM9PT0hMCYmby5zbGlkZUNvdW50Pm8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpe2ZvcihvLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1kb3R0ZWRcIiksdD1pKFwiPHVsIC8+XCIpLmFkZENsYXNzKG8ub3B0aW9ucy5kb3RzQ2xhc3MpLGU9MDtlPD1vLmdldERvdENvdW50KCk7ZSs9MSl0LmFwcGVuZChpKFwiPGxpIC8+XCIpLmFwcGVuZChvLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcyxvLGUpKSk7by4kZG90cz10LmFwcGVuZFRvKG8ub3B0aW9ucy5hcHBlbmREb3RzKSxvLiRkb3RzLmZpbmQoXCJsaVwiKS5maXJzdCgpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpfX0sZS5wcm90b3R5cGUuYnVpbGRPdXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJHNsaWRlcz1lLiRzbGlkZXIuY2hpbGRyZW4oZS5vcHRpb25zLnNsaWRlK1wiOm5vdCguc2xpY2stY2xvbmVkKVwiKS5hZGRDbGFzcyhcInNsaWNrLXNsaWRlXCIpLGUuc2xpZGVDb3VudD1lLiRzbGlkZXMubGVuZ3RoLGUuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGUsdCl7aSh0KS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLGUpLmRhdGEoXCJvcmlnaW5hbFN0eWxpbmdcIixpKHQpLmF0dHIoXCJzdHlsZVwiKXx8XCJcIil9KSxlLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1zbGlkZXJcIiksZS4kc2xpZGVUcmFjaz0wPT09ZS5zbGlkZUNvdW50P2koJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhlLiRzbGlkZXIpOmUuJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCksZS4kbGlzdD1lLiRzbGlkZVRyYWNrLndyYXAoJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpLGUuJHNsaWRlVHJhY2suY3NzKFwib3BhY2l0eVwiLDApLGUub3B0aW9ucy5jZW50ZXJNb2RlIT09ITAmJmUub3B0aW9ucy5zd2lwZVRvU2xpZGUhPT0hMHx8KGUub3B0aW9ucy5zbGlkZXNUb1Njcm9sbD0xKSxpKFwiaW1nW2RhdGEtbGF6eV1cIixlLiRzbGlkZXIpLm5vdChcIltzcmNdXCIpLmFkZENsYXNzKFwic2xpY2stbG9hZGluZ1wiKSxlLnNldHVwSW5maW5pdGUoKSxlLmJ1aWxkQXJyb3dzKCksZS5idWlsZERvdHMoKSxlLnVwZGF0ZURvdHMoKSxlLnNldFNsaWRlQ2xhc3NlcyhcIm51bWJlclwiPT10eXBlb2YgZS5jdXJyZW50U2xpZGU/ZS5jdXJyZW50U2xpZGU6MCksZS5vcHRpb25zLmRyYWdnYWJsZT09PSEwJiZlLiRsaXN0LmFkZENsYXNzKFwiZHJhZ2dhYmxlXCIpfSxlLnByb3RvdHlwZS5idWlsZFJvd3M9ZnVuY3Rpb24oKXt2YXIgaSxlLHQsbyxzLG4scixsPXRoaXM7aWYobz1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbj1sLiRzbGlkZXIuY2hpbGRyZW4oKSxsLm9wdGlvbnMucm93cz4wKXtmb3Iocj1sLm9wdGlvbnMuc2xpZGVzUGVyUm93Kmwub3B0aW9ucy5yb3dzLHM9TWF0aC5jZWlsKG4ubGVuZ3RoL3IpLGk9MDtpPHM7aSsrKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihlPTA7ZTxsLm9wdGlvbnMucm93cztlKyspe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKHQ9MDt0PGwub3B0aW9ucy5zbGlkZXNQZXJSb3c7dCsrKXt2YXIgYz1pKnIrKGUqbC5vcHRpb25zLnNsaWRlc1BlclJvdyt0KTtuLmdldChjKSYmYS5hcHBlbmRDaGlsZChuLmdldChjKSl9ZC5hcHBlbmRDaGlsZChhKX1vLmFwcGVuZENoaWxkKGQpfWwuJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvKSxsLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY3NzKHt3aWR0aDoxMDAvbC5vcHRpb25zLnNsaWRlc1BlclJvdytcIiVcIixkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9KX19LGUucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZT1mdW5jdGlvbihlLHQpe3ZhciBvLHMsbixyPXRoaXMsbD0hMSxkPXIuJHNsaWRlci53aWR0aCgpLGE9d2luZG93LmlubmVyV2lkdGh8fGkod2luZG93KS53aWR0aCgpO2lmKFwid2luZG93XCI9PT1yLnJlc3BvbmRUbz9uPWE6XCJzbGlkZXJcIj09PXIucmVzcG9uZFRvP249ZDpcIm1pblwiPT09ci5yZXNwb25kVG8mJihuPU1hdGgubWluKGEsZCkpLHIub3B0aW9ucy5yZXNwb25zaXZlJiZyLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgmJm51bGwhPT1yLm9wdGlvbnMucmVzcG9uc2l2ZSl7cz1udWxsO2ZvcihvIGluIHIuYnJlYWtwb2ludHMpci5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShvKSYmKHIub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdD09PSExP248ci5icmVha3BvaW50c1tvXSYmKHM9ci5icmVha3BvaW50c1tvXSk6bj5yLmJyZWFrcG9pbnRzW29dJiYocz1yLmJyZWFrcG9pbnRzW29dKSk7bnVsbCE9PXM/bnVsbCE9PXIuYWN0aXZlQnJlYWtwb2ludD8ocyE9PXIuYWN0aXZlQnJlYWtwb2ludHx8dCkmJihyLmFjdGl2ZUJyZWFrcG9pbnQ9cyxcInVuc2xpY2tcIj09PXIuYnJlYWtwb2ludFNldHRpbmdzW3NdP3IudW5zbGljayhzKTooci5vcHRpb25zPWkuZXh0ZW5kKHt9LHIub3JpZ2luYWxTZXR0aW5ncyxyLmJyZWFrcG9pbnRTZXR0aW5nc1tzXSksZT09PSEwJiYoci5jdXJyZW50U2xpZGU9ci5vcHRpb25zLmluaXRpYWxTbGlkZSksci5yZWZyZXNoKGUpKSxsPXMpOihyLmFjdGl2ZUJyZWFrcG9pbnQ9cyxcInVuc2xpY2tcIj09PXIuYnJlYWtwb2ludFNldHRpbmdzW3NdP3IudW5zbGljayhzKTooci5vcHRpb25zPWkuZXh0ZW5kKHt9LHIub3JpZ2luYWxTZXR0aW5ncyxyLmJyZWFrcG9pbnRTZXR0aW5nc1tzXSksZT09PSEwJiYoci5jdXJyZW50U2xpZGU9ci5vcHRpb25zLmluaXRpYWxTbGlkZSksci5yZWZyZXNoKGUpKSxsPXMpOm51bGwhPT1yLmFjdGl2ZUJyZWFrcG9pbnQmJihyLmFjdGl2ZUJyZWFrcG9pbnQ9bnVsbCxyLm9wdGlvbnM9ci5vcmlnaW5hbFNldHRpbmdzLGU9PT0hMCYmKHIuY3VycmVudFNsaWRlPXIub3B0aW9ucy5pbml0aWFsU2xpZGUpLHIucmVmcmVzaChlKSxsPXMpLGV8fGw9PT0hMXx8ci4kc2xpZGVyLnRyaWdnZXIoXCJicmVha3BvaW50XCIsW3IsbF0pfX0sZS5wcm90b3R5cGUuY2hhbmdlU2xpZGU9ZnVuY3Rpb24oZSx0KXt2YXIgbyxzLG4scj10aGlzLGw9aShlLmN1cnJlbnRUYXJnZXQpO3N3aXRjaChsLmlzKFwiYVwiKSYmZS5wcmV2ZW50RGVmYXVsdCgpLGwuaXMoXCJsaVwiKXx8KGw9bC5jbG9zZXN0KFwibGlcIikpLG49ci5zbGlkZUNvdW50JXIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9PTAsbz1uPzA6KHIuc2xpZGVDb3VudC1yLmN1cnJlbnRTbGlkZSklci5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGUuZGF0YS5tZXNzYWdlKXtjYXNlXCJwcmV2aW91c1wiOnM9MD09PW8/ci5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOnIub3B0aW9ucy5zbGlkZXNUb1Nob3ctbyxyLnNsaWRlQ291bnQ+ci5vcHRpb25zLnNsaWRlc1RvU2hvdyYmci5zbGlkZUhhbmRsZXIoci5jdXJyZW50U2xpZGUtcywhMSx0KTticmVhaztjYXNlXCJuZXh0XCI6cz0wPT09bz9yLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6byxyLnNsaWRlQ291bnQ+ci5vcHRpb25zLnNsaWRlc1RvU2hvdyYmci5zbGlkZUhhbmRsZXIoci5jdXJyZW50U2xpZGUrcywhMSx0KTticmVhaztjYXNlXCJpbmRleFwiOnZhciBkPTA9PT1lLmRhdGEuaW5kZXg/MDplLmRhdGEuaW5kZXh8fGwuaW5kZXgoKSpyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7ci5zbGlkZUhhbmRsZXIoci5jaGVja05hdmlnYWJsZShkKSwhMSx0KSxsLmNoaWxkcmVuKCkudHJpZ2dlcihcImZvY3VzXCIpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufX0sZS5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGU9ZnVuY3Rpb24oaSl7dmFyIGUsdCxvPXRoaXM7aWYoZT1vLmdldE5hdmlnYWJsZUluZGV4ZXMoKSx0PTAsaT5lW2UubGVuZ3RoLTFdKWk9ZVtlLmxlbmd0aC0xXTtlbHNlIGZvcih2YXIgcyBpbiBlKXtpZihpPGVbc10pe2k9dDticmVha310PWVbc119cmV0dXJuIGl9LGUucHJvdG90eXBlLmNsZWFuVXBFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Uub3B0aW9ucy5kb3RzJiZudWxsIT09ZS4kZG90cyYmKGkoXCJsaVwiLGUuJGRvdHMpLm9mZihcImNsaWNrLnNsaWNrXCIsZS5jaGFuZ2VTbGlkZSkub2ZmKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLm9mZihcIm1vdXNlbGVhdmUuc2xpY2tcIixpLnByb3h5KGUuaW50ZXJydXB0LGUsITEpKSxlLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiZlLiRkb3RzLm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpKSxlLiRzbGlkZXIub2ZmKFwiZm9jdXMuc2xpY2sgYmx1ci5zbGlja1wiKSxlLm9wdGlvbnMuYXJyb3dzPT09ITAmJmUuc2xpZGVDb3VudD5lLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoZS4kcHJldkFycm93JiZlLiRwcmV2QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIixlLmNoYW5nZVNsaWRlKSxlLiRuZXh0QXJyb3cmJmUuJG5leHRBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiLGUuY2hhbmdlU2xpZGUpLGUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJihlLiRwcmV2QXJyb3cmJmUuJHByZXZBcnJvdy5vZmYoXCJrZXlkb3duLnNsaWNrXCIsZS5rZXlIYW5kbGVyKSxlLiRuZXh0QXJyb3cmJmUuJG5leHRBcnJvdy5vZmYoXCJrZXlkb3duLnNsaWNrXCIsZS5rZXlIYW5kbGVyKSkpLGUuJGxpc3Qub2ZmKFwidG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2tcIixlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vZmYoXCJ0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrXCIsZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub2ZmKFwidG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcInRvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2tcIixlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vZmYoXCJjbGljay5zbGlja1wiLGUuY2xpY2tIYW5kbGVyKSxpKGRvY3VtZW50KS5vZmYoZS52aXNpYmlsaXR5Q2hhbmdlLGUudmlzaWJpbGl0eSksZS5jbGVhblVwU2xpZGVFdmVudHMoKSxlLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiZlLiRsaXN0Lm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpLGUub3B0aW9ucy5mb2N1c09uU2VsZWN0PT09ITAmJmkoZS4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoXCJjbGljay5zbGlja1wiLGUuc2VsZWN0SGFuZGxlciksaSh3aW5kb3cpLm9mZihcIm9yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5vcmllbnRhdGlvbkNoYW5nZSksaSh3aW5kb3cpLm9mZihcInJlc2l6ZS5zbGljay5zbGljay1cIitlLmluc3RhbmNlVWlkLGUucmVzaXplKSxpKFwiW2RyYWdnYWJsZSE9dHJ1ZV1cIixlLiRzbGlkZVRyYWNrKS5vZmYoXCJkcmFnc3RhcnRcIixlLnByZXZlbnREZWZhdWx0KSxpKHdpbmRvdykub2ZmKFwibG9hZC5zbGljay5zbGljay1cIitlLmluc3RhbmNlVWlkLGUuc2V0UG9zaXRpb24pfSxlLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJGxpc3Qub2ZmKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLGUuJGxpc3Qub2ZmKFwibW91c2VsZWF2ZS5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMSkpfSxlLnByb3RvdHlwZS5jbGVhblVwUm93cz1mdW5jdGlvbigpe3ZhciBpLGU9dGhpcztlLm9wdGlvbnMucm93cz4wJiYoaT1lLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpLGkucmVtb3ZlQXR0cihcInN0eWxlXCIpLGUuJHNsaWRlci5lbXB0eSgpLmFwcGVuZChpKSl9LGUucHJvdG90eXBlLmNsaWNrSGFuZGxlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2Uuc2hvdWxkQ2xpY2s9PT0hMSYmKGkuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksaS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCkpfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5hdXRvUGxheUNsZWFyKCksdC50b3VjaE9iamVjdD17fSx0LmNsZWFuVXBFdmVudHMoKSxpKFwiLnNsaWNrLWNsb25lZFwiLHQuJHNsaWRlcikuZGV0YWNoKCksdC4kZG90cyYmdC4kZG90cy5yZW1vdmUoKSx0LiRwcmV2QXJyb3cmJnQuJHByZXZBcnJvdy5sZW5ndGgmJih0LiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLHQuaHRtbEV4cHIudGVzdCh0Lm9wdGlvbnMucHJldkFycm93KSYmdC4kcHJldkFycm93LnJlbW92ZSgpKSx0LiRuZXh0QXJyb3cmJnQuJG5leHRBcnJvdy5sZW5ndGgmJih0LiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLHQuaHRtbEV4cHIudGVzdCh0Lm9wdGlvbnMubmV4dEFycm93KSYmdC4kbmV4dEFycm93LnJlbW92ZSgpKSx0LiRzbGlkZXMmJih0LiRzbGlkZXMucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW5cIikucmVtb3ZlQXR0cihcImRhdGEtc2xpY2staW5kZXhcIikuZWFjaChmdW5jdGlvbigpe2kodGhpcykuYXR0cihcInN0eWxlXCIsaSh0aGlzKS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIpKX0pLHQuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSx0LiRzbGlkZVRyYWNrLmRldGFjaCgpLHQuJGxpc3QuZGV0YWNoKCksdC4kc2xpZGVyLmFwcGVuZCh0LiRzbGlkZXMpKSx0LmNsZWFuVXBSb3dzKCksdC4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGVyXCIpLHQuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpLHQuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWRvdHRlZFwiKSx0LnVuc2xpY2tlZD0hMCxlfHx0LiRzbGlkZXIudHJpZ2dlcihcImRlc3Ryb3lcIixbdF0pfSxlLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbj1mdW5jdGlvbihpKXt2YXIgZT10aGlzLHQ9e307dFtlLnRyYW5zaXRpb25UeXBlXT1cIlwiLGUub3B0aW9ucy5mYWRlPT09ITE/ZS4kc2xpZGVUcmFjay5jc3ModCk6ZS4kc2xpZGVzLmVxKGkpLmNzcyh0KX0sZS5wcm90b3R5cGUuZmFkZVNsaWRlPWZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpczt0LmNzc1RyYW5zaXRpb25zPT09ITE/KHQuJHNsaWRlcy5lcShpKS5jc3Moe3pJbmRleDp0Lm9wdGlvbnMuekluZGV4fSksdC4kc2xpZGVzLmVxKGkpLmFuaW1hdGUoe29wYWNpdHk6MX0sdC5vcHRpb25zLnNwZWVkLHQub3B0aW9ucy5lYXNpbmcsZSkpOih0LmFwcGx5VHJhbnNpdGlvbihpKSx0LiRzbGlkZXMuZXEoaSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OnQub3B0aW9ucy56SW5kZXh9KSxlJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5kaXNhYmxlVHJhbnNpdGlvbihpKSxlLmNhbGwoKX0sdC5vcHRpb25zLnNwZWVkKSl9LGUucHJvdG90eXBlLmZhZGVTbGlkZU91dD1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2UuY3NzVHJhbnNpdGlvbnM9PT0hMT9lLiRzbGlkZXMuZXEoaSkuYW5pbWF0ZSh7b3BhY2l0eTowLHpJbmRleDplLm9wdGlvbnMuekluZGV4LTJ9LGUub3B0aW9ucy5zcGVlZCxlLm9wdGlvbnMuZWFzaW5nKTooZS5hcHBseVRyYW5zaXRpb24oaSksZS4kc2xpZGVzLmVxKGkpLmNzcyh7b3BhY2l0eTowLHpJbmRleDplLm9wdGlvbnMuekluZGV4LTJ9KSl9LGUucHJvdG90eXBlLmZpbHRlclNsaWRlcz1lLnByb3RvdHlwZS5zbGlja0ZpbHRlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO251bGwhPT1pJiYoZS4kc2xpZGVzQ2FjaGU9ZS4kc2xpZGVzLGUudW5sb2FkKCksZS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGUuJHNsaWRlc0NhY2hlLmZpbHRlcihpKS5hcHBlbmRUbyhlLiRzbGlkZVRyYWNrKSxlLnJlaW5pdCgpKX0sZS5wcm90b3R5cGUuZm9jdXNIYW5kbGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRzbGlkZXIub2ZmKFwiZm9jdXMuc2xpY2sgYmx1ci5zbGlja1wiKS5vbihcImZvY3VzLnNsaWNrXCIsXCIqXCIsZnVuY3Rpb24odCl7dmFyIG89aSh0aGlzKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5vcHRpb25zLnBhdXNlT25Gb2N1cyYmby5pcyhcIjpmb2N1c1wiKSYmKGUuZm9jdXNzZWQ9ITAsZS5hdXRvUGxheSgpKX0sMCl9KS5vbihcImJsdXIuc2xpY2tcIixcIipcIixmdW5jdGlvbih0KXtpKHRoaXMpO2Uub3B0aW9ucy5wYXVzZU9uRm9jdXMmJihlLmZvY3Vzc2VkPSExLGUuYXV0b1BsYXkoKSl9KX0sZS5wcm90b3R5cGUuZ2V0Q3VycmVudD1lLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7cmV0dXJuIGkuY3VycmVudFNsaWRlfSxlLnByb3RvdHlwZS5nZXREb3RDb3VudD1mdW5jdGlvbigpe3ZhciBpPXRoaXMsZT0wLHQ9MCxvPTA7aWYoaS5vcHRpb25zLmluZmluaXRlPT09ITApaWYoaS5zbGlkZUNvdW50PD1pLm9wdGlvbnMuc2xpZGVzVG9TaG93KSsrbztlbHNlIGZvcig7ZTxpLnNsaWRlQ291bnQ7KSsrbyxlPXQraS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLHQrPWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDw9aS5vcHRpb25zLnNsaWRlc1RvU2hvdz9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6aS5vcHRpb25zLnNsaWRlc1RvU2hvdztlbHNlIGlmKGkub3B0aW9ucy5jZW50ZXJNb2RlPT09ITApbz1pLnNsaWRlQ291bnQ7ZWxzZSBpZihpLm9wdGlvbnMuYXNOYXZGb3IpZm9yKDtlPGkuc2xpZGVDb3VudDspKytvLGU9dCtpLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsdCs9aS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1pLm9wdGlvbnMuc2xpZGVzVG9TaG93P2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDppLm9wdGlvbnMuc2xpZGVzVG9TaG93O2Vsc2Ugbz0xK01hdGguY2VpbCgoaS5zbGlkZUNvdW50LWkub3B0aW9ucy5zbGlkZXNUb1Nob3cpL2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7cmV0dXJuIG8tMX0sZS5wcm90b3R5cGUuZ2V0TGVmdD1mdW5jdGlvbihpKXt2YXIgZSx0LG8scyxuPXRoaXMscj0wO3JldHVybiBuLnNsaWRlT2Zmc2V0PTAsdD1uLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCghMCksbi5vcHRpb25zLmluZmluaXRlPT09ITA/KG4uc2xpZGVDb3VudD5uLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYobi5zbGlkZU9mZnNldD1uLnNsaWRlV2lkdGgqbi5vcHRpb25zLnNsaWRlc1RvU2hvdyotMSxzPS0xLG4ub3B0aW9ucy52ZXJ0aWNhbD09PSEwJiZuLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiYoMj09PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/cz0tMS41OjE9PT1uLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYocz0tMikpLHI9dCpuLm9wdGlvbnMuc2xpZGVzVG9TaG93KnMpLG4uc2xpZGVDb3VudCVuLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPT0wJiZpK24ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbD5uLnNsaWRlQ291bnQmJm4uc2xpZGVDb3VudD5uLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaT5uLnNsaWRlQ291bnQ/KG4uc2xpZGVPZmZzZXQ9KG4ub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGktbi5zbGlkZUNvdW50KSkqbi5zbGlkZVdpZHRoKi0xLHI9KG4ub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGktbi5zbGlkZUNvdW50KSkqdCotMSk6KG4uc2xpZGVPZmZzZXQ9bi5zbGlkZUNvdW50JW4ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCpuLnNsaWRlV2lkdGgqLTEscj1uLnNsaWRlQ291bnQlbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKnQqLTEpKSk6aStuLm9wdGlvbnMuc2xpZGVzVG9TaG93Pm4uc2xpZGVDb3VudCYmKG4uc2xpZGVPZmZzZXQ9KGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdy1uLnNsaWRlQ291bnQpKm4uc2xpZGVXaWR0aCxyPShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3ctbi5zbGlkZUNvdW50KSp0KSxuLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihuLnNsaWRlT2Zmc2V0PTAscj0wKSxuLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiZuLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/bi5zbGlkZU9mZnNldD1uLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihuLm9wdGlvbnMuc2xpZGVzVG9TaG93KS8yLW4uc2xpZGVXaWR0aCpuLnNsaWRlQ291bnQvMjpuLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiZuLm9wdGlvbnMuaW5maW5pdGU9PT0hMD9uLnNsaWRlT2Zmc2V0Kz1uLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihuLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpLW4uc2xpZGVXaWR0aDpuLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiYobi5zbGlkZU9mZnNldD0wLG4uc2xpZGVPZmZzZXQrPW4uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMikpLGU9bi5vcHRpb25zLnZlcnRpY2FsPT09ITE/aSpuLnNsaWRlV2lkdGgqLTErbi5zbGlkZU9mZnNldDppKnQqLTErcixuLm9wdGlvbnMudmFyaWFibGVXaWR0aD09PSEwJiYobz1uLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3d8fG4ub3B0aW9ucy5pbmZpbml0ZT09PSExP24uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaSk6bi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGU9bi5vcHRpb25zLnJ0bD09PSEwP29bMF0/KG4uJHNsaWRlVHJhY2sud2lkdGgoKS1vWzBdLm9mZnNldExlZnQtby53aWR0aCgpKSotMTowOm9bMF0/b1swXS5vZmZzZXRMZWZ0Ki0xOjAsbi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmKG89bi5zbGlkZUNvdW50PD1uLm9wdGlvbnMuc2xpZGVzVG9TaG93fHxuLm9wdGlvbnMuaW5maW5pdGU9PT0hMT9uLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGkpOm4uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaStuLm9wdGlvbnMuc2xpZGVzVG9TaG93KzEpLGU9bi5vcHRpb25zLnJ0bD09PSEwP29bMF0/KG4uJHNsaWRlVHJhY2sud2lkdGgoKS1vWzBdLm9mZnNldExlZnQtby53aWR0aCgpKSotMTowOm9bMF0/b1swXS5vZmZzZXRMZWZ0Ki0xOjAsZSs9KG4uJGxpc3Qud2lkdGgoKS1vLm91dGVyV2lkdGgoKSkvMikpLGV9LGUucHJvdG90eXBlLmdldE9wdGlvbj1lLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO3JldHVybiBlLm9wdGlvbnNbaV19LGUucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXM9ZnVuY3Rpb24oKXt2YXIgaSxlPXRoaXMsdD0wLG89MCxzPVtdO2ZvcihlLm9wdGlvbnMuaW5maW5pdGU9PT0hMT9pPWUuc2xpZGVDb3VudDoodD1lLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwqLTEsbz1lLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwqLTEsaT0yKmUuc2xpZGVDb3VudCk7dDxpOylzLnB1c2godCksdD1vK2Uub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxvKz1lLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw8PWUub3B0aW9ucy5zbGlkZXNUb1Nob3c/ZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmUub3B0aW9ucy5zbGlkZXNUb1Nob3c7cmV0dXJuIHN9LGUucHJvdG90eXBlLmdldFNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGUucHJvdG90eXBlLmdldFNsaWRlQ291bnQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG8scyxuPXRoaXM7cmV0dXJuIHM9bi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMD9NYXRoLmZsb29yKG4uJGxpc3Qud2lkdGgoKS8yKTowLG89bi5zd2lwZUxlZnQqLTErcyxuLm9wdGlvbnMuc3dpcGVUb1NsaWRlPT09ITA/KG4uJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1zbGlkZVwiKS5lYWNoKGZ1bmN0aW9uKGUscyl7dmFyIHIsbCxkO2lmKHI9aShzKS5vdXRlcldpZHRoKCksbD1zLm9mZnNldExlZnQsbi5vcHRpb25zLmNlbnRlck1vZGUhPT0hMCYmKGwrPXIvMiksZD1sK3IsbzxkKXJldHVybiB0PXMsITF9KSxlPU1hdGguYWJzKGkodCkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIiktbi5jdXJyZW50U2xpZGUpfHwxKTpuLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGx9LGUucHJvdG90eXBlLmdvVG89ZS5wcm90b3R5cGUuc2xpY2tHb1RvPWZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpczt0LmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwiaW5kZXhcIixpbmRleDpwYXJzZUludChpKX19LGUpfSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aSh0LiRzbGlkZXIpLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIil8fChpKHQuJHNsaWRlcikuYWRkQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSx0LmJ1aWxkUm93cygpLHQuYnVpbGRPdXQoKSx0LnNldFByb3BzKCksdC5zdGFydExvYWQoKSx0LmxvYWRTbGlkZXIoKSx0LmluaXRpYWxpemVFdmVudHMoKSx0LnVwZGF0ZUFycm93cygpLHQudXBkYXRlRG90cygpLHQuY2hlY2tSZXNwb25zaXZlKCEwKSx0LmZvY3VzSGFuZGxlcigpKSxlJiZ0LiRzbGlkZXIudHJpZ2dlcihcImluaXRcIixbdF0pLHQub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJnQuaW5pdEFEQSgpLHQub3B0aW9ucy5hdXRvcGxheSYmKHQucGF1c2VkPSExLHQuYXV0b1BsYXkoKSl9LGUucHJvdG90eXBlLmluaXRBREE9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9TWF0aC5jZWlsKGUuc2xpZGVDb3VudC9lLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxvPWUuZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbihpKXtyZXR1cm4gaT49MCYmaTxlLnNsaWRlQ291bnR9KTtlLiRzbGlkZXMuYWRkKGUuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikpLmF0dHIoe1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIix0YWJpbmRleDpcIi0xXCJ9KS5maW5kKFwiYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoe3RhYmluZGV4OlwiLTFcIn0pLG51bGwhPT1lLiRkb3RzJiYoZS4kc2xpZGVzLm5vdChlLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpKS5lYWNoKGZ1bmN0aW9uKHQpe3ZhciBzPW8uaW5kZXhPZih0KTtpZihpKHRoaXMpLmF0dHIoe3JvbGU6XCJ0YWJwYW5lbFwiLGlkOlwic2xpY2stc2xpZGVcIitlLmluc3RhbmNlVWlkK3QsdGFiaW5kZXg6LTF9KSxzIT09LTEpe3ZhciBuPVwic2xpY2stc2xpZGUtY29udHJvbFwiK2UuaW5zdGFuY2VVaWQrcztpKFwiI1wiK24pLmxlbmd0aCYmaSh0aGlzKS5hdHRyKHtcImFyaWEtZGVzY3JpYmVkYnlcIjpufSl9fSksZS4kZG90cy5hdHRyKFwicm9sZVwiLFwidGFibGlzdFwiKS5maW5kKFwibGlcIikuZWFjaChmdW5jdGlvbihzKXt2YXIgbj1vW3NdO2kodGhpcykuYXR0cih7cm9sZTpcInByZXNlbnRhdGlvblwifSksaSh0aGlzKS5maW5kKFwiYnV0dG9uXCIpLmZpcnN0KCkuYXR0cih7cm9sZTpcInRhYlwiLGlkOlwic2xpY2stc2xpZGUtY29udHJvbFwiK2UuaW5zdGFuY2VVaWQrcyxcImFyaWEtY29udHJvbHNcIjpcInNsaWNrLXNsaWRlXCIrZS5pbnN0YW5jZVVpZCtuLFwiYXJpYS1sYWJlbFwiOnMrMStcIiBvZiBcIit0LFwiYXJpYS1zZWxlY3RlZFwiOm51bGwsdGFiaW5kZXg6XCItMVwifSl9KS5lcShlLmN1cnJlbnRTbGlkZSkuZmluZChcImJ1dHRvblwiKS5hdHRyKHtcImFyaWEtc2VsZWN0ZWRcIjpcInRydWVcIix0YWJpbmRleDpcIjBcIn0pLmVuZCgpKTtmb3IodmFyIHM9ZS5jdXJyZW50U2xpZGUsbj1zK2Uub3B0aW9ucy5zbGlkZXNUb1Nob3c7czxuO3MrKyllLm9wdGlvbnMuZm9jdXNPbkNoYW5nZT9lLiRzbGlkZXMuZXEocykuYXR0cih7dGFiaW5kZXg6XCIwXCJ9KTplLiRzbGlkZXMuZXEocykucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpO2UuYWN0aXZhdGVBREEoKX0sZS5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLm9wdGlvbnMuYXJyb3dzPT09ITAmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaS4kcHJldkFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcInByZXZpb3VzXCJ9LGkuY2hhbmdlU2xpZGUpLGkuJG5leHRBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiKS5vbihcImNsaWNrLnNsaWNrXCIse21lc3NhZ2U6XCJuZXh0XCJ9LGkuY2hhbmdlU2xpZGUpLGkub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJihpLiRwcmV2QXJyb3cub24oXCJrZXlkb3duLnNsaWNrXCIsaS5rZXlIYW5kbGVyKSxpLiRuZXh0QXJyb3cub24oXCJrZXlkb3duLnNsaWNrXCIsaS5rZXlIYW5kbGVyKSkpfSxlLnByb3RvdHlwZS5pbml0RG90RXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLm9wdGlvbnMuZG90cz09PSEwJiZlLnNsaWRlQ291bnQ+ZS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGkoXCJsaVwiLGUuJGRvdHMpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcImluZGV4XCJ9LGUuY2hhbmdlU2xpZGUpLGUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmUuJGRvdHMub24oXCJrZXlkb3duLnNsaWNrXCIsZS5rZXlIYW5kbGVyKSksZS5vcHRpb25zLmRvdHM9PT0hMCYmZS5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXI9PT0hMCYmZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmkoXCJsaVwiLGUuJGRvdHMpLm9uKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLm9uKFwibW91c2VsZWF2ZS5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMSkpfSxlLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Uub3B0aW9ucy5wYXVzZU9uSG92ZXImJihlLiRsaXN0Lm9uKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLGUuJGxpc3Qub24oXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSkpfSxlLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLmluaXRBcnJvd0V2ZW50cygpLGUuaW5pdERvdEV2ZW50cygpLGUuaW5pdFNsaWRlRXZlbnRzKCksZS4kbGlzdC5vbihcInRvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrXCIse2FjdGlvbjpcInN0YXJ0XCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwidG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGlja1wiLHthY3Rpb246XCJtb3ZlXCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwidG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGlja1wiLHthY3Rpb246XCJlbmRcIn0sZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub24oXCJ0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrXCIse2FjdGlvbjpcImVuZFwifSxlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vbihcImNsaWNrLnNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGkoZG9jdW1lbnQpLm9uKGUudmlzaWJpbGl0eUNoYW5nZSxpLnByb3h5KGUudmlzaWJpbGl0eSxlKSksZS5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmZS4kbGlzdC5vbihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpLGUub3B0aW9ucy5mb2N1c09uU2VsZWN0PT09ITAmJmkoZS4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbihcImNsaWNrLnNsaWNrXCIsZS5zZWxlY3RIYW5kbGVyKSxpKHdpbmRvdykub24oXCJvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay1cIitlLmluc3RhbmNlVWlkLGkucHJveHkoZS5vcmllbnRhdGlvbkNoYW5nZSxlKSksaSh3aW5kb3cpLm9uKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsaS5wcm94eShlLnJlc2l6ZSxlKSksaShcIltkcmFnZ2FibGUhPXRydWVdXCIsZS4kc2xpZGVUcmFjaykub24oXCJkcmFnc3RhcnRcIixlLnByZXZlbnREZWZhdWx0KSxpKHdpbmRvdykub24oXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5zZXRQb3NpdGlvbiksaShlLnNldFBvc2l0aW9uKX0sZS5wcm90b3R5cGUuaW5pdFVJPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLm9wdGlvbnMuYXJyb3dzPT09ITAmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaS4kcHJldkFycm93LnNob3coKSxpLiRuZXh0QXJyb3cuc2hvdygpKSxpLm9wdGlvbnMuZG90cz09PSEwJiZpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmaS4kZG90cy5zaG93KCl9LGUucHJvdG90eXBlLmtleUhhbmRsZXI9ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcztpLnRhcmdldC50YWdOYW1lLm1hdGNoKFwiVEVYVEFSRUF8SU5QVVR8U0VMRUNUXCIpfHwoMzc9PT1pLmtleUNvZGUmJmUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITA/ZS5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTplLm9wdGlvbnMucnRsPT09ITA/XCJuZXh0XCI6XCJwcmV2aW91c1wifX0pOjM5PT09aS5rZXlDb2RlJiZlLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiZlLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOmUub3B0aW9ucy5ydGw9PT0hMD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9fSkpfSxlLnByb3RvdHlwZS5sYXp5TG9hZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7aShcImltZ1tkYXRhLWxhenldXCIsZSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPWkodGhpcyksdD1pKHRoaXMpLmF0dHIoXCJkYXRhLWxhenlcIiksbz1pKHRoaXMpLmF0dHIoXCJkYXRhLXNyY3NldFwiKSxzPWkodGhpcykuYXR0cihcImRhdGEtc2l6ZXNcIil8fHIuJHNsaWRlci5hdHRyKFwiZGF0YS1zaXplc1wiKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7bi5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmFuaW1hdGUoe29wYWNpdHk6MH0sMTAwLGZ1bmN0aW9uKCl7byYmKGUuYXR0cihcInNyY3NldFwiLG8pLHMmJmUuYXR0cihcInNpemVzXCIscykpLGUuYXR0cihcInNyY1wiLHQpLmFuaW1hdGUoe29wYWNpdHk6MX0sMjAwLGZ1bmN0aW9uKCl7ZS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXNcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSksci4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZGVkXCIsW3IsZSx0XSl9KX0sbi5vbmVycm9yPWZ1bmN0aW9uKCl7ZS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKS5hZGRDbGFzcyhcInNsaWNrLWxhenlsb2FkLWVycm9yXCIpLHIuJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLFtyLGUsdF0pfSxuLnNyYz10fSl9dmFyIHQsbyxzLG4scj10aGlzO2lmKHIub3B0aW9ucy5jZW50ZXJNb2RlPT09ITA/ci5vcHRpb25zLmluZmluaXRlPT09ITA/KHM9ci5jdXJyZW50U2xpZGUrKHIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSxuPXMrci5vcHRpb25zLnNsaWRlc1RvU2hvdysyKToocz1NYXRoLm1heCgwLHIuY3VycmVudFNsaWRlLShyLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIrMSkpLG49Misoci5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKzEpK3IuY3VycmVudFNsaWRlKToocz1yLm9wdGlvbnMuaW5maW5pdGU/ci5vcHRpb25zLnNsaWRlc1RvU2hvdytyLmN1cnJlbnRTbGlkZTpyLmN1cnJlbnRTbGlkZSxuPU1hdGguY2VpbChzK3Iub3B0aW9ucy5zbGlkZXNUb1Nob3cpLHIub3B0aW9ucy5mYWRlPT09ITAmJihzPjAmJnMtLSxuPD1yLnNsaWRlQ291bnQmJm4rKykpLHQ9ci4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikuc2xpY2UocyxuKSxcImFudGljaXBhdGVkXCI9PT1yLm9wdGlvbnMubGF6eUxvYWQpZm9yKHZhciBsPXMtMSxkPW4sYT1yLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKSxjPTA7YzxyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7YysrKWw8MCYmKGw9ci5zbGlkZUNvdW50LTEpLHQ9dC5hZGQoYS5lcShsKSksdD10LmFkZChhLmVxKGQpKSxsLS0sZCsrO2UodCksci5zbGlkZUNvdW50PD1yLm9wdGlvbnMuc2xpZGVzVG9TaG93PyhvPXIuJHNsaWRlci5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLGUobykpOnIuY3VycmVudFNsaWRlPj1yLnNsaWRlQ291bnQtci5vcHRpb25zLnNsaWRlc1RvU2hvdz8obz1yLiRzbGlkZXIuZmluZChcIi5zbGljay1jbG9uZWRcIikuc2xpY2UoMCxyLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxlKG8pKTowPT09ci5jdXJyZW50U2xpZGUmJihvPXIuJHNsaWRlci5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5zbGljZShyLm9wdGlvbnMuc2xpZGVzVG9TaG93Ki0xKSxlKG8pKX0sZS5wcm90b3R5cGUubG9hZFNsaWRlcj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5zZXRQb3NpdGlvbigpLGkuJHNsaWRlVHJhY2suY3NzKHtvcGFjaXR5OjF9KSxpLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLGkuaW5pdFVJKCksXCJwcm9ncmVzc2l2ZVwiPT09aS5vcHRpb25zLmxhenlMb2FkJiZpLnByb2dyZXNzaXZlTGF6eUxvYWQoKX0sZS5wcm90b3R5cGUubmV4dD1lLnByb3RvdHlwZS5zbGlja05leHQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6XCJuZXh0XCJ9fSl9LGUucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmNoZWNrUmVzcG9uc2l2ZSgpLGkuc2V0UG9zaXRpb24oKX0sZS5wcm90b3R5cGUucGF1c2U9ZS5wcm90b3R5cGUuc2xpY2tQYXVzZT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheUNsZWFyKCksaS5wYXVzZWQ9ITB9LGUucHJvdG90eXBlLnBsYXk9ZS5wcm90b3R5cGUuc2xpY2tQbGF5PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmF1dG9QbGF5KCksaS5vcHRpb25zLmF1dG9wbGF5PSEwLGkucGF1c2VkPSExLGkuZm9jdXNzZWQ9ITEsaS5pbnRlcnJ1cHRlZD0hMX0sZS5wcm90b3R5cGUucG9zdFNsaWRlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoIXQudW5zbGlja2VkJiYodC4kc2xpZGVyLnRyaWdnZXIoXCJhZnRlckNoYW5nZVwiLFt0LGVdKSx0LmFuaW1hdGluZz0hMSx0LnNsaWRlQ291bnQ+dC5vcHRpb25zLnNsaWRlc1RvU2hvdyYmdC5zZXRQb3NpdGlvbigpLHQuc3dpcGVMZWZ0PW51bGwsdC5vcHRpb25zLmF1dG9wbGF5JiZ0LmF1dG9QbGF5KCksdC5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmKHQuaW5pdEFEQSgpLHQub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSkpe3ZhciBvPWkodC4kc2xpZGVzLmdldCh0LmN1cnJlbnRTbGlkZSkpO28uYXR0cihcInRhYmluZGV4XCIsMCkuZm9jdXMoKX19LGUucHJvdG90eXBlLnByZXY9ZS5wcm90b3R5cGUuc2xpY2tQcmV2PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwicHJldmlvdXNcIn19KX0sZS5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpfSxlLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkPWZ1bmN0aW9uKGUpe2U9ZXx8MTt2YXIgdCxvLHMsbixyLGw9dGhpcyxkPWkoXCJpbWdbZGF0YS1sYXp5XVwiLGwuJHNsaWRlcik7ZC5sZW5ndGg/KHQ9ZC5maXJzdCgpLG89dC5hdHRyKFwiZGF0YS1sYXp5XCIpLHM9dC5hdHRyKFwiZGF0YS1zcmNzZXRcIiksbj10LmF0dHIoXCJkYXRhLXNpemVzXCIpfHxsLiRzbGlkZXIuYXR0cihcImRhdGEtc2l6ZXNcIikscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLHIub25sb2FkPWZ1bmN0aW9uKCl7cyYmKHQuYXR0cihcInNyY3NldFwiLHMpLG4mJnQuYXR0cihcInNpemVzXCIsbikpLHQuYXR0cihcInNyY1wiLG8pLnJlbW92ZUF0dHIoXCJkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplc1wiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksbC5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0PT09ITAmJmwuc2V0UG9zaXRpb24oKSxsLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkZWRcIixbbCx0LG9dKSxsLnByb2dyZXNzaXZlTGF6eUxvYWQoKX0sci5vbmVycm9yPWZ1bmN0aW9uKCl7ZTwzP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnByb2dyZXNzaXZlTGF6eUxvYWQoZSsxKX0sNTAwKToodC5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKS5hZGRDbGFzcyhcInNsaWNrLWxhenlsb2FkLWVycm9yXCIpLGwuJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLFtsLHQsb10pLGwucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpKX0sci5zcmM9byk6bC4kc2xpZGVyLnRyaWdnZXIoXCJhbGxJbWFnZXNMb2FkZWRcIixbbF0pfSxlLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKGUpe3ZhciB0LG8scz10aGlzO289cy5zbGlkZUNvdW50LXMub3B0aW9ucy5zbGlkZXNUb1Nob3csIXMub3B0aW9ucy5pbmZpbml0ZSYmcy5jdXJyZW50U2xpZGU+byYmKHMuY3VycmVudFNsaWRlPW8pLHMuc2xpZGVDb3VudDw9cy5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKHMuY3VycmVudFNsaWRlPTApLHQ9cy5jdXJyZW50U2xpZGUscy5kZXN0cm95KCEwKSxpLmV4dGVuZChzLHMuaW5pdGlhbHMse2N1cnJlbnRTbGlkZTp0fSkscy5pbml0KCksZXx8cy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcImluZGV4XCIsaW5kZXg6dH19LCExKX0sZS5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cz1mdW5jdGlvbigpe3ZhciBlLHQsbyxzPXRoaXMsbj1zLm9wdGlvbnMucmVzcG9uc2l2ZXx8bnVsbDtpZihcImFycmF5XCI9PT1pLnR5cGUobikmJm4ubGVuZ3RoKXtzLnJlc3BvbmRUbz1zLm9wdGlvbnMucmVzcG9uZFRvfHxcIndpbmRvd1wiO2ZvcihlIGluIG4paWYobz1zLmJyZWFrcG9pbnRzLmxlbmd0aC0xLG4uaGFzT3duUHJvcGVydHkoZSkpe2Zvcih0PW5bZV0uYnJlYWtwb2ludDtvPj0wOylzLmJyZWFrcG9pbnRzW29dJiZzLmJyZWFrcG9pbnRzW29dPT09dCYmcy5icmVha3BvaW50cy5zcGxpY2UobywxKSxvLS07cy5icmVha3BvaW50cy5wdXNoKHQpLHMuYnJlYWtwb2ludFNldHRpbmdzW3RdPW5bZV0uc2V0dGluZ3N9cy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGksZSl7cmV0dXJuIHMub3B0aW9ucy5tb2JpbGVGaXJzdD9pLWU6ZS1pfSl9fSxlLnByb3RvdHlwZS5yZWluaXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJHNsaWRlcz1lLiRzbGlkZVRyYWNrLmNoaWxkcmVuKGUub3B0aW9ucy5zbGlkZSkuYWRkQ2xhc3MoXCJzbGljay1zbGlkZVwiKSxlLnNsaWRlQ291bnQ9ZS4kc2xpZGVzLmxlbmd0aCxlLmN1cnJlbnRTbGlkZT49ZS5zbGlkZUNvdW50JiYwIT09ZS5jdXJyZW50U2xpZGUmJihlLmN1cnJlbnRTbGlkZT1lLmN1cnJlbnRTbGlkZS1lLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpLGUuc2xpZGVDb3VudDw9ZS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGUuY3VycmVudFNsaWRlPTApLGUucmVnaXN0ZXJCcmVha3BvaW50cygpLGUuc2V0UHJvcHMoKSxlLnNldHVwSW5maW5pdGUoKSxlLmJ1aWxkQXJyb3dzKCksZS51cGRhdGVBcnJvd3MoKSxlLmluaXRBcnJvd0V2ZW50cygpLGUuYnVpbGREb3RzKCksZS51cGRhdGVEb3RzKCksZS5pbml0RG90RXZlbnRzKCksZS5jbGVhblVwU2xpZGVFdmVudHMoKSxlLmluaXRTbGlkZUV2ZW50cygpLGUuY2hlY2tSZXNwb25zaXZlKCExLCEwKSxlLm9wdGlvbnMuZm9jdXNPblNlbGVjdD09PSEwJiZpKGUuJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oXCJjbGljay5zbGlja1wiLGUuc2VsZWN0SGFuZGxlciksZS5zZXRTbGlkZUNsYXNzZXMoXCJudW1iZXJcIj09dHlwZW9mIGUuY3VycmVudFNsaWRlP2UuY3VycmVudFNsaWRlOjApLGUuc2V0UG9zaXRpb24oKSxlLmZvY3VzSGFuZGxlcigpLGUucGF1c2VkPSFlLm9wdGlvbnMuYXV0b3BsYXksZS5hdXRvUGxheSgpLGUuJHNsaWRlci50cmlnZ2VyKFwicmVJbml0XCIsW2VdKX0sZS5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpKHdpbmRvdykud2lkdGgoKSE9PWUud2luZG93V2lkdGgmJihjbGVhclRpbWVvdXQoZS53aW5kb3dEZWxheSksZS53aW5kb3dEZWxheT13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2Uud2luZG93V2lkdGg9aSh3aW5kb3cpLndpZHRoKCksZS5jaGVja1Jlc3BvbnNpdmUoKSxlLnVuc2xpY2tlZHx8ZS5zZXRQb3NpdGlvbigpfSw1MCkpfSxlLnByb3RvdHlwZS5yZW1vdmVTbGlkZT1lLnByb3RvdHlwZS5zbGlja1JlbW92ZT1mdW5jdGlvbihpLGUsdCl7dmFyIG89dGhpcztyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGk/KGU9aSxpPWU9PT0hMD8wOm8uc2xpZGVDb3VudC0xKTppPWU9PT0hMD8tLWk6aSwhKG8uc2xpZGVDb3VudDwxfHxpPDB8fGk+by5zbGlkZUNvdW50LTEpJiYoby51bmxvYWQoKSx0PT09ITA/by4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpOm8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpKS5yZW1vdmUoKSxvLiRzbGlkZXM9by4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLG8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxvLiRzbGlkZVRyYWNrLmFwcGVuZChvLiRzbGlkZXMpLG8uJHNsaWRlc0NhY2hlPW8uJHNsaWRlcyx2b2lkIG8ucmVpbml0KCkpfSxlLnByb3RvdHlwZS5zZXRDU1M9ZnVuY3Rpb24oaSl7dmFyIGUsdCxvPXRoaXMscz17fTtvLm9wdGlvbnMucnRsPT09ITAmJihpPS1pKSxlPVwibGVmdFwiPT1vLnBvc2l0aW9uUHJvcD9NYXRoLmNlaWwoaSkrXCJweFwiOlwiMHB4XCIsdD1cInRvcFwiPT1vLnBvc2l0aW9uUHJvcD9NYXRoLmNlaWwoaSkrXCJweFwiOlwiMHB4XCIsc1tvLnBvc2l0aW9uUHJvcF09aSxvLnRyYW5zZm9ybXNFbmFibGVkPT09ITE/by4kc2xpZGVUcmFjay5jc3Mocyk6KHM9e30sby5jc3NUcmFuc2l0aW9ucz09PSExPyhzW28uYW5pbVR5cGVdPVwidHJhbnNsYXRlKFwiK2UrXCIsIFwiK3QrXCIpXCIsby4kc2xpZGVUcmFjay5jc3MocykpOihzW28uYW5pbVR5cGVdPVwidHJhbnNsYXRlM2QoXCIrZStcIiwgXCIrdCtcIiwgMHB4KVwiLG8uJHNsaWRlVHJhY2suY3NzKHMpKSl9LGUucHJvdG90eXBlLnNldERpbWVuc2lvbnM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kub3B0aW9ucy52ZXJ0aWNhbD09PSExP2kub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJmkuJGxpc3QuY3NzKHtwYWRkaW5nOlwiMHB4IFwiK2kub3B0aW9ucy5jZW50ZXJQYWRkaW5nfSk6KGkuJGxpc3QuaGVpZ2h0KGkuJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSppLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxpLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiZpLiRsaXN0LmNzcyh7cGFkZGluZzppLm9wdGlvbnMuY2VudGVyUGFkZGluZytcIiAwcHhcIn0pKSxpLmxpc3RXaWR0aD1pLiRsaXN0LndpZHRoKCksaS5saXN0SGVpZ2h0PWkuJGxpc3QuaGVpZ2h0KCksaS5vcHRpb25zLnZlcnRpY2FsPT09ITEmJmkub3B0aW9ucy52YXJpYWJsZVdpZHRoPT09ITE/KGkuc2xpZGVXaWR0aD1NYXRoLmNlaWwoaS5saXN0V2lkdGgvaS5vcHRpb25zLnNsaWRlc1RvU2hvdyksaS4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoaS5zbGlkZVdpZHRoKmkuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikubGVuZ3RoKSkpOmkub3B0aW9ucy52YXJpYWJsZVdpZHRoPT09ITA/aS4kc2xpZGVUcmFjay53aWR0aCg1ZTMqaS5zbGlkZUNvdW50KTooaS5zbGlkZVdpZHRoPU1hdGguY2VpbChpLmxpc3RXaWR0aCksaS4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKGkuJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSppLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmxlbmd0aCkpKTt2YXIgZT1pLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKCEwKS1pLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO2kub3B0aW9ucy52YXJpYWJsZVdpZHRoPT09ITEmJmkuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikud2lkdGgoaS5zbGlkZVdpZHRoLWUpfSxlLnByb3RvdHlwZS5zZXRGYWRlPWZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzO3QuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKG8scyl7ZT10LnNsaWRlV2lkdGgqbyotMSx0Lm9wdGlvbnMucnRsPT09ITA/aShzKS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIixyaWdodDplLHRvcDowLHpJbmRleDp0Lm9wdGlvbnMuekluZGV4LTIsb3BhY2l0eTowfSk6aShzKS5jc3Moe3Bvc2l0aW9uOlwicmVsYXRpdmVcIixsZWZ0OmUsdG9wOjAsekluZGV4OnQub3B0aW9ucy56SW5kZXgtMixvcGFjaXR5OjB9KX0pLHQuJHNsaWRlcy5lcSh0LmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6dC5vcHRpb25zLnpJbmRleC0xLG9wYWNpdHk6MX0pfSxlLnByb3RvdHlwZS5zZXRIZWlnaHQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2lmKDE9PT1pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZpLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQ9PT0hMCYmaS5vcHRpb25zLnZlcnRpY2FsPT09ITEpe3ZhciBlPWkuJHNsaWRlcy5lcShpLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQoITApO2kuJGxpc3QuY3NzKFwiaGVpZ2h0XCIsZSl9fSxlLnByb3RvdHlwZS5zZXRPcHRpb249ZS5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb249ZnVuY3Rpb24oKXt2YXIgZSx0LG8scyxuLHI9dGhpcyxsPSExO2lmKFwib2JqZWN0XCI9PT1pLnR5cGUoYXJndW1lbnRzWzBdKT8obz1hcmd1bWVudHNbMF0sbD1hcmd1bWVudHNbMV0sbj1cIm11bHRpcGxlXCIpOlwic3RyaW5nXCI9PT1pLnR5cGUoYXJndW1lbnRzWzBdKSYmKG89YXJndW1lbnRzWzBdLHM9YXJndW1lbnRzWzFdLGw9YXJndW1lbnRzWzJdLFwicmVzcG9uc2l2ZVwiPT09YXJndW1lbnRzWzBdJiZcImFycmF5XCI9PT1pLnR5cGUoYXJndW1lbnRzWzFdKT9uPVwicmVzcG9uc2l2ZVwiOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhcmd1bWVudHNbMV0mJihuPVwic2luZ2xlXCIpKSxcInNpbmdsZVwiPT09bilyLm9wdGlvbnNbb109cztlbHNlIGlmKFwibXVsdGlwbGVcIj09PW4paS5lYWNoKG8sZnVuY3Rpb24oaSxlKXtyLm9wdGlvbnNbaV09ZX0pO2Vsc2UgaWYoXCJyZXNwb25zaXZlXCI9PT1uKWZvcih0IGluIHMpaWYoXCJhcnJheVwiIT09aS50eXBlKHIub3B0aW9ucy5yZXNwb25zaXZlKSlyLm9wdGlvbnMucmVzcG9uc2l2ZT1bc1t0XV07ZWxzZXtmb3IoZT1yLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtlPj0wOylyLm9wdGlvbnMucmVzcG9uc2l2ZVtlXS5icmVha3BvaW50PT09c1t0XS5icmVha3BvaW50JiZyLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UoZSwxKSxlLS07ci5vcHRpb25zLnJlc3BvbnNpdmUucHVzaChzW3RdKX1sJiYoci51bmxvYWQoKSxyLnJlaW5pdCgpKX0sZS5wcm90b3R5cGUuc2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuc2V0RGltZW5zaW9ucygpLGkuc2V0SGVpZ2h0KCksaS5vcHRpb25zLmZhZGU9PT0hMT9pLnNldENTUyhpLmdldExlZnQoaS5jdXJyZW50U2xpZGUpKTppLnNldEZhZGUoKSxpLiRzbGlkZXIudHJpZ2dlcihcInNldFBvc2l0aW9uXCIsW2ldKX0sZS5wcm90b3R5cGUuc2V0UHJvcHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLGU9ZG9jdW1lbnQuYm9keS5zdHlsZTtpLnBvc2l0aW9uUHJvcD1pLm9wdGlvbnMudmVydGljYWw9PT0hMD9cInRvcFwiOlwibGVmdFwiLFxuXCJ0b3BcIj09PWkucG9zaXRpb25Qcm9wP2kuJHNsaWRlci5hZGRDbGFzcyhcInNsaWNrLXZlcnRpY2FsXCIpOmkuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLXZlcnRpY2FsXCIpLHZvaWQgMD09PWUuV2Via2l0VHJhbnNpdGlvbiYmdm9pZCAwPT09ZS5Nb3pUcmFuc2l0aW9uJiZ2b2lkIDA9PT1lLm1zVHJhbnNpdGlvbnx8aS5vcHRpb25zLnVzZUNTUz09PSEwJiYoaS5jc3NUcmFuc2l0aW9ucz0hMCksaS5vcHRpb25zLmZhZGUmJihcIm51bWJlclwiPT10eXBlb2YgaS5vcHRpb25zLnpJbmRleD9pLm9wdGlvbnMuekluZGV4PDMmJihpLm9wdGlvbnMuekluZGV4PTMpOmkub3B0aW9ucy56SW5kZXg9aS5kZWZhdWx0cy56SW5kZXgpLHZvaWQgMCE9PWUuT1RyYW5zZm9ybSYmKGkuYW5pbVR5cGU9XCJPVHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwiLW8tdHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cIk9UcmFuc2l0aW9uXCIsdm9pZCAwPT09ZS5wZXJzcGVjdGl2ZVByb3BlcnR5JiZ2b2lkIDA9PT1lLndlYmtpdFBlcnNwZWN0aXZlJiYoaS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWUuTW96VHJhbnNmb3JtJiYoaS5hbmltVHlwZT1cIk1velRyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi1tb3otdHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cIk1velRyYW5zaXRpb25cIix2b2lkIDA9PT1lLnBlcnNwZWN0aXZlUHJvcGVydHkmJnZvaWQgMD09PWUuTW96UGVyc3BlY3RpdmUmJihpLmFuaW1UeXBlPSExKSksdm9pZCAwIT09ZS53ZWJraXRUcmFuc2Zvcm0mJihpLmFuaW1UeXBlPVwid2Via2l0VHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwiLXdlYmtpdC10cmFuc2Zvcm1cIixpLnRyYW5zaXRpb25UeXBlPVwid2Via2l0VHJhbnNpdGlvblwiLHZvaWQgMD09PWUucGVyc3BlY3RpdmVQcm9wZXJ0eSYmdm9pZCAwPT09ZS53ZWJraXRQZXJzcGVjdGl2ZSYmKGkuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1lLm1zVHJhbnNmb3JtJiYoaS5hbmltVHlwZT1cIm1zVHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwiLW1zLXRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJtc1RyYW5zaXRpb25cIix2b2lkIDA9PT1lLm1zVHJhbnNmb3JtJiYoaS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWUudHJhbnNmb3JtJiZpLmFuaW1UeXBlIT09ITEmJihpLmFuaW1UeXBlPVwidHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwidHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cInRyYW5zaXRpb25cIiksaS50cmFuc2Zvcm1zRW5hYmxlZD1pLm9wdGlvbnMudXNlVHJhbnNmb3JtJiZudWxsIT09aS5hbmltVHlwZSYmaS5hbmltVHlwZSE9PSExfSxlLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXM9ZnVuY3Rpb24oaSl7dmFyIGUsdCxvLHMsbj10aGlzO2lmKHQ9bi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLG4uJHNsaWRlcy5lcShpKS5hZGRDbGFzcyhcInNsaWNrLWN1cnJlbnRcIiksbi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCl7dmFyIHI9bi5vcHRpb25zLnNsaWRlc1RvU2hvdyUyPT09MD8xOjA7ZT1NYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiksbi5vcHRpb25zLmluZmluaXRlPT09ITAmJihpPj1lJiZpPD1uLnNsaWRlQ291bnQtMS1lP24uJHNsaWRlcy5zbGljZShpLWUrcixpK2UrMSkuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKToobz1uLm9wdGlvbnMuc2xpZGVzVG9TaG93K2ksdC5zbGljZShvLWUrMStyLG8rZSsyKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpKSwwPT09aT90LmVxKHQubGVuZ3RoLTEtbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIik6aT09PW4uc2xpZGVDb3VudC0xJiZ0LmVxKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpKSxuLiRzbGlkZXMuZXEoaSkuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIil9ZWxzZSBpPj0wJiZpPD1uLnNsaWRlQ291bnQtbi5vcHRpb25zLnNsaWRlc1RvU2hvdz9uLiRzbGlkZXMuc2xpY2UoaSxpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6dC5sZW5ndGg8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/dC5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOihzPW4uc2xpZGVDb3VudCVuLm9wdGlvbnMuc2xpZGVzVG9TaG93LG89bi5vcHRpb25zLmluZmluaXRlPT09ITA/bi5vcHRpb25zLnNsaWRlc1RvU2hvdytpOmksbi5vcHRpb25zLnNsaWRlc1RvU2hvdz09bi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsJiZuLnNsaWRlQ291bnQtaTxuLm9wdGlvbnMuc2xpZGVzVG9TaG93P3Quc2xpY2Uoby0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy1zKSxvK3MpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6dC5zbGljZShvLG8rbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSk7XCJvbmRlbWFuZFwiIT09bi5vcHRpb25zLmxhenlMb2FkJiZcImFudGljaXBhdGVkXCIhPT1uLm9wdGlvbnMubGF6eUxvYWR8fG4ubGF6eUxvYWQoKX0sZS5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZT1mdW5jdGlvbigpe3ZhciBlLHQsbyxzPXRoaXM7aWYocy5vcHRpb25zLmZhZGU9PT0hMCYmKHMub3B0aW9ucy5jZW50ZXJNb2RlPSExKSxzLm9wdGlvbnMuaW5maW5pdGU9PT0hMCYmcy5vcHRpb25zLmZhZGU9PT0hMSYmKHQ9bnVsbCxzLnNsaWRlQ291bnQ+cy5vcHRpb25zLnNsaWRlc1RvU2hvdykpe2ZvcihvPXMub3B0aW9ucy5jZW50ZXJNb2RlPT09ITA/cy5vcHRpb25zLnNsaWRlc1RvU2hvdysxOnMub3B0aW9ucy5zbGlkZXNUb1Nob3csZT1zLnNsaWRlQ291bnQ7ZT5zLnNsaWRlQ291bnQtbztlLT0xKXQ9ZS0xLGkocy4kc2xpZGVzW3RdKS5jbG9uZSghMCkuYXR0cihcImlkXCIsXCJcIikuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIix0LXMuc2xpZGVDb3VudCkucHJlcGVuZFRvKHMuJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpO2ZvcihlPTA7ZTxvK3Muc2xpZGVDb3VudDtlKz0xKXQ9ZSxpKHMuJHNsaWRlc1t0XSkuY2xvbmUoITApLmF0dHIoXCJpZFwiLFwiXCIpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsdCtzLnNsaWRlQ291bnQpLmFwcGVuZFRvKHMuJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpO3MuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikuZmluZChcIltpZF1cIikuZWFjaChmdW5jdGlvbigpe2kodGhpcykuYXR0cihcImlkXCIsXCJcIil9KX19LGUucHJvdG90eXBlLmludGVycnVwdD1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2l8fGUuYXV0b1BsYXkoKSxlLmludGVycnVwdGVkPWl9LGUucHJvdG90eXBlLnNlbGVjdEhhbmRsZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxvPWkoZS50YXJnZXQpLmlzKFwiLnNsaWNrLXNsaWRlXCIpP2koZS50YXJnZXQpOmkoZS50YXJnZXQpLnBhcmVudHMoXCIuc2xpY2stc2xpZGVcIikscz1wYXJzZUludChvLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpKTtyZXR1cm4gc3x8KHM9MCksdC5zbGlkZUNvdW50PD10Lm9wdGlvbnMuc2xpZGVzVG9TaG93P3ZvaWQgdC5zbGlkZUhhbmRsZXIocywhMSwhMCk6dm9pZCB0LnNsaWRlSGFuZGxlcihzKX0sZS5wcm90b3R5cGUuc2xpZGVIYW5kbGVyPWZ1bmN0aW9uKGksZSx0KXt2YXIgbyxzLG4scixsLGQ9bnVsbCxhPXRoaXM7aWYoZT1lfHwhMSwhKGEuYW5pbWF0aW5nPT09ITAmJmEub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZT09PSEwfHxhLm9wdGlvbnMuZmFkZT09PSEwJiZhLmN1cnJlbnRTbGlkZT09PWkpKXJldHVybiBlPT09ITEmJmEuYXNOYXZGb3IoaSksbz1pLGQ9YS5nZXRMZWZ0KG8pLHI9YS5nZXRMZWZ0KGEuY3VycmVudFNsaWRlKSxhLmN1cnJlbnRMZWZ0PW51bGw9PT1hLnN3aXBlTGVmdD9yOmEuc3dpcGVMZWZ0LGEub3B0aW9ucy5pbmZpbml0ZT09PSExJiZhLm9wdGlvbnMuY2VudGVyTW9kZT09PSExJiYoaTwwfHxpPmEuZ2V0RG90Q291bnQoKSphLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpP3ZvaWQoYS5vcHRpb25zLmZhZGU9PT0hMSYmKG89YS5jdXJyZW50U2xpZGUsdCE9PSEwJiZhLnNsaWRlQ291bnQ+YS5vcHRpb25zLnNsaWRlc1RvU2hvdz9hLmFuaW1hdGVTbGlkZShyLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUobyl9KTphLnBvc3RTbGlkZShvKSkpOmEub3B0aW9ucy5pbmZpbml0ZT09PSExJiZhLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiYoaTwwfHxpPmEuc2xpZGVDb3VudC1hLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpP3ZvaWQoYS5vcHRpb25zLmZhZGU9PT0hMSYmKG89YS5jdXJyZW50U2xpZGUsdCE9PSEwJiZhLnNsaWRlQ291bnQ+YS5vcHRpb25zLnNsaWRlc1RvU2hvdz9hLmFuaW1hdGVTbGlkZShyLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUobyl9KTphLnBvc3RTbGlkZShvKSkpOihhLm9wdGlvbnMuYXV0b3BsYXkmJmNsZWFySW50ZXJ2YWwoYS5hdXRvUGxheVRpbWVyKSxzPW88MD9hLnNsaWRlQ291bnQlYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT09MD9hLnNsaWRlQ291bnQtYS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDphLnNsaWRlQ291bnQrbzpvPj1hLnNsaWRlQ291bnQ/YS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9PTA/MDpvLWEuc2xpZGVDb3VudDpvLGEuYW5pbWF0aW5nPSEwLGEuJHNsaWRlci50cmlnZ2VyKFwiYmVmb3JlQ2hhbmdlXCIsW2EsYS5jdXJyZW50U2xpZGUsc10pLG49YS5jdXJyZW50U2xpZGUsYS5jdXJyZW50U2xpZGU9cyxhLnNldFNsaWRlQ2xhc3NlcyhhLmN1cnJlbnRTbGlkZSksYS5vcHRpb25zLmFzTmF2Rm9yJiYobD1hLmdldE5hdlRhcmdldCgpLGw9bC5zbGljayhcImdldFNsaWNrXCIpLGwuc2xpZGVDb3VudDw9bC5vcHRpb25zLnNsaWRlc1RvU2hvdyYmbC5zZXRTbGlkZUNsYXNzZXMoYS5jdXJyZW50U2xpZGUpKSxhLnVwZGF0ZURvdHMoKSxhLnVwZGF0ZUFycm93cygpLGEub3B0aW9ucy5mYWRlPT09ITA/KHQhPT0hMD8oYS5mYWRlU2xpZGVPdXQobiksYS5mYWRlU2xpZGUocyxmdW5jdGlvbigpe2EucG9zdFNsaWRlKHMpfSkpOmEucG9zdFNsaWRlKHMpLHZvaWQgYS5hbmltYXRlSGVpZ2h0KCkpOnZvaWQodCE9PSEwJiZhLnNsaWRlQ291bnQ+YS5vcHRpb25zLnNsaWRlc1RvU2hvdz9hLmFuaW1hdGVTbGlkZShkLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUocyl9KTphLnBvc3RTbGlkZShzKSkpfSxlLnByb3RvdHlwZS5zdGFydExvYWQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kub3B0aW9ucy5hcnJvd3M9PT0hMCYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cuaGlkZSgpLGkuJG5leHRBcnJvdy5oaWRlKCkpLGkub3B0aW9ucy5kb3RzPT09ITAmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZpLiRkb3RzLmhpZGUoKSxpLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSxlLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbj1mdW5jdGlvbigpe3ZhciBpLGUsdCxvLHM9dGhpcztyZXR1cm4gaT1zLnRvdWNoT2JqZWN0LnN0YXJ0WC1zLnRvdWNoT2JqZWN0LmN1clgsZT1zLnRvdWNoT2JqZWN0LnN0YXJ0WS1zLnRvdWNoT2JqZWN0LmN1clksdD1NYXRoLmF0YW4yKGUsaSksbz1NYXRoLnJvdW5kKDE4MCp0L01hdGguUEkpLG88MCYmKG89MzYwLU1hdGguYWJzKG8pKSxvPD00NSYmbz49MD9zLm9wdGlvbnMucnRsPT09ITE/XCJsZWZ0XCI6XCJyaWdodFwiOm88PTM2MCYmbz49MzE1P3Mub3B0aW9ucy5ydGw9PT0hMT9cImxlZnRcIjpcInJpZ2h0XCI6bz49MTM1JiZvPD0yMjU/cy5vcHRpb25zLnJ0bD09PSExP1wicmlnaHRcIjpcImxlZnRcIjpzLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITA/bz49MzUmJm88PTEzNT9cImRvd25cIjpcInVwXCI6XCJ2ZXJ0aWNhbFwifSxlLnByb3RvdHlwZS5zd2lwZUVuZD1mdW5jdGlvbihpKXt2YXIgZSx0LG89dGhpcztpZihvLmRyYWdnaW5nPSExLG8uc3dpcGluZz0hMSxvLnNjcm9sbGluZylyZXR1cm4gby5zY3JvbGxpbmc9ITEsITE7aWYoby5pbnRlcnJ1cHRlZD0hMSxvLnNob3VsZENsaWNrPSEoby50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD4xMCksdm9pZCAwPT09by50b3VjaE9iamVjdC5jdXJYKXJldHVybiExO2lmKG8udG91Y2hPYmplY3QuZWRnZUhpdD09PSEwJiZvLiRzbGlkZXIudHJpZ2dlcihcImVkZ2VcIixbbyxvLnN3aXBlRGlyZWN0aW9uKCldKSxvLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPj1vLnRvdWNoT2JqZWN0Lm1pblN3aXBlKXtzd2l0Y2godD1vLnN3aXBlRGlyZWN0aW9uKCkpe2Nhc2VcImxlZnRcIjpjYXNlXCJkb3duXCI6ZT1vLm9wdGlvbnMuc3dpcGVUb1NsaWRlP28uY2hlY2tOYXZpZ2FibGUoby5jdXJyZW50U2xpZGUrby5nZXRTbGlkZUNvdW50KCkpOm8uY3VycmVudFNsaWRlK28uZ2V0U2xpZGVDb3VudCgpLG8uY3VycmVudERpcmVjdGlvbj0wO2JyZWFrO2Nhc2VcInJpZ2h0XCI6Y2FzZVwidXBcIjplPW8ub3B0aW9ucy5zd2lwZVRvU2xpZGU/by5jaGVja05hdmlnYWJsZShvLmN1cnJlbnRTbGlkZS1vLmdldFNsaWRlQ291bnQoKSk6by5jdXJyZW50U2xpZGUtby5nZXRTbGlkZUNvdW50KCksby5jdXJyZW50RGlyZWN0aW9uPTF9XCJ2ZXJ0aWNhbFwiIT10JiYoby5zbGlkZUhhbmRsZXIoZSksby50b3VjaE9iamVjdD17fSxvLiRzbGlkZXIudHJpZ2dlcihcInN3aXBlXCIsW28sdF0pKX1lbHNlIG8udG91Y2hPYmplY3Quc3RhcnRYIT09by50b3VjaE9iamVjdC5jdXJYJiYoby5zbGlkZUhhbmRsZXIoby5jdXJyZW50U2xpZGUpLG8udG91Y2hPYmplY3Q9e30pfSxlLnByb3RvdHlwZS5zd2lwZUhhbmRsZXI9ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcztpZighKGUub3B0aW9ucy5zd2lwZT09PSExfHxcIm9udG91Y2hlbmRcImluIGRvY3VtZW50JiZlLm9wdGlvbnMuc3dpcGU9PT0hMXx8ZS5vcHRpb25zLmRyYWdnYWJsZT09PSExJiZpLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpIT09LTEpKXN3aXRjaChlLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50PWkub3JpZ2luYWxFdmVudCYmdm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXM/aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoOjEsZS50b3VjaE9iamVjdC5taW5Td2lwZT1lLmxpc3RXaWR0aC9lLm9wdGlvbnMudG91Y2hUaHJlc2hvbGQsZS5vcHRpb25zLnZlcnRpY2FsU3dpcGluZz09PSEwJiYoZS50b3VjaE9iamVjdC5taW5Td2lwZT1lLmxpc3RIZWlnaHQvZS5vcHRpb25zLnRvdWNoVGhyZXNob2xkKSxpLmRhdGEuYWN0aW9uKXtjYXNlXCJzdGFydFwiOmUuc3dpcGVTdGFydChpKTticmVhaztjYXNlXCJtb3ZlXCI6ZS5zd2lwZU1vdmUoaSk7YnJlYWs7Y2FzZVwiZW5kXCI6ZS5zd2lwZUVuZChpKX19LGUucHJvdG90eXBlLnN3aXBlTW92ZT1mdW5jdGlvbihpKXt2YXIgZSx0LG8scyxuLHIsbD10aGlzO3JldHVybiBuPXZvaWQgMCE9PWkub3JpZ2luYWxFdmVudD9pLm9yaWdpbmFsRXZlbnQudG91Y2hlczpudWxsLCEoIWwuZHJhZ2dpbmd8fGwuc2Nyb2xsaW5nfHxuJiYxIT09bi5sZW5ndGgpJiYoZT1sLmdldExlZnQobC5jdXJyZW50U2xpZGUpLGwudG91Y2hPYmplY3QuY3VyWD12b2lkIDAhPT1uP25bMF0ucGFnZVg6aS5jbGllbnRYLGwudG91Y2hPYmplY3QuY3VyWT12b2lkIDAhPT1uP25bMF0ucGFnZVk6aS5jbGllbnRZLGwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg9TWF0aC5yb3VuZChNYXRoLnNxcnQoTWF0aC5wb3cobC50b3VjaE9iamVjdC5jdXJYLWwudG91Y2hPYmplY3Quc3RhcnRYLDIpKSkscj1NYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhsLnRvdWNoT2JqZWN0LmN1clktbC50b3VjaE9iamVjdC5zdGFydFksMikpKSwhbC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyYmIWwuc3dpcGluZyYmcj40PyhsLnNjcm9sbGluZz0hMCwhMSk6KGwub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmc9PT0hMCYmKGwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg9ciksdD1sLnN3aXBlRGlyZWN0aW9uKCksdm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50JiZsLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPjQmJihsLnN3aXBpbmc9ITAsaS5wcmV2ZW50RGVmYXVsdCgpKSxzPShsLm9wdGlvbnMucnRsPT09ITE/MTotMSkqKGwudG91Y2hPYmplY3QuY3VyWD5sLnRvdWNoT2JqZWN0LnN0YXJ0WD8xOi0xKSxsLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITAmJihzPWwudG91Y2hPYmplY3QuY3VyWT5sLnRvdWNoT2JqZWN0LnN0YXJ0WT8xOi0xKSxvPWwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGgsbC50b3VjaE9iamVjdC5lZGdlSGl0PSExLGwub3B0aW9ucy5pbmZpbml0ZT09PSExJiYoMD09PWwuY3VycmVudFNsaWRlJiZcInJpZ2h0XCI9PT10fHxsLmN1cnJlbnRTbGlkZT49bC5nZXREb3RDb3VudCgpJiZcImxlZnRcIj09PXQpJiYobz1sLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoKmwub3B0aW9ucy5lZGdlRnJpY3Rpb24sbC50b3VjaE9iamVjdC5lZGdlSGl0PSEwKSxsLm9wdGlvbnMudmVydGljYWw9PT0hMT9sLnN3aXBlTGVmdD1lK28qczpsLnN3aXBlTGVmdD1lK28qKGwuJGxpc3QuaGVpZ2h0KCkvbC5saXN0V2lkdGgpKnMsbC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZz09PSEwJiYobC5zd2lwZUxlZnQ9ZStvKnMpLGwub3B0aW9ucy5mYWRlIT09ITAmJmwub3B0aW9ucy50b3VjaE1vdmUhPT0hMSYmKGwuYW5pbWF0aW5nPT09ITA/KGwuc3dpcGVMZWZ0PW51bGwsITEpOnZvaWQgbC5zZXRDU1MobC5zd2lwZUxlZnQpKSkpfSxlLnByb3RvdHlwZS5zd2lwZVN0YXJ0PWZ1bmN0aW9uKGkpe3ZhciBlLHQ9dGhpcztyZXR1cm4gdC5pbnRlcnJ1cHRlZD0hMCwxIT09dC50b3VjaE9iamVjdC5maW5nZXJDb3VudHx8dC5zbGlkZUNvdW50PD10Lm9wdGlvbnMuc2xpZGVzVG9TaG93Pyh0LnRvdWNoT2JqZWN0PXt9LCExKToodm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50JiZ2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlcyYmKGU9aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0pLHQudG91Y2hPYmplY3Quc3RhcnRYPXQudG91Y2hPYmplY3QuY3VyWD12b2lkIDAhPT1lP2UucGFnZVg6aS5jbGllbnRYLHQudG91Y2hPYmplY3Quc3RhcnRZPXQudG91Y2hPYmplY3QuY3VyWT12b2lkIDAhPT1lP2UucGFnZVk6aS5jbGllbnRZLHZvaWQodC5kcmFnZ2luZz0hMCkpfSxlLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcz1lLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztudWxsIT09aS4kc2xpZGVzQ2FjaGUmJihpLnVubG9hZCgpLGkuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxpLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhpLiRzbGlkZVRyYWNrKSxpLnJlaW5pdCgpKX0sZS5wcm90b3R5cGUudW5sb2FkPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpKFwiLnNsaWNrLWNsb25lZFwiLGUuJHNsaWRlcikucmVtb3ZlKCksZS4kZG90cyYmZS4kZG90cy5yZW1vdmUoKSxlLiRwcmV2QXJyb3cmJmUuaHRtbEV4cHIudGVzdChlLm9wdGlvbnMucHJldkFycm93KSYmZS4kcHJldkFycm93LnJlbW92ZSgpLGUuJG5leHRBcnJvdyYmZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5uZXh0QXJyb3cpJiZlLiRuZXh0QXJyb3cucmVtb3ZlKCksZS4kc2xpZGVzLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudFwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikuY3NzKFwid2lkdGhcIixcIlwiKX0sZS5wcm90b3R5cGUudW5zbGljaz1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2UuJHNsaWRlci50cmlnZ2VyKFwidW5zbGlja1wiLFtlLGldKSxlLmRlc3Ryb3koKX0sZS5wcm90b3R5cGUudXBkYXRlQXJyb3dzPWZ1bmN0aW9uKCl7dmFyIGksZT10aGlzO2k9TWF0aC5mbG9vcihlLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpLGUub3B0aW9ucy5hcnJvd3M9PT0hMCYmZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJiFlLm9wdGlvbnMuaW5maW5pdGUmJihlLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIiksZS4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLDA9PT1lLmN1cnJlbnRTbGlkZT8oZS4kcHJldkFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksZS4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpKTplLmN1cnJlbnRTbGlkZT49ZS5zbGlkZUNvdW50LWUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmUub3B0aW9ucy5jZW50ZXJNb2RlPT09ITE/KGUuJG5leHRBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGUuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSk6ZS5jdXJyZW50U2xpZGU+PWUuc2xpZGVDb3VudC0xJiZlLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiYoZS4kbmV4dEFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksZS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpKSl9LGUucHJvdG90eXBlLnVwZGF0ZURvdHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO251bGwhPT1pLiRkb3RzJiYoaS4kZG90cy5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuZW5kKCksaS4kZG90cy5maW5kKFwibGlcIikuZXEoTWF0aC5mbG9vcihpLmN1cnJlbnRTbGlkZS9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKSl9LGUucHJvdG90eXBlLnZpc2liaWxpdHk9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kub3B0aW9ucy5hdXRvcGxheSYmKGRvY3VtZW50W2kuaGlkZGVuXT9pLmludGVycnVwdGVkPSEwOmkuaW50ZXJydXB0ZWQ9ITEpfSxpLmZuLnNsaWNrPWZ1bmN0aW9uKCl7dmFyIGksdCxvPXRoaXMscz1hcmd1bWVudHNbMF0sbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkscj1vLmxlbmd0aDtmb3IoaT0wO2k8cjtpKyspaWYoXCJvYmplY3RcIj09dHlwZW9mIHN8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzP29baV0uc2xpY2s9bmV3IGUob1tpXSxzKTp0PW9baV0uc2xpY2tbc10uYXBwbHkob1tpXS5zbGljayxuKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgdClyZXR1cm4gdDtyZXR1cm4gb319KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAvKioqXG4gICAgIG51bWJlciAtINC40YHRhdC+0LTQvdC+0LUg0YfQuNGB0LvQvlxuICAgICBkZWNpbWFscyAtINC60L7Qu9C40YfQtdGB0YLQstC+INC30L3QsNC60L7QsiDQv9C+0YHQu9C1INGA0LDQt9C00LXQu9C40YLQtdC70Y9cbiAgICAgZGVjX3BvaW50IC0g0YHQuNC80LLQvtC7INGA0LDQt9C00LXQu9C40YLQtdC70Y9cbiAgICAgdGhvdXNhbmRzX3NlcCAtINGA0LDQt9C00LXQu9C40YLQtdC70Ywg0YLRi9GB0Y/Rh9C90YvRhVxuICAgICBmcmFjdGlvbmFsX25vdF92aWV3IC0g0L3QtSDQvtGC0L7QsdGA0LDQttCw0YLRjCDQt9C90LDQutC4INC/0L7RgdC70LUg0YDQsNC30LTQtdC70LjRgtC10LvRjyDRgyDRhtC10LvRi9GFINGH0LjRgdC10LtcbiAgICAgKioqL1xuICAgIGZ1bmN0aW9uIG51bWJlcl9mb3JtYXQobnVtYmVyLCBkZWNpbWFscywgZGVjX3BvaW50LCB0aG91c2FuZHNfc2VwLCBmcmFjdGlvbmFsX25vdF92aWV3KSB7XG4gICAgICAgIG51bWJlciA9IChudW1iZXIgKyAnJykucmVwbGFjZSgvW14wLTkrXFwtRWUuXS9nLCAnJyk7XG4gICAgICAgIHZhciBuID0gIWlzRmluaXRlKCtudW1iZXIpID8gMCA6ICtudW1iZXIsXG4gICAgICAgICAgICBwcmVjID0gIWlzRmluaXRlKCtkZWNpbWFscykgPyAwIDogTWF0aC5hYnMoZGVjaW1hbHMpLFxuICAgICAgICAgICAgc2VwID0gKHR5cGVvZiB0aG91c2FuZHNfc2VwID09PSAndW5kZWZpbmVkJykgPyAnLCcgOiB0aG91c2FuZHNfc2VwLFxuICAgICAgICAgICAgZGVjID0gKHR5cGVvZiBkZWNfcG9pbnQgPT09ICd1bmRlZmluZWQnKSA/ICcuJyA6IGRlY19wb2ludCxcbiAgICAgICAgICAgIGZyX25vdF92aWV3ID0gKHR5cGVvZiBmcmFjdGlvbmFsX25vdF92aWV3ID09PSAndW5kZWZpbmVkJykgPyBmYWxzZSA6IGZyYWN0aW9uYWxfbm90X3ZpZXcsXG4gICAgICAgICAgICBzID0gJycsXG4gICAgICAgICAgICB0b0ZpeGVkRml4ID0gZnVuY3Rpb24gKG4sIHByZWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IE1hdGgucG93KDEwLCBwcmVjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJycgKyAoTWF0aC5yb3VuZChuICogaykgLyBrKVxuICAgICAgICAgICAgICAgICAgICAudG9GaXhlZChwcmVjKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIC8vIEZpeCBmb3IgSUUgcGFyc2VGbG9hdCgwLjU1KS50b0ZpeGVkKDApID0gMDtcbiAgICAgICAgcyA9IChwcmVjID8gdG9GaXhlZEZpeChuLCBwcmVjKSA6ICcnICsgTWF0aC5yb3VuZChuKSlcbiAgICAgICAgICAgIC5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoc1swXS5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBzWzBdID0gc1swXS5yZXBsYWNlKC9cXEIoPz0oPzpcXGR7M30pKyg/IVxcZCkpL2csIHNlcCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0KfRgtC+0LHRiyDQvdC1INC+0YLQvtCx0YDQsNC20LDRgtGMINC30L3QsNC60Lgg0L/QvtGB0LvQtSDQt9Cw0L/Rj9GC0L7QuSDRgyDRhtC10LvRi9GFINGH0LjRgdC10LtcbiAgICAgICAgaWYgKGZyX25vdF92aWV3ICYmIChuIC0gTWF0aC5yb3VuZChuKSA9PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICAgICAgLy8vLy8vXG4gICAgICAgIGlmICgoc1sxXSB8fCAnJylcbiAgICAgICAgICAgIC5sZW5ndGggPCBwcmVjKSB7XG4gICAgICAgICAgICBzWzFdID0gc1sxXSB8fCAnJztcbiAgICAgICAgICAgIHNbMV0gKz0gbmV3IEFycmF5KHByZWMgLSBzWzFdLmxlbmd0aCArIDEpXG4gICAgICAgICAgICAgICAgLmpvaW4oJzAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcy5qb2luKGRlYyk7XG4gICAgfVxuXG4gICAgJChcIi5qc19yYWRpYWxcIikua25vYigpO1xuXG4gICAgdmFyIHNlY3Rpb25zID0gJCgnLmhlYWRlcl9fbmF2LWl0ZW0tLWZpeGVkIC5oZWFkZXJfX25hdi1saW5rJyksXG4gICAgICAgICR3aW5kb3cgPSAkKHdpbmRvdyksXG4gICAgICAgIG9mZnNldCA9ICR3aW5kb3cuaGVpZ2h0KCkgLyAyLjU7XG5cbiAgICAkd2luZG93Lm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJzb3IgPSAkd2luZG93LnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgY3VyX3NlYyA9ICcnLFxuICAgICAgICAgICAgaGFzaDtcblxuICAgICAgICBzZWN0aW9ucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgc2VjX25hbWUgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmKCAkKHNlY19uYW1lKS5vZmZzZXQoKS50b3AgLSBvZmZzZXQgPCBjdXJzb3Ipe1xuICAgICAgICAgICAgICAgICQoJy5oZWFkZXJfX25hdi1pdGVtLS1maXhlZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkZXJfX25hdi1pdGVtLS1maXhlZCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjdXJfc2VjID0gc2VjX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBoYXNoID0gY3VyX3NlYy5zbGljZSgxKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnLycraGFzaDtcblxuICAgICAgICBpZigkd2luZG93LnNjcm9sbFRvcCgpID49ICQoJyN0aXRsZScpLm91dGVySGVpZ2h0KCkpe1xuICAgICAgICAgICAgJCgnLmZpeGVkLWhlYWRlcicpLmZhZGVJbig1MDApO1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cud2lkdGgoKSA8PSAxMDI0ICYmIGhhc2ggIT0gJ2ZsYXRzJyl7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXRvcC1idG4nKS5mYWRlSW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzaCA9PSAnZmxhdHMnKXtcbiAgICAgICAgICAgICAgICAkKCcuanMtdG9wLWJ0bicpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuZml4ZWQtaGVhZGVyJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgJCgnLmpzLXRvcC1idG4nKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDw9IDk0MCl7XG4gICAgICAgICAgICAgICAgJCgnLmpzX2ZpeGVkX21lbnUnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJy5qc19maXhlZF9uYXZfd3JhcCcpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkd2luZG93Lm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCR3aW5kb3cud2lkdGgoKSA+IDk0MCkge1xuICAgICAgICAgICAgJCgnLmpzX25hdl93cmFwJykuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICAgICAgICAkKCcuanNfZml4ZWRfbmF2X3dyYXAnKS5hdHRyKCdzdHlsZScsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5qc19uYXZfd3JhcCcpLnJlbW92ZUNsYXNzKCdzaG93LWltcCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuanNfbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCcuanNfbmF2X3dyYXAnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpLnNsaWRlVG9nZ2xlKCk7XG4gICAgfSk7XG4gICAgJCgnLmpzX2ZpeGVkX21lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgJCgnLmpzX2ZpeGVkX25hdl93cmFwJykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzX3BvcHVwX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudGl0bGUtcG9wdXAnKS5mYWRlT3V0KCk7XG4gICAgfSk7XG5cblxuICAgICQoJy5qc19wcmljZXNfc2xpZGVyJykuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMFxuICAgIH0pO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIvIy9cIikgPj0gMCkge1xuICAgICAgICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgYW5jaG9yID0gcGF0aC5zcGxpdCgnLycpWzRdO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcjJythbmNob3IpLm9mZnNldCgpLnRvcC0xMjBcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgICQoJy5qc19nb3RvX2FuY2hvcicpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wLTEyMFxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDw9IDk0MCl7XG4gICAgICAgICAgICAkKCcuanNfZml4ZWRfbWVudScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCcuanNfbWVudScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCcuanNfbmF2X3dyYXAnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICQoJy5qc19maXhlZF9uYXZfd3JhcCcpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHZhciBmbGF0X2NhdGVnb3J5X2lkO1xuICAgICQoJy5qc19yb29tc19idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZsYXRfY2F0ZWdvcnlfaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgICQoJy5qc19hcmVhX2J0bicpLmNsb3Nlc3QoJy5sYXlvdXQtY2hvaWNlX19idG5zLWl0ZW0nKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgJCgnLmpzX2FyZWFfYnRuJyArICcuJyArICdmbGF0JyArIGZsYXRfY2F0ZWdvcnlfaWQpLmNsb3Nlc3QoJy5sYXlvdXQtY2hvaWNlX19idG5zLWl0ZW0nKS5zaG93KCkuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgJCgnLmxheW91dF9fZmxhdC1uYW1lJykudGV4dChmbGF0c09ialtmbGF0X2NhdGVnb3J5X2lkXVsnc2luZ3VsYXJseSddKTtcbiAgICAgICAgJCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbS52aXNpYmxlOmZpcnN0IC5qc19hcmVhX2J0bicpLmNsaWNrKCk7XG4gICAgICAgICQoJy5qc19yb29tc19idG4nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuY2xvc2VzdCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJykuY2xvc2VzdCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHZhciBzdGF0ZSA9IGZhbHNlO1xuICAgICQoJy5qc19hcmVhX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRoaXNMYXlvdXQgPSBmbGF0c09ialtmbGF0X2NhdGVnb3J5X2lkXVsnbGF5b3V0cyddWyQodGhpcykuZGF0YSgnaWQnKV07XG5cbiAgICAgICAgaWYgKCR3aW5kb3cud2lkdGgoKSA8PSA4MjAgJiYgc3RhdGUpe1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnLmxheW91dF9faW1nLXdyYXBwZXInKS5vZmZzZXQoKS50b3AgLSA3MFxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLmpzX2dpdmVfc3JjJykuYW5pbWF0ZSh7b3BhY2l0eTogXCJ0b2dnbGVcIn0sIDIwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLmpzX2dpdmVfc3JjJykuYXR0cignc3JjJywgdGhpc0xheW91dC5zcmMpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgICAkKCcuanNfZ2l2ZV9zcmMnKS5hbmltYXRlKHtvcGFjaXR5OiBcInRvZ2dsZVwifSwgMjAwKTtcbiAgICAgICAgJCgnLmpzX2dpdmVfYXJlYScpLnRleHQodGhpc0xheW91dC5hcmVhLnJlcGxhY2UoJy4nLCAnLCcpKTtcbiAgICAgICAgJCgnLmpzX2dpdmVfYmxvY2snKS50ZXh0KHRoaXNMYXlvdXQuYmxvY2spO1xuICAgICAgICAkKCcuanNfZ2l2ZV9mbG9vcicpLnRleHQodGhpc0xheW91dC5mbG9vcik7XG5cbiAgICAgICAgdmFyIGJhc2ljX3ByaWNlID0gTWF0aC5yb3VuZCh0aGlzTGF5b3V0Lm1ldGVyX2Nvc3QgKiB0aGlzTGF5b3V0LmFyZWEgKiBFWENIQU5HRV9DT1NUKTtcblxuICAgICAgICBpZigrdGhpc0xheW91dC5zdG9ja19wcmljZSA+IDApe1xuICAgICAgICAgICAgJCgnLmpzX2F0X29uY2VfcHJpY2UnKS50ZXh0KG51bWJlcl9mb3JtYXQoTWF0aC5yb3VuZCh0aGlzTGF5b3V0LnN0b2NrX3ByaWNlICogdGhpc0xheW91dC5hcmVhKSwgMCwgJywnLCAnICcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5qc19hdF9vbmNlX3ByaWNlJykudGV4dChudW1iZXJfZm9ybWF0KE1hdGgucm91bmQoYmFzaWNfcHJpY2UgLSBiYXNpY19wcmljZSAvIDEwMCAqIHRoaXNMYXlvdXQuZGlzY291bnQpLCAwLCAnLCcsICcgJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLmpzX2dpdmVfcHJpY2UnKS50ZXh0KG51bWJlcl9mb3JtYXQodGhpc0xheW91dC5zdG9ja19wcmljZSwgMCwgJywnLCAnICcpKTtcbiAgICAgICAgJCgnLmpzX2FyZWFfYnRuJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpLmNsb3Nlc3QoJy5sYXlvdXQtY2hvaWNlX19idG5zLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpLmNsb3Nlc3QoJy5sYXlvdXQtY2hvaWNlX19idG5zLWl0ZW0nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgc3RhdGUgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgJCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbTpmaXJzdC1jaGlsZCAuanNfcm9vbXNfYnRuJykuY2xpY2soKTtcblxuICAgIHZhciAkZm90b3JhbWEgPSAkKCcuanNfZ2FsbGVyeV9fZm90b3JhbWEnKS5mb3RvcmFtYSh7XG4gICAgICAgIG5hdndpZHRoOiAnOTAlJ1xuICAgIH0pO1xuICAgIC8vIDIuIEdldCB0aGUgQVBJIG9iamVjdC5cbiAgICB2YXIgZm90b3JhbWEgPSAkZm90b3JhbWEuZGF0YSgnZm90b3JhbWEnKTtcblxuICAgICRmb3RvcmFtYS5vbignZm90b3JhbWE6c2hvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gZm90b3JhbWEuYWN0aXZlSW5kZXg7XG4gICAgICAgIGlmKGFjdGl2ZUluZGV4ID09IDApe1xuICAgICAgICAgICAgJCgnLmpzX2ltZ19wcmV2JykuZmFkZU91dCgwKS5hdHRyKCdzcmMnLCBmb3RvcmFtYS5kYXRhW2ZvdG9yYW1hLnNpemUtMV1bJ2ltZyddKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgICAgICQoJy5qc19pbWdfbmV4dCcpLmZhZGVPdXQoMCkuYXR0cignc3JjJywgZm90b3JhbWEuZGF0YVthY3RpdmVJbmRleCsxXVsnaW1nJ10pLmZhZGVJbigzMDApO1xuICAgICAgICB9ZWxzZSBpZihhY3RpdmVJbmRleCA9PSBmb3RvcmFtYS5zaXplLTEpe1xuICAgICAgICAgICAgJCgnLmpzX2ltZ19wcmV2JykuZmFkZU91dCgwKS5hdHRyKCdzcmMnLCBmb3RvcmFtYS5kYXRhW2FjdGl2ZUluZGV4LTFdWydpbWcnXSkuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICAkKCcuanNfaW1nX25leHQnKS5mYWRlT3V0KDApLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbMF1bJ2ltZyddKS5mYWRlSW4oMjAwKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuanNfaW1nX3ByZXYnKS5mYWRlT3V0KDApLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbYWN0aXZlSW5kZXgtMV1bJ2ltZyddKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgICAgICQoJy5qc19pbWdfbmV4dCcpLmZhZGVPdXQoMCkuYXR0cignc3JjJywgZm90b3JhbWEuZGF0YVthY3RpdmVJbmRleCsxXVsnaW1nJ10pLmZhZGVJbigzMDApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJGZvdG9yYW1hLm9uKCdmb3RvcmFtYTpsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSBmb3RvcmFtYS5hY3RpdmVJbmRleDtcbiAgICAgICAgaWYoYWN0aXZlSW5kZXggPT0gMCl7XG4gICAgICAgICAgICAkKCcuanNfaW1nX3ByZXYnKS5hdHRyKCdzcmMnLCBmb3RvcmFtYS5kYXRhW2ZvdG9yYW1hLnNpemUtMV1bJ2ltZyddKTtcbiAgICAgICAgICAgICQoJy5qc19pbWdfbmV4dCcpLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbYWN0aXZlSW5kZXgrMV1bJ2ltZyddKTtcbiAgICAgICAgfWVsc2UgaWYoYWN0aXZlSW5kZXggPT0gZm90b3JhbWEuc2l6ZS0xKXtcbiAgICAgICAgICAgICQoJy5qc19pbWdfcHJldicpLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbYWN0aXZlSW5kZXgtMV1bJ2ltZyddKTtcbiAgICAgICAgICAgICQoJy5qc19pbWdfbmV4dCcpLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbMF1bJ2ltZyddKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuanNfaW1nX3ByZXYnKS5hdHRyKCdzcmMnLCBmb3RvcmFtYS5kYXRhW2FjdGl2ZUluZGV4LTFdWydpbWcnXSk7XG4gICAgICAgICAgICAkKCcuanNfaW1nX25leHQnKS5hdHRyKCdzcmMnLCBmb3RvcmFtYS5kYXRhW2FjdGl2ZUluZGV4KzFdWydpbWcnXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiPGRpdiBjbGFzcz0nbmF2LXNjcm9sbC1idG4gbmF2LXNjcm9sbC1idG4tLXByZXYnPjwvZGl2PlwiKS5pbnNlcnRCZWZvcmUoXCIuZ2FsbGVyeV9fZm90b3JhbWEgLmZvdG9yYW1hX19uYXYuZm90b3JhbWFfX25hdi0tdGh1bWJzXCIpO1xuICAgICQoXCI8ZGl2IGNsYXNzPSduYXYtc2Nyb2xsLWJ0biBuYXYtc2Nyb2xsLWJ0bi0tbmV4dCc+PC9kaXY+XCIpLmluc2VydEFmdGVyKFwiLmdhbGxlcnlfX2ZvdG9yYW1hIC5mb3RvcmFtYV9fbmF2LmZvdG9yYW1hX19uYXYtLXRodW1ic1wiKTtcblxuICAgICQoXCI8ZGl2IGNsYXNzPSdnYWxsZXJ5X19iZy1pbWFnZS1ibG9jayBnYWxsZXJ5X19iZy1pbWFnZS1ibG9jay0tcHJldic+PGRpdiBjbGFzcz0nZ2FsbGVyeV9fYmctaW1hZ2Utd3JhcCc+PGltZyBjbGFzcz0nZ2FsbGVyeV9fYmctaW1hZ2UganNfaW1nX3ByZXYnPjwvZGl2PjwvZGl2PlwiKS5pbnNlcnRBZnRlcihcIi5nYWxsZXJ5X19mb3RvcmFtYSAuZm90b3JhbWFfX2Fyci5mb3RvcmFtYV9fYXJyLS1uZXh0XCIpO1xuICAgICQoXCI8ZGl2IGNsYXNzPSdnYWxsZXJ5X19iZy1pbWFnZS1ibG9jayBnYWxsZXJ5X19iZy1pbWFnZS1ibG9jay0tbmV4dCc+PGRpdiBjbGFzcz0nZ2FsbGVyeV9fYmctaW1hZ2Utd3JhcCc+PGltZyBjbGFzcz0nZ2FsbGVyeV9fYmctaW1hZ2UganNfaW1nX25leHQnPjwvZGl2PjwvZGl2PlwiKS5pbnNlcnRBZnRlcihcIi5nYWxsZXJ5X19mb3RvcmFtYSAuZm90b3JhbWFfX2Fyci5mb3RvcmFtYV9fYXJyLS1uZXh0XCIpO1xuICAgIC8vIG1ha2UgdGhlIGJ1dHRvbnMgZnVuY3Rpb25hbGl0eVxuXG4gICAgJCgnLm5hdi1zY3JvbGwtYnRuLS1wcmV2JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3RvcmFtYS5zaG93KCc8Jyk7XG4gICAgfSk7XG4gICAgJCgnLm5hdi1zY3JvbGwtYnRuLS1uZXh0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3RvcmFtYS5zaG93KCc+Jyk7XG4gICAgfSk7XG5cbiAgICAkKCcuanNfb3Blbl9mb3RvcmFtYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm90b3JhbWEuc2hvdygkKHRoaXMpLmRhdGEoJ2ltZycpKTtcbiAgICAgICAgZm90b3JhbWEucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9KTtcblxuXG4gICAgdmFyICRzdGFnZXNGb3RvcmFtYSA9ICQoJy5qc19zdGFnZXNfX2ZvdG9yYW1hJykuZm90b3JhbWEoe1xuICAgICAgICBuYXZ3aWR0aDogJzkwJSdcbiAgICB9KTtcbiAgICAvLyAyLiBHZXQgdGhlIEFQSSBvYmplY3QuXG4gICAgdmFyIHN0YWdlc0ZvdG9yYW1hID0gJHN0YWdlc0ZvdG9yYW1hLmRhdGEoJ2ZvdG9yYW1hJyk7XG5cbiAgICAkKCcuanNfc3RhZ2VfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG5cbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG5cbiAgICAgICAgICAgICQoJy5qc19zdGFnZXNfX2ZvdG9yYW1hLCAuanNfZ2l2ZV9zdGFnZV90ZXh0JykuYW5pbWF0ZSh7b3BhY2l0eTogXCJ0b2dnbGVcIn0sIDMwMCk7XG4gICAgICAgICAgICB2YXIgaW1hZ2VBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgc3RhZ2VJbWcgaW4gc3RhZ2VPYmpbdGhpc0lkXVsnaW1hZ2VzJ10pe1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZVNyYyA9IHN0YWdlT2JqW3RoaXNJZF1bJ2ltYWdlcyddW3N0YWdlSW1nXS5zcmM7XG4gICAgICAgICAgICAgICAgaW1hZ2VBcnJheS5wdXNoKHtpbWc6IGltYWdlU3JjfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuanNfZ2l2ZV9zdGFnZV90ZXh0JykuaHRtbChzdGFnZU9ialt0aGlzSWRdWyd0ZXh0J10pO1xuICAgICAgICAgICAgICAgIHN0YWdlc0ZvdG9yYW1hLmxvYWQoaW1hZ2VBcnJheSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICAgICAkKCcuanNfc3RhZ2VzX19mb3RvcmFtYSwgLmpzX2dpdmVfc3RhZ2VfdGV4dCcpLmFuaW1hdGUoe29wYWNpdHk6IFwidG9nZ2xlXCJ9LCAzMDApO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAkKHRoaXMpLndpZHRoKCkgLyAyO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8ICQodGhpcykuaW5kZXgoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9ICQoJy5qc19zdGFnZV9idG4nKS5lcShpKS53aWR0aCgpICsgMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcuc3RhZ2VzX19saXN0JykuY3NzKCdsZWZ0JywgJHdpbmRvdy53aWR0aCgpIC8gMiAtIGxlZnQpO1xuICAgICAgICAgICAgJCgnLmpzX3N0YWdlX2J0bi5pcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuanNfc3RhZ2VfYnRuOmZpcnN0LWNoaWxkJykuY2xpY2soKTtcblxuICAgICR3aW5kb3cub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZUJ0biA9ICQoJy5qc19zdGFnZV9idG4uaXMtYWN0aXZlJyk7XG4gICAgICAgIHZhciBsZWZ0ID0gYWN0aXZlQnRuLndpZHRoKCkgLyAyO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYWN0aXZlQnRuLmluZGV4KCk7IGkrKyl7XG4gICAgICAgICAgICBsZWZ0ICs9ICQoJy5qc19zdGFnZV9idG4nKS5lcShpKS53aWR0aCgpICsgMTA7XG4gICAgICAgIH1cbiAgICAgICAgJCgnLnN0YWdlc19fbGlzdCcpLmNzcygnbGVmdCcsICR3aW5kb3cud2lkdGgoKSAvIDIgLSBsZWZ0KTtcblxuICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpID4gMTAyNCl7XG4gICAgICAgICAgICAkKCcuanMtdG9wLWJ0bicpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLyooZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyICR0aXRsZVBvcHVwID0gJCgnLmpzX3RpdGxlX3BvcHVwJyksXG4gICAgICAgICAgICB0aW1lciA9IDAsXG4gICAgICAgICAgICBzZWNvbmRzRm9yU3dpdGNoID0gOSxcbiAgICAgICAgICAgIGhvdmVyT25Qb3B1cCA9IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXNJblBvcHVwID0gZmFsc2U7XG5cbiAgICAgICAgJCgnLmpzX3NsaWRlcl9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVOdW0gPSAkKHRoaXMpLmRhdGEoJ3NsaWRlJyk7XG5cbiAgICAgICAgICAgIGlmICghJHRpdGxlUG9wdXAuaGFzQ2xhc3MoJ3Nob3ctc2xpZGUtJyArIHNsaWRlTnVtKSl7XG4gICAgICAgICAgICAgICAgJHRpdGxlUG9wdXAudG9nZ2xlQ2xhc3MoJ3Nob3ctc2xpZGUtMSBzaG93LXNsaWRlLTInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZXIgPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGl0bGVQb3B1cFxuICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhvdmVyT25Qb3B1cCA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhvdmVyT25Qb3B1cCA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZm9jdXNpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0luUG9wdXAgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZm9jdXNvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNJblBvcHVwID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDw9IDEwMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKGhvdmVyT25Qb3B1cCB8fCBmb2N1c0luUG9wdXApKSB7XG4gICAgICAgICAgICAgICAgdGltZXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lciA9PT0gc2Vjb25kc0ZvclN3aXRjaCkge1xuICAgICAgICAgICAgICAgICR0aXRsZVBvcHVwLnRvZ2dsZUNsYXNzKCdzaG93LXNsaWRlLTEgc2hvdy1zbGlkZS0yJyk7XG4gICAgICAgICAgICAgICAgdGltZXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAkd2luZG93Lm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDw9IDEwMTApIHtcbiAgICAgICAgICAgICAgICAkdGl0bGVQb3B1cC5hZGRDbGFzcygnc2hvdy1zbGlkZS0xJykucmVtb3ZlQ2xhc3MoJ3Nob3ctc2xpZGUtMicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KCkpOyovXG5cblxuICAgIC8qIFlhbmRleCBtYXAgKi9cblxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIixcbiAgICAgICAgICAgIHtjZW50ZXI6IFs0My4yMzM3NzksIDc2LjkyMTE5NV0sIHpvb206IDE2LCBjb250cm9sczogWyd6b29tQ29udHJvbCddfSk7XG4gICAgICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKFwic2Nyb2xsWm9vbVwiKTtcbiAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoXCJkYmxDbGlja1pvb21cIik7XG4gICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPCAxMDAwKSB7XG4gICAgICAgICAgICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs0My4yMzMxNzksIDc2LjkyMDk1XSwge30sIHtcbiAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiBcImRlZmF1bHQjaW1hZ2VcIixcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiBcIi9pbWcvbWFwX2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzEwMCwgOTBdLFxuICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMDAsIC00NV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNDMuMjMzMTc5LCA3Ni45MjA5NV0sIHt9LCB7XG4gICAgICAgICAgICAgICAgaWNvbkxheW91dDogXCJkZWZhdWx0I2ltYWdlXCIsXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogXCIvaW1nL21hcF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsxMzUsIDEyMV0sXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTEzNSwgLTYwXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuXG4gICAgICAgICR3aW5kb3cub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cud2lkdGgoKSA8IDEwMDApIHtcbiAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNDMuMjMzMTc5LCA3Ni45MjA5NV0sIHt9LCB7XG4gICAgICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6IFwiZGVmYXVsdCNpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiBcIi9pbWcvbWFwX2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsxMDAsIDkwXSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTEwMCwgLTQ1XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzQzLjIzMzE3OSwgNzYuOTIwOTVdLCB7fSwge1xuICAgICAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiBcImRlZmF1bHQjaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogXCIvaW1nL21hcF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMTM1LCAxMjFdLFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTM1LCAtNjBdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgdmFyIG15TWFwO1xufSk7XG4iXX0=
