import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsInt, IsString, MaxLength, MinLength } from 'class-validator';
import { ApplicationStatus } from '../application.entity';

export class SubmitApplicationDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(64)
  fullName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(16)
  phoneNumber: string;

  @ApiProperty()
  @IsEmail()
  @MaxLength(64)
  email: string;

  @ApiProperty()
  @IsInt()
  vacancyId: number;

  @ApiProperty()
  @IsString()
  @MaxLength(128)
  resume: string;
}


export class UpdateApplicationStatusDto {
  @ApiProperty({ enum: ApplicationStatus, example: ApplicationStatus.ACCEPTED })
  @IsEnum(ApplicationStatus)
  status: ApplicationStatus;
}


export class ApplicationResponseDto {
  @ApiProperty() id: number;
  @ApiProperty() fullName: string;
  @ApiProperty() phoneNumber: string;
  @ApiProperty() email: string;
  @ApiProperty() vacancyId: number;
  @ApiPropertyOptional() vacancyTitle?: string;
  @ApiProperty() resume: string;
  @ApiProperty({ enum: ApplicationStatus }) status: ApplicationStatus;
  @ApiProperty() createdAt: Date;
}
