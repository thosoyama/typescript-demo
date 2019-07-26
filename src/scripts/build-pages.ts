import * as nunjucks from 'nunjucks'
import * as fs from 'fs'
import { config } from '../config'

nunjucks.configure(['src/pages'], {
  autoescape: false
})

const html = nunjucks.render('index.html', { config: JSON.stringify(config) })

fs.writeFileSync('dist/index.html', html)
