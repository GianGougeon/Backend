import express from "express";
import passport from "passport";
import { loginRouter } from "./routes/login.js";
import "./middlewares/google.js";

const app = express();
app.use(
    "/auth",
    passport.authenticate("auth-google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
        session: false,
    }),
    loginRouter
);

app.use(express.json());

app.listen(8080, () => console.log("Server up"));
