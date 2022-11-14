const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true, default: 0 },
    url: { type: String, required: true },
});

module.exports = new model("Products", productsSchema);
