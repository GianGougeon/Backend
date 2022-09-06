import ContenedorFirebase from "../../ContenedorFirebase.js";

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor() {
        super("productos");
    }
}

export { ProductosDaoFirebase };
