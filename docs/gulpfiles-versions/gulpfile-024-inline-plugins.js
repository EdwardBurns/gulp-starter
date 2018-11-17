// https://gulpjs.com/docs/en/getting-started/using-plugins
// https://www.npmjs.com/package/through2


/** 
 * * Inline plugins
 * * -------------------------------------
 * * Inline plugins are one-off Transform Streams you define inside your 
 * * gulpfile by writing the desired behavior.
 * 
 * * There are two situations where creating an inline plugin is helpful:
 * 
 * * Instead of creating and maintaining your own plugin.
 * * Instead of forking a plugin that exists to add a feature you want.
 * 
 */ 

const { src, dest } = require('gulp');
const uglify        = require('uglify-js');
const through2      = require('through2');

exports.default = function() {
  return src('src/*.js')
    // Instead of using gulp-uglify, you can create an inline plugin
    .pipe(through2.obj(function(file, _, cb) {
      if (file.isBuffer()) {
        const code          = uglify.minify(file.contents.toString())
              file.contents = Buffer.from(code)
      }
      cb(null, file);
    }))
    .pipe(dest('output/'));
}
