/*
Consigna:
Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

*/
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }
    async getall() {
        try {
            const file = await fs.readFileSync(this.archivo, 'utf8');
            return JSON.parse(file);
        } catch (error) {
            console.log("getAll error: " + error);
            return [];
        }
    }
}
const contenedor = new Contenedor('productos.txt');

app.get('/', (req, res) => {
    res.send('<button><a href="/productos">Ver productos</a></button> <button><a href="/productoRandom">Ver producto random</a></button>');
});
app.get('/productos', (req, res) => {
    productos = contenedor.getall();
});
app.get('/productoRandom', (req, res) => {
    // getproductoRandom then
    productos.getall().then(productos => {
        const producto = productos[Math.floor(Math.random() * productos.length)];
        res.send(producto);
    }).catch(error => {
        console.log("getAll error: " + error);
        res.send(`<h1>Error al cargar los productos</h1>`);
    });

});

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});
server.on("error", error => console.log(`Error en servidor ${error}`));