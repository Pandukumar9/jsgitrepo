//syntax

//slice()
// slice(start)
// slice(start, end)
// it returns selected elements, does not change the origianl array.
// it does not consider the end index value. consider start index to before end index.

//syntax

//slice()
// slice(start)
// slice(start, end)
// it returns selected elements, does not change the origianl array.
// it does not consider the end index value. consider start index to before end index.

// The slice() method is a part of both the Array and String prototypes, and can be used with either type of object.
// The method returns items (from arrays) or characters (from strings) according to the provided indices.

const numbers = [1,2,3,4,5];

console.log(numbers.slice(2));
// expected output: Array [3, 4, 5]

console.log(numbers.slice(2, 4));
// expected output: Array [3, 4]

console.log(numbers.slice(1, 5));
// expected output: Array [2, 3, 4, 5]

console.log(numbers.slice(-2));
// expected output: Array [4, 5]

console.log(numbers.slice(2, -1));
// expected output: Array [3, 4]



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]


const arrobj = [
  {id:1,name:"panu"},
  {id:2,name:"sai"},
   {id:3,name:"anil"},
  {id:4,name:"mani"},
  {id:5,name:"raju"}
];


console.log(arrobj.slice(2));
// expected output: Array [[object Object] {
//   id: 3,
//   name: "anil"
// }, [object Object] {
//   id: 4,
//   name: "mani"
// }, [object Object] {
//   id: 5,
//   name: "raju"
// }]

console.log(arrobj.slice(2, 4));
// expected output: Array [[object Object] {
//   id: 3,
//   name: "anil"
// }, [object Object] {
//   id: 4,
//   name: "mani"
// }]

console.log(arrobj.slice(1, 5));
// expected output: Array [[object Object] {
//   id: 2,
//   name: "sai"
// }, [object Object] {
//   id: 3,
//   name: "anil"
// }, [object Object] {
//   id: 4,
//   name: "mani"
// }, [object Object] {
//   id: 5,
//   name: "raju"
// }]

console.log(arrobj.slice(-2));
// expected output: Array [[object Object] {
//   id: 4,
//   name: "mani"
// }, [object Object] {
//   id: 5,
//   name: "raju"
// }]

console.log(arrobj.slice(2, -1));

// expected output: Array [[object Object] {
//   id: 3,
//   name: "anil"
// }, [object Object] {
//   id: 4,
//   name: "mani"
// }]


// The slice() method extracts a section of a string and returns it as a new string,
//  without modifying the original string.
// slice(beginIndex)
// slice(beginIndex, endIndex)

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
// --------------------------------
const arr = "pandu";

const x = arr.slice(0,2);

const y = arr.slice(3,5);

console.log(x+y); //"padu"

