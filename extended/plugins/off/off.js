// Removes the callback to the event listener for each node
// overwriting existing function to supply the possibility to define the listener function
u.prototype.off = function (events, callback) {
  return this.eacharg(events, function (node, event) {
    if (callback) node.removeEventListener(event, callback);
    else {
      u(node._e ? node._e[event] : []).each(function (cb) {
        node.removeEventListener(event, cb);
      });
    }
  });
};
