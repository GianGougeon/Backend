const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

const MongoStore = require("connect-mongo");

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    store: new MongoStore({ mongoUrl: "mongodb://localhost/sesiones" }),
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

function auth(req, res, next) {
  if (req.session.user == "pepe") return next();
  return res.status(401).send("error de autorización");
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== "pepe" || password !== "pepepass") {
    return res.send("login failed");
  }
  req.session.user = username;
  res.send("login success!");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Logout Ok!");
    else res.send("Error");
  });
});

app.get("/privada", auth, (req, res) => {
  res.send("Estoy en una ruta privada");
});

app.listen(3000);
