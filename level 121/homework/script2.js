// Callback for Array Manipulation with Delay
// Goal: გამოიყენე callback და setTimeout() მასივის ელემენტების შესაცვლელად, დროის დაგვიანებით.

// Task:
// წერე ფუნქცია, რომელიც იღებს რიცხვების მასივსა და callback ფუნქციას. თითოეული რიცხვის კვადრატის გამოთვლა უნდა განხორციელდეს setTimeout()-ის გამოყენებით, რათა იყოს რეალური დელაიდებული პროცესი, და შემდეგ უნდა დააბრუნოს ახალი მასივი.

function square(num) {
    return num ** 2;
}

function squareArr(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {

        setTimeout(() => {
            result.push(callback(arr[i]))
            console.log(result)
        }, 1000 * i + 1);

    }
    return arr;
}

squareArr([1, 2, 3, 4, 5], square)
// ?