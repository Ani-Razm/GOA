const colorPicker = document.querySelector('input[type="color"]');
const numInput = document.querySelector('#number');
const nameInput = document.querySelector('#name');
const numBtn = document.querySelector('.main-screen button');
const nameBtn = document.querySelector

let score = 0;
let guessNumRange = localStorage.getItem('guessNumRange') || 2 ;
let correctNum = localStorage.getItem('correctNum') || Math.trunc(Math.random() * guessNumRange);
savetoLocalS({name: "correctNum", value: correctNum})
savetoLocalS({name: 'guessNumRange', value: guessNumRange})

// add event listeners -----------------------
window.addEventListener('load', ()=>{
    loadInfo();
});

colorPicker.addEventListener('input', (e) => {
    pickerColor = e.target.value;
    document.querySelector('body').style.background = pickerColor;
    savetoLocalS({name: 'color', value: pickerColor});
});

numBtn.addEventListener('click', () => {
    console.log('click')
    checkIfCorrectAnswer();
});

// defining functions -----------------------
function savetoLocalS(info) {
    localStorage.setItem(info.name, info.value);
}

function loadInfo() {
    const color = localStorage.getItem('color');
    document.querySelector('body').style.background = color;

    const range = localStorage.getItem('guessNumRange');
    document.querySelector('label').querySelector('span').textContent = `1 - ${range}`;
}

function checkIfCorrectAnswer() {
    console.log(correctNum);
    if(numInput.value == correctNum){
        score++;
        guessNumRange *= 2;
        correctNum = Math.trunc(Math.random() * guessNumRange);
        document.querySelector('.userScore').querySelector('span').textContent = score;
        document.querySelector('label').querySelector('span').textContent = `1 - ${guessNumRange}`;
        savetoLocalS({name: 'guessNumRange', value: guessNumRange});
    }
}