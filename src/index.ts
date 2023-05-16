import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpiRoutes";
import productRoutes from "./routes/productRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import KPI from "./models/KPI";
import Product from "./models/Product";
import Transaction from "./models/Transaction";
import { kpis, products, transactions } from "./data/data";

const port = process.env.PORT || 8000;
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: [`http://localhost${port}`,"https://financeor.vercel.app"]}));

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
app.get("/", (req,res)=> {
  res.json("hellooo")
});
app.listen(port, async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(async (result) => {
      console.log("MONGODB CONNECTED", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      //Add data one time or as needed
      // await mongoose.connection.db.dropDatabase();
      // KPI.insertMany(kpis);
      // Product.insertMany(products);
      // Transaction.insertMany(transactions);
    })
    .catch((error) => console.log(`${error} did not connect`));
  console.log(`Server is running at ${port}`);
});
