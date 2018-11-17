'use strict';

class Polygon {
    constructor(width, height){
        this.name   = 'polygon';
        this.width  = width;
        this.height = height;
    }

    sayName() {
        console.log( 'Hi, my name is ' + this.name );
    }
}

// * Example of inheritance
class Square extends Polygon {
    constructor(length=10){
        //The super keyword is used to access and call functions on an object's parent.
        super(length, length); 
        this.name = 'Square Yo!';
    }

    get area() {
        return this.height * this.width;
    }
}

// * Example of a generator function & yield
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
function* fibonacci() {
    var n1 = 1,
        n2 = 1;

    while (true) {
        var current = n2;
        n2 = n1;
        n1 += current;

        var reset = yield current;
        if (reset) {
            n1 = 1;
            n2 = 1;
        }
    }
}

module.exports = { 
    Square,
    fibonacci: fibonacci()

};