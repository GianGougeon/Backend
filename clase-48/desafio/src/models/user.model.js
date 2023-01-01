const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    adress: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

});

module.exports = new model("User", userSchema);
