import express from 'express';
import bodyParser from 'body-parser';
import orderRoutes from './routes/orderRoutes';
import { connectToDatabase } from './config/database';
import { configurePaymentGateway } from './config/paymentGateway';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/orders', orderRoutes);

connectToDatabase();
configurePaymentGateway();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
