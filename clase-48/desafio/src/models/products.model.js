const { Schema, model, mongoose } = require("mongoose");

const productsSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true, default: 0 },
    url: { type: String},
});

module.exports = new model("Products", productsSchema);
