//1. Check if two given integer values are in the range of 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let a = 11;
let b = 63;
if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
    console.log(true);
} else console.log(false);

//2. Check if three given integer values are in the range of 50 to 99 (inclusive). Print true if one or more of them are in the range.
let c = 60;
if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
    console.log(true);
} else console.log(false);

//3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
if ((a > b) && (a > c)) {
    console.log(`'a' has the largest value`);
} else if ((b > a) && (b > c)) {
    console.log(`'b' has the largest value`);
} else if ((c > a) && (c > b)) {
    console.log(`'c' has the largest value`);
} else console.log(`there is more than one largest number, because some of the values are equal.`);

//4. Add "Py" in front of a given string (any string eg. "JavaScript"). If the given string begins with "Py", then print the original string (eg. Pythagoras).
let myString = `thagoras`;
let py = `Py`;
if ((myString[0].toLowerCase() === `p`) && (myString[1].toLowerCase() === `y`)) {
    console.log(myString);
} else console.log(`${py}${myString}`);

//5. Calculate the sum of the two integers. If the sum is in the range of 50..80, print 65 otherwise print 80. 
if (((a + b) >= 50) && ((a + b) <= 80)) {
    console.log(65);
} else console.log(80);

//6. Check whether the sum of two integers is 8 or whether their difference is 8. If one of these is the case, print true.
if ((a + b === 8) || (a - b === 8) || (b - a === 8)) {
    console.log(true)
} else console.log(false);

//7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, print true. 
let d = 16;
let e = 20;
if (((d + e) === 15) || (d === 15) || (e === 15)) {
    console.log(true);
} else console.log(false);

//8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if ((d % 7 === 0) || (d % 11 === 0)) {
    console.log(`${d} is a multiple of 7 or 11`);
} else if ((e % 7 === 0) || (e % 11 === 0)) {
    console.log(`${e} is a multiple of 7 or 11`);
} else console.log(`Neither ${d} nor ${e} is a multiple of 7 or 11.`);

//9. Calculate the sum of the two given integers. If the two values are same, then print triple their sum. 
if (d !== e) {
    console.log(d + e);
} else console.log((d + e) * 3);

//10. Calculate the difference between a specified number and 19 (e.g. 19 - x). If the specified number is greater than 19, print double the difference of (x - 19). 
let x = 10;
if (19 >= x) {
    console.log(`The difference between 19 and 'x' is ${19 - x}.`);
} else console.log(`Double the difference between 19 and 'x' is ${(x - 19) * 2}.`);