# Desafio 15

1. Instalación

    ```sh
    npm install
    ```

    El proyecto, que estará en http://localhost:8080

    ### Dependencias utilizadas:

    - express
    - express-handlebars
    - express-session
    - cookie-parser
    - bcrypt
    - mongoose
    - passport
    - passport-local
    - minimist

    ### devDependencies utilizadas:

    - sass
    - dotenv

2. Usar

    - Abrir consola en la carpeta del proyecto
    - Ir a ./NodeServer
        ```sh
        cd NodeServer
        ```
    - Ejecutar el comando

    ```sh
    node server.js puerto
    ```

    El proyecto, que estará en http://localhost:puerto

    Ejemplo:

    ```sh
    node server.js 3000
    ```

    El proyecto, que estará en http://localhost:3000

3. Registrarse y inicia session

##

4. Uso de nginx
    - Pocicionarse en la carpeta del proyecto
        - Ejecutar el comando
            ```sh
            ./nginx.exe
            ```
    - Inicializar 4 consolas y dirigirse a ./NodeServer:
        - Ejecutar el comando
            ```sh
            cd ./NodeServer
            ```
        - Ejecutar los siguientes comandos en cada consola
            ```sh
            node server 8082
            ```
            ```sh
            node server 8083
            ```
            ```sh
            node server 8084
            ```
            ```sh
            node server 8085
            ```
    - En el navegador ingresar a http://localhost/api/random para ver el resultado de la distribución de carga
