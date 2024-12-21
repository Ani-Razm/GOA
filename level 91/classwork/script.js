const form = document.getElementById("form");

const infos = [["ani", "123"], ["laki", "321"], ["chiko", "453"]];

form.addEventListener("submit", function () {
    // checking if name and pasword matches
    let validNameAndPass = false;
    for (let i = 0; i < infos.length; i++) {
        if (infos[i][0] == form.name1.value && infos[i][1] == form.password.value) {
            validNameAndPass = true;
        }
    }

    if (!validNameAndPass) {
        alert("incorrect password or name");
    }

    // checking if first password matches second password
    if (form.password.value != form.querySelector("#secondPassword").value) {
        alert("passwords doesnt match");
    }

    // cheking if user is 18 yo or older
    if (form.age.value < 18) {
        alert("you need to be at least 18 year old to register");
    }

    // cheking is email valid or not
    let validEmail = true;
    const notValid = " !#$%^&*()+=";

    for (let l of notValid) {
        if (form.email.value.includes(l)) {
            validEmail = false;
        }
    }

    if(!form.email.value.endsWith(".com") && !form.email.value.endsWith(".net") && !form.email.value.endsWith(".org")){
        validEmail = false;
    }

    if(!validEmail){
        alert("not valid email")
    }
})