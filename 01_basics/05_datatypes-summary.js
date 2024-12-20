/// Data types Notes 



/*

Q1 -What are Datatypes ? and how are they differenciated 

The way a Datatype is stored in the memory and accessed differentiated them

Types Of Datatypes 
1) Primitive - 7 categories [called by value no memory allocation]
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

2) Non Primitive (Reference Type) - MEmory has reference allocated  (Generally type of for non primitive will show as object but remember function is to be called as 
object function)
- Arrays
- Objects 
- Functions 

Q2 - Is Javascript Dynamically typed or Statically Type ?

*/

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedin = false //boolean
const outsideTemp = null // null
let userEmail; //undefined



const id = Symbol('123') // symbol
const anotherID = Symbol('123') // symbol

// console.table([score,scoreValue,isLoggedin,outsideTemp,userEmail,id,anotherID]);
// console.log(id === anotherID);

const heros = ["superman","iron man","batman"];  // Array but will be shown as an object

let myObj = {
    name: "Kunal",
    age: 30,

} // this is an example of object.  can store any data type 

const myfunction = function() {
    console.log("Hello World");
} // This will be shown as a function but should be called as an Function Object


console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedin);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherID);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myfunction);
