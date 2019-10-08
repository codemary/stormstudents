const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,   // validate
        maxlength: 20,  // validate
        trim: true      // sanitize
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = {
    UserSchema: UserSchema,
    User: mongoose.model('User', UserSchema)
};
