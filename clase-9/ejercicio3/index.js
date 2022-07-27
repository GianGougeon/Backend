const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts/'
}));

app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'hbs'); // especifica el motor de vistas

app.get('/', function (req, res) {
    const datos = {
        nombre: "Nombre",
        apellido: "Apellido",
        edad: "24",
        email: "dasdasd@gmail.com",
        telefono: "123456"
    }
    res.render('main', datos);
});

app.listen(8080, () => console.log("Server up"));
