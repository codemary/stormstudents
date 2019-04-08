//1. Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a boy/girl". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young man/woman". If none of these conditions apple, print "firstName is a man/woman". 

let firstName = 'Hannah';
let age = 29;

if (age < 13) {
    console.log(firstName + ` is a girl.`);
} else if ((age >= 13) && (age < 20)) {
    console.log(firstName + ` is a teenager.`);
} else if ((age >= 20) && (age < 30)) {
    console.log(firstName + ` is a young woman.`);
} else console.log(firstName + `is a woman.`);

//2. Make an if/else statement depending on a person's job. 
/* Create two variables "firstName" and "job". 
Print 4 different outputs depending on the value of "job" eg. "Maria is a teacher in Berlin" / "Maria is a designer in Berlin". 
Make 5 different possible outcomes depending on the value of job. */

let job = `webdeveloper`;

if (job === `teacher`) {
    console.log(`${firstName} is helping students as a ${job}.`);
} else if (job === `cook`) {
    console.log(`${firstName} is feeding the poor as a ${job}.`);
} else if (job === `plummer`) {
    console.log(`${firstName} is unclogging toilets as a ${job}.`);
} else if (job === `webdeveloper`) {
    console.log(`${firstName} is on her computer ALL THE TIME.`);
} else {
    console.log(`I don't know what ${firstName}'s profession is. You should ask her about it.`);
}

//3. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5". If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz". If none of the above apply, print the number. 
let a = 15;
let result_1 = `Fizz`;
let result_2 = `Buzz`;

if ((a % 3 === 0) && (a % 5 !== 0)) {
    console.log(result_1);
} else if ((a % 5 ===0) && (a % 3 !== 0)) {
    console.log(result_2);
} else if ((a % 3 === 0) && (a % 5 === 0)) {
    console.log(result_1 + result_2);
} else {
    console.log(a);
}

/* 4. Make an if/else statement depending on the weather today!
Create a variable named "temperature" and "weather".
Then, create outputs based on the variable values e.g.
if ((temperature > 15) && (weather === 'sunny') {
  console.log(`It is ${temperature} degrees outside and ${weather}`.
} */
//>Do this for at least 3 different outputs.

let weather = `sunny`;
let temperature = 15;
if ((weather === `sunny`) && (temperature < 20)) {
    console.log(`It is ${weather}, but still cold, with ${temperature} degrees outside.`);
} else if ((weather === `rainy`) && (temperature < 20)) {
    console.log(`The weather is ${weather} and cold, with ${temperature} degrees outside.`);
} else if ((weather === `sunny`) && (temperature >= 20)) {
    console.log(`The weather is ${weather} and warm, with ${temperature} degrees outside.`);
} else if ((weather === `rainy`) && (temperature >= 20)) {
    console.log(`It is ${weather}, but still warm, with ${temperature} degrees outside.`)
} else {
    console.log(`I didn't look at the weather today.`)
}

//5. Calculate the student average mark and then give the student a grade. 

//student marks = 90, 64, 75, 83, 80, 55

/* - A+ if the average is greater than 90. 
- A if the average is greater than 80 and less than or equal to 90	. 
- B+ if the average is greater than 70 and less than or equal to 80. 
- B if the average is greater than 60 and less than or equal to 70. 
- C+ if the average is greater than 50 and less than or equal to 60. 
- C if the average is greater than 40  and less than or equal to 50. 
- D if the average is greater than 30 and less than or equal to 40. 
- F if the average is less than or equal to 30. */
