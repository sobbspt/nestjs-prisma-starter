import { OrderDirection } from './order-direction';
import { ApiProperty } from '@nestjs/swagger';

export abstract class Order {
  @ApiProperty({ description: 'Order direction asc/desc' })
  direction: OrderDirection;
}
