var dev_env = 'development'; // development, staging, production

// if ( dev_env )
//   process.env.NODE_ENV = 'development';
// else
//   process.env.NODE_ENV = 'production';


const { src, dest, series, parallel, watch } = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  babelify     = require('babelify'),
  browserify   = require('browserify'),
  browserSync  = require('browser-sync').create(),
  buffer       = require('vinyl-buffer'),
  imagemin     = require('gulp-imagemin'),
  minify       = require('gulp-uglify'),
  rename       = require('gulp-rename'),
  sass         = require('gulp-sass'),
  size         = require('gulp-size'),
  sourcemaps   = require('gulp-sourcemaps'),
  stream       = require('vinyl-source-stream');


const stylePaths = {
  src  : './client/src/sass/style.scss',
  dest : './client/dist/css/',
  watch: './client/src/sass/**/*.scss'
}

const jsPaths = {
  src     : ['./client/src/js/scripts.js', './client/src/js/es6example.js'],
  dest    : './client/dist/js/',
  destFile: 'app.bundle.js',
  watch   : './client/src/js/**/*.js'
}

const htmlPaths = {
  src  : './client/src/index.html',
  dest : './client/dist/',
  watch: './client/src/**/*.html'
}

const imgPaths = {
  src  : './client/src/images/**/*',
  dest : './client/dist/images/'
}

// sass, prefixers, compression, sourcemaps
function style (cb ) {

  switch ( dev_env ) {

    case 'development': // uncompressed

      src( stylePaths.src )
        .pipe( sass({ outputStyle: 'expanded' }) )
        .on( 'error', sass.logError )
        .pipe( autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe( size({ showFiles: true }) )
        .pipe( dest( stylePaths.dest ) )
        .pipe( browserSync.stream() );

      break;

    case 'staging': // compresessed, sourcemaps

      src( stylePaths.src )
        .pipe( sourcemaps.init() )
        .pipe( sass({ outputStyle: 'compressed' }) )
        .on( 'error', sass.logError )
        .pipe( autoprefixer({ browsers: ['last 2 versions'], cascade: false }) )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( size({ showFiles: true }) )
        .pipe( dest( stylePaths.dest ) )
        .pipe( browserSync.stream() );

      break;

    case 'production': // compressed

      src( stylePaths.src )
        .pipe( sass({ outputStyle: 'compressed' }) )
        .on( 'error', sass.logError )
        .pipe( autoprefixer({ browsers: ['last 2 versions'], cascade: false }) )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( size({ showFiles: true }) )
        .pipe( dest( stylePaths.dest ) )
        .pipe( browserSync.stream() );

      break;

  }

  cb(); // default signals done
}

function html( cb ) {
  src( htmlPaths.src )
    .pipe( size({ showFiles: true }))
    .pipe( dest( htmlPaths.dest ) )
    .pipe( browserSync.stream() );

  cb();
}

function scripts( cb ) {

  switch ( dev_env ) {

    case 'development': // uncompressed

      browserify({ entries: jsPaths.src, debug: true }) // use browserify instead of gulp.src
        .transform( babelify )                          // transforms to es6 preset
        .bundle()                                       // browserify bundle files into a single file
        .pipe( stream( jsPaths.destFile ) )             // rename stream to app bundle
        .pipe( size({ showFiles: true }) )
        .pipe( dest( jsPaths.dest ) )                   // Output to destination directory
        .pipe( browserSync.stream() );                  // Stream output to BrowserSync

      break;

    case 'staging': // compressed & sourcemaps

      browserify({ entries: jsPaths.src, debug: true }) // use browserify instead of gulp.src
        .transform( babelify )                          // transforms to es6 preset
        .bundle()                                       // browserify bundle files into a single file
        .pipe( stream( jsPaths.destFile ) )             // rename stream to app bundle
        .pipe( buffer() )                               // stream needs to be buffered before it can be further transformed
        .pipe( sourcemaps.init() )                      // intialize souce map to bundle for easier debugging
        .pipe( minify() )
        .pipe( sourcemaps.write( './') )
        .pipe( size({ showFiles: true }) )
        .pipe( dest( jsPaths.dest ) )                   // Output to destination directory
        .pipe( browserSync.stream() );                  // Stream output to BrowserSync

      break; 

    case 'production': // compressed

      browserify({ entries: jsPaths.src, debug: true }) // use browserify instead of gulp.src
        .transform( babelify )                          // transforms to es6 preset
        .bundle()                                       // browserify bundle files into a single file
        .pipe( stream( jsPaths.destFile ) )             // rename stream to app bundle
        .pipe( buffer() )                               // stream needs to be buffered before it can be further transformed
        .pipe( minify() )
        .pipe( size({ showFiles: true }) )
        .pipe( dest( jsPaths.dest ) )                   // Output to destination directory
        .pipe( browserSync.stream() );                  // Stream output to BrowserSync

      break;
  }

  cb(); // default signals dones
}

// ------------------------------------
// * This is a basic example
// * A more responsive workflow is at
// ? https://www.webstoemp.com/blog/responsive-images-pipeline-with-gulp/
// ------------------------------------

function images( cb ) {
  
  src( imgPaths.src )
    .pipe( imagemin([ imagemin.jpegtran({ progressive: true }) ]) )
    .pipe( dest( imgPaths.dest ) );

  cb();
}


function watchme( cb ) {

  // Reload not needed b/c changes are being injected in browser_sync
  watch( stylePaths.watch, style );

  // Reload on change
  watch( jsPaths.watch, scripts ).on( 'change', browserSync.reload );
  watch( htmlPaths.watch, html ).on( 'change', browserSync.reload );

  cb();
}

function callbackError( cb ) {

  cb( new Error( 'kaboom' )) ; // `cb()` should be called by some async work
}
// exports.cbError = callbackError;

function browser_sync( cb ) {

  browserSync.init({ 
    
    /** 
     * * Demo: Static Directory
     */
    // 
    server: { baseDir: './client/dist/' },

    /** 
     * * Demo: Proxy 
     * * Requires the javascript link from "Demo: Static Directory"
     * <script async src='http://gulpstarter.local:3000/browser-sync/browser-sync-client.js'></script>
     * also works
     * <script async src='http://localhost:3000/browser-sync/browser-sync-client.js'></script>
     * also works
     * <script async src='http://your-ip-address:3000/browser-sync/browser-sync-client.js'></script>
     */ 
    
    open: false,
    injectChanges: true,
    // proxy: 'http://gulpstarter.local',

    /**
     * * Demo: SSL
     * * If using SSL on your development server you will need this.
     */
    // https: {
    //   key: '/some-directory/some-name.key',
    //   cert: '/some-directory/some-name.cert'
    // },

  });

  cb();
}

exports.html        = html;
exports.images      = images;
exports.style       = style;
exports.scripts     = scripts;
exports.browserSync = browser_sync;
exports.build       = parallel( exports.html, exports.style, exports.scripts );
exports.watch       = series( exports.browserSync, watchme );
exports.default     = series( exports.build, exports.watch );
