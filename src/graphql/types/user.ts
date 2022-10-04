import { Field, ID, ObjectType } from 'type-graphql';
import { Role } from './role';
import { CustomDatetimeScalar } from '../scalars/custom-datetime-scalar';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;

  @Field()
  nome: string;

  @Field()
  ativo: boolean

  @Field()
  email: string

  @Field(type => Role)
  role: Role

  @Field(type => CustomDatetimeScalar)
  createdAt: Date;
}
