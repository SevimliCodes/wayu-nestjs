import { Command } from '@nestjs/cqrs';

export class DeleteEventCommand extends Command<void> {
  constructor(public readonly id: number) {
    super();
  }
}
