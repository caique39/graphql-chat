require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const requiredEnvironmentKeys = ['NODE_ENV', 'API_PORT']

requiredEnvironmentKeys.forEach(key => {
  if (!process.env[key]) {
    throw new Error(`${key} is not defined. Define it and try again!`)
  }
})

const environment = {
  NODE_ENV: process.env.NODE_ENV,
  API_PORT: process.env.API_PORT
}

module.exports = environment
