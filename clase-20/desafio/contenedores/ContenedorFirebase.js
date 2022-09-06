import admin from "firebase-admin";
import serviceAccount from "../DB/firebase.js";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://url-example.firebaseio.com",
});

console.log("Base de datos conectada");

const db = admin.firestore();

class ContenedorFirebase {
    constructor(nombreCollection) {
        this.query = db.collection(nombreCollection);
    }

    async getAll() {
        try {
            const arr = [];
            const snapshot = await this.query.get();
            snapshot.forEach((doc) => {
                arr.push({ id: doc.id, ...doc.data() });
            });
            return arr;
        } catch (error) {
            console.log(error);
            return `Error al obtener los elementos`;
        }
    }

    async getById(id) {
        try {
            const doc = await this.query.doc(id).get();
            if (!doc.exists) {
                throw new Error("No existe el documento");
            } else {
                const data = doc.data();
                console.log(data);
                return { ...data, id };
            }
        } catch (error) {
            console.log(error);
            return `Error al obtener el elemento + ${id}`;
        }
    }

    async save(obj) {
        try {
            const saved = await this.query.add(obj);
            console.log("Elemento Guardado id:", saved.id);
            return { ...obj, id: saved.id };
        } catch (error) {
            console.log(error);
            return `Error al guardar el elemento`;
        }
    }

    async deleteById(id) {
        try {
            const deleted = await this.query.doc(id).delete();
            console.log("Elemento Eliminado");
            return deleted;
        } catch (error) {
            console.log(error);
            return `Error al eliminar el elemento + ${id}`;
        }
    }

    async changeById(id, obj) {
        try {
            const updated = await this.query.doc(id).set(obj);
            console.log("Elemento Actualizado");
            return updated;
        } catch (error) {
            console.log(error);
            return `Error al actualizar el elemento + ${id}`;
        }
    }
}

export default ContenedorFirebase;
