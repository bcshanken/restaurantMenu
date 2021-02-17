const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

// auto increment middleware
autoIncrement.initialize(mongoose.connection);

const orderSchema = new Schema({
  items: [
    {
      menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true,
      },
      addOns: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
        },
      ],
      instructions: { type: String },
    },
  ],
  status: {
    type: String,
    required: true,
    enum: ["pending", "cooking", "finished", "sent"],
    default: "pending",
  },
  date: { type: Date, default: Date.now },
  price: { type: String, required: true },
});

orderSchema.plugin(autoIncrement.plugin, {
  model: "Order",
  startAt: 1,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
