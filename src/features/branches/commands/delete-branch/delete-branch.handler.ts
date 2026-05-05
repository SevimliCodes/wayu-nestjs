import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BranchEntity } from '../../branch.entity';

@Injectable()
export class DeleteBranchHandler {
  constructor(
    @InjectRepository(BranchEntity)
    private readonly repo: Repository<BranchEntity>,
  ) {}

  async execute(id: number): Promise<void> {
    const branch = await this.repo.findOne({ where: { id } });
    if (!branch) throw new NotFoundException(`ID=${id} not found`);
    await this.repo.remove(branch);
  }
}
