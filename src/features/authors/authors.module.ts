import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';

import { PublicAuthorsController } from './authors.controller';
import { AdminAuthorsController }  from './authors.controller';

import { CreateAuthorHandler } from './commands/create/create-author.handler';
import { UpdateAuthorHandler } from './commands/update/update-author.handler';
import { DeleteAuthorHandler } from './commands/delete/delete-author.handler';
import { GetAllAuthorsHandler } from './queries/get-all/get-all-authors.handler';
import { GetAuthorByIdHandler } from './queries/get-by-id/get-author-by-id.handler';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [PublicAuthorsController, AdminAuthorsController],
  providers: [
    CreateAuthorHandler,
    UpdateAuthorHandler,
    DeleteAuthorHandler,
    GetAllAuthorsHandler,
    GetAuthorByIdHandler,
  ],
  exports: [TypeOrmModule],
})
export class AuthorsModule {}
