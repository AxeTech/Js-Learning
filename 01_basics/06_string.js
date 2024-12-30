const nameOne = "Kunal"
const repoCount = 50

// console.log(name + repoCount + " Value"); --- This is an old way to do whcih is not very good way to do it 


// This is a better way to write a string with variable -- This is called as String Interpolation
// console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('KunalShah')

// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('a'));


/*

As you can see that sometimes we are using comsole.log(name.length) and console.log(name.toUpperCase()) so u can see length has no () but upper case has
this is because of proptioes and methods 
so properties describes the string and method add action to the string
just like Noun and Verb in grammer 

*/

const name = "Kunal"
// console.log(name.length); // 5 Used to Find the length of the string 
// console.log(name.toUpperCase()); // KUNAL Used to make the string in upper case 
// console.log(name.toLowerCase()) // kunal Used to make the string in lower case
// console.log(name.charAt(2)); // n To Return the character at a specific position in the string 
const nameTwo = "Javascript is Amazing"
// console.log(nameTwo.includes("Amazing")); // True -- This is used to see whether the word searched is found in the text 
// console.log(nameTwo.includes("amazing")); // False
// console.log(nameTwo.includes("difficult")); // False. --- KINDLY NOTE SUB STRING MEANS WHEN ITS A BIG STRING FINDING A SMALL PART OF IT LIKE CUTTING A SLICE OF CAKE
const url = "https://facebook.com"
// console.log(url.startsWith("https://")); // True - Used to check if the string starts with a specific substring
const file = "kunal.pdf"
// console.log(file.endsWith("pdf")); // true -- used to check if the string ends with a specific substring 
const sentence = "I Love JavaScript"
// console.log(sentence.indexOf("JavaScript")); //  -- 7 // Returns the Index Of The first occurence of the substring
// console.log(sentence.indexOf("love")); // -- -1
// console.log(sentence.indexOf("Love"));
// console.log(sentence.indexOf("Python")); // -- -1 (since not there hence -1)
// console.log(sentence.indexOf("I"));
const lastIndexOf = "Hello World,Hello JavaScript"
// console.log(lastIndexOf.lastIndexOf("Hello")); // Returns Index of Last Occurence of the SubString
const trial = "hello World,hello world"
// console.log(trial.lastIndexOf("hello"));
// console.log(trial.lastIndexOf("World"));
const trim = "   Kunal   "
// console.log(trim.trim()); // Removes whitespace from both ends of a string

const slice = "Kunal is the best ever"
// console.log(slice.slice(5,7)); // " i" -- .slice(startIndex,endIndex) so the start index is where is starts and end is where it ends one before everything except this range is removed 
// console.log(slice.slice(0,9)); // "Kunal is "
// console.log(slice.length);
// console.log(slice.slice(-9,-1));
// console.log(slice.slice(0,11));
// console.log(slice.substring(0,8))

/*
1. Slice and Substring are similar:
   - Both are used to extract a part of the string between the start and end index.
   - They don’t modify the original string; they just return a new substring.

2. Indexing:
   - Indexes start at `0` for the first character and go forward (e.g., `0, 1, 2, ...`).
   - The **start index is inclusive**, and the **end index is exclusive** (stops just before the end).

3. Difference Between Slice and Substring:
   - **Slice**:
     - Can use **negative indexes**, which count backward from the end of the string (`-1` refers to the last character, `-2` to the second-to-last, etc.).
   - **Substring**:
     - Does **not support negative indexes**; negative values are treated as `0`.

4. Negative Indexes in Slice:
   - For negative indexes in `.slice(start, end)`:
     - The **start value must be smaller than the end value** (from left to right when counting backward).
     - For example, `.slice(-9, -1)` extracts everything between `-9` and `-1`.

5. Behavior:
   - Both `.slice()` and `.substring()` extract values **between the start and end indexes**.
   - Everything **before the start index and after the end index is excluded**.
*/

const substr = "This is an awesome name"
// console.log(substr.substr(5,4));

/*
1. Substr is similar to slice and substring but works differently.
2. It takes two parameters:
   - **Start**: The position (index) where you want to start slicing.
   - **Length**: The number of characters to extract starting from the start index.

3. Key difference:
   - Unlike slice and substring, it does not use an end index.
   - Instead, the second parameter specifies the length of the substring to extract.

Example:
const str = "This is an awesome name";
console.log(str.substr(5, 4)); // Output: "is a"
Explanation:
   - Start at index 5 ("i").
   - Extract 4 characters: "is a".
*/

const replace = "I Love Python"
// console.log(replace.replace("Python","JavaScript")); // Pretty Straight Forward Replaces FIRST occurance of substring with string 
const replaceNew ="I Love Python,Python is Amazing" // Ignored Python the second time as it wasnt the first 
// console.log(replaceNew.replace("Python","JavaScript"))

const replaceAll = "I Love Python, Python is Amazing"
// console.log(replaceAll.replaceAll("Python","JavaScript")); // Solves the problem of replace by replacing all the occurances of substring and not only first

const split = "JavaScript is Amazing" 
// console.log(split.split(" ")); // Splits the string into array based on selected seprator

const splitTwo = "JavaScript-is-Amazing" 
// console.log(splitTwo.split("-"));

const firstName = "Kunal"
const lastName = "Shah"
// console.log(firstName.concat(" ",lastName)); // This is used to combine two or more strings 
// console.log(firstName.concat(" ",lastName," ","God"));

