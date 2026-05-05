import { Module } from '@nestjs/common';
import { CountriesController, PublicCountriesController } from './countries.controller';
import { CreateCountryHandler} from "@/features/countries/commands/create-country.handler";
import { UpdateCountryHandler} from "@/features/countries/commands/update-country.handler";
import { DeleteCountryHandler} from "@/features/countries/commands/delete-country.handler";
import { GetAllCountriesHandler} from "@/features/countries/queries/get-all-countries.handler";

@Module({
    controllers: [CountriesController, PublicCountriesController],
    providers: [
        CreateCountryHandler,
        UpdateCountryHandler,
        DeleteCountryHandler,
        GetAllCountriesHandler,
    ],
})
export class CountriesModule {}