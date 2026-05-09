//string and its operations
let str1 = "Shivmohan";
let str2 = 'Shivmohan Chaurasia';
let str3 = `Welcome to 
day 4 of JavaScript Revision
this is 
Shivmohan Chaurasia`;

console.log(str1);
console.log(typeof(str1));
console.log(str2);
console.log(typeof(str2));
console.log(str3);  
console.log(typeof(str3));
// output:
// Shivmohan    ---> using double quotes
//string

// Shivmohan Chaurasia  ---> using single quotes
//string

// Welcome to 
// day 4 of JavaScript Revision
// this is 
// Shivmohan Chaurasia  
//string


//Operation on strings
let name="Shivmohan Chaurasia";
console.log(name.length);  //length of the string
console.log(name.toUpperCase());  //convert to uppercase
console.log(name.toLowerCase());  //convert to lowercase
console.log(name.includes("Chaurasia"));  //check if the string contains a substring
console.log(name.startsWith("Shiv"));  //check if the string starts with a substring
console.log(name.endsWith("asia"));  //check if the string ends with a substring
console.log(name.indexOf("Chaurasia"));  //returns the index of the first occurrence of a substring
console.log(name.lastIndexOf("a"));  //returns the index of the last occurrence of a substring
console.log("substring: " + name.substring(2,9));  //returns a substring from the start index to the end index (not inclusive)
console.log(name.replace("Shivmohan","Shiv"));  //replaces the first occurrence of a substring with another substring
console.log(name.replaceAll("a","@"));  //replaces all occurrences of a substring with another substring
let words = name.split(" ");  //splits the string into an array of substrings based on a delimiter
console.log(words);
console.log(words.join("-"));  //joins the elements of an array into a string with a specified separator
// output:
// 17  ---> length of the string

// SHIVMOHAN CHAURASIA ---> convert to uppercase

// shivmohan chaurasia   ---> convert to lowercase

// true   ---> includes "Chaurasia"

// true  ---> starts with "Shiv"
// true ---> ends with "asia"
// 10   ---> index of "Chaurasia"
// 16  ---> last index of "a"
// ivmohan  ---> substring(slice) from index 2 to 9
// 16 ---> replace "Shivmohan" with "Shiv"
// Shiv Chaurasia  --> replace all "Shivmohan" with "Shiv"
// Shivmoh@n Ch@ur@sia  --> replace all "a" with "@"
// [ 'Shivmohan', 'Chaurasia' ]  ---> split the string by space and return an array of substrings       
// Shivmohan-Chaurasia  ---> join the elements of the array with a hyphen


