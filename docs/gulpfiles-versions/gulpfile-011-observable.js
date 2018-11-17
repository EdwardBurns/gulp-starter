// https://gulpjs.com/docs/en/getting-started/async-completion

/**
 * * Signal task completion
 * * -------------------------------------
 * * Returning an observable
 */

const { Observable } = require('rxjs');

function observableTask() {
  return Observable.of(1, 2, 3);
}

exports.default = observableTask;