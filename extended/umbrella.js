/**
* @Author: Daniel Lehmann
* @Date:   2018/09/28
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2019/05/31
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// extending the umbrella class
// extended parts are marked as "EXTENDED:"
// add 'polyfill.js' to the begining of the files in Gruntfile.js (for IE9), exchange 'src/umbrella.js' with 'extended/umbrella.js', 'src/export.js' with 'extended/export.js' and add 'extended/plugins/**/*.js'

// Initialize the library
var u = function (parameter, context) {
  // Make it an instance of u() to avoid needing 'new' as in 'new u()' and just
  // use 'u().bla();'.
  // @reference http://stackoverflow.com/q/24019863
  // @reference http://stackoverflow.com/q/8875878
  if (!(this instanceof u)) {
    return new u(parameter, context);
  }

  // No need to further processing it if it's already an instance
  if (parameter instanceof u) {
    return parameter;
  }

  // Parse it as a CSS selector if it's a string
  if (typeof parameter === 'string') {
    parameter = this.select(parameter, context);
  }
  // EXTENDED: If a function is given, call it when the DOM is ready
  else if (typeof parameter === 'function') u.prototype.ready(parameter);
  // END EXTENDED

  // If we're referring a specific node as in on('click', function(){ u(this) })
  // or the select() function returned a single node such as in '#id'
  if (parameter && parameter.nodeName) {
    parameter = [parameter];
  }

  // EXTENDED: Makes it possible to add events to the window object
  if (u.isWindow(parameter)) {
    parameter = [parameter];
  }
  // END EXTENDED

  // Convert to an array, since there are many 'array-like' stuff in js-land
  this.nodes = this.slice(parameter);
};

// Map u( something ).length to u( something ).nodes.length
u.prototype = {
  get length () {
    return this.nodes.length;
  }
};

// This made the code faster, read "Initializing instance variables" in
// https://developers.google.com/speed/articles/optimizing-javascript
u.prototype.nodes = [];

// EXTENDED:
u.isWindow = function (obj) { return obj != null && obj === obj.window; };
u.isDocument = function (obj) { return obj != null && obj.nodeType === obj.DOCUMENT_NODE; };
u.isMobileSafari = function() {
  var platform = navigator.platform.trim().toLowerCase();
  if (platform === 'iphone' || platform === 'ipad' || platform === 'ipod') return /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent);
  return false;
};
u.camelize = function (str) { return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }); };
u.dasherize = function (str) { return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase(); };
