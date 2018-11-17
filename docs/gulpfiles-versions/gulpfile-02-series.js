// https://gulpjs.com/docs/en/getting-started/creating-tasks

/**
 * * Compose tasks
 * * -------------------------------------
 * * To have your tasks execute in order, use the series() method.
 */

const { series } = require('gulp');

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.build = series(transpile, bundle);