// Tasks on const, let, and Variables

// Task: Declare a constant PI with the value 3.14 and try reassigning it. What happens?
const pi = 3.14;
// pi = 2;
console.log(pi)

// Task: Create a let variable age and set it to your age. Try changing it to a different value.
let age = 18;
age = 19;

// Task: Declare two variables x and y using let. Assign them values and swap them without creating a new variable.
let x = 12;
let y = 13

// Task: Use const to declare a variable favoriteColor and set it to your favorite color as a string. Try reassigning it and note the result.
const favoriteColor = "white";
// favoriteColor = "Black";
console.log(favoriteColor)

/////////////////////////////////////////////////////////////////////////////////////////////
// Tasks on Arithmetic Operations

// Task: Create two variables a and b with values 10 and 3. Perform the following operations on them: addition, subtraction, multiplication, division, and modulus. Log the results.
let a = 3;
let b = 10;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a % b)
console.log(a / b)

// Task: Use the exponentiation operator ** to calculate 2 raised to the power of 5. Store the result in a variable and log it.
let num = 2 ** 5;
console.log(num)

// Task: Write a program that calculates the area of a rectangle. Declare width and height as variables, and log the area using multiplication.
let width = 20;
let height = 19;
console.log(width * height)


// Task: Declare two numbers p and q. Perform the arithmetic operations: increment p by 1 and decrement q by 1. Log the updated values of both.
let p = 12;
let q = 10;
p ++ 
q --
console.log(p, q)


/////////////////////////////////////////////////////////////////////////////////////////////
// Tasks on Comparison Operations
// Task: Declare two variables num1 and num2. Use comparison operators (>, <, >=, <=, ==, ===, !=, !==) to compare them. Log the results.
let num1 = 2;
let num2 = 3;

console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 >= num2)
console.log(num1 == num2)
console.log(num1 === num2)
console.log(num1 != num2)
console.log(num1 !== num2)


// Task: Compare two strings using both == and ===. For example, compare '10' == 10 and '10' === 10. Note the difference in results.
console.log(10 == 10)
console.log(10 === 10)

///////////////////////////////////////////////////////////////////////////
// Tasks on Data Types: Number, Boolean, and String
// Task: Declare a const variable myNumber and assign it a number. Check if it is of type number using typeof. Log the result.
const myNumber = 10;
console.log(typeof(myNumber))

// Task: Declare a variable str and assign it a string value. Log the length of the string using .length.
let str = "ani";
console.log(str.length)

// Task: Create a string variable firstName and another lastName. Concatenate them into a single variable fullName and log the result.
let firstName = "ani"
let lastName = "Razmadze"

console.log(firstName + " " + lastName)

//////////////////////////////////////////////////////////////////////////////////////
// Combined Tasks
// Task: Write a function that accepts two numbers, performs all arithmetic operations on them, and returns a summary object with the results (addition, subtraction, multiplication, etc.).

let n1 = 1;
let n2 = 2;

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 % n2)
console.log(n1 / n2)
console.log(n1 * n2)
console.log(n1 ** n2)
