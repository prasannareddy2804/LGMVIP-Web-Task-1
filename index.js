const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-button" onclick="removeTask(this)">Delete</button>
  `;
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}

function toggleCompleted(taskItem) {
  taskItem.classList.toggle('completed');
}

taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const taskItem = event.target.parentElement;
    toggleCompleted(taskItem);
  }
});
