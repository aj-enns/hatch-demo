import { Request, Response } from 'express';
import { Order } from '../models/orderModel';
import { processPayment } from '../config/paymentGateway';
import { saveOrderToDatabase } from '../config/database';

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const processPayment = async (req: Request, res: Response) => {
  try {
    const paymentResult = await processPayment(req.body);
    res.status(200).json(paymentResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveOrderDetails = async (req: Request, res: Response) => {
  try {
    const savedOrder = await saveOrderToDatabase(req.body);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
