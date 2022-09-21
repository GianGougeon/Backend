/*============================[Modulos]============================*/
import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import session from "express-session";
import path from "path";
import "./db/config.js";
import { router } from "./routes/index.js";
import passport from "./middlewares/passport.js";

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
            maxAge: 600000, // 10 minutos en milisegundos
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

/*============================[Motor de plantillas]============================*/
const __dirname = path.resolve();
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
    })
);

//plantilla
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

/*============================[Rutas]============================*/
app.use("/", router);
/*============================[Servidor]============================*/
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
    console.error(`Error en el servidor ${error}`);
});
