import ContenedorMemoria from "../../ContenedorMemoria.js";
import { productos } from "../../../DB/memoria.js";

class ProductosDaoMemoria extends ContenedorMemoria {
    constructor() {
        super(productos);
    }
}

export { ProductosDaoMemoria };
