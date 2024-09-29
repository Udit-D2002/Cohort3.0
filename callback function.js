// CallBack, Synchoronous and Asynchronous functions


// CallBack Fuction
function sum(a,b){
    return a+b;
}
function diff(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b; // Check needed for divide by Zero error <------
}
// Checks needed for passed arguments to have data type as number only. <-----
function performAction(a,b,chooseAction){  // Three arguments are
    // given to the function, Last argument takes the name for
    // function which needs to be called in this callBack.
    return chooseAction(a,b);
}
let answer = performAction(4,5,divide) // callBack is performed
console.log(answer)
// This code is synchoronous code as each line of code gets executed
// on same thread.
// CallBack Function ends.





// Synchronous Code


// Synchronously Reading a file.
const fs = require('fs'); // Similiar to importing file system module to I/O files.

let readData1 = fs.readFileSync("A.txt", "utf-8"); // Reads data from 
// file named A.txt in utf-8 format.

console.log(readData1);
// Synchronously reading single file complete.


// Synchronously reading two files one after other.
const fs1 = require('fs');

let readData2 = fs1.readFileSync("A.txt", "utf-8"); // Reads data from 
console.log(readData2);
let readData3 = fs1.readFileSync("B.txt", "utf-8");
console.log(readData3);
// Synchronously reading two files completed.




// Asynchornous Code


// Asynchronously reading Both files A.txt and B.txt
const fs2 = require('fs');






