import express from 'express';
import { placeOrder, processPayment, saveOrderDetails } from '../controllers/orderController';

const router = express.Router();

router.post('/place', async (req, res) => {
  try {
    const order = await placeOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/pay', async (req, res) => {
  try {
    const paymentResult = await processPayment(req.body);
    res.status(200).json(paymentResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/save', async (req, res) => {
  try {
    const savedOrder = await saveOrderDetails(req.body);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
