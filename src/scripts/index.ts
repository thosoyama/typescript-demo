/* eslint-disable no-console */

import 'regenerator-runtime';
import { timerAsync, appendLog, sayHello, sayHelloWithError } from './sub';

/**
 * main
 */
(async function main(): Promise<void> {
  const errorText = 'NG';

  await timerAsync(1000);
  appendLog(await sayHello().catch((): string => errorText));

  await timerAsync(1000);
  appendLog(await sayHelloWithError().catch((): string => errorText));
})();

class TestClass {
  private privateProperty = 'private';
  public publicProperty = 'public';
}

const test = new TestClass();

console.log(test.publicProperty);
// console.log(test.privateProperty);
