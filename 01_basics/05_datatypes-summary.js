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


// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedin);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherID);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myfunction);


// ++++++++++++++++++++++++ Memory 

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Kunstervlogs"

let anotherName = myYoutubeName

anotherName = "kunalshah1994"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "kunal@google.com",
    upi: "kunal@abc", 
}

let userTwo = userOne

userTwo.email = "kunal@hsbc.com"

// console.log(userOne.email);
// console.log(userTwo.email);

/*
So basically there are two types of datatypes 

Primitve and Non Primitive (Reference)

Primitive is stored in Stack 
And Non primitive (Reference) is stored in heap 

Stack can be taken as a stack of plates one above the other and every variable is stored as a copy but its data is stored in heap alsp stack is temporary stored till the 
function is called 

Now when a variable is referenced and it is changed you can call the orignal value and also the new value as its copy is stored and not the orginal value is edited this is for
stack

Heap take of it as a messy room where all the data is dumped and stored and the reference to where it is stored in heap is stored in a stack so it can be retreive 

If we add a function and add values to it and now say that you add a new variable and assign it with previous variable any change in this will change the value for both the 
variables unlike stack where u have copy plus origbal 
*/