
// The switch statement is used to perform different actions based on different conditions.
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
​
// a switch statement is a type of selection control mechanism, 
// used to allow the value of a variable or expression to change the control flow of program execution via a multiway branch
​
let day = "";
​
// The getDay() method returns the weekday of a date as a number (0-6):
​
switch (new Date().getDay()) {
  case 0:
   day = "Sunday";
   break;
  case 1:
   day = "Monday";
   break;
  case 2:
    day = "Tuesday";
   break;
  case 3:
   day = "Wednesday";
   break;
  case 4:
   day = "Thursday";
   break;
  case 5:
   day = "Friday";
   break;
  case 6:
   day = "Saturday";
}
​
console.log(day);
​
// When JavaScript reaches a break keyword, it breaks out of the switch block.
​
// This will stop the execution of inside the block.
​
// If multiple cases matches a case value, the first case is selected.
​
// If no matching cases are found, the program continues to the default label.
​
// ---------------------------------------- //
// The default case does not have to be the last case in a switch block
​
switch (new Date().getDay()) {
  default: 
   text = "Looking forward to the Weekend";
   break;
  case 6:
   text = "Today is Saturday";
   break; 
  case 0:
   text = "Today is Sunday";
 }
​
​
// ---------------------------------------- //
// Common Code Blocks
switch (new Date().getDay()) {
  case 4:
  case 5:
    statement = "Soon it is Weekend";
    break; 
  case 0:
  case 6:
    statement = "It is Weekend";
    break;
  default: 
    statement = "Looking forward to the Weekend";
}
console.log(statement);
​
​
// ---------------------------------------- //
​
// Switch cases use strict comparison (===).
// The values must be of the same type to match.
const x = "0";
switch (x) {
 case 0:
  text = "Off";
  break;
 case 1:
  text = "On";
  break;
 default:
  text = "No value found";
}
​
console.log(text); // No value found
​
// ---------------------------------------- //
​
name = "Jon";
switch (name) {
  case "Jon":
    name = `The name is ${name}!`
    break;
  case "Mark":
    name = `The name is ${name}!`
    break;
  case "David":
    name = `The name is ${name}!`
    break;
  case "Harry":
    name = `The name is ${name}!`
    break;
  default:
    name = `The name is John Doe!`
    break;
}
​
console.log(name);
