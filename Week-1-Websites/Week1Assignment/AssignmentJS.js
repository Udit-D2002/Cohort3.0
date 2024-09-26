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


// Assignment if/else (Write an if/else statement that checks if a number is even or odd. If it's even,
//                      print "The number is even." Otherwise, print "The number is odd.)

function even_odd_teller(number){
    if ((number % 2) === 0 ) {
        return "The number is even."
    } else{
        return "The number is odd."
    }
} 
console.log(even_odd_teller(0));
// Assignment if/else solved using Function and if/else conditions.
// Why I used function instead of simply using if/else statements :
// because, how to write code of if/else statement without taking input from user or inputting the value of number?
// I felt using function to solve the assignment would be a better approach.
// Recently I figured out getting a user input in JS is a tricky part so i praise myself to use function :)


// Assignment loops (Write a function called sum that finds the sum from 1 to a number)
function sum(number){
    let sum_till_now = 0;
    for (let i = 0; i <= number; i++){
        sum_till_now = sum_till_now + i
    } return sum_till_now
}
console.log(sum(5));
// Assignment loops completed.








