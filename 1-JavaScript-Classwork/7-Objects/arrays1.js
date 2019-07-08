let fruits = [];
console.log(typeof fruits);
//object
let exotic = {b: [`dragonfruit`, `mango`]};

//Array
fruits = [`Apple`, `Orange`, 123, true, false, -123456789, undefined, NaN, null];
console.log(fruits);
//[ 'Apple','Orange',123,true,false,-123456789,undefined,NaN,null ]
console.log(fruits[0][0])
//A
console.log(fruits.length);
//9

let arrayToString = (fruits.toString());
console.log(arrayToString);
//Apple,Orange,123,true,false,-123456789,,NaN,
console.log(typeof arrayToString);
//string

console.log(fruits.sort());
/* [ -123456789,
    123,
    'Apple',
    NaN,
    'Orange',
    false,
    null,
    true,
    undefined ] */

fruits.push(`grapes`, `kiwis`);
console.log(fruits);
/* [ -123456789,
123,
'Apple',
NaN,
'Orange',
false,
null,
true,
undefined,
'grapes',
'kiwis' ] */

console.log(fruits[fruits.length -2]);
//grapes
fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits)
//[ -123456789, 123, 'Apple', NaN, 'Orange', false, null, true ]

console.log(typeof fruits.join(`&`));
//string

let frpop = fruits.pop();
console.log(frpop);
//true

fruits[0] = `pinapple`;

console.log(fruits);
//[ 'pinapple', 123, 'Apple', NaN, 'Orange', false, null ]

fruits[8] = `Tomato`;

console.log(fruits);
/* [ 'pinapple',
  123,
  'Apple',
  NaN,
  'Orange',
  false,
  null,
  <1 empty item>,
  'Tomato' ] */

console.log(fruits.shift());
//pineapple

let shiftedItem = fruits.shift();

console.log(fruits);
//[ 'Apple', NaN, 'Orange', false, null, <1 empty item>, 'Tomato' ]

console.log(shiftedItem);
//123

let newFruits = fruits.unshift(`Lemon`);
console.log(newFruits);
//9

console.log(fruits);
/* [ 'Lemon',
  'Apple',
  NaN,
  'Orange',
  false,
  null,
  <1 empty item>,
  'Tomato' ] */

fruits.splice(2, 0, `Peach`, `Guava`);
//<2> is the position <0> is the number of items to remove
console.log(fruits);
/* [ 'Lemon',
  'Apple',
  'Peach',
  'Guava',
  NaN,
  'Orange',
  false,
  null,
  <1 empty item>,
  'Tomato' ] */

fruits.splice(4, 1, `Banana`);
fruits.splice(6, 3);
console.log(fruits);
//[ 'Lemon', 'Apple', 'Peach', 'Guava', 'Banana', 'Orange', 'Tomato' ]

let todaysFruit = fruits.splice(3, 1);
console.log(todaysFruit);
//[ 'Guava' ]
console.log(fruits);
//[ 'Lemon', 'Apple', 'Peach', 'Banana', 'Orange', 'Tomato' ]

let newString = `Digital Career Institute`;
console.log(newString.split(` `))
//[ 'Digital', 'Career', 'Institute' ]
console.log(typeof newString.split(` `))
