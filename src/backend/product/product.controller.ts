import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@ApiTags('Product')
@Controller({ path: '/api', version: '1' })
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/products')
  async createProductFun(@Body() createProductDto: CreateProductDto) {
    return await this.productService.createProductFun(createProductDto);
  }

  @Put('/products/:id')
  async updateProductFun(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ) {
    const is_product = await this.productService.productFindByIdFun(id);

    if (is_product) {
      return await this.productService.updateProductFun(updateProductDto, id);
    }

    return 'product_is_not_avilable';
  }

  @Get('/products/:id')
  async getProductFun(@Param('id') id: string) {
    const data = await this.productService.productFindByIdFun(id);
    return {
      data: data,
    };
  }

  @Get('/products')
  async findAllProductFun() {
    return await this.productService.findAllProductFun();
  }

  @Delete('/products/:id')
  async deleteProductFun(@Param('id') id: string) {
    return await this.productService.deleteProductFun(id);
  }
}
