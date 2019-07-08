console.log("Hello World!")


//Strings
let myFirstName = "Hannah", myLastName = "Klein";
console.log(myFirstName[0], myLastName[0]);
console.log(myFirstName.length, myLastName.length);
/*  H K
    6 5 */


//Numbers
let currentYear = 2019;
console.log(currentYear);
console.log(currentYear[3]);
console.log(currentYear.length);
/*  2019
    undefined
    undefined */

let myNumber = 1234e7;
console.log(myNumber);
/*  12340000000 */

let mySecondNumber = 1234e-3;
console.log(mySecondNumber);
/*  1.234 */

let newNumber = -20;
console.log(newNumber * Infinity);
console.log(newNumber / Infinity);
console.log(newNumber * -Infinity);
console.log(newNumber / -Infinity);
/*  -Infinity
    -0
    Infinity
    0 */

//NaN
let myCountry = "Germany";
console.log(myCountry / newNumber);


//Concatenation
let myMiddleName = "Maria"
let myFullName = myFirstName + " " + myMiddleName + " " + myLastName;
console.log(myFullName);
/*  Hannah Maria Klein */


//Exercise
let num1 = 4;
let num2 = 12;
let num3 = 24;

let equalsign = " = ";

let str1 = "4 + 12";
let str2 = "24 + 12";

let str3 = num1 + num2 + equalsign + str1;
let str4 = num3 + num2 + equalsign + str2;
let str5 = str1 + equalsign + num1 + num2;
let str6 = str2 + equalsign + num3 + num2;

console.log(num1 + num2 + equalsign + str1);
console.log(num3 + num2 + equalsign + str2);
/*  16 = 4 + 12 
    36 = 24 + 12  */

console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
/*  16 = 4 + 12 
    36 = 24 + 12
    4 + 12 = 412
    24 + 12 = 2412  */



//boolean 
let isDay = true;
console.log(isDay);
/* true */


//Null
let myNull = null;
console.log(myNull);
/*  null */


//object - like a package for data
let myObject = {
    key1: "value",
    key2: 1234,
    key3: {
        key31: {
            newObject: "Hello!"
        }
    },
};
console.log(myObject.key3.key31);
console.log(myObject);
/*  { newObject: "Hello!"}
    { key1: 'value',
    key2: 1234,
    key3: { key31: { newObject: 'Hello!' } } } */



//typeof
console.log(typeof num1);
console.log(typeof str6);
console.log(typeof isDay);
/*  number 
    string 
    boolean */
