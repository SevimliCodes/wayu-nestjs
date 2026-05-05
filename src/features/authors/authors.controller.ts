import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { AdminGuard }   from '../common/guards/admin.guard';

import { CreateAuthorDto, UpdateAuthorDto, AuthorResponseDto } from './dto/author.dto';
import { CreateAuthorHandler } from './commands/create/create-author.handler';
import { UpdateAuthorHandler } from './commands/update/update-author.handler';
import { DeleteAuthorHandler } from './commands/delete/delete-author.handler';
import { GetAllAuthorsHandler } from './queries/get-all/get-all-authors.handler';
import { GetAuthorByIdHandler } from './queries/get-by-id/get-author-by-id.handler';
import { GetAllAuthorsFilters } from './queries/get-all/get-all-authors.filters';


@ApiTags('Public / Authors')
@Controller('api/public/authors')
export class PublicAuthorsController {
  constructor(
    private readonly getAllHandler:   GetAllAuthorsHandler,
    private readonly getByIdHandler: GetAuthorByIdHandler,
  ) {}

  @Get()
  @ApiOperation({})
  @ApiOkResponse({ type: AuthorResponseDto, isArray: true })
  getAll(@Query() filters: GetAllAuthorsFilters) {
    return this.getAllHandler.execute(filters);
  }

  @Get(':id')
  @ApiOperation({})
  @ApiOkResponse({ type: AuthorResponseDto })
  @ApiNotFoundResponse()
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.getByIdHandler.execute(id);
  }
}

@ApiTags('Admin / Authors')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('api/admin/authors')
export class AdminAuthorsController {
  constructor(
    private readonly getAllHandler:   GetAllAuthorsHandler,
    private readonly getByIdHandler: GetAuthorByIdHandler,
    private readonly createHandler:  CreateAuthorHandler,
    private readonly updateHandler:  UpdateAuthorHandler,
    private readonly deleteHandler:  DeleteAuthorHandler,
  ) {}

  @Get()
  @ApiOperation({})
  @ApiOkResponse({ type: AuthorResponseDto, isArray: true })
  getAll(@Query() filters: GetAllAuthorsFilters) {
    return this.getAllHandler.execute(filters);
  }

  @Get(':id')
  @ApiOperation({})
  @ApiOkResponse({ type: AuthorResponseDto })
  @ApiNotFoundResponse()
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.getByIdHandler.execute(id);
  }

  @Post()
  @ApiOperation({})
  @ApiCreatedResponse({ type: AuthorResponseDto })
  create(@Body() dto: CreateAuthorDto) {
    return this.createHandler.execute({ fullName: dto.fullName });
  }

  @Put(':id')
  @ApiOperation({})
  @ApiOkResponse({ type: AuthorResponseDto })
  @ApiNotFoundResponse()
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAuthorDto) {
    return this.updateHandler.execute({ id, fullName: dto.fullName });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({})
  @ApiNoContentResponse()
  @ApiNotFoundResponse()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteHandler.execute(id);
  }
}
