import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { EventStatus, EventType } from '@/features/events/events/event.entity';

export class GetAllEventsItemResponse {
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
  coverUrl?: string;

  @Expose()
  @ApiProperty({ enum: EventType })
  eventType!: EventType;

  @Expose()
  @ApiPropertyOptional()
  countryCode?: string;

  @Expose()
  @ApiPropertyOptional()
  city?: string;

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

export class GetAllEventsResponse {
  @ApiProperty({ type: [GetAllEventsItemResponse] })
  data!: GetAllEventsItemResponse[];

  @ApiProperty()
  total!: number;

  @ApiProperty()
  page!: number;

  @ApiProperty()
  size!: number;
}
