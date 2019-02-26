/**
* @Author: Daniel Lehmann
* @Date:   2018/10/31
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/31
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// returns the next u(node) in the DOM
u.prototype.next = function (selector) {
  return this.map(function (node) {
    var next = node.nextSibling;
    do if (next !== null && next.nodeValue !== null) next = next.nextSibling;
    while (next !== null && next.nodeValue !== null);
    return this.slice(next);
  }).filter(selector);
};
