const accountId = "14454"
let accountEmail = "kunal@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"

accountEmail = "saloni@google.com"
accountPassword = "123"
accountCity = "Bengaluru"

console.log(accountCity);

/*
Always use let as a variable for keyword in place of var or none as 
var ignores the block scope and works only inside function scope anything beyond that var will ignore
also var is very old way of writing js and the more better and modern way is to use let 
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);