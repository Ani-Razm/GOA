// Main function
function calculator(func, ...args){
    return func(...args)
}

// Other functions
function add(...args){
    let result = 0;
    for(let num of args){
        result += num
    }
    return result
}
   
function subtract(...args){
    let result = args[0]
    for(let num of args.slice(1)){
        result -= num
    }
    return result
}

function multiply(...args){
    let result = 1;
    for(let num of args){
        result *= num
    }
    return result
}
  

// Test cases
console.log(calculator(add, 1, 2, 3, 4)) // 10
console.log(calculator(subtract, 1, 2, 3, 4)) // -8
console.log(calculator(multiply, 1, 2, 3, 4)) // 24