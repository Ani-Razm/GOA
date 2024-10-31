// 1)
// შექმენით div ბლოკი და javascript-ის innerHTML ატრიბუტის საშუალებით დაამატეთ რამდენიმე პარაგრაფი (მინიმუმ 3), 2 ღილაკი და სხვა თქვენთვის სასურველი ელემენტები

//ავირჩიეთ პირველი ელემენტი html დოკუმენტში, დივ თეგით.
let div = document.querySelector("div");

//ჩავამატეთ დივ თეგის შიგნით ელემენტები.
div.innerHTML = `
    <p>ani</p>
    <p>ani</p>
    <p>ani</p>
    <button>click</button>
    <button>click</button>
    <p><b>ani</b></p>
`

// 2)
// შექმენით დაულაგებელი სია პროგრამირების ენების შესახებ და ნასწავლი მეთოდების: document.createElement() და document.appendChild() საშვალებით ჩაამატეთ სიის ელემენტები, რომლებშიც ეწერება სხვადასხვა პროგრამირების ენის სახელი.

//შევქმენი ახალი ელემენტები.
const ul = document.createElement("ul");
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

//შევუცვალე ლისტის ელემენტებს შიგთავსი.
li.innerHTML = "js";
li2.innerHTML = "python";
li3.innerHTML = "c++";

//ჩავამატე ul თეგში ლისტის ელემენტები.
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);

//ჩავამატე ul თეგი body თეგში.
document.body.appendChild(ul);

// 3)
// შექმენით ფორმა რომელშიც მომხმარებელს შემოატანინებთ სახელს, გვარსა და ემაილს. შემდეგ ეს მონაცემები დაამატეთ ცხრილში ნასწავლი მეთოდების საშვალებით, ასევე დაამატეთ წაშლის ფუნქცია ცხრილში ელემენტზე დაჭერისას.

//გადმოვიტანე input-ები და td-ების ელემენტები, მასივის სახით.
let inputs = document.getElementsByTagName("input");
let tds = document.getElementsByTagName("td");

//ღილაკს დავუმატე მოვლენების მსმენელი, რომელიც უცვლის ცხრილს შიგთავს, ღილაკზე დაჭერისას(კონკრეტულად, ინფუთში ჩაწერილ ინფორმაციას წერს ცხრილში).
btn.onclick = function () {
    tds[0].textContent = inputs[0].value;
    tds[1].textContent = inputs[1].value;
    tds[2].textContent = inputs[2].value;
}

//ეს უკვე reset ღილაკს დავუმატე მოვლენების მსმენელი, რომელიც შლის ცხრილის შიგთავსს, ღილაკზე დაჭერისას.
reset.onclick = function () {
    tds[0].textContent = "";
    tds[1].textContent = "";
    tds[2].textContent = "";
}