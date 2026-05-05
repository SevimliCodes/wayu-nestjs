import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from '../../application.entity';
import { UpdateApplicationStatusCommand } from './update-application-status.command';

@Injectable()
export class UpdateApplicationStatusHandler {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly repo: Repository<ApplicationEntity>,
  ) {}

  async execute(cmd: UpdateApplicationStatusCommand): Promise<ApplicationEntity> {
    const application = await this.repo.findOne({
      where: { id: cmd.id },
      relations: ['vacancy'],
    });

    if (!application) {
      throw new NotFoundException(` ID=${cmd.id} not found`);
    }

    application.status = cmd.status;
    return this.repo.save(application);
  }
}
