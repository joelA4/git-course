const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");

    addTaskButton.addEventListener("click", function() {
        let taskText = taskInput.value;

        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }
taskInput.value = ""; // Clear the input field
});

