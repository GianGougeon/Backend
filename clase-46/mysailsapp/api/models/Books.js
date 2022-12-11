/**
 * Books.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // PRIMITIVES
    // EMBEDS
    // ASSOCIATIONS

    name: { type: "string", required: true },
    price: { type: "string", required: true },
    category: { type: "string", required: true },
    author: { type: "string" },
    description: { type: "string" },
  },
};
