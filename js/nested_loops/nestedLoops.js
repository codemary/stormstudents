//1. Write a program to compute the sum and product of an array of integers.

let numArray = [4, 5, 2, 6, 7, 3, 8, 1, 9];
let sum1 = 0;
let sumArray = [numArray[0]]; 
for (let i = 0; i < numArray.length; i++) {
    sum1 = sum1 + numArray[i];
    for (let j = 0; j < 1; j++) {
        sumArray.push()
    }
}
console.log(sumArray);
console.log(`The sum of the array is ${sum1}.`);

/*2. Write a program to create the following pattern: 
*  
* * 
* * *  
* * * *  
* * * * *  */

let stars = "";
let starString = "";
let starLength = 5;

for (let i = 1; i <= starLength; i++) {

    stars = stars.concat(`* `)

    for (let j = 0; j < 1; j++) {
        starString = starString.concat(stars + "\n");
    }

}
console.log(starString);

/* 3. Write a program which prints the elements of the following array: 
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output: 
"row 0" 
" 1" 
" 2" 
" 1"
" 24"
"row 1" */
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let sort = "row";

for (let i = 0; i < arr.length; i++) {
    console.log(sort, i)
    for (let j = 0; j < arr[i].length; j++) {
        console.log(`${arr[i][j]}`);
    }
}

/* 4. Write a program that will output the following using loops: 
>1 1 1 2 2 2 3 3 3 4 4 4 */

/* let a = 1;
let numLength = 4;
let numString1 = "";

for (let i = 1; i <= numLength; i++) {
    numString1 = numString1.concat(`${i} ${i} ${i} `)
}
console.log(numString1); */

let a = 1;
let numLength = 4;
let numRepeat = 3;
let numString1 = "";

for (let i = 1; i <= numLength; i++) {
    for (let j = 0; j < numRepeat; j++)
    numString1 = numString1.concat(`${i} `)
}
console.log(numString1);
	
/* 5. Write a program that will output the following using loops: 
>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */
let numArray1 = [];
let numLength1 = 4;
let numRepeat1 = 3;

for (let i = 0; i < numRepeat1; i++) {
    for (let j = 0; j <= numLength1; j++) {
        numArray1.push(j);
    }
}
console.log(numArray1.join(" "));

