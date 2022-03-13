import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const env: "dev" | "prod" = "dev";

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

const client = new ApolloClient({
  connectToDevTools: env === "dev" ? true : false,
  cache: new InMemoryCache().restore({}),
  link: from([httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default client;
