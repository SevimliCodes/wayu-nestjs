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

import { CreateBranchDto, UpdateBranchDto, BranchResponseDto } from './dto/branch.dto';
import { CreateBranchHandler }     from './commands/create-branch/create-branch.handler';
import { UpdateBranchHandler }     from './commands/update-branch/update-branch.handler';
import { DeleteBranchHandler }     from './commands/delete-branch/delete-branch.handler';
import { GetAllBranchesHandler }   from './queries/get-all-branches/get-all-branches.handler';
import { GetBranchByIdHandler }    from './queries/get-branch-by-id/get-branch-by-id.handler';
import { GetAllBranchesFilters }   from './queries/get-all-branches/get-all-branches.filters';


@ApiTags('Public / Branches')
@Controller('api/public/branches')
export class PublicBranchesController {
  constructor(
    private readonly getAllHandler:   GetAllBranchesHandler,
    private readonly getByIdHandler: GetBranchByIdHandler,
  ) {}

  @Get()
  @ApiOperation({})
  @ApiOkResponse({ type: BranchResponseDto, isArray: true })
  getAll(@Query() filters: GetAllBranchesFilters) {
    return this.getAllHandler.execute(filters);
  }

  @Get(':id')
  @ApiOperation({})
  @ApiOkResponse({ type: BranchResponseDto })
  @ApiNotFoundResponse()
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.getByIdHandler.execute(id);
  }
}


@ApiTags('Admin / Branches')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('api/admin/branches')
export class AdminBranchesController {
  constructor(
    private readonly getAllHandler:   GetAllBranchesHandler,
    private readonly getByIdHandler: GetBranchByIdHandler,
    private readonly createHandler:  CreateBranchHandler,
    private readonly updateHandler:  UpdateBranchHandler,
    private readonly deleteHandler:  DeleteBranchHandler,
  ) {}

  @Get()
  @ApiOperation({})
  @ApiOkResponse({ type: BranchResponseDto, isArray: true })
  getAll(@Query() filters: GetAllBranchesFilters) {
    return this.getAllHandler.execute(filters);
  }

  @Get(':id')
  @ApiOperation({})
  @ApiOkResponse({ type: BranchResponseDto })
  @ApiNotFoundResponse()
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.getByIdHandler.execute(id);
  }

  @Post()
  @ApiOperation({})
  @ApiCreatedResponse({ type: BranchResponseDto })
  create(@Body() dto: CreateBranchDto) {
    return this.createHandler.execute({
      countryId:        dto.countryId,
      representativeId: dto.representativeId,
      city:             dto.city,
      latitude:         dto.latitude,
      longitude:        dto.longitude,
      phoneNumber:      dto.phoneNumber,
    });
  }

  @Put(':id')
  @ApiOperation({})
  @ApiOkResponse({ type: BranchResponseDto })
  @ApiNotFoundResponse()
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBranchDto) {
    return this.updateHandler.execute({
      id,
      countryId:        dto.countryId,
      representativeId: dto.representativeId,
      city:             dto.city,
      latitude:         dto.latitude,
      longitude:        dto.longitude,
      phoneNumber:      dto.phoneNumber,
    });
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
