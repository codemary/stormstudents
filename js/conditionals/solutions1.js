//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the said range.
// const a = 50; 
// const b = 100; 

// if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
//     console.log(true);
// } else console.log(false);

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Return true if one or more of them are in the said range.
// const a = 10;
// const b = 90;
// const c = 30;
//50-99
// if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >=50 && c <= 99)) {
//     console.log(true);
// } else console.log(false);

//3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value. Then change the values of the variables to see if your conditional still works. 

// if ((a > b) && (a > c)) {
//     console.log(`${a} is the largest`);
// } else if ((b > a) && (b > c)){
//  console.log(`${b} is the largest`);
// } else console.log(`${c} is the largest`);

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

//JavaScript -> PyJavaScript
//Pythagoras -> Pythagoras
// const py = "Py";
// const string = "pythagoras";

// if ((string[0].toLowerCase() === "p") && (string[1].toLowerCase() === "y")) {
// console.log(string);
// } else console.log(`${py}${string}`);

//5. Calculate the sum of the two integers. If the sum is in the range 50..80 return 65 other wise return 80. 
// const sum = a + b;
// if ((sum >= 50) && (sum <= 80)) {
//     console.log(65);
// } else console.log(80);

//6. Check whether the sum of two integers is 8 or whether their difference is 8. 
// const x = 10;
// const y = 2;
// const sum = x + y;
// const differenceOne = x - y;
// const differenceTwo = y - x;

// if ((sum === 8)) {
//     console.log(`Sum of integers is equal to 8`)
// }
// else if ((differenceOne === 8) || (differenceTwo === 8)) {
//     console.log(`Difference is equal to 8`);
// }  else if ((differenceOne <= 0) || (differenceTwo <= 0)) {
//     console.log(`Difference is equal to 0 or negative`);
// } 
// else { console.log(`Sum and difference are not equal to 8`);
// }

//7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, return true. 
// const x = 11;
// const y = 5;
// const sum = x + y;
// if ((x === 15) || (y === 15) || (sum === 15)) {
// console.log(true);
// } else {
//     console.log(false);
// } 
//8. Check whether one of two integers is a multiple of 7 or 11. 
// const a = 13;
// const b = 1;
// if ((a % 7 === 0) || (a % 11 === 0)) {
//     console.log(`${a} is a multiple of 7 or 11`);
// } else if ((b % 7 === 0) || (b % 11 === 0)) {
//     console.log(`${b} is a multiple of 7 or 11`);
// } else {
//     console.log(`Neither ${a} nor ${b} is a multiple of 7 or 11`);
// }
//9. Calculate the sum of the two given integers. If the two values are same, then return triple their sum. 
// const a = 15;
// const b = 15;
// if (a !== b) {
//     console.log(a + b);
// } else {
//     console.log((a + b) * 3);
// }

//10. Return the difference between 19 and a specified number. If the specified number is greater than 19, return double the difference.

const n = 10;
const sum = n - 19;

if (n <= 19) {
    console.log(19 - n);
} else {
    console.log(sum * 2);
}