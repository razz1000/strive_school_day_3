/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
 ANSWER: 
There are 5 main data types: 

Number  // Number is any number. Could be "5" or "5.2" and so on. 
As an example: 
console.log(5)

String // a String is any text. It is defined by using the brackets. 
So, for instance: 
console.log("Rasmus is cool");

Boolean // A boolean is always true or false. Nothing else. 
So, as an example: 
console.log(2 === 2);

undefined // undefined is the outcome you will get when a variable is not defined. 
So for instance: 
let sugar // this will return "undefined"

null // null is similar to undefined, but you have assigned the null to a variable. 
So, for instance: 
let sugar = null; 
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* AnSWER: 
A variable is a container storing data temporarily. 

As an example, in the below ones, sugar, milk and vanilla are variables: 
let sugar = 9;
let milk = "sour";
let vanilla = 20;
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* ANSWER: 

let sum = 12 + 20;
console.log(sum);
or, 

let number1 = 12;
let number2 = 20;

let sum = number1 + number2; 
console.log(sum);
*/

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* ANSWER

let x = 12;

*/

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* ANSWER 
let name = "John Doe";
*/

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* ANSWER: 
let result = 12 - x; 
console.log(result);
*/

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/



let name1 = "john";
let name2 = "John";
console.log(name1 === name2);

let name3 = name2.toLocaleLowerCase();
console.log(name3);
console.log(name1 === name3);




/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

 
 
let x = 9;
if (x === 9) {
    console.log('nine')
} else {
    console.log('some other number')
}



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/



 let rainingToday = false;
rainingToday = (false) ? console.log("I am sorry to say that it is raining today") : console.log("It is sunny today! yehaa");

let numberOfBalls = 4;
numberOfBalls = (numberOfBalls === 3) ? console.log("You have the right amount of balls!") : console.log("You do not have enough balls. Sorry!");





/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
