/**
* @Author: Daniel Lehmann
* @Date:   2018/10/31
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/31
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// returns the previous u(node) in the DOM
u.prototype.previous = function (selector) {
  return this.map(function (node) {
    var previous = node.previousSibling;
    do if (previous !== null && previous.nodeValue !== null) previous = previous.previousSibling;
    while (previous !== null && previous.nodeValue !== null);
    return this.slice(previous);
  }).filter(selector);
};
