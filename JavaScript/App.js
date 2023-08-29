document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
                <input type="checkbox" class="task-check">
                <span class="task-text">${taskText}</span>
                <button class="delete-task">Delete</button>
            `;
      taskList.appendChild(taskItem);
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-task")) {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
    } else if (event.target.classList.contains("task-check")) {
      const taskItem = event.target.parentElement;
      taskItem.classList.toggle("completed");
    }
  });
});
