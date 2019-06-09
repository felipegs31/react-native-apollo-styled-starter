import React from "react";
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from "react-apollo";
import { ThemeProvider } from "styled-components/native";

import { AsyncStorage } from "react-native";

import Api from "./services/api";
import "~/config/ReactotronConfig";
import Routes from "~/routes";
import theme from '~/theme';


const networkInterface = createNetworkInterface({
  uri: Api.simpleEndpoint
});

networkInterface.use([
  {
    async applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      var user = await AsyncStorage.getItem("token");
      req.options.headers.authorization = user ? user : null;
      next();
    }
  }
]);

const client = new ApolloClient({
  networkInterface
});

export default class App extends React.Component {
  state = {
    appIsReady: false
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
