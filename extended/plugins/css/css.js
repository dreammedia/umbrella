/**
* @Author: Daniel Lehmann
* @Date:   2018/09/28
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/09/30
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// replacement for jQueries css function
u.prototype.css = function (property, value) {
  if (arguments.length < 2) {
    var element = this.first();
    if (!element) return;
    if (typeof property === 'string') return element.style[u.camelize(property)] || window.getComputedStyle(element, '').getPropertyValue(property);
  } else {
    var css = '';
    if (typeof property === 'string') {
      if (!value && value !== 0) this.each(function (node) { node.style.removeProperty(u.dasherize(property)); });
      else css = u.dasherize(property) + ':' + value;
    } else {
      var key;
      for (key in property)
        if (!property[key] && property[key] !== 0) this.each(function (node) { node.style.removeProperty(u.dasherize(key)); });
        else css += u.dasherize(key) + ':' + property[key] + ';';
    }
    return this.each(function (node) { node.style.cssText += ';' + css; });
  }
};
