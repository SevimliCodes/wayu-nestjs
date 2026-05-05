import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../../author.entity';

@Injectable()
export class DeleteAuthorHandler {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repo: Repository<AuthorEntity>,
  ) {}

  async execute(id: number): Promise<void> {
    const author = await this.repo.findOne({ where: { id } });
    if (!author) throw new NotFoundException(`ID=${id} not found`);
    await this.repo.remove(author);
  }
}
