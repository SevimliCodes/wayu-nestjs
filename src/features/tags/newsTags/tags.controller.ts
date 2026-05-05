import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTagCommand } from './commands/create-tag/create-tag.command';
import { CreateTagHandler } from './commands/create-tag/create-tag.handler';
import { UpdateTagCommand } from './commands/update-tag/update-tag.command';
import { UpdateTagHandler } from './commands/update-tag/update-tag.handler';
import { DeleteTagHandler } from './commands/delete-tag/delete-tag.handler';
import { GetAllTagsFilters } from './queries/get-all-tags/get-all-tags.filters';
import { GetAllTagsHandler } from './queries/get-all-tags/get-all-tags.handler';
import { GetTagByIdHandler } from './queries/get-tag-by-id/get-tag-by-id.handler';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { AdminGuard }   from '../../common/guards/admin.guard';

@ApiTags('Public / Tags')
@Controller('api/public/tags')
export class PublicTagsController {
  constructor(private getAllH: GetAllTagsHandler, private getByIdH: GetTagByIdHandler) {}
  @Get()
  @ApiOperation({})
  @ApiOkResponse() getAll(@Query() f: GetAllTagsFilters) {
    return this.getAllH.execute(f); }
  @Get(':id')
  @ApiOperation({})
  @ApiOkResponse()
  @ApiNotFoundResponse() getById(@Param('id', ParseIntPipe) id: number) {
    return this.getByIdH.execute(id);
  }
}

@ApiTags('Admin / Tags')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('api/admin/tags')
export class AdminTagsController {
  constructor(
    private createH: CreateTagHandler, private updateH: UpdateTagHandler,
    private deleteH: DeleteTagHandler, private getAllH: GetAllTagsHandler,
    private getByIdH: GetTagByIdHandler,
  ) {}
  @Get()
  @ApiOperation({})
  @ApiOkResponse() getAll(@Query() f: GetAllTagsFilters) { return this.getAllH.execute(f); }

  @Get(':id')
  @ApiOperation({})
  @ApiOkResponse()
  @ApiNotFoundResponse() getById(@Param('id', ParseIntPipe) id: number) { return this.getByIdH.execute(id); }

  @Post()
  @ApiOperation({})
  @ApiCreatedResponse() create(@Body() cmd: CreateTagCommand) { return this.createH.execute(cmd); }

  @Put(':id') @ApiOperation({})
  @ApiOkResponse() @ApiNotFoundResponse() update(@Param('id', ParseIntPipe) id: number, @Body() cmd: UpdateTagCommand) { return this.updateH.execute(id, cmd); }

  @Delete(':id') @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({})
  @ApiNoContentResponse()
  @ApiNotFoundResponse() delete(@Param('id', ParseIntPipe) id: number) { return this.deleteH.execute(id); }
}
