const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstName: { type: String, trim: true, unique: true, required: true },
  firstName: { type: String, trim: true, unique: true, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, trim: true, required: true },
});

const User = mongoose.model("User", userSchema)

module.exports = User