import { Field, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class Response {
  @Field()
  code: number;
  @Field()
  message: string;
}
