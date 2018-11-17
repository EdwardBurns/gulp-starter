// https://gulpjs.com/docs/en/getting-started/async-completion

/**
 * * Signal task completion
 * * -------------------------------------
 * * Using an error-first callback (cont...)
 * * However, you'll often pass this callback to another API instead of calling it yourself.
 */

const fs = require('fs');

function passingCallback(cb) {
  fs.access('gulpfile.js', cb);
}

exports.default = passingCallback;