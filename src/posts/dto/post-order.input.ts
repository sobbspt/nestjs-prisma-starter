import { Order } from 'src/common/order/order';
import { ApiProperty } from '@nestjs/swagger';

export enum PostOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  published = 'published',
  title = 'title',
  content = 'content',
}

export class PostOrder extends Order {
  @ApiProperty({ description: 'Post sortable fields', enum: PostOrderField })
  field: PostOrderField;
}
