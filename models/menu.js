const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
