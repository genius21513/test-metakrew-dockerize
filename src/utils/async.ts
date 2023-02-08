import { objectFromKeysAndValues } from ".";


export function promiseAllKeys(promises: any) {
  return Promise.all(Object.values(promises)).then(values => objectFromKeysAndValues(Object.keys(promises), values));
}

export async function asyncForEach(array: any[], callback: (value: any, index: number, array: any[]) => any) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export const waitFor = (ms: number) => new Promise(r => setTimeout(r, ms));