/* #### 1. Check if a number is within a given range
Write a program that checks if a number is within the range of an object's min and max properties.  
Examples: 
* 4, { min: 0, max: 5 }) ➞ true 
* 4, { min: 4, max: 5 }) ➞ true
* 4, { min: 6, max: 10 }) ➞ false
* 5, { min: 5, max: 5 }) ➞ true
* Notes: Assume min <= max is always true. */

const numArray = [
    [5, {min: 0, max: 8}],
    [10, {min: 11, max: 15}],
    [4, {min: 2, max: 5}],
    [2, {min: 3, max: 1}],
    [-5, {min: -6, max: 0}]
]
//console.log(numArray[0][1].max);
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i][1].min > numArray[i][1].max) {
        console.log(`Your minimum is higher than your maximum. That does not work here.`)
    } else if ((numArray[i][0] >= numArray[i][1].min) && (numArray[i][0] <= numArray[i][1].max)) {
        console.log(`The Number ${numArray[i][0]} is in the range of ${numArray[i][1].min} and ${numArray[i][1].max}.`);
    } else console.log(`The Number ${numArray[i][0]} is not in the range of ${numArray[i][1].min} and ${numArray[i][1].max}.`);
}

/* #### 2. Return Keys and Values
Write a program that takes an object and returns the keys and values in separate arrays. 
Examples: 
* { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
* {key: true} ➞ ["key"], [true] */
const numObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}
let numObjProp = [];
let numObjVal = [];

const person = {
    firstName: "Bruce",
    lastName: "Wayne",
    profession: "Superhero",
    alias: "Batman"
}
let personProp = [];
let personVal = [];

//console.log(Object.values(numObj)[0])

for (let i = 0; i < Object.keys(numObj).length; i++) {
    numObjProp.push(Object.keys(numObj)[i]);
    numObjVal.push(Object.values(numObj)[i]);
}
console.log(numObjProp);
console.log(numObjVal);

for (let i = 0; i < Object.keys(person).length; i++) {
    personProp.push(Object.keys(person)[i]);
    personVal.push(Object.values(person)[i]);
}
console.log(personProp);
console.log(personVal);



/* #### 3. Scrabble 
Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. 
Example: 
[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */

const playerTiles = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
]

let maxScore = 0;

for (let i = 0; i < playerTiles.length; i++) {
    maxScore = maxScore + playerTiles[i].score;
}
console.log(`The players score is ${maxScore}.`);

let scoresObj = {
    e: 1, a: 1, i: 1, o: 1, n: 1, r: 1, t: 1, l: 1, s: 1, u: 1, 
    d: 2, g: 2, 
    b: 3, c: 3, m: 3, p: 3, 
    f: 4, h: 4, v: 4, w: 4, y: 4, 
    k: 5, 
    j: 8, x: 8, 
    q: 10, z: 10
}

let scrabbleWord = "hannah"
let wordSplit = scrabbleWord.split(``);
let finalScore = 0;

if (scrabbleWord.includes(" ") === true) {
    console.log(`'${scrabbleWord}' has spaces in it. That is not allowed.`)
} else
    for (let i = 0; i < wordSplit.length; i++)    {
        for (let j = 0; j < Object.keys(scoresObj).length; j++) {
            if (wordSplit[i].toLowerCase() === Object.keys(scoresObj)[j]) {
                finalScore = finalScore + Object.values(scoresObj)[j];
            }
        }
    }
console.log(`The score for ${scrabbleWord} is ${finalScore}.`)

/* #### 4. Is it an empty object? 
Write a program that returns true if an object is empty, and false if otherwise. 

Examples: 
* {} ➞ true
* {a: 1} ➞ false */

const obj1 = {};
let isEmpty = (Object.keys(obj1).length === 0) ? true:false;
console.log(isEmpty);