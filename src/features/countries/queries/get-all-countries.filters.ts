import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetAllCountriesFilters {
    @IsInt()
    @IsOptional()
    @Min(1)
    @Transform(({ value }) => parseInt(value))
    @ApiPropertyOptional({ default: 1 })
    page?: number = 1;

    @IsInt()
    @IsOptional()
    @Min(1)
    @Transform(({ value }) => parseInt(value))
    @ApiPropertyOptional({ default: 20 })
    size?: number = 20;

    @IsString()
    @IsOptional()
    @MaxLength(100)
    @ApiPropertyOptional()
    search?: string;
}