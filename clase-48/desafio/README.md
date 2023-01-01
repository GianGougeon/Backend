# desafio 25

## E-commerce backend

### Descripción

    Backend de un e-commerce, utilizando Node.js, Express, MongoDB

## Características

-   Api para manejo de productos
-   Api para manejo de carrito
-   Api para manejo de ordenes
-   Passport para manejo de usuarios
-   Nodemailer para envío de mails
-   Twilio para envío de sms
-   Handlebars para renderizado de vistas
-   Sass para estilos
-   Winston para logs
-   Dotenv para manejo de variables de entorno
-   Multer para manejo de archivos
-   MongoDB como base de datos
-   Modelo de datos de MongoDB

    -   Usuarios
    -   Productos
    -   Carritos
    -   Ordenes
-   Connect-mongo para manejo de sesiones en MongoDB
-   Bcrypt para encriptación de contraseñas
-   Compression para compresión de archivos
-   Cookie-parser para manejo de cookies

  ###

1. Instalación

    ```sh
    npm install
    ```

    ### Dependencias utilizadas:

    - bcrypt
    - compression
    - connect-mongo
    - cookie-parser
    - dotenv
    - express
    - express-handlebars
    - express-session
    - mongoose
    - multer
    - nodemailer
    - passport
    - passport-local
    - twilio
    - winston

    ### devDependencias utilizadas:

    - sass
    - dotenv

2. Usar

    ```sh
    npm start
    ```

    El proyecto, que estará en http://localhost:8080

##

### Login

```sh
http://localhost:8080/login
```

```
- POST /login
    - Recibe los campos:
        username:
        password:
```

### API Productos

```sh
http://localhost:8080/api/productos
```

```
- GET /api/productos
    - Devuelve un array con todos los productos
- GET /api/productos/:id
    - Devuelve el producto con el id pasado por parámetro
- POST /api/productos
    - Agrega un producto
     Recibe los campos:
        nombre:
        precio:
        url:
- PUT /api/productos/:id
    - Recibe y actualiza un producto
- DELETE /api/productos/:id
    - Elimina un producto
```

##

### API Carrito

```sh
http://localhost:8080/api/carrito
```

```
- GET /api/carrito
    - Devuelve un array con todos los productos del carrito
- POST /api/carrito
    - Crea un carrito con el id del usuario para identificarlo
- DELETE /api/carrito/:id
    - Elimina el carrito, pasando por parámetro el id del usuario
- GET /api/carrito/:id/productos
    - Devuelve un array con todos los productos del carrito del usuario
- POST /api/carrito/:id/productos/:idProducto
    - Agrega un producto al carrito del usuario
- DELETE /api/carrito/:id/productos/:idProducto
    - Elimina un producto del carrito del usuario

```

##

### API Ordenes

```sh
http://localhost:8080/api/order
```

```
- POST /api/orden/:id
    - Realiza una orden, pasando por parámetro el id del Carrito/Usuario para completar la orden
```

##

#### Postman

Se puede utilizar Postman para probar las rutas de las API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://github.com/GianGougeon/Backend/blob/master/clase-48/desafio/Ecommerce_GianGougeon.postman_collection.json)
