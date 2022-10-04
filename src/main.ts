import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import { UserResolver } from './graphql/resolvers/user-resolver';
import { ApolloServer } from 'apollo-server';
import { Container } from 'typedi';

async function bootstrap () {
  const schema = await buildSchema({
    resolvers: [
      UserResolver
    ],
    container: Container
  })

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();

  console.log(`HTTP server running on ${url}`);
}

bootstrap().then();
