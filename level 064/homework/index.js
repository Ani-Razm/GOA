let form = document.getElementById("myform");

let database = []

function validateform() {
    if(form.elements.password.value.length < 8) {
            alert("password is too short");
    } else {
        const account = {
            name : form.elements.name.value,
            email : form.elements.email.value,
            password : form.elements.password.value,
        }

        database.push(account)

        console.log(database)
    } 
}

let sub_b = document.getElementById("sub");

sub_b.onclick = validateform