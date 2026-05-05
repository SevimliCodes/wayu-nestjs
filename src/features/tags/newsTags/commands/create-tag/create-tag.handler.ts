import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagCommand } from './create-tag.command';
import {Tag} from "@/features/tags/tag.entity";

@Injectable()
export class CreateTagHandler {
  constructor(@InjectRepository(Tag) private repo: Repository<Tag>) {}
  async execute(cmd: CreateTagCommand): Promise<Tag> {
    const exists = await this.repo.findOne({ where: { title: cmd.title } });
    if (exists) throw new ConflictException('Bu tag allaqachon mavjud');
    return this.repo.save(this.repo.create({ title: cmd.title }));
  }
}
