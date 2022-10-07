import { Field, ID, InputType } from 'type-graphql';
import { AvailableRoles } from '../enums/available-roles-enum';
import { CustomDatetimeScalar } from '../scalars/custom-datetime-scalar';

@InputType()
export class UserInput {
  @Field()
  nome: string;

  @Field()
  ativo: boolean;

  @Field()
  email: string;

  @Field(type => AvailableRoles)
  role: AvailableRoles;

  @Field(type => CustomDatetimeScalar)
  createdAt: Date
}
