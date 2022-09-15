import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { User } from '../users/models/user.model';
import { Public } from '../common/decorators/public.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('signup')
  async signup(@Body() data: SignupInput) {
    data.email = data.email.toLowerCase();
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('login')
  @Public()
  async login(@Body() { email, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.auth.login(
      email.toLowerCase(),
      password
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('refresh')
  @Public()
  async refreshToken(@Body() refreshTokenInput: RefreshTokenInput) {
    return this.auth.refreshToken(refreshTokenInput.token);
  }

  @Get('me')
  @ApiBearerAuth()
  user(@UserEntity() user: User) {
    return user;
  }
}
