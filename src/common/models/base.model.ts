import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseModel {
  @ApiProperty({
    description: 'Identifies the date and time when the object was created.',
  })
  id: string;

  createdAt: Date;

  @ApiProperty({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
