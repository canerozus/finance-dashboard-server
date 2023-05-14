"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);
const Schema = mongoose.Schema;
var Currency = mongoose.Types.Currency;
const ProductSchema = new Schema({
    price: {
        type: Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    expense: {
        type: Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
        },
    ],
}, { timestamps: true, toJSON: { getters: true } });
const Product = mongoose.model("Product", ProductSchema);
exports.default = Product;
