import { ApolloClient, InMemoryCache } from "@apollo/client";

// FIXME localhost hardcoded
const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

export default client;
