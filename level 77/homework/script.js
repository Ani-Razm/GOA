// 1) შექმენით ფუქცია რომელიც გამოიტანს ("გამარჯობა")-ს (ვოიდ ფუნქცია)
function greet() {
    console.log("gamarjoba");
};

greet();

// 2) შექმენით ფუნქცია რომელსაც გადაეცემა სახელის არგუმენტი და გამოიტანს ამ სახელის მისალმებას (მაგ: "გამარჯობა, ლაშა")
function greet2(name) {
    return `hello, ${name}`;
};

console.log(greet2("ani"));

// (ვოიდ ფუნქცია)
// 3) შექმენით ფუნქცია რომელიც აბრუნებს გადაცემულ რიცხვზე ერთით მეტს (მაგ: 55->56)  (ჩვეულებრივი ფუნქცია)
function increment(num) {
    return num + 1;
};

console.log(increment(2));

// 4) შექმენით ფუნქცია რომელიც აბრუნებს არა-ნეგატიური რიცხვის ნეგატიურ ვერსიას და შემდეგ გამოიყენეთ ეს ფუნქცია რომ გამოიტანოთ დაბრუნებულზე ერთით მეტი რიცხვი (მაგ: თუ ფუნქციას გადავეცით 44 საბოლლოდ უნდა გამოვიტანოთ (კონსოლში) -43 ) (ჩვეულებრივი ფუნქცია)
function changeToOposite(num) {
    return num * -1;
};

console.log(changeToOposite(5));
console.log(changeToOposite(-5));

// 5) გავაკეთოთ ფუნქცია რომელიც გადაცემული ID-ს მიხედვით აბრუნებს html-ის ელემენტს (მაგ: "first" -> document.getElementbyId("first")) შემდეგ კი გამოიყენეთ ეს ფუნქცია რომ დაბრუნბულ ელემენტს 3 ატრიბუტი შევუცვალოთ (მაგ: color, backgroundColor, textContent) (ჩვეულებრიივი ფუნქცია)
function giveElementById(id) {
    return document.getElementById(id);
};

const p1 = giveElementById("p1");

p1.style.color = "red";
p1.style.backgroundColor = "blue";
p1.textContent = "red";

// WARNING!! ⚠️ (გამოვიყნოთ შესაბამისი სახელები და დავიცვათ ჯავასკრიპტის 'camel-case'  სტრუქტურა, ასევე ძალიან გთხოვთ გამოიყენეთ external ჯავასკრიპტი, ანუ ჯავასკრიპტის კოდი ცალკე ფაილში დაწერეთ)