import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Persona {
    id: ID!
    nombre: String,
    edad: Int
  }
  input PersonaInput {
    nombre: String,
    edad: Int
  }
  type Query {
    getPersona(id: ID!): Persona,
    getPersonas(campo: String, valor: String): [Persona],
  }
  type Mutation {
    createPersona(datos: PersonaInput): Persona
    updatePersona(id: ID!, datos: PersonaInput): Persona,
    deletePersona(id: ID!): Persona,
  }
`);

export default schema;
