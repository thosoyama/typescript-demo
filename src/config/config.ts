export interface Config {
  env: 'production' | 'development'
  baseUrl: string
}

export interface EnvironmentsMap {
  development: Config
  production: Config
  [key: string]: Config
}
