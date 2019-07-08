function sum(a, b) {
    return a + b;
}

let result = sum(3, 5);
console.log("returned", result);
sum(5, 6);

function checkAge(age) {
    if(age > 18) {
        return true;
    } else {
        return false;
    }
}
//checkAge();

function letDrive(age) {
    if(!checkAge(age)) {
        return console.log("You are not ready to drive yet.");
    } else {
        return console.log("You are ready to drive.");
    }
}
letDrive(50);
//You are ready to drive.

function doNothing() {
    let a = 1;
    let b = 2;
    let x = a + b;
    return;
    console.log("Hello World"); //Will not be returned
}
let emptyFunction = (doNothing() === undefined);
console.log(emptyFunction);
//true