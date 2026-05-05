import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
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

import { SubmitApplicationDto, UpdateApplicationStatusDto, ApplicationResponseDto } from './dto/application.dto';
import { SubmitApplicationHandler }        from './commands/create/submit-application.handler';
import { UpdateApplicationStatusHandler }  from './commands/update-status/update-application-status.handler';
import { DeleteApplicationHandler }        from './commands/delete/delete-application.handler';
import { GetAllApplicationsHandler }       from './queries/get-all/get-all-applications.handler';
import { GetApplicationByIdHandler }       from './queries/get-by-id/get-application-by-id.handler';
import { GetAllApplicationsFilters }       from './queries/get-all/get-all-applications.filters';

@ApiTags('Public / Applications')
@Controller('api/public/applications')
export class PublicApplicationsController {
  constructor(private readonly submitHandler: SubmitApplicationHandler) {}

  @Post()
  @ApiOperation({})
  @ApiCreatedResponse({ type: ApplicationResponseDto })
  submit(@Body() dto: SubmitApplicationDto) {
    return this.submitHandler.execute({
      fullName:    dto.fullName,
      phoneNumber: dto.phoneNumber,
      email:       dto.email,
      vacancyId:   dto.vacancyId,
      resume:      dto.resume,
    });
  }
}

@ApiTags('Admin / Applications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('api/admin/applications')
export class AdminApplicationsController {
  constructor(
    private readonly getAllHandler:         GetAllApplicationsHandler,
    private readonly getByIdHandler:       GetApplicationByIdHandler,
    private readonly updateStatusHandler:  UpdateApplicationStatusHandler,
    private readonly deleteHandler:        DeleteApplicationHandler,
  ) {}

  @Get()
  @ApiOperation({})
  @ApiOkResponse({ type: ApplicationResponseDto, isArray: true })
  getAll(@Query() filters: GetAllApplicationsFilters) {
    return this.getAllHandler.execute(filters);
  }

  @Get(':id')
  @ApiOperation({})
  @ApiOkResponse({ type: ApplicationResponseDto })
  @ApiNotFoundResponse()
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.getByIdHandler.execute(id);
  }

  @Patch(':id/status')
  @ApiOperation({})
  @ApiOkResponse({ type: ApplicationResponseDto })
  @ApiNotFoundResponse()
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateApplicationStatusDto,
  ) {
    return this.updateStatusHandler.execute({ id, status: dto.status });
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
