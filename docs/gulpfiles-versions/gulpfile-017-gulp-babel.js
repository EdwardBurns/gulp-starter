// https://gulpjs.com/docs/en/getting-started/working-with-files
// https://www.npmjs.com/package/gulp-babel
// https://babeljs.io/

// # Babel 7
// $ npm install --save-dev gulp-babel @babel/core @babel/preset-env


/**
 * * Working with Files
 * * -------------------------------------
 * * The main API of a stream is the .pipe() method for chaining 
 * * Transform or Writable streams.
 * 
 */


const { src, dest } = require('gulp'),
      babel         = require('gulp-babel');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output/'));
}