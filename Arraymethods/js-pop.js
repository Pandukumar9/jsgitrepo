const numarr = [1,2,3,4];

const numres = numarr.pop();

console.log(numres);  //returns removed element 4
console.log(numarr); //origianl array [1, 2, 3]


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

const arrobj = [
  {id:1,name:"panu"},
  {id:2,name:"sai"},
   {id:3,name:"anil"},
];

const arrobjres = arrobj.pop();

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


//You can use the delete operator to completely remove the properties from the JavaScript object.
// Deleting is the only way to actually remove a property from an object.

//Setting the property to undefined or null only changes the value of the property. 
//It does not remove property from the object. Let's take a look at the following example:

var person = {
  name: "Harry",
  age: 16,
  gender: "Male"
};

// Deleting a property completely
delete person.age;
alert(person.age); // Outputs: undefined
console.log(person); 
/*
[object Object] {
gender: "Male",
name: "Harry"
}
*/