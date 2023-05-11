"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('mongoose-currency').loadType(mongoose_1.default);
const Schema = mongoose_1.default.Schema;
const KPISchema = new Schema({
    totalProfit: {
        type: mongoose_1.default.Types.Decimal128,
        currency: "USD"
    }
});
const KPI = mongoose_1.default.model("KPI", KPISchema);
exports.default = KPI;
