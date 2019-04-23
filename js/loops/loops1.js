//1. Addition 
//Write a program to add up the numbers 1 to 20.
let i;
for (i = 1; i <= 20; i++) {
    console.log(i);
}

//2. There are i bottles of beer on the wall. 
//Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" etc. 
for (i = 1; i <= 5; i++) {
    if (i === 1) {
        console.log(`There is ${i} bottle of beer on the wall.`);
    } else console.log(`There are ${i} bottles of beer on the wall.`);
}

//3. The odd/even reporter
//Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    } else console.log(`${i} is odd.`);
}

/* 4. Multiplication Tables
Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
**Bonus**: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total). */

let multi = 0;
let arrayMulti = [];
for (i = 0; i <= 10; i++) {
    multi = i * 9;
    arrayMulti.push(`${i} x 9 = ${multi}`); 
}
console.log(arrayMulti);

console.log(`4. Bonus`)

let x; 

for (i = 1; i <= 10; i++) {
    for (x = 1; x <= 10; x++) {
        console.log(`${i} x ${x} = ${x * i}`);
    }
}


/* 5. Grades
Write a program to calculate the average marks of the following students Then, this average is used to determine the corresponding grade for the class. 
John	90
Tom	    60
Jane	77
Maria	81
Carl	65 */

/* The marks are graded as follows :
Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
> */
let classGrades = [90, 60, 77, 81, 65];
let sumOfGrades = 0;
let averageGrade;
for (i = 0; i < classGrades.length; i++) {
    sumOfGrades = sumOfGrades + classGrades[i];
}

if (sumOfGrades / classGrades.length < 60) {
    averageGrade = `F`;
} else if (sumOfGrades / classGrades.length < 70) {
    averageGrade = `D`;
} else if (sumOfGrades / classGrades.length < 80) {
    averageGrade = `C`;
} else if (sumOfGrades / classGrades.length < 90) {
    averageGrade = `B`;
} else if (sumOfGrades / classGrades.length <= 100) {
    averageGrade = `A`;
}

console.log(`The average Grade is '${averageGrade}'.`)

//6. Fizz Buzz
//Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(`FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Buzz`);
    } else console.log(i);
}

//7. Sum of Multiples
//Write a program to add the multiples of 3 and 5 under 1000.
let sum = 0;
for (i = 1; i <= 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        sum = sum + i;
    }
}

console.log(sum);

//8. Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. 
//**Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array. 

let familyAndFriends = [`Leon`, `Marcel`, `Jonathan`, `Anke`, `Matse`, `Helena`, `Paula`];
for (i = 0; i < familyAndFriends.length; i++) {
    console.log(`Hello ${familyAndFriends[i]}!`);
    console.log(`You are at index ${i} of my Array.`)
}

/* 9. Write a program that will output the following using loops: 
>100 200 300 400 500 600 700 800 900 1000
>1 2 4 8 16 32 64 128
>0 2 4 6 8 10
>3 6 9 12 15
>9 8 7 6 5 4 3 2 1 0 */

console.log(`first`);
let sum1;
for (i = 1; i <= 10; i++) {
    sum1 = i * 100;
    console.log(sum1);
}

console.log(`second`);
let sum2 = 1;
for (i = 1; i < 8; i++) {
    sum2 = sum2 * 2;
    console.log(sum2);
}

console.log(`third`);
let sum3;
for (i = 0; i <= 5; i++) {
    sum3 = i * 2;
    console.log(sum3);
}

console.log(`fourth`);
let sum4;
for (i = 1; i <= 5; i++) {
    sum4 = i * 3;
    console.log(sum4);
}

console.log(`fifth`);
for (i = 9; i >= 0; i--) {
    console.log(i);
}


//10. isPalindrome
//Write a program to check whether a word is a palindrome or not. 
//Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

let myName = `Hannah`;
let myCheck = ``;
for (i = 0; i < 1; i++) {
    if (myName[i].toLowerCase() === myName.split(``).reverse()[i].toLowerCase()) {
        myCheck = `${myName} is a palindrome.`
    } else myCheck = `${myName} is not a palindrome.`
}
console.log(myCheck); 
