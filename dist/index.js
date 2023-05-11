"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const kpiRoutes_1 = __importDefault(require("./routes/kpiRoutes"));
const KPI_1 = __importDefault(require("./models/KPI"));
const data_1 = require("./data/data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use("/", (req, res) => {
    res.send("hello");
});
app.use("/kpi", kpiRoutes_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default
        .connect(process.env.MONGO_URL)
        .then((result) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("MONGODB CONNECTED");
        yield mongoose_1.default.connection.db.dropDatabase();
        KPI_1.default.insertMany(data_1.kpis);
    }))
        .catch((error) => console.log(`${error} did not connect`));
    console.log(`Server is running at ${port}`);
}));
