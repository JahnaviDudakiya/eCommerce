import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from './user.schema';

@Schema({ timestamps: true })
export class Order {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
  })
  userId: User;

  @Prop([
    {
      productId: {
        type: MongooseSchema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
      },
    },
  ])
  products: [];

  @Prop({
    type: Number,
  })
  totalPrice: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
