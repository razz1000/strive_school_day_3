// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let gender = 'male';
gender = (true) ? console.log('You are male') : console.log('You are female');


/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let number1 = 8;
let number2 = 20;

if (number1 === 8 || number1 + number2 === 8) {
    console.log('Yes, the value is 8')
} else {
    console.log('The value is not 8')
}


/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let weatherToday = 'sunny';
console.log('The weather is ' + weatherToday + ' today.')




/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let num1= 500;
let num2= 35;
let num3= 400;
if (num1>num2 && num1>num3)
{
        if (num2>num3)
        {
           console.log(num1 + ", " + num2 + ", " +num3);
        }
        else
        {
            console.log(num1 + ", " + num3 + ", " +num2);
        }
}
else if (num2>num1 && num2 >num3)
{
        if (num1>num3)
        {
             console.log(num2 + ", " + num1 + ", " +num3);
        }
        else
        {
             console.log(num2 + ", " + num3 + ", " +num1);
        }
}
else if (num3>num1 && num3>num2)
{
        if (num1>num2)
        {
            console.log(num3 + ", " + num1 + ", " +num2);
        }
        else
        {
            console.log(num3 + ", " + num2 + ", " +num1);
        }
}        






/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

let newNumber1 = 100;
let newNumber2 = 5;
let theAverage = (newNumber1 + newNumber2) / 2;
console.log(theAverage);



/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "rasmusIsSoCool";
let string2 = "rasmusIsSoAwesome";

console.log(string1.length); // Console.log writes 14. 
console.log(string2.length); // Console.log writes 17. So string2 is the longest. 


/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let newNumber3 = 10.55;
if (newNumber3 % 1 === 0) {
    console.log("It is a whole number(also called an integer apparently)")
} else {
    console.log("It is not a whole number (NOT an integer)")
}




/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let percentage = 30;
let newNumber4 = 1000;
let percentageCalculation = ((newNumber4/100) * percentage);

console.log(percentageCalculation);


/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

let newNumber5 = 100;
let moduloCalculation = (newNumber5 % 2);
console.log(moduloCalculation);
if (moduloCalculation === 0) {
    console.log ("The number is even!")
} else {
    console.log("The number is odd.")
}

moduloCalculation === 0 ? console.log("The number is even!") : console.log("The number is odd."); // Here is am doing the same as above just using the "Ternary Operator".


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
