"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('mongoose-currency').loadType(mongoose_1.default);
const Schema = mongoose_1.default.Schema;
var Currency = mongoose_1.default.Types;
console.log("test" + Currency);
const KPISchema = new Schema({
    totalProfit: {
        name: 'total'
    }
});
const KPI = mongoose_1.default.model("KPI", KPISchema);
exports.default = KPI;
