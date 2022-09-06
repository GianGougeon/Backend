import mongoose from "mongoose";

try {
    //conexion hacia la base de datos
    const URL = "mongodb://localhost:27017/test";
    mongoose.connect(URL);
} catch (err) {
    console.log(error);
}

class ContenedorMongoDB {
    constructor(schema) {
        this.schema = schema;
    }

    async getAll() {
        try {
            const data = await this.schema.find();
            return data;
        } catch (error) {
            console.log(error);
            return "Error al obtener los datos";
        }
    }

    async getById(id) {
        try {
            const data = await this.schema.findById(id);
            return data;
        } catch (error) {
            console.log(error);
            return `Error al obtener el elemento + ${id}`;
        }
    }

    async save(obj) {
        try {
            const element = await this.schema.create(obj);
            return element;
        } catch (error) {
            console.log(error);
            return "Error al guardar el elemento";
        }
    }

    async deleteById(id) {
        try {
            const element = await this.schema.findByIdAndDelete(id);
            console.log(element);
            return "Elemento eliminado";
        } catch (error) {
            console.log(error);
            return "Error al eliminar el elemento";
        }
    }

    async changeById(id, obj) {
        try {
            const el = await this.schema.findByIdAndUpdate(id, obj);
            console.log(el);
            return "Elemento actualizado";
        } catch (error) {
            console.log(error);
            return "Error al actualizar el elemento";
        }
    }
}

export default ContenedorMongoDB;
