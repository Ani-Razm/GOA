// 3) თითეულ ნასწავლ მეთოდზე გააკეთეთ 10-10 მაგალითი

//1. round
console.log(Math.round(3.5));
console.log(Math.round(3.8));
console.log(Math.round(3.1));
console.log(Math.round(0.1));
console.log(Math.round(0.2));
console.log(Math.round(0.3));
console.log(Math.round(0.5));
console.log(Math.round(1.2));
console.log(Math.round(0.9));
console.log(Math.round(3.9));

//2. floor
console.log(Math.floor(3.5));
console.log(Math.floor(3.8));
console.log(Math.floor(3.1));
console.log(Math.floor(0.1));
console.log(Math.floor(0.2));
console.log(Math.floor(0.3));
console.log(Math.floor(0.5));
console.log(Math.floor(1.2));
console.log(Math.floor(0.9));
console.log(Math.floor(3.9));

//3. random
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//4. trunc
console.log(Math.trunc(3.5));
console.log(Math.trunc(3.8));
console.log(Math.trunc(3.1));
console.log(Math.trunc(0.1));
console.log(Math.trunc(0.2));
console.log(Math.trunc(0.3));
console.log(Math.trunc(0.5));
console.log(Math.trunc(1.2));
console.log(Math.trunc(0.9));
console.log(Math.trunc(3.9));

//5. pow
console.log(Math.pow(3,3));
console.log(Math.pow(1,3));
console.log(Math.pow(2,3));
console.log(Math.pow(4,2));
console.log(Math.pow(5,2));
console.log(Math.pow(6,2));
console.log(Math.pow(7,4));
console.log(Math.pow(8,4));
console.log(Math.pow(9,4));
console.log(Math.pow(10,4));

//6. sqrt
console.log(Math.sqrt(9));
console.log(Math.sqrt(16));
console.log(Math.sqrt(25));
console.log(Math.sqrt(36));
console.log(Math.sqrt(100));
console.log(Math.sqrt(1000));
console.log(Math.sqrt(5));
console.log(Math.sqrt(7));
console.log(Math.sqrt(1));
console.log(Math.sqrt(0));

//7. ceil
console.log(Math.ceil(3.5));
console.log(Math.ceil(3.8));
console.log(Math.ceil(3.1));
console.log(Math.ceil(0.1));
console.log(Math.ceil(0.2));
console.log(Math.ceil(0.3));
console.log(Math.ceil(0.5));
console.log(Math.ceil(1.2));
console.log(Math.ceil(0.9));
console.log(Math.ceil(3.9));

// 4) Write a function that generates a random number between 1 and 100 using Math.random(). Ensure the number is an integer.
function randomFrom0To100() {
    return Math.trunc(Math.random() * 100);
};

console.log(randomFrom0To100())

// 5) Write a function that calculates the area of a circle given the radius using the formula πr², and use Math.PI for π.
function circleArea(radius) {
    return Math.PI * radius ** 2
}

console.log(circleArea(10))