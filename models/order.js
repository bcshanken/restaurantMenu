const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// auto increment middleware
autoIncrement.initialize(mongoose.connection);

const orderSchema = new Schema({
  orderID: { type: Schema.Types.ObjectId, required: true},
  items: [{
    title:{ type: String, required: true},
    desc:{ type: String, required: true},
    details: { type: String, required: true},
    price: { type: String, required: true},
  }],
  status: { type: String, required: true, enum: ["pending", "cooking", "finished", "sent"], default: "pending"},
  date: { type: Date, default: Date.now }
});

orderSchema.plugin(autoIncrement.plugin, 'Order');
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
