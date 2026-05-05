import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from './application.entity';


import { PublicApplicationsController } from './applications.controller';
import { AdminApplicationsController }  from './applications.controller';

import { SubmitApplicationHandler }       from './commands/create/submit-application.handler';
import { UpdateApplicationStatusHandler } from './commands/update-status/update-application-status.handler';
import { DeleteApplicationHandler }       from './commands/delete/delete-application.handler';
import { GetAllApplicationsHandler }      from './queries/get-all/get-all-applications.handler';
import { GetApplicationByIdHandler }      from './queries/get-by-id/get-application-by-id.handler';
import {Vacancy} from "@/features/vacancies/vacancy.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ApplicationEntity, Vacancy]),
  ],
  controllers: [
    PublicApplicationsController,
    AdminApplicationsController,
  ],
  providers: [
    SubmitApplicationHandler,
    UpdateApplicationStatusHandler,
    DeleteApplicationHandler,
    GetAllApplicationsHandler,
    GetApplicationByIdHandler,
  ],
})
export class ApplicationsModule {}
