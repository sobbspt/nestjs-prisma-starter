import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupInput {
  @ApiProperty({ description: 'Email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({ required: false, description: 'Firstname' })
  firstname?: string;

  @ApiProperty({ required: false, description: 'Lastname' })
  lastname?: string;
}
