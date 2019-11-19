import { join } from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typeDefs = mergeTypes(fileLoader(join(__dirname, './**/*.graphql')))
const resolvers = fileLoader(join(__dirname, './**/resolvers.*'))

export { typeDefs, resolvers }
