// accessing elements
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const clearAllBtn = document.querySelector("#clearAllBtn");

// adding the event listeners on browser window and buttons
window.addEventListener('load', () => loadTasks());
addTaskBtn.addEventListener('click', () => addTask());
clearAllBtn.addEventListener('click', () => clearTasks());

// ---- creating functions ----

function loadTasks() {
    // getting task list from local storage and adding them on website
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTask(task)
    });
}

function addTask(task) {
    // creating elements
    const li = document.createElement('li');
    const text = document.createElement('span');
    const Removebtn = document.createElement('button');

    // changing elements text content
    text.textContent = taskInput.value || task;
    Removebtn.textContent = "remove";

    // adding elements on the website
    li.appendChild(text);
    li.appendChild(Removebtn);
    taskList.appendChild(li);

    // saving tasks at local storage
    saveTasks();

    // remove function
    Removebtn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });
}

function saveTasks() {
    // adding all tasks at website into the list and saving this list in the local storage
    let tasks = [];
    document.querySelectorAll("li span").forEach((task) => {
        tasks.push(task.textContent);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
    localStorage.clear();
    loadTasks();
    window.location.reload();
}