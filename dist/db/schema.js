"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const user_schema_1 = require("./schema/user.schema");
const product_schema_1 = require("./schema/product.schema");
const order_schema_1 = require("./schema/order.schema");
exports.schemas = [
    { name: 'User', schema: user_schema_1.UserSchema },
    { name: 'Product', schema: product_schema_1.ProductSchema },
    { name: 'Order', schema: order_schema_1.OrderSchema },
];
//# sourceMappingURL=schema.js.map