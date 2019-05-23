console.log("-----1a-----");
// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Add the items of one array to the beginning of the second array. 
// * Create another array. Include another array as one of the elements.
let euroCountries = ["Spain", "Germany", "Austria"];
let asianCountries = ["Vietnam", "India", "Laos"];
let mergeCountries1 = [...euroCountries, ...asianCountries];
console.log(mergeCountries1);
// [ 'Spain', 'Germany', 'Austria', 'Vietnam', 'India', 'Laos' ]

console.log("-----1b-----");
let southAmericanCountries = ["Colombia", "Argentina", "Uruguay"];
let mergeCountries2 = [...southAmericanCountries, ...mergeCountries1];
console.log(mergeCountries2);
// [ 'Colombia',  'Argentina', 'Uruguay', 'Spain', 'Germany', 'Austria', 'Vietnam', 'India', 'Laos' ]

console.log("-----1c-----");
let worldCountries = ["Australia", "Nigeria", ...mergeCountries2, "Israel", "Iran"];
console.log(worldCountries);
// [ 'Australia', 'Nigeria', 'Colombia', 'Argentina', 'Uruguay', 'Spain', 'Germany', 'Austria', 'Vietnam', 'India', 'Laos', 'Israel', 'Iran' ]


console.log("-----2-----");
// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
let euroCountries2 = [...euroCountries];
console.log(euroCountries2);
// [ 'Spain', 'Germany', 'Austria' ]


console.log("-----3-----");
// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
function getLargest(...myArr) {
    let largestNum = myArr[0];
    for (let element of myArr) {
        if (element > largestNum) {
            largestNum = element;
        }
    }
    return console.log(largestNum);
}
getLargest(3, -54, 32, 50, 74);


console.log("-----4-----");
// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
function getSmallest(...myArr) {
    let smallestNum = myArr[0];
    for (let element of myArr) {
        if (element < smallestNum) {
            smallestNum = element;
        }
    }
    return console.log(smallestNum);
}
getSmallest(3, -54, 32, 50, 74);


console.log("-----5-----");
// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * Clone the person object.
// * Merge these two objects into one object: "employee". Use the spread operator to do so. Then change the values of the properties in the employee object.
const person = {name: "John"}
const job = {role: "Teacher"}
const person2 = {...person};
console.log(person2);
// { name: 'John' }

const employee = {...person, ...job};
console.log(employee);
// { name: 'John', role: 'Teacher' }

employee["name"] = "Jane";
employee["role"] = "webdeveloper";
console.log(employee);
// { name: 'Jane', role: 'webdeveloper' }


console.log("-----6-----");
// #### 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false
// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
function isWhole(...myArr) {
    let sum = 0;
    for (let element of myArr) {
        sum += element;
    }
    
    let average = sum / myArr.length;
    console.log(average);

    let isInteger = Number.isInteger(average);
    return console.log(isInteger);
}
isWhole(2, 4, 6, 8, 10, 12);
isWhole(1, 2, 3, 4);
isWhole(1, 2, 4, 5);
isWhole(9, 0, 1, 4, 3);
let numArray = [9, 0, 9];
isWhole(...numArray)


console.log("-----7-----");
// #### 7. Minimum Removals for Even Output 
// Create a function that takes 4 integers as an argument and returns the minimum number of removals to make the sum of all the elements even. 
// * Examples: 
// * minRemovals(1, 2, 3, 4) ➞ 0 removals
// * minRemovals(5, 7, 9, 11) ➞ 0 removals 
// * minRemovals(5, 7, 9, 12) ➞ 1 removal 
function minRemovals(...myArr) {
    let sum = 0;
    for (let element of myArr) {
        sum += element;
    }
    if (sum % 2 === 0) {
        return console.log("0 removals");
    }
    else return console.log("1 removal");
}
minRemovals(1, 2, 3, 4);
minRemovals(5, 7, 9, 11);
minRemovals(5, 7, 9, 12);



console.log("-----8-----");
// #### 8. Quadratic Equation 
// Create a function to find only the positive determinant value of x in any quadratic equation 
// ax^2 + bx + c. The function will take three arguements:
// * a as the coefficient of x^2 (x to the power of 2)
// * b as the coefficient of x
// * c as the constant term
// Once you have solved this problem, pass in an array as an argument which contains three elements - check if this method still outputs the correct result! 
function quadraticFunctions(a, b, c) {
    let x = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return console.log(x);
}
quadraticFunctions(3, 9, 6);
quadraticFunctions(...[3, 9, 6]);



console.log("-----9-----");
// #### 9. Spread Date
// Create an array which contains a year, a month and a date. Use spread to access the date of this array.
let myDate = new Date();
let myDateArray = [myDate.getFullYear(), myDate.getMonth(), myDate.getDate()];
let mySpread = [...myDateArray];
console.log(mySpread);




