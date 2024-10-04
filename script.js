document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Por favor, adicione uma tarefa!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(li);
    taskInput.value = ''; // Limpa o campo de entrada
}
