
// https://gulpjs.com/docs/en/getting-started/using-plugins
// https://gulpjs.com/plugins/



/**
 * * Using Plugins
 * * -----------------------------------------
 * * Each plugin should only do a small amount of work, so you can connect them like 
 * * building blocks. You may need to combine a bunch of them to get the desired result.
 * 
 */


const { src, dest } = require('gulp');
const uglify        = require('gulp-uglify');
const rename        = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    // The gulp-uglify plugin won't update the filename
    .pipe(uglify())
    // So use gulp-rename to change the extension
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}
