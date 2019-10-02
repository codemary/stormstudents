const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = require('./contact');
const AddressSchema = require('./address');

const ContactSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,   // validate
        maxlength: 20,  // validate
        trim: true      // sanitize
    },
    user: contactSchema,
        
    address:  AddressSchema,
    
    phone_numbers: [
        {
            type: String,
            minlength: 6,
            maxlength: 10
        }
    ],
    emails: [String],
    birth_date: Date
})

ContactSchema.virtual('fullAddress').get(function() {
    return `${this.address.street.name}, ${this.address.city}, ${this.address.state}`
})

module.exports = mongoose.model('Contact', ContactSchema);