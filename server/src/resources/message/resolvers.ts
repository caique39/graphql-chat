import { IMessage } from './model'

const NEW_MESSAGE = 'NEW_MESSAGE'

const resolvers = {
  Query: {
    messages: async (
      root,
      args: { offset: number },
      { db },
      info
    ): Promise<IMessage[]> => {
      const { offset } = args
      const limit = 30

      const messages = db
        .get('messages')
        .orderBy('date', 'desc')
        .slice(offset)
        .take(limit)
        .value()

      return messages
    }
  },
  Mutation: {
    sendMessage: async (
      _,
      args: { sender: string; text: string },
      { db, pubsub }
    ) => {
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
      subscribe: async (root, args, { pubsub }, info) => {
        return pubsub.asyncIterator(NEW_MESSAGE)
      }
    }
  }
}

export default resolvers
