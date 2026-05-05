import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { ILike } from 'typeorm';
import { Country } from '@/features/countries/country.entity';
import { GetAllCountriesQuery } from './get-all-countries.query';
import { GetAllCountriesItemResponse, GetAllCountriesResponse } from './get-all-countries.response';

@QueryHandler(GetAllCountriesQuery)
export class GetAllCountriesHandler implements IQueryHandler<GetAllCountriesQuery> {
    async execute(query: GetAllCountriesQuery): Promise<GetAllCountriesResponse> {
        const take = query.filters.size ?? 20;
        const page = query.filters.page ?? 1;
        const skip = (page - 1) * take;

        const where: any = {};
        if (query.filters.search) where.title = ILike(`%${query.filters.search}%`);

        const [countries, total] = await Country.findAndCount({ where, skip, take });

        return {
            data: plainToInstance(GetAllCountriesItemResponse, countries, { excludeExtraneousValues: true }),
            total,
            page,
            size: take,
        };
    }
}