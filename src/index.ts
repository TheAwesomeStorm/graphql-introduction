import { ApolloServer } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { userResolver } from './resolvers/user-resolver';
import { userType } from './schemas/user-type';
import { UserDataSource } from './data-sources/user-data-source';

const typeDefs = mergeTypeDefs([
  userType
]);

const resolvers = mergeResolvers([
  userResolver
]);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources:() => {
    return {
      userDataSource: new UserDataSource()
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`)
});
