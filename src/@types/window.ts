import { Config } from '../config/config'

interface MyWindow extends Window {
  readonly config: Config
}
declare const window: MyWindow
export default window
