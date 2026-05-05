import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BranchEntity } from '../../branch.entity';

@Injectable()
export class GetBranchByIdHandler {
  constructor(
    @InjectRepository(BranchEntity)
    private readonly repo: Repository<BranchEntity>,
  ) {}

  async execute(id: number): Promise<BranchEntity> {
    const branch = await this.repo.findOne({
      where: { id },
      relations: ['country', 'representative'],
    });
    if (!branch) throw new NotFoundException(`ID=${id} not found`);
    return branch;
  }
}
