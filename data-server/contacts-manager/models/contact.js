const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user');

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    user: { type: UserSchema, required: true, default: {} },

    phone_numbers: [
        {
            type: String,
            minlength: 6,
            maxlength: 10
        }
    ],
    emails: [String],
    birth_date: Date
}, { toJSON: { virtuals: true } })

ContactSchema.virtual('addresses', {
    ref: 'Address', 
    localField: '_id', 
    foreignField: 'contact', 
})

// ContactSchema.virtual('fullAddress').get(function() {
//     return `${this.address.street.name}, ${this.address.city}, ${this.address.state}`
// })

module.exports = mongoose.model('Contact', ContactSchema);