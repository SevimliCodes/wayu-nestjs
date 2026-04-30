import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from './configs/typeorm.config';
import {NewsModule } from "./features/news/news.module";
import {CqrsModule} from "@nestjs/cqrs";
import {BooksModule} from "@/features/books/books.module";
import {EventsModule} from "@/features/events/events.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CqrsModule.forRoot(),
    NewsModule,
    BooksModule,
    EventsModule,
  ],
})
export class AppModule {
}