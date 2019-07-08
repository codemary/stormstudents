let i;

console.log(`First loop`);

for (i = 2; i >= -2; i--) {
    console.log(i);
}

console.log(`Second loop`);

for (i = -3; i <= 3; i++) {
    console.log(i);
}

console.log(`The value of 'i' is: ${i}`)

console.log(`Third loop`);

let sum = 0;

for (i = 1; i <= 5; i++) {
    sum = 0;
    sum = sum + i;
    console.log(`The value of i is: ${i}`);
    console.log(`The sum is: ${sum}`);
}
/*  The value of i is: 1
    The sum is: 1
    The value of i is: 2
    The sum is: 2
    The value of i is: 3
    The sum is: 3
    The value of i is: 4
    The sum is: 4
    The value of i is: 5
    The sum is: 5 */

console.log(`Fourth loop`);
console.log(`The sum is: ${sum}`)
/* The sum is: 5 */

for (i = 5; i <= 10; i++) {
    sum = sum + i;
    console.log(`The value of i is: ${i}`);
    console.log(`The sum is: ${sum}`);
}
/*  The value of i is: 5
    The sum is: 10
    The value of i is: 6
    The sum is: 16
    The value of i is: 7
    The sum is: 23
    The value of i is: 8
    The sum is: 31
    The value of i is: 9
    The sum is: 40
    The value of i is: 10
    The sum is: 50 */

console.log(`Fifth loop`);

let myName = `Hannah Klein`;
for (i = 0; i < myName.length; i++) {
    console.log(`The index of ${myName[i]} is ${i}`);
}
/*  The index of H is 0
    The index of a is 1
    The index of n is 2
    The index of n is 3
    The index of a is 4
    The index of h is 5
    The index of   is 6
    The index of K is 7
    The index of l is 8
    The index of e is 9
    The index of i is 10
    The index of n is 11 */

console.log(`Sixth loop`);

let fruits = ['Apple', `Orange`, `Cherry`];
let newArr = [];
for (i = 0; i < fruits.length; i++) {
    newArr.push(fruits[i]);
    console.log(newArr);
}

/*  [ 'Apple' ]
    [ 'Apple', 'Orange' ]
    [ 'Apple', 'Orange', 'Cherry' ] */

console.log(`Seventh loop`);

let cars = [`Volvo`, `Audi`, `Mercedes`];
let newArr2 = [];
for (i = cars.length - 1; i >= 0; i--) {
    newArr2.push(cars[i]);
    console.log(newArr2);
}
/*  Seventh loop
    [ 'Mercedes' ]
    [ 'Mercedes', 'Audi' ]
    [ 'Mercedes', 'Audi', 'Volvo' ] */
