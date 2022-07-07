const fs = require('fs');
// Contenedor
class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }
    //getall
    getAll() {
        try {
            const file = fs.readFileSync(this.nombreArchivo, 'utf8');
            return JSON.parse(file);
        } catch (error) {
            console.log("getAll error: " + error);
            return [];
        }
    }
    // save 
    async save(obj) {
        try {
            const file = await this.getAll();
            const id = file.length + 1;
            obj.id = id;
            file.push(obj);
            fs.writeFileSync(this.nombreArchivo, JSON.stringify(file));
            return id;
        } catch (error) {
            console.log("save error: " + error);
        }
    }
    // getById 
    async getById(id) {
        try {
            const file = await this.getAll();
            const producto = file.find(p => p.id === id);
            return producto;
        } catch (error) {
            console.log(error);
            console.log("getById error: " + error);

        }
    }
    // deleteById 
    async deleteById(id) {
        try {
            const file = await this.getAll();
            const producto = file.find(p => p.id === id);
            file.splice(file.indexOf(producto), 1);
            fs.writeFileSync(this.nombreArchivo, JSON.stringify(file));
        } catch (error) {
            console.log("deleteById error: " + error);
        }
    }
    // deleteAll 
    deleteAll() {
        try {
            fs.writeFileSync(this.nombreArchivo, '');
        } catch (error) {
            console.log("deleteAll error: " + error);
        }
    }
}

const prueba = async () => {
    const contenedor = new Contenedor('productos.txt');
    const producto = {
        title: 'Escuadras',
        price: 123.45,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
    };
    const producto2 = {
        title: 'Globos',
        price: 345.67,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
    };
    const producto3 = {
        title: 'Motor',
        price: 527.89,
        thumbnail: 'motor.png'
    };
    const producto4 = {
        title: 'PC',
        price: 227.89,
        thumbnail: 'pc.png'
    };
    // deleteall
    contenedor.deleteAll();
    // save
    await contenedor.save(producto)
    await contenedor.save(producto2);
    await contenedor.save(producto3);
    await contenedor.save(producto4);
    // getall
    console.log("todos los productos", contenedor.getAll());
    // getbyid console
    contenedor.getById(1).then(producto => console.log("producto: ", producto));
    // deletebyid
    contenedor.deleteById(4);
}
prueba();