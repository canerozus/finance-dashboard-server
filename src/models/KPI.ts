import mongoose, { Decimal128 } from "mongoose";
require('mongoose-currency').loadType(mongoose);

const Schema = mongoose.Schema;
interface IKPI {
    totalProfit: {
        type: mongoose.Types.Decimal128,
        currency: string
    };

  }


const KPISchema = new Schema<IKPI>({
    totalProfit: {
        type: mongoose.Types.Decimal128,
        currency: String
    }
});

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
