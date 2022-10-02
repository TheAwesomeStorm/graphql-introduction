export const userResolver = {
  Query: {
    users: (_parent: any, _args: any, { dataSources }: any) => {
      return dataSources.userDataSource.getUsers();
    },
  }
}
