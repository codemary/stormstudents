//FUNCTION EXPRESSIONS
function sayHi() {
    console.log("Hi!");
    
}
// sayHi();
let myFunction = sayHi; //no parantheses here because we are storing the function here NOT declaring it
myFunction(); //Hi!
sayHi(); //Hi!
let stat = "Hi";
let square = function (number) {
        stat = "Hi2"
    let result = number * number;
    console.log(result);
    console.log(stat); //Hi2
    
};  
square(2);//4
// console.log(stat);//undefined error because this is logged outside the function(the variable is stored inside the function/local scope)
//----------------------------------------------------//
//ternary in functions
const age = 45;
let welcome = (age <= 18) ?
function() { console.log("Hello!"); }:
function() { console.log("Welcome!"); };
welcome();


function welcome1() {
    if(age <= 18) {
    }
}


//NORMALLY NOT USED 
if (age <= 18) {
    let welcome = function() {
        console.log("Hello!");
        
    }
} else {
    let welcome2 = function() {
        console.log("Welcome!");    
    };
}
