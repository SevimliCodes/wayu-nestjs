import {Module} from "@nestjs/common";
import {BooksCategoryController} from "@/features/books/books-category/books-category.controller";
import {GetAllBooksCategoriesHandler} from "@/features/books/books-category/queries/get-all-books/get-all-books-categories.handler";
import {CreateBooksCategoryHandler} from "@/features/books/books-category/commands/create-book/create-books-category.handler";

@Module({
    controllers: [BooksCategoryController],
    providers: [GetAllBooksCategoriesHandler, CreateBooksCategoryHandler],
})
export class BooksModule {}