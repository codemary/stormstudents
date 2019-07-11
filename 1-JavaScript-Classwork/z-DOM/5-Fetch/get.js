fetch('https://jsonplaceholder.typicode.com/users') 
    .then(res => {
        console.log(res);
        return res.json();
    })
    // .then(json => console.log(json))
    .then(res => res.map(user => user.username))
    .then(userNames => {
        console.log(userNames);
        document.getElementById("results").innerHTML = userNames;
    });

// ----------------------


const myPost = {
    title: "A post...",
    body: "42",
    userId:  2
};

const options = {
    method: "POST",
    body: JSON.stringify(myPost),
    headers: {
        'Content-Type': 'application/json'
    }
};

console.log("options", options);

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(res => res.json())
    .then(res => console.log(res));

