///24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
///Equality test with string
let apple = "apple";
console.log("Equality test with string: ", ("apple" == apple));
///unequality test with string
console.log("unequality test with string: ", ("apple" !== apple));
// Tests using the lower case function
console.log("Lower case function equal to test: ", "HELLO".toLowerCase() == "hello");
console.log("Lower case function not equal to test: ", "HELLO".toLowerCase() !== "hello");
//Numerical test involving Equality
console.log("Equality test with numbers: ", 30 === 30);
//Numerical test involving InEquality
console.log("InEquality test with numbers: ", 26 == 35);
//  greater than 
console.log("Greater than test: ", 10 > 5);
//Less Than
console.log("less than test: ", 5 > 10);
// greater than or equal to, 
console.log("Greater than or Equal to: ", 10 >= 10);
// and less than or equal 
console.log("Less than or equal test: ", 5 >= 15);
//  Tests using "and" operators
console.log("And operators test: ", 5 === 5 && 10 > 5);
// /  Tests using "or" operators
console.log("or operators test: ", 5 !== 5 || 10 < 5);
///ceate array
const fruits = ["Nashpati", "Mango", "Banana"];
// Test whether an item is in array
console.log("Test Nashpati is array: ", fruits.includes("Mango"));
//Test whether an item is not in a array
console.log("Testing Apple is not array: ", fruits.includes("Apple"));
export {};
