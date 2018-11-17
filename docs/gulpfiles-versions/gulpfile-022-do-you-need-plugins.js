
// https://gulpjs.com/docs/en/getting-started/using-plugins
// https://gulpjs.com/plugins/
// https://www.npmjs.com/package/delete



/**
 * ? Do you need a plugin?
 * * -----------------------------------------
 * * Not everything in gulp should use plugins. They are a quick way to get started, 
 * * but many operations are improved by using a module or library instead.
 * 
 */


const { rollup } = require('rollup');

// Rollup's promise API works great in an `async` task
exports.default = async function() {
  const bundle = await rollup.rollup({
    input: 'src/index.js'
  });

  return bundle.write({
    file  : 'output/bundle.js',
    format: 'iife'
  });
}


/**
 * * Plugins should always transform files. Use a (non-plugin) Node module or library 
 * * for any other operations.
 * 

const del = require('delete');

exports.default = function(cb) {
  // Use the `delete` module directly, instead of using gulp-rimraf
  del(['output/*.js'], cb);
}
 */