import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export const saveOrderToDatabase = async (orderData: any) => {
  try {
    const order = await Order.create(orderData);
    return order;
  } catch (error) {
    throw new Error('Error saving order to database');
  }
};

export { sequelize };
