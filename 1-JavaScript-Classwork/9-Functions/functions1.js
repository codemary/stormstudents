function printMessage1() {
    console.log("Good Morning!")
}
printMessage1();
//Good Morning!

printMessage2();
//Hello World!

let myMessage = "GO AWAY!"
console.log(myMessage);
//GO AWAY!

printMessage3();
//Hello

function printMessage2() {
    const myMessage = "Hello World!";
    console.log(myMessage);
}

function printMessage3() {
    myMessage = "Hello";
    console.log(myMessage);
}

function squareRoot(number) {
    let squareRoot = number * number;
    console.log(squareRoot);
    console.log(number);
}
squareRoot(5); 
//25
//5

function newMessage(from, text = "No message available.") {
    let newMessage = from + ": " + text;
    console.log(newMessage);
}
newMessage("Wolverine", text = "Hi");
//Wolverine: Hi

function calcAge(yearOfBirth) {
    let age = 2019 - yearOfBirth;
    console.log(`Your age is ${age}.`);
    
}
calcAge(1989);
//Your age is 30.

function scrabbleCalculator(scrabbleWord)  {
    let scoresObj = {
        e: 1, a: 1, i: 1, o: 1, n: 1, r: 1, t: 1, l: 1, s: 1, u: 1, 
        d: 2, g: 2, 
        b: 3, c: 3, m: 3, p: 3, 
        f: 4, h: 4, v: 4, w: 4, y: 4, 
        k: 5, 
        j: 8, x: 8, 
        q: 10, z: 10
    }
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
}

scrabbleCalculator("Mathematics");
//The score for Mathematics is 20.