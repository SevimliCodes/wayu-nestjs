import { ApplicationStatus } from '../../application.entity';

export class UpdateApplicationStatusCommand {
  id:     number;
  status: ApplicationStatus;
}
