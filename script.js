const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    input.value = "";
    input.focus();
}

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
