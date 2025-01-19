// Array Destructuring: Extract values from an array and assign them to variables in a single line of code.
let arr = [1, 2, 3, 4, 5];

let [a, b, c, d, e] = arr;

console.log(a, b, c, d, e);

// Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.
const obj = {
    name: 'ani',
    age: 18
}

const { name, age } = obj;

console.log(name);
console.log(age);

// Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.
const obj2 = {
    userName: 'ani',
    userSurname: 18
}

const { userName: uName, userSurname: uSurname } = obj2;

console.log(uName);
console.log(uSurname);

// Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.

const nums = [1, 2, 3, 4, 5]

const [, , , l] = nums;

console.log(l) // 4

// Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.
const arr2 = [
    { name: 'ani', age: 18 },
    { name: 'laki', age: 8 },
    { name: 'chiko', age: 7 }
];

for (let { name, age } of arr2) {
    console.log(name, age)
};
// Combining Destructuring and Rest Syntax: Use both destructuring and rest syntax together for flexible assignments.
const arr3 = [1, 2, 3, 4, 5];

const [f, s, ...other] = arr3;
console.log(f);
console.log(s);
console.log(other);

// Skipping Elements: Given an array [1, 2, 3, 4, 5], extract only the first and last elements into variables, skipping the middle ones.
const arr4 = [1, 2, 3, 4, 5];

const [f1, , , , l1] = arr4;

console.log(f1, l1)

// Using Destructuring with Map and Filter: Write a function that filters an array of objects based on a condition and uses destructuring to access object properties within the filter function.
const arr6 = [
    { name: 'ani', age: 18 },
    { name: 'laki', age: 8 },
    { name: 'chiko', age: 7 }
];

console.log(arr6.filter(({ name, age }) => name.length > 3 && age < 10))
// Destructuring Arrays with Mixed Types: Given an array containing both primitive values and objects, extract properties from the objects using destructuring.
const arr7 = [{ name1: 'ani', age1: 18 }, 1, "ani"];

const [{name1, age1}, num, str] = arr7;

console.log(name1, age1);
// Manual Destructuring Function Rules
// Function Name: manualDestructing
// Input Parameter: Accepts one parameter obj, which should be an object to be destructured.
// Output: Returns an array containing the values of the properties of the input object.
// Usage: Usable by passing an object as an argument.
// Execution: Extracts the values of the properties from the input object manually, without using any built-in destructuring syntax.
// Returned Array: Contains the values of the properties of the input object in the same order as they are defined in the object.

function manualDestructing(obj) {
    let result = []
    for(let key in obj){
        result.push(obj[key])
    }
    return result
}

console.log(manualDestructing({ name: 'ani', age: 18 }))