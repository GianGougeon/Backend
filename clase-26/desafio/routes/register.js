import express from "express";
import User from "./../models/User.js";
import bcrypt from "bcrypt";

const register = express.Router();

register.get("/", (req, res) => {
    res.render("register");
});

register.post("/", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, async (err, user) => {
        if (err) console.log(err);
        if (user) res.render("registerError");
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 8);
            const newUser = new User({
                email,
                password: hashedPassword,
            });
            await newUser.save();
            res.redirect("/login");
        }
    });
});

export { register };
