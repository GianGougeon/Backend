const express = require("express");
const router = require("./routes/routes") 
const app = express();
const PORT = 8080;

//plantilla
app.set('views', './views');
app.set('view engine', 'pug');


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