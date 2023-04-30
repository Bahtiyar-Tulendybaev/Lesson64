// const list = document.querySelector('ul');
// list.addEventListener('dblclick', function (ev) {
//     if(ev.target.tagName === "LI") {
//         ev.target.classList.toggle('checked');
//         toLocal();
//
//     } else if(ev.target.tagName === "SPAN") {
//         const div = ev.target.parentNode;
//
//         div.remove();
//         toLocal()
//
//     }
// }, false);
//
// function newElement() {
//     const li = document.createElement('li');
//     const inputValue = document.getElementById('task').value;
//
//     const text = document.createTextNode(inputValue);
//     li.appendChild(text);
//
//     if(inputValue === "") {
//         alert("Введите вашу задачу!");
//     } else {
//         document.getElementById('list').appendChild(li);
//     }
//
//     document.getElementById('task').value = "";
//     toLocal();
// }
// let tasks;
//
// function toLocal() {
//     tasks = list.innerHTML;
//     localStorage.setItem('tasks', tasks);
// }






const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();


    const taskInput = document.querySelector('#task-input');
    const inputValue = taskInput.value;


    if(inputValue.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = inputValue;
        taskList.appendChild(newTask);


        taskInput.value = '';
        taskInput.focus();


        newTask.addEventListener('dblclick', function() {
            newTask.classList.toggle('checked');
        });
    }
});
