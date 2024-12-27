const input = document.querySelector("input");
const div = document.querySelector("#specials-div");

input.style.transition = "all ease 0.4s";

input.addEventListener("input", function () {
    div.textContent = "";

    // checking password length
    if (input.value.length <= 8) {
        input.style.background = "red";
    } else if (input.value.length > 8 && input.value.length < 10) {
        input.style.background = "yellow";
    } else {
        input.style.background = "green";
    }

    // checking the password for special characters
    let specials = "!@#$%^&*";
    let valid = false;

    for (let special of specials) {
        if (input.value.includes(special)) {
            valid = true;
        }
    }

    if (!valid) {
        div.textContent = "it needs to include special characters(!@#$%^&*)"
    }
})