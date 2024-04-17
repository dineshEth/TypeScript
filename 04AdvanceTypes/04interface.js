"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'Dinesh',
    id: 'abcd123',
    github: '@dineshEth',
    email: 'dinesh@google.com',
    startTrail: function () {
        return 'trail started';
    },
    endTrail: function () {
        return 'trail ended';
    },
    discount: function (coupanCode, value) {
        return String(coupanCode + value);
    },
};
var dog = {
    animalType: 'Pet',
    habitual: 'land',
    breed: 'sheperd',
    name: 'Bruno',
    age: 3
};
