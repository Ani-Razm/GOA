// 1) ხელით შეავსეთ 5-ელემენტიანი მთელი რიცხვების მასივი და გამობეჭდეთ მე-2 და მე-4 ინდექსზე მყოფი ელემენტები.
let lst = [1,2,3,4,5]
console.log(lst[2], lst[4])

// 2) შემოგდით ჯერ N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი. შეავსეთ მასივი (0 დან) შეყვანილი რიცხვებით და გამობეჭდეთ კენტ ინდექსზე მყოფი ელემენტები ( a[1], a[3], a[5]...)
let choice = Number(prompt("enter how many numbers you want to add in list: "));
let lst2 = []

for(let i = 1; i <= choice; i++){
    lst2.push(prompt("enter number 2" + i))
}

for(let i = 1; i <= lst2.length; i += 2){
    console.log(lst[i])
}
// 3) აღწერეთ 10 ელემენტიანი მთელი რიცხვების მასივი, შეიყვანეთ კონსოლიდან 10 ელემენტი (for-ით), მასივში არსებული რიცხვები გააორმაგეთ და გამობეჭდეთ ეკრანზე
let lst3 = []
for(let i = 0; i < 10; i++){
    lst3.push(prompt("enter number " + i))
};

for(let i = 0; i < lst3.length; i++){
    lst3[i] = lst3[i] * 2;
};

console.log(lst3);

// 4) შემოგდით ჯერ N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი. შეინახეთ რიცხვები მასივში და გამობეჭდეთ შებრუნებული თანმიმდევრობით. (მაგ: თუ რიცხვებია 5 7 12, გამობეჭდეთ 12, 7, 5)
let userChoice = Number(prompt("enter how many numbers you want to add in lst: "));
let lst4 = [];
for(let i = 1; i < userChoice + 1; i++){
    lst4.push(prompt("enter number " + i));
};

console.log(lst4.reverse())

// 5) შემოგდით N, შემდეგ N ცალი რიცხვი. შეინახეთ მასივში, ადგილი გაუცვალეთ პირველ და ბოლო ელემენტს, და მასივი გამობეჭდეთ ეკრანზე.
let userChoice2 = Number(prompt("enter how many numbers you want to add in lst: "));
let lst5 = [];
for(let i = 1; i < userChoice2 + 1; i++){
    lst5.push(prompt("enter number " + i));
};

let first = lst5[0]
lst5[0] = lst5[lst5.length - 1]
lst5[lst5.length - 1] = first

console.log(lst5)