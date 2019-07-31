import production from './env/production'
import development from './env/development'
import { Config, EnvironmentsMap } from './config'

const enviromentsMap: EnvironmentsMap = {
  production,
  development
}

const nodeEnv: string = process.env.NODE_ENV

export const config: Config = enviromentsMap[nodeEnv]

if (!config) {
  throw Error(`Invalid NODE_ENV: ${nodeEnv}`)
}
