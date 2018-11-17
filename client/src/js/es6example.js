
const thingOne = 'The thing One';

console.log(thingOne);

const myArray = ['one', 'two', 'three'];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


function doStuff( person ) {
    var { name, age, job } = person;
    console.log( name + ' (' + age + ') works as a ' + job);
}

doStuff({ name: 'Edward', age: 46, job: 'Ideator' });