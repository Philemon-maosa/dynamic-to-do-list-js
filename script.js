document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // In-memory array to track tasks
    let tasks = [];

    // Load and display saved tasks from localStorage
    loadTasks();

    // Event: Add task on button click
    addTaskBtn.addEventListener("click", addTask);

    // Event: Add task on Enter key press
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks from localStorage into the app
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = storedTasks; // sync array

        storedTasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create and display the task
        createTaskElement(taskText);

        // Update in-memory array and save
        tasks.push(taskText);
        saveTasks();

        // Clear input
        taskInput.value = "";
    }

    // Create a task list item in the DOM
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.style.marginLeft = "10px";

        // Handle remove click
        removeBtn.addEventListener("click", function () {
            taskList.removeChild(li);

            // Update the array and save
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        });

        // Optional: mark completed
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Save the current array to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
