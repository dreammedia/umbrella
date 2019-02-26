/* Umbrella JS 3.1.0 umbrellajs.com */

!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var t,e,n,r=Array.prototype,i=r.push,o=r.splice,u=r.join;s.prototype={add:function(t){this.contains(t)||(i.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var e=0;e<this.length&&this[e]!=t;e++);o.call(this,e,1),this.el.className=this.toString()}},toString:function(){return u.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=s,t=Element.prototype,e="classList",n=function(){return new s(this)},Object.defineProperty?Object.defineProperty(t,e,{get:n}):t.__defineGetter__(e,n)}function s(t){for(var e=(this.el=t).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<e.length;n++)i.call(this,e[n])}}();var u=function(t,e){return this instanceof u?t instanceof u?t:("string"==typeof t?t=this.select(t,e):"function"==typeof t&&u.prototype.ready(t),t&&t.nodeName&&(t=[t]),u.isWindow(t)&&(t=[t]),void(this.nodes=this.slice(t))):new u(t,e)};u.prototype={get length(){return this.nodes.length}},u.prototype.nodes=[],u.isWindow=function(t){return null!=t&&t===t.window},u.isDocument=function(t){return null!=t&&t.nodeType===t.DOCUMENT_NODE},u.camelize=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},u.dasherize=function(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},u.prototype.addClass=function(){return this.eacharg(arguments,function(t,e){t.classList.add(e)})},u.prototype.adjacent=function(o,t,n){return"number"==typeof t&&(t=0===t?[]:new Array(t).join().split(",").map(Number.call,Number)),this.each(function(r,i){var e=document.createDocumentFragment();u(t||{}).map(function(t,e){var n="function"==typeof o?o.call(this,t,e,r,i):o;return"string"==typeof n?this.generate(n):u(n)}).each(function(t){this.isInPage(t)?e.appendChild(u(t).clone().first()):e.appendChild(t)}),n.call(this,r,e)})},u.prototype.after=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t.nextSibling)})},u.prototype.append=function(t,e){return this.adjacent(t,e,function(t,e){t.appendChild(e)})},u.prototype.args=function(t,e,n){return"function"==typeof t&&(t=t(e,n)),"string"!=typeof t&&(t=this.slice(t).map(this.str(e,n))),t.toString().split(/[\s,]+/).filter(function(t){return t.length})},u.prototype.array=function(i){i=i;var o=this;return this.nodes.reduce(function(t,e,n){var r;return i?((r=i.call(o,e,n))||(r=!1),"string"==typeof r&&(r=u(r)),r instanceof u&&(r=r.nodes)):r=e.innerHTML,t.concat(!1!==r?r:[])},[])},u.prototype.attr=function(t,e,r){return r=r?"data-":"",this.pairs(t,e,function(t,e){return t.getAttribute(r+e)},function(t,e,n){t.setAttribute(r+e,n)})},u.prototype.before=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t)})},u.prototype.children=function(t){return this.map(function(t){return this.slice(t.children)}).filter(t)},u.prototype.clone=function(){return this.map(function(t,e){var n=t.cloneNode(!0),r=this.getAll(n);return this.getAll(t).each(function(t,e){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](t,r.nodes[e])}),n})},u.prototype.getAll=function(t){return u([t].concat(u("*",t).nodes))},u.prototype.mirror={},u.prototype.mirror.events=function(t,e){if(t._e)for(var n in t._e)t._e[n].forEach(function(t){u(e).on(n,t)})},u.prototype.mirror.select=function(t,e){u(t).is("select")&&(e.value=t.value)},u.prototype.mirror.textarea=function(t,e){u(t).is("textarea")&&(e.value=t.value)},u.prototype.closest=function(e){return this.map(function(t){do{if(u(t).is(e))return t}while((t=t.parentNode)&&t!==document)})},u.prototype.data=function(t,e){return this.attr(t,e,!0)},u.prototype.each=function(t){return this.nodes.forEach(t.bind(this)),this},u.prototype.eacharg=function(n,r){return this.each(function(e,t){this.args(n,e,t).forEach(function(t){r.call(this,e,t)},this)})},u.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)})},u.prototype.filter=function(e){var t=function(t){return t.matches=t.matches||t.msMatchesSelector||t.webkitMatchesSelector,t.matches(e||"*")};return"function"==typeof e&&(t=e),e instanceof u&&(t=function(t){return-1!==e.nodes.indexOf(t)}),u(this.nodes.filter(t))},u.prototype.find=function(e){return this.map(function(t){return u(e||"*",t)})},u.prototype.first=function(){return this.nodes[0]||!1},u.prototype.generate=function(t){return/^\s*<tr[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().nodes:/^\s*<t(h|d)[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().children().nodes:/^\s*</.test(t)?u(document.createElement("div")).html(t).children().nodes:document.createTextNode(t)},u.prototype.handle=function(){var t=this.slice(arguments).map(function(e){return"function"==typeof e?function(t){t.preventDefault(),e.apply(this,arguments)}:e},this);return this.on.apply(this,t)},u.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},u.prototype.html=function(e){return void 0===e?this.first().innerHTML||"":this.each(function(t){t.innerHTML=e})},u.prototype.is=function(t){return 0<this.filter(t).length},u.prototype.isInPage=function(t){return t!==document.body&&document.body.contains(t)},u.prototype.last=function(){return this.nodes[this.length-1]||!1},u.prototype.map=function(t){return t?u(this.array(t)).unique():this},u.prototype.not=function(e){return this.filter(function(t){return!u(t).is(e||!0)})},u.prototype.off=function(t){return this.eacharg(t,function(e,n){u(e._e?e._e[n]:[]).each(function(t){e.removeEventListener(n,t)})})},u.prototype.on=function(t,e,r){if("string"==typeof e){var i=e;e=function(e){var n=arguments;u(e.currentTarget).find(i).each(function(t){if(t===e.target||t.contains(e.target)){try{Object.defineProperty(e,"currentTarget",{get:function(){return t}})}catch(t){}r.apply(t,n)}})}}var n=function(t){return e.apply(this,[t].concat(t.detail||[]))};return this.eacharg(t,function(t,e){t.addEventListener(e,n),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push(n)})},u.prototype.pairs=function(n,t,e,r){if(void 0!==t){var i=n;(n={})[i]=t}return"object"==typeof n?this.each(function(t){for(var e in n)r(t,e,n[e])}):this.length?e(this.first(),n):""},u.prototype.param=function(e){return Object.keys(e).map(function(t){return this.uri(t)+"="+this.uri(e[t])}.bind(this)).join("&")},u.prototype.parent=function(t){return this.map(function(t){return t.parentNode}).filter(t)},u.prototype.prepend=function(t,e){return this.adjacent(t,e,function(t,e){t.insertBefore(e,t.firstChild)})},u.prototype.remove=function(){return this.each(function(t){t.parentNode&&t.parentNode.removeChild(t)})},u.prototype.removeClass=function(){return this.eacharg(arguments,function(t,e){t.classList.remove(e)})},u.prototype.replace=function(t,e){var n=[];return this.adjacent(t,e,function(t,e){n=n.concat(this.slice(e.children)),t.parentNode.replaceChild(e,t)}),u(n)},u.prototype.scroll=function(){return this.first().scrollIntoView({behavior:"smooth"}),this},u.prototype.select=function(t,e){return t=t.replace(/^\s*/,"").replace(/\s*$/,""),/^</.test(t)?u().generate(t):(e||document).querySelectorAll(t)},u.prototype.serialize=function(){var r=this;return this.slice(this.first().elements).reduce(function(e,n){return!n.name||n.disabled||"file"===n.type?e:/(checkbox|radio)/.test(n.type)&&!n.checked?e:"select-multiple"===n.type?(u(n.options).each(function(t){t.selected&&(e+="&"+r.uri(n.name)+"="+r.uri(t.value))}),e):e+"&"+r.uri(n.name)+"="+r.uri(n.value)},"").slice(1)},u.prototype.siblings=function(t){return this.parent().children(t).not(this)},u.prototype.size=function(){return this.first().getBoundingClientRect()},u.prototype.slice=function(t){return t&&0!==t.length&&"string"!=typeof t&&"[object Function]"!==t.toString()?t.length?[].slice.call(t.nodes||t):[t]:[]},u.prototype.str=function(e,n){return function(t){return"function"==typeof t?t.call(this,e,n):t.toString()}},u.prototype.text=function(e){return void 0===e?this.first().textContent||"":this.each(function(t){t.textContent=e})},u.prototype.toggleClass=function(t,e){return!!e===e?this[e?"addClass":"removeClass"](t):this.eacharg(t,function(t,e){t.classList.toggle(e)})},u.prototype.trigger=function(t){var i=this.slice(arguments).slice(1);return this.eacharg(t,function(t,e){var n,r={bubbles:!0,cancelable:!0,detail:i};try{n=new window.CustomEvent(e,r)}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i)}t.dispatchEvent(n)})},u.prototype.unique=function(){return u(this.nodes.reduce(function(t,e){return null!=e&&!1!==e&&-1===t.indexOf(e)?t.concat(e):t},[]))},u.prototype.uri=function(t){return encodeURIComponent(t).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},u.prototype.wrap=function(t){return this.map(function(e){return u(t).each(function(t){(function(t){for(;t.firstElementChild;)t=t.firstElementChild;return u(t)})(t).append(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)})})},u.prototype.add=function(t,e){var n=u(t,e);return n.nodes=this.nodes.concat(n.nodes),n},u.ajax=function(t,e,n,r,i,o,u){void 0===n&&(n="GET"),void 0===r&&(r=[]),void 0===i&&(i="text/plain"),void 0===o&&(o=[]),void 0===u&&(u=!1);var s=new Date;n=n.toUpperCase(),o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),"POST"===n&&(o["cache-control"]="no-cache",r.cache=s.getTime());var c=null;try{(c=new window.XMLHttpRequest).overrideMimeType(i)}catch(t){try{c=new window.ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{c=new window.ActiveXObject("Microsoft.XMLHTTP")}catch(t){c=null}}}if(null==c)return e&&e(null,!1),!1;var a="";for(var p in r)"string"!=typeof r[p]&&"number"!=typeof r[p]||(a+="&"+p+"="+encodeURIComponent(r[p]));a=a.substr(1);if("GET"===n&&a.length&&(t.indexOf("?")<0?t+="?"+a:t+="&"+a),c.open(n,t,!0),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.length)for(var l in o)c.setRequestHeader(l,o[l]);return u&&(c.withCredentials="true"),c.onreadystatechange=function(){var t=function(){switch(c.readyState){case 4:return 200!==c.status?0===c.status&&0:""!==c.responseText}return null}();null!==t&&(e&&(t?e(this.responseText,!0):e(null,t)),c=null)},"GET"!==n&&a.length?c.send(a):c.send(),!0},u.prototype.css=function(e,t){if(!(arguments.length<2)){var n,r="";if("string"==typeof e)t||0===t?r=u.dasherize(e)+":"+t:this.each(function(t){t.style.removeProperty(u.dasherize(e))});else for(n in e)e[n]||0===e[n]?r+=u.dasherize(n)+":"+e[n]+";":this.each(function(t){t.style.removeProperty(u.dasherize(n))});return this.each(function(t){t.style.cssText+=";"+r})}var i=this.first();if(i)return"string"==typeof e?i.style[u.camelize(e)]||window.getComputedStyle(i,"").getPropertyValue(e):void 0},u.prototype.each$=function(t){for(var e=this.nodes,n=0,r=this.nodes.length;n<r;n++)if(!1===t.call(e[n],n,e[n]))return this;return this},u.prototype.next=function(t){return this.map(function(t){for(var e=t.nextSibling;null!==e&&null!==e.nodeValue&&(e=e.nextSibling),null!==e&&null!==e.nodeValue;);return this.slice(e)}).filter(t)},u.prototype.off=function(t,r){return this.eacharg(t,function(e,n){r?e.removeEventListener(n,r):u(e._e?e._e[n]:[]).each(function(t){e.removeEventListener(n,t)})})},u.prototype.on2=function(t,n){return this.eacharg(t,function(t,e){t.addEventListener(e,n),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push(n)})},u.prototype.previous=function(t){return this.map(function(t){for(var e=t.previousSibling;null!==e&&null!==e.nodeValue&&(e=e.previousSibling),null!==e&&null!==e.nodeValue;);return this.slice(e)}).filter(t)},u.prototype.ready=function(t){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)window.setTimeout(function(){t(u)},0);else{var e=function(){document.removeEventListener("DOMContentLoaded",e,!1),window.removeEventListener("load",e,!1),t(u)};document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)}},u.ready=u.prototype.ready,u.prototype.click=function(t,e){return this.on("click",t,e)},u.prototype.resize=function(t,e){return this.on("resize",t,e)},u.prototype.swipe=function(t,e){return this.on("swipe",t,e)},u.prototype.swipeOn=function(t){var e=this,n=this.first();return e.swipe_prevent_scrolling=t,e.swipe_touch_start=function(t){e.swipeTouchStart(t)},e.swipe_touch_move=function(t){e.swipeTouchMove(t)},e.swipe_touch_end=function(t){e.swipeTouchEnd(t)},n.addEventListener("touchstart",e.swipe_touch_start,!1),n.addEventListener("touchmove",e.swipe_touch_move,!1),n.addEventListener("touchend",e.swipe_touch_end,!1),e},u.prototype.swipeOff=function(){var t=this.first();return t.removeEventListener("touchstart",this.swipe_touch_start,!1),t.removeEventListener("touchmove",this.swipe_touch_move,!1),t.removeEventListener("touchend",this.swipe_touch_end,!1),this},u.prototype.swipeTouchStart=function(t){var e=this,n=t.changedTouches[0];e.swipe_start_event=t,e.swipe_startX=n.pageX,e.swipe_startY=n.pageY,e.swipe_startTime=(new Date).getTime(),e.swipe_prevent_scrolling&&t.preventDefault()},u.prototype.swipeTouchMove=function(t){this.swipe_prevent_scrolling&&t.preventDefault()},u.prototype.swipeTouchEnd=function(t){var e=this,n=t.changedTouches[0],r="none",i=n.pageX-e.swipe_startX,o=n.pageY-e.swipe_startY,u=(new Date).getTime()-e.swipe_startTime;u<=300&&(150<=Math.abs(i)&&Math.abs(o)<=100?r=i<0?"left":"right":150<=Math.abs(o)&&Math.abs(i)<=100?r=o<0?"up":"down":u<100&&(r="touch")),e.trigger("swipe",r,e.swipe_start_event,t),e.swipe_prevent_scrolling&&t.preventDefault()},u.setTimeout=function(t,e){if(window.requestAnimationFrame){u.timeouts||(u.timeouts=["s"]);var n=u.timeouts.length,r=new Date,i=function(){(new Date).getTime()-r.getTime()<e?u.timeouts[n]=window.requestAnimationFrame(i):t()};return u.timeouts[n]=window.requestAnimationFrame(i),n}return window.setTimeout(t,e)},u.clearTimeout=function(t){window.cancelAnimationFrame?(t=!u.timeouts||u.timeouts.length<=t?null:u.timeouts[t],window.cancelAnimationFrame(t)):window.clearTimeout(t)},u.prototype.transition=function(t,e){if(!u.transition_event){var n=document.createElement("fakeelement"),r={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var i in r)void 0!==n.style[i]&&(u.transition_event=r[i])}return u.transition_event?this.on(u.transition_event,t,e):this},["width","height"].forEach(function(o){var s=o.replace(/./,function(t){return t[0].toUpperCase()});u.prototype[o]=function(e){var t,n=this.first();if(void 0===e)return u.isWindow(n)?n["inner"+s]:u.isDocument(n)?n.documentElement["scroll"+s]:(t=this.size())&&t[o];if(e.toString()===window.parseInt(e).toString())e+="px";else{var r=e.toString(),i=r.indexOf(".");0<i&&(r=r.substr(0,i)+"."+r.substr(i+1,2))===(window.parseFloat(Math.floor(100*e))/100).toString()&&(e=r+"px")}return this.each(function(t){(n=u(t)).css(o,e)})}}),"object"==typeof module&&module.exports&&(module.exports=u,module.exports.u=u);
export default u;