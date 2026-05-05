import { IsString, MaxLength, MinLength } from 'class-validator';
export class CreateTagCommand {
  @IsString() @MinLength(1) @MaxLength(64) title: string;
}
