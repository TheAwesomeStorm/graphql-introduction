import { registerEnumType } from 'type-graphql';

export enum AvailableRoles {
  ESTUDANTE = 'Estudante',
  DOCENTE = 'Docente',
  COORDENACAO = 'Coordenação',
}

registerEnumType(AvailableRoles, {
  name: 'AvailableRoles',
  description: 'Available roles for an user'
});
