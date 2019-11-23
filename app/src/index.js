import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import * as serviceWorker from "./serviceWorker";

import { InMemoryCache } from "apollo-cache-inmemory";

import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const URL = "graphql-subscription-chat.herokuapp.com";

// Create an http link:
const httpLink = new HttpLink({
  uri: `http://${URL}/graphql`
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://${URL}`,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({ link, cache: new InMemoryCache() });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
