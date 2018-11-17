// https://gulpjs.com/docs/en/getting-started/creating-tasks

/**
 * * Compose tasks
 * * -------------------------------------
 * * Tasks are composed immediately when either series() or parallel() is called. 
 * * This allows variation in the composition instead of conditional behavior inside 
 * * individual tasks.
 */

const { series } = require('gulp');

process.env.NODE_ENV = 'production';

function minify(cb) {
  // body omitted
  cb();
}


function transpile(cb) {
  // body omitted
  cb();
}

function livereload(cb) {
  // body omitted
  cb();
}

if (process.env.NODE_ENV === 'production') {
  exports.build = series(transpile, minify);
} else {
  exports.build = series(transpile, livereload);
}