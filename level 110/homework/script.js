// 1) შექმნით ცხოველის, მაქანის და ადამიანისკლასი, თითოეული სამი property-თ და ერთი მეთოდით. თითოეული კლასიდან შექმენით სამ-სამი -ობიექტი და გამოიტანეთ ისინი კონსოლში.

class Animal {
    constructor(name, color, weight){
        this.name = name;
        this.color = color;
        this.weight = weight;
    }

    makeSound() {
        console.log(this.name + " makes noise!");
    }
}

class Car {
    constructor(name, color, model){
        this.name = name;
        this.color = color;
        this.model = model;
    }

    info() {
        console.log(`car name: ${this.name}, car color: ${this.color}, car model: ${this.model}`);
    }
}

class Human {
    constructor(name, hairColor, age){
        this.name = name;
        this.hairColor = hairColor;
        this.age = age;
    }

    greet() {
        console.log(`hello, my name is ${this.name}, i am ${this.age} old and i have ${this.hairColor} hair`);
    }
}

const animal = new Animal('dolphin', 'gray', 100);
const animal1 = new Animal('dog', 'white', 5);
const animal2 = new Animal('wolf', 'black', 40);

const car = new Car('bmw', 'gray', 'X4');
const car1 = new Car('mercedes', 'white', 'S-Class');
const car2 = new Car('bugatti', 'black', 'Chiron');

const person = new Human('ani', 'brown', 18);
const person1 = new Human('bani', 'white', 180);
const person2 = new Human('mari', 'red', 20);

console.log(animal, animal1, animal2);
console.log(car, car1, car2);
console.log(person, person1, person2);

animal.makeSound();
car.info();
person.greet();