const body = document.querySelector("body");
const tittle = document.createElement("h1");
const divCreate = document.createElement("div");
const typeTask = document.createElement("h2");
const form = document.createElement("form");
const inputTask = document.createElement("input");
const divBtn = document.createElement("div")
const btnAdd = document.createElement("button");
const btnDelete = document.createElement("button");
const divTasks = document.createElement("div");
const Task = document.createElement("p")

body.appendChild(tittle);
body.appendChild(divCreate);
divCreate.appendChild(typeTask);
divCreate.appendChild(form);
divCreate.appendChild(divBtn)
form.appendChild(inputTask)
divBtn.appendChild(btnAdd);
divBtn.appendChild(btnDelete);
body.appendChild(divTasks)
divTasks.appendChild(Task)

tittle.innerText = "ToDo App"
typeTask.innerText = "Type a new to-do:"
btnAdd.innerHTML = "<button>Add</button>"
btnDelete.innerHTML = "<button>Clear</button>"

// const createTask= () => {
//     let newTask= Task.innerText =inputTask.value
    
//     return newTask

// }

// console.log(body);

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputTask.value === '') return; // para que no haya strings vacios
    const task = document.createElement("p");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    task.innerText = inputTask.value;
    task.appendChild(deleteBtn);
    divTasks.appendChild(task);
    inputTask.value = '';

    // Boton delete
    deleteBtn.addEventListener('click', () => {
        divTasks.removeChild(task);
    });
});

// boton clear
btnDelete.addEventListener('click', () => {
    divTasks.innerHTML = '';
});