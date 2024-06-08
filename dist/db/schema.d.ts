/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
export declare const schemas: ({
    name: string;
    schema: import("mongoose").Schema<import("./schema/user.schema").User, import("mongoose").Model<import("./schema/user.schema").User, any, any, any, import("mongoose").Document<unknown, any, import("./schema/user.schema").User> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./schema/user.schema").User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./schema/user.schema").User>> & import("mongoose").FlatRecord<import("./schema/user.schema").User> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
} | {
    name: string;
    schema: import("mongoose").Schema<import("./schema/product.schema").Product, import("mongoose").Model<import("./schema/product.schema").Product, any, any, any, import("mongoose").Document<unknown, any, import("./schema/product.schema").Product> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./schema/product.schema").Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./schema/product.schema").Product>> & import("mongoose").FlatRecord<import("./schema/product.schema").Product> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
} | {
    name: string;
    schema: import("mongoose").Schema<import("./schema/order.schema").Order, import("mongoose").Model<import("./schema/order.schema").Order, any, any, any, import("mongoose").Document<unknown, any, import("./schema/order.schema").Order> & import("./schema/order.schema").Order & {
        _id: import("mongoose").Types.ObjectId;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./schema/order.schema").Order, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./schema/order.schema").Order>> & import("mongoose").FlatRecord<import("./schema/order.schema").Order> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
})[];
