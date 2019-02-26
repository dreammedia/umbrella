/**
* @Author: Daniel Lehmann
* @Date:   2018/10/26
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/29
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// an alternative setTimeout function based on window.requestAnimationFrame but with fallback to window.setTimeout
u.setTimeout = function (callback, timeout) {
  if (window.requestAnimationFrame) {
    if (!u.timeouts) u.timeouts = ['s'];
    var id = u.timeouts.length;
    var start = new Date();

    var internal = function () {
      var now = new Date();
      if (now.getTime() - start.getTime() < timeout) u.timeouts[id] = window.requestAnimationFrame(internal);
      else callback();
    };

    u.timeouts[id] = window.requestAnimationFrame(internal);
    return id;
  } else return window.setTimeout(callback, timeout);
};

// the equivalent to window.clearTimeout for u.setTimeout
u.clearTimeout = function (id) {
  if (window.cancelAnimationFrame) {
    id = (!u.timeouts || u.timeouts.length <= id) ? null : u.timeouts[id];
    window.cancelAnimationFrame(id);
  } else window.clearTimeout(id);
};
