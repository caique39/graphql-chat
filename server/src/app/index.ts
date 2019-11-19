import { GraphQLServer, PubSub } from 'graphql-yoga'

import db from '../database'
import { typeDefs, resolvers } from '../resources'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub, db }
})

export default server
