let score = true 

// two ways to write type of 
// console.log(typeof score);
// console.log(typeof (score));

/* Now Since we are in backened we dont know what input will be put in the front end there 
are chances that someone may put any input can be a string as well so to get rid of that 
we aill do conversion
*/

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
But if we add lets say "33abc" valueInNumber wil convert it into a number 
but if we now see consolelog for valueinnumber it will show as NaN which means not a number but is still passed as a number
as we have converted it 
*/

/*
But if we add lets say null valueInNumber is converted into a number 
but if we again add consolelog for valueinnumber it comes as 0
*/

let isLoggedIn = "Kunal"  

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

/*  if isLoggedIn is
1 => true
0 => false
"" => false
"kunal" => true 

*/

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// we are usign the above to convert the number into string

// ************ Operarions **************

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);

let str1 = "hello"
let str2 = " Kunal"
let str3 = str1 + str2
// console.log(str3);
// console.log(str1+str2);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2")


/*
Generally JS takes the first value into consideration and then moves forward so 
in this example above it would first take string so
1 => 12
2=> 12
3=> 122
4=> 32
*/


//This will add a number to the gamecounter 
// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

// let x = 3
// const y = ++x;

// console.log(y);

// y will be printed as 4

// let x = 3
// const y = x++;

// console.log(y);

// y will be printer as 3

/*
In the above examples, we are using both prefix (++x) and postfix (x++) increment operators.

1. In the first example (prefix), the value of x is incremented **first**, and then the updated value is used.
   This is why the console.log() shows the incremented value.

2. In the second example (postfix), the value of x is used **first**, and then it is incremented.
   This is why the console.log() shows the original value before the increment.

To summarize:
- Prefix (++x): Increment happens first; the updated value is used immediately.
- Postfix (x++): The original value is used first; increment happens afterward.
*/
