const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema ({
    street: {
        name: String,
        num: Number,
    },
    city: String,
    state: String,
    country: String,
    post_code: String
}, {_id: false})

module.exports =  AddressSchema;
