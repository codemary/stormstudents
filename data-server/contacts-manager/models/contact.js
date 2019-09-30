const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = require('./contact');
const AddressSchema = require('./address');

const ContactSchema = new Schema({
    contactname: {
        type: String,
        required: true,
        unique: true
    },
    contact: contactSchema,
    address: AddressSchema,
    
    phone_numbers: [String],
    emails: [String],
    birth_date: [String]
})

ContactSchema.virtual('fullAddress').get(function() {
    return `${this.address.street.name}, ${this.address.city}, ${this.address.state}`
})

module.exports = mongoose.model('Contact', ContactSchema);