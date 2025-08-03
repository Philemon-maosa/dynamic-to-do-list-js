document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // ✅ Correct variable used here
    addTaskBtn.addEventListener("click", addTask);

    // Pressing Enter adds task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Optional: run on load (e.g., for saved tasks)
    // addTask(); ← only use this if you want to load a default task

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

        taskLis
