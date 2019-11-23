const { GraphQLServer, PubSub } = require('graphql-yoga')

const db = require('../database')
const { typeDefs, resolvers } = require('../resources')

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { db, pubsub }
})

module.exports = server
