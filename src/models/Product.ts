var mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);

const Schema = mongoose.Schema;
var Currency = mongoose.Types.Currency;

const ProductSchema = new Schema(
  {
    price: {
      type: Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    expense: {
      type: Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
