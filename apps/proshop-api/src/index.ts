import { readFileSync } from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { dataSources } from './datasources';
import { resolvers } from './resolvers';

async function startApolloServer() {
  // read the schema (convert the file Buffer to a UTF-8 string)
  const typeDefs = readFileSync(
    path.join(__dirname, './schema.graphql')
  ).toString('utf-8');

  // start apollo server
  const server = new ApolloServer({ typeDefs, resolvers, dataSources });
  const { url } = await server.listen({ port: process.env.API_PORT });

  console.log(`ProShop API ready at ${url}`);
}

startApolloServer();
