const express = require("express");
const router = require("./routes/routes") 
const app = express();
const PORT = 8080;
const handlebars = require("express-handlebars");

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "form.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);

//plantilla
app.set("view engine", "hbs");
app.set("views", "./views");

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

// server
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
    console.log(`Server error:${err}`)
})