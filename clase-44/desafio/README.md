# desafio 22

## E-commerce backend

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
    - Axios
    - express-graphql
    - graphql

    ### devDependencias utilizadas:

    - sass
    - dotenv
    - chai
    - dotenv
    - mocha
    - supertest

2. Usar

    ```sh
    npm start
    ```

    El proyecto, que estará en http://localhost:8080

---

Queries:

```
Dirigirse a: http://localhost:8080/api/graphql

```

-   Get products / Todos los productos

```
{
	getProducts {
    _id,
    nombre,
    precio,
	}
}
```

-   Add product / Agregar producto

```
mutation {
  addProduct(datos: {
    nombre: "product graphql 3",
    precio: 10.5,
    url: "https://lh3.googleusercontent.com/ogw/AOh-ky2CdqY2t24jIxDIHAt3WcEMB0UbaodZsnyL8Ip1fA=s64-c-mo"
  }) {
    _id,
    nombre,
    precio,
    url
  }
}
```

-   Delete product / Eliminar producto

```
mutation {
  deleteProduct(id: "6395ea404673e852232c21fe") {
    _id,
    nombre,
    precio,
    url
  }
}
```

-   Update product / Actualizar producto

```
mutation {
  updateProduct(datos: {
    _id: "6395ea404673e852232c21fe",
    nombre: "product graphql 3 actualizado",
    precio: 5,
    url: "https://lh3.googleusercontent.com/ogw/AOh-ky2CdqY2t24jIxDIHAt3WcEMB0UbaodZsnyL8Ip1fA=s64-c-mo"
  }) {
    _id,
    nombre,
    precio,
    url
  }
}
```
