import { Command } from '@nestjs/cqrs';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { EventStatus, EventType } from '@/features/events/events/event.entity';
import { UpdateEventResponse } from './update-event.response';

export class UpdateEventCommand extends Command<UpdateEventResponse> {
  id!: number;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiPropertyOptional({ maxLength: 300 })
  titleUz?: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiPropertyOptional({ maxLength: 300 })
  titleRu?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  descriptionUz?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  descriptionRu?: string;

  @IsString()
  @IsOptional()
  @MaxLength(256)
  @ApiPropertyOptional({ maxLength: 256 })
  coverUrl?: string;

  @IsEnum(EventType)
  @IsOptional()
  @ApiPropertyOptional({ enum: EventType })
  eventType?: EventType;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  @ApiPropertyOptional({ maxLength: 5 })
  countryCode?: string;

  @IsString()
  @IsOptional()
  @MaxLength(80)
  @ApiPropertyOptional({ maxLength: 80 })
  city?: string;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  startsAt?: string;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  endsAt?: string;

  @IsEnum(EventStatus)
  @IsOptional()
  @ApiPropertyOptional({ enum: EventStatus })
  status?: EventStatus;
}
