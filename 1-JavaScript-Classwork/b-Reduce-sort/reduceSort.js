//-----------------------REDUCE------------------------------//
let aRRay = [1, 2, 3, 4];
const sumReducerFunction = (accumulator, currentValue) => accumulator + currentValue;
const sum = aRRay.reduce(sumReducerFunction);
console.log(sum);   //10
//---------------------------------------------//
const sum2 = aRRay.reduce(sumReducerFunction, 5);
console.log(sum2);  //15
//---------------------------------------------//
let newArr = [1, 2, 3, 4];
let resulT = newArr.reduce((sum, current) => sum + current, 10);
console.log(resulT);    //20
//---------------------------------------------//
const reducer = function(accumulator, currentValue, currentIndex, array) {
    console.log("acc", accumulator, "currVal", currentValue, "currentIndex", currentIndex, "array", array);
    return accumulator + currentValue;
    
}
newArr.reduce(reducer);
// acc 1 currVal 2 currentIndex 1 array [ 1, 2, 3, 4 ] = 3
// acc 3 currVal 3 currentIndex 2 array [ 1, 2, 3, 4 ] = 6
// acc 6 currVal 4 currentIndex 3 array [ 1, 2, 3, 4 ] = 10
//---------------------------------------------//
//-----------------------SORT------------------------------//
let months = ["March", "Jan", "Dec", "April", "april"];
months.sort();
console.log(months);    //[ 'April', 'Dec', 'Jan', 'March', 'april' ]
let arr1 = [1, 100000000, 30, 21, 4];
arr1.sort();
console.log(arr1);  //[ 1, 100000000, 21, 30, 4 ]  ***based on first unicode
let nums = [4, 2, 5, 3, 1];
nums.sort((a, b) => a - b);
console.log(nums);  //[ 1, 2, 3, 4, 5 ]
//---------------------------------------------//
let items = [
    {name: "Edward", value: 21 },
    {name: "Sharpe", value: 37 },
    {name: "And", value: 45 },
    {name: "The", value: -12 },
    {name: "Magnetic", value: 13 },
    {name: "Zeros", value: 37 },
]
//sort by value
items.sort(function(a, b) {
    return a.value - b.value;
})
console.log(items);
//[
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'Zeros', value: 37 },
//   { name: 'And', value: 45 }
//   ]
//sort by name
items.sort(function(a, b) {
    let nameA = a.name.toLocaleUpperCase();     //ignore upper and lower case
    let nameB = b.name.toLocaleUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
})
console.log(items);
//[
//     { name: 'And', age: 45 },
//     { name: 'Edward', age: 21 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Sharpe', age: 37 },
//     { name: 'The', age: -12 },
//     { name: 'Zeros', age: 37 }
//   ]