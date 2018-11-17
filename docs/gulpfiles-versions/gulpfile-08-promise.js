// https://gulpjs.com/docs/en/getting-started/async-completion

/**
 * * Signal task completion
 * * -------------------------------------
 * * Returning a promise
 */

function promiseTask() {
  return Promise.resolve('the value is ignored');
}

exports.default = promiseTask;