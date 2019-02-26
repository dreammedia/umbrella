/**
* @Author: Daniel Lehmann
* @Date:   2018/09/30
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/12/05
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// replacement for jQueries ready function (inspired/copied by/from zepto.js)
// use u(handler) or u.ready(handler) or u().ready(handler) or u( something ).ready(handler)
u.prototype.ready = function (callback) {
  // don't use "interactive" on IE <= 10 (it can fired premature)
  if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) window.setTimeout(function () { callback(u); }, 0);
  else {
    var handler = function () {
      document.removeEventListener('DOMContentLoaded', handler, false);
      window.removeEventListener('load', handler, false);
      callback(u);
    };
    document.addEventListener('DOMContentLoaded', handler, false);
    window.addEventListener('load', handler, false);
  }
};

u.ready = u.prototype.ready;
