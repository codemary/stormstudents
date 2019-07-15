const ul = document.querySelector('ul');

// method to remove the whole element
//ul.remove();
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    //the items event listener doesn't work on this new items
    //ul.innerHTML += '<li>something new</li>';

    const li = document.createElement('li');
    li.textContent = 'new task';

    //adds it in the end
    ul.append(li);

    //adds it up top
    // ul.prepend(li);
})


//There is a better way to do this, because the event listener will not be attached to the newly added LIs see in line 35
// const items = document.querySelectorAll('li');
// console.log(items);

// items.forEach(item => {
//     item.addEventListener('click', event => {
//         console.log('event in li');
//         event.stopPropagation(); //stops event from bubbling up to the parent
//         event.target.remove();
//     })
// })

ul.addEventListener('click', event => {
    console.log('event in ul');
    if (event.target.tagName === 'LI') {
    event.target.remove();
    }
})
