const mongoose = require('mongoos')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User",userSchema)
module.exports = User;