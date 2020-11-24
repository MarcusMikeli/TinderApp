const mongoose = require('mongoose');

loginSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true,
        lowercase: true
    },
    Password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Login', loginSchema);