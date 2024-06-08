import { UserSchema } from './schema/user.schema';
import { ProductSchema } from './schema/product.schema';
import { OrderSchema } from './schema/order.schema';

export const schemas = [
  { name: 'User', schema: UserSchema },
  { name: 'Product', schema: ProductSchema },
  { name: 'Order', schema: OrderSchema },
];
