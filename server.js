'use strict';

//  https://babeljs.io/docs/en/babel-register
// One of the ways you can use Babel is through the require hook. The require hook
// will bind itself to node's require and automatically compile files on the fly. 
// This is equivalent to CoffeeScript's coffee-script/register.
require('@babel/register');

require('./lib/index');