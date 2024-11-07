//accesing Html elements
const form = document.querySelector("form");
const table = document.querySelector("table");
const submit = document.getElementById("submit");

//adding event listener to submit button
submit.addEventListener('click', function (e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    const url = form.url.value;

    data = [name, email, pass, url];

    const tr = document.createElement("tr");

    for(let i = 0; i < data.length; i++){
        const td = document.createElement("td");
        td.innerHTML = data[i];
        tr.appendChild(td);
    };

    const tbody = document.querySelector("tbody");
    tbody.appendChild(tr);
});