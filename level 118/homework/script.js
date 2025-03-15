// პირადი ველების შექმნა – შექმენი კლასი, რომელიც შეიცავს ერთ ან მეტ პირად ველს და უზრუნველყოს მათი ინკაფსულაცია.
// getter და setter მეთოდები – დაამატე getter და setter მეთოდები პირადი ველებისთვის, რათა მათთან წვდომა კონტროლდეს.
class Person {
    #name;
    #surname;
    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get fullname() {
        return this.#name + " " + this.#surname;
    }

    get surname() {
        return this.#surname;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if(!name){
            throw "name can't be blank"
        } else {
            this.#name = name;
        } 
    }

    set surname(surname) {
        if(!surname){
            throw "surname can't be blank"
        } else {
            this.#surname = surname;
        }   
    }

    set fullname(newName) {
        if(!newName){
            throw "fullname can't be blank"
        } else {
           const [first, last] = newName.split(' ');
           this.#name = first;
           this.#surname = last;
        }   
    }
}

const p = new Person('ani', 'razmi')
console.log(p.name, p.surname)
p.name = 'bani';
p.surname = 'kjkad';
console.log(p.name, p.surname)
p.fullname = 'ani bani';
console.log(p.name, p.surname, p.fullname)

// მხოლოდ წაკითხვადი ველი – შექმენი კლასი, სადაც პირადი ველი შესაძლებელია მხოლოდ წაკითხვად იყოს და მისი შეცვლა კლასის გარედან შეუძლებელი იყოს. '
class Animal {
    #name;
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

}

const a = new Animal('laki');
console.log(a.name)
// შექმენი BankAccount კლასი - რომელსაც ექნება პირადი ველი #balance. დაამატე getBalance() მეთოდი, რომელიც აბრუნებს ბალანსს და deposit(amount) მეთოდი, რომელიც ანგარიშზე თანხას დაამატებს. ბალანსზე პირდაპირი წვდომა გარედან არ უნდა იყოს შესაძლებელი.
class BankAccount {
    #balance;
    constructor(balance){
        this.#balance = balance;
    }

    get getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }
}

const anisBank = new BankAccount(100);
console.log(anisBank.getBalance)
anisBank.deposit(100)
console.log(anisBank.getBalance)
// console.log(anisBank.#balance) error