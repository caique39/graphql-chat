import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

interface Environment {
  NODE_ENV: string
  API_PORT: string
}

const requiredEnvironmentKeys = ['NODE_ENV', 'API_PORT']

requiredEnvironmentKeys.forEach(key => {
  if (!process.env[key]) {
    throw new Error(`${key} is not defined. Define it and try again!`)
  }
})

const environment: Environment = {
  NODE_ENV: process.env.NODE_ENV,
  API_PORT: process.env.API_PORT
}

export { Environment }
export default environment
