# Gulp Starter App

Based off tutorials:

[Gulp Quick Start](https://gulpjs.com/docs/en/getting-started/quick-start)

[Start Coding ES6 With Babel](https://code.tutsplus.com/courses/start-coding-es6-with-babel)

[babeljs.io/en/setup](https://babeljs.io/en/setup)

[Compiling ES6 with Gulp and Babel](https://pxpx.co.uk/blog/article/compiling-es6-with-gulp-babel)

[Learn Gulp from Scratch](https://www.youtube.com/playlist?list=PLriKzYyLb28lp0z-OMB5EYh0OHaKe91RV)

[A Short and Simple Guide to Babel](https://flaviocopes.com/babel/)

[Browsersync + Gulp](https://browsersync.io/docs/gulp)

[Develop WordPress Themes Faster with Gulp](https://www.sitepoint.com/fast-gulp-wordpress-theme-development-workflow/)

[Building a simple responsive images pipeline with Gulp](https://www.webstoemp.com/blog/responsive-images-pipeline-with-gulp/)

---

## NPM

---

### Install

```bash

# ---------------------------------------
# Install dependencies from package.json
# ---------------------------------------
npm install

# --------------------------
# Or install from scratch
# --------------------------

# 1. npm initialize
npm init -y

# 2. general dev dependencies
npm install --save-dev gulp@next gulp-rename gulp-sourcemaps vinyl-source-stream vinyl-buffer gulp-size browser-sync gulp-imagemin

# 3. sass dev dependencies
npm install --save-dev gulp-sass gulp-autoprefixer

# 4. es6 js dev dependencies - Babel 7
npm install --save-dev gulp-babel @babel/core @babel/preset-env @babel/register babelify browserify gulp-uglify

# 5. dependencies
npm install express @babel/polyfill

# -----------------------
# Older Babel 6
# -----------------------
npm install --save-dev gulp-babel@6 babel-core babel-preset-env babel-register babel-polyfill babelify@8 browserify gulp-uglify

```

### Aliases

```bash

# install local package
npm i <package>

# install local --save-dev
npm i -D <package>

# install global package
npm i -g <package>

# uninstall local package
npm un <package>

# npm update packages
npm up

# run tests
npm t

# list installed modules
npm ls

# list installed modules 1st level only
npm ls --depth=0

# list installed modules with dependencies
npm ls --depth=1

# print additional package information while listing modules
npm ll or npm la

# npm update
npm install npm@latest -g

```

---

## Gulp

---

Minimum version:
![Minimum gulp version](/docs/images/docs-gulp-version-command.png "Minimum gulp version")

### Run

```bash

# View task list
gulp --tasks

# Run all tasks ( default )
gulp

# Build html, style, scripts tasks
gulp build

# Watch source files
gulp watch

# Move html from source to distribution
gulp html

# Compress image files
gulp images

# Process for SASS
gulp style

# Process for ES6
gulp scripts

# Turn on BrowserSync ( also done by default and watch )
gulp browserSync

```

### On Error

```javascript

// General & wordier
.on('error', function (err) { console.log( err.toString() ); this.emit('end'); })

// Sass specific & shorter
.on( 'error', sass.logError )

 ```

### Polyfill Generator Error

In web development, a polyfill is code that implements a feature on web browsers that do not support the feature. - [Polyfill Programming](https://en.wikipedia.org/wiki/Polyfill_(programming))

When you see this generator error of "regeneratorRuntime is not defined":

![Generator Error](/docs/images/generator.png "Generator Error")

 It means you need to call the polyfill at the beginning of the file. In this starter project it applies to client/src/js/scripts.js
 [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill/)

 ```javascript

require("@babel/polyfill");

 ```

### Babel Presets

[@babel/preset-env](https://babeljs.io/docs/en/presets) is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

#### Use inline

 ```javascript

browserify({ entries: jsPaths.src, debug: true })
    .transform( babelify, { presets: ["@babel/preset-env"] })
    .bundle()

// ---------------------------------------
// Alternative
// If using presets in package.json or .babelrc then this would suffice
// ---------------------------------------
browserify({ entries: jsPaths.src, debug: true })
        .transform( babelify )
        .bundle()

```

#### Or use in package.json

```json

{
 "dependencies": {
    "@babel/polyfill": "^7.0.0",
    "express": "^4.16.4",
    "vinyl-buffer": "^1.0.1",
    "vinyl-source-stream": "^2.0.0"
  },
  "babel": {
    "presets": ["@babel/preset-env"]
  }
}

```

#### Or use in .babelrc

```json

{
    "presets": ["@babel/preset-env"]
}

```

### BrowserSync

Serve from base directory, don't open automatically, and inject changes. Note I'm only using inject changes to insert CSS changes for speedier style adjustments.

```javascript

// gulpfile.js

function browser_sync( cb ) {

  browserSync.init({
    server: { baseDir: './client/dist/' },
    open: false,
    injectChanges: true,
  });

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

```

---

## Dependencies

---

### Dependencies vs devDependencies

Dependencies are for node js server apps. devDependencies are for for client side apps and only required during development.

### General

[gulp - npm](https://www.npmjs.com/package/gulp)

[gulp.org docs](https://gulpjs.org/)

[gulp-rename](https://www.npmjs.com/package/gulp-rename)

[gulp-size](https://www.npmjs.com/package/gulp-size)

[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)

[Browsersync + Gulp](https://browsersync.io/docs/gulp)

### SASS

[gulp-sass]( https://www.npmjs.com/package/gulp-sass)
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

### ES6

[gulp-babel](https://www.npmjs.com/package/gulp-babel)

[@babel/core - npm](https://www.npmjs.com/package/@babel/core)

[@babel/core - babeljs](https://babeljs.io/docs/en/babel-core)

[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

[@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)

[@babel/register](https://babeljs.io/docs/en/babel-register)

[babelify](https://www.npmjs.com/package/babelify)

[browserify](https://www.npmjs.com/package/browserify)

[vinyl-buffer](https://www.npmjs.com/package/vinyl-buffer)

[vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream)

### Server

[acorn](https://www.npmjs.com/package/acorn)

[express](https://www.npmjs.com/package/express)

### Other

[axios](https://www.npmjs.com/package/axios)

[browsersync](https://browsersync.io)

[delete](https://www.npmjs.com/package/delete)

[gulp-beautify](https://www.npmjs.com/package/gulp-beautify)

[gulp-concat](https://www.npmjs.com/package/gulp-concat)

[gulp-if](https://www.npmjs.com/package/gulp-if)

[gulp-ignore](https://www.npmjs.com/package/gulp-ignore)

[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)

[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

[gulp-uglifycss](https://www.npmjs.com/package/gulp-uglifycss)

[lazypipe](https://www.npmjs.com/package/lazypipe) - create an immutable, lazily-initialized pipeline.

[rollup](https://www.npmjs.com/package/rollup)

[rxjs](https://www.npmjs.com/package/rxjs)

[through2](https://www.npmjs.com/package/through2)

---

## Docs

---

### Styles

[Output Styles](https://web-design-weekly.com/2014/06/15/different-sass-output-styles/)

[node-sass](https://www.npmjs.com/package/node-sass)

### JS Callbacks

[javascript.info/callbacks](https://javascript.info/callbacks)

[medium.com - Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)

### es5 module.exports vs es6 export

[https://medium.com/@zachgavin/module-exports-and-loading-es5-to-es6-a33ac592989c](https://medium.com/@zachgavin/module-exports-and-loading-es5-to-es6-a33ac592989c)

### Babel

[Using Babel with Gulp](https://travismaynard.com/writing/using-babel-with-gulp)

[Using Babel](https://babeljs.io/en/setup)

[Compiling ES6 with Gulp and Babel](https://pxpx.co.uk/blog/article/compiling-es6-with-gulp-babel)

[Plugins](https://babeljs.io/docs/en/plugins/)

[Presets](https://babeljs.io/docs/en/presets/)

[gulp-babel github](https://github.com/babel/gulp-babel)

[Start Coding ES6 With Babel](https://code.tutsplus.com/courses/start-coding-es6-with-babel/)

### NPM Shortcuts

[Shorthands and Other CLI Niceties](https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties)

### Markdown Cheatsheet

[markdownguide.org](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Syntax highlighting](https://help.github.com/articles/creating-and-highlighting-code-blocks/)
