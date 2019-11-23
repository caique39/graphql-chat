const NEW_MESSAGE = 'NEW_MESSAGE'

const resolvers = {
  Query: {
    messages: async (root, args, { db }) => {
      const messages = db
        .get('messages')
        .orderBy('date', 'asc')
        .value()

      return messages
    }
  },
  Mutation: {
    sendMessage: async (_, args, { db, pubsub }) => {
      const { sender, text } = args
      const messageDoc = {
        sender,
        text,
        date: new Date()
      }

      db.get('messages')
        .push(messageDoc)
        .write()

      pubsub.publish(NEW_MESSAGE, { newMessage: messageDoc })

      return messageDoc
    }
  },
  Subscription: {
    newMessage: {
      subscribe: async (root, args, { pubsub }) => {
        return pubsub.asyncIterator(NEW_MESSAGE)
      }
    }
  }
}

module.exports = resolvers
