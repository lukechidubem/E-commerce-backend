import express from "express";
import path from "path";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(cors());

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

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

// app.get("/api/keys/google", (req, res) => {
//   res.send({ key: process.env.GOOGLE_API_KEY || "" });
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/orders", orderRouter);

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/frontend/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
// );

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
