import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  }
});

// ClientState은 typeDefinitions과 resolver를 요구합니다. (GraphQL이니까)
// 이걸 LocalState에서 만들어줍시다