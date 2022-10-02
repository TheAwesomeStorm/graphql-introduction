export const userResolver = {
  Query: {
    users: (_parent: any, _args: any, { dataSources }: any) => {
      return dataSources.userDataSource.getUsers();
    },
    user: (_parent: any, { id }: any, { dataSources }: any) => {
      return dataSources.userDataSource.getUserById(id);
    }
  }
}
