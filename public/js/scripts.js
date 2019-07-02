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

$(function () {
    $(document).ready(function(){
            $('.title-popup__slick').slick({
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9qcXVlcnkubWluLmpzIiwiZm9ybS5qcyIsImZvdG9yYW1hLmpzIiwianF1ZXJ5Lmtub2IuanMiLCJqcXVlcnkubWFzay5qcyIsInNsaWNrLm1pbi5qcyIsInpfbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3puSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3J5QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjIuMi40IHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1jLnNsaWNlLGY9Yy5jb25jYXQsZz1jLnB1c2gsaD1jLmluZGV4T2YsaT17fSxqPWkudG9TdHJpbmcsaz1pLmhhc093blByb3BlcnR5LGw9e30sbT1cIjIuMi40XCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTplLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiBuLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6Zyxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRvU3RyaW5nKCk7cmV0dXJuIW4uaXNBcnJheShhKSYmYi1wYXJzZUZsb2F0KGIpKzE+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKSlyZXR1cm4hMTtpZihhLmNvbnN0cnVjdG9yJiYhay5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWsuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZXx8e30sXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExO2ZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxrLmNhbGwoYSxiKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9pW2ouY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1kLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsZC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHMoYSkpe2ZvcihjPWEubGVuZ3RoO2M+ZDtkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zy5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmguY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGc9MCxoPVtdO2lmKHMoYSkpZm9yKGQ9YS5sZW5ndGg7ZD5nO2crKyllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihnIGluIGEpZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGYuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGQ9ZS5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChlLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpsfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYobi5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtpW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9Z2EoKSx6PWdhKCksQT1nYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitNK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixPPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitOK1wiKSopfC4qKVxcXFwpfClcIixQPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFU9bmV3IFJlZ0V4cChPKSxWPW5ldyBSZWdFeHAoXCJeXCIrTStcIiRcIiksVz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00rXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxYPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWT0vXmhcXGQkL2ksWj0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLCQ9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXz0vWyt+XS8sYWE9Lyd8XFxcXC9nLGJhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGRhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZmEoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3PWImJmIub3duZXJEb2N1bWVudCx4PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09eCYmOSE9PXgmJjExIT09eClyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXgmJihvPSQuZXhlYyhhKSkpaWYoZj1vWzFdKXtpZig5PT09eCl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHcmJihqPXcuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKG9bMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPW9bM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT14KXc9YixzPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShhYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxyPWcoYSksaD1yLmxlbmd0aCxsPVYudGVzdChrKT9cIiNcIitrOlwiW2lkPSdcIitrK1wiJ11cIjt3aGlsZShoLS0pcltoXT1sK1wiIFwiK3FhKHJbaF0pO3M9ci5qb2luKFwiLFwiKSx3PV8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8Yn1pZihzKXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbChzKSksZH1jYXRjaCh5KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShRLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBpYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBoYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixoYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG9hKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWZhLnN1cHBvcnQ9e30sZj1mYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWZhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLChlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1aLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT1aLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihpYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGlhKGZ1bmN0aW9uKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9Wi50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZpYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTyl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1aLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxaLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGthKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9rYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZmEubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBmYShhLG51bGwsbnVsbCxiKX0sZmEubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFQsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBmYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxmYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGZhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxmYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZmEudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWZhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9ZmEuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aGEsbWF0Y2g6VyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShiYSxjYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShiYSxjYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8ZmEuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZmEuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFcuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZVLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZmEuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShQLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aGEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aGEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFEsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aGEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczpoYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGZhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGJhLGNhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzpoYShmdW5jdGlvbihhKXtyZXR1cm4gVi50ZXN0KGF8fFwiXCIpfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpuYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6bmEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm5hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1sYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmdW5jdGlvbiBwYSgpe31wYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHBhLGc9ZmEudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9Ui5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Uy5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShRLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1XW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/ZmEuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBxYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gcmEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqLGs9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihqPWJbdV18fChiW3VdPXt9KSxpPWpbYi51bmlxdWVJRF18fChqW2IudW5pcXVlSURdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBrWzJdPWhbMl07aWYoaVtkXT1rLGtbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiBzYShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB0YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWZhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB1YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXZhKGQpKSxlJiYhZVt1XSYmKGU9dmEoZSxmKSksaGEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dGEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp1YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dWEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXVhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB3YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3JhKHNhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB2YShpPjEmJnNhKG0pLGk+MSYmcWEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShRLFwiJDFcIiksYyxlPmkmJndhKGEuc2xpY2UoaSxlKSksZj5lJiZ3YShhPWEuc2xpY2UoZSkpLGY+ZSYmcWEoYSkpfW0ucHVzaChjKX1yZXR1cm4gc2EobSl9ZnVuY3Rpb24geGEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUYuY2FsbChpKSk7dT11YSh1KX1ILmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZmEudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2hhKGYpOmZ9cmV0dXJuIGg9ZmEuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9d2EoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHhhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1mYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVcubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxfLnRlc3QoalswXS50eXBlKSYmb2EoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnFhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLCFifHxfLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8amEoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxqYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8amEoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZmF9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlU29ydD1uLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sdj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sdz1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHg9L148KFtcXHctXSspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHk9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHooYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih5LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBoLmNhbGwoYixhKT4tMSE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF6KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJncudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEEsQj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEEsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qi5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSx4LnRlc3QoZVsxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmZi5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWYpLHRoaXMuY29udGV4dD1kLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtDLnByb3RvdHlwZT1uLmZuLEE9bihkKTt2YXIgRD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxFPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dy50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9oLmNhbGwobihhKSx0aGlzWzBdKTpoLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlU29ydChuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBGKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB2KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gdihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihFW2FdfHxuLnVuaXF1ZVNvcnQoZSksRC50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEc9L1xcUysvZztmdW5jdGlvbiBIKGEpe3ZhciBiPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChHKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0goYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXtuLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1uLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksaD49YyYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGMubm90aWZ5KS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWUuY2FsbChhcmd1bWVudHMpLGQ9Yy5sZW5ndGgsZj0xIT09ZHx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZDowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9lLmNhbGwoYXJndW1lbnRzKTpkLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZD4xKWZvcihpPW5ldyBBcnJheShkKSxqPW5ldyBBcnJheShkKSxrPW5ldyBBcnJheShkKTtkPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLnByb2dyZXNzKGgoYixqLGkpKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSTtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSS5yZXNvbHZlV2l0aChkLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4oZCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGQpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEooKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEopLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEl8fChJPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KG4ucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEopKSksSS5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylLKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LEw9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBNKCl7dGhpcy5leHBhbmRvPW4uZXhwYW5kbytNLnVpZCsrfU0udWlkPTEsTS5wcm90b3R5cGU9e3JlZ2lzdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8e307cmV0dXJuIGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWM6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpjLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGFbdGhpcy5leHBhbmRvXX0sY2FjaGU6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpcmV0dXJue307dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxMKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW2JdPWM7ZWxzZSBmb3IoZCBpbiBiKWVbZF09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09Zil7aWYodm9pZCAwPT09Yil0aGlzLnJlZ2lzdGVyKGEpO2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGY/ZD1bYixlXTooZD1lLGQ9ZCBpbiBmP1tkXTpkLm1hdGNoKEcpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBmW2RbY11dfSh2b2lkIDA9PT1ifHxuLmlzRW1wdHlPYmplY3QoZikpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFuLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgTj1uZXcgTSxPPW5ldyBNLFA9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFE9L1tBLVpdL2c7ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpQLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Yztcbn1jYXRjaChlKXt9Ty5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE8uaGFzRGF0YShhKXx8Ti5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ty5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBOLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ti5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU8uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTi5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFIoZixkLGVbZF0pKSk7Ti5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtPLnNldCh0aGlzLGEpfSk6Syh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1PLmdldChmLGEpfHxPLmdldChmLGEucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoZD1uLmNhbWVsQ2FzZShhKSxjPU8uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVIoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIGQ9bi5jYW1lbENhc2UoYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9Ty5nZXQodGhpcyxkKTtPLnNldCh0aGlzLGQsYiksYS5pbmRleE9mKFwiLVwiKT4tMSYmdm9pZCAwIT09YyYmTy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe08ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPU4uZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1OLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBOLmdldChhLGMpfHxOLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Ti5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Ti5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUz0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVD1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitTK1wiKShbYS16JV0qKSRcIixcImlcIiksVT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sVj1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfTtmdW5jdGlvbiBXKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBuLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KG4uY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShuLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZULmV4ZWMobi5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixuLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBYPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLFk9LzwoW1xcdzotXSspLyxaPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksJD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19OyQub3B0Z3JvdXA9JC5vcHRpb24sJC50Ym9keT0kLnRmb290PSQuY29sZ3JvdXA9JC5jYXB0aW9uPSQudGhlYWQsJC50aD0kLnRkO2Z1bmN0aW9uIF8oYSxiKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIGFhKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKU4uc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fE4uZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgYmE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIGNhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbz0wLHA9YS5sZW5ndGg7cD5vO28rKylpZihmPWFbb10sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PW4udHlwZShmKSluLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihiYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShZLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9JFtoXXx8JC5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK24uaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtuLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG89MDt3aGlsZShmPW1bbysrXSlpZihkJiZuLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPW4uY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9XyhsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJmFhKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlaLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksbC5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGwubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgZGE9L15rZXkvLGVhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxmYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIGdhKCl7cmV0dXJuITB9ZnVuY3Rpb24gaGEoKXtyZXR1cm4hMX1mdW5jdGlvbiBpYSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gamEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKWphKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9aGE7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1uLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgbiYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5oYXNEYXRhKGEpJiZOLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJk4ucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGQsZixnLGg9W10saT1lLmNhbGwoYXJndW1lbnRzKSxqPShOLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWEucm5hbWVzcGFjZSYmIWEucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxkPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1kJiYoYS5yZXN1bHQ9ZCk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxpc05hTihhLmJ1dHRvbil8fGEuYnV0dG9uPDEpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWkubm9kZVR5cGUmJihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSkpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPi0xOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGRldGFpbCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGQsZT1jLmRvY3VtZW50RWxlbWVudCxmPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZSYmZS5zY3JvbGxMZWZ0fHxmJiZmLnNjcm9sbExlZnR8fDApLShlJiZlLmNsaWVudExlZnR8fGYmJmYuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGUmJmUuc2Nyb2xsVG9wfHxmJiZmLnNjcm9sbFRvcHx8MCktKGUmJmUuY2xpZW50VG9wfHxmJiZmLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWd8fChhLndoaWNoPTEmZz8xOjImZz8zOjQmZz8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZSxmPWEudHlwZSxnPWEsaD10aGlzLmZpeEhvb2tzW2ZdO2h8fCh0aGlzLmZpeEhvb2tzW2ZdPWg9ZWEudGVzdChmKT90aGlzLm1vdXNlSG9va3M6ZGEudGVzdChmKT90aGlzLmtleUhvb2tzOnt9KSxlPWgucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoaC5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGcpLGI9ZS5sZW5ndGg7d2hpbGUoYi0tKWM9ZVtiXSxhW2NdPWdbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9ZCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksaC5maWx0ZXI/aC5maWx0ZXIoYSxnKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PWlhKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PWlhKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LG4ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP2dhOmhhKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOm4uRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOmhhLGlzUHJvcGFnYXRpb25TdG9wcGVkOmhhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOmhhLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPWdhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWdhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxuLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPWhhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciBrYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Oi1dKylbXj5dKilcXC8+L2dpLGxhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLG1hPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksbmE9L150cnVlXFwvKC4qKS8sb2E9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIHBhKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIHJhKGEpe3ZhciBiPW5hLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBzYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKE4uaGFzRGF0YShhKSYmKGY9Ti5hY2Nlc3MoYSksZz1OLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Ty5oYXNEYXRhKGEpJiYoaD1PLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE8uc2V0KGIsaSkpfX1mdW5jdGlvbiB0YShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZYLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gdWEoYSxiLGMsZCl7Yj1mLmFwcGx5KFtdLGIpO3ZhciBlLGcsaCxpLGosayxtPTAsbz1hLmxlbmd0aCxwPW8tMSxxPWJbMF0scj1uLmlzRnVuY3Rpb24ocSk7aWYocnx8bz4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIWwuY2hlY2tDbG9uZSYmbWEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7ciYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLHVhKGYsYixjLGQpfSk7aWYobyYmKGU9Y2EoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxnPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZyksZ3x8ZCkpe2ZvcihoPW4ubWFwKF8oZSxcInNjcmlwdFwiKSxxYSksaT1oLmxlbmd0aDtvPm07bSsrKWo9ZSxtIT09cCYmKGo9bi5jbG9uZShqLCEwLCEwKSxpJiZuLm1lcmdlKGgsXyhqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbV0saixtKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChoLHJhKSxtPTA7aT5tO20rKylqPWhbbV0sWi50ZXN0KGoudHlwZXx8XCJcIikmJiFOLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhrLGopJiYoai5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChqLnNyYyk6bi5nbG9iYWxFdmFsKGoudGV4dENvbnRlbnQucmVwbGFjZShvYSxcIlwiKSkpfXJldHVybiBhfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQsZT1iP24uZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShfKGQpKSxkLnBhcmVudE5vZGUmJihjJiZuLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmYWEoXyhkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfW4uZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2Uoa2EsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEobC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9XyhoKSxmPV8oYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyl0YShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxfKGEpLGc9Z3x8XyhoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXNhKGZbZF0sZ1tkXSk7ZWxzZSBzYShhLGgpO3JldHVybiBnPV8oaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZhYShnLCFpJiZfKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9bi5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoTChjKSl7aWYoYj1jW04uZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tOLmV4cGFuZG9dPXZvaWQgMH1jW08uZXhwYW5kb10mJihjW08uZXhwYW5kb109dm9pZCAwKX19fSksbi5mbi5leHRlbmQoe2RvbU1hbmlwOnVhLGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXBhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIWxhLnRlc3QoYSkmJiEkWyhZLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1uLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoXyhiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7bi5pbkFycmF5KHRoaXMsYSk8MCYmKG4uY2xlYW5EYXRhKF8odGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxmPWUubGVuZ3RoLTEsaD0wO2Y+PWg7aCsrKWM9aD09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGcuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIHdhLHhhPXtIVE1MOlwiYmxvY2tcIixCT0RZOlwiYmxvY2tcIn07ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1uKGIuY3JlYXRlRWxlbWVudChhKSkuYXBwZW5kVG8oYi5ib2R5KSxkPW4uY3NzKGNbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBjLmRldGFjaCgpLGR9ZnVuY3Rpb24gemEoYSl7dmFyIGI9ZCxjPXhhW2FdO3JldHVybiBjfHwoYz15YShhLGIpLFwibm9uZVwiIT09YyYmY3x8KHdhPSh3YXx8bihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPXdhWzBdLmNvbnRlbnREb2N1bWVudCxiLndyaXRlKCksYi5jbG9zZSgpLGM9eWEoYSxiKSx3YS5kZXRhY2goKSkseGFbYV09YyksY312YXIgQWE9L15tYXJnaW4vLEJhPW5ldyBSZWdFeHAoXCJeKFwiK1MrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksQ2E9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfSxEYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX0sRWE9ZC5kb2N1bWVudEVsZW1lbnQ7IWZ1bmN0aW9uKCl7dmFyIGIsYyxlLGYsZz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoaC5zdHlsZSl7aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsbC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxnLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGcuYXBwZW5kQ2hpbGQoaCk7ZnVuY3Rpb24gaSgpe2guc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGguaW5uZXJIVE1MPVwiXCIsRWEuYXBwZW5kQ2hpbGQoZyk7dmFyIGQ9YS5nZXRDb21wdXRlZFN0eWxlKGgpO2I9XCIxJVwiIT09ZC50b3AsZj1cIjJweFwiPT09ZC5tYXJnaW5MZWZ0LGM9XCI0cHhcIj09PWQud2lkdGgsaC5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGU9XCI0cHhcIj09PWQubWFyZ2luUmlnaHQsRWEucmVtb3ZlQ2hpbGQoZyl9bi5leHRlbmQobCx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBpKCksYn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGN9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGV9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksZn0scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9aC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9aC5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixjLnN0eWxlLm1hcmdpblJpZ2h0PWMuc3R5bGUud2lkdGg9XCIwXCIsaC5zdHlsZS53aWR0aD1cIjFweFwiLEVhLmFwcGVuZENoaWxkKGcpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMpLm1hcmdpblJpZ2h0KSxFYS5yZW1vdmVDaGlsZChnKSxoLnJlbW92ZUNoaWxkKGMpLGJ9fSl9fSgpO2Z1bmN0aW9uIEZhKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8Q2EoYSksZz1jP2MuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXTp2b2lkIDAsXCJcIiE9PWcmJnZvaWQgMCE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLGMmJiFsLnBpeGVsTWFyZ2luUmlnaHQoKSYmQmEudGVzdChnKSYmQWEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIEdhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBIYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sSWE9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEphPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sS2E9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdLExhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBNYShhKXtpZihhIGluIExhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9S2EubGVuZ3RoO3doaWxlKGMtLSlpZihhPUthW2NdK2IsYSBpbiBMYSlyZXR1cm4gYX1mdW5jdGlvbiBOYShhLGIsYyl7dmFyIGQ9VC5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gT2EoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1VbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitVW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitVW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFBhKGEsYixjKXt2YXIgZD0hMCxlPVwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCxmPUNhKGEpLGc9XCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZik7aWYoMD49ZXx8bnVsbD09ZSl7aWYoZT1GYShhLGIsZiksKDA+ZXx8bnVsbD09ZSkmJihlPWEuc3R5bGVbYl0pLEJhLnRlc3QoZSkpcmV0dXJuIGU7ZD1nJiYobC5ib3hTaXppbmdSZWxpYWJsZSgpfHxlPT09YS5zdHlsZVtiXSksZT1wYXJzZUZsb2F0KGUpfHwwfXJldHVybiBlK09hKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGYpK1wicHhcIn1mdW5jdGlvbiBRYShhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1OLmdldChkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmVihkKSYmKGZbZ109Ti5hY2Nlc3MoZCxcIm9sZGRpc3BsYXlcIix6YShkLm5vZGVOYW1lKSkpKTooZT1WKGQpLFwibm9uZVwiPT09YyYmZXx8Ti5zZXQoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1GYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9VC5leGVjKGMpKSYmZVsxXSYmKGM9VyhhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksbC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1GYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIEphJiYoZT1KYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/SGEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP0RhKGEsSWEsZnVuY3Rpb24oKXtyZXR1cm4gUGEoYSxiLGQpfSk6UGEoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJkNhKGEpLGc9ZCYmT2EoYSxiLGQsXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPVQuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9bi5jc3MoYSxiKSksTmEoYSxjLGcpfX19KSxuLmNzc0hvb2tzLm1hcmdpbkxlZnQ9R2EobC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj8ocGFyc2VGbG9hdChGYShhLFwibWFyZ2luTGVmdFwiKSl8fGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1EYShhLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCI6dm9pZCAwfSksbi5jc3NIb29rcy5tYXJnaW5SaWdodD1HYShsLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9EYShhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LEZhLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStVW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LEFhLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PU5hKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9Q2EoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vih0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIFJhKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBSYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49UmEsUmEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpSYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxuLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOlJhLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPVJhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sUmEucHJvdG90eXBlLmluaXQucHJvdG90eXBlPVJhLnByb3RvdHlwZSxSYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV0mJiFuLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sUmEucHJvcEhvb2tzLnNjcm9sbFRvcD1SYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sbi5meD1SYS5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIFNhLFRhLFVhPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxWYT0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIFdhKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe1NhPXZvaWQgMH0pLFNhPW4ubm93KCl9ZnVuY3Rpb24gWGEoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1VW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFlhKGEsYixjKXtmb3IodmFyIGQsZT0oX2EudHdlZW5lcnNbYl18fFtdKS5jb25jYXQoX2EudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBaYShhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPXRoaXMsbT17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZWKGEpLHE9Ti5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxsLmFsd2F5cyhmdW5jdGlvbigpe2wuYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/Ti5nZXQoYSxcIm9sZGRpc3BsYXlcIil8fHphKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYoby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLGwuYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxVYS5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1tW2RdPXEmJnFbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChtKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj96YShhLm5vZGVOYW1lKTpqKSYmKG8uZGlzcGxheT1qKTtlbHNle3E/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPU4uYWNjZXNzKGEsXCJmeHNob3dcIix7fSksZiYmKHEuaGlkZGVuPSFwKSxwP24oYSkuc2hvdygpOmwuZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbC5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7Ti5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBtKW4uc3R5bGUoYSxiLG1bYl0pfSk7Zm9yKGQgaW4gbSlnPVlhKHA/cVtkXTowLGQsbCksZCBpbiBxfHwocVtkXT1nLnN0YXJ0LHAmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uICRhKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBfYShhLGIsYyl7dmFyIGQsZSxmPTAsZz1fYS5wcmVmaWx0ZXJzLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPVNhfHxXYSgpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpuLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOlNhfHxXYSgpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcigkYShrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9X2EucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIG4uaXNGdW5jdGlvbihkLnN0b3ApJiYobi5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPW4ucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiBuLm1hcChrLFlhLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQoX2Ese3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIFcoYy5lbGVtLGEsVC5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe24uaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEcpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxfYS50d2VlbmVyc1tjXT1fYS50d2VlbmVyc1tjXXx8W10sX2EudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbWmFdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/X2EucHJlZmlsdGVycy51bnNoaWZ0KGEpOl9hLnByZWZpbHRlcnMucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCxudWxsIT1kLnF1ZXVlJiZkLnF1ZXVlIT09ITB8fChkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bi5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZuLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoVikuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmlzRW1wdHlPYmplY3QoYSksZj1uLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9X2EodGhpcyxuLmV4dGVuZCh7fSxhKSxmKTsoZXx8Ti5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPW4udGltZXJzLGc9Ti5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmVmEudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8bi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1OLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPW4udGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxuLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtnPmI7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLG4uZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmZuW2JdO24uZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKFhhKGIsITApLGEsZCxlKX19KSxuLmVhY2goe3NsaWRlRG93bjpYYShcInNob3dcIiksc2xpZGVVcDpYYShcImhpZGVcIiksc2xpZGVUb2dnbGU6WGEoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksbi50aW1lcnM9W10sbi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9bi50aW1lcnM7Zm9yKFNhPW4ubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8bi5meC5zdG9wKCksU2E9dm9pZCAwfSxuLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe24udGltZXJzLnB1c2goYSksYSgpP24uZnguc3RhcnQoKTpuLnRpbWVycy5wb3AoKX0sbi5meC5pbnRlcnZhbD0xMyxuLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7VGF8fChUYT1hLnNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJJbnRlcnZhbChUYSksVGE9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPW4uZng/bi5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGwuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxsLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxsLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGwucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGFiLGJiPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZT1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/YWI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIG4ucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWwucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRyk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfX0pLGFiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPWJiW2JdfHxuLmZpbmQuYXR0cjtiYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9YmJbYl0sYmJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLGJiW2JdPWYpLGV9fSk7dmFyIGNiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZGI9L14oPzphfGFyZWEpJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW24ucHJvcEZpeFthXXx8YV19KX19KSxuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSxcbnZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6Y2IudGVzdChhLm5vZGVOYW1lKXx8ZGIudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxsLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIGViPS9bXFx0XFxyXFxuXFxmXS9nO2Z1bmN0aW9uIGZiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1uLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixmYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1mYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShlYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOm4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLGZiKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPW4odGhpcyksZj1hLm1hdGNoKEcpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlIHZvaWQgMCE9PWEmJlwiYm9vbGVhblwiIT09Y3x8KGI9ZmIodGhpcyksYiYmTi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOk4uZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZmIoYykrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIGdiPS9cXHIvZyxoYj0vW1xceDIwXFx0XFxyXFxuXFxmXSsvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShnYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSkucmVwbGFjZShoYixcIiBcIil9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLChjLnNlbGVjdGVkfHxpPT09ZSkmJihsLm9wdERpc2FibGVkPyFjLmRpc2FibGVkOm51bGw9PT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKSYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShuLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+LTE6dm9pZCAwfX0sbC5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgaWI9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO24uZXh0ZW5kKG4uZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oYixjLGUsZil7dmFyIGcsaCxpLGosbCxtLG8scD1bZXx8ZF0scT1rLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1rLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoaD1pPWU9ZXx8ZCwzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJiFpYi50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT4tMSYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGw9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWY/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5ybmFtZXNwYWNlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWUpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxmfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZSxjKSE9PSExKSl7aWYoIWYmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhlKSl7Zm9yKGo9by5kZWxlZ2F0ZVR5cGV8fHEsaWIudGVzdChqK3EpfHwoaD1oLnBhcmVudE5vZGUpO2g7aD1oLnBhcmVudE5vZGUpcC5wdXNoKGgpLGk9aDtpPT09KGUub3duZXJEb2N1bWVudHx8ZCkmJnAucHVzaChpLmRlZmF1bHRWaWV3fHxpLnBhcmVudFdpbmRvd3x8YSl9Zz0wO3doaWxlKChoPXBbZysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWc+MT9qOm8uYmluZFR5cGV8fHEsbT0oTi5nZXQoaCxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJk4uZ2V0KGgsXCJoYW5kbGVcIiksbSYmbS5hcHBseShoLGMpLG09bCYmaFtsXSxtJiZtLmFwcGx5JiZMKGgpJiYoYi5yZXN1bHQ9bS5hcHBseShoLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGZ8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhTChlKXx8bCYmbi5pc0Z1bmN0aW9uKGVbcV0pJiYhbi5pc1dpbmRvdyhlKSYmKGk9ZVtsXSxpJiYoZVtsXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGVbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaSYmKGVbbF09aSkpLGIucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMH0pO24uZXZlbnQudHJpZ2dlcihkLG51bGwsYil9fSksbi5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxsLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsbC5mb2N1c2lufHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1OLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE4uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKS0xO2U/Ti5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLnJlbW92ZShkLGIpKX19fSk7dmFyIGpiPWEubG9jYXRpb24sa2I9bi5ub3coKSxsYj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8bi5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgbWI9LyMuKiQvLG5iPS8oWz8mXSlfPVteJl0qLyxvYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLHBiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLHFiPS9eKD86R0VUfEhFQUQpJC8scmI9L15cXC9cXC8vLHNiPXt9LHRiPXt9LHViPVwiKi9cIi5jb25jYXQoXCIqXCIpLHZiPWQuY3JlYXRlRWxlbWVudChcImFcIik7dmIuaHJlZj1qYi5ocmVmO2Z1bmN0aW9uIHdiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W107aWYobi5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIHhiKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PXRiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24geWIoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmbi5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIHpiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIEFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOmpiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6cGIudGVzdChqYi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6dWIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj95Yih5YihhLG4uYWpheFNldHRpbmdzKSxiKTp5YihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjp3YihzYiksYWpheFRyYW5zcG9ydDp3Yih0YiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbT1uLmFqYXhTZXR1cCh7fSxjKSxvPW0uY29udGV4dHx8bSxwPW0uY29udGV4dCYmKG8ubm9kZVR5cGV8fG8uanF1ZXJ5KT9uKG8pOm4uZXZlbnQscT1uLkRlZmVycmVkKCkscj1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHM9bS5zdGF0dXNDb2RlfHx7fSx0PXt9LHU9e30sdj0wLHc9XCJjYW5jZWxlZFwiLHg9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dil7aWYoIWgpe2g9e307d2hpbGUoYj1vYi5leGVjKGcpKWhbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9aFthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT12P2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdnx8KGE9dVtjXT11W2NdfHxhLHRbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdnx8KG0ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dilmb3IoYiBpbiBhKXNbYl09W3NbYl0sYVtiXV07ZWxzZSB4LmFsd2F5cyhhW3guc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHc7cmV0dXJuIGUmJmUuYWJvcnQoYikseigwLGIpLHRoaXN9fTtpZihxLnByb21pc2UoeCkuY29tcGxldGU9ci5hZGQseC5zdWNjZXNzPXguZG9uZSx4LmVycm9yPXguZmFpbCxtLnVybD0oKGJ8fG0udXJsfHxqYi5ocmVmKStcIlwiKS5yZXBsYWNlKG1iLFwiXCIpLnJlcGxhY2UocmIsamIucHJvdG9jb2wrXCIvL1wiKSxtLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8bS5tZXRob2R8fG0udHlwZSxtLmRhdGFUeXBlcz1uLnRyaW0obS5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtcIlwiXSxudWxsPT1tLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1tLnVybCxqLmhyZWY9ai5ocmVmLG0uY3Jvc3NEb21haW49dmIucHJvdG9jb2wrXCIvL1wiK3ZiLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh5KXttLmNyb3NzRG9tYWluPSEwfX1pZihtLmRhdGEmJm0ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBtLmRhdGEmJihtLmRhdGE9bi5wYXJhbShtLmRhdGEsbS50cmFkaXRpb25hbCkpLHhiKHNiLG0sYyx4KSwyPT09dilyZXR1cm4geDtrPW4uZXZlbnQmJm0uZ2xvYmFsLGsmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksbS50eXBlPW0udHlwZS50b1VwcGVyQ2FzZSgpLG0uaGFzQ29udGVudD0hcWIudGVzdChtLnR5cGUpLGY9bS51cmwsbS5oYXNDb250ZW50fHwobS5kYXRhJiYoZj1tLnVybCs9KGxiLnRlc3QoZik/XCImXCI6XCI/XCIpK20uZGF0YSxkZWxldGUgbS5kYXRhKSxtLmNhY2hlPT09ITEmJihtLnVybD1uYi50ZXN0KGYpP2YucmVwbGFjZShuYixcIiQxXz1cIitrYisrKTpmKyhsYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIra2IrKykpLG0uaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2ZdKSxuLmV0YWdbZl0mJnguc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZl0pKSwobS5kYXRhJiZtLmhhc0NvbnRlbnQmJm0uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnguc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG0uY29udGVudFR5cGUpLHguc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG0uZGF0YVR5cGVzWzBdJiZtLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dP20uYWNjZXB0c1ttLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09bS5kYXRhVHlwZXNbMF0/XCIsIFwiK3ViK1wiOyBxPTAuMDFcIjpcIlwiKTptLmFjY2VwdHNbXCIqXCJdKTtmb3IobCBpbiBtLmhlYWRlcnMpeC5zZXRSZXF1ZXN0SGVhZGVyKGwsbS5oZWFkZXJzW2xdKTtpZihtLmJlZm9yZVNlbmQmJihtLmJlZm9yZVNlbmQuY2FsbChvLHgsbSk9PT0hMXx8Mj09PXYpKXJldHVybiB4LmFib3J0KCk7dz1cImFib3J0XCI7Zm9yKGwgaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0peFtsXShtW2xdKTtpZihlPXhiKHRiLG0sYyx4KSl7aWYoeC5yZWFkeVN0YXRlPTEsayYmcC50cmlnZ2VyKFwiYWpheFNlbmRcIixbeCxtXSksMj09PXYpcmV0dXJuIHg7bS5hc3luYyYmbS50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3guYWJvcnQoXCJ0aW1lb3V0XCIpfSxtLnRpbWVvdXQpKTt0cnl7dj0xLGUuc2VuZCh0LHopfWNhdGNoKHkpe2lmKCEoMj52KSl0aHJvdyB5O3ooLTEseSl9fWVsc2UgeigtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB6KGIsYyxkLGgpe3ZhciBqLGwsdCx1LHcseT1jOzIhPT12JiYodj0yLGkmJmEuY2xlYXJUaW1lb3V0KGkpLGU9dm9pZCAwLGc9aHx8XCJcIix4LnJlYWR5U3RhdGU9Yj4wPzQ6MCxqPWI+PTIwMCYmMzAwPmJ8fDMwND09PWIsZCYmKHU9emIobSx4LGQpKSx1PUFiKG0sdSx4LGopLGo/KG0uaWZNb2RpZmllZCYmKHc9eC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKG4ubGFzdE1vZGlmaWVkW2ZdPXcpLHc9eC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKG4uZXRhZ1tmXT13KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1tLnR5cGU/eT1cIm5vY29udGVudFwiOjMwND09PWI/eT1cIm5vdG1vZGlmaWVkXCI6KHk9dS5zdGF0ZSxsPXUuZGF0YSx0PXUuZXJyb3Isaj0hdCkpOih0PXksIWImJnl8fCh5PVwiZXJyb3JcIiwwPmImJihiPTApKSkseC5zdGF0dXM9Yix4LnN0YXR1c1RleHQ9KGN8fHkpK1wiXCIsaj9xLnJlc29sdmVXaXRoKG8sW2wseSx4XSk6cS5yZWplY3RXaXRoKG8sW3gseSx0XSkseC5zdGF0dXNDb2RlKHMpLHM9dm9pZCAwLGsmJnAudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt4LG0saj9sOnRdKSxyLmZpcmVXaXRoKG8sW3gseV0pLGsmJihwLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeCxtXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geH0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheChuLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sbi5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxuLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBBbGwoYS5jYWxsKHRoaXMsYikpfSk6KHRoaXNbMF0mJihiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpcyl9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLnZpc2libGUoYSl9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg+MHx8YS5vZmZzZXRIZWlnaHQ+MHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wfTt2YXIgQmI9LyUyMC9nLENiPS9cXFtcXF0kLyxEYj0vXFxyP1xcbi9nLEViPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxGYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gR2IoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8Q2IudGVzdChhKT9kKGEsZSk6R2IoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilHYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpR2IoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZShCYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmRmIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUViLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFYLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoRGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShEYixcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBIYj17MDoyMDAsMTIyMzoyMDR9LEliPW4uYWpheFNldHRpbmdzLnhocigpO2wuY29ycz0hIUliJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gSWIsbC5hamF4PUliPSEhSWIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7cmV0dXJuIGwuY29yc3x8SWImJiFiLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihIYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBKYj1bXSxLYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUpiLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIra2IrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoS2IudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJktiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoS2IsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0obGIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9uKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEpiLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxkO3ZhciBlPXguZXhlYyhhKSxmPSFjJiZbXTtyZXR1cm4gZT9bYi5jcmVhdGVFbGVtZW50KGVbMV0pXTooZT1jYShbYV0sYixmKSxmJiZmLmxlbmd0aCYmbihmKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfTt2YXIgTGI9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJkxiKXJldHVybiBMYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPW4udHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gTWIoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxuLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsbi5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KGU9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPU1iKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1uLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8RWF9KX19KSxuLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtuLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmPU1iKGEpO3JldHVybiB2b2lkIDA9PT1lP2Y/ZltiXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/Zi5wYWdlWE9mZnNldDplLGM/ZTpmLnBhZ2VZT2Zmc2V0KTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09R2EobC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9RmEoYSxiKSxCYS50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX0sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH19KSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBOYj1hLmpRdWVyeSxPYj1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1PYiksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9TmIpLG59LGJ8fChhLmpRdWVyeT1hLiQ9biksbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidC10L3QuNC1INC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0LzRiyDRh9C10YDQtdC3IHBocCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YNcbiAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0L/QvtGH0YLRiyDQvdCwINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQtSDQvNCw0YHQutC1ICpAKi4qXG4gICAgZnVuY3Rpb24gaXNFbWFpbCggbWFpbCApe1xuICAgICAgICB2YXIgcmVnZXggPSAvXFxTK0BcXFMrL2lnbTtcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QobWFpbCk7XG4gICAgfVxuXG5cbiAgICAvLyDQntGH0LjRgdGC0LrQsCDRhNC+0YDQvNGLXG4gICAgZnVuY3Rpb24gY2xlYXJGaWVsZHMoIHNlbGVjdG9yICl7XG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCAkKHRoaXMpLmF0dHIoJ25hbWUnKSAhPSAnZm9ybScpe1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0L7RgtC00LXQu9GM0L3QvtCz0L4g0L/QvtC70Y8g0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjFxuICAgIGZ1bmN0aW9uIGZpZWxkVmFsaWQoIGlucHV0ICkge1xuXG4gICAgICAgIGlmKCBpbnB1dC52YWwoKSAhPSAnJyApe1xuXG4gICAgICAgICAgICBpZiAoIGlucHV0LmF0dHIoJ3R5cGUnKSA9PSAnZW1haWwnICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRW1haWwoIGlucHV0LnZhbCgpICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdC+0LIg0L/QvtC70Y4g0L/QviDRgNC10LfRg9C70YzRgtCw0YLQsNC8INCy0LDQu9C40LTQsNGG0LjQuFxuICAgIGZ1bmN0aW9uIGZpZWxkQ2hlY2soIGlucHV0ICkge1xuXG4gICAgICAgIHZhciBwYXJlbnQgPSBpbnB1dC5wYXJlbnQoKTtcblxuICAgICAgICBpZiggZmllbGRWYWxpZCggaW5wdXQgKSApe1xuICAgICAgICAgICAgaWYoIHBhcmVudC5oYXNDbGFzcygnZXJyb3InKSApe1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDbGFzcygnZXJyb3InKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd2YWxpZCcpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCBwYXJlbnQuaGFzQ2xhc3MoJ3ZhbGlkJykgKXtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ3ZhbGlkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudC5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCgnLmZvcm0taW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmllbGRDaGVjayggJCh0aGlzKSApO1xuICAgIH0pO1xuICAgICQoJy5mb3JtLWlucHV0Jykub24oJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdmaWxsaW5nJyk7XG4gICAgfSk7XG4gICAgJCgnLmZvcm0taW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2ZpbGxpbmcnKTtcbiAgICB9KTtcblxuXG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0L3QsCDQvtGC0YHRg9GC0YHRgtCy0LjQtSDQv9GD0YHRgtGL0YUg0L/QvtC70LXQuSDQuCDQstCw0LvQuNC00L3QvtGB0YLRjFxuICAgIGZ1bmN0aW9uIGZpZWxkc0NoZWNrKCBzZWxlY3RvciApe1xuICAgICAgICB2YXIgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHZhciBmb2N1cyA9IHRydWU7XG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoZWNrZWQgPSBmaWVsZENoZWNrKCAkKHRoaXMpICkgJiYgY2hlY2tlZDtcbiAgICAgICAgICAgIGlmICggZm9jdXMgJiYgIWNoZWNrZWQgKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgIH1cblxuXG4gICAgLy8g0KHQsdC+0YAg0LTQsNC90L3Ri9GFINGBINGE0L7RgNC80Ysg0Lgg0YTQvtGA0LzQuNGA0L7QstCw0L3QuNC1INC+0LHRitC10LrRgtCwXG4gICAgZnVuY3Rpb24gYWRkRmllbGRzKCBzZWxlY3Rvciwgb2JqZWN0ICl7XG5cbiAgICAgICAgJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBvYmplY3RbJHRoaXMuYXR0cignbmFtZScpXSA9ICR0aGlzLnZhbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhamF4RGF0YVNlbmQodHlwZSwgdXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiAkLmFqYXgoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKndpbmRvdy5vblN1Ym1pdFJlQ2FwdGNoYSA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgc2VuZEJ1dHRvbi5hZGRDbGFzcygnbG9hZCcpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYXB0Y2hhIHRlc3Qgc3RhcnQnKTtcbiAgICAgICAgdmFyIGNSZXNwb25zZSA9IHsnZy1yZWNhcHRjaGEtcmVzcG9uc2UnOiBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKCl9O1xuXG4gICAgICAgIHZhciBjYXBjaGFUZXN0ID0gYWpheERhdGFTZW5kKCdQT1NUJywgJy9jYXB0Y2hhJywgY1Jlc3BvbnNlKTtcblxuICAgICAgICBjYXBjaGFUZXN0LnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBpZiggZGF0YS5lcnJvciApe1xuICAgICAgICAgICAgICAgIGFsZXJ0KCfQn9GA0L7QstC10YDQutCwINC90LUg0L/RgNC+0LnQtNC10L3QsCEnKTtcbiAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXB0Y2hhVGVzdCBzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgc2VuZEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhcGNoYVRlc3QuZXJyb3IoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBhbGVydCgn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0YHQvtC+0LHRidC10L3QuNGPINC/0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXB0Y2hhVGVzdCBlcnJvcicpO1xuICAgICAgICAgICAgc2VuZEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZCcpO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTsqL1xuXG5cbiAgICB2YXIgdW5pY2FsLCBzZW5kQnV0dG9uLCBzZWxlY3RvcjtcbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyB2YXIgdGhhbmtzX3Nob3cgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGZpbmFsVmFsaWRhdGlvbigpIHtcbiAgICAgICAgaWYoIGFjdGl2ZSApe1xuICAgICAgICAgICAgc2VuZEJ1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICB1bmljYWwgPSBzZW5kQnV0dG9uLmNsb3Nlc3QoJy5mb3JtLWlkJykuYXR0cignaWQnKTtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gJyMnK3VuaWNhbCsnIC5mb3JtLWlucHV0JztcblxuICAgICAgICAgICAgdmFyIHZhbGlkRm9ybSAgPSBmaWVsZHNDaGVjayggc2VsZWN0b3IgKTtcblxuICAgICAgICAgICAgaWYgKCB2YWxpZEZvcm0gKXtcbiAgICAgICAgICAgICAgICAvKmdyZWNhcHRjaGEucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLmV4ZWN1dGUoKTsqL1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8qaWYgKHVuaWNhbCA9PSAnZmVlZGJhY2tfY2FsbCcgfHwgdW5pY2FsID09ICdmbGF0c19jYWxsJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoYW5rc19zaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLmFkZENsYXNzKCdsb2FkJyk7XG4gICAgICAgICAgICAgICAgc2VuZEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoJy5zZW5kLWZvcm0nKS5vbignY2xpY2snLCBmaW5hbFZhbGlkYXRpb24pO1xuXG5cbiAgICBmdW5jdGlvbiBzZW5kRm9ybSgpIHtcblxuICAgICAgICB2YXIgZGF0YW9iaiA9IHt9O1xuXG4gICAgICAgIGFkZEZpZWxkcyggc2VsZWN0b3IsIGRhdGFvYmogKTtcblxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBhamF4RGF0YVNlbmQoJ1BPU1QnLCAnL2ZlZWRiYWNrL21haWwnLCBkYXRhb2JqKTtcbiAgICAgICAgcmVzcG9uc2Uuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKCFkYXRhLmVycm9yKXtcbiAgICAgICAgICAgICAgICAvKmlmICh0aGFua3Nfc2hvdyl7XG4gICAgICAgICAgICAgICAgICAgICQoJy50aGFuaycpLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLndoaXRlLXBvcHVwX190aGFua3MtbWVzc2FnZScpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy53aGl0ZS1wb3B1cF9fdGhhbmtzLW1lc3NhZ2UnKS5mYWRlT3V0KDEwMDApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPVwiL3RoYW5rc1wiO1xuICAgICAgICAgICAgICAgIGNsZWFyRmllbGRzKCBzZWxlY3RvciApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhhbmtzX3Nob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbmRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWQnKTtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZS5lcnJvcihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2VuZEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZCcpO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRoYW5rc19zaG93ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyIsIi8qIVxuICogRm90b3JhbWEgNC42LjQgfCBodHRwOi8vZm90b3JhbWEuaW8vbGljZW5zZS9cbiAqL1xuZm90b3JhbWFWZXJzaW9uID0gJzQuNi40JztcbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgbG9jYXRpb24sICQsIHVuZGVmaW5lZCkge1xuICBcInVzZSBzdHJpY3RcIjtcbnZhciBfZm90b3JhbWFDbGFzcyA9ICdmb3RvcmFtYScsXG4gICAgX2Z1bGxzY3JlZW5DbGFzcyA9ICdmdWxsc2NyZWVuJyxcblxuICAgIHdyYXBDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fd3JhcCcsXG4gICAgd3JhcENzczJDbGFzcyA9IHdyYXBDbGFzcyArICctLWNzczInLFxuICAgIHdyYXBDc3MzQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS1jc3MzJyxcbiAgICB3cmFwVmlkZW9DbGFzcyA9IHdyYXBDbGFzcyArICctLXZpZGVvJyxcbiAgICB3cmFwRmFkZUNsYXNzID0gd3JhcENsYXNzICsgJy0tZmFkZScsXG4gICAgd3JhcFNsaWRlQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS1zbGlkZScsXG4gICAgd3JhcE5vQ29udHJvbHNDbGFzcyA9IHdyYXBDbGFzcyArICctLW5vLWNvbnRyb2xzJyxcbiAgICB3cmFwTm9TaGFkb3dzQ2xhc3MgPSB3cmFwQ2xhc3MgKyAnLS1uby1zaGFkb3dzJyxcbiAgICB3cmFwUGFuWUNsYXNzID0gd3JhcENsYXNzICsgJy0tcGFuLXknLFxuICAgIHdyYXBSdGxDbGFzcyA9IHdyYXBDbGFzcyArICctLXJ0bCcsXG4gICAgd3JhcE9ubHlBY3RpdmVDbGFzcyA9IHdyYXBDbGFzcyArICctLW9ubHktYWN0aXZlJyxcbiAgICB3cmFwTm9DYXB0aW9uc0NsYXNzID0gd3JhcENsYXNzICsgJy0tbm8tY2FwdGlvbnMnLFxuICAgIHdyYXBUb2dnbGVBcnJvd3NDbGFzcyA9IHdyYXBDbGFzcyArICctLXRvZ2dsZS1hcnJvd3MnLFxuXG4gICAgc3RhZ2VDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fc3RhZ2UnLFxuICAgIHN0YWdlRnJhbWVDbGFzcyA9IHN0YWdlQ2xhc3MgKyAnX19mcmFtZScsXG4gICAgc3RhZ2VGcmFtZVZpZGVvQ2xhc3MgPSBzdGFnZUZyYW1lQ2xhc3MgKyAnLS12aWRlbycsXG4gICAgc3RhZ2VTaGFmdENsYXNzID0gc3RhZ2VDbGFzcyArICdfX3NoYWZ0JyxcblxuICAgIGdyYWJDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fZ3JhYicsXG4gICAgcG9pbnRlckNsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19wb2ludGVyJyxcblxuICAgIGFyckNsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19hcnInLFxuICAgIGFyckRpc2FibGVkQ2xhc3MgPSBhcnJDbGFzcyArICctLWRpc2FibGVkJyxcbiAgICBhcnJQcmV2Q2xhc3MgPSBhcnJDbGFzcyArICctLXByZXYnLFxuICAgIGFyck5leHRDbGFzcyA9IGFyckNsYXNzICsgJy0tbmV4dCcsXG4gICAgYXJyQXJyQ2xhc3MgPSBhcnJDbGFzcyArICdfX2FycicsXG5cbiAgICBuYXZDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fbmF2JyxcbiAgICBuYXZXcmFwQ2xhc3MgPSBuYXZDbGFzcyArICctd3JhcCcsXG4gICAgbmF2U2hhZnRDbGFzcyA9IG5hdkNsYXNzICsgJ19fc2hhZnQnLFxuICAgIG5hdkRvdHNDbGFzcyA9IG5hdkNsYXNzICsgJy0tZG90cycsXG4gICAgbmF2VGh1bWJzQ2xhc3MgPSBuYXZDbGFzcyArICctLXRodW1icycsXG4gICAgbmF2RnJhbWVDbGFzcyA9IG5hdkNsYXNzICsgJ19fZnJhbWUnLFxuICAgIG5hdkZyYW1lRG90Q2xhc3MgPSBuYXZGcmFtZUNsYXNzICsgJy0tZG90JyxcbiAgICBuYXZGcmFtZVRodW1iQ2xhc3MgPSBuYXZGcmFtZUNsYXNzICsgJy0tdGh1bWInLFxuXG4gICAgZmFkZUNsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19mYWRlJyxcbiAgICBmYWRlRnJvbnRDbGFzcyA9IGZhZGVDbGFzcyArICctZnJvbnQnLFxuICAgIGZhZGVSZWFyQ2xhc3MgPSBmYWRlQ2xhc3MgKyAnLXJlYXInLFxuXG4gICAgc2hhZG93Q2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX3NoYWRvdycsXG4gICAgc2hhZG93c0NsYXNzID0gc2hhZG93Q2xhc3MgKyAncycsXG4gICAgc2hhZG93c0xlZnRDbGFzcyA9IHNoYWRvd3NDbGFzcyArICctLWxlZnQnLFxuICAgIHNoYWRvd3NSaWdodENsYXNzID0gc2hhZG93c0NsYXNzICsgJy0tcmlnaHQnLFxuXG4gICAgYWN0aXZlQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2FjdGl2ZScsXG4gICAgc2VsZWN0Q2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX3NlbGVjdCcsXG5cbiAgICBoaWRkZW5DbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJy0taGlkZGVuJyxcblxuICAgIGZ1bGxzY3JlZW5DbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJy0tZnVsbHNjcmVlbicsXG4gICAgZnVsbHNjcmVlbkljb25DbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fZnVsbHNjcmVlbi1pY29uJyxcblxuICAgIGVycm9yQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2Vycm9yJyxcbiAgICBsb2FkaW5nQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2xvYWRpbmcnLFxuICAgIGxvYWRlZENsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19sb2FkZWQnLFxuICAgIGxvYWRlZEZ1bGxDbGFzcyA9IGxvYWRlZENsYXNzICsgJy0tZnVsbCcsXG4gICAgbG9hZGVkSW1nQ2xhc3MgPSBsb2FkZWRDbGFzcyArICctLWltZycsXG5cbiAgICBncmFiYmluZ0NsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19ncmFiYmluZycsXG5cbiAgICBpbWdDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19faW1nJyxcbiAgICBpbWdGdWxsQ2xhc3MgPSBpbWdDbGFzcyArICctLWZ1bGwnLFxuXG4gICAgZG90Q2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX2RvdCcsXG4gICAgdGh1bWJDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fdGh1bWInLFxuICAgIHRodW1iQm9yZGVyQ2xhc3MgPSB0aHVtYkNsYXNzICsgJy1ib3JkZXInLFxuXG4gICAgaHRtbENsYXNzID0gX2ZvdG9yYW1hQ2xhc3MgKyAnX19odG1sJyxcblxuICAgIHZpZGVvQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX3ZpZGVvJyxcbiAgICB2aWRlb1BsYXlDbGFzcyA9IHZpZGVvQ2xhc3MgKyAnLXBsYXknLFxuICAgIHZpZGVvQ2xvc2VDbGFzcyA9IHZpZGVvQ2xhc3MgKyAnLWNsb3NlJyxcblxuICAgIGNhcHRpb25DbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fY2FwdGlvbicsXG4gICAgY2FwdGlvbldyYXBDbGFzcyA9IF9mb3RvcmFtYUNsYXNzICsgJ19fY2FwdGlvbl9fd3JhcCcsXG5cbiAgICBzcGlubmVyQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArICdfX3NwaW5uZXInLFxuXG4gICAgYnV0dG9uQXR0cmlidXRlcyA9ICdcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uJztcbnZhciBKUVVFUllfVkVSU0lPTiA9ICQgJiYgJC5mbi5qcXVlcnkuc3BsaXQoJy4nKTtcblxuaWYgKCFKUVVFUllfVkVSU0lPTlxuICAgIHx8IEpRVUVSWV9WRVJTSU9OWzBdIDwgMVxuICAgIHx8IChKUVVFUllfVkVSU0lPTlswXSA9PSAxICYmIEpRVUVSWV9WRVJTSU9OWzFdIDwgOCkpIHtcbiAgdGhyb3cgJ0ZvdG9yYW1hIHJlcXVpcmVzIGpRdWVyeSAxLjggb3IgbGF0ZXIgYW5kIHdpbGwgbm90IHJ1biB3aXRob3V0IGl0Lic7XG59XG4vLyBNeSBVbmRlcnNjb3JlIDotKVxudmFyIF8gPSB7fTtcbi8qIE1vZGVybml6ciAyLjYuMiAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAmIEJTRFxuICogQnVpbGQ6IGh0dHA6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLyMtY3NzdHJhbnNmb3JtczNkLXByZWZpeGVkLXRlc3RzdHlsZXMtdGVzdHByb3AtdGVzdGFsbHByb3BzLXByZWZpeGVzLWRvbXByZWZpeGVzXG4gKi9cblxudmFyIE1vZGVybml6ciA9IChmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgdmFyIHZlcnNpb24gPSAnMi42LjInLFxuXG4gICAgICBNb2Rlcm5penIgPSB7fSxcblxuICAgICAgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcblxuICAgICAgbW9kID0gJ21vZGVybml6cicsXG4gICAgICBtb2RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtb2QpLFxuICAgICAgbVN0eWxlID0gbW9kRWxlbS5zdHlsZSxcblxuICAgICAgaW5wdXRFbGVtLFxuXG4gICAgICB0b1N0cmluZyA9IHt9LnRvU3RyaW5nLFxuXG4gICAgICBwcmVmaXhlcyA9ICcgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gJy5zcGxpdCgnICcpLFxuXG4gICAgICBvbVByZWZpeGVzID0gJ1dlYmtpdCBNb3ogTyBtcycsXG5cbiAgICAgIGNzc29tUHJlZml4ZXMgPSBvbVByZWZpeGVzLnNwbGl0KCcgJyksXG5cbiAgICAgIGRvbVByZWZpeGVzID0gb21QcmVmaXhlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyksXG5cbiAgICAgIHRlc3RzID0ge30sXG4gICAgICBpbnB1dHMgPSB7fSxcbiAgICAgIGF0dHJzID0ge30sXG5cbiAgICAgIGNsYXNzZXMgPSBbXSxcblxuICAgICAgc2xpY2UgPSBjbGFzc2VzLnNsaWNlLFxuXG4gICAgICBmZWF0dXJlTmFtZSxcblxuICAgICAgaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMgPSBmdW5jdGlvbiAocnVsZSwgY2FsbGJhY2ssIG5vZGVzLCB0ZXN0bmFtZXMpIHtcblxuICAgICAgICB2YXIgc3R5bGUsIHJldCwgbm9kZSwgZG9jT3ZlcmZsb3csXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgZmFrZUJvZHkgPSBib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcblxuICAgICAgICBpZiAocGFyc2VJbnQobm9kZXMsIDEwKSkge1xuICAgICAgICAgIHdoaWxlIChub2Rlcy0tKSB7XG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub2RlLmlkID0gdGVzdG5hbWVzID8gdGVzdG5hbWVzW25vZGVzXSA6IG1vZCArIChub2RlcyArIDEpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlID0gWycmIzE3MzsnLCAnPHN0eWxlIGlkPVwicycsIG1vZCwgJ1wiPicsIHJ1bGUsICc8L3N0eWxlPiddLmpvaW4oJycpO1xuICAgICAgICBkaXYuaWQgPSBtb2Q7XG4gICAgICAgIChib2R5ID8gZGl2IDogZmFrZUJvZHkpLmlubmVySFRNTCArPSBzdHlsZTtcbiAgICAgICAgZmFrZUJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgZmFrZUJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICAgIGZha2VCb2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgZG9jT3ZlcmZsb3cgPSBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICAgICAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICBkb2NFbGVtZW50LmFwcGVuZENoaWxkKGZha2VCb2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IGNhbGxiYWNrKGRpdiwgcnVsZSk7XG4gICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgIGZha2VCb2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmFrZUJvZHkpO1xuICAgICAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhcmV0O1xuXG4gICAgICB9LFxuICAgICAgX2hhc093blByb3BlcnR5ID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSwgaGFzT3duUHJvcDtcblxuICBpZiAoIWlzKF9oYXNPd25Qcm9wZXJ0eSwgJ3VuZGVmaW5lZCcpICYmICFpcyhfaGFzT3duUHJvcGVydHkuY2FsbCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgaGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gX2hhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgfTtcbiAgfVxuICBlbHNlIHtcbiAgICBoYXNPd25Qcm9wID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAoKHByb3BlcnR5IGluIG9iamVjdCkgJiYgaXMob2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wZXJ0eV0sICd1bmRlZmluZWQnKSk7XG4gICAgfTtcbiAgfVxuXG5cbiAgaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCAodGhhdCkge1xuXG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgYm91bmQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcblxuICAgICAgICAgICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgRi5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IG5ldyBGKCk7XG5cbiAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGJvdW5kO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDc3MgKHN0cikge1xuICAgIG1TdHlsZS5jc3NUZXh0ID0gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3NzQWxsIChzdHIxLCBzdHIyKSB7XG4gICAgcmV0dXJuIHNldENzcyhwcmVmaXhlcy5qb2luKHN0cjEgKyAnOycpICsgKCBzdHIyIHx8ICcnICkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXMgKG9iaiwgdHlwZSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSB0eXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbnMgKHN0ciwgc3Vic3RyKSB7XG4gICAgcmV0dXJuICEhfignJyArIHN0cikuaW5kZXhPZihzdWJzdHIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGVzdFByb3BzIChwcm9wcywgcHJlZml4ZWQpIHtcbiAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgaWYgKCFjb250YWlucyhwcm9wLCBcIi1cIikgJiYgbVN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeGVkID09ICdwZngnID8gcHJvcCA6IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRlc3RET01Qcm9wcyAocHJvcHMsIG9iaiwgZWxlbSkge1xuICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcbiAgICAgIHZhciBpdGVtID0gb2JqW3Byb3BzW2ldXTtcbiAgICAgIGlmIChpdGVtICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICBpZiAoZWxlbSA9PT0gZmFsc2UpIHJldHVybiBwcm9wc1tpXTtcblxuICAgICAgICBpZiAoaXMoaXRlbSwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5iaW5kKGVsZW0gfHwgb2JqKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0ZXN0UHJvcHNBbGwgKHByb3AsIHByZWZpeGVkLCBlbGVtKSB7XG5cbiAgICB2YXIgdWNQcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSksXG4gICAgICAgIHByb3BzID0gKHByb3AgKyAnICcgKyBjc3NvbVByZWZpeGVzLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcblxuICAgIGlmIChpcyhwcmVmaXhlZCwgXCJzdHJpbmdcIikgfHwgaXMocHJlZml4ZWQsIFwidW5kZWZpbmVkXCIpKSB7XG4gICAgICByZXR1cm4gdGVzdFByb3BzKHByb3BzLCBwcmVmaXhlZCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMgPSAocHJvcCArICcgJyArIChkb21QcmVmaXhlcykuam9pbih1Y1Byb3AgKyAnICcpICsgdWNQcm9wKS5zcGxpdCgnICcpO1xuICAgICAgcmV0dXJuIHRlc3RET01Qcm9wcyhwcm9wcywgcHJlZml4ZWQsIGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIHRlc3RzWydjc3N0cmFuc2Zvcm1zM2QnXSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciByZXQgPSAhIXRlc3RQcm9wc0FsbCgncGVyc3BlY3RpdmUnKTtcblxuLy8gQ2hyb21lIGZhaWxzIHRoYXQgdGVzdCwgaWdub3JlXG4vL1x0XHRpZiAocmV0ICYmICd3ZWJraXRQZXJzcGVjdGl2ZScgaW4gZG9jRWxlbWVudC5zdHlsZSkge1xuLy9cbi8vXHRcdFx0aW5qZWN0RWxlbWVudFdpdGhTdHlsZXMoJ0BtZWRpYSAodHJhbnNmb3JtLTNkKSwoLXdlYmtpdC10cmFuc2Zvcm0tM2QpeyNtb2Rlcm5penJ7bGVmdDo5cHg7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjNweDt9fScsIGZ1bmN0aW9uIChub2RlLCBydWxlKSB7XG4vL1x0XHRcdFx0cmV0ID0gbm9kZS5vZmZzZXRMZWZ0ID09PSA5ICYmIG5vZGUub2Zmc2V0SGVpZ2h0ID09PSAzO1xuLy9cdFx0XHR9KTtcbi8vXHRcdH1cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIGZvciAodmFyIGZlYXR1cmUgaW4gdGVzdHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcCh0ZXN0cywgZmVhdHVyZSkpIHtcbiAgICAgIGZlYXR1cmVOYW1lID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lXSA9IHRlc3RzW2ZlYXR1cmVdKCk7XG5cbiAgICAgIGNsYXNzZXMucHVzaCgoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lXSA/ICcnIDogJ25vLScpICsgZmVhdHVyZU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIE1vZGVybml6ci5hZGRUZXN0ID0gZnVuY3Rpb24gKGZlYXR1cmUsIHRlc3QpIHtcbiAgICBpZiAodHlwZW9mIGZlYXR1cmUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBmZWF0dXJlKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGZlYXR1cmUsIGtleSkpIHtcbiAgICAgICAgICBNb2Rlcm5penIuYWRkVGVzdChrZXksIGZlYXR1cmVbIGtleSBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGZlYXR1cmUgPSBmZWF0dXJlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmIChNb2Rlcm5penJbZmVhdHVyZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gTW9kZXJuaXpyO1xuICAgICAgfVxuXG4gICAgICB0ZXN0ID0gdHlwZW9mIHRlc3QgPT0gJ2Z1bmN0aW9uJyA/IHRlc3QoKSA6IHRlc3Q7XG5cbiAgICAgIGlmICh0eXBlb2YgZW5hYmxlQ2xhc3NlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbmFibGVDbGFzc2VzKSB7XG4gICAgICAgIGRvY0VsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArICh0ZXN0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlO1xuICAgICAgfVxuICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVdID0gdGVzdDtcblxuICAgIH1cblxuICAgIHJldHVybiBNb2Rlcm5penI7XG4gIH07XG5cblxuICBzZXRDc3MoJycpO1xuICBtb2RFbGVtID0gaW5wdXRFbGVtID0gbnVsbDtcblxuXG4gIE1vZGVybml6ci5fdmVyc2lvbiA9IHZlcnNpb247XG5cbiAgTW9kZXJuaXpyLl9wcmVmaXhlcyA9IHByZWZpeGVzO1xuICBNb2Rlcm5penIuX2RvbVByZWZpeGVzID0gZG9tUHJlZml4ZXM7XG4gIE1vZGVybml6ci5fY3Nzb21QcmVmaXhlcyA9IGNzc29tUHJlZml4ZXM7XG5cbiAgTW9kZXJuaXpyLnRlc3RQcm9wID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICByZXR1cm4gdGVzdFByb3BzKFtwcm9wXSk7XG4gIH07XG5cbiAgTW9kZXJuaXpyLnRlc3RBbGxQcm9wcyA9IHRlc3RQcm9wc0FsbDtcblxuICBNb2Rlcm5penIudGVzdFN0eWxlcyA9IGluamVjdEVsZW1lbnRXaXRoU3R5bGVzO1xuICBNb2Rlcm5penIucHJlZml4ZWQgPSBmdW5jdGlvbiAocHJvcCwgb2JqLCBlbGVtKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgJ3BmeCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsIG9iaiwgZWxlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBNb2Rlcm5penI7XG59KSh3aW5kb3csIGRvY3VtZW50KTtcbnZhciBmdWxsU2NyZWVuQXBpID0ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgaXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIH0sXG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIH0sXG4gICAgICBldmVudDogJycsXG4gICAgICBwcmVmaXg6ICcnXG4gICAgfSxcbiAgICBicm93c2VyUHJlZml4ZXMgPSAnd2Via2l0IG1veiBvIG1zIGtodG1sJy5zcGxpdCgnICcpO1xuXG4vLyBjaGVjayBmb3IgbmF0aXZlIHN1cHBvcnRcbmlmICh0eXBlb2YgZG9jdW1lbnQuY2FuY2VsRnVsbFNjcmVlbiAhPSAndW5kZWZpbmVkJykge1xuICBmdWxsU2NyZWVuQXBpLm9rID0gdHJ1ZTtcbn0gZWxzZSB7XG4gIC8vIGNoZWNrIGZvciBmdWxsc2NyZWVuIHN1cHBvcnQgYnkgdmVuZG9yIHByZWZpeFxuICBmb3IgKHZhciBpID0gMCwgaWwgPSBicm93c2VyUHJlZml4ZXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgIGZ1bGxTY3JlZW5BcGkucHJlZml4ID0gYnJvd3NlclByZWZpeGVzW2ldO1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnRbZnVsbFNjcmVlbkFwaS5wcmVmaXggKyAnQ2FuY2VsRnVsbFNjcmVlbicgXSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgZnVsbFNjcmVlbkFwaS5vayA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuLy8gdXBkYXRlIG1ldGhvZHMgdG8gZG8gc29tZXRoaW5nIHVzZWZ1bFxuaWYgKGZ1bGxTY3JlZW5BcGkub2spIHtcbiAgZnVsbFNjcmVlbkFwaS5ldmVudCA9IGZ1bGxTY3JlZW5BcGkucHJlZml4ICsgJ2Z1bGxzY3JlZW5jaGFuZ2UnO1xuICBmdWxsU2NyZWVuQXBpLmlzID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aXRjaCAodGhpcy5wcmVmaXgpIHtcbiAgICAgIGNhc2UgJyc6XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5mdWxsU2NyZWVuO1xuICAgICAgY2FzZSAnd2Via2l0JzpcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkb2N1bWVudFt0aGlzLnByZWZpeCArICdGdWxsU2NyZWVuJ107XG4gICAgfVxuICB9O1xuICBmdWxsU2NyZWVuQXBpLnJlcXVlc3QgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gKHRoaXMucHJlZml4ID09PSAnJykgPyBlbC5yZXF1ZXN0RnVsbFNjcmVlbigpIDogZWxbdGhpcy5wcmVmaXggKyAnUmVxdWVzdEZ1bGxTY3JlZW4nXSgpO1xuICB9O1xuICBmdWxsU2NyZWVuQXBpLmNhbmNlbCA9IGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiAodGhpcy5wcmVmaXggPT09ICcnKSA/IGRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4oKSA6IGRvY3VtZW50W3RoaXMucHJlZml4ICsgJ0NhbmNlbEZ1bGxTY3JlZW4nXSgpO1xuICB9O1xufVxuLy9mZ25hc3MuZ2l0aHViLmNvbS9zcGluLmpzI3YxLjMuMlxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDEzIEZlbGl4IEduYXNzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG52YXIgU3Bpbm5lcixcbiAgICBzcGlubmVyRGVmYXVsdHMgPSB7XG4gICAgICBsaW5lczogMTIsIC8vIFRoZSBudW1iZXIgb2YgbGluZXMgdG8gZHJhd1xuICAgICAgbGVuZ3RoOiA1LCAvLyBUaGUgbGVuZ3RoIG9mIGVhY2ggbGluZVxuICAgICAgd2lkdGg6IDIsIC8vIFRoZSBsaW5lIHRoaWNrbmVzc1xuICAgICAgcmFkaXVzOiA3LCAvLyBUaGUgcmFkaXVzIG9mIHRoZSBpbm5lciBjaXJjbGVcbiAgICAgIGNvcm5lcnM6IDEsIC8vIENvcm5lciByb3VuZG5lc3MgKDAuLjEpXG4gICAgICByb3RhdGU6IDE1LCAvLyBUaGUgcm90YXRpb24gb2Zmc2V0XG4gICAgICBjb2xvcjogJ3JnYmEoMTI4LCAxMjgsIDEyOCwgLjc1KScsXG4gICAgICBod2FjY2VsOiB0cnVlXG4gICAgfSxcbiAgICBzcGlubmVyT3ZlcnJpZGUgPSB7XG4gICAgICB0b3A6ICdhdXRvJyxcbiAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgIGNsYXNzTmFtZTogJydcbiAgICB9O1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gIC8qIENvbW1vbkpTICovXG4gIC8vaWYgKHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnKSAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblxuICAvKiBBTUQgbW9kdWxlICovXG4gIC8vZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShmYWN0b3J5KVxuXG4gIC8qIEJyb3dzZXIgZ2xvYmFsICovXG4gIC8vZWxzZSByb290LlNwaW5uZXIgPSBmYWN0b3J5KClcblxuICBTcGlubmVyID0gZmFjdG9yeSgpO1xufVxuKHRoaXMsIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgcHJlZml4ZXMgPSBbJ3dlYmtpdCcsICdNb3onLCAnbXMnLCAnTyddIC8qIFZlbmRvciBwcmVmaXhlcyAqL1xuICAgICwgYW5pbWF0aW9ucyA9IHt9IC8qIEFuaW1hdGlvbiBydWxlcyBrZXllZCBieSB0aGVpciBuYW1lICovXG4gICAgLCB1c2VDc3NBbmltYXRpb25zIC8qIFdoZXRoZXIgdG8gdXNlIENTUyBhbmltYXRpb25zIG9yIHNldFRpbWVvdXQgKi9cblxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgZWxlbWVudHMuIElmIG5vIHRhZyBuYW1lIGlzIGdpdmVuLFxuICAgKiBhIERJViBpcyBjcmVhdGVkLiBPcHRpb25hbGx5IHByb3BlcnRpZXMgY2FuIGJlIHBhc3NlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZywgcHJvcCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnIHx8ICdkaXYnKVxuICAgICAgLCBuXG5cbiAgICBmb3IobiBpbiBwcm9wKSBlbFtuXSA9IHByb3Bbbl1cbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGNoaWxkcmVuIGFuZCByZXR1cm5zIHRoZSBwYXJlbnQuXG4gICAqL1xuICBmdW5jdGlvbiBpbnMocGFyZW50IC8qIGNoaWxkMSwgY2hpbGQyLCAuLi4qLykge1xuICAgIGZvciAodmFyIGk9MSwgbj1hcmd1bWVudHMubGVuZ3RoOyBpPG47IGkrKylcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChhcmd1bWVudHNbaV0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGEgbmV3IHN0eWxlc2hlZXQgdG8gaG9sZCB0aGUgQGtleWZyYW1lIG9yIFZNTCBydWxlcy5cbiAgICovXG4gIHZhciBzaGVldCA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSBjcmVhdGVFbCgnc3R5bGUnLCB7dHlwZSA6ICd0ZXh0L2Nzcyd9KVxuICAgIGlucyhkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLCBlbClcbiAgICByZXR1cm4gZWwuc2hlZXQgfHwgZWwuc3R5bGVTaGVldFxuICB9KCkpXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb3BhY2l0eSBrZXlmcmFtZSBhbmltYXRpb24gcnVsZSBhbmQgcmV0dXJucyBpdHMgbmFtZS5cbiAgICogU2luY2UgbW9zdCBtb2JpbGUgV2Via2l0cyBoYXZlIHRpbWluZyBpc3N1ZXMgd2l0aCBhbmltYXRpb24tZGVsYXksXG4gICAqIHdlIGNyZWF0ZSBzZXBhcmF0ZSBydWxlcyBmb3IgZWFjaCBsaW5lL3NlZ21lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRBbmltYXRpb24oYWxwaGEsIHRyYWlsLCBpLCBsaW5lcykge1xuICAgIHZhciBuYW1lID0gWydvcGFjaXR5JywgdHJhaWwsIH5+KGFscGhhKjEwMCksIGksIGxpbmVzXS5qb2luKCctJylcbiAgICAgICwgc3RhcnQgPSAwLjAxICsgaS9saW5lcyAqIDEwMFxuICAgICAgLCB6ID0gTWF0aC5tYXgoMSAtICgxLWFscGhhKSAvIHRyYWlsICogKDEwMC1zdGFydCksIGFscGhhKVxuICAgICAgLCBwcmVmaXggPSB1c2VDc3NBbmltYXRpb25zLnN1YnN0cmluZygwLCB1c2VDc3NBbmltYXRpb25zLmluZGV4T2YoJ0FuaW1hdGlvbicpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAsIHByZSA9IHByZWZpeCAmJiAnLScgKyBwcmVmaXggKyAnLScgfHwgJydcblxuICAgIGlmICghYW5pbWF0aW9uc1tuYW1lXSkge1xuICAgICAgc2hlZXQuaW5zZXJ0UnVsZShcbiAgICAgICAgJ0AnICsgcHJlICsgJ2tleWZyYW1lcyAnICsgbmFtZSArICd7JyArXG4gICAgICAgICcwJXtvcGFjaXR5OicgKyB6ICsgJ30nICtcbiAgICAgICAgc3RhcnQgKyAnJXtvcGFjaXR5OicgKyBhbHBoYSArICd9JyArXG4gICAgICAgIChzdGFydCswLjAxKSArICcle29wYWNpdHk6MX0nICtcbiAgICAgICAgKHN0YXJ0K3RyYWlsKSAlIDEwMCArICcle29wYWNpdHk6JyArIGFscGhhICsgJ30nICtcbiAgICAgICAgJzEwMCV7b3BhY2l0eTonICsgeiArICd9JyArXG4gICAgICAgICd9Jywgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKVxuXG4gICAgICBhbmltYXRpb25zW25hbWVdID0gMVxuICAgIH1cblxuICAgIHJldHVybiBuYW1lXG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdmFyaW91cyB2ZW5kb3IgcHJlZml4ZXMgYW5kIHJldHVybnMgdGhlIGZpcnN0IHN1cHBvcnRlZCBwcm9wZXJ0eS5cbiAgICovXG4gIGZ1bmN0aW9uIHZlbmRvcihlbCwgcHJvcCkge1xuICAgIHZhciBzID0gZWwuc3R5bGVcbiAgICAgICwgcHBcbiAgICAgICwgaVxuXG4gICAgcHJvcCA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpXG4gICAgZm9yKGk9MDsgaTxwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHAgPSBwcmVmaXhlc1tpXStwcm9wXG4gICAgICBpZihzW3BwXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcHBcbiAgICB9XG4gICAgaWYoc1twcm9wXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcHJvcFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbXVsdGlwbGUgc3R5bGUgcHJvcGVydGllcyBhdCBvbmNlLlxuICAgKi9cbiAgZnVuY3Rpb24gY3NzKGVsLCBwcm9wKSB7XG4gICAgZm9yICh2YXIgbiBpbiBwcm9wKVxuICAgICAgZWwuc3R5bGVbdmVuZG9yKGVsLCBuKXx8bl0gPSBwcm9wW25dXG5cbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxscyBpbiBkZWZhdWx0IHZhbHVlcy5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlKG9iaikge1xuICAgIGZvciAodmFyIGk9MTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlZiA9IGFyZ3VtZW50c1tpXVxuICAgICAgZm9yICh2YXIgbiBpbiBkZWYpXG4gICAgICAgIGlmIChvYmpbbl0gPT09IHVuZGVmaW5lZCkgb2JqW25dID0gZGVmW25dXG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhYnNvbHV0ZSBwYWdlLW9mZnNldCBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIHBvcyhlbCkge1xuICAgIHZhciBvID0geyB4OmVsLm9mZnNldExlZnQsIHk6ZWwub2Zmc2V0VG9wIH1cbiAgICB3aGlsZSgoZWwgPSBlbC5vZmZzZXRQYXJlbnQpKVxuICAgICAgby54Kz1lbC5vZmZzZXRMZWZ0LCBvLnkrPWVsLm9mZnNldFRvcFxuXG4gICAgcmV0dXJuIG9cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsaW5lIGNvbG9yIGZyb20gdGhlIGdpdmVuIHN0cmluZyBvciBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldENvbG9yKGNvbG9yLCBpZHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbG9yID09ICdzdHJpbmcnID8gY29sb3IgOiBjb2xvcltpZHggJSBjb2xvci5sZW5ndGhdXG4gIH1cblxuICAvLyBCdWlsdC1pbiBkZWZhdWx0c1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBsaW5lczogMTIsICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiBsaW5lcyB0byBkcmF3XG4gICAgbGVuZ3RoOiA3LCAgICAgICAgICAgIC8vIFRoZSBsZW5ndGggb2YgZWFjaCBsaW5lXG4gICAgd2lkdGg6IDUsICAgICAgICAgICAgIC8vIFRoZSBsaW5lIHRoaWNrbmVzc1xuICAgIHJhZGl1czogMTAsICAgICAgICAgICAvLyBUaGUgcmFkaXVzIG9mIHRoZSBpbm5lciBjaXJjbGVcbiAgICByb3RhdGU6IDAsICAgICAgICAgICAgLy8gUm90YXRpb24gb2Zmc2V0XG4gICAgY29ybmVyczogMSwgICAgICAgICAgIC8vIFJvdW5kbmVzcyAoMC4uMSlcbiAgICBjb2xvcjogJyMwMDAnLCAgICAgICAgLy8gI3JnYiBvciAjcnJnZ2JiXG4gICAgZGlyZWN0aW9uOiAxLCAgICAgICAgIC8vIDE6IGNsb2Nrd2lzZSwgLTE6IGNvdW50ZXJjbG9ja3dpc2VcbiAgICBzcGVlZDogMSwgICAgICAgICAgICAgLy8gUm91bmRzIHBlciBzZWNvbmRcbiAgICB0cmFpbDogMTAwLCAgICAgICAgICAgLy8gQWZ0ZXJnbG93IHBlcmNlbnRhZ2VcbiAgICBvcGFjaXR5OiAxLzQsICAgICAgICAgLy8gT3BhY2l0eSBvZiB0aGUgbGluZXNcbiAgICBmcHM6IDIwLCAgICAgICAgICAgICAgLy8gRnJhbWVzIHBlciBzZWNvbmQgd2hlbiB1c2luZyBzZXRUaW1lb3V0KClcbiAgICB6SW5kZXg6IDJlOSwgICAgICAgICAgLy8gVXNlIGEgaGlnaCB6LWluZGV4IGJ5IGRlZmF1bHRcbiAgICBjbGFzc05hbWU6ICdzcGlubmVyJywgLy8gQ1NTIGNsYXNzIHRvIGFzc2lnbiB0byB0aGUgZWxlbWVudFxuICAgIHRvcDogJ2F1dG8nLCAgICAgICAgICAvLyBjZW50ZXIgdmVydGljYWxseVxuICAgIGxlZnQ6ICdhdXRvJywgICAgICAgICAvLyBjZW50ZXIgaG9yaXpvbnRhbGx5XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScgIC8vIGVsZW1lbnQgcG9zaXRpb25cbiAgfVxuXG4gIC8qKiBUaGUgY29uc3RydWN0b3IgKi9cbiAgZnVuY3Rpb24gU3Bpbm5lcihvKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzID09ICd1bmRlZmluZWQnKSByZXR1cm4gbmV3IFNwaW5uZXIobylcbiAgICB0aGlzLm9wdHMgPSBtZXJnZShvIHx8IHt9LCBTcGlubmVyLmRlZmF1bHRzLCBkZWZhdWx0cylcbiAgfVxuXG4gIC8vIEdsb2JhbCBkZWZhdWx0cyB0aGF0IG92ZXJyaWRlIHRoZSBidWlsdC1pbnM6XG4gIFNwaW5uZXIuZGVmYXVsdHMgPSB7fVxuXG4gIG1lcmdlKFNwaW5uZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBzcGlubmVyIHRvIHRoZSBnaXZlbiB0YXJnZXQgZWxlbWVudC4gSWYgdGhpcyBpbnN0YW5jZSBpcyBhbHJlYWR5XG4gICAgICogc3Bpbm5pbmcsIGl0IGlzIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIGl0cyBwcmV2aW91cyB0YXJnZXQgYiBjYWxsaW5nXG4gICAgICogc3RvcCgpIGludGVybmFsbHkuXG4gICAgICovXG4gICAgc3BpbjogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICB0aGlzLnN0b3AoKVxuXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgLCBvID0gc2VsZi5vcHRzXG4gICAgICAgICwgZWwgPSBzZWxmLmVsID0gY3NzKGNyZWF0ZUVsKDAsIHtjbGFzc05hbWU6IG8uY2xhc3NOYW1lfSksIHtwb3NpdGlvbjogby5wb3NpdGlvbiwgd2lkdGg6IDAsIHpJbmRleDogby56SW5kZXh9KVxuICAgICAgICAsIG1pZCA9IG8ucmFkaXVzK28ubGVuZ3RoK28ud2lkdGhcbiAgICAgICAgLCBlcCAvLyBlbGVtZW50IHBvc2l0aW9uXG4gICAgICAgICwgdHAgLy8gdGFyZ2V0IHBvc2l0aW9uXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShlbCwgdGFyZ2V0LmZpcnN0Q2hpbGR8fG51bGwpXG4gICAgICAgIHRwID0gcG9zKHRhcmdldClcbiAgICAgICAgZXAgPSBwb3MoZWwpXG4gICAgICAgIGNzcyhlbCwge1xuICAgICAgICAgIGxlZnQ6IChvLmxlZnQgPT0gJ2F1dG8nID8gdHAueC1lcC54ICsgKHRhcmdldC5vZmZzZXRXaWR0aCA+PiAxKSA6IHBhcnNlSW50KG8ubGVmdCwgMTApICsgbWlkKSArICdweCcsXG4gICAgICAgICAgdG9wOiAoby50b3AgPT0gJ2F1dG8nID8gdHAueS1lcC55ICsgKHRhcmdldC5vZmZzZXRIZWlnaHQgPj4gMSkgOiBwYXJzZUludChvLnRvcCwgMTApICsgbWlkKSAgKyAncHgnXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcm9ncmVzc2JhcicpXG4gICAgICBzZWxmLmxpbmVzKGVsLCBzZWxmLm9wdHMpXG5cbiAgICAgIGlmICghdXNlQ3NzQW5pbWF0aW9ucykge1xuICAgICAgICAvLyBObyBDU1MgYW5pbWF0aW9uIHN1cHBvcnQsIHVzZSBzZXRUaW1lb3V0KCkgaW5zdGVhZFxuICAgICAgICB2YXIgaSA9IDBcbiAgICAgICAgICAsIHN0YXJ0ID0gKG8ubGluZXMgLSAxKSAqICgxIC0gby5kaXJlY3Rpb24pIC8gMlxuICAgICAgICAgICwgYWxwaGFcbiAgICAgICAgICAsIGZwcyA9IG8uZnBzXG4gICAgICAgICAgLCBmID0gZnBzL28uc3BlZWRcbiAgICAgICAgICAsIG9zdGVwID0gKDEtby5vcGFjaXR5KSAvIChmKm8udHJhaWwgLyAxMDApXG4gICAgICAgICAgLCBhc3RlcCA9IGYvby5saW5lc1xuXG4gICAgICAgIDsoZnVuY3Rpb24gYW5pbSgpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvLmxpbmVzOyBqKyspIHtcbiAgICAgICAgICAgIGFscGhhID0gTWF0aC5tYXgoMSAtIChpICsgKG8ubGluZXMgLSBqKSAqIGFzdGVwKSAlIGYgKiBvc3RlcCwgby5vcGFjaXR5KVxuXG4gICAgICAgICAgICBzZWxmLm9wYWNpdHkoZWwsIGogKiBvLmRpcmVjdGlvbiArIHN0YXJ0LCBhbHBoYSwgbylcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi5lbCAmJiBzZXRUaW1lb3V0KGFuaW0sIH5+KDEwMDAvZnBzKSlcbiAgICAgICAgfSkoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNlbGZcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYW5kIHJlbW92ZXMgdGhlIFNwaW5uZXIuXG4gICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgaWYgKGVsLnBhcmVudE5vZGUpIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG4gICAgICAgIHRoaXMuZWwgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB0aGF0IGRyYXdzIHRoZSBpbmRpdmlkdWFsIGxpbmVzLiBXaWxsIGJlIG92ZXJ3cml0dGVuXG4gICAgICogaW4gVk1MIGZhbGxiYWNrIG1vZGUgYmVsb3cuXG4gICAgICovXG4gICAgbGluZXM6IGZ1bmN0aW9uKGVsLCBvKSB7XG4gICAgICB2YXIgaSA9IDBcbiAgICAgICAgLCBzdGFydCA9IChvLmxpbmVzIC0gMSkgKiAoMSAtIG8uZGlyZWN0aW9uKSAvIDJcbiAgICAgICAgLCBzZWdcblxuICAgICAgZnVuY3Rpb24gZmlsbChjb2xvciwgc2hhZG93KSB7XG4gICAgICAgIHJldHVybiBjc3MoY3JlYXRlRWwoKSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHdpZHRoOiAoby5sZW5ndGgrby53aWR0aCkgKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogby53aWR0aCArICdweCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogY29sb3IsXG4gICAgICAgICAgYm94U2hhZG93OiBzaGFkb3csXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKCcgKyB+figzNjAvby5saW5lcyppK28ucm90YXRlKSArICdkZWcpIHRyYW5zbGF0ZSgnICsgby5yYWRpdXMrJ3B4JyArJywwKScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAoby5jb3JuZXJzICogby53aWR0aD4+MSkgKyAncHgnXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBpIDwgby5saW5lczsgaSsrKSB7XG4gICAgICAgIHNlZyA9IGNzcyhjcmVhdGVFbCgpLCB7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAxK34oby53aWR0aC8yKSArICdweCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiBvLmh3YWNjZWwgPyAndHJhbnNsYXRlM2QoMCwwLDApJyA6ICcnLFxuICAgICAgICAgIG9wYWNpdHk6IG8ub3BhY2l0eSxcbiAgICAgICAgICBhbmltYXRpb246IHVzZUNzc0FuaW1hdGlvbnMgJiYgYWRkQW5pbWF0aW9uKG8ub3BhY2l0eSwgby50cmFpbCwgc3RhcnQgKyBpICogby5kaXJlY3Rpb24sIG8ubGluZXMpICsgJyAnICsgMS9vLnNwZWVkICsgJ3MgbGluZWFyIGluZmluaXRlJ1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChvLnNoYWRvdykgaW5zKHNlZywgY3NzKGZpbGwoJyMwMDAnLCAnMCAwIDRweCAnICsgJyMwMDAnKSwge3RvcDogMisncHgnfSkpXG4gICAgICAgIGlucyhlbCwgaW5zKHNlZywgZmlsbChnZXRDb2xvcihvLmNvbG9yLCBpKSwgJzAgMCAxcHggcmdiYSgwLDAsMCwuMSknKSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gZWxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgYWRqdXN0cyB0aGUgb3BhY2l0eSBvZiBhIHNpbmdsZSBsaW5lLlxuICAgICAqIFdpbGwgYmUgb3ZlcndyaXR0ZW4gaW4gVk1MIGZhbGxiYWNrIG1vZGUgYmVsb3cuXG4gICAgICovXG4gICAgb3BhY2l0eTogZnVuY3Rpb24oZWwsIGksIHZhbCkge1xuICAgICAgaWYgKGkgPCBlbC5jaGlsZE5vZGVzLmxlbmd0aCkgZWwuY2hpbGROb2Rlc1tpXS5zdHlsZS5vcGFjaXR5ID0gdmFsXG4gICAgfVxuXG4gIH0pXG5cblxuICBmdW5jdGlvbiBpbml0Vk1MKCkge1xuXG4gICAgLyogVXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYSBWTUwgdGFnICovXG4gICAgZnVuY3Rpb24gdm1sKHRhZywgYXR0cikge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsKCc8JyArIHRhZyArICcgeG1sbnM9XCJ1cm46c2NoZW1hcy1taWNyb3NvZnQuY29tOnZtbFwiIGNsYXNzPVwic3Bpbi12bWxcIj4nLCBhdHRyKVxuICAgIH1cblxuICAgIC8vIE5vIENTUyB0cmFuc2Zvcm1zIGJ1dCBWTUwgc3VwcG9ydCwgYWRkIGEgQ1NTIHJ1bGUgZm9yIFZNTCBlbGVtZW50czpcbiAgICBzaGVldC5hZGRSdWxlKCcuc3Bpbi12bWwnLCAnYmVoYXZpb3I6dXJsKCNkZWZhdWx0I1ZNTCknKVxuXG4gICAgU3Bpbm5lci5wcm90b3R5cGUubGluZXMgPSBmdW5jdGlvbihlbCwgbykge1xuICAgICAgdmFyIHIgPSBvLmxlbmd0aCtvLndpZHRoXG4gICAgICAgICwgcyA9IDIqclxuXG4gICAgICBmdW5jdGlvbiBncnAoKSB7XG4gICAgICAgIHJldHVybiBjc3MoXG4gICAgICAgICAgdm1sKCdncm91cCcsIHtcbiAgICAgICAgICAgIGNvb3Jkc2l6ZTogcyArICcgJyArIHMsXG4gICAgICAgICAgICBjb29yZG9yaWdpbjogLXIgKyAnICcgKyAtclxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHsgd2lkdGg6IHMsIGhlaWdodDogcyB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdmFyIG1hcmdpbiA9IC0oby53aWR0aCtvLmxlbmd0aCkqMiArICdweCdcbiAgICAgICAgLCBnID0gY3NzKGdycCgpLCB7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogbWFyZ2luLCBsZWZ0OiBtYXJnaW59KVxuICAgICAgICAsIGlcblxuICAgICAgZnVuY3Rpb24gc2VnKGksIGR4LCBmaWx0ZXIpIHtcbiAgICAgICAgaW5zKGcsXG4gICAgICAgICAgaW5zKGNzcyhncnAoKSwge3JvdGF0aW9uOiAzNjAgLyBvLmxpbmVzICogaSArICdkZWcnLCBsZWZ0OiB+fmR4fSksXG4gICAgICAgICAgICBpbnMoY3NzKHZtbCgncm91bmRyZWN0Jywge2FyY3NpemU6IG8uY29ybmVyc30pLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBvLndpZHRoLFxuICAgICAgICAgICAgICAgIGxlZnQ6IG8ucmFkaXVzLFxuICAgICAgICAgICAgICAgIHRvcDogLW8ud2lkdGg+PjEsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXJcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHZtbCgnZmlsbCcsIHtjb2xvcjogZ2V0Q29sb3Ioby5jb2xvciwgaSksIG9wYWNpdHk6IG8ub3BhY2l0eX0pLFxuICAgICAgICAgICAgICB2bWwoJ3N0cm9rZScsIHtvcGFjaXR5OiAwfSkgLy8gdHJhbnNwYXJlbnQgc3Ryb2tlIHRvIGZpeCBjb2xvciBibGVlZGluZyB1cG9uIG9wYWNpdHkgY2hhbmdlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChvLnNoYWRvdylcbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSBvLmxpbmVzOyBpKyspXG4gICAgICAgICAgc2VnKGksIC0yLCAncHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJsdXIocGl4ZWxyYWRpdXM9MixtYWtlc2hhZG93PTEsc2hhZG93b3BhY2l0eT0uMyknKVxuXG4gICAgICBmb3IgKGkgPSAxOyBpIDw9IG8ubGluZXM7IGkrKykgc2VnKGkpXG4gICAgICByZXR1cm4gaW5zKGVsLCBnKVxuICAgIH1cblxuICAgIFNwaW5uZXIucHJvdG90eXBlLm9wYWNpdHkgPSBmdW5jdGlvbihlbCwgaSwgdmFsLCBvKSB7XG4gICAgICB2YXIgYyA9IGVsLmZpcnN0Q2hpbGRcbiAgICAgIG8gPSBvLnNoYWRvdyAmJiBvLmxpbmVzIHx8IDBcbiAgICAgIGlmIChjICYmIGkrbyA8IGMuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgYyA9IGMuY2hpbGROb2Rlc1tpK29dOyBjID0gYyAmJiBjLmZpcnN0Q2hpbGQ7IGMgPSBjICYmIGMuZmlyc3RDaGlsZFxuICAgICAgICBpZiAoYykgYy5vcGFjaXR5ID0gdmFsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb2JlID0gY3NzKGNyZWF0ZUVsKCdncm91cCcpLCB7YmVoYXZpb3I6ICd1cmwoI2RlZmF1bHQjVk1MKSd9KVxuXG4gIGlmICghdmVuZG9yKHByb2JlLCAndHJhbnNmb3JtJykgJiYgcHJvYmUuYWRqKSBpbml0Vk1MKClcbiAgZWxzZSB1c2VDc3NBbmltYXRpb25zID0gdmVuZG9yKHByb2JlLCAnYW5pbWF0aW9uJylcblxuICByZXR1cm4gU3Bpbm5lclxuXG59KSk7XG5cbi8qIEJleiB2MS4wLjEwLWc1YWUwMTM2XG4gKiBodHRwOi8vZ2l0aHViLmNvbS9yZGFsbGFzZ3JheS9iZXpcbiAqXG4gKiBBIHBsdWdpbiB0byBjb252ZXJ0IENTUzMgY3ViaWMtYmV6aWVyIGNvLW9yZGluYXRlcyB0byBqUXVlcnktY29tcGF0aWJsZSBlYXNpbmcgZnVuY3Rpb25zXG4gKlxuICogV2l0aCB0aGFua3MgdG8gTmlrb2xheSBOZW1zaGlsb3YgZm9yIGNsYXJpZmljYXRpb24gb24gdGhlIGN1YmljLWJlemllciBtYXRoc1xuICogU2VlIGh0dHA6Ly9zdC1vbi1pdC5ibG9nc3BvdC5jb20vMjAxMS8wNS9jYWxjdWxhdGluZy1jdWJpYy1iZXppZXItZnVuY3Rpb24uaHRtbFxuICpcbiAqIENvcHlyaWdodCAyMDExIFJvYmVydCBEYWxsYXMgR3JheS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFByb3ZpZGVkIHVuZGVyIHRoZSBGcmVlQlNEIGxpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZGFsbGFzZ3JheS9iZXovYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcbiAqL1xuZnVuY3Rpb24gYmV6IChjb09yZEFycmF5KSB7XG4gIHZhciBlbmNvZGVkRnVuY05hbWUgPSBcImJlel9cIiArICQubWFrZUFycmF5KGFyZ3VtZW50cykuam9pbihcIl9cIikucmVwbGFjZShcIi5cIiwgXCJwXCIpO1xuICBpZiAodHlwZW9mICRbJ2Vhc2luZyddW2VuY29kZWRGdW5jTmFtZV0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBwb2x5QmV6ID0gZnVuY3Rpb24gKHAxLCBwMikge1xuICAgICAgdmFyIEEgPSBbbnVsbCwgbnVsbF0sXG4gICAgICAgICAgQiA9IFtudWxsLCBudWxsXSxcbiAgICAgICAgICBDID0gW251bGwsIG51bGxdLFxuICAgICAgICAgIGJlekNvT3JkID0gZnVuY3Rpb24gKHQsIGF4KSB7XG4gICAgICAgICAgICBDW2F4XSA9IDMgKiBwMVtheF07XG4gICAgICAgICAgICBCW2F4XSA9IDMgKiAocDJbYXhdIC0gcDFbYXhdKSAtIENbYXhdO1xuICAgICAgICAgICAgQVtheF0gPSAxIC0gQ1theF0gLSBCW2F4XTtcbiAgICAgICAgICAgIHJldHVybiB0ICogKENbYXhdICsgdCAqIChCW2F4XSArIHQgKiBBW2F4XSkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeERlcml2ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBDWzBdICsgdCAqICgyICogQlswXSArIDMgKiBBWzBdICogdCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB4Rm9yVCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgeCA9IHQsIGkgPSAwLCB6O1xuICAgICAgICAgICAgd2hpbGUgKCsraSA8IDE0KSB7XG4gICAgICAgICAgICAgIHogPSBiZXpDb09yZCh4LCAwKSAtIHQ7XG4gICAgICAgICAgICAgIGlmIChNYXRoLmFicyh6KSA8IDFlLTMpIGJyZWFrO1xuICAgICAgICAgICAgICB4IC09IHogLyB4RGVyaXYoeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICB9O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBiZXpDb09yZCh4Rm9yVCh0KSwgMSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAkWydlYXNpbmcnXVtlbmNvZGVkRnVuY05hbWVdID0gZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgIHJldHVybiBjICogcG9seUJleihbY29PcmRBcnJheVswXSwgY29PcmRBcnJheVsxXV0sIFtjb09yZEFycmF5WzJdLCBjb09yZEFycmF5WzNdXSkodCAvIGQpICsgYjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVuY29kZWRGdW5jTmFtZTtcbn1cbnZhciAkV0lORE9XID0gJCh3aW5kb3cpLFxuICAgICRET0NVTUVOVCA9ICQoZG9jdW1lbnQpLFxuICAgICRIVE1MLFxuICAgICRCT0RZLFxuXG4gICAgUVVJUktTX0ZPUkNFID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpID09PSAncXVpcmtzJyxcbiAgICBUUkFOU0ZPUk1TM0QgPSBNb2Rlcm5penIuY3NzdHJhbnNmb3JtczNkLFxuICAgIENTUzMgPSBUUkFOU0ZPUk1TM0QgJiYgIVFVSVJLU19GT1JDRSxcbiAgICBDT01QQVQgPSBUUkFOU0ZPUk1TM0QgfHwgZG9jdW1lbnQuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnLFxuICAgIEZVTExTQ1JFRU4gPSBmdWxsU2NyZWVuQXBpLm9rLFxuXG4gICAgTU9CSUxFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8V2luZG93cyBQaG9uZS9pKSxcbiAgICBTTE9XID0gIUNTUzMgfHwgTU9CSUxFLFxuXG4gICAgTVNfUE9JTlRFUiA9IG5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuXG4gICAgV0hFRUwgPSBcIm9ud2hlZWxcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpID8gXCJ3aGVlbFwiIDogZG9jdW1lbnQub25tb3VzZXdoZWVsICE9PSB1bmRlZmluZWQgPyBcIm1vdXNld2hlZWxcIiA6IFwiRE9NTW91c2VTY3JvbGxcIixcblxuICAgIFRPVUNIX1RJTUVPVVQgPSAyNTAsXG4gICAgVFJBTlNJVElPTl9EVVJBVElPTiA9IDMwMCxcblxuICAgIFNDUk9MTF9MT0NLX1RJTUVPVVQgPSAxNDAwLFxuXG4gICAgQVVUT1BMQVlfSU5URVJWQUwgPSA1MDAwLFxuICAgIE1BUkdJTiA9IDIsXG4gICAgVEhVTUJfU0laRSA9IDY0LFxuXG4gICAgV0lEVEggPSA1MDAsXG4gICAgSEVJR0hUID0gMzMzLFxuXG4gICAgU1RBR0VfRlJBTUVfS0VZID0gJyRzdGFnZUZyYW1lJyxcbiAgICBOQVZfRE9UX0ZSQU1FX0tFWSA9ICckbmF2RG90RnJhbWUnLFxuICAgIE5BVl9USFVNQl9GUkFNRV9LRVkgPSAnJG5hdlRodW1iRnJhbWUnLFxuXG4gICAgQVVUTyA9ICdhdXRvJyxcblxuICAgIEJFWklFUiA9IGJleihbLjEsIDAsIC4yNSwgMV0pLFxuXG4gICAgTUFYX1dJRFRIID0gOTk5OTksXG5cbiAgICBGSUZUWUZJRlRZID0gJzUwJScsXG5cbiAgICBPUFRJT05TID0ge1xuICAgICAgLy8gZGltZW5zaW9uc1xuICAgICAgd2lkdGg6IG51bGwsIC8vIDUwMCB8fCAnMTAwJSdcbiAgICAgIG1pbndpZHRoOiBudWxsLFxuICAgICAgbWF4d2lkdGg6ICcxMDAlJywgLy8gJzEwMCUnXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBtaW5oZWlnaHQ6IG51bGwsXG4gICAgICBtYXhoZWlnaHQ6IG51bGwsXG5cbiAgICAgIHJhdGlvOiBudWxsLCAvLyAnMTYvOScgfHwgNTAwLzMzMyB8fCAxLjVcblxuICAgICAgbWFyZ2luOiBNQVJHSU4sXG4gICAgICBnbGltcHNlOiAwLFxuXG4gICAgICBmaXQ6ICdjb250YWluJywgLy8gJ2NvdmVyJyB8fCAnc2NhbGVkb3duJyB8fCAnbm9uZSdcblxuICAgICAgcG9zaXRpb246IEZJRlRZRklGVFksXG4gICAgICB0aHVtYnBvc2l0aW9uOiBGSUZUWUZJRlRZLFxuXG4gICAgICAvLyBuYXZpZ2F0aW9uLCB0aHVtYnNcbiAgICAgIG5hdjogJ2RvdHMnLCAvLyAndGh1bWJzJyB8fCBmYWxzZVxuICAgICAgbmF2cG9zaXRpb246ICdib3R0b20nLCAvLyAndG9wJ1xuICAgICAgbmF2d2lkdGg6IG51bGwsXG4gICAgICB0aHVtYndpZHRoOiBUSFVNQl9TSVpFLFxuICAgICAgdGh1bWJoZWlnaHQ6IFRIVU1CX1NJWkUsXG4gICAgICB0aHVtYm1hcmdpbjogTUFSR0lOLFxuICAgICAgdGh1bWJib3JkZXJ3aWR0aDogTUFSR0lOLFxuICAgICAgdGh1bWJmaXQ6ICdjb3ZlcicsIC8vICdjb250YWluJyB8fCAnc2NhbGVkb3duJyB8fCAnbm9uZSdcblxuICAgICAgYWxsb3dmdWxsc2NyZWVuOiBmYWxzZSwgLy8gdHJ1ZSB8fCAnbmF0aXZlJ1xuXG4gICAgICB0cmFuc2l0aW9uOiAnc2xpZGUnLCAvLyAnY3Jvc3NmYWRlJyB8fCAnZGlzc29sdmUnXG4gICAgICBjbGlja3RyYW5zaXRpb246IG51bGwsXG4gICAgICB0cmFuc2l0aW9uZHVyYXRpb246IFRSQU5TSVRJT05fRFVSQVRJT04sXG5cbiAgICAgIGNhcHRpb25zOiB0cnVlLFxuXG4gICAgICBoYXNoOiBmYWxzZSxcbiAgICAgIHN0YXJ0aW5kZXg6IDAsXG5cbiAgICAgIGxvb3A6IGZhbHNlLFxuXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBzdG9wYXV0b3BsYXlvbnRvdWNoOiB0cnVlLFxuXG4gICAgICBrZXlib2FyZDogZmFsc2UsXG5cbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIGNsaWNrOiB0cnVlLFxuICAgICAgc3dpcGU6IHRydWUsXG4gICAgICB0cmFja3BhZDogZmFsc2UsXG5cbiAgICAgIGVuYWJsZWlmc2luZ2xlZnJhbWU6IGZhbHNlLFxuXG4gICAgICBjb250cm9sc29uc3RhcnQ6IHRydWUsXG5cbiAgICAgIHNodWZmbGU6IGZhbHNlLFxuXG4gICAgICBkaXJlY3Rpb246ICdsdHInLCAvLyAncnRsJ1xuXG4gICAgICBzaGFkb3dzOiB0cnVlLFxuICAgICAgc3Bpbm5lcjogbnVsbFxuICAgIH0sXG5cbiAgICBLRVlCT0FSRF9PUFRJT05TID0ge1xuICAgICAgbGVmdDogdHJ1ZSxcbiAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgZG93bjogZmFsc2UsXG4gICAgICB1cDogZmFsc2UsXG4gICAgICBzcGFjZTogZmFsc2UsXG4gICAgICBob21lOiBmYWxzZSxcbiAgICAgIGVuZDogZmFsc2VcbiAgICB9O1xuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5mdW5jdGlvbiBtaW5NYXhMaW1pdCAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChpc05hTihtaW4pID8gLUluZmluaXR5IDogbWluLCBNYXRoLm1pbihpc05hTihtYXgpID8gSW5maW5pdHkgOiBtYXgsIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRUcmFuc2Zvcm0gKGNzcykge1xuICByZXR1cm4gY3NzLm1hdGNoKC9tYS8pICYmIGNzcy5tYXRjaCgvLT9cXGQrKD8hZCkvZylbY3NzLm1hdGNoKC8zZC8pID8gMTIgOiA0XTtcbn1cblxuZnVuY3Rpb24gcmVhZFBvc2l0aW9uICgkZWwpIHtcbiAgaWYgKENTUzMpIHtcbiAgICByZXR1cm4gK3JlYWRUcmFuc2Zvcm0oJGVsLmNzcygndHJhbnNmb3JtJykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiArJGVsLmNzcygnbGVmdCcpLnJlcGxhY2UoJ3B4JywgJycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZSAocG9zLyosIF8wMDEqLykge1xuICB2YXIgb2JqID0ge307XG4gIGlmIChDU1MzKSB7XG4gICAgb2JqLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgKHBvcy8qICsgKF8wMDEgPyAwLjAwMSA6IDApKi8pICsgJ3B4LDAsMCknOyAvLyAwLjAwMSB0byByZW1vdmUgUmV0aW5hIGFydGlmYWN0c1xuICB9IGVsc2Uge1xuICAgIG9iai5sZWZ0ID0gcG9zO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGdldER1cmF0aW9uICh0aW1lKSB7XG4gIHJldHVybiB7J3RyYW5zaXRpb24tZHVyYXRpb24nOiB0aW1lICsgJ21zJ307XG59XG5cbmZ1bmN0aW9uIHVubGVzc05hTiAodmFsdWUsIGFsdGVybmF0aXZlKSB7XG4gIHJldHVybiBpc05hTih2YWx1ZSkgPyBhbHRlcm5hdGl2ZSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tTWVhc3VyZSAodmFsdWUsIG1lYXN1cmUpIHtcbiAgcmV0dXJuIHVubGVzc05hTigrU3RyaW5nKHZhbHVlKS5yZXBsYWNlKG1lYXN1cmUgfHwgJ3B4JywgJycpKTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyRnJvbVBlcmNlbnQgKHZhbHVlKSB7XG4gIHJldHVybiAvJSQvLnRlc3QodmFsdWUpID8gbnVtYmVyRnJvbU1lYXN1cmUodmFsdWUsICclJykgOiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21XaGF0ZXZlciAodmFsdWUsIHdob2xlKSB7XG4gIHJldHVybiB1bmxlc3NOYU4obnVtYmVyRnJvbVBlcmNlbnQodmFsdWUpIC8gMTAwICogd2hvbGUsIG51bWJlckZyb21NZWFzdXJlKHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmVJc1ZhbGlkICh2YWx1ZSkge1xuICByZXR1cm4gKCFpc05hTihudW1iZXJGcm9tTWVhc3VyZSh2YWx1ZSkpIHx8ICFpc05hTihudW1iZXJGcm9tTWVhc3VyZSh2YWx1ZSwgJyUnKSkpICYmIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQb3NCeUluZGV4IChpbmRleCwgc2lkZSwgbWFyZ2luLCBiYXNlSW5kZXgpIHtcbiAgLy8vL2NvbnNvbGUubG9nKCdnZXRQb3NCeUluZGV4JywgaW5kZXgsIHNpZGUsIG1hcmdpbiwgYmFzZUluZGV4KTtcbiAgLy8vL2NvbnNvbGUubG9nKChpbmRleCAtIChiYXNlSW5kZXggfHwgMCkpICogKHNpZGUgKyAobWFyZ2luIHx8IDApKSk7XG5cbiAgcmV0dXJuIChpbmRleCAtIChiYXNlSW5kZXggfHwgMCkpICogKHNpZGUgKyAobWFyZ2luIHx8IDApKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeVBvcyAocG9zLCBzaWRlLCBtYXJnaW4sIGJhc2VJbmRleCkge1xuICByZXR1cm4gLU1hdGgucm91bmQocG9zIC8gKHNpZGUgKyAobWFyZ2luIHx8IDApKSAtIChiYXNlSW5kZXggfHwgMCkpO1xufVxuXG5mdW5jdGlvbiBiaW5kVHJhbnNpdGlvbkVuZCAoJGVsKSB7XG4gIHZhciBlbERhdGEgPSAkZWwuZGF0YSgpO1xuXG4gIGlmIChlbERhdGEudEVuZCkgcmV0dXJuO1xuXG4gIHZhciBlbCA9ICRlbFswXSxcbiAgICAgIHRyYW5zaXRpb25FbmRFdmVudCA9IHtcbiAgICAgICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICBNb3pUcmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcbiAgICAgIH07XG4gIGFkZEV2ZW50KGVsLCB0cmFuc2l0aW9uRW5kRXZlbnRbTW9kZXJuaXpyLnByZWZpeGVkKCd0cmFuc2l0aW9uJyldLCBmdW5jdGlvbiAoZSkge1xuICAgIGVsRGF0YS50UHJvcCAmJiBlLnByb3BlcnR5TmFtZS5tYXRjaChlbERhdGEudFByb3ApICYmIGVsRGF0YS5vbkVuZEZuKCk7XG4gIH0pO1xuICBlbERhdGEudEVuZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGFmdGVyVHJhbnNpdGlvbiAoJGVsLCBwcm9wZXJ0eSwgZm4sIHRpbWUpIHtcbiAgdmFyIG9rLFxuICAgICAgZWxEYXRhID0gJGVsLmRhdGEoKTtcblxuICBpZiAoZWxEYXRhKSB7XG4gICAgZWxEYXRhLm9uRW5kRm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob2spIHJldHVybjtcbiAgICAgIG9rID0gdHJ1ZTtcbiAgICAgIGNsZWFyVGltZW91dChlbERhdGEudFQpO1xuICAgICAgZm4oKTtcbiAgICB9O1xuICAgIGVsRGF0YS50UHJvcCA9IHByb3BlcnR5O1xuXG4gICAgLy8gUGFzc2l2ZSBjYWxsLCBqdXN0IGluIGNhc2Ugb2YgZmFpbCBvZiBuYXRpdmUgdHJhbnNpdGlvbi1lbmQgZXZlbnRcbiAgICBjbGVhclRpbWVvdXQoZWxEYXRhLnRUKTtcbiAgICBlbERhdGEudFQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsRGF0YS5vbkVuZEZuKCk7XG4gICAgfSwgdGltZSAqIDEuNSk7XG5cbiAgICBiaW5kVHJhbnNpdGlvbkVuZCgkZWwpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcCAoJGVsLCBsZWZ0LyosIF8wMDEqLykge1xuICBpZiAoJGVsLmxlbmd0aCkge1xuICAgIHZhciBlbERhdGEgPSAkZWwuZGF0YSgpO1xuICAgIGlmIChDU1MzKSB7XG4gICAgICAkZWwuY3NzKGdldER1cmF0aW9uKDApKTtcbiAgICAgIGVsRGF0YS5vbkVuZEZuID0gbm9vcDtcbiAgICAgIGNsZWFyVGltZW91dChlbERhdGEudFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWwuc3RvcCgpO1xuICAgIH1cbiAgICB2YXIgbG9ja2VkTGVmdCA9IGdldE51bWJlcihsZWZ0LCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVhZFBvc2l0aW9uKCRlbCk7XG4gICAgfSk7XG5cbiAgICAkZWwuY3NzKGdldFRyYW5zbGF0ZShsb2NrZWRMZWZ0LyosIF8wMDEqLykpOy8vLndpZHRoKCk7IC8vIGAud2lkdGgoKWAgZm9yIHJlZmxvd1xuICAgIHJldHVybiBsb2NrZWRMZWZ0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE51bWJlciAoKSB7XG4gIHZhciBudW1iZXI7XG4gIGZvciAodmFyIF9pID0gMCwgX2wgPSBhcmd1bWVudHMubGVuZ3RoOyBfaSA8IF9sOyBfaSsrKSB7XG4gICAgbnVtYmVyID0gX2kgPyBhcmd1bWVudHNbX2ldKCkgOiBhcmd1bWVudHNbX2ldO1xuICAgIGlmICh0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZWRnZVJlc2lzdGFuY2UgKHBvcywgZWRnZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZChwb3MgKyAoKGVkZ2UgLSBwb3MpIC8gMS41KSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb3RvY29sICgpIHtcbiAgZ2V0UHJvdG9jb2wucCA9IGdldFByb3RvY29sLnAgfHwgKGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICdodHRwczovLycgOiAnaHR0cDovLycpO1xuICByZXR1cm4gZ2V0UHJvdG9jb2wucDtcbn1cblxuZnVuY3Rpb24gcGFyc2VIcmVmIChocmVmKSB7XG4gIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBocmVmO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gZmluZFZpZGVvSWQgKGhyZWYsIGZvcmNlVmlkZW8pIHtcbiAgaWYgKHR5cGVvZiBocmVmICE9PSAnc3RyaW5nJykgcmV0dXJuIGhyZWY7XG4gIGhyZWYgPSBwYXJzZUhyZWYoaHJlZik7XG5cbiAgdmFyIGlkLFxuICAgICAgdHlwZTtcblxuICBpZiAoaHJlZi5ob3N0Lm1hdGNoKC95b3V0dWJlXFwuY29tLykgJiYgaHJlZi5zZWFyY2gpIHtcbiAgICAvLy5sb2coKTtcbiAgICBpZCA9IGhyZWYuc2VhcmNoLnNwbGl0KCd2PScpWzFdO1xuICAgIGlmIChpZCkge1xuICAgICAgdmFyIGFtcGVyc2FuZFBvc2l0aW9uID0gaWQuaW5kZXhPZignJicpO1xuICAgICAgaWYgKGFtcGVyc2FuZFBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICBpZCA9IGlkLnN1YnN0cmluZygwLCBhbXBlcnNhbmRQb3NpdGlvbik7XG4gICAgICB9XG4gICAgICB0eXBlID0gJ3lvdXR1YmUnO1xuICAgIH1cbiAgfSBlbHNlIGlmIChocmVmLmhvc3QubWF0Y2goL3lvdXR1YmVcXC5jb218eW91dHVcXC5iZS8pKSB7XG4gICAgaWQgPSBocmVmLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8oZW1iZWRcXC98dlxcLyk/LywgJycpLnJlcGxhY2UoL1xcLy4qLywgJycpO1xuICAgIHR5cGUgPSAneW91dHViZSc7XG4gIH0gZWxzZSBpZiAoaHJlZi5ob3N0Lm1hdGNoKC92aW1lb1xcLmNvbS8pKSB7XG4gICAgdHlwZSA9ICd2aW1lbyc7XG4gICAgaWQgPSBocmVmLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8odmlkZW9cXC8pPy8sICcnKS5yZXBsYWNlKC9cXC8uKi8sICcnKTtcbiAgfVxuXG4gIGlmICgoIWlkIHx8ICF0eXBlKSAmJiBmb3JjZVZpZGVvKSB7XG4gICAgaWQgPSBocmVmLmhyZWY7XG4gICAgdHlwZSA9ICdjdXN0b20nO1xuICB9XG5cbiAgcmV0dXJuIGlkID8ge2lkOiBpZCwgdHlwZTogdHlwZSwgczogaHJlZi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSwgcDogZ2V0UHJvdG9jb2woKX0gOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0VmlkZW9UaHVtYnMgKGRhdGFGcmFtZSwgZGF0YSwgZm90b3JhbWEpIHtcbiAgdmFyIGltZywgdGh1bWIsIHZpZGVvID0gZGF0YUZyYW1lLnZpZGVvO1xuICBpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG4gICAgdGh1bWIgPSBnZXRQcm90b2NvbCgpICsgJ2ltZy55b3V0dWJlLmNvbS92aS8nICsgdmlkZW8uaWQgKyAnL2RlZmF1bHQuanBnJztcbiAgICBpbWcgPSB0aHVtYi5yZXBsYWNlKC9cXC9kZWZhdWx0LmpwZyQvLCAnL2hxZGVmYXVsdC5qcGcnKTtcbiAgICBkYXRhRnJhbWUudGh1bWJzUmVhZHkgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2aW1lbycpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBnZXRQcm90b2NvbCgpICsgJ3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJyArIHZpZGVvLmlkICsgJy5qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbnAnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgZGF0YUZyYW1lLnRodW1ic1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlRGF0YShkYXRhLCB7aW1nOiBqc29uWzBdLnRodW1ibmFpbF9sYXJnZSwgdGh1bWI6IGpzb25bMF0udGh1bWJuYWlsX3NtYWxsfSwgZGF0YUZyYW1lLmksIGZvdG9yYW1hKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhRnJhbWUudGh1bWJzUmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbWc6IGltZyxcbiAgICB0aHVtYjogdGh1bWJcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhIChkYXRhLCBfZGF0YUZyYW1lLCBpLCBmb3RvcmFtYSkge1xuICBmb3IgKHZhciBfaSA9IDAsIF9sID0gZGF0YS5sZW5ndGg7IF9pIDwgX2w7IF9pKyspIHtcbiAgICB2YXIgZGF0YUZyYW1lID0gZGF0YVtfaV07XG5cbiAgICBpZiAoZGF0YUZyYW1lLmkgPT09IGkgJiYgZGF0YUZyYW1lLnRodW1ic1JlYWR5KSB7XG4gICAgICB2YXIgY2xlYXIgPSB7dmlkZW9SZWFkeTogdHJ1ZX07XG4gICAgICBjbGVhcltTVEFHRV9GUkFNRV9LRVldID0gY2xlYXJbTkFWX1RIVU1CX0ZSQU1FX0tFWV0gPSBjbGVhcltOQVZfRE9UX0ZSQU1FX0tFWV0gPSBmYWxzZTtcblxuICAgICAgZm90b3JhbWEuc3BsaWNlKF9pLCAxLCAkLmV4dGVuZChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBkYXRhRnJhbWUsXG4gICAgICAgICAgY2xlYXIsXG4gICAgICAgICAgX2RhdGFGcmFtZVxuICAgICAgKSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUh0bWwgKCRlbCkge1xuICB2YXIgZGF0YSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldERhdGFGcm9tSW1nICgkaW1nLCBpbWdEYXRhLCBjaGVja1ZpZGVvKSB7XG4gICAgdmFyICRjaGlsZCA9ICRpbWcuY2hpbGRyZW4oJ2ltZycpLmVxKDApLFxuICAgICAgICBfaW1nSHJlZiA9ICRpbWcuYXR0cignaHJlZicpLFxuICAgICAgICBfaW1nU3JjID0gJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgICAgX3RodW1iU3JjID0gJGNoaWxkLmF0dHIoJ3NyYycpLFxuICAgICAgICBfdmlkZW8gPSBpbWdEYXRhLnZpZGVvLFxuICAgICAgICB2aWRlbyA9IGNoZWNrVmlkZW8gPyBmaW5kVmlkZW9JZChfaW1nSHJlZiwgX3ZpZGVvID09PSB0cnVlKSA6IGZhbHNlO1xuXG4gICAgaWYgKHZpZGVvKSB7XG4gICAgICBfaW1nSHJlZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlbyA9IF92aWRlbztcbiAgICB9XG5cbiAgICBnZXREaW1lbnNpb25zKCRpbWcsICRjaGlsZCwgJC5leHRlbmQoaW1nRGF0YSwge1xuICAgICAgdmlkZW86IHZpZGVvLFxuICAgICAgaW1nOiBpbWdEYXRhLmltZyB8fCBfaW1nSHJlZiB8fCBfaW1nU3JjIHx8IF90aHVtYlNyYyxcbiAgICAgIHRodW1iOiBpbWdEYXRhLnRodW1iIHx8IF90aHVtYlNyYyB8fCBfaW1nU3JjIHx8IF9pbWdIcmVmXG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyAoJGltZywgJGNoaWxkLCBpbWdEYXRhKSB7XG4gICAgdmFyIHNlcGFyYXRlVGh1bWJGTEFHID0gaW1nRGF0YS50aHVtYiAmJiBpbWdEYXRhLmltZyAhPT0gaW1nRGF0YS50aHVtYixcbiAgICAgICAgd2lkdGggPSBudW1iZXJGcm9tTWVhc3VyZShpbWdEYXRhLndpZHRoIHx8ICRpbWcuYXR0cignd2lkdGgnKSksXG4gICAgICAgIGhlaWdodCA9IG51bWJlckZyb21NZWFzdXJlKGltZ0RhdGEuaGVpZ2h0IHx8ICRpbWcuYXR0cignaGVpZ2h0JykpO1xuXG4gICAgJC5leHRlbmQoaW1nRGF0YSwge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB0aHVtYnJhdGlvOiBnZXRSYXRpbyhpbWdEYXRhLnRodW1icmF0aW8gfHwgKG51bWJlckZyb21NZWFzdXJlKGltZ0RhdGEudGh1bWJ3aWR0aCB8fCAoJGNoaWxkICYmICRjaGlsZC5hdHRyKCd3aWR0aCcpKSB8fCBzZXBhcmF0ZVRodW1iRkxBRyB8fCB3aWR0aCkgLyBudW1iZXJGcm9tTWVhc3VyZShpbWdEYXRhLnRodW1iaGVpZ2h0IHx8ICgkY2hpbGQgJiYgJGNoaWxkLmF0dHIoJ2hlaWdodCcpKSB8fCBzZXBhcmF0ZVRodW1iRkxBRyB8fCBoZWlnaHQpKSlcbiAgICB9KTtcbiAgfVxuXG4gICRlbC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgIGRhdGFGcmFtZSA9IG9wdGlvbnNUb0xvd2VyQ2FzZSgkLmV4dGVuZCgkdGhpcy5kYXRhKCksIHtpZDogJHRoaXMuYXR0cignaWQnKX0pKTtcbiAgICBpZiAoJHRoaXMuaXMoJ2EsIGltZycpKSB7XG4gICAgICBnZXREYXRhRnJvbUltZygkdGhpcywgZGF0YUZyYW1lLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKCEkdGhpcy5pcygnOmVtcHR5JykpIHtcbiAgICAgIGdldERpbWVuc2lvbnMoJHRoaXMsIG51bGwsICQuZXh0ZW5kKGRhdGFGcmFtZSwge1xuICAgICAgICBodG1sOiB0aGlzLFxuICAgICAgICBfaHRtbDogJHRoaXMuaHRtbCgpIC8vIEJlY2F1c2Ugb2YgSUVcbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuXG4gICAgZGF0YS5wdXNoKGRhdGFGcmFtZSk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBpc0hpZGRlbiAoZWwpIHtcbiAgcmV0dXJuIGVsLm9mZnNldFdpZHRoID09PSAwICYmIGVsLm9mZnNldEhlaWdodCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNEZXRhY2hlZCAoZWwpIHtcbiAgcmV0dXJuICEkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZWwpO1xufVxuXG5mdW5jdGlvbiB3YWl0Rm9yICh0ZXN0LCBmbiwgdGltZW91dCwgaSkge1xuICBpZiAoIXdhaXRGb3IuaSkge1xuICAgIHdhaXRGb3IuaSA9IDE7XG4gICAgd2FpdEZvci5paSA9IFt0cnVlXTtcbiAgfVxuXG4gIGkgPSBpIHx8IHdhaXRGb3IuaTtcblxuICBpZiAodHlwZW9mIHdhaXRGb3IuaWlbaV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2FpdEZvci5paVtpXSA9IHRydWU7XG4gIH1cblxuICBpZiAodGVzdCgpKSB7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICB3YWl0Rm9yLmlpW2ldICYmIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgd2FpdEZvci5paVtpXSAmJiB3YWl0Rm9yKHRlc3QsIGZuLCB0aW1lb3V0LCBpKTtcbiAgICB9LCB0aW1lb3V0IHx8IDEwMCk7XG4gIH1cblxuICByZXR1cm4gd2FpdEZvci5pKys7XG59XG5cbndhaXRGb3Iuc3RvcCA9IGZ1bmN0aW9uIChpKSB7XG4gIHdhaXRGb3IuaWlbaV0gPSBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHNldEhhc2ggKGhhc2gpIHtcbiAgLy8vLy8vY29uc29sZS50aW1lKCdzZXRIYXNoICcgKyBoYXNoKTtcbiAgbG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5wcm90b2NvbFxuICAgICAgKyAnLy8nXG4gICAgICArIGxvY2F0aW9uLmhvc3RcbiAgICAgICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLz8vLCAnLycpXG4gICAgICArIGxvY2F0aW9uLnNlYXJjaFxuICAgICAgKyAnIycgKyBoYXNoKTtcbiAgLy8vLy8vY29uc29sZS50aW1lRW5kKCdzZXRIYXNoICcgKyBoYXNoKTtcbn1cblxuZnVuY3Rpb24gZml0ICgkZWwsIG1lYXN1cmVzVG9GaXQsIG1ldGhvZCwgcG9zaXRpb24pIHtcbiAgdmFyIGVsRGF0YSA9ICRlbC5kYXRhKCksXG4gICAgICBtZWFzdXJlcyA9IGVsRGF0YS5tZWFzdXJlcztcblxuICBpZiAobWVhc3VyZXMgJiYgKCFlbERhdGEubCB8fFxuICAgICAgZWxEYXRhLmwuVyAhPT0gbWVhc3VyZXMud2lkdGggfHxcbiAgICAgIGVsRGF0YS5sLkggIT09IG1lYXN1cmVzLmhlaWdodCB8fFxuICAgICAgZWxEYXRhLmwuciAhPT0gbWVhc3VyZXMucmF0aW8gfHxcbiAgICAgIGVsRGF0YS5sLncgIT09IG1lYXN1cmVzVG9GaXQudyB8fFxuICAgICAgZWxEYXRhLmwuaCAhPT0gbWVhc3VyZXNUb0ZpdC5oIHx8XG4gICAgICBlbERhdGEubC5tICE9PSBtZXRob2QgfHxcbiAgICAgIGVsRGF0YS5sLnAgIT09IHBvc2l0aW9uKSkge1xuXG4gICAgLy9jb25zb2xlLmxvZygnZml0Jyk7XG5cbiAgICB2YXIgd2lkdGggPSBtZWFzdXJlcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gbWVhc3VyZXMuaGVpZ2h0LFxuICAgICAgICByYXRpbyA9IG1lYXN1cmVzVG9GaXQudyAvIG1lYXN1cmVzVG9GaXQuaCxcbiAgICAgICAgYmlnZ2VyUmF0aW9GTEFHID0gbWVhc3VyZXMucmF0aW8gPj0gcmF0aW8sXG4gICAgICAgIGZpdEZMQUcgPSBtZXRob2QgPT09ICdzY2FsZWRvd24nLFxuICAgICAgICBjb250YWluRkxBRyA9IG1ldGhvZCA9PT0gJ2NvbnRhaW4nLFxuICAgICAgICBjb3ZlckZMQUcgPSBtZXRob2QgPT09ICdjb3ZlcicsXG4gICAgICAgIHBvcyA9IHBhcnNlUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgaWYgKGJpZ2dlclJhdGlvRkxBRyAmJiAoZml0RkxBRyB8fCBjb250YWluRkxBRykgfHwgIWJpZ2dlclJhdGlvRkxBRyAmJiBjb3ZlckZMQUcpIHtcbiAgICAgIHdpZHRoID0gbWluTWF4TGltaXQobWVhc3VyZXNUb0ZpdC53LCAwLCBmaXRGTEFHID8gd2lkdGggOiBJbmZpbml0eSk7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIG1lYXN1cmVzLnJhdGlvO1xuICAgIH0gZWxzZSBpZiAoYmlnZ2VyUmF0aW9GTEFHICYmIGNvdmVyRkxBRyB8fCAhYmlnZ2VyUmF0aW9GTEFHICYmIChmaXRGTEFHIHx8IGNvbnRhaW5GTEFHKSkge1xuICAgICAgaGVpZ2h0ID0gbWluTWF4TGltaXQobWVhc3VyZXNUb0ZpdC5oLCAwLCBmaXRGTEFHID8gaGVpZ2h0IDogSW5maW5pdHkpO1xuICAgICAgd2lkdGggPSBoZWlnaHQgKiBtZWFzdXJlcy5yYXRpbztcbiAgICB9XG5cbiAgICAkZWwuY3NzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgbGVmdDogbnVtYmVyRnJvbVdoYXRldmVyKHBvcy54LCBtZWFzdXJlc1RvRml0LncgLSB3aWR0aCksXG4gICAgICB0b3A6IG51bWJlckZyb21XaGF0ZXZlcihwb3MueSwgbWVhc3VyZXNUb0ZpdC5oLSBoZWlnaHQpXG4gICAgfSk7XG5cbiAgICBlbERhdGEubCA9IHtcbiAgICAgIFc6IG1lYXN1cmVzLndpZHRoLFxuICAgICAgSDogbWVhc3VyZXMuaGVpZ2h0LFxuICAgICAgcjogbWVhc3VyZXMucmF0aW8sXG4gICAgICB3OiBtZWFzdXJlc1RvRml0LncsXG4gICAgICBoOiBtZWFzdXJlc1RvRml0LmgsXG4gICAgICBtOiBtZXRob2QsXG4gICAgICBwOiBwb3NpdGlvblxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUgKCRlbCwgc3R5bGUpIHtcbiAgdmFyIGVsID0gJGVsWzBdO1xuICBpZiAoZWwuc3R5bGVTaGVldCkge1xuICAgIGVsLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlO1xuICB9IGVsc2Uge1xuICAgICRlbC5odG1sKHN0eWxlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU2hhZG93RWRnZSAocG9zLCBtaW4sIG1heCkge1xuICByZXR1cm4gbWluID09PSBtYXggPyBmYWxzZSA6IHBvcyA8PSBtaW4gPyAnbGVmdCcgOiBwb3MgPj0gbWF4ID8gJ3JpZ2h0JyA6ICdsZWZ0IHJpZ2h0Jztcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhGcm9tSGFzaCAoaGFzaCwgZGF0YSwgb2ssIHN0YXJ0aW5kZXgpIHtcbiAgaWYgKCFvaykgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWlzTmFOKGhhc2gpKSByZXR1cm4gaGFzaCAtIChzdGFydGluZGV4ID8gMCA6IDEpO1xuXG4gIHZhciBpbmRleDtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9sID0gZGF0YS5sZW5ndGg7IF9pIDwgX2w7IF9pKyspIHtcbiAgICB2YXIgZGF0YUZyYW1lID0gZGF0YVtfaV07XG5cbiAgICBpZiAoZGF0YUZyYW1lLmlkID09PSBoYXNoKSB7XG4gICAgICBpbmRleCA9IF9pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBzbWFydENsaWNrICgkZWwsIGZuLCBfb3B0aW9ucykge1xuICBfb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xuXG4gICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICB0aGlzRGF0YSA9ICR0aGlzLmRhdGEoKSxcbiAgICAgICAgc3RhcnRFdmVudDtcblxuICAgIGlmICh0aGlzRGF0YS5jbGlja09uKSByZXR1cm47XG5cbiAgICB0aGlzRGF0YS5jbGlja09uID0gdHJ1ZTtcblxuICAgICQuZXh0ZW5kKHRvdWNoKCR0aGlzLCB7XG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzdGFydEV2ZW50ID0gZTtcbiAgICAgICAgKF9vcHRpb25zLm9uU3RhcnQgfHwgbm9vcCkuY2FsbCh0aGlzLCBlKTtcbiAgICAgIH0sXG4gICAgICBvbk1vdmU6IF9vcHRpb25zLm9uTW92ZSB8fCBub29wLFxuICAgICAgb25Ub3VjaEVuZDogX29wdGlvbnMub25Ub3VjaEVuZCB8fCBub29wLFxuICAgICAgb25FbmQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgLy8vL2NvbnNvbGUubG9nKCdzbWFydENsaWNrIOKGkiByZXN1bHQubW92ZWQnLCByZXN1bHQubW92ZWQpO1xuICAgICAgICBpZiAocmVzdWx0Lm1vdmVkKSByZXR1cm47XG4gICAgICAgIGZuLmNhbGwodGhpcywgc3RhcnRFdmVudCk7XG4gICAgICB9XG4gICAgfSksIHtub01vdmU6IHRydWV9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpdiAoY2xhc3NlcywgY2hpbGQpIHtcbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiJyArIGNsYXNzZXMgKyAnXCI+JyArIChjaGlsZCB8fCAnJykgKyAnPC9kaXY+Jztcbn1cblxuLy8gRmlzaGVy4oCTWWF0ZXMgU2h1ZmZsZVxuLy8gaHR0cDovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9zaHVmZmxlL1xuZnVuY3Rpb24gc2h1ZmZsZSAoYXJyYXkpIHtcbiAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGVcbiAgdmFyIGwgPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsKSB7XG4gICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsLS0pO1xuXG4gICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgdmFyIHQgPSBhcnJheVtsXTtcbiAgICBhcnJheVtsXSA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gdDtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY2xvbmUgKGFycmF5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyYXkpID09ICdbb2JqZWN0IEFycmF5XSdcbiAgICAgICYmICQubWFwKGFycmF5LCBmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICByZXR1cm4gJC5leHRlbmQoe30sIGZyYW1lKTtcbiAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsb2NrU2Nyb2xsICgkZWwsIGxlZnQsIHRvcCkge1xuICAkZWxcbiAgICAuc2Nyb2xsTGVmdChsZWZ0IHx8IDApXG4gICAgLnNjcm9sbFRvcCh0b3AgfHwgMCk7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNUb0xvd2VyQ2FzZSAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucykge1xuICAgIHZhciBvcHRzID0ge307XG4gICAgJC5lYWNoKG9wdGlvbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBvcHRzW2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmF0aW8gKF9yYXRpbykge1xuICBpZiAoIV9yYXRpbykgcmV0dXJuO1xuICB2YXIgcmF0aW8gPSArX3JhdGlvO1xuICBpZiAoIWlzTmFOKHJhdGlvKSkge1xuICAgIHJldHVybiByYXRpbztcbiAgfSBlbHNlIHtcbiAgICByYXRpbyA9IF9yYXRpby5zcGxpdCgnLycpO1xuICAgIHJldHVybiArcmF0aW9bMF0gLyArcmF0aW9bMV0gfHwgdW5kZWZpbmVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50IChlbCwgZSwgZm4sIGJvb2wpIHtcbiAgaWYgKCFlKSByZXR1cm47XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIgPyBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGZuLCAhIWJvb2wpIDogZWwuYXR0YWNoRXZlbnQoJ29uJytlLCBmbik7XG59XG5cbmZ1bmN0aW9uIGVsSXNEaXNhYmxlZCAoZWwpIHtcbiAgcmV0dXJuICEhZWwuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQXR0ciAoRkxBRykge1xuICByZXR1cm4ge3RhYmluZGV4OiBGTEFHICogLTEgKyAnJywgZGlzYWJsZWQ6IEZMQUd9O1xufVxuXG5mdW5jdGlvbiBhZGRFbnRlclVwIChlbCwgZm4pIHtcbiAgYWRkRXZlbnQoZWwsICdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZWxJc0Rpc2FibGVkKGVsKSB8fCBlLmtleUNvZGUgPT0gMTMgJiYgZm4uY2FsbChlbCwgZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRGb2N1cyAoZWwsIGZuKSB7XG4gIGFkZEV2ZW50KGVsLCAnZm9jdXMnLCBlbC5vbmZvY3VzaW4gPSBmdW5jdGlvbiAoZSkge1xuICAgIGZuLmNhbGwoZWwsIGUpO1xuICB9LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc3RvcEV2ZW50IChlLCBzdG9wUHJvcGFnYXRpb24pIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IChlLnJldHVyblZhbHVlID0gZmFsc2UpO1xuICBzdG9wUHJvcGFnYXRpb24gJiYgZS5zdG9wUHJvcGFnYXRpb24gJiYgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlyZWN0aW9uU2lnbiAoZm9yd2FyZCkge1xuICByZXR1cm4gZm9yd2FyZCA/ICc+JyA6ICc8Jztcbn1cblxuZnVuY3Rpb24gcGFyc2VQb3NpdGlvbiAocnVsZSkge1xuICBydWxlID0gKHJ1bGUgKyAnJykuc3BsaXQoL1xccysvKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBtZWFzdXJlSXNWYWxpZChydWxlWzBdKSB8fCBGSUZUWUZJRlRZLFxuICAgIHk6IG1lYXN1cmVJc1ZhbGlkKHJ1bGVbMV0pIHx8IEZJRlRZRklGVFlcbiAgfVxufVxuZnVuY3Rpb24gc2xpZGUgKCRlbCwgb3B0aW9ucykge1xuICB2YXIgZWxEYXRhID0gJGVsLmRhdGEoKSxcbiAgICAgIGVsUG9zID0gTWF0aC5yb3VuZChvcHRpb25zLnBvcyksXG4gICAgICBvbkVuZEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBlbERhdGEuc2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAob3B0aW9ucy5vbkVuZCB8fCBub29wKSgpO1xuICAgICAgfTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMub3ZlclBvcyAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5vdmVyUG9zICE9PSBvcHRpb25zLnBvcykge1xuICAgIGVsUG9zID0gb3B0aW9ucy5vdmVyUG9zO1xuICAgIG9uRW5kRm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzbGlkZSgkZWwsICQuZXh0ZW5kKHt9LCBvcHRpb25zLCB7b3ZlclBvczogb3B0aW9ucy5wb3MsIHRpbWU6IE1hdGgubWF4KFRSQU5TSVRJT05fRFVSQVRJT04sIG9wdGlvbnMudGltZSAvIDIpfSkpXG4gICAgfTtcbiAgfVxuXG4gIC8vLy8vLy8vY29uc29sZS50aW1lKCd2YXIgdHJhbnNsYXRlID0gJC5leHRlbmQnKTtcbiAgdmFyIHRyYW5zbGF0ZSA9ICQuZXh0ZW5kKGdldFRyYW5zbGF0ZShlbFBvcy8qLCBvcHRpb25zLl8wMDEqLyksIG9wdGlvbnMud2lkdGggJiYge3dpZHRoOiBvcHRpb25zLndpZHRofSk7XG4gIC8vLy8vLy8vY29uc29sZS50aW1lRW5kKCd2YXIgdHJhbnNsYXRlID0gJC5leHRlbmQnKTtcblxuICBlbERhdGEuc2xpZGluZyA9IHRydWU7XG5cbiAgaWYgKENTUzMpIHtcbiAgICAkZWwuY3NzKCQuZXh0ZW5kKGdldER1cmF0aW9uKG9wdGlvbnMudGltZSksIHRyYW5zbGF0ZSkpO1xuICAgIGlmIChvcHRpb25zLnRpbWUgPiAxMCkge1xuICAgICAgLy8vLy8vLy9jb25zb2xlLnRpbWUoJ2FmdGVyVHJhbnNpdGlvbicpO1xuICAgICAgYWZ0ZXJUcmFuc2l0aW9uKCRlbCwgJ3RyYW5zZm9ybScsIG9uRW5kRm4sIG9wdGlvbnMudGltZSk7XG4gICAgICAvLy8vLy8vL2NvbnNvbGUudGltZUVuZCgnYWZ0ZXJUcmFuc2l0aW9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uRW5kRm4oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGVsLnN0b3AoKS5hbmltYXRlKHRyYW5zbGF0ZSwgb3B0aW9ucy50aW1lLCBCRVpJRVIsIG9uRW5kRm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZhZGUgKCRlbDEsICRlbDIsICRmcmFtZXMsIG9wdGlvbnMsIGZhZGVTdGFjaywgY2hhaW4pIHtcbiAgdmFyIGNoYWluZWRGTEFHID0gdHlwZW9mIGNoYWluICE9PSAndW5kZWZpbmVkJztcbiAgaWYgKCFjaGFpbmVkRkxBRykge1xuICAgIGZhZGVTdGFjay5wdXNoKGFyZ3VtZW50cyk7XG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcmd1bWVudHMsIGZhZGVTdGFjay5sZW5ndGgpO1xuICAgIGlmIChmYWRlU3RhY2subGVuZ3RoID4gMSkgcmV0dXJuO1xuICB9XG5cbiAgJGVsMSA9ICRlbDEgfHwgJCgkZWwxKTtcbiAgJGVsMiA9ICRlbDIgfHwgJCgkZWwyKTtcblxuICB2YXIgXyRlbDEgPSAkZWwxWzBdLFxuICAgICAgXyRlbDIgPSAkZWwyWzBdLFxuICAgICAgY3Jvc3NmYWRlRkxBRyA9IG9wdGlvbnMubWV0aG9kID09PSAnY3Jvc3NmYWRlJyxcbiAgICAgIG9uRW5kRm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghb25FbmRGbi5kb25lKSB7XG4gICAgICAgICAgb25FbmRGbi5kb25lID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgYXJncyA9IChjaGFpbmVkRkxBRyB8fCBmYWRlU3RhY2suc2hpZnQoKSkgJiYgZmFkZVN0YWNrLnNoaWZ0KCk7XG4gICAgICAgICAgYXJncyAmJiBmYWRlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgIChvcHRpb25zLm9uRW5kIHx8IG5vb3ApKCEhYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aW1lID0gb3B0aW9ucy50aW1lIC8gKGNoYWluIHx8IDEpO1xuXG4gICRmcmFtZXMucmVtb3ZlQ2xhc3MoZmFkZVJlYXJDbGFzcyArICcgJyArIGZhZGVGcm9udENsYXNzKTtcblxuICAkZWwxXG4gICAgICAuc3RvcCgpXG4gICAgICAuYWRkQ2xhc3MoZmFkZVJlYXJDbGFzcyk7XG4gICRlbDJcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hZGRDbGFzcyhmYWRlRnJvbnRDbGFzcyk7XG5cbiAgY3Jvc3NmYWRlRkxBRyAmJiBfJGVsMiAmJiAkZWwxLmZhZGVUbygwLCAwKTtcblxuICAkZWwxLmZhZGVUbyhjcm9zc2ZhZGVGTEFHID8gdGltZSA6IDAsIDEsIGNyb3NzZmFkZUZMQUcgJiYgb25FbmRGbik7XG4gICRlbDIuZmFkZVRvKHRpbWUsIDAsIG9uRW5kRm4pO1xuXG4gIChfJGVsMSAmJiBjcm9zc2ZhZGVGTEFHKSB8fCBfJGVsMiB8fCBvbkVuZEZuKCk7XG59XG52YXIgbGFzdEV2ZW50LFxuICAgIG1vdmVFdmVudFR5cGUsXG4gICAgcHJldmVudEV2ZW50LFxuICAgIHByZXZlbnRFdmVudFRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGV4dGVuZEV2ZW50IChlKSB7XG4gIHZhciB0b3VjaCA9IChlLnRvdWNoZXMgfHwgW10pWzBdIHx8IGU7XG4gIGUuX3ggPSB0b3VjaC5wYWdlWDtcbiAgZS5feSA9IHRvdWNoLmNsaWVudFk7XG4gIGUuX25vdyA9ICQubm93KCk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoICgkZWwsIG9wdGlvbnMpIHtcbiAgdmFyIGVsID0gJGVsWzBdLFxuICAgICAgdGFpbCA9IHt9LFxuICAgICAgdG91Y2hFbmFibGVkRkxBRyxcbiAgICAgIHN0YXJ0RXZlbnQsXG4gICAgICAkdGFyZ2V0LFxuICAgICAgY29udHJvbFRvdWNoLFxuICAgICAgdG91Y2hGTEFHLFxuICAgICAgdGFyZ2V0SXNTZWxlY3RGTEFHLFxuICAgICAgdGFyZ2V0SXNMaW5rRmxhZyxcbiAgICAgIHRvbGVyYW5jZSxcbiAgICAgIG1vdmVkO1xuXG4gIGZ1bmN0aW9uIG9uU3RhcnQgKGUpIHtcbiAgICAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgdGFpbC5jaGVja2VkID0gdGFyZ2V0SXNTZWxlY3RGTEFHID0gdGFyZ2V0SXNMaW5rRmxhZyA9IG1vdmVkID0gZmFsc2U7XG5cbiAgICBpZiAodG91Y2hFbmFibGVkRkxBR1xuICAgICAgICB8fCB0YWlsLmZsb3dcbiAgICAgICAgfHwgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMSlcbiAgICAgICAgfHwgZS53aGljaCA+IDFcbiAgICAgICAgfHwgKGxhc3RFdmVudCAmJiBsYXN0RXZlbnQudHlwZSAhPT0gZS50eXBlICYmIHByZXZlbnRFdmVudClcbiAgICAgICAgfHwgKHRhcmdldElzU2VsZWN0RkxBRyA9IG9wdGlvbnMuc2VsZWN0ICYmICR0YXJnZXQuaXMob3B0aW9ucy5zZWxlY3QsIGVsKSkpIHJldHVybiB0YXJnZXRJc1NlbGVjdEZMQUc7XG5cbiAgICB0b3VjaEZMQUcgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcbiAgICB0YXJnZXRJc0xpbmtGbGFnID0gJHRhcmdldC5pcygnYSwgYSAqJywgZWwpO1xuICAgIGNvbnRyb2xUb3VjaCA9IHRhaWwuY29udHJvbDtcblxuICAgIHRvbGVyYW5jZSA9ICh0YWlsLm5vTW92ZSB8fCB0YWlsLm5vU3dpcGUgfHwgY29udHJvbFRvdWNoKSA/IDE2IDogIXRhaWwuc25hcCA/IDQgOiAwO1xuXG4gICAgZXh0ZW5kRXZlbnQoZSk7XG5cbiAgICBzdGFydEV2ZW50ID0gbGFzdEV2ZW50ID0gZTtcbiAgICBtb3ZlRXZlbnRUeXBlID0gZS50eXBlLnJlcGxhY2UoL2Rvd258c3RhcnQvLCAnbW92ZScpLnJlcGxhY2UoL0Rvd24vLCAnTW92ZScpO1xuXG4gICAgKG9wdGlvbnMub25TdGFydCB8fCBub29wKS5jYWxsKGVsLCBlLCB7Y29udHJvbDogY29udHJvbFRvdWNoLCAkdGFyZ2V0OiAkdGFyZ2V0fSk7XG5cbiAgICB0b3VjaEVuYWJsZWRGTEFHID0gdGFpbC5mbG93ID0gdHJ1ZTtcblxuICAgIGlmICghdG91Y2hGTEFHIHx8IHRhaWwuZ28pIHN0b3BFdmVudChlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZSAoZSkge1xuICAgIGlmICgoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPiAxKVxuICAgICAgICB8fCAoTVNfUE9JTlRFUiAmJiAhZS5pc1ByaW1hcnkpXG4gICAgICAgIHx8IG1vdmVFdmVudFR5cGUgIT09IGUudHlwZVxuICAgICAgICB8fCAhdG91Y2hFbmFibGVkRkxBRykge1xuICAgICAgdG91Y2hFbmFibGVkRkxBRyAmJiBvbkVuZCgpO1xuICAgICAgKG9wdGlvbnMub25Ub3VjaEVuZCB8fCBub29wKSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4dGVuZEV2ZW50KGUpO1xuXG4gICAgdmFyIHhEaWZmID0gTWF0aC5hYnMoZS5feCAtIHN0YXJ0RXZlbnQuX3gpLCAvLyBvcHQgX3gg4oaSIF9wYWdlWFxuICAgICAgICB5RGlmZiA9IE1hdGguYWJzKGUuX3kgLSBzdGFydEV2ZW50Ll95KSxcbiAgICAgICAgeHlEaWZmID0geERpZmYgLSB5RGlmZixcbiAgICAgICAgeFdpbiA9ICh0YWlsLmdvIHx8IHRhaWwueCB8fCB4eURpZmYgPj0gMCkgJiYgIXRhaWwubm9Td2lwZSxcbiAgICAgICAgeVdpbiA9IHh5RGlmZiA8IDA7XG5cbiAgICBpZiAodG91Y2hGTEFHICYmICF0YWlsLmNoZWNrZWQpIHtcbiAgICAgIGlmICh0b3VjaEVuYWJsZWRGTEFHID0geFdpbikge1xuICAgICAgICBzdG9wRXZlbnQoZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vLy9jb25zb2xlLmxvZygnb25Nb3ZlIGUucHJldmVudERlZmF1bHQnKTtcbiAgICAgIHN0b3BFdmVudChlKTtcbiAgICAgIChvcHRpb25zLm9uTW92ZSB8fCBub29wKS5jYWxsKGVsLCBlLCB7dG91Y2g6IHRvdWNoRkxBR30pO1xuICAgIH1cblxuICAgIGlmICghbW92ZWQgJiYgTWF0aC5zcXJ0KE1hdGgucG93KHhEaWZmLCAyKSArIE1hdGgucG93KHlEaWZmLCAyKSkgPiB0b2xlcmFuY2UpIHtcbiAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YWlsLmNoZWNrZWQgPSB0YWlsLmNoZWNrZWQgfHwgeFdpbiB8fCB5V2luO1xuICB9XG5cbiAgZnVuY3Rpb24gb25FbmQgKGUpIHtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3RvdWNoLmpzIG9uRW5kJyk7XG5cbiAgICAob3B0aW9ucy5vblRvdWNoRW5kIHx8IG5vb3ApKCk7XG5cbiAgICB2YXIgX3RvdWNoRW5hYmxlZEZMQUcgPSB0b3VjaEVuYWJsZWRGTEFHO1xuICAgIHRhaWwuY29udHJvbCA9IHRvdWNoRW5hYmxlZEZMQUcgPSBmYWxzZTtcblxuICAgIGlmIChfdG91Y2hFbmFibGVkRkxBRykge1xuICAgICAgdGFpbC5mbG93ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFfdG91Y2hFbmFibGVkRkxBRyB8fCAodGFyZ2V0SXNMaW5rRmxhZyAmJiAhdGFpbC5jaGVja2VkKSkgcmV0dXJuO1xuXG4gICAgZSAmJiBzdG9wRXZlbnQoZSk7XG5cbiAgICBwcmV2ZW50RXZlbnQgPSB0cnVlO1xuICAgIGNsZWFyVGltZW91dChwcmV2ZW50RXZlbnRUaW1lb3V0KTtcbiAgICBwcmV2ZW50RXZlbnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBwcmV2ZW50RXZlbnQgPSBmYWxzZTtcbiAgICB9LCAxMDAwKTtcblxuICAgIChvcHRpb25zLm9uRW5kIHx8IG5vb3ApLmNhbGwoZWwsIHttb3ZlZDogbW92ZWQsICR0YXJnZXQ6ICR0YXJnZXQsIGNvbnRyb2w6IGNvbnRyb2xUb3VjaCwgdG91Y2g6IHRvdWNoRkxBRywgc3RhcnRFdmVudDogc3RhcnRFdmVudCwgYWJvcnRlZDogIWUgfHwgZS50eXBlID09PSAnTVNQb2ludGVyQ2FuY2VsJ30pO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgndG91Y2guanMgb25FbmQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uT3RoZXJTdGFydCAoKSB7XG4gICAgaWYgKHRhaWwuZmxvdykgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGFpbC5mbG93ID0gdHJ1ZTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk90aGVyRW5kICgpIHtcbiAgICBpZiAoIXRhaWwuZmxvdykgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGFpbC5mbG93ID0gZmFsc2U7XG4gICAgfSwgVE9VQ0hfVElNRU9VVCk7XG4gIH1cblxuICBpZiAoTVNfUE9JTlRFUikge1xuICAgIGFkZEV2ZW50KGVsLCAnTVNQb2ludGVyRG93bicsIG9uU3RhcnQpO1xuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAnTVNQb2ludGVyTW92ZScsIG9uTW92ZSk7XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsJ01TUG9pbnRlckNhbmNlbCcsIG9uRW5kKTtcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ01TUG9pbnRlclVwJywgb25FbmQpO1xuICB9IGVsc2Uge1xuICAgIGFkZEV2ZW50KGVsLCAndG91Y2hzdGFydCcsIG9uU3RhcnQpO1xuICAgIGFkZEV2ZW50KGVsLCAndG91Y2htb3ZlJywgb25Nb3ZlKTtcbiAgICBhZGRFdmVudChlbCwgJ3RvdWNoZW5kJywgb25FbmQpO1xuXG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICd0b3VjaHN0YXJ0Jywgb25PdGhlclN0YXJ0KTtcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ3RvdWNoZW5kJywgb25PdGhlckVuZCk7XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIG9uT3RoZXJFbmQpO1xuXG4gICAgJFdJTkRPVy5vbignc2Nyb2xsJywgb25PdGhlckVuZCk7XG5cbiAgICAkZWwub24oJ21vdXNlZG93bicsIG9uU3RhcnQpO1xuICAgICRET0NVTUVOVFxuICAgICAgICAub24oJ21vdXNlbW92ZScsIG9uTW92ZSlcbiAgICAgICAgLm9uKCdtb3VzZXVwJywgb25FbmQpO1xuICB9XG5cbiAgJGVsLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24gKGUpIHtcbiAgICB0YWlsLmNoZWNrZWQgJiYgc3RvcEV2ZW50KGUpO1xuICB9KTtcblxuICByZXR1cm4gdGFpbDtcbn1cblxuZnVuY3Rpb24gbW92ZU9uVG91Y2ggKCRlbCwgb3B0aW9ucykge1xuICB2YXIgZWwgPSAkZWxbMF0sXG4gICAgICBlbERhdGEgPSAkZWwuZGF0YSgpLFxuICAgICAgdGFpbCA9IHt9LFxuICAgICAgc3RhcnRDb28sXG4gICAgICBjb28sXG4gICAgICBzdGFydEVsUG9zLFxuICAgICAgbW92ZUVsUG9zLFxuICAgICAgZWRnZSxcbiAgICAgIG1vdmVUcmFjayxcbiAgICAgIHN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWUsXG4gICAgICBtaW4sXG4gICAgICBtYXgsXG4gICAgICBzbmFwLFxuICAgICAgc2xvd0ZMQUcsXG4gICAgICBjb250cm9sRkxBRyxcbiAgICAgIG1vdmVkLFxuICAgICAgdHJhY2tlZDtcblxuICBmdW5jdGlvbiBzdGFydFRyYWNraW5nIChlLCBub1N0b3ApIHtcbiAgICB0cmFja2VkID0gdHJ1ZTtcbiAgICBzdGFydENvbyA9IGNvbyA9IGUuX3g7XG4gICAgc3RhcnRUaW1lID0gZS5fbm93O1xuXG4gICAgbW92ZVRyYWNrID0gW1xuICAgICAgW3N0YXJ0VGltZSwgc3RhcnRDb29dXG4gICAgXTtcblxuICAgIHN0YXJ0RWxQb3MgPSBtb3ZlRWxQb3MgPSB0YWlsLm5vTW92ZSB8fCBub1N0b3AgPyAwIDogc3RvcCgkZWwsIChvcHRpb25zLmdldFBvcyB8fCBub29wKSgpLyosIG9wdGlvbnMuXzAwMSovKTtcblxuICAgIChvcHRpb25zLm9uU3RhcnQgfHwgbm9vcCkuY2FsbChlbCwgZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblN0YXJ0IChlLCByZXN1bHQpIHtcbiAgICBtaW4gPSB0YWlsLm1pbjtcbiAgICBtYXggPSB0YWlsLm1heDtcbiAgICBzbmFwID0gdGFpbC5zbmFwO1xuXG4gICAgc2xvd0ZMQUcgPSBlLmFsdEtleTtcbiAgICB0cmFja2VkID0gbW92ZWQgPSBmYWxzZTtcblxuICAgIGNvbnRyb2xGTEFHID0gcmVzdWx0LmNvbnRyb2w7XG5cbiAgICBpZiAoIWNvbnRyb2xGTEFHICYmICFlbERhdGEuc2xpZGluZykge1xuICAgICAgc3RhcnRUcmFja2luZyhlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUgKGUsIHJlc3VsdCkge1xuICAgIGlmICghdGFpbC5ub1N3aXBlKSB7XG4gICAgICBpZiAoIXRyYWNrZWQpIHtcbiAgICAgICAgc3RhcnRUcmFja2luZyhlKTtcbiAgICAgIH1cblxuICAgICAgY29vID0gZS5feDtcblxuICAgICAgbW92ZVRyYWNrLnB1c2goW2UuX25vdywgY29vXSk7XG5cbiAgICAgIG1vdmVFbFBvcyA9IHN0YXJ0RWxQb3MgLSAoc3RhcnRDb28gLSBjb28pO1xuXG4gICAgICBlZGdlID0gZmluZFNoYWRvd0VkZ2UobW92ZUVsUG9zLCBtaW4sIG1heCk7XG5cbiAgICAgIGlmIChtb3ZlRWxQb3MgPD0gbWluKSB7XG4gICAgICAgIG1vdmVFbFBvcyA9IGVkZ2VSZXNpc3RhbmNlKG1vdmVFbFBvcywgbWluKTtcbiAgICAgIH0gZWxzZSBpZiAobW92ZUVsUG9zID49IG1heCkge1xuICAgICAgICBtb3ZlRWxQb3MgPSBlZGdlUmVzaXN0YW5jZShtb3ZlRWxQb3MsIG1heCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGFpbC5ub01vdmUpIHtcbiAgICAgICAgJGVsLmNzcyhnZXRUcmFuc2xhdGUobW92ZUVsUG9zLyosIG9wdGlvbnMuXzAwMSovKSk7XG4gICAgICAgIGlmICghbW92ZWQpIHtcbiAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgLy8gb25seSBmb3IgbW91c2VcbiAgICAgICAgICByZXN1bHQudG91Y2ggfHwgTVNfUE9JTlRFUiB8fCAkZWwuYWRkQ2xhc3MoZ3JhYmJpbmdDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICAob3B0aW9ucy5vbk1vdmUgfHwgbm9vcCkuY2FsbChlbCwgZSwge3BvczogbW92ZUVsUG9zLCBlZGdlOiBlZGdlfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25FbmQgKHJlc3VsdCkge1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgnbW92ZW9udG91Y2guanMgb25FbmQnKTtcbiAgICBpZiAodGFpbC5ub1N3aXBlICYmIHJlc3VsdC5tb3ZlZCkgcmV0dXJuO1xuXG4gICAgaWYgKCF0cmFja2VkKSB7XG4gICAgICBzdGFydFRyYWNraW5nKHJlc3VsdC5zdGFydEV2ZW50LCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLy8vY29uc29sZS5sb2coJ29uRW5kJyk7XG5cbiAgICByZXN1bHQudG91Y2ggfHwgTVNfUE9JTlRFUiB8fCAkZWwucmVtb3ZlQ2xhc3MoZ3JhYmJpbmdDbGFzcyk7XG5cbiAgICBlbmRUaW1lID0gJC5ub3coKTtcblxuICAgIHZhciBfYmFja1RpbWVJZGVhbCA9IGVuZFRpbWUgLSBUT1VDSF9USU1FT1VULFxuICAgICAgICBfYmFja1RpbWUsXG4gICAgICAgIF90aW1lRGlmZixcbiAgICAgICAgX3RpbWVEaWZmTGFzdCxcbiAgICAgICAgYmFja1RpbWUgPSBudWxsLFxuICAgICAgICBiYWNrQ29vLFxuICAgICAgICB2aXJ0dWFsUG9zLFxuICAgICAgICBsaW1pdFBvcyxcbiAgICAgICAgbmV3UG9zLFxuICAgICAgICBvdmVyUG9zLFxuICAgICAgICB0aW1lID0gVFJBTlNJVElPTl9EVVJBVElPTixcbiAgICAgICAgc3BlZWQsXG4gICAgICAgIGZyaWN0aW9uID0gb3B0aW9ucy5mcmljdGlvbjtcblxuICAgIGZvciAodmFyIF9pID0gbW92ZVRyYWNrLmxlbmd0aCAtIDE7IF9pID49IDA7IF9pLS0pIHtcbiAgICAgIF9iYWNrVGltZSA9IG1vdmVUcmFja1tfaV1bMF07XG4gICAgICBfdGltZURpZmYgPSBNYXRoLmFicyhfYmFja1RpbWUgLSBfYmFja1RpbWVJZGVhbCk7XG4gICAgICBpZiAoYmFja1RpbWUgPT09IG51bGwgfHwgX3RpbWVEaWZmIDwgX3RpbWVEaWZmTGFzdCkge1xuICAgICAgICBiYWNrVGltZSA9IF9iYWNrVGltZTtcbiAgICAgICAgYmFja0NvbyA9IG1vdmVUcmFja1tfaV1bMV07XG4gICAgICB9IGVsc2UgaWYgKGJhY2tUaW1lID09PSBfYmFja1RpbWVJZGVhbCB8fCBfdGltZURpZmYgPiBfdGltZURpZmZMYXN0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgX3RpbWVEaWZmTGFzdCA9IF90aW1lRGlmZjtcbiAgICB9XG5cbiAgICBuZXdQb3MgPSBtaW5NYXhMaW1pdChtb3ZlRWxQb3MsIG1pbiwgbWF4KTtcblxuICAgIHZhciBjb29EaWZmID0gYmFja0NvbyAtIGNvbyxcbiAgICAgICAgZm9yd2FyZEZMQUcgPSBjb29EaWZmID49IDAsXG4gICAgICAgIHRpbWVEaWZmID0gZW5kVGltZSAtIGJhY2tUaW1lLFxuICAgICAgICBsb25nVG91Y2hGTEFHID0gdGltZURpZmYgPiBUT1VDSF9USU1FT1VULFxuICAgICAgICBzd2lwZUZMQUcgPSAhbG9uZ1RvdWNoRkxBRyAmJiBtb3ZlRWxQb3MgIT09IHN0YXJ0RWxQb3MgJiYgbmV3UG9zID09PSBtb3ZlRWxQb3M7XG5cbiAgICBpZiAoc25hcCkge1xuICAgICAgbmV3UG9zID0gbWluTWF4TGltaXQoTWF0aFtzd2lwZUZMQUcgPyAoZm9yd2FyZEZMQUcgPyAnZmxvb3InIDogJ2NlaWwnKSA6ICdyb3VuZCddKG1vdmVFbFBvcyAvIHNuYXApICogc25hcCwgbWluLCBtYXgpO1xuICAgICAgbWluID0gbWF4ID0gbmV3UG9zO1xuICAgIH1cblxuICAgIGlmIChzd2lwZUZMQUcgJiYgKHNuYXAgfHwgbmV3UG9zID09PSBtb3ZlRWxQb3MpKSB7XG4gICAgICBzcGVlZCA9IC0oY29vRGlmZiAvIHRpbWVEaWZmKTtcbiAgICAgIHRpbWUgKj0gbWluTWF4TGltaXQoTWF0aC5hYnMoc3BlZWQpLCBvcHRpb25zLnRpbWVMb3csIG9wdGlvbnMudGltZUhpZ2gpO1xuICAgICAgdmlydHVhbFBvcyA9IE1hdGgucm91bmQobW92ZUVsUG9zICsgc3BlZWQgKiB0aW1lIC8gZnJpY3Rpb24pO1xuXG4gICAgICBpZiAoIXNuYXApIHtcbiAgICAgICAgbmV3UG9zID0gdmlydHVhbFBvcztcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3J3YXJkRkxBRyAmJiB2aXJ0dWFsUG9zID4gbWF4IHx8IGZvcndhcmRGTEFHICYmIHZpcnR1YWxQb3MgPCBtaW4pIHtcbiAgICAgICAgbGltaXRQb3MgPSBmb3J3YXJkRkxBRyA/IG1pbiA6IG1heDtcbiAgICAgICAgb3ZlclBvcyA9IHZpcnR1YWxQb3MgLSBsaW1pdFBvcztcbiAgICAgICAgaWYgKCFzbmFwKSB7XG4gICAgICAgICAgbmV3UG9zID0gbGltaXRQb3M7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlclBvcyA9IG1pbk1heExpbWl0KG5ld1BvcyArIG92ZXJQb3MgKiAuMDMsIGxpbWl0UG9zIC0gNTAsIGxpbWl0UG9zICsgNTApO1xuICAgICAgICB0aW1lID0gTWF0aC5hYnMoKG1vdmVFbFBvcyAtIG92ZXJQb3MpIC8gKHNwZWVkIC8gZnJpY3Rpb24pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aW1lICo9IHNsb3dGTEFHID8gMTAgOiAxO1xuXG4gICAgKG9wdGlvbnMub25FbmQgfHwgbm9vcCkuY2FsbChlbCwgJC5leHRlbmQocmVzdWx0LCB7bW92ZWQ6IHJlc3VsdC5tb3ZlZCB8fCBsb25nVG91Y2hGTEFHICYmIHNuYXAsIHBvczogbW92ZUVsUG9zLCBuZXdQb3M6IG5ld1Bvcywgb3ZlclBvczogb3ZlclBvcywgdGltZTogdGltZX0pKTtcbiAgfVxuXG4gIHRhaWwgPSAkLmV4dGVuZCh0b3VjaChvcHRpb25zLiR3cmFwLCAkLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgIG9uU3RhcnQ6IG9uU3RhcnQsXG4gICAgb25Nb3ZlOiBvbk1vdmUsXG4gICAgb25FbmQ6IG9uRW5kXG4gIH0pKSwgdGFpbCk7XG5cbiAgcmV0dXJuIHRhaWw7XG59XG5mdW5jdGlvbiB3aGVlbCAoJGVsLCBvcHRpb25zKSB7XG4gIHZhciBlbCA9ICRlbFswXSxcbiAgICAgIGxvY2tGTEFHLFxuICAgICAgbGFzdERpcmVjdGlvbixcbiAgICAgIGxhc3ROb3csXG4gICAgICB0YWlsID0ge1xuICAgICAgICBwcmV2ZW50OiB7fVxuICAgICAgfTtcblxuICBhZGRFdmVudChlbCwgV0hFRUwsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHlEZWx0YSA9IGUud2hlZWxEZWx0YVkgfHwgLTEgKiBlLmRlbHRhWSB8fCAwLFxuICAgICAgICB4RGVsdGEgPSBlLndoZWVsRGVsdGFYIHx8IC0xICogZS5kZWx0YVggfHwgMCxcbiAgICAgICAgeFdpbiA9IE1hdGguYWJzKHhEZWx0YSkgJiYgIU1hdGguYWJzKHlEZWx0YSksXG4gICAgICAgIGRpcmVjdGlvbiA9IGdldERpcmVjdGlvblNpZ24oeERlbHRhIDwgMCksXG4gICAgICAgIHNhbWVEaXJlY3Rpb24gPSBsYXN0RGlyZWN0aW9uID09PSBkaXJlY3Rpb24sXG4gICAgICAgIG5vdyA9ICQubm93KCksXG4gICAgICAgIHRvb0Zhc3QgPSBub3cgLSBsYXN0Tm93IDwgVE9VQ0hfVElNRU9VVDtcblxuICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgbGFzdE5vdyA9IG5vdztcblxuICAgIGlmICgheFdpbiB8fCAhdGFpbC5vayB8fCB0YWlsLnByZXZlbnRbZGlyZWN0aW9uXSAmJiAhbG9ja0ZMQUcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcEV2ZW50KGUsIHRydWUpO1xuICAgICAgaWYgKGxvY2tGTEFHICYmIHNhbWVEaXJlY3Rpb24gJiYgdG9vRmFzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2hpZnQpIHtcbiAgICAgIGxvY2tGTEFHID0gdHJ1ZTtcbiAgICAgIGNsZWFyVGltZW91dCh0YWlsLnQpO1xuICAgICAgdGFpbC50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2tGTEFHID0gZmFsc2U7XG4gICAgICB9LCBTQ1JPTExfTE9DS19USU1FT1VUKTtcbiAgICB9XG5cbiAgICAob3B0aW9ucy5vbkVuZCB8fCBub29wKShlLCBvcHRpb25zLnNoaWZ0ID8gZGlyZWN0aW9uIDogeERlbHRhKTtcblxuICB9KTtcblxuICByZXR1cm4gdGFpbDtcbn1cbmpRdWVyeS5Gb3RvcmFtYSA9IGZ1bmN0aW9uICgkZm90b3JhbWEsIG9wdHMpIHtcbiAgJEhUTUwgPSAkKCdodG1sJyk7XG4gICRCT0RZID0gJCgnYm9keScpO1xuXG4gIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgIHN0YW1wID0gJC5ub3coKSxcbiAgICAgIHN0YW1wQ2xhc3MgPSBfZm90b3JhbWFDbGFzcyArIHN0YW1wLFxuICAgICAgZm90b3JhbWEgPSAkZm90b3JhbWFbMF0sXG4gICAgICBkYXRhLFxuICAgICAgZGF0YUZyYW1lQ291bnQgPSAxLFxuICAgICAgZm90b3JhbWFEYXRhID0gJGZvdG9yYW1hLmRhdGEoKSxcbiAgICAgIHNpemUsXG5cbiAgICAgICRzdHlsZSA9ICQoJzxzdHlsZT48L3N0eWxlPicpLFxuXG4gICAgICAkYW5jaG9yID0gJChkaXYoaGlkZGVuQ2xhc3MpKSxcbiAgICAgICR3cmFwID0gJChkaXYod3JhcENsYXNzKSksXG4gICAgICAkc3RhZ2UgPSAkKGRpdihzdGFnZUNsYXNzKSkuYXBwZW5kVG8oJHdyYXApLFxuICAgICAgc3RhZ2UgPSAkc3RhZ2VbMF0sXG5cbiAgICAgICRzdGFnZVNoYWZ0ID0gJChkaXYoc3RhZ2VTaGFmdENsYXNzKSkuYXBwZW5kVG8oJHN0YWdlKSxcbiAgICAgICRzdGFnZUZyYW1lID0gJCgpLFxuICAgICAgJGFyclByZXYgPSAkKGRpdihhcnJDbGFzcyArICcgJyArIGFyclByZXZDbGFzcyArIGJ1dHRvbkF0dHJpYnV0ZXMpKSxcbiAgICAgICRhcnJOZXh0ID0gJChkaXYoYXJyQ2xhc3MgKyAnICcgKyBhcnJOZXh0Q2xhc3MgKyBidXR0b25BdHRyaWJ1dGVzKSksXG4gICAgICAkYXJycyA9ICRhcnJQcmV2LmFkZCgkYXJyTmV4dCkuYXBwZW5kVG8oJHN0YWdlKSxcbiAgICAgICRuYXZXcmFwID0gJChkaXYobmF2V3JhcENsYXNzKSksXG4gICAgICAkbmF2ID0gJChkaXYobmF2Q2xhc3MpKS5hcHBlbmRUbygkbmF2V3JhcCksXG4gICAgICAkbmF2U2hhZnQgPSAkKGRpdihuYXZTaGFmdENsYXNzKSkuYXBwZW5kVG8oJG5hdiksXG4gICAgICAkbmF2RnJhbWUsXG4gICAgICAkbmF2RG90RnJhbWUgPSAkKCksXG4gICAgICAkbmF2VGh1bWJGcmFtZSA9ICQoKSxcblxuICAgICAgc3RhZ2VTaGFmdERhdGEgPSAkc3RhZ2VTaGFmdC5kYXRhKCksXG4gICAgICBuYXZTaGFmdERhdGEgPSAkbmF2U2hhZnQuZGF0YSgpLFxuXG4gICAgICAkdGh1bWJCb3JkZXIgPSAkKGRpdih0aHVtYkJvcmRlckNsYXNzKSkuYXBwZW5kVG8oJG5hdlNoYWZ0KSxcblxuICAgICAgJGZ1bGxzY3JlZW5JY29uID0gJChkaXYoZnVsbHNjcmVlbkljb25DbGFzcyArIGJ1dHRvbkF0dHJpYnV0ZXMpKSxcbiAgICAgIGZ1bGxzY3JlZW5JY29uID0gJGZ1bGxzY3JlZW5JY29uWzBdLFxuICAgICAgJHZpZGVvUGxheSA9ICQoZGl2KHZpZGVvUGxheUNsYXNzKSksXG4gICAgICAkdmlkZW9DbG9zZSA9ICQoZGl2KHZpZGVvQ2xvc2VDbGFzcykpLmFwcGVuZFRvKCRzdGFnZSksXG4gICAgICB2aWRlb0Nsb3NlID0gJHZpZGVvQ2xvc2VbMF0sXG5cbiAgICAgIHNwaW5uZXIsXG4gICAgICAkc3Bpbm5lciA9ICQoZGl2KHNwaW5uZXJDbGFzcykpLFxuXG4gICAgICAkdmlkZW9QbGF5aW5nLFxuXG4gICAgICBhY3RpdmVJbmRleCA9IGZhbHNlLFxuICAgICAgYWN0aXZlRnJhbWUsXG4gICAgICBhY3RpdmVJbmRleGVzLFxuICAgICAgcmVwb3NpdGlvbkluZGV4LFxuICAgICAgZGlydHlJbmRleCxcbiAgICAgIGxhc3RBY3RpdmVJbmRleCxcbiAgICAgIHByZXZJbmRleCxcbiAgICAgIG5leHRJbmRleCxcbiAgICAgIG5leHRBdXRvcGxheUluZGV4LFxuICAgICAgc3RhcnRJbmRleCxcblxuICAgICAgb19sb29wLFxuICAgICAgb19uYXYsXG4gICAgICBvX25hdlRodW1icyxcbiAgICAgIG9fbmF2VG9wLFxuICAgICAgb19hbGxvd0Z1bGxTY3JlZW4sXG4gICAgICBvX25hdGl2ZUZ1bGxTY3JlZW4sXG4gICAgICBvX2ZhZGUsXG4gICAgICBvX3RodW1iU2lkZSxcbiAgICAgIG9fdGh1bWJTaWRlMixcbiAgICAgIG9fdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgb190cmFuc2l0aW9uLFxuICAgICAgb19zaGFkb3dzLFxuICAgICAgb19ydGwsXG4gICAgICBvX2tleWJvYXJkLFxuICAgICAgbGFzdE9wdGlvbnMgPSB7fSxcblxuICAgICAgbWVhc3VyZXMgPSB7fSxcbiAgICAgIG1lYXN1cmVzU2V0RkxBRyxcblxuICAgICAgc3RhZ2VTaGFmdFRvdWNoVGFpbCA9IHt9LFxuICAgICAgc3RhZ2VXaGVlbFRhaWwgPSB7fSxcbiAgICAgIG5hdlNoYWZ0VG91Y2hUYWlsID0ge30sXG4gICAgICBuYXZXaGVlbFRhaWwgPSB7fSxcblxuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdCxcblxuICAgICAgc2hvd2VkRkxBRyxcbiAgICAgIHBhdXNlZEF1dG9wbGF5RkxBRyxcbiAgICAgIHN0b3BwZWRBdXRvcGxheUZMQUcsXG5cbiAgICAgIHRvRGVhY3RpdmF0ZSA9IHt9LFxuICAgICAgdG9EZXRhY2ggPSB7fSxcblxuICAgICAgbWVhc3VyZXNTdGFzaCxcblxuICAgICAgdG91Y2hlZEZMQUcsXG5cbiAgICAgIGhvdmVyRkxBRyxcblxuICAgICAgbmF2RnJhbWVLZXksXG4gICAgICBzdGFnZUxlZnQgPSAwLFxuXG4gICAgICBmYWRlU3RhY2sgPSBbXTtcblxuICAkd3JhcFtTVEFHRV9GUkFNRV9LRVldID0gJChkaXYoc3RhZ2VGcmFtZUNsYXNzKSk7XG4gICR3cmFwW05BVl9USFVNQl9GUkFNRV9LRVldID0gJChkaXYobmF2RnJhbWVDbGFzcyArICcgJyArIG5hdkZyYW1lVGh1bWJDbGFzcyArIGJ1dHRvbkF0dHJpYnV0ZXMsIGRpdih0aHVtYkNsYXNzKSkpO1xuICAkd3JhcFtOQVZfRE9UX0ZSQU1FX0tFWV0gPSAkKGRpdihuYXZGcmFtZUNsYXNzICsgJyAnICsgbmF2RnJhbWVEb3RDbGFzcyArIGJ1dHRvbkF0dHJpYnV0ZXMsIGRpdihkb3RDbGFzcykpKTtcblxuICB0b0RlYWN0aXZhdGVbU1RBR0VfRlJBTUVfS0VZXSA9IFtdO1xuICB0b0RlYWN0aXZhdGVbTkFWX1RIVU1CX0ZSQU1FX0tFWV0gPSBbXTtcbiAgdG9EZWFjdGl2YXRlW05BVl9ET1RfRlJBTUVfS0VZXSA9IFtdO1xuICB0b0RldGFjaFtTVEFHRV9GUkFNRV9LRVldID0ge307XG5cbiAgJHdyYXBcbiAgICAgIC5hZGRDbGFzcyhDU1MzID8gd3JhcENzczNDbGFzcyA6IHdyYXBDc3MyQ2xhc3MpXG4gICAgICAudG9nZ2xlQ2xhc3Mod3JhcE5vQ29udHJvbHNDbGFzcywgIW9wdHMuY29udHJvbHNvbnN0YXJ0KTtcblxuICBmb3RvcmFtYURhdGEuZm90b3JhbWEgPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yVmlkZW8gKCkge1xuICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbiAoaSwgZGF0YUZyYW1lKSB7XG4gICAgICBpZiAoIWRhdGFGcmFtZS5pKSB7XG4gICAgICAgIGRhdGFGcmFtZS5pID0gZGF0YUZyYW1lQ291bnQrKztcbiAgICAgICAgdmFyIHZpZGVvID0gZmluZFZpZGVvSWQoZGF0YUZyYW1lLnZpZGVvLCB0cnVlKTtcbiAgICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgdmFyIHRodW1icyA9IHt9O1xuICAgICAgICAgIGRhdGFGcmFtZS52aWRlbyA9IHZpZGVvO1xuICAgICAgICAgIGlmICghZGF0YUZyYW1lLmltZyAmJiAhZGF0YUZyYW1lLnRodW1iKSB7XG4gICAgICAgICAgICB0aHVtYnMgPSBnZXRWaWRlb1RodW1icyhkYXRhRnJhbWUsIGRhdGEsIHRoYXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhRnJhbWUudGh1bWJzUmVhZHkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVEYXRhKGRhdGEsIHtpbWc6IHRodW1icy5pbWcsIHRodW1iOiB0aHVtYnMudGh1bWJ9LCBkYXRhRnJhbWUuaSwgdGhhdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbG93S2V5IChrZXkpIHtcbiAgICByZXR1cm4gb19rZXlib2FyZFtrZXldIHx8IHRoYXQuZnVsbFNjcmVlbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRHbG9iYWxFdmVudHMgKEZMQUcpIHtcbiAgICB2YXIga2V5ZG93bkNvbW1vbiA9ICdrZXlkb3duLicgKyBfZm90b3JhbWFDbGFzcyxcbiAgICAgICAgbG9jYWxTdGFtcCA9IF9mb3RvcmFtYUNsYXNzICsgc3RhbXAsXG4gICAgICAgIGtleWRvd25Mb2NhbCA9ICdrZXlkb3duLicgKyBsb2NhbFN0YW1wLFxuICAgICAgICByZXNpemVMb2NhbCA9ICdyZXNpemUuJyArIGxvY2FsU3RhbXAgKyAnICcgKyAnb3JpZW50YXRpb25jaGFuZ2UuJyArIGxvY2FsU3RhbXA7XG5cbiAgICBpZiAoRkxBRykge1xuICAgICAgJERPQ1VNRU5UXG4gICAgICAgICAgLm9uKGtleWRvd25Mb2NhbCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjYXRjaGVkLFxuICAgICAgICAgICAgICAgIGluZGV4O1xuXG4gICAgICAgICAgICBpZiAoJHZpZGVvUGxheWluZyAmJiBlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgIGNhdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB1bmxvYWRWaWRlbygkdmlkZW9QbGF5aW5nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5mdWxsU2NyZWVuIHx8IChvcHRzLmtleWJvYXJkICYmICF0aGF0LmluZGV4KSkge1xuICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgIGNhdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoYXQuY2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLnNoaWZ0S2V5ICYmIGUua2V5Q29kZSA9PT0gMzIgJiYgYWxsb3dLZXkoJ3NwYWNlJykpIHx8IChlLmtleUNvZGUgPT09IDM3ICYmIGFsbG93S2V5KCdsZWZ0JykpIHx8IChlLmtleUNvZGUgPT09IDM4ICYmIGFsbG93S2V5KCd1cCcpKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gJzwnO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLmtleUNvZGUgPT09IDMyICYmIGFsbG93S2V5KCdzcGFjZScpKSB8fCAoZS5rZXlDb2RlID09PSAzOSAmJiBhbGxvd0tleSgncmlnaHQnKSkgfHwgKGUua2V5Q29kZSA9PT0gNDAgJiYgYWxsb3dLZXkoJ2Rvd24nKSkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICc+JztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM2ICYmIGFsbG93S2V5KCdob21lJykpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICc8PCc7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNSAmJiBhbGxvd0tleSgnZW5kJykpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICc+Pic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKGNhdGNoZWQgfHwgaW5kZXgpICYmIHN0b3BFdmVudChlKTtcbiAgICAgICAgICAgIGluZGV4ICYmIHRoYXQuc2hvdyh7aW5kZXg6IGluZGV4LCBzbG93OiBlLmFsdEtleSwgdXNlcjogdHJ1ZX0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoYXQuaW5kZXgpIHtcbiAgICAgICAgJERPQ1VNRU5UXG4gICAgICAgICAgICAub2ZmKGtleWRvd25Db21tb24pXG4gICAgICAgICAgICAub24oa2V5ZG93bkNvbW1vbiwgJ3RleHRhcmVhLCBpbnB1dCwgc2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgISRCT0RZLmhhc0NsYXNzKF9mdWxsc2NyZWVuQ2xhc3MpICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgJFdJTkRPVy5vbihyZXNpemVMb2NhbCwgdGhhdC5yZXNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkRE9DVU1FTlQub2ZmKGtleWRvd25Mb2NhbCk7XG4gICAgICAkV0lORE9XLm9mZihyZXNpemVMb2NhbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kRWxlbWVudHMgKEZMQUcpIHtcbiAgICBpZiAoRkxBRyA9PT0gYXBwZW5kRWxlbWVudHMuZikgcmV0dXJuO1xuXG4gICAgaWYgKEZMQUcpIHtcbiAgICAgICRmb3RvcmFtYVxuICAgICAgICAgIC5odG1sKCcnKVxuICAgICAgICAgIC5hZGRDbGFzcyhfZm90b3JhbWFDbGFzcyArICcgJyArIHN0YW1wQ2xhc3MpXG4gICAgICAgICAgLmFwcGVuZCgkd3JhcClcbiAgICAgICAgICAuYmVmb3JlKCRzdHlsZSlcbiAgICAgICAgICAuYmVmb3JlKCRhbmNob3IpO1xuXG4gICAgICBhZGRJbnN0YW5jZSh0aGF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXAuZGV0YWNoKCk7XG4gICAgICAkc3R5bGUuZGV0YWNoKCk7XG4gICAgICAkYW5jaG9yLmRldGFjaCgpO1xuICAgICAgJGZvdG9yYW1hXG4gICAgICAgICAgLmh0bWwoZm90b3JhbWFEYXRhLnVydGV4dClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3Moc3RhbXBDbGFzcyk7XG5cbiAgICAgIGhpZGVJbnN0YW5jZSh0aGF0KTtcbiAgICB9XG5cbiAgICBiaW5kR2xvYmFsRXZlbnRzKEZMQUcpO1xuICAgIGFwcGVuZEVsZW1lbnRzLmYgPSBGTEFHO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGF0YSAoKSB7XG4gICAgZGF0YSA9IHRoYXQuZGF0YSA9IGRhdGEgfHwgY2xvbmUob3B0cy5kYXRhKSB8fCBnZXREYXRhRnJvbUh0bWwoJGZvdG9yYW1hKTtcbiAgICBzaXplID0gdGhhdC5zaXplID0gZGF0YS5sZW5ndGg7XG5cbiAgICAhcmVhZHkub2sgJiYgb3B0cy5zaHVmZmxlICYmIHNodWZmbGUoZGF0YSk7XG5cbiAgICBjaGVja0ZvclZpZGVvKCk7XG5cbiAgICBhY3RpdmVJbmRleCA9IGxpbWl0SW5kZXgoYWN0aXZlSW5kZXgpO1xuXG4gICAgc2l6ZSAmJiBhcHBlbmRFbGVtZW50cyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YWdlTm9Nb3ZlICgpIHtcbiAgICB2YXIgX25vTW92ZSA9IChzaXplIDwgMiAmJiAhb3B0cy5lbmFibGVpZnNpbmdsZWZyYW1lKSB8fCAkdmlkZW9QbGF5aW5nO1xuICAgIHN0YWdlU2hhZnRUb3VjaFRhaWwubm9Nb3ZlID0gX25vTW92ZSB8fCBvX2ZhZGU7XG4gICAgc3RhZ2VTaGFmdFRvdWNoVGFpbC5ub1N3aXBlID0gX25vTW92ZSB8fCAhb3B0cy5zd2lwZTtcblxuICAgICFvX3RyYW5zaXRpb24gJiYgJHN0YWdlU2hhZnQudG9nZ2xlQ2xhc3MoZ3JhYkNsYXNzLCAhb3B0cy5jbGljayAmJiAhc3RhZ2VTaGFmdFRvdWNoVGFpbC5ub01vdmUgJiYgIXN0YWdlU2hhZnRUb3VjaFRhaWwubm9Td2lwZSk7XG4gICAgTVNfUE9JTlRFUiAmJiAkd3JhcC50b2dnbGVDbGFzcyh3cmFwUGFuWUNsYXNzLCAhc3RhZ2VTaGFmdFRvdWNoVGFpbC5ub1N3aXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEF1dG9wbGF5SW50ZXJ2YWwgKGludGVydmFsKSB7XG4gICAgaWYgKGludGVydmFsID09PSB0cnVlKSBpbnRlcnZhbCA9ICcnO1xuICAgIG9wdHMuYXV0b3BsYXkgPSBNYXRoLm1heCgraW50ZXJ2YWwgfHwgQVVUT1BMQVlfSU5URVJWQUwsIG9fdHJhbnNpdGlvbkR1cmF0aW9uICogMS41KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb25zIG9uIHRoZSBmbHlcbiAgICogKi9cbiAgZnVuY3Rpb24gc2V0T3B0aW9ucyAoKSB7XG4gICAgdGhhdC5vcHRpb25zID0gb3B0cyA9IG9wdGlvbnNUb0xvd2VyQ2FzZShvcHRzKTtcblxuICAgIG9fZmFkZSA9IChvcHRzLnRyYW5zaXRpb24gPT09ICdjcm9zc2ZhZGUnIHx8IG9wdHMudHJhbnNpdGlvbiA9PT0gJ2Rpc3NvbHZlJyk7XG5cbiAgICBvX2xvb3AgPSBvcHRzLmxvb3AgJiYgKHNpemUgPiAyIHx8IChvX2ZhZGUgJiYgKCFvX3RyYW5zaXRpb24gfHwgb190cmFuc2l0aW9uICE9PSAnc2xpZGUnKSkpO1xuXG4gICAgb190cmFuc2l0aW9uRHVyYXRpb24gPSArb3B0cy50cmFuc2l0aW9uZHVyYXRpb24gfHwgVFJBTlNJVElPTl9EVVJBVElPTjtcblxuICAgIG9fcnRsID0gb3B0cy5kaXJlY3Rpb24gPT09ICdydGwnO1xuXG4gICAgb19rZXlib2FyZCA9ICQuZXh0ZW5kKHt9LCBvcHRzLmtleWJvYXJkICYmIEtFWUJPQVJEX09QVElPTlMsIG9wdHMua2V5Ym9hcmQpO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7YWRkOiBbXSwgcmVtb3ZlOiBbXX07XG5cbiAgICBmdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzIChGTEFHLCB2YWx1ZSkge1xuICAgICAgY2xhc3Nlc1tGTEFHID8gJ2FkZCcgOiAncmVtb3ZlJ10ucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPiAxIHx8IG9wdHMuZW5hYmxlaWZzaW5nbGVmcmFtZSkge1xuICAgICAgb19uYXYgPSBvcHRzLm5hdjtcbiAgICAgIG9fbmF2VG9wID0gb3B0cy5uYXZwb3NpdGlvbiA9PT0gJ3RvcCc7XG4gICAgICBjbGFzc2VzLnJlbW92ZS5wdXNoKHNlbGVjdENsYXNzKTtcblxuICAgICAgJGFycnMudG9nZ2xlKCEhb3B0cy5hcnJvd3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvX25hdiA9IGZhbHNlO1xuICAgICAgJGFycnMuaGlkZSgpO1xuICAgIH1cblxuICAgIHNwaW5uZXJTdG9wKCk7XG4gICAgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCQuZXh0ZW5kKHNwaW5uZXJEZWZhdWx0cywgb3B0cy5zcGlubmVyLCBzcGlubmVyT3ZlcnJpZGUsIHtkaXJlY3Rpb246IG9fcnRsID8gLTEgOiAxfSkpO1xuXG4gICAgYXJyc1VwZGF0ZSgpO1xuICAgIHN0YWdlV2hlZWxVcGRhdGUoKTtcblxuICAgIGlmIChvcHRzLmF1dG9wbGF5KSBzZXRBdXRvcGxheUludGVydmFsKG9wdHMuYXV0b3BsYXkpO1xuXG4gICAgb190aHVtYlNpZGUgPSBudW1iZXJGcm9tTWVhc3VyZShvcHRzLnRodW1id2lkdGgpIHx8IFRIVU1CX1NJWkU7XG4gICAgb190aHVtYlNpZGUyID0gbnVtYmVyRnJvbU1lYXN1cmUob3B0cy50aHVtYmhlaWdodCkgfHwgVEhVTUJfU0laRTtcblxuICAgIHN0YWdlV2hlZWxUYWlsLm9rID0gbmF2V2hlZWxUYWlsLm9rID0gb3B0cy50cmFja3BhZCAmJiAhU0xPVztcblxuICAgIHN0YWdlTm9Nb3ZlKCk7XG5cbiAgICBleHRlbmRNZWFzdXJlcyhvcHRzLCBbbWVhc3VyZXNdKTtcblxuICAgIG9fbmF2VGh1bWJzID0gb19uYXYgPT09ICd0aHVtYnMnO1xuXG4gICAgaWYgKG9fbmF2VGh1bWJzKSB7XG4gICAgICBmcmFtZURyYXcoc2l6ZSwgJ25hdlRodW1iJyk7XG5cbiAgICAgICRuYXZGcmFtZSA9ICRuYXZUaHVtYkZyYW1lO1xuICAgICAgbmF2RnJhbWVLZXkgPSBOQVZfVEhVTUJfRlJBTUVfS0VZO1xuXG4gICAgICBzZXRTdHlsZSgkc3R5bGUsICQuRm90b3JhbWEuanN0LnN0eWxlKHt3OiBvX3RodW1iU2lkZSwgaDogb190aHVtYlNpZGUyLCBiOiBvcHRzLnRodW1iYm9yZGVyd2lkdGgsIG06IG9wdHMudGh1bWJtYXJnaW4sIHM6IHN0YW1wLCBxOiAhQ09NUEFUfSkpO1xuXG4gICAgICAkbmF2XG4gICAgICAgICAgLmFkZENsYXNzKG5hdlRodW1ic0NsYXNzKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhuYXZEb3RzQ2xhc3MpO1xuICAgIH0gZWxzZSBpZiAob19uYXYgPT09ICdkb3RzJykge1xuICAgICAgZnJhbWVEcmF3KHNpemUsICduYXZEb3QnKTtcblxuICAgICAgJG5hdkZyYW1lID0gJG5hdkRvdEZyYW1lO1xuICAgICAgbmF2RnJhbWVLZXkgPSBOQVZfRE9UX0ZSQU1FX0tFWTtcblxuICAgICAgJG5hdlxuICAgICAgICAgIC5hZGRDbGFzcyhuYXZEb3RzQ2xhc3MpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKG5hdlRodW1ic0NsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb19uYXYgPSBmYWxzZTtcbiAgICAgICRuYXYucmVtb3ZlQ2xhc3MobmF2VGh1bWJzQ2xhc3MgKyAnICcgKyBuYXZEb3RzQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChvX25hdikge1xuICAgICAgaWYgKG9fbmF2VG9wKSB7XG4gICAgICAgICRuYXZXcmFwLmluc2VydEJlZm9yZSgkc3RhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJG5hdldyYXAuaW5zZXJ0QWZ0ZXIoJHN0YWdlKTtcbiAgICAgIH1cbiAgICAgIGZyYW1lQXBwZW5kLm5hdiA9IGZhbHNlO1xuICAgICAgZnJhbWVBcHBlbmQoJG5hdkZyYW1lLCAkbmF2U2hhZnQsICduYXYnKTtcbiAgICB9XG5cbiAgICBvX2FsbG93RnVsbFNjcmVlbiA9IG9wdHMuYWxsb3dmdWxsc2NyZWVuO1xuXG4gICAgaWYgKG9fYWxsb3dGdWxsU2NyZWVuKSB7XG4gICAgICAkZnVsbHNjcmVlbkljb24ucHJlcGVuZFRvKCRzdGFnZSk7XG4gICAgICBvX25hdGl2ZUZ1bGxTY3JlZW4gPSBGVUxMU0NSRUVOICYmIG9fYWxsb3dGdWxsU2NyZWVuID09PSAnbmF0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgJGZ1bGxzY3JlZW5JY29uLmRldGFjaCgpO1xuICAgICAgb19uYXRpdmVGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkT3JSZW1vdmVDbGFzcyhvX2ZhZGUsIHdyYXBGYWRlQ2xhc3MpO1xuICAgIGFkZE9yUmVtb3ZlQ2xhc3MoIW9fZmFkZSwgd3JhcFNsaWRlQ2xhc3MpO1xuICAgIGFkZE9yUmVtb3ZlQ2xhc3MoIW9wdHMuY2FwdGlvbnMsIHdyYXBOb0NhcHRpb25zQ2xhc3MpO1xuICAgIGFkZE9yUmVtb3ZlQ2xhc3Mob19ydGwsIHdyYXBSdGxDbGFzcyk7XG4gICAgYWRkT3JSZW1vdmVDbGFzcyhvcHRzLmFycm93cyAhPT0gJ2Fsd2F5cycsIHdyYXBUb2dnbGVBcnJvd3NDbGFzcyk7XG5cbiAgICBvX3NoYWRvd3MgPSBvcHRzLnNoYWRvd3MgJiYgIVNMT1c7XG4gICAgYWRkT3JSZW1vdmVDbGFzcyghb19zaGFkb3dzLCB3cmFwTm9TaGFkb3dzQ2xhc3MpO1xuXG4gICAgJHdyYXBcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzZXMuYWRkLmpvaW4oJyAnKSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzZXMucmVtb3ZlLmpvaW4oJyAnKSk7XG5cbiAgICBsYXN0T3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBvcHRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUluZGV4IChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IDAgPyAoc2l6ZSArIChpbmRleCAlIHNpemUpKSAlIHNpemUgOiBpbmRleCA+PSBzaXplID8gaW5kZXggJSBzaXplIDogaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBsaW1pdEluZGV4IChpbmRleCkge1xuICAgIHJldHVybiBtaW5NYXhMaW1pdChpbmRleCwgMCwgc2l6ZSAtIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRnZUluZGV4IChpbmRleCkge1xuICAgIHJldHVybiBvX2xvb3AgPyBub3JtYWxpemVJbmRleChpbmRleCkgOiBsaW1pdEluZGV4KGluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByZXZJbmRleCAoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPiAwIHx8IG9fbG9vcCA/IGluZGV4IC0gMSA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmV4dEluZGV4IChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IHNpemUgLSAxIHx8IG9fbG9vcCA/IGluZGV4ICsgMSA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U3RhZ2VTaGFmdE1pbm1heEFuZFNuYXAgKCkge1xuICAgIHN0YWdlU2hhZnRUb3VjaFRhaWwubWluID0gb19sb29wID8gLUluZmluaXR5IDogLWdldFBvc0J5SW5kZXgoc2l6ZSAtIDEsIG1lYXN1cmVzLncsIG9wdHMubWFyZ2luLCByZXBvc2l0aW9uSW5kZXgpO1xuICAgIHN0YWdlU2hhZnRUb3VjaFRhaWwubWF4ID0gb19sb29wID8gSW5maW5pdHkgOiAtZ2V0UG9zQnlJbmRleCgwLCBtZWFzdXJlcy53LCBvcHRzLm1hcmdpbiwgcmVwb3NpdGlvbkluZGV4KTtcbiAgICBzdGFnZVNoYWZ0VG91Y2hUYWlsLnNuYXAgPSBtZWFzdXJlcy53ICsgb3B0cy5tYXJnaW47XG4gIH1cblxuICBmdW5jdGlvbiBzZXROYXZTaGFmdE1pbk1heCAoKSB7XG4gICAgLy8vLy8vLy9jb25zb2xlLmxvZygnc2V0TmF2U2hhZnRNaW5NYXgnLCBtZWFzdXJlcy5udyk7XG4gICAgbmF2U2hhZnRUb3VjaFRhaWwubWluID0gTWF0aC5taW4oMCwgbWVhc3VyZXMubncgLSAkbmF2U2hhZnQud2lkdGgoKSk7XG4gICAgbmF2U2hhZnRUb3VjaFRhaWwubWF4ID0gMDtcbiAgICAkbmF2U2hhZnQudG9nZ2xlQ2xhc3MoZ3JhYkNsYXNzLCAhKG5hdlNoYWZ0VG91Y2hUYWlsLm5vTW92ZSA9IG5hdlNoYWZ0VG91Y2hUYWlsLm1pbiA9PT0gbmF2U2hhZnRUb3VjaFRhaWwubWF4KSk7XG4gIH1cblxuICBmdW5jdGlvbiBlYWNoSW5kZXggKGluZGV4ZXMsIHR5cGUsIGZuKSB7XG4gICAgaWYgKHR5cGVvZiBpbmRleGVzID09PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXhlcyA9IG5ldyBBcnJheShpbmRleGVzKTtcbiAgICAgIHZhciByYW5nZUZMQUcgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gJC5lYWNoKGluZGV4ZXMsIGZ1bmN0aW9uIChpLCBpbmRleCkge1xuICAgICAgaWYgKHJhbmdlRkxBRykgaW5kZXggPSBpO1xuICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIGRhdGFGcmFtZSA9IGRhdGFbbm9ybWFsaXplSW5kZXgoaW5kZXgpXTtcblxuICAgICAgICBpZiAoZGF0YUZyYW1lKSB7XG4gICAgICAgICAgdmFyIGtleSA9ICckJyArIHR5cGUgKyAnRnJhbWUnLFxuICAgICAgICAgICAgICAkZnJhbWUgPSBkYXRhRnJhbWVba2V5XTtcblxuICAgICAgICAgIGZuLmNhbGwodGhpcywgaSwgaW5kZXgsIGRhdGFGcmFtZSwgJGZyYW1lLCBrZXksICRmcmFtZSAmJiAkZnJhbWUuZGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TWVhc3VyZXMgKHdpZHRoLCBoZWlnaHQsIHJhdGlvLCBpbmRleCkge1xuICAgIGlmICghbWVhc3VyZXNTZXRGTEFHIHx8IChtZWFzdXJlc1NldEZMQUcgPT09ICcqJyAmJiBpbmRleCA9PT0gc3RhcnRJbmRleCkpIHtcblxuICAgICAgLy8vLy8vY29uc29sZS5sb2coJ3NldE1lYXN1cmVzJywgaW5kZXgsIG9wdHMud2lkdGgsIG9wdHMuaGVpZ2h0KTtcblxuICAgICAgd2lkdGggPSBtZWFzdXJlSXNWYWxpZChvcHRzLndpZHRoKSB8fCBtZWFzdXJlSXNWYWxpZCh3aWR0aCkgfHwgV0lEVEg7XG4gICAgICBoZWlnaHQgPSBtZWFzdXJlSXNWYWxpZChvcHRzLmhlaWdodCkgfHwgbWVhc3VyZUlzVmFsaWQoaGVpZ2h0KSB8fCBIRUlHSFQ7XG4gICAgICB0aGF0LnJlc2l6ZSh7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgcmF0aW86IG9wdHMucmF0aW8gfHwgcmF0aW8gfHwgd2lkdGggLyBoZWlnaHRcbiAgICAgIH0sIDAsIGluZGV4ICE9PSBzdGFydEluZGV4ICYmICcqJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZEltZyAoaW5kZXhlcywgdHlwZSwgc3BlY2lhbE1lYXN1cmVzLCBtZXRob2QsIHBvc2l0aW9uLCBhZ2Fpbikge1xuICAgIGVhY2hJbmRleChpbmRleGVzLCB0eXBlLCBmdW5jdGlvbiAoaSwgaW5kZXgsIGRhdGFGcmFtZSwgJGZyYW1lLCBrZXksIGZyYW1lRGF0YSkge1xuXG4gICAgICBpZiAoISRmcmFtZSkgcmV0dXJuO1xuXG4gICAgICB2YXIgZnVsbEZMQUcgPSB0aGF0LmZ1bGxTY3JlZW4gJiYgZGF0YUZyYW1lLmZ1bGwgJiYgZGF0YUZyYW1lLmZ1bGwgIT09IGRhdGFGcmFtZS5pbWcgJiYgIWZyYW1lRGF0YS4kZnVsbCAmJiB0eXBlID09PSAnc3RhZ2UnO1xuXG4gICAgICBpZiAoZnJhbWVEYXRhLiRpbWcgJiYgIWFnYWluICYmICFmdWxsRkxBRykgcmV0dXJuO1xuXG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgJGltZyA9ICQoaW1nKSxcbiAgICAgICAgICBpbWdEYXRhID0gJGltZy5kYXRhKCk7XG5cbiAgICAgIGZyYW1lRGF0YVtmdWxsRkxBRyA/ICckZnVsbCcgOiAnJGltZyddID0gJGltZztcblxuICAgICAgdmFyIHNyY0tleSA9IHR5cGUgPT09ICdzdGFnZScgPyAoZnVsbEZMQUcgPyAnZnVsbCcgOiAnaW1nJykgOiAndGh1bWInLFxuICAgICAgICAgIHNyYyA9IGRhdGFGcmFtZVtzcmNLZXldLFxuICAgICAgICAgIGR1bW15ID0gZnVsbEZMQUcgPyBudWxsIDogZGF0YUZyYW1lW3R5cGUgPT09ICdzdGFnZScgPyAndGh1bWInIDogJ2ltZyddO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ25hdlRodW1iJykgJGZyYW1lID0gZnJhbWVEYXRhLiR3cmFwO1xuXG4gICAgICBmdW5jdGlvbiB0cmlnZ2VyVHJpZ2dlckV2ZW50IChldmVudCkge1xuICAgICAgICB2YXIgX2luZGV4ID0gbm9ybWFsaXplSW5kZXgoaW5kZXgpO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICBpbmRleDogX2luZGV4LFxuICAgICAgICAgIHNyYzogc3JjLFxuICAgICAgICAgIGZyYW1lOiBkYXRhW19pbmRleF1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGVycm9yICgpIHtcbiAgICAgICAgJGltZy5yZW1vdmUoKTtcblxuICAgICAgICAkLkZvdG9yYW1hLmNhY2hlW3NyY10gPSAnZXJyb3InO1xuXG4gICAgICAgIGlmICgoIWRhdGFGcmFtZS5odG1sIHx8IHR5cGUgIT09ICdzdGFnZScpICYmIGR1bW15ICYmIGR1bW15ICE9PSBzcmMpIHtcbiAgICAgICAgICBkYXRhRnJhbWVbc3JjS2V5XSA9IHNyYyA9IGR1bW15O1xuICAgICAgICAgIGxvYWRJbWcoW2luZGV4XSwgdHlwZSwgc3BlY2lhbE1lYXN1cmVzLCBtZXRob2QsIHBvc2l0aW9uLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3JjICYmICFkYXRhRnJhbWUuaHRtbCAmJiAhZnVsbEZMQUcpIHtcbiAgICAgICAgICAgICRmcmFtZVxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdmOmVycm9yJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MobG9hZGluZ0NsYXNzKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhlcnJvckNsYXNzKTtcblxuICAgICAgICAgICAgdHJpZ2dlclRyaWdnZXJFdmVudCgnZXJyb3InKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdGFnZScpIHtcbiAgICAgICAgICAgICRmcmFtZVxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdmOmxvYWQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhsb2FkaW5nQ2xhc3MgKyAnICcgKyBlcnJvckNsYXNzKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkZWRDbGFzcyk7XG5cbiAgICAgICAgICAgIHRyaWdnZXJUcmlnZ2VyRXZlbnQoJ2xvYWQnKTtcbiAgICAgICAgICAgIHNldE1lYXN1cmVzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnJhbWVEYXRhLnN0YXRlID0gJ2Vycm9yJztcblxuICAgICAgICAgIGlmIChzaXplID4gMSAmJiBkYXRhW2luZGV4XSA9PT0gZGF0YUZyYW1lICYmICFkYXRhRnJhbWUuaHRtbCAmJiAhZGF0YUZyYW1lLmRlbGV0ZWQgJiYgIWRhdGFGcmFtZS52aWRlbyAmJiAhZnVsbEZMQUcpIHtcbiAgICAgICAgICAgIGRhdGFGcmFtZS5kZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoYXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbG9hZGVkICgpIHtcbiAgICAgICAgLy8vLy8vY29uc29sZS5sb2coJ2xvYWRlZDogJyArIHNyYyk7XG5cbiAgICAgICAgLy8vL2NvbnNvbGUubG9nKCckLkZvdG9yYW1hLm1lYXN1cmVzW3NyY10nLCAkLkZvdG9yYW1hLm1lYXN1cmVzW3NyY10pO1xuXG4gICAgICAgICQuRm90b3JhbWEubWVhc3VyZXNbc3JjXSA9IGltZ0RhdGEubWVhc3VyZXMgPSAkLkZvdG9yYW1hLm1lYXN1cmVzW3NyY10gfHwge1xuICAgICAgICAgIHdpZHRoOiBpbWcud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBpbWcuaGVpZ2h0LFxuICAgICAgICAgIHJhdGlvOiBpbWcud2lkdGggLyBpbWcuaGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0TWVhc3VyZXMoaW1nRGF0YS5tZWFzdXJlcy53aWR0aCwgaW1nRGF0YS5tZWFzdXJlcy5oZWlnaHQsIGltZ0RhdGEubWVhc3VyZXMucmF0aW8sIGluZGV4KTtcblxuICAgICAgICAkaW1nXG4gICAgICAgICAgICAub2ZmKCdsb2FkIGVycm9yJylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhpbWdDbGFzcyArIChmdWxsRkxBRyA/ICcgJyArIGltZ0Z1bGxDbGFzcyA6ICcnKSlcbiAgICAgICAgICAgIC5wcmVwZW5kVG8oJGZyYW1lKTtcblxuICAgICAgICBmaXQoJGltZywgKCQuaXNGdW5jdGlvbihzcGVjaWFsTWVhc3VyZXMpID8gc3BlY2lhbE1lYXN1cmVzKCkgOiBzcGVjaWFsTWVhc3VyZXMpIHx8IG1lYXN1cmVzLCBtZXRob2QgfHwgZGF0YUZyYW1lLmZpdCB8fCBvcHRzLmZpdCwgcG9zaXRpb24gfHwgZGF0YUZyYW1lLnBvc2l0aW9uIHx8IG9wdHMucG9zaXRpb24pO1xuXG4gICAgICAgICQuRm90b3JhbWEuY2FjaGVbc3JjXSA9IGZyYW1lRGF0YS5zdGF0ZSA9ICdsb2FkZWQnO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRmcmFtZVxuICAgICAgICAgICAgICAudHJpZ2dlcignZjpsb2FkJylcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcyArICcgJyArIGVycm9yQ2xhc3MpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkZWRDbGFzcyArICcgJyArIChmdWxsRkxBRyA/IGxvYWRlZEZ1bGxDbGFzcyA6IGxvYWRlZEltZ0NsYXNzKSk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0YWdlJykge1xuICAgICAgICAgICAgdHJpZ2dlclRyaWdnZXJFdmVudCgnbG9hZCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUZyYW1lLnRodW1icmF0aW8gPT09IEFVVE8gfHwgIWRhdGFGcmFtZS50aHVtYnJhdGlvICYmIG9wdHMudGh1bWJyYXRpbyA9PT0gQVVUTykge1xuICAgICAgICAgICAgLy8gZGFuZ2VyISByZWZsb3cgZm9yIGFsbCB0aHVtYm5haWxzXG4gICAgICAgICAgICBkYXRhRnJhbWUudGh1bWJyYXRpbyA9IGltZ0RhdGEubWVhc3VyZXMucmF0aW87XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3JjKSB7XG4gICAgICAgIGVycm9yKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gd2FpdEFuZExvYWQgKCkge1xuICAgICAgICB2YXIgX2kgPSAxMDtcbiAgICAgICAgd2FpdEZvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuICF0b3VjaGVkRkxBRyB8fCAhX2ktLSAmJiAhU0xPVztcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxvYWRlZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEkLkZvdG9yYW1hLmNhY2hlW3NyY10pIHtcbiAgICAgICAgJC5Gb3RvcmFtYS5jYWNoZVtzcmNdID0gJyonO1xuXG4gICAgICAgICRpbWdcbiAgICAgICAgICAgIC5vbignbG9hZCcsIHdhaXRBbmRMb2FkKVxuICAgICAgICAgICAgLm9uKCdlcnJvcicsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChmdW5jdGlvbiBqdXN0V2FpdCAoKSB7XG4gICAgICAgICAgaWYgKCQuRm90b3JhbWEuY2FjaGVbc3JjXSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgZXJyb3IoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCQuRm90b3JhbWEuY2FjaGVbc3JjXSA9PT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgICAgIC8vLy9jb25zb2xlLmxvZygndGFrZSBmcm9tIGNhY2hlOiAnICsgc3JjKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdEFuZExvYWQsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGp1c3RXYWl0LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgZnJhbWVEYXRhLnN0YXRlID0gJyc7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3Bpbm5lclNwaW4gKCRlbCkge1xuICAgICRzcGlubmVyLmFwcGVuZChzcGlubmVyLnNwaW4oKS5lbCkuYXBwZW5kVG8oJGVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaW5uZXJTdG9wICgpIHtcbiAgICAkc3Bpbm5lci5kZXRhY2goKTtcbiAgICBzcGlubmVyICYmIHNwaW5uZXIuc3RvcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRm90b3JhbWFTdGF0ZSAoKSB7XG4gICAgdmFyICRmcmFtZSA9IGFjdGl2ZUZyYW1lW1NUQUdFX0ZSQU1FX0tFWV07XG5cbiAgICBpZiAoJGZyYW1lICYmICEkZnJhbWUuZGF0YSgpLnN0YXRlKSB7XG4gICAgICBzcGlubmVyU3BpbigkZnJhbWUpO1xuICAgICAgJGZyYW1lLm9uKCdmOmxvYWQgZjplcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGZyYW1lLm9mZignZjpsb2FkIGY6ZXJyb3InKTtcbiAgICAgICAgc3Bpbm5lclN0b3AoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5hdkZyYW1lRXZlbnRzIChmcmFtZSkge1xuICAgIGFkZEVudGVyVXAoZnJhbWUsIG9uTmF2RnJhbWVDbGljayk7XG4gICAgYWRkRm9jdXMoZnJhbWUsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2tTY3JvbGwoJG5hdik7XG4gICAgICB9LCAwKTtcbiAgICAgIHNsaWRlTmF2U2hhZnQoe3RpbWU6IG9fdHJhbnNpdGlvbkR1cmF0aW9uLCBndWVzc0luZGV4OiAkKHRoaXMpLmRhdGEoKS5lcSwgbWluTWF4OiBuYXZTaGFmdFRvdWNoVGFpbH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJhbWVEcmF3IChpbmRleGVzLCB0eXBlKSB7XG4gICAgZWFjaEluZGV4KGluZGV4ZXMsIHR5cGUsIGZ1bmN0aW9uIChpLCBpbmRleCwgZGF0YUZyYW1lLCAkZnJhbWUsIGtleSwgZnJhbWVEYXRhKSB7XG4gICAgICBpZiAoJGZyYW1lKSByZXR1cm47XG5cbiAgICAgICRmcmFtZSA9IGRhdGFGcmFtZVtrZXldID0gJHdyYXBba2V5XS5jbG9uZSgpO1xuICAgICAgZnJhbWVEYXRhID0gJGZyYW1lLmRhdGEoKTtcbiAgICAgIGZyYW1lRGF0YS5kYXRhID0gZGF0YUZyYW1lO1xuICAgICAgdmFyIGZyYW1lID0gJGZyYW1lWzBdO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3N0YWdlJykge1xuXG4gICAgICAgIGlmIChkYXRhRnJhbWUuaHRtbCkge1xuICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCInICsgaHRtbENsYXNzICsgJ1wiPjwvZGl2PicpXG4gICAgICAgICAgICAgIC5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICBkYXRhRnJhbWUuX2h0bWwgPyAkKGRhdGFGcmFtZS5odG1sKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdpZCcpXG4gICAgICAgICAgICAgICAgICAgICAgLmh0bWwoZGF0YUZyYW1lLl9odG1sKSAvLyBCZWNhdXNlIG9mIElFXG4gICAgICAgICAgICAgICAgICA6IGRhdGFGcmFtZS5odG1sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmFwcGVuZFRvKCRmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhRnJhbWUuY2FwdGlvbiAmJiAkKGRpdihjYXB0aW9uQ2xhc3MsIGRpdihjYXB0aW9uV3JhcENsYXNzLCBkYXRhRnJhbWUuY2FwdGlvbikpKS5hcHBlbmRUbygkZnJhbWUpO1xuXG4gICAgICAgIGRhdGFGcmFtZS52aWRlbyAmJiAkZnJhbWVcbiAgICAgICAgICAuYWRkQ2xhc3Moc3RhZ2VGcmFtZVZpZGVvQ2xhc3MpXG4gICAgICAgICAgLmFwcGVuZCgkdmlkZW9QbGF5LmNsb25lKCkpO1xuXG4gICAgICAgIC8vIFRoaXMgc29sdmVzIHRhYmJpbmcgcHJvYmxlbXNcbiAgICAgICAgYWRkRm9jdXMoZnJhbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvY2tTY3JvbGwoJHN0YWdlKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICBjbGlja1RvU2hvdyh7aW5kZXg6IGZyYW1lRGF0YS5lcSwgdXNlcjogdHJ1ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkc3RhZ2VGcmFtZSA9ICRzdGFnZUZyYW1lLmFkZCgkZnJhbWUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmF2RG90Jykge1xuICAgICAgICBhZGROYXZGcmFtZUV2ZW50cyhmcmFtZSk7XG4gICAgICAgICRuYXZEb3RGcmFtZSA9ICRuYXZEb3RGcmFtZS5hZGQoJGZyYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hdlRodW1iJykge1xuICAgICAgICBhZGROYXZGcmFtZUV2ZW50cyhmcmFtZSk7XG4gICAgICAgIGZyYW1lRGF0YS4kd3JhcCA9ICRmcmFtZS5jaGlsZHJlbignOmZpcnN0Jyk7XG4gICAgICAgICRuYXZUaHVtYkZyYW1lID0gJG5hdlRodW1iRnJhbWUuYWRkKCRmcmFtZSk7XG4gICAgICAgIGlmIChkYXRhRnJhbWUudmlkZW8pIHtcbiAgICAgICAgICBmcmFtZURhdGEuJHdyYXAuYXBwZW5kKCR2aWRlb1BsYXkuY2xvbmUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxGaXQgKCRpbWcsIG1lYXN1cmVzVG9GaXQsIG1ldGhvZCwgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gJGltZyAmJiAkaW1nLmxlbmd0aCAmJiBmaXQoJGltZywgbWVhc3VyZXNUb0ZpdCwgbWV0aG9kLCBwb3NpdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFnZUZyYW1lUG9zaXRpb24gKGluZGV4ZXMpIHtcbiAgICBlYWNoSW5kZXgoaW5kZXhlcywgJ3N0YWdlJywgZnVuY3Rpb24gKGksIGluZGV4LCBkYXRhRnJhbWUsICRmcmFtZSwga2V5LCBmcmFtZURhdGEpIHtcbiAgICAgIGlmICghJGZyYW1lKSByZXR1cm47XG5cbiAgICAgIHZhciBub3JtYWxpemVkSW5kZXggPSBub3JtYWxpemVJbmRleChpbmRleCksXG4gICAgICAgICAgbWV0aG9kID0gZGF0YUZyYW1lLmZpdCB8fCBvcHRzLmZpdCxcbiAgICAgICAgICBwb3NpdGlvbiA9IGRhdGFGcmFtZS5wb3NpdGlvbiB8fCBvcHRzLnBvc2l0aW9uO1xuICAgICAgZnJhbWVEYXRhLmVxID0gbm9ybWFsaXplZEluZGV4O1xuXG4gICAgICB0b0RldGFjaFtTVEFHRV9GUkFNRV9LRVldW25vcm1hbGl6ZWRJbmRleF0gPSAkZnJhbWUuY3NzKCQuZXh0ZW5kKHtsZWZ0OiBvX2ZhZGUgPyAwIDogZ2V0UG9zQnlJbmRleChpbmRleCwgbWVhc3VyZXMudywgb3B0cy5tYXJnaW4sIHJlcG9zaXRpb25JbmRleCl9LCBvX2ZhZGUgJiYgZ2V0RHVyYXRpb24oMCkpKTtcblxuICAgICAgaWYgKGlzRGV0YWNoZWQoJGZyYW1lWzBdKSkge1xuICAgICAgICAkZnJhbWUuYXBwZW5kVG8oJHN0YWdlU2hhZnQpO1xuICAgICAgICB1bmxvYWRWaWRlbyhkYXRhRnJhbWUuJHZpZGVvKTtcbiAgICAgIH1cblxuICAgICAgY2FsbEZpdChmcmFtZURhdGEuJGltZywgbWVhc3VyZXMsIG1ldGhvZCwgcG9zaXRpb24pO1xuICAgICAgY2FsbEZpdChmcmFtZURhdGEuJGZ1bGwsIG1lYXN1cmVzLCBtZXRob2QsIHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRodW1ic0RyYXcgKHBvcywgbG9hZEZMQUcpIHtcbiAgICBpZiAob19uYXYgIT09ICd0aHVtYnMnIHx8IGlzTmFOKHBvcykpIHJldHVybjtcblxuICAgIHZhciBsZWZ0TGltaXQgPSAtcG9zLFxuICAgICAgICByaWdodExpbWl0ID0gLXBvcyArIG1lYXN1cmVzLm53O1xuXG4gICAgJG5hdlRodW1iRnJhbWUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgIHRoaXNEYXRhID0gJHRoaXMuZGF0YSgpLFxuICAgICAgICAgIGVxID0gdGhpc0RhdGEuZXEsXG4gICAgICAgICAgZ2V0U3BlY2lhbE1lYXN1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaDogb190aHVtYlNpZGUyLFxuICAgICAgICAgICAgICB3OiB0aGlzRGF0YS53XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzcGVjaWFsTWVhc3VyZXMgPSBnZXRTcGVjaWFsTWVhc3VyZXMoKSxcbiAgICAgICAgICBkYXRhRnJhbWUgPSBkYXRhW2VxXSB8fCB7fSxcbiAgICAgICAgICBtZXRob2QgPSBkYXRhRnJhbWUudGh1bWJmaXQgfHwgb3B0cy50aHVtYmZpdCxcbiAgICAgICAgICBwb3NpdGlvbiA9IGRhdGFGcmFtZS50aHVtYnBvc2l0aW9uIHx8IG9wdHMudGh1bWJwb3NpdGlvbjtcblxuICAgICAgc3BlY2lhbE1lYXN1cmVzLncgPSB0aGlzRGF0YS53O1xuXG4gICAgICBpZiAodGhpc0RhdGEubCArIHRoaXNEYXRhLncgPCBsZWZ0TGltaXRcbiAgICAgICAgICB8fCB0aGlzRGF0YS5sID4gcmlnaHRMaW1pdFxuICAgICAgICAgIHx8IGNhbGxGaXQodGhpc0RhdGEuJGltZywgc3BlY2lhbE1lYXN1cmVzLCBtZXRob2QsIHBvc2l0aW9uKSkgcmV0dXJuO1xuXG4gICAgICBsb2FkRkxBRyAmJiBsb2FkSW1nKFtlcV0sICduYXZUaHVtYicsIGdldFNwZWNpYWxNZWFzdXJlcywgbWV0aG9kLCBwb3NpdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmcmFtZUFwcGVuZCAoJGZyYW1lcywgJHNoYWZ0LCB0eXBlKSB7XG4gICAgaWYgKCFmcmFtZUFwcGVuZFt0eXBlXSkge1xuXG4gICAgICB2YXIgdGh1bWJzRkxBRyA9IHR5cGUgPT09ICduYXYnICYmIG9fbmF2VGh1bWJzLFxuICAgICAgICAgIGxlZnQgPSAwO1xuXG4gICAgICAkc2hhZnQuYXBwZW5kKFxuICAgICAgICAkZnJhbWVzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGFjdHVhbCxcbiAgICAgICAgICAgICAgICAgICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgIGZyYW1lRGF0YSA9ICR0aGlzLmRhdGEoKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbCA9IGRhdGEubGVuZ3RoOyBfaSA8IF9sOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lRGF0YS5kYXRhID09PSBkYXRhW19pXSkge1xuICAgICAgICAgICAgICAgICAgYWN0dWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGZyYW1lRGF0YS5lcSA9IF9pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBhY3R1YWwgfHwgJHRoaXMucmVtb3ZlKCkgJiYgZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQoYSkuZGF0YSgpLmVxIC0gJChiKS5kYXRhKCkuZXE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgIGlmICghdGh1bWJzRkxBRykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICBmcmFtZURhdGEgPSAkdGhpcy5kYXRhKCksXG4gICAgICAgICAgICAgICAgICB0aHVtYndpZHRoID0gTWF0aC5yb3VuZChvX3RodW1iU2lkZTIgKiBmcmFtZURhdGEuZGF0YS50aHVtYnJhdGlvKSB8fCBvX3RodW1iU2lkZTtcblxuICAgICAgICAgICAgICBmcmFtZURhdGEubCA9IGxlZnQ7XG4gICAgICAgICAgICAgIGZyYW1lRGF0YS53ID0gdGh1bWJ3aWR0aDtcblxuICAgICAgICAgICAgICAkdGhpcy5jc3Moe3dpZHRoOiB0aHVtYndpZHRofSk7XG5cbiAgICAgICAgICAgICAgbGVmdCArPSB0aHVtYndpZHRoICsgb3B0cy50aHVtYm1hcmdpbjtcbiAgICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBmcmFtZUFwcGVuZFt0eXBlXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggLSBzdGFnZUxlZnQgPiBtZWFzdXJlcy53IC8gMztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGVEaXJyZWN0aW9uIChpKSB7XG4gICAgcmV0dXJuICFvX2xvb3AgJiYgKCEoYWN0aXZlSW5kZXggKyBpKSB8fCAhKGFjdGl2ZUluZGV4IC0gc2l6ZSArIGkpKSAmJiAhJHZpZGVvUGxheWluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGFycnNVcGRhdGUgKCkge1xuICAgIHZhciBkaXNhYmxlUHJldiA9IGRpc2FibGVEaXJyZWN0aW9uKDApLFxuICAgICAgICBkaXNhYmxlTmV4dCA9IGRpc2FibGVEaXJyZWN0aW9uKDEpO1xuICAgICRhcnJQcmV2XG4gICAgICAgIC50b2dnbGVDbGFzcyhhcnJEaXNhYmxlZENsYXNzLCBkaXNhYmxlUHJldilcbiAgICAgICAgLmF0dHIoZGlzYWJsZUF0dHIoZGlzYWJsZVByZXYpKTtcbiAgICAkYXJyTmV4dFxuICAgICAgICAudG9nZ2xlQ2xhc3MoYXJyRGlzYWJsZWRDbGFzcywgZGlzYWJsZU5leHQpXG4gICAgICAgIC5hdHRyKGRpc2FibGVBdHRyKGRpc2FibGVOZXh0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFnZVdoZWVsVXBkYXRlICgpIHtcbiAgICBpZiAoc3RhZ2VXaGVlbFRhaWwub2spIHtcbiAgICAgIHN0YWdlV2hlZWxUYWlsLnByZXZlbnQgPSB7JzwnOiBkaXNhYmxlRGlycmVjdGlvbigwKSwgJz4nOiBkaXNhYmxlRGlycmVjdGlvbigxKX07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmF2RnJhbWVCb3VuZHMgKCRuYXZGcmFtZSkge1xuICAgIHZhciBuYXZGcmFtZURhdGEgPSAkbmF2RnJhbWUuZGF0YSgpLFxuICAgICAgICBsZWZ0LFxuICAgICAgICB3aWR0aDtcblxuICAgIGlmIChvX25hdlRodW1icykge1xuICAgICAgbGVmdCA9IG5hdkZyYW1lRGF0YS5sO1xuICAgICAgd2lkdGggPSBuYXZGcmFtZURhdGEudztcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9ICRuYXZGcmFtZS5wb3NpdGlvbigpLmxlZnQ7XG4gICAgICB3aWR0aCA9ICRuYXZGcmFtZS53aWR0aCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjOiBsZWZ0ICsgd2lkdGggLyAyLFxuICAgICAgbWluOiAtbGVmdCArIG9wdHMudGh1bWJtYXJnaW4gKiAxMCxcbiAgICAgIG1heDogLWxlZnQgKyBtZWFzdXJlcy53IC0gd2lkdGggLSBvcHRzLnRodW1ibWFyZ2luICogMTBcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVUaHVtYkJvcmRlciAodGltZSkge1xuICAgIHZhciBuYXZGcmFtZURhdGEgPSBhY3RpdmVGcmFtZVtuYXZGcmFtZUtleV0uZGF0YSgpO1xuICAgIHNsaWRlKCR0aHVtYkJvcmRlciwge1xuICAgICAgdGltZTogdGltZSAqIDEuMixcbiAgICAgIHBvczogbmF2RnJhbWVEYXRhLmwsXG4gICAgICB3aWR0aDogbmF2RnJhbWVEYXRhLncgLSBvcHRzLnRodW1iYm9yZGVyd2lkdGggKiAyXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZU5hdlNoYWZ0IChvcHRpb25zKSB7XG4gICAgLy8vL2NvbnNvbGUubG9nKCdzbGlkZU5hdlNoYWZ0Jywgb3B0aW9ucy5ndWVzc0luZGV4LCBvcHRpb25zLmtlZXAsIHNsaWRlTmF2U2hhZnQubCk7XG4gICAgdmFyICRndWVzc05hdkZyYW1lID0gZGF0YVtvcHRpb25zLmd1ZXNzSW5kZXhdW25hdkZyYW1lS2V5XTtcbiAgICBpZiAoJGd1ZXNzTmF2RnJhbWUpIHtcbiAgICAgIHZhciBvdmVyZmxvd0ZMQUcgPSBuYXZTaGFmdFRvdWNoVGFpbC5taW4gIT09IG5hdlNoYWZ0VG91Y2hUYWlsLm1heCxcbiAgICAgICAgICBtaW5NYXggPSBvcHRpb25zLm1pbk1heCB8fCBvdmVyZmxvd0ZMQUcgJiYgZ2V0TmF2RnJhbWVCb3VuZHMoYWN0aXZlRnJhbWVbbmF2RnJhbWVLZXldKSxcbiAgICAgICAgICBsID0gb3ZlcmZsb3dGTEFHICYmIChvcHRpb25zLmtlZXAgJiYgc2xpZGVOYXZTaGFmdC5sID8gc2xpZGVOYXZTaGFmdC5sIDogbWluTWF4TGltaXQoKG9wdGlvbnMuY29vIHx8IG1lYXN1cmVzLm53IC8gMikgLSBnZXROYXZGcmFtZUJvdW5kcygkZ3Vlc3NOYXZGcmFtZSkuYywgbWluTWF4Lm1pbiwgbWluTWF4Lm1heCkpLFxuICAgICAgICAgIHBvcyA9IG92ZXJmbG93RkxBRyAmJiBtaW5NYXhMaW1pdChsLCBuYXZTaGFmdFRvdWNoVGFpbC5taW4sIG5hdlNoYWZ0VG91Y2hUYWlsLm1heCksXG4gICAgICAgICAgdGltZSA9IG9wdGlvbnMudGltZSAqIDEuMTtcblxuICAgICAgc2xpZGUoJG5hdlNoYWZ0LCB7XG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIHBvczogcG9zIHx8IDAsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGh1bWJzRHJhdyhwb3MsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9pZiAodGltZSkgdGh1bWJzRHJhdyhwb3MpO1xuXG4gICAgICBzZXRTaGFkb3coJG5hdiwgZmluZFNoYWRvd0VkZ2UocG9zLCBuYXZTaGFmdFRvdWNoVGFpbC5taW4sIG5hdlNoYWZ0VG91Y2hUYWlsLm1heCkpO1xuICAgICAgc2xpZGVOYXZTaGFmdC5sID0gbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBuYXZVcGRhdGUgKCkge1xuICAgIGRlYWN0aXZhdGVGcmFtZXMobmF2RnJhbWVLZXkpO1xuICAgIHRvRGVhY3RpdmF0ZVtuYXZGcmFtZUtleV0ucHVzaChhY3RpdmVGcmFtZVtuYXZGcmFtZUtleV0uYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGVGcmFtZXMgKGtleSkge1xuICAgIHZhciBfdG9EZWFjdGl2YXRlID0gdG9EZWFjdGl2YXRlW2tleV07XG5cbiAgICB3aGlsZSAoX3RvRGVhY3RpdmF0ZS5sZW5ndGgpIHtcbiAgICAgIF90b0RlYWN0aXZhdGUuc2hpZnQoKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGV0YWNoRnJhbWVzIChrZXkpIHtcbiAgICB2YXIgX3RvRGV0YWNoID0gdG9EZXRhY2hba2V5XTtcblxuICAgIC8vLy8vL2NvbnNvbGUubG9nKCdfdG9EZXRhY2gnLCBfdG9EZXRhY2gpO1xuICAgIC8vLy8vL2NvbnNvbGUubG9nKCdhY3RpdmVJbmRleGVzJywgYWN0aXZlSW5kZXhlcyk7XG5cbiAgICAkLmVhY2goYWN0aXZlSW5kZXhlcywgZnVuY3Rpb24gKGksIGluZGV4KSB7XG4gICAgICBkZWxldGUgX3RvRGV0YWNoW25vcm1hbGl6ZUluZGV4KGluZGV4KV07XG4gICAgfSk7XG5cbiAgICAkLmVhY2goX3RvRGV0YWNoLCBmdW5jdGlvbiAoaW5kZXgsICRmcmFtZSkge1xuICAgICAgZGVsZXRlIF90b0RldGFjaFtpbmRleF07XG4gICAgICAvLy8vLy9jb25zb2xlLmxvZygnRGV0YWNoJywgaW5kZXgpO1xuICAgICAgJGZyYW1lLmRldGFjaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhZ2VTaGFmdFJlcG9zaXRpb24gKHNraXBPbkVuZCkge1xuXG4gICAgcmVwb3NpdGlvbkluZGV4ID0gZGlydHlJbmRleCA9IGFjdGl2ZUluZGV4O1xuXG4gICAgdmFyICRmcmFtZSA9IGFjdGl2ZUZyYW1lW1NUQUdFX0ZSQU1FX0tFWV07XG5cbiAgICBpZiAoJGZyYW1lKSB7XG4gICAgICBkZWFjdGl2YXRlRnJhbWVzKFNUQUdFX0ZSQU1FX0tFWSk7XG4gICAgICB0b0RlYWN0aXZhdGVbU1RBR0VfRlJBTUVfS0VZXS5wdXNoKCRmcmFtZS5hZGRDbGFzcyhhY3RpdmVDbGFzcykpO1xuXG4gICAgICBza2lwT25FbmQgfHwgdGhhdC5zaG93Lm9uRW5kKHRydWUpO1xuICAgICAgc3RvcCgkc3RhZ2VTaGFmdCwgMCwgdHJ1ZSk7XG5cbiAgICAgIGRldGFjaEZyYW1lcyhTVEFHRV9GUkFNRV9LRVkpO1xuICAgICAgc3RhZ2VGcmFtZVBvc2l0aW9uKGFjdGl2ZUluZGV4ZXMpO1xuICAgICAgc2V0U3RhZ2VTaGFmdE1pbm1heEFuZFNuYXAoKTtcbiAgICAgIHNldE5hdlNoYWZ0TWluTWF4KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kTWVhc3VyZXMgKG9wdGlvbnMsIG1lYXN1cmVzQXJyYXkpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybjtcblxuICAgICQuZWFjaChtZWFzdXJlc0FycmF5LCBmdW5jdGlvbiAoaSwgbWVhc3VyZXMpIHtcbiAgICAgIGlmICghbWVhc3VyZXMpIHJldHVybjtcblxuICAgICAgJC5leHRlbmQobWVhc3VyZXMsIHtcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGggfHwgbWVhc3VyZXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXG4gICAgICAgIG1pbndpZHRoOiBvcHRpb25zLm1pbndpZHRoLFxuICAgICAgICBtYXh3aWR0aDogb3B0aW9ucy5tYXh3aWR0aCxcbiAgICAgICAgbWluaGVpZ2h0OiBvcHRpb25zLm1pbmhlaWdodCxcbiAgICAgICAgbWF4aGVpZ2h0OiBvcHRpb25zLm1heGhlaWdodCxcbiAgICAgICAgcmF0aW86IGdldFJhdGlvKG9wdGlvbnMucmF0aW8pXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlckV2ZW50IChldmVudCwgZXh0cmEpIHtcbiAgICAkZm90b3JhbWEudHJpZ2dlcihfZm90b3JhbWFDbGFzcyArICc6JyArIGV2ZW50LCBbdGhhdCwgZXh0cmFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydCAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KG9uVG91Y2hFbmQudCk7XG4gICAgdG91Y2hlZEZMQUcgPSAxO1xuXG4gICAgaWYgKG9wdHMuc3RvcGF1dG9wbGF5b250b3VjaCkge1xuICAgICAgdGhhdC5zdG9wQXV0b3BsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF1c2VkQXV0b3BsYXlGTEFHID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoRW5kICgpIHtcbiAgICBpZiAoIXRvdWNoZWRGTEFHKSByZXR1cm47XG4gICAgaWYgKCFvcHRzLnN0b3BhdXRvcGxheW9udG91Y2gpIHtcbiAgICAgIHJlbGVhc2VBdXRvcGxheSgpO1xuICAgICAgY2hhbmdlQXV0b3BsYXkoKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kLnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvdWNoZWRGTEFHID0gMDtcbiAgICB9LCBUUkFOU0lUSU9OX0RVUkFUSU9OICsgVE9VQ0hfVElNRU9VVCk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCdvblRvdWNoRW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxlYXNlQXV0b3BsYXkgKCkge1xuICAgIC8vLy9jb25zb2xlLmxvZygncmVsZWFzZUF1dG9wbGF5Jyk7XG4gICAgcGF1c2VkQXV0b3BsYXlGTEFHID0gISEoJHZpZGVvUGxheWluZyB8fCBzdG9wcGVkQXV0b3BsYXlGTEFHKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUF1dG9wbGF5ICgpIHtcbiAgICAvLy8vY29uc29sZS5sb2coJ2NoYW5nZUF1dG9wbGF5Jyk7XG5cbiAgICBjbGVhclRpbWVvdXQoY2hhbmdlQXV0b3BsYXkudCk7XG4gICAgd2FpdEZvci5zdG9wKGNoYW5nZUF1dG9wbGF5LncpO1xuXG4gICAgaWYgKCFvcHRzLmF1dG9wbGF5IHx8IHBhdXNlZEF1dG9wbGF5RkxBRykge1xuICAgICAgaWYgKHRoYXQuYXV0b3BsYXkpIHtcbiAgICAgICAgdGhhdC5hdXRvcGxheSA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoJ3N0b3BhdXRvcGxheScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8vL2NvbnNvbGUubG9nKCdjaGFuZ2VBdXRvcGxheSBjb250aW51ZScpO1xuXG4gICAgaWYgKCF0aGF0LmF1dG9wbGF5KSB7XG4gICAgICB0aGF0LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIHRyaWdnZXJFdmVudCgnc3RhcnRhdXRvcGxheScpO1xuICAgIH1cblxuICAgIHZhciBfYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcblxuXG4gICAgdmFyIGZyYW1lRGF0YSA9IGFjdGl2ZUZyYW1lW1NUQUdFX0ZSQU1FX0tFWV0uZGF0YSgpO1xuICAgIGNoYW5nZUF1dG9wbGF5LncgPSB3YWl0Rm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vLy9jb25zb2xlLmxvZygnd2FpdCBmb3IgdGhlIHN0YXRlIG9mIHRoZSBjdXJyZW50IGZyYW1lJyk7XG4gICAgICByZXR1cm4gZnJhbWVEYXRhLnN0YXRlIHx8IF9hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXg7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8vL2NvbnNvbGUubG9nKCd0aGUgY3VycmVudCBmcmFtZSBpcyByZWFkeScpO1xuICAgICAgY2hhbmdlQXV0b3BsYXkudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLy8vY29uc29sZS5sb2coJ2NoYW5nZUF1dG9wbGF5LnQgc2V0VGltZW91dCcsIHBhdXNlZEF1dG9wbGF5RkxBRywgX2FjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCk7XG4gICAgICAgIGlmIChwYXVzZWRBdXRvcGxheUZMQUcgfHwgX2FjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBfbmV4dEF1dG9wbGF5SW5kZXggPSBuZXh0QXV0b3BsYXlJbmRleCxcbiAgICAgICAgICAgIG5leHRGcmFtZURhdGEgPSBkYXRhW19uZXh0QXV0b3BsYXlJbmRleF1bU1RBR0VfRlJBTUVfS0VZXS5kYXRhKCk7XG5cbiAgICAgICAgY2hhbmdlQXV0b3BsYXkudyA9IHdhaXRGb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vLy9jb25zb2xlLmxvZygnd2FpdCBmb3IgdGhlIHN0YXRlIG9mIHRoZSBuZXh0IGZyYW1lJyk7XG4gICAgICAgICAgcmV0dXJuIG5leHRGcmFtZURhdGEuc3RhdGUgfHwgX25leHRBdXRvcGxheUluZGV4ICE9PSBuZXh0QXV0b3BsYXlJbmRleDtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChwYXVzZWRBdXRvcGxheUZMQUcgfHwgX25leHRBdXRvcGxheUluZGV4ICE9PSBuZXh0QXV0b3BsYXlJbmRleCkgcmV0dXJuO1xuICAgICAgICAgIHRoYXQuc2hvdyhvX2xvb3AgPyBnZXREaXJlY3Rpb25TaWduKCFvX3J0bCkgOiBuZXh0QXV0b3BsYXlJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgb3B0cy5hdXRvcGxheSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHRoYXQuc3RhcnRBdXRvcGxheSA9IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgIGlmICh0aGF0LmF1dG9wbGF5KSByZXR1cm4gdGhpcztcbiAgICBwYXVzZWRBdXRvcGxheUZMQUcgPSBzdG9wcGVkQXV0b3BsYXlGTEFHID0gZmFsc2U7XG4gICAgc2V0QXV0b3BsYXlJbnRlcnZhbChpbnRlcnZhbCB8fCBvcHRzLmF1dG9wbGF5KTtcbiAgICBjaGFuZ2VBdXRvcGxheSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhhdC5zdG9wQXV0b3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoYXQuYXV0b3BsYXkpIHtcbiAgICAgIHBhdXNlZEF1dG9wbGF5RkxBRyA9IHN0b3BwZWRBdXRvcGxheUZMQUcgPSB0cnVlO1xuICAgICAgY2hhbmdlQXV0b3BsYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhhdC5zaG93ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLy8vY29uc29sZS5sb2coJ3RoYXQuc2hvdycpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgndGhhdC5zaG93IHByZXBhcmUnKTtcbiAgICB2YXIgaW5kZXg7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICBpbmRleCA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gb3B0aW9ucy5pbmRleDtcbiAgICB9XG5cbiAgICBpbmRleCA9IGluZGV4ID09PSAnPicgPyBkaXJ0eUluZGV4ICsgMSA6IGluZGV4ID09PSAnPCcgPyBkaXJ0eUluZGV4IC0gMSA6IGluZGV4ID09PSAnPDwnID8gMCA6IGluZGV4ID09PSAnPj4nID8gc2l6ZSAtIDEgOiBpbmRleDtcbiAgICBpbmRleCA9IGlzTmFOKGluZGV4KSA/IGdldEluZGV4RnJvbUhhc2goaW5kZXgsIGRhdGEsIHRydWUpIDogaW5kZXg7XG4gICAgaW5kZXggPSB0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnID8gYWN0aXZlSW5kZXggfHwgMCA6IGluZGV4O1xuXG4gICAgdGhhdC5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ID0gZWRnZUluZGV4KGluZGV4KTtcbiAgICBwcmV2SW5kZXggPSBnZXRQcmV2SW5kZXgoYWN0aXZlSW5kZXgpO1xuICAgIG5leHRJbmRleCA9IGdldE5leHRJbmRleChhY3RpdmVJbmRleCk7XG4gICAgbmV4dEF1dG9wbGF5SW5kZXggPSBub3JtYWxpemVJbmRleChhY3RpdmVJbmRleCArIChvX3J0bCA/IC0xIDogMSkpO1xuICAgIGFjdGl2ZUluZGV4ZXMgPSBbYWN0aXZlSW5kZXgsIHByZXZJbmRleCwgbmV4dEluZGV4XTtcblxuICAgIGRpcnR5SW5kZXggPSBvX2xvb3AgPyBpbmRleCA6IGFjdGl2ZUluZGV4O1xuXG4gICAgdmFyIGRpZmZJbmRleCA9IE1hdGguYWJzKGxhc3RBY3RpdmVJbmRleCAtIGRpcnR5SW5kZXgpLFxuICAgICAgICB0aW1lID0gZ2V0TnVtYmVyKG9wdGlvbnMudGltZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1pbihvX3RyYW5zaXRpb25EdXJhdGlvbiAqICgxICsgKGRpZmZJbmRleCAtIDEpIC8gMTIpLCBvX3RyYW5zaXRpb25EdXJhdGlvbiAqIDIpO1xuICAgICAgICB9KSxcbiAgICAgICAgb3ZlclBvcyA9IG9wdGlvbnMub3ZlclBvcztcblxuICAgIGlmIChvcHRpb25zLnNsb3cpIHRpbWUgKj0gMTA7XG5cbiAgICB2YXIgX2FjdGl2ZUZyYW1lID0gYWN0aXZlRnJhbWU7XG4gICAgdGhhdC5hY3RpdmVGcmFtZSA9IGFjdGl2ZUZyYW1lID0gZGF0YVthY3RpdmVJbmRleF07XG4gICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCd0aGF0LnNob3cgcHJlcGFyZScpO1xuXG4gICAgdmFyIHNpbGVudCA9IF9hY3RpdmVGcmFtZSA9PT0gYWN0aXZlRnJhbWUgJiYgIW9wdGlvbnMudXNlcjtcblxuICAgIC8vc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgLy8vLy8vY29uc29sZS50aW1lKCd1bmxvYWRWaWRlbycpO1xuICAgIHVubG9hZFZpZGVvKCR2aWRlb1BsYXlpbmcsIGFjdGl2ZUZyYW1lLmkgIT09IGRhdGFbbm9ybWFsaXplSW5kZXgocmVwb3NpdGlvbkluZGV4KV0uaSk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCd1bmxvYWRWaWRlbycpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgnZnJhbWVEcmF3Jyk7XG4gICAgZnJhbWVEcmF3KGFjdGl2ZUluZGV4ZXMsICdzdGFnZScpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnZnJhbWVEcmF3Jyk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lKCdzdGFnZUZyYW1lUG9zaXRpb24nKTtcbiAgICBzdGFnZUZyYW1lUG9zaXRpb24oU0xPVyA/IFtkaXJ0eUluZGV4XSA6IFtkaXJ0eUluZGV4LCBnZXRQcmV2SW5kZXgoZGlydHlJbmRleCksIGdldE5leHRJbmRleChkaXJ0eUluZGV4KV0pO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnc3RhZ2VGcmFtZVBvc2l0aW9uJyk7XG4gICAgLy8vLy8vY29uc29sZS50aW1lKCd1cGRhdGVUb3VjaFRhaWxzJyk7XG4gICAgdXBkYXRlVG91Y2hUYWlscygnZ28nLCB0cnVlKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3VwZGF0ZVRvdWNoVGFpbHMnKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3RyaWdnZXJFdmVudCcpO1xuXG4gICAgc2lsZW50IHx8IHRyaWdnZXJFdmVudCgnc2hvdycsIHtcbiAgICAgIHVzZXI6IG9wdGlvbnMudXNlcixcbiAgICAgIHRpbWU6IHRpbWVcbiAgICB9KTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3RyaWdnZXJFdmVudCcpO1xuICAgIC8vfSwgMCk7XG5cbiAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ2JpbmQgb25FbmQnKTtcblxuICAgIHBhdXNlZEF1dG9wbGF5RkxBRyA9IHRydWU7XG5cbiAgICB2YXIgb25FbmQgPSB0aGF0LnNob3cub25FbmQgPSBmdW5jdGlvbiAoc2tpcFJlcG9zaXRpb24pIHtcbiAgICAgIGlmIChvbkVuZC5vaykgcmV0dXJuO1xuICAgICAgb25FbmQub2sgPSB0cnVlO1xuXG4gICAgICBza2lwUmVwb3NpdGlvbiB8fCBzdGFnZVNoYWZ0UmVwb3NpdGlvbih0cnVlKTtcblxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KCdzaG93ZW5kJywge1xuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8vL2NvbnNvbGUubG9nKCdvX3RyYW5zaXRpb24nLCBvX3RyYW5zaXRpb24pO1xuXG4gICAgICBpZiAoIXNraXBSZXBvc2l0aW9uICYmIG9fdHJhbnNpdGlvbiAmJiBvX3RyYW5zaXRpb24gIT09IG9wdHMudHJhbnNpdGlvbikge1xuICAgICAgICAvLy8vY29uc29sZS5sb2coJ3NldCB0cmFuc2l0aW9uIGJhY2sgdG86ICcgKyBvX3RyYW5zaXRpb24pO1xuICAgICAgICB0aGF0LnNldE9wdGlvbnMoe3RyYW5zaXRpb246IG9fdHJhbnNpdGlvbn0pO1xuICAgICAgICBvX3RyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVGb3RvcmFtYVN0YXRlKCk7XG4gICAgICBsb2FkSW1nKGFjdGl2ZUluZGV4ZXMsICdzdGFnZScpO1xuXG4gICAgICB1cGRhdGVUb3VjaFRhaWxzKCdnbycsIGZhbHNlKTtcbiAgICAgIHN0YWdlV2hlZWxVcGRhdGUoKTtcblxuICAgICAgc3RhZ2VDdXJzb3IoKTtcbiAgICAgIHJlbGVhc2VBdXRvcGxheSgpO1xuICAgICAgY2hhbmdlQXV0b3BsYXkoKTtcbiAgICB9O1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnYmluZCBvbkVuZCcpO1xuXG4gICAgaWYgKCFvX2ZhZGUpIHtcbiAgICAgIC8vLy8vL2NvbnNvbGUudGltZSgnc2xpZGUnKTtcbiAgICAgIHNsaWRlKCRzdGFnZVNoYWZ0LCB7XG4gICAgICAgIHBvczogLWdldFBvc0J5SW5kZXgoZGlydHlJbmRleCwgbWVhc3VyZXMudywgb3B0cy5tYXJnaW4sIHJlcG9zaXRpb25JbmRleCksXG4gICAgICAgIG92ZXJQb3M6IG92ZXJQb3MsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIG9uRW5kOiBvbkVuZC8qLFxuICAgICAgICBfMDAxOiB0cnVlKi9cbiAgICAgIH0pO1xuICAgICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCdzbGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgJGFjdGl2ZUZyYW1lID0gYWN0aXZlRnJhbWVbU1RBR0VfRlJBTUVfS0VZXSxcbiAgICAgICAgICAkcHJldkFjdGl2ZUZyYW1lID0gYWN0aXZlSW5kZXggIT09IGxhc3RBY3RpdmVJbmRleCA/IGRhdGFbbGFzdEFjdGl2ZUluZGV4XVtTVEFHRV9GUkFNRV9LRVldIDogbnVsbDtcblxuICAgICAgZmFkZSgkYWN0aXZlRnJhbWUsICRwcmV2QWN0aXZlRnJhbWUsICRzdGFnZUZyYW1lLCB7XG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIG1ldGhvZDogb3B0cy50cmFuc2l0aW9uLFxuICAgICAgICBvbkVuZDogb25FbmRcbiAgICAgIH0sIGZhZGVTdGFjayk7XG4gICAgfVxuXG4gICAgLy8vLy8vY29uc29sZS50aW1lKCdhcnJzVXBkYXRlJyk7XG4gICAgYXJyc1VwZGF0ZSgpO1xuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnYXJyc1VwZGF0ZScpO1xuXG4gICAgaWYgKG9fbmF2KSB7XG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ25hdlVwZGF0ZScpO1xuICAgICAgbmF2VXBkYXRlKCk7XG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ25hdlVwZGF0ZScpO1xuXG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3NsaWRlTmF2U2hhZnQnKTtcbiAgICAgIHZhciBndWVzc0luZGV4ID0gbGltaXRJbmRleChhY3RpdmVJbmRleCArIG1pbk1heExpbWl0KGRpcnR5SW5kZXggLSBsYXN0QWN0aXZlSW5kZXgsIC0xLCAxKSk7XG4gICAgICBzbGlkZU5hdlNoYWZ0KHt0aW1lOiB0aW1lLCBjb286IGd1ZXNzSW5kZXggIT09IGFjdGl2ZUluZGV4ICYmIG9wdGlvbnMuY29vLCBndWVzc0luZGV4OiB0eXBlb2Ygb3B0aW9ucy5jb28gIT09ICd1bmRlZmluZWQnID8gZ3Vlc3NJbmRleCA6IGFjdGl2ZUluZGV4LCBrZWVwOiBzaWxlbnR9KTtcbiAgICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnc2xpZGVOYXZTaGFmdCcpO1xuXG4gICAgICAvLy8vLy9jb25zb2xlLnRpbWUoJ3NsaWRlVGh1bWJCb3JkZXInKTtcbiAgICAgIGlmIChvX25hdlRodW1icykgc2xpZGVUaHVtYkJvcmRlcih0aW1lKTtcbiAgICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnc2xpZGVUaHVtYkJvcmRlcicpO1xuICAgIH1cblxuICAgIC8vLy8vL2NvbnNvbGUudGltZSgndGhhdC5zaG93IGVuZCcpO1xuICAgIHNob3dlZEZMQUcgPSB0eXBlb2YgbGFzdEFjdGl2ZUluZGV4ICE9PSAndW5kZWZpbmVkJyAmJiBsYXN0QWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4O1xuICAgIGxhc3RBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIG9wdHMuaGFzaCAmJiBzaG93ZWRGTEFHICYmICF0aGF0LmVxICYmIHNldEhhc2goYWN0aXZlRnJhbWUuaWQgfHwgYWN0aXZlSW5kZXggKyAxKTtcbiAgICAvLy8vLy9jb25zb2xlLnRpbWVFbmQoJ3RoYXQuc2hvdyBlbmQnKTtcblxuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgndGhhdC5zaG93Jyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGF0LnJlcXVlc3RGdWxsU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChvX2FsbG93RnVsbFNjcmVlbiAmJiAhdGhhdC5mdWxsU2NyZWVuKSB7XG4gICAgICBzY3JvbGxUb3AgPSAkV0lORE9XLnNjcm9sbFRvcCgpO1xuICAgICAgc2Nyb2xsTGVmdCA9ICRXSU5ET1cuc2Nyb2xsTGVmdCgpO1xuXG4gICAgICBsb2NrU2Nyb2xsKCRXSU5ET1cpO1xuXG4gICAgICB1cGRhdGVUb3VjaFRhaWxzKCd4JywgdHJ1ZSk7XG5cbiAgICAgIG1lYXN1cmVzU3Rhc2ggPSAkLmV4dGVuZCh7fSwgbWVhc3VyZXMpO1xuXG4gICAgICAkZm90b3JhbWFcbiAgICAgICAgICAuYWRkQ2xhc3MoZnVsbHNjcmVlbkNsYXNzKVxuICAgICAgICAgIC5hcHBlbmRUbygkQk9EWS5hZGRDbGFzcyhfZnVsbHNjcmVlbkNsYXNzKSk7XG5cbiAgICAgICRIVE1MLmFkZENsYXNzKF9mdWxsc2NyZWVuQ2xhc3MpO1xuXG4gICAgICB1bmxvYWRWaWRlbygkdmlkZW9QbGF5aW5nLCB0cnVlLCB0cnVlKTtcblxuICAgICAgdGhhdC5mdWxsU2NyZWVuID0gdHJ1ZTtcblxuICAgICAgaWYgKG9fbmF0aXZlRnVsbFNjcmVlbikge1xuICAgICAgICBmdWxsU2NyZWVuQXBpLnJlcXVlc3QoZm90b3JhbWEpO1xuICAgICAgfVxuXG4gICAgICB0aGF0LnJlc2l6ZSgpO1xuICAgICAgbG9hZEltZyhhY3RpdmVJbmRleGVzLCAnc3RhZ2UnKTtcbiAgICAgIHVwZGF0ZUZvdG9yYW1hU3RhdGUoKTtcblxuICAgICAgdHJpZ2dlckV2ZW50KCdmdWxsc2NyZWVuZW50ZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBmdW5jdGlvbiBjYW5jZWxGdWxsU2NyZWVuICgpIHtcbiAgICBpZiAodGhhdC5mdWxsU2NyZWVuKSB7XG4gICAgICB0aGF0LmZ1bGxTY3JlZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKEZVTExTQ1JFRU4pIHtcbiAgICAgICAgZnVsbFNjcmVlbkFwaS5jYW5jZWwoZm90b3JhbWEpO1xuICAgICAgfVxuXG4gICAgICAkQk9EWS5yZW1vdmVDbGFzcyhfZnVsbHNjcmVlbkNsYXNzKTtcbiAgICAgICRIVE1MLnJlbW92ZUNsYXNzKF9mdWxsc2NyZWVuQ2xhc3MpO1xuXG4gICAgICAkZm90b3JhbWFcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoZnVsbHNjcmVlbkNsYXNzKVxuICAgICAgICAgIC5pbnNlcnRBZnRlcigkYW5jaG9yKTtcblxuICAgICAgbWVhc3VyZXMgPSAkLmV4dGVuZCh7fSwgbWVhc3VyZXNTdGFzaCk7XG5cbiAgICAgIHVubG9hZFZpZGVvKCR2aWRlb1BsYXlpbmcsIHRydWUsIHRydWUpO1xuXG4gICAgICB1cGRhdGVUb3VjaFRhaWxzKCd4JywgZmFsc2UpO1xuXG4gICAgICB0aGF0LnJlc2l6ZSgpO1xuICAgICAgbG9hZEltZyhhY3RpdmVJbmRleGVzLCAnc3RhZ2UnKTtcblxuICAgICAgbG9ja1Njcm9sbCgkV0lORE9XLCBzY3JvbGxMZWZ0LCBzY3JvbGxUb3ApO1xuXG4gICAgICB0cmlnZ2VyRXZlbnQoJ2Z1bGxzY3JlZW5leGl0Jyk7XG4gICAgfVxuICB9XG5cbiAgdGhhdC5jYW5jZWxGdWxsU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChvX25hdGl2ZUZ1bGxTY3JlZW4gJiYgZnVsbFNjcmVlbkFwaS5pcygpKSB7XG4gICAgICBmdWxsU2NyZWVuQXBpLmNhbmNlbChkb2N1bWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGF0LnRvZ2dsZUZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoYXRbKHRoYXQuZnVsbFNjcmVlbiA/ICdjYW5jZWwnIDogJ3JlcXVlc3QnKSArICdGdWxsU2NyZWVuJ10oKTtcbiAgfTtcblxuICBhZGRFdmVudChkb2N1bWVudCwgZnVsbFNjcmVlbkFwaS5ldmVudCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChkYXRhICYmICFmdWxsU2NyZWVuQXBpLmlzKCkgJiYgISR2aWRlb1BsYXlpbmcpIHtcbiAgICAgIGNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRoYXQucmVzaXplID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHRpbWUgPSBhcmd1bWVudHNbMV0gfHwgMCxcbiAgICAgICAgc2V0RkxBRyA9IGFyZ3VtZW50c1syXTtcblxuICAgIGV4dGVuZE1lYXN1cmVzKCF0aGF0LmZ1bGxTY3JlZW4gPyBvcHRpb25zVG9Mb3dlckNhc2Uob3B0aW9ucykgOiB7d2lkdGg6ICcxMDAlJywgbWF4d2lkdGg6IG51bGwsIG1pbndpZHRoOiBudWxsLCBoZWlnaHQ6ICcxMDAlJywgbWF4aGVpZ2h0OiBudWxsLCBtaW5oZWlnaHQ6IG51bGx9LCBbbWVhc3VyZXMsIHNldEZMQUcgfHwgdGhhdC5mdWxsU2NyZWVuIHx8IG9wdHNdKTtcblxuICAgIHZhciB3aWR0aCA9IG1lYXN1cmVzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBtZWFzdXJlcy5oZWlnaHQsXG4gICAgICAgIHJhdGlvID0gbWVhc3VyZXMucmF0aW8sXG4gICAgICAgIHdpbmRvd0hlaWdodCA9ICRXSU5ET1cuaGVpZ2h0KCkgLSAob19uYXYgPyAkbmF2LmhlaWdodCgpIDogMCk7XG5cbiAgICBpZiAobWVhc3VyZUlzVmFsaWQod2lkdGgpKSB7XG4gICAgICAkd3JhcFxuICAgICAgICAgIC5hZGRDbGFzcyh3cmFwT25seUFjdGl2ZUNsYXNzKVxuICAgICAgICAgIC5jc3Moe3dpZHRoOiB3aWR0aCwgbWluV2lkdGg6IG1lYXN1cmVzLm1pbndpZHRoIHx8IDAsIG1heFdpZHRoOiBtZWFzdXJlcy5tYXh3aWR0aCB8fCBNQVhfV0lEVEh9KTtcblxuICAgICAgd2lkdGggPSBtZWFzdXJlcy5XID0gbWVhc3VyZXMudyA9ICR3cmFwLndpZHRoKCk7XG4gICAgICBtZWFzdXJlcy5udyA9IG9fbmF2ICYmIG51bWJlckZyb21XaGF0ZXZlcihvcHRzLm5hdndpZHRoLCB3aWR0aCkgfHwgd2lkdGg7XG5cbiAgICAgIGlmIChvcHRzLmdsaW1wc2UpIHtcbiAgICAgICAgLy8gR2xpbXBzZVxuICAgICAgICBtZWFzdXJlcy53IC09IE1hdGgucm91bmQoKG51bWJlckZyb21XaGF0ZXZlcihvcHRzLmdsaW1wc2UsIHdpZHRoKSB8fCAwKSAqIDIpO1xuICAgICAgfVxuXG4gICAgICAkc3RhZ2VTaGFmdC5jc3Moe3dpZHRoOiBtZWFzdXJlcy53LCBtYXJnaW5MZWZ0OiAobWVhc3VyZXMuVyAtIG1lYXN1cmVzLncpIC8gMn0pO1xuXG4gICAgICAvLy8vLy9jb25zb2xlLmxvZygnbWVhc3VyZXMuVycsIG1lYXN1cmVzLlcpO1xuICAgICAgLy8vLy8vY29uc29sZS5sb2coJ21lYXN1cmVzLncnLCBtZWFzdXJlcy53KTtcblxuICAgICAgaGVpZ2h0ID0gbnVtYmVyRnJvbVdoYXRldmVyKGhlaWdodCwgd2luZG93SGVpZ2h0KTtcblxuICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IChyYXRpbyAmJiB3aWR0aCAvIHJhdGlvKTtcblxuICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICBoZWlnaHQgPSBtZWFzdXJlcy5oID0gTWF0aC5yb3VuZChtaW5NYXhMaW1pdChoZWlnaHQsIG51bWJlckZyb21XaGF0ZXZlcihtZWFzdXJlcy5taW5oZWlnaHQsIHdpbmRvd0hlaWdodCksIG51bWJlckZyb21XaGF0ZXZlcihtZWFzdXJlcy5tYXhoZWlnaHQsIHdpbmRvd0hlaWdodCkpKTtcblxuICAgICAgICAkc3RhZ2VcbiAgICAgICAgICAgIC5zdG9wKClcbiAgICAgICAgICAgIC5hbmltYXRlKHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fSwgdGltZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkd3JhcC5yZW1vdmVDbGFzcyh3cmFwT25seUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHN0YWdlU2hhZnRSZXBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKG9fbmF2KSB7XG4gICAgICAgICAgJG5hdlxuICAgICAgICAgICAgICAuc3RvcCgpXG4gICAgICAgICAgICAgIC5hbmltYXRlKHt3aWR0aDogbWVhc3VyZXMubnd9LCB0aW1lKTtcblxuICAgICAgICAgIHNsaWRlTmF2U2hhZnQoe2d1ZXNzSW5kZXg6IGFjdGl2ZUluZGV4LCB0aW1lOiB0aW1lLCBrZWVwOiB0cnVlfSk7XG4gICAgICAgICAgaWYgKG9fbmF2VGh1bWJzICYmIGZyYW1lQXBwZW5kLm5hdikgc2xpZGVUaHVtYkJvcmRlcih0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lYXN1cmVzU2V0RkxBRyA9IHNldEZMQUcgfHwgdHJ1ZTtcblxuICAgICAgICByZWFkeSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YWdlTGVmdCA9ICRzdGFnZS5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhhdC5zZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAkLmV4dGVuZChvcHRzLCBvcHRpb25zKTtcbiAgICByZXNldCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHRoYXQuc2h1ZmZsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBkYXRhICYmIHNodWZmbGUoZGF0YSkgJiYgcmVzZXQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRTaGFkb3cgKCRlbCwgZWRnZSkge1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgnc2V0U2hhZG93Jyk7XG4gICAgaWYgKG9fc2hhZG93cykge1xuICAgICAgJGVsLnJlbW92ZUNsYXNzKHNoYWRvd3NMZWZ0Q2xhc3MgKyAnICcgKyBzaGFkb3dzUmlnaHRDbGFzcyk7XG4gICAgICBlZGdlICYmICEkdmlkZW9QbGF5aW5nICYmICRlbC5hZGRDbGFzcyhlZGdlLnJlcGxhY2UoL158XFxzL2csICcgJyArIHNoYWRvd3NDbGFzcyArICctLScpKTtcbiAgICB9XG4gICAgLy8vLy8vY29uc29sZS50aW1lRW5kKCdzZXRTaGFkb3cnKTtcbiAgfVxuXG4gIHRoYXQuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGF0LmNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB0aGF0LnN0b3BBdXRvcGxheSgpO1xuXG4gICAgZGF0YSA9IHRoYXQuZGF0YSA9IG51bGw7XG5cbiAgICBhcHBlbmRFbGVtZW50cygpO1xuXG4gICAgYWN0aXZlSW5kZXhlcyA9IFtdO1xuICAgIGRldGFjaEZyYW1lcyhTVEFHRV9GUkFNRV9LRVkpO1xuXG4gICAgcmVzZXQub2sgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHRoYXQucGxheVZpZGVvID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhRnJhbWUgPSBhY3RpdmVGcmFtZSxcbiAgICAgICAgdmlkZW8gPSBkYXRhRnJhbWUudmlkZW8sXG4gICAgICAgIF9hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuXG4gICAgaWYgKHR5cGVvZiB2aWRlbyA9PT0gJ29iamVjdCcgJiYgZGF0YUZyYW1lLnZpZGVvUmVhZHkpIHtcbiAgICAgIG9fbmF0aXZlRnVsbFNjcmVlbiAmJiB0aGF0LmZ1bGxTY3JlZW4gJiYgdGhhdC5jYW5jZWxGdWxsU2NyZWVuKCk7XG5cbiAgICAgIHdhaXRGb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIWZ1bGxTY3JlZW5BcGkuaXMoKSB8fCBfYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4O1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX2FjdGl2ZUluZGV4ID09PSBhY3RpdmVJbmRleCkge1xuICAgICAgICAgIGRhdGFGcmFtZS4kdmlkZW8gPSBkYXRhRnJhbWUuJHZpZGVvIHx8ICQoJC5Gb3RvcmFtYS5qc3QudmlkZW8odmlkZW8pKTtcbiAgICAgICAgICBkYXRhRnJhbWUuJHZpZGVvLmFwcGVuZFRvKGRhdGFGcmFtZVtTVEFHRV9GUkFNRV9LRVldKTtcblxuICAgICAgICAgICR3cmFwLmFkZENsYXNzKHdyYXBWaWRlb0NsYXNzKTtcbiAgICAgICAgICAkdmlkZW9QbGF5aW5nID0gZGF0YUZyYW1lLiR2aWRlbztcblxuICAgICAgICAgIHN0YWdlTm9Nb3ZlKCk7XG5cbiAgICAgICAgICAkYXJycy5ibHVyKCk7XG4gICAgICAgICAgJGZ1bGxzY3JlZW5JY29uLmJsdXIoKTtcblxuICAgICAgICAgIHRyaWdnZXJFdmVudCgnbG9hZHZpZGVvJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHRoYXQuc3RvcFZpZGVvID0gZnVuY3Rpb24gKCkge1xuICAgIHVubG9hZFZpZGVvKCR2aWRlb1BsYXlpbmcsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVubG9hZFZpZGVvICgkdmlkZW8sIHVubG9hZEFjdGl2ZUZMQUcsIHJlbGVhc2VBdXRvcGxheUZMQUcpIHtcbiAgICBpZiAodW5sb2FkQWN0aXZlRkxBRykge1xuICAgICAgJHdyYXAucmVtb3ZlQ2xhc3Mod3JhcFZpZGVvQ2xhc3MpO1xuICAgICAgJHZpZGVvUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICBzdGFnZU5vTW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkdmlkZW8gJiYgJHZpZGVvICE9PSAkdmlkZW9QbGF5aW5nKSB7XG4gICAgICAkdmlkZW8ucmVtb3ZlKCk7XG4gICAgICB0cmlnZ2VyRXZlbnQoJ3VubG9hZHZpZGVvJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlbGVhc2VBdXRvcGxheUZMQUcpIHtcbiAgICAgIHJlbGVhc2VBdXRvcGxheSgpO1xuICAgICAgY2hhbmdlQXV0b3BsYXkoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVDb250cm9sc0NsYXNzIChGTEFHKSB7XG4gICAgJHdyYXAudG9nZ2xlQ2xhc3Mod3JhcE5vQ29udHJvbHNDbGFzcywgRkxBRyk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFnZUN1cnNvciAoZSkge1xuICAgIGlmIChzdGFnZVNoYWZ0VG91Y2hUYWlsLmZsb3cpIHJldHVybjtcblxuICAgIHZhciB4ID0gZSA/IGUucGFnZVggOiBzdGFnZUN1cnNvci54LFxuICAgICAgICBwb2ludGVyRkxBRyA9IHggJiYgIWRpc2FibGVEaXJyZWN0aW9uKGdldERpcmVjdGlvbih4KSkgJiYgb3B0cy5jbGljaztcblxuICAgIGlmIChzdGFnZUN1cnNvci5wICE9PSBwb2ludGVyRkxBR1xuICAgICAgICAmJiAkc3RhZ2UudG9nZ2xlQ2xhc3MocG9pbnRlckNsYXNzLCBwb2ludGVyRkxBRykpIHtcbiAgICAgIHN0YWdlQ3Vyc29yLnAgPSBwb2ludGVyRkxBRztcbiAgICAgIHN0YWdlQ3Vyc29yLnggPSB4O1xuICAgIH1cbiAgfVxuXG4gICRzdGFnZS5vbignbW91c2Vtb3ZlJywgc3RhZ2VDdXJzb3IpO1xuXG4gIGZ1bmN0aW9uIGNsaWNrVG9TaG93IChzaG93T3B0aW9ucykge1xuICAgIGNsZWFyVGltZW91dChjbGlja1RvU2hvdy50KTtcblxuICAgIGlmIChvcHRzLmNsaWNrdHJhbnNpdGlvbiAmJiBvcHRzLmNsaWNrdHJhbnNpdGlvbiAhPT0gb3B0cy50cmFuc2l0aW9uKSB7XG4gICAgICAvLy8vY29uc29sZS5sb2coJ2NoYW5nZSB0cmFuc2l0aW9uIHRvOiAnICsgb3B0cy5jbGlja3RyYW5zaXRpb24pO1xuXG4gICAgICAvLyB0aGlzIHRpbWVvdXQgaXMgZm9yIHlpZWxkIGV2ZW50cyBmbG93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gc2F2ZSBvcmlnaW5hbCB0cmFuc2l0aW9uIGZvciBsYXRlclxuICAgICAgICB2YXIgX29fdHJhbnNpdGlvbiA9IG9wdHMudHJhbnNpdGlvbjtcblxuICAgICAgICB0aGF0LnNldE9wdGlvbnMoe3RyYW5zaXRpb246IG9wdHMuY2xpY2t0cmFuc2l0aW9ufSk7XG5cbiAgICAgICAgLy8gbm93IHNhZmUgdG8gcGFzcyBiYXNlIHRyYW5zaXRpb24gdG8gb190cmFuc2l0aW9uLCBzbyB0aGF0LnNob3cgd2lsbCByZXN0b3IgaXRcbiAgICAgICAgb190cmFuc2l0aW9uID0gX29fdHJhbnNpdGlvbjtcbiAgICAgICAgLy8gdGhpcyB0aW1lb3V0IGlzIGhlcmUgdG8gcHJldmVudCBqZXJraW5nIGluIHNvbWUgYnJvd3NlcnNcbiAgICAgICAgY2xpY2tUb1Nob3cudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoYXQuc2hvdyhzaG93T3B0aW9ucyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LnNob3coc2hvd09wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3RhZ2VUYXAgKGUsIHRvZ2dsZUNvbnRyb2xzRkxBRykge1xuICAgIC8vLy8vL2NvbnNvbGUudGltZSgnb25TdGFnZVRhcCcpO1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgJHRhcmdldCA9ICQodGFyZ2V0KTtcblxuICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKHZpZGVvUGxheUNsYXNzKSkge1xuICAgICAgdGhhdC5wbGF5VmlkZW8oKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gZnVsbHNjcmVlbkljb24pIHtcbiAgICAgIHRoYXQudG9nZ2xlRnVsbFNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoJHZpZGVvUGxheWluZykge1xuICAgICAgdGFyZ2V0ID09PSB2aWRlb0Nsb3NlICYmIHVubG9hZFZpZGVvKCR2aWRlb1BsYXlpbmcsIHRydWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9nZ2xlQ29udHJvbHNGTEFHKSB7XG4gICAgICAgIHRvZ2dsZUNvbnRyb2xzQ2xhc3MoKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5jbGljaykge1xuXG4gICAgICAgIGNsaWNrVG9TaG93KHtpbmRleDogZS5zaGlmdEtleSB8fCBnZXREaXJlY3Rpb25TaWduKGdldERpcmVjdGlvbihlLl94KSksIHNsb3c6IGUuYWx0S2V5LCB1c2VyOiB0cnVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnb25TdGFnZVRhcCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVG91Y2hUYWlscyAoa2V5LCB2YWx1ZSkge1xuICAgIHN0YWdlU2hhZnRUb3VjaFRhaWxba2V5XSA9IG5hdlNoYWZ0VG91Y2hUYWlsW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHN0YWdlU2hhZnRUb3VjaFRhaWwgPSBtb3ZlT25Ub3VjaCgkc3RhZ2VTaGFmdCwge1xuICAgIG9uU3RhcnQ6IG9uVG91Y2hTdGFydCxcbiAgICBvbk1vdmU6IGZ1bmN0aW9uIChlLCByZXN1bHQpIHtcbiAgICAgIHNldFNoYWRvdygkc3RhZ2UsIHJlc3VsdC5lZGdlKTtcbiAgICB9LFxuICAgIG9uVG91Y2hFbmQ6IG9uVG91Y2hFbmQsXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIC8vLy8vL2NvbnNvbGUudGltZSgnc3RhZ2VTaGFmdFRvdWNoVGFpbC5vbkVuZCcpO1xuICAgICAgc2V0U2hhZG93KCRzdGFnZSk7XG5cbiAgICAgIC8vLy8vL2NvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xuXG4gICAgICB2YXIgdG9nZ2xlQ29udHJvbHNGTEFHID0gKE1TX1BPSU5URVIgJiYgIWhvdmVyRkxBRyB8fCByZXN1bHQudG91Y2gpICYmIG9wdHMuYXJyb3dzICYmIG9wdHMuYXJyb3dzICE9PSAnYWx3YXlzJztcblxuICAgICAgaWYgKHJlc3VsdC5tb3ZlZCB8fCAodG9nZ2xlQ29udHJvbHNGTEFHICYmIHJlc3VsdC5wb3MgIT09IHJlc3VsdC5uZXdQb3MgJiYgIXJlc3VsdC5jb250cm9sKSkge1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5UG9zKHJlc3VsdC5uZXdQb3MsIG1lYXN1cmVzLncsIG9wdHMubWFyZ2luLCByZXBvc2l0aW9uSW5kZXgpO1xuICAgICAgICB0aGF0LnNob3coe1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICB0aW1lOiBvX2ZhZGUgPyBvX3RyYW5zaXRpb25EdXJhdGlvbiA6IHJlc3VsdC50aW1lLFxuICAgICAgICAgIG92ZXJQb3M6IHJlc3VsdC5vdmVyUG9zLFxuICAgICAgICAgIHVzZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFyZXN1bHQuYWJvcnRlZCAmJiAhcmVzdWx0LmNvbnRyb2wpIHtcbiAgICAgICAgb25TdGFnZVRhcChyZXN1bHQuc3RhcnRFdmVudCwgdG9nZ2xlQ29udHJvbHNGTEFHKTtcbiAgICAgIH1cbiAgICAgIC8vLy8vL2NvbnNvbGUudGltZUVuZCgnc3RhZ2VTaGFmdFRvdWNoVGFpbC5vbkVuZCcpO1xuICAgIH0sXG4vLyAgICBnZXRQb3M6IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgcmV0dXJuIC1nZXRQb3NCeUluZGV4KGRpcnR5SW5kZXgsIG1lYXN1cmVzLncsIG9wdHMubWFyZ2luLCByZXBvc2l0aW9uSW5kZXgpO1xuLy8gICAgfSxcbiAgICAvL18wMDE6IHRydWUsXG4gICAgdGltZUxvdzogMSxcbiAgICB0aW1lSGlnaDogMSxcbiAgICBmcmljdGlvbjogMixcbiAgICBzZWxlY3Q6ICcuJyArIHNlbGVjdENsYXNzICsgJywgLicgKyBzZWxlY3RDbGFzcyArICcgKicsXG4gICAgJHdyYXA6ICRzdGFnZVxuICB9KTtcblxuICBuYXZTaGFmdFRvdWNoVGFpbCA9IG1vdmVPblRvdWNoKCRuYXZTaGFmdCwge1xuICAgIG9uU3RhcnQ6IG9uVG91Y2hTdGFydCxcbiAgICBvbk1vdmU6IGZ1bmN0aW9uIChlLCByZXN1bHQpIHtcbiAgICAgIHNldFNoYWRvdygkbmF2LCByZXN1bHQuZWRnZSk7XG4gICAgfSxcbiAgICBvblRvdWNoRW5kOiBvblRvdWNoRW5kLFxuICAgIG9uRW5kOiBmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgIGZ1bmN0aW9uIG9uRW5kICgpIHtcbiAgICAgICAgc2xpZGVOYXZTaGFmdC5sID0gcmVzdWx0Lm5ld1BvcztcbiAgICAgICAgcmVsZWFzZUF1dG9wbGF5KCk7XG4gICAgICAgIGNoYW5nZUF1dG9wbGF5KCk7XG4gICAgICAgIHRodW1ic0RyYXcocmVzdWx0Lm5ld1BvcywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0Lm1vdmVkKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSByZXN1bHQuJHRhcmdldC5jbG9zZXN0KCcuJyArIG5hdkZyYW1lQ2xhc3MsICRuYXZTaGFmdClbMF07XG4gICAgICAgIHRhcmdldCAmJiBvbk5hdkZyYW1lQ2xpY2suY2FsbCh0YXJnZXQsIHJlc3VsdC5zdGFydEV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnBvcyAhPT0gcmVzdWx0Lm5ld1Bvcykge1xuICAgICAgICBwYXVzZWRBdXRvcGxheUZMQUcgPSB0cnVlO1xuICAgICAgICBzbGlkZSgkbmF2U2hhZnQsIHtcbiAgICAgICAgICB0aW1lOiByZXN1bHQudGltZSxcbiAgICAgICAgICBwb3M6IHJlc3VsdC5uZXdQb3MsXG4gICAgICAgICAgb3ZlclBvczogcmVzdWx0Lm92ZXJQb3MsXG4gICAgICAgICAgb25FbmQ6IG9uRW5kXG4gICAgICAgIH0pO1xuICAgICAgICB0aHVtYnNEcmF3KHJlc3VsdC5uZXdQb3MpO1xuICAgICAgICBvX3NoYWRvd3MgJiYgc2V0U2hhZG93KCRuYXYsIGZpbmRTaGFkb3dFZGdlKHJlc3VsdC5uZXdQb3MsIG5hdlNoYWZ0VG91Y2hUYWlsLm1pbiwgbmF2U2hhZnRUb3VjaFRhaWwubWF4KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkVuZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGltZUxvdzogLjUsXG4gICAgdGltZUhpZ2g6IDIsXG4gICAgZnJpY3Rpb246IDUsXG4gICAgJHdyYXA6ICRuYXZcbiAgfSk7XG5cbiAgc3RhZ2VXaGVlbFRhaWwgPSB3aGVlbCgkc3RhZ2UsIHtcbiAgICBzaGlmdDogdHJ1ZSxcbiAgICBvbkVuZDogZnVuY3Rpb24gKGUsIGRpcmVjdGlvbikge1xuICAgICAgLy8vLy8vY29uc29sZS5sb2coJ3doZWVsICRzdGFnZSBvbkVuZCcsIGRpcmVjdGlvbik7XG4gICAgICBvblRvdWNoU3RhcnQoKTtcbiAgICAgIG9uVG91Y2hFbmQoKTtcbiAgICAgIHRoYXQuc2hvdyh7aW5kZXg6IGRpcmVjdGlvbiwgc2xvdzogZS5hbHRLZXl9KVxuICAgIH1cbiAgfSk7XG5cbiAgbmF2V2hlZWxUYWlsID0gd2hlZWwoJG5hdiwge1xuICAgIG9uRW5kOiBmdW5jdGlvbiAoZSwgZGlyZWN0aW9uKSB7XG4gICAgICAvLy8vLy9jb25zb2xlLmxvZygnd2hlZWwgJG5hdiBvbkVuZCcsIGRpcmVjdGlvbik7XG4gICAgICBvblRvdWNoU3RhcnQoKTtcbiAgICAgIG9uVG91Y2hFbmQoKTtcbiAgICAgIHZhciBuZXdQb3MgPSBzdG9wKCRuYXZTaGFmdCkgKyBkaXJlY3Rpb24gKiAuMjU7XG4gICAgICAkbmF2U2hhZnQuY3NzKGdldFRyYW5zbGF0ZShtaW5NYXhMaW1pdChuZXdQb3MsIG5hdlNoYWZ0VG91Y2hUYWlsLm1pbiwgbmF2U2hhZnRUb3VjaFRhaWwubWF4KSkpO1xuICAgICAgb19zaGFkb3dzICYmIHNldFNoYWRvdygkbmF2LCBmaW5kU2hhZG93RWRnZShuZXdQb3MsIG5hdlNoYWZ0VG91Y2hUYWlsLm1pbiwgbmF2U2hhZnRUb3VjaFRhaWwubWF4KSk7XG4gICAgICBuYXZXaGVlbFRhaWwucHJldmVudCA9IHsnPCc6IG5ld1BvcyA+PSBuYXZTaGFmdFRvdWNoVGFpbC5tYXgsICc+JzogbmV3UG9zIDw9IG5hdlNoYWZ0VG91Y2hUYWlsLm1pbn07XG4gICAgICBjbGVhclRpbWVvdXQobmF2V2hlZWxUYWlsLnQpO1xuICAgICAgbmF2V2hlZWxUYWlsLnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVOYXZTaGFmdC5sID0gbmV3UG9zO1xuICAgICAgICB0aHVtYnNEcmF3KG5ld1BvcywgdHJ1ZSlcbiAgICAgIH0sIFRPVUNIX1RJTUVPVVQpO1xuICAgICAgdGh1bWJzRHJhdyhuZXdQb3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgJHdyYXAuaG92ZXIoXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0b3VjaGVkRkxBRykgcmV0dXJuO1xuICAgICAgICAgIHRvZ2dsZUNvbnRyb2xzQ2xhc3MoIShob3ZlckZMQUcgPSB0cnVlKSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWhvdmVyRkxBRykgcmV0dXJuO1xuICAgICAgICB0b2dnbGVDb250cm9sc0NsYXNzKCEoaG92ZXJGTEFHID0gZmFsc2UpKTtcbiAgICAgIH1cbiAgKTtcblxuICBmdW5jdGlvbiBvbk5hdkZyYW1lQ2xpY2sgKGUpIHtcbiAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmRhdGEoKS5lcTtcbiAgICBjbGlja1RvU2hvdyh7aW5kZXg6IGluZGV4LCBzbG93OiBlLmFsdEtleSwgdXNlcjogdHJ1ZSwgY29vOiBlLl94IC0gJG5hdi5vZmZzZXQoKS5sZWZ0fSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkFyckNsaWNrIChlKSB7XG4gICAgY2xpY2tUb1Nob3coe2luZGV4OiAkYXJycy5pbmRleCh0aGlzKSA/ICc+JyA6ICc8Jywgc2xvdzogZS5hbHRLZXksIHVzZXI6IHRydWV9KTtcbiAgfVxuXG4gIHNtYXJ0Q2xpY2soJGFycnMsIGZ1bmN0aW9uIChlKSB7XG4gICAgc3RvcEV2ZW50KGUpO1xuICAgIG9uQXJyQ2xpY2suY2FsbCh0aGlzLCBlKTtcbiAgfSwge1xuICAgIG9uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVG91Y2hTdGFydCgpO1xuICAgICAgc3RhZ2VTaGFmdFRvdWNoVGFpbC5jb250cm9sID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9uVG91Y2hFbmQ6IG9uVG91Y2hFbmRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkRm9jdXNPbkNvbnRyb2xzIChlbCkge1xuICAgIGFkZEZvY3VzKGVsLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9ja1Njcm9sbCgkc3RhZ2UpO1xuICAgICAgfSwgMCk7XG4gICAgICB0b2dnbGVDb250cm9sc0NsYXNzKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gICRhcnJzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGFkZEVudGVyVXAodGhpcywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG9uQXJyQ2xpY2suY2FsbCh0aGlzLCBlKTtcbiAgICB9KTtcbiAgICBhZGRGb2N1c09uQ29udHJvbHModGhpcyk7XG4gIH0pO1xuXG4gIGFkZEVudGVyVXAoZnVsbHNjcmVlbkljb24sIHRoYXQudG9nZ2xlRnVsbFNjcmVlbik7XG4gIGFkZEZvY3VzT25Db250cm9scyhmdWxsc2NyZWVuSWNvbik7XG5cbiAgZnVuY3Rpb24gcmVzZXQgKCkge1xuICAgIHNldERhdGEoKTtcbiAgICBzZXRPcHRpb25zKCk7XG5cbiAgICBpZiAoIXJlc2V0LmkpIHtcbiAgICAgIHJlc2V0LmkgPSB0cnVlO1xuICAgICAgLy8gT25seSBvbmNlXG4gICAgICB2YXIgX3N0YXJ0aW5kZXggPSBvcHRzLnN0YXJ0aW5kZXg7XG4gICAgICBpZiAoX3N0YXJ0aW5kZXggfHwgb3B0cy5oYXNoICYmIGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IGdldEluZGV4RnJvbUhhc2goX3N0YXJ0aW5kZXggfHwgbG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKSwgZGF0YSwgdGhhdC5pbmRleCA9PT0gMCB8fCBfc3RhcnRpbmRleCwgX3N0YXJ0aW5kZXgpO1xuICAgICAgfVxuICAgICAgYWN0aXZlSW5kZXggPSByZXBvc2l0aW9uSW5kZXggPSBkaXJ0eUluZGV4ID0gbGFzdEFjdGl2ZUluZGV4ID0gc3RhcnRJbmRleCA9IGVkZ2VJbmRleChzdGFydEluZGV4KSB8fCAwOy8qKG9fcnRsID8gc2l6ZSAtIDEgOiAwKSovLy87XG4gICAgfVxuXG4gICAgaWYgKHNpemUpIHtcbiAgICAgIGlmIChjaGFuZ2VUb1J0bCgpKSByZXR1cm47XG5cbiAgICAgIGlmICgkdmlkZW9QbGF5aW5nKSB7XG4gICAgICAgIHVubG9hZFZpZGVvKCR2aWRlb1BsYXlpbmcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmVJbmRleGVzID0gW107XG4gICAgICBkZXRhY2hGcmFtZXMoU1RBR0VfRlJBTUVfS0VZKTtcblxuICAgICAgcmVzZXQub2sgPSB0cnVlO1xuXG4gICAgICB0aGF0LnNob3coe2luZGV4OiBhY3RpdmVJbmRleCwgdGltZTogMH0pO1xuICAgICAgdGhhdC5yZXNpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlVG9SdGwgKCkge1xuICAgIC8vLy8vL2NvbnNvbGUubG9nKCdjaGFuZ2VUb1J0bCcpO1xuICAgIGlmICghY2hhbmdlVG9SdGwuZiA9PT0gb19ydGwpIHtcbiAgICAgIGNoYW5nZVRvUnRsLmYgPSBvX3J0bDtcbiAgICAgIGFjdGl2ZUluZGV4ID0gc2l6ZSAtIDEgLSBhY3RpdmVJbmRleDtcbiAgICAgIC8vLy8vL2NvbnNvbGUubG9nKCdjaGFuZ2VUb1J0bCBleGVjdXRlLCBhY3RpdmVJbmRleCBpcycsIGFjdGl2ZUluZGV4KTtcbiAgICAgIHRoYXQucmV2ZXJzZSgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAkLmVhY2goJ2xvYWQgcHVzaCBwb3Agc2hpZnQgdW5zaGlmdCByZXZlcnNlIHNvcnQgc3BsaWNlJy5zcGxpdCgnICcpLCBmdW5jdGlvbiAoaSwgbWV0aG9kKSB7XG4gICAgdGhhdFttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGF0YSA9IGRhdGEgfHwgW107XG4gICAgICBpZiAobWV0aG9kICE9PSAnbG9hZCcpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlW21ldGhvZF0uYXBwbHkoZGF0YSwgYXJndW1lbnRzKTtcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzWzBdICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnICYmIGFyZ3VtZW50c1swXS5sZW5ndGgpIHtcbiAgICAgICAgZGF0YSA9IGNsb25lKGFyZ3VtZW50c1swXSk7XG4gICAgICB9XG4gICAgICByZXNldCgpO1xuICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiByZWFkeSAoKSB7XG4gICAgaWYgKCFyZWFkeS5vaykge1xuICAgICAgcmVhZHkub2sgPSB0cnVlO1xuICAgICAgdHJpZ2dlckV2ZW50KCdyZWFkeScpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCk7XG59O1xuXG5cbiQuZm4uZm90b3JhbWEgPSBmdW5jdGlvbiAob3B0cykge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICRmb3RvcmFtYSA9ICQodGhpcyksXG4gICAgICAgIGZvdG9yYW1hRGF0YSA9ICRmb3RvcmFtYS5kYXRhKCksXG4gICAgICAgIGZvdG9yYW1hID0gZm90b3JhbWFEYXRhLmZvdG9yYW1hO1xuXG4gICAgaWYgKCFmb3RvcmFtYSkge1xuICAgICAgd2FpdEZvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhaXNIaWRkZW4odGhhdCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvdG9yYW1hRGF0YS51cnRleHQgPSAkZm90b3JhbWEuaHRtbCgpO1xuICAgICAgICBuZXcgJC5Gb3RvcmFtYSgkZm90b3JhbWEsXG4gICAgICAgICAgICAvKiBQcmlvcml0eSBmb3Igb3B0aW9uczpcbiAgICAgICAgICAgICAqIDEuIDxkaXYgZGF0YS1sb29wPVwidHJ1ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICogMi4gJCgnZGl2JykuZm90b3JhbWEoe2xvb3A6IGZhbHNlfSlcbiAgICAgICAgICAgICAqIDMuIERlZmF1bHRzICovXG4gICAgICAgICAgICAkLmV4dGVuZChcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBPUFRJT05TLFxuICAgICAgICAgICAgICAgIHdpbmRvdy5mb3RvcmFtYURlZmF1bHRzLFxuICAgICAgICAgICAgICAgIG9wdHMsXG4gICAgICAgICAgICAgICAgZm90b3JhbWFEYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm90b3JhbWEuc2V0T3B0aW9ucyhvcHRzLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcbiQuRm90b3JhbWEuaW5zdGFuY2VzID0gW107XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUluZGV4ZXMgKCkge1xuICAkLmVhY2goJC5Gb3RvcmFtYS5pbnN0YW5jZXMsIGZ1bmN0aW9uIChpbmRleCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5pbmRleCA9IGluZGV4O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICQuRm90b3JhbWEuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICBjYWxjdWxhdGVJbmRleGVzKCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgJC5Gb3RvcmFtYS5pbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlLmluZGV4LCAxKTtcbiAgY2FsY3VsYXRlSW5kZXhlcygpO1xufVxuJC5Gb3RvcmFtYS5jYWNoZSA9IHt9O1xuJC5Gb3RvcmFtYS5tZWFzdXJlcyA9IHt9O1xuJCA9ICQgfHwge307XG4kLkZvdG9yYW1hID0gJC5Gb3RvcmFtYSB8fCB7fTtcbiQuRm90b3JhbWEuanN0ID0gJC5Gb3RvcmFtYS5qc3QgfHwge307XG5cbiQuRm90b3JhbWEuanN0LnN0eWxlID0gZnVuY3Rpb24odikge1xudmFyIF9fdCwgX19wID0gJycsIF9fZSA9IF8uZXNjYXBlO1xuX19wICs9ICcuZm90b3JhbWEnICtcbigoX190ID0gKCB2LnMgKSkgPT0gbnVsbCA/ICcnIDogX190KSArXG4nIC5mb3RvcmFtYV9fbmF2LS10aHVtYnMgLmZvdG9yYW1hX19uYXZfX2ZyYW1le1xcbnBhZGRpbmc6JyArXG4oKF9fdCA9ICggdi5tICkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJ3B4O1xcbmhlaWdodDonICtcbigoX190ID0gKCB2LmggKSkgPT0gbnVsbCA/ICcnIDogX190KSArXG4ncHh9XFxuLmZvdG9yYW1hJyArXG4oKF9fdCA9ICggdi5zICkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJyAuZm90b3JhbWFfX3RodW1iLWJvcmRlcntcXG5oZWlnaHQ6JyArXG4oKF9fdCA9ICggdi5oIC0gdi5iICogKHYucSA/IDAgOiAyKSApKSA9PSBudWxsID8gJycgOiBfX3QpICtcbidweDtcXG5ib3JkZXItd2lkdGg6JyArXG4oKF9fdCA9ICggdi5iICkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJ3B4O1xcbm1hcmdpbi10b3A6JyArXG4oKF9fdCA9ICggdi5tICkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJ3B4fSc7XG5yZXR1cm4gX19wXG59O1xuXG4kLkZvdG9yYW1hLmpzdC52aWRlbyA9IGZ1bmN0aW9uKHYpIHtcbnZhciBfX3QsIF9fcCA9ICcnLCBfX2UgPSBfLmVzY2FwZSwgX19qID0gQXJyYXkucHJvdG90eXBlLmpvaW47XG5mdW5jdGlvbiBwcmludCgpIHsgX19wICs9IF9fai5jYWxsKGFyZ3VtZW50cywgJycpIH1cbl9fcCArPSAnPGRpdiBjbGFzcz1cImZvdG9yYW1hX192aWRlb1wiPjxpZnJhbWUgc3JjPVwiJztcbiBwcmludCgodi50eXBlID09ICd5b3V0dWJlJyA/IHYucCArICd5b3V0dWJlLmNvbS9lbWJlZC8nICsgdi5pZCArJz9hdXRvcGxheT0xJyA6IHYudHlwZSA9PSAndmltZW8nID8gdi5wICsgJ3BsYXllci52aW1lby5jb20vdmlkZW8vJyArIHYuaWQgKyAnP2F1dG9wbGF5PTEmYmFkZ2U9MCcgOiB2LmlkKSAgKyAodi5zICYmIHYudHlwZSAhPSAnY3VzdG9tJyA/ICcmJyArIHYucyA6ICcnKSkgO1xuX19wICs9ICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9kaXY+XFxuJztcbnJldHVybiBfX3Bcbn07XG4kKGZ1bmN0aW9uICgpIHtcbiAgJCgnLicgKyBfZm90b3JhbWFDbGFzcyArICc6bm90KFtkYXRhLWF1dG89XCJmYWxzZVwiXSknKS5mb3RvcmFtYSgpO1xufSk7XG59KSh3aW5kb3csIGRvY3VtZW50LCBsb2NhdGlvbiwgdHlwZW9mIGpRdWVyeSAhPT0gJ3VuZGVmaW5lZCcgJiYgalF1ZXJ5KTtcbiIsIi8qIWpRdWVyeSBLbm9iKi9cbi8qKlxuICogRG93bndhcmQgY29tcGF0aWJsZSwgdG91Y2hhYmxlIGRpYWxcbiAqXG4gKiBWZXJzaW9uOiAxLjIuMTJcbiAqIFJlcXVpcmVzOiBqUXVlcnkgdjEuNytcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgQW50aG9ueSBUZXJyaWVuXG4gKiBVbmRlciBNSVQgTGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKlxuICogVGhhbmtzIHRvIHZvciwgZXNraW1vYmxvb2QsIHNwaWZmaXN0YW4sIEZhYnJpemlvQ1xuICovXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIENvbW1vbkpTXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvKipcbiAgICAgKiBLb250cm9sIGxpYnJhcnlcbiAgICAgKi9cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgZ2xvYmFscyBhbmQgY29yZVxuICAgICAqL1xuICAgIHZhciBrID0ge30sIC8vIGtvbnRyb2xcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgsXG4gICAgICAgIG1pbiA9IE1hdGgubWluO1xuXG4gICAgay5jID0ge307XG4gICAgay5jLmQgPSAkKGRvY3VtZW50KTtcbiAgICBrLmMudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggLSAxO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBLb250cm9sIE9iamVjdFxuICAgICAqXG4gICAgICogRGVmaW5pdGlvbiBvZiBhbiBhYnN0cmFjdCBVSSBjb250cm9sXG4gICAgICpcbiAgICAgKiBFYWNoIGNvbmNyZXRlIGNvbXBvbmVudCBtdXN0IGNhbGwgdGhpcyBvbmUuXG4gICAgICogPGNvZGU+XG4gICAgICogay5vLmNhbGwodGhpcyk7XG4gICAgICogPC9jb2RlPlxuICAgICAqL1xuICAgIGsubyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubyA9IG51bGw7IC8vIGFycmF5IG9mIG9wdGlvbnNcbiAgICAgICAgdGhpcy4kID0gbnVsbDsgLy8galF1ZXJ5IHdyYXBwZWQgZWxlbWVudFxuICAgICAgICB0aGlzLmkgPSBudWxsOyAvLyBtaXhlZCBIVE1MSW5wdXRFbGVtZW50IG9yIGFycmF5IG9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgdGhpcy5nID0gbnVsbDsgLy8gZGVwcmVjYXRlZCAyRCBncmFwaGljcyBjb250ZXh0IGZvciAncHJlLXJlbmRlcmluZydcbiAgICAgICAgdGhpcy52ID0gbnVsbDsgLy8gdmFsdWUgOyBtaXhlZCBhcnJheSBvciBpbnRlZ2VyXG4gICAgICAgIHRoaXMuY3YgPSBudWxsOyAvLyBjaGFuZ2UgdmFsdWUgOyBub3QgY29tbWl0ZWQgdmFsdWVcbiAgICAgICAgdGhpcy54ID0gMDsgLy8gY2FudmFzIHggcG9zaXRpb25cbiAgICAgICAgdGhpcy55ID0gMDsgLy8gY2FudmFzIHkgcG9zaXRpb25cbiAgICAgICAgdGhpcy53ID0gMDsgLy8gY2FudmFzIHdpZHRoXG4gICAgICAgIHRoaXMuaCA9IDA7IC8vIGNhbnZhcyBoZWlnaHRcbiAgICAgICAgdGhpcy4kYyA9IG51bGw7IC8vIGpRdWVyeSBjYW52YXMgZWxlbWVudFxuICAgICAgICB0aGlzLmMgPSBudWxsOyAvLyByZW5kZXJlZCBjYW52YXMgY29udGV4dFxuICAgICAgICB0aGlzLnQgPSAwOyAvLyB0b3VjaGVzIGluZGV4XG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmdDb2xvciA9IG51bGw7IC8vIG1haW4gY29sb3JcbiAgICAgICAgdGhpcy5wQ29sb3IgPSBudWxsOyAvLyBwcmV2aW91cyBjb2xvclxuICAgICAgICB0aGlzLmRIID0gbnVsbDsgLy8gZHJhdyBob29rXG4gICAgICAgIHRoaXMuY0ggPSBudWxsOyAvLyBjaGFuZ2UgaG9va1xuICAgICAgICB0aGlzLmVIID0gbnVsbDsgLy8gY2FuY2VsIGhvb2tcbiAgICAgICAgdGhpcy5ySCA9IG51bGw7IC8vIHJlbGVhc2UgaG9va1xuICAgICAgICB0aGlzLnNjYWxlID0gMTsgLy8gc2NhbGUgZmFjdG9yXG4gICAgICAgIHRoaXMucmVsYXRpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVdpZHRoID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVsYXRpdmVIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kZGl2ID0gbnVsbDsgLy8gY29tcG9uZW50IGRpdlxuXG4gICAgICAgIHRoaXMucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNmID0gZnVuY3Rpb24gKGUsIGNvbmYpIHtcbiAgICAgICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gY29uZikge1xuICAgICAgICAgICAgICAgICAgICBzLm9ba10gPSBjb25mW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLl9jYXJ2ZSgpLmluaXQoKTtcbiAgICAgICAgICAgICAgICBzLl9jb25maWd1cmUoKVxuICAgICAgICAgICAgICAgICAuX2RyYXcoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiQuZGF0YSgna29udHJvbGVkJykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJC5kYXRhKCdrb250cm9sZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5leHRlbmQoKTtcbiAgICAgICAgICAgIHRoaXMubyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIG1pbjogdGhpcy4kLmRhdGEoJ21pbicpICE9PSB1bmRlZmluZWQgPyB0aGlzLiQuZGF0YSgnbWluJykgOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IHRoaXMuJC5kYXRhKCdtYXgnKSAhPT0gdW5kZWZpbmVkID8gdGhpcy4kLmRhdGEoJ21heCcpIDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBzdG9wcGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdGhpcy4kLmRhdGEoJ3JlYWRvbmx5JykgfHwgKHRoaXMuJC5hdHRyKCdyZWFkb25seScpID09PSAncmVhZG9ubHknKSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBVSVxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMuJC5kYXRhKCdjdXJzb3InKSA9PT0gdHJ1ZSAmJiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuJC5kYXRhKCdjdXJzb3InKSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICB0aGlja25lc3M6IHRoaXMuJC5kYXRhKCd0aGlja25lc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIE1hdGgubWF4KE1hdGgubWluKHRoaXMuJC5kYXRhKCd0aGlja25lc3MnKSwgMSksIDAuMDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgMC4zNSxcbiAgICAgICAgICAgICAgICAgICAgbGluZUNhcDogdGhpcy4kLmRhdGEoJ2xpbmVjYXAnKSB8fCAnYnV0dCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLiQuZGF0YSgnd2lkdGgnKSB8fCAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy4kLmRhdGEoJ2hlaWdodCcpIHx8IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUlucHV0OiB0aGlzLiQuZGF0YSgnZGlzcGxheWlucHV0JykgPT0gbnVsbCB8fCB0aGlzLiQuZGF0YSgnZGlzcGxheWlucHV0JyksXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcmV2aW91czogdGhpcy4kLmRhdGEoJ2Rpc3BsYXlwcmV2aW91cycpLFxuICAgICAgICAgICAgICAgICAgICBmZ0NvbG9yOiB0aGlzLiQuZGF0YSgnZmdjb2xvcicpIHx8ICcjODdDRUVCJyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xvcjogdGhpcy4kLmRhdGEoJ2lucHV0Y29sb3InKSxcbiAgICAgICAgICAgICAgICAgICAgZm9udDogdGhpcy4kLmRhdGEoJ2ZvbnQnKSB8fCAnQXJpYWwnLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiB0aGlzLiQuZGF0YSgnZm9udC13ZWlnaHQnKSB8fCAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMuJC5kYXRhKCdzdGVwJykgfHwgMSxcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IHRoaXMuJC5kYXRhKCdyb3RhdGlvbicpLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvb2tzXG4gICAgICAgICAgICAgICAgICAgIGRyYXc6IG51bGwsIC8vIGZ1bmN0aW9uICgpIHt9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogbnVsbCwgLy8gZnVuY3Rpb24gKHZhbHVlKSB7fVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IG51bGwsIC8vIGZ1bmN0aW9uICgpIHt9XG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2U6IG51bGwsIC8vIGZ1bmN0aW9uICh2YWx1ZSkge31cblxuICAgICAgICAgICAgICAgICAgICAvLyBPdXRwdXQgZm9ybWF0dGluZywgYWxsb3dzIHRvIGFkZCB1bml0OiAlLCBtcyAuLi5cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMub1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gZmluYWxpemUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5vLmZsaXAgPSB0aGlzLm8ucm90YXRpb24gPT09ICdhbnRpY2xvY2t3aXNlJyB8fCB0aGlzLm8ucm90YXRpb24gPT09ICdhY3cnO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm8uaW5wdXRDb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuby5pbnB1dENvbG9yID0gdGhpcy5vLmZnQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdXRpbmcgdmFsdWVcbiAgICAgICAgICAgIGlmICh0aGlzLiQuaXMoJ2ZpZWxkc2V0JykpIHtcblxuICAgICAgICAgICAgICAgIC8vIGZpZWxkc2V0ID0gYXJyYXkgb2YgaW50ZWdlclxuICAgICAgICAgICAgICAgIHRoaXMudiA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuaSA9IHRoaXMuJC5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuaS5lYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcy5pW2tdID0gJHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHMudltrXSA9IHMuby5wYXJzZSgkdGhpcy52YWwoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2UgYmx1cicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbFtrXSA9ICR0aGlzLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHMuX3ZhbGlkYXRlKHZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuJC5maW5kKCdsZWdlbmQnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBpbnB1dCA9IGludGVnZXJcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSB0aGlzLiQ7XG4gICAgICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5vLnBhcnNlKHRoaXMuJC52YWwoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ID09PSAnJyAmJiAodGhpcy52ID0gdGhpcy5vLm1pbik7XG4gICAgICAgICAgICAgICAgdGhpcy4kLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICdjaGFuZ2UgYmx1cicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmFsKHMuX3ZhbGlkYXRlKHMuby5wYXJzZShzLiQudmFsKCkpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICF0aGlzLm8uZGlzcGxheUlucHV0ICYmIHRoaXMuJC5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIGFkZHMgbmVlZGVkIERPTSBlbGVtZW50cyAoY2FudmFzLCBkaXYpXG4gICAgICAgICAgICB0aGlzLiRjID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSkuYXR0cih7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuby53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuby5oZWlnaHRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB3cmFwcyBhbGwgZWxlbWVudHMgaW4gYSBkaXZcbiAgICAgICAgICAgIC8vIGFkZCB0byBET00gYmVmb3JlIENhbnZhcyBpbml0IGlzIHRyaWdnZXJlZFxuICAgICAgICAgICAgdGhpcy4kZGl2ID0gJCgnPGRpdiBzdHlsZT1cIidcbiAgICAgICAgICAgICAgICArICh0aGlzLm8uaW5saW5lID8gJ2Rpc3BsYXk6aW5saW5lOycgOiAnJylcbiAgICAgICAgICAgICAgICArICd3aWR0aDonICsgdGhpcy5vLndpZHRoICsgJ3B4O2hlaWdodDonICsgdGhpcy5vLmhlaWdodCArICdweDsnXG4gICAgICAgICAgICAgICAgKyAnXCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuJC53cmFwKHRoaXMuJGRpdikuYmVmb3JlKHRoaXMuJGMpO1xuICAgICAgICAgICAgdGhpcy4kZGl2ID0gdGhpcy4kLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIEdfdm1sQ2FudmFzTWFuYWdlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBHX3ZtbENhbnZhc01hbmFnZXIuaW5pdEVsZW1lbnQodGhpcy4kY1swXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYyA9IHRoaXMuJGNbMF0uZ2V0Q29udGV4dCA/IHRoaXMuJGNbMF0uZ2V0Q29udGV4dCgnMmQnKSA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAgICAgICAgXCJDYW52YXNOb3RTdXBwb3J0ZWRFeGNlcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogICAgIFwiQ2FudmFzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgZXhjYW52YXMgb24gSUU4LjAuXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvU3RyaW5nOiAgICBmdW5jdGlvbigpe3JldHVybiB0aGlzLm5hbWUgKyBcIjogXCIgKyB0aGlzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBoZHBpIHN1cHBvcnRcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkgLyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gZGV0ZWN0cyByZWxhdGl2ZSB3aWR0aCAvIGhlaWdodFxuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZVdpZHRoID0gIHRoaXMuby53aWR0aCAlIDEgIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLm8ud2lkdGguaW5kZXhPZignJScpO1xuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZUhlaWdodCA9IHRoaXMuby5oZWlnaHQgJSAxICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5vLmhlaWdodC5pbmRleE9mKCclJyk7XG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlID0gdGhpcy5yZWxhdGl2ZVdpZHRoIHx8IHRoaXMucmVsYXRpdmVIZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIGNvbXB1dGVzIHNpemUgYW5kIGNhcnZlcyB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICB0aGlzLl9jYXJ2ZSgpO1xuXG4gICAgICAgICAgICAvLyBwcmVwYXJlcyBwcm9wcyBmb3IgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnYgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5KHRoaXMudiwgdGhpcy5jdik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3YgPSB0aGlzLnY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJpbmRzIGNvbmZpZ3VyZSBldmVudFxuICAgICAgICAgICAgdGhpcy4kXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJjb25maWd1cmVcIiwgY2YpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJjb25maWd1cmVcIiwgY2YpO1xuXG4gICAgICAgICAgICAvLyBmaW5hbGl6ZSBpbml0XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW4oKVxuICAgICAgICAgICAgICAgIC5fY29uZmlndXJlKClcbiAgICAgICAgICAgICAgICAuX3h5KClcbiAgICAgICAgICAgICAgICAuaW5pdCgpO1xuXG4gICAgICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuJC52YWwodGhpcy5vLmZvcm1hdCh0aGlzLnYpKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fY2FydmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbGF0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLnJlbGF0aXZlV2lkdGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZGl2LnBhcmVudCgpLndpZHRoKCkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQodGhpcy5vLndpZHRoKSAvIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiRkaXYucGFyZW50KCkud2lkdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgaCA9IHRoaXMucmVsYXRpdmVIZWlnaHQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZGl2LnBhcmVudCgpLmhlaWdodCgpICpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuby5oZWlnaHQpIC8gMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuJGRpdi5wYXJlbnQoKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgdGhpcy53ID0gdGhpcy5oID0gTWF0aC5taW4odywgaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudyA9IHRoaXMuby53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmggPSB0aGlzLm8uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaW5hbGl6ZSBkaXZcbiAgICAgICAgICAgIHRoaXMuJGRpdi5jc3Moe1xuICAgICAgICAgICAgICAgICd3aWR0aCc6IHRoaXMudyArICdweCcsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IHRoaXMuaCArICdweCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBmaW5hbGl6ZSBjYW52YXMgd2l0aCBjb21wdXRlZCB3aWR0aFxuICAgICAgICAgICAgdGhpcy4kYy5hdHRyKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy53LFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gc2NhbGluZ1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NhbGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjWzBdLndpZHRoID0gdGhpcy4kY1swXS53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy4kY1swXS5oZWlnaHQgPSB0aGlzLiRjWzBdLmhlaWdodCAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYy53aWR0aCh0aGlzLncpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGMuaGVpZ2h0KHRoaXMuaCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RyYXcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIGNhbnZhcyBwcmUtcmVuZGVyaW5nXG4gICAgICAgICAgICB2YXIgZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHMuZyA9IHMuYztcblxuICAgICAgICAgICAgcy5jbGVhcigpO1xuXG4gICAgICAgICAgICBzLmRIICYmIChkID0gcy5kSCgpKTtcblxuICAgICAgICAgICAgZCAhPT0gZmFsc2UgJiYgcy5kcmF3KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdG91Y2ggPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBzLnh5MnZhbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1tzLnRdLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUub3JpZ2luYWxFdmVudC50b3VjaGVzW3MudF0ucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAodiA9PSBzLmN2KSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBpZiAocy5jSCAmJiBzLmNIKHYpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgcy5jaGFuZ2Uocy5fdmFsaWRhdGUodikpO1xuICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGdldCB0b3VjaGVzIGluZGV4XG4gICAgICAgICAgICB0aGlzLnQgPSBrLmMudChlKTtcblxuICAgICAgICAgICAgLy8gRmlyc3QgdG91Y2hcbiAgICAgICAgICAgIHRvdWNoTW92ZShlKTtcblxuICAgICAgICAgICAgLy8gVG91Y2ggZXZlbnRzIGxpc3RlbmVyc1xuICAgICAgICAgICAgay5jLmRcbiAgICAgICAgICAgICAgICAuYmluZChcInRvdWNobW92ZS5rXCIsIHRvdWNoTW92ZSlcbiAgICAgICAgICAgICAgICAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaGVuZC5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsuYy5kLnVuYmluZCgndG91Y2htb3ZlLmsgdG91Y2hlbmQuaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy5jdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9tb3VzZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgbW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHMueHkydmFsKGUucGFnZVgsIGUucGFnZVkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gcy5jdikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKHMuY0ggJiYgKHMuY0godikgPT09IGZhbHNlKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgcy5jaGFuZ2Uocy5fdmFsaWRhdGUodikpO1xuICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IGNsaWNrXG4gICAgICAgICAgICBtb3VzZU1vdmUoZSk7XG5cbiAgICAgICAgICAgIC8vIE1vdXNlIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGsuYy5kXG4gICAgICAgICAgICAgICAgLmJpbmQoXCJtb3VzZW1vdmUua1wiLCBtb3VzZU1vdmUpXG4gICAgICAgICAgICAgICAgLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIC8vIEVzY2FwZSBrZXkgY2FuY2VsIGN1cnJlbnQgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIFwia2V5dXAua1wiLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLmMuZC51bmJpbmQoXCJtb3VzZXVwLmsgbW91c2Vtb3ZlLmsga2V5dXAua1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmVIICYmIHMuZUgoKSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIFwibW91c2V1cC5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrLmMuZC51bmJpbmQoJ21vdXNlbW92ZS5rIG1vdXNldXAuayBrZXl1cC5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLmN2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3h5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLiRjLm9mZnNldCgpO1xuICAgICAgICAgICAgdGhpcy54ID0gby5sZWZ0O1xuICAgICAgICAgICAgdGhpcy55ID0gby50b3A7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY1xuICAgICAgICAgICAgICAgICAgICAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLl94eSgpLl9tb3VzZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5feHkoKS5fdG91Y2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQuYXR0cigncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzLl9jYXJ2ZSgpLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgcy5fZHJhdygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9jb25maWd1cmUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIEhvb2tzXG4gICAgICAgICAgICBpZiAodGhpcy5vLmRyYXcpIHRoaXMuZEggPSB0aGlzLm8uZHJhdztcbiAgICAgICAgICAgIGlmICh0aGlzLm8uY2hhbmdlKSB0aGlzLmNIID0gdGhpcy5vLmNoYW5nZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm8uY2FuY2VsKSB0aGlzLmVIID0gdGhpcy5vLmNhbmNlbDtcbiAgICAgICAgICAgIGlmICh0aGlzLm8ucmVsZWFzZSkgdGhpcy5ySCA9IHRoaXMuby5yZWxlYXNlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vLmRpc3BsYXlQcmV2aW91cykge1xuICAgICAgICAgICAgICAgIHRoaXMucENvbG9yID0gdGhpcy5oMnJnYmEodGhpcy5vLmZnQ29sb3IsIFwiMC40XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmdDb2xvciA9IHRoaXMuaDJyZ2JhKHRoaXMuby5mZ0NvbG9yLCBcIjAuNlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0NvbG9yID0gdGhpcy5vLmZnQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2NsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kY1swXS53aWR0aCA9IHRoaXMuJGNbMF0ud2lkdGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdmFsaWRhdGUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdmFyIHZhbCA9ICh+fiAoKCh2IDwgMCkgPyAtMC41IDogMC41KSArICh2L3RoaXMuby5zdGVwKSkpICogdGhpcy5vLnN0ZXA7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFic3RyYWN0IG1ldGhvZHNcbiAgICAgICAgdGhpcy5saXN0ZW4gPSBmdW5jdGlvbiAoKSB7fTsgLy8gb24gc3RhcnQsIG9uZSB0aW1lXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZnVuY3Rpb24gKCkge307IC8vIGVhY2ggdGltZSBjb25maWd1cmUgdHJpZ2dlcmVkXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHt9OyAvLyBlYWNoIHRpbWUgY29uZmlndXJlIHRyaWdnZXJlZFxuICAgICAgICB0aGlzLmNoYW5nZSA9IGZ1bmN0aW9uICh2KSB7fTsgLy8gb24gY2hhbmdlXG4gICAgICAgIHRoaXMudmFsID0gZnVuY3Rpb24gKHYpIHt9OyAvLyBvbiByZWxlYXNlXG4gICAgICAgIHRoaXMueHkydmFsID0gZnVuY3Rpb24gKHgsIHkpIHt9OyAvL1xuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7fTsgLy8gb24gY2hhbmdlIC8gb24gcmVsZWFzZVxuICAgICAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9jbGVhcigpOyB9O1xuXG4gICAgICAgIC8vIFV0aWxzXG4gICAgICAgIHRoaXMuaDJyZ2JhID0gZnVuY3Rpb24gKGgsIGEpIHtcbiAgICAgICAgICAgIHZhciByZ2I7XG4gICAgICAgICAgICBoID0gaC5zdWJzdHJpbmcoMSw3KTtcbiAgICAgICAgICAgIHJnYiA9IFtcbiAgICAgICAgICAgICAgICBwYXJzZUludChoLnN1YnN0cmluZygwLDIpLCAxNiksXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoaC5zdWJzdHJpbmcoMiw0KSwgMTYpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGguc3Vic3RyaW5nKDQsNiksIDE2KVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuIFwicmdiYShcIiArIHJnYlswXSArIFwiLFwiICsgcmdiWzFdICsgXCIsXCIgKyByZ2JbMl0gKyBcIixcIiArIGEgKyBcIilcIjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvcHkgPSBmdW5jdGlvbiAoZiwgdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBmKSB7XG4gICAgICAgICAgICAgICAgdFtpXSA9IGZbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogay5EaWFsXG4gICAgICovXG4gICAgay5EaWFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBrLm8uY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXJ0QW5nbGUgPSBudWxsO1xuICAgICAgICB0aGlzLnh5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBudWxsO1xuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3Vyc29yRXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy53MiA9IG51bGw7XG4gICAgICAgIHRoaXMuUEkyID0gMipNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgICAgIGJnQ29sb3I6IHRoaXMuJC5kYXRhKCdiZ2NvbG9yJykgfHwgJyNFRUVFRUUnLFxuICAgICAgICAgICAgICAgIGFuZ2xlT2Zmc2V0OiB0aGlzLiQuZGF0YSgnYW5nbGVvZmZzZXQnKSB8fCAwLFxuICAgICAgICAgICAgICAgIGFuZ2xlQXJjOiB0aGlzLiQuZGF0YSgnYW5nbGVhcmMnKSB8fCAzNjAsXG4gICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlXG4gICAgICAgICAgICB9LCB0aGlzLm8pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmFsID0gZnVuY3Rpb24gKHYsIHRyaWdnZXJSZWxlYXNlKSB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSB2KSB7XG5cbiAgICAgICAgICAgICAgICAvLyByZXZlcnNlIGZvcm1hdFxuICAgICAgICAgICAgICAgIHYgPSB0aGlzLm8ucGFyc2Uodik7XG5cbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlclJlbGVhc2UgIT09IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICYmIHYgIT0gdGhpcy52XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuckhcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5ySCh2KSA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0gdGhpcy5vLnN0b3BwZXIgPyBtYXgobWluKHYsIHRoaXMuby5tYXgpLCB0aGlzLm8ubWluKSA6IHY7XG4gICAgICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5jdjtcbiAgICAgICAgICAgICAgICB0aGlzLiQudmFsKHRoaXMuby5mb3JtYXQodGhpcy52KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMueHkydmFsID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHZhciBhLCByZXQ7XG5cbiAgICAgICAgICAgIGEgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgICAgICAgICAgICAgeCAtICh0aGlzLnggKyB0aGlzLncyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gKHkgLSB0aGlzLnkgLSB0aGlzLncyKVxuICAgICAgICAgICAgICAgICAgICApIC0gdGhpcy5hbmdsZU9mZnNldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuby5mbGlwKSB7XG4gICAgICAgICAgICAgICAgYSA9IHRoaXMuYW5nbGVBcmMgLSBhIC0gdGhpcy5QSTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFuZ2xlQXJjICE9IHRoaXMuUEkyICYmIChhIDwgMCkgJiYgKGEgPiAtMC41KSkge1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgaXNzZXQgYW5nbGVBcmMgb3B0aW9uLCBzZXQgdG8gbWluIGlmIC41IHVuZGVyIG1pblxuICAgICAgICAgICAgICAgIGEgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhIDwgMCkge1xuICAgICAgICAgICAgICAgIGEgKz0gdGhpcy5QSTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IChhICogKHRoaXMuby5tYXggLSB0aGlzLm8ubWluKSAvIHRoaXMuYW5nbGVBcmMpICsgdGhpcy5vLm1pbjtcblxuICAgICAgICAgICAgdGhpcy5vLnN0b3BwZXIgJiYgKHJldCA9IG1heChtaW4ocmV0LCB0aGlzLm8ubWF4KSwgdGhpcy5vLm1pbikpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGlzdGVuID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBiaW5kIE1vdXNlV2hlZWxcbiAgICAgICAgICAgIHZhciBzID0gdGhpcywgbXdUaW1lclN0b3AsXG4gICAgICAgICAgICAgICAgbXdUaW1lclJlbGVhc2UsXG4gICAgICAgICAgICAgICAgbXcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaSA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhWCA9IG9yaS5kZXRhaWwgfHwgb3JpLndoZWVsRGVsdGFYLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFZID0gb3JpLmRldGFpbCB8fCBvcmkud2hlZWxEZWx0YVksXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gcy5fdmFsaWRhdGUocy5vLnBhcnNlKHMuJC52YWwoKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhWCA+IDAgfHwgZGVsdGFZID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHMuby5zdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGVsdGFYIDwgMCB8fCBkZWx0YVkgPCAwID8gLXMuby5zdGVwIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICB2ID0gbWF4KG1pbih2LCBzLm8ubWF4KSwgcy5vLm1pbik7XG5cbiAgICAgICAgICAgICAgICAgICAgcy52YWwodiwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnJIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbW91c2V3aGVlbCBzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobXdUaW1lclN0b3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXdUaW1lclN0b3AgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnJIKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJTdG9wID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBtb3VzZXdoZWVsIHJlbGVhc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW13VGltZXJSZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdUaW1lclJlbGVhc2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG13VGltZXJTdG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5ySCh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdUaW1lclJlbGVhc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGt2YWwsXG4gICAgICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICAgICAgbSA9IDEsXG4gICAgICAgICAgICAgICAga3YgPSB7XG4gICAgICAgICAgICAgICAgICAgIDM3OiAtcy5vLnN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIDM4OiBzLm8uc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgMzk6IHMuby5zdGVwLFxuICAgICAgICAgICAgICAgICAgICA0MDogLXMuby5zdGVwXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy4kXG4gICAgICAgICAgICAgICAgLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtjID0gZS5rZXlDb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBudW1wYWQgc3VwcG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtjID49IDk2ICYmIGtjIDw9IDEwNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtjID0gZS5rZXlDb2RlID0ga2MgLSA0ODtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAga3ZhbCA9IHBhcnNlSW50KFN0cmluZy5mcm9tQ2hhckNvZGUoa2MpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGt2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtjICE9PSAxMykgICAgICAgICAgICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGtjICE9PSA4ICAgICAgICAgICAgICAgICAgICAgLy8gYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBrYyAhPT0gOSAgICAgICAgICAgICAgICAgICAgIC8vIHRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGtjICE9PSAxODkgICAgICAgICAgICAgICAgICAgLy8gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChrYyAhPT0gMTkwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHMuJC52YWwoKS5tYXRjaCgvXFwuLykpICAgLy8gLiBhbGxvd2VkIG9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGtjLFszNywzOCwzOSw0MF0pID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcy5vLnBhcnNlKHMuJC52YWwoKSkgKyBrdltrY10gKiBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLm8uc3RvcHBlciAmJiAodiA9IG1heChtaW4odiwgcy5vLm1heCksIHMuby5taW4pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNoYW5nZShzLl92YWxpZGF0ZSh2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb25nIHRpbWUga2V5ZG93biBzcGVlZC11cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gKj0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgXCJrZXl1cFwiLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGt2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLiQudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga3ZhbCBwb3N0Y29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzLiQudmFsKCkgPiBzLm8ubWF4ICYmIHMuJC52YWwocy5vLm1heCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHMuJC52YWwoKSA8IHMuby5taW4gJiYgcy4kLnZhbChzLm8ubWluKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLiRjLmJpbmQoXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIG13KTtcbiAgICAgICAgICAgIHRoaXMuJC5iaW5kKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBtdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudiA8IHRoaXMuby5taW5cbiAgICAgICAgICAgICAgICB8fCB0aGlzLnYgPiB0aGlzLm8ubWF4KSB7IHRoaXMudiA9IHRoaXMuby5taW47IH1cblxuICAgICAgICAgICAgdGhpcy4kLnZhbCh0aGlzLnYpO1xuICAgICAgICAgICAgdGhpcy53MiA9IHRoaXMudyAvIDI7XG4gICAgICAgICAgICB0aGlzLmN1cnNvckV4dCA9IHRoaXMuby5jdXJzb3IgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLnh5ID0gdGhpcy53MiAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IHRoaXMueHkgKiB0aGlzLm8udGhpY2tuZXNzO1xuICAgICAgICAgICAgdGhpcy5saW5lQ2FwID0gdGhpcy5vLmxpbmVDYXA7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMueHkgLSB0aGlzLmxpbmVXaWR0aCAvIDI7XG5cbiAgICAgICAgICAgIHRoaXMuby5hbmdsZU9mZnNldFxuICAgICAgICAgICAgJiYgKHRoaXMuby5hbmdsZU9mZnNldCA9IGlzTmFOKHRoaXMuby5hbmdsZU9mZnNldCkgPyAwIDogdGhpcy5vLmFuZ2xlT2Zmc2V0KTtcblxuICAgICAgICAgICAgdGhpcy5vLmFuZ2xlQXJjXG4gICAgICAgICAgICAmJiAodGhpcy5vLmFuZ2xlQXJjID0gaXNOYU4odGhpcy5vLmFuZ2xlQXJjKSA/IHRoaXMuUEkyIDogdGhpcy5vLmFuZ2xlQXJjKTtcblxuICAgICAgICAgICAgLy8gZGVnIHRvIHJhZFxuICAgICAgICAgICAgdGhpcy5hbmdsZU9mZnNldCA9IHRoaXMuby5hbmdsZU9mZnNldCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlQXJjID0gdGhpcy5vLmFuZ2xlQXJjICogTWF0aC5QSSAvIDE4MDtcblxuICAgICAgICAgICAgLy8gY29tcHV0ZSBzdGFydCBhbmQgZW5kIGFuZ2xlc1xuICAgICAgICAgICAgdGhpcy5zdGFydEFuZ2xlID0gMS41ICogTWF0aC5QSSArIHRoaXMuYW5nbGVPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMS41ICogTWF0aC5QSSArIHRoaXMuYW5nbGVPZmZzZXQgKyB0aGlzLmFuZ2xlQXJjO1xuXG4gICAgICAgICAgICB2YXIgcyA9IG1heChcbiAgICAgICAgICAgICAgICBTdHJpbmcoTWF0aC5hYnModGhpcy5vLm1heCkpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBTdHJpbmcoTWF0aC5hYnModGhpcy5vLm1pbikpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApICsgMjtcblxuICAgICAgICAgICAgdGhpcy5vLmRpc3BsYXlJbnB1dFxuICAgICAgICAgICAgICAgICYmIHRoaXMuaS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJyA6ICgodGhpcy53IC8gMiArIDQpID4+IDApICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnIDogKCh0aGlzLncgLyAzKSA+PiAwKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nIDogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2ZXJ0aWNhbC1hbGlnbicgOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tdG9wJyA6ICgodGhpcy53IC8gMykgPj4gMCkgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JyA6ICctJyArICgodGhpcy53ICogMyAvIDQgKyAyKSA+PiAwKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyJyA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZCcgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9udCcgOiB0aGlzLm8uZm9udFdlaWdodCArICcgJyArICgodGhpcy53IC8gcykgPj4gMCkgKyAncHggJyArIHRoaXMuby5mb250LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtYWxpZ24nIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InIDogdGhpcy5vLmlucHV0Q29sb3IgfHwgdGhpcy5vLmZnQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFkZGluZycgOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIHx8IHRoaXMuaS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2hhbmdlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuY3YgPSB2O1xuICAgICAgICAgICAgdGhpcy4kLnZhbCh0aGlzLm8uZm9ybWF0KHYpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFuZ2xlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiAodiAtIHRoaXMuby5taW4pICogdGhpcy5hbmdsZUFyYyAvICh0aGlzLm8ubWF4IC0gdGhpcy5vLm1pbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcmMgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZhciBzYSwgZWE7XG4gICAgICAgICAgdiA9IHRoaXMuYW5nbGUodik7XG4gICAgICAgICAgaWYgKHRoaXMuby5mbGlwKSB7XG4gICAgICAgICAgICAgIHNhID0gdGhpcy5lbmRBbmdsZSArIDAuMDAwMDE7XG4gICAgICAgICAgICAgIGVhID0gc2EgLSB2IC0gMC4wMDAwMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzYSA9IHRoaXMuc3RhcnRBbmdsZSAtIDAuMDAwMDE7XG4gICAgICAgICAgICAgIGVhID0gc2EgKyB2ICsgMC4wMDAwMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vLmN1cnNvclxuICAgICAgICAgICAgICAmJiAoc2EgPSBlYSAtIHRoaXMuY3Vyc29yRXh0KVxuICAgICAgICAgICAgICAmJiAoZWEgPSBlYSArIHRoaXMuY3Vyc29yRXh0KTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHM6IHNhLFxuICAgICAgICAgICAgICBlOiBlYSxcbiAgICAgICAgICAgICAgZDogdGhpcy5vLmZsaXAgJiYgIXRoaXMuby5jdXJzb3JcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5nLCAgICAgICAgICAgICAgICAgLy8gY29udGV4dFxuICAgICAgICAgICAgICAgIGEgPSB0aGlzLmFyYyh0aGlzLmN2KSwgICAgICAvLyBBcmNcbiAgICAgICAgICAgICAgICBwYSwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmlvdXMgYXJjXG4gICAgICAgICAgICAgICAgciA9IDE7XG5cbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgICAgICBjLmxpbmVDYXAgPSB0aGlzLmxpbmVDYXA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm8uYmdDb2xvciAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5vLmJnQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGMuYXJjKHRoaXMueHksIHRoaXMueHksIHRoaXMucmFkaXVzLCB0aGlzLmVuZEFuZ2xlIC0gMC4wMDAwMSwgdGhpcy5zdGFydEFuZ2xlICsgMC4wMDAwMSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuby5kaXNwbGF5UHJldmlvdXMpIHtcbiAgICAgICAgICAgICAgICBwYSA9IHRoaXMuYXJjKHRoaXMudik7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gdGhpcy5wQ29sb3I7XG4gICAgICAgICAgICAgICAgYy5hcmModGhpcy54eSwgdGhpcy54eSwgdGhpcy5yYWRpdXMsIHBhLnMsIHBhLmUsIHBhLmQpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgciA9IHRoaXMuY3YgPT0gdGhpcy52O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHIgPyB0aGlzLm8uZmdDb2xvciA6IHRoaXMuZmdDb2xvciA7XG4gICAgICAgICAgICBjLmFyYyh0aGlzLnh5LCB0aGlzLnh5LCB0aGlzLnJhZGl1cywgYS5zLCBhLmUsIGEuZCk7XG4gICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52YWwodGhpcy52KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgJC5mbi5kaWFsID0gJC5mbi5rbm9iID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBrLkRpYWwoKTtcbiAgICAgICAgICAgICAgICBkLm8gPSBvO1xuICAgICAgICAgICAgICAgIGQuJCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgZC5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5wYXJlbnQoKTtcbiAgICB9O1xuXG59KSk7XG4iLCIndXNlIHN0cmljdCc7KGZ1bmN0aW9uKGZhY3RvcnksalF1ZXJ5LFplcHRvKXtpZih0eXBlb2YgZGVmaW5lPT09J2Z1bmN0aW9uJyYmZGVmaW5lLmFtZCl7ZGVmaW5lKFsnanF1ZXJ5J10sZmFjdG9yeSk7fWVsc2UgaWYodHlwZW9mIGV4cG9ydHM9PT0nb2JqZWN0Jyl7bW9kdWxlLmV4cG9ydHM9ZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7fWVsc2V7ZmFjdG9yeShqUXVlcnl8fFplcHRvKTt9fShmdW5jdGlvbigkKXt2YXIgTWFzaz1mdW5jdGlvbihlbCxtYXNrLG9wdGlvbnMpe3ZhciBwPXtpbnZhbGlkOltdLGdldENhcmV0OmZ1bmN0aW9uKCl7dHJ5e3ZhciBzZWwscG9zPTAsY3RybD1lbC5nZXQoMCksZFNlbD1kb2N1bWVudC5zZWxlY3Rpb24sY1NlbFN0YXJ0PWN0cmwuc2VsZWN0aW9uU3RhcnQ7aWYoZFNlbCYmbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignTVNJRSAxMCcpPT09LTEpe3NlbD1kU2VsLmNyZWF0ZVJhbmdlKCk7c2VsLm1vdmVTdGFydCgnY2hhcmFjdGVyJywtcC52YWwoKS5sZW5ndGgpO3Bvcz1zZWwudGV4dC5sZW5ndGg7fWVsc2UgaWYoY1NlbFN0YXJ0fHxjU2VsU3RhcnQ9PT0nMCcpe3Bvcz1jU2VsU3RhcnQ7fXJldHVybiBwb3M7fWNhdGNoKGUpe319LHNldENhcmV0OmZ1bmN0aW9uKHBvcyl7dHJ5e2lmKGVsLmlzKCc6Zm9jdXMnKSl7dmFyIHJhbmdlLGN0cmw9ZWwuZ2V0KDApO2lmKGN0cmwuc2V0U2VsZWN0aW9uUmFuZ2Upe2N0cmwuZm9jdXMoKTtjdHJsLnNldFNlbGVjdGlvblJhbmdlKHBvcyxwb3MpO31lbHNle3JhbmdlPWN0cmwuY3JlYXRlVGV4dFJhbmdlKCk7cmFuZ2UuY29sbGFwc2UodHJ1ZSk7cmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJyxwb3MpO3JhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJyxwb3MpO3JhbmdlLnNlbGVjdCgpO319fWNhdGNoKGUpe319LGV2ZW50czpmdW5jdGlvbigpe2VsLm9uKCdrZXlkb3duLm1hc2snLGZ1bmN0aW9uKGUpe2VsLmRhdGEoJ21hc2sta2V5Y29kZScsZS5rZXlDb2RlfHxlLndoaWNoKTt9KS5vbigkLmpNYXNrR2xvYmFscy51c2VJbnB1dD8naW5wdXQubWFzayc6J2tleXVwLm1hc2snLHAuYmVoYXZpb3VyKS5vbigncGFzdGUubWFzayBkcm9wLm1hc2snLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2VsLmtleWRvd24oKS5rZXl1cCgpO30sMTAwKTt9KS5vbignY2hhbmdlLm1hc2snLGZ1bmN0aW9uKCl7ZWwuZGF0YSgnY2hhbmdlZCcsdHJ1ZSk7fSkub24oJ2JsdXIubWFzaycsZnVuY3Rpb24oKXtpZihvbGRWYWx1ZSE9PXAudmFsKCkmJiFlbC5kYXRhKCdjaGFuZ2VkJykpe2VsLnRyaWdnZXIoJ2NoYW5nZScpO31lbC5kYXRhKCdjaGFuZ2VkJyxmYWxzZSk7fSkub24oJ2JsdXIubWFzaycsZnVuY3Rpb24oKXtvbGRWYWx1ZT1wLnZhbCgpO30pLm9uKCdmb2N1cy5tYXNrJyxmdW5jdGlvbihlKXtpZihvcHRpb25zLnNlbGVjdE9uRm9jdXM9PT10cnVlKXskKGUudGFyZ2V0KS5zZWxlY3QoKTt9fSkub24oJ2ZvY3Vzb3V0Lm1hc2snLGZ1bmN0aW9uKCl7aWYob3B0aW9ucy5jbGVhcklmTm90TWF0Y2gmJiFyZWdleE1hc2sudGVzdChwLnZhbCgpKSl7cC52YWwoJycpO319KTt9LGdldFJlZ2V4TWFzazpmdW5jdGlvbigpe3ZhciBtYXNrQ2h1bmtzPVtdLHRyYW5zbGF0aW9uLHBhdHRlcm4sb3B0aW9uYWwscmVjdXJzaXZlLG9SZWN1cnNpdmUscjtmb3IodmFyIGk9MDtpPG1hc2subGVuZ3RoO2krKyl7dHJhbnNsYXRpb249ak1hc2sudHJhbnNsYXRpb25bbWFzay5jaGFyQXQoaSldO2lmKHRyYW5zbGF0aW9uKXtwYXR0ZXJuPXRyYW5zbGF0aW9uLnBhdHRlcm4udG9TdHJpbmcoKS5yZXBsYWNlKC8uezF9JHxeLnsxfS9nLCcnKTtvcHRpb25hbD10cmFuc2xhdGlvbi5vcHRpb25hbDtyZWN1cnNpdmU9dHJhbnNsYXRpb24ucmVjdXJzaXZlO2lmKHJlY3Vyc2l2ZSl7bWFza0NodW5rcy5wdXNoKG1hc2suY2hhckF0KGkpKTtvUmVjdXJzaXZlPXtkaWdpdDptYXNrLmNoYXJBdChpKSxwYXR0ZXJuOnBhdHRlcm59O31lbHNle21hc2tDaHVua3MucHVzaCghb3B0aW9uYWwmJiFyZWN1cnNpdmU/cGF0dGVybjoocGF0dGVybisnPycpKTt9fWVsc2V7bWFza0NodW5rcy5wdXNoKG1hc2suY2hhckF0KGkpLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywnXFxcXCQmJykpO319cj1tYXNrQ2h1bmtzLmpvaW4oJycpO2lmKG9SZWN1cnNpdmUpe3I9ci5yZXBsYWNlKG5ldyBSZWdFeHAoJygnK29SZWN1cnNpdmUuZGlnaXQrJyguKicrb1JlY3Vyc2l2ZS5kaWdpdCsnKT8pJyksJygkMSk/JykucmVwbGFjZShuZXcgUmVnRXhwKG9SZWN1cnNpdmUuZGlnaXQsJ2cnKSxvUmVjdXJzaXZlLnBhdHRlcm4pO31yZXR1cm4gbmV3IFJlZ0V4cChyKTt9LGRlc3Ryb3lFdmVudHM6ZnVuY3Rpb24oKXtlbC5vZmYoWydpbnB1dCcsJ2tleWRvd24nLCdrZXl1cCcsJ3Bhc3RlJywnZHJvcCcsJ2JsdXInLCdmb2N1c291dCcsJyddLmpvaW4oJy5tYXNrICcpKTt9LHZhbDpmdW5jdGlvbih2KXt2YXIgaXNJbnB1dD1lbC5pcygnaW5wdXQnKSxtZXRob2Q9aXNJbnB1dD8ndmFsJzondGV4dCcscjtpZihhcmd1bWVudHMubGVuZ3RoPjApe2lmKGVsW21ldGhvZF0oKSE9PXYpe2VsW21ldGhvZF0odik7fXI9ZWw7fWVsc2V7cj1lbFttZXRob2RdKCk7fXJldHVybiByO30sZ2V0TUNoYXJzQmVmb3JlQ291bnQ6ZnVuY3Rpb24oaW5kZXgsb25DbGVhblZhbCl7Zm9yKHZhciBjb3VudD0wLGk9MCxtYXNrTD1tYXNrLmxlbmd0aDtpPG1hc2tMJiZpPGluZGV4O2krKyl7aWYoIWpNYXNrLnRyYW5zbGF0aW9uW21hc2suY2hhckF0KGkpXSl7aW5kZXg9b25DbGVhblZhbD9pbmRleCsxOmluZGV4O2NvdW50Kys7fX1yZXR1cm4gY291bnQ7fSxjYXJldFBvczpmdW5jdGlvbihvcmlnaW5hbENhcmV0UG9zLG9sZExlbmd0aCxuZXdMZW5ndGgsbWFza0RpZil7dmFyIHRyYW5zbGF0aW9uPWpNYXNrLnRyYW5zbGF0aW9uW21hc2suY2hhckF0KE1hdGgubWluKG9yaWdpbmFsQ2FyZXRQb3MtMSxtYXNrLmxlbmd0aC0xKSldO3JldHVybiF0cmFuc2xhdGlvbj9wLmNhcmV0UG9zKG9yaWdpbmFsQ2FyZXRQb3MrMSxvbGRMZW5ndGgsbmV3TGVuZ3RoLG1hc2tEaWYpOk1hdGgubWluKG9yaWdpbmFsQ2FyZXRQb3MrbmV3TGVuZ3RoLW9sZExlbmd0aC1tYXNrRGlmLG5ld0xlbmd0aCk7fSxiZWhhdmlvdXI6ZnVuY3Rpb24oZSl7ZT1lfHx3aW5kb3cuZXZlbnQ7cC5pbnZhbGlkPVtdO3ZhciBrZXlDb2RlPWVsLmRhdGEoJ21hc2sta2V5Y29kZScpO2lmKCQuaW5BcnJheShrZXlDb2RlLGpNYXNrLmJ5UGFzc0tleXMpPT09LTEpe3ZhciBjYXJldFBvcz1wLmdldENhcmV0KCksY3VyclZhbD1wLnZhbCgpLGN1cnJWYWxMPWN1cnJWYWwubGVuZ3RoLG5ld1ZhbD1wLmdldE1hc2tlZCgpLG5ld1ZhbEw9bmV3VmFsLmxlbmd0aCxtYXNrRGlmPXAuZ2V0TUNoYXJzQmVmb3JlQ291bnQobmV3VmFsTC0xKS1wLmdldE1DaGFyc0JlZm9yZUNvdW50KGN1cnJWYWxMLTEpLGNoYW5nZUNhcmV0PWNhcmV0UG9zPGN1cnJWYWxMO3AudmFsKG5ld1ZhbCk7aWYoY2hhbmdlQ2FyZXQpe2lmKCEoa2V5Q29kZT09PTh8fGtleUNvZGU9PT00Nikpe2NhcmV0UG9zPXAuY2FyZXRQb3MoY2FyZXRQb3MsY3VyclZhbEwsbmV3VmFsTCxtYXNrRGlmKTt9cC5zZXRDYXJldChjYXJldFBvcyk7fXJldHVybiBwLmNhbGxiYWNrcyhlKTt9fSxnZXRNYXNrZWQ6ZnVuY3Rpb24oc2tpcE1hc2tDaGFycyx2YWwpe3ZhciBidWY9W10sdmFsdWU9dmFsPT09dW5kZWZpbmVkP3AudmFsKCk6dmFsKycnLG09MCxtYXNrTGVuPW1hc2subGVuZ3RoLHY9MCx2YWxMZW49dmFsdWUubGVuZ3RoLG9mZnNldD0xLGFkZE1ldGhvZD0ncHVzaCcscmVzZXRQb3M9LTEsbGFzdE1hc2tDaGFyLGNoZWNrO2lmKG9wdGlvbnMucmV2ZXJzZSl7YWRkTWV0aG9kPSd1bnNoaWZ0JztvZmZzZXQ9LTE7bGFzdE1hc2tDaGFyPTA7bT1tYXNrTGVuLTE7dj12YWxMZW4tMTtjaGVjaz1mdW5jdGlvbigpe3JldHVybiBtPi0xJiZ2Pi0xO307fWVsc2V7bGFzdE1hc2tDaGFyPW1hc2tMZW4tMTtjaGVjaz1mdW5jdGlvbigpe3JldHVybiBtPG1hc2tMZW4mJnY8dmFsTGVuO307fXdoaWxlKGNoZWNrKCkpe3ZhciBtYXNrRGlnaXQ9bWFzay5jaGFyQXQobSksdmFsRGlnaXQ9dmFsdWUuY2hhckF0KHYpLHRyYW5zbGF0aW9uPWpNYXNrLnRyYW5zbGF0aW9uW21hc2tEaWdpdF07aWYodHJhbnNsYXRpb24pe2lmKHZhbERpZ2l0Lm1hdGNoKHRyYW5zbGF0aW9uLnBhdHRlcm4pKXtidWZbYWRkTWV0aG9kXSh2YWxEaWdpdCk7aWYodHJhbnNsYXRpb24ucmVjdXJzaXZlKXtpZihyZXNldFBvcz09PS0xKXtyZXNldFBvcz1tO31lbHNlIGlmKG09PT1sYXN0TWFza0NoYXIpe209cmVzZXRQb3Mtb2Zmc2V0O31pZihsYXN0TWFza0NoYXI9PT1yZXNldFBvcyl7bS09b2Zmc2V0O319bSs9b2Zmc2V0O31lbHNlIGlmKHRyYW5zbGF0aW9uLm9wdGlvbmFsKXttKz1vZmZzZXQ7di09b2Zmc2V0O31lbHNlIGlmKHRyYW5zbGF0aW9uLmZhbGxiYWNrKXtidWZbYWRkTWV0aG9kXSh0cmFuc2xhdGlvbi5mYWxsYmFjayk7bSs9b2Zmc2V0O3YtPW9mZnNldDt9ZWxzZXtwLmludmFsaWQucHVzaCh7cDp2LHY6dmFsRGlnaXQsZTp0cmFuc2xhdGlvbi5wYXR0ZXJufSk7fXYrPW9mZnNldDt9ZWxzZXtpZighc2tpcE1hc2tDaGFycyl7YnVmW2FkZE1ldGhvZF0obWFza0RpZ2l0KTt9aWYodmFsRGlnaXQ9PT1tYXNrRGlnaXQpe3YrPW9mZnNldDt9bSs9b2Zmc2V0O319dmFyIGxhc3RNYXNrQ2hhckRpZ2l0PW1hc2suY2hhckF0KGxhc3RNYXNrQ2hhcik7aWYobWFza0xlbj09PXZhbExlbisxJiYhak1hc2sudHJhbnNsYXRpb25bbGFzdE1hc2tDaGFyRGlnaXRdKXtidWYucHVzaChsYXN0TWFza0NoYXJEaWdpdCk7fXJldHVybiBidWYuam9pbignJyk7fSxjYWxsYmFja3M6ZnVuY3Rpb24oZSl7dmFyIHZhbD1wLnZhbCgpLGNoYW5nZWQ9dmFsIT09b2xkVmFsdWUsZGVmYXVsdEFyZ3M9W3ZhbCxlLGVsLG9wdGlvbnNdLGNhbGxiYWNrPWZ1bmN0aW9uKG5hbWUsY3JpdGVyaWEsYXJncyl7aWYodHlwZW9mIG9wdGlvbnNbbmFtZV09PT0nZnVuY3Rpb24nJiZjcml0ZXJpYSl7b3B0aW9uc1tuYW1lXS5hcHBseSh0aGlzLGFyZ3MpO319O2NhbGxiYWNrKCdvbkNoYW5nZScsY2hhbmdlZD09PXRydWUsZGVmYXVsdEFyZ3MpO2NhbGxiYWNrKCdvbktleVByZXNzJyxjaGFuZ2VkPT09dHJ1ZSxkZWZhdWx0QXJncyk7Y2FsbGJhY2soJ29uQ29tcGxldGUnLHZhbC5sZW5ndGg9PT1tYXNrLmxlbmd0aCxkZWZhdWx0QXJncyk7Y2FsbGJhY2soJ29uSW52YWxpZCcscC5pbnZhbGlkLmxlbmd0aD4wLFt2YWwsZSxlbCxwLmludmFsaWQsb3B0aW9uc10pO319O2VsPSQoZWwpO3ZhciBqTWFzaz10aGlzLG9sZFZhbHVlPXAudmFsKCkscmVnZXhNYXNrO21hc2s9dHlwZW9mIG1hc2s9PT0nZnVuY3Rpb24nP21hc2socC52YWwoKSx1bmRlZmluZWQsZWwsb3B0aW9ucyk6bWFzaztqTWFzay5tYXNrPW1hc2s7ak1hc2sub3B0aW9ucz1vcHRpb25zO2pNYXNrLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBjYXJldD1wLmdldENhcmV0KCk7cC5kZXN0cm95RXZlbnRzKCk7cC52YWwoak1hc2suZ2V0Q2xlYW5WYWwoKSk7cC5zZXRDYXJldChjYXJldC1wLmdldE1DaGFyc0JlZm9yZUNvdW50KGNhcmV0KSk7cmV0dXJuIGVsO307ak1hc2suZ2V0Q2xlYW5WYWw9ZnVuY3Rpb24oKXtyZXR1cm4gcC5nZXRNYXNrZWQodHJ1ZSk7fTtqTWFzay5nZXRNYXNrZWRWYWw9ZnVuY3Rpb24odmFsKXtyZXR1cm4gcC5nZXRNYXNrZWQoZmFsc2UsdmFsKTt9O2pNYXNrLmluaXQ9ZnVuY3Rpb24ob25seU1hc2spe29ubHlNYXNrPW9ubHlNYXNrfHxmYWxzZTtvcHRpb25zPW9wdGlvbnN8fHt9O2pNYXNrLmNsZWFySWZOb3RNYXRjaD0kLmpNYXNrR2xvYmFscy5jbGVhcklmTm90TWF0Y2g7ak1hc2suYnlQYXNzS2V5cz0kLmpNYXNrR2xvYmFscy5ieVBhc3NLZXlzO2pNYXNrLnRyYW5zbGF0aW9uPSQuZXh0ZW5kKHt9LCQuak1hc2tHbG9iYWxzLnRyYW5zbGF0aW9uLG9wdGlvbnMudHJhbnNsYXRpb24pO2pNYXNrPSQuZXh0ZW5kKHRydWUse30sak1hc2ssb3B0aW9ucyk7cmVnZXhNYXNrPXAuZ2V0UmVnZXhNYXNrKCk7aWYob25seU1hc2s9PT1mYWxzZSl7aWYob3B0aW9ucy5wbGFjZWhvbGRlcil7ZWwuYXR0cigncGxhY2Vob2xkZXInLG9wdGlvbnMucGxhY2Vob2xkZXIpO31pZihlbC5kYXRhKCdtYXNrJykpe2VsLmF0dHIoJ2F1dG9jb21wbGV0ZScsJ29mZicpO31wLmRlc3Ryb3lFdmVudHMoKTtwLmV2ZW50cygpO3ZhciBjYXJldD1wLmdldENhcmV0KCk7cC52YWwocC5nZXRNYXNrZWQoKSk7cC5zZXRDYXJldChjYXJldCtwLmdldE1DaGFyc0JlZm9yZUNvdW50KGNhcmV0LHRydWUpKTt9ZWxzZXtwLmV2ZW50cygpO3AudmFsKHAuZ2V0TWFza2VkKCkpO319O2pNYXNrLmluaXQoIWVsLmlzKCdpbnB1dCcpKTt9OyQubWFza1dhdGNoZXJzPXt9O3ZhciBIVE1MQXR0cmlidXRlcz1mdW5jdGlvbigpe3ZhciBpbnB1dD0kKHRoaXMpLG9wdGlvbnM9e30scHJlZml4PSdkYXRhLW1hc2stJyxtYXNrPWlucHV0LmF0dHIoJ2RhdGEtbWFzaycpO2lmKGlucHV0LmF0dHIocHJlZml4KydyZXZlcnNlJykpe29wdGlvbnMucmV2ZXJzZT10cnVlO31pZihpbnB1dC5hdHRyKCdkYXRhLXJlcXVpcmUnKSl7b3B0aW9ucy5jbGVhcklmTm90TWF0Y2g9dHJ1ZTt9aWYoaW5wdXQuYXR0cihwcmVmaXgrJ3NlbGVjdG9uZm9jdXMnKT09PSd0cnVlJyl7b3B0aW9ucy5zZWxlY3RPbkZvY3VzPXRydWU7fWlmKG5vdFNhbWVNYXNrT2JqZWN0KGlucHV0LG1hc2ssb3B0aW9ucykpe3JldHVybiBpbnB1dC5kYXRhKCdtYXNrJyxuZXcgTWFzayh0aGlzLG1hc2ssb3B0aW9ucykpO319LG5vdFNhbWVNYXNrT2JqZWN0PWZ1bmN0aW9uKGZpZWxkLG1hc2ssb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTt2YXIgbWFza09iamVjdD0kKGZpZWxkKS5kYXRhKCdtYXNrJyksc3RyaW5naWZ5PUpTT04uc3RyaW5naWZ5LHZhbHVlPSQoZmllbGQpLnZhbCgpfHwkKGZpZWxkKS50ZXh0KCk7dHJ5e2lmKHR5cGVvZiBtYXNrPT09J2Z1bmN0aW9uJyl7bWFzaz1tYXNrKHZhbHVlKTt9cmV0dXJuIHR5cGVvZiBtYXNrT2JqZWN0IT09J29iamVjdCd8fHN0cmluZ2lmeShtYXNrT2JqZWN0Lm9wdGlvbnMpIT09c3RyaW5naWZ5KG9wdGlvbnMpfHxtYXNrT2JqZWN0Lm1hc2shPT1tYXNrO31jYXRjaChlKXt9fSxldmVudFN1cHBvcnRlZD1mdW5jdGlvbihldmVudE5hbWUpe3ZhciBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxpc1N1cHBvcnRlZDtldmVudE5hbWU9J29uJytldmVudE5hbWU7aXNTdXBwb3J0ZWQ9KGV2ZW50TmFtZSBpbiBlbCk7aWYoIWlzU3VwcG9ydGVkKXtlbC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCdyZXR1cm47Jyk7aXNTdXBwb3J0ZWQ9dHlwZW9mIGVsW2V2ZW50TmFtZV09PT0nZnVuY3Rpb24nO31lbD1udWxsO3JldHVybiBpc1N1cHBvcnRlZDt9OyQuZm4ubWFzaz1mdW5jdGlvbihtYXNrLG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307dmFyIHNlbGVjdG9yPXRoaXMuc2VsZWN0b3IsZ2xvYmFscz0kLmpNYXNrR2xvYmFscyxpbnRlcnZhbD1nbG9iYWxzLndhdGNoSW50ZXJ2YWwsd2F0Y2hJbnB1dHM9b3B0aW9ucy53YXRjaElucHV0c3x8Z2xvYmFscy53YXRjaElucHV0cyxtYXNrRnVuY3Rpb249ZnVuY3Rpb24oKXtpZihub3RTYW1lTWFza09iamVjdCh0aGlzLG1hc2ssb3B0aW9ucykpe3JldHVybiAkKHRoaXMpLmRhdGEoJ21hc2snLG5ldyBNYXNrKHRoaXMsbWFzayxvcHRpb25zKSk7fX07JCh0aGlzKS5lYWNoKG1hc2tGdW5jdGlvbik7aWYoc2VsZWN0b3ImJnNlbGVjdG9yIT09JycmJndhdGNoSW5wdXRzKXtjbGVhckludGVydmFsKCQubWFza1dhdGNoZXJzW3NlbGVjdG9yXSk7JC5tYXNrV2F0Y2hlcnNbc2VsZWN0b3JdPXNldEludGVydmFsKGZ1bmN0aW9uKCl7JChkb2N1bWVudCkuZmluZChzZWxlY3RvcikuZWFjaChtYXNrRnVuY3Rpb24pO30saW50ZXJ2YWwpO31yZXR1cm4gdGhpczt9OyQuZm4ubWFza2VkPWZ1bmN0aW9uKHZhbCl7cmV0dXJuIHRoaXMuZGF0YSgnbWFzaycpLmdldE1hc2tlZFZhbCh2YWwpO307JC5mbi51bm1hc2s9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKCQubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdKTtkZWxldGUgJC5tYXNrV2F0Y2hlcnNbdGhpcy5zZWxlY3Rvcl07cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkYXRhTWFzaz0kKHRoaXMpLmRhdGEoJ21hc2snKTtpZihkYXRhTWFzayl7ZGF0YU1hc2sucmVtb3ZlKCkucmVtb3ZlRGF0YSgnbWFzaycpO319KTt9OyQuZm4uY2xlYW5WYWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhKCdtYXNrJykuZ2V0Q2xlYW5WYWwoKTt9OyQuYXBwbHlEYXRhTWFzaz1mdW5jdGlvbihzZWxlY3Rvcil7c2VsZWN0b3I9c2VsZWN0b3J8fCQuak1hc2tHbG9iYWxzLm1hc2tFbGVtZW50czt2YXIgJHNlbGVjdG9yPShzZWxlY3RvciBpbnN0YW5jZW9mICQpP3NlbGVjdG9yOiQoc2VsZWN0b3IpOyRzZWxlY3Rvci5maWx0ZXIoJC5qTWFza0dsb2JhbHMuZGF0YU1hc2tBdHRyKS5lYWNoKEhUTUxBdHRyaWJ1dGVzKTt9O3ZhciBnbG9iYWxzPXttYXNrRWxlbWVudHM6J2lucHV0LHRkLHNwYW4sZGl2JyxkYXRhTWFza0F0dHI6JypbZGF0YS1tYXNrXScsZGF0YU1hc2s6dHJ1ZSx3YXRjaEludGVydmFsOjMwMCx3YXRjaElucHV0czp0cnVlLHVzZUlucHV0OmV2ZW50U3VwcG9ydGVkKCdpbnB1dCcpLHdhdGNoRGF0YU1hc2s6ZmFsc2UsYnlQYXNzS2V5czpbOSwxNiwxNywxOCwzNiwzNywzOCwzOSw0MCw5MV0sdHJhbnNsYXRpb246eycwJzp7cGF0dGVybjovXFxkL30sJzknOntwYXR0ZXJuOi9cXGQvLG9wdGlvbmFsOnRydWV9LCcjJzp7cGF0dGVybjovXFxkLyxyZWN1cnNpdmU6dHJ1ZX0sJ0EnOntwYXR0ZXJuOi9bYS16QS1aMC05XS99LCdTJzp7cGF0dGVybjovW2EtekEtWl0vfX19OyQuak1hc2tHbG9iYWxzPSQuak1hc2tHbG9iYWxzfHx7fTtnbG9iYWxzPSQuak1hc2tHbG9iYWxzPSQuZXh0ZW5kKHRydWUse30sZ2xvYmFscywkLmpNYXNrR2xvYmFscyk7aWYoZ2xvYmFscy5kYXRhTWFzayl7JC5hcHBseURhdGFNYXNrKCk7fXNldEludGVydmFsKGZ1bmN0aW9uKCl7aWYoJC5qTWFza0dsb2JhbHMud2F0Y2hEYXRhTWFzayl7JC5hcHBseURhdGFNYXNrKCk7fX0sZ2xvYmFscy53YXRjaEludGVydmFsKTt9LHdpbmRvdy5qUXVlcnksd2luZG93LlplcHRvKSk7IiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjkuMFxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuKGZ1bmN0aW9uKGkpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWkocmVxdWlyZShcImpxdWVyeVwiKSk6aShqUXVlcnkpfSkoZnVuY3Rpb24oaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9d2luZG93LlNsaWNrfHx7fTtlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLG8pe3ZhciBzLG49dGhpcztuLmRlZmF1bHRzPXthY2Nlc3NpYmlsaXR5OiEwLGFkYXB0aXZlSGVpZ2h0OiExLGFwcGVuZEFycm93czppKGUpLGFwcGVuZERvdHM6aShlKSxhcnJvd3M6ITAsYXNOYXZGb3I6bnVsbCxwcmV2QXJyb3c6JzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxuZXh0QXJyb3c6JzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsYXV0b3BsYXk6ITEsYXV0b3BsYXlTcGVlZDozZTMsY2VudGVyTW9kZTohMSxjZW50ZXJQYWRkaW5nOlwiNTBweFwiLGNzc0Vhc2U6XCJlYXNlXCIsY3VzdG9tUGFnaW5nOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGkoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dCh0KzEpfSxkb3RzOiExLGRvdHNDbGFzczpcInNsaWNrLWRvdHNcIixkcmFnZ2FibGU6ITAsZWFzaW5nOlwibGluZWFyXCIsZWRnZUZyaWN0aW9uOi4zNSxmYWRlOiExLGZvY3VzT25TZWxlY3Q6ITEsZm9jdXNPbkNoYW5nZTohMSxpbmZpbml0ZTohMCxpbml0aWFsU2xpZGU6MCxsYXp5TG9hZDpcIm9uZGVtYW5kXCIsbW9iaWxlRmlyc3Q6ITEscGF1c2VPbkhvdmVyOiEwLHBhdXNlT25Gb2N1czohMCxwYXVzZU9uRG90c0hvdmVyOiExLHJlc3BvbmRUbzpcIndpbmRvd1wiLHJlc3BvbnNpdmU6bnVsbCxyb3dzOjEscnRsOiExLHNsaWRlOlwiXCIsc2xpZGVzUGVyUm93OjEsc2xpZGVzVG9TaG93OjEsc2xpZGVzVG9TY3JvbGw6MSxzcGVlZDo1MDAsc3dpcGU6ITAsc3dpcGVUb1NsaWRlOiExLHRvdWNoTW92ZTohMCx0b3VjaFRocmVzaG9sZDo1LHVzZUNTUzohMCx1c2VUcmFuc2Zvcm06ITAsdmFyaWFibGVXaWR0aDohMSx2ZXJ0aWNhbDohMSx2ZXJ0aWNhbFN3aXBpbmc6ITEsd2FpdEZvckFuaW1hdGU6ITAsekluZGV4OjFlM30sbi5pbml0aWFscz17YW5pbWF0aW5nOiExLGRyYWdnaW5nOiExLGF1dG9QbGF5VGltZXI6bnVsbCxjdXJyZW50RGlyZWN0aW9uOjAsY3VycmVudExlZnQ6bnVsbCxjdXJyZW50U2xpZGU6MCxkaXJlY3Rpb246MSwkZG90czpudWxsLGxpc3RXaWR0aDpudWxsLGxpc3RIZWlnaHQ6bnVsbCxsb2FkSW5kZXg6MCwkbmV4dEFycm93Om51bGwsJHByZXZBcnJvdzpudWxsLHNjcm9sbGluZzohMSxzbGlkZUNvdW50Om51bGwsc2xpZGVXaWR0aDpudWxsLCRzbGlkZVRyYWNrOm51bGwsJHNsaWRlczpudWxsLHNsaWRpbmc6ITEsc2xpZGVPZmZzZXQ6MCxzd2lwZUxlZnQ6bnVsbCxzd2lwaW5nOiExLCRsaXN0Om51bGwsdG91Y2hPYmplY3Q6e30sdHJhbnNmb3Jtc0VuYWJsZWQ6ITEsdW5zbGlja2VkOiExfSxpLmV4dGVuZChuLG4uaW5pdGlhbHMpLG4uYWN0aXZlQnJlYWtwb2ludD1udWxsLG4uYW5pbVR5cGU9bnVsbCxuLmFuaW1Qcm9wPW51bGwsbi5icmVha3BvaW50cz1bXSxuLmJyZWFrcG9pbnRTZXR0aW5ncz1bXSxuLmNzc1RyYW5zaXRpb25zPSExLG4uZm9jdXNzZWQ9ITEsbi5pbnRlcnJ1cHRlZD0hMSxuLmhpZGRlbj1cImhpZGRlblwiLG4ucGF1c2VkPSEwLG4ucG9zaXRpb25Qcm9wPW51bGwsbi5yZXNwb25kVG89bnVsbCxuLnJvd0NvdW50PTEsbi5zaG91bGRDbGljaz0hMCxuLiRzbGlkZXI9aShlKSxuLiRzbGlkZXNDYWNoZT1udWxsLG4udHJhbnNmb3JtVHlwZT1udWxsLG4udHJhbnNpdGlvblR5cGU9bnVsbCxuLnZpc2liaWxpdHlDaGFuZ2U9XCJ2aXNpYmlsaXR5Y2hhbmdlXCIsbi53aW5kb3dXaWR0aD0wLG4ud2luZG93VGltZXI9bnVsbCxzPWkoZSkuZGF0YShcInNsaWNrXCIpfHx7fSxuLm9wdGlvbnM9aS5leHRlbmQoe30sbi5kZWZhdWx0cyxvLHMpLG4uY3VycmVudFNsaWRlPW4ub3B0aW9ucy5pbml0aWFsU2xpZGUsbi5vcmlnaW5hbFNldHRpbmdzPW4ub3B0aW9ucyxcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuPyhuLmhpZGRlbj1cIm1vekhpZGRlblwiLG4udmlzaWJpbGl0eUNoYW5nZT1cIm1venZpc2liaWxpdHljaGFuZ2VcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiYmKG4uaGlkZGVuPVwid2Via2l0SGlkZGVuXCIsbi52aXNpYmlsaXR5Q2hhbmdlPVwid2Via2l0dmlzaWJpbGl0eWNoYW5nZVwiKSxuLmF1dG9QbGF5PWkucHJveHkobi5hdXRvUGxheSxuKSxuLmF1dG9QbGF5Q2xlYXI9aS5wcm94eShuLmF1dG9QbGF5Q2xlYXIsbiksbi5hdXRvUGxheUl0ZXJhdG9yPWkucHJveHkobi5hdXRvUGxheUl0ZXJhdG9yLG4pLG4uY2hhbmdlU2xpZGU9aS5wcm94eShuLmNoYW5nZVNsaWRlLG4pLG4uY2xpY2tIYW5kbGVyPWkucHJveHkobi5jbGlja0hhbmRsZXIsbiksbi5zZWxlY3RIYW5kbGVyPWkucHJveHkobi5zZWxlY3RIYW5kbGVyLG4pLG4uc2V0UG9zaXRpb249aS5wcm94eShuLnNldFBvc2l0aW9uLG4pLG4uc3dpcGVIYW5kbGVyPWkucHJveHkobi5zd2lwZUhhbmRsZXIsbiksbi5kcmFnSGFuZGxlcj1pLnByb3h5KG4uZHJhZ0hhbmRsZXIsbiksbi5rZXlIYW5kbGVyPWkucHJveHkobi5rZXlIYW5kbGVyLG4pLG4uaW5zdGFuY2VVaWQ9dCsrLG4uaHRtbEV4cHI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvLG4ucmVnaXN0ZXJCcmVha3BvaW50cygpLG4uaW5pdCghMCl9dmFyIHQ9MDtyZXR1cm4gZX0oKSxlLnByb3RvdHlwZS5hY3RpdmF0ZUFEQT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWFjdGl2ZVwiKS5hdHRyKHtcImFyaWEtaGlkZGVuXCI6XCJmYWxzZVwifSkuZmluZChcImEsIGlucHV0LCBidXR0b24sIHNlbGVjdFwiKS5hdHRyKHt0YWJpbmRleDpcIjBcIn0pfSxlLnByb3RvdHlwZS5hZGRTbGlkZT1lLnByb3RvdHlwZS5zbGlja0FkZD1mdW5jdGlvbihlLHQsbyl7dmFyIHM9dGhpcztpZihcImJvb2xlYW5cIj09dHlwZW9mIHQpbz10LHQ9bnVsbDtlbHNlIGlmKHQ8MHx8dD49cy5zbGlkZUNvdW50KXJldHVybiExO3MudW5sb2FkKCksXCJudW1iZXJcIj09dHlwZW9mIHQ/MD09PXQmJjA9PT1zLiRzbGlkZXMubGVuZ3RoP2koZSkuYXBwZW5kVG8ocy4kc2xpZGVUcmFjayk6bz9pKGUpLmluc2VydEJlZm9yZShzLiRzbGlkZXMuZXEodCkpOmkoZSkuaW5zZXJ0QWZ0ZXIocy4kc2xpZGVzLmVxKHQpKTpvPT09ITA/aShlKS5wcmVwZW5kVG8ocy4kc2xpZGVUcmFjayk6aShlKS5hcHBlbmRUbyhzLiRzbGlkZVRyYWNrKSxzLiRzbGlkZXM9cy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLHMuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxzLiRzbGlkZVRyYWNrLmFwcGVuZChzLiRzbGlkZXMpLHMuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGUsdCl7aSh0KS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLGUpfSkscy4kc2xpZGVzQ2FjaGU9cy4kc2xpZGVzLHMucmVpbml0KCl9LGUucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2lmKDE9PT1pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZpLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQ9PT0hMCYmaS5vcHRpb25zLnZlcnRpY2FsPT09ITEpe3ZhciBlPWkuJHNsaWRlcy5lcShpLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQoITApO2kuJGxpc3QuYW5pbWF0ZSh7aGVpZ2h0OmV9LGkub3B0aW9ucy5zcGVlZCl9fSxlLnByb3RvdHlwZS5hbmltYXRlU2xpZGU9ZnVuY3Rpb24oZSx0KXt2YXIgbz17fSxzPXRoaXM7cy5hbmltYXRlSGVpZ2h0KCkscy5vcHRpb25zLnJ0bD09PSEwJiZzLm9wdGlvbnMudmVydGljYWw9PT0hMSYmKGU9LWUpLHMudHJhbnNmb3Jtc0VuYWJsZWQ9PT0hMT9zLm9wdGlvbnMudmVydGljYWw9PT0hMT9zLiRzbGlkZVRyYWNrLmFuaW1hdGUoe2xlZnQ6ZX0scy5vcHRpb25zLnNwZWVkLHMub3B0aW9ucy5lYXNpbmcsdCk6cy4kc2xpZGVUcmFjay5hbmltYXRlKHt0b3A6ZX0scy5vcHRpb25zLnNwZWVkLHMub3B0aW9ucy5lYXNpbmcsdCk6cy5jc3NUcmFuc2l0aW9ucz09PSExPyhzLm9wdGlvbnMucnRsPT09ITAmJihzLmN1cnJlbnRMZWZ0PS1zLmN1cnJlbnRMZWZ0KSxpKHthbmltU3RhcnQ6cy5jdXJyZW50TGVmdH0pLmFuaW1hdGUoe2FuaW1TdGFydDplfSx7ZHVyYXRpb246cy5vcHRpb25zLnNwZWVkLGVhc2luZzpzLm9wdGlvbnMuZWFzaW5nLHN0ZXA6ZnVuY3Rpb24oaSl7aT1NYXRoLmNlaWwoaSkscy5vcHRpb25zLnZlcnRpY2FsPT09ITE/KG9bcy5hbmltVHlwZV09XCJ0cmFuc2xhdGUoXCIraStcInB4LCAwcHgpXCIscy4kc2xpZGVUcmFjay5jc3MobykpOihvW3MuYW5pbVR5cGVdPVwidHJhbnNsYXRlKDBweCxcIitpK1wicHgpXCIscy4kc2xpZGVUcmFjay5jc3MobykpfSxjb21wbGV0ZTpmdW5jdGlvbigpe3QmJnQuY2FsbCgpfX0pKToocy5hcHBseVRyYW5zaXRpb24oKSxlPU1hdGguY2VpbChlKSxzLm9wdGlvbnMudmVydGljYWw9PT0hMT9vW3MuYW5pbVR5cGVdPVwidHJhbnNsYXRlM2QoXCIrZStcInB4LCAwcHgsIDBweClcIjpvW3MuYW5pbVR5cGVdPVwidHJhbnNsYXRlM2QoMHB4LFwiK2UrXCJweCwgMHB4KVwiLHMuJHNsaWRlVHJhY2suY3NzKG8pLHQmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtzLmRpc2FibGVUcmFuc2l0aW9uKCksdC5jYWxsKCl9LHMub3B0aW9ucy5zcGVlZCkpfSxlLnByb3RvdHlwZS5nZXROYXZUYXJnZXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5vcHRpb25zLmFzTmF2Rm9yO3JldHVybiB0JiZudWxsIT09dCYmKHQ9aSh0KS5ub3QoZS4kc2xpZGVyKSksdH0sZS5wcm90b3R5cGUuYXNOYXZGb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxvPXQuZ2V0TmF2VGFyZ2V0KCk7bnVsbCE9PW8mJlwib2JqZWN0XCI9PXR5cGVvZiBvJiZvLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1pKHRoaXMpLnNsaWNrKFwiZ2V0U2xpY2tcIik7dC51bnNsaWNrZWR8fHQuc2xpZGVIYW5kbGVyKGUsITApfSl9LGUucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbj1mdW5jdGlvbihpKXt2YXIgZT10aGlzLHQ9e307ZS5vcHRpb25zLmZhZGU9PT0hMT90W2UudHJhbnNpdGlvblR5cGVdPWUudHJhbnNmb3JtVHlwZStcIiBcIitlLm9wdGlvbnMuc3BlZWQrXCJtcyBcIitlLm9wdGlvbnMuY3NzRWFzZTp0W2UudHJhbnNpdGlvblR5cGVdPVwib3BhY2l0eSBcIitlLm9wdGlvbnMuc3BlZWQrXCJtcyBcIitlLm9wdGlvbnMuY3NzRWFzZSxlLm9wdGlvbnMuZmFkZT09PSExP2UuJHNsaWRlVHJhY2suY3NzKHQpOmUuJHNsaWRlcy5lcShpKS5jc3ModCl9LGUucHJvdG90eXBlLmF1dG9QbGF5PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmF1dG9QbGF5Q2xlYXIoKSxpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGkuYXV0b1BsYXlUaW1lcj1zZXRJbnRlcnZhbChpLmF1dG9QbGF5SXRlcmF0b3IsaS5vcHRpb25zLmF1dG9wbGF5U3BlZWQpKX0sZS5wcm90b3R5cGUuYXV0b1BsYXlDbGVhcj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheVRpbWVyJiZjbGVhckludGVydmFsKGkuYXV0b1BsYXlUaW1lcil9LGUucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3I9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLGU9aS5jdXJyZW50U2xpZGUraS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO2kucGF1c2VkfHxpLmludGVycnVwdGVkfHxpLmZvY3Vzc2VkfHwoaS5vcHRpb25zLmluZmluaXRlPT09ITEmJigxPT09aS5kaXJlY3Rpb24mJmkuY3VycmVudFNsaWRlKzE9PT1pLnNsaWRlQ291bnQtMT9pLmRpcmVjdGlvbj0wOjA9PT1pLmRpcmVjdGlvbiYmKGU9aS5jdXJyZW50U2xpZGUtaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGkuY3VycmVudFNsaWRlLTE9PT0wJiYoaS5kaXJlY3Rpb249MSkpKSxpLnNsaWRlSGFuZGxlcihlKSl9LGUucHJvdG90eXBlLmJ1aWxkQXJyb3dzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLm9wdGlvbnMuYXJyb3dzPT09ITAmJihlLiRwcmV2QXJyb3c9aShlLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcyhcInNsaWNrLWFycm93XCIpLGUuJG5leHRBcnJvdz1pKGUub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKFwic2xpY2stYXJyb3dcIiksZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3c/KGUuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gdGFiaW5kZXhcIiksZS4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiB0YWJpbmRleFwiKSxlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLnByZXZBcnJvdykmJmUuJHByZXZBcnJvdy5wcmVwZW5kVG8oZS5vcHRpb25zLmFwcGVuZEFycm93cyksZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5uZXh0QXJyb3cpJiZlLiRuZXh0QXJyb3cuYXBwZW5kVG8oZS5vcHRpb25zLmFwcGVuZEFycm93cyksZS5vcHRpb25zLmluZmluaXRlIT09ITAmJmUuJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpKTplLiRwcmV2QXJyb3cuYWRkKGUuJG5leHRBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1oaWRkZW5cIikuYXR0cih7XCJhcmlhLWRpc2FibGVkXCI6XCJ0cnVlXCIsdGFiaW5kZXg6XCItMVwifSkpfSxlLnByb3RvdHlwZS5idWlsZERvdHM9ZnVuY3Rpb24oKXt2YXIgZSx0LG89dGhpcztpZihvLm9wdGlvbnMuZG90cz09PSEwJiZvLnNsaWRlQ291bnQ+by5vcHRpb25zLnNsaWRlc1RvU2hvdyl7Zm9yKG8uJHNsaWRlci5hZGRDbGFzcyhcInNsaWNrLWRvdHRlZFwiKSx0PWkoXCI8dWwgLz5cIikuYWRkQ2xhc3Moby5vcHRpb25zLmRvdHNDbGFzcyksZT0wO2U8PW8uZ2V0RG90Q291bnQoKTtlKz0xKXQuYXBwZW5kKGkoXCI8bGkgLz5cIikuYXBwZW5kKG8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLG8sZSkpKTtvLiRkb3RzPXQuYXBwZW5kVG8oby5vcHRpb25zLmFwcGVuZERvdHMpLG8uJGRvdHMuZmluZChcImxpXCIpLmZpcnN0KCkuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIil9fSxlLnByb3RvdHlwZS5idWlsZE91dD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS4kc2xpZGVzPWUuJHNsaWRlci5jaGlsZHJlbihlLm9wdGlvbnMuc2xpZGUrXCI6bm90KC5zbGljay1jbG9uZWQpXCIpLmFkZENsYXNzKFwic2xpY2stc2xpZGVcIiksZS5zbGlkZUNvdW50PWUuJHNsaWRlcy5sZW5ndGgsZS4kc2xpZGVzLmVhY2goZnVuY3Rpb24oZSx0KXtpKHQpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsZSkuZGF0YShcIm9yaWdpbmFsU3R5bGluZ1wiLGkodCkuYXR0cihcInN0eWxlXCIpfHxcIlwiKX0pLGUuJHNsaWRlci5hZGRDbGFzcyhcInNsaWNrLXNsaWRlclwiKSxlLiRzbGlkZVRyYWNrPTA9PT1lLnNsaWRlQ291bnQ/aSgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKGUuJHNsaWRlcik6ZS4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKSxlLiRsaXN0PWUuJHNsaWRlVHJhY2sud3JhcCgnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCksZS4kc2xpZGVUcmFjay5jc3MoXCJvcGFjaXR5XCIsMCksZS5vcHRpb25zLmNlbnRlck1vZGUhPT0hMCYmZS5vcHRpb25zLnN3aXBlVG9TbGlkZSE9PSEwfHwoZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPTEpLGkoXCJpbWdbZGF0YS1sYXp5XVwiLGUuJHNsaWRlcikubm90KFwiW3NyY11cIikuYWRkQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLGUuc2V0dXBJbmZpbml0ZSgpLGUuYnVpbGRBcnJvd3MoKSxlLmJ1aWxkRG90cygpLGUudXBkYXRlRG90cygpLGUuc2V0U2xpZGVDbGFzc2VzKFwibnVtYmVyXCI9PXR5cGVvZiBlLmN1cnJlbnRTbGlkZT9lLmN1cnJlbnRTbGlkZTowKSxlLm9wdGlvbnMuZHJhZ2dhYmxlPT09ITAmJmUuJGxpc3QuYWRkQ2xhc3MoXCJkcmFnZ2FibGVcIil9LGUucHJvdG90eXBlLmJ1aWxkUm93cz1mdW5jdGlvbigpe3ZhciBpLGUsdCxvLHMsbixyLGw9dGhpcztpZihvPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxuPWwuJHNsaWRlci5jaGlsZHJlbigpLGwub3B0aW9ucy5yb3dzPjApe2ZvcihyPWwub3B0aW9ucy5zbGlkZXNQZXJSb3cqbC5vcHRpb25zLnJvd3Mscz1NYXRoLmNlaWwobi5sZW5ndGgvciksaT0wO2k8cztpKyspe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGU9MDtlPGwub3B0aW9ucy5yb3dzO2UrKyl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IodD0wO3Q8bC5vcHRpb25zLnNsaWRlc1BlclJvdzt0Kyspe3ZhciBjPWkqcisoZSpsLm9wdGlvbnMuc2xpZGVzUGVyUm93K3QpO24uZ2V0KGMpJiZhLmFwcGVuZENoaWxkKG4uZ2V0KGMpKX1kLmFwcGVuZENoaWxkKGEpfW8uYXBwZW5kQ2hpbGQoZCl9bC4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG8pLGwuJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jc3Moe3dpZHRoOjEwMC9sLm9wdGlvbnMuc2xpZGVzUGVyUm93K1wiJVwiLGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0pfX0sZS5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlPWZ1bmN0aW9uKGUsdCl7dmFyIG8scyxuLHI9dGhpcyxsPSExLGQ9ci4kc2xpZGVyLndpZHRoKCksYT13aW5kb3cuaW5uZXJXaWR0aHx8aSh3aW5kb3cpLndpZHRoKCk7aWYoXCJ3aW5kb3dcIj09PXIucmVzcG9uZFRvP249YTpcInNsaWRlclwiPT09ci5yZXNwb25kVG8/bj1kOlwibWluXCI9PT1yLnJlc3BvbmRUbyYmKG49TWF0aC5taW4oYSxkKSksci5vcHRpb25zLnJlc3BvbnNpdmUmJnIub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCYmbnVsbCE9PXIub3B0aW9ucy5yZXNwb25zaXZlKXtzPW51bGw7Zm9yKG8gaW4gci5icmVha3BvaW50cylyLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KG8pJiYoci5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0PT09ITE/bjxyLmJyZWFrcG9pbnRzW29dJiYocz1yLmJyZWFrcG9pbnRzW29dKTpuPnIuYnJlYWtwb2ludHNbb10mJihzPXIuYnJlYWtwb2ludHNbb10pKTtudWxsIT09cz9udWxsIT09ci5hY3RpdmVCcmVha3BvaW50PyhzIT09ci5hY3RpdmVCcmVha3BvaW50fHx0KSYmKHIuYWN0aXZlQnJlYWtwb2ludD1zLFwidW5zbGlja1wiPT09ci5icmVha3BvaW50U2V0dGluZ3Nbc10/ci51bnNsaWNrKHMpOihyLm9wdGlvbnM9aS5leHRlbmQoe30sci5vcmlnaW5hbFNldHRpbmdzLHIuYnJlYWtwb2ludFNldHRpbmdzW3NdKSxlPT09ITAmJihyLmN1cnJlbnRTbGlkZT1yLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxyLnJlZnJlc2goZSkpLGw9cyk6KHIuYWN0aXZlQnJlYWtwb2ludD1zLFwidW5zbGlja1wiPT09ci5icmVha3BvaW50U2V0dGluZ3Nbc10/ci51bnNsaWNrKHMpOihyLm9wdGlvbnM9aS5leHRlbmQoe30sci5vcmlnaW5hbFNldHRpbmdzLHIuYnJlYWtwb2ludFNldHRpbmdzW3NdKSxlPT09ITAmJihyLmN1cnJlbnRTbGlkZT1yLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxyLnJlZnJlc2goZSkpLGw9cyk6bnVsbCE9PXIuYWN0aXZlQnJlYWtwb2ludCYmKHIuYWN0aXZlQnJlYWtwb2ludD1udWxsLHIub3B0aW9ucz1yLm9yaWdpbmFsU2V0dGluZ3MsZT09PSEwJiYoci5jdXJyZW50U2xpZGU9ci5vcHRpb25zLmluaXRpYWxTbGlkZSksci5yZWZyZXNoKGUpLGw9cyksZXx8bD09PSExfHxyLiRzbGlkZXIudHJpZ2dlcihcImJyZWFrcG9pbnRcIixbcixsXSl9fSxlLnByb3RvdHlwZS5jaGFuZ2VTbGlkZT1mdW5jdGlvbihlLHQpe3ZhciBvLHMsbixyPXRoaXMsbD1pKGUuY3VycmVudFRhcmdldCk7c3dpdGNoKGwuaXMoXCJhXCIpJiZlLnByZXZlbnREZWZhdWx0KCksbC5pcyhcImxpXCIpfHwobD1sLmNsb3Nlc3QoXCJsaVwiKSksbj1yLnNsaWRlQ291bnQlci5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT09MCxvPW4/MDooci5zbGlkZUNvdW50LXIuY3VycmVudFNsaWRlKSVyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsZS5kYXRhLm1lc3NhZ2Upe2Nhc2VcInByZXZpb3VzXCI6cz0wPT09bz9yLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6ci5vcHRpb25zLnNsaWRlc1RvU2hvdy1vLHIuc2xpZGVDb3VudD5yLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZyLnNsaWRlSGFuZGxlcihyLmN1cnJlbnRTbGlkZS1zLCExLHQpO2JyZWFrO2Nhc2VcIm5leHRcIjpzPTA9PT1vP3Iub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDpvLHIuc2xpZGVDb3VudD5yLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZyLnNsaWRlSGFuZGxlcihyLmN1cnJlbnRTbGlkZStzLCExLHQpO2JyZWFrO2Nhc2VcImluZGV4XCI6dmFyIGQ9MD09PWUuZGF0YS5pbmRleD8wOmUuZGF0YS5pbmRleHx8bC5pbmRleCgpKnIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtyLnNsaWRlSGFuZGxlcihyLmNoZWNrTmF2aWdhYmxlKGQpLCExLHQpLGwuY2hpbGRyZW4oKS50cmlnZ2VyKFwiZm9jdXNcIik7YnJlYWs7ZGVmYXVsdDpyZXR1cm59fSxlLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZT1mdW5jdGlvbihpKXt2YXIgZSx0LG89dGhpcztpZihlPW8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLHQ9MCxpPmVbZS5sZW5ndGgtMV0paT1lW2UubGVuZ3RoLTFdO2Vsc2UgZm9yKHZhciBzIGluIGUpe2lmKGk8ZVtzXSl7aT10O2JyZWFrfXQ9ZVtzXX1yZXR1cm4gaX0sZS5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5vcHRpb25zLmRvdHMmJm51bGwhPT1lLiRkb3RzJiYoaShcImxpXCIsZS4kZG90cykub2ZmKFwiY2xpY2suc2xpY2tcIixlLmNoYW5nZVNsaWRlKS5vZmYoXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSkub2ZmKFwibW91c2VsZWF2ZS5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMSkpLGUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmUuJGRvdHMub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlcikpLGUuJHNsaWRlci5vZmYoXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIpLGUub3B0aW9ucy5hcnJvd3M9PT0hMCYmZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihlLiRwcmV2QXJyb3cmJmUuJHByZXZBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiLGUuY2hhbmdlU2xpZGUpLGUuJG5leHRBcnJvdyYmZS4kbmV4dEFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIsZS5jaGFuZ2VTbGlkZSksZS5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmKGUuJHByZXZBcnJvdyYmZS4kcHJldkFycm93Lm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpLGUuJG5leHRBcnJvdyYmZS4kbmV4dEFycm93Lm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpKSksZS4kbGlzdC5vZmYoXCJ0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcInRvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2tcIixlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vZmYoXCJ0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrXCIsZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub2ZmKFwidG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcImNsaWNrLnNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGkoZG9jdW1lbnQpLm9mZihlLnZpc2liaWxpdHlDaGFuZ2UsZS52aXNpYmlsaXR5KSxlLmNsZWFuVXBTbGlkZUV2ZW50cygpLGUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmUuJGxpc3Qub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlciksZS5vcHRpb25zLmZvY3VzT25TZWxlY3Q9PT0hMCYmaShlLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZihcImNsaWNrLnNsaWNrXCIsZS5zZWxlY3RIYW5kbGVyKSxpKHdpbmRvdykub2ZmKFwib3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxlLm9yaWVudGF0aW9uQ2hhbmdlKSxpKHdpbmRvdykub2ZmKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5yZXNpemUpLGkoXCJbZHJhZ2dhYmxlIT10cnVlXVwiLGUuJHNsaWRlVHJhY2spLm9mZihcImRyYWdzdGFydFwiLGUucHJldmVudERlZmF1bHQpLGkod2luZG93KS5vZmYoXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5zZXRQb3NpdGlvbil9LGUucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS4kbGlzdC5vZmYoXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSksZS4kbGlzdC5vZmYoXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSl9LGUucHJvdG90eXBlLmNsZWFuVXBSb3dzPWZ1bmN0aW9uKCl7dmFyIGksZT10aGlzO2Uub3B0aW9ucy5yb3dzPjAmJihpPWUuJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCksaS5yZW1vdmVBdHRyKFwic3R5bGVcIiksZS4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKGkpKX0sZS5wcm90b3R5cGUuY2xpY2tIYW5kbGVyPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7ZS5zaG91bGRDbGljaz09PSExJiYoaS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxpLnN0b3BQcm9wYWdhdGlvbigpLGkucHJldmVudERlZmF1bHQoKSl9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0LmF1dG9QbGF5Q2xlYXIoKSx0LnRvdWNoT2JqZWN0PXt9LHQuY2xlYW5VcEV2ZW50cygpLGkoXCIuc2xpY2stY2xvbmVkXCIsdC4kc2xpZGVyKS5kZXRhY2goKSx0LiRkb3RzJiZ0LiRkb3RzLnJlbW92ZSgpLHQuJHByZXZBcnJvdyYmdC4kcHJldkFycm93Lmxlbmd0aCYmKHQuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleFwiKS5jc3MoXCJkaXNwbGF5XCIsXCJcIiksdC5odG1sRXhwci50ZXN0KHQub3B0aW9ucy5wcmV2QXJyb3cpJiZ0LiRwcmV2QXJyb3cucmVtb3ZlKCkpLHQuJG5leHRBcnJvdyYmdC4kbmV4dEFycm93Lmxlbmd0aCYmKHQuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleFwiKS5jc3MoXCJkaXNwbGF5XCIsXCJcIiksdC5odG1sRXhwci50ZXN0KHQub3B0aW9ucy5uZXh0QXJyb3cpJiZ0LiRuZXh0QXJyb3cucmVtb3ZlKCkpLHQuJHNsaWRlcyYmKHQuJHNsaWRlcy5yZW1vdmVDbGFzcyhcInNsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50XCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zbGljay1pbmRleFwiKS5lYWNoKGZ1bmN0aW9uKCl7aSh0aGlzKS5hdHRyKFwic3R5bGVcIixpKHRoaXMpLmRhdGEoXCJvcmlnaW5hbFN0eWxpbmdcIikpfSksdC4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLHQuJHNsaWRlVHJhY2suZGV0YWNoKCksdC4kbGlzdC5kZXRhY2goKSx0LiRzbGlkZXIuYXBwZW5kKHQuJHNsaWRlcykpLHQuY2xlYW5VcFJvd3MoKSx0LiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZXJcIiksdC4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIiksdC4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stZG90dGVkXCIpLHQudW5zbGlja2VkPSEwLGV8fHQuJHNsaWRlci50cmlnZ2VyKFwiZGVzdHJveVwiLFt0XSl9LGUucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXMsdD17fTt0W2UudHJhbnNpdGlvblR5cGVdPVwiXCIsZS5vcHRpb25zLmZhZGU9PT0hMT9lLiRzbGlkZVRyYWNrLmNzcyh0KTplLiRzbGlkZXMuZXEoaSkuY3NzKHQpfSxlLnByb3RvdHlwZS5mYWRlU2xpZGU9ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzO3QuY3NzVHJhbnNpdGlvbnM9PT0hMT8odC4kc2xpZGVzLmVxKGkpLmNzcyh7ekluZGV4OnQub3B0aW9ucy56SW5kZXh9KSx0LiRzbGlkZXMuZXEoaSkuYW5pbWF0ZSh7b3BhY2l0eToxfSx0Lm9wdGlvbnMuc3BlZWQsdC5vcHRpb25zLmVhc2luZyxlKSk6KHQuYXBwbHlUcmFuc2l0aW9uKGkpLHQuJHNsaWRlcy5lcShpKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6dC5vcHRpb25zLnpJbmRleH0pLGUmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmRpc2FibGVUcmFuc2l0aW9uKGkpLGUuY2FsbCgpfSx0Lm9wdGlvbnMuc3BlZWQpKX0sZS5wcm90b3R5cGUuZmFkZVNsaWRlT3V0PWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7ZS5jc3NUcmFuc2l0aW9ucz09PSExP2UuJHNsaWRlcy5lcShpKS5hbmltYXRlKHtvcGFjaXR5OjAsekluZGV4OmUub3B0aW9ucy56SW5kZXgtMn0sZS5vcHRpb25zLnNwZWVkLGUub3B0aW9ucy5lYXNpbmcpOihlLmFwcGx5VHJhbnNpdGlvbihpKSxlLiRzbGlkZXMuZXEoaSkuY3NzKHtvcGFjaXR5OjAsekluZGV4OmUub3B0aW9ucy56SW5kZXgtMn0pKX0sZS5wcm90b3R5cGUuZmlsdGVyU2xpZGVzPWUucHJvdG90eXBlLnNsaWNrRmlsdGVyPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7bnVsbCE9PWkmJihlLiRzbGlkZXNDYWNoZT1lLiRzbGlkZXMsZS51bmxvYWQoKSxlLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksZS4kc2xpZGVzQ2FjaGUuZmlsdGVyKGkpLmFwcGVuZFRvKGUuJHNsaWRlVHJhY2spLGUucmVpbml0KCkpfSxlLnByb3RvdHlwZS5mb2N1c0hhbmRsZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuJHNsaWRlci5vZmYoXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIpLm9uKFwiZm9jdXMuc2xpY2tcIixcIipcIixmdW5jdGlvbih0KXt2YXIgbz1pKHRoaXMpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlLm9wdGlvbnMucGF1c2VPbkZvY3VzJiZvLmlzKFwiOmZvY3VzXCIpJiYoZS5mb2N1c3NlZD0hMCxlLmF1dG9QbGF5KCkpfSwwKX0pLm9uKFwiYmx1ci5zbGlja1wiLFwiKlwiLGZ1bmN0aW9uKHQpe2kodGhpcyk7ZS5vcHRpb25zLnBhdXNlT25Gb2N1cyYmKGUuZm9jdXNzZWQ9ITEsZS5hdXRvUGxheSgpKX0pfSxlLnByb3RvdHlwZS5nZXRDdXJyZW50PWUucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztyZXR1cm4gaS5jdXJyZW50U2xpZGV9LGUucHJvdG90eXBlLmdldERvdENvdW50PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxlPTAsdD0wLG89MDtpZihpLm9wdGlvbnMuaW5maW5pdGU9PT0hMClpZihpLnNsaWRlQ291bnQ8PWkub3B0aW9ucy5zbGlkZXNUb1Nob3cpKytvO2Vsc2UgZm9yKDtlPGkuc2xpZGVDb3VudDspKytvLGU9dCtpLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsdCs9aS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1pLm9wdGlvbnMuc2xpZGVzVG9TaG93P2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDppLm9wdGlvbnMuc2xpZGVzVG9TaG93O2Vsc2UgaWYoaS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMClvPWkuc2xpZGVDb3VudDtlbHNlIGlmKGkub3B0aW9ucy5hc05hdkZvcilmb3IoO2U8aS5zbGlkZUNvdW50OykrK28sZT10K2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCx0Kz1pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw8PWkub3B0aW9ucy5zbGlkZXNUb1Nob3c/aS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmkub3B0aW9ucy5zbGlkZXNUb1Nob3c7ZWxzZSBvPTErTWF0aC5jZWlsKChpLnNsaWRlQ291bnQtaS5vcHRpb25zLnNsaWRlc1RvU2hvdykvaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtyZXR1cm4gby0xfSxlLnByb3RvdHlwZS5nZXRMZWZ0PWZ1bmN0aW9uKGkpe3ZhciBlLHQsbyxzLG49dGhpcyxyPTA7cmV0dXJuIG4uc2xpZGVPZmZzZXQ9MCx0PW4uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSxuLm9wdGlvbnMuaW5maW5pdGU9PT0hMD8obi5zbGlkZUNvdW50Pm4ub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihuLnNsaWRlT2Zmc2V0PW4uc2xpZGVXaWR0aCpuLm9wdGlvbnMuc2xpZGVzVG9TaG93Ki0xLHM9LTEsbi5vcHRpb25zLnZlcnRpY2FsPT09ITAmJm4ub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJigyPT09bi5vcHRpb25zLnNsaWRlc1RvU2hvdz9zPS0xLjU6MT09PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihzPS0yKSkscj10Km4ub3B0aW9ucy5zbGlkZXNUb1Nob3cqcyksbi5zbGlkZUNvdW50JW4ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9PTAmJmkrbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPm4uc2xpZGVDb3VudCYmbi5zbGlkZUNvdW50Pm4ub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpPm4uc2xpZGVDb3VudD8obi5zbGlkZU9mZnNldD0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy0oaS1uLnNsaWRlQ291bnQpKSpuLnNsaWRlV2lkdGgqLTEscj0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy0oaS1uLnNsaWRlQ291bnQpKSp0Ki0xKToobi5zbGlkZU9mZnNldD1uLnNsaWRlQ291bnQlbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKm4uc2xpZGVXaWR0aCotMSxyPW4uc2xpZGVDb3VudCVuLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwqdCotMSkpKTppK24ub3B0aW9ucy5zbGlkZXNUb1Nob3c+bi5zbGlkZUNvdW50JiYobi5zbGlkZU9mZnNldD0oaStuLm9wdGlvbnMuc2xpZGVzVG9TaG93LW4uc2xpZGVDb3VudCkqbi5zbGlkZVdpZHRoLHI9KGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdy1uLnNsaWRlQ291bnQpKnQpLG4uc2xpZGVDb3VudDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKG4uc2xpZGVPZmZzZXQ9MCxyPTApLG4ub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJm4uc2xpZGVDb3VudDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvdz9uLnNsaWRlT2Zmc2V0PW4uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLzItbi5zbGlkZVdpZHRoKm4uc2xpZGVDb3VudC8yOm4ub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJm4ub3B0aW9ucy5pbmZpbml0ZT09PSEwP24uc2xpZGVPZmZzZXQrPW4uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiktbi5zbGlkZVdpZHRoOm4ub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJihuLnNsaWRlT2Zmc2V0PTAsbi5zbGlkZU9mZnNldCs9bi5zbGlkZVdpZHRoKk1hdGguZmxvb3Iobi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSksZT1uLm9wdGlvbnMudmVydGljYWw9PT0hMT9pKm4uc2xpZGVXaWR0aCotMStuLnNsaWRlT2Zmc2V0OmkqdCotMStyLG4ub3B0aW9ucy52YXJpYWJsZVdpZHRoPT09ITAmJihvPW4uc2xpZGVDb3VudDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvd3x8bi5vcHRpb25zLmluZmluaXRlPT09ITE/bi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShpKTpuLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdyksZT1uLm9wdGlvbnMucnRsPT09ITA/b1swXT8obi4kc2xpZGVUcmFjay53aWR0aCgpLW9bMF0ub2Zmc2V0TGVmdC1vLndpZHRoKCkpKi0xOjA6b1swXT9vWzBdLm9mZnNldExlZnQqLTE6MCxuLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwJiYobz1uLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3d8fG4ub3B0aW9ucy5pbmZpbml0ZT09PSExP24uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaSk6bi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3crMSksZT1uLm9wdGlvbnMucnRsPT09ITA/b1swXT8obi4kc2xpZGVUcmFjay53aWR0aCgpLW9bMF0ub2Zmc2V0TGVmdC1vLndpZHRoKCkpKi0xOjA6b1swXT9vWzBdLm9mZnNldExlZnQqLTE6MCxlKz0obi4kbGlzdC53aWR0aCgpLW8ub3V0ZXJXaWR0aCgpKS8yKSksZX0sZS5wcm90b3R5cGUuZ2V0T3B0aW9uPWUucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7cmV0dXJuIGUub3B0aW9uc1tpXX0sZS5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcz1mdW5jdGlvbigpe3ZhciBpLGU9dGhpcyx0PTAsbz0wLHM9W107Zm9yKGUub3B0aW9ucy5pbmZpbml0ZT09PSExP2k9ZS5zbGlkZUNvdW50Oih0PWUub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCotMSxvPWUub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCotMSxpPTIqZS5zbGlkZUNvdW50KTt0PGk7KXMucHVzaCh0KSx0PW8rZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLG8rPWUub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDw9ZS5vcHRpb25zLnNsaWRlc1RvU2hvdz9lLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6ZS5vcHRpb25zLnNsaWRlc1RvU2hvdztyZXR1cm4gc30sZS5wcm90b3R5cGUuZ2V0U2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sZS5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudD1mdW5jdGlvbigpe3ZhciBlLHQsbyxzLG49dGhpcztyZXR1cm4gcz1uLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwP01hdGguZmxvb3Iobi4kbGlzdC53aWR0aCgpLzIpOjAsbz1uLnN3aXBlTGVmdCotMStzLG4ub3B0aW9ucy5zd2lwZVRvU2xpZGU9PT0hMD8obi4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLmVhY2goZnVuY3Rpb24oZSxzKXt2YXIgcixsLGQ7aWYocj1pKHMpLm91dGVyV2lkdGgoKSxsPXMub2Zmc2V0TGVmdCxuLm9wdGlvbnMuY2VudGVyTW9kZSE9PSEwJiYobCs9ci8yKSxkPWwrcixvPGQpcmV0dXJuIHQ9cywhMX0pLGU9TWF0aC5hYnMoaSh0KS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiKS1uLmN1cnJlbnRTbGlkZSl8fDEpOm4ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbH0sZS5wcm90b3R5cGUuZ29Ubz1lLnByb3RvdHlwZS5zbGlja0dvVG89ZnVuY3Rpb24oaSxlKXt2YXIgdD10aGlzO3QuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6XCJpbmRleFwiLGluZGV4OnBhcnNlSW50KGkpfX0sZSl9LGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpKHQuJHNsaWRlcikuaGFzQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKXx8KGkodC4kc2xpZGVyKS5hZGRDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpLHQuYnVpbGRSb3dzKCksdC5idWlsZE91dCgpLHQuc2V0UHJvcHMoKSx0LnN0YXJ0TG9hZCgpLHQubG9hZFNsaWRlcigpLHQuaW5pdGlhbGl6ZUV2ZW50cygpLHQudXBkYXRlQXJyb3dzKCksdC51cGRhdGVEb3RzKCksdC5jaGVja1Jlc3BvbnNpdmUoITApLHQuZm9jdXNIYW5kbGVyKCkpLGUmJnQuJHNsaWRlci50cmlnZ2VyKFwiaW5pdFwiLFt0XSksdC5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmdC5pbml0QURBKCksdC5vcHRpb25zLmF1dG9wbGF5JiYodC5wYXVzZWQ9ITEsdC5hdXRvUGxheSgpKX0sZS5wcm90b3R5cGUuaW5pdEFEQT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1NYXRoLmNlaWwoZS5zbGlkZUNvdW50L2Uub3B0aW9ucy5zbGlkZXNUb1Nob3cpLG89ZS5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKGkpe3JldHVybiBpPj0wJiZpPGUuc2xpZGVDb3VudH0pO2UuJHNsaWRlcy5hZGQoZS4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKSkuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiLTFcIn0pLmZpbmQoXCJhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3RcIikuYXR0cih7dGFiaW5kZXg6XCItMVwifSksbnVsbCE9PWUuJGRvdHMmJihlLiRzbGlkZXMubm90KGUuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikpLmVhY2goZnVuY3Rpb24odCl7dmFyIHM9by5pbmRleE9mKHQpO2lmKGkodGhpcykuYXR0cih7cm9sZTpcInRhYnBhbmVsXCIsaWQ6XCJzbGljay1zbGlkZVwiK2UuaW5zdGFuY2VVaWQrdCx0YWJpbmRleDotMX0pLHMhPT0tMSl7dmFyIG49XCJzbGljay1zbGlkZS1jb250cm9sXCIrZS5pbnN0YW5jZVVpZCtzO2koXCIjXCIrbikubGVuZ3RoJiZpKHRoaXMpLmF0dHIoe1wiYXJpYS1kZXNjcmliZWRieVwiOm59KX19KSxlLiRkb3RzLmF0dHIoXCJyb2xlXCIsXCJ0YWJsaXN0XCIpLmZpbmQoXCJsaVwiKS5lYWNoKGZ1bmN0aW9uKHMpe3ZhciBuPW9bc107aSh0aGlzKS5hdHRyKHtyb2xlOlwicHJlc2VudGF0aW9uXCJ9KSxpKHRoaXMpLmZpbmQoXCJidXR0b25cIikuZmlyc3QoKS5hdHRyKHtyb2xlOlwidGFiXCIsaWQ6XCJzbGljay1zbGlkZS1jb250cm9sXCIrZS5pbnN0YW5jZVVpZCtzLFwiYXJpYS1jb250cm9sc1wiOlwic2xpY2stc2xpZGVcIitlLmluc3RhbmNlVWlkK24sXCJhcmlhLWxhYmVsXCI6cysxK1wiIG9mIFwiK3QsXCJhcmlhLXNlbGVjdGVkXCI6bnVsbCx0YWJpbmRleDpcIi0xXCJ9KX0pLmVxKGUuY3VycmVudFNsaWRlKS5maW5kKFwiYnV0dG9uXCIpLmF0dHIoe1wiYXJpYS1zZWxlY3RlZFwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiMFwifSkuZW5kKCkpO2Zvcih2YXIgcz1lLmN1cnJlbnRTbGlkZSxuPXMrZS5vcHRpb25zLnNsaWRlc1RvU2hvdztzPG47cysrKWUub3B0aW9ucy5mb2N1c09uQ2hhbmdlP2UuJHNsaWRlcy5lcShzKS5hdHRyKHt0YWJpbmRleDpcIjBcIn0pOmUuJHNsaWRlcy5lcShzKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIik7ZS5hY3RpdmF0ZUFEQSgpfSxlLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kub3B0aW9ucy5hcnJvd3M9PT0hMCYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIikub24oXCJjbGljay5zbGlja1wiLHttZXNzYWdlOlwicHJldmlvdXNcIn0saS5jaGFuZ2VTbGlkZSksaS4kbmV4dEFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcIm5leHRcIn0saS5jaGFuZ2VTbGlkZSksaS5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmKGkuJHByZXZBcnJvdy5vbihcImtleWRvd24uc2xpY2tcIixpLmtleUhhbmRsZXIpLGkuJG5leHRBcnJvdy5vbihcImtleWRvd24uc2xpY2tcIixpLmtleUhhbmRsZXIpKSl9LGUucHJvdG90eXBlLmluaXREb3RFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Uub3B0aW9ucy5kb3RzPT09ITAmJmUuc2xpZGVDb3VudD5lLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaShcImxpXCIsZS4kZG90cykub24oXCJjbGljay5zbGlja1wiLHttZXNzYWdlOlwiaW5kZXhcIn0sZS5jaGFuZ2VTbGlkZSksZS5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmZS4kZG90cy5vbihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpKSxlLm9wdGlvbnMuZG90cz09PSEwJiZlLm9wdGlvbnMucGF1c2VPbkRvdHNIb3Zlcj09PSEwJiZlLnNsaWRlQ291bnQ+ZS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmaShcImxpXCIsZS4kZG90cykub24oXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSkub24oXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSl9LGUucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5vcHRpb25zLnBhdXNlT25Ib3ZlciYmKGUuJGxpc3Qub24oXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSksZS4kbGlzdC5vbihcIm1vdXNlbGVhdmUuc2xpY2tcIixpLnByb3h5KGUuaW50ZXJydXB0LGUsITEpKSl9LGUucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuaW5pdEFycm93RXZlbnRzKCksZS5pbml0RG90RXZlbnRzKCksZS5pbml0U2xpZGVFdmVudHMoKSxlLiRsaXN0Lm9uKFwidG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2tcIix7YWN0aW9uOlwic3RhcnRcIn0sZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub24oXCJ0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrXCIse2FjdGlvbjpcIm1vdmVcIn0sZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub24oXCJ0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrXCIse2FjdGlvbjpcImVuZFwifSxlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vbihcInRvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2tcIix7YWN0aW9uOlwiZW5kXCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwiY2xpY2suc2xpY2tcIixlLmNsaWNrSGFuZGxlciksaShkb2N1bWVudCkub24oZS52aXNpYmlsaXR5Q2hhbmdlLGkucHJveHkoZS52aXNpYmlsaXR5LGUpKSxlLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiZlLiRsaXN0Lm9uKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlciksZS5vcHRpb25zLmZvY3VzT25TZWxlY3Q9PT0hMCYmaShlLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKFwiY2xpY2suc2xpY2tcIixlLnNlbGVjdEhhbmRsZXIpLGkod2luZG93KS5vbihcIm9yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsaS5wcm94eShlLm9yaWVudGF0aW9uQ2hhbmdlLGUpKSxpKHdpbmRvdykub24oXCJyZXNpemUuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxpLnByb3h5KGUucmVzaXplLGUpKSxpKFwiW2RyYWdnYWJsZSE9dHJ1ZV1cIixlLiRzbGlkZVRyYWNrKS5vbihcImRyYWdzdGFydFwiLGUucHJldmVudERlZmF1bHQpLGkod2luZG93KS5vbihcImxvYWQuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxlLnNldFBvc2l0aW9uKSxpKGUuc2V0UG9zaXRpb24pfSxlLnByb3RvdHlwZS5pbml0VUk9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kub3B0aW9ucy5hcnJvd3M9PT0hMCYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cuc2hvdygpLGkuJG5leHRBcnJvdy5zaG93KCkpLGkub3B0aW9ucy5kb3RzPT09ITAmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZpLiRkb3RzLnNob3coKX0sZS5wcm90b3R5cGUua2V5SGFuZGxlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2kudGFyZ2V0LnRhZ05hbWUubWF0Y2goXCJURVhUQVJFQXxJTlBVVHxTRUxFQ1RcIil8fCgzNz09PWkua2V5Q29kZSYmZS5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMD9lLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOmUub3B0aW9ucy5ydGw9PT0hMD9cIm5leHRcIjpcInByZXZpb3VzXCJ9fSk6Mzk9PT1pLmtleUNvZGUmJmUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmUuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6ZS5vcHRpb25zLnJ0bD09PSEwP1wicHJldmlvdXNcIjpcIm5leHRcIn19KSl9LGUucHJvdG90eXBlLmxhenlMb2FkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXtpKFwiaW1nW2RhdGEtbGF6eV1cIixlKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9aSh0aGlzKSx0PWkodGhpcykuYXR0cihcImRhdGEtbGF6eVwiKSxvPWkodGhpcykuYXR0cihcImRhdGEtc3Jjc2V0XCIpLHM9aSh0aGlzKS5hdHRyKFwiZGF0YS1zaXplc1wiKXx8ci4kc2xpZGVyLmF0dHIoXCJkYXRhLXNpemVzXCIpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtuLm9ubG9hZD1mdW5jdGlvbigpe2UuYW5pbWF0ZSh7b3BhY2l0eTowfSwxMDAsZnVuY3Rpb24oKXtvJiYoZS5hdHRyKFwic3Jjc2V0XCIsbykscyYmZS5hdHRyKFwic2l6ZXNcIixzKSksZS5hdHRyKFwic3JjXCIsdCkuYW5pbWF0ZSh7b3BhY2l0eToxfSwyMDAsZnVuY3Rpb24oKXtlLnJlbW92ZUF0dHIoXCJkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplc1wiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIil9KSxyLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkZWRcIixbcixlLHRdKX0pfSxuLm9uZXJyb3I9ZnVuY3Rpb24oKXtlLnJlbW92ZUF0dHIoXCJkYXRhLWxhenlcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLmFkZENsYXNzKFwic2xpY2stbGF6eWxvYWQtZXJyb3JcIiksci4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZEVycm9yXCIsW3IsZSx0XSl9LG4uc3JjPXR9KX12YXIgdCxvLHMsbixyPXRoaXM7aWYoci5vcHRpb25zLmNlbnRlck1vZGU9PT0hMD9yLm9wdGlvbnMuaW5maW5pdGU9PT0hMD8ocz1yLmN1cnJlbnRTbGlkZSsoci5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKzEpLG49cytyLm9wdGlvbnMuc2xpZGVzVG9TaG93KzIpOihzPU1hdGgubWF4KDAsci5jdXJyZW50U2xpZGUtKHIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSksbj0yKyhyLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIrMSkrci5jdXJyZW50U2xpZGUpOihzPXIub3B0aW9ucy5pbmZpbml0ZT9yLm9wdGlvbnMuc2xpZGVzVG9TaG93K3IuY3VycmVudFNsaWRlOnIuY3VycmVudFNsaWRlLG49TWF0aC5jZWlsKHMrci5vcHRpb25zLnNsaWRlc1RvU2hvdyksci5vcHRpb25zLmZhZGU9PT0hMCYmKHM+MCYmcy0tLG48PXIuc2xpZGVDb3VudCYmbisrKSksdD1yLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKS5zbGljZShzLG4pLFwiYW50aWNpcGF0ZWRcIj09PXIub3B0aW9ucy5sYXp5TG9hZClmb3IodmFyIGw9cy0xLGQ9bixhPXIuJHNsaWRlci5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLGM9MDtjPHIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtjKyspbDwwJiYobD1yLnNsaWRlQ291bnQtMSksdD10LmFkZChhLmVxKGwpKSx0PXQuYWRkKGEuZXEoZCkpLGwtLSxkKys7ZSh0KSxyLnNsaWRlQ291bnQ8PXIub3B0aW9ucy5zbGlkZXNUb1Nob3c/KG89ci4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIiksZShvKSk6ci5jdXJyZW50U2xpZGU+PXIuc2xpZGVDb3VudC1yLm9wdGlvbnMuc2xpZGVzVG9TaG93PyhvPXIuJHNsaWRlci5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5zbGljZSgwLHIub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGUobykpOjA9PT1yLmN1cnJlbnRTbGlkZSYmKG89ci4kc2xpZGVyLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpLnNsaWNlKHIub3B0aW9ucy5zbGlkZXNUb1Nob3cqLTEpLGUobykpfSxlLnByb3RvdHlwZS5sb2FkU2xpZGVyPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLnNldFBvc2l0aW9uKCksaS4kc2xpZGVUcmFjay5jc3Moe29wYWNpdHk6MX0pLGkuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksaS5pbml0VUkoKSxcInByb2dyZXNzaXZlXCI9PT1pLm9wdGlvbnMubGF6eUxvYWQmJmkucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpfSxlLnByb3RvdHlwZS5uZXh0PWUucHJvdG90eXBlLnNsaWNrTmV4dD1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcIm5leHRcIn19KX0sZS5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuY2hlY2tSZXNwb25zaXZlKCksaS5zZXRQb3NpdGlvbigpfSxlLnByb3RvdHlwZS5wYXVzZT1lLnByb3RvdHlwZS5zbGlja1BhdXNlPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmF1dG9QbGF5Q2xlYXIoKSxpLnBhdXNlZD0hMH0sZS5wcm90b3R5cGUucGxheT1lLnByb3RvdHlwZS5zbGlja1BsYXk9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuYXV0b1BsYXkoKSxpLm9wdGlvbnMuYXV0b3BsYXk9ITAsaS5wYXVzZWQ9ITEsaS5mb2N1c3NlZD0hMSxpLmludGVycnVwdGVkPSExfSxlLnByb3RvdHlwZS5wb3N0U2xpZGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZighdC51bnNsaWNrZWQmJih0LiRzbGlkZXIudHJpZ2dlcihcImFmdGVyQ2hhbmdlXCIsW3QsZV0pLHQuYW5pbWF0aW5nPSExLHQuc2xpZGVDb3VudD50Lm9wdGlvbnMuc2xpZGVzVG9TaG93JiZ0LnNldFBvc2l0aW9uKCksdC5zd2lwZUxlZnQ9bnVsbCx0Lm9wdGlvbnMuYXV0b3BsYXkmJnQuYXV0b1BsYXkoKSx0Lm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiYodC5pbml0QURBKCksdC5vcHRpb25zLmZvY3VzT25DaGFuZ2UpKSl7dmFyIG89aSh0LiRzbGlkZXMuZ2V0KHQuY3VycmVudFNsaWRlKSk7by5hdHRyKFwidGFiaW5kZXhcIiwwKS5mb2N1cygpfX0sZS5wcm90b3R5cGUucHJldj1lLnByb3RvdHlwZS5zbGlja1ByZXY9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6XCJwcmV2aW91c1wifX0pfSxlLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbihpKXtpLnByZXZlbnREZWZhdWx0KCl9LGUucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQ9ZnVuY3Rpb24oZSl7ZT1lfHwxO3ZhciB0LG8scyxuLHIsbD10aGlzLGQ9aShcImltZ1tkYXRhLWxhenldXCIsbC4kc2xpZGVyKTtkLmxlbmd0aD8odD1kLmZpcnN0KCksbz10LmF0dHIoXCJkYXRhLWxhenlcIikscz10LmF0dHIoXCJkYXRhLXNyY3NldFwiKSxuPXQuYXR0cihcImRhdGEtc2l6ZXNcIil8fGwuJHNsaWRlci5hdHRyKFwiZGF0YS1zaXplc1wiKSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksci5vbmxvYWQ9ZnVuY3Rpb24oKXtzJiYodC5hdHRyKFwic3Jjc2V0XCIscyksbiYmdC5hdHRyKFwic2l6ZXNcIixuKSksdC5hdHRyKFwic3JjXCIsbykucmVtb3ZlQXR0cihcImRhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKSxsLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQ9PT0hMCYmbC5zZXRQb3NpdGlvbigpLGwuJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRlZFwiLFtsLHQsb10pLGwucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpfSxyLm9uZXJyb3I9ZnVuY3Rpb24oKXtlPDM/c2V0VGltZW91dChmdW5jdGlvbigpe2wucHJvZ3Jlc3NpdmVMYXp5TG9hZChlKzEpfSw1MDApOih0LnJlbW92ZUF0dHIoXCJkYXRhLWxhenlcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLmFkZENsYXNzKFwic2xpY2stbGF6eWxvYWQtZXJyb3JcIiksbC4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZEVycm9yXCIsW2wsdCxvXSksbC5wcm9ncmVzc2l2ZUxhenlMb2FkKCkpfSxyLnNyYz1vKTpsLiRzbGlkZXIudHJpZ2dlcihcImFsbEltYWdlc0xvYWRlZFwiLFtsXSl9LGUucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oZSl7dmFyIHQsbyxzPXRoaXM7bz1zLnNsaWRlQ291bnQtcy5vcHRpb25zLnNsaWRlc1RvU2hvdywhcy5vcHRpb25zLmluZmluaXRlJiZzLmN1cnJlbnRTbGlkZT5vJiYocy5jdXJyZW50U2xpZGU9bykscy5zbGlkZUNvdW50PD1zLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYocy5jdXJyZW50U2xpZGU9MCksdD1zLmN1cnJlbnRTbGlkZSxzLmRlc3Ryb3koITApLGkuZXh0ZW5kKHMscy5pbml0aWFscyx7Y3VycmVudFNsaWRlOnR9KSxzLmluaXQoKSxlfHxzLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwiaW5kZXhcIixpbmRleDp0fX0sITEpfSxlLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzPWZ1bmN0aW9uKCl7dmFyIGUsdCxvLHM9dGhpcyxuPXMub3B0aW9ucy5yZXNwb25zaXZlfHxudWxsO2lmKFwiYXJyYXlcIj09PWkudHlwZShuKSYmbi5sZW5ndGgpe3MucmVzcG9uZFRvPXMub3B0aW9ucy5yZXNwb25kVG98fFwid2luZG93XCI7Zm9yKGUgaW4gbilpZihvPXMuYnJlYWtwb2ludHMubGVuZ3RoLTEsbi5oYXNPd25Qcm9wZXJ0eShlKSl7Zm9yKHQ9bltlXS5icmVha3BvaW50O28+PTA7KXMuYnJlYWtwb2ludHNbb10mJnMuYnJlYWtwb2ludHNbb109PT10JiZzLmJyZWFrcG9pbnRzLnNwbGljZShvLDEpLG8tLTtzLmJyZWFrcG9pbnRzLnB1c2godCkscy5icmVha3BvaW50U2V0dGluZ3NbdF09bltlXS5zZXR0aW5nc31zLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oaSxlKXtyZXR1cm4gcy5vcHRpb25zLm1vYmlsZUZpcnN0P2ktZTplLWl9KX19LGUucHJvdG90eXBlLnJlaW5pdD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS4kc2xpZGVzPWUuJHNsaWRlVHJhY2suY2hpbGRyZW4oZS5vcHRpb25zLnNsaWRlKS5hZGRDbGFzcyhcInNsaWNrLXNsaWRlXCIpLGUuc2xpZGVDb3VudD1lLiRzbGlkZXMubGVuZ3RoLGUuY3VycmVudFNsaWRlPj1lLnNsaWRlQ291bnQmJjAhPT1lLmN1cnJlbnRTbGlkZSYmKGUuY3VycmVudFNsaWRlPWUuY3VycmVudFNsaWRlLWUub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCksZS5zbGlkZUNvdW50PD1lLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoZS5jdXJyZW50U2xpZGU9MCksZS5yZWdpc3RlckJyZWFrcG9pbnRzKCksZS5zZXRQcm9wcygpLGUuc2V0dXBJbmZpbml0ZSgpLGUuYnVpbGRBcnJvd3MoKSxlLnVwZGF0ZUFycm93cygpLGUuaW5pdEFycm93RXZlbnRzKCksZS5idWlsZERvdHMoKSxlLnVwZGF0ZURvdHMoKSxlLmluaXREb3RFdmVudHMoKSxlLmNsZWFuVXBTbGlkZUV2ZW50cygpLGUuaW5pdFNsaWRlRXZlbnRzKCksZS5jaGVja1Jlc3BvbnNpdmUoITEsITApLGUub3B0aW9ucy5mb2N1c09uU2VsZWN0PT09ITAmJmkoZS4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbihcImNsaWNrLnNsaWNrXCIsZS5zZWxlY3RIYW5kbGVyKSxlLnNldFNsaWRlQ2xhc3NlcyhcIm51bWJlclwiPT10eXBlb2YgZS5jdXJyZW50U2xpZGU/ZS5jdXJyZW50U2xpZGU6MCksZS5zZXRQb3NpdGlvbigpLGUuZm9jdXNIYW5kbGVyKCksZS5wYXVzZWQ9IWUub3B0aW9ucy5hdXRvcGxheSxlLmF1dG9QbGF5KCksZS4kc2xpZGVyLnRyaWdnZXIoXCJyZUluaXRcIixbZV0pfSxlLnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2kod2luZG93KS53aWR0aCgpIT09ZS53aW5kb3dXaWR0aCYmKGNsZWFyVGltZW91dChlLndpbmRvd0RlbGF5KSxlLndpbmRvd0RlbGF5PXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS53aW5kb3dXaWR0aD1pKHdpbmRvdykud2lkdGgoKSxlLmNoZWNrUmVzcG9uc2l2ZSgpLGUudW5zbGlja2VkfHxlLnNldFBvc2l0aW9uKCl9LDUwKSl9LGUucHJvdG90eXBlLnJlbW92ZVNsaWRlPWUucHJvdG90eXBlLnNsaWNrUmVtb3ZlPWZ1bmN0aW9uKGksZSx0KXt2YXIgbz10aGlzO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgaT8oZT1pLGk9ZT09PSEwPzA6by5zbGlkZUNvdW50LTEpOmk9ZT09PSEwPy0taTppLCEoby5zbGlkZUNvdW50PDF8fGk8MHx8aT5vLnNsaWRlQ291bnQtMSkmJihvLnVubG9hZCgpLHQ9PT0hMD9vLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk6by4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGkpLnJlbW92ZSgpLG8uJHNsaWRlcz1vLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSksby4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLG8uJHNsaWRlVHJhY2suYXBwZW5kKG8uJHNsaWRlcyksby4kc2xpZGVzQ2FjaGU9by4kc2xpZGVzLHZvaWQgby5yZWluaXQoKSl9LGUucHJvdG90eXBlLnNldENTUz1mdW5jdGlvbihpKXt2YXIgZSx0LG89dGhpcyxzPXt9O28ub3B0aW9ucy5ydGw9PT0hMCYmKGk9LWkpLGU9XCJsZWZ0XCI9PW8ucG9zaXRpb25Qcm9wP01hdGguY2VpbChpKStcInB4XCI6XCIwcHhcIix0PVwidG9wXCI9PW8ucG9zaXRpb25Qcm9wP01hdGguY2VpbChpKStcInB4XCI6XCIwcHhcIixzW28ucG9zaXRpb25Qcm9wXT1pLG8udHJhbnNmb3Jtc0VuYWJsZWQ9PT0hMT9vLiRzbGlkZVRyYWNrLmNzcyhzKToocz17fSxvLmNzc1RyYW5zaXRpb25zPT09ITE/KHNbby5hbmltVHlwZV09XCJ0cmFuc2xhdGUoXCIrZStcIiwgXCIrdCtcIilcIixvLiRzbGlkZVRyYWNrLmNzcyhzKSk6KHNbby5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZChcIitlK1wiLCBcIit0K1wiLCAwcHgpXCIsby4kc2xpZGVUcmFjay5jc3MocykpKX0sZS5wcm90b3R5cGUuc2V0RGltZW5zaW9ucz1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5vcHRpb25zLnZlcnRpY2FsPT09ITE/aS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmaS4kbGlzdC5jc3Moe3BhZGRpbmc6XCIwcHggXCIraS5vcHRpb25zLmNlbnRlclBhZGRpbmd9KTooaS4kbGlzdC5oZWlnaHQoaS4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQoITApKmkub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGkub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJmkuJGxpc3QuY3NzKHtwYWRkaW5nOmkub3B0aW9ucy5jZW50ZXJQYWRkaW5nK1wiIDBweFwifSkpLGkubGlzdFdpZHRoPWkuJGxpc3Qud2lkdGgoKSxpLmxpc3RIZWlnaHQ9aS4kbGlzdC5oZWlnaHQoKSxpLm9wdGlvbnMudmVydGljYWw9PT0hMSYmaS5vcHRpb25zLnZhcmlhYmxlV2lkdGg9PT0hMT8oaS5zbGlkZVdpZHRoPU1hdGguY2VpbChpLmxpc3RXaWR0aC9pLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxpLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbChpLnNsaWRlV2lkdGgqaS4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5sZW5ndGgpKSk6aS5vcHRpb25zLnZhcmlhYmxlV2lkdGg9PT0hMD9pLiRzbGlkZVRyYWNrLndpZHRoKDVlMyppLnNsaWRlQ291bnQpOihpLnNsaWRlV2lkdGg9TWF0aC5jZWlsKGkubGlzdFdpZHRoKSxpLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoaS4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQoITApKmkuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikubGVuZ3RoKSkpO3ZhciBlPWkuJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgoITApLWkuJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7aS5vcHRpb25zLnZhcmlhYmxlV2lkdGg9PT0hMSYmaS4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS53aWR0aChpLnNsaWRlV2lkdGgtZSl9LGUucHJvdG90eXBlLnNldEZhZGU9ZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXM7dC4kc2xpZGVzLmVhY2goZnVuY3Rpb24obyxzKXtlPXQuc2xpZGVXaWR0aCpvKi0xLHQub3B0aW9ucy5ydGw9PT0hMD9pKHMpLmNzcyh7cG9zaXRpb246XCJyZWxhdGl2ZVwiLHJpZ2h0OmUsdG9wOjAsekluZGV4OnQub3B0aW9ucy56SW5kZXgtMixvcGFjaXR5OjB9KTppKHMpLmNzcyh7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGxlZnQ6ZSx0b3A6MCx6SW5kZXg6dC5vcHRpb25zLnpJbmRleC0yLG9wYWNpdHk6MH0pfSksdC4kc2xpZGVzLmVxKHQuY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDp0Lm9wdGlvbnMuekluZGV4LTEsb3BhY2l0eToxfSl9LGUucHJvdG90eXBlLnNldEhlaWdodD1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aWYoMT09PWkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmkub3B0aW9ucy5hZGFwdGl2ZUhlaWdodD09PSEwJiZpLm9wdGlvbnMudmVydGljYWw9PT0hMSl7dmFyIGU9aS4kc2xpZGVzLmVxKGkuY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCghMCk7aS4kbGlzdC5jc3MoXCJoZWlnaHRcIixlKX19LGUucHJvdG90eXBlLnNldE9wdGlvbj1lLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbj1mdW5jdGlvbigpe3ZhciBlLHQsbyxzLG4scj10aGlzLGw9ITE7aWYoXCJvYmplY3RcIj09PWkudHlwZShhcmd1bWVudHNbMF0pPyhvPWFyZ3VtZW50c1swXSxsPWFyZ3VtZW50c1sxXSxuPVwibXVsdGlwbGVcIik6XCJzdHJpbmdcIj09PWkudHlwZShhcmd1bWVudHNbMF0pJiYobz1hcmd1bWVudHNbMF0scz1hcmd1bWVudHNbMV0sbD1hcmd1bWVudHNbMl0sXCJyZXNwb25zaXZlXCI9PT1hcmd1bWVudHNbMF0mJlwiYXJyYXlcIj09PWkudHlwZShhcmd1bWVudHNbMV0pP249XCJyZXNwb25zaXZlXCI6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGFyZ3VtZW50c1sxXSYmKG49XCJzaW5nbGVcIikpLFwic2luZ2xlXCI9PT1uKXIub3B0aW9uc1tvXT1zO2Vsc2UgaWYoXCJtdWx0aXBsZVwiPT09bilpLmVhY2gobyxmdW5jdGlvbihpLGUpe3Iub3B0aW9uc1tpXT1lfSk7ZWxzZSBpZihcInJlc3BvbnNpdmVcIj09PW4pZm9yKHQgaW4gcylpZihcImFycmF5XCIhPT1pLnR5cGUoci5vcHRpb25zLnJlc3BvbnNpdmUpKXIub3B0aW9ucy5yZXNwb25zaXZlPVtzW3RdXTtlbHNle2ZvcihlPXIub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO2U+PTA7KXIub3B0aW9ucy5yZXNwb25zaXZlW2VdLmJyZWFrcG9pbnQ9PT1zW3RdLmJyZWFrcG9pbnQmJnIub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShlLDEpLGUtLTtyLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKHNbdF0pfWwmJihyLnVubG9hZCgpLHIucmVpbml0KCkpfSxlLnByb3RvdHlwZS5zZXRQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5zZXREaW1lbnNpb25zKCksaS5zZXRIZWlnaHQoKSxpLm9wdGlvbnMuZmFkZT09PSExP2kuc2V0Q1NTKGkuZ2V0TGVmdChpLmN1cnJlbnRTbGlkZSkpOmkuc2V0RmFkZSgpLGkuJHNsaWRlci50cmlnZ2VyKFwic2V0UG9zaXRpb25cIixbaV0pfSxlLnByb3RvdHlwZS5zZXRQcm9wcz1mdW5jdGlvbigpe3ZhciBpPXRoaXMsZT1kb2N1bWVudC5ib2R5LnN0eWxlO2kucG9zaXRpb25Qcm9wPWkub3B0aW9ucy52ZXJ0aWNhbD09PSEwP1widG9wXCI6XCJsZWZ0XCIsXG5cInRvcFwiPT09aS5wb3NpdGlvblByb3A/aS4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stdmVydGljYWxcIik6aS4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stdmVydGljYWxcIiksdm9pZCAwPT09ZS5XZWJraXRUcmFuc2l0aW9uJiZ2b2lkIDA9PT1lLk1velRyYW5zaXRpb24mJnZvaWQgMD09PWUubXNUcmFuc2l0aW9ufHxpLm9wdGlvbnMudXNlQ1NTPT09ITAmJihpLmNzc1RyYW5zaXRpb25zPSEwKSxpLm9wdGlvbnMuZmFkZSYmKFwibnVtYmVyXCI9PXR5cGVvZiBpLm9wdGlvbnMuekluZGV4P2kub3B0aW9ucy56SW5kZXg8MyYmKGkub3B0aW9ucy56SW5kZXg9Myk6aS5vcHRpb25zLnpJbmRleD1pLmRlZmF1bHRzLnpJbmRleCksdm9pZCAwIT09ZS5PVHJhbnNmb3JtJiYoaS5hbmltVHlwZT1cIk9UcmFuc2Zvcm1cIixpLnRyYW5zZm9ybVR5cGU9XCItby10cmFuc2Zvcm1cIixpLnRyYW5zaXRpb25UeXBlPVwiT1RyYW5zaXRpb25cIix2b2lkIDA9PT1lLnBlcnNwZWN0aXZlUHJvcGVydHkmJnZvaWQgMD09PWUud2Via2l0UGVyc3BlY3RpdmUmJihpLmFuaW1UeXBlPSExKSksdm9pZCAwIT09ZS5Nb3pUcmFuc2Zvcm0mJihpLmFuaW1UeXBlPVwiTW96VHJhbnNmb3JtXCIsaS50cmFuc2Zvcm1UeXBlPVwiLW1vei10cmFuc2Zvcm1cIixpLnRyYW5zaXRpb25UeXBlPVwiTW96VHJhbnNpdGlvblwiLHZvaWQgMD09PWUucGVyc3BlY3RpdmVQcm9wZXJ0eSYmdm9pZCAwPT09ZS5Nb3pQZXJzcGVjdGl2ZSYmKGkuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1lLndlYmtpdFRyYW5zZm9ybSYmKGkuYW5pbVR5cGU9XCJ3ZWJraXRUcmFuc2Zvcm1cIixpLnRyYW5zZm9ybVR5cGU9XCItd2Via2l0LXRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJ3ZWJraXRUcmFuc2l0aW9uXCIsdm9pZCAwPT09ZS5wZXJzcGVjdGl2ZVByb3BlcnR5JiZ2b2lkIDA9PT1lLndlYmtpdFBlcnNwZWN0aXZlJiYoaS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWUubXNUcmFuc2Zvcm0mJihpLmFuaW1UeXBlPVwibXNUcmFuc2Zvcm1cIixpLnRyYW5zZm9ybVR5cGU9XCItbXMtdHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cIm1zVHJhbnNpdGlvblwiLHZvaWQgMD09PWUubXNUcmFuc2Zvcm0mJihpLmFuaW1UeXBlPSExKSksdm9pZCAwIT09ZS50cmFuc2Zvcm0mJmkuYW5pbVR5cGUhPT0hMSYmKGkuYW5pbVR5cGU9XCJ0cmFuc2Zvcm1cIixpLnRyYW5zZm9ybVR5cGU9XCJ0cmFuc2Zvcm1cIixpLnRyYW5zaXRpb25UeXBlPVwidHJhbnNpdGlvblwiKSxpLnRyYW5zZm9ybXNFbmFibGVkPWkub3B0aW9ucy51c2VUcmFuc2Zvcm0mJm51bGwhPT1pLmFuaW1UeXBlJiZpLmFuaW1UeXBlIT09ITF9LGUucHJvdG90eXBlLnNldFNsaWRlQ2xhc3Nlcz1mdW5jdGlvbihpKXt2YXIgZSx0LG8scyxuPXRoaXM7aWYodD1uLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudFwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksbi4kc2xpZGVzLmVxKGkpLmFkZENsYXNzKFwic2xpY2stY3VycmVudFwiKSxuLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwKXt2YXIgcj1uLm9wdGlvbnMuc2xpZGVzVG9TaG93JTI9PT0wPzE6MDtlPU1hdGguZmxvb3Iobi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSxuLm9wdGlvbnMuaW5maW5pdGU9PT0hMCYmKGk+PWUmJmk8PW4uc2xpZGVDb3VudC0xLWU/bi4kc2xpZGVzLnNsaWNlKGktZStyLGkrZSsxKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOihvPW4ub3B0aW9ucy5zbGlkZXNUb1Nob3craSx0LnNsaWNlKG8tZSsxK3IsbytlKzIpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikpLDA9PT1pP3QuZXEodC5sZW5ndGgtMS1uLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWNlbnRlclwiKTppPT09bi5zbGlkZUNvdW50LTEmJnQuZXEobi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIikpLG4uJHNsaWRlcy5lcShpKS5hZGRDbGFzcyhcInNsaWNrLWNlbnRlclwiKX1lbHNlIGk+PTAmJmk8PW4uc2xpZGVDb3VudC1uLm9wdGlvbnMuc2xpZGVzVG9TaG93P24uJHNsaWRlcy5zbGljZShpLGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTp0Lmxlbmd0aDw9bi5vcHRpb25zLnNsaWRlc1RvU2hvdz90LmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6KHM9bi5zbGlkZUNvdW50JW4ub3B0aW9ucy5zbGlkZXNUb1Nob3csbz1uLm9wdGlvbnMuaW5maW5pdGU9PT0hMD9uLm9wdGlvbnMuc2xpZGVzVG9TaG93K2k6aSxuLm9wdGlvbnMuc2xpZGVzVG9TaG93PT1uLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwmJm4uc2xpZGVDb3VudC1pPG4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/dC5zbGljZShvLShuLm9wdGlvbnMuc2xpZGVzVG9TaG93LXMpLG8rcykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTp0LnNsaWNlKG8sbytuLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpKTtcIm9uZGVtYW5kXCIhPT1uLm9wdGlvbnMubGF6eUxvYWQmJlwiYW50aWNpcGF0ZWRcIiE9PW4ub3B0aW9ucy5sYXp5TG9hZHx8bi5sYXp5TG9hZCgpfSxlLnByb3RvdHlwZS5zZXR1cEluZmluaXRlPWZ1bmN0aW9uKCl7dmFyIGUsdCxvLHM9dGhpcztpZihzLm9wdGlvbnMuZmFkZT09PSEwJiYocy5vcHRpb25zLmNlbnRlck1vZGU9ITEpLHMub3B0aW9ucy5pbmZpbml0ZT09PSEwJiZzLm9wdGlvbnMuZmFkZT09PSExJiYodD1udWxsLHMuc2xpZGVDb3VudD5zLm9wdGlvbnMuc2xpZGVzVG9TaG93KSl7Zm9yKG89cy5vcHRpb25zLmNlbnRlck1vZGU9PT0hMD9zLm9wdGlvbnMuc2xpZGVzVG9TaG93KzE6cy5vcHRpb25zLnNsaWRlc1RvU2hvdyxlPXMuc2xpZGVDb3VudDtlPnMuc2xpZGVDb3VudC1vO2UtPTEpdD1lLTEsaShzLiRzbGlkZXNbdF0pLmNsb25lKCEwKS5hdHRyKFwiaWRcIixcIlwiKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLHQtcy5zbGlkZUNvdW50KS5wcmVwZW5kVG8ocy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoXCJzbGljay1jbG9uZWRcIik7Zm9yKGU9MDtlPG8rcy5zbGlkZUNvdW50O2UrPTEpdD1lLGkocy4kc2xpZGVzW3RdKS5jbG9uZSghMCkuYXR0cihcImlkXCIsXCJcIikuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIix0K3Muc2xpZGVDb3VudCkuYXBwZW5kVG8ocy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoXCJzbGljay1jbG9uZWRcIik7cy4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5maW5kKFwiW2lkXVwiKS5lYWNoKGZ1bmN0aW9uKCl7aSh0aGlzKS5hdHRyKFwiaWRcIixcIlwiKX0pfX0sZS5wcm90b3R5cGUuaW50ZXJydXB0PWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7aXx8ZS5hdXRvUGxheSgpLGUuaW50ZXJydXB0ZWQ9aX0sZS5wcm90b3R5cGUuc2VsZWN0SGFuZGxlcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG89aShlLnRhcmdldCkuaXMoXCIuc2xpY2stc2xpZGVcIik/aShlLnRhcmdldCk6aShlLnRhcmdldCkucGFyZW50cyhcIi5zbGljay1zbGlkZVwiKSxzPXBhcnNlSW50KG8uYXR0cihcImRhdGEtc2xpY2staW5kZXhcIikpO3JldHVybiBzfHwocz0wKSx0LnNsaWRlQ291bnQ8PXQub3B0aW9ucy5zbGlkZXNUb1Nob3c/dm9pZCB0LnNsaWRlSGFuZGxlcihzLCExLCEwKTp2b2lkIHQuc2xpZGVIYW5kbGVyKHMpfSxlLnByb3RvdHlwZS5zbGlkZUhhbmRsZXI9ZnVuY3Rpb24oaSxlLHQpe3ZhciBvLHMsbixyLGwsZD1udWxsLGE9dGhpcztpZihlPWV8fCExLCEoYS5hbmltYXRpbmc9PT0hMCYmYS5vcHRpb25zLndhaXRGb3JBbmltYXRlPT09ITB8fGEub3B0aW9ucy5mYWRlPT09ITAmJmEuY3VycmVudFNsaWRlPT09aSkpcmV0dXJuIGU9PT0hMSYmYS5hc05hdkZvcihpKSxvPWksZD1hLmdldExlZnQobykscj1hLmdldExlZnQoYS5jdXJyZW50U2xpZGUpLGEuY3VycmVudExlZnQ9bnVsbD09PWEuc3dpcGVMZWZ0P3I6YS5zd2lwZUxlZnQsYS5vcHRpb25zLmluZmluaXRlPT09ITEmJmEub3B0aW9ucy5jZW50ZXJNb2RlPT09ITEmJihpPDB8fGk+YS5nZXREb3RDb3VudCgpKmEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk/dm9pZChhLm9wdGlvbnMuZmFkZT09PSExJiYobz1hLmN1cnJlbnRTbGlkZSx0IT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93P2EuYW5pbWF0ZVNsaWRlKHIsZnVuY3Rpb24oKXthLnBvc3RTbGlkZShvKX0pOmEucG9zdFNsaWRlKG8pKSk6YS5vcHRpb25zLmluZmluaXRlPT09ITEmJmEub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJihpPDB8fGk+YS5zbGlkZUNvdW50LWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk/dm9pZChhLm9wdGlvbnMuZmFkZT09PSExJiYobz1hLmN1cnJlbnRTbGlkZSx0IT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93P2EuYW5pbWF0ZVNsaWRlKHIsZnVuY3Rpb24oKXthLnBvc3RTbGlkZShvKX0pOmEucG9zdFNsaWRlKG8pKSk6KGEub3B0aW9ucy5hdXRvcGxheSYmY2xlYXJJbnRlcnZhbChhLmF1dG9QbGF5VGltZXIpLHM9bzwwP2Euc2xpZGVDb3VudCVhLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPT0wP2Euc2xpZGVDb3VudC1hLnNsaWRlQ291bnQlYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmEuc2xpZGVDb3VudCtvOm8+PWEuc2xpZGVDb3VudD9hLnNsaWRlQ291bnQlYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT09MD8wOm8tYS5zbGlkZUNvdW50Om8sYS5hbmltYXRpbmc9ITAsYS4kc2xpZGVyLnRyaWdnZXIoXCJiZWZvcmVDaGFuZ2VcIixbYSxhLmN1cnJlbnRTbGlkZSxzXSksbj1hLmN1cnJlbnRTbGlkZSxhLmN1cnJlbnRTbGlkZT1zLGEuc2V0U2xpZGVDbGFzc2VzKGEuY3VycmVudFNsaWRlKSxhLm9wdGlvbnMuYXNOYXZGb3ImJihsPWEuZ2V0TmF2VGFyZ2V0KCksbD1sLnNsaWNrKFwiZ2V0U2xpY2tcIiksbC5zbGlkZUNvdW50PD1sLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZsLnNldFNsaWRlQ2xhc3NlcyhhLmN1cnJlbnRTbGlkZSkpLGEudXBkYXRlRG90cygpLGEudXBkYXRlQXJyb3dzKCksYS5vcHRpb25zLmZhZGU9PT0hMD8odCE9PSEwPyhhLmZhZGVTbGlkZU91dChuKSxhLmZhZGVTbGlkZShzLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUocyl9KSk6YS5wb3N0U2xpZGUocyksdm9pZCBhLmFuaW1hdGVIZWlnaHQoKSk6dm9pZCh0IT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93P2EuYW5pbWF0ZVNsaWRlKGQsZnVuY3Rpb24oKXthLnBvc3RTbGlkZShzKX0pOmEucG9zdFNsaWRlKHMpKSl9LGUucHJvdG90eXBlLnN0YXJ0TG9hZD1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5vcHRpb25zLmFycm93cz09PSEwJiZpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGkuJHByZXZBcnJvdy5oaWRlKCksaS4kbmV4dEFycm93LmhpZGUoKSksaS5vcHRpb25zLmRvdHM9PT0hMCYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmkuJGRvdHMuaGlkZSgpLGkuJHNsaWRlci5hZGRDbGFzcyhcInNsaWNrLWxvYWRpbmdcIil9LGUucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uPWZ1bmN0aW9uKCl7dmFyIGksZSx0LG8scz10aGlzO3JldHVybiBpPXMudG91Y2hPYmplY3Quc3RhcnRYLXMudG91Y2hPYmplY3QuY3VyWCxlPXMudG91Y2hPYmplY3Quc3RhcnRZLXMudG91Y2hPYmplY3QuY3VyWSx0PU1hdGguYXRhbjIoZSxpKSxvPU1hdGgucm91bmQoMTgwKnQvTWF0aC5QSSksbzwwJiYobz0zNjAtTWF0aC5hYnMobykpLG88PTQ1JiZvPj0wP3Mub3B0aW9ucy5ydGw9PT0hMT9cImxlZnRcIjpcInJpZ2h0XCI6bzw9MzYwJiZvPj0zMTU/cy5vcHRpb25zLnJ0bD09PSExP1wibGVmdFwiOlwicmlnaHRcIjpvPj0xMzUmJm88PTIyNT9zLm9wdGlvbnMucnRsPT09ITE/XCJyaWdodFwiOlwibGVmdFwiOnMub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmc9PT0hMD9vPj0zNSYmbzw9MTM1P1wiZG93blwiOlwidXBcIjpcInZlcnRpY2FsXCJ9LGUucHJvdG90eXBlLnN3aXBlRW5kPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbz10aGlzO2lmKG8uZHJhZ2dpbmc9ITEsby5zd2lwaW5nPSExLG8uc2Nyb2xsaW5nKXJldHVybiBvLnNjcm9sbGluZz0hMSwhMTtpZihvLmludGVycnVwdGVkPSExLG8uc2hvdWxkQ2xpY2s9IShvLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPjEwKSx2b2lkIDA9PT1vLnRvdWNoT2JqZWN0LmN1clgpcmV0dXJuITE7aWYoby50b3VjaE9iamVjdC5lZGdlSGl0PT09ITAmJm8uJHNsaWRlci50cmlnZ2VyKFwiZWRnZVwiLFtvLG8uc3dpcGVEaXJlY3Rpb24oKV0pLG8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg+PW8udG91Y2hPYmplY3QubWluU3dpcGUpe3N3aXRjaCh0PW8uc3dpcGVEaXJlY3Rpb24oKSl7Y2FzZVwibGVmdFwiOmNhc2VcImRvd25cIjplPW8ub3B0aW9ucy5zd2lwZVRvU2xpZGU/by5jaGVja05hdmlnYWJsZShvLmN1cnJlbnRTbGlkZStvLmdldFNsaWRlQ291bnQoKSk6by5jdXJyZW50U2xpZGUrby5nZXRTbGlkZUNvdW50KCksby5jdXJyZW50RGlyZWN0aW9uPTA7YnJlYWs7Y2FzZVwicmlnaHRcIjpjYXNlXCJ1cFwiOmU9by5vcHRpb25zLnN3aXBlVG9TbGlkZT9vLmNoZWNrTmF2aWdhYmxlKG8uY3VycmVudFNsaWRlLW8uZ2V0U2xpZGVDb3VudCgpKTpvLmN1cnJlbnRTbGlkZS1vLmdldFNsaWRlQ291bnQoKSxvLmN1cnJlbnREaXJlY3Rpb249MX1cInZlcnRpY2FsXCIhPXQmJihvLnNsaWRlSGFuZGxlcihlKSxvLnRvdWNoT2JqZWN0PXt9LG8uJHNsaWRlci50cmlnZ2VyKFwic3dpcGVcIixbbyx0XSkpfWVsc2Ugby50b3VjaE9iamVjdC5zdGFydFghPT1vLnRvdWNoT2JqZWN0LmN1clgmJihvLnNsaWRlSGFuZGxlcihvLmN1cnJlbnRTbGlkZSksby50b3VjaE9iamVjdD17fSl9LGUucHJvdG90eXBlLnN3aXBlSGFuZGxlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2lmKCEoZS5vcHRpb25zLnN3aXBlPT09ITF8fFwib250b3VjaGVuZFwiaW4gZG9jdW1lbnQmJmUub3B0aW9ucy5zd2lwZT09PSExfHxlLm9wdGlvbnMuZHJhZ2dhYmxlPT09ITEmJmkudHlwZS5pbmRleE9mKFwibW91c2VcIikhPT0tMSkpc3dpdGNoKGUudG91Y2hPYmplY3QuZmluZ2VyQ291bnQ9aS5vcmlnaW5hbEV2ZW50JiZ2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlcz9pLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGg6MSxlLnRvdWNoT2JqZWN0Lm1pblN3aXBlPWUubGlzdFdpZHRoL2Uub3B0aW9ucy50b3VjaFRocmVzaG9sZCxlLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITAmJihlLnRvdWNoT2JqZWN0Lm1pblN3aXBlPWUubGlzdEhlaWdodC9lLm9wdGlvbnMudG91Y2hUaHJlc2hvbGQpLGkuZGF0YS5hY3Rpb24pe2Nhc2VcInN0YXJ0XCI6ZS5zd2lwZVN0YXJ0KGkpO2JyZWFrO2Nhc2VcIm1vdmVcIjplLnN3aXBlTW92ZShpKTticmVhaztjYXNlXCJlbmRcIjplLnN3aXBlRW5kKGkpfX0sZS5wcm90b3R5cGUuc3dpcGVNb3ZlPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbyxzLG4scixsPXRoaXM7cmV0dXJuIG49dm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50P2kub3JpZ2luYWxFdmVudC50b3VjaGVzOm51bGwsISghbC5kcmFnZ2luZ3x8bC5zY3JvbGxpbmd8fG4mJjEhPT1uLmxlbmd0aCkmJihlPWwuZ2V0TGVmdChsLmN1cnJlbnRTbGlkZSksbC50b3VjaE9iamVjdC5jdXJYPXZvaWQgMCE9PW4/blswXS5wYWdlWDppLmNsaWVudFgsbC50b3VjaE9iamVjdC5jdXJZPXZvaWQgMCE9PW4/blswXS5wYWdlWTppLmNsaWVudFksbC50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD1NYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhsLnRvdWNoT2JqZWN0LmN1clgtbC50b3VjaE9iamVjdC5zdGFydFgsMikpKSxyPU1hdGgucm91bmQoTWF0aC5zcXJ0KE1hdGgucG93KGwudG91Y2hPYmplY3QuY3VyWS1sLnRvdWNoT2JqZWN0LnN0YXJ0WSwyKSkpLCFsLm9wdGlvbnMudmVydGljYWxTd2lwaW5nJiYhbC5zd2lwaW5nJiZyPjQ/KGwuc2Nyb2xsaW5nPSEwLCExKToobC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZz09PSEwJiYobC50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD1yKSx0PWwuc3dpcGVEaXJlY3Rpb24oKSx2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQmJmwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg+NCYmKGwuc3dpcGluZz0hMCxpLnByZXZlbnREZWZhdWx0KCkpLHM9KGwub3B0aW9ucy5ydGw9PT0hMT8xOi0xKSoobC50b3VjaE9iamVjdC5jdXJYPmwudG91Y2hPYmplY3Quc3RhcnRYPzE6LTEpLGwub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmc9PT0hMCYmKHM9bC50b3VjaE9iamVjdC5jdXJZPmwudG91Y2hPYmplY3Quc3RhcnRZPzE6LTEpLG89bC50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCxsLnRvdWNoT2JqZWN0LmVkZ2VIaXQ9ITEsbC5vcHRpb25zLmluZmluaXRlPT09ITEmJigwPT09bC5jdXJyZW50U2xpZGUmJlwicmlnaHRcIj09PXR8fGwuY3VycmVudFNsaWRlPj1sLmdldERvdENvdW50KCkmJlwibGVmdFwiPT09dCkmJihvPWwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGgqbC5vcHRpb25zLmVkZ2VGcmljdGlvbixsLnRvdWNoT2JqZWN0LmVkZ2VIaXQ9ITApLGwub3B0aW9ucy52ZXJ0aWNhbD09PSExP2wuc3dpcGVMZWZ0PWUrbypzOmwuc3dpcGVMZWZ0PWUrbyoobC4kbGlzdC5oZWlnaHQoKS9sLmxpc3RXaWR0aCkqcyxsLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITAmJihsLnN3aXBlTGVmdD1lK28qcyksbC5vcHRpb25zLmZhZGUhPT0hMCYmbC5vcHRpb25zLnRvdWNoTW92ZSE9PSExJiYobC5hbmltYXRpbmc9PT0hMD8obC5zd2lwZUxlZnQ9bnVsbCwhMSk6dm9pZCBsLnNldENTUyhsLnN3aXBlTGVmdCkpKSl9LGUucHJvdG90eXBlLnN3aXBlU3RhcnQ9ZnVuY3Rpb24oaSl7dmFyIGUsdD10aGlzO3JldHVybiB0LmludGVycnVwdGVkPSEwLDEhPT10LnRvdWNoT2JqZWN0LmZpbmdlckNvdW50fHx0LnNsaWRlQ291bnQ8PXQub3B0aW9ucy5zbGlkZXNUb1Nob3c/KHQudG91Y2hPYmplY3Q9e30sITEpOih2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQmJnZvaWQgMCE9PWkub3JpZ2luYWxFdmVudC50b3VjaGVzJiYoZT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSksdC50b3VjaE9iamVjdC5zdGFydFg9dC50b3VjaE9iamVjdC5jdXJYPXZvaWQgMCE9PWU/ZS5wYWdlWDppLmNsaWVudFgsdC50b3VjaE9iamVjdC5zdGFydFk9dC50b3VjaE9iamVjdC5jdXJZPXZvaWQgMCE9PWU/ZS5wYWdlWTppLmNsaWVudFksdm9pZCh0LmRyYWdnaW5nPSEwKSl9LGUucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzPWUucHJvdG90eXBlLnNsaWNrVW5maWx0ZXI9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO251bGwhPT1pLiRzbGlkZXNDYWNoZSYmKGkudW5sb2FkKCksaS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGkuJHNsaWRlc0NhY2hlLmFwcGVuZFRvKGkuJHNsaWRlVHJhY2spLGkucmVpbml0KCkpfSxlLnByb3RvdHlwZS51bmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2koXCIuc2xpY2stY2xvbmVkXCIsZS4kc2xpZGVyKS5yZW1vdmUoKSxlLiRkb3RzJiZlLiRkb3RzLnJlbW92ZSgpLGUuJHByZXZBcnJvdyYmZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5wcmV2QXJyb3cpJiZlLiRwcmV2QXJyb3cucmVtb3ZlKCksZS4kbmV4dEFycm93JiZlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLm5leHRBcnJvdykmJmUuJG5leHRBcnJvdy5yZW1vdmUoKSxlLiRzbGlkZXMucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50XCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKS5jc3MoXCJ3aWR0aFwiLFwiXCIpfSxlLnByb3RvdHlwZS51bnNsaWNrPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7ZS4kc2xpZGVyLnRyaWdnZXIoXCJ1bnNsaWNrXCIsW2UsaV0pLGUuZGVzdHJveSgpfSxlLnByb3RvdHlwZS51cGRhdGVBcnJvd3M9ZnVuY3Rpb24oKXt2YXIgaSxlPXRoaXM7aT1NYXRoLmZsb29yKGUub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiksZS5vcHRpb25zLmFycm93cz09PSEwJiZlLnNsaWRlQ291bnQ+ZS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmIWUub3B0aW9ucy5pbmZpbml0ZSYmKGUuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSxlLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIiksMD09PWUuY3VycmVudFNsaWRlPyhlLiRwcmV2QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSxlLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIikpOmUuY3VycmVudFNsaWRlPj1lLnNsaWRlQ291bnQtZS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmZS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMT8oZS4kbmV4dEFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksZS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpKTplLmN1cnJlbnRTbGlkZT49ZS5zbGlkZUNvdW50LTEmJmUub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJihlLiRuZXh0QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSxlLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIikpKX0sZS5wcm90b3R5cGUudXBkYXRlRG90cz1mdW5jdGlvbigpe3ZhciBpPXRoaXM7bnVsbCE9PWkuJGRvdHMmJihpLiRkb3RzLmZpbmQoXCJsaVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5lbmQoKSxpLiRkb3RzLmZpbmQoXCJsaVwiKS5lcShNYXRoLmZsb29yKGkuY3VycmVudFNsaWRlL2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpKX0sZS5wcm90b3R5cGUudmlzaWJpbGl0eT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5vcHRpb25zLmF1dG9wbGF5JiYoZG9jdW1lbnRbaS5oaWRkZW5dP2kuaW50ZXJydXB0ZWQ9ITA6aS5pbnRlcnJ1cHRlZD0hMSl9LGkuZm4uc2xpY2s9ZnVuY3Rpb24oKXt2YXIgaSx0LG89dGhpcyxzPWFyZ3VtZW50c1swXSxuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxyPW8ubGVuZ3RoO2ZvcihpPTA7aTxyO2krKylpZihcIm9iamVjdFwiPT10eXBlb2Ygc3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIHM/b1tpXS5zbGljaz1uZXcgZShvW2ldLHMpOnQ9b1tpXS5zbGlja1tzXS5hcHBseShvW2ldLnNsaWNrLG4pLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0KXJldHVybiB0O3JldHVybiBvfX0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgIC8qKipcbiAgICAgbnVtYmVyIC0g0LjRgdGF0L7QtNC90L7QtSDRh9C40YHQu9C+XG4gICAgIGRlY2ltYWxzIC0g0LrQvtC70LjRh9C10YHRgtCy0L4g0LfQvdCw0LrQvtCyINC/0L7RgdC70LUg0YDQsNC30LTQtdC70LjRgtC10LvRj1xuICAgICBkZWNfcG9pbnQgLSDRgdC40LzQstC+0Lsg0YDQsNC30LTQtdC70LjRgtC10LvRj1xuICAgICB0aG91c2FuZHNfc2VwIC0g0YDQsNC30LTQtdC70LjRgtC10LvRjCDRgtGL0YHRj9GH0L3Ri9GFXG4gICAgIGZyYWN0aW9uYWxfbm90X3ZpZXcgLSDQvdC1INC+0YLQvtCx0YDQsNC20LDRgtGMINC30L3QsNC60Lgg0L/QvtGB0LvQtSDRgNCw0LfQtNC10LvQuNGC0LXQu9GPINGDINGG0LXQu9GL0YUg0YfQuNGB0LXQu1xuICAgICAqKiovXG4gICAgZnVuY3Rpb24gbnVtYmVyX2Zvcm1hdChudW1iZXIsIGRlY2ltYWxzLCBkZWNfcG9pbnQsIHRob3VzYW5kc19zZXAsIGZyYWN0aW9uYWxfbm90X3ZpZXcpIHtcbiAgICAgICAgbnVtYmVyID0gKG51bWJlciArICcnKS5yZXBsYWNlKC9bXjAtOStcXC1FZS5dL2csICcnKTtcbiAgICAgICAgdmFyIG4gPSAhaXNGaW5pdGUoK251bWJlcikgPyAwIDogK251bWJlcixcbiAgICAgICAgICAgIHByZWMgPSAhaXNGaW5pdGUoK2RlY2ltYWxzKSA/IDAgOiBNYXRoLmFicyhkZWNpbWFscyksXG4gICAgICAgICAgICBzZXAgPSAodHlwZW9mIHRob3VzYW5kc19zZXAgPT09ICd1bmRlZmluZWQnKSA/ICcsJyA6IHRob3VzYW5kc19zZXAsXG4gICAgICAgICAgICBkZWMgPSAodHlwZW9mIGRlY19wb2ludCA9PT0gJ3VuZGVmaW5lZCcpID8gJy4nIDogZGVjX3BvaW50LFxuICAgICAgICAgICAgZnJfbm90X3ZpZXcgPSAodHlwZW9mIGZyYWN0aW9uYWxfbm90X3ZpZXcgPT09ICd1bmRlZmluZWQnKSA/IGZhbHNlIDogZnJhY3Rpb25hbF9ub3RfdmlldyxcbiAgICAgICAgICAgIHMgPSAnJyxcbiAgICAgICAgICAgIHRvRml4ZWRGaXggPSBmdW5jdGlvbiAobiwgcHJlYykge1xuICAgICAgICAgICAgICAgIHZhciBrID0gTWF0aC5wb3coMTAsIHByZWMpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnJyArIChNYXRoLnJvdW5kKG4gKiBrKSAvIGspXG4gICAgICAgICAgICAgICAgICAgIC50b0ZpeGVkKHByZWMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgLy8gRml4IGZvciBJRSBwYXJzZUZsb2F0KDAuNTUpLnRvRml4ZWQoMCkgPSAwO1xuICAgICAgICBzID0gKHByZWMgPyB0b0ZpeGVkRml4KG4sIHByZWMpIDogJycgKyBNYXRoLnJvdW5kKG4pKVxuICAgICAgICAgICAgLnNwbGl0KCcuJyk7XG4gICAgICAgIGlmIChzWzBdLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHNbMF0gPSBzWzBdLnJlcGxhY2UoL1xcQig/PSg/OlxcZHszfSkrKD8hXFxkKSkvZywgc2VwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDQp9GC0L7QsdGLINC90LUg0L7RgtC+0LHRgNCw0LbQsNGC0Ywg0LfQvdCw0LrQuCDQv9C+0YHQu9C1INC30LDQv9GP0YLQvtC5INGDINGG0LXQu9GL0YUg0YfQuNGB0LXQu1xuICAgICAgICBpZiAoZnJfbm90X3ZpZXcgJiYgKG4gLSBNYXRoLnJvdW5kKG4pID09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgICAgICAvLy8vLy9cbiAgICAgICAgaWYgKChzWzFdIHx8ICcnKVxuICAgICAgICAgICAgLmxlbmd0aCA8IHByZWMpIHtcbiAgICAgICAgICAgIHNbMV0gPSBzWzFdIHx8ICcnO1xuICAgICAgICAgICAgc1sxXSArPSBuZXcgQXJyYXkocHJlYyAtIHNbMV0ubGVuZ3RoICsgMSlcbiAgICAgICAgICAgICAgICAuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzLmpvaW4oZGVjKTtcbiAgICB9XG5cbiAgICAkKFwiLmpzX3JhZGlhbFwiKS5rbm9iKCk7XG5cbiAgICB2YXIgc2VjdGlvbnMgPSAkKCcuaGVhZGVyX19uYXYtaXRlbS0tZml4ZWQgLmhlYWRlcl9fbmF2LWxpbmsnKSxcbiAgICAgICAgJHdpbmRvdyA9ICQod2luZG93KSxcbiAgICAgICAgb2Zmc2V0ID0gJHdpbmRvdy5oZWlnaHQoKSAvIDIuNTtcblxuICAgICR3aW5kb3cub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnNvciA9ICR3aW5kb3cuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICBjdXJfc2VjID0gJycsXG4gICAgICAgICAgICBoYXNoO1xuXG4gICAgICAgIHNlY3Rpb25zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBzZWNfbmFtZSA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgaWYoICQoc2VjX25hbWUpLm9mZnNldCgpLnRvcCAtIG9mZnNldCA8IGN1cnNvcil7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcl9fbmF2LWl0ZW0tLWZpeGVkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmhlYWRlcl9fbmF2LWl0ZW0tLWZpeGVkJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGN1cl9zZWMgPSBzZWNfbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGhhc2ggPSBjdXJfc2VjLnNsaWNlKDEpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJytoYXNoO1xuXG4gICAgICAgIGlmKCR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gJCgnI3RpdGxlJykub3V0ZXJIZWlnaHQoKSl7XG4gICAgICAgICAgICAkKCcuZml4ZWQtaGVhZGVyJykuZmFkZUluKDUwMCk7XG4gICAgICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDw9IDEwMjQgJiYgaGFzaCAhPSAnZmxhdHMnKXtcbiAgICAgICAgICAgICAgICAkKCcuanMtdG9wLWJ0bicpLmZhZGVJbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNoID09ICdmbGF0cycpe1xuICAgICAgICAgICAgICAgICQoJy5qcy10b3AtYnRuJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5maXhlZC1oZWFkZXInKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAkKCcuanMtdG9wLWJ0bicpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPD0gOTQwKXtcbiAgICAgICAgICAgICAgICAkKCcuanNfZml4ZWRfbWVudScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLmpzX2ZpeGVkX25hdl93cmFwJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICR3aW5kb3cub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpID4gOTQwKSB7XG4gICAgICAgICAgICAkKCcuanNfbmF2X3dyYXAnKS5hdHRyKCdzdHlsZScsICcnKTtcbiAgICAgICAgICAgICQoJy5qc19maXhlZF9uYXZfd3JhcCcpLmF0dHIoJ3N0eWxlJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmpzX25hdl93cmFwJykucmVtb3ZlQ2xhc3MoJ3Nob3ctaW1wJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5qc19tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICQoJy5qc19uYXZfd3JhcCcpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJykuc2xpZGVUb2dnbGUoKTtcbiAgICB9KTtcbiAgICAkKCcuanNfZml4ZWRfbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCcuanNfZml4ZWRfbmF2X3dyYXAnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpLnNsaWRlVG9nZ2xlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanNfcG9wdXBfY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50aXRsZS1wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICB9KTtcblxuXG4gICAgJCgnLmpzX3ByaWNlc19zbGlkZXInKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwXG4gICAgfSk7XG5cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIi8jL1wiKSA+PSAwKSB7XG4gICAgICAgIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHZhciBhbmNob3IgPSBwYXRoLnNwbGl0KCcvJylbNF07XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyMnK2FuY2hvcikub2Zmc2V0KCkudG9wLTEyMFxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgJCgnLmpzX2dvdG9fYW5jaG9yJykuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQodGhpcykuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AtMTIwXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPD0gOTQwKXtcbiAgICAgICAgICAgICQoJy5qc19maXhlZF9tZW51JykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJy5qc19tZW51JykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJy5qc19uYXZfd3JhcCcpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnLmpzX2ZpeGVkX25hdl93cmFwJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgdmFyIGZsYXRfY2F0ZWdvcnlfaWQ7XG4gICAgJCgnLmpzX3Jvb21zX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmxhdF9jYXRlZ29yeV9pZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgJCgnLmpzX2FyZWFfYnRuJykuY2xvc2VzdCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbScpLmhpZGUoKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAkKCcuanNfYXJlYV9idG4nICsgJy4nICsgJ2ZsYXQnICsgZmxhdF9jYXRlZ29yeV9pZCkuY2xvc2VzdCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbScpLnNob3coKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAkKCcubGF5b3V0X19mbGF0LW5hbWUnKS50ZXh0KGZsYXRzT2JqW2ZsYXRfY2F0ZWdvcnlfaWRdWydzaW5ndWxhcmx5J10pO1xuICAgICAgICAkKCcubGF5b3V0LWNob2ljZV9fYnRucy1pdGVtLnZpc2libGU6Zmlyc3QgLmpzX2FyZWFfYnRuJykuY2xpY2soKTtcbiAgICAgICAgJCgnLmpzX3Jvb21zX2J0bicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKS5jbG9zZXN0KCcubGF5b3V0LWNob2ljZV9fYnRucy1pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5jbG9zZXN0KCcubGF5b3V0LWNob2ljZV9fYnRucy1pdGVtJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgJCgnLmpzX2FyZWFfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhpc0xheW91dCA9IGZsYXRzT2JqW2ZsYXRfY2F0ZWdvcnlfaWRdWydsYXlvdXRzJ11bJCh0aGlzKS5kYXRhKCdpZCcpXTtcblxuICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDw9IDgyMCAmJiBzdGF0ZSl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcubGF5b3V0X19pbWctd3JhcHBlcicpLm9mZnNldCgpLnRvcCAtIDcwXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuanNfZ2l2ZV9zcmMnKS5hbmltYXRlKHtvcGFjaXR5OiBcInRvZ2dsZVwifSwgMjAwKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuanNfZ2l2ZV9zcmMnKS5hdHRyKCdzcmMnLCB0aGlzTGF5b3V0LnNyYyk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgICQoJy5qc19naXZlX3NyYycpLmFuaW1hdGUoe29wYWNpdHk6IFwidG9nZ2xlXCJ9LCAyMDApO1xuICAgICAgICAkKCcuanNfZ2l2ZV9hcmVhJykudGV4dCh0aGlzTGF5b3V0LmFyZWEucmVwbGFjZSgnLicsICcsJykpO1xuICAgICAgICAkKCcuanNfZ2l2ZV9ibG9jaycpLnRleHQodGhpc0xheW91dC5ibG9jayk7XG4gICAgICAgICQoJy5qc19naXZlX2Zsb29yJykudGV4dCh0aGlzTGF5b3V0LmZsb29yKTtcblxuICAgICAgICB2YXIgYmFzaWNfcHJpY2UgPSBNYXRoLnJvdW5kKHRoaXNMYXlvdXQubWV0ZXJfY29zdCAqIHRoaXNMYXlvdXQuYXJlYSAqIEVYQ0hBTkdFX0NPU1QpO1xuXG4gICAgICAgIGlmKCt0aGlzTGF5b3V0LnN0b2NrX3ByaWNlID4gMCl7XG4gICAgICAgICAgICAkKCcuanNfYXRfb25jZV9wcmljZScpLnRleHQobnVtYmVyX2Zvcm1hdChNYXRoLnJvdW5kKHRoaXNMYXlvdXQuc3RvY2tfcHJpY2UgKiB0aGlzTGF5b3V0LmFyZWEpLCAwLCAnLCcsICcgJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmpzX2F0X29uY2VfcHJpY2UnKS50ZXh0KG51bWJlcl9mb3JtYXQoTWF0aC5yb3VuZChiYXNpY19wcmljZSAtIGJhc2ljX3ByaWNlIC8gMTAwICogdGhpc0xheW91dC5kaXNjb3VudCksIDAsICcsJywgJyAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuanNfZ2l2ZV9wcmljZScpLnRleHQobnVtYmVyX2Zvcm1hdCh0aGlzTGF5b3V0LnN0b2NrX3ByaWNlLCAwLCAnLCcsICcgJykpO1xuICAgICAgICAkKCcuanNfYXJlYV9idG4nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuY2xvc2VzdCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJykuY2xvc2VzdCgnLmxheW91dC1jaG9pY2VfX2J0bnMtaXRlbScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICBzdGF0ZSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICAkKCcubGF5b3V0LWNob2ljZV9fYnRucy1pdGVtOmZpcnN0LWNoaWxkIC5qc19yb29tc19idG4nKS5jbGljaygpO1xuXG4gICAgdmFyICRmb3RvcmFtYSA9ICQoJy5qc19nYWxsZXJ5X19mb3RvcmFtYScpLmZvdG9yYW1hKHtcbiAgICAgICAgbmF2d2lkdGg6ICc5MCUnXG4gICAgfSk7XG4gICAgLy8gMi4gR2V0IHRoZSBBUEkgb2JqZWN0LlxuICAgIHZhciBmb3RvcmFtYSA9ICRmb3RvcmFtYS5kYXRhKCdmb3RvcmFtYScpO1xuXG4gICAgJGZvdG9yYW1hLm9uKCdmb3RvcmFtYTpzaG93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSBmb3RvcmFtYS5hY3RpdmVJbmRleDtcbiAgICAgICAgaWYoYWN0aXZlSW5kZXggPT0gMCl7XG4gICAgICAgICAgICAkKCcuanNfaW1nX3ByZXYnKS5mYWRlT3V0KDApLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbZm90b3JhbWEuc2l6ZS0xXVsnaW1nJ10pLmZhZGVJbigzMDApO1xuICAgICAgICAgICAgJCgnLmpzX2ltZ19uZXh0JykuZmFkZU91dCgwKS5hdHRyKCdzcmMnLCBmb3RvcmFtYS5kYXRhW2FjdGl2ZUluZGV4KzFdWydpbWcnXSkuZmFkZUluKDMwMCk7XG4gICAgICAgIH1lbHNlIGlmKGFjdGl2ZUluZGV4ID09IGZvdG9yYW1hLnNpemUtMSl7XG4gICAgICAgICAgICAkKCcuanNfaW1nX3ByZXYnKS5mYWRlT3V0KDApLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbYWN0aXZlSW5kZXgtMV1bJ2ltZyddKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgICAgICQoJy5qc19pbWdfbmV4dCcpLmZhZGVPdXQoMCkuYXR0cignc3JjJywgZm90b3JhbWEuZGF0YVswXVsnaW1nJ10pLmZhZGVJbigyMDApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5qc19pbWdfcHJldicpLmZhZGVPdXQoMCkuYXR0cignc3JjJywgZm90b3JhbWEuZGF0YVthY3RpdmVJbmRleC0xXVsnaW1nJ10pLmZhZGVJbigzMDApO1xuICAgICAgICAgICAgJCgnLmpzX2ltZ19uZXh0JykuZmFkZU91dCgwKS5hdHRyKCdzcmMnLCBmb3RvcmFtYS5kYXRhW2FjdGl2ZUluZGV4KzFdWydpbWcnXSkuZmFkZUluKDMwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkZm90b3JhbWEub24oJ2ZvdG9yYW1hOmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhY3RpdmVJbmRleCA9IGZvdG9yYW1hLmFjdGl2ZUluZGV4O1xuICAgICAgICBpZihhY3RpdmVJbmRleCA9PSAwKXtcbiAgICAgICAgICAgICQoJy5qc19pbWdfcHJldicpLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbZm90b3JhbWEuc2l6ZS0xXVsnaW1nJ10pO1xuICAgICAgICAgICAgJCgnLmpzX2ltZ19uZXh0JykuYXR0cignc3JjJywgZm90b3JhbWEuZGF0YVthY3RpdmVJbmRleCsxXVsnaW1nJ10pO1xuICAgICAgICB9ZWxzZSBpZihhY3RpdmVJbmRleCA9PSBmb3RvcmFtYS5zaXplLTEpe1xuICAgICAgICAgICAgJCgnLmpzX2ltZ19wcmV2JykuYXR0cignc3JjJywgZm90b3JhbWEuZGF0YVthY3RpdmVJbmRleC0xXVsnaW1nJ10pO1xuICAgICAgICAgICAgJCgnLmpzX2ltZ19uZXh0JykuYXR0cignc3JjJywgZm90b3JhbWEuZGF0YVswXVsnaW1nJ10pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5qc19pbWdfcHJldicpLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbYWN0aXZlSW5kZXgtMV1bJ2ltZyddKTtcbiAgICAgICAgICAgICQoJy5qc19pbWdfbmV4dCcpLmF0dHIoJ3NyYycsIGZvdG9yYW1hLmRhdGFbYWN0aXZlSW5kZXgrMV1bJ2ltZyddKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoXCI8ZGl2IGNsYXNzPSduYXYtc2Nyb2xsLWJ0biBuYXYtc2Nyb2xsLWJ0bi0tcHJldic+PC9kaXY+XCIpLmluc2VydEJlZm9yZShcIi5nYWxsZXJ5X19mb3RvcmFtYSAuZm90b3JhbWFfX25hdi5mb3RvcmFtYV9fbmF2LS10aHVtYnNcIik7XG4gICAgJChcIjxkaXYgY2xhc3M9J25hdi1zY3JvbGwtYnRuIG5hdi1zY3JvbGwtYnRuLS1uZXh0Jz48L2Rpdj5cIikuaW5zZXJ0QWZ0ZXIoXCIuZ2FsbGVyeV9fZm90b3JhbWEgLmZvdG9yYW1hX19uYXYuZm90b3JhbWFfX25hdi0tdGh1bWJzXCIpO1xuXG4gICAgJChcIjxkaXYgY2xhc3M9J2dhbGxlcnlfX2JnLWltYWdlLWJsb2NrIGdhbGxlcnlfX2JnLWltYWdlLWJsb2NrLS1wcmV2Jz48ZGl2IGNsYXNzPSdnYWxsZXJ5X19iZy1pbWFnZS13cmFwJz48aW1nIGNsYXNzPSdnYWxsZXJ5X19iZy1pbWFnZSBqc19pbWdfcHJldic+PC9kaXY+PC9kaXY+XCIpLmluc2VydEFmdGVyKFwiLmdhbGxlcnlfX2ZvdG9yYW1hIC5mb3RvcmFtYV9fYXJyLmZvdG9yYW1hX19hcnItLW5leHRcIik7XG4gICAgJChcIjxkaXYgY2xhc3M9J2dhbGxlcnlfX2JnLWltYWdlLWJsb2NrIGdhbGxlcnlfX2JnLWltYWdlLWJsb2NrLS1uZXh0Jz48ZGl2IGNsYXNzPSdnYWxsZXJ5X19iZy1pbWFnZS13cmFwJz48aW1nIGNsYXNzPSdnYWxsZXJ5X19iZy1pbWFnZSBqc19pbWdfbmV4dCc+PC9kaXY+PC9kaXY+XCIpLmluc2VydEFmdGVyKFwiLmdhbGxlcnlfX2ZvdG9yYW1hIC5mb3RvcmFtYV9fYXJyLmZvdG9yYW1hX19hcnItLW5leHRcIik7XG4gICAgLy8gbWFrZSB0aGUgYnV0dG9ucyBmdW5jdGlvbmFsaXR5XG5cbiAgICAkKCcubmF2LXNjcm9sbC1idG4tLXByZXYnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvdG9yYW1hLnNob3coJzwnKTtcbiAgICB9KTtcbiAgICAkKCcubmF2LXNjcm9sbC1idG4tLW5leHQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvdG9yYW1hLnNob3coJz4nKTtcbiAgICB9KTtcblxuICAgICQoJy5qc19vcGVuX2ZvdG9yYW1hJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3RvcmFtYS5zaG93KCQodGhpcykuZGF0YSgnaW1nJykpO1xuICAgICAgICBmb3RvcmFtYS5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIH0pO1xuXG5cbiAgICB2YXIgJHN0YWdlc0ZvdG9yYW1hID0gJCgnLmpzX3N0YWdlc19fZm90b3JhbWEnKS5mb3RvcmFtYSh7XG4gICAgICAgIG5hdndpZHRoOiAnOTAlJ1xuICAgIH0pO1xuICAgIC8vIDIuIEdldCB0aGUgQVBJIG9iamVjdC5cbiAgICB2YXIgc3RhZ2VzRm90b3JhbWEgPSAkc3RhZ2VzRm90b3JhbWEuZGF0YSgnZm90b3JhbWEnKTtcblxuICAgICQoJy5qc19zdGFnZV9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcblxuICAgICAgICAgICAgdmFyIHRoaXNJZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcblxuICAgICAgICAgICAgJCgnLmpzX3N0YWdlc19fZm90b3JhbWEsIC5qc19naXZlX3N0YWdlX3RleHQnKS5hbmltYXRlKHtvcGFjaXR5OiBcInRvZ2dsZVwifSwgMzAwKTtcbiAgICAgICAgICAgIHZhciBpbWFnZUFycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBzdGFnZUltZyBpbiBzdGFnZU9ialt0aGlzSWRdWydpbWFnZXMnXSl7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlU3JjID0gc3RhZ2VPYmpbdGhpc0lkXVsnaW1hZ2VzJ11bc3RhZ2VJbWddLnNyYztcbiAgICAgICAgICAgICAgICBpbWFnZUFycmF5LnB1c2goe2ltZzogaW1hZ2VTcmN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5qc19naXZlX3N0YWdlX3RleHQnKS5odG1sKHN0YWdlT2JqW3RoaXNJZF1bJ3RleHQnXSk7XG4gICAgICAgICAgICAgICAgc3RhZ2VzRm90b3JhbWEubG9hZChpbWFnZUFycmF5KTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICAgICQoJy5qc19zdGFnZXNfX2ZvdG9yYW1hLCAuanNfZ2l2ZV9zdGFnZV90ZXh0JykuYW5pbWF0ZSh7b3BhY2l0eTogXCJ0b2dnbGVcIn0sIDMwMCk7XG4gICAgICAgICAgICB2YXIgbGVmdCA9ICQodGhpcykud2lkdGgoKSAvIDI7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgJCh0aGlzKS5pbmRleCgpOyBpKyspe1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gJCgnLmpzX3N0YWdlX2J0bicpLmVxKGkpLndpZHRoKCkgKyAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy5zdGFnZXNfX2xpc3QnKS5jc3MoJ2xlZnQnLCAkd2luZG93LndpZHRoKCkgLyAyIC0gbGVmdCk7XG4gICAgICAgICAgICAkKCcuanNfc3RhZ2VfYnRuLmlzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5qc19zdGFnZV9idG46Zmlyc3QtY2hpbGQnKS5jbGljaygpO1xuXG4gICAgJHdpbmRvdy5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aXZlQnRuID0gJCgnLmpzX3N0YWdlX2J0bi5pcy1hY3RpdmUnKTtcbiAgICAgICAgdmFyIGxlZnQgPSBhY3RpdmVCdG4ud2lkdGgoKSAvIDI7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhY3RpdmVCdG4uaW5kZXgoKTsgaSsrKXtcbiAgICAgICAgICAgIGxlZnQgKz0gJCgnLmpzX3N0YWdlX2J0bicpLmVxKGkpLndpZHRoKCkgKyAxMDtcbiAgICAgICAgfVxuICAgICAgICAkKCcuc3RhZ2VzX19saXN0JykuY3NzKCdsZWZ0JywgJHdpbmRvdy53aWR0aCgpIC8gMiAtIGxlZnQpO1xuXG4gICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPiAxMDI0KXtcbiAgICAgICAgICAgICQoJy5qcy10b3AtYnRuJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvKihmdW5jdGlvbigpe1xuICAgICAgICB2YXIgJHRpdGxlUG9wdXAgPSAkKCcuanNfdGl0bGVfcG9wdXAnKSxcbiAgICAgICAgICAgIHRpbWVyID0gMCxcbiAgICAgICAgICAgIHNlY29uZHNGb3JTd2l0Y2ggPSA5LFxuICAgICAgICAgICAgaG92ZXJPblBvcHVwID0gZmFsc2UsXG4gICAgICAgICAgICBmb2N1c0luUG9wdXAgPSBmYWxzZTtcblxuICAgICAgICAkKCcuanNfc2xpZGVyX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZU51bSA9ICQodGhpcykuZGF0YSgnc2xpZGUnKTtcblxuICAgICAgICAgICAgaWYgKCEkdGl0bGVQb3B1cC5oYXNDbGFzcygnc2hvdy1zbGlkZS0nICsgc2xpZGVOdW0pKXtcbiAgICAgICAgICAgICAgICAkdGl0bGVQb3B1cC50b2dnbGVDbGFzcygnc2hvdy1zbGlkZS0xIHNob3ctc2xpZGUtMicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aW1lciA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aXRsZVBvcHVwXG4gICAgICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG92ZXJPblBvcHVwID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG92ZXJPblBvcHVwID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdmb2N1c2luJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvY3VzSW5Qb3B1cCA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0luUG9wdXAgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPD0gMTAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEoaG92ZXJPblBvcHVwIHx8IGZvY3VzSW5Qb3B1cCkpIHtcbiAgICAgICAgICAgICAgICB0aW1lcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVyID09PSBzZWNvbmRzRm9yU3dpdGNoKSB7XG4gICAgICAgICAgICAgICAgJHRpdGxlUG9wdXAudG9nZ2xlQ2xhc3MoJ3Nob3ctc2xpZGUtMSBzaG93LXNsaWRlLTInKTtcbiAgICAgICAgICAgICAgICB0aW1lciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgICR3aW5kb3cub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPD0gMTAxMCkge1xuICAgICAgICAgICAgICAgICR0aXRsZVBvcHVwLmFkZENsYXNzKCdzaG93LXNsaWRlLTEnKS5yZW1vdmVDbGFzcygnc2hvdy1zbGlkZS0yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0oKSk7Ki9cblxuXG4gICAgLyogWWFuZGV4IG1hcCAqL1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLFxuICAgICAgICAgICAge2NlbnRlcjogWzQzLjIzMzc3OSwgNzYuOTIxMTk1XSwgem9vbTogMTYsIGNvbnRyb2xzOiBbJ3pvb21Db250cm9sJ119KTtcbiAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoXCJzY3JvbGxab29tXCIpO1xuICAgICAgICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZShcImRibENsaWNrWm9vbVwiKTtcbiAgICAgICAgaWYgKCR3aW5kb3cud2lkdGgoKSA8IDEwMDApIHtcbiAgICAgICAgICAgIHZhciBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzQzLjIzMzE3OSwgNzYuOTIwOTVdLCB7fSwge1xuICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6IFwiZGVmYXVsdCNpbWFnZVwiLFxuICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6IFwiL2ltZy9tYXBfaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMTAwLCA5MF0sXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTEwMCwgLTQ1XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs0My4yMzMxNzksIDc2LjkyMDk1XSwge30sIHtcbiAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiBcImRlZmF1bHQjaW1hZ2VcIixcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiBcIi9pbWcvbWFwX2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzEzNSwgMTIxXSxcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTM1LCAtNjBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG5cbiAgICAgICAgJHdpbmRvdy5vbigncmVzaXplJywgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDwgMTAwMCkge1xuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs0My4yMzMxNzksIDc2LjkyMDk1XSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkxheW91dDogXCJkZWZhdWx0I2ltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6IFwiL2ltZy9tYXBfaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzEwMCwgOTBdLFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTAwLCAtNDVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNDMuMjMzMTc5LCA3Ni45MjA5NV0sIHt9LCB7XG4gICAgICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6IFwiZGVmYXVsdCNpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiBcIi9pbWcvbWFwX2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsxMzUsIDEyMV0sXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMzUsIC02MF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICB2YXIgbXlNYXA7XG59KTtcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJy50aXRsZS1wb3B1cF9fc2xpY2snKS5zbGljayh7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
