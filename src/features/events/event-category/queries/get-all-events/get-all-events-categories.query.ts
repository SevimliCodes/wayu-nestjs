import {Query} from "@nestjs/cqrs";
import {GetAllEventsFilters} from "@/features/events/event-category/queries/get-all-events/get-all-events.filters";
import {GetAllEventsItemResponse} from "@/features/events/event-category/queries/get-all-events/get-all-events.response";

export class GetAllEventsCategoriesQuery extends Query<GetAllEventsItemResponse[]> {
  constructor(public readonly filters: GetAllEventsFilters) {
    super();
  }
}