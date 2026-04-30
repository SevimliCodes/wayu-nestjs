import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CreateEventCommand} from "@/features/events/event-category/commands/create-event/create-event.command";
import {CreateEventResponse} from "@/features/events/event-category/commands/create-event/create-event.response";
import {EventCategory} from "@/features/events/event-category/event-category.entity";
import {ILike} from "typeorm";
import {BadRequestException} from "@nestjs/common";
import {plainToInstance} from "class-transformer";

@CommandHandler(CreateEventCommand)
export class CreateEventHandler implements ICommandHandler<CreateEventCommand> {
    async execute(command: CreateEventCommand): Promise<CreateEventResponse> {
        const alreadyExists = await EventCategory.existsBy({title: ILike(command.titleUz)});
        if (alreadyExists)
            throw new BadRequestException("Title is already in use");

        const newEventCategory = EventCategory.create({title: command.titleUz} as EventCategory);
        await EventCategory.save(newEventCategory);

        return plainToInstance(CreateEventResponse, newEventCategory, {excludeExtraneousValues: true});
    }
}