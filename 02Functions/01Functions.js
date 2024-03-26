"use strict";
/***Functions  */
Object.defineProperty(exports, "__esModule", { value: true });
// type "any" : more using javascript
// TYPE "any" IS NEVER RECOMMENDED IN TypeScript
// variable having type any
function addTwo(num) {
    return num + 2;
} // num is of type any
// variables having type
function addThree(num) {
    return num + 3;
}
// function type
function addFour(num) {
    return num + 4;
}
function print(name) {
    console.log(name.toLowerCase());
}
addTwo("10"); // don't throws any error
addThree(10);
addFour(10);
