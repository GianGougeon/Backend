import ContenedorArchivo from "../../ContenedorArchivo.js";

const url = "./db/products.json";

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super(url);
    }
}

export { ProductosDaoArchivo };
