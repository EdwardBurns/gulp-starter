// https://gulpjs.com/docs/en/getting-started/creating-tasks

/**
 * * Compose tasks
 * * -------------------------------------
 * * series() and parallel() can be nested to any arbitrary depth.
 */

const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

exports.build = series(clean, parallel(css, javascript));
