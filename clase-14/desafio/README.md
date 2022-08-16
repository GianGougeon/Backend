# Desafio 07

Backend eCommerce

1. Instalación

    ```sh
    npm install
    npm start
    ```

    El proyecto, que estará en http://localhost:8080

2. Peticiones

    - GET en '/api/productos' para obtener los productos
    - GET en '/api/productos/:id' para obtener un producto segun el id
    - POST en '/api/productos/' para cargar un producto
      Formato:
        ```
        {
          "name":"125cc",
          "description":"motor 125cc standard",
          "code": "125ccYa",
          "thumbnail":"https://http2.mlstatic.com/D_NQ_NP_843234-MLU47565558388_092021-O.webp",
          "price":360,
          "stock":2
        }
        ```
    - DELETE en '/api/productos/:id' para eliminar un producto segun el id
    - PUT en '/api/productos/:id' para modificar un producto segun el id

3. Peticiones en CARRITO

    - POST en '/api/carrito' para crear un carrito
    - DELETE en '/api/carrito/:idCarrito' para eliminar un carrito segun el id
    - GET en '/api/carrito/:idCarrito/productos' para obtener los productos de un carrito segun el id
    - POST en '/api/carrito/:idCarrito/productos/:idProducto' para cargar un producto en un carrito segun el id de carrito y producto
    - DELETE en '/api/carrito/:idCarrito/productos/:idProducto' para eliminar un producto de un carrito segun el id de carrito y producto
