import { PrismaService } from 'nestjs-prisma';
import { Body, Controller, Get, Put } from '@nestjs/common';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService
  ) {}

  @Get('me')
  @ApiBearerAuth()
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @Put()
  @ApiBearerAuth()
  async updateUser(
    @Body() newUserData: UpdateUserInput,
    @UserEntity() user: User
  ) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @Put('password')
  @ApiBearerAuth()
  async changePassword(
    @UserEntity() user: User,
    @Body() changePassword: ChangePasswordInput
  ) {
    return this.usersService.changePassword(
      user.id,
      user.password,
      changePassword
    );
  }

  @Get('posts')
  @ApiBearerAuth()
  posts(@UserEntity() author: User) {
    return this.prisma.user.findUnique({ where: { id: author.id } }).posts();
  }
}
