document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add task when button is clicked
    addTaskBtn.addEventListener("click", addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        // Toggle completed on click
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Remove on double-click
        li.addEventListener("dblclick", function () {
            taskList.removeChild(li);
        });

        
        taskList.appendChild(li);
	taskInput.value = ""; 
          }
});
