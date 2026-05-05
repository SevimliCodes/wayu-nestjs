import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Country } from '@/features/countries/country.entity';
import { UpdateCountryCommand } from './update-country.command';
import { UpdateCountryResponse } from './update-country.response';

@CommandHandler(UpdateCountryCommand)
export class UpdateCountryHandler implements ICommandHandler<UpdateCountryCommand> {
    async execute(command: UpdateCountryCommand): Promise<UpdateCountryResponse> {
        const country = await Country.findOneBy({ id: command.id });
        if (!country) throw new NotFoundException(`Country #${command.id} not found`);

        if (command.title !== undefined) country.title = command.title;
        if (command.flag !== undefined) country.flag = command.flag;
        await Country.save(country);

        return plainToInstance(UpdateCountryResponse, country, { excludeExtraneousValues: true });
    }
}