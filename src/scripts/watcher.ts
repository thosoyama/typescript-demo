/* eslint-disable no-console */

import { exec } from 'child_process';
import chokidar from 'chokidar';
import glob from 'glob';

interface FileTaskMap {
  paths: string[];
  tasks: string[];
}

const targets: FileTaskMap[] = [
  {
    paths: ['./src/**/*.html', './src/assets/images/**/*', './src/assets/styles/**/*.css'],
    tasks: ['static'],
  },
];

/**
 * npm-runのタスクを実行
 */
function build(path: string, tasks: string[]): void {
  console.log(`change ${path}`);
  tasks.forEach((task: string): void => {
    exec(`npm run ${task}`);
    console.log(`execute task: ${task}`);
  });
}

/**
 * 監視対象のファイルを標準出力に表示
 */
function print(path: string): void {
  return glob.sync(path).forEach((file: string): void => console.log(`  watching ${file}`));
}

/**
 * watch
 */
function watch(fileTaskMap: FileTaskMap): void {
  const { paths, tasks } = fileTaskMap;

  paths.forEach(print);
  chokidar.watch(paths).on('change', (path: string): void => build(path, tasks));
}

// watch実行
targets.forEach(watch);
