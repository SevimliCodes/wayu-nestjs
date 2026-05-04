import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class PaginationDto {
    @ApiPropertyOptional({ default: 1, minimum: 1 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @ApiPropertyOptional({ default: 10, minimum: 1 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit?: number = 10;

    @ApiPropertyOptional({ description: 'Search term' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ description: 'Sort by field' })
    @IsOptional()
    @IsString()
    sortBy?: string;

    @ApiPropertyOptional({ enum: ['ASC', 'DESC'], default: 'DESC' })
    @IsOptional()
    @IsString()
    sortOrder?: 'ASC' | 'DESC' = 'DESC';

    get skip(): number {
        return ((this.page || 1) - 1) * (this.limit || 10);
    }
}

export class PaginatedResponseDto<T> {
    data: T[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };

    constructor(data: T[], total: number, page: number, limit: number) {
        this.data = data;
        this.meta = {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
}