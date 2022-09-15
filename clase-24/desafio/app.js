const express = require("express");
const router = require("./routes/index");
const chat = require("./data/chat.js");

const { Server: HttpServer } = require("http");
const { Server: I0Server } = require("socket.io");
const MongoStore = require("connect-mongo");
const session = require("express-session");

const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const httpServer = new HttpServer(app);
const io = new I0Server(httpServer);
let MONGOURL = process.env.MONGOURL;

const handlebars = require("express-handlebars");

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "home",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
    })
);

//plantilla
app.set("view engine", "hbs");
app.set("views", "./views");


//middlewares
app.use(cookieParser());
app.use(
    session({
        store: new MongoStore({ mongoUrl: MONGOURL }),
        secret: "coderhouse",
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }, // 60 segundos
    })
);
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use("/", router);

// Chat socket
//------------------------------------------------------------------------------
// obtener hora y dia actual
getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;
};

//conexion
io.on("connection", async (socket) => {
    //mensaje en consola cuando se conecta un usuario
    console.log("Un cliente se ha conectado");
    const messages = await chat.getMessages();
    // obtener mensajes
    socket.emit("messages", messages);
    io.sockets.emit("productos");
    // actualizar mensajes
    socket.on("new-message", async (data) => {
        try {
            data.time = getTime();
            chat.saveMessages(data);
            const messages = await chat.getMessages();
            io.sockets.emit("messages", messages);
        } catch (err) {
            console.log(err);
        }
    });
});

//------------------------------------------------------------------------------
// server
httpServer.listen(8080, () => {
    console.log("Server is running on port 8080");
});
