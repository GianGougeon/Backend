/*============================[Modulos]============================*/
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require("./routes/index");
const handlebars = require("express-handlebars");
const dotenv = require("dotenv");

const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const passport = require("./middlewares/passport.js");
const minimist = require("minimist");

const app = express();
dotenv.config();
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
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }, // milisegundos
    })
);
app.use(express.static(__dirname + "/public"));
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
let PORT = 8080;
let data = minimist(["-p", process.argv.slice(2)]);
if (typeof data.p === "number") {
    PORT = data.p;
}
/*============================[Cluster]============================*/

if (cluster.isPrimary) {
    console.log(`I am a master ${process.pid}`);
    console.log("num CPUs: " + numCPUs);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker) => {
        console.log(`${worker.process.pid} is finished`);
    });
} else {
    app.listen(PORT, function () {
        console.log(`Servidor escuchando en puerto ${PORT}`);
    });

    console.log(`Worker ${process.pid} started`);
}
