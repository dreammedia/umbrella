/**
* @Author: Daniel Lehmann
* @Date:   2018/09/30
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2018/10/25
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

// just a bunch of shortcuts
u.prototype.click = function (cb, cb2) {
  return this.on('click', cb, cb2);
};
u.prototype.resize = function (cb, cb2) {
  return this.on('resize', cb, cb2);
};
