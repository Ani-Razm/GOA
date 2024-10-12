//1) შექმენით საიტი სადაც გექნებათ ერთი ღილაკი. ამ ღილაკზე დაკლიკებისას მომხარებელს უნდა გამოიუტანოთ confirm box-ი. სადაც შეეკითხებით არის თუ არა ის ზრდასრული(18 წელს ზემოთ). თუ მომხარებელი დააჭერს OK-ს გამოუტანეთ ალერტ მესიჯი You are adult, სხვა შემთხვევაში გომუტანეთ, You are kid.

let btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    let adult = confirm("are you 18 yo old?");
    if(adult){
        alert("you are adult")
    } else {
        alert("you are kid")
    }
})

//2) შექმენით საიტი სადაც გექნებათ სარეგისტრაციო ფორმა. მომხარებელს უნდა შემოატანინოთ სახელი, ემაილი, პაროლი და გამოუტანოთ checkbox-ი. ფორმა არ დადასტურდეს იქამდე სანამ მომხარებელი არ მონიშნავს ჩექბოქსს. შეამოწმეთ არის თუ არა ინფუთები ცარიელი. თუ კი გამოუტანეთ გამაფრთხილებელი მესიჯი და გათიშეთ ფუნქცია, ხოლო თუ მომხარებელმა ყველაფერი სწორად შეიყვანა გამოიტანეთ ინფუთების მნიშვნელობა კონსოლში

const form = document.getElementById("f1");
const btn2 = document.getElementById("btn2");

function validateForm() {
    if(form.elements.name.value == "" || form.elements.email.value == "" || form.elements.password.value == "" || form.elements.lorem.value == "") {
        alert("please fill fields");
        return;
    };
    
    if(!form.elements.check.checked) {
        alert("please check the checkbox");
        return;
    };

    console.log(form.elements.name.value);
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);
    console.log(form.elements.lorem.value);  
}

btn2.onclick = validateForm;