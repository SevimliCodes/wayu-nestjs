import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { VacancySchedule, VacancyStatus } from '../../vacancy.entity';

export class CreateVacancyResponse {
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
  countryCode?: string;

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
