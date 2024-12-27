let paragraphs = document.body.children;

paragraphs[0].style.color = "red";
paragraphs[1].style.color = "blue";

//---------------------------------------------------------

let info = document.getElementById("p3");
let paragraphs2 = document.getElementsByClassName("p");

for(let i = 0; paragraphs2.length > i; i++){
    paragraphs2[i].style.color = "red"
    paragraphs2[i].innerHTML = "red"
}

info.addEventListener("click", function () {
    info.textContent = "bani"
})