/* 1. Write a program to list the properties of an object. 
E.g.
const student = { 
firstName: "John", 
lastName: "Smith", 
class: 12 };
Expected Output: firstName, lastName, class */

let name_1 = "firstName", name_2 = "lastName", location = "class";

const student1 = {
    [name_1]: "John",
    [name_2]: "Smith",
    [location]: "Tofu"
};
console.log(student1);

const student2 = {
    [name_1]: "Jane",
    [name_2]: "Doe",
    [location]: "Storm"
};
console.log(student2);

//2. Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".

const personOfInterest = {
    [name_1]: "Natasha",
    [name_2]: "Romanoff",
    age: 38,
    job: "Assassin",
    country: "Russia",
    alias: "Black Widow"
}
console.log(`${personOfInterest[name_1]} ${personOfInterest[name_2]} is a ${personOfInterest.age} year old ${personOfInterest["job"]} from ${personOfInterest.country}, who goes under the alias ${personOfInterest.alias}.`)

//3. Write a JavaScript program to delete the "class" property (or last property) from the previous object.
delete student2[location];
console.log(student2);

//4. Write a program to get the length of a JavaScript object.
console.log(Object.keys(personOfInterest).length);
console.log(Object.keys(personOfInterest)[0]);


//5. Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
/* const library = [ 
   {
       author: 'J.K. Rowling',
       title: 'Harry Potter and the Chamber of Secrets',
       readingStatus: true
   },
   {
       author: 'Homer',
       title: 'The Odyssey',
       readingStatus: true
   },
   {
       author: 'Harper Lee',
       title:  'To Kill a Mockingbird', 
       readingStatus: false
   }];
E.g. Output: 
Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
Already read The Odyssey by Homer
You still need to read To Kill a Mockingbird by Harper Lee */

const library = [ 
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        readingStatus: true
    },
    {
        author: 'Terry Pratchett',
        title:  'Small Gods', 
        readingStatus: false 
    },
    {
        author: 'Homer',
        title: 'The Odyssey',
        readingStatus: true
    },
    {
        author: 'Harper Lee',
        title:  'To Kill a Mockingbird', 
        readingStatus: false
    }];

console.log(library[0].readingStatus);
 for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus === true) {
        console.log(`Already read '${library[i].title}' by ${library[i].author}`)
    } else console.log(`You still need to read '${library[i].title}' by ${library[i].author}`);
};
