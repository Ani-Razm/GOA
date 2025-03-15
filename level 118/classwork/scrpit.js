// 1) შექმენით პროგრამა რომელიც საშუალებას მოგვცემს დავიყოთ ჯგუფებად.
let students = ['ani', 'gabro', 'lasha', 'nika', 'ilia', 'nata', 'giorgi', 'mate', 'luka'];
let leaders = ['lasha-giorgi', 'data', 'kote', 'gobroni', 'luka'];

let groupsCount = leaders.length;
let studentsLength = students.length;

let result = [];

for (let i = 0; i < groupsCount; i++) {
    group = [];
    while (group.length < 2) {
        let randomIndex = Math.trunc(Math.random() * students.length);
        group.push(students.splice(randomIndex, 1).toString());
    }
    group.unshift("**" + leaders[i] + "**");
    result.push(group);
}

result.push(students);

console.log(result);


// 2) შექმენით კარტის კლასი, პინის ფულის და 'თქვენ შესახებ ფაქტების' ფროფერთიები, დაამატეთ შესაბამისი მეთოდები(ფულის შეტანა/გამოტანა)

class Card {
    #money;
    #aboutMe;
    #pin;
    constructor(money, aboutMe, pin) {
        this.pin = pin;
        this.money = money;
        this.#aboutMe = aboutMe;
    }
    
    get infoAboutMe() {
        return 'info about me: ' + this.#aboutMe;
    }

    set money(amount){
        if(amount < 0){
            console.log('invalid amount');
        } else {
            this.#money = amount;
        }
    }

    get money() {
        let access = prompt('enter your pin to get total money amount: ');
        if(this.#pin == access){
            return this.#money;
        } else {
            console.log('invalid pin');
        }
    }

    set pin(p) {
        if(p.length == 4){
            this.#pin = p;
        } else {
            console.log('invalid pin');
        }
    }

    get pin() {
        let fact = prompt('enter your one fact about you to deposit money: ');
        if(this.#aboutMe.includes(fact)){
            return this.#pin;
        }

    }

    deposit(amount) {  
        let access = prompt('enter your pin to deposit money: ');
        if(this.#pin == access){
            if(amount  < 1){
                console.log('invalid amount');
            } else {
                this.money += amount;
            } 
        }
    }

    withdraw(amount){
        let access = prompt('enter your pin to withdraw money: ');
        if(this.#pin == access){
            if(this.money <= amount){
                this.money -= amount;
            } else {
                console.log('invalid amount');
            }
        } else {
            console.log('invalid pin');
        }
    }
}

const card = new Card(100, ["age: 18", "loves pets"], "1234");

card.deposit(200)
console.log(card.money)




