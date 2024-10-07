let taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task, index) => {
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `
        <input type="checkbox" id="task_${index}"/>
        <div id="obox">
            <strong>Task:</strong> ${task.name}<br>
            <strong>Description:</strong> ${task.desc}<br>
            <strong>Due Date:</strong> ${task.date}
        </div>
        `;
        taskList.appendChild(taskDiv);
});

document.getElementById("submitButton").addEventListener("click", () => {
    let updatedTasks = [];

    tasks.forEach((task, index) => {
        if (!document.getElementById(`task_${index}`).checked) {
            updatedTasks.push(task);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    location.reload();
});