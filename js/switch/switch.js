console.log("-----1-----");
// #### 1. Color Analyzer 
// Create a function that takes a string in its parameters. Console log a different statement for each color (red, blue, green, yellow). 
// * Example: analyzeColor("Red") -> "Red is a primary color". 
let tellMeAboutTheColor = (myColor) => {
    switch (myColor) {
        case "red":
            console.log(`Red is a color for angry people.`);
        break;
        case "black": 
            console.log(`Black is a color for evil people.`);
        break;
        case "green":
            console.log(`Green is for people, who love the nature.`);
        break;
        case "blue": 
            console.log(`Blue is the best color! It looks like water and only the best people can appreciate that.`);
        default: 
            console.log(`This is nothing I want to talk about.`);
        break;
    }
    return;
}
tellMeAboutTheColor("red");
tellMeAboutTheColor("black");
tellMeAboutTheColor("green");
tellMeAboutTheColor("blue");
tellMeAboutTheColor("");


console.log("-----2-----");
// #### 2. Grading 
// Create a function that takes a grade in its parameters. Console log comments depending on the grade. 
// * Example: grade("A") -> "Good job!", grade("F") -> "Failed"
let commentOnGrade = (grade) => {
    switch (grade) {
        case "A":
            console.log(`Great job!`);
        break;
        case "B":
            console.log(`Good job!`);
        break;
        case "C":
            console.log(`Not that bad.`);
        break;
        case "D":
            console.log(`Next time will be better.`);
        break;
        case "E":
            console.log(`You tried.`);
        break;
        case "F":
            console.log(`You will get over it.`);
        break;
        default: 
            console.log(`${grade}... Which planet did your test take place on?`);
        break;
    }
}
commentOnGrade("A");
commentOnGrade("B");
commentOnGrade("C");
commentOnGrade("D");
commentOnGrade("E");
commentOnGrade("F");
commentOnGrade("Three bones.");


console.log("-----3-----");
// #### 3. What month is it? 
// Create a function using the new Date().getMonth() method and switch case in order to return the month of the year. Return "It's the month of May!"
let myDate = new Date();
let myMonth = myDate.getMonth();
let getMonthName = (month) => {
    switch (month) {
        case 0:
            console.log(`It is January.`);
        break;
        case 1:
            console.log(`It is February.`);
        break;
        case 2:
            console.log(`It is March.`);
        break;
        case 3:
            console.log(`It is April.`);
        break;
        case 4:
            console.log(`It is May.`);
        break;
        case 5:
            console.log(`It is June.`);
        break;
        case 6:
            console.log(`It is July.`);
        break;
        case 7:
            console.log(`It is August.`);
        break;
        case 8:
            console.log(`It is September.`);
        break;
        case 9:
            console.log(`It is October.`);
        break;
        case 10:
            console.log(`It is November.`);
        break;
        case 11:
            console.log(`It is December.`);
        break;
        default: 
            console.log(`This is not a valid insert.`);
    }
}
getMonthName(myMonth);


console.log("-----4-----");
// #### 4. Fruits
// Create a function that takes a string in its parameters. Console log a different statement for each fruit (e.g. banana, orange, strawberry, apple). 
// * Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!"
let tellMeAboutTheFruit = (myFruit) => {
    switch (myFruit) {
        case "orange":
            console.log(`Oranges are juicy.`);
        break;
        case "banana": 
            console.log(`Bananas are interestingly shaped.`);
        break;
        case "mango":
            console.log(`Mangos are tasty.`);
        break;
        case "melon": 
            console.log(`Melons are big, but some of them aren't.`);
        break;
        default: 
            console.log(`This is nothing I want to talk about.`);
        break;
    }
    return;
}
tellMeAboutTheFruit("orange");
tellMeAboutTheFruit("banana");
tellMeAboutTheFruit("mango");
tellMeAboutTheFruit("melon");
tellMeAboutTheFruit("");



console.log("-----5-----");
// #### 5.Jobs 
// Create a function and a person object. Console log different statements for each job (e.g."teacher", "driver", "programmer", "actor", "chef") using a switch statement.
// * Examples of expected output
// * "Maria Smith is a teacher. She teaches children."
// * "Maria Smith is a driver. She drives a truck." 
let myJobObject = {
    "Natasha Romanoff": "assassin",
    "Bruce Wayne": "superhero",
    "Lara Croft": "tomb raider",
    "Gandalf": "wizard",
    "His Grace, The Duke of Ankh, Sir Samuel Vimes": "Commander of Watch " 
}
let tellMeAboutJobs = (jobObject) => {

}