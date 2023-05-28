document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    let taskId = 0; // Initialize task ID counter
  
    addBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        taskId++; // Increment task ID
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.style.backgroundColor = getRandomColor();
  
        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('task-text');
        taskTextElement.textContent = `Task ${taskId}: ${taskText}`;
  
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
  
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
  
        taskInput.value = '';
      }
    }
  
    function deleteTask(e) {
      if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.closest('.task-item');
        taskList.removeChild(taskItem);
      }
    }
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
  
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
  
      return color;
    }
  });
  