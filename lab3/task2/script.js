const toDoForm = document.getElementById('todo-form');
const toDoInput = document.getElementById('todo-input');
const toDoList = document.getElementById('todo-list');

const createToDoElement = (text) => {
    const li = document.createElement('li');
    li.className = "todo-item";
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteButton = document.createElement('button');
    const trashIcon = document.createElement('img');

    trashIcon.src = "tr.jpg";
    trashIcon.className = "trash-icon";

    deleteButton.appendChild(trashIcon);

    deleteButton.className = "del-btn";
    deleteButton.addEventListener('click', () => {
        toDoList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    
    return li;
}

toDoForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const task = toDoInput.value.trim();

    if(task != ''){
        const needToDoTask = createToDoElement(task);
        toDoList.appendChild(needToDoTask);
        toDoInput.value = '';
        toDoInput.focus();
    }
})