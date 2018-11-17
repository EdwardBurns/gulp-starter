// https://gulpjs.com/docs/en/getting-started/creating-tasks

/**
 * * Exporting
 * * -------------------------------------
 * * A private task looks and acts like any other task, but an end-user can't ever 
 * * execute it independently. To register a task publicly, export it from your gulpfile.
 */

const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

exports.build   = build;
exports.default = series(clean, build);