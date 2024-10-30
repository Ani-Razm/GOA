// 2) ID ები class ები და მათზე ვარჯიში 

// >შეცვაკლეთ ტექსტის შიგტავსი js-ის გამოყენებით და ღილაკზე დაჭერისას console.log -ში გამოიტანეთ
let p = document.getElementsByTagName("p");
p[0].textContent = "ani";
document.getElementsByTagName("button")[0].addEventListener("click", function () {console.log(p[0].textContent)});

// >შექმენით div ბლოკი და ჩაწერეთ შიგნით ტექსტი, შემდეგ js ის ფაილის გამოყენებით შეაბრუნეთ მათი ფერები, ანუ div ბლოკის ფერი მიანიჭეთ ტექსტს და ტექსტის ფერი დივ ბლოკს

let div = document.getElementsByTagName("div")[0];

div.style.color = "white";
div.style.backgroundColor = "black";

// >ID ის ელემენტისთვის გაწერით, ღილაკზე დაკლიკვისას გაქრეთ ეს ელემენტი ეკრანიდან (გამოიყენეთ სტილი display: none

let ani = document.getElementById("anii");
let btns = document.getElementsByTagName("button");

btns[1].addEventListener("click", function () {
    ani.style.display = "none";
});

// >გაუწერეთ სამ ელემენტს ერთი და იგივე კლასი და ღილაკზე დაჭერისას შეუცვალეთ მათ ფონტი

let lorems = document.getElementsByClassName("lorem");

btns[2].addEventListener("click", function () {
    for(let i = 0; i < lorems.length; i++) {
        lorems[i].style.fontFamily = "sans-serif"
}
});

// 3)ტექსტების მანიპულირება

// >შექმენით ღილაკი რომელზე დაჭერაც პარაგრაპს უცვლის შიგთავსს
let p2 = document.getElementsByTagName("p")[5];

btns[3].addEventListener("click", function () {
    p2.textContent = "ani"
});

// >გამოიყენეთ img tag ი და ღილაკზე დაჭერისას შეუცვალეთ ლინკი 
let img = document.getElementsByTagName("img")[0];

img.addEventListener("click", function () {
    img.src = "/level 41/homework/html.png";
});

// >შექმენით input ველი ID ით და ღილაკი. როდესაც დააჭერთ ღილაკს, input ველში შეყვანილი ტექსტი გამოაჩინეთ პარაგრაფში.

let p3 = document.getElementById("p");
let input = document.getElementById("input");

btns[4].addEventListener("click", function () {
    p3.textContent = input.value;
});