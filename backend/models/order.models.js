const mongoose = require("mongoose")
const Order = mongoose.model("Order", new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, require: true },
    city: { type: String, require: true },
    email: { type: String, require: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tecnik" }]


}))
module.exports = { Order }