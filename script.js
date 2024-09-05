const taskInput = document.getElementById('task-input')
const addTaskbtn = document.getElementById('addTask-Btn')
const taskList = document.getElementById('task-list')

function addTask() {
  let taskText = taskInput.value.trim()
  if (taskText === ''){
    alert('YOU NEED TO INPUT A TASK TO ADD')
  } else {
    const taskItem = document.createElement('li')
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `${taskText}  <button class="remove-task">&#x2715</button>`
    taskList.append(taskItem);
    taskInput.value = '';
  }
}

function removeTask(event) {
  if(event.target.classList.contains('remove-task')) {
    event.target.parentElement.remove();
  }
}

function toggleTaskCompletion(event) {
  if (event.target.toggleTaskCompletion.contains('task-item')) {
    event.target.classList.toggle('completed');
  }
}

addTaskbtn.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask)
taskList.addEventListener('click', toggleTaskCompletion)
