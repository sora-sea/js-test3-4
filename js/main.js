'use strict'

{
  const addBtn = document.getElementById('btn');
  const newTask = document.getElementById('newtask');
  const taskList = document.getElementById('tasklist');
  const todos = [];

  const createStatusBtn = (task) => {
    const statusBtn = document.createElement('button');
    statusBtn.textContent = '作業中';
    task.appendChild(statusBtn);
    statusBtn.addEventListener('click', () => {
      if (statusBtn.textContent === '作業中') {
        statusBtn.textContent = '完了';
      } else {
        statusBtn.textContent ='作業中';
      }
    });
  };
  
  const createDeleteBtn = (task, index) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    task.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      displayTodos(todos);
    });
  };

  const displayTodos = (array) => {
    taskList.innerText = '';
    array.forEach((el, index) => {
      const task = document.createElement('tr');
      taskList.appendChild(task);
      const taskId = document.createElement('td');
      const taskComment = document.createElement('td');
      taskId.textContent = index;
      taskComment.textContent = el.task;
      task.appendChild(taskId);
      task.appendChild(taskComment);
      createStatusBtn(task);
      createDeleteBtn(task, index);
    });
  };
  
  addBtn.addEventListener('click', () => {
    const todo = {
      task: newTask.value,
      status: '作業中'
    };
    todos.push(todo);
    displayTodos(todos);
    newTask.value = '';
  });
}