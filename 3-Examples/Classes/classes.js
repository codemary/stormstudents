const content = document.querySelector('p');

// This is how we add and remove classes
console.log(content.classList);
content.classList.add('something');
content.classList.remove('new', 'test');
content.classList.add('success');

const paragraphs = document.querySelectorAll('p');

// if a p has the word "error" in it, it will get the class "error", if it has "success" it will get the "success" class
paragraphs.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    } else if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
})

const heading = document.querySelector('h1');

// if the heading has the class "test", this class will be removed, if not it will be added
heading.classList.toggle('test');
// heading.classList.toggle('test');