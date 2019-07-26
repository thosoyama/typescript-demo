/* eslint-disable no-console */

import { exec } from 'child_process'
import * as chokidar from 'chokidar'
import * as glob from 'glob'

interface FileTaskMap {
  paths: string[]
  tasks: string[]
}

const targets: FileTaskMap[] = [
  {
    paths: ['./src/assets/styles/**/*'],
    tasks: ['build:styles']
  },
  {
    paths: ['./src/assets/images/**/*'],
    tasks: ['build:images']
  },
  {
    paths: ['./src/pages/**/*'],
    tasks: ['build:pages']
  }
]

/**
 * npm-runのタスクを実行
 */
function build(tasks: string[]): void {
  tasks.forEach((task: string): void => {
    exec(`npm run ${task}`)
    console.log(`execute task: ${task}`)
  })
}

/**
 * 監視対象のファイルを標準出力に表示
 */
function print(path: string): void {
  return glob.sync(path).forEach((file: string): void => console.log(`watching ${file}`))
}

/**
 * watch
 */
function watch(fileTaskMap: FileTaskMap): void {
  const { paths, tasks } = fileTaskMap

  paths.forEach((path: string): void => {
    print(path)
    build(tasks)
  })
  chokidar.watch(paths).on('change', (path: string): void => {
    console.log(`change ${path}`)
    build(tasks)
  })
}

// watch実行
targets.forEach(watch)
