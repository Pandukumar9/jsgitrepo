// array methods

// 1.unshift() method

//we can add one or more elements in array from 1st index.it returns length of the array and also we can merge the arrays.

const arr = [1,2,3,4];

const res = arr.unshift(5,6,7); //returns length of array (7)

console.log(res);  // 7
console.log(arr);  //[5, 6, 7, 1, 2, 3, 4]
// ---------------------------------------------------
const strarr = ['pandu','sai','madhu'];

const res1 = strarr.unshift('bhargavi','sandy'); //returns length of array (5)

console.log(res1);  // 5
console.log(strarr); //["bhargavi", "sandy", "pandu", "sai", "madhu"]

// ---------------------------------------------------

const x = ['pandu','sai']; //array 1

const y = ['bhargavi','sandy']; //array 2

 x.unshift(...y);  // here we can merge the 2nd array into the 1st array.
console.log(x);  // ["bhargavi", "sandy", "pandu", "sai"]

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
        tempData1.unshift( data1 );
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
       data_array.unshift(my_object);

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
data_array1.unshift(my_object1);
data_array1.unshift(my_object2);

console.log(data_array1); 
/* output ==>
[[object Object] {
  city: "wgl",
  id: 2,
  name: "pandu"
}, [object Object] {
  city: "hyd",
  id: 1,
  name: "sai"
}] */

// ------------------------
// our arrays
let array1 = [1,2,4,5];
let array2 = [6,7,8,9];

// push the array to Array
array1.unshift(array2);

console.log(array1); //[[6, 7, 8, 9], 1, 2, 4, 5]



