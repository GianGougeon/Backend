const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Product {
    _id: ID!
    nombre: String,
    precio: Float,
    url: String,
  }
  input ProductInput {
    nombre: String,
    precio: Float,
    url: String,
  }
  input ProductWithIdInput {
    _id: ID!
    nombre: String,
    precio: Float,
    url: String,
  }
  type Query {
    getProducts: [Product],
  }
  type Mutation {
    addProduct(datos: ProductInput): Product,
    deleteProduct(id: ID!): Product,
    updateProduct(datos: ProductWithIdInput): Product, 
  }
`);

module.exports = schema;
