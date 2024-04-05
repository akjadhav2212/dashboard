const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String
})

const User = mongoose.model('User',userSchema);

module.exports = User