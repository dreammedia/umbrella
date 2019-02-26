/**
* @Author: Daniel Lehmann
* @Date:   2018/10/24
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/25
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// adds the event listener swipe to an object
// the event swipe needs to be enabled first for the object
// the callback function receives as second parameter eather "left", "right", "up", "down", "touch" or "none"
// the callback function receives as third and fourth parameter the event objects of the touchstart and touchend event
u.prototype.swipe = function (cb, cb2) {
  return this.on('swipe', cb, cb2);
};

// enables the event swipe for an object
// set optional parameter to true to prevent scrolling when swiping inside the object (or any other event triggering for that matter)
u.prototype.swipeOn = function (prevent_scrolling) {
  var me = this;
  var touchsurface = this.first();

  me.swipe_prevent_scrolling = prevent_scrolling;
  me.swipe_touch_start = function (e) { me.swipeTouchStart(e); };
  me.swipe_touch_move = function (e) { me.swipeTouchMove(e); };
  me.swipe_touch_end = function (e) { me.swipeTouchEnd(e); };

  // me.swipe_threshold = 150; // required min distance traveled to be considered swipe
  // me.swipe_restraint = 100; // maximum distance allowed at the same time in perpendicular direction
  // me.swipe_allowedTime = 300; // maximum time allowed to travel that distance

  touchsurface.addEventListener('touchstart', me.swipe_touch_start, false);
  touchsurface.addEventListener('touchmove', me.swipe_touch_move, false);
  touchsurface.addEventListener('touchend', me.swipe_touch_end, false);

  return me;
};

// disables the event swipe for an object
u.prototype.swipeOff = function () {
  var me = this;
  var touchsurface = this.first();
  touchsurface.removeEventListener('touchstart', me.swipe_touch_start, false);
  touchsurface.removeEventListener('touchmove', me.swipe_touch_move, false);
  touchsurface.removeEventListener('touchend', me.swipe_touch_end, false);

  return me;
};

u.prototype.swipeTouchStart = function (e) {
  var me = this;
  var touchobj = e.changedTouches[0];
  me.swipe_start_event = e;
  me.swipe_startX = touchobj.pageX;
  me.swipe_startY = touchobj.pageY;
  me.swipe_startTime = new Date().getTime(); // record time when finger first makes contact with surface
  if (me.swipe_prevent_scrolling) e.preventDefault();
};

u.prototype.swipeTouchMove = function (e) {
  var me = this;
  if (me.swipe_prevent_scrolling) e.preventDefault(); // prevent scrolling when inside DIV
};

u.prototype.swipeTouchEnd = function (e) {
  var me = this;
  var touchobj = e.changedTouches[0];
  var swipedir = 'none';
  var distX = touchobj.pageX - me.swipe_startX; // get horizontal dist traveled by finger while in contact with surface
  var distY = touchobj.pageY - me.swipe_startY; // get vertical dist traveled by finger while in contact with surface
  var elapsedTime = new Date().getTime() - me.swipe_startTime; // get time elapsed

  if (elapsedTime <= 300) { // first condition for swipe met
    if (Math.abs(distX) >= 150 && Math.abs(distY) <= 100) { // 2nd condition for horizontal swipe met
      swipedir = (distX < 0) ? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
    } else if (Math.abs(distY) >= 150 && Math.abs(distX) <= 100) { // 2nd condition for vertical swipe met
      swipedir = (distY < 0) ? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
    } else if (elapsedTime < 100) {
      swipedir = 'touch';
    }
  }
  me.trigger('swipe', swipedir, me.swipe_start_event, e);
  if (me.swipe_prevent_scrolling) e.preventDefault();
};
