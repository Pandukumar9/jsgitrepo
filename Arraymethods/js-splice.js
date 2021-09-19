
// The splice() method adds and/or removes array elements.

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)


var fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
console.log(fruits.splice(2, 0, "Lemon", "Kiwi")); //returns removed element []

console.log(fruits); // original array ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]



var fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements, remove 1: 
console.log(fruits.splice(2, 1, "Lemon", "Kiwi")); //returns removed element ["Apple"]

console.log(fruits); // original array ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]



var fruits = ["Banana", "Orange", "Apple", "Mango"];

//at position 2, remove 2 items: 
console.log(fruits.splice(2, 2)); //returns removed element ["Apple", "Mango"]

console.log(fruits); // original array ["Banana", "Orange"]

// Remove all elements, starting from index 2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]


// Remove 1 element from index -2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]






//similar to the number array also

var fruits4 = [1,2,3,4];

//at position 2, remove 2 items: 
console.log(fruits4.splice(2, 2)); //returns removed element [3, 4]

console.log(fruits4); // original array [1, 2]

// Remove all elements, starting from index 2
let myFish4 = [1,2,3,4];
let removed4 = myFish4.splice(2); 

console.log(removed4); //[3, 4]
console.log(myFish4); //[1, 2]


// Remove 1 element from index -2
let myFish5 = [1,2,3,4];
let removed5 = myFish5.splice(-2, 1);

console.log(removed5); //[3]
console.log(myFish5); //[1, 2, 4]



// array of objects

var fruits5 = [
  {id:1,name:'pandu',city:'hyd'},
  {id:2,name:'sai',city:'wgl'},
  {id:3,name:'anil',city:'knr'},
  {id:4,name:'mani',city:'kzpt'}
];

//at position 2, remove 2 items: 
console.log(fruits5.splice(2, 2)); //returns removed element [[object Object] {
//   city: "knr",
//   id: 3,
//   name: "anil"
// }, [object Object] {
//   city: "kzpt",
//   id: 4,
//   name: "mani"
// }]

console.log(fruits5); // original array [[object Object] {
//   city: "hyd",
//   id: 1,
//   name: "pandu"
// }, [object Object] {
//   city: "wgl",
//   id: 2,
//   name: "sai"
// }]

// Remove all elements, starting from index 2
let myFish6 = [
  {id:1,name:'pandu',city:'hyd'},
  {id:2,name:'sai',city:'wgl'},
  {id:3,name:'anil',city:'knr'},
  {id:4,name:'mani',city:'kzpt'}
];
let removed6 = myFish6.splice(2); 

console.log(removed6); //[[object Object] {
//   city: "knr",
//   id: 3,
//   name: "anil"
// }, [object Object] {
//   city: "kzpt",
//   id: 4,
//   name: "mani"
// }]


console.log(myFish6); //
// [[object Object] {
//   city: "hyd",
//   id: 1,
//   name: "pandu"
// }, [object Object] {
//   city: "wgl",
//   id: 2,
//   name: "sai"
// }]



// Remove 1 element from index -2
let myFish7 = [
  {id:1,name:'pandu',city:'hyd'},
  {id:2,name:'sai',city:'wgl'},
  {id:3,name:'anil',city:'knr'},
  {id:4,name:'mani',city:'kzpt'}
];
let removed7 = myFish7.splice(-2, 1);

console.log(removed7); //[[object Object] {
//   city: "knr",
//   id: 3,
//   name: "anil"
// }]
console.log(myFish7); //[[object Object] {
//   city: "hyd",
//   id: 1,
//   name: "pandu"
// }, [object Object] {
//   city: "wgl",
//   id: 2,
//   name: "sai"
// }, [object Object] {
//   city: "kzpt",
//   id: 4,
//   name: "mani"
// }]
