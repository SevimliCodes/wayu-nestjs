import {plainToInstance} from "class-transformer";
import type {IQueryHandler} from "@nestjs/cqrs";
import {QueryHandler} from "@nestjs/cqrs";
import {EventCategory} from "@/features/events/event-category/event-category.entity";
import {GetAllEventsCategoriesQuery} from "@/features/events/event-category/queries/get-all-events/get-all-events-categories.query";
import {GetAllEventsItemResponse} from "@/features/events/event-category/queries/get-all-events/get-all-events.response";


@QueryHandler(GetAllEventsCategoriesQuery)
export class GetAllEventsCategoriesHandler implements IQueryHandler< GetAllEventsCategoriesQuery> {
  async execute(query: GetAllEventsCategoriesQuery): Promise<GetAllEventsItemResponse[]> {
    const take = query.filters.size ?? 10;
    const currentPage = query.filters.page ?? 1;
    const skip = (currentPage - 1) * take;

    const categories = await EventCategory.find({skip: skip, take: take});
    return plainToInstance(GetAllEventsItemResponse, categories, {excludeExtraneousValues: true});
  }
}