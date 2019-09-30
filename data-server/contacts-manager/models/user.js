const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {_id: false})

module.exports = contactSchema;
