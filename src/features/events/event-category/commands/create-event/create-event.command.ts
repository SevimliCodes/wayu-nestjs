import { Command } from '@nestjs/cqrs';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { EventStatus, EventType } from '@/features/events/events/event.entity';
import { CreateEventResponse } from './create-event.response';

export class CreateEventCommand extends Command<CreateEventResponse> {
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ maxLength: 300 })
  titleUz!: string;

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
  @ApiProperty({ enum: EventType })
  eventType!: EventType;

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
  @ApiProperty()
  startsAt!: string;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  endsAt?: string;

  @IsEnum(EventStatus)
  @IsOptional()
  @ApiPropertyOptional({ enum: EventStatus })
  status?: EventStatus;
}
