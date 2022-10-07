import { Response } from '../interfaces/response';
import { ObjectType } from 'type-graphql';

@ObjectType({ implements: Response })
export class RemoveUserResponse extends Response {
  code: number;
  message: string;
}
