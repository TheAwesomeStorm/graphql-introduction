import { Response } from '../interfaces/response';
import { User } from './user';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ implements: Response })
export class UpdateUserResponse extends Response {
  code: number;
  message: string;
  @Field(type => User)
  user: User;
}
