// https://gulpjs.com/docs/en/getting-started/async-completion

/**
 * * Signal task completion
 * * -------------------------------------
 * * When composing tasks with series(), an error will end the composition and no 
 * * further tasks will be executed. When composing tasks with parallel(), an error 
 * * will end the composition but the other parallel tasks may or may not complete.
 * 
 * * Using an error-first callback
 * * -------------------------------------
 * * To indicate to gulp that an error occurred in a task using an error-first 
 * * callback, call it with an Error as the only argument.
 */

function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error('kaboom'));
}

exports.default = callbackError;