import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GetAllCountriesItemResponse {
    @Expose()
    @ApiProperty()
    id!: number;

    @Expose()
    @ApiProperty()
    title!: string;

    @Expose()
    @ApiProperty()
    flag!: string;
}

export class GetAllCountriesResponse {
    @ApiProperty({ type: [GetAllCountriesItemResponse] })
    data!: GetAllCountriesItemResponse[];

    @ApiProperty()
    total!: number;

    @ApiProperty()
    page!: number;

    @ApiProperty()
    size!: number;
}