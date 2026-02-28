// Load saved theme without flicker
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

let user = localStorage.getItem("student");
document.getElementById("welcome").innerText =
"Welcome " + user;

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <label>
                <input type="checkbox" 
                    ${task.done ? "checked" : ""} 
                    onchange="toggleTask(${index})">
                <span class="${task.done ? "completed" : ""}">
                    ${task.text}
                </span>
            </label>
        `;

        list.appendChild(li);
    });
}
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") return;

    tasks.push({
        text: taskText,
        done: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";

    showTasks();
    updateChart(tasks);
}

// ENTER key support for adding task
document.getElementById("taskInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
    updateChart(tasks);
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
    updateChart(tasks);
}

function toggleDark() {
    document.body.classList.toggle("dark");

    // save preference
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

showTasks();
updateChart(tasks);
let hour = new Date().getHours();

let greeting =
hour < 12 ? "Good Morning ☀" :
hour < 18 ? "Good Afternoon 🌤" :
"Good Evening 🌙";

document.getElementById("welcome").innerText =
greeting + ", " + user;
