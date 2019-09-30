const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user');
const AddressSchema = require('./address');

const ContactSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    user: UserSchema,
    address: AddressSchema,
    contact: {
        phone_numbers: [String],
        emails: [String],
        birth_date: [String]
    }
})

ContactSchema.virtual('fullAddress').get(function() {
    return `${this.address.street.name}, ${this.address.city}, ${this.address.state}`
})

module.exports = mongoose.model('Contact', ContactSchema);