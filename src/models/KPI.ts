import mongoose, { Decimal128 } from "mongoose";
require("mongoose-currency").loadType(mongoose);

const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Decimal128,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Decimal128,
        currency: "USD",
        get: (v: any) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
