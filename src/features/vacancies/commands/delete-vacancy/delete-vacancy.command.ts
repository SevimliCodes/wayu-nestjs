import { Command } from '@nestjs/cqrs';

export class DeleteVacancyCommand extends Command<void> {
  constructor(public readonly id: number) {
    super();
  }
}
