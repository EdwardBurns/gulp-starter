// https://gulpjs.com/docs/en/getting-started/async-completion

/**
 * * Signal task completion
 * * -------------------------------------
 * * Using an error-first callback
 * 
 */

function callbackTask(cb) {
  // `cb()` should be called by some async work
  cb();
}

exports.default = callbackTask;