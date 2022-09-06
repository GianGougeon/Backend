import express from "express";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(
  session({
    secret: "coderhouse",
    saveUninitialized: false,
  })
);

function auth(req, res, next) {
  if (req.session.user) {
    return next();
  }
  return res.status(401).send("error de autorización!");
}

app.get("/", (req, res) => {
  res.send("Server ok");
});

app.get("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== "pepe" || password !== "pepepass") {
    return res.send("login failed");
  }
  req.session.user = username;
  req.session.admin = true;
  res.send("login success!");
});

app.get("/info", (req, res) => {
  res.send(req.sessionID);
});

app.get("/privado", auth, (req, res) => {
  res.send("si estas viendo esto es porque ya te logueaste!");
});

app.get("/productos", auth, (req, res) => {
  res.send("si estas viendo esto es porque ya te logueaste!");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.json({ status: "Logout ERROR", body: err });
    }
    res.send("Logout ok!");
  });
});

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
