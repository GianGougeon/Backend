/*============================[Preview Avatar]============================*/

const previewFile = (event) => {
    const output = document.getElementById("imgProfile");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src);
    };
};
/*============================[Recibe datos]============================*/

const getForm = async () => {
    const getProducts = async () => {
        const response = await fetch("/api/productos");
        const prod = await response.json();
        return prod;
    };
    const products = await getProducts();
    renderTable(products);
};
/*============================[Enviar formulario]============================*/

const sendForm = () => {
    const data = {
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        url: document.getElementById("url").value,
    };
    fetch("/api/productos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .catch((error) => console.log(error));
    // limpia el formulario
    document.getElementById("form").reset();
    // Actualiza la tabla
    getForm();
    return false;
};

/*============================[Renderiza la tabla]============================*/

const renderTable = (data) => {
    // Limpia la tabla para que no se dupliquen los datos
    const table = document.getElementById("data-content");
    table.innerHTML = "";
    if (data.length === 0) {
        table.innerHTML = `
        <tr>
            <td>No hay datos</td>
            <td>No hay datos</td>
            <td>No hay datos</td>
            <td>No hay datos</td>
        </tr>
    `;
    } else {
        data.forEach((elem) => {
            let miNodo = document.createElement("tr");
            miNodo.innerHTML = `
                            <td>${elem._id}</td>
                            <td>${elem.nombre}</td>
                            <td>${elem.precio}</td>
                            <td>
                                <img src="${elem.url}" alt="${elem.nombre}">
                            </td>`;
            table.appendChild(miNodo);
        });
    }
};
/*============================[User id]============================*/
const getUserId = async () => {
    // get user id and save on local storage
    try {
        const response = await fetch("/api/user");
        const id = await response.text();
        localStorage.setItem("user", id);
    } catch (error) {
        console.log(error);
    }
};

/*============================[Inicializa la tabla]============================*/
getUserId();
getForm();
