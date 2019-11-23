const { join } = require('path')
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')

const typeDefs = mergeTypes(fileLoader(join(__dirname, './**/*.graphql')))
const resolvers = fileLoader(join(__dirname, './**/resolvers.*'))

module.exports = { typeDefs, resolvers }
