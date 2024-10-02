// 2) შეასრულეთ დავალებები დღეს ნასწავლი სტანდარტებისა და საუკეთესო პრაქტიკების გამოყენებით: კომენტარები, ინდენტაცია, ცვლადების შესაბამისი სახელები, camelCase method და external javascript:

// 1.Multiply Two Numbers
// Write a function multiply() that prompts the user to input two numbers and returns their product.
function multiply() {
    let num1 = prompt("enter first number: ");
    let num2 = prompt("enter second number: ");
    console.log(num1 * num2);
};

multiply()

// 2.Subtract Two Numbers
// Write a function subtract() that prompts the user for two numbers and returns the difference.
function subtract() {
    let num1 = prompt("enter first number: ");
    let num2 = prompt("enter second number: ");
    console.log(num1 - num2);
};

subtract()

// 3.Divide Two Numbers
// Write a function divide() that prompts the user for two numbers and returns their quotient.
function divide() {
    let num1 = prompt("enter first number: ");
    let num2 = prompt("enter second number: ");
    console.log(num1 / num2);
};

divide()
// 4.Return a Full Name
// Write a function fullName() that prompts the user to input their first name and last name, and returns the full name as a single string.
function fullName() {
    let fn = prompt("enter first name: ");
    let ln = prompt("enter last name: ");
    console.log(fn + ln);
}

fullName()

// 5.Convert Minutes to Seconds
// Write a function minutesToSeconds() that prompts the user for a number of minutes and returns the equivalent in seconds.
function minutesToSeconds() {
    let minutes = prompt("enter number of minutes: ");
    console.log(minutes * 60);
}

minutesToSeconds()

// 6.Calculate the Area of a Rectangle
// Write a function rectangleArea() that prompts the user to input the length and width of a rectangle and returns the area.
function rectangleArea() {
    let len = prompt("enter length: ");
    let wid = prompt("enter width: ");
    console.log(len * wid);
}

rectangleArea()

// 7.Concatenate Two Strings
// Write a function concatenateStrings() that prompts the user for two strings and returns them concatenated together.
function concatenateStrings() {
    let s1 = prompt("enter string 1: ");
    let s2 = prompt("enter string 2: ");
    console.log(s1 + s2);
}

concatenateStrings()

// 8.Exponentiation
// Write a function power() that prompts the user for a base number and an exponent, and returns the result of raising the base to the power of the exponent.
function power() {
    let n1 = prompt("enter number 1: ");
    let n2 = prompt("enter number 2: ");
    console.log(n1 ** n2);
}

power()

// 9.Calculate Circle Circumference
// Write a function circumference() that prompts the user to input a circle's radius and returns the circumference.
function circumference() {
    let r = prompt("enter circle's radius: ");
    console.log(2 * 3.14 * r);
}

circumference()

// 10.Return the Next Number
// Write a function nextNumber() that prompts the user for a number and returns the next number (the input number plus one).
function nextNumber() {
    let n = prompt("enter number: ");
    console.log(n + 1);
}

nextNumber()