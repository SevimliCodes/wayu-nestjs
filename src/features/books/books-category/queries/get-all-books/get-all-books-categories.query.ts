import {Query} from "@nestjs/cqrs";
import {GetAllBooksItemResponse} from "@/features/books/books-category/queries/get-all-books/get-all-books.response";
import {GetAllBooksFilters} from "@/features/books/books-category/queries/get-all-books/get-all-books.filters";

export class GetAllBooksCategoriesQuery extends Query<GetAllBooksItemResponse[]> {
  constructor(public readonly filters: GetAllBooksFilters) {
    super();
  }
}