const db = require('../modules/db');

// get
function users(req, res) {
    const usersData = db.get('users').value();
    res.send(usersData);
}

// get by id
function user(req, res) {
    const id = parseInt(req.params.userid);
    res.send(db.get('users').find({ id: id }).value());
}

// post 
function createUser(req, res) {
    var user = req.body;
    db.get('users').push(user).write();
    res.send(user);
}

// delete
function deleteUser(req, res) {
    const id = parseInt(req.params.userid);
    res.send(db.get('users').remove({ id: id }).write());
}

// update 
function updateUser(req, res) {
    let user = req.body;
    db.get('users').find({id: user.id}).assign({ name: user.name }).write();
    res.send(user);
}

module.exports = {
    users: users,
    user: user,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
}