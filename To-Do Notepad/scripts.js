// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "list-group-item";
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="btn btn-sm btn-success">Complete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-success")) {
            const taskItem = event.target.parentElement;
            taskItem.classList.add("completed");
            event.target.remove();
        }
    });
});
