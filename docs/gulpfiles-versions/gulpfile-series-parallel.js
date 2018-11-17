// My custom conconcution 

const { series, parallel }    = require( 'gulp' );

function defaultTask(cb) {
    // place code for you default task here
    cb();
}

function clean(cb) {
    cb();
}

function build(cb) {
    cb();
}

function transpile(cb) {
    cb();
}

function bundle(cb) {
    cb();
}

function javascript(cb) {
    cb();
}

function css(cb) {
    cb();
}

exports.jscss = parallel(javascript, css);
exports.default = series(clean, build, transpile, bundle);
