import { Command } from '@nestjs/cqrs';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { UpdateCountryResponse } from './update-country.response';

export class UpdateCountryCommand extends Command<UpdateCountryResponse> {
    id!: number;

    @IsString()
    @IsOptional()
    @MaxLength(64)
    @ApiPropertyOptional({ maxLength: 64 })
    title?: string;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @ApiPropertyOptional({ maxLength: 128 })
    flag?: string;
}