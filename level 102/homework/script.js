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
})

function generateId() {
    idDiv.textContent = Math.floor(Math.random() * 10 ** 11);
}

function checkIfIdExists(ID) {
    let idList = JSON.parse(localStorage.getItem('idList')) || [];
    if (idList.includes(ID)) {
        warnDiv.textContent = 'this ID already exists on database';
        warnDiv.style.color = 'red';
        input.style.color = 'red';
    } else {
        warnDiv.textContent = "this ID doesn't exists on database";
        warnDiv.style.color = 'green';
        input.style.color = 'green';

        addIdToLocaLS(ID);
    }
}

function addIdToLocaLS(ID) {
    let idList = JSON.parse(localStorage.getItem('idList')) || [];
    idList.push(ID);
    localStorage.setItem('idList', JSON.stringify(idList))
}