// inputs
 let taskInput = document.querySelector("#taskInput");
 let dateInput = document.querySelector("#dateInput");
 let timeInput = document.querySelector("#timeInput")
 
//  btns
let addTaskBtn = document.querySelector("#addTaskBtn");


// display
let taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("entries"));

console.log(tasks)

let list = "";

if (tasks == null) {
    list = `<p id="warning">Please add tasks.</p>`;
} else {
    tasks.forEach((x) => {
        list += `<li>${x.taskInput} ${x.dateInput} ${x.timeInput}</li>`;
    })
}

taskList.innerHTML = list;
let addTask = () => {
    
    if  (tasks == null) {
        tasks = []
    }

    let task = {
        taskInput: taskInput.value,
        dateInput: dateInput.value,
        timeInput: timeInput.value
    }

tasks.push(task);
console.log(tasks);

localStorage.setItem("entries", JSON.stringify(tasks));

    if (tasks.length == 1) {
        let warning = document.querySelector("#warning");
        warning.style.display = "none";
    }
    
    // display tasks
    let item = document.createElement("li")
    item.innerHTML = `${task.taskInput} ${task.dateInput} ${task.timeInput}`;


    taskList.appendChild(item);
}

// events
addTaskBtn.addEventListener("click", addTask);