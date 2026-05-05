import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { AuthorEntity } from '../../author.entity';
import { GetAllAuthorsFilters } from './get-all-authors.filters';

@Injectable()
export class GetAllAuthorsHandler {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repo: Repository<AuthorEntity>,
  ) {}

  async execute(filters: GetAllAuthorsFilters): Promise<AuthorEntity[]> {
    const where: any = {};
    if (filters.search) where.fullName = ILike(`%${filters.search}%`);

    return this.repo.find({
      where,
      order: { fullName: 'ASC' },
      relations: ['books'],
    });
  }
}
