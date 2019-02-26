/**
* @Author: Daniel Lehmann
* @Date:   2018/09/28
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/04
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// replacement for jQueries width and height functions (inspired/copied by/from zepto.js)
// if no unit for value is given, "px" is added
['width', 'height'].forEach(function (dimension) {
  var dimensionProperty = dimension.replace(/./, function (m) { return m[0].toUpperCase(); });

  u.prototype[dimension] = function (value) {
    var offset;
    var el = this.first();

    if (typeof value === 'undefined') return u.isWindow(el) ? el['inner' + dimensionProperty] : u.isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.size()) && offset[dimension];
    else {
      if (value.toString() === window.parseInt(value).toString()) value += 'px';
      else {
        var test_value = value.toString();
        var point = test_value.indexOf('.');
        if (point > 0) {
          test_value = test_value.substr(0, point) + '.' + test_value.substr(point + 1, 2);
          if (test_value === (window.parseFloat(Math.floor(value * 100)) / 100).toString()) value = test_value + 'px';
        }
      }

      return this.each(function (node) {
        el = u(node);
        el.css(dimension, value);
      });
    }
  };
});
