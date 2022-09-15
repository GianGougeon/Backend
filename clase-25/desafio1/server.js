/*============================[Modulos]============================*/
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import exphbs from "express-handlebars";
import path from "path";

const app = express();

/*============================[Middlewares]============================*/

/*----------- Session -----------*/
app.use(cookieParser());
app.use(
    session({
        secret: "1234567890!@#$%^&*()",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 20000, //20 seg
        },
    })
);

/*----------- Motor de plantillas -----------*/
app.set("views", path.join(path.dirname(""), "./src/views"));
app.engine(
    ".hbs",
    exphbs.engine({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*============================[Base de Datos]============================*/
const usuariosDB = [];
/*============================[Rutas]============================*/

app.get("/", (req, res) => {
    if (req.session.nombre) {
        res.redirect("/datos");
    } else {
        res.redirect("/login");
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    const { nombre, password } = req.body;
    const existeUsuario = usuariosDB.find(
        (usuario) => usuario.nombre == nombre && usuario.password == password
    );
    console.log(existeUsuario);
    if (!existeUsuario) {
        res.render("login-error");
    } else {
        req.session.nombre = nombre;
        req.session.contador = 0;
        res.redirect("/datos");
    }
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const { nombre, password, direccion } = req.body;

    const newUsuario = usuariosDB.find((usuario) => usuario.nombre == nombre);
    if (newUsuario) {
        res.render("register-error");
    } else {
        usuariosDB.push({ nombre, password, direccion });
        res.redirect("/login");
    }
});

app.get("/datos", (req, res) => {
    if (req.session.nombre) {
        req.session.contador++;
        const datosUsuario = usuariosDB.find((usuario) => {
            return usuario.nombre == req.session.nombre;
        });

        res.render("datos", {
            datos: datosUsuario,
            contador: req.session.contador,
        });
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/login");
    });
});

/*============================[Servidor]============================*/
const PORT = 4141;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
    console.error(`Error en el servidor ${error}`);
});
