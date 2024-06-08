import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Type(() => String)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @Type(() => String)
  description: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Type(() => String)
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Type(() => Number)
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Type(() => Number)
  @IsNotEmpty()
  quantity: number;
}
