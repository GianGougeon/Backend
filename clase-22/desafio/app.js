const express = require("express");
const router = require("./routes/index");
const chat = require("./data/chat.js");
const { Server: HttpServer } = require("http");
const { Server: I0Server } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new I0Server(httpServer);

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
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //Enero es 0!
    let yyyy = today.getFullYear();
    let hh = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");
    let ss = String(today.getSeconds()).padStart(2, "0");
    return `${dd}-${mm}-${yyyy} / ${hh}:${min}:${ss}`;
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
