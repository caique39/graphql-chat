import { Options } from 'graphql-yoga'

import server from './app'
import config from './config/'

const { API_PORT = 3000 } = config

const options: Options = {
  port: API_PORT,
  playground: config.NODE_ENV === 'development' ? '/' : false,
  endpoint: '/graphql'
}

server.start(options, () =>
  console.log(`Server is running on http://localhost:${API_PORT}`)
)
