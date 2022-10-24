/*============================[Modulos]============================*/
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require("./routes/index");
const handlebars = require("express-handlebars");
const dotenv = require("dotenv");
const passport = require("./middlewares/passport.js");

const logger = require("./middlewares/logger");

const app = express();
dotenv.config();
/*============================[SocketIO]============================*/
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
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
        rolling: true,
        cookie: { maxAge: 3600000 }, // 1 hora
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
const chat = require("./db/chat");

/*============================[SocketIO]============================*/
io.on("connection", async (socket) => {
    //mensaje en consola cuando se conecta un usuario
    console.log("Un cliente se ha conectado id: " + socket.id);
    const messages = await chat.getMessages();
    // obtener mensajes 
    socket.emit("messages", messages);
    // actualizar mensajes
    socket.on("new-message", async (data) => {
        try {
            chat.saveMessages(data);
            const messages = await chat.getMessages();
            io.sockets.emit("messages", messages);
        } catch (err) {
            console.log(err);
            logger.error("Error al guardar el mensaje en la base de datos");
        }
    });
});

/*============================[Rutas]============================*/
app.use("/", router);
/*============================[Servidor]============================*/
let PORT = 8080;

const server = httpServer.listen(PORT, () => {
    console.log(
        `Servidor escuchando en el puerto ${server.address().port}`
    );
});
server.on("error", (error) => {
    logger.error(`Error en el servidor ${error}`);
});
