import ContenedorMongoDB from "../../contenedorMongoDb.js";
import { Product } from "../ModelDB.js";

class ProductosDaoMongoDb extends ContenedorMongoDB {
    constructor() {
        super(Product);
    }
}

export { ProductosDaoMongoDb };
