const server = require('./app')
const config = require('./config')

const { API_PORT = 3000 } = config

const options = {
  port: API_PORT,
  playground: config.NODE_ENV === 'development' ? '/' : false,
  endpoint: '/graphql'
}

server.start(options, () =>
  console.log(`Server is running at http://localhost:${API_PORT}`)
)
