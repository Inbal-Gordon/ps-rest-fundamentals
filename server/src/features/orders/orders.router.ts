import express from "express";
import { getOrderDetail, getOrders } from "./orders.service";

export const ordersRouter = express.Router();

ordersRouter.get("/", async (req, res) => {
  const query = req.query;
  const take = query.take;
  const skip = query.skip;
  const orders = await getOrders
  res.json(orders)
})


ordersRouter.get("/:id", async (require, res) => {
  const id = require.params.id;
  const order = await getOrderDetail(id);
  if (order != null) {
    res.json(order);
  }else {
    res.status(404).json({Message: "Order Not Found"})
  }
})
