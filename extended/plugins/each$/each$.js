/**
* @Author: Daniel Lehmann
* @Date:   2018/09/30
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/09/30
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// replacement for jQueries each function (inspired/copied by/from zepto.js)
// difference to umbrellas each function is that it can be stopped by having the callback function returning "false"
// and "this" is the node not the u-object and first parameter is the index, second the node
// is slower than the umbrella each function
u.prototype.each$ = function (callback) {
  var nodes = this.nodes;
  for (var i = 0, l = this.nodes.length; i < l; i++) if (callback.call(nodes[i], i, nodes[i]) === false) return this;

  return this;
};
