// -----------------------------------------------------
// *recursion* -----------------------------------------

// call function 50 times, using recursion
function func(n = 0) {
    n++;
    console.log(n);
    if (n == 50) {
        return;
    }
    return func(n);
}

func(); // func(0) --> func(1) ---> func(2) ... --> func(49) --> end

// ----------------------------------------------------------
// *asynchronous programming* -------------------------------

setTimeout(() => console.log('hello'), 1000);
console.log('bye');

// ---------------------------------------------------------
// *synchronous programming* -------------------------------

function hello(waitCallback, byeCallback) {
    setTimeout(() => {
        console.log('hello');
        waitCallback(byeCallback);
    }, 2000);
}

function wait(callback) {
    setTimeout(() => {
        console.log('wait');
        callback();
    }, 2000);
}

function bye() {
    setTimeout(() => console.log('bye'), 1000);
}

hello(wait, bye);

// Callback hell

// ---------------------------------------------------------
// *Callback* ----------------------------------------------

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calc(a, b, func) {
    return func(a, b);
}

console.log(calc(1, 2, add));
console.log(calc(1, 2, subtract));