const word = "Hi !"
// console.log(word.repeat(4)) // Repeats the string the specified number of times in our case 4 

const pad = "5"
// console.log(pad.padStart(4,"k")); // used to ensure consistent length by adding string at start or end so all length will be same 
// console.log(pad.padEnd(4,"k"));

const valueOf = "This is Primitive"
const valueOf2 = new String("This is Non Primitive Object");

// console.log(valueOf2.valueOf());
// console.log(typeof valueOf);
// console.log(typeof valueOf2);
// console.log(typeof valueOf2.valueOf());

/*
1. `.valueOf()` is used to convert a String Object into a Primitive String.
2. When a String Object (created using `new String()`) is converted using `.valueOf()`, 
   it returns the entire primitive string value of the object.
3. This ensures that the string can be treated as a primitive for operations like 
   comparisons, calculations, or other string manipulations.

Example:
const strObject = new String("Hello World");
console.log(strObject.valueOf()); // Output: "Hello World" (primitive value of the string object)
console.log(typeof strObject);    // Output: "object" (it's a String object)
console.log(typeof strObject.valueOf()); // Output: "string" (primitive string)

*/

let str1 = "banana"
let str2 = "apple"

// console.log(str1.localeCompare(str2)); // 1
// console.log(str2.localeCompare(str1)); // -1
// console.log(str1.localeCompare("banana")); // 0


/* 
This method is used to compare one string with another.
- The string before `.localeCompare()` is the **calling string**.
- The string inside the parentheses is the **comparing string**.

Rules:
1. If the calling string comes **after** the comparing string alphabetically → result is **1**.
2. If the calling string comes **before** the comparing string alphabetically → result is **-1**.
3. If the calling string is **equal to** the comparing string → result is **0**.
*/

const toString = new String("Hello World");
// console.log(typeof toString);
// console.log(toString.toString());
// console.log(typeof toString.toString());
const valueOf3 = new String("this is a Test");
const valueOf4 = new Number(27);
// console.log(typeof valueOf3); // Object
// console.log(typeof valueOf4); // Object
// console.log(typeof valueOf3.valueOf()); // String
// console.log(typeof valueOf4.valueOf()); // Number 
// console.log(typeof valueOf4.toString()); //String

/* toString is used to convert any object into string irrespective of it being a Number,Date anything)
valueOf is used to convert the object into its primitive value so object string will become string , object number will become number
*/

const match = "This is a very basic example no 1 out of 36 or 58 match maybe matches or yeah match"
// console.log(match.match(/match/g));
const match2 = "There were 4 apples and i ate 2"
// console.log(match2.match(/\d+/g));

/* So this is used for matching the exact word in the string 
it returns the number of time it appears 
basically you use regex patterns to find the match 

/patter/ you can add g at end so it wont stop at first match will see full string
you can add \d so it will look for numbers 
*/

/* .search() Just like index of but used for regex */

const codePoint = "This is Amazing 😊"
// console.log(codePoint.codePointAt(16)); // Returns unicode point of emojis

const charCodeAt = "A B C" 
// console.log(charCodeAt.charCodeAt(0)); // used to find the UTF-16 code of a character at specified index
// console.log(charCodeAt.charCodeAt(3));
// console.log(charCodeAt.charCodeAt(4)); 

console.log(String.fromCharCode(65,66,67)); // "ABC"
console.log(String.fromCodePoint(128522)); // Returns a Smiley
console.log(String.raw`Hello\nWorld`); // Ignores New lines or other characters and shows raw text
const raw = "Hello\nWorld" // Output Hello (Next Line) World
console.log(raw);

/* So there are two types of methods in Strings 
Statcic and instance method 

Instances method automatically converts the string into an object and then performs methods on it 
and in Static you have to cinvert the string into an object string and then perform the method 

there are 3 static methods and rest are instances 

.fromCharCode - Converts UTF-16 code to text
.fromCodePoint -  converts unicode to smiley 
.raw - converts string to raw text 

/*

/*
There are two types of methods in Strings:

1. **Instance Methods**:
   - Work on individual string instances (e.g., `"Hello".toUpperCase()`).
   - JavaScript **automatically converts primitive strings into String objects** behind the scenes to perform these methods.
   - Examples: `.charAt()`, `.slice()`, `.toUpperCase()`, etc.

2. **Static Methods**:
   - Belong to the `String` class itself, not to individual string instances.
   - You call these methods directly on `String`, not on variables or string literals.
   - Examples:
     1. **`String.fromCharCode()`**:
        - Converts **UTF-16 code units** (numbers) into characters.
        - Example:
          ```javascript
          console.log(String.fromCharCode(65, 66, 67)); // Output: "ABC"
          ```

     2. **`String.fromCodePoint()`**:
        - Converts **Unicode code points** (including emojis or characters beyond UTF-16) into characters.
        - Example:
          ```javascript
          console.log(String.fromCodePoint(128522)); // Output: "😊"
          ```

     3. **`String.raw()`**:
        - Converts template literals into their **raw text representation**, ignoring escape sequences like `\n` or `\t`.
        - Example:
          ```javascript
          console.log(String.raw`Hello\nWorld`); // Output: "Hello\nWorld" (ignores newline)
          ```

Example of Instance Method:
```javascript
const text = "Hello World";
console.log(text.toUpperCase()); // Output: "HELLO WORLD"

*/


/* Things have kept on hold for now 
- regex patterns in .match()
- .matchAll()
- .normalize()
*/


