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
console.log(slice.slice(5,7)); // " i" -- .slice(startIndex,endIndex) so the start index is where is starts and end is where it ends one before everything except this range is removed 
console.log(slice.slice(0,9)); // "Kunal is "