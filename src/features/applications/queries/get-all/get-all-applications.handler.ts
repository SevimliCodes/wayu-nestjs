import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from '../../application.entity';
import { GetAllApplicationsFilters } from './get-all-applications.filters';

export interface PagedApplications {
  items: ApplicationEntity[];
  total: number;
  page:  number;
  pageSize: number;
}

@Injectable()
export class GetAllApplicationsHandler {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly repo: Repository<ApplicationEntity>,
  ) {}

  async execute(filters: GetAllApplicationsFilters): Promise<PagedApplications> {
    const page     = filters.page     ?? 1;
    const pageSize = filters.pageSize ?? 20;

    const qb = this.repo
      .createQueryBuilder('app')
      .leftJoinAndSelect('app.vacancy', 'vacancy')
      .orderBy('app.createdAt', 'DESC')
      .skip((page - 1) * pageSize)
      .take(pageSize);

    if (filters.status)    qb.andWhere('app.status = :status',       { status: filters.status });
    if (filters.vacancyId) qb.andWhere('app.vacancyId = :vacancyId', { vacancyId: filters.vacancyId });

    const [items, total] = await qb.getManyAndCount();
    return { items, total, page, pageSize };
  }
}
