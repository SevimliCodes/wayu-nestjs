import { Command } from '@nestjs/cqrs';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreateCountryResponse } from './create-country.response';

export class CreateCountryCommand extends Command<CreateCountryResponse> {
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @ApiProperty({ maxLength: 64 })
    title!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty({ maxLength: 128 })
    flag!: string;
}