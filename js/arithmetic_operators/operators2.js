//**Percent**
//Calculate the percentage of 17/30. Expected output: number%
const percent = (17 * 100) / 30;
console.log(`${percent}%`);

//**Average** 
//The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
//What is Noemy's average hour?
const averageHour = (8 + 6 + 5 + 9 + 8 + 1 + 8.5 + 7 + 4) / 10;
console.log(`Noemy's average hour is ${averageHour}.`);


//A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
//Expected output: Score in the sixth test: --.
let firstFive = 75 + 70 + 85 + 90 + 100;
let allScores = 85 * 6;
console.log(`Score in the sixth test: ${allScores - firstFive} points.`);


//For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
//Expected output: James needs a minimum of --% to get an 80% average.
let eightTests = 8 * 78;
let nineTests = 9 * 80;
console.log(`James needs a minimum of ${nineTests - eightTests}% to get an 80% average.`);

//**Consumer Formula**
//Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip
let firstBill = 22.35 + (22.35 * 0.1);
let secondBill = 26.67 + (26.67 * 0.15);
let thirdBill = 35.92 + (35.92 * 0.2);
console.log(`The first bill: ${firstBill} \nThe second bill: ${secondBill} \nThe third bill: ${thirdBill}`);

//**Geometry Formulas** 
//Calculate the perimeter of a square. Assume each side is 4.75cm.
let square_1Side = 4.75;
let square_1Perimeter = square_1Side * 4;
console.log(`The perimeter of the square is ${square_1Perimeter}cm.`);


//Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let triangle_1Side_1 = 5;
let triangle_1Side_2 = 6;
let triangle_1Side_3 = 7;
let triangle_1Perimeter = triangle_1Side_1 + triangle_1Side_2 + triangle_1Side_3;
console.log(`The perimeter of the triangle is ${triangle_1Perimeter}cm.`)

//Calculate the area of a square. Each side is 5cm.
let square_2side = 5;
let square_2area = square_2side * square_2side;
console.log(`The area of the square is ${square_2area}cm².`);

//Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;
console.log(`The aria of the triangle is ${Math.sqrt(s * (s - a) * (s - b) * (s - c))}cm².`);

//Calculate the volume of a cube. Length of each side is 9cm.
let cubeSide = 9;
let cubeVolume = cubeSide * cubeSide * cubeSide;
console.log(`The volume of the cube is ${cubeVolume}`)

//**Basic Word Problems**
//In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many people purchased a ticket? 
let wholeNight = 6450;
let oneTicket = 15;
console.log(`${wholeNight / oneTicket} people purchased a ticket.`);


//Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
let weeklyIncome = 500;
let yearlyWeeks = 52;
console.log(`Silvia makes ${weeklyIncome * yearlyWeeks} every year.`);