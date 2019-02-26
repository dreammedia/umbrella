/**
* @Author: Daniel Lehmann
* @Date:   2018/10/24
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/25
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// event for detecting the end of an transition
// if the browser supports the feature, the event name will be in u.transition_event
// otherwise u.transition_event will not exist after the call
u.prototype.transition = function (cb, cb2) {
  if (!u.transition_event) {
    var el = document.createElement('fakeelement');

    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (var t in transitions) {
      if (el.style[t] !== undefined) {
        u.transition_event = transitions[t];
      }
    }
  }

  if (!u.transition_event) return this;

  return this.on(u.transition_event, cb, cb2);
};
