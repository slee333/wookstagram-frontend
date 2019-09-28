import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

import Client from "./Apollo/Client";
import { ApolloProvider } from "react-apollo-hooks";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// 나중에 Query를 실행해야하니 ApolloProvider는 앱 자체에 넣지 않고 밖에 빼준다 (??)