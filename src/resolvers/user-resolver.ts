export const userResolver = {
  Query: {
    users: (_parent: any, _args: any, { dataSources }: any) => {
      return dataSources.userDataSource.getUsers();
    },
    user: (_parent: any, { id }: any, { dataSources }: any) => {
      return dataSources.userDataSource.getUserById(id);
    }
  },
  Mutation: {
    adicionarUser: async (_root: any, user: any, { dataSources }: any) => {
      return await dataSources.userDataSource.adicionarUser(user);
    },
    atualizarUser: async (_root: any, user: any, { dataSources }: any) => {
      return await dataSources.userDataSource.atualizarUser(user);
    },
    removerUser: async (_root, { id }, { dataSources }) => {
      return await dataSources.userDataSource.removerUser(id);
    }
  }
}
