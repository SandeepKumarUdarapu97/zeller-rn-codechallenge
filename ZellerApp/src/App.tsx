import {ApolloProvider} from '@apollo/client';
import Navigation from './navigation/Navigation';
import client from './graphql/client';

export const App = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);
