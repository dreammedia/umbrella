// Attach a callback to the specified events
// Use this version of "on" if you want to remove this specific event/listener combination later
// without removing other listeners of the same event.
// custom arguments aren't added to the callback functions but are available through the detail parameter of the event object
u.prototype.on2 = function (events, cb) {
  return this.eacharg(events, function (node, event) {
    node.addEventListener(event, cb);

    // Store it so we can dereference it with `.off()` later on
    node._e = node._e || {};
    node._e[event] = node._e[event] || [];
    node._e[event].push(cb);
  });
};
