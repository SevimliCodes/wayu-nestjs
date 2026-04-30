import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { EventType } from '@/features/events/events/event.entity';

export class PublicGetAllEventsFilters {
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

  @IsEnum(EventType)
  @IsOptional()
  @ApiPropertyOptional({ enum: EventType, description: 'Tadbir turi' })
  eventType?: EventType;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  @ApiPropertyOptional({ example: 'DE', description: 'Mamlakat kodi' })
  countryCode?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiPropertyOptional({ description: 'Qidiruv' })
  search?: string;
}
