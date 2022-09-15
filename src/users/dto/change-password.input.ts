import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordInput {
  @ApiProperty({ description: 'Old password' })
  @IsNotEmpty()
  @MinLength(8)
  oldPassword: string;

  @ApiProperty({ description: 'New password' })
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;
}
