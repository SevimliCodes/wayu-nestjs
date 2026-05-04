import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { typeOrmConfig } from './configs/typeorm.config';

import { NewsModule } from "./features/news/news.module";
import { EventsModule } from "./features/events/events.module";
import { BooksModule } from "./features/books/books.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CqrsModule.forRoot(),
    NewsModule,
    EventsModule,
    BooksModule,
  ],
})
export class AppModule {}