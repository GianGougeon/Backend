const getFormFaker = async () => {
    const getProducts = async () => {
        const response = await fetch(
            "http://localhost:8080/api/productos-test"
        );
        const prod = await response.json();
        return prod;
    };
    getProducts()
        .then((data) => {
            // Renderiza la tabla
            renderTableFaker(data);
        })
        .catch((error) => console.log("error", error));
};
getFormFaker();
// Renderiza la tabla
const renderTableFaker = (data) => {
    const table = document.getElementById("data-content-faker");
    table.innerHTML = "";
    if (data.length === 0) {
        table.innerHTML = `
        <tr>
            <td>No hasy datos</td>
            <td>No shay datos</td>
            <td>No hsay datos</td>
            <td>No hsay datos</td>
        </tr>
    `;
    } else {
        data.forEach((elem) => {
            let miNodo = document.createElement("tr");
            miNodo.innerHTML = `
                            <td>${elem.id}</td>
                            <td>${elem.nombre}</td>
                            <td>$ ${elem.precio}</td>
                            <td>
                                <img src="${elem.url}" alt="${elem.nombre}">
                            </td>`;
            table.appendChild(miNodo);
        });
    }
};
