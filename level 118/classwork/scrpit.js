// 1) შექმენით პროგრამა რომელიც საშუალებას მოგვცემს დავიყოთ ჯგუფებად.
let students = ['ani', 'gabro', 'lasha', 'nika', 'ilia', 'nata', 'giorgi', 'mate']

let groupsCount = 4;
let studentsLength = students.length

let result = []

for (let i = 1; i < groupsCount; i++) {
    group = [];
    while (group.length < studentsLength / groupsCount) {

        let randomIndex = Math.trunc(Math.random() * students.length);
        group.push(students.splice(randomIndex, 1).toString())
    }
    result.push(group)

}

result.push(students)

console.log(result)

// 2) შექმენით კარტის კლასი, პინის ფულის და 'თქვენ შესახებ ფაქტების' ფროფერთიები, დაამატეთ შესაბამისი მეთოდები

class Card {
    constructor(money, aboutMe) {
        this.money = money;
        this.aboutMe = aboutMe;
    }

    get infoAboutMe() {
        return 'info about me: ' + this.aboutMe;
    }

    addInfo(info) {
        this.aboutMe += info;
    }

    get getMoney() {
        return 'you balance is: ' + this.money;
    }

    addMoney(amount) {
        this.money += amount;
    }
}

const card = new Card(100, "name: ani, surname: razmadze, age: 18")

console.log(card.infoAboutMe)
card.addInfo(', height: 175')
console.log(card.getMoney)
card.addMoney(100)
console.log(card.infoAboutMe)
console.log(card.getMoney)