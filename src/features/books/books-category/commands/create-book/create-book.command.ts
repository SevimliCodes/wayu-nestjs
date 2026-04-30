import { Command } from '@nestjs/cqrs';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { CreateBookResponse } from './create-book.response';

export class CreateBookCommand extends Command<CreateBookResponse> {
  @IsInt()
  @ApiProperty()
  categoryId!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  @ApiProperty({ maxLength: 128 })
  titleUz!: string;

  @IsString()
  @IsOptional()
  @MaxLength(128)
  @ApiPropertyOptional({ maxLength: 128 })
  titleRu?: string;

  @IsString()
  @IsOptional()
  @MaxLength(128)
  @ApiPropertyOptional({ maxLength: 128 })
  author?: string;

  @IsString()
  @IsOptional()
  @MaxLength(256)
  @ApiPropertyOptional({ maxLength: 256 })
  coverUrl?: string;

  @IsString()
  @IsOptional()
  @MaxLength(256)
  @ApiPropertyOptional({ maxLength: 256 })
  fileUrl?: string;

  @IsString()
  @IsIn(['uz', 'ru', 'en'])
  @ApiProperty({ enum: ['uz', 'ru', 'en'] })
  lang!: string;
  title: string;
}
