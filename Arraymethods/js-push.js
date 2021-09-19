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

var data = [];
// ...
data[0] = { "ID": "1", "Status": "Valid" };
data[1] = { "ID": "2", "Status": "Invalid" };

console.log(data);
/*
[[object Object] {
  ID: "1",
  Status: "Valid"
}, [object Object] {
  ID: "2",
  Status: "Invalid"
}]
*/
// ------------------------
var data1 = [];
data1[0] = { "ID": "1", "Status": "Valid" };
data1[1] = { "ID": "2", "Status": "Invalid" };
var tempData1 = [];
for ( var index=0; index<data1.length; index++ ) {
    if ( data1[index].Status == "Valid" ) {
        tempData1.push( data1 );
    }
}
data1 = tempData1;
console.log(tempData1);
/*
[[[object Object] {
  ID: "1",
  Status: "Valid"
}, [object Object] {
  ID: "2",
  Status: "Invalid"
}]]
*/

// our object array
       let data_array = [];

    // our object
       let my_object = {}; 
   
    // load data into object

       my_object.name = "stack";
       my_object.age = 20;
       my_object.hair_color = "red";
       my_object.eye_color = "green";
        
    // push the object to Array
       data_array.push(my_object);

     console.log(data_array)
     /*
[[object Object] {
  age: 20,
  eye_color: "green",
  hair_color: "red",
  name: "stack"
}]
     */

     // ------------------------
// our empty array
let data_array1 = [];

// our objects
   let my_object1 = { id:1,name:'sai',city:'hyd'}; 
   let my_object2 = { id:2,name:'pandu',city:'wgl'}; 

 
// push the objects to Array
data_array1.push(my_object1);
data_array1.push(my_object2);

console.log(data_array1); 
/* output ==>
[[object Object] {
  city: "hyd",
  id: 1,
  name: "sai"
}, [object Object] {
  city: "wgl",
  id: 2,
  name: "pandu"
}]  */

// ------------------------
// our arrays
let array1 = [1,2,4,5];
let array2 = [6,7,8,9];

// push the array to Array
array1.push(array2);

console.log(array2)  // [1, 2, 4, 5, [6, 7, 8, 9]]



