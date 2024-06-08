import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Product } from 'src/db/schema/product.schema';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>,
    @InjectConnection()
    private readonly connection: mongoose.Connection,
  ) {}

  async createProductFun(createProductDto: CreateProductDto) {
    const session = await this.connection.startSession();
    try {
      session.startTransaction();

      const product = {
        ...createProductDto,
      };
      const productObject = new this.productModel(product);
      await productObject.save();

      return 'product_created';
    } catch (error) {
      await session.abortTransaction();
      return 'product_not_created';
    } finally {
      await session.endSession();
    }
  }

  async productFindByIdFun(id: any) {
    return await this.productModel.findById(id).exec();
  }

  async updateProductFun(updateProductDto: UpdateProductDto, id: any) {
    await this.productModel.updateOne(
      { _id: id },
      {
        ...updateProductDto,
      },
    );

    return 'product_updated';
  }

  async findAllProductFun() {
    try {
      const object_product = await this.productModel.find().exec();
      return object_product;
    } catch (error) {
      console.error('Error occurred while fetching products:', error);
    }
  }

  async deleteProductFun(id: string) {
    await this.productModel.deleteOne({ _id: id }).exec();

    return 'product_delete';
  }
}
