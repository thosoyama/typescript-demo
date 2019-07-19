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
