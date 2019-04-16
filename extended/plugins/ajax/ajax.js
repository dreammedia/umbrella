/**
* @Author: Daniel Lehmann
* @Date:   2018/10/26
* @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2019/04/16
* @copyright Daniel Lehmann (code@dreammedia.info)
*/

/**
 * Loads text via an ajax call.
 * Calls the callback function with the returned text as first parameter (string) and the success as second (boolean).
 * Adds always a "cache" value if the method is "post".
 *
 * Returns the success of the call, not of the respons.
 *
 *
 * @param   url             the url of the request
 * @param   callback        a callback function
 * @param   method          the method "get" || "post" (optional, default "get")
 * @param	values		    values in the form of an associative array which are getting sent with the call (optional)
 * @param   mine            the mine type of the request (optional, default "text/plain")
 * @param	header		    an associatives array of header parameters (optional)
 * @param   credentials     indicates if the credentials of the site should be sent with the call (optional, default: false)
 *
 * @return	boolean
 */
u.ajax = function (url, callback, method, values, mine, header, credentials) {
  if (typeof method === 'undefined' || method == null) method = 'GET';
  if (typeof values === 'undefined' || values == null) values = [];
  if (typeof mine === 'undefined' || mine == null) mine = 'text/plain';
  if (typeof header === 'undefined' || header == null) header = [];
  if (typeof credentials === 'undefined' || credentials == null) credentials = false;

  var now = new Date();

  method = method.toUpperCase();
  if (!header['X-Requested-With']) header['X-Requested-With'] = 'XMLHttpRequest'; // use only if not cross domain
  if (method === 'POST') {
    header['cache-control'] = 'no-cache';
    values['cache'] = now.getTime();
  }

  var request = null;
  var asyncronous = true;

  try {
    request = new window.XMLHttpRequest();
    request.overrideMimeType(mine);
  } catch (e) {
    try {
      request = new window.ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        request = new window.ActiveXObject('Microsoft.XMLHTTP');
      } catch (failed) {
        request = null;
      }
    }
  }

  if (request == null) {
    if (callback) callback(null, false);
    return false;
  }

  var data = '';
  for (var value in values) {
    if (typeof values[value] === 'string' || typeof values[value] === 'number') data += '&' + value + '=' + encodeURIComponent(values[value]);
  }
  data = data.substr(1);

  var checkData = function () {
    switch (request.readyState) {
      case 4:
        if (request.status !== 200) {
          if (request.status === 0) return 0;
          return false;
        } else {
          if (request.responseText === '') return false;
          else return true;
        }
        break;
      default:
        break;
    }
    return null;
  };

  var onData = function () {
    var success = checkData();
    if (success === null) return;
    if (callback) {
      if (!success) callback(null, success);
      else if (this.responseText) callback(this.responseText, true);
      else if (request && request.responseText) callback(request.responseText, true);
    }
    request = null;
  };

  if (method === 'GET' && data.length) {
    if (url.indexOf('?') < 0) url += '?' + data;
    else url += '&' + data;
  }

  request.open(method, url, asyncronous);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  if (header.length) {
    for (var key in header) {
      request.setRequestHeader(key, header[key]);
    }
  }
  if (credentials) request.withCredentials = 'true';
  request.onreadystatechange = onData;
  if (method === 'GET' || !data.length) request.send();
  else request.send(data);

  return true;
};
