import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetAllBooksFilters {
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

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @ApiPropertyOptional()
  categoryId?: number;

  @IsString()
  @IsIn(['uz', 'ru', 'en'])
  @IsOptional()
  @ApiPropertyOptional({ enum: ['uz', 'ru', 'en'] })
  lang?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiPropertyOptional()
  search?: string;
}
