import * as shortid from 'shortid'
import * as faker from 'faker'

const NEW_CHAT = 'NEW_CHAT'

const resolvers = {
  Query: {
    user: async (root, args: { id: string }, { db }) => {
      const user = db
        .get('users')
        .find({ id: args.id })
        .value()

      return user
    }
  },
  Mutation: {
    createUser: async (root, args, { pubsub, db }) => {
      const newUser = {
        id: shortid.generate(),
        name: faker.name.firstName(),
        avatar: faker.internet.avatar(),
        createdAt: new Date()
      }

      db.get('users')
        .push(newUser)
        .write()

      pubsub.publish(NEW_CHAT, {
        newChat: { newUser, messages: [] }
      })

      return newUser
    }
  },
  Subscription: {
    newChat: {
      subscribe: (root, args, { pubsub }) => {
        return pubsub.asyncIterator(NEW_CHAT)
      }
    }
  }
}

export default resolvers
