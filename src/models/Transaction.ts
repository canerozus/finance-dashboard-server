var mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);

const Schema = mongoose.Schema;
var Currency = mongoose.Types.Currency;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    amount: {
      type: Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
