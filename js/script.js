const list = document.querySelector('ul');
list.addEventListener('dblclick', function (ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
        toLocal();

    } else if(ev.target.tagName === "SPAN") {
        const div = ev.target.parentNode;

        div.remove();
        toLocal()

    }
}, false);

function newElement() {
    const li = document.createElement('li');
    const inputValue = document.getElementById('task').value;

    const text = document.createTextNode(inputValue);
    li.appendChild(text);

    if(inputValue === "") {
        alert("Введите вашу задачу!");
    } else {
        document.getElementById('list').appendChild(li);
    }

    document.getElementById('task').value = "";
    toLocal();
}
let tasks;

function toLocal() {
    tasks = list.innerHTML;
    localStorage.setItem('tasks', tasks);
}
