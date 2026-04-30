import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { VacancySchedule } from '../../vacancy.entity';

export class PublicGetAllVacanciesItemResponse {
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
}

export class PublicGetAllVacanciesResponse {
  @ApiProperty({ type: [PublicGetAllVacanciesItemResponse] })
  data!: PublicGetAllVacanciesItemResponse[];

  @ApiProperty()
  total!: number;

  @ApiProperty()
  page!: number;

  @ApiProperty()
  size!: number;
}
