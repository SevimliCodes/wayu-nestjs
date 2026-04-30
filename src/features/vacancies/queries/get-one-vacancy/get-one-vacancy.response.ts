import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { VacancySchedule, VacancyStatus } from '../../vacancy.entity';

export class GetOneVacancyResponse {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  titleUz!: string;

  @Expose()
  @ApiPropertyOptional()
  titleRu?: string;

  @Expose()
  @ApiPropertyOptional()
  descriptionUz?: string;

  @Expose()
  @ApiPropertyOptional()
  descriptionRu?: string;

  @Expose()
  @ApiPropertyOptional()
  locationUz?: string;

  @Expose()
  @ApiPropertyOptional()
  countryCode?: string;

  @Expose()
  @ApiPropertyOptional()
  salaryMin?: number;

  @Expose()
  @ApiPropertyOptional()
  salaryMax?: number;

  @Expose()
  @ApiPropertyOptional()
  salaryText?: string;

  @Expose()
  @ApiProperty({ enum: VacancySchedule })
  schedule!: VacancySchedule;

  @Expose()
  @ApiProperty({ enum: VacancyStatus })
  status!: VacancyStatus;

  @Expose()
  @ApiProperty()
  created!: string;

  @Expose()
  @ApiPropertyOptional()
  updated?: string;
}
