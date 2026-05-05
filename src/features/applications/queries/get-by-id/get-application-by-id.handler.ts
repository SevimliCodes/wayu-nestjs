import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from '../../application.entity';

@Injectable()
export class GetApplicationByIdHandler {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly repo: Repository<ApplicationEntity>,
  ) {}

  async execute(id: number): Promise<ApplicationEntity> {
    const application = await this.repo.findOne({
      where: { id },
      relations: ['vacancy'],
    });
    if (!application) throw new NotFoundException(`Ariza ID=${id} topilmadi`);
    return application;
  }
}
