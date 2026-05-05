import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
export class GetAllTagsFilters {
  @ApiPropertyOptional() @IsOptional() @IsString() search?: string;
}
