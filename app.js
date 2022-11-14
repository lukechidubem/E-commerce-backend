import express from "express";
import path from "path";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

import dotenv from "dotenv";

const app = express();

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadRouter);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
