const { Router } = require("express");
const schema = require("../../graphql/buldschema.js");
const { graphqlHTTP } = require("express-graphql");
const {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../../controller/graphql.controller.js");

const graphql = Router();

graphql.use(
    "/",
    graphqlHTTP({
        schema: schema,
        rootValue: {
            getProducts: getProducts,
            addProduct: addProduct,
            updateProduct: updateProduct,
            deleteProduct: deleteProduct,
        },
        graphiql: true,
    })
);

module.exports = graphql;
