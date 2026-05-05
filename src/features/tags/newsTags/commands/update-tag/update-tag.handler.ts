import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTagCommand } from './update-tag.command';
import {Tag} from "@/features/tags/tag.entity";

@Injectable()
export class UpdateTagHandler {
  constructor(@InjectRepository(Tag) private repo: Repository<Tag>) {}
  async execute(id: number, cmd: UpdateTagCommand): Promise<Tag> {
    const tag = await this.repo.findOne({ where: { id } });
    if (!tag) throw new NotFoundException('not found');
    const dup = await this.repo.findOne({ where: { title: cmd.title } });
    if (dup && dup.id !== id) throw new ConflictException('exists');
    tag.title = cmd.title;
    return this.repo.save(tag);
  }
}
