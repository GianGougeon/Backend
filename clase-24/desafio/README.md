# Desafio 12

1. Instalación

    ```sh
    npm install
    ```
    El proyecto, que estará en http://localhost:8080

    Es necesario [XAMPP](https://www.apachefriends.org/es/download.html)
    
    ### Dependencias utilizadas:

    - express
    - express-handlebars
    - socket.io
    - mysql
    - knex
    - sqlite3
    - express-session
    - cookie-parser
    - connect-mongo

    ### devDependencies utilizadas:

    - sass
    - dotenv



2. Inicialiar Apache y MySQL en XAMPP
3. En [phpMyAdmin](http://localhost/phpmyadmin/), crear la base de datos "ecommerce" para poder interactuar con ella
4. Ejecutar en la terminal

    Para crear la tabla en phpmyadmin e insertar datos

    ```sh
    node .\create_prod_table.js
    ```

    Para crear la tabla dentro de la base de datos con el nombre de "ecommerce.db3" donde estara guardado el chat

    ```sh
    node .\create_chat_table.js
    ```

5. Usar
    ```sh
    npm start
    ```
6. Registrarse y loguearse