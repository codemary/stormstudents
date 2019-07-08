let num1 = 3;
let num2 = 5;

console.log((num1 < num2) && (num1 != num2));//true + true
//true
console.log((num1 > num2) && (num1 == num2));//false + false
//false
console.log((num1 < num2) && (num1 == num2));//true + false
//false

console.log((num1 < num2) || (num1 != num2));
