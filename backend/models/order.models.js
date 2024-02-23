const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, default: "gozlenir" }, // Varsayılan olarak "gozlenir"
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tecnik" }]
});

// Pre middleware to set default status for each item
OrderSchema.pre("save", function(next) {
    if (!this.isNew) {
        next();
        return;
    }
    this.items.forEach(item => {
        item.status = "gozlenir";
    });
    next();
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
