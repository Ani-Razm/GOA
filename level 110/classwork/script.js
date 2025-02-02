// 1) შექმენით ოთკუთხედის კლასი სიგრძის და სიგანის ფროფერთით და გეთერ მეთოდი მისი პერიმეტრისთვის


// 2) შექმენით ცხოველის კლასი,  შემდეგ მისი შთამომავალი ძუძუმწოვრის კლასი და ძუძუმწოვრის შთამომაცალი ძაღლის კლასი. თითოეული კლასის კონტრუკტორი უნდა იყოს მის მშობელ კლასზე დაფუძენბული.

// Creating classes
class Animal {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    make_noise(){
        return this.name + " makes noises!";
    }
}

class Mammal extends Animal {
    constructor(name, color, hasFur){
        super(name, color);
        this.hasFur = hasFur;
    }

    move(){
        return this.name + " moves!";
    }
}

class Dog extends Mammal {
    constructor(name, color, hasFur, isFriendly){
        super(name, color, hasFur);
      
        this.isFriendly = isFriendly;
    }
    make_noise(){
        return this.name + " barks!";
    }
}

// Creating new objects
const dolphin = new Animal('Bob', "Gray");
const mammal = new Mammal('Elephant', "Gray", false);
const dog = new Dog('Lucky', "White", true, true);

console.log(dolphin);
console.log(mammal);
console.log(dog);

console.log(dolphin.make_noise()); // Bob makes noises!
console.log(mammal.move()); // elephant moves!
console.log(dog.make_noise()); // Lucky barks!

// 3) შექმენით მანქანის და ელექტრონული მანქანის კლასი, გამოიყენეთ extends. ელექტროუნული კლასში შეცვალეთ ერთი მისი მშობელის მეთოდი და მეორე მეთოდზე დააშენეეთ ახალი ფუნქციონალი

// Creating classes
class Car {
    constructor(engine, color, model){
        this.engine = engine;
        this.color = color;
        this.model = model;
        this.fuel = 100;
    }

    move() {
        this.fuel -= 10;
        return 'Car moved, now fuel is ' + (this.fuel) + ' liters';
    }
}

class ElectroCar extends Car{
    showInfo() {
        return `engine: ${this.engine}, color: ${this.color}, model: ${this.model}`;
    }
}

// Creating objects
const car = new Car(4.4, 'black', 'bmw');
const electroCar = new ElectroCar(3.3, 'gray', 'tesla')

console.log(car, electroCar)

console.log(car.move())
console.log(electroCar.move())
console.log(car.move())
console.log(electroCar.move())

console.log(electroCar.showInfo())