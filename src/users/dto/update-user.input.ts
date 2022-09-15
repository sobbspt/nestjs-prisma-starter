import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserInput {
  @ApiProperty({ description: 'Firstname', required: false })
  firstname?: string;

  @ApiProperty({ description: 'Lastname', required: false })
  lastname?: string;
}
