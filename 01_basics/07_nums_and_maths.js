const score = 400
// console.log(typeof score);

const balance = new Number(1000)
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toString().replace("1000","4000")); // Now that the value is converted into a string you can add string prototypes to it 

// console.log(balance.toFixed(2)); // Makes the precision value that is after decimals value gets stopped at 2 output 1000.00

const otherNumber = 23.867387
// console.log(otherNumber.toPrecision(2)); // 24 // Fixes the entire number irrespective of decimal or not to 2
// console.log(otherNumber.toFixed(1)); // 23.9 // Fixes the decimal to the defined value 

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // Converts numbers into US commas - 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // Converts numbers into indian commas - 10,00,000

// There are multiple properties in JS for DSA Number.Min etc

// +++++++++++++++ MATHS ++++++++++++++++

// console.log(Math.PI); // Properties 
// console.log(Math.abs(-4)); // 4 _ Absolute value converts negative to positive only and positive remains same 
// console.log(Math.round(2.8)); // 3 - will round the number
// console.log(Math.ceil(4.2)); // - 5 will round to the highest number
// console.log(Math.floor(4.8)); // 4 will round to lowest number 
// console.log(Math.min(4,3,6,8,9,2)); // 2 returns lowest number 
// console.log(Math.max(10,292,893,233)); // 893 returns highest number 

// console.log(Math.random()); // Can generate any random number between 0 to 1
// console.log(Math.random()*10); // we multiple 10 to make the number number plus decimal 
// console.log((Math.random()*10)+1); // we add 1 to make the number atleast more than 1
// console.log(Math.floor((Math.random()*10)+1)); // now we did this to get a random number between 1 to 10 but without decimal 

const min = 10
const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1)) + min);