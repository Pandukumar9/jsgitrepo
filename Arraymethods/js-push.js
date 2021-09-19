// array methods

// 1.push() method

//we can add one or more elements in array from last index.it returns length of the array and also we can merge the arrays.

const arr = [1,2,3,4];

const res = arr.push(5,6,7); //returns length of array (7)

console.log(res);  // 7
console.log(arr);  //[1, 2, 3, 4, 5, 6, 7]
// ---------------------------------------------------
const strarr = ['pandu','sai','madhu'];

const res1 = strarr.push('bhargavi','sandy'); //returns last index value (5)

console.log(res1);  // 5
console.log(strarr); //["pandu", "sai", "madhu", "bhargavi", "sandy"]

// ---------------------------------------------------

const x = ['pandu','sai']; //array 1

const y = ['bhargavi','sandy']; //array 2

 x.push(...y);  // here we can merge the 2nd array into the 1st array.
console.log(x);  // ["pandu", "sai", "bhargavi", "sandy"]


