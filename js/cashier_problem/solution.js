/* The Cashier Problem
Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change.
Example: If the price is €3.75 and the paid amount is €50, then the client should receive €46.25 back in change.
The expected output should be:
2 x €20 // 2 twenty euro notes
1 x €5 // 1 five euro note
1 x €1 // 1 euro
1 x €0.2 // 1 twenty cent coin
1 x €0.05 // 1 five cent coin */
/* cashier(50, 40, 60) -> expected output: "1 x €10 & cash left in drawer = €10". */
function Cashier(price, paid, cid) {
clf = cid - price;
euro_1_10 = 0;
if (clf % 20 === 0) {
euro_1_10++;
} else if (clf % 10 === 0) {
euro_1_10++;
}
console.log(`"${euro_1_10} x €${clf} & cash left in drawer = €${clf}".`)
}
Cashier(50, 40, 60.57);
function cashierproblem(price, paid, totalcashindraw){
totalcashindraw = totalcashindraw + price;
let totalcashindraw1 = totalcashindraw;
let cashcounter = [{ 20: 0 }, { 10: 0 }, { 5: 0 }, { 1: 0 }, { 0.50: 0 }, { 0.20: 0 }, { 0.10: 0 }, { 0.05: 0 }, { 0.01: 0 }];
//fill cash in counter
cashcounter.forEach(item => {
for (let key in item) {
let random = Math.floor(Math.random() * 10);
while (totalcashindraw.toFixed(2) >= Number(key) && item[key] < random) {
++item[key];
totalcashindraw -= Number(key);
}
}
});
//filtering cashcounter
let FilteredcashCounter = cashcounter.filter(item => {
for (let key in item) {
return item[key] != 0;
}
});
console.log(FilteredcashCounter);
console.log("filtered cash counter");
let ChangeCounter = [];
FilteredcashCounter.forEach(item => {
for(let k in item){
let news={};
news[k]=0;
ChangeCounter.push(news);
}
});
console.log(ChangeCounter);
console.log("changecounter")
if (price > paid) {
console.log(`customer needs to pay €${price - paid} more`);
}
if (price == paid) {
console.log(`Closed`);
}
if ((paid - price) > totalcashindraw1) {
console.log(`cash counter is short of €${(paid - price) - totalcashindraw1}`)
} else {
/* let change=[]; */
let remaining = paid - price;
for(let i=0;i<FilteredcashCounter.length;i++){
for(let key in FilteredcashCounter[i]){
while(remaining.toFixed(2)>=Number(key)&&(FilteredcashCounter[i][key]-1)>=0){
remaining-=Number(key);
++ChangeCounter[i][key];
--FilteredcashCounter[i][key];
}
}
}}
console.log(FilteredcashCounter);
console.log("remaining cash in counter")
console.log(ChangeCounter)
console.log("cash given to customer")
//checking if the exact change available in counter
let result = ChangeCounter.filter(item => {
for (let key in item) {
return item[key] != 0;
}
})
console.log(result);
//check how much change we have in counter
let C=result.reduce((acc,item)=>{
for(let k in item){
return acc+(Number(k)*item[k]);
}
},0);
console.log(C);
let newresult = [];
if(C<paid-price){
console.log("it is not possible to give change to the customer");
}else{
result.forEach(item => {
for (let k in item) {
if (Number.isInteger(Number(k))) {
newresult.push(`${item[k]} X ${k} Note`)
}
else {
newresult.push(`${item[k]} X ${k} cent`)
}
}
});
console.log(newresult)
}
/* let cashindraw = FilteredcashCounter.filter(item => {
for (let key in item) {
return item[key] != 0;
}
})
console.log(cashindraw); */
}
cashierproblem(23.35, 49.41, 91.01)
