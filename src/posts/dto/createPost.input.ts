import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostInput {
  @ApiProperty({ description: 'Content of the post' })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'Title of the post' })
  @IsNotEmpty()
  title: string;
}
