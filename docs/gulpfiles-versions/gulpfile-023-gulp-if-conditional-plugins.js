// https://gulpjs.com/docs/en/getting-started/using-plugins
// https://www.npmjs.com/package/gulp-if


/** 
 * * Conditional plugins
 * * -------------------------------------
 * * Since plugin operations shouldn't be file-type-aware, you may need a 
 * * plugin like gulp-if to transform subsets of files.
 * 
 */ 

const { src, dest } = require('gulp');
const gulpif        = require('gulp-if');
const uglify        = require('gulp-uglify');

function isJavaScript(file) {
  // Check if file extension is '.js'
  return file.extname === '.js';
}

exports.default = function() {
  // Include JavaScript and CSS files in a single pipeline
  return src(['src/*.js', 'src/*.css'] )
    // Only apply gulp-uglify plugin to JavaScript files
    .pipe( gulpif(isJavaScript, uglify()) )
    .pipe( dest('output/') );
}


