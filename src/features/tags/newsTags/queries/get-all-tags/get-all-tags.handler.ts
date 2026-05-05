import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { GetAllTagsFilters } from './get-all-tags.filters';
import {Tag} from "@/features/tags/tag.entity";

@Injectable()
export class GetAllTagsHandler {
  constructor(@InjectRepository(Tag) private repo: Repository<Tag>) {}
  async execute(f: GetAllTagsFilters): Promise<Tag[]> {
    const where: any = {};
    if (f.search) where.title = ILike(`%${f.search}%`);
    return this.repo.find({ where, order: { title: 'ASC' } });
  }
}
