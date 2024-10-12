//1)
function filter_list(l) {
    let result = [];
    for(let i = 0; i < l.length; i++) {
      if(Number.isInteger(l[i])) {
        result.push(l[i]);
      };
    };
    return result;
  };

//   1. Greeting Function
//   Create a function greet that accepts a name as a parameter and greets the person. If no name is provided, the default name should be "Guest".
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
};

greet("ani");

//   2. Addition with Default Parameters
//   Write a function add_numbers that takes two numbers and returns their sum. The second number should have a default value of 0.
function add_numbers(num1, num2 = 0) {
    return num1 + num2;
};

console.log(add_numbers(1));
  
//   3. Rectangle Area Calculator
//   Create a function calculate_area to find the area of a rectangle. It should take two parameters: length and width. If the width is not provided, use a default value of 1.
function calculate_area(l, w = 1) {
    return l * w;
};
  
//   4. Temperature Conversion
//   Write a function convert_temperature to convert temperatures between Celsius and Fahrenheit. It should have two parameters: temperature and scale (either "C" for Celsius or "F" for Fahrenheit), with "C" as the default scale.
function convert_temperature(T, scale){
    if(scale == "C") {
        return (T * 9/5) + 32;
    } else {
        return (T - 32) * 5/9;
    }
}

console.log(convert_temperature(32, "f"))

//   5. Shopping List
//   Create a function add_to_shopping_list that accepts an item and a quantity. The quantity should default to 1 if not provided.
lst = []
function add_to_shopping_list(item, quantity = 1) {
    for(let i = 0; i < quantity; i++){
        lst.push(item);
    };
};

add_to_shopping_list("banana", 2);
console.log(lst);
add_to_shopping_list("apple");
console.log(lst);

  
//   6. Power Function
//   Write a function power that calculates the power of a number with a default exponent value of 2 (i.e., square).
function power(num, power = 2) {
    return num ** power;
}
;
  
//   7. Personalized Message
//   Create a function create_message that generates a personalized message given a name and an optional greeting ("Hello" as default).
function create_message(name, greet = "Hello") {
    return name + ", " + greet;
};
  
//   8. Calculate Discount
//   Write a function apply_discount that calculates the final price of an item after applying a discount. The discount should be a default of 10%.
function apply_discount(price, discount = 10) {
    return price - (price * discount / 100);
};

console.log(apply_discount(100));

//   9. Introduction Function
//   Create a function introduce that takes a name, age, and country. If age and country are not provided, they should default to "unknown".
function introduce(name = "unknown", age = "unknown", country = "unknown") {
    return name + " " + country + " " + age;
};

console.log(introduce("asd","asda"));

  
//   10. Calculate Final Price
//   Write a function calculate_price that takes the price of an item and a sales tax. The sales tax should default to 5%.
function calculate_price(price, tax = 5) {
    return price + (tax * price / 100);
};

console.log(calculate_price(100, 10));


//   11. Find the Maximum
//   Create a function find_max that accepts three numbers and returns the largest one using comparison operators and if-else statements.
function find_max(arr) {
    max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        };
    };
    return max;
};

console.log(find_max([1,9,2,1]));

  
//   12. Pass or Fail
//   Write a function pass_or_fail that accepts a student's score and returns "Pass" if the score is 50 or above, and "Fail" otherwise.
function pass_or_fail(score) {
    if(score >= 50) {
        return "pass";
    } else {
        return "fail";
    };
};

console.log(pass_or_fail(40));

//   13. Sum of Numbers
//   Write a function sum_of_numbers that accepts a list of numbers and returns their sum using a for loop.
function sum_of_numbers(nums) {
    sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    };
    return sum;
};

console.log(sum_of_numbers([1,2,3]));
  
//   14. Count Even Numbers
//   Create a function count_evens that accepts a list of integers and returns the count of even numbers using a for loop.
function count_evens(ints) {
    let count = 0;
    for(let i = 0; i < ints.length; i++) {
        if(ints[i] % 2 == 0){
            count++
        };
    };
    return count;
};

console.log(count_evens([1,2,3,4]));