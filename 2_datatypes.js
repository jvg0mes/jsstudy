// Javascript data type
// The javascript language have eight main data types

// Numbers:
// Javascript numbers are always one type: double (64-bit floating point)
let length = 16;
let weight = 7.5;
// JavaScript will try to convert strings to numbers in all numeric operations
console.log('200'/"20") // result 10
// Javascript also have the Infinity and NaN keywords
console.log(200/'car')
console.log(200/0)
console.log(-200/0)

// Strings:
let color = "Yellow";
let lastName = "Johnson";
// When we deal of two differents type of data such as 
// string and number the string until a string appears
// this will be threat like the first type
let car1 = 'ferrari' + 21 + 4 // will produce ferrari214 because the first one is a string
let car2 = 21 + 4 + 'ferrari' // will produce 25ferrari because the first one is numeric and only the last is string
let car3 = 21 + 4 + 'ferrari' + 5 + 4 // will produce 25ferrari54 because ferrari appears on middle
console.log(car3)
// from here explains the string search methods
let phrase1 = 'I washed my car yesterday'
console.log('washed is at the position:' + phrase1.indexOf('washed')) // return the start position of the first string
console.log('the last time which letter y appears is: ' + phrase1.lastIndexOf('y'))
console.log('the first result of search y in phrase1 is: ' + phrase1.search('y'))
// the difference between indexOf and search is that indexOf accepts the second parameter which allows to select the 
// start of string and search allows regex at the first parameter but don't have a second parameter
// see the uses of regex below with matches
console.log('the first match of the string car in phrase1 is: ' + phrase1.match('y'))
console.log('all matches of y at the string phrase1: ')
for (let match of phrase1.matchAll('y')) console.log('\t' + match['index'])
// to use regex you must set g flag and for case-sensitive you must use i
console.log('Searching any word car occurence at phrase1: ')
for (let cmatch of phrase1.matchAll(/cAR/gi)) console.log(cmatch)
// the last string methods is include which checks if string is a piece of another string and startsWith and endsWith 
// what your names are suggestive enough to know what these functions do
console.log('Checking if phrase1 contains the string car: ' + phrase1.includes('car'))
console.log('Checking if phrase1 starts with the string car: ' + phrase1.startsWith('car'))
console.log('Checking if phrase1 ends with the string yesterday: ' + phrase1.endsWith('yesterday'))
// from here explains the string templates methods


// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// JavaScript BigInt
// All JavaScript numbers are stored in a a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer 
// values that are too big to be represented by a normal JavaScript Number
let bigIntX = BigInt("123456789012345678901234567890");

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression:
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
let car = undefined;    // Value is undefined, type is undefined


