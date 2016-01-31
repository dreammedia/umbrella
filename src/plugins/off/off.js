/**
 * .off(event, callback)
 *
 * Removes the callback to the event listener for each node
 * @param String event(s) the type of event ('click', 'submit', etc)
 * @param function callback function to be removed
 * @return this Umbrella object
 */
u.prototype.off = function(events, callback) {
  return this.eacharg(events, function(node, event){
    node.removeEventListener(event, callback);
  });
};
