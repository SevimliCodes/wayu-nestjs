import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from '../../application.entity';

export class DeleteApplicationCommand {
  id: number;
}

@Injectable()
export class DeleteApplicationHandler {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly repo: Repository<ApplicationEntity>,
  ) {}

  async execute(id: number): Promise<void> {
    const application = await this.repo.findOne({ where: { id } });
    if (!application) throw new NotFoundException(`ID=${id} not found`);
    await this.repo.remove(application);
  }
}
