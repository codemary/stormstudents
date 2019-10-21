function currentUser() {
    return localStorage.getItem("cm-user")
}

function signup(name, username, password) {
    const body = {
        name: name,
        username: username,
        password: password
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch('http://localhost:3001/signup', options)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error("Signup Failed!")
            }
        })
}

function login(username, password) {

    const body = {
        username: username,
        password: password
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch('http://localhost:3001/login', options)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error("Login Failed!")
            }
        })
        .then(res => {
            const user = {
                username: username,
                token: res.token
            }
            localStorage.setItem("cm-user", JSON.stringify(user))
            return user;
        });
}

function logout() {
    localStorage.removeItem("cm-user");
}

function fetchContacts() {
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser().token}`
        }
    };
    return fetch('http://localhost:3001/contacts', options)
    .then(res => {
        if (res.ok) {
            console.log("error:::::", res);
            return res.json();
        } else {
            throw new Error("Failed fetching contacts!")
        }
    })
}

module.exports = {
    currentUser: currentUser,
    signup: signup,
    login: login,
    logout: logout,
    fetchContacts: fetchContacts
}
