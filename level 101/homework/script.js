// accessing elements
const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector("button[type='submit']");
const clearAllBtn = document.querySelector('#Clear');
const infosDiv = document.querySelector('.infos');
const about = document.querySelector('textarea');

// adding event listeners
window.addEventListener('load', () => {
    loadInfo();
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addInfo();
    clearInputs();
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload(window);
});

// creating functions
function addInfo(infoFromLocalS) {
    // adding data to local storage
    let userObj = infoFromLocalS || {};

    if (!infoFromLocalS) {
        Array.from(inputs).forEach(input => {
            userObj[input.id] = input.value;
        });
        userObj[about.id] = about.value;
    }

    addtolocalStorage(userObj);

    // adding data on website

    // creating elements
    const ul = document.createElement('ul');
    const infoDiv = document.createElement('div');
    infoDiv.classList = "info"; // adding class for styling

    for (let key in userObj) {
        const li = document.createElement('li');
        li.innerHTML = `${key}: <span>${userObj[key]}</span>`;
        ul.appendChild(li);
    }

    // adding remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';

    removeButton.addEventListener('click', () => {
        infoDiv.remove();
        removefromLocalStorage(userObj);
    });

    infoDiv.appendChild(ul);
    infoDiv.appendChild(removeButton);
    infosDiv.appendChild(infoDiv);
}

function loadInfo() {
    const infos = JSON.parse(localStorage.getItem('infos')) || [];
    infos.forEach(info => addInfo(info));
}

function addtolocalStorage(userObj) {
    const infos = JSON.parse(localStorage.getItem('infos')) || [];
    infos.push(userObj);
    localStorage.setItem('infos', JSON.stringify(infos));
}

function removefromLocalStorage(userObj) {
    const infos = JSON.parse(localStorage.getItem('infos')) || [];
    let filteredInfos = infos.filter(info => JSON.stringify(info) !== JSON.stringify(userObj));
    localStorage.setItem('infos', JSON.stringify(filteredInfos));
}

function clearInputs() {
    Array.from(inputs).forEach(input => {
        input.value = '';
    })
    about.value = '';
}