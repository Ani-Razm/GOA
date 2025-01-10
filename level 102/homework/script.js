const generateBtn = document.querySelector('.id-generator button');
const submitBtn = document.querySelector('.id-checker button');
const warnDiv = document.querySelector('.answer');
const input = document.querySelector('input');
const idDiv = document.querySelector('.id-generator div');

generateBtn.addEventListener('click', () => {
    generateId();
});

submitBtn.addEventListener('click', () => {
    checkIfIdExists(input.value);
});

function generateId() {
    idDiv.textContent = Math.floor(Math.random() * 10 ** 11);
}

function checkIfIdExists(ID) {
    let idFound = false;

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        if(localStorage.getItem(key) === ID){
            idFound = true;
            warnDiv.textContent = 'this ID already exists on database';
            warnDiv.style.color = 'red';
            input.style.color = 'red';
            return;
        }
    }

    if(!idFound){
        warnDiv.textContent = "this ID doesn't exists on database";
        warnDiv.style.color = 'green';
        input.style.color = 'green';
    }

    addIdToLocaLS(ID);
}

function addIdToLocaLS(ID) {
    localStorage.setItem(localStorage.length, ID);
}