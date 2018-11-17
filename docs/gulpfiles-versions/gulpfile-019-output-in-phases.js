// https://gulpjs.com/docs/en/getting-started/working-with-files
// https://www.npmjs.com/package/gulp-babel
// https://babeljs.io/

// # Babel 7
// $ npm install --save-dev gulp-babel @babel/core @babel/preset-env

/**
 * * Output in phases 
 * * -------------------------------------
 * * dest() can be used in the middle of a pipeline to write intermediate states to the 
 * * filesystem. When a file is received, the current state is written out to the filesystem, 
 * * the path is updated to represent the new location of the output file, then that file 
 * * continues down the pipeline.
 *
 * * This feature can be useful to create unminified and minified files with the same pipeline.
 * 
 */

const { src, dest } = require('gulp');
const babel         = require('gulp-babel');
const uglify        = require('gulp-uglify');
const rename        = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js'))
    .pipe(dest('output/'))    // <<< Output
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));   // <<< Output
}
