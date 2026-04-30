import {EventCategoryController} from "@/features/events/event-category/event-category.controller";
import {GetAllEventsCategoriesHandler} from "@/features/events/event-category/queries/get-all-events/get-all-events-categories.handler";
import {CreateEventHandler} from "@/features/events/event-category/commands/create-event/create-event.handler";
import {Module} from "@nestjs/common";

@Module({
    controllers: [EventCategoryController],
    imports: [GetAllEventsCategoriesHandler, CreateEventHandler]
})
export class EventsModule {}