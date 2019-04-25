//Declare two variables "a" with the value of true and "b" with the value of false.
const a = true, b = false; 

//1. Check the result of a AND b. 
console.log(a && b);
//2. Check the result of a OR b. 
console.log(a || b);
//3. Check the result of NOT a AND b. 
console.log(a != b);

//4. Declare three more variables "x", "y", "z". Give these variables number values. 
let x = 5, y = 3, z = 8;

//5. Check the result of whether x is greater than z AND x is greater than y. 
console.log((x > z) && (x > y));

//6. Check the result of whether x is NOT equal to y. 
console.log(x != y);

//7. Check the result of whether z is less than y OR z is greater than x. 
console.log((z < y) || (z > x));

//8. Check the result of whether x is equal to z OR x is NOT equal to y.
console.log((x === z) || (x != y));

//9. Check the result of whether x is greater than or equal to 10 AND y is less than or equal to 10. 
console.log((x >= 10) && (y <= 10));

//10. Check the result of whether x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100. 
console.log(((x * z) < 100) || ((x * y) > 100));