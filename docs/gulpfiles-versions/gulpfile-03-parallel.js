// https://gulpjs.com/docs/en/getting-started/creating-tasks

/**
 * * Compose tasks
 * * -------------------------------------
 * * For tasks to run at maximum concurrency, combine them with the parallel() method.
 */

const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);