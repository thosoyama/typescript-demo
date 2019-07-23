/* eslint-disable no-console */

import 'regenerator-runtime';
import { timerAsync, appendLog, sayHello, sayHelloWithError } from './sub';

// async/await
(async function(): Promise<void> {
  const errorText = 'NG';

  await timerAsync(1000);
  appendLog(await sayHello().catch((): string => errorText));

  await timerAsync(1000);
  appendLog(await sayHelloWithError().catch((): string => errorText));
})();

// class
{
  class TestClass {
    private privateProperty = 'private';
    public publicProperty = 'public';
  }

  const test = new TestClass();

  console.log(test.publicProperty);
  // console.log(test.privateProperty);
}

// interface
{
  interface HogeInterface {
    foo: string;
    bar: number;
    baz?: boolean;
  }

  const hoge: HogeInterface = {
    foo: 'string',
    bar: 100,
    // baz: true,
  };

  console.log(hoge);
}
