// import fs
import fs from "fs/promises";

class ContenedorArchivo {
    constructor(ruta) {
        this.ruta = ruta;
    }

    async getById(id) {
        const obj = await this.getAll();
        const data = obj.find((el) => el.id == id);
        return data;
    }
    async getAll() {
        try {
            const data = await fs.readFile(this.ruta, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }
    async save(obj) {
        const data = await this.getAll();
        let NewId;
        if (data.length === 0) {
            NewId = 1;
        } else {
            NewId = data[data.length - 1].id + 1;
        }
        const newObject = { id: NewId, ...obj };
        data.push(newObject);
        try {
            await fs.writeFile(this.ruta, JSON.stringify(data, null, 2));
            return newObject;
        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteById(id) {
        const obj = await this.getAll();
        const index = obj.findIndex((el) => el.id == id);
        if (index == -1) {
            throw new Error(`No se pudo encontrar el elemento ${id}`);
        }
        obj.splice(index, 1);
        try {
            await fs.writeFile(this.ruta, JSON.stringify(obj, null, 2));
        } catch {
            throw new Error("No se pudo guardar el archivo");
        }
    }

    async changeById(id, object) {
        const obj = await this.getAll();
        const index = obj.findIndex((x) => x.id === id);
        if (index === -1) {
            return null;
        }
        const newObject = { id, ...object };
        obj[index] = newObject;
        try {
            await fs.writeFile(this.ruta, JSON.stringify(obj, null, 2));
            return newObject;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default ContenedorArchivo;
