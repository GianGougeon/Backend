import express from "express";
import passport from "passport";
import { auth } from "./../middlewares/auth.js";
import User from "./../models/User.js";
import bcrypt from "bcrypt";

const login = express.Router();
const loginError = express.Router();
const register = express.Router();
const logout = express.Router();

/*============================[Login]============================*/

login.get("/", (req, res) => {
    res.render("login");
});

login.post(
    "/",
    passport.authenticate("local", { failureRedirect: "loginError" }),
    (req, res) => {
        res.redirect("/datos");
    }
);

// Login Error

loginError.get("/", (req, res) => {
    res.render("loginError");
});

/*============================[Logout]============================*/

logout.get("/", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

/*============================[register]============================*/

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

export { login, loginError, register, logout };
