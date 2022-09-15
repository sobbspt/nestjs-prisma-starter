import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';

@Module({
  imports: [],
  providers: [PostsController],
  controllers: [PostsController],
})
export class PostsModule {}
