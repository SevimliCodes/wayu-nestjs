import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PublicGetAllBooksItemResponse {
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
  @ApiProperty()
  lang!: string;

  @Expose()
  @ApiProperty()
  categoryId!: number;

  @Expose()
  @ApiProperty()
  downloadCount!: number;
}

export class PublicGetAllBooksResponse {
  @ApiProperty({ type: [PublicGetAllBooksItemResponse] })
  data!: PublicGetAllBooksItemResponse[];

  @ApiProperty()
  total!: number;

  @ApiProperty()
  page!: number;

  @ApiProperty()
  size!: number;
}
