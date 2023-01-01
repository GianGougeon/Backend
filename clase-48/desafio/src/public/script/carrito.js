// variables
const table = document.querySelector(".tbody-cart");
const total = document.querySelector(".total-cart-price");

// funcion para crear un carrito segun el id del usuario
const createCart = async () => {
    const data = await fetch(`/api/carrito`, {
        method: "POST",
    });
    return await data.json();
};
// funcion renderizar el carrito
const cart = async () => {
    const userId = await JSON.parse(localStorage.getItem("user"));
    const data = await fetch(`/api/carrito/${userId}/productos`);
    const cart = await data.json();
    // Crea el carrito si no existe
    cart.error && (await createCart());
    // cart indicator
    cartIndicator(cart.productos.length);
    // render cart
    if (cart.productos.length === 0) {
        let miNodo = document.createElement("tr");
        miNodo.innerHTML = `
            <td>Sin datos</td>
            <td>Sin datos</td>
            <td>Sin datos</td>
            <td>Sin datos</td>`;
        table.appendChild(miNodo);
    }
    cart.productos.forEach((elem) => {
        let miNodo = document.createElement("tr");
        miNodo.innerHTML = `
            <td>${elem.nombre}</td>
            <td>$ ${elem.precio}</td>
            <td>
                <img src="${elem.url}" alt="${elem.nombre}">
            </td>
            <td>
                <button class="button-23" role="button">Eliminar</button>
            </td>`;
        table.appendChild(miNodo);
        // delete button
        const deleteButton = miNodo.querySelector(".button-23");
        deleteButton.addEventListener("click", async () => {
            const data = await fetch(
                `/api/carrito/${userId}/productos/${elem._id}`,
                {
                    method: "DELETE",
                }
            );
            const cart = await data.json();
            cartIndicator(cart.productos.length);
            miNodo.remove();
            totalPrice();
        });
    });
    totalPrice();
};
// function para calcular el total
const totalPrice = () => {
    let totalValue = 0;
    const products = document.querySelectorAll(".tbody-cart tr");
    products.forEach((elem) => {
        totalValue += parseInt(elem.children[1].textContent.replace("$ ", ""));
    });
    total.textContent = `$ ${totalValue}`;
    // si total es nan set 0
    isNaN(totalValue) && (total.textContent = `$ 0`);
};
// function para ver el numero de productos en el carrito
const cartIndicator = (length) => {
    const indicator = document.querySelector(".carritoIndicator");
    // agregar el numero de productos al carrito
    if (length > 0) {
        indicator.textContent = `Carrito (${length})`;
    }
};
// funcion para borrar el carrito
const deleteCart = async () => {
    const userId = await JSON.parse(localStorage.getItem("user"));
    // eliminar todos los td
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    let miNodo = document.createElement("tr");
    miNodo.innerHTML = ``;
    miNodo.innerHTML = `
        <td>Sin datos</td>
        <td>Sin datos</td>
        <td>Sin datos</td>
        <td>Sin datos</td>`;
    table.appendChild(miNodo);

    const data = await fetch(`/api/carrito/${userId}`, {
        method: "DELETE",
    });
    const cart = await data.json();
    cartIndicator(cart.productos.length);
    cart();
};
// funcion para realizar una compra
const order = async () => {
    total.textContent = `$ 0`;
    deleteCart();
};

// inicializar carrito

cart();
