import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginInput {
  @ApiProperty({ description: 'Email Address', default: 'bart@simpson.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Email Address', default: 'secret42' })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
