// Do-While (post-test loop)
let text = "";
let i = 0;

while (i<10) { // the conditions are scattered, not as easy to read as a for loop, good for unknown times of iterations
    text = `${text} the number ${i} \n`;
    i++;
}
console.log(text);




console.log("-------------------");



let text2 ="";
let j = 0;

do {
    text2 += `The number is ${j} \n`;
    j++;
}
while (j <= 10);

console.log(text2);

console.log("-----------------");

let oldCar = {
    Manufacturer: "Volkswagen",
    Model: "Beatle",
    Year: 1938
}

for (const key in oldCar) {
    console.log(`${key} : ${oldCar[key]}`);
}
console.log(typeof oldCar["Year"]);

console.log("-----------------");

let person = {
    Last: "Romanoff",
    First: "Natasha",
    Age: 38
}

let text1 = "";
let x;

for (x in person) {
    text1 += `${person[x]} \n`;
    console.log(`${person[x]}`);
}
console.log(text1);


console.log("--------------");

let array1 = ["apple", "pear", "mango"];

array1.forEach(function(elem) {
    console.log(elem);
});

console.log("------------");

let tasks = [
    [
        "clean",
        "floor"
    ],
    [
        "clean",
        "windows"
    ],
    [
        "clean",
        "dining table"
    ],
    [
        "clean",
        "kitchen platform"
    ],
    [
        "cook",
        "the breakfast"
    ],
    [
        "clean",
        "the dishes"
    ],
    [
        "clean",
        "the desk"
    ]
]
console.log("-------object--------")
/* let tasksObj = {}
for (let i = 0; i < tasks.length; i++) {
    tasksObj[tasks[i][0]] = tasks[i][1];
}
console.log(tasksObj);
console.log(tasks.length) */

console.log("---------end-------------")

tasks.forEach(tasks => {
    switch (tasks[0]) {
        case "clean":
            console.log(`I am cleaning ${tasks[1]}`);

            break;

        case "cook": 
            console.log(`I am cooking ${tasks[1]}`);

            break;
        default:
            break;

    }
});

console.log("-----------------");


let fruits = {
    apple: 3,
    mango: 5,
    banana: 4
}

const entries = Object.entries(fruits);
const keYs = Object.keys(fruits);
const valuEs = Object.values(fruits);

for (const[fruits, count] of entries) {
    console.log(`There are ${count} ${fruits}`);
}


