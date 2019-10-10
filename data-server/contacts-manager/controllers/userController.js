const { User } = require('../models/user');
let createError = require('http-errors');

function users(req, res) {
    
}

function user(req, res) {    
    res.send(res.locals.user);
}

function createUser(req, res, next) {

    let user = req.body;
    console.log(res.locals);
    

    if (!user.username || !user.password || !user.name) {
        next( createError(400, "required missing fields: username, name, password!") );
    }

    //validation
    if(user.username.length < 3 || user.username.length > 20) {
        next( createError(400, "username length must be between 3 and 20!") );
    }

    let rawUser = {
        username: user.username.trim(),
        name: user.name.trim(),
        password: user.password.trim()
    }

    try {

        User.create(rawUser, function (err, doc) {
            if (err) {
                let msg = "Internal server error";
                let status = 500;
            
    
            if(err.errmsg && err.errmsg.includes("E11000 duplicate key error")) {
                msg = `error: username ${user.username} already exists!`;
                status = 409; // Conflict
            }
            res.status(status);
            res.send(msg);
            return;
        
            }
            
            res.send(doc);
        
        })

    } catch (e) {
        console.log(e);
        next(createError(500, "Unexpected error!"));
    }
}

function deleteUser(req, res) {

    try {
        User.deleteOne({
            username: res.locals.user.username
        }, function (err, user) {
            if (err) {
                next(createError(500, "error deleting user!"))
            }
            res.send(user);
        }) 
    } catch (err) {
        next(createError(500, err));
    }
}

function putUser(req, res, next) {

    if (!req.body.name) {
        res.send(res.locals.user)
        return;
    }

    if (req.body.name < 3) {
        next(createError(400, "name length must be atleast 3 characters!"))
    }

    User.updateOne({ username: res.locals.user.username }, { name: req.body.name }, function (err, user) {
        if (err) {
            next(createError(500, "Unexpected error!"))
        }
        res.send({
            name: req.body.name,
            username: res.locals.user.username
        })
    })

}

module.exports = {
    users: users,
    user: user,
    createUser: createUser,
    deleteUser: deleteUser,
    putUser: putUser
}