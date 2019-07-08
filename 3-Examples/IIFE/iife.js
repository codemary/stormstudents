//IIFE (immediately invoked function expression) is mainly used for modules to restrict the scope of our variables. It is a function without name and is not reusable.

(function(name) {
    let greeting = 'Hello';
    console.log(`${greeting} ${name}!`)
})('Natasha');


//will not work:
//console.log(greeting);