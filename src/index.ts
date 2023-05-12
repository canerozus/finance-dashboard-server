import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpiRoutes";
import KPI from "./models/KPI";
import { kpis } from "./data/data";

const port = process.env.PORT;
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use("/kpi", kpiRoutes);


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
    })
    .catch((error) => console.log(`${error} did not connect`));
  console.log(`Server is running at ${port}`);
});
