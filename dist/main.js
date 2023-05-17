"use strict";
// string, number, boolean, undefined, null, void, any (ne pas utiliser !)
// tableau : Array<string>, string[]
// object (pas assez précis)
let pokemon = {
    name: "Ditto",
    type: "Normal"
};
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function calculator(a, b, action) {
    return action(a, b);
}
console.log(calculator(2, 3, multiply));
