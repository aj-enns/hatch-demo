import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Order extends Model {
  public id!: number;
  public customerName!: string;
  public customerEmail!: string;
  public foodItem!: string;
  public quantity!: number;
  public totalPrice!: number;
  public paymentStatus!: string;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    customerName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    customerEmail: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    foodItem: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentStatus: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'orders',
    sequelize,
  }
);

export const saveOrder = async (orderData: any) => {
  try {
    const order = await Order.create(orderData);
    return order;
  } catch (error) {
    throw new Error('Error saving order to database');
  }
};

export const getOrderById = async (orderId: number) => {
  try {
    const order = await Order.findByPk(orderId);
    return order;
  } catch (error) {
    throw new Error('Error fetching order from database');
  }
};
