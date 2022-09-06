class ContenedorMemoria {
    constructor(arr) {
        this.arr = arr;
    }

    async getById(id) {
        const obj = await this.getAll();
        const data = obj.find((el) => el.id == id);
        return data;
    }

    async getAll() {
        return this.arr;
    }

    async save(obj) {
        try {
            const data = await this.getAll();
            let NewId;
            if (data.length === 0) {
                NewId = 1;
            } else {
                NewId = data[data.length - 1].id + 1;
            }
            const newObject = { id: NewId, ...obj };
            data.push(newObject);
            return newObject;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const obj = await this.getAll();
            const index = obj.findIndex((el) => el.id == id);
            if (index == -1) {
                throw new Error(`No se pudo encontrar el elemento ${id}`);
            }
            obj.splice(index, 1);
            return "elemento Eliminado";
        } catch (error) {
            console.log(error);
        }
    }

    async changeById(id, object) {
        try {
            const obj = await this.getAll();
            const index = obj.findIndex((x) => x.id === id);
            if (index === -1) {
                return null;
            }
            const newObject = { id, ...object };
            obj[index] = newObject;
            return "elemento Actualizado";
        } catch (error) {
            console.log(error);
        }
    }
}

export default ContenedorMemoria;
