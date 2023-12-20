"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('four');
function signUpUser(name, email, isPaid) { }
signUpUser('one', 'mad@nono.dev', false);
// arrow function + default values
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('b', 'bebe@dev.co');
