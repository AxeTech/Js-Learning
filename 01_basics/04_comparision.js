// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


/* 
In the below example when run it will come as truye 
but it shouldnt come as true as this is a string right ?
should come as NaN but it comes as true as JS automatically
converts string into a Number
*/

// DONT COMPARE TWO SEPRATE DATA TYPES 

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

/*
The reason the logs behave this way is due to the difference 
in how JavaScript handles comparisons (>, <, >=, <=) 
and equality checks (==, ===):

1. Comparisons like `>` and `>=` convert `null` to a number (0).
   - `null > 0` → `null` is converted to 0, so this becomes `0 > 0`, which is `false`.
   - `null >= 0` → `null` is converted to 0, so this becomes `0 >= 0`, which is `true`.

2. Equality (`==`) does not coerce `null` into a number. Instead, it has special rules:
   - `null` is only loosely equal (`==`) to `undefined`.
   - `null` is not equal to 0, so `null == 0` is `false`.

This is why the results are:
- `null > 0` → `false`
- `null == 0` → `false`
- `null >= 0` → `true`
*/

console.log(undefined == 0);  // 
console.log(undefined > 0); // 
console.log(undefined < 0); // 






