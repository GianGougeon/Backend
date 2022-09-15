import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
const LocalStrategy = Strategy;

const app = express();
app.use(express.json());

function isAuth(req, res, next) {
  if (req.isAuthenticated()) next();
}

app.use(
  session({
    secret: "coder",
    resave: false,
    saveUninitialized: false,
  })
);

passport.use(
  new LocalStrategy((username, password, done) => {
    if (username == "Pepe" && password == "1234")
      return done(null, { id: 1, nombre: "Pepe" });

    done(null, false);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((nombre, done) => {
  done(null, { id: 1, nombre: "Pepe" });
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/login", (req, res) => {
  res.send("Login page");
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.send("Usuario logueado");
});

app.get("/privada", isAuth, (req, res) => {
  res.send("Estoy en una ruta privada");
});

app.listen(3001, () => {
  console.log("Server up");
});
