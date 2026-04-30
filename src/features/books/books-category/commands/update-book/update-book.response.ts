import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UpdateBookResponse {
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
  @ApiPropertyOptional()
  coverUrl?: string;

  @Expose()
  @ApiPropertyOptional()
  fileUrl?: string;

  @Expose()
  @ApiProperty()
  lang!: string;

  @Expose()
  @ApiProperty()
  categoryId!: number;

  @Expose()
  @ApiProperty()
  downloadCount!: number;

  @Expose()
  @ApiProperty()
  updated!: string;
}
