const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    productos: { type: Array, required: true },
    idUser: { type: String, required: true },
});

module.exports = new model("Carts", cartSchema);
