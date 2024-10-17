// Exercise Set 1: Basics (Array Length, toString, at, join, pop, push)
// Get Length: Create an array with 5 items. Log the length of the array.
let lst = [1, 2, 3, 4, 5];
console.log(lst.length);

// Convert to String: Convert the same array to a string using toString() and log the result.
console.log(lst.toString());

// Access Element: Use the at() method to access the second element and log it.
console.log(lst.at(1));
        
// Join Elements: Use join() to combine the array elements with - between them.
console.log(lst.join(" "));
// Push & Pop: Add two new elements to the array using push(), then remove the last element using pop().
lst.push(1, 2);
lst.pop();
console.log(lst);

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

// Exercise Set 2: Modify Array (shift, unshift, delete, concat)
// Shift Element: Create an array and remove the first element using shift().
let lst2= [1, 2, 3, 4];
lst2.shift();
console.log(lst2);

// Unshift Element: Add a new element at the beginning using unshift().
lst2.unshift(1);
console.log(lst2);

// Delete Element: Use the delete operator to remove the second element. Log the array and observe the result.
delete lst2[1];
console.log(lst2);

// Concatenate Arrays: Create two arrays and use concat() to merge them.
console.log(lst.concat(lst2));

// Explore Unshift & Length: After using unshift(), log the new length of the array.
console.log(lst2.unshift("a"));

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

// Exercise Set 3: Searching (indexOf, lastIndexOf, includes)
// Find Index: Create an array with repeated values. Use indexOf() to find the first occurrence of an element.
let lst3 = [1, 2, 31, 1, 1, 6];
console.log(lst3.indexOf(1));

// Find Last Index: Use lastIndexOf() to find the last occurrence of the same element.
console.log(lst3.lastIndexOf(1));

// Check Inclusion: Use includes() to check if a specific element exists in the array.
console.log(lst.includes(2));

// Invalid Index Search: Use indexOf() to search for a non-existing element. Log the result.
console.log(lst3.indexOf(10));

// Case Sensitivity: Check if includes() is case-sensitive by searching for different cases of the same string.
let name = "ani";
console.log(name.includes("A"));

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

// Exercise Set 4: Sorting and Reversing (sort, reverse)
// Sort Strings: Create an array of strings and sort them using sort().
let strings = ["a", "c", "b"];
console.log(strings.sort());

// Sort Numbers: Create an array of numbers and sort them in ascending order.
let nums = [1,4,2];
console.log(nums.sort());

// Custom Sort: Use a custom comparison function to sort numbers in descending order.
let numbers = [0,3,1];
console.log(numbers.sort(function(){return -1}) + " ////////////");

// Reverse Array: Use reverse() on a sorted array and log the result.
console.log(nums.reverse());

// Mix Sort and Reverse: Sort an array, then reverse it.
console.log(nums.sort().reverse());

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

// Exercise Set 5: Combined Operations
// Sort and Push: Create an array of numbers, sort it, and add a new number using push(). Log the updated array.
let nums2 = [1,2,9,3,2];
nums2.sort();
nums2.push(1);
console.log(nums2);

// Concatenate and Sort: Create two arrays, merge them with concat(), and sort the result.
let arr = [1,0,9];
let arr2 = [1,8,4];
let newArr = arr.concat(arr2).sort();
console.log(newArr);

// Push and Reverse: Add three new elements to an array, then reverse the entire array.
newArr.push(1,2,3);
console.log(newArr.reverse());

// Find and Remove Element: Use indexOf() to locate an element, then use splice() to remove it.
newArr.splice(newArr.indexOf(9), 1)
console.log(newArr)

// Join and Include Check: Join the elements of an array into a string, split it back into an array, and check if a specific value is included using includes().
console.log(newArr.join(" ").split(" ").includes(1))