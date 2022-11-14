import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import { isAuth, isAdmin, mailgun, payOrderEmailTemplate } from "../helpers.js";

const orderRouter = express.Router();

export default orderRouter;
