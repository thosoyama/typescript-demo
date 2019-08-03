/* eslint-disable no-console */

import { inlineSource } from 'inline-source'
import * as fs from 'fs'
import * as path from 'path'
import * as glob from 'glob'

const files: string[] = glob.sync('dist/**/*.html')

async function inline(file: string): Promise<void> {
  const html = await inlineSource(file, {
    rootpath: path.resolve('dist'),
    compress: false
  })
  fs.writeFile(file, html, (err): void => {
    if (err) throw err
    console.log(`saved ${file}`)
  })
}

files.forEach(inline)
