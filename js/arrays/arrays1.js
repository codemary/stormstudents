//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCitiesRaw = `Paris London Valletta Prague Rome`;
let euroCities = euroCitiesRaw.split(` `);
console.log(euroCities);
let secondItem = euroCities[1];
console.log(secondItem);


//2. Change the first item in the array to "Berlin".
euroCities.splice(0, 1, `Berlin`);
console.log(euroCities);

//3. Print the length of the array "euroCities".
console.log(euroCities.length);

//4. Remove the last item of the array "euroCities". 
euroCities.pop();
console.log(euroCities);

//5. Use an array method to add "Budapest" to the euroCities array. 
euroCities.unshift(`Budapest`);
console.log(euroCities);

//6. Remove the second and third items from the euroCities array. 
euroCities.splice(1, 2);
console.log(euroCities);

//7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
let asianCitiesRaw = `Peking Tokio Hong-Kong Shanghai Seoul Mumbai`;
let asianCities = asianCitiesRaw.split(` `);
console.log(asianCities);

//8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
let item2_4 = asianCities.slice(1, 4);
console.log(item2_4);

//9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities). 
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

//10. Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);

//11. Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, `Toronto`);
console.log(worldCities); 

//12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, `Washington`);
console.log(worldCities);

/* 13. Write a program to join all elements of the result (worldCities) into a string. 
Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
Expected Output: 
"Berlin,London,Bangkok,Phnom Penh"
"Berlin+London+Bangkok+Phnom Penh" */
worldCities = worldCities.join(`, `);
console.log(worldCities);

//14. Empty the array euroCities while keeping the original intact.
let euroCitiesEmpty = euroCities.splice(0, 0, []);
console.log(euroCitiesEmpty);

//# Bonus

//15. Write a program to reverse the string: "Hello World". 
let myString = `Hello World`;
myStringReverse = myString.split(``).reverse().join(``);
console.log(myStringReverse);

//## Extra Practice

//**Print the results to the console.**

//1. Make an array of your siblings' names or your favorite movie characters' names.
let movieStars = [`Hugh jackman`, `Christoph Waltz`, `Benedict Cumberbatch`, `Angelina jolie`, `Natalie Portman`, `Scarlett Johansson`];
console.log(movieStars);

//2. Make an array of your parents' names.
let myParents = [`Anke Klein`, `Kai Berthold`];
console.log(myParents);

//3. Combine these two arrays.
let allTogether = movieStars.concat(myParents);
console.log(allTogether);

//4. Add your pets' names.
allTogether.push(`Toffee`, `Lion`);
console.log(allTogether);

//5. Reverse the order of the array.
console.log(allTogether.reverse());

//6. Access one of your parents' names.
console.log(allTogether[2]);

//7. Update the name of one of your parents. 
allTogether.splice(3, 1, `Anja Klein`);
console.log(allTogether);