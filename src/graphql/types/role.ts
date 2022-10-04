import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Role {
  @Field(type => ID)
  id: number;

  @Field()
  type: string;
}
