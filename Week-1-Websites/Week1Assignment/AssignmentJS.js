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



// Uderstanding Loops in JS.

// For Loop : for (initialization, condition, incerementORdecrement) {body of loop}
//          initialization: Sets a variable before the loop starts (commonly used to initialize a counter).
//          condition: The loop continues to run as long as this condition is true.
//          increment: The code that is executed after each iteration of the loop (usually increments or decrements the counter).

// For loop example
let arr1 = ["firstString", "secondString", "thirdString"]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
// For loop example finished.


// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}
// While loop completes




// Complex types Assignments

// Objects   
// Assingment #1 (Write a function that takes a user as an input and greets them with their name and age)
let user = {
    firstName: "Udit",
    age: 22,
}
function greeting(user) {
    console.log("Hi " + user["firstName"],"Your age is:", user["age"]);
}
greeting(user)
// Assignment #1 completed


// Assignment #2 (Write a function that takes a new object as input which has name , age  and gender 
//                  and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21))

let user2 = {
    firstName: "Udit",
    age: 22,
    gender: "Male",
}
function greeting(user2) {
    if (user2.gender === "Male") {
        console.log("Hi Mr. " + user2["firstName"],"Your age is:", user2["age"]);
    } else {
        console.log("You mistyped your gender");
    }
    
}
greeting(user2)
// Assignment #2 complete


// Assignment #3
let user3 = {
    firstName: "Udit",
    age: 22,
    gender: "Male",
}
function greeting(user3) {
    if (user3.gender === "Male") {
        console.log("Hi Mr. " + user3["firstName"],"Your age is:", user3["age"]);
    } else {
        console.log("You mistyped your gender");
    }
    
}
greeting(user3)

function canVote(user3){
    if (user3.age >= 18){
        console.log("You are eligible to vote.");
    } else{
        console.log("You are minor, can't vote.");
    }
}
canVote(user3)
// Assignment #3 complete

// Due Assignment Arrays (Write a function that takes an array of numbers as input, 
//                      and returns a new array with only even values. Read about filter in JS)

// Due Assignment Array of Objects (Write a function that takes an array of users as inputs 
//                                  and returns only the users who are more than 18 years old)












