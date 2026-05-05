import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { BranchEntity } from '../../branch.entity';
import { GetAllBranchesFilters } from './get-all-branches.filters';

@Injectable()
export class GetAllBranchesHandler {
  constructor(
    @InjectRepository(BranchEntity)
    private readonly repo: Repository<BranchEntity>,
  ) {}

  async execute(filters: GetAllBranchesFilters): Promise<BranchEntity[]> {
    const qb = this.repo
      .createQueryBuilder('branch')
      .leftJoinAndSelect('branch.country', 'country')
      .leftJoinAndSelect('branch.representative', 'representative')
      .orderBy('branch.city', 'ASC');

    if (filters.countryId) {
      qb.andWhere('branch.countryId = :countryId', { countryId: filters.countryId });
    }

    if (filters.city) {
      qb.andWhere('branch.city ILIKE :city', { city: `%${filters.city}%` });
    }

    return qb.getMany();
  }
}
