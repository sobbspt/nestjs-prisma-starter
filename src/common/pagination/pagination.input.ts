import { ApiProperty } from '@nestjs/swagger';

export class PaginationInput {
  @ApiProperty({ required: false })
  skip?: number;

  @ApiProperty({ required: false })
  after?: string;

  @ApiProperty({ required: false })
  before?: string;

  @ApiProperty({ required: false })
  first?: number;

  @ApiProperty({ required: false })
  last?: number;
}
