import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class productInfo {
  @ApiProperty({
    type: String,
  })
  @Type(() => String)
  productId: string;

  @ApiProperty({
    type: Number,
  })
  @Type(() => Number)
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Type(() => String)
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ type: productInfo, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => productInfo)
  products: productInfo[];

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Type(() => Number)
  @IsNotEmpty()
  totalPrice: number;
}
