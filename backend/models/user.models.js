const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
  mobile:String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})
const User = mongoose.model('User', userSchema)

module.exports = {User}
