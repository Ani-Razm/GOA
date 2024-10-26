// 1) შექმენით ფუნქცია, რომელიც გამოიტანს მესიჯს სამი წამის შემდეგ
// setInterval(function () {alert("hello")}, 3000);

// 2) შექმენით პროგრამა, რომელიც ყოველ წამს გამოიტანს ამჟამინდელ დროს "საათი:წუთი:წამი"
setInterval(function() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = document.getElementById("time");
    time.textContent = (`${hours}:${minutes}:${seconds}`)   
}, 1000)

// 3) შექმენით პროგრამა, რომელიც ყოველ 3 წამში შეცვლის საიტის background ფონის ფერს.(ფერის მნიშვნელობა შეინახეთ მასივში)
let indx = 0;
setInterval(function() {
    let body = document.getElementById("body");
    let colors = ["blue", "red", "green", "purple", "yellow", "orange", "pink", "white", "black", "brown"];
    body.style.backgroundColor = colors[Math.ceil(Math.random() * 10 - 1)];
}, 1000)

// 4) დაწერეთ პროგრამა, რომელიც ყოველ 5 წამში შეცვლის საიტზე არსებული პარაგრაფის textContent-ს
setInterval(function() {
    let p = document.getElementById("p");
    p.textContent += "ani";
}, 1000)