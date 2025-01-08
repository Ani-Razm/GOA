const inputs = document.querySelectorAll('input');
const infos = document.querySelector('.infos');
const submitBtn = document.querySelector('input[type="submit"]');
const about = document.querySelector('textarea');
const clearAllBtn = document.querySelectorAll('button')[0];

let counter = 0;

// Load stored info when the page loads
window.addEventListener('load', () => {
    loadInfo();
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    addInfo(); // Add info to the DOM and localStorage
    clearInputs(); // Clear input fields after submission
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    loadInfo();
})

function addInfo(infoFromLocalS = null) {
    const info = document.createElement("div");
    info.classList.add('info-item'); // Optional: Add a class for styling
    const ul = document.createElement("ul");

    // Use either new input or data from localStorage
    const userObj = infoFromLocalS || {};

    if (!infoFromLocalS) {
        Array.from(inputs).forEach(input => {
            if (input.type !== 'submit') {
                userObj[input.id] = input.value;
            }
        });
        userObj[about.id] = about.value;

        // Save new info to localStorage
        saveToLocalStorage(userObj);
    }

    // Populate the `ul` with the object's properties
    for (let key in userObj) {
        const li = document.createElement('li');
        li.innerHTML = `${key}: <span>${userObj[key]}</span>`;
        ul.appendChild(li);
    }

    // Add remove button for each info item
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        info.remove(); // Remove from DOM
        removeFromLocalStorage(userObj); // Remove from localStorage
    });

    info.appendChild(ul);
    info.classList = 'info';

    info.appendChild(removeBtn);
    infos.appendChild(info); // Add the info block to the container
}

function saveToLocalStorage(userObj) {
    let allInfos = JSON.parse(localStorage.getItem('infos')) || [];
    allInfos.push(userObj);
    localStorage.setItem('infos', JSON.stringify(allInfos));
}

function loadInfo() {
    const storedInfos = JSON.parse(localStorage.getItem('infos')) || [];
    storedInfos.forEach(info => addInfo(info));
}

function removeFromLocalStorage(userObjToRemove) {
    let allInfos = JSON.parse(localStorage.getItem('infos')) || [];
    allInfos = allInfos.filter(info => JSON.stringify(info) !== JSON.stringify(userObjToRemove));
    localStorage.setItem('infos', JSON.stringify(allInfos));
}

function clearInputs() {
    Array.from(inputs).forEach(input => {
        if (input.type !== 'submit') {
            input.value = '';
        }
    });
    about.value = '';
}