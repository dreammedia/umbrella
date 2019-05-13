/**
* @Author: Daniel Lehmann
* @Date:   2019/05/12
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2019/05/12
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

/**
 * Sets or deletes a cookie.
 *
 * To delete a cookie, leave value and exdays empty.
 *
 * @param   name       cookie name
 * @param   value      cookie value (optional, default = '' -> cookie gets deleted)
 * @param   exdays     days till expiration of the cookie (optional, default = 99999)
 */
u.setCookie = function (name, value, exdays) {
  if (typeof exdays === 'undefined' || exdays == null) exdays = 99999;
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  if (typeof value === 'undefined' || value == null) {
    value = '';
    d = new Date(0);
  }
  var expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

/**
 * Returns the value of a cookie.
 *
 * @param   name    the name of the cookie
 */
u.getCookie = function (name) {
  name = name + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
