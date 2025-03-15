// Basic Callback - Logging a Message with Delay
// Goal: გაიგო, როგორ გამოიყენება callback ფუნქცია და setTimeout().

// Task:
// წერე ფუნქცია, რომელიც იღებს name და callback ფუნქციას. ფუნქცია უნდა დაიდოს setTimeout()-ში, რომ 2 წამში დაბეჭდოს მისასალმებელი მესიჯი.

function greet(name) {
    console.log('hello ' + name);
}

function func(name, callback) {
    setTimeout(() => callback(name), 2000);
}

func('ani', greet);