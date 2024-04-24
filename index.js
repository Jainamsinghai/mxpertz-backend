import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";
import router from "./src/routers/index.router.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(morgan("common"));
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173"
    })
);
app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connectDB();
  console.log("server is running at ", port);
});
