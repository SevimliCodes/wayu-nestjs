import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { VacancySchedule, VacancyStatus } from '../../vacancy.entity';

export class GetAllVacanciesItemResponse {
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

  @Expose()
  @ApiProperty({ enum: VacancyStatus })
  status!: VacancyStatus;

  @Expose()
  @ApiProperty()
  created!: string;
}

export class GetAllVacanciesResponse {
  @ApiProperty({ type: [GetAllVacanciesItemResponse] })
  data!: GetAllVacanciesItemResponse[];

  @ApiProperty()
  total!: number;

  @ApiProperty()
  page!: number;

  @ApiProperty()
  size!: number;
}
