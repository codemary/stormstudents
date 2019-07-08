console.log("-----SPREAD_OPERATOR----------");

console.log(Math.max(2, 5, 6, 2, 45, 68)); 
//68

let myArr = [2, 45, 5, -6, 2, 68];

console.log(Math.max(myArr)); 
//NaN

console.log(Math.max(...myArr)); 
//68

let myArr2 = [34, 56, 4, -89, 90];

console.log(Math.max(...myArr, ...myArr2, 60, 34)) 
//90

let myString = "Hello";
console.log(...myString);
// H e l l o

let merge = [...myString, ...myArr, "Bye"];
console.log(merge);
//[ 'H', 'e', 'l', 'l', 'o', 2, 45, 5, -6, 2, 68, 'Bye' ]

console.log("-----Exercise--------");

function getSum(...myArr) {
    let sum = 0;
    for (let element of myArr) {
        sum += element;
    }
    return console.log(sum);
}
getSum(4, 6453, -6420, 3, 10);


console.log("------sort-------");

console.log(myArr.sort());

function compare(a, b) {
    // if (a > b) return 1;
    // if (b > a) return -1;

    return a - b;
}

console.log(myArr.sort(compare));