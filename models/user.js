const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, trim: true, required: true },
});

userSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model("User", userSchema)

module.exports = User