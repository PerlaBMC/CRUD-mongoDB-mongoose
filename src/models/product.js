const {Schema, model} = require ("mongoose");

const productSchema = Schema ({
    product_name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number
  },
});

module.exports = model ("product", productSchema, "products")