/**
* @Author: Daniel Lehmann
* @Date:   2018/10/27
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/27
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// creating a new u object by adding another, returning the new object
u.prototype.add = function (parameter, context) {
  var u_node = u(parameter, context);
  u_node.nodes = this.nodes.concat(u_node.nodes);
  return u_node;
};
