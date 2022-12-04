const rederProductos = async () => {
    let search = document.getElementById("searchbox").value;
    const res = await fetch("/api/productos");
    const data = await res.json();
    // filtrar los productos
    const productos = data.filter((producto) => {
        return producto.nombre.toLowerCase().includes(search.toLowerCase());
    });
    const productosContainer = document.querySelector(".render-productos");
    productosContainer.innerHTML = "";
    productos.forEach((elem) => {
        productosContainer.innerHTML += `
        <div>
        <div>
           <article>
               <div>
                   <div>
                        <div>
                           <img src="${elem.url}" alt="${elem.nombre}"/>
                       </div>
                   </div>
               </div>
               <div>
               <span>${elem.nombre}</span>
               <span style="display: none" class="prod_id">${elem._id}</span>
               <span>$USD ${elem.precio}</span></div>
               <button class="button-23 btn-productos" role="button">Agregar al carrito</button>
           </article>
       </div>
   </div>
        `;
    });
    // Agregar evento a los botones y obtener el id del producto
    const btns = document.querySelectorAll(".btn-productos");
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.parentNode.querySelector(".prod_id").innerText;
            addToCart(id);
        });
    });
};
// Elemento que se va a agregar al carrito
const addToCart = async (id) => {
    const userId = JSON.parse(localStorage.getItem("user"));
    // post a la api and json parse
    try {
        const res = await fetch(`/api/carrito/${userId}/productos/${id}`, {
            method: "POST",
        });
        const data = await res.json();
        cartIndicator(data.productos.length);
    } catch (err) {
        console.log(err);
    }
};

//A little delay
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById("searchbox");

searchInput.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(rederProductos, typeInterval);
});

// Llamar a la funcion
rederProductos();
