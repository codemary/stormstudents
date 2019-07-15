// # DOM Tasks 


console.log("-----The Book List-----");
// ## The Book List
// Create a webpage with an h1 of "My Book List".
// Given an array of books, example:

// ```javascript
const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: true,
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L.gif'
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: false,
        imgLink: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
    }
];


const ul = document.querySelector('.book-list');
books.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${element.title}, *${element.author}*</p><a href="${element.imgLink}" target="_blank"><img src="${element.imgLink}"></a>`;

    //works also, but creates the difficulty of not beeing able to assign styles to the reading status that easily
    // ul.insertAdjacentHTML("beforeend", `<li><p>${element.title}, *${element.author}*</p><a href="${element.imgLink}" target="_blank"><img src="${element.imgLink}"></a></li>`);


    if (element.alreadyRead) {
        // li.setAttribute('style', 'color: blue');
        li.classList.add('already-read');
    } else {
        li.classList.add('didnot-read');
    }
    ul.append(li);

})
  
// * Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// **Bonuses:**
// * Use a ul and li to display the books.
// * Add an img to each book that links to a URL of the book cover.
// * Change the style of the book depending on whether you have read it or not.



console.log("-----About Me-----")
// ## About Me
// Start with some base HTML":

// ```html
//   <!DOCTYPE html>
//   <html>
//     <head>
//       <meta charset="utf-8"/>
//       <title>About Me</title>
//     </head>
//     <body>
//   <h1>About Me</h1>

//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//     </ul>
//     </body>
//   </html>
// ```

// * In JavaScript, change the body tag's style so it has a font-family of "Arial, sans-serif".
// * In JavaScript, replace each of the spans (nickname, favorites, hometown) with your own information.
// * Iterate through each li and change the class to "list-item".
// * Add a style tag that sets a rule for .list-item to make the color red.
// * Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const body = document.querySelector('body');
// body.setAttribute('style', 'font-family: sans-serif');
body.style.fontFamily = 'sans-serif'

const myInfoArray = {
    nickname: 'House-Dragon',
    favorites: 'Foxes',
    hometown: 'Berlin'
}
console.log(Object.values(myInfoArray)[1])

const spanItems = document.querySelectorAll('#my-info > li > span');
console.log(spanItems);
spanItems.forEach((item, index) => { 
    item.innerHTML = `${Object.values(myInfoArray)[index]}`;
})

const myInfoList = document.getElementById('my-info');
const liItems = myInfoList.children;
Array.from(liItems).forEach(item => {
    item.classList.add('list-item');
    item.style.color = 'red';
})

myInfoList.insertAdjacentHTML("afterend", '<img src="assets/fox.jpeg">');
// const img = document.createElement('img');
// img.setAttribute("src", 'assets/fox.jpeg');