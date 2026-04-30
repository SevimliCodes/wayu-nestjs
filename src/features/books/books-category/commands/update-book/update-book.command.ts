import { Command } from '@nestjs/cqrs';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UpdateBookResponse } from './update-book.response';

export class UpdateBookCommand extends Command<UpdateBookResponse> {
  id!: number;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional()
  categoryId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(128)
  @ApiPropertyOptional({ maxLength: 128 })
  titleUz?: string;

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
  @IsOptional()
  @ApiPropertyOptional({ enum: ['uz', 'ru', 'en'] })
  lang?: string;
}
