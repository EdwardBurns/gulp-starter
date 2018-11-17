
// * Example of es6 import statement vs require()
import App from './utilities/app';
const app = new App();


// * Validate example
const checkid = require('../../../lib/utilities/validate');
console.log( 'Runing validation script to check id.' );
console.log( checkid.validateID( '34345' ) );

// * Generators & Yield
// * Need to add Polyfill to run generators in the browser
require("@babel/polyfill");

// * Example of exporting multiple named items
const { Square, fibonacci } = require('./utilities/inheritance_n_generators');

// * Example of of inheritance 
var s1 = new Square(5);
var s2 = new Square();

console.log( s1.sayName() + ' - ' + s1.name + ' 1 : ' + s1.area );
console.log( s2.sayName() + ' - ' + s2.name + ' 2 : ' + s2.area );
console.log( 'Call sayname for s2 ');
s2.sayName();
console.log( 'Hello World' );

// * Example of generator functions
console.log( 'Fibonacci example ');
console.log( fibonacci.next() );
console.log( fibonacci.next() );
console.log( fibonacci.next() );
console.log( fibonacci.next() );
console.log( fibonacci.next() );

// passing true to generator function will set yield to true, default is false.
// Therefore the next line will evaluate to true and reset the variables
console.log( fibonacci.next(true) ); 
console.log( fibonacci.next() );
console.log( fibonacci.next() );
console.log( fibonacci.next() );
console.log( fibonacci.next() );
console.log( fibonacci.next() );
console.log( fibonacci.next() );
