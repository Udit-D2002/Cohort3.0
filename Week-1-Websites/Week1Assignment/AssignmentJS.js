// Assignmetnt Untitled
let favourite_colour = "White";
console.log(favourite_colour);

const height = 176;
console.log(height);

let like_pizza = true;
console.log(like_pizza);
// Assignment 1 complete. (from Website :https://projects.100xdevs.com/tracks/javascript-1/Javascript-101-4)


// Testing == operator in JS
let equalityAssociated = 1;
let equalityChecked = 1;
if (equalityAssociated == equalityChecked) {
    console.log("equalityAssociated and equalityChecked are equal and correct, if condition syntax.");
}
// How == works : Double equals (==) will try to convert the values to the same data type and then try to compare them. 
// Testing == operator complete



// Testing === operator in JS

let tripleEquality = 1;
let tripleEqualityCheck = 1;
if (tripleEquality === tripleEqualityCheck){
    console.log("Triple Equality check Successful")
}
// Testing === Check successful.

// Assignment #1 (Write a function sum that finds the sum of two numbers.)
function sum(a,b) {
    return a + b;
}
console.log(sum(1,9));
// Assignment #1 complete

// Assignment #2 (Write a function called canVote that returns true or false if the age of a user is > 18)
function canVote(age) {
    if (age > 18) {
        return true
    } else {
        return false
    }
}

console.log(canVote(19));
// Assignment #2 completed.


// Assignment if/else (Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd.)


