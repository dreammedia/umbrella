// Find the size of the first matched element
// handles iOS bug with elements of fixed position
u.prototype.size = function () {
  var obj = this.first();
  var value = obj.getBoundingClientRect();
  if (u.isMobileSafari() && this.css('position') === 'fixed') {
    var top = 0;
    value = {left: value.left, right: value.right, width: value.width, height: value.height, x: value.x};
    while (obj) {
      top += obj.offsetTop;
      obj = obj.offsetParent;
    }
    value.y = top;
    value.top = (value.height < 0) ? top + value.height : top;
    value.bottom = value.top + value.height;
  }
  return value;
};
