import express from "express";

const logout = express.Router();

logout.get("/", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

export { logout };
