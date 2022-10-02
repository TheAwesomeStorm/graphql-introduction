import { GraphQLScalarType } from 'graphql/type';

export const userResolver = {
  Datetime: new GraphQLScalarType({
    name: 'Datetime',
    description: 'string de data e hora no formato ISO-8601',
    serialize: (value) => {
      if (!(value instanceof Date)) {
        throw new Error(`Scalar "Datetime" cannot represent ${value} since it is not a Date`)
      }
      return value.toISOString()
    },
    parseValue: (value) => {
      if (typeof value !== 'string') {
        throw new Error(`Scalar "Datetime" cannot represent ${value} since it is not a Date`)
      }
      return new Date(value)
    },
    parseLiteral: (ast) => {
      return new Date(ast['value']);
    }
  }),
  RolesType: {
    ESTUDANTE: "Estudante",
    DOCENTE: 'Docente',
    COORDENACAO: 'Coordenação'
  },
  Query: {
    users: (_parent: any, _args: any, { dataSources }: any) => {
      return dataSources.userDataSource.getUsers();
    },
    user: (_parent: any, { id }: any, { dataSources }: any) => {
      return dataSources.userDataSource.getUserById(id);
    }
  },
  Mutation: {
    adicionarUser: async (_root: any, { user }: any, { dataSources }: any) => {
      return await dataSources.userDataSource.adicionarUser(user);
    },
    atualizarUser: async (_root: any, { id, user }: any, { dataSources }: any) => {
      return await dataSources.userDataSource.atualizarUser({ id, ...user });
    },
    removerUser: async (_root, { id }, { dataSources }) => {
      return await dataSources.userDataSource.removerUser(id);
    }
  }
}
