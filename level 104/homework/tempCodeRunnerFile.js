
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