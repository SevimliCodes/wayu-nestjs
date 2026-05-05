import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty()
  @IsInt()
  countryId: number;

  @ApiProperty()
  @IsInt()
  representativeId: number;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(64)
  city: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 7 })
  @Min(-90)
  @Max(90)
  latitude: number;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 7 })
  @Min(-180)
  @Max(180)
  longitude: number;

  @ApiProperty()
  @IsString()
  @MaxLength(16)
  phoneNumber: string;
}

export class UpdateBranchDto extends CreateBranchDto {}

export class BranchResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  countryId: number;

  @ApiPropertyOptional()
  countryTitle?: string;

  @ApiPropertyOptional()
  countryFlag?: string;

  @ApiProperty()
  representativeId: number;

  @ApiPropertyOptional()
  representativeFullName?: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  phoneNumber: string;
}
