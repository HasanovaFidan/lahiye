const mongoose = require("mongoose");

const userSchema = mongoose.model("user", new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    city: String,
    mobile:Number
}, {
    timestamps: true 
}));

module.exports = userSchema;