import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class GetAllBranchesFilters {
  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  countryId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  city?: string;
}
