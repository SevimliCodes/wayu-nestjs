import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateBookResponse {
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
  author?: string;

  @Expose()
  @ApiProperty()
  lang!: string;

  @Expose()
  @ApiProperty()
  categoryId!: number;

  @Expose()
  @ApiProperty()
  created!: string;
}
