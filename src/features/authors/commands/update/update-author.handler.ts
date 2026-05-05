import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../../author.entity';
import { UpdateAuthorCommand } from './update-author.command';

@Injectable()
export class UpdateAuthorHandler {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repo: Repository<AuthorEntity>,
  ) {}

  async execute(cmd: UpdateAuthorCommand): Promise<AuthorEntity> {
    const author = await this.repo.findOne({ where: { id: cmd.id } });
    if (!author) throw new NotFoundException(`ID=${cmd.id} not found`);
    author.fullName = cmd.fullName;
    return this.repo.save(author);
  }
}
