import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../../author.entity';
import { CreateAuthorCommand } from './create-author.command';

@Injectable()
export class CreateAuthorHandler {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repo: Repository<AuthorEntity>,
  ) {}

  async execute(cmd: CreateAuthorCommand): Promise<AuthorEntity> {
    const author = this.repo.create({ fullName: cmd.fullName });
    return this.repo.save(author);
  }
}
