/* eslint-disable no-console */

import * as nunjucks from 'nunjucks'
import * as fs from 'fs'
import * as glob from 'glob'
import * as path from 'path'
import { config } from '../config'

const templates: string[] = ['*.html']

const srcDir = path.resolve(process.cwd(), 'src/pages')
const dstDir = path.resolve(process.cwd(), `dist`)

function find(file: string): string[] {
  return glob.sync(file, { cwd: srcDir })
}

function mkdirpSync(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function render(src: string, dst: string): void {
  fs.writeFile(dst, nunjucks.render(src, { config }), (err): void => {
    if (err) throw err
    console.log(`saved ${src}`)
  })
}

nunjucks.configure([srcDir], {
  autoescape: false,
  trimBlocks: true,
  lstripBlocks: true
})

templates
  .reduce((prev: string[], current: string): string[] => [...prev, ...find(current)], [])
  .forEach((file: string): void => {
    const dst = path.join(dstDir, file)
    mkdirpSync(path.dirname(dst))
    render(file, dst)
  })
