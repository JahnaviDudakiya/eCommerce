import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Order } from 'src/db/schema/order.schema';
import { CreateOrderDto } from './dto/createOrder.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Product') private orderModel: Model<Order>,
    @InjectConnection()
    private readonly connection: mongoose.Connection,
  ) {}

  async createOrderFun(createOrderDto: CreateOrderDto) {
    const session = await this.connection.startSession();
    try {
      session.startTransaction();

      const order = {
        ...createOrderDto,
      };
      const orderObject = new this.orderModel(order);
      await orderObject.save();

      return 'order_created';
    } catch (error) {
      await session.abortTransaction();
      return 'order_not_created';
    } finally {
      await session.endSession();
    }
  }

  async findAllOrderFun() {
    try {
      const object_order = await this.orderModel.find().exec();
      return object_order;
    } catch (error) {
      console.error('Error occurred while fetching products:', error);
    }
  }
}
