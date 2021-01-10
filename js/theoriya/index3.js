"use strict";

let arr = [1, 312, 232, 11, 84];

arr.sort(comapreNum);
console.log(arr);

function comapreNum(a, b) {
    return a - b;
}

// arr.forEach(function(val, i, arr) {
//     console.log(`Индекс ${i} имеет значение: ${val} внутри ${arr}`);
// });

// for (const i of arr) {
//     console.log(i);
// }
// for (let i = 0;  i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }




// arr.pop(); // удаляет последний элемент в массиве
// arr.push(10); //добаваляет эл в конец массива

// console.log(arr);
    // const str = prompt("", "");
    // const products = str.split(", ");
    // products.sort();
    // console.log(products.join("; "));


