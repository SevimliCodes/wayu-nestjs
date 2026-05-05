import { IsString, MaxLength, MinLength } from 'class-validator';
export class UpdateTagCommand {
  @IsString() @MinLength(1) @MaxLength(64) title: string;
}
