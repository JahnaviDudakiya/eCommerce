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
import { OrderService } from './orderService';
import { CreateOrderDto } from './dto/createOrder.dto';

@ApiTags('Order')
@Controller({ path: '/api', version: '1' })
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/orders')
  async createOrderFun(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.createOrderFun(createOrderDto);
  }

  @Get('/orders')
  async findAllOrderFun() {
    return await this.orderService.findAllOrderFun();
  }
}
