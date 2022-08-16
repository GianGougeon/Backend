const data = [];
let id = 1;
// funcion que devuelve el tiempo actual
const time = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //Enero es 0!
    let yyyy = today.getFullYear();
    let hh = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");
    let ss = String(today.getSeconds()).padStart(2, "0");
    return `${dd}-${mm}-${yyyy} / ${hh}:${min}:${ss}`;
};

//funcion para mostrar todos los productos
const list = () => {
    return data;
};

//funcion para guardar un producto
const save = (object) => {
    object.id = id;
    object.timestamp = time();
    data.push(object);
    id++;
    return "Producto Guardado";
};

// funcion que devuelve un producto segun el id
const getItem = (product) => {
    let index = data.findIndex((item) => item.id == product);
    if (index == -1) {
        return {
            error: "Producto no encontrado"
        };
    }
    return data[index];
};

//funcion que elimina segun el id
const deleteItem = (product) => {
    let index = data.findIndex((item) => item.id == product);
    if (index == -1) {
        return {
            error: "Producto no encontrado"
        };
    }
    data.splice(index, 1);
    return "Producto Eliminado";
};
// funcion que modifica segun el id
const modifyItem = (i, object) => {
    let index = data.findIndex((x) => x.id == i);
    if (index == -1) {
        return {
            error: "Producto no encontrado"
        };
    }
    object.id = i;
    object.timestamp = data[index].timestamp;
    data[index] = object;
    return "Producto Reemplazado";
};

module.exports = {
    list,
    save,
    getItem,
    deleteItem,
    modifyItem,
    time
};