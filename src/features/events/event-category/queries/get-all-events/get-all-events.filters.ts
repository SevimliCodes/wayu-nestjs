import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { EventStatus, EventType } from '@/features/events/events/event.entity';

export class GetAllEventsFilters {
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
  @ApiPropertyOptional({ enum: EventType })
  eventType?: EventType;

  @IsEnum(EventStatus)
  @IsOptional()
  @ApiPropertyOptional({ enum: EventStatus })
  status?: EventStatus;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  @ApiPropertyOptional()
  countryCode?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiPropertyOptional()
  search?: string;
}
