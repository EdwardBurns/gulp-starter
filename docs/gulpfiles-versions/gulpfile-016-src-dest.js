// https://gulpjs.com/docs/en/getting-started/working-with-files

/**
 * * Working with Files
 * * -------------------------------------
 * * The src() and dest() methods are exposed by gulp to interact with files on your computer.
 *
 * * src() is given a glob to read from the file system and produces a Node stream. It 
 * * locates all matching files and reads them into memory to pass through the stream.
 *
 * * The stream produced by src() should be returned from a task to signal async completion, 
 * * as mentioned in Creating Tasks.
 * 
 * 
 * * Modes: streaming, buffered, and empty
 * * -------------------------------------
 * * src() can operate in three modes: buffering, streaming, and empty. These are 
 * * configured with the buffer and read options on src().
 *
 * * Buffering mode is the default and loads the file contents into memory. Plugins 
 * * usually operate in buffering mode and many don't support streaming mode.
 * 
 * * Streaming mode exists mainly to operate on large files that can't fit in memory, 
 * * like giant images or movies. The contents are streamed from the filesystem in small 
 * * chunks instead of loaded all at once. If you need to use streaming mode, look for 
 * * a plugin that supports it or write your own.
 * 
 * * Empty mode contains no contents and is useful when only working with file metadata.
 * 
 */

 
const { src, dest } = require('gulp');

exports.default = function() {
  return src('src/*.js')
    .pipe(dest('output/'));
}
