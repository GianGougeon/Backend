import express from "express";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

const app = express();

const DB = [
  {
    id: "1",
    nombre: "Pepe",
    categoria: {
      id: "A",
      nombre: "Profesor",
      puntaje: "4.1",
    },
  },
  {
    id: "2",
    nombre: "Juan",
    categoria: {
      id: "B",
      nombre: "Estudiante",
      puntaje: "3.1",
    },
  },
];

const schema = buildSchema(`
  type Usuario {
    id: String!,
    nombre: String,
    categoria: Categoria
  }

  type Categoria {
    idCategoria: String!,
    nombre: String,
    puntaje: String
  }
  
  type Query {
    findUser(id: String!): Usuario
  }
`);

const root = {
  findUser: ({ id }) => {
    const user = DB.find((user) => user.id === id);
    return user;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => console.log("Server running on port 8080"));
