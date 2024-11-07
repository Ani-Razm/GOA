const form = document.querySelector("form");
const ol = document.querySelector("ol");

let counter = 0;

function deleteTask(id) {
    const item = document.getElementById(id);
    ol.removeChild(item);
};

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const input = form.task.value;
    const li = document.createElement("li");
    li.textContent = input;

    li.id = `task-${counter}`;

    li.onclick = function () {
        deleteTask(li.id)
    };

    counter++

    ol.appendChild(li)
})