const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection)

const userSchema = new Schema({
    email: {type: String,
            trim: true,
            unique: true,
            
    }
})