import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BranchEntity }         from '../../branch.entity';
import { Country} from "@/features/countries/country.entity";
import { Representative } from '../../../representatives/representative.entity';
import { UpdateBranchCommand }  from './update-branch.command';

@Injectable()
export class UpdateBranchHandler {
  constructor(
    @InjectRepository(BranchEntity)
    private readonly branchRepo: Repository<BranchEntity>,

    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,

    @InjectRepository(Representative)
    private readonly repRepo: Repository<Representative>,
  ) {}

  async execute(cmd: UpdateBranchCommand): Promise<BranchEntity> {
    const branch = await this.branchRepo.findOne({
      where: { id: cmd.id },
      relations: ['country', 'representative'],
    });
    if (!branch) throw new NotFoundException(` ID=${cmd.id} not found`);

    if (cmd.countryId !== branch.countryId) {
      const country = await this.countryRepo.findOne({ where: { id: cmd.countryId } });
      if (!country) throw new NotFoundException(`ID=${cmd.countryId} not found`);
    }

    if (cmd.representativeId !== branch.representativeId) {
      const rep = await this.repRepo.findOne({ where: { id: cmd.representativeId } });
      if (!rep) throw new NotFoundException(`ID=${cmd.representativeId} not found`);
    }

    branch.countryId        = cmd.countryId;
    branch.representativeId = cmd.representativeId;
    branch.city             = cmd.city;
    branch.latitude         = cmd.latitude;
    branch.longitude        = cmd.longitude;
    branch.phoneNumber      = cmd.phoneNumber;

    return this.branchRepo.save(branch);
  }
}
