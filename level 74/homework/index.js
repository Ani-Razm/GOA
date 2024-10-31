//3) გააკეთეთ თითოეულ ნასწავლ მეთოდზე (.createElement, .appendChild(node), .insertBefore, .removeChild(node), .parentNode, .replaceChild) 5-5 მაგალითი, ახსენით თითოეულის მუშაობა კომენტარებით

//.createElement
//ქმნის ახალ ელემენტს დოკუმენტში, თუმცა არ გამოჩნდება მანანდე, სანამ არ ჩავამატებთ რომელიმე ელემენტში.
let p = document.createElement("p");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let h3 = document.createElement("h3");
let small = document.createElement("small");

p.textContent = "ani";
h1.textContent = "ani";
h2.textContent = "ani";
h3.textContent = "ani";
small.textContent = "ani";

//.appendChild(node)
//ამატებს ელემენტებს კონრეკულ ტოტში.
document.body.appendChild(p);
document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);
document.body.appendChild(small);

//.removeChild(node)
//აშორებს რაიმე ელემენტს კონკრეტული ტოტიდან.
// document.body.removeChild(p);
// document.body.removeChild(h1);
// document.body.removeChild(h2);
// document.body.removeChild(h3);
// document.body.removeChild(small);

//.parentNode
//იგებს ელემენტის მშობელ ტოტს.
console.log(p.parentNode);
console.log(h1.parentNode);
console.log(h2.parentNode);
console.log(h3.parentNode);
console.log(small.parentNode);

//.replaceChild
//ანაცვლებს მშობელი ტოტის შვილ ელემენტს ახალი ელემეტით.
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
let p6 = document.createElement("p");

p2.textContent = "ani";
p3.textContent = "anibani";
p4.textContent = "bani";
p5.textContent = "laki";
p6.textContent = "chiko";

document.body.replaceChild(p2, p);
document.body.replaceChild(p3, h1);
document.body.replaceChild(p4, h2);
document.body.replaceChild(p5, h3);
document.body.replaceChild(p6, small);

//.insertBefore
//გაძლევს იმის საშუალებას, ჩასვა ახალი ტოტი უკვე არსებული ტოტის წინ.
document.body.appendChild(p)

let p7 = document.createElement("p");
let p8 = document.createElement("p");
let p9 = document.createElement("p");
let p10 = document.createElement("p");
let p11 = document.createElement("p");

p7.textContent = "aaaaaaaaa";
p8.textContent = "bbbbbbbbb";
p9.textContent = "ccccccccc";
p10.textContent = "dddddddd";
p11.textContent = "eeeeeeeee";

document.body.insertBefore(p7, p);
document.body.insertBefore(p8, p);
document.body.insertBefore(p9, p);
document.body.insertBefore(p10, p);
document.body.insertBefore(p11, p);