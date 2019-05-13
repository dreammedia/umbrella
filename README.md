# Umbrella JS [![Circle CI](https://circleci.com/gh/franciscop/umbrella/tree/master.svg?style=shield)](https://circleci.com/gh/franciscop/umbrella/tree/master) [![stats](https://data.jsdelivr.com/v1/package/npm/umbrellajs/badge?style=rounded)](https://www.jsdelivr.com/package/npm/umbrellajs) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard) [![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/franciscop/umbrella/blob/master/LICENSE)

> [**Library Documentation**](http://umbrellajs.com/documentation) | [**Migrate from 2.0 to 3.0**](https://github.com/franciscop/umbrella/blob/master/migrate-2-to-3.md) | [**Migrating from jQuery guide**](https://github.com/franciscop/umbrella/blob/master/jquery.md)

Covers your javascript needs for those rainy days. A <3kb performant jQuery-like library born from the question: [You might not need jQuery](http://youmightnotneedjquery.com/), then what do you need?

You probably need awesome CSS (like [Picnic CSS](http://picnicss.com/)) and a lightweight, modern and performant javascript library. This does:

- DOM traversal (selector, filter, find, each, etc.)
- DOM editing (classes & attributes, html, before, etc.)
- Event handling

A couple of simple examples:

```js
// Simple events like jQuery
u("button").on('click', e => {
  alert("Hello world");
});

// Handle form submissions
u('form.login').handle('submit', async e => {
  const user = await fetch('/login', {
    method: 'POST', body: new FormData(e.target)
  }).then(res => res.json());
  window.href = '/user/' + user.id;
});
```


## Getting started

There are few ways to use Umbrella JS:


### Play with it

Instead of installing it, you can just play with it in JSFiddle:

[**Try on JSFiddle**](https://jsfiddle.net/franciscop/mwpcqddj/)


### Use a CDN

jsdelivr.com is an awesome OSS service that hosts many open source projects so you don't need to even download the code:

```js
<script src="https://cdn.jsdelivr.net/npm/umbrellajs"></script>
```


### Install with `npm`

Using npm is a front-end package manager that makes it super-easy to add a new package:

```
npm install umbrellajs
```


### Module support

If you use a front-end module bundler like Webpack or Browserify, `u` is exposed as CommonJS exports. You can pull them in like so:

```js
// ES Modules/Webpack/etc
import u from 'umbrellajs';

// Commonjs
var u = require('umbrellajs');
```

### ES Module support

If you use an ES Module, `u` and `ajax` are exposed as ES Module exports.
You can pull them in like so:

```
import u from 'umbrellajs/umbrella.esm.js'
```

### Download it

If you like it or prefer to try it locally, just download `umbrella.min.js`:

[**Download Umbrella JS**](https://raw.githubusercontent.com/franciscop/umbrella/master/umbrella.min.js)

Add it to your project:

```html
<script src="umbrella.min.js"></script>
```



## Support: IE11+

Current usage for IE 10- is under 1% for each version (8, 9, 10) so it's not Umbrella's mission to support this. However, those extra seconds gained from loading faster on mobile might be even bigger than that percentage. You should probably test it.

Known, wontfix IE10- bugs:

- [Invalid target element for this operation](http://caniuse.com/#feat=insertadjacenthtml) when trying to use any of these methods on **table**, **tbody**, **thead** or **tr**. Check [the issue on StackOverflow](http://stackoverflow.com/q/8771498/938236). For those elements, this gives an error:
  - `.before()`
  - `.after()`
  - `.append()`
  - `.prepend()`


- [Unable to get property ____ of undefined or null reference](http://caniuse.com/#search=classList) since classList is not supported by IE9-. Just use `polyfill.js` and they will work. Affects:
  - `.addClass()`
  - `.removeClass()`
  - `.hasClass()`
  - `.toggleClass()`

- Choosing multiple options within `<select>` doesn't work with IE10- when using `.serialize()` (and thus `.ajax()`). No idea why, but it's a really corner case. Affects:
  - `.ajax()`
  - `.serialize()`



## Alternatives

- [jQuery](https://jquery.com/)

- [Zepto](http://zeptojs.com/)

- [Bliss](http://blissfuljs.com/)

- [NodeList](https://github.com/eorroe/NodeList.js)

- [Micro Framework (many)](http://microjs.com/)


## Author and License

Created and maintained by [Francisco Presencia](https://github.com/franciscop) under the MIT license.


## References

- http://www.tutsplanet.com/umbrella-js-alternative-jquery-288/
- http://www.hongkiat.com/blog/umbrella-js/
- http://www.catswhocode.com/blog/umbrella-js-a-tiny-yet-powerful-alternative-to-jquery
- https://webmaster.kitchen/jquery-kutuphanesine-alternatif-umbrellajs-kimdir/
- https://wmaraci.com/blog/umbrellajs-jquery-alternatifiniz-olmaya-aday-533
- http://qiita.com/kt3k/items/0da4c0b36c402b96122b
- https://whatpixel.com/umbrella-js-library/
- https://gomakethings.com/umbrella-js/
- https://medium.com/@rintoug/umbrella-js-is-your-alternative-to-jquery-c73fab99061
- https://lean.codecomputerlove.com/keeping-your-code-dry-with-umbrellajs/




# Extended version

Extended by [Daniel Lehmann](https://github.com/dreammedia)

I added a couple more functions to umbrellajs. Most of them are jQuery functions I missed. Some are just functions I find usefull.
Most of the code for the jQuery functions is originaly taken from [zeptojs.com](https://zeptojs.com).

You can now pass the window object to the umbrella object to add events to it:
E.g.: u(window).resize(...)




## Functions

### add

creating a new u object by adding another, returning the new object


### u.ajax

loads text via an ajax call

* Loads text via an ajax call.
* Calls the callback function with the returned text as first parameter (string) and the success as second (boolean).
* Adds always a "cache" value if the method is "post".
* The header['Content-Type'] is set to 'application/x-www-form-urlencoded; charset=utf-8' by default.
* The header['X-Requested-With'] is set to 'XMLHttpRequest' by default.
* Set a header to null to remove a preset header.
*
* Returns the success of the call, not of the respons.
*
*
* @param url             - the url of the request
* @param callback        - a callback function
* @param method          - the method "get" || "post" (optional, default "get")
* @param values          - values in the form of an associative array which are getting sent with the call (optional)
* @param mime            - the mime type of the request (optional, default "text/plain")
* @param header          - an associatives array of header parameters (optional)
* @param credentials     - indicates if the credentials of the site should be sent with the call (optional, default: false)
*
* @return	boolean


### u.clearTimeout

the equivalent to window.clearTimeout for u.setTimeout


### u.camelize

returns the passed string camelized


### css

equivalent of jQueries css function


### u.dasherize

returns the passed string dasherized


### each$

equivalent of jQueries each function


### u.getCookie

returns the value of a cookie

* @param   name    - the name of the cookie


### height

equivalent of jQueries height function


### u.isDocument

returns if the passed object is the document object


### u.isWindow

returns if the passed object is the window object


### next

returns the next u(node) in the DOM


### previous

returns the previous u(node) in the DOM


### ready

equivalent of jQueries ready function


### u.setCookie

sets or deletes a cookie
to delete a cookie, leave value and exdays empty

* @param   name       - cookie name
* @param   value      - cookie value (optional, default = '' -> cookie gets deleted)
* @param   exdays     - days till expiration of the cookie (optional, default = 99999)


### swipeOn

enables the event "swipe" for an object (needs to be done only ones per object)


### swipeOff

disables the event "swipe" for an object


### off

added second parameter "listener" to be able to remove only specific event/listener combination


### on2

alternative "on" with possibility to remove event/listener combination later without removing other listeners


### u.setTimeout

an alternative setTimeout function based on window.requestAnimationFrame (uses window.setTimeout as fallback)


### width

equivalent of jQueries width function




## Events

### click

shortcut for on("click", ...)


### resize

shortcut for on("resize", ...)


### swipe

adds the event listener swipe

* Adds the event listener swipe to an object.
* The event swipe needs to be enabled first for the object by using swipeOn().
* The callback function receives as second parameter: eather "left", "right", "up", "down", "touch" or "none".
* The callback function receives as third and fourth parameter: the event objects of the touchstart and touchend events.
*
* E.g.: u_object.swipeOn().swipe(function(e, direction) { if (direction == "left") ...; });


### transition

event for detecting the end of a css transition
(if supported, the event name will be in u.transition_event, otherwise u.transition_event will not exist after call)
