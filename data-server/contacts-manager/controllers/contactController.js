

// get
function contacts(req, res) {

    res.send(`[]`);
}

// get by id
function contact(req, res) {
    const id = req.params.id;
    res.send(id);
}

// post 
function createcontact(req, res) {
    var contact = req.body;
    res.send(contact);
}

// delete
function deletecontact(req, res) {
    const id = req.params.id;
    res.send(id)
}

// update 
function putcontact(req, res) {
    var updateContact = req.body;
    res.send(updateContact);
}

module.exports = {
    contacts: contacts,
    contact: contact,
    createcontact: createcontact,
    deletecontact: deletecontact,
    putcontact: putcontact,
}