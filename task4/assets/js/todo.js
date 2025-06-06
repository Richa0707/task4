document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const tasks = getTasks();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';
    renderTasks();
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}