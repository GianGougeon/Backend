# API RESTful

1. Instalación

    ```sh
    npm install
    npm start
    ```

    El proyecto, que estará en http://localhost:8080

    ### Dependencias utilizadas:

    - express

2. Peticiones

    - GET en '/api/productos' para obtener los productos
    - GET en '/api/productos/:id' para obtener un producto segun el id
    - POST en '/api/productos/' para cargar un producto
      Formato:
        ```
        {
            "nombre": "Monitor",
            "precio": "123",
            "url": "https://i.imgur.com/vAd9Ltj.jpeg"
        }
        ```
    - PUT en '/api/productos/:id' para modificar un producto segun el id
    - DELETE en '/api/productos/:id' para eliminar un producto segun el id
