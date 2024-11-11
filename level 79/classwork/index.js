const buttons = document.getElementsByTagName("button");
const divs = document.getElementsByTagName("div");

buttons[0].addEventListener("mouseover", function () {
    divs[0].style.backgroundColor = "red";
    divs[0].textContent = "1";
    divs[0].style.opacity = "1";
    
})

buttons[1].addEventListener("mouseover", function () {
    divs[1].style.backgroundColor = "blue";
    divs[1].textContent = "2";
    divs[1].style.opacity = "1";
})

buttons[2].addEventListener("mouseover", function () {
    divs[2].style.backgroundColor = "green";
    divs[2].textContent = "3";
    divs[2].style.opacity = "1";
})