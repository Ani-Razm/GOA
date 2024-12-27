// 5) შევქმნათ ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს ამ მასივის ელემეტების ჯამს
function sum(lst) {
    result = 0;
    for(let num of lst){
        result += num;
    }
    return result;
};

console.log(sum([1,2,3]));

// 6) შევქმნათ ფუნქცია რომელსაც გადაეცემა ობიექტების მასივი და აბრუნებს მასივს ამ ობიექტების name- propetry-ით
function get_name(objects) {
    names = [];
    for(let object of objects){
        names.push(object.name);
    };
    return names;
};

function Person(name, surname){
    this.name = name,
    this.surname = surname
};

const pers1 = new Person("ani", "razmadze");
const pers2 = new Person("laki", "razmadze");

let lst = [pers1, pers2];

console.log(get_name(lst))


// 7) შევქმნათ ობიექტი და გავუწეროთ მას 3 მეთოდი და 3 ფროფერთი 
function Person(name, surname, age){
    this.name = name,
    this.surname = surname,
    this.age = age,

    this.getName = function () {
        return this.name
    },
    this.getSurname = function () {
        return this.surname
    },
    this.getAge = function () {
        return this.age
    }
};

const pers3 = new Person("ani", "razmadze", 18);

console.log(pers3.getAge())
console.log(pers3.getName())
console.log(pers3.getSurname())

// 8) შევქმნათ ფუნქცია რომელსაც გადაეცემა დიდი ტექსტი ან წინადადება (სტრინგი) და უნდა დააბრუნოს ყველაზე დიდი და ყველაზე პატარა ნაპოვნი სიტყვა (მასივის ფორმატში) ( [ ყველაზე პატარა, ყველაზე დიდი ] )
function smallestAndBigest(s) {
    s = s.split(" ")
    return s.sort((a, b) => a.length - b.length)[0] + " " +  s.sort((a, b) => a.length - b.length)[s.length - 1]
}

console.log(smallestAndBigest("ani anii an"))
