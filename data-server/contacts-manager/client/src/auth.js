function currentUser() {
    return localStorage.getItem("cm-user")
}

function login(username, password) {

    const body = {
        username: username,
        password: password
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }

    return fetch('http://localhost:3001/login', options)
        .then(res => {
            if(res.ok) {
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

module.exports = {
    currentUser: currentUser,
    login: login,
    logout: logout

}
