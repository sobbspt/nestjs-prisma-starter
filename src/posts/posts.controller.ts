import { PrismaService } from 'nestjs-prisma';
import {
  Body,
  Controller,
  Get,
  Param,
  Post as PostMapper,
  Query,
} from '@nestjs/common';
import { PaginationInput } from 'src/common/pagination/pagination.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from 'src/users/models/user.model';
import { PostOrder } from './dto/post-order.input';
import { CreatePostInput } from './dto/createPost.input';
import { Public } from '../common/decorators/public.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PostQueryInput } from './dto/post-query.input';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private prisma: PrismaService) {}

  @PostMapper()
  @ApiBearerAuth()
  async createPost(@UserEntity() user: User, @Body() data: CreatePostInput) {
    return this.prisma.post.create({
      data: {
        published: true,
        title: data.title,
        content: data.content,
        authorId: user.id,
      },
    });
  }

  @Get()
  @Public()
  async publishedPosts(
    @Query() { after, before, first, last }: PaginationInput,
    @Query() { query }: PostQueryInput,
    @Query() orderBy: PostOrder
  ) {
    return this.prisma.post.findMany({
      where: {
        published: true,
      },
    });
  }

  @Get('users/:userId') // TODO: find a better path
  @Public()
  userPosts(@Param('userId') userId: string) {
    return this.prisma.user
      .findUnique({ where: { id: userId } })
      .posts({ where: { published: true } });

    // or
    // return this.prisma.posts.findMany({
    //   where: {
    //     published: true,
    //     author: { id: id.userId }
    //   }
    // });
  }

  @Get(':postId')
  @Public()
  async post(@Param('postId') postId: string) {
    return this.prisma.post.findUnique({ where: { id: postId } });
  }

  @Get(':postId/author')
  @Public()
  async author(@Param('postId') postId: string) {
    return this.prisma.post.findUnique({ where: { id: postId } }).author();
  }
}
