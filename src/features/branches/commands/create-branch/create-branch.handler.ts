import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BranchEntity }         from '../../branch.entity';
import { Country} from "@/features/countries/country.entity";
import { Representative } from '../../../representatives/representative.entity';
import { CreateBranchCommand }  from './create-branch.command';

@Injectable()
export class CreateBranchHandler {
  constructor(
    @InjectRepository(BranchEntity)
    private readonly branchRepo: Repository<BranchEntity>,

    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,

    @InjectRepository(Representative)
    private readonly repRepo: Repository<Representative>,
  ) {}

  async execute(cmd: CreateBranchCommand): Promise<BranchEntity> {
    const country = await this.countryRepo.findOne({ where: { id: cmd.countryId } });
    if (!country) throw new NotFoundException(`ID=${cmd.countryId} not found`);

    const rep = await this.repRepo.findOne({ where: { id: cmd.representativeId } });
    if (!rep) throw new NotFoundException(`ID=${cmd.representativeId} not found`);

    const branch = this.branchRepo.create({
      countryId:        cmd.countryId,
      representativeId: cmd.representativeId,
      city:             cmd.city,
      latitude:         cmd.latitude,
      longitude:        cmd.longitude,
      phoneNumber:      cmd.phoneNumber,
    });

    return this.branchRepo.save(branch);
  }
}
