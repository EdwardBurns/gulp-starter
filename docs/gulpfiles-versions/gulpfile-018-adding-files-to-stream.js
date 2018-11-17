// https://gulpjs.com/docs/en/getting-started/working-with-files
// https://www.npmjs.com/package/gulp-babel
// https://babeljs.io/

// # Babel 7
// $ npm install --save-dev gulp-babel @babel/core @babel/preset-env


/**
 * * Adding files to the stream 
 * * -------------------------------------
 * * This can be useful for transpiling some files before adding plain JavaScript 
 * * files to the pipeline and uglifying everything.
 * 
 */

const { src, dest } = require('gulp');
const babel         = require('gulp-babel');
const uglify        = require('gulp-uglify');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js')) // <<< Adding files here
    .pipe(uglify())
    .pipe(dest('output/'));
}
