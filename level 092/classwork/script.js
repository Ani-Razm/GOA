//2
let input = document.getElementsByTagName("input");
let div = document.getElementsByTagName("div");

let span = document.createElement("span");
div[0].appendChild(span);

input[0].addEventListener("input", function () {
    span.textContent = input[0].value.replaceAll(" ", "").length;
})

//3
input[1].addEventListener("input", function () {
    div[1].textContent = "good";
    div[1].style.color = "green";

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let l of input[1].value) {
        if (!alphabet.includes(l)) {
            div[1].textContent = "error";
            div[1].style.color = "red";
        }
    }
})
