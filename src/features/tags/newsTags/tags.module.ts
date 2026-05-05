import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicTagsController, AdminTagsController } from './tags.controller';
import { CreateTagHandler } from './commands/create-tag/create-tag.handler';
import { UpdateTagHandler } from './commands/update-tag/update-tag.handler';
import { DeleteTagHandler } from './commands/delete-tag/delete-tag.handler';
import { GetAllTagsHandler } from './queries/get-all-tags/get-all-tags.handler';
import { GetTagByIdHandler } from './queries/get-tag-by-id/get-tag-by-id.handler';
import {Tag} from "@/features/tags/tag.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [PublicTagsController, AdminTagsController],
  providers: [CreateTagHandler, UpdateTagHandler, DeleteTagHandler, GetAllTagsHandler, GetTagByIdHandler],
  exports: [TypeOrmModule],
})
export class TagsModule {}
