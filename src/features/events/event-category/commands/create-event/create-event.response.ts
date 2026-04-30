import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { EventStatus, EventType } from '@/features/events/events/event.entity';

export class CreateEventResponse {
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
  @ApiProperty({ enum: EventType })
  eventType!: EventType;

  @Expose()
  @ApiProperty({ enum: EventStatus })
  status!: EventStatus;

  @Expose()
  @ApiProperty()
  startsAt!: string;

  @Expose()
  @ApiPropertyOptional()
  endsAt?: string;

  @Expose()
  @ApiProperty()
  created!: string;
}
