import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetAllAuthorsFilters {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  search?: string;
}
