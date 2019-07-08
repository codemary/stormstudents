let a = 10;
let b = 12;
if (a > b) {
    console.log(`'a' is bigger than 'b'`);
} else if (b > a) {
    console.log(`'b' is bigger than 'a'`);
} else console.log(`both numbers are equal`);


let languageCode = `de`

if (languageCode === `de`) {
    console.log(`Guten Morgen!`);
} else if (languageCode === `gb`) {
    console.log(`Good Morning!`);
} else if (languageCode === `it`) {
    console.log(`Buongiorno!`);
} else console.log(`I'm sorry. I don't understand you.`);

let myScore = 90;

if (myScore >= 90) {
    console.log(`A`);
} else if ((myScore >= 70) && (myScore < 90)) {
    console.log(`B`);
} else if ((myScore >= 50) && (myScore < 70)) {
    console.log(`C`);
} else if ((myScore >= 35) && (myScore < 50)) {
    console.log(`D`);
} else if ((myScore >= 20) && (myScore < 35)) {
    console.log(`E`);
} else console.log(`F`);