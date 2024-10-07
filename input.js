button.addEventListener("click", () => {
    let name = document.getElementById("taski").value;
    let desc = document.getElementById("desc").value;
    let date = document.getElementById("date").value;
            
    let task = {
        name: name,
        desc: desc,
        date: date
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taski").value = '';
    document.getElementById("desc").value = '';
    document.getElementById("date").value = '';
});