import express from "express";
import passport from "passport";

const login = express.Router();
const loginError = express.Router();

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

// login error
loginError.get("/", (req, res) => {
    res.render("loginError");
});

export { login, loginError };
