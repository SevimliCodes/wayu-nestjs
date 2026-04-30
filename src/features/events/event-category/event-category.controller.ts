import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {ApiCreatedResponse, ApiOkResponse} from "@nestjs/swagger";
import {CreateEventResponse} from "@/features/events/event-category/commands/create-event/create-event.response";
import {GetAllEventsItemResponse} from "@/features/events/event-category/queries/get-all-events/get-all-events.response";
import {PublicGetAllEventsFilters} from "@/features/events/event-category/queries/public-get-all-events/public-get-all-events.filters";
import {GetAllEventsCategoriesQuery} from "@/features/events/event-category/queries/get-all-events/get-all-events-categories.query";
import {CreateEventCommand} from "@/features/events/event-category/commands/create-event/create-event.command";

@Controller('admin/event-category')
export class EventCategoryController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queriesBus: QueryBus,
    ) {
    }

    @Get()
    @ApiOkResponse({type: [GetAllEventsItemResponse]})
    async getAllEventsCategories(@Query() filters: PublicGetAllEventsFilters) {
        return await this.queriesBus.execute(new GetAllEventsCategoriesQuery(filters));
    }

    @Post()
    @ApiCreatedResponse({type: CreateEventResponse})
    async createEventsCategory(@Body() command: CreateEventCommand) {
        return await this.commandBus.execute(command);
    }
}