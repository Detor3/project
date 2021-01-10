"use strict";

let options = {
    name: "test", 
    height: 1980,
    width: 1080,
    color: {
        border: 'black',
        bgc: 'grey'
    },
    makeTest: function() {
        console.log("test");
    }
};
options.makeTest();
let { border, bgc } = options.color;
console.log(border,bgc);
// console.log(Object.keys(options).length);
// for (const key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(`Элемент ${i} имеет значение: ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Элемент ${key} имеет значение: ${options[key]}`);
        
//     }

// }
// console.log(counter);





