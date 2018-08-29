import './index.css'

import React from 'react'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { createHttpLink } from 'apollo-link-http'

import App from './App'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: {}
})

const httpLink = createHttpLink({
  uri: 'https://qkv3mq9rp.lp.gql.zone/graphql'
})

const client = new ApolloClient({
  cache,
  link: stateLink.concat(httpLink)
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
