/*============================[Modulos]============================*/
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require("./src/routes/index");
const handlebars = require("express-handlebars");
const passport = require("./src/middlewares/passport.js");

const logger = require("./src/utils/logger");

const app = express();

/*============================[Middlewares]============================*/
const MongoStore = require("connect-mongo");
/*----------- Session -----------*/
app.use(cookieParser());
let MONGOURL =
    process.env.MONGOURL || "mongodb://localhost:27017/passport-mongo";
app.use(
    session({
        store: new MongoStore({ mongoUrl: MONGOURL }),
        secret: "coderhouse",
        resave: false,
        saveUninitialized: false,
        rolling: true,
        cookie: { maxAge: 3600000 }, // 1 hora
    })
);
app.use(express.static(__dirname + "/src/public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

/*============================[Motor de plantillas]============================*/
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: __dirname + "/src/views/layouts",
        partialsDir: __dirname + "/src/views/partials",
    })
);

//plantilla
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(express.static(__dirname + "/src/public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
/*============================[Rutas]============================*/
app.use("/", router);
/*============================[Servidor]============================*/
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => {
    logger.error(`Error en el servidor ${error}`);
});
