"use strict";
let obj = {
    a: 1,
    b: 3,
    c: {
        x: 10,
        y: 25
    }
};
let newObj = Object.assign({}, obj);
console.log();


const oldArr = ['a', 'b', 'c'];
let newArr = oldArr.slice();

newArr[2] = 23;

console.log(oldArr);
console.log(newArr);