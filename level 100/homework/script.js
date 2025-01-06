const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

let counter = 0;

window.addEventListener('load', () => loadTask());

addTaskBtn.addEventListener('click', () => addTask());

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    loadTask();
});

function saveTasks() {
    let tasks = [];
    for (let i = 0; i < document.querySelectorAll('span').length; i++) {
        tasks.push();
    };
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function addTask(task = '') {
    const taskText = task || taskInput.value;
    if (taskText.length > 0) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let Removebtn = document.createElement('button');
        span.textContent = taskText;
        Removebtn.textContent = 'Remove';
        li.id = `task-${counter}`
        counter++;
        li.appendChild(span);
        li.appendChild(Removebtn);
        taskList.appendChild(li);
        saveTasks();

        Removebtn.addEventListener("click", () => deleteTask(li.id));

        function deleteTask(id) {
            const li = document.getElementById(id);

            taskList.removeChild(li);

            // Update local storage
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks = tasks.filter(task => span.textContent !== task); // Remove task with matching id
            localStorage.setItem('tasks', JSON.stringify(tasks));

        }
    }
    taskInput.value = '';

};

function loadTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let i = 0; i < tasks.length; i++) {
        addTask(tasks[i]);
    };
};