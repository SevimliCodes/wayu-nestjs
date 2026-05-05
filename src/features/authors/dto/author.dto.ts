import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(64)
  fullName: string;
}

export class UpdateAuthorDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(64)
  fullName: string;
}

export class AuthorResponseDto {
  @ApiProperty() id: number;
  @ApiProperty() fullName: string;
  @ApiPropertyOptional()
  booksCount?: number;
}
