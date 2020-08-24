const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        unique: true,
        required: true,
    },
    lastName: String,
    age: Number
});

module.exports = model('User', userSchema);