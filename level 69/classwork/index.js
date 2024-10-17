// array sort()

console.log([3,2,1].sort())
console.log(["b","c","a"].sort())
console.log([3,2,1,5,10].sort())

// ალაგებს მასივის რიხცვებს ზრადდობის მიხედვით ხოლო სიტყვებს ანბანის მიხედვით

// araay reverse()

console.log([3,2,1].reverse())
console.log(["b","c","a"].reverse())
console.log([3,2,1,5,10].reverse())

// ალაგებს მასივის ელმენეტებს უკუღმა

// Array length
console.log([3,2,1].length)
console.log(["b","c","a"].length)
console.log([3,2,1,5,10].length)

//აბრუნებს მასივის სიგრძეს(ანუ მასივში არსებული ელემენტების რაოდენობას)

// Array toString()
console.log(typeof([3,2,1].toString()))
console.log(typeof([8,10].toString()))
console.log(typeof([3,2,1,5,10].toString()))

// გარდაქმნის მასივში არსებულ რიცხვებს სტრინგებად

// Array at()

let lst3 = [3,2,1]

console.log(lst3.at(0))
console.log(lst3.at(1))
console.log(lst3.at(2))

// ინდექსირების მსგავსია, უბრალოდ მეთოდია. აბრუნებს კონტერტულ ინდექსზე მყოფ ელემენტს მასივიდან.



// Array join()
console.log([3,2,1].join(""))
console.log(["b","c","a"].join(" "))
console.log([3,2,1,5,10].join(" "))

// ამატებს ერთმანეთს მასივის ლემენეტებს და გარდაქმნის მათ ერთ სტრინგად

// Array pop()

let lst = [3,2,1]

lst.pop()
console.log(lst)
console.log(["b","c","a"].pop())
console.log([3,2,1,5,10].pop())

//აგდებს ბოლო ელემენტს მასივიდან და აბრუნებს ამ ამოგდებულ ელემენტს

// Array push()
let lst1 = [3,2,1]
console.log(lst1.push(12, 12))
console.log(lst1)

//ამატებს მასივის ბოლოში ახალ ელემენტს და აბრუნებს მასივის ახალ სიგრძეს

// Array shift()
let lst5 = [3,2,1,3]
lst5.shift()
console.log(lst5)
lst5.shift()
console.log(lst5)
lst5.shift()
console.log(lst5)

// აშორებს პირველ ელემენტს მასივიდან და გადაადგილებს ყველა დანარჩენ ელემენტს დაბალი ინდექსისკენ(ანუ მარცხნივ).
// აბრუნებს იმ ელემენტს რომელსაც აშორებს

// Array unshift()
let lst6 = [3,2,1,3]
lst6.unshift(9)
console.log(lst6)
lst6.unshift(9)
console.log(lst6)
lst6.unshift(9)
console.log(lst6)

// ამატებს მასივის დასაწყისში ახალ ელემენტს და დანარჩენ ელემენტებს გადაადგილებს მარჯვნივ
// აბრუნებს ლისტის სიგრძეს ელემენტის დამატების შემდეგ

// Array delete()
let lst7 = [3,2,1,3]
delete lst7[0]
console.log(lst7)
delete lst7[1]
console.log(lst7)
delete lst7[3]
console.log(lst7)

// შლის ელემენტებს კონკრეტულ ინდექსებზე და მათ ადგილზე ტოვებს ცარიელ ელემენტებს.


// Array concat()
let lst8 = [3,2,1,3];
let lst9 = [3,2,1,3];

console.log(lst8.concat(lst9));

let lst10 = ["1", "b", 3];
let lst11 = [3,2,1];

console.log(lst10.concat(lst11, lst8));

let lst12 = ["a", "a"];
let lst13 = ["a", "s", "b"];

console.log(lst12.concat(lst13));

// ამატებს სხვადასხვა მასივებს ერთმანეთს და ქმნის ერთ ახალ მასივს

// Array indexOf()
console.log([3, 2, 1].indexOf(3))
console.log(["b", "c", "a"].indexOf("c"))
console.log([3, 2, 1, 5, 10, 0, 10].indexOf(10,5))

// აბრუნებს კონკრეტული ელემენტის ინდექსს მასივსში,თუ ვერ იპოვის აბრუნებს -1-ს.
// თუ მოსაძებნი ელემენტი რამოდენიმეა მასივში, მაშინ ეს მეთოდი დააბრუნებს იმ ელემენტის ინდექსს რომელიც პირველი შეხვდება.
// ასევე თუ გვინდა მოცემულმა მეთოდმა, ელემენტის მოძებნა დაიწყოს კონკრეტული ადგილიდან, მაშინ მეორე არგუმენტად უნდა მივუთითოთ ინდექსი, საიდანაც ის დაიწყებს ძიებას

// Array lastIndexOf()
console.log([3, 2, 1, 3, 1].lastIndexOf(3))
console.log(["b", "c", "a", "с"].lastIndexOf("c"))
console.log([3, 2, 1, 5, 10, 0, 10].lastIndexOf(10, -2))

//აბრუნებს კონკრეტული ელემენტის პოზიციას სადაც ის ბოლოჯერ ჩნდება.
//მეორე არგუმენტად გადაეცემა ის ინდექსი, საიდანაც უნდა დაიწყოს ფუნქციამ ძებნა.

// Array includes()
console.log([3, 2, 1, 3, 1].includes(3))
console.log(["b", "c", "a", "с"].includes("c"))
console.log([3, 2, 1, 5, 10, 0, 10].includes(-2))

//ამოწმებს შეიცავს თუ არა მასივი რაღაც კონკრეტულ ელემენტს და მაგის მიხედვით აბრუნებს boolean მნიშვნელობებს