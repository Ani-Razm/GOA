// ---
// Callback with Time Delay (Simulate a Process)
// Goal: გამოიყენე callback და setTimeout() დროის დაგვიანებისათვის, რომ შეიქმნას რეალური პროცესის მოლოდინი.

// Task:
// წერე ფუნქცია, რომელიც იღებს მესიჯს და callback ფუნქციას. ფუნქცია უნდა დაბეჭდოს მესიჯი 2 წამით დაგვიანებით setTimeout()-ის გამოყენებით. შემდეგ callback უნდა ამოწმებდეს, რომ პროცესი დასრულდა.

function func(text, callback) {
    setTimeout(() => {
        console.log(text);
        callback();
    }, 2000)
}

func('ani', () => console.log('end'));