import { Command } from '@nestjs/cqrs';

export class DeleteCountryCommand extends Command<void> {
    constructor(public readonly id: number) {
        super();
    }
}