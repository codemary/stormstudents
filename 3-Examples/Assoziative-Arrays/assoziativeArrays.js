
//This is a Assoziative Array also called Hashes
const newArr = {};

newArr['first'] = 'test1';
newArr.second = 'test2';
newArr['third'] = 'test3';

//it uses words instead of the index numbers
//because of that it has key and value pairs
//None of the array methods work on it. Instead you need to access it with object methods. 
//Note that JavaScript does not support this and you should not use it.

console.log(newArr); //[ first: 'test1', second: 'test2', third: 'test3' ]
console.log(Object.keys(newArr)); //[ 'first', 'second', 'third' ]
console.log(Object.values(newArr)[1]); //test2
console.log(Array.isArray(newArr)); //true

