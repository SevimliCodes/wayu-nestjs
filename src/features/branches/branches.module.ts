import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchEntity }         from './branch.entity';
import { Country} from "@/features/countries/country.entity";
import { Representative } from '../representatives/representative.entity';

import { PublicBranchesController } from './branches.controller';
import { AdminBranchesController }  from './branches.controller';

import { CreateBranchHandler }   from './commands/create-branch/create-branch.handler';
import { UpdateBranchHandler }   from './commands/update-branch/update-branch.handler';
import { DeleteBranchHandler }   from './commands/delete-branch/delete-branch.handler';
import { GetAllBranchesHandler } from './queries/get-all-branches/get-all-branches.handler';
import { GetBranchByIdHandler }  from './queries/get-branch-by-id/get-branch-by-id.handler';

@Module({
  imports: [

    TypeOrmModule.forFeature([BranchEntity, Country, Representative]),
  ],
  controllers: [
    PublicBranchesController,
    AdminBranchesController,
  ],
  providers: [
    CreateBranchHandler,
    UpdateBranchHandler,
    DeleteBranchHandler,
    GetAllBranchesHandler,
    GetBranchByIdHandler,
  ],
})
export class BranchesModule {}
