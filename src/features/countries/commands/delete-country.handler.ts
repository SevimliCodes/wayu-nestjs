import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';
import { Country } from '@/features/countries/country.entity';
import { DeleteCountryCommand} from "@/features/countries/commands/delete-country.commands";

@CommandHandler(DeleteCountryCommand)
export class DeleteCountryHandler implements ICommandHandler<DeleteCountryCommand> {
    async execute(command: DeleteCountryCommand): Promise<void> {
        const country = await Country.findOneBy({ id: command.id });
        if (!country) throw new NotFoundException(`Country #${command.id} not found`);
        await Country.remove(country);
    }
}