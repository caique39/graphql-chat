const shortid = require('shortid')
const faker = require('faker')

const resolvers = {
  Query: {
    user: async (root, args, { db }) => {
      const user = db
        .get('users')
        .find({ id: args.id })
        .value()

      return user
    }
  },
  Mutation: {
    createUser: async (root, args, { db }) => {
      const newUser = {
        id: shortid.generate(),
        name: faker.name.firstName(),
        avatar: faker.internet.avatar(),
        phone: faker.phone.phoneNumber('(77) 9####-#####'),
        createdAt: new Date()
      }

      db.get('users')
        .push(newUser)
        .write()

      return newUser
    }
  }
}

module.exports = resolvers
