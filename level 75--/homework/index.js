// accesing the form, unordered list and edit button tags
const form = document.querySelector("form");
const ol = document.querySelector("ol");
const btn = document.getElementById("btn");

// counter variable to store id numbers
let counter = 0;

// delete function to delete a task with a secific id
function deleteTask(id) {
    const task = document.getElementById(id);
    ol.removeChild(task);
};

//edit function for editing a task with a specific id
function editTask(id) {
    let task = document.getElementById(id);
    let span = task.querySelector('span');

    let input = document.createElement("input");
    input.value = span.textContent;

    task.replaceChild(input, span);

    let save = document.createElement("button");
    save.textContent = "Save";

    task.appendChild(save);

    save.onclick = function () {
        span.textContent = input.value;
        task.replaceChild(span, input);
        task.removeChild(save);
    }
}

//adding event listener on add button, to add a new task in list
btn.addEventListener('click', function (e) {
    //prevnting the default reseting function, after clicking form submit button
    e.preventDefault();

    //creating list item for task 
    let task = form.task.value;
    let li = document.createElement("li");
    let span = document.createElement('span');
    span.textContent = task;
    li.appendChild(span);
    li.innerHTML += `
        <i class='bx bx-trash'></i>
        <i class='bx bx-edit-alt' ></i>
        <input type="checkbox">
    `

    //giving each list item an unique id, to be able delete and edit them separately
    li.id = `task-${counter}`;
    counter += 1;

    //appending the list item to the unordered list
    ol.appendChild(li);

    //clearing the input field, after creating the task
    form.task.value = "";

    //accesing the list item icons and adding to them event listeners
    const icons = li.getElementsByTagName("i");
    
    icons[0].addEventListener("click", function () {
        deleteTask(li.id)
    })

    icons[1].addEventListener("click", function () {
        editTask(li.id);
    })

    const check = getElementById("check");

})