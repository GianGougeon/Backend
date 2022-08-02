// Enviar formulario
// ----------------------------------------------------------------
const sendForm = () => {
    const data = {
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        url: document.getElementById("url").value,
    }
    fetch('http://localhost:8080/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    // limpia el formulario
    document.getElementById("form").reset();
    // Actualiza la tabla
    getForm();

    return false;
}
// Hace una peticion al servidor para obtener los datos actualizados
const getForm = async () => {
    const getProducts = async () => {
        const response = await fetch('http://localhost:8080/productos');
        const movies = await response.json();
        return movies;
    }
    getProducts().then(data => {
        // Renderiza la tabla
        renderTable(data);
    }).catch(error => console.log("error", error));
}
getForm();
// Renderiza la tabla
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
        data.forEach(elem => {
            let miNodo = document.createElement("tr");
            miNodo.innerHTML = `
                            <td>${elem.id}</td>
                            <td>${elem.nombre}</td>
                            <td>${elem.precio}</td>
                            <td><img src="${elem.url}" alt="${elem.nombre}"></td>`;
            table.appendChild(miNodo);
        })
    }

}


// Chatsocket
// ------------------------------------------------------------
let socket = io('http://localhost:8080/');

const render = (data) => {
    const html = data.map((elem, index) => {
        return (`<div>
            <strong class="chat-author">${elem.author} </strong>:
            <strong class="chat-time">[${elem.time}]:</strong>
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    const render = document.getElementById('messages')
    render.innerHTML = html
    render.scrollTop = render.scrollHeight;
}

socket.on('messages', function (data) {
    render(data);

});
// Enviar mensaje
const addMessage = () => {
    const mensaje = {
        author: document.getElementById("username").value,
        text: document.getElementById("texto").value,
    };
    // valida que sea un email valido y que el mensaje no este vacio
    if (validateEmail(mensaje.author) && mensaje.text !== "") {
        socket.emit('new-message', mensaje);
        document.getElementById("texto").value = "";
    } else {
        alert("Por favor ingrese un email y mensaje");
    }
    return false;

}
// validacion de email
const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}