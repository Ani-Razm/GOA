const countDiv = document.querySelector('.count');
const buttons = document.querySelectorAll('button');

window.addEventListener('load', () => {
    loadInfo();
})

let count = 0;
buttons[0].addEventListener('click', () => {
    count++;
    countDiv.textContent = count;
    saveInfo(count);
})

buttons[1].addEventListener('click', () => {
    count--;
    countDiv.textContent = count;
    saveInfo(count);
})

buttons[2].addEventListener('click', () => {
    count = 0;
    countDiv.textContent = count;
    saveInfo(count);
})

function loadInfo() {
    let count = localStorage.getItem('count');
    countDiv.textContent = count;
}

function saveInfo(count) {
    let countValue = localStorage.setItem('count', count);
}