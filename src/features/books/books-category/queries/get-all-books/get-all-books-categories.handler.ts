import {plainToInstance} from "class-transformer";
import type {IQueryHandler} from "@nestjs/cqrs";
import {QueryHandler} from "@nestjs/cqrs";
import {GetAllBooksCategoriesQuery} from "@/features/books/books-category/queries/get-all-books/get-all-books-categories.query";
import {BooksCategory} from "@/features/books/books-category/book-category.entity";
import {GetAllBooksItemResponse} from "@/features/books/books-category/queries/get-all-books/get-all-books.response";


@QueryHandler(GetAllBooksCategoriesQuery)
export class GetAllBooksCategoriesHandler implements IQueryHandler<GetAllBooksCategoriesQuery> {
  async execute(query: GetAllBooksCategoriesQuery): Promise<GetAllBooksItemResponse[]> {
    const take = query.filters.size ?? 10;
    const currentPage = query.filters.page ?? 1;
    const skip = (currentPage - 1) * take;

    const categories = await BooksCategory.find({skip: skip, take: take});
    return plainToInstance(GetAllBooksItemResponse, categories, {excludeExtraneousValues: true});
  }
}