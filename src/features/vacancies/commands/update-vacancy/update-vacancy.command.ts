import { Command } from '@nestjs/cqrs';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { VacancySchedule, VacancyStatus } from '../../vacancy.entity';
import { UpdateVacancyResponse } from './update-vacancy.response';

export class UpdateVacancyCommand extends Command<UpdateVacancyResponse> {
  id!: number;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  @ApiPropertyOptional({ maxLength: 200 })
  titleUz?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  @ApiPropertyOptional({ maxLength: 200 })
  titleRu?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  descriptionUz?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  descriptionRu?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiPropertyOptional({ maxLength: 100 })
  locationUz?: string;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  @ApiPropertyOptional({ maxLength: 5 })
  countryCode?: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  @ApiPropertyOptional()
  salaryMin?: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @ApiPropertyOptional()
  salaryMax?: number;

  @IsString()
  @IsOptional()
  @MaxLength(60)
  @ApiPropertyOptional({ maxLength: 60 })
  salaryText?: string;

  @IsEnum(VacancySchedule)
  @IsOptional()
  @ApiPropertyOptional({ enum: VacancySchedule })
  schedule?: VacancySchedule;

  @IsEnum(VacancyStatus)
  @IsOptional()
  @ApiPropertyOptional({ enum: VacancyStatus })
  status?: VacancyStatus;
}
