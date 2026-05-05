import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from '../../application.entity';
import { Vacancy} from "@/features/vacancies/vacancy.entity";
import { SubmitApplicationCommand } from './submit-application.command';

@Injectable()
export class SubmitApplicationHandler {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly appRepo: Repository<ApplicationEntity>,

    @InjectRepository(Vacancy)
    private readonly vacancyRepo: Repository<Vacancy>,
  ) {}

  async execute(cmd: SubmitApplicationCommand): Promise<ApplicationEntity> {
    const vacancy = await this.vacancyRepo.findOne({
      where: { id: cmd.vacancyId, isActive: true },
    });

    if (!vacancy) {
      throw new NotFoundException(
        `ID=${cmd.vacancyId} not found`,
      );
    }

    const application = this.appRepo.create({
      fullName:    cmd.fullName,
      phoneNumber: cmd.phoneNumber,
      email:       cmd.email,
      vacancyId:   cmd.vacancyId,
      resume:      cmd.resume,
    });

    return this.appRepo.save(application);
  }
}
