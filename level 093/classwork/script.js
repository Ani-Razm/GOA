const div = document.querySelector('.count');
const div2 = document.querySelector('.count2');
const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

let count = 0;
buttons[0].addEventListener('click', () => {
    count++;
    div.textContent = count;
});

buttons[1].addEventListener('click', () => {
    count--;
    div.textContent = count;
});

buttons[2].addEventListener('click', () => {
    count = 0;
    div.textContent = count;
});

let count2 = 0;
buttons[3].addEventListener('click', () => {
    if (input.value == "") {
        alert("Please enter a number");
        return;
    }
    count2 += Number(input.value);
    div2.textContent = count2;
});

buttons[4].addEventListener('click', () => {
    if (input.value == "") {
        alert("Please enter a number");
        return;
    }
    count2 -= Number(input.value);
    div2.textContent = count2;
});

buttons[5].addEventListener('click', () => {
    if (input.value == "") {
        alert("Please enter a number");
        return;
    }
    if (count2 == 0) {
        alert("Count is already 0");
    } else {
        count2 = 0;
        div2.textContent = count2;
    }
});