import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Tag} from "@/features/tags/tag.entity";


@Injectable()
export class GetTagByIdHandler {
  constructor(@InjectRepository(Tag) private repo: Repository<Tag>) {}
  async execute(id: number): Promise<Tag> {
    const tag = await this.repo.findOne({ where: { id } });
    if (!tag) throw new NotFoundException('not found');
    return tag;
  }
}
