// let arr = [1, 2, 3, 4];
// let squareArr = arr.map(num => num ** 2); //square root
// console.log(squareArr);     //[ 1, 4, 9, 16 ]
// //----------------------------------------------------------------//
// let numbers = [4, 9, 16, 25];
// function mapMethod() {
//     return numbers.map(Math.sqrt);
// }
// console.log(mapMethod());   //[ 2, 3, 4, 5 ]
// console.log(numbers);   //[ 4, 9, 16, 25 ]
// //----------------------------------------------------------------//
// let numArr = [1, 4, 9];
// let doubles = numArr.map(function(num) {
//     return num * 2;
// });
// console.log("doubles:", doubles);   //doubles: [ 2, 8, 18 ]
// console.log("numArr:", numArr);     //numArr: [ 1, 4, 9 ]
// //----------------------------------------------------------------//
// let lengths = ["John", "Tom", "Harry"].map(item => item.length);
// console.log(lengths);   //[ 4, 3, 5 ] ***john is 4, tom is 3, etc.
// //----------------------------------------------------------------//
// let newArray = [
//     {key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30},
// ]
// let reformattedArray = newArray.map(objectParam => {    //word before => is always the parameter
//     let newObject = {};
//     newObject[objectParam.key] = objectParam.value;
//     return newObject;
// })
// console.log(reformattedArray);  //[ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
// console.log(newArray);  //[ { key: 1, value: 10 }, 
//                         //{ key: 2, value: 20 },
//                         //{ key: 3, value: 30 } ]
// //----------------------------------------------------------------//
// //------------------------FILTER--------------------------------//
// console.clear();
// let aRr = [1, 2, 3, 4, 5];
// const evenArr = aRr.filter(num => num % 2 === 0);
// console.log(evenArr);   //[ 2, 4 ]
// console.log(aRr);   //[ 1, 2, 3, 4, 5 ]
// //----------------------------------------------------------------//
// let age = [32, 44, 53, 12, 34];
// function checkAdults(age) {
//     return age >= 18;
// }
// console.log(age.filter(checkAdults));   //[ 32, 44, 53, 34 ]
// //----------------------------------------------------------------//
// let words = ["spray", "limit", "elite", "destruction", "present"];
// const result = words.filter(word => word.length > 6);
// console.log(result);    //[ 'destruction', 'present' ]

// // Higher order functions *return* a callback or pass a function as an argument.
// console.clear();
console.log("____________Map_____________");

let arr = [1,2,3,4];

let squareArr = arr.map(num => num ** 2) // ** is the square operator

console.log(squareArr);

console.log("_________________________");


let numbers = [4,9,16,25];
function mapMethod() {
    return numbers.map(Math.sqrt);
}

console.log(mapMethod());
console.log(numbers);

console.log("_________________________");


let numArr = [1,4,9];
let doubles = numArr.map(function (num) {
    return num * 2;
})

console.log("doubles:", doubles);
console.log("numArr:", numArr);

console.log("_________________________");

let lengths = ["John","Tom","Hans"].map(item => item.length);
console.log(lengths);

console.log("_________________________");


let newArr = [{key:1,value:10},{key:2,value: 20}];

let reformatedArray = newArr.map(element => { // returns an array with new objects with values as  corresponding keys and values;

    let newObject = {};
    newObject["key" + element.key]= element.value;
    return newObject;
})

console.log(reformatedArray);
console.log(newArr);

console.log("__________Filter_______________");

let arrNum = [1,2,3,4,5]

const evenNr = arrNum.filter(num => num % 2 === 0); // takes a condition as function and returns the according values
console.log(evenNr);
console.log(arrNum);

console.log("_________________________");

let age = [32, 45, 3, 92];

function checkAge(age) {
    return age >= 18;
}

console.log(age.filter(checkAge));

console.log("_________________________");

let words = ["spell", "spray", "present", "destruction", "help"]

const result = words.filter(word => word.length > 5)
console.log(result);


console.log("____________Reduce_____________");

let array = [1,2,3,4]

const sumReducerFunction = (accumulator, currentValue) => accumulator+currentValue;
const sum = array.reduce(sumReducerFunction);

console.log(sum); // 10

console.log("_________________________");


const sum2 = array.reduce(sumReducerFunction,5); // with the initial value 5
console.log(sum2); // 15

console.log("_________________________");


let newArray = [1,2,3,4];

let result2 = newArray.reduce((sum,current) => sum + current , 10 );

console.log(result2); // 20

console.log("_________________________");

const reducer = function (accumulator,currentValue,currentIndex,array) { // no initial value, so accumulator uses index 0 and currentValue is index 1
    console.log("acc:", accumulator, "currVal:", currentValue, "currentIndex:", currentIndex, "array:", array );
    
    return accumulator + currentValue;
}

newArray.reduce(reducer);

console.log("____________sort_____________");

let month = ["March", "Jan", "Dec", "April"]

month.sort();
console.log(month);

let array1 = [1,21,1000000, 92];

array1.sort(); // sort by unicode and treated as a string
console.log(array1);

let nums = [50,1, 1000,5,2,9,16,-5,3.5];

nums.sort((a,b) => b-a) // reverse sort

console.log(nums);

console.log("____________isArray_____________");

let randomArray = [2,6,4,"ha"];

console.log(Array.isArray(randomArray));