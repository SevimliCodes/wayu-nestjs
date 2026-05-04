import {ILike} from "typeorm";
import {BadRequestException} from "@nestjs/common";
import {plainToInstance} from "class-transformer";
import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CreateBookCommand} from "@/features/books/books-category/commands/create-book/create-book.command";
import {CreateBookResponse} from "@/features/books/books-category/commands/create-book/create-book.response";
import {BooksCategoryController} from "@/features/books/books-category/books-category.controller";
import {BooksCategory} from "@/features/books/books-category/book-category.entity";

@CommandHandler(CreateBookCommand)
export class CreateBooksCategoryHandler implements ICommandHandler<CreateBookCommand> {

  async execute(command: CreateBookCommand): Promise<CreateBookResponse> {
    const alreadyExists = await BooksCategory.existsBy({title: ILike(command.title)});
    if (alreadyExists)
      throw new BadRequestException("Title is already taken");

    const newBookCategory = BooksCategory.create({title: command.title} as BooksCategory);
    await BooksCategory.save(newBookCategory);

    return plainToInstance(CreateBookResponse, newBookCategory, {excludeExtraneousValues: true});
  }
}