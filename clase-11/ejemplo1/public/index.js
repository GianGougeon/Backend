const socket = io();

// Cliente
socket.on("mi mensaje", (data) => {
  alert(data);
  socket.emit("notificacion", "Mensaje recibido exitosamente");
});
