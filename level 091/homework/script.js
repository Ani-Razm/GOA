const inputs = document.querySelectorAll("input");
const small = document.querySelectorAll("small");

// checking if name is valid
inputs[0].addEventListener("blur", function () {
    validName = true;
    if (inputs[0].value.length < 3) {
        validName = false;
    }

    alpha = "abcdefghijklmnopqrstuvwxyz";
    for (let l of inputs[0].value.toLowerCase()) {
        if (!alpha.includes(l)) {
            validName = false;
        }
    }

    if (!validName) {
        inputs[0].style.backgroundColor = "#ffbbbb";
        small[0].style.display = "block";
        small[0].textContent = "Name must be at least 3 characters long and contain only alphabets";

    } else {
        inputs[0].style.backgroundColor = "#bbffbb";
        small[0].style.display = "none";
    }
});

// checking if email is valid
inputs[1].addEventListener("blur", function () {
    validEmail = true;

    if (!inputs[1].value.endsWith(".com") || !inputs[1].value.includes("@")) {
        validEmail = false;
    }

    if (!validEmail) {
        inputs[1].style.backgroundColor = "#ffbbbb";
    } else {
        inputs[1].style.backgroundColor = "#bbffbb";
    }
});

// checking if password is valid
inputs[2].addEventListener("blur", function () {

    validLength = true;
    if (inputs[2].value.length < 8) {
        validLength = false;
    }

    specialCharacters = "!@#$%^&*()_+";
    bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    hasSpecialCharacter = false;
    for (let char of inputs[2].value) {
        if (specialCharacters.includes(char)) {
            hasSpecialCharacter = true;
            break;
        }
    }

    hasBigLetter = false;
    for (let char of inputs[2].value) {
        if (bigLetters.includes(char)) {
            hasBigLetter = true;
            break;
        }
    }

    if (!validLength || !hasSpecialCharacter || !hasBigLetter) {
        inputs[2].style.backgroundColor = "#ffbbbb";
        small[1].style.display = "block";
        small[1].textContent = "Password must be at least 8 characters long and contain at least one special character(!@#$%^&*()_+) and one big letter";
    } else {
        inputs[2].style.backgroundColor = "#bbffbb";
        small[1].style.display = "none";
    }
});

// checking if second password matches first one
inputs[3].addEventListener("blur", function () {
    if (inputs[3].value != inputs[2].value) {
        inputs[3].style.backgroundColor = "#ffbbbb";
        small[2].style.display = "block";
        small[2].textContent = "password doesn't matches";
    } else {
        inputs[3].style.backgroundColor = "#bbffbb";
        small[2].style.display = "none";
    }
});

// checking if user is 18 years old or older
inputs[4].addEventListener("blur", function () {
    if (inputs[4].value < 18) {
        inputs[4].style.backgroundColor = "#ffbbbb";
        small[3].style.display = "block";
        small[3].textContent = "you need to be at least 18 years old";
    } else {
        inputs[4].style.backgroundColor = "#bbffbb";
        small[3].style.display = "none";
    }
});


// taking info from user and storing it in an array
let info = [];

inputs[5].addEventListener("click", function (e) {
    e.preventDefault();
    let person = {};
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].style.backgroundColor == "rgb(255, 187, 187)") {
            alert("please fill all fields correctly")
            return;
        }
    }
    for (let i = 0; i < inputs.length - 1; i++) {
        person[inputs[i].name] = inputs[i].value;
    }
    info.push(person);
    console.log(info);
});