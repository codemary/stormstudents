// function cashier(prize, givenAmount) {
//     let change = {};
//     let wholeChange = (givenAmount - prize) * 100;
//     if (wholeChange < 0) {
//         change.friendlyAnswer = `I'm sorry. You don't have enough money.`
//     } else {
//         while (wholeChange > 0){
//             console.log(wholeChange);
//             if (wholeChange >= 50000) {
//                 change.fiveHundreds = Math.floor(wholeChange / 50000);;
//                 wholeChange -= (50000 * Math.floor(wholeChange / 50000)); 
//             } else if (wholeChange >= 10000) { 
//                 change.hundreds = change.hundreds + 1;
//                 wholeChange -= 10000; 
//             } else if (wholeChange >= 5000) { 
//                 wholeChange -= 5000; 
//                 change.fifties = change.fifties + 1;
//             } else if (wholeChange >= 2000) { 
//                 wholeChange -= 2000; 
//                 change.twenties = change.twenties + 1;
//             } else if (wholeChange >= 1000) { 
//                 wholeChange -= 1000; 
//                 change.tens = change.tens + 1;
//             } else if (wholeChange >= 500) { 
//                 wholeChange -= 500; 
//                 change.fives = change.fives + 1;
//             } else if (wholeChange >= 200) { 
//                 wholeChange - 200; 
//                 change.twos = change.twos + 1;
//             } else if (wholeChange >= 100) { 
//                 wholeChange -= 100; 
//                 change.ones = change.ones + 1;
//             } else if (wholeChange >= 50) { 
//                 wholeChange -= 50; 
//                 change.fiftyCents = change.fiftyCents + 1;
//             } else if (wholeChange >= 20) { 
//                 wholeChange -= 20; 
//                 change.twentyCents = change.twentyCents + 1;
//             } else if (wholeChange >= 10) { 
//                 wholeChange -= 10; 
//                 change.tenCents = change.tenCents + 1;
//             }  else if (wholeChange >= 5) { 
//                 wholeChange -= 5; 
//                 change.fiveCents = change.fiveCents + 1;
//             } else if (wholeChange >= 2) { 
//                 wholeChange -= 2; 
//                 change.twoCents = change.twoCents + 1;
//             } else { 
//                 wholeChange -= 1; 
//                 change.oneCents = change.oneCents + 1;
//             }
//         }
//     }
//     return console.log(change);
// }
// cashier(379.12, 1200);







// 500
// 100
//  50
//  20
//  10
//   5
//   2
//   1
//   0.5
//   0.2
//   0.1
//   0.05
//   0.02
//   0.01


// class cashRegister {
//     constructor(prize, givenAmount) {
//         this.prize = prize;
//         this.givenAmount = givenAmount;
//         let intGivenAmount = intAmount(this.givenAmount);
//         let intPrize = intAmount(this.prize);
//     }
//     intAmount(amount) {
//         return amount * 100;
//     }


//     checkAmount(prize, amount) {
//         if (amount > prize) {
//             return true;
//         } else if (amount == prize) {
//             return "Thank you for buying at $-market";

//         } else {
//             return "To less money!";

//         }
//     }
//     let result = checkAmount;
//     return result;
// };

// console.log(cashRegister(5, 5));
