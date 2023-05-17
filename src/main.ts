// string, number, boolean, undefined, null, void, any (ne pas utiliser !)
// tableau : Array<string>, string[]
// object (pas assez précis)

import { add, multiply } from "@helper/math";

type stringOrUndefined = string | undefined;

type Pokemon = {
  name: stringOrUndefined,
  type: string,
  attack?: number
}

let pokemon: Pokemon = {
  name: "Ditto",
  type: "Normal"
}



type callback = (value1: number, value2: number) => number

function calculator(a: number, b: number, action: callback): number {
  return action(a, b);
}

console.log(calculator(2, 3, add));
console.log(calculator(2, 3, multiply));