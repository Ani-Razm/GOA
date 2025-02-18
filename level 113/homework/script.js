// სავარჯიშო 1:
// დაამატე initials getter, რომელიც დააბრუნებს პიროვნების ინიციალებს. თუ პიროვნება აქვს firstName და lastName properties, დააბრუნე მხოლოდ პირველი ასო ორივედან.
// სავარჯიშო 2:
// დაამატე ageInMonths getter, რომელიც დააბრუნებს პიროვნების ასაკს თვეებში (თუ პიროვნებას აქვს age property, რომელიც აჩვენებს მის ასაკს წლებით).
// სავარჯიშო 3:
// დაამატე isRetired getter, რომელიც დააბრუნებს true, თუ პიროვნება არის პენსიონერი (60 წლის ან მეტი), და false თუ არა.
// სავარჯიშო 4:

class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    get initials() {
        return this.name[0].toUpperCase() + "." + this.surname[0].toUpperCase() + ".";
    }

    get ageInMonths() {
        return this.age * 12
    }

    get isRetired() {
        return this.age >= 60;
    }
}

const pers = new Person('ani', "razmadze", 18);
console.log(pers.initials);
console.log(pers.ageInMonths);
console.log(pers.isRetired);

// დაამატე formattedPrice getter, რომელიც დააბრუნებს პროდუქტის ფასს ფორმატირებულად (მაგალითად, "$100.00").
// ავარჯიშო 5:
// დაამატე discountPrice getter, რომელიც დააბრუნებს ფასის შეღავათიან ვერსიას
// წარმატებები ♡´･ᴗ･`♡

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    get formattedPrice() {
        return `$${this.price.toFixed(2)}`
    }

    get discountPrice() {
        return`$${(this.price * 0.8).toFixed(2)}`
    }
}

const prod = new Product('banana', 100);
console.log(prod.formattedPrice);
console.log(prod.discountPrice);