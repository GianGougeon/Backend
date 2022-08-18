const express = require("express");
const router = require("./routes/routes");
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
const fs = require("fs");
// Contenedor
class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }
    // Obtener todos los mensajes, si el archivo no existe lo crea
    async getAll() {
        try {
            const data = await fs.readFileSync(this.nombreArchivo);
            return JSON.parse(data);
        } catch (error) {
            console.log(
                "getAll Error:" +
                    error +
                    "Archivo no encontrado, se creara uno nuevo"
            );
            await fs.writeFileSync(this.nombreArchivo, "[]");
            return [];
        }
    }
    // Guardar los mensajes en data/mensajes.txt
    async save(mensaje) {
        try {
            const data = await this.getAll();
            data.push(mensaje);
            fs.writeFileSync(this.nombreArchivo, JSON.stringify(data));
        } catch (error) {
            console.log("Error al guardar: " + error);
        }
    }
}
// Contenedor de mensajes
const messages = new Contenedor("./data/mensajes.txt");

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

// carga de datos
io.on("connection", async (socket) => {
    console.log("Un cliente se ha conectado");
    // obtener mensajes
    socket.emit("messages", await messages.getAll());
    // actualizar mensajes
    socket.on("new-message", async (data) => {
        // agregar hora y dia al mensaje
        data.time = getTime();
        await messages.save(data);
        io.sockets.emit("messages", await messages.getAll());
    });
});

//------------------------------------------------------------------------------
// server
httpServer.listen(8080, () => {
    console.log("Server is running on port 8080");
});
