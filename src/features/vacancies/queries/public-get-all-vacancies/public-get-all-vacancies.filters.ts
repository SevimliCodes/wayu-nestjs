import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { VacancySchedule } from '../../vacancy.entity';

export class PublicGetAllVacanciesFilters {
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

  @IsEnum(VacancySchedule)
  @IsOptional()
  @ApiPropertyOptional({ enum: VacancySchedule })
  schedule?: VacancySchedule;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  @ApiPropertyOptional({ example: 'UZ'})
  countryCode?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiPropertyOptional()
  search?: string;
}
