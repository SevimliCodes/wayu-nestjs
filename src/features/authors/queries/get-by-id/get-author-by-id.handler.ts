import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../../author.entity';

@Injectable()
export class GetAuthorByIdHandler {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repo: Repository<AuthorEntity>,
  ) {}

  async execute(id: number): Promise<AuthorEntity> {
    const author = await this.repo.findOne({
      where: { id },
      relations: ['books'],
    });
    if (!author) throw new NotFoundException(` ID=${id} not found`);
    return author;
  }
}
