import mongoose from "mongoose";

// productos model
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    stock: { type: Number, required: true, default: 0 },
});

// cart model
const cartSchema = new mongoose.Schema({
    products: { type: Array, default: [] },
});

const Cart = mongoose.model("carts", cartSchema);
const Product = mongoose.model("products", productSchema);

export { Cart, Product };
