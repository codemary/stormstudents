//-------------
let sum = (a, b) => a + b;
console.log(sum(3, 4)); 
//7
let addit = (a, b) => {
    let result = a + b;
    return result;
}
console.log(addit(5, 10));

//-------------------

let double = number => number * 2;
console.log(double(10)); 
//20

//------------------

let sayHi = () => console.log("Hello!");
sayHi(); 
//Hello!

//--------------------

let age = 20;
let name = "John";

let welcome = (age > 10) ?
(name, lastName = "Doe") => console.log("Hello", name, lastName) :
name => console.log("Welcome", name);
welcome("John");
//Hello John Doe

let welcome1 = (age <= 20) ?
function() { console.log(`Hello ${name}!`); } :
function() { console.log(`Welcome ${name}!`); };
welcome1();
//Hello John!