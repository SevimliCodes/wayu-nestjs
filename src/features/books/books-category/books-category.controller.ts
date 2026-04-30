import {Query} from "@nestjs/common";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {Body, Controller, Get, Post} from "@nestjs/common";
import {PublicGetAllBooksFilters} from "@/features/books/books-category/queries/public-get-all-books/public-get-all-books.filters";
import {CreateBookCommand} from "@/features/books/books-category/commands/create-book/create-book.command";
import {ApiCreatedResponse, ApiOkResponse} from "@nestjs/swagger";
import {GetAllBooksResponse} from "@/features/books/books-category/queries/get-all-books/get-all-books.response";
import {CreateBookResponse} from "@/features/books/books-category/commands/create-book/create-book.response";
import {GetAllBooksCategoriesQuery} from "@/features/books/books-category/queries/get-all-books/get-all-books-categories.query";

@Controller('admin/books-category')
export class BooksCategoryController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queriesBus: QueryBus,
    ) {
    }


    @Get()
    @ApiOkResponse({type: [GetAllBooksResponse]})
    async PublicGetAllBooksCategories(@Query() filters: PublicGetAllBooksFilters) {
        return await this.queriesBus.execute(new GetAllBooksCategoriesQuery(filters));
    }

    @Post()
    @ApiCreatedResponse({type: CreateBookResponse})
    async createBookCategory(@Body() command: CreateBookCommand) {
        return await this.commandBus.execute(command);
    }
    }