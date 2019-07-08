let a = false;
let b = "false";

if (a != b) {
    console.log("Booleans are not equal to strings!");
} else {
    console.log("Booleans are equal to strings!");
}

let time = 22;
let greeting;

if (time < 10) {
    greeting = "Good Morning!"
} else if ((time >= 10) && (time < 20)) {
    greeting = "Good Day!"
} else if ((time >= 20) && (time < 22)) {
    greeting = "Good Evening!"
} else {
    greeting = "Why aren't you asleep?"
}

console.log(greeting);

