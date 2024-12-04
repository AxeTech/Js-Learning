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
console.log(typeof someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// we are usign the above to convert the number into string
