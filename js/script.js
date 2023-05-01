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
    }else
        alert("Введите вашу задачу!");
});






