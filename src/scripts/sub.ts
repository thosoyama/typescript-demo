/**
 * timerAsync
 */
export function timerAsync(ms: number): Promise<void> {
  return new Promise((resolve): void => {
    setTimeout(resolve, ms);
  });
}

/**
 * appendLog
 */
export function appendLog(message: string): void {
  const app = document.querySelector('#app');

  if (!app) {
    throw Error('app element not found.');
  }

  const log = document.createElement('div');
  log.textContent = message;

  app.appendChild(log);
}

/**
 * sayHello
 */
export const sayHello = (): Promise<string> => {
  return new Promise((resolve): void => {
    appendLog('Hellow World (sayHello)');
    resolve('OK');
  });
};

/**
 * sayHelloWithError
 */
export const sayHelloWithError = (): Promise<string> => {
  return new Promise((resolve, reject): void => {
    appendLog('Hellow World (sayHelloWithError)');
    reject('OK');
  });
};
