export interface Config {
  baseUrl: string
}

export interface EnvironmentsMap {
  development: Config
  production: Config
  [key: string]: Config
}
