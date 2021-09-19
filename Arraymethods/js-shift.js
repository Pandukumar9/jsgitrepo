const numarr = [1,2,3,4];

const numres = numarr.shift();

console.log(numres);  //returns removed element 4
console.log(numarr); //origianl array [1, 2, 3]


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.shift());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.shift();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

const arrobj = [
  {id:1,name:"panu"},
  {id:2,name:"sai"},
   {id:3,name:"anil"},
];

const arrobjres = arrobj.shift();

console.log(arrobjres);//returns removed last object 
/* 
[object Object] {
  id: 3,
  name: "anil"
}
*/
console.log(arrobj);  //origianl array of obj
/* 
[[object Object] {
  id: 1,
  name: "panu"
}, [object Object] {
  id: 2,
  name: "sai"
}]
*/
