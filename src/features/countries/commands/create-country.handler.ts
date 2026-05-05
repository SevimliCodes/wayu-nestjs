import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { ILike } from 'typeorm';
import { Country } from '@/features/countries/country.entity';
import { CreateCountryCommand } from './create-country.command';
import { CreateCountryResponse } from './create-country.response';

@CommandHandler(CreateCountryCommand)
export class CreateCountryHandler implements ICommandHandler<CreateCountryCommand> {
    async execute(command: CreateCountryCommand): Promise<CreateCountryResponse> {
        const alreadyExists = await Country.existsBy({ title: ILike(command.title) });
        if (alreadyExists) throw new BadRequestException('Title is already taken');

        const country = Country.create({ title: command.title, flag: command.flag } as Country);
        await Country.save(country);

        return plainToInstance(CreateCountryResponse, country, { excludeExtraneousValues: true });
    }
}