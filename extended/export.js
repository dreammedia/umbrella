// Only removed the three dots from the comments because of possible prblems when a firewall is missconfigurated
// Export it for webpack
if (typeof module === 'object' && module.exports) {
  // Avoid breaking it for `import { u } from something`. Add `import u from something`
  module.exports = u;
  module.exports.u = u;
}
