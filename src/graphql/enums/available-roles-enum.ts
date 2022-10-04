import { registerEnumType } from 'type-graphql';

export enum AvailableRoles {
  ESTUDANTE = 'estudante',
  DOCENTE = 'docente',
  COORDENACAO = 'coordenação',
}

registerEnumType(AvailableRoles, {
  name: 'AvailableRoles',
  description: 'Available roles for an user'
});
