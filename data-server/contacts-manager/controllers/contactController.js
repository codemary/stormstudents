const Contact = require('../models/contact');
const validator = require('validator');
let createError = require('http-errors');

// get
function contacts(req, res) {
    Contact.find({}, function(err, contacts) {
        if(err) {
            res.status(400);
            res.send(err);
            return;
        }
        res.send(contacts);
    });
}

// get by id
function contact(req, res) {
    const username = req.params.id;
    Contact.findOne({username: username}, function(err, result) {
        if(err || !result) {
            res.status(404);
            res.send(err || `Resource ${username} not found!`);
            return;
        }
        res.send(result);
    });
}

// post 
function createcontact(req, res) {
    var contact = req.body;

    if(!contact.username || !contact.password || !contact.name) {
        res.status(400);
        res.send("required missing fields: username, name, password!")
        return;
    }

    if(contact.username.length < 3 || contact.username.length > 20) {
        res.status(400);
        res.send("username length must be between 3 and 20!")
        return;
    }

    let rawContact = {
        username: contact.username.trim(),
        user: {
            name: contact.name.trim(),
            password: contact.password.trim()
        }
    }
    
    Contact.create(rawContact, function(err, docs) {
        if(err) {
            let msg = "Internal server error";
            let status = 500;

            if(err.errmsg && err.errmsg.includes("E11000 duplicate key error")) {
                msg = `error: username ${contact.username} already exists!`;
                status = 409; // Conflict
            }
            res.status(status);
            res.send(msg);
            return;
        }
        res.send(docs);
    }) 
};

// delete
function deletecontact(req, res) {
    const username = req.params.id;
    if(username.length < 3 || username.length > 20) {
        res.status(400);
        res.send("username length must be between 3 and 20!")
        return;
    }
    Contact.deleteOne({username: username}, function(err, result) {
        if(err) {
            res.status(404);
            res.send(err || `Resource ${username} not found!`);
            return;
        }
        res.send(result);
    })
}

// update 
function putcontact(req, res, next) {
    let updateContact = req.body;

    try {
        if(!updateContact.username) {
            throw createError(400, "Error: required missing fields: username!");
        }
    
        if(updateContact.emails) {
            updateContact.emails.forEach(
                email => {
                    if(!validator.isEmail(email)) {
                        throw createError(400, `Error: Invalid email ${email}`);
                    }
                }
            )
        }
    
        if(updateContact.phone_numbers) {
            updateContact.phone_numbers.forEach(
                phone => {
                    if(!validator.isMobilePhone(phone)) {
                        throw createError(400, `Error: Invalid phone number ${phone}`);
                    }
                }
            )
        }
    } catch(e) {
        next(e);
        return;
    }

    Contact.findOne({username: updateContact.username}, function(err, contact) {
        if(err || !contact) {
            res.status(404);
            res.send(err || `resource ${updateContact.username} not found!`)
            return;
        } 

        if(updateContact.phone_numbers) {
            updateContact.phone_numbers.forEach(
                phone => !contact.phone_numbers.includes(phone) && contact.phone_numbers.push(phone));
        }
            
        if(updateContact.emails) {
            updateContact.emails.forEach(email => !contact.emails.includes(email) && contact.emails.push(email));
        }
            
        if(updateContact.birthdate) {
            contact.birth_date = updateContact.birthdate;
        }

        contact.save(function(err, result) {
            if(err) {
                let msg = "Internal server error";
                let status = 500;

                res.status(status);
                res.send(msg);
                return;
            }
            res.send(result);
        })
    })
}

module.exports = {
    contacts: contacts,
    contact: contact,
    createcontact: createcontact,
    deletecontact: deletecontact,
    putcontact: putcontact,
}