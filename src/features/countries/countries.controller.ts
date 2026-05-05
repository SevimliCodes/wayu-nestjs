import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { CreateCountryCommand} from "@/features/countries/commands/create-country.command";
import { CreateCountryResponse} from "@/features/countries/commands/create-country.response";
import { UpdateCountryCommand} from "@/features/countries/commands/update-country.command";
import { UpdateCountryResponse} from "@/features/countries/commands/update-country.response";
import { DeleteCountryCommand} from "@/features/countries/commands/delete-country.commands";
import { GetAllCountriesQuery} from "@/features/countries/queries/get-all-countries.query";
import { GetAllCountriesFilters} from "@/features/countries/queries/get-all-countries.filters";
import { GetAllCountriesResponse} from "@/features/countries/queries/get-all-countries.response";
import { GetOneCountryResponse} from "@/features/countries/queries/get-one-countries.response";
import { NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Country } from './country.entity';

@ApiTags('admin')
@Controller('admin/countries')
export class CountriesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Get()
    @ApiOkResponse({ type: GetAllCountriesResponse })
    async getAll(@Query() filters: GetAllCountriesFilters) {
        return this.queryBus.execute(new GetAllCountriesQuery(filters));
    }

    @Get(':id')
    @ApiOkResponse({ type: GetOneCountryResponse })
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const country = await Country.findOneBy({ id });
        if (!country) throw new NotFoundException(`Country #${id} not found`);
        return plainToInstance(GetOneCountryResponse, country, { excludeExtraneousValues: true });
    }

    @Post()
    @ApiCreatedResponse({ type: CreateCountryResponse })
    async create(@Body() command: CreateCountryCommand) {
        return this.commandBus.execute(command);
    }

    @Patch(':id')
    @ApiOkResponse({ type: UpdateCountryResponse })
    async update(@Param('id', ParseIntPipe) id: number, @Body() command: UpdateCountryCommand) {
        command.id = id;
        return this.commandBus.execute(command);
    }

    @Delete(':id')
    @ApiNoContentResponse()
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.commandBus.execute(new DeleteCountryCommand(id));
    }
}


@ApiTags('public')
@Controller('public/countries')
export class PublicCountriesController {
    constructor(private readonly queryBus: QueryBus) {}

    @Get()
    @ApiOkResponse({ type: GetAllCountriesResponse })
    async getAll(@Query() filters: GetAllCountriesFilters) {
        return this.queryBus.execute(new GetAllCountriesQuery(filters));
    }

    @Get(':id')
    @ApiOkResponse({ type: GetOneCountryResponse })
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const country = await Country.findOneBy({ id });
        if (!country) throw new NotFoundException(`Country #${id} not found`);
        return plainToInstance(GetOneCountryResponse, country, { excludeExtraneousValues: true });
    }
}